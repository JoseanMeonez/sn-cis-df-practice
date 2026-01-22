"""
PDF to Markdown Converter with ASCII Diagrams
Converts PDF files from sn-docs/ to markdown format in sn-docs-md/
"""

import os
import re
from pathlib import Path
import fitz  # pymupdf
from PIL import Image
import io


def image_to_ascii(image_bytes, width=60):
    """Convert image to ASCII art representation."""
    try:
        img = Image.open(io.BytesIO(image_bytes))

        # Convert to grayscale
        img = img.convert('L')

        # Calculate height to maintain aspect ratio
        aspect_ratio = img.height / img.width
        height = int(width * aspect_ratio * 0.5)  # 0.5 for character aspect

        # Resize image
        img = img.resize((width, height))

        # ASCII characters from dark to light
        ascii_chars = '@%#*+=-:. '

        # Convert pixels to ASCII
        ascii_lines = []
        for y in range(height):
            line = ''
            for x in range(width):
                pixel = img.getpixel((x, y))
                char_index = int(pixel / 256 * len(ascii_chars))
                char_index = min(char_index, len(ascii_chars) - 1)
                line += ascii_chars[char_index]
            ascii_lines.append(line)

        return '\n'.join(ascii_lines)
    except Exception as e:
        return f"[Image conversion failed: {e}]"


def describe_image(img_info, page_num):
    """Generate a text description for an image."""
    width = img_info.get('width', 0)
    height = img_info.get('height', 0)

    # Determine image type based on aspect ratio and size
    if width > 0 and height > 0:
        aspect = width / height
        if aspect > 2:
            img_type = "banner/header image"
        elif aspect < 0.5:
            img_type = "vertical diagram or sidebar"
        elif width > 400 and height > 300:
            img_type = "diagram or flowchart"
        elif width < 100 and height < 100:
            img_type = "icon or small graphic"
        else:
            img_type = "figure or illustration"
    else:
        img_type = "embedded image"

    return f"*[{img_type.title()} - Page {page_num + 1}, {width}x{height}px]*"


def extract_text_blocks(page):
    """Extract text blocks with position info for better structure detection."""
    blocks = page.get_text("dict")["blocks"]
    text_content = []

    for block in blocks:
        if block["type"] == 0:  # Text block
            block_text = ""
            for line in block.get("lines", []):
                line_text = ""
                max_size = 0
                is_bold = False

                for span in line.get("spans", []):
                    line_text += span.get("text", "")
                    size = span.get("size", 12)
                    if size > max_size:
                        max_size = size
                    if "bold" in span.get("font", "").lower():
                        is_bold = True

                line_text = line_text.strip()
                if line_text:
                    # Detect headings based on font size
                    if max_size >= 18:
                        line_text = f"# {line_text}"
                    elif max_size >= 14:
                        line_text = f"## {line_text}"
                    elif max_size >= 12 and is_bold:
                        line_text = f"### {line_text}"

                    block_text += line_text + "\n"

            if block_text.strip():
                text_content.append(block_text.strip())

    return text_content


def clean_markdown(text):
    """Clean up markdown text."""
    # Remove excessive blank lines
    text = re.sub(r'\n{3,}', '\n\n', text)

    # Fix broken sentences (lines ending without punctuation)
    lines = text.split('\n')
    cleaned_lines = []

    for i, line in enumerate(lines):
        line = line.strip()
        if not line:
            cleaned_lines.append('')
            continue

        # Skip headings
        if line.startswith('#'):
            cleaned_lines.append(line)
            continue

        cleaned_lines.append(line)

    return '\n'.join(cleaned_lines)


def process_single_pdf(pdf_path, output_path):
    """Process a single PDF file and convert to markdown."""
    doc = fitz.open(pdf_path)
    markdown_content = []
    image_count = 0

    # Add title from filename
    filename = Path(pdf_path).stem
    markdown_content.append(f"# {filename}\n")
    markdown_content.append(f"*Source: {Path(pdf_path).name}*\n")
    markdown_content.append("---\n")

    for page_num in range(len(doc)):
        page = doc[page_num]

        # Add page separator for multi-page documents
        if page_num > 0:
            markdown_content.append(f"\n---\n*Page {page_num + 1}*\n")

        # Extract text with structure
        text_blocks = extract_text_blocks(page)
        for block in text_blocks:
            markdown_content.append(block + "\n")

        # Extract images
        images = page.get_images(full=True)
        for img_index, img in enumerate(images):
            try:
                xref = img[0]
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]

                img_info = {
                    'width': base_image.get('width', 0),
                    'height': base_image.get('height', 0)
                }

                # Skip very small images (likely icons or bullets)
                if img_info['width'] < 50 or img_info['height'] < 50:
                    continue

                image_count += 1

                # Add text description
                description = describe_image(img_info, page_num)
                markdown_content.append(f"\n{description}\n")

                # Add ASCII art representation
                ascii_art = image_to_ascii(image_bytes)
                markdown_content.append(f"\n```\n{ascii_art}\n```\n")

            except Exception as e:
                markdown_content.append(f"\n*[Image extraction failed: {e}]*\n")

    doc.close()

    # Combine and clean markdown
    final_content = '\n'.join(markdown_content)
    final_content = clean_markdown(final_content)

    # Write output file
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(final_content)

    return image_count


def main():
    """Main function to process all PDFs."""
    input_dir = Path("sn-docs")
    output_dir = Path("sn-docs-md")

    # Create output directory
    output_dir.mkdir(exist_ok=True)

    # Get all PDF files
    pdf_files = sorted(input_dir.glob("*.pdf"))
    total_files = len(pdf_files)

    print(f"Found {total_files} PDF files to convert\n")
    print("=" * 60)

    successful = 0
    failed = 0
    total_images = 0

    for index, pdf_path in enumerate(pdf_files, 1):
        try:
            output_filename = pdf_path.stem + ".md"
            output_path = output_dir / output_filename

            print(f"[{index}/{total_files}] Processing: {pdf_path.name}...")

            image_count = process_single_pdf(str(pdf_path), str(output_path))
            total_images += image_count

            print(f"[{index}/{total_files}] Completed: {output_filename} ({image_count} images converted)")
            successful += 1

        except Exception as e:
            print(f"[{index}/{total_files}] FAILED: {pdf_path.name} - Error: {e}")
            failed += 1

    print("\n" + "=" * 60)
    print(f"Conversion Complete!")
    print(f"  Successful: {successful}/{total_files}")
    print(f"  Failed: {failed}/{total_files}")
    print(f"  Total images converted: {total_images}")
    print(f"  Output directory: {output_dir.absolute()}")


if __name__ == "__main__":
    main()

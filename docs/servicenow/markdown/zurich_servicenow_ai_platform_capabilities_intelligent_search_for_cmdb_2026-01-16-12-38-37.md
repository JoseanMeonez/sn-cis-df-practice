# zurich_servicenow_ai_platform_capabilities_intelligent_search_for_cmdb_2026-01-16-12-38-37

*Source: zurich_servicenow_ai_platform_capabilities_intelligent_search_for_cmdb_2026-01-16-12-38-37.pdf*

---

# Zurich ServiceNow AI
# Platform Capabilities

Last updated: January 16, 2026

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in
the United States and/or other countries. Other company and product names may be trademarks of the respective companies with which
they are associated.

Zurich ServiceNow AI Platform Capabilities

---
*Page 2*

Some examples and graphics depicted herein are provided for
illustration only. No real association or connection to ServiceNow
products or services is intended or should be inferred.

This PDF was created from content on docs.servicenow.com. The web
site is updated frequently. For the most current ServiceNow product
documentation, go to docs.servicenow.com.

Company Headquarters
2225 Lawson Lane
Santa Clara, CA 95054
United States
(408)501-8550

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

2

Zurich ServiceNow AI Platform Capabilities

---
*Page 3*

## Intelligent Search for CMDB

Use everyday natural language query (NLQ) in a search string to query
for a set of CIs in the CMDB. Intelligent Search for CMDB, parses, resolves
ambiguities, and converts your search string into a valid CMDB query.
Complex search strings open fully constructed on a canvas of CMDB
Query Builder where you can continue and refine, or run.

Intelligent Search for CMDB is supported only on English language
instances and isn't supported when the instance preferred language is
set to a language other than English.

Integration with CMDB Workspace

Intelligent Search for CMDB is integrated into Home view in the CMDB
Workspace store app. For more information, see:

• Home view in CMDB Workspace (Intelligent Search section) for details
about how to use Intelligent Search, sample search strings, and helpful
tips.

• CMDB Workspace for additional details about CMDB Workspace.

Integration with CMDB Query Builder

Intelligent Search for CMDB is integrated with the CMDB Query Builder in
the ServiceNow AI Platform. This integration is controlled by the system
property glide.cmdb.query.nlq.activated, which is set to true by default.
Intelligent Search for CMDB lets you use natural language processing in
the CMDB Query Builder to find CIs and their relationships using Intelligent
Search for CMDB functions.

Using Intelligent Search for CMDB

Intelligent Search is tailored to the CMDB, searching only through the
CMDB class hierarchy for tables, and for CIs and their relationships.

Use the Intelligent Search search field to construct a search string
using everyday natural language. Your queries can span multiple
CMDB classes and involve many CIs that are connected by different
relationships. After resolving any ambiguities with table names or
relationship types, Intelligent Search converts your search string into
a query that the CMDB can run. The CMDB query is constructed

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

3

Zurich ServiceNow AI Platform Capabilities

---
*Page 4*

dynamically as you type into the search box and spell checker is applied
if needed. A dynamic list of relevant suggestions appears as you type,
with items such as table names, matching single words or part phrases in
the typed-in text.

Use Intelligent Search:

• Search tips: Shows details and tips about the usage, and examples for
single and multi-table search, advanced filtering, and relationships in
Intelligent Search. The Relationships tab contains a link to the CMDB
Implicit Relationships table.

•

Search: Depending on whether the search string is already fully
converted into a valid CMDB query and whether the search is for a
single or multiple tables.

•

If the search string has no ambiguities with the table name or
relationships, then the query runs and the results appear in a list view
format.

If the constructed CMDB query contains more than a single table,
then the View in Query Builder button appears. Click the button to
open the CMDB Query Builder with your query fully constructed on
the Query Builder canvas. You can use the Query Builder to continue
editing the query.

• If there are any ambiguities with table names or relationship types
in the search string, then the search string can't be converted into
a valid CMDB query. In this case, the Refine your query dialog box
appears to continue and parse your search string into a valid CMDB
query. The dialog box contains suggested synonyms and labels for
phrases in your search string. Use the drop-down lists to select the
synonyms that match your intended search and then click Go to run
the query.

• If Intelligent Search is unable to convert your search string into a
valid CMDB query, then clicking Search does not generate any query
results. Instead, a feedback form appears. Fill out the form and click
Submit Feedback to send your feedback to ServiceNow analysis.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

4

Zurich ServiceNow AI Platform Capabilities

---
*Page 5*

• Results Feedback: Submit feedback to ServiceNow analysts, to express
your assessment of the results. Choose descriptions that capture any
gap between the results and your expected results, and add any
helpful details.

Sample searches

When you click the search box, the drop-down list of pre-defined
sample searches appears. The list consists of more common searches, or
searches that are more difficult to construct such as searches that involve
application services. Run any of those searches to get started.

• Sample searches are stored in the NLQ Sample Search
[sn_cmdb_ws_nlq_sample_search] table

• Referenced tables are stored in the NLQ Sample Search Table
[sn_cmdb_ws_nlq_sample_search_table] table

CMDB Admins (sn_cmdb_admin user role) can modify a sample
search by directly editing its record in the NLQ Sample
Search table. Click All and then in the Filter navigator, enter
sn_cmdb_ws_nlq_sample_search.list. In the NLQ Sample Searches
list view edit the record for a search that you want to modify.

Any modification to sample searches is reflected in both, the CMDB
Workspace and the CMDB Query Builder.

Synonyms

The NLQ Synonym [nlq_synonym] table is pre-populated with synonyms
for natural language strings for CMDB table and column names, and
relationships. This table is used to match natural language search words
to the CMDB query language. For example, the phrase ‘linux server’ has
synonyms such as ‘Linux Server’, ‘Server’, and ‘Virtual Machine Instance’.

For details about viewing and adding synonyms customized to your
business needs, see NLQ synonyms.

CMDB Implicit Relationships

You can help Intelligent Search find more results by defining some of the
relationships between classes as implicit relationships. Implicit relationships
can be useful in queries that involve service offering and application
services.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

5

Zurich ServiceNow AI Platform Capabilities

---
*Page 6*

NLQ admins can create new implicit relationships by navigating to All >
NLQ > CMDB Implicit Relationships.

An implicit relationship defines the relationship between two tables
and includes any filters you want to apply. When creating an implicit
relationship, you set the following items:

• From table (from_table): The class that acts as the parent

• Filters: Conditions that are applied to the columns of the from_table

• To table: The class that acts as the child

• Relationship: How the from_table interacts with the to_table. For
example, Contains: Contained by means the from_table contains the
to_table

• Skipped table: The class that is implied and not captured by the CMDB
Query Builder

For example, in CMDB Query Builder, you want to see your service
offerings that have had a P1 incident in the last 10 days. However, if
you were to type show me all business service offerings with
p1 incidents in the last 10 days, NLQ wouldn't understand the
relationship.

Implicit relationships are stored in the NLQ CMDB Implicit Relationship
[nlq_cmdb_implicit_relationship] table and are used in the CMDB
Workspace and if integrated, also in CMDB Query Builder.

For more information about NLQ in the ServiceNow AI Platform, see
Natural Language Query (NLQ).

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

6

Zurich ServiceNow AI Platform Capabilities

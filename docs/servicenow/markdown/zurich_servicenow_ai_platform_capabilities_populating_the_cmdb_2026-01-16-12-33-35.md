# zurich_servicenow_ai_platform_capabilities_populating_the_cmdb_2026-01-16-12-33-35

*Source: zurich_servicenow_ai_platform_capabilities_populating_the_cmdb_2026-01-16-12-33-35.pdf*

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

## Populating the CMDB

You can populate the CMDB by using Discovery, by using the
IntegrationHub ETL or Import Sets to import and integrate data from a
third-party source, by integrating with an external CMDB, or by manually
creating CIs.

When you populate the CMDB with information, you create a record for
each configuration item in the cmdb_ci table or on one of the tables
that extend that table.

Related ServiceNow® Store apps and reference information:

• CMDB schema model: A collection of class diagrams and class
attributes for key CMDB classes.

• CMDB tables descriptions: Descriptions of key CMDB tables in the base
system.

• CMDB CI Class Models: A ServiceNow Store app that adds class
models that extend the base CMDB class hierarchy. This includes
class descriptions, identification rules, identifier entries, and dependent
relationships if applicable. You can then use the added classes as any
other CMDB base class.

• Discovery patterns: A ServiceNow Store app that provides a library of
Discovery patterns for discovering specific devices and applications in
the industry.

• Getting started with Service Graph Connectors: ServiceNow Store apps
that provide pre-defined integrations for importing and integrating
common third-party data into CMDB classes. Also includes the
IntegrationHub ETL wizard for creating new ETL transform maps.

ITIL configuration management auto-discovery

The key to any configuration management business practice is the initial
and on-going inventory or discovery of what you own. The ServiceNow
platform provides three options for auto-discovery:

• The separate and highly robust Discovery product.

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

• For organizations that want to leverage the discovery technologies they
already have deployed (SMS, Tally NetCensus, LanDesk, and so on),
the ServiceNow platform supports integrations to those technologies via
web services. Scanned data can be mapped directly into the CMDB.

For further information on designing, constructing, and maintaining the
CMDB, see the CMDB Design & Configuration white paper.

Discovery

The Discovery product automatically populates the CMDB. Discovery
searches the network for all attached computers and devices, then
populates the CMDB with information on each computer/device's
configuration, provisioning, and current status. Discovery uses probes,
sensors, and patterns, to collect and process data about computers,
servers, printers, a variety of IP-enabled devices, and the relationships
between all the items found. Discovery also reports on any software
which is running, and the TCP connections between computer systems,
thereby establishing their relationships. This information is sent back to the
instance and is used to populate the CMDB.

For more information about Discovery see:

• ITOM Visibility

• Discovery basics

Integrate third-party data using IntegrationHub ETL

Use the IntegrationHub ETL to import and integrate data from a
third party into the CMDB. Using IntegrationHub ETL, create ETL
transform maps which are used for integrating data from specific data
sources. IntegrationHub ETL guides you through importing source data,
transforming any data if needed, and selecting target CMDB classes and
attributes to map the data to. You then preview the integration results
and adjust any configurations before scheduling recurring integrations.

Visit the ServiceNow Store website to view and download common
integrations.

Import data from another source using Import Sets

You can import data to the CMDB using Import Sets. Import sets find files
of information (in formats such as XML, Excel, or CSV), import them, and

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

transform them onto the required table. This process can be scheduled or
performed on demand.

To import relationships between CIs, use import sets to populate the
table [cmdb_rel_ci] with information on the parent, the child, and the
nature of the relationship. The [cmdb_rel_ci] table displays a list of all CI
relationships and is useful when importing CI data.

Import Sets overview

CMDB instance API

Use the CMDB instance API to populate the CMDB by creating or
updating CMDB tables.

Manually create a CI

Create a single CI for a specific class in CMDB Workspace or in Core UI.
The role required for this operation depends on the settings of the class
table you select for the CI.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

5

Zurich ServiceNow AI Platform Capabilities

*[Figure Or Illustration - Page 5, 369x372px]*

```
.::::::::::::::::::::::::::.
:++++++++++++++++++++++++++++:
=++++++======+++-======++++++=
=+++++++++==+++++=+++++++++++=
=+++-====+=====-+========-+++=
:++++++++++++++++++++++++++++:
............-=............
..
.:. ..:..::::.
::
++
.=+++++++++++++++++++++++++++.
=*++=========+====+=======++*=
=+++========+++===++======++++::::::::...:.
=++++++++============++++++++=           .-
-*++++++++++++++++++++++++++*-   .. ....:: ..:..:.....:::.
:------------++------------:            .:             .
::              .::::::::::+#:::::::::::::.
. .:.. .....::...     +***************************+
.  ........      .****+++****++******+++*******.
:++:::::::::::-*+**+=============+=====+****.
::            .*****+++++++++++++*+*+++*****.
::             =***************************=
............++............  ...........................
.++++++++++++++++++++++++++++.
=++++++====+===+======+++++++=
=+++++++====-==++======++++++=
=++++=====+=========+====++++=
:*++++++++++++++++++++++++++*-
.--------------------------.
```

---
*Page 6*

You can also manually create a CI while leveraging Identification and
Reconciliation Engine (IRE) processes to ensure that the new CI complies
with various class requirements and that it's unique. For more information,
see Create a CI manually in CMDB Workspace.

1. Use the CI Class Manager:

a. Navigate to All > Configuration > CI Class Manager.

b. Select Hierarchy to display the list of CI Classes. Select the class
to use for the CI.

c. In the class navigation bar, select CI List and then on the CI list
view, select New.

d. Fill out the CI form and then select Submit.

2. Or, manually create a CI while leveraging Identification and
Reconciliation Engine (IRE) processes to ensure that the new CI
complies with various class requirements and that it's unique. For
more information, see Create a CI manually in CMDB Workspace.

3. Or, directly use a table:

a. Navigate to All > Configuration and then elect the class to use for
the CI, such as Business Services.

b. In the navigation filter of the application navigator, enter the
table label (such as 'Linux'), or the table name in the format of
<table name>.list (such as 'cmdb_ci_linux_server.list'). Then, press
Enter.

c. In the list view of the table, select New and fill out the form fields
for the table.

d. Select Submit.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

6

Zurich ServiceNow AI Platform Capabilities

# zurich_servicenow_ai_platform_capabilities_cmdb_query_builder_2026-01-16-12-43-42

*Source: zurich_servicenow_ai_platform_capabilities_cmdb_query_builder_2026-01-16-12-43-42.pdf*

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

## CMDB Query Builder

The CMDB Query Builder enables you to build complex infrastructure and
service queries that span multiple CMDB classes, non-CMDB tables, and
that involve many CIs that are connected by different relationships.

Get started

Explore
Build
complex infrastructure
and service queries.

Configure

Configure
settings and properties

Build a CMDB query

Construct
the classes, and
the relationships
and references that
connect them, to
query on.

Build a Service
Mapping query

Construct
the pattern of classes
and their relationships
to query Service
Mapping services on.

Run a partial query

Run only a
section of a query for
a quick validation.

Schedule a query

Schedule a
saved query to run
once at a scheduled
time or on a recurring
schedule, and to
email the query results
to users.

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

Create a report

Create a
basic report, or a
dynamic report that
continuously updates
with the latest query
results and add it to
Performance Analytics
dashboards.

Export or
import queries

Export and
then import and run a
saved query definition
between instances,
such as between
a development
and a production
environment.

Reference

Reference
topics provide
example queries
and descriptions
of navigation
and property settings.

Troubleshoot and get help

• For tips and basic troubleshooting, see CMDB Query Builder
[KB0681251].

• KB0546686: CMDB Resources Page

• Search the Known Error Portal for known error articles

• Contact Customer Service and Support

## Exploring CMDB Query Builder

The CMDB Query Builder enables you to build complex infrastructure and
service queries that span multiple CMDB classes, non-CMDB tables, and
that involve many CIs that are connected by different relationships.

The CMDB Query Builder provides a canvas into which you drag the CI
classes that you want to include in a query. Then you add relationships,
AND/OR operators between the CI classes, and define the relationship
properties to query for. You can use saved queries to populate a CMDB
group with CIs, and then use scriptable APIs to retrieve the CI list and
apply actions collectively to all the CIs in the group.

There are two query types: CMDB Query and a Service Mapping query,
which you can use separately or in combination to create queries such
as:

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

• All hardware in my service offering that has Windows installed.

• All CIs of a certain type in an application service. For example, all
Apaches/Web Servers/Linux servers per service.

• All virtual servers and the physical servers that host them.

• All servers that are not mapped to any application service.

• All application services and their associated servers and the cost of
each server. This query helps evaluate the cost of technology for each
application service.

Starting node: The starting point of the query which is labeled as
STARTING NODE on the Query Builder canvas. The first class that you drag
to the canvas becomes automatically the starting node of the query
and you cannot select a different starting node. In a complex query, the
starting node must always be the only node connected to an AND/OR
operator. If you try to connect a second node to an operator that the
starting node is connected to, the query fails to run and a prompt to
select a different starting node appears.

Additional information

For a webinar, see CMDB Query Builder Queries and Reporting - Platform
Analytics Academy blog post in the ServiceNow Community.

Intelligent Search for CMDB integration

By default, Intelligent Search for CMDB functionality is integrated into the
CMDB Query Builder. When opening the Query Builder, you can use the
Intelligent Search search box which appears above the Query Builder
canvas. Intelligent Search lets you use everyday natural language query
(NLQ) to build a query. Intelligent Search parses, resolves any ambiguities
in table names and relationship types, and then converts your search
string into a valid query. The query appears fully constructed on the
Query Builder canvas where you can run or continue and develop the
query.

The integration of Intelligent Search for CMDB with the
CMDB Query Builder is controlled by the system property
glide.cmdb.query.nlq.activated, which is set to true by default. If you set
the property to false, Intelligent Search for CMDB will not be available
within the Query Builder.

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

AI Search and CMDB

NLQ Genius Results for AI Search use natural language queries to
find CMDB tables that match your search without leaving a portal or
workspace. For more information, see NLQ Genius Results.

Note:   AI Search is a complementary search experience that
allows you to surface CMDB records in your normal flow of work,
without having to access the CMDB Query Builder. It doesn't replace
intelligent Search for CMDB, which is purpose-built and integrated
into CMDB Query Builder.

CMDB Query

A query type that queries the infrastructure for CI classes and the
relationships and references that connect them. You can optionally add
the context of non-CMDB tables to a CMDB query.

You can include Application services in a CMDB query, to find, for
example:

• All critical application services in your database.

• All infrastructure in a particular application service.

• All incidents for a particular CI in an application service, or all incidents
for all the CIs of an application service.

• All application services with a pattern of a service connected to a
database, and where the database has incidents.

The list of available non-CMDB tables includes a subset of tables
within the system, which have a reference to the Configuration Item
[cmdb_ci] class or its children. The list of non-CMDB tables, includes
tables such as Asset, Task, and Problem. You can use the system property
glide.cmdb.query.non_cmdb.black_listed_tables to narrow down the list
of non-CMDB tables to choose from.

Service Mapping Query

A query type that queries application services. The query is framed
within an application service map. You define a pattern, and query
for application service maps that have that pattern in their definition.
The relationships in Service Mapping queries are matched by single-level
direct relationships which is similar to the CMDB queries, and in addition,

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

6

Zurich ServiceNow AI Platform Capabilities

---
*Page 7*

they are also matched by multi-level indirect relationships if they exist.
A query for a relationship between two CI classes is satisfied even if the
two CI classes are connected by intermediate CI classes that are not
specified in the query.

Combination Query

You can combine the two query types by incorporating a saved Service
Mapping query into a CMDB query. For example, create a CMDB
query for Windows Servers that are connected to Tomcat WAR. Then
connect the Tomcat WAR CI class to a Service Mapping query. The
query changes to find Windows Servers that are connected to Tomcat
WAR which is included in the services that returned by the Service
Mapping query. You can inverse that query by choosing Does Not Belong
To Service. This changes the query to find Windows Servers that are
connected to Tomcat WAR that is not included in services returned by
the Service Mapping query.

Related concepts

• CMDB groups

## Configuring CMDB Query Builder

You can configure settings that affect some functionality of the CMDB
Query Builder.

Configuration overview

Configure CMDB Query Builder settings

Configure settings that control the appearance and operation of the
CMDB Query Builder canvas.

Configure the relationships to query on

Configure relationships between CIs, such as the parent/child (direction)
relationship or first- or second-level relationships.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

7

Zurich ServiceNow AI Platform Capabilities

---
*Page 8*

Configure batch size for queries

If necessary, override the default global batch size (100) that is allocated
for every Query Builder query run. Or, optimize the batch size value per
saved query.

Set execution mode for running a query

Set the query execution mode for running a query, to use either the
legacy engine or an performance-enhancing engine.

## Configure CMDB Query Builder settings

Configure settings that control some of the functionality of the CMDB
Query Builder.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Configuration > CMDB Query Builder.

2. On the CMDB Query Builder page, select the Settings icon (

)
and then configure the settings.

Setting
Description

Display Relationships in Results
Display the relationship between
CIs in the query results.

Display Suggested Connections

This setting applies only to CMDB
queries.

Filter the CMDB classes and the
non-CMDB tables lists in the side-
panel to display only classes and
tables with which the selected

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

8

Zurich ServiceNow AI Platform Capabilities

---
*Page 9*

Setting
Description

node on the canvas has a
relationship.

You can then drag any item
from the filtered list to the canvas
and connect it to the selected
node on the canvas.

Display Results in New Tab

Display query results in a
separate browser tab titled
Query Results.

3. Select the Settings icon again to close the dialog box.

## Configure the relationships to query on

Configure the type of relationships that you want to query for in
CMDB Query Builder. For example, configure which CI on the canvas
is the parent and which is the child in the relationship or the level of
relationships to query on.

Before you begin

Role required: cmdb_query_builder_read

About this task

When you connect CI classes on the canvas, the CMDB Query Builder
displays the Connection Properties in the right-side bar, where you can
configure the properties of the relationship to query on. For Service
Mapping queries, you can also configure whether to query for related
or unrelated CIs.

Note:   Newly added relationships between CI classes might take up
to 30 minutes to appear in the relationship list.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

9

Zurich ServiceNow AI Platform Capabilities

---
*Page 10*

Procedure

1. While adding CIs to the canvas, select a connection box on a CI
and then select the connection box on another CI that you want to
create a relationship with.

2. Configure the relationship properties in the Connection Properties
side-bar.

Section
Field
Description

Relationship Direction

Parent

Child

Set the relationship
direction. Which CI
class is the parent
and which CI class
is the child in the
relationship.

Relationship Levels
Level

Query only on first-
level relationship or
also on second-level
relationships.

Relationship Types
and Related Items
No Relationships

Select to query for
CIs which have no
relationships to the
set class.

Relationship Types
and Related Items

Select Add
Relationship Types

Query for CIs
and descending
classes with specific
relationship types.

Relationship Types
and Related Items

Select Add a Related
Item

Query on related CIs
using a field that the
parent and ancestor
parent CI classes
use to reference the
child CI class.

3. Select Save.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

10

Zurich ServiceNow AI Platform Capabilities

---
*Page 11*

Related concepts

• CMDB groups

## Batch size for CMDB Query Builder queries

In a base system, a global batch size of 100 is allocated for every Query
Builder query run. If needed, you can use a system property to override
the default global batch size, or optimize the batch size value per saved
query.

Queries can differ widely as they can be configured to query a wide
variety of classes. Therefore, the batch size in the base system might not
be optimal for every query, and some queries might time out or take
a long time to complete. The optimal batch size for running queries
depends on system load such as amount of data and number of
relationships in your system. Contact Support for assistance in calculating
the batch size for your query.

Batch size is applicable and behaves the same in all query run scenarios,
regardless of how the run was initiated:

• Query Builder user interface (ad hoc or saved query)

• Query Builder Scriptable API

• Scheduled jobs

• CMDB groups

The batch size for query runs is allocated in the following priority order:

1. The value in the Execution Batch Size field in the Saved Queries table,
for a specific saved query. If set, this value applies only to the saved
query, and has priority over the global value of 100 and the value of
the glide.cmdb.query.batch_size system property.

2. The value of the system property glide.cmdb.query.batch_size, if
exists, determines globally the batch size that is allocated to all query
runs. If you add and set this property, the value applies to all queries,
other than saved queries with Execution Batch Size value set.

3. A global value of 100, if the previous two options are not configured.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

11

Zurich ServiceNow AI Platform Capabilities

---
*Page 12*

Modifying batch size for queries

If you are experiencing performance problems when running queries, you
can modify the batch size value:

• Globally for all queries: By adding (if necessary) and setting the value of
the system property glide.cmdb.query.batch_size.

• Per saved query: Set batch size for a specific saved query

Set batch size for a specific saved query

Configure a custom batch size for a CMDB Query Builder saved query
that takes a long time to complete or that times out. A custom batch size
overrides the global batch size in the base system and the value of the
glide.cmdb.query.batch.size system property.

Before you begin

Role required: admin

About this task

Contact Support for assistance in calculating the batch size for your
query.

Procedure

1. In the Filter navigator, enter qb_saved_query.list and press Enter
to navigate to the Saved Queries table.

2. In the Saved Queries list view, locate the saved query for which you
want to change batch size.

3. Set or modify the value in the Execution Batch Size field.
Set the value to be greater than the global value in the
glide.cmdb.query.batch.size property, or increase any existing value.

## Set execution mode for running a query

Configure the execution mode to use when running a saved query.
The execution mode setting determines whether the query runs using a
performance-enhancing engine or the legacy engine.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

12

Zurich ServiceNow AI Platform Capabilities

---
*Page 13*

Before you begin

Role required: cmdb_query_builder

About this task

A saved query can run in either of the following execution modes:

• v1: Runs the query using the legacy query execution engine.

• v2: Runs the query using an enhanced query execution engine, which is
designed for improved performance and scalability.

Note:   When running queries that contain OR nodes, the format of
the returned results is different between the options.

The system uses query-level settings and system properties to determine
which mode to use, as follows:

1. Check the query setting in the Query Execution Mode attribute in the
Saved Queries [qb_saved_query] table:

• If 'v1' or 'v2': Use the specified value.

• If 'None': Check system properties as described in the next step.

2. Check system property glide.cmdb.query.execution_mode:

• If 'v1', null, or empty: Use v1

•

If 'v2': Perform 'OR'-specific evaluation:

If the query contains one or more logical OR conditions:

• Check the value of glide.cmdb.query.or_execution_mode:

• If 'v1' or 'v2': Use that value

• If empty: Use v1

• If the query contains no OR conditions: Use v2

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

13

Zurich ServiceNow AI Platform Capabilities

---
*Page 14*

For more information about the glide.cmdb.query.execution_mode
and the glide.cmdb.query.or_execution_mode system properties, see
Property settings for CMDB Query Builder.

Procedure

1. Navigate to All and then, in the navigation filter, enter
qb_saved_query.list to open the Saved Queries table.

2. In the Saved Queries list view, select the query for which you want to
set execution mode.

3. On the query's form, set Query Execution Mode to 'v1' or 'v2'.

4. Select Update.

## Navigation in CMDB Query Builder

Use the navigation tools to enlarge or shrink the query, to move the
query, or to border a section of the query to run.

Use the buttons in the navigation tool

as follows:

• Use the plus sign (+) to increase magnification of the query.

• Use the minus sign (-) to decrease magnification of the query.

• Select the center dot to center the query on the canvas.

• Use the direction arrows to move the query in that direction.

• Use the selection tool under the navigation tool to toggle between two
states:

• Moving the entire query on the canvas.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

14

Zurich ServiceNow AI Platform Capabilities

*[Vertical Diagram Or Sidebar - Page 14, 59x128px]*

```






.=+=:
.=+=-=+=:
.=+=:   .=+=.
:+=.       .=+:

:==.                 .==.
.=+=.      .-===-.      .=+=:
:=+=.       =*******-       .=+=.
-**:        :+*+*+++*+:        :**-
-++-       .=*******=.       -++-
-++-.      :=+++=:       -++:
-+=.                 .=+-
.                   .
:=-.       .-=:
-++-.   .-++-
-++-.-++:
:+*+:
.


.                        .


.-.
:+:
....-+: ...
.----=+=---:.
:+:
:=:
.



...........
:===========:




...





:-:.
.==---.
--  .:--:.
.=: .:-==-::
-==-.   .-+:
.:.   .==-=-==
..-+:.
..






```

---
*Page 15*

• Bordering a section of the query, which you can then run as a partial
query.

## Build a CMDB query using the CMDB Query Builder

A CMDB query type that queries the infrastructure for CI classes and
optionally non-CMDB tables, and the relationships and references that
connect them.

Before you begin

Role required: cmdb_query_builder_read to only view and run saved
queries, and cmdb_query_builder (contained for itil, itil_admin, and asset)
to create and save queries, modify saved queries, and run queries. For
reporting on queries, report related ACLs are required.

Authorized users can update and delete a query created by another
user.

About this task

Build the query by dragging the CI classes and non-CMDB tables that
you want to include in the query. Then dropping them as nodes on the
canvas, and defining relationship properties between them. You can filter
on the attributes of any node to narrow down the results to a specific set
of CIs of that class or to a single specific CI. You can also select which
property columns appear in the query results.

As you step through building a query, list options and other user
interface elements of the CMDB Query Builder, are dynamically filtered
as appropriate to your selections.

To learn more about using Query Builder, see the CMDB Query Builder
Queries and Reporting - Platform Analytics Academy ServiceNow
Community video. For a step-by-step walk through of building CMDB
queries in the Query Builder, including queries with application services,
see Example queries.

Procedure

1. Navigate to All > Configuration and select CMDB Query Builder.

2. On the CMDB Query Builder page do either of the following steps:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

15

Zurich ServiceNow AI Platform Capabilities

---
*Page 16*

• Select Create new. Type in a Name, choose CMDB Query as the
Query type, and then select Create.

• Select a widget of a saved query to continue building an existing
query. Search for a saved query first if needed.

• Point to the upper right corner of a saved query widget, and
select the Duplicate Query icon to edit a copy of a saved query.
The default name of the new query contains the string 'copy'.

3. On the canvas, you can do any of the following operations:

• Add CI classes to the query: On the CMDB Classes tab, select
classes from the hierarchy list and drag them to the canvas.

•

Add an Application Service CI to the query: On the CMDB
Classes tab, select the Application Service class from the
hierarchy list and drag it to the canvas.

In Application Service Properties on the right-side bar, you can
select Convert attached nodes to pattern to query on patterns
between the application service and other CMDB class nodes.
When querying on a pattern, the nodes on both ends of the
pattern connection, can be any number of levels apart. If
Convert attached nodes to pattern is not selected, then the
connection between the application service node and other
CMDB class nodes, represent direct relationships.

• Add non-CMDB tables to the query: Select a table from the Non-
CMDB Tables list and drag it to the canvas.

Note:   A non-CMDB table cannot be the starting node in the
query.

•

Add connections (relationships or patterns for application
services) between two nodes on the canvas:

a. • On the first node in the connection, select the small square at
the center of the right side.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

16

Zurich ServiceNow AI Platform Capabilities

---
*Page 17*

b. • On the second node in the connection, select the small
square at the center of the left side to create the
connection.

Connection UI Notations

Notation
Description

Full line
A relationship in a CMDB
query.

Red asterisk at the center of
the connection line

Information such as
relationship type is missing,
invalidating the query.

Levels:<n> Types:<n> or a
<Reference type> notation on
the connection line

As applicable: The number
of relationship levels and the
number of relationship types
included for the connection.
Or, a reference type for a
relationship that is a reference.

Dashed line

A pattern connection
between an application
service node and another
node.

• In Connection Properties on the right-side bar, configure
relationship settings (select the connection line if necessary):

a. • In the Relationship Direction section, select the Parent node
(the Child node automatically adjusts).

b. • In the Relationship Levels section, set Level to First level
relationships if the CIs are directly connected. Or, Up to 2nd
level relationships if the CIs are connected either directly or
indirectly through another CI.

c. •

In the Relationship Types and Related Items section, select
either option:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

17

Zurich ServiceNow AI Platform Capabilities

---
*Page 18*

Option
Description

No Relationships

To query for CIs with
no connecting relationships,
such as All Tomcat WAR
CIs which are not
connected to a Windows
Server.

Add Relationship Types
To select specific or any
relationship type.

Add a Related Item
To query for related CIs
between the nodes.

• Configure CI reference column for a connection to a non-CMDB
table: In the Connection Properties right-side bar, in the CI
Reference Column section, select the column with a reference
to a CI from the Use CI reference column list. If only one option is
available, it is automatically selected.

• Configure the pattern between an application service node set
with the Convert attached nodes to pattern option, and a non-
CMDB table node: Select Apply <table> reference filter to all
nodes in the pattern to apply the query to the application service
CI itself and to the CIs within the application service.

• Add filters to a class node: Apply filters to narrow down a class
query to a specific set of CIs or to a single specific CI.

a. • Point to the node to add a filter to, and then select the Apply
filters icon that pops up above the node.

b. • In the Filters section, add attribute and related list conditions.

c. • Close the Filters section.
For example: Add a filter for database location to query for
databases located in Seattle.

Select Applied Filters in the right-side bar to view all filters for
each node on the canvas.

• Add And/Or operators to the query:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

18

Zurich ServiceNow AI Platform Capabilities

---
*Page 19*

a. • Connect one node to two other nodes.

b. • Select the And box that appears on the connection line, to
toggle between the And/Or operators.
For example: C1 is Tomcat WAR, C2 is Linux Server, and C3 is
Windows Server. Query for All Tomcat WAR CIs which are
connected either to Linux Server Or to a Windows
Server.

• Add property columns for a node, to appear in the query results:

Note:   For a relationship, the query results include the parent,
child, and type columns. You cannot add any other columns
from the [cmdb_rel_ci] table.

a. • Select Properties in the right-side pane.

b. • Select a node once or twice, so that the Report Columns
section appears in the right-side bar, and then select Add
Columns.

c. • Select properties and then select outside the properties list to
close it.

• Create a combination query by integrating a Service Mapping
query into a CMDB query:

a. • When building a CMDB query, select Saved Service Queries
in the left-side bar.

b. • Select and then drag a Service Mapping query to the
canvas.
This query returns all CIs that satisfy the CMDB query, and that
are included in the services returned by the embedded Service
Mapping query.

• Add a search tag that can then be used as a search criteria for
saved queries:

a. • Select the Add Tags icon at the top of the canvas.

b. • Select Add Tag and in the Query Tags dialog box enter one
or more tag strings.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

19

Zurich ServiceNow AI Platform Capabilities

---
*Page 20*

c. • Select the Add Tags icon again to close the Query Tags
dialog box.

4. Select Save.

On the Saved Queries tab, point to a saved query widget and
select Query Information. Query details such as the query type, last
update date, CMDB groups associated with the query, and the
query schedules appear.

What to do next

•

Select Run.

Only the first 100 results of the query appear in the results pane.

• Select Load More Results to view the next set of 100 results.

• Select Load All Results to view the rest of the query results, up to the
number specified by the glide.cmdb.query.max_results_limit system
property (10,000 by default).

Select a CI to open its CI form, and on the CI form select Open in CMDB
Workspace to view CI health in the CI Health tile in CMDB Workspace.
This operation requires the sn_cmdb_user (CMDB user) role.

Note:

• Ensure that the glide.security.use_csrf_token property is set to
true, allowing all results to appear.

• When Level is set to Up to 2nd level relationships, the relationship
type does not appear in the query results.

• When a query is running, wait for it to complete or to time out
before opening or running another query.

• Modify Query Builder settings: Select the

(Settings) icon to open
the Query Builder Settings dialog box.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

20

Zurich ServiceNow AI Platform Capabilities

---
*Page 21*

• Copy and share the URL of a saved query with users that have access
to the CMDB Query Builder. Pasting the shared URL in a new internet
browser window, directly opens the saved query in the CMDB Query
Builder.

• Create a report in CMDB Query Builder.

• Create a schedule to run the query at a future time, and to email the
results to interested parties.

• Export query results:

Select the Query Results context menu and select Export. Even if the
Load More Results button is visible, indicating that there are additional
query results, only the results that are visible are exported.

• Export and import a CMDB query to port a query definition between
instances.

• Populate a CMDB group using a saved query.

• Delete a CMDB query.

Related concepts

• Example queries

## Build a Service Mapping query using the CMDB Query
## Builder

The Service Mapping query type is a pattern consisting of classes and
relationships between those classes. After you build the pattern and run
the query, the query returns all the Service Mapping services that contain
that pattern.

Before you begin

Role required: cmdb_query_builder_read to only view and run saved
queries, and cmdb_query_builder (contained for itil, itil_admin, and asset)
to create and save queries, modify saved queries, and run queries.

Authorized users can update and delete a query created by another
user.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

21

Zurich ServiceNow AI Platform Capabilities

---
*Page 22*

About this task

Build the query by dragging the CI classes that you want to include in
the query, dropping them as nodes on the canvas, and then defining
relationship properties between them. For every class node in the query,
you can filter on its attributes to narrow down the results to a specific set
of CIs of that class or to a single specific CI. You can also select which
property columns appear in the query results.

As you step through building a query, list options and other user
interface elements of the CMDB Query Builder, are dynamically filtered
as appropriate to your selections.

See Example queries for a step-by-step walk through of building a Service
Mapping query in the CMDB Query Builder.

Procedure

1. Navigate to All > Configuration > CMDB Query Builder.

2. On the CMDB Query Builder page do either of the following:

a. Select Create new.

b. Enter a Name.

c. Select Service Mapping Query as the Query type.

d. Select Create.

e. Select a widget of a saved query to continue building an existing
query. Search for a saved query first if needed.

f. Point to the upper right corner of a saved query widget.

g. Select the Duplicate Query icon to edit a copy of a saved query.
The new query's default name contains the string 'copy'.

3. On the canvas, you can do any of the following:

• Add CI classes to the query: Select classes from the CMDB
Classes hierarchy list and drag them to the canvas.

• Add connections (relationships) between two nodes on the
canvas:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

22

Zurich ServiceNow AI Platform Capabilities

---
*Page 23*

a. • On the first node in the relationship, select the small square at
the center of the right side.

b. • On the second node in the relationship, select the small
square at the center of the left side to create the
connection.

c. • In Connection Properties on the right-side bar, configure the
following (select the connection line if necessary):

• In the Relationship Direction section, select the Parent
node (the Child node automatically adjusts).

• In the Service Query Properties section, select Find
Related CIs or Find Unrelated CIs to query for a pattern in
which the two classes have or do not have relationships
with each other, respectively.

For example, All Tomcat WAR CIs which are not
connected to a Windows Server.

Relationship UI Notations

Notation
Description

Dashed line
A relationship in a Service
Mapping query.

• Add filters to a class node: Apply filters to narrow down a class to
a specific set of CIs or to a single specific CI.

a. • Point to the node to add a filter to, and then select the Apply
filters icon that pops up above the node.

b. • In the Filters section, add attribute and related list conditions.

c. • Close the Filters section.
For example: Add a filter for business criticality to query for
businesses that are 'most critical'.

Select Applied Filters in the right-side bar to view all filters for
each node on the canvas.

• Add And/Or operators to the query:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

23

Zurich ServiceNow AI Platform Capabilities

---
*Page 24*

a. • Connect one node to two other nodes.

b. • Select the And box that appears on the connection line, to
toggle between the And and the Or operators.

For example C1 is Tomcat WAR, C2 is Linux Server, and C3
is Windows Server. Query for all Tomcat WAR CIs which are
connected either to Linux Server Or to a Windows Server.

• Add property columns for a node, to display in the query results:

Note:   For a relationship, the query results display the parent,
child, and type columns. You cannot add any other columns
from the [cmdb_rel_ci] table.

a. • Select Properties in the right-side pane.

b. • Select a node once or twice, so that the node's Report
Columns section appears in the right-side bar, and then
select Add Columns.

c. • Select properties and then select outside the properties list to
close it.

• Select columns and add filters that will be applied to the resulting
set of services:

a. • Select Properties in the right-side bar, and then select an
empty space on the canvas to ensure that nothing is
selected.

b. • Select Add Columns at the bottom of the right-side bar and
select columns to add. Select outside the columns list to
close it.

c. • Select the Apply Service Mapping Query Filters icon at the
top of the canvas and add filters.

• Inverse the entire query and search for all Service Mapping
services that do not include the query pattern: Select a node
once or twice so that Query Properties appear in the right-side
bar. In the Metadata section, toggle Services Including This
Pattern to enable or disable the option.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

24

Zurich ServiceNow AI Platform Capabilities

---
*Page 25*

• Add a search tag that can then be used as a search criteria for
saved queries:

a. • Select the Add Tags icon at the top of the canvas.

b. • Select Add Tag and in the Query Tags dialog box enter one
or more tag strings.

c. • Select the Add Tags icon again to close the Query Tags
dialog box.

4. Select Save.

On the Saved Queries tab, point to a saved query widget and select
Query Information to view query details such as the query type, last
update date, and the query schedules.

What to do next

•

Select Run.

The query results pane displays only the first 100 results of the query.

• Select Load More Results to display the next set of 100 results.

• Select Load All Results to display the rest of the query results, up to the
number specified by the glide.cmdb.query.max_results_limit system
property (10,000 by default).

Select a CI to open its CI form, and on the CI form select Open in CMDB
Workspace to view CI health in the CI Health tile in CMDB Workspace.
This operation requires the sn_cmdb_user (CMDB user) role.

Note:   When a query is running, wait for it to complete or to time
out before opening or running another query.

• Modify Query Builder settings: Select the Settings icon (

) icon to
open the Query Builder Settings dialog box.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

25

Zurich ServiceNow AI Platform Capabilities

---
*Page 26*

• Copy and share the URL of a saved query with users that have access
to the CMDB Query Builder. Pasting the shared URL in a new internet
browser window, directly opens the saved query in the CMDB Query
Builder.

• Create a report in CMDB Query Builder.

• Create a schedule to run the query at a future time, and to email the
results to interested parties.

• Export query results:

Export query results that are visible: Select the Query Results context
menu and select Export. Even if the Load More Results button is visible,
indicating that there are additional query results, only the results that
are visible are exported.

• Export and import a CMDB query to port a query definition between
instances.

• Populate a CMDB group using the saved query.

• Delete a CMDB query.

Related concepts

• Example queries

## Run a partial CMDB query

You can run a partial query in the CMDB Query Builder by defining a
section of a query, and then running it.

Before you begin

Role required: cmdb_query_builder (contained for itil, itil_admin, and
asset)

About this task

While building a query or reviewing a saved query, you can run only a
section of the query. On the canvas in the CMDB Query Builder, highlight
a section of the query which contains the nodes and relationships of the

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

26

Zurich ServiceNow AI Platform Capabilities

---
*Page 27*

partial query that you want to run. You can then examine the results of
the partial query, and update the query if needed.

Procedure

1. Navigate to All > Configuration > CMDB Query Builder.

2. On the CMDB Query Builder page, select a tile to open an existing
query.

3. Select the selection tool under the navigation tool to switch to a
section selection mode.

4. Border a section of the query:

a. Select the upper left corner of the section.

b. Drag and release at the bottom right corner of the section that
you want to create.
As the cursor moves, the selected section is highlight in light blue.
The query nodes that are included in the partial query, appear
with a blue border.

5. Select Run.

6. In the Pick Starting Node dialog box, select the starting node for the
partial query and then select Confirm.

Result

The results of the partial query appear in the Results pane.

## Delete a CMDB query

Delete a CMDB query that is no longer used or needed.

Before you begin

The query that you want to delete must be already saved.

Role required: cmdb_query_builder (contained for itil, itil_admin, and
asset). Authorized users can delete a query created by another user.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

27

Zurich ServiceNow AI Platform Capabilities

---
*Page 28*

Procedure

1. Navigate to All > Configuration and select CMDB Query Builder.

2. On the CMDB Query Builder page, select the Saved Queries tab and

set the viewing mode to Card view (

).

3. Move to the card with the query that you want to delete.

4. Select the Delete Query (X) icon that appears in the card.

## Create a report in CMDB Query Builder

Use CMDB Query Builder reports to show the results of a CMDB query or a
Service Mapping query. Create a basic report or a dynamic report that
auto-updates when the results of the associated saved query change.

## Create a basic report

After running a query in the CMDB Query Builder, you can create a basic
report that is scoped to the query execution.

Before you begin

The Core UI plugin (com.glide.ui.ui16) must be activated.

Role required:

• View report: cmdb_query_builder or cmdb_query_builder_read

• Create report: cmdb_query_builder or cmdb_query_builder_read, and
report_user

In a base system, the cmdb_query_builder role is contained in the itil and
asset roles.

Procedure

1. Navigate to All > Configuration and click CMDB Query Builder.

2. Build a query.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

28

Zurich ServiceNow AI Platform Capabilities

---
*Page 29*

3. In the query results pane, click Load More Results or Load All Results
to load all the results that you want to include in the basic report.

4. In the query results pane, click the column context menu and select
Bar Chart or Pie Chart.

Result

The Reports application creates a basic report, which is scoped to the
query results that are currently loaded and is static.

Related tasks

• Build a CMDB query using the CMDB Query Builder

• Build a Service Mapping query using the CMDB Query Builder

• Run a partial CMDB query

Related topics

• Reporting

## Create a dynamic report

After running a saved query in the CMDB Query Builder, create a
dynamic report that continuously updates to show the latest query
results. You can use a dynamic report as any other report created using
Reporting and you can add it to Performance Analytics dashboards.

Before you begin

Ensure that the query that you want to create a dynamic report for is a
saved query, and that there is a specified schedule for the query. Also,
run the saved query and ensure that all query results are visible.

Role required:

• To create: cmdb_query_builder and report_user

• To view: Reporting role requirements might apply, see Administering
reports for Reporting role requirements.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

29

Zurich ServiceNow AI Platform Capabilities

---
*Page 30*

In the base system, the cmdb_query_builder role is contained in the itil
and asset roles.

About this task

The Create Report button in CMDB Query Builder which is used to create
a dynamic report, is activated only if:

• The query is saved

• The query has a schedule

• The entire set of query results is present after a query run

The initial dynamic report that you create, is based on the results from the
initial run of the saved query. Then, on every subsequent run of the saved
query, the associated report automatically updates with the latest query
results.

However, if you change the query definition itself, the query and the
report are no longer in sync and you must create a new report.

Procedure

1. Navigate to All > Configuration > CMDB Query Builder.

2. In the Saved Queries tab, select the saved query for which you want
to create a report.
Ensure that the query has a specified schedule.

3. Select Run and ensure that all query results appear.
Click Load All Results if available, to load all results. The Create Report
button is enabled only if all query results are showing.

4. Click Create Report.
If the CMDB Query Builder displays the query results in a new tab,
then after the new tab opens with the query results, return to the
CMDB Query Builder window.

5. In the Report Designer, click Next or Back to view and configure the
new report in the Data, Type, Configure, and Style tabs.
The report is pre-populated with the CMDB query results and a few
other report details.

• Report name is set to the name of the saved query.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

30

Zurich ServiceNow AI Platform Capabilities

---
*Page 31*

• Source type is set to Data source.

• Data source is set to the table in which the query results are
stored.

• Query Sys ID is the ID of the latest run of the query.

For more details about Reporting and about configuring a report in
the Report Designer, see Reporting, Creating reports.

6. Click Save or Run.

Result

CMDB Query Builder creates a report source which you can attach to a
report and use with dashboards. For more details about report sources,
see Report sources.

What to do next

Use either of the following steps to view the new report source. The name
of the new report source is set to the name of the CMDB query it was
created from, and cannot be changed.

• In Query Builder, click Saved Queries. In the Saved Queries window,
click the Query Information icon in the tile of the saved query. Scroll to
the bottom of the information list and then click the link under Report
source.

• Navigate to All > Reports > Administration > Report Sources and locate
the new report source.

## Search for a saved query

The CMDB Query Builder allows you to search for a specific saved query
using any combination of search criteria such as the query's name, type,
custom tags, and who created or updated the query.

Before you begin

To locate a saved query using a Query Tags search criteria, the query
must have a query tag associated with it. For more information see Build

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

31

Zurich ServiceNow AI Platform Capabilities

---
*Page 32*

a CMDB query using the CMDB Query Builder, or Build a Service Mapping
query using the CMDB Query Builder.

Role required: cmdb_query_builder (contained for itil, itil_admin, and
asset)

Procedure

1. Navigate to All > Configuration > CMDB Query Builder.
The Saved Queries tab shows all saved queries in tiles, and also a tile
for creating a new query.

2. On the Saved Queries tab, specify a Sort by criteria to filter the saved
queries that are showing.

3. In the Search Saved Queries field, enter a search string that
corresponds to the Sort by selection and then select an item from
the list that gets populated as you type.
The drop-down list includes search strings that can be applied to the
sorting criteria such as 'Query name'.

4. Refine the search by entering additional Search Saved Queries
search strings as needed.

## Schedule a CMDB query

Schedule a saved CMDB query to run once at a scheduled time or on a
recurring schedule, and to email the query results to specified users.

Before you begin

A saved CMDB query that was built in the CMDB Query Builder must exist.

Role required: cmdb_query_builder (contained for itil and asset)

About this task

The query results are attached to the email as a file in the specified
format. The maximum number of result rows that can be attached is
determined by the glide.cmdb.query.max_results_limit system property
(10,000 by default).

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

32

Zurich ServiceNow AI Platform Capabilities

---
*Page 33*

Procedure

1. Navigate to All > Configuration > CMDB Query Builder and then
select a saved query.

2. Select Create Schedule and then fill in the form.

Scheduled Email of Query Builder form

Field
Description

Query
The query to run.

Users

Users who should receive query
results email.

To receive emails, users must
have an Email address defined
and have Notifications set to
Enable in their user records.

Groups
Groups to email the query results
to.

Zip output
Indicates whether the report
should be sent as a zip file.

Active

Indicates whether to run the
query according to the specified
schedule.

Run
Frequency for running the query.

Time
Time of day to run the query.

Conditional

Indicates whether to display the
Condition field, which allows
you to specify conditions under
which the query runs.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

33

Zurich ServiceNow AI Platform Capabilities

---
*Page 34*

Field
Description

Omit if not records

Indicate whether to distribute
email if the query returns zero
results.

Email addresses

Email addresses of users who
should receive the email but
who are not in the system.

Subject
Text that appears in the subject
line of the distribution email.

Introductory message
Additional message that is
delivered with the query results.

Condition

User-created script that checks
for certain conditions to be true
before running the query.

This field is visible only when
Conditional is checked.

Type

File format to use for the query
results.

Note:   Configure the form
layout to add this field to the
form.

## Export and import a CMDB query

Export a saved CMDB or Service Mapping query definition to an XML
file which you can later import and run in the CMDB Query Builder. This
process lets you port a saved query between instances, such as from a
development environment to a production environment.

Before you begin

• You must save a query before you can export it.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

34

Zurich ServiceNow AI Platform Capabilities

---
*Page 35*

• Domain in an exported query must be visible in both, source and
destination instances.

Role required: cmdb_query_builder (contained in itil, itil_admin, and
asset).

About this task

When exporting a combination query, the integrated Service Mapping
query definition is included in the exported query.

For backward compatibility, you can alternatively Export and import a
query as an update set.

Procedure

1. Navigate to All > Configuration > CMDB Query Builder.

2. Export a saved query:

a. In the Saved Queries tab, in either list view or card view, select a
saved query.

b. Select the Export query icon at the top of the Query Builder
canvas.

c. Wait for the Query Export Complete message to appear and
then select Download.
You can now access the query XML file.

3. Import a saved query:

a. In the Saved Queries tab, select the Import query icon at the top
of the CMDB Query Builder window.

b. In Finder, select the saved query XML file and select Open.
The imported query is available in the Saved Queries tab of the
CMDB Query Builder on the instance.

## Export and import a query as an update set

Export a saved query definition to an XML file as an update set, which
you can later import.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

35

Zurich ServiceNow AI Platform Capabilities

---
*Page 36*

Before you begin

Role required: To export — cmdb_query_builder (contained in itil and
asset). To import — user with permission to import an update set.

Domain in the exported query must be visible in both, source and
destination instances.

About this task

Export a query definition as an update set which you can later import
and commit. This process lets you port a query between instances, such
as from a development environment to a production environment. For
more information about exporting and then committing update sets
using XML files, see Save an update set as a local XML file.

When exporting a combination query, the integrated Service Mapping
query definition is included in the exported update set.

Procedure

1. Export a saved query:

a. In the Filter navigator, enter qb_saved_query.list.

b. Select Enter to navigate to the Saved Queries table.

c. In the Saved Queries list view, select the query that you want to
export.

d. Select Actions on selected rows and then Export query.

e. Wait for the Query Exporter to complete the export.

2. Import the exported saved query:

a. Navigate to System Update Sets > Retrieved Update Sets.

b. On the Retrieved Update Sets form, select Import Update Sets
from XML.

c. On the Import XML page, select Choose file.

d. Select the exported XML file.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

36

Zurich ServiceNow AI Platform Capabilities

---
*Page 37*

e. Select Upload.

f. Open the new record that was added to the Retrieved Update
Sets list view.

g. On the Retrieved Update Set form, select Preview Update Set
Batch.

h. Close the Batch Update Set Preview dialog box.

i. Select Commit Update Set Batch.

j. Close the Commit Update Set Batch dialog box.

Result

The imported query is added to the Query Builder saved queries on the
instance.

## CMDB Query Builder reference

Reference topics provide example queries and descriptions of navigation
and property settings.

Reference topics

Domain separation and CMDB Query Builder

Domain separation is supported in the CMDB Query Builder. Domain
separation enables you to separate data, processes, and administrative
tasks into logical groupings called domains. You can control several
aspects of this separation, including which users can see and access
data.

Navigation in CMDB Query Builder

Use the navigation tools to enlarge or shrink the query, to move the
query, or to border a section of the query to run.

Property settings for CMDB Query Builder

Use the CMDB Query Builder properties to configure query processing.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

37

Zurich ServiceNow AI Platform Capabilities

---
*Page 38*

Example queries

Use the example queries as models for building your custom CMDB
queries and Service Mapping queries.

## Domain separation and CMDB Query Builder

Domain separation is supported in the CMDB Query Builder. Domain
separation enables you to separate data, processes, and administrative
tasks into logical groupings called domains. You can control several
aspects of this separation, including which users can see and access
data.

Overview

How domain separation works in the CMDB Query Builder

With the CMDB Query Builder you can easily build complex infrastructure
and service queries that span multiple CMDB classes, and that involve
many CIs that are connected by different relationships. Domain
separation is set to be on by default.

• Saved Query

The user creates a query by dragging a class node from the class
hierarchy and dropping it to the canvas and connecting the nodes
with the relationships type.

The user can save the created query as an XML file to the database
[qb_saved_query] table in the CMDB for future use. The saved query is
domain separated.

• Query results

With a saved query, the user selects Run and the query result is saved
and displays in the platform list view.

In the query results, domain separation behaves in the same way as the
platform list view for the CI relationship [cmdb_rel_ci] table and CMDB
CI [cmdb] table. Consequently, since the CI relationship is not domain
separated, all relationships of the query result display, regardless of the
domains. Conversely, if the query result is CI only, since the CMDB CI
is domain separated, the results display only if visible in the current
domain.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

38

Zurich ServiceNow AI Platform Capabilities

---
*Page 39*

Related concepts

• Domain separation and Configuration Management Database (CMDB)

## Property settings for CMDB Query Builder

Set property values to configure query processing.

Access and Role required

The admin role is required to view and edit Query Builder properties.

Note:   To open the System Properties [sys_properties] table, enter
sys_properties.list in the navigation filter.

Properties for CMDB Query Builder

Property
Description

Limits the number of results for a
scheduled query and in the results
section in the Query Builder when
you select Load All Results.

glide.cmdb.query.max_results_limit

• Type: integer

• Default value: 10000

• Location: Configuration > CMDB
Properties > Query Builder
Properties

Time limit (in seconds) for running
one batch to get one batch of
query results (100 results).

glide.cmdb.query.batch_time_limit
_in_sec

• Type: integer

• Default value: 300

• Location: Configuration > CMDB
Properties > Query Builder
Properties

Time limit (in seconds) for running
an entire query to get all results.

• Type: integer

• Default value: 1800

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

39

Zurich ServiceNow AI Platform Capabilities

---
*Page 40*

Property
Description

glide.cmdb.query.query_time_limit
_in_sec

• Location: Configuration > CMDB
Properties > Query Builder
Properties

Exclude list of non-CMDB tables.
The specified tables will not
appear in the CMDB Query Builder
when a user creates a query.

glide.cmdb.query.non_cmdb.blac
k_listed_tables

• Type: string

• Default value: empty

• Other values: Comma-separated
list of table names (not labels).
Can include '*abc' to exclude all
tables containing 'abc' in their
table name.

• Location: Configuration > CMDB
Properties > Query Builder
Properties

glide.cmdb.query.batch_size

Batch size allocated globally when
saved queries run.

• Type: integer

• Default value: 100

• Location: Add to System
Properties [sys_properties] table.

glide.cmdb.query.execution_mod
e

Default execution engine to use
when running a saved query when
the query's execution mode isn't
set (Query Execution Mode is
'None'). Used in combination with
the
glide.cmdb.query.or_execution_m
ode system property.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

40

Zurich ServiceNow AI Platform Capabilities

---
*Page 41*

Property
Description

• Type: string

• Values:

• v1: Use the legacy query
execution engine.

• v2: Use an enhanced query
execution engine which
is designed for improved
performance and scalability.

• Default value: v2

• Location: System Properties
[sys_properties] table.

• Learn more: Set execution mode
for running a query

glide.cmdb.query.or_execution_m
ode

Default execution engine to use,
applying only to queries that
contain at least one logical OR
condition. Used in combination of
the
glide.cmdb.query.execution_mod
e system property.

• Type: string

• Values:

• v1: Use the legacy query
execution engine.

• v2: Use an enhanced query
execution engine which
is designed for improved
performance and scalability.

• Default value: v2

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

41

Zurich ServiceNow AI Platform Capabilities

---
*Page 42*

Property
Description

• Location: System Properties
[sys_properties] table.

• Learn more: Set execution mode
for running a query

## Example queries

Use the example queries as models for building your custom CMDB
queries and Service Mapping queries.

CMDB — Servers connected to a database

Use this example to build a CMDB query to find all servers with a
connection to a database.

CMDB — Critical application services

Use this example to build a CMDB query to find all critical application
services, and their owner.

CMDB — Application services with incident or change

Use this example to build a CMDB query to find all application services for
which there is an incident or a change request. Results are returned for
either the application service itself or any CI within the service.

CMDB — Hardware with Windows installed

Use this example to build a CMDB query to find all hardware in my service
offering that has Microsoft Windows installed.

Service Mapping — Linux servers in services

Use this example to build a Service Mapping query to find all Linux servers
in services.

## CMDB — Servers connected to a database

Use this example to build a CMDB query to find all servers with a
connection to a database.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

42

Zurich ServiceNow AI Platform Capabilities

---
*Page 43*

Before you begin

Role required: none

Procedure

1. Navigate to All > Configuration > CMDB Query Builder.

2. Select Create new and then enter a name, for example All
servers with a connection to a DB.

3. Choose CMDB Query and then select Create.

4. In the CMDB Classes list, locate the Server class and drag it to the
canvas.

Tip:   Use the search box to find items quickly.

5. Locate the Database class, and place it to the right of the Server
class node on the canvas.

6. Select at the center of the right side of Server, and then at the center
of the left side of Database to create a connection line between the
two class nodes.

7. Select once or twice on the connection line until the Connection
Properties panel appears in the sidebar.

8. In the Relationship Types and Related Items section, select Add
Relationship Types and add all the relationships from the list.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

43

Zurich ServiceNow AI Platform Capabilities

---
*Page 44*

Settings in the Relationship Direction section reflect the parent-child
direction in the relationship. If the Database class is the parent in the
relationship, then the Parent and Child settings are switched.

9. Select Save, and then select Saved Queries on the left to see the
widget for the saved query.

10. Select the query widget to return to the canvas in edit mode.

11. Select Run to execute the query.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

44

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 44, 552x618px]*

```
..  . .
.....        .....  ..
.................
.  :       ....................         .-.
.  :.      ....................         .:.
.  .. .....   .     ................
.::  ......:::    ..:...::...:.....
...:.........--:.
+%#*****#**#%%= .     ...
:-------------...
.
..       ..
..        ..
..         .:::::..
..
..:          ..............
:--          ..............
:
.
.                 ..... .......              .
..
..                .........................
..                 .........................
.
.  .     ......          ...........
..-:.... .......
::....  ..  ..     ....  . .  ... ..  ............
... ..:.:............          .:
.::. .. . .. ...  ..            .
.:..............................:
... ........
:. ......... ..
.
```

---
*Page 45*

Review the query results. Each row displays the name of a server
CI, the name of a database CI, and the relationship type between
them.

12. Add columns to the query results.

a. Select the Server 1 node on the canvas once or twice so that the
Server 1 Report Columns section appears in the right-side pane.

b. Select Add Columns.

c. Select Manufacturer and then select outside the columns list to
close it.

d. Select Run.
The query results now include the Manufacturer column.

e. Select Save again to save your customization for this query.

## CMDB — Critical application services

Use this example to build a CMDB query to find all critical application
services, and their owner.

Before you begin

Role required: none

Procedure

1. Navigate to All > Configuration > CMDB Query Builder and then
select Create new.

2. Enter All critical application services as the query Name.

3. Choose CMDB Query and then select Create.

4. In the CMDB Classes list, locate the Application Service class and
then drag it to the canvas.

Tip:   Use the search box to find items quickly.

5. Add a filter to the application service node.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

45

Zurich ServiceNow AI Platform Capabilities

---
*Page 46*

a. Point to the application service node and then select the Apply
filters icon.

b. In the Filters section, add the condition [business criticality] [is] [1
- most critical].

c. Close the Filters section.

6. Add columns to the query results.

a. In the Properties sidebar, select Add Columns.

b. Select business criticality and owned by, and then select outside
the columns list to close it.

7. Select Save.

8. Select Run and then review the results.
You can, for example, locate any of the critical application services
without an owner.

## CMDB — Application services with incident or change

Use this example to build a CMDB query to find all application services for
which there is an incident or a change request. Results are returned for
either the application service itself or any CI within the service.

Before you begin

Role required: none

Procedure

1. Navigate to All > Configuration > CMDB Query Builder.

2. Select Create new and then enter Application services with
incidents or change requests as the query name.

3. Choose CMDB Query and then select Create.

4. In the CMDB Classes list, locate the Application Service class and
then drag it to the canvas.

Tip:   Use the search box to find items quickly.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

46

Zurich ServiceNow AI Platform Capabilities

---
*Page 47*

5. Select Non-CMDB Tables.

6. Locate the Incidents class in the class hierarchy, and then drag it to
the canvas.

7. Locate the Change Requests class in the class hierarchy, and then
drag it to the canvas.

8. Connect the Application Service and the Incidents nodes, and then,
in the Properties right-side bar.

a. Select Apply Incidents reference filter to all nodes in the pattern.

b. Set Use CI reference column to Configuration item.

9. Connect the Application Service and the Change Request node,
and then, in the Properties right-side bar.

a. Select Apply Change Request reference filter to all nodes in the
pattern.

b. Set Use CI reference column to Configuration item.

10. Select the And operator between the Incidents and the Change
Request nodes, and switch it to Or.

11. Select Save.

12. Select Run and then review the results.

## CMDB — Hardware with Windows installed

Use this example to build a CMDB query to find all hardware in my service
offering that has Microsoft Windows installed.

Before you begin

Role required: none

Procedure

1. Navigate to All > Configuration > CMDB Query Builder and then
select Create new.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

47

Zurich ServiceNow AI Platform Capabilities

---
*Page 48*

2. Enter All hardware in my service offering that has
Windows installed as the query name.

3. Choose CMDB Query and then select Create.

4. In the CMDB Classes list, locate the following classes, and then drag
them to the canvas:

Tip:   Use the search box to find items quickly.

• Service

• Service Offering

• Application Service

• Searching for infrastructure, Hardware

5. Connect the Service node to the Service Offering node.

In the Properties sidebar, select Add Relationship Type and select the
Connect to::Connected by relationship.

6. Connect the Serviced Offering node to the Application Service
node.

In the Properties right-side bar, select Add Relationship Type and
select the Connect to::Connected by relationship.

7. Select the Application Service node.

In the Properties right-side bar, select Convert attached nodes to
pattern to include all CIs within the application service, in the query.

8. Connect the Application Service node to the Hardware node.

9. All infrastructure under Service,

10. Select Save.

11. Select Run and then review the results.

You can select Column options of the Service column header, and
select to Group by Service. Then expand a service to see all the
hardware infrastructure under that service.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

48

Zurich ServiceNow AI Platform Capabilities

---
*Page 49*

12. Return to the CMDB Query Builder window, to expand the query to
include only infrastructure CIs on which Windows is installed.

13. Select Non-CMDB Tables, locate the Software Instance class, and
drag it to the canvas.

14. Connect the Hardware node to the Software Instance node.

In the Properties right-side bar, set Use CI reference column to
Installed on.

15. Point to the Software Instance node, and select on the Apply filters
icon that appears.

a. In the Filters section, add the condition [Product Name.Name] [is]
[windows].

b. Close the Filters section.

16. Select Save.

17. Select Run and review the new results.

## Service Mapping — Linux servers in services

Use this example to build a Service Mapping query to find all Linux servers
in services.

Before you begin

Role required: none

About this task

This example Service Mapping query finds all services that include Linux
servers. Then, with a simple modification, the query can find all services
that do not include a Linux server.

Procedure

1. Navigate to All > Configuration and select CMDB Query Builder.

2. Select Create new and then enter Linux server in services in
the Name field.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

49

Zurich ServiceNow AI Platform Capabilities

---
*Page 50*

3. Choose Service Mapping Query and then select Create.

4. In the CMDB Classes hierarchy list, locate Linux Server and drag it to
the canvas.

Tip:   Use the search box to find items quickly.

5. Select Run.

Review the query results. Each row displays the name of a Service
Mapping service and the name of a Linux server that is a member of
that service.

6. On the right-side pane, disable Services Including This Pattern and
then select Run again.

Review the query results. Now, each row displays the name of a
Service Mapping service that doesn't include the specified Linux
server.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

50

Zurich ServiceNow AI Platform Capabilities

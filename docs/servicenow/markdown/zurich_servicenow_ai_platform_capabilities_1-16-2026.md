# zurich_servicenow_ai_platform_capabilities_1-16-2026

*Source: zurich_servicenow_ai_platform_capabilities_1-16-2026.pdf*

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

## CMDB Workspace store app

The CMDB Workspace is an efficient, central, and modernized way for
you to work. Use CMDB Workspace to search and explore the CMDB,
examine health and recent activities, and access CMDB dashboards and
tools to support tasks in your organization.

Watch the following video to get started with CMDB Workspace.
Depending on the version of your CMDB Workspace, some UI elements
and features might differ.

Get started

Explore
Learn
about the different
views in CMDB
Workspace and how
to use each to
perform your assigned
tasks.

Configure

Setup and
configure CMDB
Workspace.

Reference

Additional
information about
components such
as properties, and
class-specific criteria
for the Cloud vs Non-
cloud resources chart.

Troubleshoot and get help

• Now Assist for Configuration Management Database (CMDB)

• Ask questions and explore other resources for in the ServiceNow
Community

• Search the Known Error Portal for known error articles

• Contact Customer Service and Support

• Exploring CMDB Workspace

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

Learn more about CMDB Workspace, its different views, and its benefits
when using key CMDB features such as CMDB Health, CMDB Data
Manager, and CMDB 360.

• Configuring CMDB Workspace

Plan and configure your implementation of CMDB Workspace.

• Create a CI manually in CMDB Workspace

Create a new CI in CMDB Workspace, while applying Identification and
Reconciliation Engine (IRE) processes and other requirements for the
CI's class. IRE identification rules enforce the new CI to be unique and
to comply with other class requirements.

• Manage CI details in CI Form

Use CI Form in CMDB Workspace or in another workspace, to view,
edit, and manage a comprehensive set of details of a CI such as its
attributes, related lists, and CMDB 360 records. When updating CIs, IRE
rules are applied to avoid potential issues such as duplicate CIs. CI
Form supports derivation of form configurations throughout the CMDB
hierarchy.

• Resume a disabled Cloud vs Non-cloud resources scheduled job

Reactivate a scheduled job to resume data collection for the Cloud vs
Non-cloud resources chart in CMDB Workspace.

• Edit a related table from CMDB performance insights

Edit a related table on the Related Entries [cmdb_related_entry]
table directly from the CMDB performance insights tool in the CMDB
Workspace Insights view. Update the related table to correctly
reference another CI in the Referenced field when a reference is
missing from the related table.

• Edit a data source from CMDB performance insights

Edit a data source for your Service Graph Connectors to specify the
data that an import set should ingest. Consider configuring a batch
process to make ingestion more efficient and improve performance.

• Edit a scheduled data import from CMDB performance insights

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

Edit a scheduled data import directly from CMDB performance insights
for your Service Graph Connectors. Consider enabling Concurrent
Import with a custom size partition to split incoming data into multiple
import sets and transform the import sets concurrently to reduce
processing time.

• CMDB Workspace reference

Reference topics provide additional information about components
such as properties, installed with CMDB Workspace and class-specific
criteria for the Cloud vs Non-cloud resources chart.

## Exploring CMDB Workspace

Learn more about CMDB Workspace, its different views, and its benefits
when using key CMDB features such as CMDB Health, CMDB Data
Manager, and CMDB 360.

CMDB Workspace overview

The CMDB Workspace is an efficient, central, and modernized way
for you to work. Use CMDB Workspace to search and explore the
CMDB, examine health and recent activity, and access various CMDB
dashboards and tools to support tasks in your organization.

General interaction and additional information

• CMDB Workspace leverages many Performance Analytics capabilities
and features, such as indicator sources. Throughout the CMDB
Workspace views, you can select the various cards to drill down
to Performance Analytics KPI Details panes that show trends for the
associated data. On a KPI Details pane, you can modify different
settings to change the scope of the data. You can also select Show
Records to list the records associated with the chart.

• Lists throughout the CMDB Workspace have a filter icon (

) that
you can select to show the filter definition used for the list.

• You can open your Configurable Workspace experience in UI Builder to
access and edit your CMDB Workspace experience.

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

• See List of workspaces for a list of all Workspaces that ServiceNow®
provides.

• CMDB Workspace doesn't support domain separation.

CI details

When you drill down to CI details, how those details appear depends on
system settings:

CI Form

By default, the system property sn_cmdb_ws_explore_ci.record.enabled
is set to true, enabling the experience of the CI Form feature for viewing
CI details. Using CI Form, you are navigated to a centralized location with
a comprehensive set of CI details organized by sections. Use the forms
provided by CI Form to examine and edit CI attributes, relationships, tags,
services and offerings, CMDB Health and CMDB 360 data associated with
the CI, related lists, and activities. When updating CIs in CI Form, IRE rules
are applied to avoid potential issues such as duplicate CIs.

For more information, see:

• Components installed with CMDB Workspace:
sn_cmdb_ws_explore_ci.record.enabled system property.

• Manage CI details in CI Form.

CI details pane

If sn_cmdb_ws_explore_ci.record.enabled is set to false, then the CI
details pane is used for viewing CI details. When you drill down to a CI
record in CMDB Workspace views and pages, the following details for the
CI appear:

• CI Timeline - Last 14 days: A timeline of CI activities such as change
requests.

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

Note:   A CI timeline in CMDB Workspace fails to load when the
number of any of the following activities exceeds its threshold:

• History: 200

• Incidents: 100

• Requests: 50

• Total Events: 200
Select the Open CI Timeline link in the error message to open the
CI timeline in the base system, which shows activities for the CI, up
to the specified threshold numbers.

•

CI Health: A summary of the health of the CI, showing related items
such as critical incidents, incomplete attributes, and stale relationships
for the CI.

Role requirement: itil (for accessing incidents).

• Details: CI attributes, grouped into categories such as Key attributes,
Asset attributes, Discovery attributes, Operational attributes, and More
attributes.

Note:   Use the CMDB - Workspace form view for a CI class to
configure which attributes appear.

• Activity: An activity stream to track what's changed in the CI record.

• Infrastructure Relationships: List of the infrastructure CIs related to the CI.

• Service Relationships: List of business applications, service offerings, and
application services that the CI may be related to.

On the CI details pane, you can:

• Select Open Dependency View to open the Dependency Views map
and display a graphic infrastructure view of the specific CI record.

• Select View CMDB 360 Data to show CMDB 360 details at the CI
attribute level for the specific CI record.

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

•

Select Save to save any changes made to attributes for the CI record.

• Select the More Actions icon (...) for additional functions:

• Select Create Change to create a new change request for the CI
record.

• Select Create Incident to create a new incident for the CI record.

• Select Delete to delete the CI record.

UI activity
Additional requirements

CI Details

Accessible to: CMDB Admin,
CMDB Editor, CMDB User

CI Health

Accessible to:

• Incidents card: sn_incident_read
to view

• Change requests card:
sn_change_read to view

• For remaining cards: At least
sn_cmdb_user

itil

Related Open Changes

Accessible to: CMDB Admin,
CMDB Editor, CMDB User

sn_change_read role

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

UI activity
Additional requirements

Related Incidents

Accessible to: CMDB Admin,
CMDB Editor, CMDB User

sn_incident_read role

Related Alerts

Accessible to: CMDB Admin,
CMDB Editor, CMDB User

Event Management
(com.glideapp.itom.snac) plugin

evt_mgmt_user role

Set up Event Management

Related Application Services

Accessible to: CMDB Admin,
CMDB Editor, CMDB User

app_service_user role

View CMDB 360 Data

Accessible to: CMDB Admin,
CMDB Editor, CMDB User

Enable and configure CMDB 360

Save

Accessible to: CMDB Admin

More Actions/Delete

Accessible to: CMDB Admin

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

Shared pages

For information about the shared pages, see the Dev site as follows:

• CI Service Relationships

• CI Infrastructure Relationships

What to explore next

To learn more about configuring and using CMDB Workspace, see:

• CMDB views:

• Home view in CMDB Workspace

• My Work view in CMDB Workspace

• CMDB 360 view in CMDB Workspace

• Insights view in CMDB Workspace

• Management view in CMDB Workspace

• SGC Central view in CMDB Workspace (if installed)

• Configuring CMDB Workspace

• Resume a disabled Cloud vs Non-cloud resources scheduled job

• Edit a related table from CMDB performance insights

• Edit a scheduled data import from CMDB performance insights

• Components installed with CMDB Workspace

• Home view in CMDB Workspace

Home view is the default view in CMDB Workspace. It shows important
tasks that you should tend to, various counts for activities in CMDB such
as new CIs, CMDB Health aggregations, and various charts. The Home
view also provides several links with immediate access to key CMDB
tools.

• My Work view in CMDB Workspace

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

Use the My Work view in CMDB Workspace to manage your tasks.
Tasks in this view are related to data compliance such as attestation,
certification, and other life-cycle tasks.

• CMDB 360 view in CMDB Workspace

The CMDB 360 dashboard provides aggregations and analysis of
CMDB 360 data. CMDB 360 collects data about all the discovery
sources reporting attribute values for CIs. Use the CMDB 360 view
in CMDB Workspace to track activities and identify potential issues
of discovery sources. You can also create your own queries and
associated schedules and reports to explore CMDB 360 data.

• Insights view in CMDB Workspace

Use the Insights view in CMDB Workspace to see and increase the level
of adoption of key CMDB features and application services to improve
the overall health of the CMDB. Explore how tools and features can
maximize the health and efficiency of your CMDB and use direct links to
install and start using features immediately.

• Management view in CMDB Workspace

The Management view provides CMDB Admins with quick access
to key management tools and deep insights into CMDB health and
activities. The view provides and details such as duplicate CIs and
recent activities in the CMDB.

• Configuration identifiers framework

Configuration identifiers provide a framework that lets you customize
some behaviors of a CMDB Workspace feature, enabling different
settings for that feature, on different workspaces. Most importantly,
you can use this customization framework when integrating a CMDB
Workspace feature into another workspace.

## Home view in CMDB Workspace

Home view is the default view in CMDB Workspace. It shows important
tasks that you should tend to, various counts for activities in CMDB such
as new CIs, CMDB Health aggregations, and various charts. The Home
view also provides several links with immediate access to key CMDB tools.

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

Access

Role requirements: sn_cmdb_admin (CMDB Admin), sn_cmdb_editor
(CMDB Editor), or sn_cmdb_user (CMDB User).

To access the Home view, navigate to Workspaces > CMDB Workspace
and then select Home in the CMDB Workspace menu bar.

Now Assist for CMDB

Select the Now Assist icon

to access Now Assist for CMDB skills, agents,
and agentic workflows.

For more information, see Now Assist for Configuration Management
Database (CMDB).

Intelligent Search

Accessible to: CMDB Admin, CMDB Editor, CMDB User.

Lets you use Natural Language Query (NLQ) search capabilities provided
by Intelligent Search for CMDB. Use the input field to construct a search
string using everyday language. As you type, a dynamic list of relevant
suggestions appears, with items matching single words or part phrases in
the typed-in text, such as table names.

You can:

• Select Search tips to see tips about constructing search strings. See
details about the usage, examples for single and multi-table search,
advanced filtering, and relationships in Intelligent Search.

• Select Search to either run the query if the search string is already fully
converted into a valid CMDB query, or to open the Refine your query
dialog box.

•

If the search string has no ambiguities with the table name or
relationships, then the query runs and the results appear in a list view
format.

Only the first 100 results of the query appear in the results pane.

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

• Select Load More Results to view the next set of 100 results.

• Select Load All Results to view the rest of the query results, up to the
number specified by the glide.cmdb.query.max_results_limit system
property (10,000 by default).

If the constructed CMDB query contains more than a single table,
then the View in Query Builder button appears. Select the button to
open the CMDB Query Builder with your query fully constructed on
the Query Builder canvas. You can use the Query Builder to continue
editing the query.

• If there are any ambiguities with table names or relationship types
in the search string, then the search string can't be converted into
a valid CMDB query. In this case, the Refine your query dialog box
appears letting you select from suggested CI classes and continue to
parse your search string into a valid CMDB query. Those suggested CI
classes are based on phrases in your search string. Use the drop-down
lists to select the CI classes that match your intended search and then
select View search results to run the query.

• If Intelligent Search is unable to convert your search string into a
valid CMDB query, then selecting Search doesn't generate any query
results. Instead, a feedback form appears. Fill out the form and select
Submit Feedback to record your feedback for your CMDB Admin to
review.

• Use the Sample searches list to get you started in running a pre-defined
search. This list consists of more common searches, or searches that
are more difficult to construct such as searches that involve application
services.

• Use the Your recent searches list to rerun a previous search.

• Select Results Feedback to submit feedback on the search results for
your CMDB Admin to review.

For more details about using NLQ with Intelligent Search, see Intelligent
Search for CMDB.

Alternatively, you can select Use conditional search instead to use a
basic condition builder functionality where you can specify conditions to
search for CIs of a specific class.

You can:

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

• Select New condition set to add a condition phrase.

• Select Related List Condition to add a condition phrase for related lists.

• Select Search to search through the CMDB.

• Add and then adjust the sn_cmdb_ws.list.record_count_limit system
property to limit the record count summation and so to minimize the
performance impact of that operation. The record count shows on
the Conditional search page, for example, above the results list. For
more information about adding and modifying that system property,
see Components installed with CMDB Workspace.

In the results list, select a CI to see its details.

UI activity
Additional requirements

• Mapped Application Service

• Application Service

• Application Service Group

• Dynamic CI Group

• Tag Based Service

app_service_user role

• Business Service

• Technical Service

• Application Service Outage

service_viewer role

Important actions

Accessible to: CMDB Admin and CMDB Editor.

Important actions of various categories that require your attention or
action. There are several task categories such as:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

14

Zurich ServiceNow AI Platform Capabilities

---
*Page 15*

• Health tasks generated by CMDB Health: In health-related cards, such
as Duplicate CIs, Orphan CIs, stale CIs, and De-Duplication tasks, select
View CIs or View Tasks to show the list of associated CIs or important
tasks. In the CI list view page, you can select CMDB Health Dashboard
to open the CMDB Health Dashboard. In de-duplication-related cards
generated by IRE, you can access the De-duplication dashboard and
de-duplication libraries, to remediate de-duplication tasks in bulk.

• Data attestation and life cycle approval tasks generated by the

CMDB Data Manager: In data attestation-related cards, such as
Reassignment Requests and Unassigned Overdue cards, select View
Tasks to drill down to the associated important tasks.

Important actions are stored in the CMDB WS Imp Action Card
Config [sn_cmdb_ws_imp_action_card_config] table that is accessible
for editing only to users with the sn_cmdb_admin role. Authorized users
can modify attributes of an important action such as Active and Filter
conditions, but can't modify the Type, Persona, and Table attributes.

• Important action cards show per the logged in user role,
as specified in the CMDB WS Imp Action Card Config
[sn_cmdb_ws_imp_action_card_config] table.

• A card appears only if there is at least one record that meets the card's
filter condition.

• If you drill down a Health-related card and modify an associated CI,
any resulting impact to health KPIs might appear only after the next
cycle of the CMDB Health dashboard jobs.

For information about managing the cards in the Important actions tile,
see Modify important actions on the Home view of CMDB Workspace.

What's new

Accessible to: CMDB Admin, CMDB Editor, CMDB User.

Counts of newly created CIs within a recent time interval. The New
CIs total counts all CI types including applications, hardware, and
application services, which also appear in separate cards in the tile. By
default, historical data is aggregated for the Last 24 hours, which you can
set to a different time interval such as Last 7 days.

Select a card to drill down to a Performance Analytics KPI Details pane
that shows the trend for the respective item.

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

Counts in the What's new cards are based on the following tables:

Count
Table

New CIs
Configuration Item [cmdb_ci]

New application
Application [cmdb_ci_appl]

New hardware
Hardware [cmdb_ci_hardware]

New application services
Service Instance
[cmdb_ci_service_auto]

CI overview

The following tabs provide summaries about CIs:

CI Summary

Accessible to: CMDB Admin, CMDB Editor, CMDB User (without tabs).

A chart of all CIs in the CMDB, grouped by up to 20 CMDB groups.
The CMDB groups in the chart are specified as groups of closely-related
classes. On this chart, you can:

• Select a bar to drill down to the classes in the group and their CIs.

• Drill down a CI to show the CI form with a timeline, health overview,
and several types of attributes such as key and discovery attributes.

• Drill down a class to access the Create CI experience to create a
new CI in the selected class. For more information about the Create CI
experience which applies Identification and Reconciliation Engine (IRE)
processes, see Create a CI manually in CMDB Workspace.

•

Add custom class groups by creating CMDB groups with the following
settings:

• Group type is set to 'CMDB Workspace'.

• Populated by encoded queries.

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

Such custom class groups will appear after the next time that the CMDB
Workspace – Group and Encoded Query Counts scheduled jobs run
and update the CMDB Workspace.

Note:

In systems with a very large number of CIs, for example a billion or
more CIs, the set of queries that populate the CI Overview widget
might run for an unreasonable length of time. In that case, you can
choose to switch the default queries with a set of simpler queries
that can handle such load and properly load the CI Overview
widget. However, the results yielded from the simpler queries aren't
as complete or accurate as the results of the original queries.
A fundamental difference between the original and the simpler
queries is that the simpler queries use only Common Service Data
Model (CSDM) attributes for CI status (such as life_cycle_stage),
while the default queries also use the legacy operational_status and
status attributes. In an environment that hasn't migrated to CSDM,
the simple queries yield fewer results.

You can examine (read access only) the simple query in the Simple
Condition column in the cmdb_group_contains_encoded_query
table.

To use the simpler set of queries, set the
sn_cmdb_ws.ci_overview.enable_simple_condition system property
to true (false by default).

My CIs

Accessible to: CMDB Admin, CMDB Editor.

A chart of Cls with Managed By Group being one of the groups you are
a part of. CIs are grouped by up to 20 common class categories such as
Applications, Devices, and Servers. If there are more than 20 classes to
show, then all remaining classes are lumped into one additional bar on
the chart.

Select a class bar to drill down into the CIs for the class. Then drill down
to a CI's form with a timeline, health overview, and several types of
attributes such as key and discovery attributes.

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

Use the sn_cmdb_ws.ci_overview.managed_by_me.enabled property to
show or hide this chart.

Cloud vs Non-cloud resources

Charts showing counts and details for resources that are hosted on
various cloud services versus those resources that aren't, with breakdown
by key CI classes such as applications, databases, and datacenters.
Resources can be deployed on cloud services such as the Microsoft
Azure Cloud, or on the local instance or other non-cloud solutions. For
some ongoing operations in the organization, it might be necessary to
have those details that can be difficult to obtain.

The following conditions must be met for the Cloud vs Non-cloud
resources charts to appear and to show meaningful data:

• The table Cloud Service Accounts [cmdb_ci_cloud_service_account]
must exist.

• The Logical Datacenter [cmdb_ci_logical_datacenter] table must
contain at least one record for a cloud datacenter.

•

The Datacenter Types [sn_cmdb_ws_datacenter_type] table must
contain at least one record for a datacenter that is classified as
cloud storage in the organization. In the base system, this table is
pre-populated with several records for common cloud services such
as the Azure Datacenter [cmdb_ci_azure_datacenter] class. The chart
calculates and shows data only for cloud services for which there's a
record in the Datacenter Types [sn_cmdb_ws_datacenter_type] table.

For details about adding datacenters in your organization, with the
cloud or non-cloud classification, see Configure datacenters for Cloud
vs Non-cloud resources.

The following cloud vs Non-cloud charts are available:

• CI classes bar chart:

Each bar in the CI classes chart represents a pair of a CI class and
a storage type (cloud, non-cloud), such as the bar for Applications/
Cloud. For each bar, there's a scheduled job that runs every 24 hours to
collect and calculate the data for the bar. The running time depends

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

on the amount and complexity of the data that a job collects, which
can be different for each scheduled job. Also, the schedules of the jobs
are staggered so that they don't all run at the same time and exhaust
resources. For details about the class-specific criteria used for the chart
calculations, see Class criteria in Cloud vs Non-cloud resources chart.

If there’s a CI class/type pair that isn't important in the organization, you
can exclude that pair from the CI classes chart. For more details, see
Configure classes for Cloud vs Non-cloud resources.

On the CI classes chart, you can:

•

Select a bar to open the Cloud vs Non-cloud resources pane. Then,
select either of the following tabs to drill down into further details for
the bar:

Cloud vs Non-cloud CIs

Shows a bar chart for CIs stored on a cloud service and those CIs
that aren't, per CI class. For each CI class, select the cloud or the
non-cloud bar to show the CIs that are associated with the selected
bar, in a list view. You can then select a CI to see its details.

CI Classes by Cloud Providers

Pie charts per CI class with more granular details for those CIs that are
hosted on cloud providers. Pie slices have randomly-selected colors,
and they show a breakdown by cloud providers for various CI classes.
For each pie, select a slice to show the CIs that are associated with
the pie slice, in a list view. You can then select a CI to see its details.

•

Select Latest updates to see updated status for the scheduled jobs
that produce the data for the chart. Status is color-coded to indicate
whether the job has completed successfully (green), or failed to
complete (red).

• Application Services pie chart:
The Application Services pie chart uses the Service Configuration Item
Associations [svc_ci_assoc] table and checks the cloud/non-cloud
status of application service CIs in the CI classes chart. Application
services in the Application Services pie chart are classified as follows:

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

• Cloud: All of the CIs in the application service have been determined
to be hosted on a cloud service.

• Non-cloud: All of the CIs in the application service have been
determined not to be hosted on a cloud service.

• Hybrid: The application service contains a mixture of CIs where some
are hosted and some aren't hosted on cloud services.

• Unknown: The cloud/non-cloud classification couldn't be determined
because some of the application service CIs aren't classified as cloud
or non-cloud CIs.

Note:   Because classification of Application Services depends on
the classification of CIs in the CI classes chart, there might be
some discrepancy between the two charts. This can occur if an
application service CI changed its cloud/non-cloud status, and
the Application Services chart hasn't refreshed yet to reflect that
change.

Select the Application Services chart to access the list views of
the associated application services, grouped by cloud/non-cloud
classifications. From those list views, you can drill down to the
Dependency Views map for application services.

The scheduled jobs associated with the charts are set up with several
hard-coded limits that if exceeded, result in failure conditions that are
reflected in the job status. Timing out is set to two hours and the maximum
number of records to collect is set to 500,000. If a job exceeds any of
those limits, it's automatically stopped.

A scheduled job that can't complete for 3 (default) consecutive days is
automatically disabled for future runs. You can manage the disabling of
scheduled jobs, in the following ways:

• Modify the default number of consecutive days that are counted by
adding the sn_cmdb_ws.insight.category.disable_after_failure system
property to the System Properties [sys_properties] table and then setting
its value. For more details, see Add a system property.

• Resume a disabled scheduled job.

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

UI activity
Additional requirements

• Mapped Application Service
view

• Application Service

• Dynamic CI Group

• Tag Based Service

app_service_user role

My work

Accessible to: CMDB Admin, CMDB Editor, CMDB User.

All open tasks from CMDB Data Manager that are assigned to you, or to
an assigned group in the Managed by Group attribute which you are a
member of. For CMDB Admins, also tasks that aren't assigned to anyone
so that CMDB Admins can assign those unassigned tasks. Tasks can be,
for example, attestation tasks and life cycle-related tasks.

Select Open tasks and Overdue tasks to review and process the tasks.

CMDB Health

Accessible to: CMDB Admin, CMDB Editor, CMDB User.

KPIs health scores calculated by CMDB Health for CIs. Select a
percentage number for a KPI to navigate to the KPIs tile on the CMDB
Health Dashboard.

For more information, see CMDB Health, CMDB Health KPIs and metrics.

UI activity
Additional requirements

CMDB Health
asset or itil role

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

UI activity
Additional requirements

Configuring CMDB Health

Quick links

A list of links to key CMDB dashboards and tools. You can add a link to
the list of quick links that are available to you.

• Dependency Views: Provides a graphic infrastructure view for a CI and
any application or business services that it’s part of and that it supports.

• Query Builder: Easily build complex infrastructure and service queries,
that span multiple CMDB classes, non-CMDB tables, and that can
involve many CIs that are connected by different relationships.

• Data Manager: Centrally create, edit, review, publish, and track Data
Manager policies and the tasks generated by the policies.

• CI Class List: List view of CMDB CIs grouped by common classes.

• Unified Map: Graphical map showing the hierarchy of CIs and the
relationships between them, and application services. Directly from the
map, you can access attributes of CIs and relationships, and related
items such as changes, incidents, and problems for a CI.

• CMDB Health Dashboard: View CMDB Health reports and configure
the CMDB health KPIs and metrics that CIs are evaluated by in CMDB
Health dashboards.

• Relationship Health Dashboard: View the Relationship Health
Dashboard with CMDB Health scores for CI relationship.

• Create CI: Create a new CI while enforcing Identification and
Reconciliation Engine (IRE) processes and other requirements that result
in a valid and unique CI.

• Data Certification Dashboard: View Data Certification instances, tasks
and status such as past due certification tasks. Drill down to specific
tasks to reassign them for faster resolution.

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

UI activity
Accessibility
Additional requirements

Dependency View
CMDB Admin, CMDB
Editor, CMDB User

dependency_views
role

Query Builder
CMDB Admin, CMDB
Editor, CMDB User

cmdb_query_builder_r
ead role

Data Manager
CMDB Admin

Add or edit a custom
quick link

CMDB Admin, CMDB
Editor, CMDB User

• Cloud vs Non-cloud resources chart

The Cloud vs Non-cloud resources chart appears on the Home view in
CMDB Workspace.

## Cloud vs Non-cloud resources chart

The Cloud vs Non-cloud resources chart appears on the Home view in
CMDB Workspace.

Charts showing counts and details for resources that are hosted on
various cloud services versus those resources that aren't, with breakdown
by key CI classes such as applications, databases, and datacenters.
Resources can be deployed on cloud services such as the Microsoft
Azure Cloud, or on the local instance or other non-cloud solutions. For
some ongoing operations in the organization, it might be necessary to
have those details that can be difficult to obtain.

The following conditions must be met for the Cloud vs Non-cloud
resources charts to appear and to show meaningful data:

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

• The table Cloud Service Accounts [cmdb_ci_cloud_service_account]
must exist.

• The Logical Datacenter [cmdb_ci_logical_datacenter] table must
contain at least one record for a cloud datacenter.

•

The Datacenter Types [sn_cmdb_ws_datacenter_type] table must
contain at least one record for a datacenter that is classified as
cloud storage in the organization. In the base system, this table is
pre-populated with several records for common cloud services such
as the Azure Datacenter [cmdb_ci_azure_datacenter] class. The chart
calculates and shows data only for cloud services for which there's a
record in the Datacenter Types [sn_cmdb_ws_datacenter_type] table.

For details about adding datacenters in your organization, with the
cloud or non-cloud classification, see Configure datacenters for Cloud
vs Non-cloud resources.

The following cloud vs Non-cloud charts are available:

• CI classes bar chart:

Each bar in the CI classes chart represents a pair of a CI class and
a storage type (cloud, non-cloud), such as the bar for Applications/
Cloud. For each bar, there's a scheduled job that runs every 24 hours to
collect and calculate the data for the bar. The running time depends
on the amount and complexity of the data that a job collects, which
can be different for each scheduled job. Also, the schedules of the jobs
are staggered so that they don't all run at the same time and exhaust
resources. For details about the class-specific criteria used for the chart
calculations, see Class criteria in Cloud vs Non-cloud resources chart.

If there’s a CI class/type pair that isn't important in the organization, you
can exclude that pair from the CI classes chart. For more details, see
Configure classes for Cloud vs Non-cloud resources.

On the CI classes chart, you can:

•

Select a bar to open the Cloud vs Non-cloud resources pane. Then,
select either of the following tabs to drill down into further details for
the bar:

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

Cloud vs Non-cloud CIs

Shows a bar chart for CIs stored on a cloud service and those CIs
that aren't, per CI class. For each CI class, select the cloud or the
non-cloud bar to show the CIs that are associated with the selected
bar, in a list view. You can then select a CI from the list to further drill
down to the CI details pane.

CI Classes by Cloud Providers

Pie charts per CI class with more granular details for those CIs that are
hosted on cloud providers. Pie slices have randomly-selected colors,
and they show a breakdown by cloud providers for various CI classes.
For each pie, select a slice to show the CIs that are associated with
the pie slice, in a list view. You can then select a CI from the list to
further drill down to the CI details pane.

•

Select Latest updates to see updated status for the scheduled jobs
that produce the data for the chart. Status is color-coded to indicate
whether the job has completed successfully (green), or failed to
complete (red).

• Application Services pie chart:
The Application Services pie chart uses the Service Configuration Item
Associations [svc_ci_assoc] table and checks the cloud/non-cloud
status of application service CIs in the CI classes chart. Application
services in the Application Services pie chart are classified as follows:

• Cloud: All of the CIs in the application service have been determined
to be hosted on a cloud service.

• Non-cloud: All of the CIs in the application service have been
determined not to be hosted on a cloud service.

• Hybrid: The application service contains a mixture of CIs where some
are hosted and some aren't hosted on cloud services.

• Unknown: The cloud/non-cloud classification couldn't be determined
because some of the application service CIs aren't classified as cloud
or non-cloud CIs.

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

Note:   Because classification of Application Services depends on
the classification of CIs in the CI classes chart, there might be
some discrepancy between the two charts. This can occur if an
application service CI changed its cloud/non-cloud status, and
the Application Services chart hasn't refreshed yet to reflect that
change.

Select the Application Services chart to access the list views of
the associated application services, grouped by cloud/non-cloud
classifications. From those list views, you can drill down to the
Dependency Views map for application services.

The scheduled jobs associated with the charts are set up with several
hard-coded limits that if exceeded, result in failure conditions that are
reflected in the job status. Timing out is set to two hours and the maximum
number of records to collect is set to 500,000. If a job exceeds any of
those limits, it's automatically stopped.

A scheduled job that can't complete for 3 (default) consecutive days is
automatically disabled for future runs. You can manage the disabling of
scheduled jobs, in the following ways:

• Modify the default number of consecutive days that are counted by
adding the sn_cmdb_ws.insight.category.disable_after_failure system
property to the System Properties [sys_properties] table and then setting
its value. For more details, see Add a system property.

• Resume a disabled scheduled job.

## My Work view in CMDB Workspace

Use the My Work view in CMDB Workspace to manage your tasks.
Tasks in this view are related to data compliance such as attestation,
certification, and other life-cycle tasks.

For CMDB administrators, lists of tasks can also contain unassigned tasks,
for reassignment. For managers, tasks of direct reports are included, and
if you are a manager of a user group, then tasks of members in that
group are also included.

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

Access

Role requirements: sn_cmdb_admin (CMDB Admin), sn_cmdb_editor
(CMDB Editor), or sn_cmdb_user (CMDB User).

To access the My Work view, navigate to Workspaces > CMDB
Workspace and then select My Work in the CMDB Workspace menu bar.

Task status

The Task status section provides overall counts of tasks by their status.
Counts in each status card are for attestation, certification, and life-cycle
tasks as applicable. Total tasks for example, is a count of all open tasks
from CMDB Data Manager that are assigned to you, or to an assigned
group in the Managed by Group attribute which you are a member of.
For CMDB Admins, also tasks that aren't assigned to anyone are included.
The Closed card counts all tasks that are in a closed state ('Closed
Complete', 'Closed Canceled', 'Closed Incomplete', and 'Rejected').

Select a status card to show the associated tasks in the various lists
such as Attestation tasks and Certification tabs in the My tasks section.
For example, when you select the In progress status card in the Task
status section, the Attestation tasks list shows attestation tasks that are
in progress and the All other tasks list shows all non-attestation and non-
certification tasks that are in progress.

Certification tasks

The Certification tasks tab in the My tasks section lists any Data
Certification tasks assigned to you or to an assignment group that
you belong to in accordance with CMDB Data Manager policies. For
managers, tasks of direct reports are included, and for user group
managers, tasks of members in the group are also included. Review and
process these tasks by checking audit results for the associated CIs and
attribute values. For more information about reviewing Data Certification
tasks, see Review certification tasks in CMDB Workspace.

Attestation tasks

The Attestation tasks tab in the My tasks section lists any attestation
tasks assigned to you or to an assignment group that you belong
to in accordance with CMDB Data Manager Attestation policies. For
managers, tasks of direct reports are included, and for user group
managers, tasks of members in the group are also included. Review and

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

process these attestation tasks by checking the physical existence of
IT infrastructure or applications associated with the CIs in the tasks. For
information about reviewing and processing attestation tasks, see Review
CMDB Data Manager attestation tasks in CMDB Workspace.

The Overdue tasks tab lists those tasks that are overdue so you can
review those tasks at a higher priority.

Life-cycle tasks

The All other tasks tab in the My tasks section lists any tasks, aside from
attestation and certification tasks, assigned to you or to an assignment
group that you belong to in accordance with CMDB Data Manager
policies. The list includes tasks that are in a closed state ('Closed
Complete', 'Closed Canceled', 'Closed Incomplete', and 'Rejected').
For managers, tasks of direct reports are included, and for user group
managers, tasks of members in the group are also included. For
information about reviewing and processing life-cycle tasks, see Review
CMDB Data Manager tasks.

## CMDB 360 view in CMDB Workspace

The CMDB 360 dashboard provides aggregations and analysis of CMDB
360 data. CMDB 360 collects data about all the discovery sources
reporting attribute values for CIs. Use the CMDB 360 view in CMDB
Workspace to track activities and identify potential issues of discovery
sources. You can also create your own queries and associated schedules
and reports to explore CMDB 360 data.

• For concepts and other background information about CMDB 360, see

CMDB 360/Multisource CMDB.

• For information about all CMDB 360 dashboard settings, see Configure
the CMDB 360 dashboard.

• For information about using the CMDB 360 view, see CMDB 360
experience in CMDB Workspace.

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

Note:   Most cards on the CMDB 360 dashboard support non-
CMDB tables in their aggregation, or can be configured to provide
support. However, the CIs not reported by discovery sources card,
for example, doesn't apply to non-CMDB tables. Creating queries for
non-CMDB tables is also supported. For information about support for
non-CMDB tables, see IRE support for non-CMDB tables.

Access

Requirements:

• Role requirement: sn_cmdb_user (CMDB user) or any role containing
sn_cmdb_user

• Additional requirement: Enable and configure CMDB 360

To access the CMDB 360 view in the CMDB Workspace, navigate to
Workspaces > CMDB Workspace. In the CMDB Workspace menu bar,
select CMDB 360.

## Insights view in CMDB Workspace

Use the Insights view in CMDB Workspace to see and increase the level of
adoption of key CMDB features and application services to improve the
overall health of the CMDB. Explore how tools and features can maximize
the health and efficiency of your CMDB and use direct links to install and
start using features immediately.

Access

Role requirement: sn_cmdb_user (CMDB User), or a user role containing
sn_cmdb_user (sn_cmdb_admin, sn_cmdb_editor).

To access the Insights view, navigate to Workspaces > CMDB Workspace
and then select Insights in the CMDB Workspace menu bar.

The Insights view includes the following tiles:

• CMDB feature adoption

• CMDB performance insights

• Application services

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

• Cloud vs Non-cloud resources

CMDB feature adoption

Shows dial charts for the overall adoption levels of all three categories of
CMDB tools and features:

Data ingestion

Tools and features that support and ensure ingestion of high-quality data
into the CMDB.

Data governance

Tools and features that let you manage the CMDB data after it has been
ingested.

Search and analytics

Tools and features that provide meaningful and helpful insights into the
CMDB data.

Select each dial chart in the tile to access its tab and associated
cards with further details about the features in the category. Pay special
attention to categories with low levels of adoption and those features
that aren't yet implemented in the instance and which you should
consider for adoption.

Each category tab shows cards for the features in the category and the
following general cards:

• Overall adoption level for the tab: The calculated overall level of
adoption for the tab. Calculations are specific for each tab, and can
be based, for example, on the level of adoption of some or all the
features in the tab.

• Adoption progress: Installation, activation, or usage status per feature in
the tab. Select a feature link to access a relevant resource such as the
feature's landing page with an overview dashboard or an installation
location.

Depending on adoption level, a card might contain any of the following
resource links:

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

• Learn more: Link to documentation to learn and explore the benefits
and usage of the feature.

• View demo: Link to a short demo about the feature.

• Get started: Link to a landing page where you can start immediately
utilizing the feature.

• Install app: Link to the ServiceNow Store where you can immediately
install the app.

Cards use different methods to examine the instance and determine
if the card's feature is installed, activated, and being used. For
example, some cards check for the installation status of plugins
and some cards rely on data in the specific feature tables. Many
counts and aggregation data that appear on cards is based on
Performance Analytics indicators built on top of the Base Aggregate
Data [sn_cmdb_ws_base_aggregate_data] table.

• If the result is that the card's feature is installed or being used, then the
card shows charts and counts about the level of usage. In which case,
the card's label might slightly adjust.

• If the result is that the card's feature isn't installed or isn't in use, then links
are provided to resources where you can explore, install, and start using
the feature.

Most of the cards scheduled jobs run every 24 hours, therefore,
depending on the type of data, some card data is based on recent but
not current data. The Last updated timestamp in the cards reflects the
collection time for the data that was used for the card. Also, immediately
after getting started with a feature, a card won't reflect on the latest
status or usage of the feature, until up to 24 hours when the card's
scheduled job runs (for the CIs processed by IRE based on source card,
the associated scheduled job, CMDB Workspace - Populate aggregates
Monthly, runs monthly).

The following sections provide details for each card, including the
calculation script used for the card.

CMDB feature adoption: Data ingestion

The overall adoption level for data ingestion maps to the following
findings in the instance:

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

• Low (red): Less than 80% of CIs are processed by Identification and
Reconciliation Engine (IRE)

• Moderate (amber): 80—90% of CIs are processed by IRE

• High (green): Over 90% of CIs are processed by IRE

Data ingestion contains the following features and aggregations:

CIs processed by IRE

Determines the percentage of CIs that are processed by IRE, by
checking the Source [sys_object_source] table. CIs that aren't processed
by IRE introduce a data integrity risk.

The percentage of CIs that are being processed by IRE determines both,
the level of adoption for this feature card and the overall adoption level
for the entire data ingestion category.

Service Graph Connectors

Determines the installation and usage status of Getting started with
Service Graph Connectors, by checking:

• If the ITOM Licensing plugin (com.snc.itom.license) is active

• If there is at least one Service Graph Connector installed in the instance

If Service Graph Connectors are installed and are in use, then the card
shows a count of those connectors.

Note:   The count of Service Graph connectors that appears on the
card might be slightly different than the number of connectors that
show on the ServiceNow Store site because the counting methods
that are used are different.

IntegrationHub ETL

Determines whether the IntegrationHub ETL store app is installed and
used, based on records in the CMDB Integration Studio Application Data
Sources [cmdb_inst_application_feed] table. If IntegrationHub ETL is in
use, then the card shows a count of ETL transform maps in IntegrationHub
ETL (demo ETL transform maps aren't counted).

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

Select View ETL transform maps to open IntegrationHub ETL where you
can examine existing ETL transform maps and create new ones.

CIs processed by IRE based on source

Chart showing CIs processed by IRE, grouped by Service Graph
Connectors, ServiceNow Discovery, a combination of both, and others,
for the past six months.

The following discovery sources are counted as ServiceNow Discovery:

• ServiceNow

• ServiceWatch

• ACC-Visibility

• AgentClientCollector

• CredentiallessDiscovery

Point to the chart to show monthly aggregation data.

This card is hidden if there are no CIs processed by IRE.

CMDB application for APIs and CLI

Determines whether the CMDB application for APIs and CLI store app is
installed.

This card appears only if the store app isn't installed, providing helpful
resources for exploration and adoption.

CMDB feature adoption: Data governance

The overall adoption level for data governance maps to the following
findings in the instance:

• Low (red): Less than 33% of features are used

• Moderate (amber): 33—66% of features are used

• High (green): Over 66% of features are used

The overall level of adoption of data governance is based on whether
CMDB Data Manager features are used.

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

Note:   Historical data might not be available for all past 90 days
because CMDB Workspace version 3.4, which relies on Performance
Analytics indicators to collect and save historical usage data, was
deployed less than 90 days ago. This situation might result in a
discrepancy between actual usage and what the card shows.

CMDB Data Manager/CIs used in Data Manager policies

Determines usage by checking if either of the following conditions is true:

• There are any user-created Delete, Retire, or Archive policies
(by searching table CMDB Data Manager Policy and Attributes
[cmdb_data_manager_policy_and_attributes])

• There are any CIs processed by these user-created Delete,
Retire, or Archive policies, in the last 90 days (by
searching table CMDB Data Management Policy Executions
[cmdb_data_management_policy_execution])

If CMDB Data Manager is in use, shows a chart with CIs that were
processed by these policies in the past six months, by month, and by
policy type.

Data attestation/CIs used in data attestation

Determines usage by checking if either of the following conditions is true:

• There are any user-created Attestation policies (by
searching table CMDB Data Manager Policy and Attributes
[cmdb_data_manager_policy_and_attributes])

• There are any CIs processed by these user-created Attestation policies,
in the last 90 days (by searching table CMDB Data Management Policy
Executions [cmdb_data_management_policy_execution])

If data attestation is in use, shows a chart with CIs that were processed by
attestation policy tasks in the past six months, by month.

Data synchronization

Checks if there is at least one class for which the managed_by_group
attribute is globally set so that all class CIs are synchronized on the same
value.

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

For information about synchronizing group assignment attributes using the
CI Class Manager, see Set the group for a CI or an entire class of CIs and
Synchronizing group assignment attributes.

The Data synchronization card is available starting with CMDB Workspace
v3.6.

Principal classes

Checks if the Principal Class filter is configured with at least one principal
class. The Principal Class filter limits the number of CIs that appear in list
views, to show only CIs of principal classes. Reducing the amount of data
in list views to only relevant data, improves performance and efficiency.

For more information about managing the Principal Class filter in CI Class
Manager, see Update class list in the Principal Class filter.

The Principal class card is available starting with CMDB Workspace v3.6.

CMDB feature adoption: Search & analytics

The overall adoption level for search & analytics maps to the following
findings in the instance:

• Low (red): Less than 33% of features are used

• Moderate (amber): 33—66% of features are used

• High (green): Over 66% of features are used

Search & analytics contains the following features and aggregations:

CMDB Query Builder/Query Builder queries

Determines if the CMDB Query Builder is in use, by checking if either of the
following conditions is true:

• There are any records in the Saved Queries [qb_saved_query] table in
which Source is QB

• There are any queries executed or queries executed with reports, in the
last 90 days

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

Note:   Historical data might not be available for all past 90
days because CMDB Workspace version 3.4, which relies on
Performance Analytics indicators to collect and save historical
usage data, was deployed less than 90 days ago. This situation
might result in a discrepancy between actual usage and what the
card shows.

If CMDB Query Builder is in use, shows a chart with counts of query
executions and query executions in reports, for the past six months, by
month.

Point to the chart to see monthly aggregation data.

Intelligent search

Determines if Intelligent Search for CMDB is in use by checking the
NLQ Query Logs [nlq_query_log] table for any records where source is
CMDB_WS, from the past 90 days. If Intelligent Search is in use, shows
counts of Intelligent Search queries for the past six months, by month.

Note:   Historical data might not be available for all past 90 days
because CMDB Workspace version 3.4, which relies on Performance
Analytics indicators to collect and save historical usage data, was
deployed less than 90 days ago. This situation might result in a
discrepancy between actual usage and what the card shows.

CMDB 360 — Records in Multisource

Total number of raw CMDB 360 records in the CMDB 360 data store that
contains records for each discovery source report, per each CI attribute.
This card is identical to the Total CMDB 360 records card in the Discovery
Sources tile in the CMDB 360 view.

This card appears only if CMDB 360 is enabled, which
is determined by checking the ITOM Discovery License
(com.snc.itom.discovery.license) plugin and the system property
glide.identification_engine.multisource_enabled.

CMDB 360 queries

Count of CMDB 360 queries that exist in the CMDB Multisource Queries
[cmdb_multisource_query] table.

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

This card appears only if CMDB 360 is enabled, which
is determined by checking the ITOM Discovery License
(com.snc.itom.discovery.license) plugin and the system property
glide.identification_engine.multisource_enabled.

CMDB Data Foundation dashboard

Determines if the CMDB and CSDM Data Foundations Dashboards store
app (which includes the CMDB Data Foundation dashboard) is installed.

This card appears only if the store app isn't installed, providing helpful
resources for exploration and adoption. However, the feature is still
included in calculating the search & analytics overall level of adoption.

CMDB Health Dashboard

Determines if CMDB Health is in use by checking if at least one CMDB
Health Dashboard job is enabled.

This card appears only if the feature isn't in use, providing helpful
resources for exploration and adoption. However, the feature is still
included in calculating the search & analytics overall level of adoption.

CMDB performance insights

CMDB performance insights is available starting with CMDB Workspace
v3.6 and only appears for users with the sn_cmdb_admin (CMDB Admin)
role.

CMDB performance insights helps you understand the ways in which
your configurations impact the performance of your CMDB. You can use
the charts and tools within CMDB performance insights to troubleshoot,
debug, or diagnose performance issues. CMDB performance insights also
analyzes your CMDB and Service Graph Connectors on your instance to
generate recommendations on how you can improve the performance
of your CMDB. The CMDB performance insights tile itself can show up to
two of those recommendations.

Select View performance insights to access the CMDB performance
insights data.

The Payloads & CIs tab contains the following tiles:

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

Partial payloads

Partial payloads occur when the data source didn't provide enough
information to uniquely identify the CI, preventing IRE from processing the
CI.

• Total partial payload count:

Shows the total number of partial payloads that exist in your instance.
Large numbers of partial payloads in your instance can cause
performance deterioration of the CMDB.

For more information about partial payloads, see Identification and
Reconciliation engine (IRE).

• Discovery source:

Breaks down the number of partial payloads by discovery sources. You
can drill down on slices in this pie chart to see the list of partial payloads
with errors, filtered by discovery source.

You can drill down on specific partial payloads to better understand
the error that you're experiencing. When you drill down on a partial
payload, you can see the full payload item, which you can review to
troubleshoot and address the specific errors.

For more information about error types, see Using identification
simulation.

Related records

Data about related records that are missing references. A record is
missing a reference when the Referenced field for that record is empty.

• Related records missing reference:

Shows the total number of records that do not reference a CI in the
Referenced field in the Related table. You can see a full list of the
Related tables and the associated Referenced fields in the Related
Entries [cmdb_related_entry] table.

For more information about Related tables, see Overview of CMDB.

• Related records missing reference by table:

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

Breaks down the number of CMDB records missing references, by table.
You can drill down on slices in this chart to see the list of specific records
filtered by table.

Before you can drill down on a slice of this pie chart, you must have any
user roles required to view the table.

You can also select New from the list view to create a new related
entry table record. For more information about creating or editing
a related entry table record, see Edit a related table from CMDB
performance insights.

Duplicate and stale CIs

A CI is flagged as duplicate during identification and reconciliation. A CI
is flagged as stale if it has not been updated within the Effective Duration
time period specified in the CMDB Health staleness rule for the CI class.

• CIs:

Shows the number of CIs that are either duplicate or stale.

• Stale records by class:

Breaks down the number of stale CIs based on the CI class. You can
drill down on slices in this pie chart to see the list of specific CI records
filtered by class.

For more information about stale CIs, see CMDB Health KPIs and
metrics.

• Duplicate records by class:

Breaks down the number of duplicate CIs based on the CI class. You
can drill down on slices in this pie chart to see the list of specific CI
records.

For more information about duplicate CIs, see Duplicate CIs
remediation.

Relationship records missing parent or child

Shows the trend line and number of relationship records in the CI
Relationships [cmdb_rel_ci] table that are missing a parent or child CI.

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

CIs that are missing a parent or child are considered invalid records and
can have a performance impact on your instance.

Recommendations

Recommendations on this panel include a link to the related
documentation and typically enable direct access to the associated
tool, feature, or system property. Expand or minimize the panel by
selecting the light bulb icon.

The first two recommendations appear on the CMDB performance
insights tile of the Insights view.

You can only see a recommendation if you have the roles
needed to access the feature, tool, or system property. Users
with the sn_cmdb_admin role can hide recommendations or adjust
the order in which recommendations appear. Users can use the
Active and Order fields in the CMDB WS Imp Action Card
Config [sn_cmdb_ws_imp_action_card_config] table to configure those
elements.

The Service Graph connectors tab contains the following tiles:

Note:

• The Service Graph connectors tab only appears if your instance
has at least one Service Graph Connector and you have the
cmdb_inst_admin role.

• To edit data source or scheduled data import records from
CMDB Workspace, you may need to set Application scope to the
Application of the data source or data import.

Connectors data source

Configurations on your Service Graph Connector data sources affect
the ingestion and processing of incoming data. Changing your Service
Graph Connector data source configurations can streamline data
handling, making your CMDB more efficient and reducing impacts on
the performance of your instance.

• Sources with batch processing turned off:

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

Shows the percentage of Service Graph Connector data sources in the
Data Sources [sys_data_source] table with disabled Use Batch Import.
It also lists the total number of data sources, and the number of data
sources with enabled or disabled batch processing.

To enable batch processing, access the record of a specific data
source from the list view and select Use Batch Import. For more
information about batch processing, see Data source fields.

You can also select Edit to update a data source from the list view. For
more information about editing a data source, see Edit a data source
from CMDB performance insights.

• Sources with concurrent import turned off:

Shows the percentage of scheduled data imports of Service
Graph Connector data sources in the Scheduled Data Imports
[scheduled_import_set] table with Concurrent Import turned off. It also
lists the total number of scheduled data imports, and the number of
scheduled data imports with Concurrent Import turned on or off.

To enable concurrent import, access the record of a specific
scheduled data import from the list view and select Concurrent Import.
For more information about concurrent import, see Concurrent imports.

You can also select Edit to update a scheduled data import from the
list view. For more information about editing a scheduled data import,
see Edit a scheduled data import from CMDB performance insights.

• Sources with non-custom size partition method:

Shows the percentage of scheduled data imports of Service
Graph Connector data sources in the Scheduled Data Imports
[scheduled_import_set] table that use a non-custom size partition
method. It also lists the total number of scheduled data imports, and
the number of scheduled data imports that use a non-custom size
partition method.

To use a custom size partition method, access the record of a specific
scheduled data import from the list view. Ensure that Concurrent Import
is selected. From the Partition Method drop-down menu that appears,
select Custom size. For more information about partition methods, see
Schedule a data import.

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

You can also select Edit to update a new scheduled data import from
the list view. For more information about editing a scheduled data
import, see Edit a scheduled data import from CMDB performance
insights.

Connectors execution trends

Aggregates Service Graph Connectors with outlier connector executions,
where the number of imported rows or the rate of processing is
significantly higher or lower than the 30-day trend.

• Connectors with processing rate outliers:

Shows the number of Service Graph Connectors that are considered
outliers with connector execution processing rates outside the
expected trend lines within the past 30 days.

• Connectors with import count outliers:

Shows the number of Service Graph Connectors that are considered
outliers with connector execution import counts outside the expected
trend lines within the past 30 days.

You can drill down the cards in the Connectors execution trends tile to
access the Service Graph connector execution trends window. In that
windows, a Service Graph Connector is available in the connectors drop-
down menu only if it has an execution record.

Click the tabs on the Service Graph connector execution trends window
to view the following charts and the Connector Execution list view of
executed connector import sets:

• Processing rate:

Models the trend line of processing rates for connector executions.
Shows the rate at which a connector processes rows of data over a
period of time.

There are two zones, which are the Confidence Band and
the Prediction Band. Service Graph Connectors with connection
executions that have processing rates outside of the Prediction Band
are considered outliers. These zones don't appear when you select
more than one Service Graph Connector.

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

• Import count:

Models the trend line of rows processed for connector executions.
Shows the number of rows a connector processes over a period of time.

There are two zones, which are the Confidence Band and the
Prediction Band. Service Graph Connectors with connector executions
that have import row counts outside of the Prediction Band are
considered outliers.

On both charts, you can select outlier and non-outlier Service Graph
Connectors to see the trend lines against each other.

For more information about processing data with Service Graph
Connectors, see Getting started with Service Graph Connectors.

Cloud vs Non-cloud resources

Charts showing counts and details for resources and application services
that are hosted on various cloud services versus those that aren't.
Resources and application services can be deployed on cloud services
such as the Microsoft Azure Cloud, or on the local instance or other non-
cloud solutions. For some ongoing operations in the organization, it might
be necessary to have those details which can be difficult to obtain.

For details about the charts, see 'Cloud vs Non-cloud resources' in the
Home view in CMDB Workspace topic.

Application services

Shows a count of application services in your organization, based on
records in the Service Instance [cmdb_ci_service_auto] table. The chart
shows the trend of total number of application services per day, for the
past seven days.

Select the tile to access the Application Services dashboard where you
can monitor the adoption level and health of application services. For
details about the Application Services dashboard, see Use Application
Services dashboard to monitor health.

## Management view in CMDB Workspace

The Management view provides CMDB Admins with quick access to key
management tools and deep insights into CMDB health and activities.

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

The view provides and details such as duplicate CIs and recent activities
in the CMDB.

Access

Role requirement: sn_cmdb_admin (CMDB Admin)

To access the Management view, navigate to Workspaces > CMDB
Workspace and then select Management in the CMDB Workspace menu
bar.

CMDB Data Manager

The following cards show details about CIs and policies associated with
CMDB Data Manager:

Rejected CIs

CIs set as rejected during a review of attestation tasks.

Excluded CIs

CIs set as excluded from CMDB Data Manager policies.

Draft policies

Draft Data Manager policies that were created but not published.

CI Correctness

Cards in this section show health state for the sub metrics of the CMDB
Health correctness KPI. Counts are based on testing CIs against pre-
defined data integrity rules such as:

• Identification rules (to detect duplicate CIs)

• Orphan CI rules

• Staleness CI rules

You can set the time interval used in calculations for these counts.

For more information about the correctness KPI, and the duplicate,
orphan, and stale sub metrics, see CMDB Health KPIs and metrics.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

44

Zurich ServiceNow AI Platform Capabilities

---
*Page 45*

Recent activity trends

The following cards show recent activities in the CMDB:

Recent CI Activity

A 7-day chart showing metrics and trend line related to CIs such as the
number of new CIs and updated CIs.

Recent Application Service Activity

A 7-day chart showing metrics and trend line related to Application
Services such as the total number of Application Services, new and
updated Application Services, and the number of Application Services
with outages.

Management tools

Provides links that you can use to access CMDB dashboards, tools, and
list views. The links are grouped by categories as described below.

Note:   Some links are conditionally available based on installation
of applications, active plugins, and your assigned role. For a link that
doesn't appear, make sure that all the requirements for the link are
met.

Manage:

•

CI Class Manager: Centrally view, create, or edit class definitions and
class settings for Identification and Reconciliation (IRE) and for CMDB
Health.

Additional role requirement: itil or personalize_dictionary.

• Data Manager: Centrally create, edit, review, publish, and track Data
Manager policies and the tasks generated by the policies.

• De-duplication Template Library: Create and manage de-duplication
templates and libraries to remediate de-duplication tasks in bulk.

• De-duplication Dashboard: Show counts and insights for duplicate CIs
in the CMDB, and run and track de-duplication templates to remediate
de-duplication tasks in bulk.

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

• CMDB Groups: Show a list view of current CMDB groups where you can
create new CMDB groups, and manage the existing CMDB groups. A
CMDB group is a collection of CIs to which you can apply CI actions
collectively to all the CIs in the group. For example, CMDB Health can
monitor CIs in a Health-type CMDB group, and report the aggregated
health for the group as a whole.

• Dynamic CI Groups: Show a list view of current dynamic CI groups
where you can create new dynamic CI groups, and manage the
existing ones. Dynamic CI Groups act as application services that are
populated with members of the CMDB group that is associated with the
dynamic CI group. For more information about dynamic CI groups, see
Application services.

Optimize:

• CMDB Health: View the CMDB Health dashboards and configure the
CMDB health KPIs and metrics that CIs are evaluated by in CMDB
Health dashboards.
Additional requirements:

• Set up and configure CMDB Health

• Roles: asset or itil

• CMDB Data Foundations Dashboard: View the CMDB Data Foundations
dashboard where you can explore potential risks in the CMDB
implementation, and verify that important data is valid and properly
configured.
Additional requirements:

• Set up CSDM and CMDB Data Foundations Dashboards

• Roles: asset, Itil_admin, or admin

• Plugin: com.snc.cmdb.getwell

• CSDM Data Foundations Dashboard: View the CSDM Data Foundations
dashboard where you can explore key CSDM metrics on a single page
to assist you in getting the full benefit from your implementation.
Additional requirements:

• Set up CSDM and CMDB Data Foundations Dashboards

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

• Roles: app_service_admin, app_service_user, asset,
cmdb_read, itil_admin, portfolio_admin, service_viewer, or
technology_service_owner

• Plugin: com.snc.cmdb.getwell

• De-Duplication Tasks: Remediate a de-duplication task by using
the Duplicate CI Remediator wizard which guides you through the
duplicate CI reconciliation process.

Additional role requirement: itil.

• CMDB Remediation Rules: Rules associated with a CMDB Health task
that was created for a failed CMDB Health test. A CMDB remediation
rule runs a remediation workflow to remediate an issue reported by
CMDB Health.

Visualize:

• Dependency Views: Provides a graphic infrastructure view for a CI
and any applications or business services that it is part of and that it
supports.

Additional role requirement: dependency_views.

• Query Builder: Easily build complex infrastructure and service queries,
that span multiple CMDB classes, non-CMDB tables, and that can
involve many CIs that are connected by different relationships.

Additional role requirement: cmdb_query_builder_read.

Create: New Technical Service

Additional role requirement: service_admin.

## Configuration identifiers framework

Configuration identifiers provide a framework that lets you customize
some behaviors of a CMDB Workspace feature, enabling different
settings for that feature, on different workspaces. Most importantly,
you can use this customization framework when integrating a CMDB
Workspace feature into another workspace.

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

Configuration identifier

A configuration identifier (also referred to as config identifier) is a
configuration element within the configuration identifiers framework.
A config identifier contains custom settings for a CMDB Workspace
feature, that is applicable to a specific workspace. A config
identifier contains settings and table-driven configurations used in a
UX application such as a workspace. Using config identifiers lets you
for example, integrate CMDB Workspace Unified Map into another
workspace, with the integrated Unified Map being customized for
the workspace. Config identifiers are stored in the Config identifiers
[sn_cmdb_ws_config_identifier] table.

A config Identifier acts as the parent record for a set of configurations
that are specific to a workspace and therefore overrides default
behavior only for that workspace.

Default config identifier

Initially, the Config identifiers [sn_cmdb_ws_config_identifier] table in
CMDB Workspace, contains a single config identifier named ‘Default’
and which is workspace-agnostic. This Default config identifier has its
Default column set to Yes, a setting that can't be modified. Only a
single config identifier can be set to Yes, therefore, any additional config
identifiers that you create are set to No.

The default config identifier contains default settings for CMDB
Workspace features. Any subsequent Config Identifier that you configure,
is set for a specific workspace. When integrating a CMDB Workspace
feature into another workspace and there are no entries in the table-
driven configuration for that feature, look-up uses the settings in the
default configuration identifier.

Key roles

The following roles are needed in order to use the configuration identifiers
framework:

• sn_cmdb_ws.config_editor: Can modify child config tables, such as
sn_cmdb_ws_config_property.

• sn_cmdb_ws.config_admin: Can modify both
sn_cmdb_ws_config_identifier and child config tables.

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

• sn_cmdb_admin: Role required to modify default config records under
the default identifier or the default identifier itself.

For more information about these roles, see Components installed with
CMDB Workspace.

Examples of CMDB Workspace features using the configuration
identifiers framework for feature settings

• Unified Map:

• Configure how many nodes can appear on a map

• Configure the default or maximum number of levels on maps

• Configure endpoint de-duplication on maps

• Configure which attributes to display in the Attributes panel

• Create a class profile of visible layers for classes

• Configure CIs to appear based on life cycle stage value

• Create CI:

• Request additional attributes for new CIs

• Limit the class list for new CIs created in a workspace

## Configuring CMDB Workspace

Plan and configure your implementation of CMDB Workspace.

Configuration overview

1. Set up CMDB Workspace

Request the store app and enable demo data.

2. Configure any of the following options to show the most relevant
data in your organization:

• Modify important actions on the Home view of CMDB Workspace

• Add a quick link to the Home view of CMDB Workspace

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

• Configure datacenters for Cloud vs Non-cloud resources

• Configure classes for Cloud vs Non-cloud resources

• Set up CMDB Workspace

Set up and access the CMDB Workspace store app.

• Modify important actions on the Home view of CMDB Workspace

Modify the appearance order and other properties of the important
action cards that appear on the Home view of the CMDB Workspace.

• Add a quick link to the Home view of CMDB Workspace

For an immediate access to tools or data that you need, add your own
quick link to the Home view of CMDB Workspace.

• Configure datacenters for Cloud vs Non-cloud resources

The Cloud vs Non-cloud resources chart in CMDB Workspace
determines which CIs and application services are stored on a cloud
and which aren't in the organization. In addition to base system
classifications, you can add cloud versus non-cloud classifications that
reflect specific datacenter deployments in the organization.

• Configure classes for Cloud vs Non-cloud resources

Include or exclude pairs of CI Class/Type in the Cloud vs Non-cloud
resources chart in CMDB Workspace.

• Request additional attributes for new CIs

Integrate a request for specific CI attributes when manually creating
a new CI in your workspace. Then, when creating a new CI in
the respective workspace, users can enter values for the requested
attributes, as appropriate for the new CI.

• Limit the class list for new CIs created in a workspace

Limit the selection of classes for a new CI being manually created
in your workspace, to only those classes that are relevant to that
workspace. When then creating a new CI in the respective workspace,
users can only select a class that is authorized as an option.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

50

Zurich ServiceNow AI Platform Capabilities

---
*Page 51*

## Set up CMDB Workspace

Set up and access the CMDB Workspace store app.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Note:   The CMDB Workspace store app is automatically installed
when installing or upgrading the product.

Enable demo data

Enable demo data to install demo data-specific scheduled jobs that if
the needed requirement is met, generates and populates demo data in
CMDB Workspace cards such as:

• Cloud vs Non-cloud resources chart in the CMDB Workspace
landing page and the Insights view: If Cloud Service Accounts
[cmdb_ci_cloud_service_account] table exists

• Cards in the CMDB 360 view: If CMDB 360 is enabled

• Cards in the Insights view, CMDB Feature Adoption tile:

• CIs processed by IRE

• CIs processed by IRE based on source

• Data Manager

• Data attestation

• Query Builder

• Intelligent Search

• Cards in the What's new tile in the CMDB Workspace landing page.

To populate CMDB Workspace dashboards with demo data:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

51

Zurich ServiceNow AI Platform Capabilities

---
*Page 52*

1. When installing the CMDB Workspace store app, check Load demo
data.

2. Access the [Demo] — CMDB Workspace demo data scheduled job
and select Execute Now.

Note:   As a general practice, don't enable demo data in
a production instance to prevent demo data mixing with real
production data.

Prerequisites

• Plugins:

•

Recommended: CSDM Activation (com.snc.cmdb.csdm.activation)

Allows for legacy Lifecycle Status field mappings and synchronization
to legacy status fields. For details about use and customization of
retirement definitions when this plugin isn't activated, see Retirement
definitions.

• Required (activated by default): CMDB CSDM Support
(com.snc.cmdb.csdm)

• Required (activated by default): CMDB Page Templates
(sn_cmdb_pg_templts)

• Required (activated by default): CMDB NLQ Search Connected (sn-
cmdb-nlq-search)
For details about activating a plugin, see Activate a plugin.

• Roles: To access the CMDB Workspace, you must, at a minimum, have
one of the following roles, which are essential for interacting with the
CMDB Workspace. Depending on which of these roles is assigned to
you, you might only have access to some of the features available in
the CMDB Workspace:

• sn_cmdb_admin

• sn_cmdb_editor

• sn_cmdb_user

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

52

Zurich ServiceNow AI Platform Capabilities

---
*Page 53*

Note:   As you drill down in the CMDB Workspace, there are some
dashboards and list views that require specific roles in addition to
the key CMDB Admin, CMDB Editor, or CMDB User roles.

• Features: CMDB Workspace provides access to a wide range of
applications and features. However, for CMDB Workspace to provide
meaningful reports, overviews, and trends, you must set up and
configure some of those features. Setup for such features is listed under
Additional requirements.

Access the CMDB Workspace

Navigate to Workspaces > CMDB Workspace to access CMDB
Workspace.

Home view is the default view of CMDB Workspace and you can also use
other views to access CMDB features:

• Home view in CMDB Workspace: View various CMDB Health
aggregations, use Intelligent Search to search through the CMDB, see
what changed in the CMDB, and access important tasks. This is the
default view for CMDB Workspace.

• My Work view: Manage CMDB Data Manager tasks such as attestation
tasks, that are assigned to you.

• CMDB 360 view: View aggregations and analysis of CMDB 360 data on
a dashboard, and create CMDB 360 queries.

• Management view: View recent key activities and health indicators for
the CMDB, and access management tools and dashboards (accessible
only to CMDB admins) that support your management tasks.

• Insights view: View level of adoption of key CMDB tools, features,
and application services. Explore benefits and install those tools and
features to maximize the efficiency of your CMDB functionality.

## Modify important actions on the Home view of CMDB
## Workspace

Modify the appearance order and other properties of the important
action cards that appear on the Home view of the CMDB Workspace.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

53

Zurich ServiceNow AI Platform Capabilities

---
*Page 54*

Before you begin

Role required: sn_cmdb_admin

About this task

The task cards that appear in the Important tasks tile on the landing
page of the CMDB Workspace, are stored in the CMDB WS Imp Action
Card Config [sn_cmdb_ws_imp_action_card_config] table. You can edit
some attributes of these cards, including the setting that controls whether
a specific card appears at all. Cards in the Important actions tile are
available only for the CMDB Admin [sn_cmdb_admin] and the CMDB
Editor [sn_cmdb_editor] user roles and each is configured per one of
those roles.

There is some overlap in the task cards that appear for a CMDB
Admin and for a CMDB Editor, however, the filters in those task cards
are different. Typically, for CMDB Admins, the card filter also includes
unassigned tasks that a CMDB Admin needs to assign.

Only editing is possible, you can't add or delete action records in this
table.

Procedure

1. Navigate to All.

2. In the navigation filter, enter
sn_cmdb_ws_imp_action_card_config.list.

3. In the list view of the table, edit the table row that you want to
modify or click the row to open the record form.

Field
Description

Persona

The logged on user (such as
CMDB Admin) for which this card
appears.

You can't edit this field.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

54

Zurich ServiceNow AI Platform Capabilities

---
*Page 55*

Field
Description

Type

Tasks group that this task belongs
to, such as Duplicate CIs.

You can't edit this field.

Table

The table used in the card filter.

You can't edit this field.

Active

Determines whether the card
for this action appears in CMDB
Workspace.

Order

Numeric value that determines
the order of each card within
the rest of the cards in the
Important actions tile. Cards with
lower order numbers appear
before cards with higher order
numbers.

Filter condition
Filters for the tasks that are
included for the card.

List columns

Columns that appear in the list
view when you click a card to
show its associated tasks.

List groupby

Attribute to group by the card's
associated tasks in the card's list
view. The card's list view appears
when you click a card to show its
associated tasks.

4. Click Update.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

55

Zurich ServiceNow AI Platform Capabilities

---
*Page 56*

## Add a quick link to the Home view of CMDB
## Workspace

For an immediate access to tools or data that you need, add your own
quick link to the Home view of CMDB Workspace.

Before you begin

Role required: sn_cmdb_admin, sn_cmdb_editor, or sn_cmdb_user

About this task

Quick links are stored in the Quick Links [sn_cmdb_ws_quick_links] table
including those that are included in the base system. Only the user that
added a quick link has access to that link, and can subsequently edit or
delete that added link.

Procedure

1. Navigate to Workspaces > CMDB Workspace.

2. In the Quick links section, click the '+' icon.

3. Enter the URL and Display text for the link and then click Add.

A valid URL must start with "http:" or "https:". To link to a tool in the
instance such as the CI Class Manager, enter the full URL to the tool's
landing page.

4. Click Done.

Result

The new link is available only for the user that created the link, in the
Quick links section in the landing page of the CMDB Workspace.

What to do next

Click on the Edit quick links icon to edit, delete, or reposition an added
link. Then use the up and down arrows to move a link within the list, and
click the Edit icon next to a link that you want to modify or delete from
the list.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

56

Zurich ServiceNow AI Platform Capabilities

---
*Page 57*

## Configure datacenters for Cloud vs Non-cloud
## resources

The Cloud vs Non-cloud resources chart in CMDB Workspace determines
which CIs and application services are stored on a cloud and which
aren't in the organization. In addition to base system classifications,
you can add cloud versus non-cloud classifications that reflect specific
datacenter deployments in the organization.

Before you begin

Role required: sn_cmdb_admin

About this task

The Datacenter Types [sn_cmdb_ws_datacenter_type] table stores
datacenter classes with a classification of being used as a cloud storage
or not in the organization. The calculations for the Cloud vs Non-cloud
resources chart in the CI overview tile in CMDB Workspace, reflects on
the datacenters in that table and their classifications.

CIs are counted as non-cloud mainly if either of the following conditions is
met:

• The CI is not associated with any datacenter.

• The CI is associated with a datacenter that is classified as non-cloud in
the Datacenter Types table.

In the base system, the Datacenter Types table contains
several common datacenters. For example, the Azure Datacenter
[cmdb_ci_azure_datacenter] class is classified as 'Cloud'. Therefore, the
Cloud vs Non-cloud resources chart includes in its calculations and bars
the Azure Datacenter [cmdb_ci_azure_datacenter] class.

Procedure

1. Select All.

2. In the Filter navigator, enter sn_cmdb_ws_datacenter_type.list
to access the Datacenter Types table.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

57

Zurich ServiceNow AI Platform Capabilities

---
*Page 58*

3. Click New and fill out the Datacenter Type form for a datacenter that
is used in the organization.

Field
Description

Datacenter class

A child class of
the Logical Datacenter
[cmdb_ci_logical_datacenter]
class which is used in the
organization.

Type

Classification that reflects
whether the specified
Datacenter class is being used as
cloud storage or not.

Cloud Provider
Custom label for the cloud
provider.

4. Click Submit.

## Configure classes for Cloud vs Non-cloud resources

Include or exclude pairs of CI Class/Type in the Cloud vs Non-cloud
resources chart in CMDB Workspace.

Before you begin

Role required: sn_cmdb_admin

About this task

The CMDB Insight Query Categories
[sn_cmdb_ws_insight_query_category] table contains the pairs of CI
Class/Type for the Cloud vs Non-cloud resources chart in the CI overview
tile in CMDB Workspace. The Active setting in a record determines if the
respective CI Class/Type pair appears in the chart. By default, all pairs
are configured to appear in the chart.

A CI Class/Type pair appears or doesn't appear according to its Active
setting and regardless of the status of its associated scheduled job.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

58

Zurich ServiceNow AI Platform Capabilities

---
*Page 59*

Procedure

1. Select All.

2. In the Filter navigator, enter
sn_cmdb_ws_insight_query_category.list to access the CMDB
Insight Query Categories table.

3. Set Active to true or false for a CI Class/Type pair.
For example, set Active to false for the Applications/Non-cloud pair.
This setting will exclude from the chart all CIs in the Applications class
which are determined to be non-cloud.

## Request additional attributes for new CIs

Integrate a request for specific CI attributes when manually creating
a new CI in your workspace. Then, when creating a new CI in
the respective workspace, users can enter values for the requested
attributes, as appropriate for the new CI.

About this task

Creating a new CI is an experience in CMDB Workspace which you
might be integrating into another workspace. Within CMDB Workspace,
there are default settings for some of the behaviors of the create CI
experience. However, you can use configuration identifiers to customize
some of those default settings for CMDB Workspace or other workspaces.
For example, you can customize the list of attributes that is requested for
the new CI.

Requests for additional attributes for new CIs are stored in the CI
additional attributes config [sn_cmdb_ws_ci_additional_attributes] table
which is part of the configuration identifiers framework. Therefore, to
manage requests for additional attributes in your workspace, you must
use config identifiers. By default, the CI additional attributes config table
contains a single entry for CMDB Workspace, that applies to the entire
CMDB hierarchy. Any workspace or class without a direct config identifier
for additional attributes, uses the default entry.

For more information:

• About configuration identifiers, see Configuration identifiers framework.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

59

Zurich ServiceNow AI Platform Capabilities

---
*Page 60*

• About the experience of manually creating a new CI in CMDB
Workspace, see Create a CI manually in CMDB Workspace.

Before you begin

Role required: sn_cmdb_ws.config_editor

Procedure

1. Navigate to All and in the navigation filter, enter
sn_cmdb_ws_ci_additional_attributes.list to access the CI
additional attributes config table.

2. On the table list view page, select New and fill out the form.

Field
Description

Config identifier

Name of a
configuration identifier from
the Config identifier
[sn_cmdb_ws_config_identifier]
table.

The default value of 'Default'
is used as a fallback for
any workspace without its own
config identifiers.

CI class

Class for which the specified
additional attributes will be
requested when creating a new
CI.

Active

Option to activate or deactivate
the request for the additional
attributes when creating a new
CI.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

60

Zurich ServiceNow AI Platform Capabilities

---
*Page 61*

Field
Description

Additional attributes

List of class attributes that will be
requested when creating a new
CI of the CI class.

Apply to hierarchy

Apply the request for additional
attributes to all classes
descending from the specified
CI class.

Feature
Pre-set to 'Create CI'.

3. Select Submit.

Result

When manually creating a new CI for the specified CI class in the
respective workspace, users are requested to enter values for the
specified Additional attributes on the Additional attributes page.

## Limit the class list for new CIs created in a workspace

Limit the selection of classes for a new CI being manually created in your
workspace, to only those classes that are relevant to that workspace.
When then creating a new CI in the respective workspace, users can only
select a class that is authorized as an option.

About this task

Creating a new CI is an experience in CMDB Workspace which you
might be integrating into another workspace. Within CMDB Workspace,
there are default settings for some of the behaviors of the create CI
experience. However, you can use configuration identifiers to customize
some of those default settings for CMDB Workspace or other workspaces.
For example, you can customize the list of classes to choose from, for the
new CI.

By default, when creating a new CI in CMDB Workspace, the list of
classes to choose from for the new CI, contains almost all classes in the
CMDB hierarchy. For your workspace, it might be important to reduce
that list to specific classes or hierarchy branches.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

61

Zurich ServiceNow AI Platform Capabilities

---
*Page 62*

Settings for specific classes available for new CIs are stored in the CI
class config [sn_cmdb_ws_ci_class_config] table which is part of the
configuration identifiers framework. Therefore, to manage the list of
classes for new CIs in your workspace, you must use config identifiers.
To manage that list, you must create a config identifier for each class
or hierarchy branch that you want to include or exclude in the class
drop-down list. By default, the CI class config table contains a single entry
for the Configuration Item [cmdb_ci] class, which is derived by the entire
CMDB hierarchy. Any class or workspace without direct config identifiers
for inclusion or exclusion, uses the default entry.

For more information:

• About configuration identifiers, see Configuration identifiers framework.

• About the experience of manually creating a new CI in CMDB
Workspace, see Create a CI manually in CMDB Workspace.

Before you begin

Role required: sn_cmdb_ws.config_editor

Procedure

1. Navigate to All and in the navigation filter, enter
sn_cmdb_ws_ci_class_config.list to access the CI class config
table.

2. On the table list view page, select New and fill out the form.

Field
Description

Config identifier

Name of a
configuration identifier from
the Config identifier
[sn_cmdb_ws_config_identifier]
table.

The default value of 'Default'
is used as a fallback for

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

62

Zurich ServiceNow AI Platform Capabilities

---
*Page 63*

Field
Description

any workspace without its own
config identifiers.

CI class

Class to be included or excluded
from the list of classes available
for a new CI.

Active

Option to activate or deactivate
the setting in the experience of
creating a new CI.

Feature
Pre-set to 'Create CI'.

Apply to hierarchy

Apply the class setting to all
classes descending from the
specified CI class.

Operation
Include or exclude the CI class in
the list of classes for a new CI.

3. Select Submit.

Result

When manually creating a new CI in the respective workspace, the
specified CI class is included in the Class drop-down list on the Select
class page only if it is set to be available.

## Create a CI manually in CMDB Workspace

Create a new CI in CMDB Workspace, while applying Identification and
Reconciliation Engine (IRE) processes and other requirements for the CI's
class. IRE identification rules enforce the new CI to be unique and to
comply with other class requirements.

About this task

Creating specialty CIs such as an application service, isn't supported in
this Create CI experience. Typically, such CIs aren't discoverable and

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

63

Zurich ServiceNow AI Platform Capabilities

---
*Page 64*

you must create them manually using specific wizards, such as the
Application service wizard.

You can access the Create CI experience in either of the following ways:

• Selecting the Create CI quick link on the Home view of CMDB
Workspace which lets you then select a class for the new CI.

• Drilling down a class group bar in the CI Summary tab on the CI
overview tile, in which case the class you are drilling down from
becomes the class for the new CI. This option is available only if you
drill down a class that isn't excluded for the Create CI experience.
For information about excluding classes for the Create CI experience
in CMDB Workspace, see Limit the class list for new CIs created in a
workspace.

As you progress through the procedure, fields appear dynamically
according to your selections and entries on the current or previous
pages.

To manually create a new CI without applying IRE processes (Core
UI), see Populating the CMDB. For more information about mandatory
attributes, IRE processes, dependent CIs, and the CI relationship editor
(Core UI), see:

• Set a CI attribute to be mandatory

• Identification rules

• CMDB classifications and class dependency

• CI relationship editor

Before you begin

Configure any customizations to the create CI experience before
creating new CIs:

• Complete any request by an administrator for additional non-
mandatory attributes. For information about how an administrator can
use configuration identifiers to incorporate requests for attributes into
the flow of creating a new CI, see Request additional attributes for new
CIs.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

64

Zurich ServiceNow AI Platform Capabilities

---
*Page 65*

• Complete any settings for limiting the list of classes available to choose
from, for a new CI. For information about how an administrator can use
configuration identifiers to create a custom list of classes for a new CI,
see Limit the class list for new CIs created in a workspace.

If you want additional actions to be performed after creating a CI,
such as creating a record that references the new CI, implement the
ManualCreateCIExtPoint extension point:

• In the getAppId() function, add the sys_id of the application containing
the workspace from the UX Application [sys_ux_page_registry] table.

• In the postInsertCI() function, define the additional actions you want to
perform.

Your extension point implementation runs after a new CI is created
in the application specified in getAppId(). You can create additional
implementations as needed for additional applications. For more
information about extension points, see Using extension points to extend
application functionality.

Role required: cmdb_manual_ci_ire_access (contained in the
sn_cmdb_editor role by default)

Procedure

1. Navigate to Workspaces > CMDB Workspace.

2. On the Home view of CMDB Workspace, use one of the following
options:

• Select the Create CI quick link, and then:

a. • On the Select class page, select the class for the new CI from
the Class drop-down list. Classes without a valid identification
rule are grayed out in the list and you can't select them.

b. • Select Continue.

• On the CI overview tile, select the CI Summary tab, and then:

a. • Select the group bar with the class that you want to create
the new CI in.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

65

Zurich ServiceNow AI Platform Capabilities

---
*Page 66*

b. • Scroll down to the list view for the class group, and select the
class in which you want to create the new CI.

c. • On the class list view page, select the Create CI button.

Note:   If you selected a class that is excluded from the
Create CI experience, the New button appears. Select
New to manually create a new CI without applying IRE
processes (Core UI).

Continue to fill out the rest of the Create a new CI pages as
described in the following steps.

3. On the Home view of CMDB Workspace, select the Create CI quick
link and then fill out all the Create a new CI pages as described in
the following steps.

4. Select class:

Select the class for the new CI from the Class drop-down list. Classes
without a valid identification rule are grayed out in the list and you
can't select them.

Select Continue.

5. Required attributes:
Configure attributes that are either mandatory for the new CI's
class, or which the identification rule for the new CI's class requires.
Also, if the new CI is a dependent CI, configure the dependency
relationship.

•

In the Dependent-upon CI section, select a CI that the new CI
depends on.

Dependent-upon class: Select the class of the dependent-upon
CI.

Dependent-upon CI: Select the search icon and in the
Dependent-upon CI dialog box, select a CI by selecting its link
in the Name column.

•

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

66

Zurich ServiceNow AI Platform Capabilities

---
*Page 67*

In the Identifier entries section, select criterion attributes and set
their values to uniquely identify the CI.

Criterion attributes: In the drop-down list, select one or more
criterion attributes sets. This drop-down list omits criterion
attributes that are based on the Product instance identifier
attribute.

•

In the criterion attribute fields section scroll down the page if
needed and enter values for the criterion attributes fields for the
CI.

Select Continue. If the new CI is detected as a duplicate of an
existing CI, then the CI already exists dialog box appears. Select
Review existing CI and then decide whether to change the existing
or the new CI to prevent the duplication and to continue creating
the CI.

6. Additional attributes:

Enter values for attributes, such as Operational status, that your
administrator is requesting in addition to the required attributes from
previous pages.

Select Continue.

7. Relationship definition:
Review any existing relationships and decide whether to add a
relationship for the new CI. For dependent CIs, a dependent
relationship was already created in an earlier step.

a. Select Add.

b. On the Add relationships page, select a Relationship type.
b.

The Parent/Child notations in each relationship type denotes
whether the new CI will have the role of a child or a parent in
the new relationship.

c. In the Configuration Item list, select the CIs that the new CI
will have the relationship with. Whichever parent/child role you
selected for the new CI, the selected CIs will have the other role.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

67

Zurich ServiceNow AI Platform Capabilities

---
*Page 68*

d. Select Add.

Note:   Creating relationships to the User and the Group tables is
supported, however, those relationships aren't processed by IRE.

On the Relationship definition page, select Continue.

8. Review:
Review all the details of the new CI. Select Create to approve and
create the new CI, or Back to change definitions.

9. In the New CI created dialog box, select Done to exit the operation,
Review new CI to open the form view for the new CI, or Create
another CI.

Result

In the new CI:

• Discovery source is set to Manual via IRE.

• Operational status is set to Design until the new CI is fully configured
and ready to be used. You can modify the CI's status, for example, to
Operational if appropriate.

In the new CI, Discovery source is set to Manual via IRE.

What to do next

You can view the new CI or other CIs, using CI Form in CMDB Workspace.
For more information about using the CI Form, see Manage CI details in
CI Form.

## Manage CI details in CI Form

Use CI Form in CMDB Workspace or in another workspace, to view, edit,
and manage a comprehensive set of details of a CI such as its attributes,
related lists, and CMDB 360 records. When updating CIs, IRE rules are
applied to avoid potential issues such as duplicate CIs. CI Form supports
derivation of form configurations throughout the CMDB hierarchy.

The CI Form feature is a centralized location with a comprehensive set
of CI details, organized in sections. Anywhere CMDB Workspace provides

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

68

Zurich ServiceNow AI Platform Capabilities

---
*Page 69*

a function to view a CI record, such as a list or a chart, CI Form is used
for the selected CI when you select that function. Use the forms provided
by CI Form to examine and edit CI attributes, relationships, tags, services
and offerings, CMDB Health and CMDB 360 data associated with the CI,
related lists, and activities.

General operations you can perform in CI Form:

• Select the Now Assist for CMDB CI Summarization skill: Requires that
Now Assist for CMDB is set up. For more information, see Configure the
CI summarization skill.

• Select Open map to open the CI map in Unified Map. This function isn't
available for a non-operational CI. For information about using the Life
cycle stage attribute to define a CI's operational state, see Configure
CIs to appear based on life cycle stage value.

In general, a CMDB Admin and a CMDB Editor can view and edit CI
records, and a CMDB User can view CI details on the form.

Explore CI view

By default, CI Form uses the Explore CI view, which is stored in the UI
Views [sys_ui_view] table. The Explore CI view defines the structure of the
view, its sections and attributes, and related lists that appear on the form.
The system provides predefined Explore CI forms for many CMDB classes.
Those forms are derived by child classes, which don't have their own form
definition, throughout the CMDB hierarchy.

The various sections in Explore CI view are described in this topic.

Configuration

You can control the use and content of CI Form as follows:

•

Set system property sn_cmdb_ws_explore_ci.record.enabled:

This property toggles the use of CI Form when viewing CI records in
CMDB Workspace, or in another workspace, if applicable. This property
is set to true by default, enabling the experience of CI Form. For more
information about this property, see Components installed with CMDB
Workspace.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

69

Zurich ServiceNow AI Platform Capabilities

---
*Page 70*

•

Configure the Explore CI view:

Select the More Actions icon (...) on the form and then select an option
to modify the Explore CI view:

•

Select Configure attributes to modify the Summary and Attributes
sections on the form, in Form Builder. For example, to add sections,
modify section titles or the attributes included in sections: Requires the
personalize_form user role.

For more information about Form Builder and Table Builder, see Forms
in Table Builder and Add fields to a form layout in Table Builder.

• Select Configure resources to modify the Resources section on the
form. For example, to add or remove subsections or items within
subsections: Requires the personalize_list user role.

Highlighted attributes

Several key attributes are preconfigured to be highlighted on a CI form
when specific conditions are met. Those highlights are meant to draw
your attention to specific states, which are either healthy, or that indicate
a problem and require your attention. Attribute highlight definitions are
stored in the Highlighted Values [sys_highlighted_value] ServiceNow AI
Platform table, which you can search for records where Table is prefixed
by 'cmdb_ci'. For example, the operational_ status attribute is configured
as follows:

• If the attribute value is 'Operational', then the attribute appears with a
green highlight.

• If the attribute value is anything other than 'Operational', then the
highlight is red.

To see those preconfigured highlight records that are used in CI Form and
in various other CMDB Workspace features, navigate to All > Workspace
Experience > Administration > Highlighted Values.

For more information about configuring attribute highlights in the
ServiceNow AI Platform, see Highlight list fields.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

70

Zurich ServiceNow AI Platform Capabilities

---
*Page 71*

Summary

By default, the Summary tile shows the most meaningful CI attributes and
appears at the top of all other form sections. You can select Show more
or Show less to adjust the page layout. The Summary tile shows attributes
such as Created, key ownership attributes such as Managed by, and
other important attributes such as Discovery source and Operational
status. The attributes that appear in this section map to the first section
defined in the Explore CI view.

By default, the Important attributes tile shows CI attributes such as
Operating System and Serial number. The attributes that appear in this tile
map to the Important attributes section defined in the Explore CI view, if
one exists.

Role requirements for operations in this section:

• Editing attributes by selecting the Edit icon: Permitted for attributes that
you have permission to

• Modifying this section in the Explore CI view: personalize_form

Attributes

This section shows all the UI sections that are configured in the Explore CI
view for the class, excluding:

• The first section (which populates the Summary tile).

• The Important attributes section, if one exists (which populates the
Important attributes tile).

Select Attributes to access the subsections within. By default, the
Discovery and the Operational attribute subsections map to the
Discovery and the Operational sections in the Explore CI view. The All
subsection shows all the CI attributes. Mandatory attributes are noted on
the form by an "*" and must be set with a value.

When updating CI attributes, any Identification and Reconciliation
Engine (IRE) rules that exist for the CI class are applied to help prevent
potential problems with the update. IRE processes detect potential
issues such as CI duplication and a dependent CI missing valid parent
relationships. In these situations, the update is paused and you're
presented with mitigation options to avoid the issue. Applying IRE

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

71

Zurich ServiceNow AI Platform Capabilities

---
*Page 72*

processes might result in a partial update of attributes as reconciliation
rules might block updates to some attributes and enable updates of
others.

If there are no IRE rules for the class, the CI is updated directly without
using IRE processes.

A CI that is updated in CI Form, has its discovery_source attribute set to
Manual via IRE unless you set it to a different value.

More information:

• Identification and Reconciliation engine (IRE)

• Reconciliation rules

• Identification rules

• Mandatory attributes

Role requirements for operations in this section:

• Updating attributes: sn_cmdb_editor

• Modifying this section in the Explore CI view: personalize_form

Tags

This section shows the list of tags, stored as key/value pairs in the Key
Values [cmdb_key_value] table. These tags are typically associated
with CIs and resources for cloud providers such as Amazon Web
Services and Google Cloud Platform, and in general are referred to
as cloud tags. Cloud tags are used in ITOM applications, such as
Tag Governance, and function as key dependencies in Tag-based
discovery in Service Mapping. Discovery and Service Graph Connectors
automatically populate cloud tags, which can then be grouped and
managed as needed in an organization.

The Tags section in CI Form doesn't contain details about Platform tags,
which are another type of tags that are stored in the Tags column that
exists in most platform tables.

To manage tags, select Manage in the Tags tile, and then, in the Manage
tags dialog box you can:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

72

Zurich ServiceNow AI Platform Capabilities

---
*Page 73*

• Enter a Key and a Value pair, and then select the Add new tag ('+')
icon.

• Select the Delete tag icon for a tag.

• Modify the Key or the Value fields for a tag.

• Select Save to save any changes to tags.

Managing tags requires the sn_cmdb_editor user role.
More information:

• Tag-based discovery in Service Mapping

• Data collected for Amazon AWS Cloud Discovery

• Data collected for Microsoft Azure Cloud Discovery

Resources

This section shows resources linked to the CI, and maps to the Related
Lists specified in the Explore CI view. By default, resources include
tables such as File Systems [cmdb_ci_file_system], Software Installed
[cmdb_ci_spkg], and Network Adapters [cmdb_ci_network_adapter].

In this section, you can:

•

Select Manage to add or remove records from a resource list, which
is applicable to related lists that have many-to-many relationships. If
you're authorized to update in the CMDB Workspace scope, then
you're navigated to a list selector for the resource where you can
add or remove multiple items. If you aren't authorized, then you're
navigated to the Core UI experience.

• Select one or more related items and then select the Delete button,
which is visible only if you have delete access to any of the related list
tables.

• Select New to add a related list item. The New button is available for all
the resource tables that you have access to.
Important notes about creating a new related list item:

•

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

73

Zurich ServiceNow AI Platform Capabilities

---
*Page 74*

If the related list table is within the cmdb_ci hierarchy, has an
IRE identification rule, and isn't an excluded table, then you're
navigated to the Create CI experience in CMDB Workspace or
another workspace if applicable. In the Create CI experience, some
CI attributes are pre-populated with the proper values for the class.
For example, in the Required attributes section for dependent CIs,
the Dependent-upon CI attribute is pre-populated with the parent of
the current CI. Relationships and resources are also pre-populated
according to the CI class definitions.

For information about the Create CI experience, see Create a CI
manually in CMDB Workspace.

• If the related list table doesn't have an IRE identification rule, then
you're navigated to a basic list view page instead of CI Form.

• The system automatically creates the matching reference back to
the current class. For example, for a dependent CI the system creates
the file system and the necessary relationship to connect the file
system to the computer CI.

• For some resources such as CI IPs, New isn't available and the
Dependent-upon CI isn't pre-populated. This behavior applies to CIs
with scripted relationships.

• After creating a new related list item, select the Refresh List icon to
show the new record in the list on the Resource section.

• Configure the Resources section in the Explore CI view by selecting
the More actions icon and then selecting Configure resources. Use the
related lists slushbucket to add or remove resources and then select
Save: Requires the personalize_list role.

Role requirements for operations in this section:

• Configuring resources in the Explore CI view: personalize_list

• Creating, updating, or deleting records in related tables included as
Resources for a CI record: Requires create, update, and delete access
to the resource table.

Activity

This section shows related items such as open incidents and the activity
stream for the CI on the following tabs:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

74

Zurich ServiceNow AI Platform Capabilities

---
*Page 75*

Related items

Pie charts that by default include Open incidents (Incidents table), Open
changes (Change Request table), and Open problems (Problem table),
broken down by priority or state.

In this tab, you can:

• Select a chart to drill down to the records associated with different
chart sections. Depending on configuration, records open in CMDB
Workspace or in another workspace.

• Configure the list of tables for which charts appear, which
is stored in the Explore CI Related Item Configurations
[sn_cmdb_ws_explore_ci_related_item_config] table. You can add
records to that table, or modify behavior settings such as where a
record opens when selected: Requires the sn_cmdb_ws.config_editor
role.

• Configure your preferences for which of the available charts appear
when you log in. Select the Related Item Settings icon in the Related
Items tab and in the Related item settings dialog box, select any charts
that you prefer to hide.

CI history

History of the activities related to the CI, such as value changes in the CI
attributes, listed in chronological order.

More information:

• Problem Management

• Incident Management

• Change Management

Role requirements for operations in this section:

• Accessing the Explore CI Related Item Configurations
[sn_cmdb_ws_explore_ci_related_item_config] table to configure
the list of charts that appear in the Related Items tab:
sn_cmdb_ws.config_editor

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

75

Zurich ServiceNow AI Platform Capabilities

---
*Page 76*

• Configuring your preferences for which related item charts appear by
selecting the Related Item Settings icon in the Related Items tab: Any
logged in user

Relationships

This section shows the CI relationships, which include:

• Total relationships: Total number of relationships for this CI

• Duplicate relationships: Total number of duplicate relationship for this CI

• Stale relationships: Total number of stale relationship for this CI

In this section, you can:

• Switch between the following view types:

• Tree view: Shows the downstream and upstream relationships in a tree
format. You can expand and collapse any level that you want to see
more or less details for.

• Flat view: Shows the CI relationships in a flat view. You can adjust the
number of levels of relationships to show, or filter to show only specific
CIs.

•

Select Edit relationships to open Unified Map for the CI in edit mode
and with the following map settings:

• Home node set to the current CI.

• Relationship levels set to 1 level.

• Layers set to show Business, Service Instances, Applications, and
infrastructure.

• Layout is set to Vertical.

This function isn't available for a non-operational CI. For information
about using the Life cycle stage attribute to define a CI's operational
state, see Configure CIs to appear based on life cycle stage value.

If the CI class is a Service Instance [cmdb_ci_service_auto] or a derived
class, then you must either use Service Mapping (if installed) to edit a

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

76

Zurich ServiceNow AI Platform Capabilities

---
*Page 77*

map for a Service Instance, or edit dependency relationships in Unified
Map.

• Select Refresh after saving changes in Unified Map, to reflect your
updates in the Relationship section.

More information about relationships and about editing relationships in
Unified Map:

• CI relationships in the CMDB

• Edit relationships in Unified Map

• CI relationship editor

• Service Mapping

• Unified Map

Role requirements for operations in this section: Edit relationships requires
sn_cmdb_editor

Services and Offerings

This section shows cards with counts of the following services and
offerings associated with the CI:

• Service Instance: Any CI related to the Service Instance
[cmdb_ci_service_auto] table where Service Classification is
Application Service.

• Business Service Offering: Any Service Instance (Service Classification
is Application Service) that this CI is related to, and which has a
relationship to Service_Offering where Service Classification is Business
Service.

• Technology Management Offering: Any Service Instance (Service
Classification is Application Service) that this CI is related to, and which
has a relationship to Service_Offering where Service Classification is
Technical Service or the CI is related to a Dynamic CI Group, which
is part of a Technical Service Offering.

• Technology Management Service: Parent of a Technology
Management Offering.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

77

Zurich ServiceNow AI Platform Capabilities

---
*Page 78*

Select a tile to drill down to the specific records associated with the tile.

More information:

• CSDM terms

• Service Delivery domain in the CSDM model

• Access CSDM features

• CSDM implementation stage — Walk

• Application services

Health

This section shows aggregations from the latest CMDB Health test results
for the Completeness, Correctness, Compliance, and Relationship KPIs,
and the aggregated state of attestation. Color codes are used to
denote pass/fail scores.

This section shows meaningful details only if CMDB Health is set up and
the associated dashboard jobs are running.

More information:

• CMDB Health

• CMDB Health KPIs and metrics

• CIs attestation

• Configuring CMDB Health

CMDB 360

This section shows discovery sources data from the CMDB 360 data store
for the CI. It shows the CI attributes and for each attribute, its current
CMDB value, and any values that were reported by discovery sources for
that attribute.

This section appears only if CMDB 360 is enabled and configured.

More information:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

78

Zurich ServiceNow AI Platform Capabilities

---
*Page 79*

• CMDB 360/Multisource CMDB

• CMDB 360 experience in CMDB Workspace

• Configure the CMDB 360 dashboard

## Resume a disabled Cloud vs Non-cloud resources
## scheduled job

Reactivate a scheduled job to resume data collection for the Cloud vs
Non-cloud resources chart in CMDB Workspace.

Before you begin

Role required: cmdb_query_builder (contained in the sn_cmdb_user,
sn_cmdb_editor, sn_cmdb_admin user roles)

About this task

The Cloud vs Non-cloud resources chart in CMDB Workspace Home view
uses several scheduled jobs that gather and calculate the data for the
charts. Each bar in the CI classes chart represents a pair of a CI class and
a storage type (cloud, non-cloud) such as Applications/Cloud. Each bar
is associated with its own scheduled job. When a scheduled job exceeds
its limits of time and amount of collected data, it is automatically
stopped. A job that can't complete for 3 (default) consecutive days is
automatically disabled for future runs.

Use the following procedure to later resume that disabled scheduled job.

Procedure

1. Click All.

2. In the Filter navigator, enter sysauto_query_builder.list and
open the Scheduled Email of Query Builders table.

3. In the Scheduled Email of Query Builders list view, set Active to true
for the scheduled job to resume.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

79

Zurich ServiceNow AI Platform Capabilities

---
*Page 80*

## Edit a related table from CMDB performance insights

Edit a related table on the Related Entries [cmdb_related_entry]
table directly from the CMDB performance insights tool in the CMDB
Workspace Insights view. Update the related table to correctly reference
another CI in the Referenced field when a reference is missing from the
related table.

Before you begin

Role required: sn_cmdb_admin (CMDB Admin) and any role needed to
access a related table.

About this task

A record is missing a reference when the Referenced field for that record
is empty. CMDB performance insights enables you to easily edit related
tables that are missing a reference after you drill down on a slice of the
Related records missing reference chart.

You can see the full list of related tables and associated referenced fields
in the Related Entries [cmdb_related_entry] table.

Procedure

1. Navigate to Workspaces > CMDB Workspace, and then in the CMDB
Workspace menu bar, select Insights.

2. On the CMDB performance insights tile, select View performance
insights.

3. Navigate to the Related records tile of the Payloads & CIs tab
and then select a slice of the chart in the Related records missing
reference by table card.

4. Select a check box next to a record and then select Edit.

5. Specify applicable CMDB CI references and then select Update.

Related concepts

• Overview of CMDB

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

80

Zurich ServiceNow AI Platform Capabilities

---
*Page 81*

• Insights view in CMDB Workspace

## Edit a data source from CMDB performance insights

Edit a data source for your Service Graph Connectors to specify the data
that an import set should ingest. Consider configuring a batch process to
make ingestion more efficient and improve performance.

Before you begin

Role required: sn_cmdb_admin (CMDB Admin) and import_admin.

Procedure

1. Navigate to Workspaces > CMDB Workspace.

2. In the CMDB Workspace menu bar, select Insights.

3. On the CMDB performance insights tile, select View performance
insights.

4. Select the Sources with batch processing turned off card in the
Service Graph connectors tab.

5. On the Data sources list view, select a check box next to a record.

6. Select Edit.

7. Configure the data source.
For more information about data sources, see:

• Create a data source

• Data source fields

8. Select Update.

## Edit a scheduled data import from CMDB performance
## insights

Edit a scheduled data import directly from CMDB performance insights
for your Service Graph Connectors. Consider enabling Concurrent Import

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

81

Zurich ServiceNow AI Platform Capabilities

---
*Page 82*

with a custom size partition to split incoming data into multiple import sets
and transform the import sets concurrently to reduce processing time.

Before you begin

Role required: sn_cmdb_admin (CMDB Admin) and one of these roles:

• import_scheduler

• import_admin

Procedure

1. Navigate to Workspaces > CMDB Workspace.

2. In the CMDB Workspace menu bar, select Insights.

3. On the CMDB performance insights tile, select View performance
insights.

4. In the Service Graph connectors tab, click the Sources with
concurrent import turned off card or the Sources with non-custom
size partition method card.

5. In the Scheduled Import sets list view, select a check box next to a
record.

6. Select Edit.

7. Configure the scheduled data import.
You may need to change your application scope to create or edit a
scheduled data import from CMDB Workspace.

For more information about updating a scheduled data import, see
Schedule a data import.

8. Select Update.

Related concepts

• Insights view in CMDB Workspace

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

82

Zurich ServiceNow AI Platform Capabilities

---
*Page 83*

## CMDB Workspace reference

Reference topics provide additional information about components such
as properties, installed with CMDB Workspace and class-specific criteria
for the Cloud vs Non-cloud resources chart.

• Class criteria in Cloud vs Non-cloud resources chart

The Cloud vs Non-cloud resources chart provides counts for several key
classes. The chart uses different classes and relationship criteria for each
class to determine which resources count as cloud and which count as
non-cloud.

• Components installed with CMDB Workspace

Several types of components are installed with the activation of the
CMDB Workspace (sn_cmdb_ws) plugin, including properties, tables,
user roles, and scheduled jobs.

## Class criteria in Cloud vs Non-cloud resources chart

The Cloud vs Non-cloud resources chart provides counts for several key
classes. The chart uses different classes and relationship criteria for each
class to determine which resources count as cloud and which count as
non-cloud.

The Cloud vs Non-cloud resources chart shows in the CI overview tile in
the CMDB Workspace store app.

Virtual Machine Instance [cmdb_ci_vm_instance]:

• Cloud:

Virtual Machine Instance [cmdb_ci_vm_instance] -> (Hosted
on::Hosts) -> Datacenter class (one of the configured cloud
datacenters) -> (Hosted on::Hosts) -> Cloud Service Account
[cmdb_ci_cloud_service-account]

• Non-Cloud:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

83

Zurich ServiceNow AI Platform Capabilities

---
*Page 84*

Virtual Machine Instance [cmdb_ci_vm_instance] -> (Hosted
on::Hosts) -> Datacenter class (one of the configured non-cloud
datacenters)

• Total: Equals the record count in the Virtual Machine Instance
[cmdb_ci_vm_instance] table (unless there are Virtual Machine
Instance records without any relationships)

Server [cmdb_ci_server]:

• Cloud:

Server [cmdb_ci_server] -> (Virtualized by::Virtualizes) -> Virtual
Machine Instance [cmdb_ci_vm_instance] -> (Hosted on::Hosts)
-> Datacenter (one of the configured cloud datacenters) ->
(Hosted on::Hosts) -> Cloud Service Account [cmdb_ci_cloud_service-
account]

• Non-Cloud:

Server [cmdb_ci_server] -> Virtual Machine Instance
[cmdb_ci_vm_instance] -> Datacenter class (one of the configured
non-cloud datacenters)

OR

Server [cmdb_ci_server] has no relationships with Virtual Machine
Instance [cmdb_ci_vm_instance]

• Total: Equals the record count in the Server [cmdb_ci_server] table
(unless there are Server records without any relationships)

Application [cmdb_ci_appl]:

• Cloud:

Application [cmdb_ci_appl] -> (Runs on::Runs) -> Server
[cmdb_ci_server]-> (Virtualized by::Virtualizes) -> Virtual Machine
Instance [cmdb_ci_vm_instance] -> (Hosted on::Hosts) -> Datacenter

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

84

Zurich ServiceNow AI Platform Capabilities

---
*Page 85*

(one of the configured cloud datacenters) -> (Hosted on::Hosts) ->
Cloud Service Account [cmdb_ci_cloud_service-account]

OR

Application [cmdb_ci_appl] -> (Hosted on::Hosts) -> Datacenter class
(one of the configured cloud datacenters)-> (Hosted on::Hosts) ->
Cloud Service Account [cmdb_ci_cloud_service-account]

• Non-Cloud:

Application [cmdb_ci_appl] -> Server [cmdb_ci_server] -> Virtual
Machine Instance [cmdb_ci_vm_instance] -> Datacenter Datacenter
class (one of the configured non-cloud datacenters)

OR

Application [cmdb_ci_appl] -> Server [cmdb_ci_server] -> no
relationship with Virtual Machine Instance [cmdb_ci_vm_instance]

• Total: Equals the sum of Cloud + Non-Cloud (not the record count in
the Application [cmdb_ci_appl] table)

Kubernetes Cluster [cmdb_ci_kubernetes_cluster]:

• Cloud:

Kubernetes Cluster [cmdb_ci_kubernetes_cluster] -> (Hosted on::Hosts)
-> Datacenter (cloud logical data center) -> (Hosted on::Hosts) ->
Cloud Service Account [cmdb_ci_cloud_service-account]

• Non-Cloud:

Kubernetes Cluster [cmdb_ci_kubernetes_cluster] -> Datacenter (non-
cloud logical datacenter)

OR

Kubernetes Cluster [cmdb_ci_kubernetes_cluster] -> no relationship
with -> Datacenter

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

85

Zurich ServiceNow AI Platform Capabilities

---
*Page 86*

• Total: Equals the record count in the Kubernetes Cluster
[cmdb_ci_kubernetes_cluster] table (unless there are Kubernetes
Cluster records without any relationships)

Database Instance [cmdb_ci_db_instance]:

• Cloud:

Database Instance [cmdb_ci_db_instance] -> (Runs on::Runs) ->
Server -> (Virtualized by::Virtualizes) -> Virtual Machine Instance
[cmdb_ci_vm_instance] -> (Hosted on::Hosts) -> Logical Datacenter
(one of the configured cloud datacenters)-> (Hosted on::Hosts) ->
Cloud Service Account [cmdb_ci_cloud_service-account]

OR

Database Instance [cmdb_ci_db_instance] -> Logical Datacenter
[cmdb_ci_logical_datacenter] (one of the configured cloud
datacenters)-> (Hosted on::Hosts) -> Cloud Service Account
[cmdb_ci_cloud_service-account]

• Non-Cloud:

Database Instance [cmdb_ci_db_instance] -> Server
[cmdb_ci_server] -> Virtual Machine Instance [cmdb_ci_vm_instance]
-> datacenter (non-cloud logical datacenter)

OR

Database Instance [cmdb_ci_db_instance] -> Server
[cmdb_ci_server] with no relationship -> Virtual Machine Instance
[cmdb_ci_vm_instance]

• Total: Sum of Cloud + Non-cloud (can be less than total number of
records, subtracting the badly created records)

Storage Volume [cmdb_ci_storage_volume]:

• Cloud:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

86

Zurich ServiceNow AI Platform Capabilities

---
*Page 87*

cmdb_ci_storage_volume -> (Hosted on::Hosts) -> Logical Datacenter
[cmdb_ci_logical_datacenter] (one of the configured cloud
datacenters)-> (Hosted on::Hosts) -> Cloud Service Account
[cmdb_ci_cloud_service-account]

• Non-Cloud:

cmdb_ci_storage_volume -> Logical Datacenter
[cmdb_ci_logical_datacenter] (one of the configured non-cloud
datacenters)

OR

cmdb_ci_storage_volume -> no relationships with Datacenter

Cloud Object Storage [cmdb_ci_cloud_object_storage]:

• Cloud:

Cloud Object Storage [cmdb_ci_cloud_object_storage] -> (Hosted
on::Hosts) -> Logical Datacenter [cmdb_ci_logical_datacenter] ->
(Hosted on::Hosts) -> Cloud Service Account [cmdb_ci_cloud_service-
account] (requires CMDB CI Class Models)

• Non-Cloud:

N/A (This table can never have non cloud records)

Service Accounts [cmdb_ci_cloud_service_account]:

• Cloud:

datacenter_type attribute is populated with correct datacenter class

• Non-Cloud:

N/A (This table can never have non-cloud records)

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

87

Zurich ServiceNow AI Platform Capabilities

---
*Page 88*

## Components installed with CMDB Workspace

Several types of components are installed with the activation of the
CMDB Workspace (sn_cmdb_ws) plugin, including properties, tables, user
roles, and scheduled jobs.

Note:   The Application Files table lists the components that are
installed with this application. For instructions on how to access this
table, see Find components installed with an application.

In addition, the CMDB Workspace plugin adds the CMDB Group type
'CMDB Workspace'. For components associated with the CMDB Data
Manager, see Components related to CMDB Data Manager.

Properties installed

The following properties are installed by the Configuration Management
(CMDB) (com.snc.cmdb) plugin which is included in base systems.

Property
Description

sn_cmdb_ws.ci_overview.manage
d_by_me.enabled

Shows/hides the My CIs section
of CI Overview on the CMDB
Workspace landing page, for users
with sn_cmdb_editor role.

• Type: true | false

• Default: true

• Location: Add to System
Properties [sys_properties] table.

sn_cmdb_ws.total_cis.enabled

Shows/hides the Total CIs section
on the CMDB Workspace landing
page.

• Type: true | false

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

88

Zurich ServiceNow AI Platform Capabilities

---
*Page 89*

Property
Description

• Default: true

• Location: Add to System
Properties [sys_properties] table.

sn_cmdb_ws.ms.discovery_source_
not_reporting_max_days

Number of days after which if one
or more discovery sources stop
reporting CIs, that CI is included in
the CIs not reported by discovery
sources chart in the CMDB 360
view.

• Type: integer

• Default: 7

• Location: Navigate to
Workspaces > CMDB Workspace
and then select CMDB 360.
Select Settings and configure
Number of days since CIs were
last discovered by a discovery
source in the Potential issues
section.

• Learn more: Configure the CMDB
360 dashboard.

sn_cmdb_ws.ms.report_max_limit

Maximum number of records that
appear as list views when drilling
down from the following charts:

• CIs not reported by discovery
sources

• Data mismatch

• CIs by number of discovery
sources

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

89

Zurich ServiceNow AI Platform Capabilities

---
*Page 90*

Property
Description

• CIs with a single source

Details:

• Type: integer

• Default: 100,000

• Location: Navigate to
Workspaces > CMDB Workspace
and then select CMDB 360.
Select Settings and configure
Maximum number of records to
process in the Global section.

• Learn more: Configure the CMDB
360 dashboard.

sn_cmdb_ws.unifiedmap.map_sea
rch_filter.default_levels

Initial default number of levels from
the home node, up and down
the CMDB hierarchy, to show on
a map. Up the hierarchy goes
from all parents to their parents up
to the specified level. Down the
hierarchy goes from all children to
their children up to the specified
level.

• Type: integer

• Default: 3

• Location: Add to System
Properties [sys_properties] table.

Editing affects all users and
requires the sn_cmdb_admin user
role.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

90

Zurich ServiceNow AI Platform Capabilities

---
*Page 91*

Property
Description

sn_cmdb_ws.unifiedmap.map_sea
rch_filter.max_levels

Maximum number of levels from
the home node, up and down
the CMDB hierarchy, to show on
a map. Up the hierarchy goes
from all parents to their parents up
to the specified level. Down the
hierarchy goes from all children to
their children up to the specified
level.

• Type: integer

• Default: 25

• Location: System Properties
[sys_properties] table

Editing affects all users and
requires the sn_cmdb_admin user
role.

sn_cmdb_ws.list.record_count_limit

The maximum number of results
that the system counts for when
using conditional search to search
for CIs on the Home view in CMDB
Workspace. This count shows for
example, at the top of the search
results list.

• Type: integer

• Default: 100,000

• Location: Add to System
Properties [sys_properties] table.

• More information: CMDB
Workspace store app

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

91

Zurich ServiceNow AI Platform Capabilities

---
*Page 92*

Property
Description

For example, if a limit of 100,000 is
reached, the count shows "100,000
+" to indicate that counting
stopped at 100,000 and that there
are additional uncounted results.

Increasing the value of this
property directly results in greater
impact on performance. However,
if a precise count is needed, set
this limit to a number that isn't
reached by the anticipated count.

sn_cmdb_ws_explore_ci.record.en
abled

Enables the use of the CI Form
feature when selecting CIs to view
in CMDB Workspace or in another
workspace.

When false, the system shows CI
records in a basic list view instead
of CI Form. You might need to
temporarily disable the CI Form
experience if its not yet ready
to be used. For example, you
might need to migrate previous
custom configurations to CI Form
to prepare it for use.

• Type: true | false

• Default: true

• Location: Add to System
Properties [sys_properties] table.

• More information: Manage CI
details in CI Form

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

92

Zurich ServiceNow AI Platform Capabilities

---
*Page 93*

Roles installed

The following roles are installed by the Configuration Management
(CMDB) (com.snc.cmdb) plugin which is included in base systems. These
roles are required for access and interaction with the CMDB Workspace,
and are included for completeness.

Note:   On an instance that has been upgraded to the Zurich
release, to correctly configure some of the user roles as described
below, such as CMDB Admin and CMDB Editor, you must run
the 'Remove CMDB Roles from ITIL roles and Add CUD access
to sn_cmdb_admin/sn_cmdb_editor roles' scheduled job. For more
information about this scheduled job and its use, see the Zurich
Configuration Management Database (CMDB) release notes.

Role title [name]
Description
Role containment

CMDB Admin

[sn_cmdb_admin]

Provides the highest
level of access to
tools and UIs within
CMDB Workspace,
including full access
to the Configuration
Item [cmdb_ci] table.
A CMDB Admin, for
example, can set
policies in the CI
Class Manager and
application service
requirements.

CMDB Admin can also
modify default config
records under the
default identifier or the
default identifier itself.

Contains:

•

data_manager_adm
in

• canvas_admin

• sn_cmdb_editor

• cmdb_ms_admin

•

cmdb_dedup_admi
n

CMDB Editor
Provides access to
tools and UIs within

Contains:

• sn_cmdb_user

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

93

Zurich ServiceNow AI Platform Capabilities

---
*Page 94*

Role title [name]
Description
Role containment

[sn_cmdb_editor]

CMDB Workspace
including full access to
the Configuration Item
[cmdb_ci] table.

A CMDB Editor has
writing privileges to
CMDB Data Manager
tasks and to CIs but
can't change policies
such as in the CMDB
Data Manager or in
the CI Class Manager.

• cmdb_ms_editor

CMDB User

[sn_cmdb_user]

Provides read-only
access to the
CMDB data and to
basic UIs such as
CMDB reports and
dashboards, within
CMDB Workspace.

Contained by:

• itil (indirectly)

Contains roles:

• canvas_user

• data_manager_user

• cmdb_ms_user

Multisource CMDB
Admin

[cmdb_ms_admin]

Provides full access
to data, dashboard
configurations, and
queries related to
Multisource CMDB and
CMDB 360.

Contains:
cmdb_ms_editor

Multisource CMDB
Editor

[cmdb_ms_editor]

Provides access to
CMDB 360 records
and enables users to
create and edit CMDB
360 queries.

Contains:
cmdb_ms_user

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

94

Zurich ServiceNow AI Platform Capabilities

---
*Page 95*

Role title [name]
Description
Role containment

Multisource CMDB User

[cmdb_ms_user]

Provides read-only
access to multisource
data, CMDB 360
queries, and to
related UIs such as
CMDB 360 reports
and dashboards, and
Multisource Report
Builder.

Contains: cmdb_read

Workspace Config
Admin

[sn_cmdb_ws.config_a
dmin]

Provides an
administrator full
access to the Config
identifiers
[sn_cmdb_ws_config_i
dentifier] table and its
descendent config
tables.

Can modify non-
default config or
config identifier
records. Since
config tables
contain properties
which belong to
different applications,
Workspace Config
Admins should only
modify records related
to their application.

Contains:
sn_cmdb_ws.config_e
ditor

Workspace Config
Editor

[sn_cmdb_ws.config_e
ditor]

Provides editing
access to child config
tables such as the
Workspace Config
Properties

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

95

Zurich ServiceNow AI Platform Capabilities

---
*Page 96*

Role title [name]
Description
Role containment

[sn_cmdb_ws_config_
property] table.

Can modify non-
default config records.
Since config tables
contain properties
which belong to
different applications,
Workspace Config
Editors should only
modify records related
to their application.

[cmdb_manual_ci_ire_
access]

Provides access to the
experience of manual
CI creation in CMDB
Workspace and in
other workspaces.

Scheduled jobs installed

Scheduled job
Description

CMDB Workspace Collection

Updates the information in all the
7-Day Activity charts such as the CI
Activity in Last 7 Days chart.

Multisource Dashboard Analytics
Population

Runs daily to calculate the
aggregate statistics of CMDB 360
data and populates the CMDB 360
dashboard landing page.

Multisource Dashboard Collection

Collects CMDB 360 data and then
invokes the Multisource Dashboard
Analytics Population scheduled
job.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

96

Zurich ServiceNow AI Platform Capabilities

---
*Page 97*

Scheduled job
Description

Multisource Dashboard Data
Generator ( Demo data)

Demo job that populates CMDB
360 tables with simulated data,
to showcase the CMDB 360
dashboard landing page. Runs on
demand.

insight – cloud non-cloud
aggregate

Runs every 30 minutes to collect
data for the Cloud and non-cloud
resources chart.

Insight - Cloud Applications
Collects cloud data for the
cmdb_ci_appl table.

Insight - Non-cloud Applications
Collects non-cloud data for the
cmdb_ci_appl table.

Insight - Cloud Object Storage

Collects cloud data for the
cmdb_ci_cloud_object_storage
table.

Insight - Cloud Service Account

Collects cloud data for the
cmdb_ci_cloud_service_account
table.

Insight - Cloud DB Instances
Collects cloud data for the
cmdb_ci_db_instance table.

Insight - Non-cloud DB Instances
Collects non-cloud data for the
cmdb_ci_db_instance table.

Insight - Cloud Kubernetes Cluster
Collects cloud data for the
cmdb_ci_kubernetes_cluster table.

Insight - Non-cloud Kubernetes
Cluster

Collects non-cloud data for the
cmdb_ci_kubernetes_cluster table.

Insight - Cloud Servers
Collects cloud data for the
cmdb_ci_server table.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

97

Zurich ServiceNow AI Platform Capabilities

---
*Page 98*

Scheduled job
Description

Insight - Non-cloud Servers
Collects non-cloud data for the
cmdb_ci_server table.

Insight - Cloud Storage Volume
Collects cloud data for the
cmdb_ci_storage_volume table.

Insight - Non-cloud Storage
Volume

Collects non-cloud data for the
cmdb_ci_storage_volume table.

Insight - Cloud VM Instances
Collects cloud data for the
cmdb_ci_vm_instance table.

Insight - Non-cloud VM Instances
Collects non-cloud data for the
cmdb_ci_vm_instance table.

CMDB Workspace – Populate
aggregates Daily

Runs daily to collect the latest
data from the instance for cards
such as the CI Summary chart
in the CMDB Workspace landing
page, and the following cards in
the Insights view:

• CIs processed by IRE

• CIs used in Data Manager
policies

• CIs used in data attestation

• Query Builder queries

• Intelligent search

Populates the Base Aggregate
Data
[sn_cmdb_ws_base_aggregate_d
ata] table with the collected data.

Once collection completes,
invokes the CMDB Workspace

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

98

Zurich ServiceNow AI Platform Capabilities

---
*Page 99*

Scheduled job
Description

Aggregates Daily Collection
scheduled job.

CMDB Workspace – Populate
aggregates Monthly

Runs monthly to collect data from
the instance for cards such as the
following, in the Insights view:

• CIs processed by IRE based on
source

• CIs processed by IRE

Once collection completes,
invokes the CMDB Workspace
Aggregates Monthly Collection
scheduled job.

CMDB Workspace Aggregates
Daily Collection

A Performance Analytics job that
stores the latest data generated
by the CMDB Workspace
– Populate aggregates Daily
scheduled job. The stored data is
then shown in respective cards in
the Insights view.

CMDB Workspace Aggregates
Monthly Collection

A Performance Analytics job that
stores the latest data generated
by the CMDB Workspace –
Populate aggregates Monthly
scheduled job. The stored data is
then shown in respective cards in
the Insights view.

[Demo] — CMDB Workspace
Collection

Supports demo data for CMDB
Workspace charts in various views
such as the Home view.

Installed only if Load demo data
was checked when the CMDB

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

99

Zurich ServiceNow AI Platform Capabilities

---
*Page 100*

Scheduled job
Description

Workspace store app was installed
or upgraded.

[Demo] — CMDB Workspace
demo data

Activates demo data for CMDB
Workspace charts in views such as
the Insights view, and CMDB 360
view (if CMDB 360 is enabled).
Populates the Base Aggregate
Data
[sn_cmdb_ws_base_aggregate_d
ata] table with random numbers
that illustrate trend lines in charts in
the Home and Insights views. It
then runs demo data collection
scheduled jobs.

Installed only if Load demo data
was checked when the CMDB
Workspace store app was installed
or upgraded.

[Demo] CMDB Workspace
Aggregates Daily Collection

A Performance Analytics job that
supports demo data for CMDB
Workspace charts in various views
such as the Insights view and
which is installed only if Load
demo data was checked when
the CMDB Workspace store app
was installed or upgraded.

Stores the demo data generated
by the CMDB Workspace
– Populate aggregates Daily
scheduled job. The demo data is
then shown in respective cards in
the Insights view.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

100

Zurich ServiceNow AI Platform Capabilities

---
*Page 101*

Scheduled job
Description

[Demo] CMDB Workspace
Aggregates Monthly Collection

A Performance Analytics job that
supports demo data for CMDB
Workspace charts in various views
such as the Insights view and
which is installed only if Load
demo data was checked when
the CMDB Workspace store app
was installed or upgraded.

Stores the demo data generated
by the CMDB Workspace –
Populate aggregates Monthly
scheduled job. The demo data is
then shown in respective cards in
the Insights view.

CMDB Workspace Collection On
Demand With Lookback

Collects historical data (past 30
days) for some indicators such as
the Integration outliers.

Runs automatically during install or
upgrade and isn't configured with
any recurring schedule.

PopulateDuplicate Task Group
Daily

Runs daily to populate the
following tables:

• Group Task Mapping
[ sn_cmdb_ws_reconcile_duplica
te_task_group_m2m]

• Remediate Duplicate Task
Groups
[ sn_cmdb_ws_reconcile_duplica
te_task_group]

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

101

Zurich ServiceNow AI Platform Capabilities

---
*Page 102*

Scheduled job
Description

Reads de-duplication task data
records and calculates the root
cause analysis for the duplication.

Used in support of Now Assist for
CMDB.

Tables installed

Table
Description

CMDB Group Metadata

[sn_cmdb_ws_group_metadata]

CMDB group data with count of
CIs in each group.

CMDB Group Query Metadata

[sn_cmdb_ws_group_query_metad
ata]

Encoded queries with count of CIs
in each encoded query subgroup.

NLQ Sample Search

[sn_cmdb_ws_nlq_sample_search]

Sample searches that appear
when selecting the search box
of an Intelligent Search for CMDB
widget.

NLQ Sample Search Table

[sn_cmdb_ws_nlq_sample_search_
table]

References the actual tables
associated with sample searches
that appear when selecting the
search box of an Intelligent Search
for CMDB widget.

NLQ Excluded Table

Tables with ambiguous names
that should be excluded from
Intelligent Search. These tables

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

102

Zurich ServiceNow AI Platform Capabilities

---
*Page 103*

Table
Description

[sn_cmdb_ws_nlq_excluded_table]

won’t appear in suggestions, and
other tables with similar names
are given higher priority in search
results.

Important Actions Configuration

[sn_cmdb_ws_imp_action_card_c
onfig]

Configuration of appearance and
behavior of Important action
cards that appear on the
landing page of the CMDB
Workspace. Editing in this table is
accessible only to users with the
sn_cmdb_admin role. Authorized
users can modify attributes of an
important action such as Active
and Filter conditions, but can't
modify the Type, Persona, and
Table attributes.

Quick Links

[sn_cmdb_ws_quick_links]

Quick links that appear on the
CMDB Workspace landing page.

CIs by Number of Sources

[sn_cmdb_ws_ms_cis_by_number_
of_sources]

CIs grouped by the number
of discovery sources they were
discovered by. Records appear as
a list view when clicking on the
CIs by number of discovery sources
bar chart in the CMDB 360 view.

CIs With a Single Source

[sn_cmdb_ws_ms_cis_with_single_s
ource]

CIs reported by only one discovery
source. Records appear as a list
view when selecting the CIs with a
single discovery source chart in the
CMDB 360 view.

CMDB Workspace Multisource
Class Metadata

Class configuration settings such
as class selections and weights,
that CMDB Admins can modify
from the CMDB 360 view. Used

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

103

Zurich ServiceNow AI Platform Capabilities

---
*Page 104*

Table
Description

[sn_cmdb_ws_ms_class_metadata]

by CMDB 360 analytics population
queries to store a sample set of
coverage data for the CIs by
number of sources and CIs with a
single source drill-downs cards.

Multisource Data Mismatch
Records

[sn_cmdb_ws_ms_data_mismatch]

Data mismatch records found
from attribute discrepancies from
various data sources. Records
appear as a list view when
selecting the Data mismatch chart
in the CMDB 360 view.

CMDB Workspace Multisource
Data Mismatch Configurations

[sn_cmdb_ws_ms_data_mismatch_
config]

Data mismatch settings, such as
the selection of classes, attributes,
conditions, and weights, that
CMDB Admins can modify in
the CMDB 360 view. Used by
CMDB 360 analytics population
queries to store a sample set
of data mismatch records in the
sn_cmdb_ws_ms_data_mismatch
table.

Discovery sources not reporting CIs

[sn_cmdb_ws_ms_discovery_sourc
es_not_reporting]

Data for when one or more
discovery sources stop reporting
CIs after the specific X number of
days (X can be set in the CMDB
360 view and is stored in the
sn_cmdb_ws.ms.discovery_source_
not_reporting_max_days system
property). Records appear as a list
view when selecting the CIs not
reported by discovery sources
chart in the CMDB 360 view.

Multisource Workspace Settings
Weight Type

Weight type (automatic or
manual) for data mismatch and
coverage settings in CMDB 360
view.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

104

Zurich ServiceNow AI Platform Capabilities

---
*Page 105*

Table
Description

[sn_cmdb_ws_ms_settings_weight_
type]

Datacenter Types

[sn_cmdb_ws_datacenter_type]

Classifications of datacenter
classes which are considered
cloud or non-cloud in the
organization, which is used for the
Cloud and non-cloud resources
chart.

CMDB Insight Query Categories

[sn_cmdb_ws_insight_query_categ
ory]

Class categories and their status
for inclusion in the Cloud and non-
cloud resources chart.

CMDB Insight Data

[sn_cmdb_ws_insight_data]

Legacy table for storing data
for the Cloud and non-cloud
resources chart.

Starting with CMDB Workspace
version 3.4, the CMDB Product
Insight Data
[sn_cmdb_ws_product_insight_dat
a] table is used instead.

Base Aggregate Data

[sn_cmdb_ws_base_aggregate_d
ata]

Aggregation data for CMDB
Workspace cards and parent
table to other aggregation tables.
When processing for a count
completes, State of the existing
record for that count is set to
retired and a new record for that
count is created with the updated
count value. Cards in CMDB

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

105

Zurich ServiceNow AI Platform Capabilities

---
*Page 106*

Table
Description

Workspace views show values only
for counts where State = ready.

Read only.

Service Graph Connector

[sn_cmdb_ws_service_graph_conn
ector]

Details about all Service Graph
Connectors that are currently
available in the ServiceNow Store
(excluding any Innovation Lab
connectors). Data is used to
provide a current count for the
Service Graph Connectors card in
the Insights view.

Read only.

Rating Configuration

[sn_cmdb_ws_rating_config]

Start and end values for different
ratings of a category. For
example, start and end values
for low, moderate, and high
adoption level ratings for the
data governance category in the
Insights view.

Read only.

Feature Category

[sn_cmdb_ws_feature_category]

Metadata of the feature card for
most of the features at CMDB
Workspace level.

Read only.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

106

Zurich ServiceNow AI Platform Capabilities

---
*Page 107*

Table
Description

CMDB Product Insight Data

[sn_cmdb_ws_product_insight_dat
a]

Aggregated count for each class
and datacenter class, used for
cards in the Insights view.

Read only.

Feature Category Runtime
Attributes

[sn_cmdb_ws_feature_category_ru
ntime_attribute]

Runtime attributes related to
performance insights, that can
be used when running various
scheduled jobs.

Read only.

Integration Aggregate Data

[sn_cmdb_ws_integration_aggreg
ate_data]

Integration outlier information
related to performance insights.
Details for each Integration with
execution records which contain
processing rate or rows outliers.

Read only.

Partial Payload Items

[sn_cmdb_ws_partial_payload_ite
m]

Extracted partial payload
information related to
performance insights. Includes
discovery source, error, and class,
associated with each partial
payload item.

Read only.

Application Service Insights Data

Application services details such as
classification (cloud vs. non-cloud,
hybrid, or unknown) and count of

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

107

Zurich ServiceNow AI Platform Capabilities

---
*Page 108*

Table
Description

[sn_cmdb_ws_app_svc_insight_dat
a]

CIs associated with the application
service.

Read only.

Table Attributes

[sn_cmdb_ws_node_map_table_at
tributes]

Set of extended properties, per
class, that appear in the Attributes
pane in the contextual side panel
for a selected CI in Unified Map.

This table leverages the use of the
configuration identifiers framework.

For more information, see
Configure which attributes to
display in the Attributes panel.

Node Map Related Items

[sn_cmdb_ws_node_map_related_
item]

Categorization and order of
related items, per class, that
appear in the Related items panel,
in CI badges, and on the timeline
in Unified Map.

This table leverages the use of the
configuration identifiers framework.

For more information, see
Configure how to display related
items on the map.

Node Map References

[sn_cmdb_ws_node_map_referenc
e]

Reference relationships that
appear as a dotted line
relationship in Unified Map.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

108

Zurich ServiceNow AI Platform Capabilities

---
*Page 109*

Table
Description

This table leverages the use of the
configuration identifiers framework.

For more information, see
Configure display of connections
to a referenced class.

Class Icons

[sn_cmdb_ws_class_icon]

Maps ServiceNow platform UI
Builder (UIB) icon values (for
example 'serverbox-outline') to
CMDB class display names that
they are used for (for example
'Network Disk') in Unified Map.

Node Map Profiles

[sn_cmdb_ws_node_map_profiles]

Class profiles that include default
filters and some Unified Map
settings, per class. A class profile
is applied if no filter preset is in
effect, to the initial map and when
setting the filter preset to Default
view.

Specifying a class profile can
be especially useful for Service
Mapping data with the Mapped
Application Service class.

This table leverages the use of the
configuration identifiers framework.

For more information, see Create
a class profile of visible layers for
classes.

CMDB Data Management
Certification Task To Document

Mappings between certification
tasks and each of their
associated CI records targeted for
certification.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

109

Zurich ServiceNow AI Platform Capabilities

---
*Page 110*

Table
Description

[sn_cmdb_ws_dm_certification_tas
k_to_document]

CMDB Certification Attribute Status

[sn_cmdb_ws_dm_certification_att
ribute_status]

Flattened failed attribute status
JSON. Used for reporting
certification exceptions.

CMDB Data Management Task
Execution Context

[sn_cmdb_ws_dm_task_execution_
context]

Mappings between tasks and a
policy’s' execution context.

Remediate Duplicate Task Groups

[sn_cmdb_ws_reconcile_duplicate
_task_group]

Groupings of de-duplication tasks,
the CI class affected, any
discovery source associated with
the de-duplication task, and the CI
identification rule that was used to
discover the CIs.

Used in support of Now Assist for
CMDB.

• sn_cmdb_admin role has create/
write/delete privileges

• sn_cmdb_user OR dedup_admin
roles have read privileges

Group Task Mapping

Reference to the Remediate
Duplicate Task Groups table and a
root cause analysis summary of the

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

110

Zurich ServiceNow AI Platform Capabilities

---
*Page 111*

Table
Description

[sn_cmdb_ws_reconcile_duplicate
_task_group_m2m]

reason that the Cis were added to
the de-duplication task

Used in support of Now Assist for
CMDB.

• sn_cmdb_admin role has create/
write/delete privileges

• sn_cmdb_user OR dedup_admin
roles have read privileges

Config identifiers

[sn_cmdb_ws_config_identifier]

Parent table of the configuration
identifiers framework. By default,
contains the 'Default' config
identifier with default settings for
various CMDB Workspace features.

Stores any additional config
identifiers, configured with custom
settings for a CMDB Workspace
feature, that is applicable to a
specific workspace.

For information about the
configuration identifiers framework,
see Configuration identifiers
framework.

Workspace Config Properties

[sn_cmdb_ws_config_property]

Collection of properties that
control different behaviors in
Unified Map.

This table leverages the use of the
configuration identifiers framework.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

111

Zurich ServiceNow AI Platform Capabilities

---
*Page 112*

Table
Description

CI additional attributes config

[sn_cmdb_ws_ci_additional_attribu
tes]

Settings of requests for specific CI
attributes when using the CMDB
Workspace feature of manually
creating a new CI.

This table leverages the use of the
configuration identifiers framework.

For more information, see Request
additional attributes for new CIs.

CI class configs

[sn_cmdb_ws_ci_class_config]

Settings that limit the selection of
classes for a new CI when using
the CMDB Workspace feature of
creating manually a new CI.

This table leverages the use of the
configuration identifiers framework.

For more information, see Limit the
class list for new CIs created in a
workspace.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

112

Zurich ServiceNow AI Platform Capabilities

# zurich_servicenow_ai_platform_capabilities_monitor_health_in_csdm_and_cmdb_data_foundations_dashboards_2026-01-16-12-44-25

*Source: zurich_servicenow_ai_platform_capabilities_monitor_health_in_csdm_and_cmdb_data_foundations_dashboards_2026-01-16-12-44-25.pdf*

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

## Monitor health in CSDM and CMDB Data Foundations
## Dashboards

The ServiceNow® CSDM and CMDB Data Foundations Dashboards store
app contains dashboards with insights into the key foundational metrics
of your CMDB and Common Service Data Model (CSDM). This app uses
ServiceNow® health benchmarks to provide recommendations to ensure
that the CMDB and CSDM are properly configured for optimal usage and
to mitigate any potential risks.

Note:   CSDM and the CMDB Data Foundations Dashboards don't
support domain separation.

For an introduction, watch the ServiceNow Data Foundations
Dashboards for CSDM and CMDB video.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

The CSDM and CMDB Data Foundations Dashboards store app provides
dashboards that complement each other. See the respective sections for
each of the following dashboards:

CMDB Data Foundations dashboard

Evaluates various configurations and customizations in the CMDB.
This dashboard checks that important data is valid and properly
configured, and identifies and provides visibility into potential risks in the
implementation. Use the CMDB Data Foundations dashboard to prevent
issues and support continuous effective functioning of the CMDB.

CSDM Data Foundations dashboard

The CSDM Data Foundations dashboard displays key CSDM metrics on a
single page to assist you in getting the full benefit from your ServiceNow
AI Platform® products.

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

The CSDM and the CMDB Data Foundations dashboards capability is
provided by the com.snc.cmdb.getwell plugin, which is activated by
default in base systems.

Access the dashboards

Use either of the following steps to access the CSDM and the CMDB Data
Foundations Dashboards:

• In CMDB Workspace:

1. • Navigate to Workspaces > CMDB Workspace.

2. • Select Management in the CMDB Workspace menu bar.

3. • Select CMDB Data Foundations Dashboard or CSDM Data
Foundations Dashboard in Management tools, in the Optimize
section.

• Navigate to All > Configuration, and then select CMDB Data
Foundations Dashboard or CSDM Data Foundations Dashboard.

You can toggle between the two dashboards by clicking the change

dashboard icon (

) on the title bar of either dashboard.

Manage performance

It might be useful to manage the performance impact of some
metrics that are greatly affected by, for example, a large CMDB or a
high number of non-compliant CIs. You can use any of the following
methods to manage performance of those metrics to improve the overall
performance of the dashboards:

Deactivate a metric

Deactivate any CMDB or CSDM metrics that aren't needed or that
require extensive resources and affect performance. The active/non-
active settings for metrics are preserved across family release upgrades.

To deactivate a metric:

1. Access the CMDB/CSDM Get Well Metrics [sn_getwell_metric] table
where all CMDB and CSDM metrics are stored.

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

2. Navigate to the list view of the table [sn_getwell_metric].

3. Locate the metric that you want to deactivate and set its Active
column to false.

Tiles on the dashboards that are associated with inactive metrics stop
collecting data and aren't refreshed.

Limit a metric

For the following metrics, you can use metric-specific settings to limit their
performance impact:

• CMDB metrics:

• CIs Processed via IRE

• CIs with Relationships to Parent and Child

• Hardware CIs with Serial Numbers

• CSDM metrics:

• Application Services with 'Consumes::Consumed By' Relationship to
Business Application

• Application Services with Business Application Relationships

• Business Application with Application Service Relationship

The following columns in the CMDB/CSDM Get Well Metrics
[sn_getwell_metric] table are set with default values per metric that limit
performance impact, some of which can be fine tuned. Review those
settings for example, when there is a large number of non-compliant CIs
for a metric. Another example is having a large CMDB where a small
number of compliant CIs for a metric is already a sufficient indication of
health and there is no need to process the rest of the CIs for that metric.

• Aggregate limit: The maximum number or percentage of non-
compliant CIs that are reported for the metric. Once that threshold is
reached, counting for the metric stops for the run and the score for the
metric is set to 0 (you can't customize the default value).

• Fail count threshold: The threshold of the number of consecutive metric
runs that failed due to exceeding the metric's Runtime threshold.

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

When that threshold is reached, the respective metric is automatically
deactivated.

• Runtime threshold: The time threshold in seconds that is considered
too long for a metric run. When exceeded, the current metric run is
considered failed.

For most metrics, when the number of consecutive runs that fail because
the runtime exceeds Runtime threshold, is greater than the Fail count
threshold, the system automatically deactivates the metric. You can
manually reactivate a deactivated metric by setting its Active column
to true. An exception to those column definitions and usage is the CMDB
CIs Processed via IRE metric. For details, see CMDB Data Foundations
dashboard.

## CMDB Data Foundations dashboard

Use the CMDB Data Foundations dashboard to monitor foundational key
health-related metrics in CMDB.

Requirements

• To access the CMDB Data Foundations dashboard, users must be
configured with the admin, itil_admin, or asset roles. Some metrics that
let you drill-down to Performance Analytics (PA) data, might require
additional roles for accessing specific tables. Those roles are specified
as appropriate per metric.

• The CMDB Data Foundations dashboard adds the following scheduled
jobs, which must be running:

• CMDB Get Well Metric Collection: Calculates and stores details for
compliant CIs associated with metrics, populating the list view of
the metrics. Data appears on the dashboard only after the first run
of this scheduled job. Metrics' scores are stored in the CMDB Data
Foundations Metric Scores [sn_getwell_cmdb_score] table. This non-
PA job runs daily by default.

• CMDB Data Foundations PA Metric Collection: Calculates the total
non-compliant CIs associated with metrics and populates the PA
widgets on the dashboard. Also, provides trending data over time for
the non-compliant CIs associated with metrics. This PA job runs daily
by default.

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

• CMDB Get Well CIs Processed Via IRE Metric Batch Collection:
Invoked once a day (by default) by the CMDB Get Well Metric
Collection job and repeatedly runs in 10 minute intervals, to process
as many 1,000-CIs (default) batch files as possible. After each 10-
minute run, the job stops for a minute.

Overview

The CMDB Data Foundations dashboard provides four tabs, each
grouping a distinctive set of CMDB metrics:

• Best Practices: Checks if usage of tables and properties is as intended
for supporting the health of the CMDB. This set of metrics checks
adherence of CSDM-related standards, for example, for populating
services and relationships.

• Customizations: Checks how customizations to the CMDB are used. This
set of metrics checks that customizations are not used excessively, and
that they are used only when needed and are correctly applied.

• Data Management Practices: Checks if importing third-party data
into the CMDB is properly done without compromising the integrity
of the CMDB. This set of metrics checks if the imported data is
properly configured and formatted to provide the foundation for CMDB
functions.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

7

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 7, 1233x775px]*

```
................
.. ..     ..
......           ...    ....

.....
.               ..
.                  .                             .
.. ....            ..    .     .............. .  ..   ..
..  .........            .                .   .  .     .
.. ....    ....  ....    .        ..  .. .... .  .    ..
.
.                               .
..                            ..





```

---
*Page 8*

• ITSM Processes: Check if ITSM processes leverage CMDB data.

Columns in the list view of metrics

The following columns appear in the list view of metrics:

Name

Name of metric.

Priority

Priority of an metric. The priority for an metric is a calculation of the
weight of the metric and the severity of the percentage score. Priority
ranges from 1- Critical as the highest priority, to the lowest priority which
is 5 - Low. Metrics are listed in their priority order, starting with the highest
priority metric (lowest priority number).

Result

Percentage number of CIs (or the measured item) which are in
compliance with the metric.

Note:   Some metrics use a lower threshold value which impacts
the result that appears in the dashboard. For these metrics, if the
percentage of compliant CIs is less than the lower threshold value,
then the result appears as 0 for the metric.

Remediation playbook URL

Links to remediation playbook articles in Now Support. These knowledge
articles provide context for the respective issue, guidelines to help
remediate the issue, and other necessary details to bring CIs into
compliance. Click the link and use your Now Support credentials to
access the knowledge article.

Performance Analytics widgets

Most metrics are associated with Performance Analytics (PA) widgets
(tiles) that provide further details about CIs that are not in compliance
with the metric. Drill down the tiles to access PA widgets, which are
provided by the CMDB Data Foundations PA Metric Collection scheduled
job.

On the Analytics Hub page:

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

• Click the Breakdowns context menu to see any available breakdowns.

• Ensure that the Real-time (

) option is selected and then click
Show Records to see a list view of the respective CIs.

Best Practices metrics

The Best Practices tab contains the following metrics:

Create Asset Business Rule is Enabled

Checks for the existence of the Create Asset on insert business rule. If the
business rule exists, the percentage score for the metric is 100. Otherwise,
the percentage score is set to 0.

Custom CMDB Attributes at the Right Level

Percentage of custom attributes that should be added at a higher
level in the CMDB hierarchy. For example, the custom attribute Warranty
duration was added three times in the Computer class, instead of adding
the attribute once at a higher level in the hierarchy, which is more
efficient.

• If (total number of attributes that can be moved up > 10): Percentage is
set to 0.

• Otherwise: Percentage is set to (10 – total number of attributes that can
be moved up)*10.

Hardware CIs with Serial Numbers

Percentage of Computer or Network Gear CIs with a serial number versus
those CIs without. The metric is based on the following conditions:

• Class is an instance of Computer or Gear

• Status = installed

• Operational status = operational

• Serial number is empty

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

9

Zurich ServiceNow AI Platform Capabilities

*[Icon Or Small Graphic - Page 9, 55x64px]*

```


.--.
.-+#%@#:          .--.           ....
.-*%%@@#:         :*#*+.          .....
.=*+:          :==.

:--
*:==.
*. ++--:::
.::+= =+:=*.-#=+.
.*::=%:       . *:
-*: .  --:-.=  *:
-%=   ==:+.* =+.
.=%@@#-   .-.:*@+.
.=%@@@@@@*==*@%+@@@%+.
.:::::::::::::::+%@@@@@@@@@@@@@@@@@@@@%+-::::::::::::::.
.*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*.
=@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*
+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*
+@@@@@@@@@@@@@@@%=-===#@@@@@@@@@@@@@@-+%@@@@@@@@@@@@@@@@@@@*
+@@@@@@@@@@@@@@@#.:%%- %@*++*%@#+=+%@.=@@@@@@@@@@@@@@@@@@@@*
+@@@@@@@@@@@@@@@#:.=::*@=.=+.-##++.:%.=#*++#@@@@@@@@@@@@@@@%
+@@@@@@@@@@@@@@@#.:#=.+@-.+*+#*--+:.%.=%%##%@@@@@@@@@@@@@@@@
+@@@@@@@@@@@@@@@%=+@@*-*%+===##==+==@=*@@@@@@@@@@@@@@@@@@@@%
+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%
+@@@@@@@@@@@@@@@@@@%%@@**@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
+@@@@@@@@@@@@@@@@@#--%%++@%%##%%##@@@%##%@@@@@@@@@@@@@@@@@@%
+@@@@@@@@@@@@@@@@%+.:*%-=@::=-.-=:-@-:=-:*@@@@@@@@@@@@@@@@@*
+@@@@@@@@@@@@@@@@@#-=@%:-@.-@*:+@=.# -+*=*@@@@@@@@@@@@@@@@@*
+@@@@@@@@@@@@@@@@@%=:+#-=@:=%#-*@+:%+-===#@@@@@@@@@@@@@@@@@*
+@@@@@@@@@@@@@@@@@@@%%@@%@@%@@%%@@%@@%%%%@@@@@@@@@@@@@@@@@@*
=@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*
.#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%:
```

---
*Page 10*

The complete set of CIs for this metric consists of the CIs that satisfy the
first three conditions. The CIs that satisfy all conditions are counted as
non-compliant Computer or Network Gear CIs, which are without a serial
number.

Note:   If the percentage of compliant CIs is less than 70%, then the
percentage score for this metric is set to 0.

The Hardware CIs Missing Serial Numbers tile shows the total number of
CIs which are not in compliance with the metric. Click the tile to drill
down the PA widget for further details, such as the list all those CIs.

The Hardware CIs Missing Serial Number by Key Classes chart shows those
CIs that are missing a Serial Number, grouped by key classes. Point to
a class bar on the chart to show more details, and click a class bar to
access a list view of those CIs for class.

To manage a potential performance impact, other than deactivating
the metric, you can limit the performance impact by adjusting the
following performance management columns for the metric in the
CMDB/CSDM Get Well Metrics [sn_getwell_metric] table. For this metric,
those columns are set with the following default values:

• Aggregate limit: 30 (% of CIs in the metric)

• Fail count threshold: 3

• Runtime threshold: 3,600

For more information about these columns, see Performance
management in Monitor health in CSDM and CMDB Data Foundations
Dashboards.

Services with Owners

Percentage of operational services in which the owned_by field is
populated versus those operational services in which this field isn't
populated.

The complete set of CIs for this metric consists of all the operational
services in the Service [cmdb_ci_service] table (where operational_status
= Operational). The percentage score for this metric is calculated as
(Compliant CIs/Complete set of CIs) *100.

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

The Services Missing Owners tile shows the total number of CIs which are
not in compliance with the metric. Click the tile to drill down the PA
widget for further details, such as the list all those CIs.

Customizations metrics

The Customizations tab contains the following metrics:

Base System Business Application Table Usage

Checks for the existence of a custom business application table, which
is any table that extends [cmdb_ci], whose name starts with “u_” or “x_”
and which contains the strings “bus” and “app”.

If such custom table exists, then is 0, and if not, the percentage is 100.

The Custom Business Application Tables tile shows any custom business
application tables. Click the tile to drill down the PA widget for further
details, such as the list all those tables.

Base System CMDB Relationship Types Usage

Percentage of base system relationship types versus custom relationship
types that were created by users. Creating custom relationship types can
interfere with the integrity of the CMDB therefore this metric can help you
prevent such problems.

This metric counts records in the Relationship Type [cmdb_rel_type] table
where sys_package is “global” and name is not “Manages::Managed
by”. The percentage score for this metric is calculated as follows:

• If count is <= 0, then percentage is 100

• If count is > 10, then percentage is 0

• Otherwise percentage = (10 – count)*10

The Custom CMDB Relationship Types tile shows the relationships which
are not in compliance with the metric. Those are the relationships that
were not included in the base system and were custom created. Click
the tile to drill down the PA widget for further details, such as the list all
those relationships.

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

Base System Relationship Types Not Deleted or Recreated

Percentage of relationship types that exist in the base system and which
were not deleted or recreated, versus those that were deleted and
maybe recreated. Deleting and recreating base system relationships can
interfere with the integrity of the CMDB, therefore this metric can help you
prevent potential problems.

This metric counts the number of base system relationships that were
deleted and possibly recreated. The percentage score for the metric is
calculated as follows:

• If count is <= 0 then the percentage is set to 100

• If count is > 10 then the percentage is set to 0

• Otherwise, the percentage = (10 – count)*10

.

The Base System CMDB Relationship Types Deleted and/or Recreated tile
shows the relationships which are not in compliance with the metric. Click
the tile to drill down the PA widget for further details, such as the list all
those relationships.

Custom CMDB Tables Using Standard Naming

Percentage of custom CMDB tables whose name doesn't start with the
standard string “u_cmdb_ci”. The metric counts tables in the Tables
[sys_db_object] table that extend from the CMDB table and whose
name starts with the string “u_” (indicating that it is a custom table) but
not with “u_cmdb_ci”.

The percentage score for this metric is calculated as follows:

• If count <= 0 then percent is 100

• If count > 6 then percent is 0

• If count is between 0 and 6, then percent is (1-(count/6))*100

The Custom CMDB Tables Not Using Standard Naming tile shows the
tables which are not in compliance with the metric. Click the tile to drill
down the PA widget for further details, such as the list all those tables.

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

Use of Custom Attributes

Percent of custom attributes that were added to CMDB tables in the
base system. Custom attributes are identified by a table name that starts
with "cmdb_ci" and a column name that starts with “u_.”
The percentage score for the metric is calculated as follows:

• If (total custom attribute count > 50): Percentage is set to 0.

• If (total custom attribute count < 10): Percentage is set to 100.

• If (total custom attribute count is 10–50): Percentage is set to (total
custom attribute count – 10)/(50-10)*100.

Data Management Practices metrics

The Data Management Practices tab contains the following metrics:

Active CIs Updated in Last 90 days

Percentage of Hardware [cmdb_ci_hardware] or Virtual Machine
Instance [cmdb_ci_vm_instance] active CIs that were updated in the
past 90 days versus those CIs that were not (stale CIs). The metric is based
on the following conditions:

• Class is an instance of Hardware or VMware Virtual Machine Instance

• Status = installed

• Operational status = operational

• Updated >= 90 days

The complete set of CIs for this metric consists of CIs that satisfy the first
three conditions. The CIs that satisfy all conditions, are counted as stale
CIs of the Hardware [cmdb_ci_hardware] and Virtual Machine Instance
[cmdb_ci_vm_instance] classes.

Note:   If the percentage of compliant CIs is less than 65%, then the
result displayed for this metric is set to 0.

The Active CIs Not Updated in 90 Days tile shows the total number of CIs
which are not in compliance with the metric. Click the tile to drill down
the PA widget for further details, such as the list all those CIs.

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

CIs Processed via IRE

Percentage of Hardware [cmdb_ci_hardware] or Virtual Machine
Instance [cmdb_ci_vm_instance] CIs processed via IRE versus those CIs
not processed via IRE. CIs are counted as processed via IRE if they satisfy
all of the following conditions:

• Instance of Hardware [cmdb_ci_hardware] or Virtual Machine Instance
[cmdb_ci_vm_instance]

• Status = installed

• Operational status = operational

• Sys_id is IN (target_sys_id FROM sys_object_source table)

The CIs that satisfy only the first three conditions but fail the forth
condition, are counted as CIs not processed via IRE.

Note:   Viewing the data provided by PA for this metric, requires
the additional role of admin or discovery_admin. However, the Show
Records button on the Analytics Hub page isn't supported.

To manage a potential performance impact, other than deactivating
the metric, you can limit the performance impact by adjusting the
following performance management columns for the metric in the
CMDB/CSDM Get Well Metrics [sn_getwell_metric] table. For this metric,
those columns are set with the following default values:

• Aggregate limit: 1,000 (Number of records in each batch file processed
by the CMDB Get Well CIs Processed Via IRE Metric Batch Collection
job during its 10-minute run intervals. Non customizable).

• Fail count threshold: 3

• Runtime threshold: 72,000 (Daily limit of total runtime of all CMDB Get
Well CIs Processed Via IRE Metric Batch Collection job runs)

For this metric, there is no trigger for automatically setting the metric
score to 0. For more information about these columns, see 'Performance
management' in Monitor health in CSDM and CMDB Data Foundations
Dashboards.

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

CIs with Names

Percentage of Hardware, VMware Virtual Machine Instance, or
Application CIs with a name up to 200. The metric is based on the
following conditions:

• Class is an instance of Hardware [cmdb_ci_hardware], Virtual Machine
Instance [cmdb_ci_vm_instance], or Application [cmdb_ci_appl]

• Status = installed

• Operational status = operational

• Name is empty

Non-compliant CIs are counted as the CIs that are missing a name,
which are those CIs that satisfy all conditions.

The percentage score for the metric is calculated as follows:

• If count of CIs without names is > 200, percent is 0

• If count of CIs without names is < 200, percent is (200-(count of CIs
without names)/200 * 100)

The CIs Missing Names tile shows the total number of CIs which are not in
compliance with the metric. Click the tile to drill down the PA widget for
further details, such as the list all those CIs.

CIs with Relationships to Parent and Child

Percentage of non-orphan CIs versus orphan CIs.

The complete set of CIs for this metric consists of CIs in
records from the CI Relationship [cmdb_rel_ci] table. CIs in which
[parent.sys_class_name=(empty)] OR [child.sys_class_name=(empty)],
are counted as orphan CIs.

The Orphan CIs tile shows the total number of orphan CIs, correlating the
darker portion of the metric bar. Select the tile to drill down to the list all
those CIs.

To manage a potential performance impact, other than deactivating
the metric, you can limit the performance impact by adjusting the
following performance management columns for the metric in the

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

CMDB/CSDM Get Well Metrics [sn_getwell_metric] table. For this metric,
those columns are set with the following default values:

• Aggregate limit: 1,000

• Fail count threshold: 3

• Runtime threshold: 3,600

For more information about these columns, see Performance
management in Monitor health in CSDM and CMDB Data Foundations
Dashboards.

Handled Duplicate CIs

Percentage of duplicate CIs of the Hardware or VMware Virtual Machine
Instance classes, that were remediated, up to 200. If the number of
unhandled duplicate CIs is greater than the upper threshold of 200, then
is set to 0. The metric is based on the following conditions:

• Class is an instance of the Hardware [cmdb_ci_hardware] or the Virtual
Machine Instance [cmdb_ci_vm_instance] class.

• Status = installed

• Operational status = operational

• Duplicate_of in not empty

Non-compliant CIs are counted as those CIs that satisfy all conditions.
Non-compliant CIs are those Hardware [cmdb_ci_hardware] or Virtual
Machine Instance [cmdb_ci_vm_instance] duplicate CIs that were not
remediated. For more information, see Duplicate CIs remediation.

The percentage score for this metric is calculated as follows:

• If count of non-compliant CIs is > 200 then percent is 0

• If count of non-compliant CIs is < 200 then percent is (200-count of
non-compliant CIs)/200*100

The Unhandled Duplicate CIs tile shows the total number of CIs which
are not in compliance with the metric. Click the tile to drill down the PA
widget for further details, such as the list all those CIs.

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

Installed Server CI Naming Reflecting Hostname

Percent of Server CIs where name reflects the host name, up to the first
period in the name. The complete set of CIs for the metric are all the
servers in the Server [cmdb_ci_server] table in which install_status=1 and
host_name is not empty.

Examples of compliant CIs:

• Server Name is “abc”, and host name is “abc.1.2.3”

• Server Name and host name are the same

The percentage score for the metric is calculated as (Compliant CIs/Total
CIs)*100.

The Installed Server CI Naming Not Reflecting Hostname tile shows the
number of Server CIs which are not in compliance with the metric. Click
the tile to drill down the PA widget for further details, such as the list all
those CIs.

Note:   If you need to manually refresh the Installed Server CI
Naming Not Reflecting Hostname widget, then you must first run the
CMDB Get Well Metric Collection job, and then run the CMDB Data
Foundations PA Metric Collection job.

Managed CIs with Model Entries

Percentage of Hardware [cmdb_ci_hardware] CIs with a model ID versus
those CIs without.

The complete set of CIs for this metric consists of all the CIs in the
Hardware [cmdb_ci_hardware] table. Compliant CIs are those in which
model_id is populated.

The Managed CIs Missing Model Entries tile shows the total number of CIs
which are not in compliance with the metric. Click the tile to drill down
the PA widget for further details, such as the list all those CIs.

Servers with Location

Percentage of Server CIs in which Location is populated versus Server
CIs in which Location isn't populated. The complete set of CIs for this
metric are the Server CIs in the Server [cmdb_ci_server] table in which

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

install_status =1 and operational_status=1. Compliant CIs are those CIs in
which also location is not null.

The percentage score for the metric is calculated as (Compliant CIs/Total
CIs)*100.

The Servers Missing Location tile shows the number of Server CIs which
are not in compliance with the metric. Those are the Server CIs in which
Location is empty. Click the tile to drill down the PA widget for further
details, such as the list all those CIs.

Unique Locations

Percentage of unique locations versus non-unique (duplicate) locations.

The complete set of locations for this metric consists of all the locations in
the Location [cmn_location] table records, in which name is not null. A
duplicate location is counted as a record in which name is not null, and
the same name is used more than once.

The percentage score for the metric is calculated as (Compliant CIs/Total
CIs)*100.

The Duplicate Locations tile shows the total number of CIs which are not
in compliance with the metric. Click the tile to drill down the PA widget
for further details, such as the list all those CIs.

Note:   If you need to manually refresh the Installed Server CI
Naming Not Reflecting Hostname widget, then you must first run the
CMDB Get Well Metric Collection job, and then run the CMDB Data
Foundations PA Metric Collection job.

ITSM Processes metrics

The ITSM Processes tab contains the following metrics:

Changes Referencing a CI

Percentage of change requests with a reference to CIs versus those
change requests without. The complete set includes all change requests
created in the last 90 days. Compliant records are those change requests
in which the cmdb_ci field is not empty.

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

The percentage score for the metric is calculated as (Compliant change
requests/Total change requests) * 100.

The Changes Not Referencing a CI tile shows the total number of records
which are not in compliance with the metric. Click the tile to drill down
the PA widget for further details, such as the list all those change
requests.

Note:   Viewing all the data provided by Performance Analytics for
this metric (when drilling down), requires the additional role of itil or
sn_change_read.

Changes Relating to both a Service and a CI

Percentage of changes relating services to CIs versus those changes that
don't. The complete set of CIs for this metric consists of all change request
records. Compliant records are those change requests in which both, the
cmdb_ci and the business_service fields, are not empty.

The Incidents Relating to Neither a Service nor a CI tile shows the total
number of records which are not in compliance with the metric. Click the
tile to drill down the PA widget for further details, such as the list all those
CIs.

Note:   Viewing all the data provided by Performance Analytics for
this metric (when drilling down), requires the additional role of itil or
sn_change_read. Click the tile to drill down the PA widget for further
details, such as the list all those CIs.

Incidents Referencing a CI

Percentage of incidents referencing a CI versus those incidents that
don't. The complete set of records includes all incidents created in the
last 60 days. Compliant incidents are all those in which the cmdb_ci field
is not empty.

The percentage score for the metric is calculated as (Compliant
Incidents/Total Incidents)*100.

The Incidents Not Referencing a CI shows the total number of incidents
which are not in compliance with the metric. Click the tile to drill down
the PA widget for further details, such as the list all those incident records.

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

Note:   Viewing all the data provided by Performance Analytics for
this metric (when drilling down), requires the additional role of itil or
sn_incident_read.

Incidents Relating to both a Service and a CI

Percentage of incidents relating to both a service and a CI versus
those incidents that don't. The complete set for this metric is all incident
created in the last 60 days. Compliant records are those incidents in
which both, the cmdb_ci and the business_service fields, are not empty.

The percentage score for the metric is calculated as (Compliant
Incidents/Total Incidents) * 100.

The Incidents Relating to Neither a Service nor a CI shows the total
number of records which are not in compliance with the metric. Click
the tile to drill down the PA widget for further details, such as the list all
those incident records.

Note:   Viewing all the data provided by Performance Analytics for
this metric (when drilling down), requires the additional role of itil or
sn_incident_read. Click the tile to drill down the PA widget for further
details, such as the list all those CIs.

## CSDM Data Foundations dashboard

The CSDM Data Foundations dashboard displays key CSDM indicators on
a single page to help you get the full benefit from your ServiceNow AI
Platform products.

Access the dashboard

Use either of the following methods to open the dashboard:

Navigate to All > Configuration, and then select CSDM Data Foundations
Dashboard.

1. In CMDB Workspace, navigate to Workspaces > CMDB Workspace.

2. Select Management in the CMDB Workspace menu bar.

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

3. Select CSDM Data Foundations Dashboard in the Optimize section of
the Management tools.

Select the change dashboard icon (

) to toggle between the CSDM
and CMDB dashboards.

Example

The reports on each tab display the data metrics that are appropriate
for the maturity of your organization's CSDM implementation stage
(foundation, crawl, walk, run, and fly). A label on each report identifies
the metric being displayed.

In this example, a report on the Run tab indicates that several
business service offerings don't have the required relationships to service
instances . With this knowledge, Service owners can add the relationships
to ensure that customer service agents get complete information on the
impact of applications that are down.

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

Tabs on the dashboard

• Tables in the Foundation domain contain base data that is referenced
from or to objects in the other CSDM domains. Before you can
use ServiceNow products, you must populate foundational data. See
'Foundation' stage reports on the CSDM Data Foundations dashboard.

• In the Crawl stage, you work on base-system CMDB tables that are
associated with IT Service Management (ITSM). See 'Crawl' stage
reports on the CSDM Data Foundations dashboard.

• In the Walk stage, you identify and populate the network infrastructure
CIs and applications that your organization's technical teams support.
See 'Walk' stage reports on the CSDM Data Foundations dashboard.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

22

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 22, 820x727px]*

```
.  ............                                         .
..................
..... ... .......
...........
..         ...   ..           ...........
.........
......      ..
.....
. .:.....     ..     ...         ...............
......
..                   .......
..
.....:...     .    ........... ............... .

. . .. .. .....                   .. .  ..

.                             ..
.                             ..


.............. ........       ...... .................

...                            .
. .                           ....
.. .                          ....

```

---
*Page 23*

• In the Run stage, you set up the relationship between a technology
and the business that sells and/or consumes the technology. See 'Run'
stage reports on the CSDM Data Foundations dashboard.

• When you reach the Fly stage, you've accomplished all or most of the
process of implementing the CSDM framework. The fly stage completes
the process. See 'Fly' stage reports on the CSDM Data Foundations
dashboard.

Managing performance of data collection

The system runs scheduled jobs that collect data for three CSDM metrics:

• App services that are missing a business app relationship

• Business apps that are missing an app service relationship

• App services where the relationship to business apps is not Consumed
by

For information on managing data collection for a metric that isn't
needed or that affects performance of the dashboard, see Manage
performance.

Related tasks

• Configure the CSDM Data Foundations dashboard

Related concepts

• Monitor health in CSDM and CMDB Data Foundations Dashboards

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

23

Zurich ServiceNow AI Platform Capabilities

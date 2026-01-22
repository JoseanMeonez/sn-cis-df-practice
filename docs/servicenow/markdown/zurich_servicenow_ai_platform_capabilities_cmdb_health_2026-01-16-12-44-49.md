# zurich_servicenow_ai_platform_capabilities_cmdb_health_2026-01-16-12-44-49

*Source: zurich_servicenow_ai_platform_capabilities_cmdb_health_2026-01-16-12-44-49.pdf*

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

## CMDB Health

A healthy CMDB, based on health benchmarks in an organization, is
essential to an effective and continuous use of the product. Health
indicators such as duplicate CIs, required CI fields, and audits are
evaluated and aggregated into health scores at the class, health group,
and service levels. CMDB Health also provides a framework for applying
standardized CI remediation.

Get started

Explore

Explore
the KPIs and metrics
that are evaluated for
health, and the health
results dashboards.

Configure

Select
the health metric to
monitor and configure
any associated rules.

Use CMDB Health
in CMDB Workspace

Access
CMDB Health
dashboards and
related tasks in CMDB
Workspace views.

Remediate

Create and
apply remediation
rules to CIs
that failed health tests.

Track processes

Use logging
and other
troubleshooting
methods to resolve
issues with CMDB
Health processes.

Reference

Details
about properties,
scheduled jobs,
and tables, used
by CMDB Health, and
domain separation.

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

Troubleshoot and get help

• Ask questions and explore other resources for in the ServiceNow
Community

• Search the Known Error Portal for known error articles

• Contact Customer Service and Support

• Exploring CMDB Health

Learn more about CMDB Health and review the benefits it can provide
for users in your organization.

• CMDB Health experience in CMDB Workspace

View CMDB Health dashboards and use other CMDB Health-related
features in CMDB Workspace.

• View CMDB Health Dashboard

The CMDB Health Dashboard serves as a central location to view
detailed health reports for your CMDB at a glance. Also, it provides
functions to remediate issues that CMDB Health detected, to improve
CMDB health.

• View relationships health

View health scores for relationship health such as orphan, stale, and
duplicate relationships, in the Relationship Health Dashboard.

• View CI health

View CMDB Health report for an individual CI, on the CIs form in CMDB
Workspace.

• Create a CMDB remediation rule

A CMDB remediation rule is associated with a task that was created
for a failed CMDB health test. A CMDB remediation rule is applied
automatically or manually to execute a remediation workflow that can,
for example, delete stale CIs.

• CMDB Health process tracking and troubleshooting

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

Use the following information to track and resolve issues with the CMDB
Health processes.

• CMDB Health reference

Reference topics provide additional information about the KPIs and
metrics that CMDB Health uses and about tables, scheduled jobs, and
properties that are used by CMDB Health.

## Exploring CMDB Health

Learn more about CMDB Health and review the benefits it can provide
for users in your organization.

CMDB Health overview

CMDB Health Monitors and helps maintain the integrity and effectiveness
of the CMDB, using health benchmarks specified for the organization.
CMDB Health evaluates Health indicators such as duplicate CIs, required
CI fields, and audits and aggregates them into health scores at the
class, health group, and service levels. CMDB Health also provides a
framework for applying standardized CI remediation for health issues that
are detected.

CMDB Health benefits

CMDB Health is configurable so you can track specific areas of concern.
It provides dashboards with aggregated numbers that you can easily
glance and drill-down to locate the source of a problem.

What to explore next

To learn more about configuring and using CMDB Health, see:

• Configuring CMDB Health

• CMDB Health experience in CMDB Workspace

• View CMDB Health reports:

• View CMDB Health Dashboard

• View relationships health

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

• View CI health

• Create a CMDB remediation rule

• Track CMDB Health processes

• CMDB Health reference

• Overview of CMDB Health

Learn about the benefits, configuration, and usage of the CMDB Health
feature.

• CMDB Health KPIs and metrics

CMDB Health calculates an aggregated score for three Key
Performance Indicators (KPIs) which are correctness, compliance, and
completeness, each further consisting of sub-metrics.

Related tasks

• View relationships health

• View CI health

• Create a CMDB remediation rule

Related concepts

• CMDB Health experience in CMDB Workspace

• View CMDB Health Dashboard

• CMDB Health reference

Related reference

• CMDB Health process tracking and troubleshooting

## Overview of CMDB Health

Learn about the benefits, configuration, and usage of the CMDB Health
feature.

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

The health of the CMDB data is monitored and reported for the following
KPIs, each further consisting of sub-metrics:

Completeness

CIs are tested for required and recommended fields that are not
populated.

Correctness

CIs are tested against predefined data integrity rules such as
identification rules (to detect duplicate CIs), orphan CI rules, and stale
CI rules.

Compliance

The CMDB data is audited for adherence to predefined certificates.

Relationships

The health of CI relationships is tested for indicators such as orphan and
duplicate relationships, and for compliance with suggested relationships,
hosting and containment rules.

After CIs are tested for various health indicators (metrics), the results are
aggregated at the class, health group, service, and relationship level,
and appear on CMDB Health dashboards. For most metrics, you can
configure the health tests themselves to determine how compliance and
non-compliance of CIs are evaluated.

For more details about the KPIs and their associated metrics, see CMDB
Health KPIs and metrics.

Note:   CMDB Health doesn't support non-CMDB tables.

CMDB Health dashboards and reports

You can view CMDB Health dashboards and reports in CMDB
Workspace. Those dashboards show CMDB Health aggregated results for
compliant and non-compliant CIs for CMDB Health KPIs and their metrics.

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

Dashboard/Report
Use

CMDB Health Dashboard

1. Navigate to Workspaces >
CMDB Workspace.

2. Select Home in the CMDB
Workspace menu bar.

3. In the Quick links section select
the CMDB Health Dashboard
link.

or:

1. Navigate to All > Configuration
> CMDB Health Dashboard.

2. Select one of the views.

Main CMDB Health Dashboard
with the following views:
Class View

• Shows CIs and classes health
reports with aggregations for
metrics, KPIs, and class branches.

• Access to remediation tasks that
were generated for CIs that
failed a health test.

Service View

• Shows service health reports.

• Detailed health for CIs per
service with aggregations for
metrics and services.

• Access to remediation tasks that
were generated for CIs in a
service that failed a health test.

Health Group View

• Shows health reports for CMDB
groups of type Health.

• Detailed health for CIs in the
group, with aggregations for KPIs,
metrics, and health groups.

In either dashboard view you
can select CMDB Health settings
to manage the CMDB Health
Dashboard jobs and configure
other CMDB Health settings. For
more information, see Configuring
CMDB Health.

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

Dashboard/Report
Use

Relationship Health Dashboard

1. Navigate to Workspaces >
CMDB Workspace.

2. Select Home in the CMDB
Workspace menu bar.

3. In the Quick links section
select the Relationship Health
Dashboard link.

Shows various charts for
relationships health, such as
duplicate, orphan, and stale
relationships. For more information,
see View relationships health.

CI health report

• On a CI form that isn't in
CMDB Workspace, select Open
in CMDB Workspace.

• In CMDB Workspace, select a CI
in a list view to open the CI's
form. For example, on the CMDB
Health Dashboard, drill down a
KPI tile and then select a CI in the
tile's list view.

On a CI form, the CI Health tile
contains widgets that show CIs
health reports. Select the right (>)
or left (<) handles in the CI Health
tile to scroll through the widgets.

Setup and configuration

To start gathering and aggregating health data, you must enable the
CMDB Health-related jobs (CMDB Health Dashboard jobs) which are
initially disabled. You also need to configure CMDB Health related
system properties and health KPIs and metric test rules, to reflect health
standards in your organization.

For details about setting up and configuring CMDB Health, see
Configuring CMDB Health.

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

Location
Configuration

CI Class Manager

Configuration > CI Class Manager

Central location to manage CI
classes and to configure CMDB
health settings. Use the CI Class
Manager to Manage rules and
definitions that are used for health
tests, such as orphan rules, audit
certificates, and recommended
fields rule.

For information about configuring
KPI and metric tests, see CMDB
Health KPIs and metrics.

CMDB Health Preferences

Navigate to Configuration >
Health Preferences, or perform the
following steps:

1. Navigate to All > Configuration
> CMDB Health Dashboard.

2. Select a view.

3. On the CMDB Health
Dashboard, select CMDB
Health settings.

Central location for configuring
CMDB Health settings:

• Configure CMDB Health system
properties.

• Enable and manage the CMDB
Health Dashboard jobs.

• Activate or deactivate KPIs and
metrics.

• Set the maximum failure
threshold for the KPIs and metrics.

• Configure creation of tasks for
failed CIs.

CI remediation

CMDB Health provides a framework for configuring CI remediation.
Remediation lets you proactively apply corrective actions to unhealthy
CIs in a managed and standardized fashion.

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

Domain separation

CMDB Health is domain aware. If the domain separation plugin has been
activated, then the CMDB Health Dashboard shows health based on
data, rules, and settings from the logged-on user domain. If rules and
settings aren't defined for a child domain, then the parent's settings are
applied, recursively.

For more information, see Domain separation in CMDB Health.

## CMDB Health KPIs and metrics

CMDB Health calculates an aggregated score for three Key Performance
Indicators (KPIs) which are correctness, compliance, and completeness,
each further consisting of sub-metrics.

You can configure which KPIs and metrics are included in CMDB Health
evaluations and dashboards. In the base system, all KPIs and all their
metrics are included.

To access the CMDB Health Dashboard and view CMDB health, see View
CMDB Health Dashboard.

Correctness

A KPI which is an aggregation of the following metrics:

Orphan

Measures the percentage of orphan CIs in the CMDB. A CI can become
orphan if it was unintentionally left in the CMDB when it is no longer
needed. A CI is determined to be orphan if:

• The CI satisfies the criteria in an orphan rule. This criteria checks for
specific attributes that a CI must have, and for CIs that have no
relationships or that don't have specific relationships.

• Data is missing for the CI in its respective table, or in one of its parents'
table.

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

Staleness

Measures the percentage of stale CIs in the CMDB. A CI is stale if it was
not updated within the Effective Duration time period that is specified in
the staleness rule that applies to the class.

The base system includes a default staleness rule for the Configuration
Item [cmdb_ci] class, which sets the Effective Duration time to 60 days.
This rule applies to all extended CMDB classes, and can be overridden
by class specific staleness rules defined by the user. To determine CI
staleness, a staleness rule for the CI's class is used if it exists, otherwise, the
default staleness rule is used.

In addition, a relationship in which a stale CI is a parent or a child, is
determined to be a stale relationship.

Note:

Discovery marks VMware vCenter CIs that no longer physically
exist, as stale. By default, this setting takes precedence over a
CMDB Health staleness rule defined for the CI. When drilling-down
in the CMDB Health Dashboard to Health Results, the Source for CIs
determined to be stale by Discovery, is Cloud Discovery.

For the aggregated score of the correctness KPI to include
only health results generated by CMDB Health, set the
glide.cmdb.health.src.cmdb_health_audit_only system property to
true. In which case, drilling-down to the details of stale CIs still shows
those CIs in which source is Cloud Discovery. For more information,
see CMDB Health system properties and Discovery for VMware
vCenter.

Duplicate

Measures the percentage of duplicate CIs in the CMDB using
identification rules. Only independent CIs are evaluated for duplication.
In a set of duplicate CIs, the count of duplicate CIs is the total number
of CIs in the set, minus one. The detailed graphs for a duplicate set of CIs
display all the CIs in the set.

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

For more details, examples, and troubleshooting information about
duplicate metric, see the CMDB Health - Duplicate Metric - algorithm
[KB0726425] knowledge base article.

Completeness

A KPI which is an aggregation of the following metrics:

Required

Measures the percentage of CIs in which fields that are defined as
mandatory, are not populated. Missing fields are tagged as incomplete
noting that for this CI some information is missing. Required fields are
equivalent to the fields that are specified as mandatory in the system
dictionary.

Recommended

Measures the percentage of CIs in which fields that are set as
recommended, are not populated. Out-of-box, no recommended fields
are specified.

You can use the Add Identifier Fields In Recommended Rules scheduled
job to set criterion attributes from active identification rules, as
recommended fields. You can use the Remove Identifier Fields In
Recommended Rules scheduled job to unset criterion attributes from
active identification rules, as recommended fields.

Compliance

Based on the results of actual CMDB audit runs.

Note:   Audit must be activated for the compliance KPI to show
results. For more information, see Compliance Activation.

Audit

Audit compares actual values of specified fields, against expected
values defined in template and scripted audits. Based on the Last
run date of audits, CMDB Health identifies the set of the most recent
complete audit run, and uses those audit results. To pass the CMDB
Health audit test, a CI must be in compliance with all audits for that CI.

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

Create a compliance-type audit, for which the results are calculated into
the CMDB Health compliance KPI.

When running scripted audits, the Last run date is not populated.
Therefore, for the compliance KPI to include the results of a scripted
audit, update the script in the audit to record the audit run time.

Relationships

Measures the health of CI relationships, consisting of the following metrics
which are not-configurable:

Duplicate relationships

Relationships that have identical parent and child CIs, identical
relationship type, and an identical port. Duplicate relationships are
displayed per relationship type. In a set of duplicate relationships, the
duplicate relationship count is the total number of duplicate relationships
in the set, minus one. The detailed graphs for a duplicate set of
relationships display all the relationships in the set.

Orphan relationships

A relationship that is missing either a parent CI, a child CI, or both.

Stale relationships

A relationship in which the parent CI or the child CI is a stale CI.

A single relationship can fail more than one health test. For example, a
duplicate relationship can also be stale.

Also reports the following relationship-related summaries:

• Relations not compliant with suggested relations

• Relations not compliant with containment rules

• Relations not compliant with hosting rules

To access the Relationship Health Dashboard and view relationships
health, see View relationships health.

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

Related tasks

• Configure KPI and metrics preferences

Related reference

• CMDB Health system properties

## Configuring CMDB Health

Data collection for CMDB Health is highly configurable to reflect data
health requirements and standards in your organization. Most importantly,
the CMDB Health Dashboard jobs are disabled by default and health
data isn't collected until you enable those jobs.

To report valuable and meaningful health data, review and adjust CMDB
Health-related settings.

1. Review CMDB Health KPIs and metrics to learn what CMDB Health
can monitor, and what to configure to enable and support each
metric. Deactivate any KPIs and metrics that you aren't interested in
reporting, and set failure thresholds.

2. For each KPI and associated metric that you want monitored,
define the necessary rules and fulfill other needed requirements. For
example, you might need to:

• Set a CI attribute to be mandatory

• Set a CI field to be recommended

• Create a CMDB Health orphan rule

• Create a CMDB Health staleness rule

3. Narrow the scope of CIs that are included in health calculations - see

Create health inclusion rule.

4. Examine and adjust as needed the CMDB Health system properties.

5. Enable the Health Dashboard jobs for the KPIs that you want reported
- for more information, see Enable and configure a CMDB Health
Dashboard job.

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

## Configure KPI and metrics preferences

Include or exclude KPIs and metrics as needed in your organization, and
configure system behaviour when CIs fail metric health tests.

Before you begin

To start collecting and reporting CMDB health KPIs and metrics, you must
first enable and configure the CMDB health dashboard jobs.

Role required: itil_admin (on top of itil)

About this task

If Domain Support - Domain Extensions is activated, then you can
configure aggregation preferences per domain.

Procedure

1. Navigate to All > Configuration > Health Preference.

2. Select Health Metrics on the right-hand side bar.

a. In the Select Metric drop-down list select the Completeness,
Compliance, or the Correctness KPI and toggle Active to
included that KPI and its associated metrics in CMDB Health
analysis and reporting.

b. In the Select Metric drop-down list select a metric, such as
Required, and configure its associated fields.
For a metric:

Field
Description

Active

Activate the metric to include
it in the aggregated health
report for the respective KPI.

Failure Threshold
Threshold number of CIs that
can fail the health metric
test. When reached, health

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

Field
Description

processing stops for the metric
for this cycle.

Maximum number is 100,000,
even if you specify a higher
number.

Create Task

If a CI fails the metric test,
create a task with details
about the failure. You can
then view any generated
tasks in the CMDB Workspace
store app, and configure
remediation for the task.

Task Assignee Group
An assignment group for the
task.

3. Select Save.

## Set a CI attribute to be mandatory

Configure a CI attribute as mandatory so it is included in the CMDB
Health tests for the required metric if enabled. Required is a metric of the
CMDB Health completeness KPI.

Before you begin

Role required:

• Itil_admin and personalize_dictionary: For editing the dictionary table

• itil has read access

About this task

When a field is configured as mandatory, then if the required metric is
enabled, the CMDB health tests check whether that field is populated or
not. The CMDB Health Dashboard shows the aggregated report of the
percentage of CIs for which one or more required fields is empty.

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

Procedure

1. Navigate to All > Configuration > CI Class Manager.

2. Select Hierarchy to display the CI Classes list. Then select the class
with the field that needs to be set as mandatory.

3. In the class navigation bar, expand Class Info and then select
Attributes. In the Attributes view, click Added.

4. Locate the attribute that you want to set as mandatory, and then
double-click its Mandatory value and set it to true.
The next time the form is opened, a field status indicator appears
next to the field label, indicating that a value is mandatory.

Note:   Mandatory fields are global. The field is marked as
mandatory everywhere it appears on a form. Also, mandatory
fields do not appear correctly when using Service Mapping tag-
based discovery. For more information, see Tag-based discovery
in Service Mapping.

Related topics

• CMDB Health Dashboard for Helsinki | Overview

• Make a field mandatory

## Set a CI field to be recommended

Define a list of CI fields as recommended, noting that it is desirable that
they are populated by a data source such as Discovery. You can then
configure the CMDB completeness KPI to include recommended fields in
its aggregated health reports.

Before you begin

Role required:

• Itil_admin and personalize_dictionary: For editing the dictionary table

• itil has read access

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

About this task

Use this procedure for fields which should not be mandatory, but that
might have useful information that the CI should have. For example,
a field with information that might at some point help with diagnosis.
Initially, a derived class is set with the recommended fields that are
defined at the parent level. You can add or remove recommended
fields for a derived class, setting it with its own recommended fields,
without affecting the recommended fields at the parent or sibling levels.
If all recommended fields for a derived class are removed, then the
derived class automatically derives the recommended fields from its
parent class.

The CI Class Manager doesn't support dot-walking for selecting fields
from referenced tables, as recommended. See the steps at the end of
this procedure to directly update tables with recommended fields, using
one level dot-walking.

For more information about child and parent classes, see Table extension
and classes.

Procedure

1. Navigate to All > Configuration > CI Class Manager.

2. Select Hierarchy to show the CI Classes list, and then select the class
that contains the fields that need to be set as recommended.

3. In the class navigation bar, expand Health, select Completeness, and
then select the Recommended Fields tab.

4. In the Recommended Fields tab, use the list collector to move
the fields that you want to designate as recommended, from the
Available list to the Selected list.

5. Click Save.

What to do next

To directly update the CMDB Recommended Fields
[cmdb_recommended_fields] table, (outside the CI Class Manager),
using dot-walking to designate a field from a referenced table, as
recommended:

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

1. Select All.

2. In the Filter navigator, enter cmdb_recommended_fields.list to
access the CMDB Recommended Fields table.

3. On the CMDB Recommended Field form, set Table to the table that
you want to set with recommended fields.

4. Select Recommended fields and use the list collector to select
recommended fields for the table. You can expand a reference
field up to one level, and use dot-walking to select a field from a
referenced table.

5. Select Submit.

## Create a CMDB Health orphan rule

Create an orphan rule to determine the percentage of orphan CIs in the
CMDB. This sum is then aggregated into the correctness CMDB Health KPI.
Orphan rules are defined per class, and only a single orphan rule can be
defined per class.

Before you begin

Role required: itil has read access, itil_admin (on top of itil) has full access.

About this task

Specify the conditions that CIs must meet to be considered an orphan CI.
Specify attributes that a CI must have, relationships that a CI should not
have, or both. In the relationship conditions, you can either specify that
the CI has no relationships, or a set of specific relationships that the CI
doesn't have.

Note:   If there is a health inclusion rule for the orphan metric, then
the conditions in the health inclusion rule and the conditions in the
health orphan rule, shouldn't be identical.

A health orphan rule can for example, identify a CI of the
cmdb_ci_computer class as an orphan CI if the CI is not set with an
owner or an asset. Or, for example, you can create an orphan rule
for a CI in the Disk [cmdb_ci_disk] class. If that CI doesn't have a

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

Contains::Contained by or Contained by::Contains relationship with a
Computer CI, then it is an orphan CI.

Procedure

1. Navigate to All > Configuration > CI Class Manager.

2. Select Hierarchy to show the CI Classes list and then select the class
for which to create an orphan rule.

3. In the class navigation bar, expand Health, select Correctness, and
then select the Orphan Rule tab.

4. Select a rule to edit, if one exists, or select New, and then fill out the
form.

Field
Description

Class
The class for which the orphan
rule applies.

Attributes

Attribute conditions that a CI
must satisfy to be considered
an orphan CI. For example, the
filter conditions in which both the
Assigned to and the Owned by
fields are empty, will identify the
matching CIs as orphans.

Condition

And/Or operation between the
Attributes conditions and the
Relationship conditions.

Relationship

The relationship conditions that a
CI must fail,based on records in
the CI Relationship [cmdb_rel_ci]
table, in order to be considered
an orphan CI.

To specify that a CI must
have no relationships, choose

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

Field
Description

Any Relation and Any Class
respectively.

5. Select Submit or Update to save the rule.

Related topics

• CMDB Health Dashboard for Helsinki | Overview

## Create a CMDB Health staleness rule

If the staleness metric is in effect, then staleness rules are used to
determine the percentage of stale CIs in the CMDB. This sum is then
aggregated into the correctness KPI.

Before you begin

Role required: itil has read access, itil_admin (on top of itil) has full access.

About this task

The Discovery setting of certain types of CIs as stale takes precedence
over a CMDB Health staleness rule defined for the CI. For more
information about Discovery marking CIs as stale, see Discovery for
VMware vCenter.

Staleness rules are defined per class. If a rule isn't defined for a class, then
the parent's rule is automatically derived by the child class and applies
for the child class. If later a staleness rule is defined at the child class level,
it overwrites the staleness rule that was derived from the parent class.

Procedure

1. Navigate to All > Configuration > CI Class Manager.

2. Select Hierarchy to show the CI Classes list and then select the class
for which to create a staleness rule.

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

3. In the class navigation bar, expand Health, select Correctness, and
then select the Staleness Rule tab.

4. Select a staleness rule to edit or select New, and then fill out the
Staleness Rule form.

Field
Description

Applies to
The class for which the rule
applies.

Effective Duration

The time period that is used for
the staleness test.

If the CI was not
updated (based on Updated
sys_updated_on) within the
specified time period — the CI is
determined to be stale.

If you enter a value with a prefix
that is valid and a suffix that is
not, such as 15 x — the valid
portion of the value is used ('15').
If the entire value is invalid — the
value is ignored and the previous
valid value is used.

5. Select Submit or Update to save the rule.

Related topics

• CMDB Health Dashboard for Helsinki | Overview

## Create health inclusion rule

Filter the CIs that are included in health calculations and that appear
in the CMDB Health Dashboard by defining health inclusion rules. Use
health inclusion rules to temporarily filter out classes that generate a large
number of failures, until the problems are fixed.

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

Before you begin

Role required: itil has read access, itil_admin (on top of itil) has full access.

About this task

Evaluation for the required, orphan, recommended, duplicate and
staleness health metrics, will apply only to CIs that satisfy health inclusion
rules. For example, health inclusion rules can limit CMDB Health scores of
the duplicate metric only for server and network CIs.

Note:

• You can specify health inclusion rules per domain.

• Creating health inclusion rules at the level of the base cmdb_ci
table can potentially filter out health results of all classes in CMDB
Health dashboards.

• Applying a health inclusion rule to the duplicate metric, is
supported only in the global domain.

• Due to performance issues, dot-walking in health inclusion rules for
the duplicate metric is not supported.

In addition to any health inclusion rules, identification inclusion rules
also indirectly impact what appears in the CMDB Health Dashboard for
duplicate CIs. The dashboard itself uses the identification engine (IRE)
to identify duplicate CIs and therefore identification inclusion rules are
applied.

Inheritance of health inclusion rules:

• If there are no health inclusion rules specified for a child class, then rules
specified on a parent class are applied to the child class.

• If health inclusion rules are specified for a child class, then those rules
take precedence over rules specified on a parent class.

In the base system, there are no predefined health inclusion rules, in
which case all CIs are included in the CMDB Health calculations.

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

Procedure

1. Navigate to All > Configuration > CI Class Manager.

2. Select Hierarchy to show the CI Classes list and then select the class
for which to create a health inclusion rule.

3. In the class navigation bar, expand Health and then select Health
Inclusion Rules.

4. Select an existing rule to edit or select New and then fill out the
Health Inclusion Rules form.

Field
Description

Applies to
Class this rules applies to.

Active record condition

Criteria that CIs must meet to
be included in the evaluation for
the specified health metrics.

Applies to metric
Metrics that the rule applies to.

5. Select Save or Update.

What to do next

You can delete a health inclusion rules that is no longer needed by
selecting that rule, and then on the CMDB Health Configuration form,
selecting Delete.

## Configure aggregation weights for CMDB Health
## scores

Metrics health scores are aggregated into their respective KPI (key
performance indicator) scores, which in return are aggregated into the
overall CMDB Health score. Modify the default aggregation weights for
metrics and KPIs to reflect on the importance of one metric over another
is assessing the health of CMDB in the organization.

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

About this task

The completeness KPI, for example, consists of the metrics required
fields and recommended fields. By default, those metrics are configured
to contribute 60% and 40% respectively to the aggregated score of
the completeness KPI. You can modify that proportional weight of
required fields and recommended fields within the completeness KPI to
be, for example, 25% and 75% respectively. You can also modify the
proportional weights of the completeness, compliance, and correctness
KPIs within the aggregated overall score.

To modify aggregation weights, you must directly access the CMDB
Health Metric Preferences [cmdb_health_metric_pref] table, where those
settings are stored. However, custom settings are used only if the system is
set to use legacy calculation methods.

If Domain Support - Domain Extensions is activated, then you can
configure aggregation preferences per domain. By default, the weights
of KPIs have default settings, and metrics are globally set.

Before you begin

Toggle the Use legacy calculation methods switch on the CMDB
Health Dashboard to use legacy calculation methods. Custom weight
settings are used in aggregated score calculations only if using legacy
calculation methods is in effect.

Role required: itil or itil_admin

Procedure

1. Select All and then, in the navigation filter, enter
cmdb_health_metric_pref.list to open the CMDB Health Metric
Preferences table.

2. Select a metric, KPI, or the Overall entry, and set its Weighted
average contribution attribute to the percentage number that you
want.
Ensure that the sum of the percentage weights adds up to 100% for
the respective aggregation:

• The sum of the percentage weights of all metrics for a KPI, must
add up to 100.

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

• The sum of the percentage weights of all three KPIs (correctness,
compliance, completeness) must add up to 100.

## CMDB Health system properties

Configure the following system properties to customize how CMDB Health
monitors and evaluates CIs health.

Role required: itil_admin

### Note:   To open the System Property [sys_properties]
table, enter sys_properties.list in the navigation
filter.

Property
Description

Max time in minutes for which
individual metric processor will run
in each scheduled cycle

[glide.cmdb.health.metricProcesso
r.maxRunningTime]

If processing of a metric exceeds
the specified time, CMDB Health
processing halts until the next
CMDB Health job is scheduled to
run.

• Type: integer

• Default value: 120

• Location: Navigate to All
> Configuration > Health
Preference. In the right hand-side
pane, select System Properties.

For performance reasons, it is
recommended not to set this
property to a value greater than
120.

Note:   If you enter an invalid
value, the default value is
used.

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

Property
Description

Attribute in the [cmdb_ci] table
that references the User or
User Group table. CMDB Health
Dashboard charts use this attribute
to determine CIs’ ownership.

glide.cmdb.health.ci_ownership_fi
eld

Attribute in the [cmdb_ci] table
that the CMDB Health Dashboard
uses to determine CI ownership.

• Type: string

• Default value:
managed_by_group

• Location: Navigate to All
> Configuration > Health
Preference. In the right hand-side
pane, select System Properties.

glide.cmdb.logger.use_syslog.CM
DBHealth

A comma-separated list that
controls the level of logging
of CMDB Health jobs. Logging
creates entries in the system logs to
capture messages generated by
the health auditing process each
time they run. This logging helps
debugging if there is a failure.

For example, to log error and
info messages, set the value to
'error,info'.

• Type: String

• Default value: error

• Other possible values: Comma-
separated list with any of the
following values:

• info

• error

• warn

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

Property
Description

Or '*' which is equivalent to
including all possible values.

• Location: System Property
[sys_properties] table.

glide.cmdb.health.src.cmdb_healt
h_audit_only

When set to true, disables health
results from sources other than
CMDB Health audit (such as Cloud
Discovery). Only results generated
by CMDB Health audit appear
for KPIs in the CMDB Health
Dashboard.

For example, by default, if a
CI is determined to be stale by
Discovery, then that CI is counted
as stale for the correctness KPI
even though CMDB Health audit
didn't determine that CI to be
stale. However, in this case, drilling-
down the stale CIs metric, still
shows those CIs in which source is
Cloud Discovery.

• Type: true | false

• Default value: false

• Location: System Property
[sys_properties] table.

• Learn more:

• CMDB Health KPIs and metrics

• Discovery for VMware vCenter

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

Property
Description

glide.cmdb.health.staleness_exclu
de_dependent_cis

Exclude dependent CIs for the
staleness CMDB Health metric.

When enabled, dependent CIs
are not checked for staleness,
regardless of any staleness or
inclusion rules that are defined for
the respective CI types.

• Type: true | false

• Default value: false

• Location: System Property
[sys_properties] table.

## Enable and configure a CMDB Health Dashboard job

Enable and configure the CMDB Health Dashboard jobs that process
CMDB Health tests, to start calculating CMDB Health scores for the
completeness, compliance, correctness KPIs, associated metrics, and
relationships.

Before you begin

Role required: admin

About this task

In the base system, CMDB Health Dashboard jobs are disabled by
default. Enable and configure the respective job for the CMDB health
KPI that you want data collected and aggregated for. You can schedule
a job to run on a recurring schedule, or run it once at any time.

For more information about how CMDB Health Dashboard jobs work, see
the Understanding the CMDB HealthDashboard Numbers blog post in the
ServiceNow Community.

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

Procedure

1. Navigate to All > Configuration > Health Preference.

2. Select Scheduled Jobs on the left-side bar and then select the job
that you want to enable or configure.

CMDB Health Dashboard job
Description

CMDB Health Dashboard -
Completeness Score Calculation

Script for calculating the
completeness KPI of CMDB
health.

CMDB Health Dashboard -
Compliance Score Calculation

Script for calculating the
compliance KPI of CMDB health.

CMDB Health Dashboard -
Correctness Score Calculation

Script for calculating the
correctness KPI of CMDB health.

CMDB Health Dashboard -
Relationship Score Calculation

Script for calculating the CI
relationships KPI of CMDB health.

CMDB Health Dashboard
- Relationship Compliance
Processor

Script for calculating
compliance of relationships with
suggested relationships, and with
hosting and containment rules.

3. Review the default configuration, and update as necessary.

Field
Description

Name
Job name. Leave this field with
the pre-populated name.

Active
Select to activate the job.

Conditional

If selected, the scripted
condition must evaluate to true
before the job can run.

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

Field
Description

Run

Configure the schedule for job
execution, or select On Demand
to run the job manually when
needed.

If Active is selected, then
additional fields appear
according to your choice. For
example, Repeat Interval (when
Run is set to Periodically), and
Time for various settings of Run.
Fill in the details to set precise
running times.

Time zone
Local time zone.

Run this script

The job's script.

Note:   Changes to the script
might result in unexpected
behavior.

4. (Optional) Select Execute Now to immediately run the job once.

Result

After you enable a CMDB Health Dashboard job, the results for the KPI
are aggregated and appear in the CMDB Health dashboard and CI
Health widget on CI forms, at the CMDB, class, and CI levels.

## CMDB Health experience in CMDB Workspace

View CMDB Health dashboards and use other CMDB Health-related
features in CMDB Workspace.

Starting with CMDB Workspace version 7.0, CMDB Health is fully
integrated into CMDB Workspace. CMDB Workspace is required in order
to access CMDB Health features, primarily to:

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

• View CMDB Health Dashboard

• View relationships health

• View CI health

In addition, you can use the CMDB Workspace landing page and its
views to access CMDB Health tiles that are based on CMDB Health
activities and aggregations. For example:

• Use the Important actions tile on the landing page to access cards with
CMDB Health-related tasks such as de-duplication tasks.

• Use the CMDB Health tile to see overall health scores for the
completeness, compliance, and correctness KPIs, and to drill down to
the CMDB Health Dashboard within CMDB Workspace.

• Use tiles throughout the CMDB Workspace to drill down to health
overviews of specific CIs.

Related tasks

• View relationships health

• View CI health

• Create a CMDB remediation rule

Related concepts

• Exploring CMDB Health

• View CMDB Health Dashboard

• CMDB Health reference

Related reference

• CMDB Health process tracking and troubleshooting

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

## View CMDB Health Dashboard

The CMDB Health Dashboard serves as a central location to view
detailed health reports for your CMDB at a glance. Also, it provides
functions to remediate issues that CMDB Health detected, to improve
CMDB health.

Once you configure CMDB Health and the CMDB Health Dashboard
Jobs are enabled, the CMDB Health Dashboard shows meaningful data
that is automatically collected and calculated on a recurring schedule.
For more information, see Configuring CMDB Health.

CMDB Health Dashboard

Access

Use either of the following ways to access the CMDB Health Dashboard:

Within CMDB Workspace

1. Navigate to Workspaces > CMDB Workspace.

2. Select Home in the CMDB Workspace menu bar and then, in the
Quick links section, select the CMDB Health Dashboard link.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

34

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 34, 1668x996px]*

```
======+====================...:.::..:.............-=========
.       .
.....                      ..      .      ..
...                        ..      .      ..
.    .
.:..        .... .::  .
:--:--...:.         :--:-:              ---:-:
...      -=  ..:+.  ...      ==    :=   ...      =-    --
...      -+....-+   ...      -=.   -=   ...      ==    =-
:-=--:              :----:              :----:

..   .  .
..        . .
.....
:-==-                    :-==:
====+:                  .====+.
.---:                    .---:
```

---
*Page 35*

Navigation filter

Navigate to All > Configuration > CMDB Health Dashboard and then
select one of the following dashboard views:

• Class View: Default view for the CMDB Health Dashboard, showing
health reports for CIs and classes in the CMDB hierarchy.

• Service View: Health reports for services with details for CIs per service.

• Health Group View: Health reports for CMDB groups of type Health with
details for CIs per group.

Role requirement: Using the CMDB Health Dashboard requires the asset,
itil, or cmdb_user role.

Legacy calculation methods

By default, all metrics and KPIs are set with a specific percentage weight
in score calculations. However, you can use legacy calculation methods
which were used up until the Washington DC release by toggling the Use
legacy calculation methods switch (requires the sn_cmdb_admin role) on
the CMDB Health Dashboard. In those methods, calculating aggregation
scores is based on weights settings for metrics within their KPI, and KPIs
within the overall score. Use the legacy calculation methods when it
is important to reflect on specific weights of metrics and KPIs in the
assessment of CMDB health in your organization.

For more information about customizing calculation weights for metrics,
KPIs, and the overall score, see Configure aggregation weights for CMDB
Health scores.

KPI tiles

The Completeness, Correctness, and Compliance KPI tiles on the
dashboard, show the aggregated health for CIs of the specified class
(and its descendants), health group, or service. The KPI's aggregated
percentage is represented on the donut as follows:

• Green: Represents the CIs that are compliant on all of the KPI's metrics

• Red: Represents the CIs that fail one or more metric

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

The distribution of metric compliance can vary greatly across CIs. For
example, a single CI failing all metrics or 3 unique CIs each failing a
different metric will result in a different KPI final score of aggregation.
You can show additional details and further drill down the CMDB Health
Dashboard:

• Point to the green and red portions in the donut reports, to show details.

• Select the View calculation details icon ("i") in a KPI tile to show the
calculation details of failure and success for each of the KPI metrics.
Calculation details also show the status of the calculation, such as
complete.

•

Select a KPI tile and then select a tab for a metric that you want
to see more details for. For each metric, the dashboard shows up
to ten classes (each class in its own tile) with the highest number
of non-compliant CIs for the metric. Each tile for a class shows the
total number of non-compliant CIs and also pie reports of those non-
compliant CIs by discovery source and by owner.

For example:

1. • Select the Correctness tile.

2. • Select the Orphan CIs tab.

3. • Assuming that the largest number of CIs that aren't compliant with
the orphan metric are Windows Servers, the first tile shows details
for those CIs. The tile shows the total number of Windows Server CIs
that are orphans. This tile also shows pie reports of those CIs, one by
discovery source and another by owner.

4. • Select a CI in the list view to open its CI form.

5. • Scroll in the CI Health tile to the CMDB Health widgets with details
about the CI's health.

The '<x>% since <date>' shows the increase or decrease (in %) in the
KPI health since <date> (<date> being the previous time that change

was noted). A

icon indicates that the maximum failure threshold for
the metric has been reached. The tests for the metric are halted for this
cycle, and all associated aggregated summaries show 0%.

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

Overall score

The overall score appears on the dashboard above the KPI tiles and
represents the aggregated health score for the CMDB. The overall
score is calculated as an aggregation of the three KPIs (correctness,
completeness and compliance). By default, the overall score is a simple
average of the KPI scores. However, if using the legacy calculation
methods is in effect, then the overall score is based on any weight
settings of any of the KPIs.

Class view in the CMDB Health Dashboard

The class view shows health reports for CIs and classes in the CMDB
hierarchy. Select any class in the CMDB hierarchy to filter all tiles on the
dashboard to show health data only for CIs in the selected class and its
child classes.

Select the Class drop-down to switch to the Health Group or the Service
view.

Health Group view in the CMDB Health Dashboard

Select the Health Group view to show health reports for CIs of a CMDB
health group. Select any health group to filter all tiles on the dashboard
to show health data only for CIs in the selected health group.

Select the Health Group drop-down to switch to the Class or the Service
view.

Service view in the CMDB Health Dashboard

Select the Service view to show health reports for CIs of a service class,
such as Business Service, including the service CI itself. Select any service
to filter all tiles on the dashboard to show health data only for CIs in the
selected service.

Note:   The Event Management and Service Mapping Core plugin
must be activated to enable meaningful data in the service view.

Select the Service drop-down to switch to the Health Group or the Class
view.

Settings affecting the service view:

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

• The service view uses the settings for the Business Service, Manual
Service, and Technology Management Service classes.

• The service view doesn’t include all services from the Service
[cmdb_ci_service] table. Only services from the cmdb_ci_service_auto
table and its descendants (cmdb_ci_service_discovered,
cmdb_ci_service_manual, cmdb_ci_query_based_service), are
included.

• The glide.cmdb.services_hierarchy_limit system property limits the
number of service CIs that appear in the service view. This limit applies
to any child class of the Service Instance [cmdb_ci_service_auto] class
and is set to 10,000 by default.

Related tasks

• View relationships health

• View CI health

• Create a CMDB remediation rule

Related concepts

• Exploring CMDB Health

• CMDB Health experience in CMDB Workspace

• CMDB Health reference

Related reference

• CMDB Health process tracking and troubleshooting

## View relationships health

View health scores for relationship health such as orphan, stale, and
duplicate relationships, in the Relationship Health Dashboard.

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

Before you begin

The CMDB Health Dashboard - Relationship Compliance Processor
dashboard job must run to generate data for these reports.

Note:   As a general guideline, activate this job only if you need the
relationship reports as this job can affect performance.

Role required: itil or asset

About this task

The Relationship Health Dashboard shows various scorecards for health
indicators of CI relationships in your CMDB. It contains donut reports
for duplicate, orphan or stale relationships, broken down by relationship
type. You can drill down these charts for further details.

The

icon indicates that the maximum failure threshold for the metric
has been reached. The tests for the metric are halted for this cycle, and
all associated aggregated summaries show 0%. Review the scorecard
rules which might be ineffective, or the CMDB might be in an unstable
state.

CMDB Health reports for the following metrics:

Duplicate relationship

Relationships that have identical parent, child, and relationship type.

Orphan relationship

A relationship that is missing parent, child, or relationship type.

Stale relationship

A relationship in which one of the CIs is stale. For a stale CI — its
associated relationships are also stale.

In addition, the following relationship compliance reports with
breakdown by relationship types, are available:

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

Relationships not compliant with all relationship rules

Relationships that do not comply with any relationship governance rule,
including suggested relationships and dependent relationship rules.

Relationships not compliant with suggested relationships

Suggested CI relationships are used as rules to test if relationships comply
with specified suggested relationships.

Relationships not compliant with containment rules

Containment rules are used to test if relationships comply with specified
containment relationships.

Relationships not compliant with hosting rules

Hosting rules are used to test if relationships comply with specified hosting
relationships.

For each of the compliance reports, testing a relationship requires a rule
(suggested relationship, hosting rule, or containment rule) in which the
parent and child CI classes match the parent and child CI classes in the
tested relationship. If the relationship types in the rule and in the tested
relationship don't match, then the relationship isn't in compliance. If an
applicable rule isn't found, then the relationship is considered to be in
compliance. Rules apply to the classes specified in the rule, and also
to descendant classes. Therefore, when testing a relationship, rules that
apply to ascendant parents of the CIs in the tested relationship are used.
If there are multiple rules that match the parent and the child CI classes
of the tested relationship, then the tested relationship needs to satisfy
only one of these rules to be in compliance.

Procedure

1. Navigate to Workspaces > CMDB Workspace.

2. Select Home in the CMDB Workspace menu bar and then, in the
Quick links section select the Relationship Health Dashboard link.

3. Examine the donut reports and the charts in the Relationship health
overview and Relationship compliance overview sections on the
dashboard.
Report results are grouped by relationship type, and you can drill
down for further details:

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

• Point to a donut report to show more details about compliant
and non-compliant relationships.

• Point to a bar in a bar chart to show more details for the bar.

• Select a bar in a bar chart to drill down to a list view of all
the associated relationships that aren't compliant. The list view
includes the Failure Description field which lists only a single
rule that the relationship didn't comply with, even if there are
additional rules that the relationship fails to comply with.

What to do next

For troubleshooting information, see the How to identify and delete
duplicate CMDB CI Relationship records, or ones that have orphan or
missing parent/child relationships [KB0780988] knowledge base article.

Related tasks

• View CI health

• Create a CMDB remediation rule

• Enable and configure a CMDB Health Dashboard job

Related concepts

• Exploring CMDB Health

• CMDB Health experience in CMDB Workspace

• View CMDB Health Dashboard

• CMDB Health reference

Related reference

• CMDB Health process tracking and troubleshooting

## View CI health

View CMDB Health report for an individual CI, on the CIs form in CMDB
Workspace.

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

Before you begin

Starting with CMDB Workspace version 7.0, CMDB Health is fully
integrated into CMDB Workspace and is required in order to access
CMDB Health features, including to view CI health.

Role required: sn_cmdb_user (CMDB user)

About this task

CI health scores are based on settings of CMDB Health KPIs and metrics.
Aggregations are calculated in real-time from data stored in health-
related tables which the CMDB Health Dashboard jobs update on a
recurring schedule. The completeness and correctness KPIs are always up
to date. However, the compliance KPI depends on audit cycles and on
the CMDB Health Dashboard - Compliance Score Calculation dashboard
job that might not have run yet.

To ensure that the latest updates to these KPIs are reflected, navigate to
the respective CMDB Health dashboard job, and select Execute Now. For
more information, see Enable and configure a CMDB Health Dashboard
job.

Procedure

1. Open the CI form for a CI, in CMDB Workspace.

•

On a CI form that isn't in CMDB Workspace, select Open in CMDB
Workspace.

Role required: sn_cmdb_user (minimum)

• In CMDB Workspace, select a CI in a list view to open the CI's
form. For example, on the CMDB Health Dashboard, drill down a
KPI tile and then select a CI in the tile's list view.

2. Select the right (>) or left (<) handles in the CI Health tile to see all CI
health-related widgets.

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

Result

The widgets in the CI Health tile on the CI form show the aggregated
health for the CI using the following color codes:

• Green: The CI passed the health test (for example, it isn't a duplicate).

• Red: The CI failed the health test (for example, it is a duplicate)

• Grey: The CI wasn't tested for this metric, because the threshold wasn't
set for the CI (class) in the CI module.

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

Note:   Missing rules or other class definitions can prevent some
health scores from being evaluated for a CI. The results in the CI
Health widget in these situations, are described below:

Duplicate

• If no identification rules ([cmdb_identifier]) are defined for the CI’s
class or its ancestors: A notification to that effect appears.

• If only dependent identification rules are defined: Not applicable
notification appears.

Orphan

• If the CI is excluded by health inclusion rules: Not applicable
notification appears.

• If no orphan rules (in the [cmdb_health_orphan_rule] table) are
defined for the CI’s class or its ancestors: A notification about
missing a rule appears.

Staleness

• If the CI is excluded by health inclusion rules: Not applicable
notification appears.

• If no staleness rules (in the [cmdb_health_staleness_rule] table) are
defined for the CI’s class or its ancestors: A notification about
missing a rule appears.

Audit

• If no audits ([cert_audit]) are defined for the CI (The CI Health
widget checks only desired states and scripted audits): Not
applicable notification appears.

• If there are audits defined for the CI but the audits did not run: Not
applicable notification appears.

Related tasks

• View relationships health

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

• Create a CMDB remediation rule

• Enable and configure a CMDB Health Dashboard job

Related concepts

• Exploring CMDB Health

• CMDB Health experience in CMDB Workspace

• View CMDB Health Dashboard

• CMDB Health reference

Related reference

• CMDB Health process tracking and troubleshooting

Related topics

• Timeline of CI changes

## Create a CMDB remediation rule

A CMDB remediation rule is associated with a task that was created
for a failed CMDB health test. A CMDB remediation rule is applied
automatically or manually to execute a remediation workflow that can,
for example, delete stale CIs.

Before you begin

You must first create and publish a remediation workflow that addresses
the CI issue, stored in the Workflow [wf_workflow] table. The workflow can
be a regular workflow or an Orchestration workflow, and must adhere to
the following requirements:

• The table in the workflow must match the task type in the remediation
rule.

• The workflow isn't configured with any filter conditions by setting If
condition matches to None, so that the filters of the CMDB remediation
rule will apply.

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

For more information about using Classic Workflows, see Classic Workflow.

Role required: itil_admin (on top of itil)

Procedure

1. Navigate to All > Configuration > CMDB Remediations.

2. Select New and then fill out the CMDB Remediation Rule form.

Field
Description

Name
Remediation name.

Task type

Type of CMDB health-related
tasks to apply the remediation
to.

Task filter

Filters tasks to apply remediation
to. Also applies dot-walking on
CI fields so that remediation is
applied to tasks associated with
matching CIs.

Execution

• Manual: Remediation is
applied manually.

• Automatic: The workflow is
applied once, upon the
creation of a task that
matches the Task type and
Task filter.

Active
Allowing the workflow to run.

Workflow

The CMDB remediation workflow
(regular or Orchestration) that
will execute automatically or
manually, depending on the
Execution setting. You can click
the Lookup using list icon, and

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

Field
Description

then click New to create a new
workflow.

3. Select Submit.

Result

If Execution is set to Automatic, then the business rule Run remediations
for CMDBHealth task applies the remediation workflow to CIs that match
the Task filter. If Execution is set to Manual, then you can manually apply
the remediation workflow defined in the rule.

• Apply CMDB remediation

Manually initiate a workflow to remediate a CI that failed a CMDB
health test. For example, you can remediate CIs that are orphan or
stale.

Related tasks

• View relationships health

• View CI health

Related concepts

• Exploring CMDB Health

• CMDB Health experience in CMDB Workspace

• View CMDB Health Dashboard

• CMDB Health reference

Related reference

• CMDB Health process tracking and troubleshooting

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

Related topics

• Dot-Walking

## Apply CMDB remediation

Manually initiate a workflow to remediate a CI that failed a CMDB health
test. For example, you can remediate CIs that are orphan or stale.

Before you begin

Role required: itil_admin

To manually apply a CMDB remediation, a CMDB remediation rule must
exist, in which Execution is set to Manual.

About this task

Except for the duplicate and audit health metrics, you can choose to
create tasks for health test failures for a metric.

To remediate failures of the duplicate metric, use de-duplication tasks.

For all metrics except for audit, each CI that failed a metric test is
associated with a single task. Because a CI can fail multiple audits, a
single CI can be associated with multiple audit tasks. The first of those
tasks is in the Task field, and any additional tasks are in the Additional
Tasks field. To remediate failures of the audit metric, refer to the audit
tasks for the audits that the CI failed.

CMDB remediation is applied in the CMDB Workspace store app.

Procedure

1. Navigate to Workspaces > CMDB Workspace.

2. Select Home in the CMDB Workspace menu bar and then, in the
Quick links section, select the CMDB Health Dashboard link.
Ensure that the CMDB Health Dashboard is in Class view.

3. Select one of the KPI tiles (Completeness, Correctness, or
Compliance).

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

4. Select the metric tab that is associated with the remediation that you
want to apply (such as Stale CIs) and then select one of the class
tiles.

5. In the list view of the non-compliant CIs for the metric, select the task
link (in the Task column) for a CI that you want to remediate.

6. On the remediation form, select Remediate.

7. In the Remediate dialog box, select the remediation workflow that
you want to apply.
The list of remediation workflows is based on the type of health metric
(such as orphan, stale), and on the filter defined for the workflow in
the associated remediation rule.

8. Select Next.

Related tasks

• Create a CMDB remediation rule

## CMDB Health process tracking and troubleshooting

Use the following information to track and resolve issues with the CMDB
Health processes.

Logging

By default, only error messages are logged to the syslog table,
with the source name CmdbHealth. To enable logging of 'info'
and 'warning' messages (which are typically logged at the start
and end of each processing cycle), update the system property
glide.cmdb.logger.use_syslog.CMDBHealth. For information about using
this property, see CMDB Health system properties.

Processing status

If scheduled jobs are enabled, but data is not displaying on the
<ph keyref="var.config-mgmt-database-short"/> dashboard, you can
check the processing status in the CMDB Health Metric Status
[cmdb_health_metric_status] table. Depending on the status of the
inactive metric, decide how to proceed.

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

Initially, the state of all metrics is 'In Progress'.

Possible final states of a metric:

Complete

All classes are processed and the number of failures is under the
maximum failures threshold.

Max Failures

The number of failures for this metric reached the maximum failures
threshold. Processing has been aborted and will start over in the next
run.

Daily Time Out Pause

The processor reached the processing time limit. Processing is paused
and will resume in the next run.

At the end of a processing cycle, the final state of a KPI depends on the
final state of its associated metrics. Possible final state of a KPI:

Complete

All associated metrics are in Complete state and score calculation is
complete.

Incomplete

Score is not calculated because one of the associated metrics reached
its maximum failure thresholds.

Daily Time Out Pause

Timed out because one of the associated metrics has reached its
processing time limit.

Processing time

If processing of a metric times out, you can find out which class takes too
long to process. Use this information to find out if any validation rules are
weak.

The progress of each metric is tracked in the CMDB Health Processor
Status table [cmdb_health_processor_status]. Status for classes that have

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

been processed for a metric is Complete, and for classes that are yet to
be processed is Draft. By looking at the update time for each class, you
can calculate the length of processing time for each class.

Orphan records due to broken hierarchy

Orphan rules might detect an orphan CI, which you are not able to
access and delete. Or, there might be a mismatch between the list view
that displays the orphan records, and the total number of records. These
findings are due to records being deleted in the database from only one
table in the CMDB hierarchy.

These CI records are not accessible via GlideRecord and must be
deleted directly from the database. Therefore, in this case, to delete an
orphan CI from the database you must contact Support to get help.

Orphan test results provide the details of where exactly the hierarchy
is broken. For example, the message "This cmdb_ci_linux_server
CI [91054fc24f22520053d6e1d18110c713] is missing record in
cmdb_ci_computer table" means that a record of that sys_id must be
deleted from the CMDB, cmdb_ci, cmdb_ci_hardware, cmdb_ci_server,
and the cmdb_ci_linux_server tables (the Computer class is between the
Hardware and the Server classes in the hierarchy.)

Scripted audits Skipped

An error message is logged if the results from a scripted audit are not
included in the compliance KPI. The reason can be that the script in the
audit was not updated to populate its Last ran date field. Without a Last
ran date value, CMDB Health is unable to identify these run results as part
of a recent complete audit run, and skips those results.

• CMDB Health process status: failure threshold reached

The CMDB Health Dashboard shows the string ‘failure threshold
reached' when the number of CIs that are failing the metric tests,
reaches the failure threshold set for the metric.

• CMDB Health process status: incomplete score

The CMDB Health Dashboard shows the string 'incomplete score' for a
metric when it fails to calculate the score for the metric.

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

Related tasks

• View relationships health

• View CI health

• Create a CMDB remediation rule

Related concepts

• Exploring CMDB Health

• CMDB Health experience in CMDB Workspace

• View CMDB Health Dashboard

• CMDB Health reference

## CMDB Health process status: failure threshold reached

The CMDB Health Dashboard shows the string ‘failure threshold reached'
when the number of CIs that are failing the metric tests, reaches the
failure threshold set for the metric.

CMDB Health stops processing for this metric in the current cycle, and
therefore there is no aggregated health score for the metric. Processing
will be attempted again in the next cycle. Also, status in the CMDB Health
Metric Status [cmdb_health_metric_status] table is set to Max Failures for
this metric.

When the health score of a metric cannot be evaluated, then the
processing status of the respective KPI (for example, correctness) is set
to Incomplete. The CMDB Health Dashboard shows the string Incomplete
score for the respective KPI. Also, aggregated health scores for the metric
are not available for any class in the CMDB hierarchy.

Review and refine the rules defined for the metric which has reached
max failures. If a rule associated with the metric is too generic, resulting in
large number of failures, attempt to refine it as follows:

•

Completeness:

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

Review the mandatory fields for the associated classes and remove
those that aren't critical for the health score. Also, review the
recommended fields that are causing failures and remove those that
aren't critical for the health score.

For more information see Set a CI attribute to be mandatory and Set a
CI field to be recommended.

•

Compliance:

Review the audit failures from the audit jobs and adjust the audits to
reduce the number of failures. For more information, see CMDB Health
KPIs and metrics.

•

Correctness:

• Orphan: Review the orphan rules and adjust them to remove
excessive orphan failures. For more information, see Create a CMDB
Health orphan rule.

• Staleness: Review the effective duration for the classes that are
causing failures and adjust the duration to reduce the number of
failures. For more information, see Create a CMDB Health staleness
rule.

• Duplicate: Review the de-duplication tasks and remediate the tasks
to remove duplicate CIs and to avoid creating failure records. For
more information, see Remediate a de-duplication task (manual).

For more troubleshooting information about failure threshold related
issues, see How to Resolve Max Failure Threshold Errors for CMDB Health
Dashboard [KB2487349].

## CMDB Health process status: incomplete score

The CMDB Health Dashboard shows the string 'incomplete score' for a
metric when it fails to calculate the score for the metric.

'Incomplete score' is displayed when:

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

• The number of CIs that are failing the tests of one of its sub-metric,
reaches the failure threshold set for the metric. In this situation,
the processing status for the respective parent metric (for example,
correctness) is set to 'incomplete' in the CMDB Health Metric Status
[cmdb_health_metric_status] table. Processing for the failing metric in
the current cycle stops, and therefore there are no aggregated health
scores for the sub-metric or for the parent metric.

To remediate, you need to resolve the underlying cause of CIs failing
the sub-metric tests. See CMDB Health process status: failure threshold
reached for more information about resolving the failures of the sub-
metric.

• An error is encountered while processing the sub-metric.

To remediate, examine the system logs to determine the cause of
the error. After fixing the cause of the problem, restart processing by
manually executing the respective parent metric dashboard job.

## CMDB Health reference

Reference topics provide additional information about the KPIs and
metrics that CMDB Health uses and about tables, scheduled jobs, and
properties that are used by CMDB Health.

• Domain separation in CMDB Health

This is an overview of domain separation as it pertains to CMDB Health.
Domain separation enables you to separate data, processes, and
administrative tasks into logical groupings called domains. You can
control several aspects of this separation, including which users can see
and access data.

Related tasks

• View relationships health

• View CI health

• Create a CMDB remediation rule

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

Related concepts

• Exploring CMDB Health

• CMDB Health experience in CMDB Workspace

• View CMDB Health Dashboard

Related reference

• CMDB Health process tracking and troubleshooting

## Domain separation in CMDB Health

This is an overview of domain separation as it pertains to CMDB Health.
Domain separation enables you to separate data, processes, and
administrative tasks into logical groupings called domains. You can
control several aspects of this separation, including which users can see
and access data.

Overview

CMDB dashboards should be set up with their own set of rules to best
accommodate how the user needs them. CMDB dashboard jobs adhere
to those rules to produce reports. These are covered in separate sections
below.

How domain separation works in CMDB Health

For dashboards to be the most effective, users should configure the
dashboard accordingly. This is done by setting up the orphan, staleness,
and inclusion rules to meet their needs, which then affect the reports
displayed on the dashboard.

The settings and metrics define different aspects of each application
because each domain can be configured differently. These rules are set
up in addition to those that are included in the base system. There are
different types of owners for different CIs; each domain has its own set of
rules.

Metric tests from the global domain propagate to subdomains. However,
subdomains can have their own local metric tests which override the
global domain tests. Up until the San Diego release, subdomain local

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

metric tests were applied to the subdomain CIs and also to the global
domain CIs (which are visible on subdomains). Global domain CIs that
failed metric tests of local subdomains, could have generated large
amounts of data due to duplicated data.

Starting with the Tokyo release, CIs in the global domain are evaluated
only against metric tests specified in the global domain. In subdomains,
local metric tests are applied only to the CIs in that subdomain and are
not applied to the global domain CIs (even though the global domain
CIs are visible in the subdomain). Health results for CIs in the global
domain appear on subdomains and health results on subdomains reflect
this new behavior.

Note:   Domain separation is on by default, but each domain can be
configured as needed.

Health Preferences

Configure these preferences during setup:

1. Global system properties that control CMDB Health – System
properties are not domain separated. To learn more see CMDB
Health system properties.

2.
CMDB Health Dashboard Jobs – There is a dashboard job for each
2.

major KPI, such as Completeness. That job finds the health of the
CIs across all the enabled domains. There is only one job run for all
domains and jobs themselves are not domain separated.

Users can define the frequency with which they want to run jobs; the
report runs for all the domains. The more domains included in the job,
the longer the job runs.

3. Health Metrics – These selections are domain-separated and adhere
to the established “system overrides” logic of domain separation.
Changes are made according to the domain for which the user is
logged in. Base system values are defined at the global domain. The
overriding domain logic means these values apply for all domains.
If users want different values for a domain, they must be logged in
to a specific domain and change the property from there. The new
property setting applies only to that domain and any domain that
inherits this domain. To learn more, see Health Metrics.

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

Note:   Regarding the Completeness, Compliance, and
Correctness KPIs: Users can disable this KPI if they don’t want to
see that as part of the dashboard score. All these settings are
domain-separated and the user can define specific properties
for the domain.

a. Active – This setting is the most important because it affects how
long the jobs run. The more domains with flags set to Active,
the longer the jobs take. It’s best to select only those domains
you wish to be Active and render the rest as Active = false. You
can set this in Health Preferences. The default settings for global
domain are Active = true, but you can modify or disable specific
domains the user wants to see in the dashboard. Users should
consider the domain hierarchy when changing these values. If
there is a large number of domains (>100) the job can take a
very long time. To mitigate this, set Active to false for all the root
domains, thereby disabling all the other domains in the hierarchy.
If there is a rule at the top, all child domains inherit that rule.

b. Failure Threshold, Create Task, Task Assignee Group – All these
settings can be set differently for different domains depending on
what is needed in each domain.

c. Exceptions – For Relationship metrics (relationship, duplicate
relations, orphan relations, stale relations) the failure threshold
setting is not domain separated. The Failure Threshold for the
global domain is applied to all domains. For example, even if
users were to override the Failure Threshold for a domain, the
global domain setting for Threshold is still applied.

d. Troubleshooting / Implementation detail – These settings are
stored in the cmdb_health_metric_pref table, which is domain
separated.

CMDB Health-related rules

See CMDB Health-related rules settings at:

• Required

• Recommended

• Orphan

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

• Staleness

Most of the CMDB Health-related rules are domain separated and
provided by the users. Users can define different rules for different
domains by logging in to each domain and adding/overriding rules in
the CI Class Manager.

1. Completeness

a. Required fields – These are based on the class schema defined
in the platform’s System dictionary and is fixed for all domains.
These cannot be changed.

b. Recommended fields – These are domain separated.
The table used is CMDB Recommended Fields
[cmdb_recommended_fields], which is domain separated. The
user can set these up for different domains.

2. Correctness

a. Duplicates – Duplicates are based on Identification rules, which
are not domain separated, so the same rules apply to all
domains.

b. Orphan – Orphan rules are domain separated; there are different
orphan rules for different domains. The table used in the CMDB
Health Orphan Rule [cmdb_health_orphan_rule] table and is
domain separated.

c. Staleness – Staleness rules are domain separated. The table used
is cmdb_health_staleness_rule. The base system rule (60 days) is
set for global domain so is inherited by all domains as the default
rule.

3. Compliance

Audit – Audit scores are based on the desired state or scripted audits
defined in the compliance module by the user.Audits themselves
are domain separated. When audit score evaluation is enabled for
a domain, scores become based only on the audits visible in that
domain.

Health inclusion rules:

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

• Health inclusion rules are domain separated. The rules are stored in the
cmdb_health_config table which is domain separated.

• Each domain can have its specific health inclusion rules and domain-
specific rules for each sub-metric.

• When a health inclusion rule is defined globally, all sub-domains inherit
the rule according to the domain structure and the rule can be
overridden at any domain.

• When a health inclusion rule is defined at the Configuration Item
[cmdb_ci] class level, all descending classes inherit the rule and the
rule can be overridden at any class level.

CMDB Health Dashboard

If the Domain Support — Domain Extensions Installer plugin is activated,
then the CMDB Health Dashboard is domain aware:

• The CMDB Health Dashboard aggregates and reports health failures
and scores based on user’s domain visibility of CIs. If domain visibility lets
a user see a CI, then the audit rule in that user’s domain applies to that
CI, whether the CI is in the user's domain or in a contained domain. If
a CI fails health tests from different user domains, then separate failure
records are created.

• Users can configure KPI and metric settings specific to the needs in
their domain. So different domains can have different settings such as
active/inactive, and thresholds.

• A child domain derives its immediate parent's domain health
configurations if the child domain does not configure its own. A child
domain can override parent's configurations by modifying them.

Health Dashboards (Class View/Service View/Health Group View)

In general, CMDB Health dashboards are domain aware and show data
according to the logged-on domain user. If a user is logged into a
domain and views a health dashboard:

1. Only scores for enabled metrics in that domain display (based on the
Health Preferences Active flag as discussed above).

2. All scores are based on CIs that are visible from the specific domain.
(These are regular domain visibility rules: From that domain you can

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

see CIs in global domain, the specific domain, any child domain of
that domain or any domain that gets directly or indirectly contained
by that domain.)

3. The dashboard view is based on domain rules defined in domain
mapping, as opposed to those provided by the logged-in user. This
view overrides any additional domain visibility rules that a logged-in
user might have. The admin sets the basic rules, but does not set
each individual domain. The admin can give specific users or user
groups additional visibility to other domains and the dashboard still
does not change. The dashboard strictly follows the domain rules
mentioned above, based on the domain hierarchy for the domain in
which the user is logged in.

4. As explained in the Health Preferences section, users can define
different preference values for any domain which impact the scores
reported in the dashboard. Preferences that can impact scores
include Failure Threshold and Active.

5. As explained in the CMDB Health Rules section, the scores reported
for the metrics are based on the health rules defined for them
(staleness, orphan, recommended, audit, and inclusion rules) which
can be defined differently for a specific domain (in the CI Class
Manager). Only the required metric and duplicate metric are based
on rules that apply in all domains.

6. Service View/ Group View – These reports also largely follow the
above points. Typically, these views differ from various views/filters for
the Health Report. One is based off business rules, the other is based
off CMDB Health groups.

Related concepts

• Domain separation and Configuration Management Database (CMDB)

## Components installed with CMDB Health

Several types of components are installed with CMDB Health (included
in the com.snc.cmdb plugin), such as tables, properties, and scheduled
jobs.

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

Note:   The Application Files table lists the components that are
installed with this application. For instructions on how to access this
table, see Find components installed with an application.

Properties installed

Property
Description

glide.cmdb.services_hierarchy_limi
t

Maximum number of service
CIs that can appear in the
CMDB service dashboard. This
limit applies to any child
class of the Service Instance
[cmdb_ci_service_auto] class.

• Type: integer

• Default: 10,000

• Range: 0-100,000

• Location: Add to System
Properties [sys_properties] table.

• Learn more: View CMDB Health
Dashboard

Scheduled jobs installed

Scheduled job
Description

CMDB Health Dashboard -
Completeness Score Calculation

Script for calculating the
completeness KPI of CMDB health.

CMDB Health Dashboard -
Compliance Score Calculation

Script for calculating the
compliance KPI of CMDB health.

CMDB Health Dashboard -
Correctness Score Calculation

Script for calculating the
correctness KPI of CMDB health.

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

Scheduled job
Description

CMDB Health Dashboard -
Relationship Score Calculation

Script for calculating the CI
relationships KPI of CMDB health.

CMDB Health Dashboard -
Relationship Compliance Processor

Script for calculating compliance
of relationships with suggested
relationships, and with hosting and
containment rules.

Add Identifier Fields In
Recommended Rules

Sets all criterion attributes from
all active identifier entries from
all active identification rules, as
recommended fields. These added
recommended fields are then
checked by the CMDB Health
Dashboard - Completeness Score
Calculation scheduled job when
evaluating the recommended
health metric.

Remove Identifier Fields In
Recommended Rules

Identifies any recommended field
that is a criterion attribute in any
active identifier entry in any active
identification rule. Then removes
the recommended setting for that
field.

Tables installed

Table
Description

CMDB Health Metric

[cmdb_health_metric]

Details such as if a KPI or
metric is enabled, maximum failure
threshold, and other settings for all
CMDB Health KPIs and metrics.

CMDB Health Result

[cmdb_health_result]

Results from the most recent CMDB
Health processing cycle.

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

Table
Description

CMDB Health Scorecard

[cmdb_health_scorecard]

Current and historic health scores.
Status of historic score records
is 'Historic', and of latest score
records is 'Complete’.

CMDB Health Orphan Rule

[cmdb_health_orphan_rule]

Rules for calculating orphan
records per class.

CMDB Recommended Fields

[cmdb_recommended_fields]
Recommended fields per class.

CMDB Health Metric Status

[cmdb_health_metric_status]

Internal table that tracks the status
of each KPI and metric that is
being processed. Includes status,
processing time, and processing
start date.
State for a KPI or metric changes
from 'In Progress' to either of:

• Complete

• MaxFailures

• Daily Processing Time Out

Processing of a timed out KPI or
metric continues on the following
day.

CMDB Health Processor Status

[cmdb_health_processor_status]

Internal table that tracks the
processing progress of each KPI
and metric. Contains a list of tables
that are processed for each KPI
and metric, and processing status.
Classes are processed sequentially,
changing status from Draft -> In
Progress -> Complete.

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

Table
Description

CMDB Relationship All Rules Health
Results

[cmdb_health_result_rel_all]

Stores results about relationship
health, to be used by the All
Relationships report.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

64

Zurich ServiceNow AI Platform Capabilities

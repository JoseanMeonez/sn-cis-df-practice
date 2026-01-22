# zurich_servicenow_ai_platform_capabilities_cmdb_compliance_2026-01-16-12-37-30

*Source: zurich_servicenow_ai_platform_capabilities_cmdb_compliance_2026-01-16-12-37-30.pdf*

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

## CMDB Compliance

CMDB Compliance is a tool set that enables administrators to certify
CMDB data for correctness and fix any discrepancies found in the data.

Note:   For compliance in the context of internal business goals and
objectives, and external legislation and regulations, see Exploring
Policy and Compliance Management.

Certification options

CMDB Compliance offers these certification options to suit the size and
requirements of your organization:

Option
Description

Desired State

Automatically compares the
actual attributes and relationships
of specific ServiceNow records
against the desired states for those
records. For example, an audit can
detect a Linux database server
with insufficient RAM or whose
Depends on relationships with
another CI is incorrect. The system
then publishes any discrepancies
found and automatically assigns
follow-on tasks to qualified users to
bring that server into compliance.

Architecture Compliance

Automatically compares the
actual attributes of specific CIs,
such as CPU count, RAM, or
disk size against the expected
attributes for those CIs. The
system publishes any discrepancies
found and automatically assigns
remediation tasks to qualified
users.

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

Compliance Templates and Audits

The Templates and Audits modules on the top level of the Compliance
menu enable a certification_admin user to create, edit, and delete all
template and audit types.

You can use Compliance Templates and Audits to evaluate records for
any table in the ServiceNow system, not just those tables extending the
Configuration Item [cmdb_ci] table. Compliance audits certify record
attributes only. Compliance templates can be used in Control Test
Definitions in Governance Risk and Compliance.

## Compliance Activation

Compliance functionality is provided by the Certification Core
(com.snc.certification_core) plugin which contains shared functionality
required for certification audits.

The Certification Core (com.snc.certification_core) plugin consists of the
following plugins, and is activated by default.

• Activated by default: Desired State Certification

(com.snc.certification_desired_state)

• Activate: Architecture Compliance

(com.snc.architecture_compliance), which automatically activates
the Version Management (com.snc.version) plugin that manages
certification filter and template versions.

• Activate: Data Certification (com.snc.certification_v2), which
automatically activates the Version Management (com.snc.version)
plugin that manages certification filter versions.

## Installed with Compliance

These components are installed with the Certification Core plugin.

Demo data is included with the Desired State and Architecture
Compliance plugins.

The Certification Core plugin adds or modifies these tables.

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

Compliance Certification Core tables

Name
Description

Audit [cert_audit]

Contains all the data required to
run an audit, including the users
assigned to follow-on tasks and the
run schedule.

Audit Result [cert_audit_result]
Contains the results of specific,
certification audits.

Follow On Task
[cert_follow_on_task]

Contains the tasks that were
generated from an audit
discrepancy.

Certification Template
[cert_template]

Contains the definition of the
desired state of the record. The
template includes a filter that
identifies the records to evaluate
and the expected attributes and
relationship values.

Contains the records to certify,
the expected attributes, and the
expected relationship values.

Certification Condition [cert_cond]

Base table that defines the desired
attribute or relationship conditions
used in templates.

Certification Attribute Condition
[cert_attr_cond]

Contains the conditions that
define the desired CI attribute
values. This table extends the
Certification Condition [cert_cond]
base table.

Certification CI Relationship
Condition [cert_ci_rel_cond]

Contains the CI to CI relationship
conditions. This table extends the

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

Name
Description

Certification Condition [cert_cond]
base table.

Certification User Relationship
Condition [cert_user_rel_cond]

Contains the CI to user relationship
conditions. This table extends the
Certification Condition [cert_cond]
base table.

Certification Group Relationship
Condition [cert_group_rel_cond]

Contains the CI to group
relationship conditions. This table
extends the Certification Condition
[cert_cond] base table.

Certification Related List Condition
[cert_related_list_cond]

Contains the related list conditions.
This table extends the Certification
Condition [cert_cond] base table.

Certification Filter [cert_filter]

Contains a certification filter,
including the table that contains
the records to audit and the filter
conditions.

User roles

The certification role is automatically assigned to all users with the itil
role when the Certification Core plugin is activated or when compliance
applications are upgraded. Certification core installs two business rules,
both called Add Certification Role To Manager, that perform similar tasks
on different tables. One rule checks for a manager specified on the
User [sys_user] table, and the other checks for the certification role on
the User Role [sys_user_has_role] table. When both a manager and the
certification role are specified for a user, the system automatically grants
the certification role to the manager. This functionality ensures that a
certification task can be escalated successfully to the next level. The
system grants this automatic role to the user's immediate manager only
and not to others up the management chain.

Note:   When a manager has only the certification role and no other
role, the manager is considered a Requester and is not counted as a
subscribed user (Fulfiller).

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

Compliance Certification Core user roles

Name
Contains roles
Description

certification
none

Can read and update
certification tasks to
resolve discrepancies.

certification_filter_adm
in
none

Can create, read, and
update certification
filters.

certification_admin

certification,
certification_filter_adm
in

Can manage the
entire certification
process. These users
can create, edit, and
delete all certification
records.

UI policies

Compliance Certification Core UI policies

Name
Table
Description

Make table read only
Audit [cert_audit]

Sets the table field
derived from the
selected filter to read-
only.

Hide Audit Type
Audit [cert_audit]
Hides the Audit type
field.

Hide next scheduled
run
Audit [cert_audit]

Hides the Next
scheduled run date
when an audit
is inactive or on-
demand.

Show task fields when
create tasks is set to
true

Audit [cert_audit]

Displays all fields
related to creating
tasks when the user

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

Name
Table
Description

selects the Create
tasks check box.

Make name
mandatory
Audit [cert_audit]
Makes Name a
mandatory field.

Prevent editing of Last
run date
Audit [cert_audit]
Makes Last run date
field read-only.

Show User field
Audit [cert_audit]

Shows or hides
fields based on
the Assignment type
selected. The system
shows the User field
when you select the
following assignment
types:

• User Field if the
Assign to empty
option is Create
Assigned Task.

• Specific User

Show Assign to fields
Audit [cert_audit]

Shows or hides
fields based on
the Assignment type
selected. The system
shows the Assign
to field when the
assignment type is User
Field.

Show Assignment
Fields
Audit [cert_audit]

Shows or hides
fields based on
the Assignment type
selected. The system
shows the Assign to
empty field when you
select either of the

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

Name
Table
Description

following assignment
types:

• User Field

• Group Field

Show Group field
Audit [cert_audit]

Shows or hides
fields based on
the Assignment type
selected. The system
shows the Group
field when you select
either of the following
assignment types:

• Specific Group

• Group Field if the
Assign to empty
option is Create
Assigned Task.

Hide "run" associated
fields when active is
set to false

Audit [cert_audit]

Hides these scheduling
fields when the audit is
inactive:

• Run

• Day

• Time

• Last scheduled run

Show script window on
Scripted Audit
Audit [cert_audit]

Displays the Run this
script field when the
audit type is Scripted.

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

Name
Table
Description

Make table read only
Certification Condition
[cert_cond]

Sets the table field
derived from the
selected filter to read-
only.

Script includes

Compliance Certification Core script includes

Name
Description

DesiredStateUtil

Utility functions for desired state,
used to clone a template for Insert
functionality.

CMDBRElationshipAjax
Tool to get all relationships for a
given table.

RelationshipQueryParseAjax

Parses condition filters. This script
include is the internal code used
in generating the compliance
conditions.

CertificationUtils

Utility functions for certification that
find Next run time value, and so
on.

CertTaskEscalationTimerPercentag
e

Utility method for setting escalation
timer durations.

ConditionUtilsAjax
AJAX utilities for parsing queries
into a human-readable format.

DeleteInactiveVersionsAjax
AJAX server-side script to delete all
inactive versions of a record.

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

Client scripts

Compliance Certification Core client scripts

Name
Table
Description

Make audit type read
only if not new

Certification Template
[cert_template]

Sets the correct audit
type for new records,
and if the record is
not new, sets the Audit
type field to read only.

Update table name
(filter)
Audit [cert_audit]

Updates the table
Name field when the
filter is updated.

Update table name
Audit [cert_audit]

Updates the table
Name field when the
template is updated.

Set table name on
new
Audit [cert_audit]

Returns the table
name from the
template or filter.

Update table name
Certification Template
[cert_template]

Updates the table
Name field when a
new filter is chosen
and checks all existing
conditions to see if
they work for the new
table.

Show conditions when
table is set

Certification Template
[cert_template]

Shows and
hides conditions
appropriately when
the table is set.

Reset filter when audit
type changes

Certification Template
[cert_template]

Clears the filter and
updates the lists shown
when the audit type is
changed.

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

Business rules

Compliance Certification Core business rules

Name
Table
Description

Clone condition
Certification Condition
[cert_cond]

Part of certification
versioning. This
business rule retains
the original ID when a
condition is changed.

Copy audit type from
audit

Audit Result
[cert_audit_result]

Ensures that all audit
results have the same
audit type as the audit
that generated them.

Copy values from
template
Audit [cert_audit]

When a user selects
a template, and
updates the table,
filter, and audit type
from the template.

Delete condition
Certification Condition
[cert_cond]

Part of certification
versioning that deletes
a condition.

Prevent deletion of
audit with results
Audit [cert_audit]

Prevents deletion of
an audit containing
results.

Prevent delete of Filter
with Template

Certification Filter
[cert_filter]

Prevents deletion of a
filter still linked to a
template or audit.

Prevent deletion of
result with task

Audit Result
[cert_audit_result]

Prevents deletion of
an audit result with an
attached task.

Prevent delete of
Template with Audit

Certification Template
[cert_template]

Prevents deletion of
a template still being
used by an audit.

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

Name
Table
Description

Update conditions'
tables

Certification Template
[cert_template]

When storing template
conditions, properly
run all workflows and
update the condition
fields to contain the
display version of the
conditions.

Update filter version
Certification Filter
[cert_filter]

Creates a version
when the filter
changes in any
meaningful way.

Update next run time
Audit [cert_audit]

Updates the time in
the Next scheduled
run field when an
audit is modified.

Update next run time
during execution
Audit [cert_audit]

When the audit runs,
update the Next
scheduled run field to
the next time the audit
is scheduled to run.

Update table
Certification Template
[cert_template]

Update the stored
table to the table of
the filter.

Update template
version

Certification Template
[cert_template]

Creates a version
when the template
changes in any
meaningful way.

## Compliance Overview module

The Compliance Overview module is a type of a homepage.

About this task

The Compliance Overview module summarizes:

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

• Current audit states

• Outstanding certification tasks

• Compliance discrepancies

• Upcoming audits

• General state of compliance audits for Data Certification, Desired
State, Architectural Compliance, and Scripted audits

Only users with certain roles can access the Overview module. The
different levels of access are:

Access levels per role

Role
Access

certification
View (view overview page and
refresh reports)

certification_admin

• View (view overview page and
refresh reports)

• Customize (refresh, add, delete,
and rearrange reports)

View, customize

admin

• View (view overview page and
refresh reports)

• Customize (refresh, add, delete,
and rearrange reports)

• Edit (can edit gauges)

Procedure

1. Navigate to All > Compliance > Overview.

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

2. Select elements within the reports to obtain more information.
For example, select a bar in the Compliance Discrepancies chart to
open a list of audit results filtered by the respective attributes.

## Architecture Compliance

Architecture Compliance manages scheduled or on-demand audits of
CMDB data to determine which configuration items (CI) match expected
attributes. The compliance audits check servers to ensure that their
physical resources, such as CPU speed or memory, comply with certain
standards.

The compliance process checks servers to ensure that their resources,
such as CPU speed or memory, comply with standards set by your
organization. Audit reports show any discrepancies in the attributes of
the target CIs, and ServiceNow automatically assigns follow-on tasks to
qualified users who can remediate those discrepancies.

The administrator responsible for compliance checking creates template
definitions of expected attributes and then schedules an audit to check
CIs for compliance. The audit results identify CIs that pass certification
and itemize the discrepancies in those CIs that fail. ServiceNow
automatically generates and assigns follow-on tasks to track the process
of getting the CIs back into compliance. Users with the admin role
activate Architecture Compliance.

Architecture Compliance roles

To access or configure certification elements, a user must have the
certification_admin role. These users can create, update, and delete
filters if they have the proper access to necessary tables.

In the base system, certification_admin users have limited system rights
and do not have access to all the necessary tables. When assigning
compliance resources, make sure to grant additional roles to the
certification_admin user as needed. For example, the certification
administrator needs roles that grant access to these tables:

• Company [core_company]

• Cost Center [cmn_cost_center]

• Schedule [cmn_schedule]

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

Architecture Compliance Process

Perform these tasks in this order to certify configuration items with
Architecture Compliance.

1. Create a filter.

Create a filter that defines a subset of configuration items to certify.
You can create multiple versions of a filter, and then activate the
version you want to use for compliance checking. Architecture
compliance only supports filters on the Configuration Item [cmdb_ci]
table and all tables that extend it.

2. Create a template.

Create template conditions using values from reference fields in a
related list or conditions that define the expected physical attributes
of each CI in an audit. The template uses a filter to determine which
configuration items the system examines based on these conditions.

3. Create and run an audit.

Create and schedule an audit or run an audit on demand. The audit
generates a set of results based on the conditions in the template
you specify.

4. View audit results.

View the audit results which display any discrepancies between the
expected state, as expressed by the template conditions, and the
actual state of the target configuration items.

5. Correct discrepancies.

Correct the discrepancies the audit found by completing the follow-
on tasks created by the system.

## Architecture Compliance Overview module

The Architecture Compliance Overview module displays various
architecture compliance reports. The Overview module is a type of
homepage.

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

Only compliance users with certain roles can access the Overview
module. The different levels of access are:

Access levels per role

Role
Access

certification
View (view overview page and
refresh reports)

certification_admin

• View (view overview page and
refresh reports)

• Customize (refresh, add, delete,
and rearrange reports)

View, customize

admin

• View (view overview page and
refresh reports)

• Customize (refresh, add, delete,
and rearrange reports)

• Edit (can edit reports)

Using the Architecture Compliance Overview module

To use the Architecture Compliance Overview module, navigate to
Compliance > Architecture Compliance > Overview and click elements
within the gauges to obtain more information.

The available reports are:

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

Architecture Compliance Overview module gauges

Report
Description
Table

30/60/90 Day Task
Aging

All outstanding follow-
on tasks grouped
by age in 30-day
increments

Certification Task

Architecture
Compliance
Discrepancies

All audited attribute
discrepancies
Audit Results

Hierarchical Task Roll
Up

All follow-on tasks
grouped by Assigned
to user

Follow On Task

Outstanding
Architecture
Compliance Tasks

All follow-on tasks in
the Pending, Open, or
Work in Progress state

Follow On Task

Upcoming
Architecture
Compliance Audits

All scheduled audits
Audit

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

Architecture Compliance module

## Desired State

Desired State performs scheduled or on-demand audits of CMDB data to
determine which records match the expected attributes, CI relationships,
and relationships to other records in the system.

For example, desired state can determine if a computer has a
license for a particular software program. The compliance process
checks configuration items (CI) to ensure that their attributes and
relationships comply with standards set by your organization. Audit
results show any discrepancies in the desired state of a record, and
ServiceNow automatically assigns follow-on tasks to qualified users who
can remediate those discrepancies.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

19

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 19, 900x745px]*

```
...                      .........
:::::::::::::::::::::::::::....::::::::::::::::::::.::::::.
.  .           ..                                 .
.
........................       :-----------------------.
-----------------------=:      =***********************-
------------------------:      =+++++++++++++++++++++++-
------------------------:      -.
------------------------:      =.
------------------------:      -.
.......................
..


:-----------:
:-----------:
.  :-----------: -+=========+-
:-----------: =***********= .:::::::::::.
:-----------: =***********= ::::::::::::.
:-----------: =+++++++++++- .:::::::::::.

:::::::::::....:::::::....:::::......:::::::..::::....::::.
.::::::::::::::::::::::....................................

```

---
*Page 20*

Desired State roles

To access or configure certification elements, a user must have the
certification_admin role. These users can create, update, and delete
filters if they have the proper access to necessary tables.

In the base system, certification_admin users have limited system rights
and do not have access to all the necessary tables. When assigning
compliance resources, make sure to grant additional roles to the
certification_admin user as needed. For example, the certification
administrator requires roles that grant access to these tables:

• Company [core_company]

• Cost Center [cmn_cost_center]

• Schedule [cmn_schedule]

Desired State process

The desired state certification process can mean checking servers to
ensure that their physical resources, such as CPU speed or memory,
comply with certain standards. This process also ensures that all critical
business services have a manager, support group, and approval group
assigned.

The administrator responsible for certification creates definitions of
desired states and then schedules an audit to check CIs for compliance.
The audit results identify CIs that pass certification and itemize the
discrepancies in those CIs that fail. The ServiceNow system automatically
generates follow-on tasks to track the process of adjusting the CIs to the
desired state.

Desired state differs substantially from data certification. Data
certification is a manual process to ensure that your data matches
reality. Desired state examines the same data and determines when the
configuration of each item is in the desired and approved state.

1. Create a certification filter: Create a filter that defines a subset of
configuration items to certify. You can create multiple versions of a
filter, and then activate the version you want to use for certification.
You can create filters on the Configuration Item [cmdb_ci] table and
all tables that extend it.

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

2. Create a template: Create a template with conditions that define
the desired state of the physical attributes, related records, and
relationships for a CI. The certification filter you select for the
template determines which configuration items the system examines.

3. Create and run an audit: Create an audit using the template. Set
the audit to run on a schedule or on demand. The audit generates a
set of results based on the conditions from the template you specify.
Determine usage of follow-on tasks:

• Determine if the audit creates follow-on tasks and assignment.

• Determine if the same follow-on task is used for the
same audit failure across multiple runs. The system property
glide.allow.new.cert_follow_on_task is set to true by default,
allowing for new follow on tasks to be created for the same
failure, at each audit run (this system property applies only to
audits that aren't scripted).

4. View audit results: View the audit results which display any
discrepancies between the desired state, as specified by the
template, and the actual state of the target configuration items.

5. Correct discrepancies: Correct the discrepancies the audit found by
completing the follow-on tasks created by the system.

## Desired State Overview module

The Desired State Overview module displays various desired state reports.
The Overview module is a type of homepage.

Desired State Overview module roles

Only compliance users with certain roles can access the Overview
module. The different levels of access are:

Access levels per role

Role
Access

certification
View (view overview page and
refresh reports)

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

Role
Access

certification_admin

• View (view overview page and
refresh reports)

• Customize (refresh, add, delete,
and rearrange reports)

View, customize

admin

• View (view overview page and
refresh reports)

• Customize (refresh, add, delete,
and rearrange reports)

• Edit (can edit reports)

The different levels of access are:

• View: can view the overview page and refresh reports.

• Customize: can refresh, add, delete, and rearrange reports.

• Edit: can edit reports.

Use the Desired State Overview module

The Desired State Overview module displays various desired state reports.

Before you begin

Role required: none

Procedure

1. Navigate to All > Compliance > Desired State > Overview.

2. Move or add reports where needed.

3. Click elements within the reports to obtain more information.

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

The Desired State Overview Module in the base system contains
these reports:

• Upcoming Desired State Audits: All scheduled audits.

• Outstanding Desired State Tasks: All follow-on tasks in the
Pending, Open, or Work in Progress state.

• Hierarchical Task Roll Up: All follow-on tasks grouped by Assigned
to user.

• Desired State Discrepancies: All audit discrepancies for attributes
and relationships.

• 30/60/90 Day Task Aging: All outstanding follow-on tasks grouped
by age in 30-day increments.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

23

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 23, 1470x1361px]*

```
...                       .......
.::::::::::::::.::::::::::::::....:::::::::::::::::..::::::.
.:::::      .:......       ...........          ......

.
.........................      ------------------------.
-------------------------      +***********************-
-------------------------      =+++++++++++++++++++++++-
-------------------------      ===.
-------------------------      +**:
-------------------------      =++.
.........................
.


...
:---:++++
. :---:+***.....
:---:+**+.::::.:::..... ....
:=--:+***.:::.+%#%=-===:***=-===::::: ...  ...
.... :::: ... :---..:...:::..:::..... ... .:::..... ...


.--:::---::::::::::::::::::::::::.:::::::::::::::::::::::::.
.:::::::::::::::::::......................................
.::::::::::::::::::::::...................................

```

---
*Page 24*

## Desired State reporting

The Desired State application includes reports to assess your audit results.

These reports are available to all users whose role gives them access
to the Reporting application. Users with the admin role can share these
reports with specific users of groups or change the display options.

Navigate to Reports > View / Run. In the Reports search field, enter all or
part of the report name such as Desired State. You can also scroll to
the designated category and select one of the reports.

In addition to these reports, you can generate your own reports.

Desired state report table

Report
Description
Category

Desired State
Discrepancies

This report displays all
desired state audit
results that have a
follow-on task that is
not yet in the Closed
Complete state. This
report displays by
column name.

• Type: bar chart

• Table: Audit Result
[cert_audit_result]

Audit Result

Desired State Result
with Stability Unstable

This report displays all
audit results where the
Stability field has the
value Unstable. This
report displays by CI
and stacked by audit.

• Type: bar chart

Audit Result

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

Report
Description
Category

• Table: Audit Result
[cert_audit_result]

Desired State Result
with Threshold
Exceeded

This report displays all
audit results where the
Threshold field has the
value Exceeded. This
report displays by CI
and stacks by each
audit.

• Type: bar chart

• Table: Audit Result
[cert_audit_result]

Audit Result

Upcoming Desired
State Audits

This report displays the
desired state audits
that are scheduled to
run in the next two
quarters.

• Type: List (tabular)
report

• Table: Audit
[cert_audit]

Audit

30/60/90 Day Desired
State Task Aging

This report displays the
number of follow-on
tasks that are not
Closed Complete for
desired state audit
types. The report is
grouped by aging
level.

• Type: Horizontal bar
chart

Follow On Task

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

Report
Description
Category

• Table: Follow On Task
[cert_follow_on_task]

Desired State
Hierarchical Task Roll
Up

This report displays
similar data to the
Task Aging report, but
groups the results by
manager.

• Type: Horizontal bar
chart

• Table: Follow On Task
[cert_follow_on_task]

Follow On Task

Outstanding Desired
State Tasks

This report displays
similar data to Task
Aging report, but
groups the results by
short description.

• Type: List (tabular)
report

• Table: Follow On Task
[cert_follow_on_task]

Follow On Task

## Certification audits

A certification audit compares the actual attributes of certain
ServiceNow records. This audit selects a filter, against the expected
attributes, relationships, and related record values defined by template
conditions or a script.

You can configure the audit to create and assign follow-on tasks
to remediate any discrepancies the audit finds. Audit records use a
standard ServiceNow scheduler to determine when to run. After an audit

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

runs, the results and follow-on tasks appear in related lists in the audit
record.

Users with the certification_admin role can create, update, delete, and
run audits. Users with the certification role can view audits, audit results,
and follow-on tasks.

## Create a compliance audit

Create a compliance audit. Compliance offers two types of audits: one
uses templates to define conditions and the other uses a script.

Before you begin

Role required: certification_admin

Procedure

1. Ensure that an appropriate template record was created for this
audit.

Note:   Conditions in the template define the values to audit.

2. Use the CI Class Manager:

a. Navigate to All > Configuration > CI Class Manager.

b. Select a class from the Class Hierarchy.

c. In the sidebar, check Advanced and then select Audit in the
Compliance group.

3. Or, navigate to one of these modules:

• All > Compliance > Audits

• All > Compliance > Architecture Compliance > Audits

• All > Compliance > Desired State > Audits

• All > Compliance > Scripted Audits > Audits

4. Select New.

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

The system opens a new record for the audit type associated with
the navigation path you selected. The Audit type field is read-only.

5. Complete the form using the fields described in the table below.

6. Right-click the header bar and select Save.

The Audit Results and the Follow On Tasks related lists appear on the
form.

7. To run the audit immediately, select Run Audit.

When template audits run, ServiceNow updates the date and time
in the Last run date field and populates the related lists. For scripted
audits, the Last run date field is not populated.

8. View the records that passed and the discrepancies found by the
audit in the Audit Results related list.
You can open template records and any follow-on tasks directly from
this related list. Notice that the value in the Task description field
appears as the Short description in the follow-on tasks.

Note:   You cannot delete audit records that have audit results
or audit results that have follow-on tasks. ServiceNow disables
the Delete option in records and lists where these dependent
records exist.

Creating Audits

Field
Description

Name
Name for this audit.

Filter

Filter to use when the audit type
is Scripted. This field is required
for scripted audits, but is hidden
for all other audit types.

Template

[Required] Template to use
when this audit runs. Audit
type filters the list of available
templates, and only the active
versions of templates are
available for selection. For

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

Field
Description

example, when you create an
audit from Desired State, only
templates of the Desired State
audit type are available for
selection. For the Desired State
and Architecture Compliance
audit types, only templates
for tables that extend the
Configuration Item [cmdb_ci]
table are available. This field is
hidden when the audit type is
Scripted.

Table
[Read-only] Table for the
template.

Create tasks

Option to create follow-on tasks
for correcting discrepancies
(selected). In a scripted audit,
you can create the logic for
either task state by using true
to create tasks or false to not
create tasks. By default, this
check box is cleared (false) in a
new audit record.

Assignment type

Method for assigning follow-on
tasks. This field is visible only when
the Create task check box is
selected. Choices are:

• User Field: Select a user
reference field on the table
being audited. For example,
you choose the user
identified in the Managed
by field on the failed
record to perform the tasks.
This selection displays the
Assigned to and Assign to
empty fields. If the reference
field on the record is empty,

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

Field
Description

the value in the Assign to
empty field is used.

• Specific User: Select a
specific user to perform the
tasks. This selection displays
the User field.

• Group Field: Select a group
reference field on the table
being audited. For example,
you choose the group
identified in the Support
group field on the failed
record to perform the tasks.
Tasks are assigned to all
members of the group. This
selection displays the Assign
to group and Assign to
empty fields. If the reference
field on the record is empty,
the value in the Assign to
empty field is used.

• Specific Group: Select a
specific group to perform
the tasks. This selection
displays the Group field. All
members of the selected
group are assigned to the
tasks.

User

Specific user this audit assigns
to follow-on tasks. This user must
have the certification role. This
field is available under these
conditions:

• Assignment type is set to
Specific User.

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

Field
Description

• Assign to empty is set to
Create Assigned Task, and
Assignment type is set to
User Field.

Assign to group

Group field that defines which
group this audit assigns to
the follow-on task. This field
is available only when the
Assignment type is Group Field.

Group

Specific group this audit assigns
to follow-on tasks. This field
is available only when the
Assignment type is Specific
Group.

Assign to

User field that defines which user
this audit assigns to the follow-on
task. This field is available only
when the Assignment type is User
Field.

Assign to empty

Behavior to use if the field
selected in Assign to or Assign
to group is blank on the record
being audited. For example,
if a follow-on task must be
assigned to a manager, but no
manager is identified, the Assign
to empty setting determines
what happens. This field appears
only when the Assignment type
is User Field or Group Field.
Choices are:

• Do Not Create Task: No
follow-on task is created
when the Assign to or Assign
to group field is empty.

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

• Create Unassigned Task:
Create a follow-on task, but
do not assign it to any user
or group. The task can be
manually assigned later.

• Create Assigned Task:
Create a follow-on task and
assign it to the user or group
specified. If the assignment
type is User Field, the User
field becomes available.
If the assignment type is
Group Field, the Group field
becomes available.
The audit automatically creates
follow-on tasks for all records
that have Assign to populated,
regardless of the Assign to empty
setting.

Short description
Brief description of the purpose
of the audit.

Task description

General description of the work
required for the follow-on tasks
for the audit. All follow-on tasks
created by this audit inherit this
description.

Active

Activation control for this audit
record. Clear this check box to
prevent this audit from running
and creating follow-on tasks.

Run

How often to run the schedule
that generates the audit.

• Daily

• Weekly

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

Field
Description

• Monthly

• Periodically

• Once

• On Demand

Day

• If Run is Weekly, the day of
the week when the audit
runs.

• If Run is Monthly, the day of
the month when the audit
runs. If the day is 29, 30 or 31,
for shorter months the audit
runs on the last day of the
month.

Repeat Interval

If Run is Periodically, the
frequency that the audit runs,
based on a 24-hr. clock. Enter
the number of days between
audits and the time of day that
you want the audit to run. For
example, set Days to 10 and
Hours to 14:00:00 to run the audit
every 10 days at 2:00pm.

Starting

If Run is Periodically or Once, the
date and time when the audit
runs.

Time

If Run is Daily, Weekly, Monthly,
or Once, the time of day, on a
24-hour clock, when the audit
runs.

Last run date

[Read-only] The last date and
time the audit ran, either on its
regular schedule or manually.

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

Audit previews do not update
this field.

Next scheduled run

[Read-only] The next date and
time when the audit runs. The
system recalculates this field
when you change the schedule.

Audit type

[Read-only] The type assigned
to this audit. The system selects
the audit type based on the
application from which the audit
is created. The type can be:

• Desired State

• Architecture Compliance

• Compliance

• Scripted

Health window

Duration of the evaluation
period for threshold and stability.
The health window value defines
the number of Health window
units in an evaluation period for
an audit. This value is expressed
as a positive integer. The default
value for this field is 7.

Health window unit

Unit of measurement that
defines the duration of a health
window. The default value for
this field is Days. Choices are:

• Minutes

• Hours

• Days

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

Field
Description

• Months

Threshold count

Acceptable number of audit
failures for the desired state
field that can occur within the
specified health window for a CI.
The audit results indicate when a
desired state field is within or has
exceeded this threshold limit. The
default value for the threshold is
5.

Stability count

Acceptable number of times
that audit results for a CI can
switch between Certified and
Failed within the specified health
window. The audit results for a
CI indicate whether it is stable
or unstable. The default value for
stability is 1.

Run this script

Audit script to run which contains
the conditions that a CI need
to comply with to pass the
audit. This field is available
only when the audit type is
Scripted. The Audit form includes
a sample script with instructions
for performing the audit and
generating the follow-on tasks.

## Copy an audit

New audits can be created from an existing audit.

1. Open the audit record you want to copy.

2. Change the name or short description to distinguish this audit from
the original.

3. Make any other changes you need.

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

4. Right-click in the header bar and select either Insert or Insert and Stay
from the context menu.
The system clears the Last run date field and inserts the record into
the database.

## Schedule and run an audit

The system performs audits automatically from the schedule you
configure.

Users with the certification_admin or admin role can generate on-
demand audits directly from the Audit form by clicking Run Audit. When
an audit runs, ServiceNow populates the Audit Results related list in the
form and shows follow-on tasks, if any, in the Follow On Tasks related list.
Click Preview Audit Results to generate an audit preview that tests your
template conditions without generating any audit results.

## Certification audit results

Audit results show the records that have passed or failed an audit and
itemize any discrepancies detected.

A discrepancy is considered any departure from the expected conditions
defined in the template or script used for the audit. Audit results provide
links to the source records and to the follow-on tasks for bringing failed
records into compliance. Records that pass an audit have a single entry
in the results table with a state of Certified. Records that fail an audit
show all discrepancies, each with a state of Failed.

ServiceNow displays results from a certification audit in these locations:

• Audit Results list

• A related list in the Audit record

• A related list in the compliance view of a CI record

## View an audit result

To generate certification results, you must first create and run an audit.

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

Before you begin

Role required: none

Procedure

1. Navigate to one of the following locations:

• Compliance > Desired State > Audit Results

• Compliance > Architecture Compliance > Audit Results

• Compliance > Scripted Audits > Audit Results

• Data Certification > Schedules > Audit results

2. From any audit results list, you can edit the filter to show the results for
any audit type.
Audit Type filter

The results filter by audit type and grouped by audit number. Within
the groups, results list by date, from oldest to newest.

3. You can open the audit record, the CI record, or the follow-on tasks
from this list.

Note:   The Audit type field was set automatically when the audit
result was created and cannot be changed. For scripted audits,
the audit type is set when you create the audit record.

Audit results show this information:

Audit Results

Field
Description

Created
Date and time the audit ran.

Document
Record that was certified, such
as a configuration item (CI).

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

37

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 37, 600x110px]*

```
..:.  :---... ...               .
.............                     .....
.::.::..:......................... ............     ........
.:::::::...............:.........::-:--:::::---------:::::::
.................................:.::::.............:.......
```

---
*Page 38*

Field
Description

State

Results of certification for each
condition evaluated. The three
possible states are:

• Certified A certified record
is one that passed all
conditions. The instance
generates only one audit
result for a certified record.

• Failed Records that are not
certified have an audit result
for each failed condition.
The Column name, Desired
value, Discrepancy value,
and Follow on taskare only
populated for failed results.

• Pending A pending state
indicates that the audit
is incomplete. Data
certification audits use this
state when a result is
awaiting user input.

Column name

Audited field, relationship, or
related list column that did not
match the expected state.

Desired value

Attribute or relationship required
for this record that was not
found, from the condition in the
expected state template. For
data certification, this column is
blank if the record has a state of
Failed or Pending.

Discrepancy value

Actual value of the attribute that
did not match the expected
state. The follow-on task, if
provided, tracks resolution of this

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

Field
Description

discrepancy. In a list of results
for the Data Certification audit
type, this column is blank if the
record has a state of Certified or
Pending.

Follow on task

Link to the follow-on task
generated for remediating a
discrepancy.

Audit
Link to the audit record that
produced the results.

Threshold

State of an audited, desired
state field with a defined failure
threshold. This threshold is the
acceptable number of failures
for a desired state field within
a specified health window and
is configured in the Audit form.
Possible threshold states for the
results are:

• In Limit

• Exceeded

Stability

Stability state of a CI. Stability
state is based on the number
of times the audit result for
a desired state field changes
from Certified to Failed within
a specified health window.
Possible stability states are:

• Stable

• Unstable

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

## Delete an audit result

While audit results can be deleted, you cannot delete an audit result that
has a follow-on task associated with it.

Before you begin

Role required: none

Procedure

1. Navigate to one of these modules:

• Compliance > Desired State > Audit Results

• Compliance > Architecture Compliance > Audit Results

• Compliance > Scripted Audits > Audit Results
The list groups by audit name.

2. Select the check box for a result in the list, and then select Delete
from the Actions on selected rows menu at the bottom of the list.

Note:   If the result record has a follow-on task, the Delete option
is not available. If you select multiple records, some with and
some without tasks, the system only deletes those records that do
not have tasks.

3. Click a date/time link to see the results for a specific CI.

Note:   The Delete button only appears on the form if the audit
result does not have a follow-on task.

4. Click Delete.

## View an audit result in the Compliance view

After an audit has run, you can view the results and follow-on tasks from
the Compliance view in the records of every CI audited.

Before you begin

Role required: none

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

About this task

This view is available only for systems that use the default CI classes
provided with the base ServiceNow system, such as Hardware, Software,
and Computer. For information about creating views, see View
Management.

Procedure

1. Navigate to All > Configuration and open the record of a CI that was
included in a compliance audit.

2. Select the view to configure by performing the appropriate action for
your list version.

Version
Action

List V2
Open the context menu and
select View > Compliance.

List v3
Open the context menu and
select Change View, and then
click Compliance.

The Audit Results Compliance View appears.

Audit Results Compliance View List Descriptions

Lists
Description

Passed Audit Results

Lists audits for this CI that
passed without discrepancies.
The information includes the
versions of the template and
filter used. Records are grouped
first by audit, and then by
creation date and time.

Failed Audit Results

Lists all failed audits for this
CI. The information includes the
discrepancy data, the follow-
on task, and the versions of
the template and filter used.
Records are grouped first by

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

Lists
Description

audit, and then by creation date
and time.

Follow On Tasks

Lists all follow-on tasks generated
from audit discrepancies for this
CI.

3. Right-click the header bar and select View > Compliance from the
context menu.

## Results preview

You can preview an audit to view potential results without saving audit
results or generating follow-on tasks. For example, use this feature to test
template conditions for correctness without creating thousands of result
records.

In an audit record, click Preview Audit Results under Related Links to show
a summary of the potential audit results appears at the top of the audit
record.

Previewing does not change the Last run date field.

## Health windows

A health window is a trailing time frame in which the ServiceNow system
evaluates audit results from CIs that have desired state fields defined.

The Health window and Health unit fields define each window, and ends
when an audit runs. For example, an audit runs on the fifteenth of the
month with a seven-day window. It evaluates the threshold values of a
desired state field from the eighth to the fifteenth. When the same audit
runs the next day, the system evaluates the threshold from the ninth to
the 16th, and so on. The audit counts backward seven days from the
current day. ServiceNow evaluates a CI threshold value for each health
window, without considering the results from the previous window. As
a result, the health of a CI can fail for one audit and then pass in a
subsequent audit that runs in a new window.

ServiceNow evaluates stability by recording the number of times a
desired state threshold value for a CI switch between Failed and Certified

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

within the health window. In the example shown here, a 5-minute health
window was set for the desired state field on a UPS unit that measures the
remaining battery time. The threshold was set at 2, which allows the field
to fail two audits in the same health window.

In the initial audit, the system evaluated the threshold value for the
Seconds on battery field within a 5-minute window. This window ran
from 13:52:51 to the time of the audit at 13:57:51. The desired state
field showed In Limit for that audit and the second audit conducted
less than a minute later. The next two audits were conducted within five
minutes of the first audit and both showed that the threshold (set at 2)
was Exceeded. A subsequent audit was conducted five minutes after the
audit in which the desired state field threshold was first exceeded. Since
the health window had moved forward enough units, the Seconds on
battery field was within limits again with only one failure in the 5-minute
window being evaluated.

## Certification filters

A certification filter creates a subset of ServiceNow records to audit,
typically from configuration items (CI) of a certain type, such as all UNIX
servers in a specific datacenter.

However, you can define a filter for any ServiceNow table by using any
set of system-supported conditions. Audited records identified by a filter
for expected attributes or relationships, depending on the audit type.

You can create multiple versions of a filter, reactivate inactive versions,
and select the version you want to use in a template or a certification
schedule. Only the active versions of a filter are available for selection
in template records. You can use a single filter for multiple certification
templates or schedules.

Certification filters

Filter
Description

Data Certification
Validates CMDB data.

Architecture Compliance

Manages reviews of CMDB data
in architecture compliance audits
to determine which configuration

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

Filter
Description

items (CIs) match expected
attributes.

Desired State

Manages reviews of CMDB data
to determine which CIs match a
desired state for both attributes
and relationships.

Compliance

Manages reviews of records
from any ServiceNow table to
determine which records match
an expected set of attributes and
related record conditions.

IT Governance Risk and
Compliance

Generates audits and tests to
ensure that controls are being
followed and creates tasks to track
corrective actions.

Roles

In the base ServiceNow system, users with the certification_admin role
have limited system rights and do not have access to the tables required
for creating a filter.

When assigning compliance resources, make sure certification_admin
users have any additional roles they need. For example, a user requires
roles that grant access to the Company [core_company] table.

## Compliance filter

The compliance filter for license bases uses the following fields to define
entitled users or CIs.

These field values can be used independently or together to calculate
compliance.

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

Compliance Filter

Value
Description

Entitled company

All users or configuration items (CI)
at all locations of this company,
in all departments are entitled
to use this software package.
Compliance at this level calculates
how many licenses are purchased
for the company at large and how
many entitled users or CIs consume
them.

Entitled location

CIs and users who are assigned
to this company location in any
department are entitled to use this
software package. Compliance at
this level calculates how many
licenses are purchased for this
company location and how many
users and CIs consume them.

Entitled department

Only the users or CIs in this
department at this company
location are entitled to use this
software package. Compliance is
calculated for a single department
only.

The license form can display information about all CIs or named users
who are using this software package. The form indicates when license
reconciliation is necessary and displays all compliant users or CIs.

Possible compliance levels are:

Compliance

Level
Description

Non applicable

Compliance levels for all
infrastructure licenses that are
related to cluster licenses are set

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

Level
Description

to Non applicable automatically.
Compliance levels are calculated
in the cluster license only, and
not in the related infrastructure
licenses.

Out of compliance

More licenses are being consumed
than were purchased. There are
more users or CIs using this license
than the license allows, and some
users or CIs are not be entitled to
use this software package.

Unused
The licenses for this software
package are currently unused.

Reconciliation required

CIs or users who are not entitled
to use this software are consuming
licenses. Licenses that require
reconciliation are considered out
of compliance. Reconciliation
requires action to ensure that
unentitled users are not using the
software. Reconciliation involves
uninstalling software or increasing
license counts to match actual
user counts.

Nearly out of compliance

For a software package to be at
this compliance level, more than
95% of the licenses are in use by
entitled users or CIs. License bases
at this level are considered to be In
compliance.

In compliance

This software package has unused
licenses. All users or CIs using a
license are entitled to use this
software package.

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

## Create a filter

You can create as many versions of a filter as necessary. You can
then designate which versions are active and available for selection
in Compliance template records, Governance Risk and Compliance
control test definitions, or Data Certification schedule definitions.

Before you begin

Role required: none

Procedure

1. Navigate to All > Configuration > CI Class Manager, and:

a. Click Hierarchy to display the CI Classes list.
Select the class to create a filter for.

b. In the class navigation bar, expand Health, select Compliance,
and then click Certification Filter.

2. Or, navigate to one of these modules:

• Compliance > Filters

• Data Certification > Schedules > Certification Filters

3. Select an existing filter to edit, or click New.

4. Fill in the fields (see table below).

5. Click Submit.
This action saves the filter as version 1.

6. To create another version of this filter, open the record and modify
the name, table, or conditions.

Note:   You can change a filter Description without incrementing
a version.

7. Click Update.

The system saves a new version of the current filter and makes it the
Active version. The previous version is marked inactive. The system

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

displays only active filter versions for selection when you create
templates or schedules.

Creating Filters

Field
Description

Number

[Read-only] Displays the
automatically assigned filter
identification number. All
versions of a filter have the same
number.

Name
[Required] Filter name.

Description

[Optional] Describes this filter.
You can change the description
of a filter without incrementing a
version.

Table

Specifies the table containing
the records to select. The
template or schedule that uses
this filter works on this table. For
example, select the ESXi Server
[cmdb_ci_esx_server] table
to select VMware ESX servers.

Active

Makes this filter available
for use from the Filter field
on the Certification Template
or Schedule Definition form.
Multiple versions of a filter can
be active. You can activate
or deactivate a filter without
incrementing the version.

Version

[Read-only] Indicates the version
of this filter. Any changes to this
filter, except to the description or
the Active check box, makes it
inactive. The system increments
the version of the updated filter

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

Field
Description

and marks it as active. The
system saves all versions of the
filter and makes them available
for reactivation.

Filter condition

Specifies the fields, operators,
and values that create the
filter. The available fields are
based on the selected table.
The condition builder shows the
number of records that match
the conditions. Click the refresh
icon
Refresh Conditions

to recalculate the number of
matching records when you edit
the conditions.

## Copy a filter

New filters can be created from an existing filter.

Before you begin

Role required: none

Procedure

1. Navigate to All > Configuration > CI Class Manager, and:

a. Click Hierarchy to display the CI Classes list.
Select the class to create a filter for.

b. In the class navigation bar, expand Health and select
Compliance.
Then click Certification Filter.

2. Or, navigate to one of these modules:

• Compliance > Filters

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

• Data Certification > Schedules > Certification Filters

3. Open the filter record that you want to copy.

4. Make sure to change the filter name or description to distinguish the
new filter from the original.

5. Make any other necessary changes.

6. Right-click in the header bar and select either Insert or Insert and Stay
from the context menu.
The system increments the record number and sets the version to 1
for the new record. Both the original filter and the copy are Active
and appear in the record list. Showing all copies of a filter allows you
to see the entire history of the filter.

## Delete a certification filter

Delete certification filters that are no longer needed and no longer in
use.

Before you begin

Role required: certification_admin or admin

About this task

You can't delete a certification filter that is being used in a template or a
scripted audit.

Procedure

1. Navigate to All > Configuration > CI Class Manager, and:

a. Select Hierarchy to show the CI Classes list.

b. Select the class to delete a filter for.

c. In the class navigation bar, expand Health.

d. Select Compliance and then Certification Filter.

2. Or, navigate to one of these modules:

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

• Compliance > Filters

• Data Certification > Schedules > Certification Filters

3. Open the filter record you want to delete.

a. To delete a single filter version, open that version record and click
Delete.

The system hides the Delete button for filters that are in use. If
you delete the latest version of a filter that is active, the previous
version of that filter is reset to Active.

b. To delete all unused and inactive versions of a filter, open any
version of that filter and click Delete inactive versions under
Related Links.

4. When prompted, select OK to proceed.
The system deletes unused filter versions. A message in the header
bar identifies filter versions that cannot be deleted because they are
used in a template or scripted audit.

## Manage a filter version in a form

You can view and manage all versions of a filter from the Certification
Filter form.

Before you begin

Role required: none

About this task

Versions can be displayed in a list. The default list of filters displays only
the active version of each filter. To see all filter versions in the list view,
select All in the breadcrumbs.

Procedure

1. Open any version of a filter.
The Other Versions related list displays all other versions of this filter,
both active and inactive. The system prevents you from editing either
the filter version or the record number in the list view.

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

2. Click any version in the related list to display the record for that
version.

3. To make an inactive filter the current version, open the filter, edit it if
desired, and then click Revert.
This action:

• Deactivates the previous active version of the filter.

• Copies the inactive filter.

• Makes this new copy current and active.

## Certification follow-on tasks

The ServiceNow system can automatically generate and assign follow-on
tasks to correct discrepancies detected during compliance audits.

The system property glide.allow.new.cert_follow_on_task is set to true by
default, allowing for new follow on tasks to be created for the same
failure, at each audit run. You can set this property to false, to configure
audit to use the same follow-on task for the same audit failure across
multiple runs.

The system property glide.allow.new.cert_follow_on_task applies only to
audits which aren't scripted.

The system property glide.allow.new.cert_follow_on_task applies only to
audits which aren't scripted.

You configure and assign follow-on tasks to qualified users or groups in
the audit record. A user with the certification_admin role can reassign
any follow-on task. The Audit Results related list in the Follow On Task form
contains links to the records that failed.

Access follow-on tasks

Users with the certification role can only access follow-on tasks assigned
to them but can reassign these tasks to other users.

1. Navigate to All > Compliance > My Follow On Tasks.
The list contains all active follow-on tasks assigned to the logged in
user.

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

2. Open a task.

The record shows the specifics of the task, the task activity, and the
failed audit results.

3. Open records from the Audit Results related list to see each
discrepancy.

4. Go to the CI named in the record and perform the work to bring it
into compliance.

5. Update the State field in the follow-on task record and add work
notes as you correct each discrepancy.

When you change the state, the system updates the task activity
appropriately.

When the task is Closed Complete it no longer appears on the My
Work list.

Manage follow-on tasks

Users with the certification_admin or admin role can see all follow-on
tasks.

Before you begin

Role required: none

About this task

Tasks are pre-assigned to a user or group as specified in the audit record,
but users with the certification_admin role can reassign the task.

Procedure

1. Navigate to the appropriate application:

• Compliance > Architecture Compliance > Follow On Tasks

• Compliance > Desired State > Follow On Tasks

• Compliance > Scripted Audits > Follow On Tasks

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

The list of follow-on tasks appears, filtered by audit type.

2. Open a task.

The Audit and Configuration item fields are read-only for all users.

3. Edit the Change group or the Assigned to field if necessary.

4. Edit the Short description field if necessary.

The short description is inherited from the Task description field in the
Audit form.

5. Use the links in the Audit Results related list to open the individual
records that failed the audit.

6. If you update the follow-on task record, be sure to add work notes.

## Certification templates

Certification templates can define attributes, relationships, and reference
field values that indicate what a record is expected to contain.

These values are used to perform audits on ServiceNow records. The
certification filter selected in the template identifies the table and
records to audit, and the template conditions set the expected state for
those records. The type of audit you create determines which tables and
template conditions are available.

Users with the certification_admin role can create, update, and delete
templates. Users with the certification role can view template versions.

Certification template audit types

When you create a template, ServiceNow assigns an Audit type that
determines which tables and conditions are available in the certification
template. This value is based on the application from which the template
is created. Each application lists only the templates with the associated
type.

Available Condition Builders

The available condition builders for each audit type:

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

• Compliance: Runs audits on any set of ServiceNow records, not only
configuration items (CI). This audit type provides the following types of
conditions for any ServiceNow table:

• Attribute: Sets conditions for the attributes of the records.

• Related List: Runs audits on records in tables that reference the table
defined in the template.

• Architecture Compliance: Defines the following types of conditions for
tables that extend the Configuration Item [cmdb_ci] table.

• Attribute: Sets conditions for physical attributes of CIs, such as memory
or disk size.

• Related List: Runs audits on records in tables that reference the table
defined in the template.

• Desired State: Defines the following types of conditions for tables that
extend the Configuration Item [cmdb_ci] table.

• Attribute: Sets conditions for physical attributes of CIs, such as memory
or disk size.

• CI relationship: Defines the relationships these CIs have with other CIs.
An example of a relationship is a business service, such as Outlook
Web Access, that depends on a server.

• User relationship: Defines the user who reviewed the log records. The
only operator available with this condition builder.

• Group relationship: Defines user groups who backed up this CI. The
only operator available with this condition builder.

• Related List: Runs audits on records in tables that point toward the
table defined in the template.

Certification Template Record List

The default Templates list displays only the active version of each
template, but you can update the breadcrumbs to display all template
versions.

• Default Templates List: The default Templates list displays only the active
version of each template, filtered by Audit type.

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

• All Template Versions: To view all template versions for an audit type,
click the arrow before Active=true to remove that condition from the

breadcrumbs.

## Create or edit a certification template

To create a certification template, follow these instructions.

Before you begin

Activate the Certification Core plugin to enable the Compliance
functionality. See Compliance Activation for details.

Procedure

1. Ensure that you have an appropriate filter that defines the records
the template evaluates.

The template applies its conditions to these records.

2. Use the CI Class Manager to navigate to the Certification Template
form:

a. Navigate to All > Configuration > CI Class Manager.

b. Select Hierarchy to display the CI Classes list.
Select the class for which to create a certification template.

c. In the class navigation bar, expand Health and then select
Compliance.

3. Select Certification Template.

4. Or, navigate using one of these paths:

• All > Compliance > Architecture Compliance > Templates

• All > Compliance > Desired State > Templates

• All > Compliance > Templates

• All > Audit Definitions > Templates

5. Select New or select a certification template to edit.

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

The following fields are completed automatically:

• Number: Each new template has a unique number. All versions of
the same template use the same number.

• Active: All new templates are set to Active.

• Version: The version of a new template is set to 1.

• Audit type: The system sets the default type to Architecture
Compliance, Desired State, or Compliance, depending on the
application in which the template was created. You can select
a different type when you create the template, but the field
becomes read-only when you submit the record. The system
uses audit types to filter record lists for appropriate data and
determine which conditions are visible on the template form.

6. Complete the following mandatory fields.

• Name: Enter a descriptive name for this template. The name
helps identify the purpose.

• Filter: Select the filter that identifies the records to be certified.
You can select either active or inactive filter versions. By default,
the system presents only active versions for selection. If you start
enteringthe name of a filter, the auto-complete feature displays
all versions for selection. For architecture compliance and
desired state templates, only filters that use a table extended
from Configuration Item [cmdb_ci] appear on the choice list. All
filters appear on the choice list for a compliance template. After
you select a filter, the template condition builder appears. The
template operates on the table specified in the filter.

7. Enter a description for this template.

8. Define certification conditions using the condition builders.

All conditions are AND conditions. The audit type of the template
determines which conditions are available.

•

Certification Attribute Conditions: [All audit types] Select
configuration item attributes or specifications to certify, such
as CPU count, memory, or disk space. Available fields in the

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

attribute condition builder depend on the table from the
filter. Typical ServiceNow conditions for attributes are available,
including the between operator for setting numerical conditions
with high and low boundary values. This operator was added
specifically for desired state conditions.

The Show Related Fields item supports dot-walking, enabling you
to include referenced fields in a certification attribute condition.
Select Show Related Fields or Remove Related Fields to add or
remove referenced fields (in the form of <field> => <field>). Select
a referenced field to drill down to the next level of referenced
fields.

See Dot walking.

• Certification CI Relationship Conditions: [Desired State audit
types] Define the CI relationships to certify, such as Runs on or
Depends on.

• Certification User Relationship Conditions: [Desired State audit
types] Select the desired user relationship for this configuration
item. The relationship provided in the base system is Log reviewed
by.

• Certification Group Relationship Conditions: [Desired State audit
types] Select the desired group relationship for this configuration
item. The relationship provided in the base system is Backed up
by.

•

Certification Related List Conditions: [All audit types] Select field
values from tables that reference the template table, or user-
defined related lists ,which are created via custom relationships
in the sys_relationship table. To create a condition that evaluates
all servers in the Server [cmdb_ci_server] table for the presence
of Microsoft Word 2007, as referenced in the Software Installation
[cmdb_sam_sw_install] table. The resulting condition is [Software
Installation->Installed on] [Display name] [is] [Microsoft Word
2007].

Check All to include all records in the condition requirements of
the related list. If there are no records in the related list, then:

• If All is checked, the condition requirement is met.

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

• If All is cleared, the requirement is not met.

Note:   By default, the condition builders for relationships display
only suggested relationships. To see all possible relationships,
select the Show all relationships check box on the side of the
form.

a. Select Insert a new row to insert a condition.
You cannot insert an empty condition.

b. Select the green check mark icon to save a condition.
Make sure to save the condition before performing any other
operation. Updating the form does not save the condition.

c. To delete a condition, select the red X beside the condition.
The system marks the condition as inactive.

d. To reactivate a condition, select the gray X.
If another condition for the same field exists, the system prevents
reactivation and warns you of the conflict.

9. Select Submit.
ServiceNow saves the template as version 1.

10. To create another version of the template, change the name, edit
the conditions, or select a different filter.
Updating the template description does not create a new version.

Note:   If you select a filter whose table is incompatible
with the existing template conditions, the system displays
a warning that the conditions cannot be applied.

11. Select Update.
The system saves a new version of the current template and makes it
the Active version. The previous version is marked inactive.

## Clone a Certification template

New templates can be cloned from an existing template.

1. Open the template record to be copied.

2. Make any necessary changes.

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

3. Change the template name or description to distinguish it from the
original.

4. Click Clone.
ServiceNow increments the record number above the highest
template number and sets the version of the new record to 1. A
message appears under the header bar naming the source record
for the clone.Both templates are Active and appear in the record list.
The record list allows you to see the entire history of the template.

## Manage Certification template versions

You can view and manage all versions of a template from the Template
form.

1. Open any version of a template.
The Other Versions related list displays all other versions of this
template, both active and inactive.

2. Click any version in the related list to display the record for that
version.

3. Update the template to create a new version.
The system increments a version of the template when you edit any
field except Description and Active. You can manage the template
versions without returning to the list view.

4. To make an inactive template the current version, open that version,
edit it if desired, and then click Revert.
This action does:

• Deactivates the previously active version of the template.

• Copies the inactive template.

• Makes the new copy the current, active version.

5. Select the Audits related list to view all audits configured to use this
template.

6. Click New to create a new audit record with the template selection
and table pre-populated.

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

## Delete a Certification template

Certification templates can be deleted.

About this task

Only users with the certification_admin or admin role can delete
template versions. You cannot delete a template version that is being
used for an audit.

Procedure

1. To delete a single template version, open that version record and
click Delete.

The system hides the Delete button for templates that are in use.
If you delete the latest, active version of a template, the previous
version of that template is reset to Active.

2. To delete all unused and inactive versions of a template, open any
version of that template and click Delete inactive versions under
Related Links.
This control appears on all versions, whether they are used in an
audit.

3. When prompted, click OK to proceed.
The system deletes only template versions that are not used in an
audit. All protected versions are named in a message that appears in
the header bar.

## Scripted audits

A scripted audit enables users with the certification_admin role to
conduct an audit from a script rather than using restrictive template
conditions.

A scripted audit uses a certification filter to select the records to
audit, and then creates standard follow-on tasks for remediation of any
discrepancies. Use this type of audit to query for any values or states
that a script can define. A scripted audit is a specific audit type that is
activated together with the Desired State plugin. ServiceNow provides a
sample audit script with configuration instructions.

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

## Create a scripted audit

A scripted audit is an audit whose conditions are defined by a script.

1. Navigate to All > Compliance > Scripted Audits > Audits.

An audit type of Scripted filters the list.

2. Click New.

3. Complete the form (see table).

4. Create the audit script.

The Run this script field includes a sample script with instructions
for performing the audit and generating the follow-on tasks. This
field appears only when you access audits from the Scripted Audits
module.

5. Click Submit.

Sample script:

/*
/////////////////////////////////////////////////////
/// This script works with Data Center Zones filter //
/////////////////////////////////////////////////////
var desiredFloorSpaceUsage = 30;
// Valu
e to audit against
var assignToUser = '46d44a23a9fe19810012d100cca80666';
// Beth Anglin
var assignToGroup = '8a5055c9c61122780043563ef53438e3'
;
// Hardware group
var taskMsg = 'See the audit results below for the dis
crepancies that must be addressed';
// API call to retrieve records based on the filter
var gr = new SNC.CertificationProcessing().getFilterRec
ords(current.filter);
// Loop over all records defined by the filter
while(gr.next()) {
var sysId = gr.getValue('sys_id');
// Sys

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

ID of audited record
var floorSpaceInUse = gr.getValue('floor_space_i
n_use');
// Value to audit
// Determine if certification condition passes
or fails
if (floorSpaceInUse < desiredFloorSpaceUsage) {
var columnNameSpace = gr.floor_space_in
_use.getLabel();
// String value of column audi
ted against
// Call create Follow on Task API and
save the returned sys_id for use in logging audit resu
lt fail
// Params:
// auditId - Sys id of the audit recor
d executed
// ciId Sys - id of the configuration i
tem.  Empty string if not a cmdb ci
// assignedTo - Sys id of user to assi
gn task to.  Can be empty
// assignmentGroup - Sys id of group t
o assign task to.  Can be empty
// shortDescr - Short description for
the Follow On Task.  Can be empty
// Return value: Sys id of the created
follow on task
var followOnTask = new SNC.Certificatio
nProcessing().createFollowOnTask(current.sys_id, sysId
, assignToUser, '', taskMsg);
// Call log failed result API
// Params:
// auditId - Sys id of audit record ex
ecuted
// auditedRecordId - Sys id of the rec
ord audited
// followOnTask - Sys id of the follow
on task associated with the audited record(@see audit
edRecordId). Can be empty
// columnDisplayName - Label of the co
lumn audited(ex. Disk space (GB)).  Can be empty
// operatorLabel - Label of the operat
or used to audit the column(ex. is not empty, greater

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

than). Can be empty
// desiredValue - Desired value of the
column.  Can be empty
// discrepancyValue - Discrepancy valu
e.  Can be empty
// isCI - True, if audited record is a
CI. False, otherwise.
// domainToUse - Sys domain of the "ce
rt_audit" record.  Can be empty
new SNC.CertificationProcessing().logAu
ditResultFail(current.sys_id, sysId, followOnTask, col
umnNameSpace, 'greater than', desiredFloorSpaceUsage,
floorSpaceInUse, true);
} else { // If certification condition pass, wr
ite a Audit Result Pass via API
// Params:
// auditId - Sys id of audit record ex
ecuted
// auditedRecordId - Sys id of the rec
ord audited
// isCI - True, if audited record is a
CI. False, otherwise.  Can be empty.
// domainToUse - Sys domain of the "ce
rt_audit" record.  Can be empty.
new SNC.CertificationProcessing().logAu
ditResultPass(current.sys_id, sysId, true);
}
}
*/

New scripted audit table.

Field
Description

Name
Name for this audit.

Filter

Filter to use when the audit type
is Scripted. This field is required
for scripted audits, but is hidden
for all other audit types.

Template

[Required] Template to use
when this audit runs. Audit
type filters the list of available

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

Field
Description

templates and only the active
versions of a template are
available for selection. This field
is hidden when the audit type is
Scripted.

Table
[Read-only] Displays the table for
the template.

Create tasks

Creates follow-on tasks for
correcting discrepancies when
selected. In a scripted audit,
you can create the logic for
either task state by using true to
create a task or false if no task
is created. By default, this check
box is cleared (false) in a new
audit record.

Assignment type

A choice list to select how the
audit assigns the follow-on tasks.
This field is visible only when
the Create task check box is
selected. Choices are:

• User Field: elect a user
reference field on the
table being audited. As an
example, select the user
named in the Managed
by field on the failed
record to perform the tasks.
This selection displays the
Assigned to and Assign to
empty fields. If the reference
field on the record is empty,
the value in the Assign to
empty field is used.

• Specific User: Select a
specific user to perform the

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

Field
Description

tasks. This selection displays
the User field.

• Group Field: Select a group
reference field on the
table being audited. As an
example, select the Support
group from the failed record
to perform the tasks. This
selection displays the Assign
to group and Assign to
empty fields. All members
of the group from the
reference field on the failed
record are assigned to the
tasks. If the reference field
on the record is empty, the
value in the Assign to empty
field is used.

• Specific Group: Select a
specific group to perform
the tasks. This selection
displays the Group field. All
members of the selected
group are assigned to the
tasks.

User

The specific user this audit
assigns to follow-on tasks. This
field is available under these
conditions:

• Assignment type is set to
Specific User.

• Assign to empty is set to
Create Assigned Task, and
Assignment type is set to User
Field.

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

Field
Description

Note:   Ensure that the
specified user has the
certification role.

Assign to group

The group field that defines
which group this audit assigns
to the follow-on task. This field
is available only when the
Assignment type is Group Field.

Group

The specific group this audit
assign to follow-on tasks. This
field is available only when
the Assignment type is Specific
Group and you have selected
Group Field as the assignment
type.

Assign to

The user field that defines
which user this audit assigns
to the follow-on task. This field
is available only when the
Assignment type is User Field.

Assign to empty

The behavior to use if the field
selected in Assign to or Assign
to group is blank on the record
being audited. For example, if a
follow-on task must be assigned
to a manager, but no manager
is identified, the value in this
field determines what happens.
This field appears only when the
Assignment type is User Field
or Group Field. The possible
selections are:

• Do Not Create Task: No
follow-on task is created

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

Field
Description

when the Assign to or Assign
to group field is empty.

• Create Unassigned Task:
Create a follow-on task, but
do not assign it to any user
or group. The task can be
manually assigned later.

• Create Assigned Task:
Create a follow-on task and
assign it to the user or group
specified. If you selected
an assignment type of User
Field, the User field becomes
available. If you selected the
Group Field type, the Group
field becomes available.

The audit automatically creates
follow-on tasks for all records
that have Assign to populated,
regardless of which selection you
make for Assign to empty.

Short description
Brief description of the purpose
of the audit.

Task description

General description of the work
required for the follow-on tasks
created by this audit. All follow-
on tasks created by this audit
inherit this description.

Active

Activates this audit schedule
and generates follow-on tasks at
the scheduled date and time.
Clear this check box to hide
scheduling fields on the form

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

Field
Description

(except Last run date) and not
generate follow-on tasks.

Run

How often to run the schedule
that generates the audit.

• Daily

• Weekly

• Monthly

• Periodically

• Once

• On demand

Day

• If Run is Weekly, the day of
the week when the audit
runs.

• If Run is Monthly, the day of
the month when the audit
runs. If the day is 29, 30 or 31,
for shorter months the audit
runs on the last day of the
month.

Repeat Interval

If Run is Periodically, the
frequency that the audit runs
entered in time, days, or both.
For example, set Days to 10 and
Hours to 14:00:00 to run the audit
every 10 days at 2:00pm.

Starting

If Run is Periodically or Once, the
date and time when the audit
runs.

Time
If Run is Daily, Weekly, Monthly,
or Once, the time of day, on

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

Field
Description

a 24-hour clock, when the audit
runs.

Last run date

[Read-only] The last date and
time the audit ran, either on its
regular schedule or manually.
Audit previews do not update
this field.

Next scheduled run

[Read-only] The next date and
time on which the audit runs.
The system recalculates this field
when you change the schedule.

Audit type

[Read-only] The type assigned
to this audit. The system selects
the audit type based on the
application from which the audit
was created and can be:

• Desired State

• Architecture Compliance

• Compliance

• Scripted

Run this script

Audit script to run. This field is
available only when the audit
type is Scripted. The Audit form
includes a sample script with
instructions for performing the
audit and generating the follow-
on tasks. See Script Methods for
a list of the methods provided
and the accepted parameters.

## Script methods

ServiceNow provides four methods for creating the audit script.

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

Script methods

Name
Description
Parameters

getFilterRecords

public GlideRecord
getFilterRecords(String
filterId)

filterID: The sys_id of
the filter to use.

logAuditResultPass

public void
logAuditResultPass(Stri
ng auditId, String
auditedRecordId,
boolean isCI, String
domainToUse)

auditId: Sys_id of audit
record executed

auditedRecordId:
Sys_id of the record
audited.

isCI: True, if the
audited record is a CI,
false if otherwise.

domainToUse:
Sys_domain of the
cert_audit record.

logAuditResultFail

public void
logAuditResultFail(Strin
g auditId, String
auditedRecordId,
String followOnTask,
String
columnDisplayName,
String operatorLabel,
String desiredValue,
String
discrepancyValue,
boolean isCI, String
domainToUse)

auditId: Sys_id of audit
record executed.

auditedRecordId:
Sys_id of the record
audited.

followOnTask: Sys_id
of the follow-on task
associated with the
audited record and
can be an empty
string.

columnDisplayName:
Label of the column

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

Name
Description
Parameters

audited. For example,
Disk space (GB).

operatorLabel: Label
of the operator used
to audit the column.
For example, is not
empty or greater than
can be the label.

desiredValue: Desired
value of the column.

discrepancyValue:
Discrepancy value.

isCI: True, if the
audited record is a CI,
false if otherwise.

domainToUse:
Sys_domain of the
cert_audit record.

createFollowOnTask()

public String
createFollowOnTask(St
ring auditId, String ciId,
String assignedTo,
String
assignmentGroup,
String shortDescr)

auditId: Sys_id of
the audit record
executed.

ciId: Sys_id of the
configuration item.
This string is empty
when the table is not
extended from the
cmdb_ci table.

assignedTo: Sys_id of
the assigned user of
the task. This string can
be empty.

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

Name
Description
Parameters

assignmentGroup:
Sys_id of the group the
task is assigned to. This
string can be empty.

shortDescr: The text
to use for the short
description of the
follow-on task.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

73

Zurich ServiceNow AI Platform Capabilities

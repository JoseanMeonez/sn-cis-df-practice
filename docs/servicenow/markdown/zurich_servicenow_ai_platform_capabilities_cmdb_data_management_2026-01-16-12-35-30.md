# zurich_servicenow_ai_platform_capabilities_cmdb_data_management_2026-01-16-12-35-30

*Source: zurich_servicenow_ai_platform_capabilities_cmdb_data_management_2026-01-16-12-35-30.pdf*

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

## CMDB data management

The integrity and health of the CMDB is essential for the various features
that depend on the data in the CMDB. As the CMDB grows and
infrastructures change, the CMDB can accumulate stale, duplicate,
or outdated CIs and therefore no longer accurately reflect the IT
infrastructure and applications in the organization.

The CMDB Data Manager is an essential tool where you can create,
publish, and manage policies that reflect organizational needs for
data management. The CMDB Data Manager is a comprehensive
and integrated solution that scales to large CMDBs. It supports bulk
management of CI life cycle operations such as deletion, archival, and
attestation. Use the CMDB Data Manager to automate and govern CI life
cycle operations to help maintain the CMDB in a healthy and efficient
operational state.

Managing duplicate CIs is also an important data management task that
helps maintain the health of the CMDB.

## Working with CMDB Data Manager

CMDB Data Manager is a policy-driven framework for bulk management
of CI life-cycle operations such as deletion, archival, and attestation. The
CMDB Data Manager is a comprehensive and integrated solution that
scales to large CMDBs and copes with rapid changes in a cloud-based
world.

Large CMDBs can over time accumulate large amounts of stale CIs
that can impact overall performance. Custom mitigating solutions can
be difficult to develop and to maintain, and are also prone to errors.
The CMDB Data Manager is the tool where you can create, publish,
and manage policies. Create policies to automate and govern CI life-
cycle operations to help maintain the CMDB in a healthy and efficient
operational state.

Use the CMDB Data Manager to create policies that represent your
organizational processes for managing the life cycle of CIs such as:

• Retire all computers without owners that were created more than a
year ago ('Retire' policy type).

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

• Archive all Linux servers in the Seattle datacenter that haven't been
updated for six months ('Archive' policy type).

• Delete all containers that haven't been discovered in the past week
('Delete' policy type).

• Attest all the CIs in a specified location (Attestation policy type).

• Approve cascade-delete, archive, or retire life-cycle tasks generated
by dependent CI management.

• Delete orphan, stale, or irrelevant records in non-CMDB related
tables. The non-CMDB Related tables in the Related Entry
[cmdb_related_entry] table have references to CMDB tables. A CI in
a related table can, for example, become orphan if the referenced CI
in the CMDB is deleted ('Delete CMDB Related Entry' policy type).

• Certify that attributes have a specific value required for the business.

You can apply CMDB Data Manager policies only to classes that extend
the Configuration Item [cmdb_ci] table.

CMDB Data Manager experience in CMDB Workspace

You can use the CMDB Workspace landing page and its views to fully
administer CMDB Data Manager, access high-level analytic and counts
for its policies and tasks, and review your tasks. For information about
using the CMDB Data Manager in CMDB Workspace, see CMDB Data
Manager experience in CMDB Workspace.

Terms

Policy

A CMDB Data Manager policy captures the overall management plan
for a life-cycle event, such as CI retirement. A policy is associated with a
subflow (the policy subflow) which creates the tasks (the policy tasks) for
the target CIs of the policy. A policy is configured with a policy type and
the policy tasks perform operations associated with that policy type, such
as archiving or deleting a CI record. Also, you can configure a policy to
require an approval.

The policy type, policy subflow, and policy tasks are all aligned to a
specific CI life-cycle event. For example, a policy set with the delete

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

policy type is associated with the delete subflow, and its policy tasks
handle the deletion of CIs.

A daily scheduled job processes all published CMDB Data Manager
policies.

Policy subflow

The policy subflow contains the underlying logic to process a life-cycle
event such as retire or delete. If the policy is configured to require
approval, then the policy subflow runs only after a policy task is
approved.

The base system provides several common subflows such as delete,
archive, and retire, which you can use with policies. You can also create
custom subflows for your organization.

Policy task

A separate task is created and assigned to each unique Managed By
Group value within the set of target CIs in a policy. A policy task triggers
the policy subflow, tracks the set of target CIs for the task, and handles
the approval of the task, if necessary.

If a policy requires an approval, the policy tasks don’t trigger the policy
subflow until a member of the group assignment in the Managed by
Group attribute of the target CIs, approves the tasks. If a task is rejected
or if the Managed by Group attribute is empty, the task is assigned to an
administrator who must manually intervene to resolve the task.

If a policy isn't configured to require an approval, then the policy tasks
are automatically approved.

CI exclusion list

A set of CIs to which policies of a specified type don't apply.

Policy types

You can create policies of the following types:

Delete

Use to remove a CI from its current table with no option to restore the CI
into an active state.

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

Retire

Use to retire a CI while keeping the CI active in list views and in processes
such as CMDB Health.

Attestation

Use to assign and process attestation tasks that verify the existence
of actual IT infrastructure and applications that you own. As CIs are
continuously ingested into the CMDB from various data sources, attesting
CIs support the integrity of the CMDB. For more information about using
the Attestation policy type, see CIs attestation.

Archive

Use to remove a CI from its current table and store the CI in a separate
archive table for temporary retention. Archiving a CI excludes the CI from
views and from features such as maps and the relations formatter. During
the retention period, you can restore CIs into active state. At the end of
the retention period, archived CIs are deleted from their archive table.

Delete CMDB Related Entry

Use to clean up any irrelevant or stale data from related tables to help
keep CMDB data healthy and relevant as the state of referenced CIs
change.

Related tables, such as the Serial Number [cmdb_serial_number] table,
aren't part of the CMDB hierarchy but still qualify as CMDB data. Related
tables don't inherent from the Configuration Item [cmdb_ci] table, but
have at least one column that references a CMDB CI. Related tables are
specified in the Related Entries [cmdb_related_entry] table.

Certification

Use to certify that specific attributes are of a specific value.

You can implement your Retire, Delete, and Archive policies so that
they follow Common Service Data Model (CSDM) standards where for
example, CIs are archived and deleted only when a CI is already
in retired state. When you create these life-cycle policies, the system
applies processes to manage any dependent CIs that might be left
behind. For more details about these processes and about verifying that
the feature is enabled, see Dependent CIs management.

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

ServiceNow AI Platform® data archiving

The functionality that the Archive policy type in CMDB Data Manager
provides, relies and extends the ServiceNow AI Platform® data archiving
feature, applied specifically for CMDB CIs. While processing an Archive
policy to archive CMDB CIs, CMDB Data Manager uses components and
processes of ServiceNow AI Platform® data archiving in the following
ways:

• The Archive Rule [sys_archive] table contains the ServiceNow AI
Platform® archive rules including the Archive Configuration Items CMDB
archive rule which CMDB Data Manager Archive policies use.

• Data Manager relies on the Archive scheduled job to run (every hour
by default) and process CMDB Data Manager archive policies. The
Archive scheduled job is stored in the Schedule Item [sys_trigger] table.

• In the ServiceNow AI Platform® table Archive Job Execution Chunks
[sys_archive_run_chunk], the Keys attribute contains the sys_ids of the
CMDB CIs to be archived (where Rule ID is the CMDB archive rule ID).

•

Archived records are stored in the ServiceNow AI Platform® archive
tables, which are prefixed by 'ar_'. In a similar way, the first time that a
CMDB archive job runs, it creates an archive table for each CMDB class
(prefixed by 'ar_cmdb'). The initial CMDB archive task, therefore, takes
longer than subsequent CMDB archive tasks.

For each Data Manager archive policy, the system batches the policy
CIs to be archived into batches of 1000 CIs. The sys_archive_run_chunk
table contains a record for each of the batches.

CMDB archive tables, such as ar_cmdb_ci_computer, are listed under
All > System Archiving > Archive Tables.

When using the CMDB Data Manager to archive CIs, you can also
directly apply ServiceNow AI Platform® data archiving features, such as
restore CIs into active state during a CIs retention period.

CI life cycle management

You can use life-cycle policies in CMDB Data Manager to manage the
life cycle of CIs. Those life-cycle policies use retirement definitions that
specify the retirement state for classes in your organization and support

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

the transition of CIs through life cycle stages. For more information
about accessing and managing retirement definitions, see Retirement
definitions.

In general, CIs that are no longer needed should be retired. Then, to
complete the CI life-cycle, retired CIs should be deleted or archived
according to business needs. The following high level steps describe how
to manage CIs' life cycle:

1. Use a non-production instance as a safe environment for configuring
and testing life-cycle management in your organization.

2. Choose the CI class for which you want to define a retirement
definition while carefully considering derivation. Due to derivation,
the retirement definition that you are specifying for a class, is also
in effect for all child classes that don’t have their own retirement
definition.

3. Specify the retirement definition for the class.

4. Create a retirement policy targeting the CIs that you want to retire.

5. Create a delete or an archive policy targeting the retired CIs.

6. After testing and verification that the entire life-cycle management
plan works as intended, transfer all of those configurations to the
production instance.

The life cycle state of a CI affects the CIs visibility and inclusion in ongoing
CMDB processes:

• A retired CI isn't excluded from any views or processes such as CMDB
Health.

• An archived CI no longer exists in its active table and instead it's
stored in a separate archive table. Archived CIs are no longer visible or
included in processes such as list views, maps, and relations formatters.
Archived CIs can be retained for a specified retention period before
being deleted from the archive table. During the retention period,
archived CIs can be manually restored into an active state by using
the ServiceNow AI Platform® feature to restore CIs into active state.

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

Note:   Deleting a CI is an irreversible operation. A deleted CI no
longer exists in the table that it belonged to and there's no way to
restore it to an active state.

Configure the environment for CMDB Data Manager

Prepare your environment for using the CMDB Data Manager:

1. Some policy types such as the life-cycle policies Retire, Archive,
and Delete, require that an active retirement definition exists for
each targeted class in the policy. This requirement doesn't apply
to all policy types. For example, this requirement doesn't apply to
the Attestation policy type. If you attempt to create a policy of a
policy type for which this requirement applies but isn't met, an error
message appears and the operation fails.

2. You can streamline approval of policies by populating the Manage
by Group attribute of CIs that you plan to target in policies. Use the
CI Class Manager to populate that attribute for an entire class, in
a single synchronization operation. For more information about this
data synchronization, see Set the group for a CI or an entire class of
CIs. If the Managed by Group attribute isn't populated for a CI, then
the approval process is directed to the administrator.

## CMDB Data Manager experience in CMDB Workspace

Use the CMDB Data Manager in CMDB Workspace to administer policies,
CIs life-cycle and attestation tasks, view analytics about on-going CMDB
Data Manager processes, and to approve or reject assigned tasks.

Use the CMDB Workspace landing page and its views to administer
CMDB Data Manager, to access overall analytic and counts for its
policies and tasks, and review your tasks:

• Use the Management view in CMDB Workspace to create and track
policies, and to manage exclusion lists and retirement definitions.

• Use the Important actions tile on the CMDB Workspace landing page
to access data attestation and life cycle approval tasks such as
reassignment requests and unassigned overdue tasks. Drill down these
task cards to see further details about the tasks.

•

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

Use the My work tile on the CMDB Workspace landing page to access
all open tasks, which are assigned to you, or to the group assigned
in the Managed by Group attribute and which you're a member
of. For CMDB administrators, any unassigned tasks are also included
for reassignment. Review and process all tasks. Review and process
attestation tasks by checking the physical existence of IT infrastructure
or applications associated with the CIs in the tasks.

•

Use the My Work view in CMDB Workspace to access attestation and
non-attestation tasks that are assigned to you or to an assignment
group that you belong to in accordance with CMDB Data Manager
policies. Overdue attestation tasks appear in a separated Overdue
tasks list.

Manage policies in CMDB Data Manager in CMDB Workspace:

• Create a CMDB Data Manager policy

• Review CMDB Data Manager tasks

• Review CMDB Data Manager attestation tasks in CMDB Workspace

• Manage retirement definitions for CMDB Data Manager

• Manage exclusion lists for CMDB Data Manager

## Administer CMDB Data Manager

As a CMDB administrator, you can create policies, manage CI
attestation, manage CI exclusion lists, access CMDB Data Manager
insights, and access subflows and settings that are used in the CMDB
Data Manager in CMDB Workspace.

## Get started with CMDB Data Manager

The Data Manager overview page in CMDB Workspace provides a
dashboard view of Data Manager tasks, and lets you get started in using
the CMDB Data Manager.

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

Before you begin

Role required: sn_cmdb_admin

Procedure

1. Navigate to Workspaces > CMDB Workspace and then select
Management in the CMDB Workspace menu bar.

2. Select the Data Manager link in Management tools, in the Manage
section.

3. Select Data Manager overview in the left navigation bar.
The Data Manager overview page provides the following cards:

Open tasks

Count of the open tasks created for Data Manager policies.

Drill down the card to open a list view with details of the tasks
associated with the card.

Unassigned tasks

Count of the open tasks created for Data Manager policies, which
aren't assigned.

Drill down the card to open a list view with details of the tasks
associated with the card.

Pending tasks

Tasks in Pending state, such as archive tasks where archive is still
being processed.

Closed incomplete tasks

Tasks that encountered errors while processing, resulting with the task
not completing successfully. Such tasks are in a Closed Incomplete
state.

Overdue tasks

Count of tasks with a due date, such as attestation tasks, whose due
date has passed.

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

Aging tasks

A bar chart showing counts of tasks without a due date and
with no activity for over the number of days specified by the
sn_cmdb_ws.glide.cmdb.data.manager.aging.policy.task.timeframe
system property (30 by default).

Policies failing evaluation

Policies whose evaluation failed at some point and are in an error
state. These policies require your attention, and after resolving any
issues, you can publish them again.

Workload

• Groups: Tasks that are assigned to a group.

• Individuals: Tasks that are assigned to individual users.

What to do next

• Create a CMDB Data Manager policy.

• Manage retirement definitions for CMDB Data Manager.

• Manage exclusion lists for CMDB Data Manager.

• View CMDB Data Manager analytics.

• View properties and other settings for CMDB Data Manager by
selecting Settings in the left navigation pane. For details about the
system properties associated with those settings, see Components
related to CMDB Data Manager.

## Manage retirement definitions for CMDB Data
## Manager

Use CMDB Workspace to create, delete, edit, or activate retirement
definitions in your organization, for a class. Tables that are targeted in
CMDB Data Manager life-cycle policies, must be associated with an
active retirement definition. Target CIs in Retire policies, are set to match
their associated class retirement definitions.

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

Role required: sn_cmdb_admin

About this task

Some retirement definitions in the base system are inactive and you
must activate any retirement definition that you want to use with a
CMDB Data Manager life-cycle policy by setting its Active attribute to
true. Retirement definitions are stored in the CMDB Retirement Custom
Definitions [cmdb_retirement_custom_definitions] table.

When a CMDB Data manager retires a CI, ensure that any of its
dependent CIs are also retired and don't remain as orphan CIs, by
enabling management of dependent CIs. Orphan CIs can impact the
consistency, accuracy, and integrity of the CMDB.

• For information about enabling and managing dependent CIs,
especially in the context of cascade-retire, cascade-archive, and
cascade-delete, see Dependent CIs management.

• For details and definitions of independent and dependent CIs, see

CMDB classifications and class dependency.

Note:

• Always be aware of the automatic derivation of retirement
definitions throughout the class hierarchy. For example, an active
retirement definition for the Configuration Item [cmdb_ci] class
can potentially be in effect throughout the entire CMDB hierarchy
(aside from classes with their own retirement definition).

• You can't deactivate (or delete) the retirement definition of the
Configuration Item [cmdb_ci] class.

• Each CMDB class can be associated with only a single retirement
definition.

Procedure

1. Navigate to Workspaces > CMDB Workspace and then select the
Data Manager quick link on the Home view.

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

2. In the Get started area on the Data Manager overview page, select
Manage retirement definitions.

3. On the Data Manager settings page, review the Retirement
definitions list view.

a. (Optional) Drill down to a definition and then, on the Retirement
definition form, toggle the Active switch to activate or
deactivate a definition.

b. (Optional) Edit the conditions on the definition.

c. Select Save definition.

4. On the Data Manager settings page, select Add definition.

5. Fill out the Retirement definition form and then select Save definition.

Field
Description

Active
Toggles the retirement definition
between active and inactive.

Table

Table that the retirement
definition applies to. The
retirement definition will be
derived by all child classes of the
specified parent class.

Condition builder

Condition that reflects on
what retirement means in the
organization.

Target CIs in Retire policies that
belong to the specified table
are set as specified in the
retirement definition. You can,
therefore, only use AND clauses
in the definition. OR clauses
aren't applicable.

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

Delete a CMDB Data Manager retirement definition

Delete a retirement definition that is no longer needed by CMDB Data
Manager, in CMDB Workspace.

Before you begin

The following restrictions are in effect:

• The retirement definition that you want to delete must be in an inactive
mode (Active = false).

• The retirement definition for the Configuration Item [cmdb_ci] class
can't be deleted.

Role required: sn_cmdb_admin, data_manager_admin

About this task

Procedure

1. Navigate to Workspaces > CMDB Workspace and then select the
Data Manager quick link on the Home view.

2. In the Get started area on the Data Manager overview page, select
Manage retirement definitions.

3. On the Data Manager settings page, in the Retirement definitions tile
select the retirement definition that you want to delete.

4. On the Retirement definition page, select Delete definition.

5. In the Deleted retirement definition dialog box, select Delete.

Result

After the deletion, a retirement definition for the class is derived from a
parent class.

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

## Manage exclusion lists for CMDB Data Manager

Create and manage exclusion lists for the various policy types used in
CMDB Data Manager, in CMDB Workspace. Policies of the specified type
won't target CIs and other records in the exclusion list for that policy type.

Before you begin

Role required: sn_cmdb_admin

About this task

Note:   The Certification policy type doesn't support exclusion lists.

Procedure

1. Navigate to Workspaces > CMDB Workspace and then select
Management in the CMDB Workspace menu bar.

2. Select the Data Manager link in Management tools, in the Manage
section.

3. Select Excluded records in the left-side bar.
The Excluded records list view shows lists of all records currently
excluded, grouped by policy type. You can expand any group to
show its CIs and other records and then drill down to any record.

4. (Optional) Remove excluded records from the exclusion list:

a. Expand a policy type group to show its list of excluded records.

b. In the list view, select the records that you want to remove from
the exclusion list.

c. Select Remove from list

d. In the Confirm removal from exclusion list dialog box, select
Confirm.
The selected records are removed from the exclusion list and can be
targeted for the policy type.

5. (Optional) Add records to an exclusion list:

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

a. Select Exclude Records and fill out the Data Filter form.

Field
Description

Tables
Table from which to select CIs
or records for the exclusion list.

Filter conditions

Use the condition builder to
specify the criteria that CIs
or records from the specified
Tables must meet to be
included in the exclusion list.

Related List Condition

Add a condition that is
based on related lists that are
associated with the records
that you want to exclude.

b. Select Apply filters and then review the Search results list.

c. Select the records that you want to add to exclusion lists and
then select Continue.

d. On the Select policy type page, select the policy types for which
to exclude the selected records and then select Continue.

e. Review the details of the exclusion on the summary page and
then select Save.

## Create a CMDB Data Manager policy

Create a CMDB Data Manager policy in CMDB Workspace to
automatically process CIs life-cycle events such as deletion. Applying
consistent and standard life-cycle policies to CIs helps maintain the
health of the CMDB.

Before you begin

•

The life-cycle policies Retire, Archive, and Delete, require that an active
retirement definition exists for each targeted class in the policy. If you

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

attempt to create a policy of a policy type for which this requirement
applies but isn't met, an error message appears and the operation fails.

For more information about retirement definitions, see Retirement
definitions.

• Verify that any custom subflow that you want to associate with a policy
exists:

1. • Navigate to Workspaces > CMDB Workspace and then select
Management in the CMDB Workspace menu bar.

2. • Select the Data Manager link in Management tools, in the Manage
section.

3. • Select Subflows in the navigation bar on the left.

4. • Review the subflows on the Data Manager subflows page, and drill
down to a subflow to open it in Workflow Studio.

5. • Select Create new subflow to create a new subflow in Workflow
Studio.

• To require a review and an approval for a policy task: Ensure that the
Managed By Group attribute is populated in target CIs and that the
assigned users have the privilege to approve the policy tasks.

• When Asset Management is activated, check if there's an asset record
associated with that CI before retiring the CI. Check the associated
asset record, if there's one, and verify that its asset state (install_status) is
Retired.

Role required: sn_cmdb_admin

About this task

Specify for each policy a policy type, a subflow for life-cycle policies, a
set of CIs to operate on as target CIs, and any other options specific
to the selected policy type. Target CIs must typically be from classes
extending the Configuration Item [cmdb_ci] table, and with the Delete
CMDB Related Entry policy type, also tables in the Related Entries
[cmdb_related_entry] table. However, the Certification policy type for
example, also supports non-CMDB tables. Many fields dynamically
appear on the form based on how you set previous fields and some fields
are specific to the policy type that you set.

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

Set condition filters to specify the initial set of CIs that the policy applies
to. You can then further narrow down the initial set of CIs by using a CI
exclusion list for the policy type. During the final preview of the policy, or
from a policy task, you can select individual CIs to also exclude for the
policy type. In addition, for operations that require that CIs are in a retired
state, retirement definitions are enforced. The policy eventually applies to
the resulting set of CIs, after applying all those filters.

Note:   CMDB Data Manager limits the number of target CIs per
task to 10,000. Therefore, when a task exceeds that number, Data
Manager automatically creates as many additional tasks as needed
to include all the CIs for the task. For example, if you target 30,000
CIs in an attestation task, Data Manager breaks down that task into
three tasks, each targeting 10,000 CIs.

For more information about life-cycle state definitions and other
concepts for working with the CMDB Data Manager, see Working with
CMDB Data Manager.

Procedure

1. Navigate to Workspaces > CMDB Workspace and then select
Management in the CMDB Workspace menu bar.

2. Select the Data Manager link in Management tools, in the Manage
section.

3. Select Policies in the left-side bar.
For information about the Policies page, see View CMDB Data
Manager policies.

4. Select Create new policy.

5. Fill out the General information form and then select Continue.

Field
Description

Name
Unique name for the policy.

Description
Description for the policy.

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

Field
Description

Policy type

Life-cycle event or data
management action, such as
Delete or Attestation, that this
policy manages, indicating the
type of actions to perform on
target CIs.

Your Policy Type setting
determines which fields appear
in the forms that follow.

Work notes
Notes that are internal and
visible only to administrators.

6. Fill out the Data Filter form.

a. Fill out filter conditions for the target CIs and records for the
policy.

Field
Description

Table

Table from which to select
target CIs or records for the
policy. Only classes that you
have read access to, are
available for selection.

Filter conditions

Use the condition builder to
specify the criteria that CIs
from the specified Table must
meet to be included as target
CIs for the policy.

Select New condition set to
add a condition to the filter.

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

Field
Description

Related List Condition

Add a condition that is
based on related lists that
are associated with the target
records for the policy.

b. Select Apply filters and then review the results of the impact
analysis.
This analysis estimates the number of CIs that the policy applies to
based on the policy filters, any CI exclusion lists, and the life cycle
stage of CIs. For example:

• If the policy type is retired, CIs that meet the policy filters
but are already in a retired state according to the class
retirement definitions, aren't targeted for the policy.

• If the policy type is archive or delete, CIs that meet the policy
filters but aren't retired according to the class retirement
definitions, aren’t targeted for the policy. A filter on the Life
Cycle Stage or the Life Cycle Stage Status attributes has no
effect if the respective class retirement definition is based on
those attributes.
Review the lists in the following tabs:

• Included records: You can select records to be excluded
from the policy, and select Exclude records.

• Excluded records: Select records to be included in the policy,
and select Include records.

Note:   The Excluded records tab doesn't appear when
the policy type is Certification.

c. Select Continue.

7. Fill out the Assignment form and then select Continue.

a. Set the Assignment type and then the Task assignment field
that appears, to specify the type of assignment and the table
columns to use for assigning the policy tasks. The drop-down
list in Task assignment is dynamically populated with columns
in the table that the policy is created for, and that reference
Assignment type tables, as follows:

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

•

User Field: Assigns policy tasks to a user in the user field
specified in Task assignment. The drop-down list in Task
assignment contains fields in the table set by the data filter,
that reference the User [sys_user] table (such as Attested by
and Assigned to).

During assignment, records will be grouped based on the
selected column, allocated to tasks, and then the tasks will
be assigned to the resulting users.

•

User Group Field: Assigns policy tasks to the user group in the
user group field specified in Task assignment. The drop-down
list in Task assignment contains fields from the table set in the
data filter, that reference the Groups [sys_user_group] table
(such as Change Group and Support Group).

During assignment, records will be grouped based on the
selected column, allocated to tasks, and then the tasks will
be assigned to the resulting user group.

• Specific User: Assigns policy tasks to the user specified in Task
assignment. The drop-down list in Task assignment contains
users with the data_manager_user role.

• Specific User Group: Assigns policy tasks to the user group
specified in Task assignment. The drop-down list in Task
assignment contains user groups that are either directly
associated with the data_manager_user role, or contain at
least one user with the data_manager_user role.
In the User Group Field and User Field you can use dot-walking by

selecting the search icon for the field:

. In the selection
dialog box, drill down lists by expanding or selecting list items that
are links (usually appear in a unique text color).

b. For certification and attestation tasks, set the If task assignment
field is empty field to create assigned or unassigned tasks in
cases where the specified task assignment field is empty. If
you select to create an assigned task, then depending on the
Assignment type setting, select the user or user group to assign a

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

task to in that situation. Unassigned tasks are later reviewed by an
administrator for assignment.

8. Fill out the Options form and then select Continue.
The options that appear depends on whether they are relevant to
the selected policy type. Therefore, some of the following options
don't appear on your form. For example, not all policy types are
associated with a subflow.

Field
Description

Days to complete

Maximum number of days that
policy tasks must be completed
by.

If notifications are enabled for
certification or attestation tasks,
then this number is used to
calculate the milestones for
sending notifications. The full
time (100%) interval starts when
a task is created and ends when
the number of days to complete
the task arrives. Notifications
are sent if a task isn't closed
when 50%, 70%, and 90% of
that interval passes. For more
information about setting those
notifications, see Components
related to CMDB Data Manager.

Subflow

A subflow with the actions that
will run on the target CIs for the
policy.

The subflow typically matches
the policy type. For example,
if Policy type is set to Delete
CMDB Related Entry, then set

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

Field
Description

Subflow to Delete Related Entry
Configuration Item.

Needs review

Option to require a review and
an approval of the policy tasks,
by the group assignment in CIs'
Managed by Group attribute or
by an administrator.

Otherwise, all policy tasks are
approved automatically.

Retention time

The length of time for retaining
archived CIs in the archive table
before they're deleted.

During the specified retention
period, you can use the
ServiceNow AI Platform® data
archiving feature to restore
archived CIs.

Note:   You can't use
the CMDB Data Manager
to re-archive a CI that
was previously archived and
restored.

Display fields

One or more fields that appear
in list views in Data Certification
tasks, that uniquely identify the
records that require certification.

The selected fields can't overlap
fields in Certification fields.

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

Field
Description

Certification fields

One or more fields whose
value requires verification and
certification.

The selected fields can't overlap
fields in Display fields.

Allow field updates

Option to allow certification task
reviewers to update field values
while reviewing CIs.

• When selected, certification
task reviewers can update
field values in order to certify
a CI.

• When clear, certification task
reviewer can't update field
values, and therefore reject
CIs that aren't compliant.

Allow empty field values

Option to allow users to certify
CIs with empty attributes:

• When selected, certification
task reviewers can certify or
fail certification of a CI with
an empty attribute.

• When clear, certification
task reviewers can fail
certification of a CI with an
empty attribute but aren't
able to certify that CI.

Instructions

Any instructions to assigned
users, to help them complete the
tasks.

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

9. Fill out the Schedule form and then select Continue.

Field
Description

Schedule

Recurring schedule for how often
and when to run the task. The On
demand option doesn't set any
recurring schedule for running
the policy.

To learn how to run a task
configured with On demand, see
'What to do next' below.

Your setting determines which
other fields appear on the form.

Start time
Time in the day to start running
the policy.

Day of the week
Day of the week to run the
policy.

On
Day of the month to run the
policy.

Start day and time
Date and time of first run of the
policy.

Run after every

Interval (by days) between
subsequent runs after running
the policy for the first time.

Run policy scheduled job as

User to set the Run as field with,
in scheduled jobs for attestation
and certification tasks.

By default, the drop-down list
is populated with users in the
Data Manager Scheduled Job

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

Field
Description

Users user group and the field
is set to the user specified
by the Scheduled job default
user property (DataManager Job
Runner). For more information
about this property and the
Scheduled job default user user
role, see Components related to
CMDB Data Manager.

10. Review the policy details on the Review form, and then select Publish
policy to activate the policy or Save & Exit to save the policy as a
draft.
You can later continue to configure a draft policy, and then publish it
when it's ready.

Result

After you publish a policy:

•

A daily scheduled job processes the published policy and policy tasks
are assigned according to the policy settings. If the policy is associated
with a subflow, then policy tasks trigger the policy subflow. Policy
execution issues are recorded in an error log with notifications sent to
the CMDB Data Manager administrator.

If the policy is configured to require an approval for its tasks, then
email notifications are sent to members of the assignment group in the
Managed by Group attribute of the CI. If the policy is associated with a
subflow, then a policy task triggers the policy subflow only after the task
is approved.

• If the policy is associated with a subflow, then after a policy task is
complete, the policy subflow closes the task. For an Attestation policy
(which isn't associated with a subflow), a user must process all CIs in the
task and submit the task to close it.

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

• For Attestation policies, attestation tasks are assigned to users as
specified, and those tasks appear in the CMDB Workspace when those
users log in.

• For some policy types, such as Delete, the list of the target CIs is rolled
up in a CSV file that is then attached to the task for tracking purposes.

• Stale tasks are set to Closed Canceled by a daily scheduled job. A
task becomes stale when it's still open and not approved after at least
90 days. The number of days after which a task is considered stale
is determined by the cmdb.data.manager.stale.task.life.in.days system
property.

What to do next

• Publish a draft CMDB Data Manager policy.

• On the Policies page, in the Published policies list view, select a policy
to see policy details on a policy form. Select View Policy to see the
settings in all of the policy form pages.

• On the Policies page, in the Published policies list view, select a policy
that you want to deactivate. On a policy form select Deactivate Policy
to temporarily prevent the policy from running.

• Select View Open Tasks in the Open Policy Tasks tile to track the
processing of policy tasks in the CMDB Data Management Task Control
list view. The Success Percent column shows the percentage of CIs in
the task for which the task is completed. A CI is counted as complete
in an archival task only after the archival process has been fully
completed for the CI (and isn't counted as complete while the CI is
initially staged for archival for example).

• For On demand policies, the system generates a scheduled job
prefixed with the policy name. To run such task:

1. • Navigate to System Definition > Scheduled Jobs.

2. • Select the scheduled job for the task policy that you want to run.

3. • On the scheduled job form, select Execute Now.

• Users log into CMDB Workspace to review and process attestation tasks

assigned to them.

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

• Users log into CMDB Workspace to review and process non-attestation
tasks assigned to them.

## Publish a draft CMDB Data Manager policy

If you created a draft Data Manager policy, or imported legacy
certification schedules, you can activate that draft policy by publishing it
in CMDB Workspace.

Before you begin

Role required: sn_cmdb_admin

Procedure

1. Navigate to All > Workspaces > CMDB Workspace and then select
Management in the CMDB Workspace menu bar.

2. Select the Data Manager link in Management tools, in the Manage
section.

3. Select Policies in the left-side bar in the Data Manager overview
page.

4. Select the Draft policies list view on the Data Manager policies page.

5. Select the policy that you want to publish and then, on the policy
form, select Edit Policy.

6. Review any policy settings by selecting the pages to review in the
left-side bar.

7. Select Review in the left-side bar and then, on the Review form
select:

a. Publish Policy to activate the policy.

b. Save & Exit to save any changes and keep the policy in draft
mode.

What to do next

Deactivate a policy to temporarily prevent the policy from running:

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

1. On the Policies page, select the Published policies list view.

2. Select a policy that you want to deactivate.

3. On a policy form select Deactivate Policy.

## View CMDB Data Manager policies

View Data Manager policies on a dashboard view in CMDB Workspace,
with a timeline of upcoming scheduled policies, counts, and grouped by
policy status.

Before you begin

Role required: sn_cmdb_admin

Procedure

1. Navigate to Workspaces > CMDB Workspace and then select
Management in the CMDB Workspace menu bar.

2. Select the Data Manager link in Management tools, in the Manage
section.

3. Select Policies in the left-side bar.
Select a tab on the Data Manager policies page:

• Published policies: Provides the following cards:

Upcoming scheduled policies

Timeline showing scheduled policies across time. On the timeline,
you can:

• Point to indicators to show details about a scheduled policy.

• Zoom in or out to extend or shorten the time span of the
timeline.

• Go forward or backward in time.

• Show or hid the timeline legend, where you can toggle the
Attestation Policy switch to show or hide attestation policy
indicators on the timeline.

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

Policies

Pie chart showing the breakdown of policies by policy type.

Published policies

List view of policies that are published. You can drill down a
policy to show the policy form view with further details about the
policy.

• Draft policies: Policies in draft state.

• De-activated policies: Policies that have been de-activated and
therefore aren't active.

• Policies failing evaluation: Policies that are invalid and therefore
require your attention.

What to do next

• Create a CMDB Data Manager policy

• Manage retirement definitions for CMDB Data Manager

## View CMDB Data Manager analytics

The CMDB Data Manager in CMDB Workspace provides charts and
counts that show the overall state of Data Manager policies in the
organization. Review these details to track progress and to identify any
problems that require your attention.

Before you begin

Role required: data_manager_admin or sn_cmdb_admin

Procedure

1. Navigate to Workspaces > CMDB Workspace and then select
Management in the CMDB Workspace menu bar.

2. Select the Data Manager link in Management tools, in the Manage
section.

3. Select Analytics in the left navigation bar.

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

The Data Manager analytics page provides the following charts:

CIs processed by lifecycle policies

Counts of CIs processed by each type of lifecycle policy type such as
Delete and Archive, over the past six months.

Average time to close tasks

Average number of days it took to close tasks, by general policy type
such as lifecycle and attestation, over the past six months.

Closed complete vs closed incomplete tasks

Number of tasks per month, that were closed complete and
incomplete, over the past year.

Policy execution time

Number of policies per day, broken by the length of execution time,
over the past month.

## Review CMDB Data Manager tasks

Review Data Manager tasks (such as life-cycle tasks) that are assigned
to you, to an assignment group that you belong to, to people you
manage, or to members of a group that you are the manager of. All in
accordance with CMDB Data Manager policies. During the review, you
can approve, cancel, reject, or reassign a task.

Before you begin

Role required: sn_cmdb_user, sn_cmdb_editor, or sn_cmdb_admin

Canceling a life-cycle task is available only for tasks that are in the
'Not started' status, and the required role is data_manager_admin or
sn_cmdb_admin.

About this task

• To review attestation tasks, see Review CMDB Data Manager
attestation tasks in CMDB Workspace.

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

• To review certification tasks, see Review certification tasks in CMDB
Workspace.

Procedure

1. Navigate to Workspaces > CMDB Workspace and then select My
Work in the CMDB Workspace menu bar.

2. In the My tasks section, select the All other tasks tab.

3. Review the Approval tasks list view and then select the task that you
want to process.

4. Review the task details on the task form.

5. (Optional) CMDB administrators can select Cancel task if the task isn't
needed.
The canceled task is deleted without any further processing.

6. (Optional) Select Reassign if the task isn't appropriately assigned, and
then select Assign to me or Request reassignment as appropriate.

7. (Optional) Select Review records to review the target CIs and records
for the task.

a. Select any records that you want to exclude for the task and
then select Exclude.
The records being excluded for the task are also being added to
the exclusion list of the associated policy type. Therefore, these
records will be excluded from any future tasks of the associated
policy type.

b. Select Reassign if the task isn't appropriately assigned.

c. Select Reject task to reject a task, fill in a Reason for rejection and
then select Save.

You can only reject a task that is assigned to you.

After you reject a task, the State of the task is set to Closed
Canceled and Approval is set to Rejected. Also, appropriate
notifications are sent to members of the group specified in
the glide.cmdb.data_manager.rejected.task.notification_group
system property. For more information about how this property

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

is used for notifications, see Components related to CMDB Data
Manager.

d. Select Assign to me or Request reassignment as appropriate.

e. Select Approve task to trigger the subflow associated with the
policy.

## Retirement definitions

Specify a retirement definition for a class, to reflect protocols in your
organization applicable to the class and to its child classes. These
definitions support the transition of CIs through life cycle stages as
implemented by CMDB Data Manager life-cycle policies. A class can
have a retirement definition by derivation, or by a retirement definition
specified for that class.

CMDB Data Manager requirement and usage

An active retirement definition is required for each targeted class in
a Retire, Archive, or Delete CMDB Data Manager policy. A retirement
definition is used to flag a CI as retired according to the CI’s class
retirement definition in effect. When retiring a CI, the CI's attributes are
set according to the retirement definition for the CI's class. A subsequent
operation such as delete or archive, that needs to be applied to retired
CIs, first checks if a CI is in a retired state by verifying that it satisfies the
retirement definition for its class.

Retirement definitions are used in life-cycle policies as follows:

• Setting target CIs in Retire policies, according to their associated class
retirement definitions.

• Filtering out target CIs In Retire policies, that are determined to already
be in a retired state according to their associated retirement definitions.
Those CIs aren’t targeted even if they meet the policy filter.

• Identifying CIs as being ready to be processed by an Archive or Delete
policies. Archive and Delete policies can only process CIs that are in a
retired state that matches their associated class retirement definition.
Therefore, target CIs in Archive and Delete policies, are checked
against their associated class retirement definition to verify that they
are in a retired state before they can be archived or deleted.

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

Derivation across the CMDB hierarchy

Retirement definitions are derived throughout the CMDB hierarchy in
the same way that rules, such as identification rules, are derived. Child
classes extended from a parent class with a retirement definition, derive
that definition unless there’s a retirement definition defined at the child
class level.

When retirement definitions for classes exist in different levels in the
class hierarchy, then the retirement definition that applies is the one
that is most specific for a class. For example, if there are retirement
definitions for both, the Computer and the Configuration Item class, then
the Computer class definition also applies to its descendant classes. All
other classes that aren't descendants of the Computer class, use the
Configuration Item retirement definition.

Always be aware of the automatic derivation of retirement definitions
throughout the class hierarchy. For example, an active retirement
definition for the Configuration Item [cmdb_ci] class can potentially be
in effect throughout the entire CMDB hierarchy (aside from classes with
their own retirement definition).

Predefined retirement definitions

The base system includes predefined retirement definitions for key
classes such as Hardware [cmdb_ci_hardware] and Application
[cmdb_ci_appl], and are stored in the CMDB Retirement Custom
Definitions [cmdb_retirement_custom_definitions] table. For example, the
predefined retirement definition for the Service [cmdb_ci_service] class
specifies that for a retired CI, the value of the attributes [operational
status], [Phase], and [Status] is Retired.

Retirement definition for the Configuration item [cmdb_ci] class behaves
in the following important ways:

• It is active by default and you can't deactivate it.

• You can't delete it.

• By default, it is in effect throughout the entire CMDB hierarchy due to
derivation.

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

The rest of the predefined retirement definitions are inactive by default,
and you must activate a retirement definition that corresponds to a
targeted class in a Retire, Archive, or Delete CMDB Data Manager policy.

You can use the default retirement definitions, or customize a definition
to reflect practices in your organization. You can also add a custom
retirement definition for a class. However, each CMDB class can be
associated with only a single retirement definition.

To manage or delete a retirement definition, see Manage retirement
definitions in CMDB Workspace.

## Duplicate CIs remediation

Duplicate CIs in the CMDB unnecessarily overload the system and
interfere with the CMDB's integrity and reliability. It is therefore important
to regularly use CMDB tools that detect and remediate duplicate CIs.

De-duplication tasks

When Identification and Reconciliation Engine (IRE) processes detect
duplicate CIs, IRE groups each set of duplicate CIs into a de-duplication
task for review and remediation. De-duplication tasks provide details
about the duplication, including a list of all the duplicate CIs in the set.
Review the details of each duplicate CI in the task and the data that was
used to determine that the CI is a duplicate. For more information about
IRE processes that detect duplicate CIs and generate de-duplication
tasks, see Detecting duplicate CIs.

Under some circumstances, IRE doesn't automatically generate de-
duplication tasks for duplicate CIs. To still remediate the duplication
in such case, you must create the de-duplication task manually. For
information about when this happens and how to manually create a
task, see Manually create a de-duplication task.

Remediation of a de-duplication task consolidates its set of duplicate CIs
into a single CI, eliminating the duplication.

To process de-duplication tasks (automatically-generated by IRE or
manually created) to remediate duplicate CIs:

• In bulk: Use the De-duplication dashboard and the De-duplication
Template Library in CMDB Workspace to:

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

• Review de-duplication tasks

• Remediate de-duplication tasks in bulk by using de-duplication
templates

• Gain insights into de-duplication counts and status in your
organization
Access the CI de-duplication experience in CMDB Workspace to
create de-duplication templates that remediate similar de-duplication
tasks in bulk.

• A single task: Review de-duplication tasks (manual) and use the
Duplicate CI Remediator wizard to process a single de-duplication task.

Main CI

The main CI plays a key role in the remediation of duplicate CIs. The main
CI is one of the duplicate CIs that you want to retain as an active CI
after reconciling the rest of the duplicate CIs into that main CI. You can
then potentially retire or delete the rest of the duplicate CIs, or assign
custom values to their attributes. The first step during remediation is to
select a main CI for the remediation process. During remediation, you
choose which attribute values, relationships, and related items from the
duplicate CIs to reconcile into the main CI. Alternatively, you can choose
not to consolidate any data and retain the main CI as it is.

The duplicate_of attribute in duplicate CIs, is used to store a reference
to the main CI. For duplicate CIs which existed in an instance that was
upgraded to the New York release or later, the main CI is unknown.
After upgrade, duplicate_of for those duplicate CIs is set to 'Unknown',
indicating that the CI is a duplicate but the main CI is unknown.

Before remediation, the CIs in a duplicate CIs set are all duplicates of
each other. After remediation, a set of duplicate CIs consists of one main
CI, and any number of CIs, each considered a duplicate of the main
CI. The duplicate_of attribute of the main CI is empty. The duplicate_of
attribute for all the rest of the duplicate CIs in the set, is a reference to the
main CI of the set.

Default related items list

A list of related items that is used globally in the remediation of duplicate
CIs, with all de-duplication tasks. During remediation, all items from the
default related items list are selected by default to be merged to the

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

main CI. During remediation, adding or removing related items to be
merged doesn't affect the default related items list. See Manage default
related items list for more information.

Note:

• Merging of attributes and related items that are associated with
assets is not supported. Asset related tables are not included in the
default related items list and therefore they are not available for
merge.

• If a scenario involves an inactive change request, the
Configuration item field on the Change Request form is cleared.
If the current value is a duplicate CI, then it isn’t merged with the
main CI.

De-duplication dashboard

CMDB Workspace provides a de-duplication remediation solution
letting you remediate de-duplication tasks, in bulk. The De-duplication
dashboard, and the de-duplication templates and libraries, let you
remediate multiple de-duplication tasks, consistently, in a single
operation. The De-duplication Template Library in CMDB Workspace
lets you create a preconfigured de-duplication template with the
remediation settings for a class. The De-duplication dashboard in CMDB
Workspace lets you then run the preconfigured template on multiple de-
duplication tasks for the class that is set in the template. The remediation
settings in the template, are then consistently applied to the duplicate
CIs of the de-duplication tasks, to remediate CI duplication.

For more information about remediating duplicate CIs in CMDB
Workspace, see CI de-duplication experience in CMDB Workspace.

Duplicate CI Remediator

A de-duplication remediation tool, that is wizard-like and that lets you
reconcile a set of duplicate CIs associated with a single de-duplication
task. You can choose one of the duplicate CIs to retain as an active
CI, and then decide how to process the rest of the duplicate CIs. The
Duplicate CI Remediator lets you set reconciliation options for attributes,
relationships, and related items.

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

For information about using the Duplicate CI Remediator, see Remediate
a de-duplication task (manual).

Effects on related tables (such as change requests)

Remediation can potentially have the following effects on change
requests:

• When a CI is associated with a change request whose state isn’t New,
then when duplicate CI remediation processes delete the CI, the CI is
removed from the change request.

• When a CI is associated with a change request whose state is New,
then when duplicate CI remediation processes delete the CI, the CI in
the change request is updated to the main CI.

The business rule Ready only CI when not New prevents change requests
that aren't in the New state, from getting updated. This behavior ensures
the validity and the continued processing of a change request when
change request CIs are affected by duplicate remediation processing.

When a CI is associated with a problem or an incident task, those tasks
remain valid after duplicate CI remediation processes run as the system
merges the main CI in those tasks even if the remediation processes
deleted the associated CI.

Properties that affect processing of duplicate CIs

During CMDB Identification, processing of sets of duplicate CIs is
determined by:

• Property glide.identification_engine.skip_duplicates (true by default).

• Property glide.identification_engine.skip_duplicates.threshold (5 by
default).

• Number of duplicate CIs in a set.

For information about how these properties affect the management of
duplicate CIs, see Detecting duplicate CIs.

Special remediation scenarios

There are a few special remediation scenarios in which the remediation
of duplicate CIs behaves differently:

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

Large number of duplicate CIs

Support for reconciliation of duplicate CIs is limited when the number
of duplicate CIs exceeds a certain threshold. This threshold is based on
the value of the glide.duplicate_ci_remediator.max.cis property, which is
1,000 by default. You can update this property to increase the threshold.
However, this threshold never exceeds 5,000, even if you set the property
to a value greater than 5,000.

When the number of duplicate CIs for a de-duplication task exceeds the
threshold, the options available in the wizard are limited:

• On the Select Main CI tab, only the Recommended list of main CIs
appears, and only the Use Main CI option is available.

• Recommendations are based only on the oldest created, newest
updated, and most recently discovered CIs.

• Reconciliation of attribute conflicts and CI relationships is not
supported, and only default related items are reconciled.

Duplicate serial numbers

Duplicate CI remediation is usually applied to duplicate CMDB CIs.
However, in some situations de-duplication tasks might be created for
duplicate serial numbers. When remediation is applied to duplicate
serial numbers, the merge of relationships from duplicate records, is not
referenced and is not applied.

Large number of related items

A de-duplication task might be associated with a large number of
related items which might block the remediation process as loading
the task times out. To continue the remediation process in this case,
you can try running remediation in a restricted mode. Add the
glide.duplicate_ci_remediator.enable_restricted_mode system property,
and set its value to true to show the Use the Duplicate CI Remediator
(Restricted Mode) option in the Remediate dialog box. For more
information about using this option to restrict the use of related items in
de-duplication remediation and allow remediation to proceed, see Using
restricted mode within the Duplicate CI Remediator [KB1542272].

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

Restrictions

IRE uses the duplicate_of field internally by populating it as part of the
skip duplicate mechanism, and you should restrict manual updates of
that field. For more details, see Detecting duplicate CIs.

If you do attempt to modify the value of duplicate_of directly on a CI
form or by using a script, the following restrictions are enforced to ensure
data integrity:

• A CI cannot be its own main CI (you cannot set a CI as a duplicate of
itself).

• A CI and its main CI cannot be from different domains.

•

The duplicate_of attribute of the main CI cannot reference any CI as its
main CI (you cannot set a CI as a duplicate of another duplicate CI to
create a chain of duplicate CIs).

•

If you attempt to set a CI as a duplicate of another duplicate CI, then
the CI is set as a duplicate of the main CI of the duplicate CI you are
trying to set. If the main CI of the duplicate CI you are trying to set is
'Unknown', the operation fails.

Example: Attempt to set a CI as duplicate of another duplicate
CI

CIs
Attempted setting
Result (System
enforced)

CI1: duplicate_of =
empty

CI2: duplicate_of =
CI3

CI3: Main CI

CI1: duplicate_of =
CI2

CI1: duplicate_of =
CI3

CI2: duplicate_of =
CI3

CI3: Main CI

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

If CI2 is a duplicate of 'Unknown', the operation fails.

•

If a main CI becomes a duplicate of another CI, then it can no longer
be a main CI. All CIs that were duplicates of that main CI are set as
duplicates of the new main CI.

Example: Attempt to set a main CI as duplicate of another CI

CIs
Attempted setting
Result (System
enforced)

CI1: duplicate_of =
CI4

CI2: duplicate_of =
CI4

CI3: duplicate_of =
CI4

CI4: Main CI

CI5: duplicate_of =
empty

CI4: duplicate_of =
CI5

CI1: duplicate_of =
CI5

CI2: duplicate_of =
CI5

CI3: duplicate_of =
CI5

CI4: duplicate_of =
CI5

CI5: Main CI

•

If a main CI becomes a duplicate of a CI within the same duplicate
CI set, then the selected duplicate becomes the main CI in the
duplicate CI set. The rest of the duplicate CIs in the set are set as
duplicates of the new main CI.

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

Example: Attempt to set a main CI as duplicate of a CI within
the duplicate CIs set

CIs
Attempted setting
Result (System
enforced)

CI1: duplicate_of =
CI4

CI2: duplicate_of =
CI4

CI3: duplicate_of =
CI4

CI4: Main CI

CI4: duplicate_of =
CI1

CI1: Main CI

CI2: duplicate_of =
CI1

CI3: duplicate_of =
CI1

CI4: duplicate_of =
CI1

• You can't delete a CI that is the main CI for a set of duplicate CIs.
To delete a main CI, you must first disassociate that main CI with all
of its duplicate CIs. Either delete all duplicate CIs that are associated
with that main CI, or remove the reference to that main CI from all
duplicate_of attributes in any duplicate CIs that have it.

• CI de-duplication experience in CMDB Workspace

Create libraries of de-duplication templates in CMDB Workspace, to
remediate de-duplication tasks in a consistent manner, and in bulk.
De-duplication templates are pre-configured with all necessary settings
for remediating duplicate CIs in de-duplication tasks, per class.

• Review de-duplication tasks (manual)

Review details of de-duplication tasks, and then potentially remediate
a de-duplication task.

• Remediate a de-duplication task (manual)

Remediate a single de-duplication task by using the Duplicate CI
Remediator wizard. Use the wizard to guide you through the duplicate
CI reconciliation process or to apply a custom workflow.

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

• Manually create a de-duplication task

Manually create a de-duplication task when it is not automatically
created. You can then use the Duplicate CI Remediator or the De-
duplication dashboard in CMDB Workspace to remediate the manually
created task.

• Manage default related items list

You can add or remove items from the default list of related items
which is used in duplicate CI remediation for all de-duplication tasks.

• Properties related to remediation of duplicate CIs

Use de-duplication properties to configure how remediation of
duplicate CIs works when using the Duplicate CI Remediator or the
De-duplication dashboard in CMDB Workspace.

• Components installed for duplicate CI remediation

Tables installed to support duplicate CI remediation (included in the
com.snc.cmdb plugin).

## CI de-duplication experience in CMDB Workspace

Create libraries of de-duplication templates in CMDB Workspace, to
remediate de-duplication tasks in a consistent manner, and in bulk. De-
duplication templates are pre-configured with all necessary settings for
remediating duplicate CIs in de-duplication tasks, per class.

Use the De-duplication dashboard in CMDB Workspace to see an
overview and insights about duplicate CIs in your CMDB. The De-
duplication dashboard lets you create de-duplication templates and
organize these templates into libraries. You can also examine de-
duplication tasks and then run a preconfigured template to remedy
duplicate CIs in multiple de-duplication tasks in a single operation.

More information:

• To learn about general duplicate CI remediation concepts, restrictions,
and special cases such as remediations that involve a large number of
duplicate CIs, see Duplicate CIs remediation.

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

• To remediate a single de-duplication task manualy, using the Duplicate
CI Remediator, see Remediate a de-duplication task (manual).

• To learn about Identification and Reconciliation (IRE) processes that
detect duplicate CIs and other concepts related to duplication CI, see
Detecting duplicate CIs.

Access

To access the de-duplication functionality in the CMDB Workspace,
navigate to Workspaces > CMDB Workspace and select Management
in the CMDB Workspace menu bar. Then select the following links in
Management tools, in the Manage section:

• De-duplication Dashboard

• De-duplication Template Library

Role requirement:

• To access the Management view in CMDB Workspace to perform de-
duplication tasks, sn_cmdb_admin

• To perform de-duplication tasks, cmdb_dedup_admin or any role
containing cmdb_dedup_admin (such as sn_cmdb_admin)

De-duplication templates and libraries

Use a de-duplication template to apply a consistent remediation to
multiple, similar, de-duplication tasks, in a single action. A de-duplication
template contains the settings that are required to remediate de-
duplication tasks for a class. For example, how to choose the main
CI, which method to use to consolidate attributes, and what to do
with the duplicate CIs (aside from the main CI) after remediation. A
de-duplication template also contains conditions that de-duplication
tasks are matched on. When you run a de-duplication template, the
remediation settings in the template are applied to all de-duplication
tasks that match the template conditions.

To be able to run a de-duplication template, the template must be in a
published state (a template is initially in a draft state).When published,
you can create a schedule for a de-duplication template so it will
automatically run on a recurring time interval. When necessary, you can
unpublish a published template so it is temporarily unavailable for use
until you republish it.

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

Organize your de-duplication templates into libraries to group templates
by categories that are meaningful in your organization and to
help locate a template. For example, you can create several de-
duplication templates, all of which for the same CMDB class such as
cmdb_ci_win_server. Then, add all those templates to the 'De-duplication
templates for cmdb_ci_win_server' library for easy access.

De-duplication dashboard

The De-duplication dashboard in CMDB Workspace is a central location
for remediating de-duplication tasks. Use the dashboard to:

• See all de-duplication templates on a set of cards. Each card shows
details about a template. On a template card, you can select Assign
task to assign de-duplication tasks to the template, and run the
template to remediate its associated de-duplication tasks. You can
also create a recurring schedule for a template such as daily and
monthly.

• Select Run all to run all templates, each template remediating its
assigned and matching de-duplication tasks.

• Select View de-duplication tasks to access a list view of de-duplication
tasks with details such as the de-duplication template assignment. In
the list view, you can select Only show tasks that do NOT match any
template conditions to show only those de-duplication tasks that are
unassigned or unmatched to any template class.

• Select View template libraries to create and manage de-duplication
templates and libraries.

• Select the Running tab to track templates that are currently running.

• Select the Completed tab to check the status and details about the
final state of a run, such as Completed, Cancelled, or Completed with
errors.

De-duplication insights pane

The De-duplication insights pane on the right side of the De-duplication
dashboard provides counts and insights related to the on-going de-
duplication processes in your organization. This pane provides the
following cards and links to help you resolve issues:

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

• Total count of de-duplication tasks that were remediated in the past
week.

• De-duplication tasks that have completed with various types of errors
and therefore need your attention. Provides the View de-duplication
tasks that need your attention link to access a list view of the associated
de-duplication tasks. You can examine error messages and drill down
tasks for further troubleshooting details.

• De-duplication tasks that don't match the conditions in any template
and therefore can't be assigned for remediation by a template.
Provides the View de-duplication tasks that don't match link to access a
list view of the associated de-duplication tasks. You can drill down tasks
for further details.

Review the de-duplication templates and ensure that they're properly
configured for remediating the on-going duplicate CIs that are being
generated in the CMDB by newly added data.

Manage duplicate CIs skill

You can use the manage duplicate CIs skill that Now Assist for CMDB
provides to get step-by-step guidance through the de-duplication
process. The manage duplicate CIs skill guides you through reviewing de-
duplication templates, assigning tasks to the templates, and then running
the templates. The manage duplicate CIs skill presents you with relevant
options for your next step, as you go, until you complete the remediation.

For more information, see Now Assist for Configuration Management
Database (CMDB).

• Create a de-duplication template

Create a de-duplication template that you can then run to apply
pre-configured and consistent remediation to de-duplication tasks, in
bulk. Organize your templates in libraries that make sense in your
organization.

• Run a template to remediate de-duplication tasks

Run a de-duplication template to remediate de-duplication tasks in
bulk. A de-duplication template is pre-configured with remediation
settings per class. Running a de-duplication template, remediates its

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

assigned de-duplication tasks, consistently, according to the template
settings.

• Remediate a single de-duplication task

Remediate a single de-duplilcation task using a de-duplication
template in CMDB Workspace, or manually, using the Duplicate CI
Remediator.

• Publish or unpublish a de-duplication template

After creating a de-duplication template, you must publish the draft
template to make it available to run. You might also need to unpublish
a published de-duplication template so it's temporarily unavailable for
de-duplication remediation, until you republish it again.

• Schedule a de-duplication template

Create a schedule, such as a monthly schedule, for a published de-
duplication template so it will automatically run on a recurring interval.

• Retire a de-duplication template

Retire a template that is no longer needed for remediating de-
duplication tasks.

## Create a de-duplication template

Create a de-duplication template that you can then run to apply pre-
configured and consistent remediation to de-duplication tasks, in bulk.
Organize your templates in libraries that make sense in your organization.

Before you begin

Role required:

• To access the Management view in CMDB Workspace to perform de-
duplication tasks, sn_cmdb_admin

• To perform this task, cmdb_dedup_admin or any role containing
cmdb_dedup_admin (such as sn_cmdb_admin)

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

About this task

By default, a newly created template is in draft mode. Therefor, after
creating a template, you must publish the template to make it available
for remediation.

Procedure

1. Navigate to Workspaces > CMDB Workspace and then select
Management in the CMDB Workspace menu bar.

2. Select the De-duplication Template Library link in Management tools,
in the Manage section.

3. (Optional) Create a library for the new template.

a. On the De-duplication templates page, select Create a library.

b. In the Create new library dialog box, fill out the Name and the
Description for the new library.

c. Select Create.

4. On the De-duplication templates page, select Create a template.
On the New template page, configure the different sections of the
template by completing the rest of the steps.

5. General information: Fill out the form and then select Next.

Field
Description

Name
Unique name for the template.

Class
CMDB class that this template
can be applied to.

Template library

Library that the de-duplication
template belongs to. Select a
newly created library or any
other librarySelect a library, or
select the '+' icon to create a
new library.

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

Option
Description

Automatically select all de-
duplication tasks that match the
selected class

Assign all de-duplication tasks
that match the template class,
to the template for remediation.

Add all child classes

Also assign all de-duplication
tasks that match descending
classes of the template class, to
the template for remediation.

This option is available only if
the Automatically select all de-
duplication tasks that match the
selected class option is selected.

6. Create condition: Use a condition builder or a custom script to narrow
down the list of de-duplication tasks assigned to the template, and
then select Next.
Use script toggle options:

•

Off: Specify conditions to filter on CIs from the template class.
Only the de-duplication tasks containing CIs that match the filter
will be assigned to the template.

•

On: Enter a custom script that returns a valid array of de-
duplication tasks sys_ids (from the Remediate Duplicate Task
[reconcile_duplicate_task] table), that are applicable to the
template class. Those de-duplication tasks will then be assigned
to the template.

Note:   Ensure that the script runtime doesn't exceed your
intended runtime expectation and doesn't unexpectedly
affect performance. Invalid values returned by the script are
ignored.

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

7. Select main CI: Select the method for choosing the main CI from the
drop-down list and then select Next.

Option
Description

Newest updated
Most recently updated CI.

Most related items
CI with most related items.

Oldest created
Oldest CI.

Most relationships
CI with most relationships.

Discovery source
A duplicate CI must be
associated with the selected
discovery source to become the
main CI.

Has asset
A CI must have an asset to
become the main CI.

Select main CI based on
condition

A duplicate CI must match a
specified condition to become
the main CI.

Note:

• Applying the chosen method to a set of duplicate CIs
must result in exactly one CI. If during remediation, the
chosen method yields no CIs or multiple CIs, then the Newest
updated method is automatically applied regardless of your
choice.

• After selecting the main CI out of the set of duplicate CIs,
the main CI is separate from the rest of the duplicate CIs.
From that point, 'duplicate CIs' refers to all of the initial
duplicate CIs, aside from the selected main CI.

8. Merge attributes: Configure merging attributes from duplicate CIs into
the main CI, and then select Next.

a. Select the method to use for merging the attributes of duplicate
CIs into the corresponding attributes of the main CI.

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

For each method card on the left (such as Use latest updated
CI), select attributes in the list on the right, that should be merged
into the main CI using that method.

b. Select options as appropriate.

Option
Description

Allow null value updates when
merging attributes to main
CIAllow null value updates
from duplicate CIs to main CI

When merging duplicate CIs
into the main CI, lets a null
value from a duplicate CI to
overwrite a non-null value in
main CI.

Allow updates from duplicate
CIs only when the main CI
value is null

When merging duplicate CIs
into the main CI:

• Prevents updates to main
CI attributes that have
non-null value.

• Allows updates to main
CI attributes that have a
null value, with a non-null
value.

9. Merge relationships: Select an option for merging relationships from
duplicate CIs into the main CI, and then select Next.

Choice
Description

Merge all relationships
Merge relationships from all
duplicate CIs into the main CI.

Do not merge any relationships
Don't merge any relationships
from duplicate CIs into the main
CI.

Merge relationships based on
condition

Merge relationships only if the
main CI satisfies this condition.

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

10. Merge related items: Select the method to use for merging related
items associated with the duplicate CIs into the main CI, and then
select Next.

Choice
Description

Merge default related items
Merge only related items in the
default related items list, from
duplicate CIs into the main CI.

Do not merge any related items
Don't merge related items from
any duplicate CI into the main
CI.

Merge all available related
items

Merge all related items from all
duplicate CIs into the main CI.

Merge related items based on
condition
Merge related items only if
the main CI satisfies this
condition. Related items are
merged individually based on
the main CI satisfying their
respective condition. If there
are two related items with two
conditions and the main CI
satisfies only one condition, then
only one related item is merged.

Select Create a new condition
to build conditions.

For information about the default list of related items used in de-
duplication processes, see Manage default related items list.

11. Duplicate CI actions: Select what to do with the duplicate CIs after
they’re merged into the main CI, according to the template settings,
then select Next.

Choice
Description

Delete
Permanently delete all
duplicate CIs in the set (main CI
remains the only active CI).

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

Choice
Description

Set attributes to custom values
Set attributes of duplicate CIs
to custom values. Configure the
pairs of attribute/value with your
custom settings.

12. Review and test: Access the following tabs to complete the template
by reviewing and testing it.

a. Summary: Review all template settings and select Back to modify
any settings.

b. Test: Select a sample de-duplication task and then select Save
and Preview Results to save and run the template.

c. Preview the results of the remediation test.

d. Select Save & Exit to save the template and return to the De-
duplication templates home page.

Result

The new template is added to the specified library in draft mode and
can be edited. However, a template in draft mode isn't available for
remediation of de-duplication tasks until you publish it.

What to do next

• Publish a de-duplication template

• Run a template to remediate de-duplication tasks

• Remediate a single de-duplication task

## Run a template to remediate de-duplication tasks

Run a de-duplication template to remediate de-duplication tasks in bulk.
A de-duplication template is pre-configured with remediation settings
per class. Running a de-duplication template, remediates its assigned
de-duplication tasks, consistently, according to the template settings.

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

Before you begin

Role required:

• To access the Management view in CMDB Workspace to perform de-
duplication tasks, sn_cmdb_admin

• To perform this task, cmdb_dedup_admin or any role containing
cmdb_dedup_admin (such as sn_cmdb_admin)

About this task

You can run a single template to remediate its associated de-duplication
tasks, or run all published templates at once, each remediating duplicate
CIs in its associated tasks. Before running any templates, ensure that
those templates are properly configured with their remediation settings
and are properly assigned with de-duplication tasks. De-duplication tasks
can be automatically assigned to a template based on the template
conditions. You can also manually assign additional de-duplication tasks
to a template.

Procedure

1. Navigate to Workspaces > CMDB Workspace and then select
Management in the CMDB Workspace menu bar.

2. Select the De-duplication Dashboard link in Management tools, in the
Manage section.

3. Select a template library in the Ready tab, or select All libraries in the
libraries drop-down list (set to All libraries by default).
The set of cards is filtered to show only the templates from the
selected library, or to show all templates from all libraries if you select
All libraries from the drop-down list.

4. (Optional) On the De-duplication templates page, select Run all to
run all de-duplication templates on their assigned de-duplication
tasks.
To assign de-duplication tasks to a template or to run a single
template, continue with the following steps.

5. On the De-duplication templates page, locate the card with the
template that you want to run and select Assign tasks in that card.

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

6. Select the tasks in the Available de-duplication tasks list that you
want to remediate using the selected de-duplication template. Then
select Add Selected to assign the selected tasks to the current
template.

Available de-duplication tasks lists all open de-duplication tasks,
some of which can be non-compatible with the template. If you try
to associate a non-compatible task, an error appears. Some of the
tasks in the list might be assigned to another template, and you can
reassign those to the current template.

The Assigned de-duplication tasks pane on the right contains two
tabs:

• All matching tasks: Shows de-duplication tasks that match the
condition of the selected template.

• Your selected tasks: Shows the tasks that you’ve assigning to the
template for remediation.
The selected tasks are added to the list in the Your selected tasks tab
in the Assigned de-duplication tasks pane on the right. The template
will run for all tasks in the Your selected tasks list and any tasks in the
All matching tasks list that aren't assigned to another template.

7. Select Run template.
The selected template is added to the running queue.

What to do next

•

Select the Running tab to track the progress and details of templates
that you added to the running queue and are currently running.
General counts for the template run appear when those counts
become available. The templates are sorted by their start time, with
the template with the most recent start time at the top of the list.

• Select Details (accessible only after all de-duplication tasks have
been calculated) to show further details about this run and to drill
down to de-duplication tasks.

• Select Cancel to stop a template's run. The details for the cancelled
template are added in the Completed tab with the state of Cancel
Requested. Upon completing the cancellation, the state changes to
Cancelled.

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

After a template run completes, its details no longer appear under
the Running tab, but are available in the Completed tab. Also, the
completed template is available again for running in the Ready tab.

• Select the Completed tab to view general counts per template, such
as erroneous and skipped tasks, and general run time. The templates
are sorted by their completion time, with the template that completed
most recently at the top of the list. Select Details for a template to
access a list view of the template's assigned de-duplication tasks. This
list view shows details for each de-duplication task, such as its state
(color coded) and error message if applicable. You can drill down a
de-duplication task for further details.

• Select View de-duplication tasks that need your attention in the De-
duplication tasks completed with errors card in the De-duplication
insights pane on the right. The De-duplication tasks with errors list view
shows de-duplication tasks that didn't complete successfully along with
an error message. You can drill down de-duplication tasks in the list for
more details.

• Schedule a de-duplication template.

## Remediate a single de-duplication task

Remediate a single de-duplilcation task using a de-duplication template
in CMDB Workspace, or manually, using the Duplicate CI Remediator.

Before you begin

Role required:

• To access the Management view in CMDB Workspace to perform de-
duplication tasks, sn_cmdb_admin

• To perform this task, cmdb_dedup_admin or any role containing
cmdb_dedup_admin (such as sn_cmdb_admin)

Procedure

1. Navigate to Workspaces > CMDB Workspace and then select
Management in the CMDB Workspace menu bar.

2. Select the De-duplication Dashboard link in Management tools, in the
Manage section.

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

3. In the De-duplication templates section, select View de-duplication
tasks.

4. In the De-duplication tasks list view, select the task that you want to
remediate.

5. Select Remediate on the task form.

6. In the Remediate dialog box, choose which method you want to use
for remediation, and then select Remediate.

Choice
Description

Remediate manuallyUse the
Duplicate CI Remediator
Use the Duplicate CI
Remediator built on Core UI to
remediate the task.

To continue with this choice of
remediation, see Remediate a
de-duplication task (manual).

Use the Duplicate CI
Remediator in Restricted Mode
Appears only if the
glide.duplicate_ci_remediator.e
nable_restricted_mode system
property is set to true. You might
need to use this option if
remediation is blocked because
loading the de-duplication task
times out. This option might be
relevant when there is a large
number of related items
associated with a de-
duplication task, allowing
remediation to continue with
the limited features in a
restricted mode. For more
information about using this
option to restrict the use of
related items in de-duplication
remediation and allow
remediation to proceed, see
Using restricted mode within the

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

Choice
Description

Duplicate CI Remediator
[KB1542272].

To continue with this choice,
see Remediate a de-duplication
task (manual). Skip to step #5 in
the procedure.

Remediate using a template

Use a de-duplication template
to remediate the task.

To continue with this choice of
remediation: In the Remediate
dialog box, select the Library
and the Template to use for the
remediation, and then select
Remediate.

What to do next

On the task form:

• Track the progress and the details of remediation in the Activity stream
until remediation is complete.

• Select the Duplicate Audit Results tab to see the results of the duplicate
audit.

## Publish or unpublish a de-duplication template

After creating a de-duplication template, you must publish the draft
template to make it available to run. You might also need to unpublish
a published de-duplication template so it's temporarily unavailable for
de-duplication remediation, until you republish it again.

Before you begin

• A template that you want to publish must not be in a published state.

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

• A template that you want to unpublish must be currently published.

• If the template that you want to unpublish is currently running or in the
running queue, you must wait for the run to complete or cancel the
run. In the De-duplication dashboard, select the Running tab, locate
the template that you want to unpublish, and then select Cancel in the
template's card.

Role required:

• To access the Management view in CMDB Workspace to perform de-
duplication tasks, sn_cmdb_admin

• To perform this task, cmdb_dedup_admin or any role containing
cmdb_dedup_admin (such as sn_cmdb_admin)

About this task

Procedure

1. Navigate to Workspaces > CMDB Workspace and then select
Management in the CMDB Workspace menu bar.

2. Select the De-duplication Template Library link in Management tools,
in the Manage section.

3. In the libraries pane locate the template that you want to publish or
unpublish and then either:

a. Publish: Ensure that all the sections of the template are complete
and select Publish.

b. In the Publish template dialog box, select Publish.

c. Unpublish: Select Unpublish and in the Unpublish template dialog
box, select Unpublish.

Result

A published template:

• Becomes available on the De-duplication templates page and can be
used for remediation.

• Can't be edited or retired.

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

An unpublished template is set back into draft mode:

• Is no longer available on the De-duplication templates page and can't
be selected for remediation.

• Can be edited or retired.

## Schedule a de-duplication template

Create a schedule, such as a monthly schedule, for a published de-
duplication template so it will automatically run on a recurring interval.

Before you begin

The de-duplication template that you want to create a schedule
for, must be in a published state. For information about publishing a
template, see Publish or unpublish a de-duplication template.

Role required:

• To access the Management view in CMDB Workspace to perform de-
duplication tasks, sn_cmdb_admin

• To perform this task, cmdb_dedup_admin or any role containing
cmdb_dedup_admin (such as sn_cmdb_admin)

Procedure

1. Navigate to Workspaces > CMDB Workspace and then select
Management in the CMDB Workspace menu bar.

2. Select the De-duplication Dashboard link in Management tools, in the
Manage section.

3. On the De-duplication templates pane, select the More options icon

(

) for the template that you want to create a schedule, and then
select Create schedule.

4. On the Schedule <template> dialog box, fill in the scheduling details.
Various fields, such as Time zone and Time appear on the form
according to your choice in the Run field. If Run is Periodically, you

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

must set the Repeat internal (day) or the Repeat interval (time) fields
(or both) before you can save the schedule.

5. Select Save.

Result

The newly created schedule is active by default.

What to do next

Track the state and details of templates:

•

Select the Running tab to track the progress and details of the
scheduled templates that are currently running. General counts for
the template run appear when those counts become available. The
templates are sorted by their start time, with the template with the most
recent start time at the top of the list.

• Select Details (accessible only after all de-duplication tasks have
been calculated) to show further details about this run and to drill
down to de-duplication tasks.

• Select Cancel to stop a template's run. The details for the cancelled
template are added in the Completed tab with the state of Cancel
Requested. Upon completing the cancellation, the state changes to
Cancelled.

After a template run completes, its details no longer appear under
the Running tab, but are available in the Completed tab. Also, the
completed template is available again for running in the Ready tab.

• Select the Completed tab to view general counts per template, such
as erroneous and skipped tasks, and general run time. The templates
are sorted by their completion time, with the template that completed
most recently at the top of the list. Select Details for a template to
access a list view of the template's assigned de-duplication tasks. This
list view shows details for each de-duplication task, such as its state
(color coded) and error message if applicable. You can drill down a
de-duplication task for further details.

• Select View de-duplication tasks that need your attention in the De-
duplication tasks completed with errors card in the De-duplication

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

insights pane on the right. The De-duplication tasks with errors list view
shows de-duplication tasks that didn't complete successfully along with
an error message. You can drill down de-duplication tasks in the list for
more details.

On the De-duplication templates pane, select the More options icon

(

) for a template with a schedule. Some of the following options
appear, according to the state of the schedule:

• Select Edit schedule to modify the schedule.

• Select Deactivate schedule to halt temporarily the automatic runs of
the template, while preserving the schedule settings.

• Select Activate schedule to resume automatic runs of the template
according to the schedule settings.

## Retire a de-duplication template

Retire a template that is no longer needed for remediating de-
duplication tasks.

Before you begin

The template that you want to retire must be in an unpublished state.

Role required:

• To access the Management view in CMDB Workspace to perform de-
duplication tasks, sn_cmdb_admin

• To perform this task, cmdb_dedup_admin or any role containing
cmdb_dedup_admin (such as sn_cmdb_admin)

Procedure

1. Navigate to Workspaces > CMDB Workspace and then select
Management in the CMDB Workspace menu bar.

2. Select the De-duplication Template Library link in Management tools,
in the Manage section.

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

3. In the library pane, select the template that you want to retire and
then select Retire.

4. Select the template's context menu and then select Retire template.

5. In the Retire template dialog box, select Retire.

Result

A retired template is no longer available in the De-duplication dashboard
and can't be used for remediation.

## Review de-duplication tasks (manual)

Review details of de-duplication tasks, and then potentially remediate a
de-duplication task.

Before you begin

Role required: itil to view, and itil_admin or cmdb_dedup_admin to
remediate a de-duplication task.

About this task

Alternatively, you can use de-duplication capabilities in the CMDB
Workspace. Use the De-duplication dashboard and the De-duplication
Template Library to:

• Review de-duplication tasks

• Remediate de-duplication tasks in bulk by using de-duplication
templates

• Gain insights into de-duplication counts and status in your organization

For more information, see CI de-duplication experience in CMDB
Workspace.

If a duplicate CI is a dependent CI, then you can view the details of
the dependent relationship, the Depend on CI, and any relation qualifier
chain. If the dependent CI has a lookup table, then you can see the
details of the respective lookup table.

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

Procedure

1. Navigate to All > Configuration > Identification/Reconciliation > De-
duplication Tasks.

2. Select a task.

Remediate Duplicate Task form

Field
Description

Number
Unique task number.

Assigned to
Person who is responsible for
resolving the task.

Short description
Description for the task.

Work notes

Details describing how the CI
was identified as a duplicate.

Note:   Not available in de-
duplication tasks that were
created prior to the London
release.

This field also contains user notes
about the decisions and steps of
resolving the task.

Priority
Task priority.

State

State of the de-duplication
task as it progresses through
resolution.

3. In the related lists section, click the Duplicate Audit Results tab to see
the list of duplicate CIs in this task. You can click a CI to display more
CI details.

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

Column
Description

Duplicate CI

Reference to the duplicate CI.

Note:   This field is a
document ID type, which
means that it can reference
any record on any table.
If the referenced CI is
deleted as part of resolving
duplicate tasks, then this
field is empty.

Relationship

For a duplicate CI that is a
dependent CI, this field shows
the relationship between the
duplicate CI and depend on CI.

Depend on CI

If the duplicate CI is a
dependent CI, then this field
displays the depend on CI.

Discovery source
Discovery method used for the
CI.

What to do next

Analyze de-duplication tasks to determine which CIs should remain
active and which of the duplicate CIs in the Duplicate Audit Results
lists are stale or incorrect. Click Remediate to remediate a single de-
duplication task.

Related concepts

• Relation qualifier

Related topics

• Document ID field

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

## Remediate a de-duplication task (manual)

Remediate a single de-duplication task by using the Duplicate CI
Remediator wizard. Use the wizard to guide you through the duplicate
CI reconciliation process or to apply a custom workflow.

Before you begin

Review the following topics to familiarize yourself with important concepts
of duplicate CI remediation:

• Duplicate CIs remediation to learn about general duplicate CI
remediation concepts, restrictions, and special cases such as
remediations that involve a large number of duplicate CIs.

• Properties related to remediation of duplicate CIs for information about
important properties that affect processes of duplicate CI remediation.
Including the glide.duplicate_ci_remediator.dry_run property that
determines if the Duplicate CI Remediator actually updates the CMDB
or not.

Role required: itil to read, itil_admin or cmdb_dedup_admin to write

About this task

Instead of using the build of the Duplicate CI Remediator on Core UI, you
can use the De-duplication dashboard, and de-duplication templates
and libraries, available in CMDB Workspace. Using de-duplication
capabilities in CMDB Workspace is especially useful for bulk remediation
of de-duplication tasks. These capabilities let you pre-configure a de-
duplication template with remediation settings, which can then be
applied in a consistent manner to multiple de-duplication tasks. For more
information, see CI de-duplication experience in CMDB Workspace.

As you progress through the tabs of the Duplicate CI Remediator, CIs are
not updated. All updates are applied only in the final step, after you click
Remediate.

Note:   Remediation behaves differently when remediation involves
a large number of duplicate CIs or where the duplicates are serial
numbers. For information about special cases in remediation, see
Duplicate CIs remediation.

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

Procedure

1. Navigate to All > Configuration > Identification/Reconciliation > De-
duplication Tasks.

2. Open the de-duplication task that you want to remediate.

3. On the task form, select Remediate.

4. In the Remediate dialog box, select either of the following options:

• Use the Duplicate CI Remediator (Recommended): Use the
wizard to consolidate duplicate CIs according to your
configurations and settings. Follow the Duplicate CI Remediator
tabs to configure the reconciliation.

Note:   This option is not available with non-CMDB tables.

• Use a custom remediation workflow: Use an existing CMDB
remediation rule or select Add New to create a new one.

• On the CMDB Remediation Rule form, set Task type to
Remediate Duplicate Task and select Active.

• On the Workflow form, set Table to Remediate Duplicate Task
[reconcile_duplicate_task] and If condition matches to None.

• Ensure that the associated workflow remediates duplicate
CIs.
In the Remediate dialog box, select Next to start the workflow
and to exit the Duplicate CI Remediator. The Remediate
Duplicate Task form appears, where you can update the State
of the task.

• Use the Duplicate CI Remediator (Restricted Mode): Appears
only if the glide.duplicate_ci_remediator.enable_restricted_mode
system property is set to true. You might need to use this option if
remediation is blocked because loading the de-duplication task
times out. This option might be relevant when there is a large
number of related items associated with a de-duplication task,
allowing remediation to continue with the limited features in a
restricted mode. For more information about using this option
to restrict the use of related items in de-duplication remediation
and allow remediation to proceed, see Using restricted mode
within the Duplicate CI Remediator [KB1542272].

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

5. On the Select Main CI tab in the Duplicate CI Remediator:

a. Select the main CI for this reconciliation using either of the
following lists of duplicate CIs. For any CI, you can click the Name
link to display the CI's attributes, or click the Related Items link to
display the number of related items.

• Recommended: A subset of the All list, containing only
system recommended main CIs. System recommendations
are based on checking the duplicate CIs for the following
criteria:

• CI with most related items.

• CI with most relationships.

• Newest discovered CI.

• Newest updated CI.

• Oldest created CI.

• Previous main CI, if one was previously selected.

• All: All duplicate CIs for the de-duplication task.

Either option lets you review a summary of the remediation
settings before starting the remediation.

b. Select one of the following options to choose whether to
consolidate any attribute values, relationships, or related items
from any of the duplicate CIs into the main CI:

• Remediate Manually: Lets you specify which attribute values,
relationships, and related items from duplicate CIs to
consolidate into the main CI.

• Use Main CI: Retains main CI attribute values, merges
relationships, and merges only the default related items.

Skip to step number 7 as this selection skips all configurations
other than choosing the action for the duplicate CIs on the
Determine Duplicate CI Actions page.

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

6. On the Merge Attribute Values tab review inconsistent values of each
attribute. For each attribute, choose to retain the main CI's value, or
choose a value from a duplicate CI for the main CI to be set with.

7. Select Next.

Column
Description

Attribute
Attribute for which there are
different values.

Main CI Value
Attribute value in the main CI.

Other Values
The number of unique Attribute
values within the duplicate CIs.

To override the main CI attribute value with a duplicate CI value:

a. Click the Other Values link.

b. In the attribute dialog box, click Unique Values to display only
unique attribute values, or All to display all attribute values
including identical values.

c. Select a value for the main CI Attribute to be set with.
You can click Reset to Original to undo the selection of a
different attribute value for the main CI.

d. Click Select.

Note:   Attributes, such as system fields, discovery fields
(discovery_source, last_discovered, first_discovered), and read-
only fields (such as the asset field) do not appear in the list.

8. On the Merge Relationships and Related Items tab:

a. In the Merge Relationships section, select whether to merge all
relationships from all duplicate CIs into the main CI. Click View all
relationships to display all the relationships in which a duplicate
CI is a parent or a child. You can click a Parent or a Child link
to display more details. Orphan and duplicate relationships of
duplicate CIs are deleted if you choose to merge relationships.

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

For more information about the CMDB Health relationship KPI, see
CMDB Health KPIs and metrics.

b. In the Merge Related Items section use the list collector to select
related items to be merged into the main CI. Click View all
related items to display all related tables (items) and the count
of references in each table to one of the duplicate CIs. You can
click the links in Main CI Related Items and Duplicate CIs Related
Items to display details about the related items.

Related items in the list collector have the following format:

• By default, all items in the default related items list are
selected to be merged.

• Related items (tables) that have no references to a duplicate
CI are not listed, unless that table is included in the default
related items list.

• Since asset related tables are part of the exclusion list, they
are not available for merge.

See Manage default related items list for more information about
configuring a default list of related items.

c. Click Next .

9. On the Determine Duplicate CI Actions tab, choose one of the
following actions to perform after completing the reconciliation. Then
click Next.

• Set attributes to custom values (recommended): Retain all
duplicate CIs. Mark the duplicate CIs as invalid by setting

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

71

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 71, 467x193px]*

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@%%@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@#@@@@@@@@@@@@@@@@@
@@@@@@@##@@@@@@@@@@@@@@*%@@@@@@@@@@@@@@@@%*@@@@@@@@@@@@@@@@@
@%####*#%*#*###%%####*#%%##*##*%%%####*######%%###@#*%@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#*@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
```

---
*Page 72*

a specific Attribute to a specific Value for all duplicate CIs.
For example, set Operational Status to Retired to retire the
duplicate CIs.
The duplicate_of attribute of the duplicate CIs is automatically
set to the appropriate main CI. Also, the duplicate CIs will
not be added to any de-duplication task after this task is
remediated. If the identification engine is not configured to
skip duplication, ensure that identification inclusion rules are
configured to exclude the duplicate CIs during identification. This
configuration prevents new de-duplication tasks with the same
duplicate CIs from being created after remediation.

Note:   Discovery fields, system fields, read only fields, and
date fields are excluded from the attributes list.

• Delete: Delete all duplicate CIs (only the main CI remains).

Note:   Review Roll back and delete recovery for information
about reverting the deletion of CIs and related records.

10. On the Review and Confirm tab:

a. Review the summary of the expected updates for this duplicate
CIs reconciliation. Updates are based on your selections and
therefore the summary includes only the details that are
applicable. This summary can include details of the relationships
and related items that will be merged to the main CI, the
attribute values that the main CI will be set with, and the number
of CIs that will be deleted. Click Attributes, Relationships, Related
Items, or Duplicate CI Actions if applicable, to display further
details such as changes to attribute values.

b. Click Remediate to complete the reconciliation according to
your reconciliation settings.
Once complete, the task State is set to Closed Complete.

Result

The following relationships are deleted without being merged to the main
CI:

• Relationships in which the type, child, or parent field is empty.

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

• Relationships for which merging to the main CI will result in cyclic
relationships.

• Relationship for which merging to the main CI will result in duplicate
relationships.

What to do next

The reconciliation process runs in the background and may take a while
to complete. Upon completion, the system sends a confirmation notice
to the remediator of the task. Meanwhile, you can:

• Review Identification Rules: Review identification and inclusion rules
and make any necessary updates to reduce CI duplication.

• Check Progress: View the task activities that are logged as the
remediation progresses.

• View Main CI: View the main CI for this reconciliation process.

## Manually create a de-duplication task

Manually create a de-duplication task when it is not automatically
created. You can then use the Duplicate CI Remediator or the De-
duplication dashboard in CMDB Workspace to remediate the manually
created task.

In some situations, duplicate CIs are not automatically detected and
de-duplication tasks are not automatically generated. Such situation
happens with a class for which identification rules are not defined and
the identification engine cannot be applied. However, you still want to
reconcile these duplicate CIs by utilizing the Duplicate CI Remediator or
the De-duplication dashboard in CMDB Workspace.

Use the CMDBDuplicateTaskUtils API to manually create a de-duplication
task in which all duplicate CIs are specified. The de-duplication tasks that
you create manually and the automatically created tasks, are stored
in the same table ([reconcile_duplicate_task]) and are processed in the
same manner.

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

Note:   You can manually create a de-duplication task only for
CMDB CIs and a CI can be specified as a duplicate CI only in a
single de-duplication task.

## Manage default related items list

You can add or remove items from the default list of related items which
is used in duplicate CI remediation for all de-duplication tasks.

Before you begin

Role required: itil_admin

About this task

The default related items list is used by the Duplicate CI Remediator,
appearing on the Merge Relationships and Related Items tab. You can
modify the list for only a specific task in the Duplicate CI Remediator
without affecting the default global list.

The default related items list is also used by the De-duplication dashboard
in CMDB Workspace for remediation.

Globally modifying the list affects the remediation of all de-duplication
tasks in the Duplicate CI Remediator and in the De-duplication
dashboard in CMDB Workspace.

Note:   Only related items in which the reference field points to
Configuration Item [cmdb_ci] in sys_dictionary can be selected for
the default related items list. Related items with references to any
child of the Configuration Item class cannot be selected for the
default related items list, but are still available for merging in the
Duplicate CI Remediator for a specific task.

Procedure

1. Navigate to All > Configuration > Identification/Reconciliation >
Duplicate CI Remediator Default Related Items.

2. On the Default Related Items List for Duplicate CI Remediator page,
use the list collector to add or remove items from the Selected list.

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

3. Click Save.

## Properties related to remediation of duplicate CIs

Use de-duplication properties to configure how remediation of duplicate
CIs works when using the Duplicate CI Remediator or the De-duplication
dashboard in CMDB Workspace.

To view and edit these properties, the admin role is required.

Although the properties below reference the Duplicate CI Remediator,
these properties have an equivalent effect in duplicate CI remediation in
CMDB Workspace.

Property
Description

Attributes in which max_length
exceeds this property value (4000
by default) are excluded from the
Select Main CI, Merge Attribute
Values, and Determine Duplicate
CI Actions tabs in the Duplicate CI
Remediator wizard.

glide.duplicate_ci_remediator.max
.field_length

If the max_length for an attribute
is equal to the property value, and
the size of the data exceeds the
property value, then the data is
truncated to the property value
and the attribute appears in
attribute lists.

• Type: integer

• Default value: 4000

• Location: Configuration > CMDB
Properties > Duplicate CI
Remediator Properties

Note:   This property
impacts the performance of
de-duplication tasks, therefore
be cautious about setting this
value.

Comma separated list of
related tables in the format
• Type: string

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

Property
Description

'<table>.<reference column>', that
are excluded from merging during
duplicate CI remediation.

glide.duplicate_ci_remediator.rela
ted_items_blacklist

• Default value:
cert_task.cmdb_ci,cert_audit_res
ult.configuration_item,discovery_l
og.cmdb_ci,alm_hardware.ci,al
m_asset.ci,fm_expense_line.ci

• Location: Configuration > CMDB
Properties > Duplicate CI
Remediator Properties

Threshold for the number of
duplicate CIs, which if exceeded,
support for reconciliation in the
Duplicate CI Remediator is limited
(1,000 by default).

glide.duplicate_ci_remediator.max
.cis

• Type: integer

• Default value: 1000

• Location: Configuration > CMDB
Properties > Duplicate CI
Remediator Properties

• Learn more: See 'Large number
of duplicate CIs' in Remediate a
de-duplication task (manual).

This threshold never exceeds 5,000,
even if you set the property to a
value greater than 5,000.

Determines whether the Duplicate
CI Remediator actually remediates
CI duplication by updating records
in the CMDB, or not.

glide.duplicate_ci_remediator.dry_
run

When set to false (default value),
updates specified in the wizard are
actually performed.

You can set this property to
true and then test run through
the Duplicate CI Remediator
without any records actually being
updated. In this case, the work
notes for the task describe the
changes that will happen in an
actual remediation.

• Type: true | false

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

Property
Description

• Default value: false

• Location: Configuration > CMDB
Properties > Duplicate CI
Remediator Properties

glide.duplicate_ci_remediator.ena
ble_restricted_mode

Enables restricted mode
remediation in the Duplicate CI
Remediator. This option restricts
the use of related items in
de-duplication remediation and
allows a blocked remediation
to proceed using the Use
the Duplicate CI Remediator
(Restricted Mode) option. For more
information, see Using restricted
mode within the Duplicate CI
Remediator [KB1542272].

• Type: true | false

• Default value: false

• Location: Add to System
Properties [sys_properties]

• Learn more: Remediate a de-
duplication task (manual)

Set to true to enable restricted
mode remediation.

## Components installed for duplicate CI remediation

Tables installed to support duplicate CI remediation (included in the
com.snc.cmdb plugin).

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

Tables installed

Table
Description

Remediate Duplicate Task

[reconcile_duplicate_task]
De-duplication tasks.

Duplicate Audit Result

[duplicate_audit_result]

CIs associated with each de-
duplication task.

Duplicate CI Remediation

[cmdb_duplicate_ci_remediation]

Input, selections on each tab,
overall status of remediation, and
results of each run of the Duplicate
CI Remediator.

CMDB Workspace De-duplication
template library

[sn_cmdb_ws_reconcile_duplicate
_template_library]

Library names and their
descriptions.

De-duplication template
suggested task

[sn_cmdb_ws_reconcile_duplicate
_template_suggested_task]

Mappings of de-duplication tasks
to templates.

Scheduled jobs installed

Scheduled job
Description

De-duplication: Populate
Duplicate Task Data

Runs daily to copy metadata,
such as the identification attributes
and identification rules used in
generating a de-duplication task,

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

Scheduled job
Description

into an easily accessible table.
The metadata is stored in the
Reconcile Duplicate Task Data
[reconcile_duplicate_task_data]
table and used for analytics for the
De-duplication dashboard.

De-duplication: Populate Template
Task Run Records

Runs every minute to evaluate the
de-duplication tasks applicable for
a template according to your
settings. Based on settings, assigns
matching tasks and manually
added tasks to the template for
remediation.

De-duplication tasks are
remediated after you select Run
template.

De-Duplication: Template
Scheduler

Runs every minute by the template
scheduler to check the capacity
of the execution engine. If there is
available capacity, picks any new
de-duplication tasks added to the
queue, for remediation.

De-duplication tasks aren't
remediated and remain in
ready state unless this job runs
periodically.

De-duplication: Populate Template
Suggested and Orphan Tasks

Runs hourly to count the number of
tasks that match each published
template and the number of tasks
that don’t match any published
template. These counts then

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

Scheduled job
Description

appear on various cards in the De-
duplication dashboard.

## CIs attestation

Verify the existence of actual IT infrastructure and applications that
you own, systematically and in bulk. As CIs are continuously ingested
into the CMDB from various data sources, ensure the integrity of the
CMDB. Remove any stale CIs that are associated with IT infrastructure
or applications that no longer exists.

Use the CMDB Data Manager in CMDB Workspace to create an
Attestation policy, specifying CIs that need to be attested and the
attestation frequency. Assign Attestation tasks to users that are familiar
with or that manage the CIs, and who can attest or reject the IT
infrastructure or applications that those CIs represent. Rejected CIs that
are no longer needed can then be retired, archived, or deleted from the
CMDB.

Users can go to the My Work view in CMDB Workspace to see their
assigned attestation tasks, and then review and process the tasks.

Smart detection and auto-attestation

Smart detection streamlines and simplifies CI attestation. With smart
detection you can auto-attest CIs that are automatically detected by
discovery programs, based only on recent discovery results.

The following conditions must be met to enable smart detection:

• Discovery is enabled in your organization or Getting started with Service
Graph Connectors are implemented.

• The system property sn_cmdb_ws.attestation.smart_detection.disabled
is set to false (default value).

In addition, smart detection uses the following system properties as filters
when creating a list of CIs that are candidates for auto-attestation. To be
included as candidates for auto-attestation, CIs must be discovered:

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

• Within the discovery time window specified by the
sn_cmdb_ws.attestation.smart_detection.discovery_window system
property (for example, within the last 30 days)

• By any discovery source that isn't excluded by the
sn_cmdb_ws.attestation.smart_detection.discovery_source.exclusion
system property

Then, when you review those candidate CIs, you can choose to auto-
attest them.

Properties associated with Attestation

Property
Description

sn_cmdb_ws.attestation.smart_det
ection.disabled

Disables smart detection.

• Type: true | false

• Default value: false

• Values:

• true: Disable smart detection.

• false: Enable smart detection.

• Location: Add to System
Properties [sys_properties] table.

• Learn more: Review CMDB Data
Manager attestation tasks in
CMDB Workspace

sn_cmdb_ws.attestation.smart_det
ection.discovery_source.exclusion

Comma-separated list of discovery
sources that are excluded in
smart detection processing. For
example, a data source that is
unreliable in detecting CIs.

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

Property
Description

CIs discovered by discovery
sources in the list, can't be
candidates for auto-attestation.

• Type: string

• Default value: Manual Entry

• Location: System property

• Learn more: Review CMDB Data
Manager attestation tasks in
CMDB Workspace

sn_cmdb_ws.attestation.smart_det
ection.discovery_window

Number of days (discovery
window) that smart detection
uses to determine whether a
CI is a candidate for auto-
attestation. Only CIs that were
discovered within this discovery
window can be candidates for
auto-attestation.

• Type: integer

• Default value: 30

• Location: System property

• Learn more: Review CMDB Data
Manager attestation tasks in
CMDB Workspace

## Review CMDB Data Manager attestation tasks in
## CMDB Workspace

Review attestation tasks that are assigned to you or to an assignment
group that you belong to in accordance with CMDB Data Manager

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

Attestation policies. Check the physical existence of IT infrastructure or
applications associated with CIs in the attestation task and then process
those CIs as appropriate.

About this task

For managers, tasks of direct reports are included, and for user group
managers, tasks of members in the group are also included.

Before you begin

Role required:

• CMDB administrator: data_manager_admin or sn_cmdb_admin

• CI and service owner or manager: data_manager_user, sn_cmdb_user
(already includes the data_manager_user role)

Canceling an attestation task is available only for tasks that are
in the 'In progress' or 'Not started' status, and the required role is
data_manager_admin or sn_cmdb_admin.

About this task

After you receive notifications about attestation tasks assigned to you,
check the actual IT infrastructure or applications that you own, and
then process the CIs in the task accordingly. Initially, all the CIs in the
attestation task are listed in a Not Yet Reviewed list and therefore require
a review. Attested CIs are then moved to an Attested CIs list, while CIs
you reject are moved to a separate Rejected CIs list. After processing
all the CIs in the task, you can submit and complete the task. For
general information about attestation and the flow of attestation, see
CIs attestation.

As you process the CIs in the task, only the fields Attestation Status
(values: Attested, Rejected, Not Yet Reviewed), Attested By, and Attested
Date are automatically updated. Also, details of your activities are
captured in the activity stream of the task.

Attesting tasks is performed in the view in the My Work view in CMDB
Workspace.

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

Procedure

1. Navigate to Workspaces > CMDB Workspace and then select My
Work in the CMDB Workspace menu bar.
Any attestation tasks that are assigned to you or to assignment
groups you belong to, appear in the Attestation tasks tab in the My
tasks section. Attestation tasks are associated with details such as the
due dates and short descriptions for those tasks. Assignment groups
that you are a member of, are also listed.

2. Select a task to review from the Attestation tasks list.
For a bulk review, select multiple tasks or check the box next to
'Configuration Item' to review all the tasks in the list.

3. Review details of a task:

a. (Optional) Administrators can select Cancel task if attesting the
CIs in the task isn't needed.
For example, if the task was created by error. The canceled task
is deleted without any further processing.

b. (Optional) If the task isn't properly assigned, select Reassign and
then select one of the following options.

Depending on your selection, the task might no longer be
assigned to you.

• To me: If the task isn't yet assigned to a specific user and you
are the owner of the CIs who can process the task.

•

To other user: If you aren't the actual owner of the CIs
and there is someone else that is more appropriate as the
owner for the task. In the Reassign to other user dialog
box, set Assign to to that user and enter the reason for the
reassignment. Then select Proceed.

For a CI owner, only users from the assignment group that the
task is currently assigned to, appear. For Admins, all users with
the data_manager_user role appear.

• Send for reassignment: If you aren't the appropriate user for
this task and the administrator needs to assign the task to
someone else. In the Send for reassignment dialog box, enter

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

the reason for the operation and then select Submit to send
a notification to the administrator.

c. Select Review CIs to attest to continue the CI attestation process.
If the task is not assigned to anyone, it is automatically assigned
to the current user.

4. (Optional) If the Smart detection dialog box appears, select Review
to review the CIs or Auto-attest to attest the detected CIs without a
review.

a. Review the details of the CIs in the list.

b. (Optional) Select Auto-attest to automatically attest all the CIs in
the list and to move them to the Attested CIs list.

c. (Optional) Select Cancel auto-attestation to leave all the CIs in
the Not Yet Reviewed list and to later continue attesting those CIs
regardless of smart detection.
If you select Cancel, you can later select Run auto-attestation in the
Smart detection widget. When reviewing the CIs to attest, the list in
the Smart detection pane is filtered to CIs that are candidates for
auto-attestation, letting you auto-attest all those CIs in bulk.

5. Review the CIs in the Not Yet Reviewed list.

You can select a CI to open a dashboard with more details such as
CI health, key properties, and CMDB 360 data. The CI health details
that appear depend on settings and activation of various features.

Use the following cards on the right hand bar to get help and status:

• Select Attestation actions (

) to get help on the possible
actions you can take while reviewing CIs.

• Select Attestation status (

) to see your progress in reviewing
and attesting CIs.

• Select Smart detection status (

) to see if any CIs are
candidates for auto-attestation and to apply auto-attestation if
applicable.

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

6. In the Details tab of the Attestation Review CIs pane, select the CIs
that you are ready to process and select an action to apply to all
selected CIs.

•

Select the CIs that you can attest their existence and select
Attest to move them to the Attested list.

To undo attestation, select the Attested list, select the CIs that
you want to move back to the Not Yet Reviewed list and
select Unattest. Or, select the CIs that you want to move to the
Rejected list and select Reject.

•

Select the CIs that you can't attest their existence and select
Reject to move them to the Rejected list. In the Confirm rejecting
CIs dialog box, enter an explanation and then select Proceed.

To undo rejection, select the Rejected list, select the CIs that
you want to move back to the Not Yet Reviewed list and select
Unattest. Or, select the CIs that you want to move to the Attested
list and select Attest.

•

Select the CIs that shouldn't be included in this task and in future
Data Manager attestation policies, and select Exclude. In the
Confirm excluding CIs dialog box, enter an explanation and then
select Proceed.

Those excluded CIs are added to the exclusion list of CMDB Data
Manager attestation policies. For more information, see . Only an
admin can undo this operation using the CMDB Data Manager.

•

Select any CIs that you identify as duplicates of other CIs and
select Remove duplicates from task. In the Confirm removing
duplicate CIs dialog box, enter an explanation and then select
Proceed.

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

Those duplicate CIs are removed from the attestation task and
a de-duplication task is generated for them, which is similar
to the de-duplication tasks created by the Identification and
Reconciliation Engine (IRE). For more details about how to
process and remediate de-duplication tasks, see Duplicate CIs
remediation.

Note:   Only an admin can undo this operation.

• After processing all the CIs in the task, when the Not Yet
Reviewed list is empty, the Submit button is enabled. Select
Submit, and then in the Submit attestation dialog box select
Submit to close the task.

## Data Certification

Data Certification manages scheduled and on-demand validations of
data in CMDB and non-CMDB tables.

Information is added to the CMDB by Discovery, by importing from third-
party tools, or manually. For regulatory or procedural reasons, information
in the CMDB requires checks for accuracy and certification. The
person or team responsible for certification can define what information
requires verification and the frequency of verification. Using CMDB
Data Manager supports policy-driven validation of specific attributes
using the certification policy type. CMDB Data Manager generates
certification tasks for verifying the data on a recurring schedule, which
then, individuals assigned to those tasks answer a series of questions to
verify the data.

Use Data Certification to:

• Maintain the accuracy, completeness, and reliability of critical data in
both, CMDB and non-CMDB tables.

• Create a framework for ongoing data compliance, regulatory,
governance, and operational standards.

Data certification can be performed against specific fields on specific
tables. Based on the certification schedule, certification tasks are
automatically created and assigned. A certification task represents the
work of verifying the data associated with a particular record. For
example, you can set up a certification to validate key information fields,

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

such as Operating System and CPU count, on all Windows servers located
in Chicago. You can then assign the tasks to the appropriate team
member automatically.

When planning an implementation of Data Certification, answer the
following questions:

• What information requires certification?

• When is the due date for certification?

• Who must perform the certification?

Domain separated systems can use the Data Certification application.

Data Certification experience in CMDB Workspace

You can use the CMDB Workspace landing page and its views to fully
administer and use Data Certification, view various analytics, and handle
Data Certification functions such as:

• Create a certification policy.

• Convert legacy certification schedules into Data Manager certification
policies.

• Review certification tasks.

• Review failed certification tasks.

The Data Certification experience in CMDB Workspace doesn’t provide
functionality such as reset, merging of multiple certification tasks, and
escalation.

For more information about using Data Certification in CMDB Workspace,
see Data Certification experience in CMDB Workspace.

Data Certification on Core UI (UI 16)

Data Certification experience in CMDB Workspace provides the latest
Data Certification functionality. However, the legacy build of Data
Certification on Core UI (UI 16) is available by navigating to All >
Data Certification. For information about using the CMDB Data Manager
legacy build on Core UI, see Data Certification on Core UI.

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

Note:

Data Certification in CMDB Workspace and the legacy build of Data
Certification on Core UI operate separately, and aren't synchronized.
Therefore, any Data Certification elements, such as definitions and
schedules, that you create in one of those implementations, doesn't
appear and isn't included in the other implementation.

To convert data created in the legacy build of Data Certification
on Core UI, into draft Certification policies in CMDB Workspace,
see Convert legacy certification schedules into Data Manager
certification policies.

## Data Certification experience in CMDB Workspace

Use Data Certification in CMDB Workspace to administer Data
Certification, create certification policies, manage certification tasks,
and view analytics about on-going processes.

Note:   Data Certification in CMDB Workspace and the legacy build
of Data Certification on Core UI operate separately, and aren't
synchronized. Therefore, any Data Certification definitions, such as
filters and certification schedules, that you create in one of those
implementations, doesn't appear and isn't available in the other
implementation.

Use Data Certification in CMDB Workspace

Use the CMDB Workspace landing page and its views to administer Data
Certification:

• Use the Management view in CMDB Workspace to navigate to CMDB
Data Manager to create a new Certification policy.

•

Use the My work tile on the CMDB Workspace landing page to access
your open and overdue certification tasks that you need to review and
process.

•

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

Use the My Work view in CMDB Workspace to access any certification
tasks assigned to you under the Certification tasks section.

Manage certification tasks in CMDB Workspace:

• Manage Data Certification instances and tasks, and see progress,
status, and insights in the Data Certification Dashboard

• Review certification tasks in CMDB Workspace

• Review failed certification tasks in CMDB Workspace

Retention of Data Certification records

Archival and destroy processes of certification policy related records, are
separate from those processes for records of all other policy types. This
separation facilitates the extension of the retention period of certification
policy records. Retaining certification policy execution records for longer
periods of time is useful in situations where those records are needed for
audits and is also useful for the Data Certification Dashboard, which is
populated by these records.

The following configurations facilitate the separation of retention policies
for Data Certification records:

• The table cleanup rule for the CMDB Data Management Policy
Executions [cmdb_data_management_policy_execution] table, which
is stored in the Auto Flushes [sys_auto_flush] table, excludes certification
policy execution records from recurring cleanups.

• The Archive CMDB Data Management Tasks archive rule, that
applies to all CMDB Data Manager policy execution records,
excludes certification policy records. At each archive run, this
archive rule is configured to also automatically archive its related
records in the CMDB Data Management Certification Task To
Document [sn_cmdb_ws_dm_certification_task_to_document] table
(Archive Related Records).

• The archive rule, Archive Certification Instances, archives certification
policy execution records from the CMDB Data Management Policy
Execution [cmdb_data_management_policy_execution] table. This
archive rule is configured to archive certification policy execution
records 2 years after creation, and to destroy those records 7 years
after they are archived.

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

• The archive rule, Archive Certification tasks, archives the
certification task records from the CMDB Data Management Task
[cmdb_data_management_task] table. This archive rule also contains
an Archive Related Records entry that archives the related records
in the CMDB Data Management Certification Task To Document
[sn_cmdb_ws_dm_certification_task_to_document] table.

## Convert legacy certification schedules into Data
## Manager certification policies

Convert certification schedules created in the legacy Data Certification
application (running on Core UI), into draft Data Manager certification
policies available in CMDB Workspace.

Before you begin

Role required: data_manager_admin or sn_cmdb_admin

About this task

If you have been using the legacy Data Certification application on
Core UI, then any associated certification schedules aren't automatically
available in the new implementation of Data Certification in CMDB
Workspace version 6.0. You can convert those definitions into draft Data
Manager Certification policies. Then you can publish the converted
policies in CMDB Workspace just like publishing any draft Data Manager
policy.

Important things to know:

• Legacy certification schedules that were successfully converted are
automatically deactivated.

• This conversion migrates most fields from the legacy certification
schedule. However, the Assign to empty and the Last run date fields
aren't migrated into CMDB Workspace Data Manager tables.

• Any dot-walking settings in the legacy certification schedules used
for assignments of User Field or User Group Field are preserved in this
conversion.

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

Procedure

1. Navigate to All > Workspaces > CMDB Workspace and then select
Management in the CMDB Workspace menu bar.

2. Select the Data Manager link in Management tools, in the Manage
section.

3. On the Data Manager overview page, select Import on the banner
at the top of the page.
If there aren't any legacy certification schedules to import, the
notification banner about importing existing policies doesn't appear.

4. In the Confirm import of certification schedule into draft policies,
select Import into draft policies.

a. Track progression in the Import in progress dialog box.

b. Review the import results in the Import summary dialog box.

If there were earlier conversion operations, the results reflect only
the current conversion operation. For example, the Completed
count includes only those records that were successfully
converted in the current run.

Select the links associated with the completed and skipped
results to drill down to the associated records.

Also, to see additional details, select All and in the Filter
navigator, enter cert_schedule.list to open the Certification
Schedules table. The Migration Status and the Migration
exception columns provide details that are especially important
for failed and skipped records.

c. Select View draft policies to view the converted policies in the
Data Manager policies page, under the Draft policies tab.

5. (Optional) Publish a draft CMDB Data Manager policy

Result

• If you log in while this conversion is in process, a progress message
appears on the Data Manager overview page. You can select the

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

View details link to open the Import in progress dialog box with details
about the progress of the operation.

• The legacy certification schedules are available as draft Certification
policies in Data Manager in CMDB Workspace.

• The legacy certification schedules are deactivated.

• The legacy certification tasks are unchanged and you can review and
resolve them as needed.

## Data Certification Dashboard

Use the Data Certification Dashboard in CMDB Workspace as a central
location to manage Data Certification instances and tasks, and to see
counts, progress, state, and analytical insights. You can drill down past
due certification tasks to examine and to reassign them, for example, so
that they can be completed by an appropriate user.

The Data Certification Dashboard gets populated by Data Certification
execution records. For information about the archive rules that control
the retention of those records, see 'Retention of Data Certification
records' in Data Certification experience in CMDB Workspace.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

93

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 93, 3584x1958px]*

```
********+**+*+++********************************************

.                                              .:
.     ........                                        .:..
.....  ...           .
....            ..             ...                       .
.
.
.                        .
.              ..              .                        .
..

.              ..              .



```

---
*Page 94*

Role requirements

The user role determines which certification tasks are included in the
dashboard, as follows:

• data_manager_user: Minimum role required for access. Provides access
to those certification tasks that are assigned to the user, to an
assignment group that the user is a member of, or if the user is the
manager of the assigned user or of the assignment group.

• data_manager_admin: Provides access to all certification tasks.

Reviewing certification tasks

The Data Certification Dashboard provides several ways for you to drill
down to the certification tasks list, which can contain tasks requiring
review. For information about reviewing (and then certifying or failing),
reassigning, or canceling tasks, see Review certification tasks in CMDB
Workspace.

Certification instances

The Certification instances tab shows counts and other details for
certification instances. A certification instance is the collection of
certification tasks for a policy execution identified by its unique policy
execution number. For each certification instance, the dashboard shows
progress indicators such as the overall percent complete, and a general
state such as Not Started and Past Due. Each card shows the total
number of associated tasks, and within that total, the number of tasks
in a complete, open, and unassigned state.

You can:

• Switch the type of view by selecting the List or the Cards icon.

• Filter the list of certification instances that appear, by selecting the
available filters such as State, Assignment group, or Assigned to filter
and then selecting the specific items that you want to filter by.

• Filter the list of certification instances that appear by searching for
specific strings in certification policy names.

• Sort the list of certification instances by various attributes such as
instance state, percent complete, or policy execution number. Select
ascending or descending sort order to apply along with any list filter.

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

• Select the info icon next to a certification instance name, to
show its respective policy execution number. For information about
policy execution numbers, see table CMDB Data Management
Policy Executions [cmdb_data_management_policy_execution] in
Components related to CMDB Data Manager.

Select a card to see more details about the certification instance, and
all the tasks in that instance based on your user role. In the Certification
tasks tab you can drill down the certification tasks list to access the tasks
themselves for processing.

Select the Certification records tab to see all the certification records
associated with all of the certification tasks in the certification instance.
You can filter the certification records by Certified or Failed to show those
records with at least one attribute in the selected state.

Workload and Aging tasks

The Workload and Aging tasks tab contains two tabs showing the
distribution of certification tasks workload and past-due tasks.

Workload

Shows the distribution of work related to certification tasks, by user groups
and by individual users. Select the Groups or the Individuals tab to see
the distribution by percentage and by total number of tasks. Select any
entry in a list to drill down to the certification tasks list which lets you then
access the tasks themselves for processing.

Aging

Shows bar charts with counts of data certification tasks that
are past due. Past due state is determined by the setting of
the sn_cmdb_ws.glide.cmdb.data.manager.aging.policy.task.timeframe
system property (by default, 61–90 and over 90 days old). Select a chart
to drill down to the certification tasks list which lets you then access the
tasks themselves for processing.

## Review certification tasks in CMDB Workspace

Review the values of record fields and CI attributes in certification tasks
assigned to you, and then certify, edit, or fail the review according to
your findings. For managers, tasks of direct reports are included, and for
user group managers, tasks of members in the group are also included.

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

Before you begin

Role required: sn_cmdb_user, sn_cmdb_editor, or sn_cmdb_admin

Canceling a certification task is available only for tasks that are
in the 'In progress' or 'Not started' status, and the required role is
data_manager_admin or sn_cmdb_admin.

About this task

If a certification task isn't properly assigned, you can reassign it to
another user if you know who the appropriate reviewer is, or request an
administrator to reassign the task.

Note:

• If the policy is configured to disallow empty attribute values, you
will only be able to fail certification of the associated CIs, but
you won't be able to certify them unless you populate the empty
attributes first.

• If the policy is configured to disallow updates to field values, you
won't be able to update non-compliant CIs, resulting in failing their
certification.

Procedure

1. Navigate to the Certification tasks list in either of the following ways.

• Navigate to Workspaces > CMDB Workspace, then select My
Work in the CMDB Workspace menu bar. In the My tasks section,
select the Certification tasks tab.

• Navigate to Workspaces > CMDB Workspace. On the Home view
in CMDB Workspace, select the Data Certification Dashboard
quick link. Then, on the Data Certification Dashboard, drill down
to the Certification tasks list from a certification instance card or
from the Workload and Aging tasks tiles, as described in Data
Certification Dashboard.

2. (Optional) In the Certification tasks list, select multiple tasks to
reassign tasks in bulk.

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

a. Select the Certification tasks tab, then the task or tasks that you
want to reassign.

• Select Reassign: Reassign a task to another group or user if
you aren't the appropriate user to review the field values and
you know who the appropriate reviewer is.

• Assignment group: Select the assignment group the user
belongs to.

• Assign to: Search for the appropriate reviewer to reassign
this task to.

• Submit a reason for this action: Enter a reason why you
are reassigning the task.

• Select the Reassign drop-down menu then select Assign to
me: Assign the task that isn't assigned, to yourself, if you are
the appropriate reviewer for this task.

• Select the Reassign drop-down menu then select Request
reassignment: Request to reassign the task, that is assigned to
you incorrectly, to someone else. Enter a reason why the task
needs to be reassigned, then select Submit.

b. Select Proceed.

3. In the Certification tasks tab, select the certification task that you
want to review.

4. Review the details of the certification task, then select Review
records to certify.

Note:   You can reassign the tasks on this page, see Step 2 to
review the reassignment options.

5. Select the records that you want to conclude the review for in the
Review not completed tab, and then select Certify or Fail.

You can select all the records showing on the page for bulk
processing by selecting the check box in the first column header,
and then selecting the Select all <n> item/s in this list link that
appears.

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

• The review conclusion of certified or failed is applied in bulk
only to those certification fields in the selected records, which
are still pending a review. For example, a certification field that
is already marked as certified, isn't affected by selecting Fail.
Only the unreviewed fields are marked as failed. Records whose
review is concluded are moved to the Review completed tab.

• If the policy is configured to disallow empty attribute values, then
CIs with empty fields won't be certified when you select Certify.
In this situation, to certify those CIs, you must first populate the
empty attributes.

6. Select the records that you want to review in details and then select
Review records.

A check mark next to a column header, denotes the fields whose
values are included in this certification review (certification fields). All
other columns show additional fields that are included only to help
you identify records (display fields).

When you select records (or CIs) to review, the fields (or attributes) for
the selected records appear on the right, in a separate field review
section. When you select a single record to review, the field values
of the selected record appear. When you select multiple records to
review, the field values don't appear. In that section, select the fields
to apply your review results, or select Select all fields to apply the
review results to all fields.

Option
Description

Fail selected fields
Select this to denote field values
that are incorrect. When you're
finished, the records will move to
the Review completed tab.

Certify selected fields
Select this to confirm field values
that are correct. When you're
finished, the records will move to
the Review completed tab.

Edit fields
Select this to update the fields
whose value is incorrect. When
you're finished, select Update.

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

Option
Description

You can continue and certify
the updated fields.

7. Select Submit when all the records have been reviewed.
The Submit button isn't available until all the records in the task are
reviewed and the task is complete.

What to do next

You can review the certification results in the Review completed tab, and
change certification results or edit field values.

## Review failed certification tasks in CMDB Workspace

Review records (and CIs) that failed the certification review and are
assigned to you. Those exceptions appear in a list that is dynamically
updated as certification tasks are being reviewed.

Before you begin

Role required: sn_cmdb_admin

Procedure

1. Navigate to Workspaces > CMDB Workspace, then select My Work in
the CMDB Workspace menu bar.

2. In the Certification exceptions pop-up banner, select Click here to
view.

3. Select a drop-down to expand a task to show the records and fields
that failed the certification review.

4. Select the Certification Document Id of the field that you want to
update.
The Element column shows the fields that failed the review. The
Certification Document Id column contains links to the respective
records.

5. Review the details of fields that require updating.

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

What to do next

See the Review certification tasks in CMDB Workspace topic to locate
and review the respective certification task and to update incorrect field
values. You can also directly access record and CI forms to update
incorrect values.

## Data Certification on Core UI

The legacy build of Data Certification on Core UI lets you centrally
track and handle Data Certification tasks, create certification filters, and
define certification schedules.

Starting with the Zurich release, Data Certification plugin
(com.snc.certification_v2) is being prepared for future deprecation. It will
be hidden and no longer activated on new instances but will continue
to be supported. The CMDB Workspace store app provides the latest
experience for this functionality.

• For details about the deprecation, see the Deprecation Process
[KB0867184] article in the Now Support knowledge base.

• For information about using Data Certification, see Data Certification
experience in CMDB Workspace.

• For information about converting schedules created in the legacy
build of Data Certification on Core UI, into draft Certification policies
in CMDB Workspace, see Convert legacy certification schedules into
Data Manager certification policies.

Note:

Data Certification in CMDB Workspace and the legacy build of Data
Certification on Core UI operate separately, and aren't synchronized.
Therefore, any Data Certification elements, such as filters and
schedules, that you create in one of those implementations, doesn't
appear and isn't included in the other implementation.

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

## Activate Data Certification

Activate the Data Certification plugin to access the application.
Activating this plugin also activates the Version Management plugin,
which manages certification filter versions.

Before you begin

Role required: admin

Procedure

1. Navigate to All > System Applications > All Available Applications >
All.

2. Find the Data Certification plugin using the filter criteria and search
bar.

You can search for the plugin by its name or ID. If you cannot find a
plugin, you might have to request it from ServiceNow personnel.

3. Select Install to start the installation process.

Note:   When domain separation and delegated Admin
are enabled in an instance, the administrative user must
be in the global domain. Otherwise, the following error
appears: Application installation is unavailable because another
operation is running: Plugin Activation for <plugin name>.

You will see a message after installation is completed. For information
about the components installed with a plugin, see Find components
installed with an application.

Activating the Data Certification plugin installs the following components.

Demo data is available with Data Certification. The demo data provides
information including filters, schedules, instances, and tasks.

Tables

Data Certification adds the following tables:

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

Table
Description

Certification Audit Definition
[cert_audit_definition]

Stores collections of certification
schedules that can be run as a
single entity.

Certification Audit
Definition Elements
[m2m_cert_audit_def_cert_sched]

Lists the certification schedules in
each certification audit definition.

Certification Audit Instance
[cert_audit_instance]

Stores the certification instances
associated with a specific audit
definition.

Certification Element
[cert_element]

Stores the data elements that are
grouped into certification tasks.

Certification Filter [cert_filter]

Stores the data that requires
certification using a filtering
condition for the certification.

Certification Instance
[cert_instance]

Stores a collection of certification
tasks representing a single instance
of a scheduled certification.
This table extends the Audit
[cert_audit] table.

Certification Schedule
[cert_schedule]

Stores certification for a specific set
of information on a specific table,
what user or group the tasks are
assigned to, and how often this
certification is done.

Certification Task [cert_task]

Stores individual certification tasks.
Certification Task extends the Task
table.

Script Includes

Data Certification adds the following script includes:

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

Name
Description

CertificationAjax

Provides utilities that enable
individual certification elements to
be certified, rejected, or reverted.

CertificationTaskCreate

Custom code that extends the
standard code for certification
tasks.

CertTaskEscalationTimerPercentag
e

Updates time and percentage
complete information for a
certification.

CertificationUtilities
Provides utility functions for
certification.

Client Scripts

Data Certification adds the following client scripts:

Name
Table
Description

Alert If Boxes Checked
Certification Task
[cert_task]

Provides a warning if
the certifier attempts
to leave a record
without certifying the
checked elements

Check Table Name
Certification Schedule
[cert_schedule]

Updates the table
name when a
different filter is
selected.

UI Policies

Data Certification adds the following UI policies:

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

Name
Table
Description

Hide next scheduled
run

Certification Schedule
[cert_schedule]

Hides the Next
Scheduled Run field
when the schedule is
set to run once or on
demand only.

Hide Run When Not
Active

Certification Schedule
[cert_schedule]

Hide "run" associated
fields when active is
set to false.

Make table name
read only

Certification Schedule
[cert_schedule]

Makes the Table field
read-only.

Hide Table field
Certification Element
[cert_element]

Hides the Table field
on the certification
task form.

Make percent
complete field read
only

Certification Instance
[cert_instance]

Makes the Percent
complete field read
only when the State
is Work in Progress,
Closed Complete,
Closed Incomplete, or
Cancelled.

Show Assign to fields
Certification Schedule
[cert_schedule]

Shows the Assign
To field when the
assignment type is User
and hides the Assign
To field for all other
assignment types.

Show Group field
Certification Schedule
[cert_schedule]

Shows the Change
Group (formerly
Assignment Group)
field when the
assignment type is
Group and hides
the Change Group

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

Name
Table
Description

field for all other
assignment types.

Show User field
Certification Schedule
[cert_schedule]

Shows the User field
when the assignment
type is User.

Show Assignment
Fields

Certification Schedule
[cert_schedule]

Shows the Assign To
Empty option when
the assignment type
is User Field or Group
Field.

Business Rules

Data Certification adds the following business rules:

Name
Table
Description

Adjust dates for cert
tasks

Certification Instance
[cert_instance]

Adjusts dates for tasks
belonging to the
certification instance
when the dates are
changed for an active
certification.

Cancel Instance
Certification Instance
[cert_instance]

Cancels all open
certification tasks
when an active
certification is
canceled.

certification audit
instance events

Certification
Audit Instance
[cert_audit_instance]

Sends an inserted
event when an active
certification audit
instance is created.
Sends a completed
event when an
active certification
audit instance is

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

Name
Table
Description

marked as complete
or incomplete.

certification element
events

Certification Element
[cert_element]

Sends a failed event
when an element of a
certification is marked
as failed.

certification instance
events

Certification Instance
[cert_instance]

Sends an inserted
event when an
instance of a
certification is
created. Sends a
completed event
when an instance
of a certification is
completed.

Certification Instance
Rollup

Certification Task
[cert_task]

Updates the Percent
complete field on the
certification instance
record.

certification task
events

Certification Task
[cert_task]

Sends an inserted
event when a task
is inserted. Sends
a completed event
when a task is
deactivated. Sends a
canceled event when
a task is canceled.

Certification Task
Values

Certification Element
[cert_element]

Updates the percent
complete of the
parent task when a
certification element is
updated.

Check Certification
Audit Progress

Certification Instance
[cert_instance]

Updates the
completion status of
the audit instance

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

Name
Table
Description

as a whole when
a certification that is
part of an audit is
complete.

Clean Certification
Views

Certification Instance
[cert_instance]

Cleans all related
records when a
certification instance is
deleted.

Copy certification
schedule fields

Certification Instance
[cert_instance]

Copies changes to the
certification schedule
to the certification
instance.

Merge Certification
Tasks

Certification Task
[cert_task]

Merges two tasks
together when a task
is reassigned and
there is another task
for the same instance
with the new user.

Prevent delete of Filter
with Schedule

Certification Filter
[cert_filter]

Prevents the deletion
of a filter that is used
in a schedule.

Reassign Notification
Certification Task
[cert_task]

Sends out a
notification to the
new and previous
assignees when a task
is reassigned.

Rollup State
Certification Task
[cert_task]

Updates all necessary
parent items when
task state is changed.

Update audit
reference

Certification Task
[cert_task]

Makes Data
Certification records
compatible with
Desired State records.
This rule makes sure

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

Name
Table
Description

that the Audit field
is correctly completed
when a record is
inserted using Insert
and Stay.

Update audit result
Certification Element
[cert_element]

Makes Data
Certification records
compatible with
Desired State records
for reporting purposes.
This rule puts certified
values in the Desired
value column when
an audit is Certified. It
also puts actual values
in the Discrepancy
value column when
an audit is Failed.

Update follow_on_task
& audit references

Certification Element
[cert_element]

Makes Data
Certification records
compatible with
Desired State records
for reporting purposes.
This rule makes
certification tasks
compatible with
follow-on tasks and
displays all tasks,
regardless of origin.

Update next run time
Certification Schedule
[cert_schedule]

Updates the Next
scheduled run field
when a schedule runs
Daily, Weekly, Monthly,
or Periodically.

Verify Fields
Certification Schedule
[cert_schedule]

Verifies that no field is
used in both Display
and Certification fields

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

Name
Table
Description

when the fields of a
certification schedule
are changed.

Formatter

Data Certification adds the following formatter:

Formatter

Name
Description

Certification Task Elements

Enables custom user interface
formatting of elements on a
certification task. For example,
displays the green check mark
and red exclamation point to use
when certifying an element.

Properties

Properties

Name
Table
Description

glide.ui.cert_task_activ
ity.fields

System Properties
[sys_properties]

Defines which journal
field is the task activity
field.

Default: work_notes

User Roles

Data Certification adds the following user roles:

User Roles

Role
Contains Roles
Description

certification_admin
certification
Can:

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

Role
Contains Roles
Description

• Create and
configure
certifications

• Override provided
answers

• Perform certification
tasks for certification
task owners

• Send certification
task notifications to
users and owners at
any time

• Cancel or delete
certifications in any
state

certification_filter_adm
in
certification

Can create and
manage all data
certification filters.

certification
none

Can update active
or incomplete tasks
assigned to them or
to groups of which
they are a member.
Can also update
configuration items
owned by them or
by groups of which
they are a member.
Receives email
notifications when
assigned certification
tasks.

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

Events

Data Certification adds the following events. The ServiceNow system uses
these events to send email notifications to task owners and managers
about changes in certification records.

Name
Description

cert_audit_instance.completed
A certification audit instance has
been completed.

cert_audit_instance.inserted
A certification audit instance has
been inserted.

cert_element.failed
A certification element has failed
certification.

cert_instance.complete
A certification instance has been
completed.

cert_instance.inserted
A certification instance has been
inserted.

cert_task.cancelled
A certification task has been
canceled.

cert_task.completed
A certification task has been
completed.

cert_task.escalate
A certification task record has
been escalated.

cert_task.inserted
A new certification task has been
created.

cert_task.notifications
A certification task notification has
been resent to a user.

cert_task.overdue
A certification task is past its
specified completion date.

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

Name
Description

cert_task.reassign
A certification task has been
reassigned.

cert_task.warning
A new task escalation point has
been reached.

Email Templates

Data Certification adds the following email templates:

Name
Message

certification.task.cancelled

A certification task assigned to
you/your group as part of the data
certification and management
process has been canceled.

certification.task.reminder.inserted

A certification task that has been
assigned to you/your group as
part of the data certification and
management process requires
attention.

certification.task.reminder.outstan
ding

A certification task that has been
assigned to you/your group as
part of the data certification and
management process requires
attention.

certification.task.reminder.overdue

A certification task that has been
assigned to you/your group as
part of the data certification and
management process is overdue.

## Certification schedules

A certification schedule defines the information that requires certification
and the frequency of execution.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

112

Zurich ServiceNow AI Platform Capabilities

---
*Page 113*

At each time interval specified, or on-demand, the certification schedule
generates a set of certification tasks based on set conditions. Use the
Preview Certification Tasks related link to preview the certification tasks
generated from a certification schedule.
Certification schedule

## Certification tasks

A certification task represents the work of verifying the data associated
with a particular record.

Task owners are responsible for performing the certification tasks. Tasks
have an associated workflow that sends reminders to the task owner
and, if necessary, the manager of the owner at regular intervals.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

113

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 113, 800x639px]*

```
.. .:.:::.:::..                     .:....:............. ...
. .

.
...  .  .

.
..                              ........
........


..


.                             .
.    .         . .     . .. .  .
.    .      .  .
......
....



.         .
```

---
*Page 114*

Certification task

Note:   If the message

Record cannot be certified until the instance is finish
ed creating all certification tasks and elements. Relo
ad the page to try again
appears, it signifies that:

• A large amount of data is present in the cmbd_ci and
cmdb_ci_server tables.

• Data certification task processing is not complete (Data
Certification jobs are still in process).

As directed, reload the page and wait for the processing to
complete.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

114

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 114, 800x649px]*

```
.. .:.:::...                   .....:...  ..    ... ... ....

........
...                         .......
...                          .. ..      .
..        ..
..








... .  ... . ...
........==-... .....                  ................:.
.      ..



.                ....          ....                .


```

---
*Page 115*

Clean up invalid elements

Use the Clean up invalid elements UI action to query and delete
certification elements that reference invalid records. Each certification
task has a certification schedule, and each certification schedule has
Table and Filter fields. When you use this UI action, it performs the
following processing:

1. Collects all available records from Table field in the certification
schedule with filters that are available in certification schedule.

2. Collects all certification elements associated with the current
certification task.

3. Deletes the certification elements that are no longer available for the
data collected in the previous step.

4. After deleting invalid records, it recomputes the certification
completion percentage using the following formula:

(1 - (number of certification elements pending / total no of
certification elements associated)) * 100;)

5. If there are no certification elements with a Pending status, it marks
the associated certification task as Closed, and deactivates it.

6. If there are remaining certification elements with a Pending status, it
activates the associated certification task and changes its status to
Work in Progress.

## Certification elements

Each element of each record being certified is tracked in its own
certification element record.

Also tracked are the date and time when the element was certified,
comments, and the original and certified values of the field. You can
view elements on individual certification tasks. Or, you can directly
access the Certification Elements [cert_element] table by navigating to
All and then in the Filter box, entering cert_element.list.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

115

Zurich ServiceNow AI Platform Capabilities

---
*Page 116*

Certification elements

## Certification instances

A certification instance is the collection of certification tasks for one
execution of a certification schedule.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

116

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 116, 800x521px]*

```
.........:==... ..            .              .... ..........
.        ..                                         ..
.

.........             .    .      .      .     .       .
...........  ......... ........................ ....... ....
............. ..........................................  ..
............                                            ..
...   ...                                        ...
...   ..                                         ...
. ...  .....  ... ....                     ....    ::.
.    .                                          ..
.    .                                          ...
...  ....   ... ....                     ....    .:.
..                                               ...
...   ..                                         ..
...   ...                                              ...
..:.......... ..........................................   .
..:........... .............................................
```

---
*Page 117*

Certification instances

## Certification audit instances

A certification audit instance is a collection of the certification instances
and tasks generated by a single execution of the certification audit
definition.

Certification audit instance

## Certification audit definition

A certification audit definition is a collection of certification schedules
that can be run at once.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

117

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 117, 800x511px]*

```
............ ..                              ...............
.     .          .          .    .     . .        . .
.
.......... .                                        .......


..
.                                                 ........
...                  ...                     ........
. ....       .....      ....       .......     ........


.    .....     .....        ......... .....     ......
.      ..          ..         .......
. .  .....     ........     ..:::::::.......    ......
.     ...           ...      .:::::::
.    .....      ...          ........     .         .
.    .....     ....          ........     .         .
.
```

*[Banner/Header Image - Page 117, 800x151px]*

```
...........:=-... .                          ...............


. .
.       .
```

---
*Page 118*

Certification audit definition

## Data Certification Overview module

The Data Certification Overview module displays various data
certification-related reports on the Data Certification Console
homepage.

The Overview module is a type of homepage.

The different levels of access are:

Access levels per role

Role
Access

certification
• View (view overview page and
refresh reports)

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

118

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 118, 800x612px]*

```
. . ::.::::.:::::..                .: ...:.... ...  ... .. .
.. ..........                  .. .  .  .  ..    .     .






..   .
..
..   .

.... .....  .............
. ..........---:----....
.. ..........---:----....  ...  ..                    ...
.... ............:..
.
.              .
..
.      . .                .                 .
.  .  ......         .......  ....... .............
. ..           .  ..
```

---
*Page 119*

Role
Access

• Review, certify, and fail
certifications

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

Data Certification Overview Module

The Overview module includes the following reports:

Data Certification Overview Module Description

report
Description
Table

30/60/90 Day Aging

Groups tasks by the
number of days (30,
60, 90, and 90 and
over) since the task
was opened.

Certification Task

Certification Instances
Lists all certification
instances.
Certification Instance

Certification Progress
Report

Groups tasks by
task owner, indicating
Certification Task

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

119

Zurich ServiceNow AI Platform Capabilities

---
*Page 120*

report
Description
Table

task progress as a
percentage.

Certification Task
Completed Report

Groups tasks by task
owner, indicating tasks
that are complete.

Certification Task

Exceptions To Date

Lists all task elements
that have comments
added and a state of
Failed or In Progress.

Certification Element

Functional Roll Up

Lists the managers
that have groups with
assigned certification
tasks. The report
is a horizontal bar
chart, grouped by
status, with each
bar representing a
manager of an
assignment group.

Certification Task

Hierarchical Roll Up

Shows the managers
that have employees
with assigned
certification tasks (task
owners). The report
is a horizontal bar
chart, grouped by
status, with each
bar representing a
manager of a task
owner (identified in
the Assigned to field).

Certification Task

Upcoming Schedules

Lists all schedules that
are scheduled to run
within the next 30
days.

Certification Schedule

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

120

Zurich ServiceNow AI Platform Capabilities

---
*Page 121*

Related tasks

• Use the Data Certification Overview module

View the status of data certification tasks.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Data Certification > Overview.

2. Click elements within the reports to obtain more information.
For example, click any of the colored bars in the Functional Roll Up
bar chart and detailed information replaces the Data Certification
Console screen.

3. Update some fields directly on the overview page.

Example

For example, in the red box on the image shown, a certification schedule
is being updated in the certification instances report.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

121

Zurich ServiceNow AI Platform Capabilities

---
*Page 122*

Data certification overview module

Related reference

• Data Certification Overview module

## Data Certification planning

Initial planning can make the certification process more successful.

By defining certification schedules and certification audit definitions,
users with the certification_admin role establish when certifications are
performed, who performs it, and what data must be certified.

Required Roles

Users with the certification_admin role can view filter versions. These users
can create, update, and delete filters, if they have the proper access
to necessary tables. In the base ServiceNow system, certification_admin
users have limited system rights and do not have access to all the tables
required for creating a filter. When assigning compliance resources,

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

122

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 122, 800x592px]*

```
...                      ........                      .
:.......................................................:
:                              ...                      .
:.   ....     ...              .::....    .          .  ..
:.   ...      ...              .......    .          .  ..
:.   ....     .....            .......    .             ..
:.   ...      ......           .::::::                  ..
:.   ....     ...              .......    .             ..
:.   ....     ...              .......    .          .  ..
:................................................:..::..:

....
:*++*=
.::::.
...  .  ..    ...   ....
......................... ..
......... ..................
............................
............................
......... ..................            ....
............................
......... ..................              .====-.
```

---
*Page 123*

make sure to grant additional roles to the certification_admin user as
needed. For example, this user requires roles that grant access to these
tables:

• Company [core_company]

• Cost Center [cmn_cost_center]

• Schedule [cmn_schedule]

Planning Data Certification

Planning the data certification process requires defining:

• The certification schedule defines certification for a particular set of
information on a particular table. It also generates certification tasks to
perform that certification. One certification task is generated per task
owner and a certification instance record groups the tasks.

• The optional certification audit definition groups some certification
schedules to be performed together and generates certification audit
instances to perform them.

The following questions require answers for each certification schedule:

• What information requires certification?

• When is the due date for certification?

• Who must perform the certification?

A filter is a subset of configuration items from any ServiceNow table that is
created with a standard condition builder.

Before you begin

Role required: admin

About this task

An example is a filter that selects all UNIX servers in the Australian data
center.

With filters, you can:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

123

Zurich ServiceNow AI Platform Capabilities

---
*Page 124*

• Create multiple versions of a filter and then select the version you want
to use.

• Use one filter on multiple certification schedules.

• View the number of records that match your filter as you create the
conditions.

Note:   Be sure to create certification filters before creating
certification schedules.

Procedure

1. Navigate to All > Data Certification > Certification Filters.

2. Click New.

3. Fill in the form (see table).

4. Click Submit.
This action saves the filter as version 1.
Certification filter V1

5. To create another filter version, modify the filter conditions and click
Update.
The system saves the new filter and increments the version number.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

124

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 124, 800x332px]*

```
.. .:.::::...                                   .:.........
.
.....



.


.     .

.
```

---
*Page 125*

Certification filter V2

By default, the Certification Filters list shows only the current version of
each filter. To see all filter versions, click All in the breadcrumbs.
Certification Filter List

6. To make an inactive filter the current version, open the inactive filter
and click Revert.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

125

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 125, 800x332px]*

```
.. ::.:::...                              .:.:.......... ..
.
.....


... ...............

.    .  .
. ..   .



```

*[Diagram Or Flowchart - Page 125, 800x434px]*

```
..........:==- .. .                      .:.................
.   ..  ..:::....
.   ..........
.      .          .. .            . .            . .

. .

. ........................    .............

.......     .......         ...........             .
.........     .......          ..............          .
.
......     .......          ..............          .
. .....      .......          .........


```

---
*Page 126*

Certification filter revert

This action creates a new, active version of the filter and makes all
previous versions inactive.

7. To delete a single filter version, open that version record and click
Delete.

8. To delete inactive versions of a filter, click Delete inactive versions
under Related Links in that filter record.
You cannot delete a filter that is used in a schedule definition. The
system displays a warning and the filter is not deleted.

Creating certification filters

Field
Description

Name
[Required] Filter name.

Description
[Optional] Brief description of the
filter.

Number

[Read-only] Automatically
assigned filter identification
number.

Table

Table containing the records to
be filtered. Use of the Database
View [sys_db_view] table is
limited by version.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

126

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 126, 800x392px]*

```
.. .:..:::...                            ...:... ... ... ...
.    ..                              .  .
.....



.
.
.


....
...  .         ............
.
```

---
*Page 127*

Field
Description

Active

Control to make the filter
available for use from the
Filter field on the Certification
Schedule form.

Version

Current version of this filter.
Any significant changes to the
filter make the current version
inactive. The system copies the
updated filter, marks it as active,
and increments the version
number. The system saves all
versions of the filter and makes
them available to users. More
than one version of a filter can
be marked active.

Filter condition

Field, operator, and value
to create the condition. The
available options depend on the
table selected. You can view the
number of records that match
the filter by clicking the refresh
icon.

Refresh Conditions

If the filter does not match any
records, the system marks the
certification instance as Closed
Complete, with the Percent
complete value set to 100%.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

127

Zurich ServiceNow AI Platform Capabilities

---
*Page 128*

Related concepts

• Data Certification planning

A certification schedule specifies the fields to display, the fields
that require certification, certification task assignments, completion
requirements for task owners, frequency of schedule, and detailed
instructions.

Before you begin

Role required: admin

About this task

Use the preview option to see what tasks are created before saving
the schedule. If the tasks are not what you want, edit the schedule
and preview the tasks again. The system creates certification tasks
automatically when it executes a schedule.

To schedule a certification:

Procedure

1. Navigate to All > Data Certification > Schedule Definitions.

2. Click New

3. Fill in the fields (see table).

4. Click Submit.

Defining A Certification Schedule

Field
Description

Name
A schedule name.

Filter
A certification filter for this
schedule.

Table

[Read-only] The table holding
the records to be certified. To
change the table name, select

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

128

Zurich ServiceNow AI Platform Capabilities

---
*Page 129*

Field
Description

a different Filter or create a new
Filter.

Display fields

The fields displayed in the
Certification Task list to provide
context. These do not require
certification themselves. For
example, although users are not
required to certify the Name field
of a record, it displays so that
users know what record they are
certifying.

Certification fields
The fields to certify on this
certification schedule.

Assignment type

A choice list to select how the
certification schedule assigns the
certification tasks.

• User Field: Select a user
reference field on the
table being certified. As an
example, select the user
named in the Managed by
field to identify the user
who performs the task. This
selection displays the Assign
to and Assign to empty
fields. If the reference field
on the record is empty, the
value in the Assign to empty
field is used.

• Specific User: Select a
specific user to perform the
tasks. This selection displays
the User field.

• Group Field: Select a group
reference field on the
table being certified. As an

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

129

Zurich ServiceNow AI Platform Capabilities

---
*Page 130*

Field
Description

example, select the Support
group field to identify the
user who performs the task.
This selection displays the
Assign to group and Assign
to empty fields. All members
of the group from the
reference field on the record
are assigned to the tasks. If
the reference field on the
record is empty, the value in
the Assign to empty field is
used.

• Specific Group: Select a
specific group to perform
the tasks. This selection
displays the Group field.
All members of the named
group are assigned to the
tasks.

User

This field appears when:

• Assignment type is Specific
User. This system assigns this
user to all certification tasks
for this schedule.

• The Assign to empty field is
set to Create Assigned Task,
and you have selected User
Field as the assignment type.
The system assigns this user to
certification tasks containing
unassigned records.

You can only select users with
the certification role.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

130

Zurich ServiceNow AI Platform Capabilities

---
*Page 131*

Field
Description

Assign to group

The group field that defines
the group assigned to the
certification tasks. This field
is available only when the
Assignment type is Group Field.

Group

The specific group to which
certification tasks are assigned
for this schedule. This field
is available only when the
Assignment type is Specific
Group

Assign to

The user field that defines
which user is assigned to
the certification task. This field
is available only when the
Assignment type is User Field.

Assign to empty

The behavior to use if the field
selected in Assign to or Assign
to group is blank on the record
being certified. For example, if
a task must be assigned to a
manager, but no manager is
identified, the value in this field
determines what happens. This
field appears only when the
Assignment type is User Field
or Group Field. The possible
selections are:

• Do Not Create Task: No task
is created when the Assign
to or Assign to group field is
empty.

• Create Unassigned Task:
Create a task, but do not
assign it to any user or group.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

131

Zurich ServiceNow AI Platform Capabilities

---
*Page 132*

Field
Description

The task can be manually
assigned later.

• Create Assigned Task:
Create a task and assign it to
the user or group specified. If
you selected an assignment
type of User Field, the User
field is available. If you
selected the Group Field
type, the Group field is
available.

The schedule automatically
creates certification tasks for all
records that do have "Assign to"
populated, regardless of which
selection you make for "Assign to
empty."

Days to complete

[Required] The number of days
that task owners have to
complete the certification tasks.
When the certification schedule
is part of a certification audit
definition, the Days to Complete
audit definition value overrides
the value set for the certification
schedule.

Active

Check box to activate
this certification schedule,
generating certification tasks at
the scheduled date and time.
Clear this check box to hide
scheduling fields on the form
(except Last run date) and not
generate certification tasks.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

132

Zurich ServiceNow AI Platform Capabilities

---
*Page 133*

Field
Description

Run

How often to run the schedule
that generates certification
tasks:

• Daily

• Weekly

• Monthly

• Periodically

• Once

• On Demand

Day

When Run is Weekly, the day
of the week when the schedule
runs and generates certification
tasks.

When Run is Monthly, the day of
the month the schedule runs and
generates certification tasks. If
the day is 29, 30 or 31, the
certification runs on the last day
of the month for shorter months.

Repeat Interval

When Run is Periodically, the
frequency that the schedule
runs to generate certification
tasks, entered in time, days, or
both. For example, set Days to
10 and Hours to 14:00:00 to
run the schedule and generate
certification tasks every 10 days
at 14:00.

Starting
When Run is Periodically or
Once, the date and time the

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

133

Zurich ServiceNow AI Platform Capabilities

---
*Page 134*

Field
Description

schedule runs and generates
certification tasks.

Time

When Run is Daily, Weekly,
Monthly, or Once, the time of
day, on a 24-hour clock, the
schedule runs and generates
certification tasks.

Last run date

[Read-only] The date and time
that the schedule ran last,
either on its regular schedule
or manually, and generated
certification tasks.

Next scheduled run

[Read-only] The next date and
time the schedule runs and
generates certification tasks.

Task Description

A description to add to the
Short Description field of the
certification task.

Instructions

An HTML field for providing
instructions to the user or group
performing the certification.

Related concepts

• Data Certification planning

Previewing certification tasks saves any changes to the Certification
Schedule form and displays the tasks that are created when you execute
the certification schedule.

Before you begin

Role required: admin

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

134

Zurich ServiceNow AI Platform Capabilities

---
*Page 135*

About this task

Previewing tasks is especially useful if you want to test different
combinations of options in the Assignment type, Assign to, and Assign
to empty fields.

Procedure

1. Navigate to All > Data Certification > Schedules > Schedule
Definitions.

2. Click a certification schedule Name.

3. In Related Links, click Preview Certification Tasks.
The tasks to be created appear at the top of the screen.
Certification info message

Related tasks

• Define a certification schedule

Related concepts

• Data Certification planning

After you define a certification schedule, the system automatically sends
notifications to specific users based on the information in the schedule.

Before you begin

Role required: admin

About this task

The following notifications are sent automatically:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

135

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 135, 512x114px]*

```
. .....                                               ..
....:.:.......................................         ..
......:.:...::...:.:...::...:::.................
......:......:.........:....:....::......:..:.:.
......:.:...::...:.:...::..............:........
.......... ............................  ...
```

---
*Page 136*

Certification Schedule Notifications

Time elapsed to end date Email template name
Notification message is
sent to

0% (when task is
created)

certification.task.remin
der.inserted

Task owner or
assignment group, if
specified

50%
certification.task.remin
der.outstanding

Task owner or
assignment group, if
specified

75%
certification.task.remin
der.outstanding

Task owner,
assignment group,
if specified, and
manager of the task
owner, if specified

95%
certification.task.remin
der.outstanding

Task owner,
assignment group,
if specified, and
manager of the task
owner, if specified

100%
certification.task.remin
der.overdue

Task owner,
assignment group,
if specified, and
manager of the task
owner, if specified

The email templates used in the notifications can be edited, for example,
to change the email message text.

Executing a Certification Schedule

Executing a certification schedule generates certification tasks based on
the schedule.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

136

Zurich ServiceNow AI Platform Capabilities

---
*Page 137*

Procedure

1. Navigate to All > Data Certification > Schedules > Schedule
Definitions.

2. Click a certification schedule Name.

3. Click Execute Now.
The related lists Certification Instances and Certification Tasks display
the instances or tasks generated by the schedule. The amount of
time it takes to generate all certification tasks depends on the size of
the table selected and how many fields require certification.
Execute certification schedule

A certification audit is a collection of certification schedules that can be
run as a single entity.

Before you begin

Role required: admin

About this task

Certification audits can be useful when there are multiple certification
schedules. After creating a certification audit definition, you can
generate a certification audit instance. The certification audit instance
is a collection of the certification instances and tasks generated by a
single execution of the certification audit definition.

Procedure

1. Navigate to All > Data Certification > Audits > Audit Definitions.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

137

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 137, 800x325px]*

```
...................
..........                                             .
.. ....... ...  .                .     .... ..............
.
.
.                                                ..
.     ....            .                        .........
.  ....        ....        .....          ...........
.      ...                                     ........
....            .       ....             ........
.  .  ....        ......      ....          ..::::::::::
..........
```

---
*Page 138*

2. Click New.

3. Fill in the fields (see table).

4. Right-click the header bar and select Save.

5. In the Certification Schedules related list, click Edit.

6. In the Collection list on the left, select one or more schedules and
click Add.

7. Click Save.

8. In Related Links, click Create Certification Audit Instance.
The system generates an audit instance based on the certification
schedules selected. All audit instances based on this audit definition
are listed in the Certification Audit Instances related list.

Defining and Creating a Certification Audit

Field
Description

Name
The name of the audit definition.

Days to Complete

The number of days that task
owners have to complete the
certification tasks created by this
audit definition. Overrides the
identical field on the certification
schedule.

Description
A short description of the
intended audit.

Related concepts

• Data Certification planning

You can view a list of all certification audit instances at any time.

Before you begin

Role required: admin

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

138

Zurich ServiceNow AI Platform Capabilities

---
*Page 139*

Procedure

1. Navigate to All > Data Certification > Audits > Audit Instances.

2. View the Certification Instances related list.

The list contains each of the associated instances generated as part
of the audit.

Related concepts

• Data Certification planning

## Data certification performance

After the certification process has been planned, certification tasks can
be performed according to defined schedules.

Users with the certification role can perform certification tasks. The
certification tasks can be tracked as part of certification instances.

Related tasks

• Define a certification schedule

Related concepts

• Data Certification planning

Related reference

• Installed With Data Certification

After you execute a certification schedule manually or at a scheduled
time, the ServiceNow system performs certain actions.

• Creates certification tasks for any records that meet the filter
requirements in the specified table, like tasks from the Configuration
Item [cmdb_ci] table.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

139

Zurich ServiceNow AI Platform Capabilities

---
*Page 140*

• Assigns the new tasks to the user or group identified in one of these

certification schedule fields:

• Assign to

• User

• Assign to group

• Group

• Places the new tasks in the Work in Progress state.

• Adds the certification schedule Short description and Assigned to
values to the corresponding fields on the certification task record.

• Adds the certification schedule Days to complete and Complete by
date fields to the certification task record, based on when the task is
created.

Note:   If the certification filter does not match any CIs, the system
sets the State to Closed Complete and the Percent complete to 100.

To view tasks assigned to you, navigate to Data Certification > Tasks >
My Tasks. To resolve tasks assigned to you, see Certify an element. For
more information about purpose and usage of certification tasks, see
certification tasks.

The following information is tracked on the certification task record:

Certification task record

Field
Description

Number
An identification number for the
certification task.

Assigned to
The user responsible for certifying
the data.

Assignment group
The group responsible for certifying
the data.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

140

Zurich ServiceNow AI Platform Capabilities

---
*Page 141*

Field
Description

Complete by

[Read-only] A date field
containing a deadline for the task.
This field is automatically filled in
based on the Days to Complete
field on the certification schedule.

State

[Read-only] The current state
of the certification task. The
selections are: Work in Progress,
Closed Incomplete, Closed
Complete, and Cancelled.

Percent complete

The task progress as a percentage.
This field is read-only when a task
is in a Closed Incomplete, Closed
Complete, or Cancelled state.

Escalation

[Read-only] The escalation level of
the task. When 0–49% of the time
to Complete By has elapsed, this
field is set to Normal. At 50%, this
field changes to Moderate and an
email reminder is sent to the task
owner. At 75%, this field changes
to High and an email reminder
are sent to the task owner and
the manager of the task owner.
At 95%, this field remains set to
High, but a second email reminder
is sent to the task owner and
manager.

Short Description

A short description of the task.
This field is automatically filled in
with the text from the certification
schedule of the Task description
field.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

141

Zurich ServiceNow AI Platform Capabilities

---
*Page 142*

Field
Description

Work notes
Information about work performed
on the certification.

The Certification Task form contains a list of all elements to be certified.

Before you begin

Role required: admin

About this task

Note:   After you certify all the elements in a task, no elements can
be reverted.

Procedure

1. Navigate to All > Data Certification > Tasks > My Tasks.

2. Open a certification task with a State of Work in Progress.

3. In the upper right corner of the list, select records that require
certification for this task or all records that are part of this certification
task.
Certification list 3

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

142

Zurich ServiceNow AI Platform Capabilities

*[Figure Or Illustration - Page 142, 320x240px]*

```


..        .         ...... .
.. :::::.::.:::.:.::      .::
..........................+-


.  .::.:. .::          .  .............   :.  .:.:.
.  .=-:=. .=-          .  ..:.::..:.::.   =-. :=.=-.
.        ..                          .






..       .-: ..........       :-................
..        .. ... ... ..       ..  ......  .. ...




```

---
*Page 143*

4. Select the check box beside a certification element.

5. In Optional comment for checked elements, above the list, enter
information that would be useful to others.
Certification list

6. Do:

• Click the green check mark to certify the element.

• Click the red exclamation point to fail the element.

7. To see the certified or failed element, set the view to Show All
Records.

A green check mark or red exclamation mark appears beside the
element.

8. Point to an icon to see any certification comments.

9. Ensure that all elements have the correct certification, either
accepted or rejected.

After you certify all elements, no elements can be reverted. When
all elements of a certification task are certified or rejected, the task
State changes to Closed Complete.

View audit results after you certify the elements.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

143

Zurich ServiceNow AI Platform Capabilities

*[Figure Or Illustration - Page 143, 414x269px]*

```
.......... ................... ............. .......
.
............................        .--: ::-.
..  .                ... .::
......
.:. .:......+====+: .:.... .....
.:. ........++===+: ......  .
......
..
.    .

..
.-. ....  .              :: .......
........   .................   ..     .
........                               ..
.. .      ..    .:........:.........:.....::...:.........:..
.:......  ..                           ..
....................................... ...................
...   .::::.                   :::..::::....::..:.
```

---
*Page 144*

Before you begin

Role required: admin

Procedure

1. Navigate to All > Data Certification > Schedules > Audit Results.

The list of data certification audit results appears, grouped by
certification instances. Certified configuration items show the Original
value only. Failed CIs contain the Certified value and the Original
value.

2. Click the links in the list to open any of the related records.
Data cert audit results

Users with the certification_admin role can export the certifications list
and save the list in Excel, CSV, XML, or PDF format. This list is useful when
you have a long list of certification elements or if many different users are
assigned to certify elements on a single certification schedule.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Data Certification > Tasks > All Tasks

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

144

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 144, 800x405px]*

```
........-=... .           .                     ............


.......
............................................................
.........  .................................................
...........      .    ..     ...................    ...
..   ....  ...                                        ....
..... ....   ..    . .                     ..    ....
.    .. . ....                                 ..    ....
.    .... ..                                   ..    ....
..... .....   .    .                       ..    ....
.    ...                                             ...
...........          ...     ...................    ...
............
```

---
*Page 145*

2. Open a task.

3. Open any column context menu in the certification data list and
complete the export.

You cannot reset any element after all elements are certified.

• To reset individual certifications, right-click the element in the
certification list and select Revert Certification.

• To reset the entire task to its starting point, click the Reset all
Certifications to Pending related link.

The Certification Tasks related list on the certification instance record
provides information about associated tasks.

Before you begin

Role required: admin

About this task

The State field on the certification instance record is read-only and is
based on the cumulative states of the certification tasks associated
with the instance. The Percent complete column allows users with
the certification_admin role to track task progress quickly. For more
information, see Track Certification Tasks.

To track a certification instance:

Procedure

1. Navigate to All > Data Certification > Schedules > Instances.

2. Click a certification instance Number.

3. View and edit the following fields as necessary.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

145

Zurich ServiceNow AI Platform Capabilities

---
*Page 146*

Certification instance

Field
Description

Number

[Read-only] Automatically
generated identification number
for the instance.

Certification Schedule

The certification schedule used
to create the certification
instance.

State

[Read-only] Current state of
the certification instance: Work
in Progress, Complete, Closed
Incomplete, or Cancelled. For
more information, see Track
Certification Tasks.

Created

[Read-only] Date and time
the certification instance was
created. Date is filled in
automatically when the Execute
Now button clicks the associated
certification schedule.

Complete by

[Required] Date and time when
the certification instance must
be completed. The system
updates this field when it
executes the schedule, using
the deadline specified on the
instance. All certification tasks
associated with the certification
instance must be marked
Complete, Closed Incomplete,
or Cancelled before the
instance is complete.

Percent complete

Percentage of the instance
that has reached the Closed
Complete state. This field is
automatically filled in based

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

146

Zurich ServiceNow AI Platform Capabilities

---
*Page 147*

Field
Description

on the Percent Complete fields
on the associated certification
tasks.

Task Description

Information about the
certification instance. This field
automatically displays the text
from the Task description field
of the associated certification
schedule.

Instructions

Field for providing instructions to
the user or group performing
the certification. This field is
automatically filled in with
information from the Instructions
field on the associated
certification schedule.

Users with the certification_admin role can cancel a certification
instance.

Before you begin

Role required: admin

About this task

The instance must have a State of Work in Progress. Canceling a
certification instance:

• Changes the certification instance State to Cancelled.

• Changes all associated Work in Progress certification tasks to
Cancelled.

To cancel a certification instance:

Procedure

1. Navigate to All > Data Certification > Schedules > Instances.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

147

Zurich ServiceNow AI Platform Capabilities

---
*Page 148*

2. Click a certification instance Number.

3. Click Cancel.

Use the certification task state to track the progress of a task.

Before you begin

Role required: admin

About this task

The available task states are Work in Progress, Closed Complete, Closed
Incomplete, and Cancelled.

When the state of a certification task changes, the certification instance
state also changes in the following cases:

• If any certification task is in Work in Progress state, the certification
instance is placed in Work in Progress state.

• If all certification tasks are in Cancelled state, the certification instance
is placed in Cancelled state.

• If all certification tasks are in Cancelled or Closed Complete state, the
instance is placed in a Closed Complete state. For example, if three
certification tasks are Cancelled, and one task is Closed Complete, the
instance state is changed to Closed Complete.

• When one certification task is Closed Incomplete and the remainder of
the tasks are Cancelled or Closed Complete, the instance is placed in
Closed Incomplete.

To view the state of certification tasks:

Procedure

1. Navigate to All > Data Certification > Tasks and select My Tasks or All
Tasks.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

148

Zurich ServiceNow AI Platform Capabilities

---
*Page 149*

2. View the State column for each task.

Users with the certification_admin role can escalate a task in the Work
in Progress state. To escalate a task, the task owner identified in the
Assigned to field on the task record must have an associated manager.

Before you begin

Role required: admin

About this task

Personalize the User form to see the Manager field.

Escalating a task:

• Sends an email message to the task owner and the manager of the
task owner stating that the task has been escalated.

• Sets the manager as the new task owner.

The event that triggers the escalation is named cert_task.escalate and
the email notification is named Escalation Notification. To edit the text
of the email message that is sent, edit the Escalation Notification email
notification directly.

For more information, see Email notifications.

To escalate a certification task from the Certification Task form:

Procedure

1. Navigate to All > Data Certification > Tasks > All Tasks.

2. Select a certification task Number.

3. Select Escalate.
If the Escalate button is not available, the user in the Assigned to field
does not have an associated Manager.

Escalate a certification task to notify the manager of the current task
owner.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

149

Zurich ServiceNow AI Platform Capabilities

---
*Page 150*

Before you begin

Role required: admin

To escalate a task, the task owner identified in the Assigned to field on
the task record must have an associated manager.

Procedure

1. Navigate to All > Data Certification > Tasks > All Tasks.

2. Select the check box to the left of a certification task Number, you
can select multiple check boxes.

3. From the Actions on Selected Rows menu below the list, select
Escalate.
If the Escalate button is not available, the user in the Assigned to field
does not have an associated Manager. Select multiple tasks from
the list. The menu option shows how many tasks are not eligible for
escalation, such as Escalate (4 of 6).

## Reassign a certification task

If you have the certification_admin role, you can reassign any
certification task in the Work in Progress state. Tasks in Closed Complete,
Closed Incomplete, or Cancelled state cannot be reassigned. When a
task is reassigned, the current task owner and the new task owner are
sent a message.

Before you begin

Role required: certification_admin

About this task

The event associated with the reassignment is named cert_task.reassign
and the email notification is named Certification Task Reassignment. To
edit the text of the email message that is sent, edit the Certification Task
Reassignment email notification directly.

For more information, see Email notifications.

To reassign a certification task:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

150

Zurich ServiceNow AI Platform Capabilities

---
*Page 151*

Procedure

1. Navigate to All > Data Certification > Tasks > All Tasks.

2. Click a certification task Number.

3. Enter a new name in the Assigned to field.

## Send certification task reminders

The Certification Task Escalations workflow sends automatic email
reminders.

The Certification Task Escalations workflow sends automatic email
reminders to the:

• Certification task owner.

• Assignment group, if the assignment group was specified on the
Certification Task form.

• Manager of the certification task owner, if necessary and if a manager
was specified on the User form.

The reminders are based on the Complete by field on the certification
task record. If the Complete by date is changed, the reminder schedule
automatically adjusts to reflect the new date.

Certification task reminders

Time elapsed to end date Email reminder is sent to
Escalate field on task
record reads

50%

task owner and
assignment group (if
specified)

Moderate

75%

task owner,
assignment group,
and manager of the
task owner

High

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

151

Zurich ServiceNow AI Platform Capabilities

---
*Page 152*

Time elapsed to end date Email reminder is sent to
Escalate field on task
record reads

95%

task owner,
assignment group,
and manager of the
task owner

High

100%

task owner,
assignment group,
and manager of the
task owner

High

To set reminders for different or more intervals, edit the workflow
Certification Task Escalations. In addition to the email reminders sent
automatically, users with the certification_admin role can send email
reminders manually at any time.

How to manually send email reminders from the Certification Task form.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Data Certification > Tasks > All Tasks.

2. Click a certification task Number.

3. Right-click the header bar and select Resend email notifications.

How to manually send email reminders from the Certification Task list.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Data Certification > Tasks > All Tasks.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

152

Zurich ServiceNow AI Platform Capabilities

---
*Page 153*

2. Select the check box to the left of a certification task Number, you
can select multiple check boxes.

3. From the Actions on Selected Rows menu below the list, select
Resend email notifications.

4. Select multiple tasks from the list.
The menu option shows how many notifications are outstanding and
how many were sent, such as Resend email notifications (15 of 18).

## Mark a certification task as closed incomplete

Mark a task as closed incomplete if, for example, only some of the
elements can be certified.

Before you begin

Role required: admin

About this task

The following users can mark a task as closed incomplete:

• Users with the certification_admin role.

• User identified in the Assigned to field on the certification task record.

To mark a task as closed incomplete:

Procedure

1. Navigate to All > Data Certification > Tasks and select All Tasks, or My
Tasks.

2. Click a certification task Number.

3. In Work Notes, enter information about why the task could not be
completed.

4. Click Close Incomplete.
If at least one task on a certification instance is marked Closed
Incomplete, the Completed date and Percent complete fields on
the certification instance record are not updated. A user with the
certification_admin role can:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

153

Zurich ServiceNow AI Platform Capabilities

---
*Page 154*

• Complete the incomplete task or tasks.

• Cancel the incomplete task or tasks.
When all tasks on the certification instance are Closed Complete or
Cancelled:

• The system sets the Completed date field on the certification
instance record to the current date and time.

• The Percent complete field on the certification instance record is
set to 100 percent.

## Certification tasks cancellation

Users with the certification_admin role can cancel a certification task in
the Work in Progress or Closed Incomplete state.

When a certification task is cancelled, a notification email is sent to the
task owner or assignment group assigned to the task. The task owner or
assignment group manager is not notified.

Cancel a particular data certification tasks in the Work in Progress state.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Data Certification > Tasks > All Tasks.

2. Find a task with a State of Work in Progress.

3. Click the task Number.

4. Click Cancel.

Cancel data certification tasks in the Work in Progress state.

Before you begin

Role required: admin

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

154

Zurich ServiceNow AI Platform Capabilities

---
*Page 155*

Procedure

1. Navigate to All > Data Certification > Schedules > Instances.

2. Find an instance with a State of Work in Progress.

3. Click the instance Number.

4. Click Cancel.

All tasks in the instance with a state of Work in Progress are cancelled.
The task owner or assignment group is notified.

The email template used for the notification is named
certification.task.cancelled. The email templates can be edited to
change the email message text, for example.

## Domain separation and Data Certification

Domain separation is supported in Data Certification processing. Domain
separation enables you to separate data, processes, and administrative
tasks into logical groupings called domains. You can control several
aspects of this separation, including which users can see and access
data.

Support level: Basic

• Business logic: Ensure data goes into the proper domain for the
application’s service provider use cases.

• In the application, the user interface, cache keys, reporting, rollups,
aggregations, and so on, all consider domain at production run time.

• The owner of the instance needs to be able to set up the application to
function normally across multiple tenants.

Use case: When a service provider (SP) uses chat to respond to a tenant-
customer’s message, the client must be able to see my response.

How domain separation works in Data Certification

• Data Certification has only basic domain separation. As long as the
Certification Instances (CIs) or records that must be certified are
correctly domain-separated and the users who must certify the CIs or

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

155

Zurich ServiceNow AI Platform Capabilities

---
*Page 156*

records are in a domain that can view the data, Data Certification
works as expected.

• Recommendation: The instance owner must be responsible for
assigning Certification Tasks and Certification Instances to the correct
domain. Changing the domain for these records does not change
functionality, but limits the view of the records.

How to set up domain separation for Data Certification

After enabling the Domain Separation plugin, there are no additional
steps required to set up domain separation for Data Certification.

• instance owners determine which CIs or records that need to be
certified can be domain-separated.

• Customers can configure a domain-separated environment by
assigning tasks to a domain, but if the data is already domain-
separated, then only users with the right domain permissions can view
the data in a certification task.

How tenant domains manage their own application data

It's not necessary to set the domain on the certification tables but it can
be done if the instance owner should want that. As long as the CI’s
or records that must be certified are domain-separated, users with the
correct domain permissions can view them.

Domain-separated tables

• cert_instance – Changing the domain on this table does not change
any functionality, nor does it change the domains of the tasks created
from the table.

• cert_task – Changing the domain on this table changes the domain
viewing permissions of the task.

• cert_element – It is not recommended to change the domain on these
records. As long as the CIs or records to be certified are already
domain-separated, cert_element records will reflect that.

• cert_filter – Changing the domain on this table changes the domain
viewing and filtering of CIs or records.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

156

Zurich ServiceNow AI Platform Capabilities

---
*Page 157*

Use cases

Instance owners who have multiple clients that certify the infrastructure
they own can assign domains to those CIs and the Certification Tasks to
restrict the view from one client to another.

Related topics

• Domain separation for service providers

## Components related to CMDB Data Manager

The following scheduled jobs, tables, roles, and properties, are related
to CMDB Data Manager. Some of those, are installed with CMDB
Workspace.

System properties

As a Data Manager Administrator (data_manager_admin) you can view
CMDB Data Manager properties in CMDB Workspace.

1. Navigate to Workspaces > CMDB Workspace and then select
Management in the CMDB Workspace menu bar.

2. Select the Data Manager link in Management tools, in the Manage
section.

3. Select Settings in the left navigation bar.

Properties/Settings/Labels in the Data Manager settings page

Property/Setting/Label
Description

glide.cmdb.data.manager.delete.
batch.size

Size of each batch of CIs that
is deleted or archived (affects
performance optimization).

• Type: Integer

• Default value: 1000

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

157

Zurich ServiceNow AI Platform Capabilities

---
*Page 158*

Property/Setting/Label
Description

Retirement definitions

List of retirement definitions used
in CMDB Data Manager life-cycle
policies. For more information
about the concept and usage of
retirement definitions, see:

• Retirement definitions

• Manage retirement definitions for
CMDB Data Manager

Scheduled job users

User group from which to select
the user that scheduled jobs run
as, when creating certification and
attestation policies. The default
value for the Scheduled job
default user field is DataManager
Job Runner which is a member
of the default User group Data
Manager Scheduled Job Users.

The setting of this property
determines the list of users
available in the Run policy
scheduled job as field on the
Schedule form of a new policy.

sn_cmdb_ws.cmdb.dm.policy_typ
es.due_date_notification

Notifications

Notifications about certification
and attestation incomplete tasks.
When either is checked, the
system notifies task owners as the
due date for incomplete tasks
is approaching. Notifications are
sent when 50%, 70%, and 90% of
the time to due date has passed.
On the task due date, a past
due notification is sent to the task

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

158

Zurich ServiceNow AI Platform Capabilities

---
*Page 159*

Property/Setting/Label
Description

owner and to the task owner's
manager.

Upon closing a task, sending
notifications stops.

For information about how the
Days to complete setting is used
to calculate when notifications are
sent, see Create a CMDB Data
Manager policy.

sn_cmdb_ws.glide.cmdb.data.ma
nager.aging.policy.task.timeframe

Aging policy task timeframe

Number of days before a Data
Manager task is marked as aged.

• Type: Integer

• Default value: 30

glide.cmdb.data.manager.subflo
w.timeout

Threshold for subflow run time

Threshold (in milliseconds) for
subflow running time. A subflow
that passes this threshold while
running, is cancelled.

• Type: Integer

• Default value: 600,000 (10
minutes)

glide.cmdb.data_manager.defaul
t_archive_time

Number of days CIs are
archived before they get deleted
permanently

Number of days that it is still
possible to restore archived CIs
from archive tables. After the
specified number of days pass,
archived CIs are permanently
deleted from the archive tables.

• Type: Integer

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

159

Zurich ServiceNow AI Platform Capabilities

---
*Page 160*

Property/Setting/Label
Description

• Default value: 120

cmdb.data.manager.stale.task.life
.in.days

Number of days after which task is
considered stale

Number of days after which a task
is considered stale and is set to
Closed Cancelled by the CMDB
Data Manager - Stale Task Cleaner
daily scheduled job.

Details:

• Type: Integer

• Default value: 90

sn_cmdb_ws.glide.cmdb.data_ma
nager.rejected.task.notifications.gr
oup

Group to receive notifications for a
rejected task

System identifier of a user group to
notify about tasks that are being
rejected.

By default, this property has
no value, in which case, all
data manager administrators are
notified about rejected tasks.

For information about how this
property is used when reviewing
and rejecting life-cycle tasks, see
Review CMDB Data Manager
tasks.

Scheduled jobs

Scheduled job
Description

CMDB Data Manager Archive/
Delete Policy Processor

Processes all published polices of
type Archive and Delete:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

160

Zurich ServiceNow AI Platform Capabilities

---
*Page 161*

Scheduled job
Description

• Applies policies only to CIs that
are already retired.

• Processes all Archive policies first,
and if no errors encountered,
continues to process any Delete
policies.

CMDB Data Manager Retire Policy
Processor

Processes all published polices of
type Retire: Applies policies only to
CIs that are not retired.

CMDB Data Manager - Stale Task
Cleaner

Cleans up stale CMDB Data
Manager tasks by setting the task
to Closed Cancelled.

The
cmdb.data.manager.stale.task.life
.in.days system property
determines the number of days
after which a task is considered
stale (90 by default).
A task becomes stale if:

• The task was created at least 90
days (by default) ago and it is still
open.

• The approval requests are older
than 90 days (by default) and
the task is not yet approved.

CMDB Data Manager Delete
Related Entry Policy Processor

Processes the Delete CMDB
Related Entry policy by
deleting the specified related
tables from the Related Entry
[cmdb_related_entry] table.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

161

Zurich ServiceNow AI Platform Capabilities

---
*Page 162*

Tables

Table
Description

CMDB Data Management Policy

[cmdb_data_management_policy
]

Details about CMDB Data
Manager policies.

CMDB Data Management Policy
Executions

[cmdb_data_management_policy
_execution]

Execution records that correspond
to each policy run. As policies
run according to their recurring
schedule, for each run the system
generates a record with a unique
policy execution number for that
run. A policy execution number
has a prefix of 'PLCEXEC'.

Execution records associated with
certification policy runs, are
used for populating the Data
Certification Dashboard.

CMDB Data Management Policy
Runtime Attributes

[cmdb_data_management_policy
_runtime_attributes]

Current policy metadata including
status and summary.

CMDB Data Management Task
Control

[cmdb_data_management_task]

Open policy tasks generated by
published policies.

CMDB Data Management Tasks to
CIs
Associations of tasks to CIs.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

162

Zurich ServiceNow AI Platform Capabilities

---
*Page 163*

Table
Description

[cmdb_data_management_task_t
o_ci]

CMDB Data Manager Task to
Documents

[cmdb_data_management_task_t
o_document]

Associations of task and to related
items.

CMDB Data Management
Attestation Tasks to CIs

[sn_cmdb_ws_attestation_task_to_
ci]

Associations of task and
attestation CIs.

CMDB Data Management Tasks to
CIs

[cmdb_ci_state_management_tas
k_to_ci]

Associations of task and CIs for
'Dependent CI Deletion' policy
type.

Excluded CIs

[cmdb_policy_ci_exclusion_list]

Tracks the CIs that are set to be
excluded during policy evaluation.

CMDB Policy Type

[cmdb_policy_type]

Policy types supported by the
CMDB Data Manager.

CMDB Policy Type Categories

[cmdb_policy_type_categories]

Associations of policy types to
Workflow Studio Categories.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

163

Zurich ServiceNow AI Platform Capabilities

---
*Page 164*

Table
Description

CMDB Retirement Custom
Definitions

[cmdb_retirement_custom_definiti
ons]

Custom retirement definitions
used in life-cycle policies (Retire/
Archive/Delete).

CMDB Policy Scheduled Jobs

[cmdb_policy_scheduled_job]
Policy scheduled Job details.

Dependent CI Relations Evaluation
Config

[cmdb_dependent_ci_extra_rels_c
onfig]

Information about CIs' extraneous
relationships which is used for the
delete and archive operations.
Extraneous relationships are those
relationships that are not in the CI’s
chain of dependency.

For more information, see
Dependent CIs management.

CMDB Dependent CI Class
Exclusions

[cmdb_dependent_ci_class_exclus
ion]

Excluded classes for dependent
CI, which is used with the Archive/
Retire/Delete policy types to
determine which CIs are orphan
dependent CIs.

For more information, see
Dependent CIs management.

CMDB Dependent CI Ledger

[cmdb_dependent_ci_ledger]

Staging table for orphaned
dependent CI related to the
deletion or archival of the main CI
that they depend on. Also used
in a cascade-retire dependent CIs
operation.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

164

Zurich ServiceNow AI Platform Capabilities

---
*Page 165*

Table
Description

For more information, see
Dependent CIs management.

CMDB CI End Of Life Ledger

[cmdb_ci_end_of_life_ledger]

CIs that are being set as retired
that belong to a class that has any
downstream dependencies.

Used in the Dependent CI Retire
policy.

Roles

Role title [name]
Description
Contains roles

CMDB Data Manager
administrator

[data_manager_admi
n]

Can access all
features in the
CMDB Data Manager,
including:

• Full access to
assigned tasks.

• Full access to
policies.

• Ability to associate
subflow categories
to policy type.

Can create, edit,
and delete policies,
calculate previews,
approve tasks, and
manage exclusion lists.

• task_editor

• data_manager_user

•

cmdb_query_builder
_read

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

165

Zurich ServiceNow AI Platform Capabilities

---
*Page 166*

Role title [name]
Description
Contains roles

CMDB Data Manager
user

[data_manager_user]

Can view CMDB Data
Manager policies in
read-only mode and
calculate previews.

Can perform the
following tasks:

• View assigned tasks.

• Update, approve, or
reject an assigned
task.

• Add a CI to an
exclusion list from
their task.

cmdb_read

DataManager Job
Runner

[dataManager.jobRun
ner]

Default user for the
Scheduled job default
user CMDB Data
Manager property.

The Run policy
scheduled job as field
on the Schedule form
in a policy, is set to this
user if no other option
is chosen.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

166

Zurich ServiceNow AI Platform Capabilities

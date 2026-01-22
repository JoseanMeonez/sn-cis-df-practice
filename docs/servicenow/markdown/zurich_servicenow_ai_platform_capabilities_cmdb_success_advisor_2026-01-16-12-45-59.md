# zurich_servicenow_ai_platform_capabilities_cmdb_success_advisor_2026-01-16-12-45-59

*Source: zurich_servicenow_ai_platform_capabilities_cmdb_success_advisor_2026-01-16-12-45-59.pdf*

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

## CMDB success advisor

The ServiceNow® CMDB success advisor is a data optimization feature
that enables CMDB administrators to drive business outcomes for
targeted applications like Hardware Asset Management (HAM) by
improving Configuration Management Database (CMDB) data quality.

Get started

Explore
Learn
about the benefits of
CMDB success advisor.

Configure

Plan and
configure your
implementation.

Use
Use
CMDB success advisor
for HAM.

Reference

Get details
about installed
components.

Troubleshoot and get help

• Ask questions and explore other resources for CMDB success advisor in
the ServiceNow Community

• Asset and CI mapping guideline

• Search the Known Error Portal for known error articles

• Contact Customer Service and Support

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

## Exploring CMDB success advisor

Learn about CMDB success advisor and review the benefits it can
provide for different users in your organization.

CMDB success advisor overview

With the CMDB success advisor application, you can review and improve
IT Asset Management (ITAM) rules, CMDB Data Manager policies,
and Configuration Management Database (CMDB) settings tailored
to specific applications like Hardware Asset Management (HAM). The
advisor helps improve data quality for targeted configuration item (CI)
classes using customized CMDB metrics designed to support your business
outcomes.

CMDB success advisor users

Users

User
Description
Additional roles required

CMDB
administrator

Users with the
sn_cmdb_admin role can
configure and improve
CMDB data accuracy
based on specific business
use cases.

With targeted CI
tracking, practical data
integration suggestions,
and application-specific
dashboards, the CMDB
success advisor enables
CMDB administrators to
improve CMDB data
accuracy and achieve
key business outcomes like
HAM.

pa_viewer: Required to
filter data by model
categories.

pa_data_collector:
Required to view the last
updated data timestamp
on the dashboard.

Important:   HAM
dashboard specific
required roles:

cmdb_inst_admin:
Required to manage
Service Graph Connector
connections in SGC Central
through CMDB success
advisor.

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

User
Description
Additional roles required

pd_user: Required to view
Discovery patterns through
CMDB success advisor with
read-only access.

pd_mid: Required to view
Discovery and Service
Mapping Patterns through
CMDB success advisor with
read-only access.

pd_admin: Required to
manage Discovery patterns
through CMDB success
advisor with create and
write access.

CMDB success advisor benefits

Benefit
Feature
Users

Focused CMDB setup for specific
business outcomes.

Use-case-driven
CMDB
configuration

CMDB
administrator

Improved visibility

Dashboard with
consolidated
insights and
metrics

CMDB
administrator

Continuous data quality
improvement

KPI details
access from
the dashboard
for metric
monitoring,
remediation
tracking,
and guided
resolution steps

CMDB
administrator

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

Benefit
Feature
Users

Data quality improvement
suggestions

Remediation
actions panel
available for a
chart in the
dashboard

CMDB
administrator

Better alignment of CMDB rules
and policies

Settings
summary
for gap
analysis and
configuration
guidance

CMDB
administrator

Improved CMDB data coverage
and accuracy

Data
integrations
summary for
reviewing and
evaluating
integration
sources

CMDB
administrator

Use cases

You can use CMDB success advisor for the HAM business outcome. For
more information, see Set up CMDB success advisor for HAM.

What to explore next

To learn more about configuring and using CMDB success advisor, see:

• Configuring CMDB success advisor

• Using CMDB success advisor for HAM

• CMDB success advisor reference

## Configuring CMDB success advisor

Complete the configuration tasks to start using the CMDB success
advisor.

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

Configuration overview

1. Install CMDB success advisor.

Set up CMDB success advisor by installing the application.

2. Assign roles for CMDB success advisor users.

Assign roles to control access to features, capabilities, and data in
the CMDB success advisor application.

3. Optional: Configure record count visibility in the CMDB success
advisor dashboard for managing large datasets.

Improve the performance of the CMDB success advisor dashboards
by hiding the record count on click-through from donut charts using
a configurable system property.

## Install CMDB success advisor

You can install the CMDB success advisor application (sn_cmdb_advisor)
if you have the admin role. The application installs related ServiceNow®
Store applications and plugins if they are not already installed.

Before you begin

• Ensure that the application and all of its associated ServiceNow Store
applications have valid ServiceNow entitlements. For more information,
see Get entitlement for a ServiceNow product or application.

• Review the CMDB success advisor application listing in the ServiceNow
Store for information on dependencies, licensing or subscription
requirements, and release compatibility.

Role required: admin

About this task

The following items are installed with CMDB success advisor:

• Scheduled jobs

• Tables

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

For more information, see Components installed with CMDB success
advisor.

Procedure

1. Navigate to All > System Applications > All Available Applications >
All.

2. Find the CMDB success advisor application (sn_cmdb_advisor) using
the filter criteria and search bar.

You can search for the application by its name or ID. If you
cannot find the application, you might have to request it from the
ServiceNow Store.

In the list next to the Install button, the versions that are available to
you are displayed.

3. Select a version from the list and select Install.

In the Review Installation Details dialog box that is displayed, any
dependencies that are installed along with your application are
listed.

4. If you're prompted, follow the links to the ServiceNow Store to get any
additional entitlements for dependencies.

5. (Optional) If demo data is available and you want to install it, select
the Load demo data check box.
Demo data are the sample records that describe application
features for common use cases. Load the demo data when you first
install the application on a development or test instance.

6. Select Install.

## Assign roles for CMDB success advisor users

Assign roles to control access to features, capabilities, and data in the
CMDB success advisor application.

Before you begin

Set the application scope to CMDB success advisor using the application
picker. For more information, see Application picker.

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

Role required: admin

About this task

Users with the following combination of roles can use the CMDB success
advisor application.

Roles required

Role
Description

sn_cmdb_admin

Required to access the dashboard
landing page. Users with
the sn_cmdb_admin role can
configure and improve CMDB
data accuracy based on specific
business use cases.

pa_data_collector

Required to view the last
updated data timestamp on the
dashboard.

pa_viewer
Required to filter data by model
categories.

cmdb_inst_ admin

Required to manage Service
Graph Connector connections
in SGC Central through CMDB
success advisor.

Important:   HAM dashboard
specific only.

pd_user

Required to view Discovery
patterns with read-only access.

Important:   HAM dashboard
specific only.

pd_mid

Required to view Discovery and
Service Mapping Patterns with
read-only access.

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

Role
Description

Important:   HAM dashboard
specific only.

pd_admin

Required to manage Discovery
patterns with create or write
access.

Important:   HAM dashboard
specific only.

For more information, see Exploring CMDB success advisor.

Procedure

Assign roles to users and groups using the ServiceNow AI Platform user
administration feature.

• To assign a role to a user, see Assign a role to a user.

• To assign a role to a group, see Assign a role to a group.

## Configuring record count visibility in the CMDB success
## advisor dashboard to handle large datasets

Improve the performance of the CMDB success advisor dashboards for
large datasets by hiding the record count on click-through from donut
charts using a configurable system property.

Before you begin

Role required: admin

About this task

Selecting a segment in a donut chart on a CMDB success advisor
dashboard displays a list page with records that match the criteria of the
selected segment. By default, this list shows a record count in the header
and a total count in the pagination area. In environments with large
datasets, retrieving these counts can increase load time. To improve

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

page responsiveness, add the hide_list_record_count system property
and set its value to true. Enabling this property hides the record count
in the list header and the total count in the pagination area, reducing
the data load during navigation from donut charts without affecting the
functionality of the charts or the list results.

Before you begin

Set the application scope to CMDB success advisor using the application
picker. For more information, see Application picker.

Role required: admin

Procedure

1. In the navigation filter, enter sys_properties.list.

2. Select New.

3. In the Name field, enter hide_list_record_count.

4. From the Type list, select true | false.

5. In the Choices field, enter true.

6. Select Submit.

## Access CMDB success advisor

You can access CMDB success advisor within the CMDB Workspace
for both setting up and managing application-specific dashboards.
Depending on your progress, you can either begin the setup or access
the dashboard to monitor and manage targeted configuration items
(CIs) for an application.

Before you begin

Role required: sn_cmdb_admin

About this task

You can access the CMDB success advisor tool from either the Home
view or the Management view within CMDB Workspace.

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

Procedure

• From the Home view:

1. • Navigate to Workspaces > CMDB Workspace.

2. • In the Home view, locate the CMDB success advisor card.

3. • Select an action based on your progress.

• To begin the setup process, select Get started and then on
the Get started with CMDB success advisor dialog box, select
Continue.

• To access the dashboard, select View dashboard.

Tip:   You can select the Dismiss link to remove the CMDB success
advisor card from the Home view. However, you can still access
the CMDB success advisor at any time from the Management view
in the CMDB Workspace.

• From the Management view:

1. • Navigate to Workspaces > CMDB Workspace.

2. • Select Management from the CMDB Workspace menu bar.

3. • In the Management view, locate the CMDB success advisor link,
available within the Optimize category in the Management tools
section.

4. • Within the application-specific tile, select an action.

• To begin the setup process, select Begin setup.

• To access the dashboard, select View dashboard.

Result

The playbook experience with the guided activities for configuring CMDB
success advisor for HAM opens.

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

Note:   If at any time, you leave an activity incomplete, you
can resume the activity by selecting Resume setup from either the
CMDB success advisor card in the Home view or the link in the
Management view.

## Using CMDB success advisor for HAM

As a CMDB administrator, you can use the Hardware Asset Management
(HAM) dashboard in CMDB success advisor to keep hardware asset data
accurate and aligned with data quality guidelines.

1. Set up CMDB success advisor for HAM.

Set up the CMDB success advisor for HAM.

2. Monitor CMDB data quality for HAM.

Identify and address data quality issues specific to HAM in the CMDB.

3. Improve CMDB data quality for HAM.

Use the Remediation actions panel available for a data card in the
success dashboard for HAM to improve the overall quality of your
CMDB.

4. Analyze data integrations for HAM.

Improve HAM data coverage by analyzing existing and suggested
data integrations, including Discovery patterns and Service Graph
Connectors.

5. Analyze CMDB settings for HAM.

Monitor and optimize CMDB settings that support CI-to-asset
synchronization, life cycle alignment, and HAM data quality.

Related topics

• Hardware Asset Management

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

## Set up CMDB success advisor for HAM

Use the playbook available with the CMDB success advisor application
to configure and manage the CMDB success advisor setup for Hardware
Asset Management (HAM).

The playbook experience available with CMDB success advisor enables
CMDB administrators to select key model categories for tracking and
apply general guidelines to improve the data quality of hardware
configuration items (CIs). These actions promote effective management
of hardware assets. To learn how to interact with a playbook, see Interact
with Playbook.

Plugins and dependencies

• CMDB Workspace application (sn_cmdb_ws)

Required to access the CMDB success advisor landing page.

• SGC Central application (sn_sgc_central)

Required to manage Service Graph Connectors.

• Hardware Asset Management application (sn_hamp)

Required to access CMDB success advisor for HAM in the CMDB
Workspace.

Important:   By default, the CMDB success advisor landing page
shows the option to configure a dashboard for HAM data.

• If the HAM application is installed, you can complete the setup by
selecting model categories from the opted-in resource categories.
Verify that you have opted in the correct resource categories
for the model categories to appear. The opted-in resource
categories are set to true in the HAM Resource Category
[sn_hamp_resource_category] table. For more information, see
Opt-in or opt-out of HAM license resource categories.

• If the HAM isn’t installed, you can still finish the setup by selecting
model categories from the predefined resource categories.

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

Set up overview

1. Get started with CMDB success advisor setup for HAM.

Set up your HAM specific success dashboard by using the playbook
available in CMDB success advisor.

2. Expand HAM dashboard scope in CMDB success advisor.

After completing the initial setup, you can continue to improve your
CMDB data quality by adjusting model category selection for your
current HAM goals.

Related topics

• Hardware Asset Management

## Getting started with CMDB success advisor setup for
## HAM

Set up your Hardware Asset Management (HAM) specific success
dashboard by using the playbook available in the CMDB success advisor.

Complete the following activities available within the CMDB success
advisor for HAM playbook:

1. Select model categories.

Select key hardware model categories that are most critical to your
organization to track initially.

2. View suggested integrations.

View suggestions for improving data coverage using Service Graph
Connectors and Discovery patterns.

3. Review CMDB settings.

Review the Configuration Management Database (CMDB)
integration settings to verify correct synchronization between
hardware assets and configuration items (CIs).

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

Note:   If at any time, you leave an activity incomplete, you
can resume the activity by selecting Resume setup from either the
CMDB success advisor card in the Home view or the link in the
Management view.

Select model categories

Select key hardware model categories that are most critical to your
organization to track initially. Expand gradually as CMDB data quality
improves.

Before you begin

Access CMDB success advisor.

Access the guided activities for setting up and managing CMDB success
advisor dashboard for HAM.

Role required: sn_cmdb_admin

About this task

The business outcome-driven approach enables you to manage data
quality efforts and gain more meaningful insights into targeted model
categories to focus on the CI dataset that drives your HAM outcomes.
As the completeness and accuracy of your CMDB data improve over
time, you can incrementally broaden the dashboard scope by adding
additional model categories and refining your tracking.

Procedure

1. In the Select model categories activity, select resource categories
and their corresponding model categories from the Available
resource and model categories column.
To determine which model categories to select, review the count
of operational assets under each category in the Hardware Asset
Workspace, or consult with your IT Asset Management (ITAM) or HAM
administrator for guidance. See Hardware Asset Workspace.

Note:   Selecting model categories is required to start the setup
process.

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

2. Select Next to complete the activity.

What to do next

View suggested integrations.

View suggested integrations

View suggestions for improving data coverage using Service Graph
Connectors and Discovery patterns.

Before you begin

Complete the Select model categories activity.

Role required: sn_cmdb_admin

Procedure

1. In the View suggested integrations activity, review the suggested
Service Graph Connectors and Discovery patterns to identify
potential data sources for improving hardware CI coverage.
The suggested data integrations expand the data coverage for
your selected model categories by automatically importing and
synchronizing CIs and related asset information. All suggested data
integration sources are accessible for setup via the dashboard at a
later stage.

2. (Optional) View the supported attributes for each category related
to a suggested data integration source.

a. Select the link in the Attribute coverage column to view the
supported attributes for each category related to a suggested
data integration source.

Note:   If an upgraded version of the integration source is
suggested, selecting the View available versions link opens
the Application Manager, where users with the admin role
can upgrade to the suggested version or a later one
to improve attribute coverage. For more information, see
Application Manager.

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

b. Select the Close dialog icon
or Close to return to the
activity.

3. Select Next to complete the activity.

What to do next

Review CMDB settings.

Review CMDB settings

Review the integration settings including HAM business rules, CI to
asset field mappings, and CMDB Data Manager policies that support
synchronization and automation between hardware assets and CIs.

Before you begin

Complete the Select model categories and View suggested integrations
activities.

Role required: sn_cmdb_admin

Procedure

1. In the Review CMDB settings activity, evaluate each setting that
requires attention.

Setting
Description

Ideal
Indicates that the setting is
active and correctly configured
according to guidelines. No
action is required.

Requires attention
Indicates that the setting is
inactive, incorrectly configured,
or missing. Review and
remediate the setting to verify
proper synchronization and

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

Setting
Description

alignment with HAM business
outcome.

For more information on settings, see CMDB and HAM settings
assessed in the CMDB success advisor.

2. (Optional) For a Data Manager policy, select the link in the Classes
with active policies column to review the CI classes and their policy
configuration.

3. Select Finish to complete the setup process.

Result

The CMDB success advisor setup for HAM is complete. The dashboard
might take several minutes to generate. You can refresh the page or
check back later to view the dashboard.

What to do next

Use CMDB success advisor setup for HAM.

## Expand HAM dashboard scope in CMDB success
## advisor

Expand the scope of your success dashboard for Hardware Asset
Management (HAM) by editing model categories in CMDB success
advisor to achieve your current HAM goals.

Before you begin

Role required: sn_cmdb_admin

About this task

Control which resource and model categories are included in your
HAM dashboard in CMDB success advisor. You can add or remove
entire resource categories or fine-tune the selection by including
or excluding specific model categories within a resource category.
Resource categories may be opted in or out based on your hardware

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

asset manager's preferences. This flexibility enables you to customize the
dashboard to display only the most relevant HAM data.

Procedure

1. Select View dashboard for HAM in CMDB success advisor.
See Access CMDB success advisor.

2. Select Edit model categories.

3. In the dialog box, select Continue to update your model category
selection.

4. In the Select model categories activity, use the Available resource
and model categories column to adjust the data coverage for the
dashboard.

Model category selection actions

Purpose
Action
Data coverage

Add an opted-in
resource category
or an available
resource category

Select the check
box for the resource
category to include
all its model
categories.

Includes all
model categories
associated with the
selected resource
category.

Expand model
category selection

Select > to expand
a resource category,
then select check
boxes for specific
model categories.

Includes only
the selected
model categories
associated with a
resource category.

Remove an opted-
out or available
resource category

Clear the check
box for the resource
category.

Excludes all
model categories
associated with the
removed resource
category.

Narrow down model
category selection

Select > to expand
a resource category,
then clear check
boxes for specific
model categories.

Excludes only the
model categories
cleared from a
resource category.

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

Important:

• If the HAM application is installed, you can complete the
setup by selecting model categories from the opted-in
resource categories. Verify that you have opted in the
correct resource categories for the model categories to
appear. The opted-in resource categories are set to true in
the HAM Resource Category [sn_hamp_resource_category]
table. For more information, see Opt-in or opt-out of HAM
license resource categories.

• If the HAM isn’t installed, you can still finish the setup by
selecting model categories from the predefined resource
categories.

5. Select Next to complete the activity.

6. In the View suggested integrations activity, review the suggested
Service Graph Connectors and Discovery patterns and select Next
to complete the activity.

7. In the Review CMDB settings activity, evaluate each setting that
requires attention and select Finish to complete the activity.
See CMDB and HAM settings assessed in the CMDB success advisor.

8. In the message window, select Refresh to load the latest data in the
dashboard.

Result

The HAM dashboard in CMDB success advisor is updated to reflect the
data based on the model category selection.

## Monitoring CMDB data quality using dashboard
## metrics in CMDB success advisor for HAM

The CMDB success advisor for HAM dashboard enables CMDB
administrators to identify and address data quality issues specific to HAM
in the Configuration Management Database (CMDB).

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

Important:   When you select a segment or count on a chart
from a CMDB success advisor dashboard, the KPI Details page
opens. Where you can analyze how specific metric trends over time.
Additionally, the Remediation actions panel might appear if there
are actions related to that card. Use the panel to improve the quality
of CMDB. To learn more, see KPI Details and Improving CMDB data
quality for HAM.

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

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

23

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 23, 2424x4618px]*

```
#*****#***********#****#####################################
. .......
.. .. ..

.


.::.::.        .   :          .::::.
:==::.:-==.      .   :       .-=-:.::-=:     ..
:=:       -=:    .:   :      .=-       :=-    ..
==    ..   ==    .:   .      -=.   ..   -+.   :.
-=.       .=-     .          :+:        ==    ..
-=-.   .-=-      .           :=-.   .:==.    ..
.:-----:.       .             :------.      .



...            ..           .
.              ....          .....          .


.                            .
....           ....          . .:.          ..:.



....
.





..::.                        ...:.
--:.:---       .             .--:.:--:
=-      -=      :            .=:      =-      ..
.=.  ..  .=.     :            :=   .   -=      ..
:=.    .=:      :             --.    :=:      ..
.:----:.       .              :-----:.




..
.                            ...





...
.                               :==.
:==.
:==.
..


```

---
*Page 24*

Access the dashboard

To open the dashboard, select View dashboard for HAM in the CMDB
success advisor. See Access CMDB success advisor.

Note:   The CMDB success advisor for HAM dashboard is available
only after the setup process is complete. For more information, see
Set up CMDB success advisor for HAM.

Required roles

Roles required for CMDB success advisor for HAM dashboard

Role
Description

sn_cmdb_admin
Required to access the
dashboard.

pa_viewer
Required to filter data by model
categories.

pa_data_collector

Required to view the last
updated data timestamp on the
dashboard.

Use cases

For examples of how different people in your organization would use this
dashboard, see these use cases.

User
Dashboard use

CMDB administrator

• Gain real-time visibility into
hardware asset data quality and
completeness

• Identify missing or incorrect CI
attributes quickly

• Detect duplicate CIs and
unlinked assets

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

User
Dashboard use

• Monitor asset life cycle status
(installed, retired, inactive)

• Prioritize and track data cleanup
and remediation tasks

• Verify that the CMDB stays
accurate to support HAM

Dashboard features

The dashboard provides clear, consolidated insights into hardware asset
data quality and asset status. Use the dashboard to identify and
resolve data quality issues within the CMDB through dedicated sections,
filters, indicators, and visual reports. Gain valuable insights into CMDB
performance related to HAM.

Targeted CMDB metrics focus remediation efforts. Regularly monitor
these metrics and follow suggested remediation actions to systematically
improve CMDB data quality over time.

Important:   The dashboard data is filtered based on the Selected
model categories and Date range filters. See Filters.

Feature description

Feature
Description

CIs by model category

Displays the breakdown of
operational Cls by associated
model category to highlight Cl
distribution in the CMDB.

CIs by data integration source

Displays the breakdown of
operational Cls by data
integration source to highlight their
contribution to CMDB population.

CIs missing model data and other
key attributes

Displays key metrics related to CIs
missing model details, ownership,

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

Feature
Description

and other key attributes, leading
to incomplete records and
operational inefficiencies.

CI data quality issues

Displays key metrics related to
CIs that have not been updated
or may have duplicate records,
leading to outdated information
and inconsistencies in the CMDB.

CI and asset-related issues

Displays key metrics related to
mismatches and missing links
between CIs and assets, leading
to incomplete asset life cycle
tracking and reporting issues.

Filters

Enables narrowing the data shown in graphs and metrics based on
connector type, connection, data source, or date range.

Name
Type
Description

Selected model
categories
List

Filters CIs based on
the selected model
categories.

Note:   You need
the pa_viewer
role to filter
data by model
categories.

Date range
Date

Filters the dashboard
data based on the
date range selected.

Stale CI
List

Filters stale CIs based
on the selected
number of days since
their last update.

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

Name
Type
Description

Available values are
7, 14, 30, 60, and 90
days.

CIs missing model data and other key attributes

Displays key metrics related to CIs missing model details, ownership,
and other key attributes, leading to incomplete records and operational
inefficiencies.

CIs missing model data and other key attributes section

Card
Description
Indicators

CIs missing model
name

Operational CIs
not associated with
a model ID or
associated with a
model ID missing a
name.

CIs missing model
name

CIs missing model
number

Operational CIs
not associated with
a model ID or
associated with a
model ID missing a
model number.

CIs missing model
number

CIs missing model
manufacturer

Operational CIs
not associated with
a model ID or
associated with a
model ID missing a
manufacturer.

CIs missing
manufacturer

CIs missing model ID

Operational CIs not
associated with a
model ID.

CIs missing model ID

CIs missing assigned to
Operational CIs not
assigned to a specific
CIs missing assigned to

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

Card
Description
Indicators

user, leading to
unclear ownership
and delayed action.

CIs missing location

Operational CIs not
associated with a
location, leading to
gaps in asset tracking
and service mapping.

CIs missing location

CIs missing owner

Operational CIs not
associated with an
owner, leading to
unclear accountability
and delayed issue
resolution.

CIs missing owner

CIs missing managed
by group

Operational CIs not
managed by a
specific ownership
group, leading to
inefficient support
assignment and
operational risk.

CIs missing managed
by group

CIs missing serial
number

Operational CIs
missing a serial
number, leading to
issues with duplicate
identification.

CIs missing serial
number

CI data quality issues

Displays key metrics related to CIs that haven’t been updated or
may have duplicate records, leading to outdated information and
inconsistencies in the CMDB.

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

CI data quality issues section

Card
Description
Indicators

CIs not updated

Operational Cls not
updated, causing
data gaps and
inaccuracies in the
CMDB.

CIs not updated in 7
days

CIs not updated in 14
days

CIs not updated in 30
days

CIs not updated in last
60 days

CIs not updated in last
90 days

Note:   The
CIs not updated
card data
is additionally
filtered based on
the Stale CI filter.
See Filters.

Duplicate CIs

Operational Cls
identified as
duplicates based
on key matching
attributes, causing
data redundancy.

Hardware CIs group
by

CI and asset-related issues

Displays key metrics related to mismatches and missing links between CIs
and assets, leading to incomplete asset life cycle tracking and reporting
issues.

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

CI and asset-related issues section

Card
Description
Indicators

CIs missing asset

Operational CIs not
associated with an
asset record, leading
to incomplete asset
life cycle tracking.

CIs missing asset

Virtual CIs with asset

Virtual assets created
for virtual CIs that are
operational, leading
to misutilization of HAM
licenses.

Assets created for
virtual CIs

Assets missing CI

Assets without a
matching CI, caused
by CIs not being
discoverable on the
network.

Assets missing CI

CI install status vs.
asset state

All CIs where the
install status matches
or differs from the
corresponding asset
state.

CI install status vs.
asset state matched

CI install status
vs. asset state
mismatched

## Improving CMDB data quality for HAM

Use the Remediation actions panel available for a chart in the CMDB
success advisor dashboard for Hardware Asset Management (HAM) to
improve the overall quality of your Configuration Management Database
(CMDB).

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

Remediation actions panel

If remediation actions are available for a chart, the Remediation actions
panel might appear on the KPI Details page of the chart.

You can perform the actions suggested within the Remediation actions
panel to address HAM data quality issues in the CMDB. These actions
help improve the accuracy, consistency, and usability of configuration
items (CIs), promoting better alignment with HAM.

• Improves CMDB data quality through guided actions

• Suggests context-aware actions

• Enables you to take quick, informed remediation steps

• Focuses your attention on meaningful tasks

• Appears only when actionable insights are available

Accessing the Remediation actions panel

To open the Remediation actions panel, select a segment or count
on a chart in the CMDB success advisor dashboard for HAM. The KPI
Details page opens. If the remediation actions are available for the
selected data, the panel appears on the details page suggesting various
remediation actions.

Available remediation actions

The Remediation actions panel provides relevant suggestions and actions
based on the information in the selected chart. For example, if the
chart shows CIs that weren't updated recently, the panel might suggest
reviewing retirement policies.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

31

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 31, 2954x878px]*

```
.                                                ......
....                                             ......
...
.                                               ..
.                                                  ...
.                                                . ...
.
.
```

---
*Page 32*

The remediation actions are available for the improvement of the
following issues:

CIs with invalid or unpopulated names

Identify and correct CIs that lack meaningful or complete naming, which
can impact discovery and asset alignment.

CIs with missing model entries

Resolve CIs missing linked hardware model information in the CMDB,
essential for normalization and life cycle tracking.

Stale CIs

Remove or update CIs that weren't updated or discovered for an
extended period, helping maintain an accurate representation of your
environment.

Duplicate CIs

Remove or merge duplicate records to avoid data fragmentation and
promote a single source of truth.

Virtual assets

Identify and clean up non-physical or placeholder assets that might
interfere with reporting, discovery, or asset reconciliation.

## Analyzing data integrations for improving HAM data
## coverage

Improve HAM data coverage by analyzing existing and suggested data
integrations, including Discovery patterns and Service Graph Connectors.

Use the Data integrations tab in the CMDB success advisor for HAM to
assess the effectiveness of your current data integration sources in the
Configuration Management Database (CMDB) and identify opportunities
to improve HAM data coverage. The Data integrations tab provides a
breakdown of active Discovery patterns and installed Service Graph
Connectors, including how many key configuration item (CI) attributes
each integration source is populating.

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

For a quick reference to improve HAM data coverage, see Data
integration checklist for HAM in CMDB success advisor.

Access data integrations

Navigate to the CMDB success advisor and on the HAM dashboard
landing page, select the Data integrations tab. To access the dashboard,
see Access CMDB success advisor.

Note:   The CMDB success advisor for HAM dashboard is available
only after the setup process is complete. For more information, see
Set up CMDB success advisor for HAM.

Required roles

Roles required for accessing data integration sources in the CMDB
success advisor for HAM

Role
Description

sn_cmdb_admin

Required to access the landing
page for CMDB success advisor for
HAM dashboard.

cmdb_inst_admin

Required to manage Service
Graph Connector connections in
SGC Central.

pd_admin

Required to manage Discovery
patterns with create or write
access.

pd_user
Required to view Discovery
patterns with read-only access.

pd_mid

Required to view Discovery and
Service Mapping Patterns with
read-only access.

Use cases

For examples of how different people in your organization would use this
feature, see these use cases.

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

User
Feature use

CMDB administrator

• Identify an inactive Discovery
pattern that can populate
attribute data for hardware
assets.

• Identify a Service Graph
Connector relevant to hardware
assets that is installed but without
any active connections.

• Prioritize which hardware-related
integrations to improve to
maximize CMDB data quality
for improving the completeness,
accuracy, and reconciliation of
hardware asset records.

Data integration features

Feature description

Feature
Description

Integration overview

Displays the count of all Discovery
patterns and Service Graph
Connectors contributing hardware
asset data to the CMDB.

Status indicators

Check whether Discovery patterns
are active and Service Graph
Connectors are installed with
active connections. For more
information, see Reviewing data
integrations for HAM.

Attribute coverage insights

Select the Attribute coverage
link next to the integration to
review which hardware asset

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

Feature
Description

attributes are populated by a
Discovery pattern or Service Graph
Connector. For more information,
see Evaluate HAM data integration
coverage.

Access integration details

Configure integrations to improve
attribute coverage. For more
information, see Evaluate HAM
data integration coverage.

Reviewing data integrations for HAM

Review both existing and suggested Discovery patterns and Service
Graph Connectors to improve your HAM data coverage.

The Data integrations tab in CMDB success advisor for HAM provides
insight into current integration usage for Discovery patterns and Service
Graph Connectors. To ensure your CMDB is being correctly populated
with high-quality HAM data, check the status of both Discovery patterns
and Service Graph Connectors.

Integration types

The Data integrations tab displays two key data sources that support
HAM:

Discovery patterns

Discovery patterns enable identify IT infrastructure components through
network-based discovery.

To evaluate Discovery pattern effectiveness for HAM, review the fields as
described in the following table.

Fields to monitor for Discovery pattern

Field
Description

Status
Indicates whether a Discovery
pattern is currently active. Only

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

Field
Description

active patterns contribute data to
the CMDB.

Attribute coverage

Displays how many HAM relevant
attributes within a model category
are being populated by each
pattern.

View pattern

Opens the Discovery pattern
configuration, enabling you to
inspect or refine the logic,
identification rules, and targeted
CI classes.

Low attribute coverage might occur if the Discovery pattern is limited
in scope, not collecting detailed CI information, or if its identification
rules are not aligned with the actual devices in your network. In such
cases, required hardware attributes may be missing from the resulting CI
records.

Service Graph Connectors

Service Graph Connectors import asset and CI data from third-party
platforms.

To evaluate Service Graph Connectors effectiveness, review the fields as
described in the following table.

Field
Description

Installed

Indicates whether the connector is
deployed. A value of Yes confirms
it is installed and available for use.

Attribute coverage

Displays how many HAM relevant
attributes within a model category
are being populated by each
connector.

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

Field
Description

Active connections

Represents the number of
connections actively importing
data into the CMDB.

Inactive connections

Displays connections that are
configured but not currently
importing data and may need
troubleshooting.

If a Service Graph Connector shows low attribute coverage or no active
connections, it may indicate that the specific version being evaluated
has limited attribute coverage. This can happen if the connector is
installed but not fully mapped to populate key attributes or if the data
source is unavailable or misconfigured. As a result, critical hardware
data, such as serial numbers, models, or manufacturers, may not be
imported into the CMDB, affecting the completeness and reliability of
asset records.

Evaluate HAM data integration coverage

Identify supported model categories and attributes from a Discovery
pattern or Service Graph Connector to evaluate data coverage and
upgrade requirements.

Before you begin

Role required: sn_cmdb_admin

Procedure

1. Navigate to the CMDB success advisor and on the HAM dashboard
landing page, select the Data integrations tab.
To access the dashboard, see Access CMDB success advisor.

2. Find the Discovery pattern or Service Graph Connector by selecting
the respective cards.

3. Identify the status of your Discovery patterns and Service Graph
Connectors to improve CMDB data coverage.

4. Select the Attribute coverage link for a data integration source.

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

5. In the Supported model categories and attributes dialog box, review
the attribute coverage details for model categories.
The following details are available:

• Integration suggested vs. installed version

• Supported CI classes identified as model categories

• List of attributes and whether each is supported by the selected
data integration source

6. (Optional) When installed version is lower than the suggested version,
select the View available version link to open the Application
manager.

Note:   The View available version link is available only when
applicable for a data integration source. Also, only users with
the admin role can install or upgrade an application. See
Application Manager.

7. Determine which hardware asset attributes are being populated by
the integration and whether an upgrade is needed to improve the
data coverage.
Available options for improving the data coverage are:

• For Discovery patterns, you can perform the following actions
based on the applicable criteria:

• If you have the pd_user or pd_mid role, you can select View
pattern for a Discovery pattern to view the pattern. For more
information, see Patterns and horizontal discovery.

• If you have the pd_admin role, you can select View pattern
for a Discovery pattern to understand its contribution and
modify the pattern to maximize the attribute coverage. For
more information, see Patterns and horizontal discovery.

• For Service Graph Connectors, if you have the cmdb_inst_admin
role, you can perform the following actions based on the
applicable criteria:

• Select Install connector to add a connector from the
ServiceNow Store.

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

• Select Create connection to configure a Service Graph
Connector from SGC Central. For more information, see
Create a connection for a Service Graph Connector in SGC
Central.

• Select View connections to open and review details of
existing installed connections importing hardware asset data
within SGC Central. For more information, see Viewing
connections for a Service Graph Connector in SGC Central.

## Analyze CMDB settings for HAM

Monitor and optimize Configuration Management Database (CMDB)
settings that support configuration item (CI) to hardware asset
synchronization, life cycle alignment, and Hardware Asset Management
(HAM) data quality.

Use the Settings tab in the CMDB success advisor for HAM to review
configuration indicators and identify opportunities to improve CMDB
alignment with HAM guidelines.

The CMDB success advisor for HAM evaluates your current configuration
across key areas such as:

• Automatic asset and CI creation

• Field and model category mappings

• CI state and substate usage

• CMDB Data manager policy coverage

Settings are categorized as Ideal or Requires attention, enabling
you to prioritize actions and maintain a healthy CMDB for HAM.

For a quick reference to validate CMDB settings for HAM, see Data
integration checklist for HAM in CMDB success advisor.

Access settings

Navigate to the CMDB success advisor and on the HAM dashboard
landing page, select the Settings tab. To access the dashboard, see
Access CMDB success advisor.

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

Note:   The CMDB success advisor for HAM landing page is available
only after the setup process is complete. For more information, see
Set up CMDB success advisor for HAM.

Required roles

You need the sn_cmdb_admin role to access the landing page for CMDB
success advisor for HAM dashboard.

To manage business rules, change the application scope from CMDB
success advisor to Global.

Use cases

For examples of how different people in your organization would use this
feature, see these use cases.

User
Feature use

CMDB administrator

• Improve the accuracy of asset
reconciliation by aligning CI and
asset record creation.

• Promote consistent asset life
cycle management through
status field alignment across
asset and CI records.

• Automate policy-based
workflows for asset retirement,
deletion, certification, or archival
using policy-driven rules.

• Standardize hardware model
categories to improve
normalization processes and
reporting accuracy.

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

Settings features

The Settings tab in the CMDB success advisor for HAM provides visibility
into key configuration areas that promote accurate synchronization
between hardware assets and CIs. These settings include business rules,
field mappings, model categories, and Data Manager policies that
support automated life cycle management and data integrity. To
maintain CMDB data accuracy and HAM integration, regularly review
and validate these settings. For more information, see CMDB and HAM
settings assessed in the CMDB success advisor.

Evaluate CMDB settings

Identify and evaluate settings including Hardware Asset Management
(HAM) business rules, configuration item (CI) to asset field mappings,
hardware model categories, and CMDB Data Manager policies that
support synchronization and automation between hardware assets and
CIs.

Before you begin

Role required: sn_cmdb_admin

Procedure

1. Navigate to the CMDB success advisor and on the HAM dashboard
landing page, select the Settings tab.
To access the dashboard, see Access CMDB success advisor.

2. Select a status tile to view settings by category.

Tile
Description

All
Total number of evaluated
settings.

Ideal
Settings that follow general
guidelines.

Requires attention
Settings that are inactive,
incorrectly configured, or
missing.

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

3. Evaluate each setting that requires attention and use the available
actions to open the related configuration pages and make updates.

Action
Description

Manage rule
Opens the configuration page
for the related business rule that
automate tasks between assets
and CIs.

Manage model categories
Opens the Model categories list
page where you can select
a model category to review
and update mappings between
asset model categories and CI
classes.

Manage mappings
Opens the Asset CI Field
Mappings list page where you
can select a CI and review
and change how asset fields
connect to CI fields to keep
data accurate.

Manage Data Manager policies
Opens the Data Manager
overview page where you can
create or update policies for
different CI classes to automate
asset management.

Create policy
Opens the New policy form to
create a policy for a CI class.

The Create policy action is
available in the policy summary
dialog box displayed after
selecting the policy coverage
count in the Classes with active
policies column within the
Review Data Manager policies
section for a policy type.

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

Tip:   Select Learn more next to a setting to open a related help
topic in a new browser tab or window with additional details
about that setting.

4. To view any updated configuration status on the Settings tab, select

the refresh icon

.

Related concepts

• Administer CMDB Data Manager

Related topics

• Asset and CI management

• Model categories

## CMDB success advisor reference

Reference topics provide additional information about CMDB success
advisor components, configuration reviews, and data integration
checklists.

• Components installed with CMDB success advisor

Several types of components are installed with activation of the CMDB
success advisor plugin, including tables and scheduled jobs.

• CMDB and HAM settings assessed in the CMDB success advisor

The Configuration Management Database (CMDB) and Hardware
Asset Management (HAM) settings review provides a configuration-
level assessment of the CMDB configuration item (CI) classes and HAM
assets for maintaining data accuracy.

• Data integration checklist for HAM in CMDB success advisor

Use the data integration checklist to verify that Discovery patterns
and Service Graph Connectors are correctly configured and actively

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

contributing to your Configuration Management Database (CMDB),
promoting high-quality hardware asset data.

• Settings checklist for HAM in CMDB success advisor

Use this checklist to review Configuration Management Database
(CMDB) and Hardware Asset Management (HAM) settings in CMDB
success advisor that directly affect HAM data quality, configuration
item (CI) to asset synchronization, and life cycle alignment.

• Indicators used in the CMDB success advisor for HAM dashboard

Indicators enable viewing of high-level metrics that highlight data
quality, completeness, and synchronization issues across hardware
assets and configuration items (CIs).

## Components installed with CMDB success advisor

Several types of components are installed with activation of the CMDB
success advisor plugin, including tables and scheduled jobs.

Scheduled jobs installed

Scheduled job
Description

CMDB success advisor data
collection for HAM

Identifies Hardware Asset
Management CI records and
collects data for their
corresponding indicators.

Tables installed

Table
Description

CMDB Advisor CI attribute
coverage

Details of configuration item (CI)
attributes for a specific ingestion
source, version, CI class, and
selected attributes in CMDB

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

Table
Description

[sn_cmdb_advisor_ci_attribute_co
verage]

success advisor using a Service
Graph Connector or Discovery
pattern.

CMDB Advisor Content Template

[sn_cmdb_advisor_content_templ
ate]

Product-specific model categories
used by CMDB success advisor to
generate data quality insights.

CMDB Advisor settings

[sn_cmdb_advisor_settings]

Details of CMDB success
advisor settings, including product
association, access roles, and
remediation guidance.

CMDB Advisor suggested attribute

[sn_cmdb_advisor_suggested_attri
bute]

Attribute suggestions for CMDB
success advisor based on the
selected product and CI class
context.

CMDB Advisor suggested ingestion
source

[sn_cmdb_advisor_suggested_inge
stion_source]

Ingestion source suggestions for
CMDB success advisor based on
the associated Service Graph
Connectors, Discovery patterns,
and product.

CMDB Advisor targeted product

[sn_cmdb_advisor_targeted_produ
ct]

Targeted product definitions for
CMDB success advisor, including
icon, display name, and display
order.

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

## CMDB and HAM settings assessed in the CMDB success
## advisor

The Configuration Management Database (CMDB) and Hardware
Asset Management (HAM) settings review provides a configuration-level
assessment of the CMDB configuration item (CI) classes and HAM assets
for maintaining data accuracy.

Settings overview

Each setting is checked for alignment with suggested business rules and
mapping guidelines.

CMDB integration settings

Setting
Description

Create asset on CI insertion

Enables the automatic creation
of an asset record when a CI is
inserted into the CMDB. Requires
the Create Asset on Insert business
rule to be active for asset creation
to occur during CI insertion.

Update asset fields on CI change

Enables automatic updates to
asset records when a related CI
is modified. Requires the Update
Asset Fields on Change business
rule to be active to synchronize CI
changes with asset data.

Create CI on asset insertion

Enables the automatic creation
of a configuration item when an
asset record is added. Requires the
Create CI on Insert business rule to
be active to reflect asset data in
the CMDB.

Update CI on asset update

Enables automatic updates to
configuration item records when
associated asset data is changed.
Requires the Update CI Fields on

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

Setting
Description

Change business rule to be active
to maintain data consistency.

Review custom model categories

Validates that custom model
categories are properly mapped
to predefined model categories.
Verifies accurate classification,
consistent reporting, and
standardized data alignment.

Review asset CI field mappings

Evaluates whether asset fields are
correctly mapped to configuration
item fields using standard
mappings. Helps prevent data
discrepancies caused by custom
or incorrect mappings.

Review asset CI install status
mappings

Checks that CI install status
values are accurately mapped to
the state and substate fields of
the corresponding asset record.
Verifies precise life cycle tracking
and status reporting.

Review asset CI hardware status
mappings

Verifies that CI hardware status
values align with the state
and substate fields of the
corresponding asset record.
Supports consistent representation
of physical asset conditions.

Review Data Manager policies

Assesses the configuration of
CMDB Data Manager policies,
including archive, attestation,
certification, delete, and retire, for
the selected hardware CI classes.
Each policy type manages a
specific life cycle action:

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

Setting
Description

Archive

Archives inactive CIs without
deleting them.

Attestation

Validates CI data or runs
automated checks.

Certificate

Verifies CI data for accuracy and
readiness.

Delete

Removes CIs based on defined
criteria such as inactivity.

Retire

Marks CIs as retired when they’re
no longer in use.

Related concepts

• Administer CMDB Data Manager

## Data integration checklist for HAM in CMDB success
## advisor

Use the data integration checklist to verify that Discovery patterns
and Service Graph Connectors are correctly configured and actively
contributing to your Configuration Management Database (CMDB),
promoting high-quality hardware asset data.

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

Discovery patterns checklist

Confirm each Discovery pattern is enabled and effectively populating
hardware-related attributes.

Discovery patterns configuration checks

Select
Check item (field)
Description
Action

Pattern name

Name of
the discovery
pattern
contributing
Hardware Asset
Management
(HAM) data.

Confirm that
the pattern is
relevant for
hardware asset
discovery.

Status

Current state
of the pattern
as active or
inactive.

Verify that the
pattern is active
with Status
set to Active
to confirm
it’s contributing
data.

Attribute
coverage

Number of
hardware
attributes
populated by
the pattern.

Check how
many relevant
CI attributes
are being
populated for
each model
category.

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

Select
Check item (field)
Description
Action

Note:   Low
attribute
coverage
may
suggest
shallow
discovery or
misaligned
pattern
logic.

Suggested
version

Latest
suggested
version for
optimal attribute
coverage.

Plan and
perform an
upgrade to
the suggested
version or higher
to improve
coverage.

Installed version

Version currently
in use in your
instance.

Compare with
the suggested
version and
upgrade if
necessary.

View pattern

Link to inspect
the pattern
configuration.

Select the link to
review or modify
the pattern
logic.

Service Graph Connectors checklist

Confirm Service Graph Connectors are installed and actively contributing
hardware data.

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

Service Graph Connectors configuration checks

Select
Check item (field)
Description
Action

Connector
name

Name of the
Service Graph
Connector
providing HAM
data.

Confirm that the
Service Graph
Connector is
required for your
HAM processes.

Status

Current state
of the
Service Graph
Connector as
active or
inactive.

Activate
Service Graph
Connectors that
are needed
for HAM
but currently
inactive.

Attribute
coverage

Number of
hardware
attributes
populated
by the
Service Graph
Connector.

Check how
many relevant
CI attributes
are being
populated for
each model
category.

Note:   Low
coverage
may
indicate
incomplete
mappings
or missing
source
data.

Suggested
version

Latest
suggested
version for
optimal attribute
coverage.

Plan and
perform an
upgrade to
the suggested
version or higher

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

Select
Check item (field)
Description
Action

to improve
coverage.

Installed version

Version currently
in use in your
instance.

Compare with
the suggested
version and
upgrade if
necessary.

Active
connections

Number
of active
connections.

Confirm that
at least
one connection
is actively
importing data
into the CMDB.

Inactive
connections

Number
of inactive
connections.

Review and
troubleshoot
any configured
connections
that aren’t
currently active.

Optional checks for Discovery patterns and Service Graph
Connectors

Optional data integration checks

Select
Check item
Description
Action

No entitlements
warning

Discovery
patterns or
Service Graph
Connectors tile
showing no
entitlements,
indicating
missing access
or licensing.

Verify
licensing and
entitlements
with your
administrator.

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

Select
Check item
Description
Action

Suggested
integrations
reviewed

Some Discovery
patterns are
listed as
suggestions
because they
aren’t installed
or active, and
some Discovery
patterns are
listed but are not
actively used.

Evaluate
business need
and consider
implementing
high-value
suggested
integrations.

Final validation

Once all data integration checks are complete:

• Attribute coverage across integrations supports your HAM business
outcome.

• CMDB records for hardware assets are accurate and complete.

## Settings checklist for HAM in CMDB success advisor

Use this checklist to review Configuration Management Database
(CMDB) and Hardware Asset Management (HAM) settings in CMDB
success advisor that directly affect HAM data quality, configuration item
(CI) to asset synchronization, and life cycle alignment.

CMDB and HAM settings checklist

Confirm that each setting is configured to support accurate and
consistent hardware asset records in the CMDB.

Settings configuration checks

Select
Check item (field)
Description
Action

Create asset
fields on CI
insertion

Enables the
automatic
creation of an

Verify that rule is
active and set
to create asset

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

Select
Check item (field)
Description
Action

asset record
when a CI is
inserted into the
CMDB.

records on CI
insertion.

Update asset
fields on CI
change

Enables
automatic
updates to asset
records when
a related CI is
modified.

Verify that
rule is active
and correctly
updates asset
fields on CI
change.

Create CI on
asset insertion

Enables the
automatic
creation of
a configuration
item when an
asset record is
added.

Verify that rule
is active and
set to create CI
records on asset
insertion.

Update CI on
asset update

Enables
automatic
updates to
configuration
item records
when
associated asset
data is
changed.

Verify that
rule is active
and correctly
updates CI
fields on asset
changes.

Review
custom model
categories

Validates that
custom model
categories
are properly
mapped to
predefined
model
categories

Map custom
categories to
predefined
ones.

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

Select
Check item (field)
Description
Action

Review asset CI
field mappings

Evaluates
whether asset
fields are
correctly
mapped to
configuration
item fields
using standard
mappings.

Try using
predefined
mappings.

Review asset
CI install status
mappings

Checks that
CI install
status values
are accurately
mapped to
the state
and substate
fields of the
corresponding
asset record.

Try using
predefined
mappings.

Review asset CI
hardware status
mappings

Verifies that CI
hardware status
values align
with the state
and substate
fields of the
corresponding
asset record.

Try using
predefined
mappings.

Review CMDB
Data Manager
policies

Assesses the
configuration of
Data Manager
policies,
including
archive,
attestation,
certification,
delete, and
retire, for
the selected

Enable and
configure
appropriate
policies for the
required CI
classes.

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

Select
Check item (field)
Description
Action

hardware CI
classes.

Final validation

Once all settings checks are complete:

• All business rules for automatic asset and CI creation or updates are
Active.

• Custom model categories are correctly mapped to predefined
categories.

• Data Manager policies are configured for all required CI classes.

• No Requires attention status is displayed for any setting in the
Settings tab.

## Indicators used in the CMDB success advisor for HAM
## dashboard

Indicators enable viewing of high-level metrics that highlight data quality,
completeness, and synchronization issues across hardware assets and
configuration items (CIs).

CMDB success advisor for HAM dashboard Indicators

Assets created for virtual CIs

Total number of virtual CI assets in the Hardware [alm_hardware] table
created daily, where the life cycle stage of CI is operational, the asset
field is not empty, and the CI is marked as virtual.

Assets missing CI

Total number of hardware assets in the Hardware [alm_hardware]
table missing a linked CI from the Hardware [cmdb_ci_hardware] class,
measured daily, where the CI is operational, the asset is actively in use,
and no CI is linked to the asset.

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

CI install status vs. asset state matched

All CI records from the Hardware [cmdb_ci_hardware] class where
the installation status correctly aligns with the expected asset state,
promoting accurate and reliable asset management.

CI install status vs. asset state mismatched

All CI records from the Hardware [cmdb_ci_hardware] class with an
installation status that doesn’t align with the expected asset state,
resulting in erroneous asset management.

CIs missing asset

Total number of CI records from the Hardware [cmdb_ci_hardware] class
missing a linked asset, measured daily, where the life cycle stage of CI is
operational and no asset is associated with the CI.

CIs missing assigned to

Total number of CI records from the Hardware [cmdb_ci_hardware]
class missing an assigned owner, measured daily, where the CI lacks an
assigned owner.

CIs missing location

Total number of CI records from the Hardware [cmdb_ci_hardware] class
missing a location, measured daily, where the CI doesn’t have a location
assigned.

CIs missing managed by group

Total number of CI records from the Hardware [cmdb_ci_hardware] class
missing a managed by group, measured daily, where the CI doesn’t
have a managed by group assigned.

CIs missing manufacturer

Total number of CI records from the Hardware [cmdb_ci_hardware] class
missing a manufacturer, measured daily, where the CI doesn’t have a
manufacturer specified.

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

CIs missing model ID

Total number of CI records from the Hardware [cmdb_ci_hardware] class
missing a model ID, measured daily, where the CI doesn’t have a model
ID or model display name specified.

CIs missing model name

Total number of CI records from the Hardware [cmdb_ci_hardware] class
missing a model name, measured daily, where the CI doesn’t have a
model name specified, with or without a model ID

CIs missing model number

Total number of CI records from the Hardware [cmdb_ci_hardware] class
missing a model number, measured daily, where the CI doesn’t have
either a model ID or a model name specified.

CIs missing owner

Total number of CI records from the Hardware [cmdb_ci_hardware] class
missing an owner, measured daily, where the CI doesn’t have an owner
assigned.

CIs missing serial number

Total number of CIs missing a serial number, measured daily, where the CI
doesn’t have a serial number assigned.

CIs not updated in 7 days

Total number of CI records from the Hardware [cmdb_ci_hardware] class
not updated in the last seven days, measured daily, where the update
timestamp is older than seven days.

CIs not updated in 14 days

Total number of CI records from the Hardware [cmdb_ci_hardware] class
not updated in the last 14 days, measured daily, where the update
timestamp is older than 14 days.

CIs not updated in 30 days

Total number of CI records from the Hardware [cmdb_ci_hardware] class
not updated in the last 30 days, measured daily, where the update
timestamp is older than 30 days.

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

CIs not updated in last 60 days

Total number of CI records from the Hardware [cmdb_ci_hardware] class
not updated in the last 60 days, measured daily, where the update
timestamp is older than 60 days.

CIs not updated in last 90 days

Total number of CI records from the Hardware [cmdb_ci_hardware] class
not updated in the last 90 days, measured daily, where the update
timestamp is older than 90 days.

Hardware CIs group by

Total number of CI records from the Hardware [cmdb_ci_hardware]
class, measured daily and grouped by model category and discovery
source.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

59

Zurich ServiceNow AI Platform Capabilities

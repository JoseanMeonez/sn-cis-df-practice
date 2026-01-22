# zurich_servicenow_ai_platform_capabilities_api_insights_2026-01-16-12-28-20

*Source: zurich_servicenow_ai_platform_capabilities_api_insights_2026-01-16-12-28-20.pdf*

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

## API Insights

The ServiceNow® API Insights workspace is an all-in-one application that
enables you to track all your APIs. You can also use it to start workflows
related to different stages in the application programming interface (API)
life cycle.

Get started

Explore
Learn
about the benefits of
API Insights and how it
is used.

Configure

Plan and
configure your
implementation.

Analyze

Administer
and monitor API data

Manage

Manage
API data for informed
decision-making.

Reference

Get details
about installed
components.

Troubleshoot and get help

• Ask questions and explore other resources for API Insights in the
ServiceNow Community

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

## Exploring API Insights

Learn about API Insights with a sample workflow and review the benefits it
can provide for different users in your organization.

API Insights overview

API Insights is a centralized workspace for enterprise or software
architects and Configuration Management Database (CMDB)
administrators to analyze and take action on their organization's
application programming interface (API) inventory.

API Insights users

Users

User
Description

Enterprise architect

Users with the
sn_api_insights_ws.api_mgmt_architect role
can access the API Insights workspace to
search APIs, monitor team APIs, view managed
APIs, track API activity, review API access
requests, and manage API life cycle aspects,
including APIs without interfaces, business
applications, ownership, or product models.

Enterprise architect
administrator

Users with the
sn_api_insights_ws.api_mgmt_architect_admin
role can access the API Insights workspace
to search APIs, evaluate metrics on API
usage, set parameters for creating an API,
connect APIs to a business context, specify the
group attribute for ownership, and associate a
workflow for granting access to APIs.

CMDB administrator

Users with the sn_cmdb_admin role can
configure and manage the API-related Service
Graph Connectors. They can accept or reject
clustering recommendations, search for and
compare APIs, and adjust settings related to
API data management within the CMDB.

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

Note:   A CMDB administrator needs
additional roles such as ml_report_user,
platform_ml_read, and cmdb_inst_admin
to access some of the features and data.

Additionally, the CMDB administrator
needs the following security roles to access
specific widgets:

• sn_si.basic or evt_mgmt_user – Required
for Events and Critical alerts

• sn_vul.vulnerability_read – Required for
Active vulnerability items

• sn_msi.msi_incident_read – Required for
Security incidents

• sn_si.read – Required for Incidents

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

API Insights example workflow

Example workflow for the API Insights users

1. A CMDB administrator with the sn_cmdb_admin role logs in to
API Insights and configures the API Service Graph Connectors to
import API data from various sources. Also, reviews and resolves any
connection errors to ensure a smooth data import process.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

6

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 6, 720x861px]*

```

=-:
.==:            .:.:         :-:          .:..
.-==:--.           .:..         :::         :...
-+==--##*+          .            .         ..
:--::-**#:      ...........   .......     .........
.........
****************************************************-:::=***
%%%%%@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+=*%%%%
%%+==*#+-=%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%##%%%%%
%%#-:===++%%%%%%%###**%%%%%%####%%%%%%%###**%%%%%%%**=+%%%%%
%%%+++=*%%%%##%%%*#*#*%%%#%%#*##%%%%#%%##*#*%%%#%%#+**=#%%%%
%#+---+#*+%%..#%%#####%%%%%%####%%%%%%%#####%%%%%%%##%%%%%%%
%%+---=+***+.=%%#######%%##########%%%########%%%#*######%%%
%%%#*#**#####%%%%%%%%%%%%%%%%%%%%%%%%%#######%%%%%######%%%%
%%@%%#######%%%%@@@@@@@%%%%@@@@@@%%%%%@@@@@@@%%%%@@@%%%%%%%%
====================================================+++++===
.:.
..                                    :      .
:=--              ::..:        .::::.  .
==:               :::::.    .  :.::.:  .
:**+=       .      .......      ..:...  .
.*=-+:     ..                           .
++---====-=-:   ..........    ..........
....:..::..
::::::::::::::.:::::::::::::::::::::::::::::::::::::.   .:::
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*-:-*%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#*%%%%%
%%#==+%%%%%%%%%%%%%%%%%###%%%%%%%%#####%%%%%%%%%%%%%%%%%%%%%
%%=-:=%%%%%%%%%%%%%%%#++**#%%%%%%#**+*+#%%%%%%%*+#*+%%%%%%%%
%%*++%%%%%%%%%%%%%%%%%++**#%%%%%%###****%%%%#%%*+#*=%%%%%%%%
%#*+=*%%%%%%%#%%%%%%%%####%%%%%%%%%%%%%##%%%%%%%%#%%%%%%%%%%
%%*=:-+**++##%%%%%%%%%####%%%%%%%#######%%%%%#########%%%%%%
%%##***######%%%%%%%%%%%###%%%%%%##%%#%%%%%%%#%%#%%###%%%%%%
%%%%#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
```

---
*Page 7*

2. An enterprise architect administrator with the
sn_api_insights_ws.api_mgmt_architect_admin role accesses the
settings page and adjusts the ownership settings according to their
preferences.

3. An enterprise architect with the
sn_api_insights_ws.api_mgmt_architect role navigates to the APIs
missing data section to enrich API records by adding relationships
and references. This includes associating business context, assigning
ownership groups, linking product models, and defining API designs.

4. The enterprise architect explores the API page, which provides a
centralized view of all APIs and views all APIs in one place. They
drill down into specific APIs to analyze details such as ownership,
deployment locations, consumer usage, security incidents, and
alerts. Additionally, they assess how each API fits within the broader
ecosystem, identifying key relationships and dependencies in the API
relationship map.

API Insights benefits

Benefit
Feature
Users

Implement a system of record for
enterprise-wide APIs.

Workspace to
view and
interact with API
inventory

API Insights
administrator

Achieve enterprise-wide visibility of
APIs.

Automated
discovery and
ingestion of
API data
from various
sources into
Configuration
Management
Database
(CMDB)

API Insights
administrator

Map APIs to application services
and business context.

Workflow for
mapping APIs
to relevant
application

API Insights
administrator

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

Benefit
Feature
Users

services and
business context

Integrate API data from a
broad ecosystem of sources into
the CMDB via Service Graph
Connectors.

API data
ingestion
using API
Service Graph
Connectors into
CMDB

CMDB
administrator

Search for relevant APIs.

API search
functionality
with a
user-friendly
interface

API Insights
administrator

Enable workflow configurations for
API access requests.

Customization
of API
access request
workflows

API Insights
administrator

View the usage, security, and
service mapping of each API and
its components.

Detailed view
of API inventory,
requests
according to
minute, unique
consumers,
security data,
IT Operations
Management
(ITOM) and
IT Service
Management
(ITSM) data,
and relationship
mapping

API Insights
architect

API Insights
administrator

CMDB
administrator

What to explore next

To learn more about configuring and using API Insights, see:

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

• Configuring API Insights

• Administering and monitoring API data with API Insights

• Managing API data in API Insights

• Managing API access within API Insights

• Optimizing API organization with clustering recommendations in API
Insights

• Managing API data connections added for Service Graph Connectors
in API Insights

• API Insights reference

## Configuring API Insights

Complete the configuration tasks to start using the API Insights
workspace.

Configuration overview

1. Configure API Insights installation.

As an administrator with the admin role, set up API Insights by
installing the application and assigning roles to users for managing
API operations.

2. Configure API Insights data and imports.

As a CMDB administrator with the sn_cmdb_admin role, set up data
model recommendations for API clustering and configure settings for
importing APIs into API Insights.

3. Configure settings to monitor and organize APIs in API Insights.

As an enterprise architect administrator with the
sn_api_insights_ws.api_mgmt_architect_admin role, configure API
management workflows, including automating API actions and
defining settings to monitor and organize APIs in API Insights.

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

## Configuring API Insights as a system administrator

As a user with the admin role, set up the API Insights workspace by
installing the application and assigning roles to users for managing API
operations.

System administrator tasks overview

1. Install API Insights.

Install the API Insights application (sn_api_insights_ws).

2. Assign roles for API Insights users

Assign roles for using the API Insights workspace.

## Install API Insights

You can install the API Insights application (sn_api_insights_ws) if you
have the admin role.The application installs related ServiceNow® Store
applications and plugins if they are not already installed.

Before you begin

• Ensure that the application and all of its associated ServiceNow Store
applications have valid ServiceNow entitlements. For more information,
see Get entitlement for a ServiceNow product or application.

• Review the API Insights application listing in the ServiceNow Store for
information on dependencies, licensing or subscription requirements,
and release compatibility.

Role required: admin

About this task

The following items are installed with API Insights:

• Plugins

• Store applications

• Roles

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

• Tables

For more information, see Components installed with API Insights.

Procedure

1. Navigate to All > System Applications > All Available Applications >
All.

2. Find the API Insights application (sn_api_insights_ws) using the filter
criteria and search bar.

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

## Assign roles for API Insights users

Assign roles to control access to features, capabilities, and data in the
API Insights application.

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

Before you begin

Set the application scope to API Insights using the application picker. For
more information, see Application picker.

Role required: admin

About this task

Users with the sn_api_insights_ws.api_mgmt_architect_admin,
sn_api_insights_ws.api_mgmt_architect, or sn_cmdb_admin roles can use
the API Insights application. See Exploring API Insights.

Procedure

Assign roles to users and groups using the ServiceNow AI Platform user
administration feature.

• To assign a role to a user, see Assign a role to a user.

• To assign a role to a group, see Assign a role to a group.

## Configuring settings to manage API data and imports
## in API Insights

As a CMDB administrator with the sn_cmdb_admin role, you can set
up data model recommendations for API clustering, configure settings
for importing APIs into the API Insights workspace, and optionally review
enterprise architect administrator settings for managing APIs.

CMDB administrator tasks overview

1. Configure data model recommendations for API clustering in API
Insights

Set recommendations for clustering related API components to align
the organization's data with the desired data model.

2. Configure instance API import settings in API Insights.

Set options to import custom and ServiceNow APIs from your instance
into the CMDB.

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

3. Optional: Configure settings to manage APIs in API Insights.

Review and configure enterprise architect administrator settings for
managing APIs. You can turn on the All settings option to access both
CMDB administrator and enterprise architect administrator settings
from the API Insights settings page.

4. Optional: Automate creating tag-based relationship mapping within
API Insights.

Configure and automate creating CMDB relationships between APIs
and application services or business applications based on API tags.

## Configure data model recommendations for API
## clustering in API Insights

Set recommendations for clustering API components to align the
organization's data with the desired data model.

Before you begin

Role required: sn_cmdb_admin

Procedure

1. Navigate to Workspaces > API Insights.

2. Select the Settings tab.

3. In the Data model recommendations section, configure system-
generated recommendations for clustering related API components
based on your organization’s data model.

Field
Description

Proposed API clustering

Option to enable the system-
generated API clustering
recommendations. When
selected, the system will propose
clustering connections between
related API components within
the same API.

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

Field
Description

Cluster quality

Desired quality level for the API
clustering recommendations. The
cluster quality can range from
0 to 100, where a higher value
represents a stronger connection
between related components.

4. Select Save.

## Configure instance API import settings in API Insights

Set options to import custom and ServiceNow APIs from your instance into
the CMDB.

Before you begin

Configure the Import ServiceNow API to API Insights scheduled job to
automatically import configured APIs from your ServiceNow instance into
the API Insights workspace at regular intervals. For more information, see
Scheduled jobs.

Role required: sn_cmdb_admin

About this task

Configure API import options to bring custom and ServiceNow APIs from
your ServiceNow instance into the CMDB. This feature enables you to
analyze and manage ServiceNow instance APIs together with other
enterprise APIs within the API Insights workspace.

Procedure

1. Navigate to Workspaces > API Insights.

2. Select the Settings tab.

3. In the Import instance APIs section, select Configure API import.

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

4. In the Set up import section, select the options for importing scripted
and outbound REST APIs, and scripted and outbound SOAP APIs into
the CMDB.

API import options

Option
Description

All custom APIs
Imports all custom-developed
APIs within the instance.

ServiceNow APIs
Imports predefined ServiceNow
APIs within the instance.

Active in last

Imports only APIs based on
recent activity, available for
scripted APIs only.

a. If you select the ServiceNow APIs check box, select Select APIs
and then manage the APIs to import.

Importing ServiceNow APIs

Action
Description

Add ServiceNow APIs

On the Select ServiceNow APIs
page, select Add to import
list. Then, on the Add to
import list page, select the
check box for APIs from the All
ServiceNow APIs list and select
Add selected.

Remove any selected
ServiceNow APIs

On the Select ServiceNow APIs
page, select the check box
for APIs from the Selected APIs
list, and select Remove from
import list.

b. If you select the Active in last option, enter the number of days
in the Days field to import only APIs that have been active in the
specified timeframe.

5. On the Select ServiceNow APIs page, select Done.

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

6. On the Configure API import page, select Save configuration.

## Configure settings to manage APIs in API Insights

Configure API Insights settings, including API creation tools, relationship
models, ownership groups, and automated workflows, to streamline API
governance and operational processes.

Before you begin

Role required: sn_api_insights_ws.api_mgmt_architect_admin or
sn_cmdb_admin

Procedure

1. Navigate to Workspaces > API Insights.

2. Select the Settings tab.

3. Turn on the All settings option.

Note:   This step is applicable to users with the
sn_cmdb_admin role. You can skip this step if you have the
sn_api_insights_ws.api_mgmt_architect_admin role.

4. In the API creation tool section, select an API creation tool from the
available options.

Option
Description

None
Uses no external tool.

Digital Integration Management
Uses the Digital Integration
Management application (part
of the Enterprise Architecture
Workspace), if enabled, to
initiate the API design process
by creating a digital interface
record.

External tool
Uses a third-party tool for API
creation, requiring the URL for
the external tool (for example,

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

Option
Description

http://www.postman.com ) to
be entered in the External API
authoring tool URL field.

5. In the API-to-business application relationship model section, select a
relationship model from the available options.

Option
Description

CSDM
Links an API to an application
service and then to business
context also called as business
application using the Common
Service Data Model (CSDM).

Digital Integration Management
Links an API to a digital interface
and then to business context.

6. In the Ownership group section, set the ownership group responsible
for managing the API.

Option
Description

Managed by Group
Assigns the API to a specific
group responsible for its overall
management and governance
ensuring the API’s functionality,
security, and alignment with
business objectives.

Note:

By default, the
SyncOwnershipGroupsOfAP
IVersions scheduled job is
active, ensuring that the
managed by group is
synced for the next API
version.

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

Change Group
Assigns the API to a group that
oversees changes, managing
the life cycle to ensure
modifications are documented
and implemented without
disrupting services.

Approval Group
Assigns the API to a group
handling approvals for actions
like changes or deployments,
ensuring necessary approvals
are secured.

Support Group
Assigns the API to a support
group responsible for resolving
incidents, maintaining stability,
and troubleshooting issues.

7. In the Configure workflows section, select a workflow for automating
an API action.

Note:   Workflows are created by your administrator using the
Workflow Studio. See Configuring flows for API actions in API
Insights.

8. Select Save.

## Validating API specifications in API Insights

You can access API specification validation rules to verify that your API
specifications are complete, consistent, and adhere to best practices.

Validation rules identify structural issues early during import or analysis,
improving overall API quality. You can manage these rules to enforce
standardization across API specifications and reduce errors by checking
for missing or incorrect fields before APIs are published or used in
production.

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

Storing API specifications

The API Specification [sn_api_insights_ws_api_specification] table stores
the specification documents that describe individual APIs. Each record
includes the following details to identify the API to which the specification
belongs and to manage multiple versions.

API specification details

Field
Description

Name
Name of the API.

Version
Version of the API.

Type

Format and version of the API
specification standard being used.
For example, openapi3.0.0 for an
OpenAPI specification.

State

Current status indicating whether
the API specification has been
validated against the applicable
rules and the validation outcome.
Valid values are:

• Unprocessed: Indicates that the
API specification hasn’t been
validated.

• Valid: Indicates that the API
specification was validated and
processed successfully or with
warnings. If warnings are present,
details are displayed in the
Message field.

• Invalid: Indicates that the API
specification was validated but
contains errors. Error details are
displayed in the Message field.

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

Specification

Full content of the API specification
file.

Note:   For OpenAPI, includes
the complete OpenAPI
document describing
endpoints, methods, and
schema.

Message

Messages are generated after
processing all validation rules
for the specification type. They
include errors or warnings with
explanations.

Validation rule structure

The Specification Validation Rule
[sn_api_insights_ws_spec_validation_rule] table stores validation rules
for the API specifications defined in the API Specification
[sn_api_insights_ws_api_specification] table.

Note:   The sn_cmdb_editor role is required to edit or delete
validation rules, and the cmdb_read role to view them.

Each validation rule contains the following key components:

Validation rule components

Component
Description

Specification
API specification for which the rule
is designed.

Version

Version of the API specification
the rule validates. If specified,
the rule applies only to those
versions. To restrict validation to
specific versions, specify them in
the Version field. Separate multiple

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

Component
Description

values with commas. For example,
1.0,1.1,2.0.

Note:   If the Version field
is left empty, the rule runs
for all installed versions of
the specified API specification
type.

Type

Type of validation to perform. The
valid values are:

• Path: Verifies that the specific
keys are present within arrays
of objects, individual objects,
or both, in the designated
sections of the API specification
document.

• Expected value: Validates
whether the specified key
matches the expected values
specified in the Value field. This
validation applies only to a single
key specified in the Key field.

Key

Part of the specification to verify.
If no expected value is provided,
you can enter multiple keys in the
Key field, separated by commas.

Value

Expected values for the key
specified in the Key field. Separate
multiple values with commas.

Severity

Severity level of the validation rule
outcome, either a warning or an
error.

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

Component
Description

Note:   When set to warning,
the API specification remains
valid if the rule isn’t met,
indicating it is not a failure,
and only a message is
displayed.

Message
Explanation of the issue when the
rule is triggered.

Active

Option to activate the rule. Only
active rules are triggered by
the API Specification Validation
scheduled job.

API specification validation process

The API Specification Validation scheduled job automatically validates
unprocessed API specifications against active rules based on their
specification type to ensure compliance with required standards.

The validation process includes:

1. Retrieving all active validation rules from the Specification Validation
Rule [sn_api_insights_ws_spec_validation_rule] table.

2. Selecting APIs marked as unprocessed in the API Specification
[sn_api_insights_ws_api_specification] table.

3. Applying relevant validation rules to each selected API based on its
specification type, such as OpenAPI.

4. Verifying the presence or correctness of specific fields or their values
within the API specification.

5. Updating the processing status and capturing any errors or warnings.

Predefined rules for OpenAPI specifications

By default, the application includes the following validation rules for
OpenAPI specifications:

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

Validate tags

Verifies that each tag in the API specification includes a name field. If the
name field is missing, the system returns a warning message but marks the
specification as valid.

Validate required sections

Verifies that the API specification includes the required top-level sections:
info, paths, and components. If any of these sections are missing, the
system returns an error message and marks the specification as invalid.

Validate servers section

Verifies whether the API specification includes a servers section that
defines the server endpoints. If the servers section is missing, the system
returns an error message and marks the specification as invalid.

These predefined rules verify critical sections such as tagging, metadata,
and server definitions in OpenAPI specifications.

## Automating creating tag-based relationship mapping
## within API Insights

You can configure and automate creating CMDB relationships between
APIs and application services or business applications based on API tags.

Tag-based relationship mapping enables CMDB administrators and
enterprise architects to define rules that automatically create CMDB
relationships between APIs and application services or business
applications based on API tags. Each rule specifies how a tag on a
source CI is matched to a field on a target CI, and which relationship
type and direction to create. Rules are stored in the Tag Based
Relationship Mapping [sn_api_insights_ws_tag_relationship_mapping]
table, enabling automatic mapping of multiple APIs to application
services or business contexts.

You can use tag-based relationship mapping for:

• Relating APIs to application services using a tag, such as a service
name.

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

• Linking APIs or components to business applications by matching a tag
to an external ID field.

• Standardizing relationship creation across different environments.

To create CMDB relationships between APIs and application services or
business applications based on API tags, follow these steps:

1. Define tag-based mapping rules.

2. Schedule the tag-based mapping rule.

Define tag-based mapping rules

Establish relationships between APIs and application services by defining
tag-based mapping rules for APIs available within the API Insights
application.

Before you begin

Role required: sn_cmdb_admin or sn_api_insights_ws.api_mgmt_architect

About this task

Tag-based mapping rules enable you to automatically create
relationships between APIs and application services or business
applications based on tags. To define a tag-based mapping rule, you
need to create a tag relationship mapping record that specifies the
source and target CI classes and the relationship details.

Procedure

1. In the navigation filter of the application navigator, enter
sn_api_insights_ws_tag_relationship_mapping.list and
press the Enter key.

2. On the Tag Relationship Mappings page, select New.

3. On the form, fill in the fields.

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

New record form for the tag-based relationship mapping

Field
Description

Name
Name for the relationship.

Source Class

CI class including API, API
Component, API Frontend, API
Backend, or Managed API that
contains the tag as the source of
the relationship.

Target Class

CI class including Application
Service or Business Application
that the source CI is related to as
the target of the relationship.

Relationship Type

Type of relationship established
between the source CI and the
target CI.

Tag Key

Key from the Key Value
[cmdb_key_value] table that
corresponds to the target CI
field.

Target Match Field
Field on the target CI that
matches the tag value.

Parent Class Role

CI that acts as the parent in
the relationship, either source or
target.

Active
Option to enable the
relationship.

4. Select Submit.

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

Scheduling the tag-based mapping rules

You can use a scheduled job to automatically create CMDB relationships
between APIs and application services or business applications based on
API tags.

Scheduled jobs automate tasks that run at a specific time or on a
recurring schedule. You need the admin role to configure and run a
scheduled job. For more information on configuring a scheduled job, see
Scheduled jobs.

The Tag based relationship mapping scheduled job is available
to schedule applying tag-based mapping rules between APIs and
application services or business applications. By default, this job is
inactive. As a user with the admin role, you can configure and activate it
to run at regular intervals.

For each active tag-based relationship rule, the Tag based relationship
mapping scheduled job processes active rules with the following
workflow:

• Uses the specified tag key to retrieve relevant source CI tags.

• Identifies target CIs where the target CI's matching field matches the
tag value.

• Creates the specified relationship type between the source and target
CIs in the direction indicated by the parent_class_role setting.

• Avoids duplicating existing relationships.

By automating the process of creating relationships based on tags, the
Tag-based relationship mapping scheduled job enables maintaining up-
to-date and accurate mappings between APIs and related application
services or business applications.

## Configuring settings to organize APIs in API Insights

As an enterprise architect administrator with the
sn_api_insights_ws.api_mgmt_architect_admin role, configure workflows
for organizing APIs, including automating API actions and defining
settings to enable enterprise architects manage APIs in the API Insights
workspace.

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

Enterprise architect administrator tasks overview

1. Configure flow for automating API actions.

Configure workflows for automating API actions within API Insights.

2. Configure settings to manage APIs in API Insights.

Configure settings to manage APIs, including API creation tools,
relationship models, ownership groups, and automated workflows, to
streamline API governance and operational processes.

## Configuring flows for API actions in API Insights

Configure flows in Workflow Studio for automating API actions within API
Insights, streamlining processes like API access requests.

Configure flows to automate various API actions, such as granting access
to APIs or processing API requests. Enterprise architect administrators
with the sn_api_insights_ws.api_mgmt_architect_admin role can then
select workflows that align with specific API automation tasks when they
configure settings for managing APIs. See Configure settings to manage
APIs in API Insights.

Predefined flow to send reminders for API access

The API Request Reminder subflow is available with the API Insights
application that sends reminders for approving any API access requests.
This flow automatically sends reminder notifications to the ownership
groups specified in the flow, prompting them to review and approve
pending API access requests.

Predefined flow to grant API access

The API Grant/Reject Access Template subflow is available with the API
Insights application that grants access to any APIs. This flow automatically
that identifies the API access requests and enables to grant or reject
access to any APIs.

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

Configuring flow for API access request automation

To manage API access requests through custom flows, it's essential to
configure the flow with specific input parameters. These parameters
guide the flow's behavior.

To learn about creating flows, see Getting started with flows.

When creating a flow for API access request automation, you must use
specific parameters that control how the flow works.

You must include the following input parameters in the flow:

Input params:
request (reference from sn_api_insights_ws_request_access
_task table) - Required
grant (string) - Required
description (string) - Optional

request

A required reference to a specific record in the API Requests Access
Task [sn_api_insights_ws_request_access_task] table that identifies the
API access request and facilitates interaction with the API Insights
application.

grant

A required string input that specifies the action to be taken, such as
granting or denying access.

description

An optional string input to provide additional details or context about the
API access request.

## Configure settings to manage APIs in API Insights

Configure API Insights settings, including API creation tools, relationship
models, ownership groups, and automated workflows, to streamline API
governance and operational processes.

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

Before you begin

Role required: sn_api_insights_ws.api_mgmt_architect_admin or
sn_cmdb_admin

Procedure

1. Navigate to Workspaces > API Insights.

2. Select the Settings tab.

3. Turn on the All settings option.

Note:   This step is applicable to users with the
sn_cmdb_admin role. You can skip this step if you have the
sn_api_insights_ws.api_mgmt_architect_admin role.

4. In the API creation tool section, select an API creation tool from the
available options.

Option
Description

None
Uses no external tool.

Digital Integration Management
Uses the Digital Integration
Management application (part
of the Enterprise Architecture
Workspace), if enabled, to
initiate the API design process
by creating a digital interface
record.

External tool
Uses a third-party tool for API
creation, requiring the URL for
the external tool (for example,
http://www.postman.com ) to
be entered in the External API
authoring tool URL field.

5. In the API-to-business application relationship model section, select a
relationship model from the available options.

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

Option
Description

CSDM
Links an API to an application
service and then to business
context also called as business
application using the Common
Service Data Model (CSDM).

Digital Integration Management
Links an API to a digital interface
and then to business context.

6. In the Ownership group section, set the ownership group responsible
for managing the API.

Option
Description

Managed by Group
Assigns the API to a specific
group responsible for its overall
management and governance
ensuring the API’s functionality,
security, and alignment with
business objectives.

Note:

By default, the
SyncOwnershipGroupsOfAP
IVersions scheduled job is
active, ensuring that the
managed by group is
synced for the next API
version.

Change Group
Assigns the API to a group that
oversees changes, managing
the life cycle to ensure
modifications are documented
and implemented without
disrupting services.

Approval Group
Assigns the API to a group
handling approvals for actions

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

Option
Description

like changes or deployments,
ensuring necessary approvals
are secured.

Support Group
Assigns the API to a support
group responsible for resolving
incidents, maintaining stability,
and troubleshooting issues.

7. In the Configure workflows section, select a workflow for automating
an API action.

Note:   Workflows are created by your administrator using the
Workflow Studio. See Configuring flows for API actions in API
Insights.

8. Select Save.

## Administering and monitoring API data with API Insights

The Overview tab in the API Insights workspace provides a centralized
overview of your organization's API landscape.

Depending on your role, the API Insights page on the Overview tab
serves as a centralized hub to manage data ingestion integrations,
monitor your APIs, and assess data quality. Whether you're setting up
new connections, tracking API performance, or evaluating the integrity
of incoming data, this page provides the tools and visibility you need. By
offering real-time metrics and quality checks, it empowers teams across
the organization to gain actionable insights.

You can use the page to:

• As CMDB administrators, you can administer data ingestion and align
data model for your organization. See Administering data ingestion and
model alignment with API Insights.

• As enterprise architects, you can monitor APIs while assessing overall
data quality and identifying key issues like missing data elements. See
Monitoring APIs and assessing data quality with API Insights.

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

## Administering data ingestion and model alignment
## with API Insights

The Overview tab in the API Insights workspace provides a centralized
view of data ingestion activities and integration health.

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

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

33

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 33, 2912x3916px]*

```
############%%%#############################################
%#*#**#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%#######%%%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%##############################################%###########%
+: ...........                    ::.......   .- .....     -
.



.:..                ...                ....     .
-+=:::-:            --:.:--.           -=-:::-:   .
:=      =. .        =:     :=  .       -+      =:  :
:=      =. ..       =:     :=  .       -*.     =:  .
:-::::-:           .--:::--.           -+-:::-:   .
....                ...                ....     .


:::.               :=----------.
:::::::--------     -+=:.:--             :+========+-
:::::::--------    :#.     --  .         .:.      .
.*:     -- ..         :====-====.
.--::--:          .       .
..


.::::::::::::::::::::::::::::::::::::
-====================================
-====================================
-====================================
-====================================
.:::::::::::::::::::::::::::::::::::.



... ..             ......             .

.



```

---
*Page 34*

Access the API Insights Overview tab

To access the Overview tab, navigate to Workspaces > API Insights. The
Overview tab opens by default.

Required roles

CMDB administrators can access the Overview tab within the API Insights
workspace to monitor incoming API data, evaluate alignment with the
data model, and take action on misaligned or incomplete data to verify
consistent and accurate CMDB records. They can view and resolve errors
in connections when importing API data into CMDB using Service Graph
Connectors and adjust data based on clustering recommendations.

Note:   As a user with the sn_cmdb_admin role, you need additional
roles such as ml_report_user and cmdb_inst_admin to access some
of the features and data.

Features

Access the various cards on the Overview tab to gain insights on the API
data available in your organization.

Note:   Select a segment or count on a chart to open the KPI Details
page and analyze how a specific metric trends over time. To learn
more about the KPI Details feature, see KPI Details.

Overview tab features for CMDB administrators

Feature
Description
Required roles

Search APIs

API search within the
organization to locate
specific APIs for review
or management.

sn_cmdb_admin

Connection status

Total count of active
API connections and
processing errors.

Provides insight into
the status of
API connections
and highlights any

sn_cmdb_admin and
cmdb_inst_admin

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
Required roles

processing issues to
verify reliable data
ingestion.

Active connections

Total number of
installed connections
with active import
schedules. Select the
count to view installed
connections.

Errors

Total number of
processing errors for
installed connections.

API clustering
recommendations

Number representing
the current clustering
recommendation,
based on the
data model
recommendation
settings.

See Configure
data model
recommendations for
API clustering in API
Insights.

sn_cmdb_admin,
ml_report_user, and
platform_ml_read

APIs by discovery
source

Total count of
discovered APIs
grouped by source.

Provides insight into
the discovery methods

sn_cmdb_admin

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

Feature
Description
Required roles

of APIs across your
organization.

APIs by life cycle

Total count of APIs
grouped by life cycle
stage as Operational,
Deploy, or End of Life.

Provides visibility
into API readiness
and maintenance
status across your
organization.

sn_cmdb_admin

APIs by type

Total count of
APIs categorized
by protocol or
communication type.

Includes technologies
such as REST,
GraphQL, and
SOAP, providing
insight into the
integration styles and
interoperability across
your organization.

sn_cmdb_admin

APIs by environment

Count of APIs
deployed in each
environment.

Highlights distribution
across Development,
Test, and Production
stages, enabling
monitoring of
deployment progress

sn_cmdb_admin

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

Feature
Description
Required roles

and assessment of risk
exposure.

APIs by ownership
group

Total count of
APIs categorized by
assigned ownership
group.

Groups APIs by
managing team or
function, as defined
by an enterprise
architect administrator
with the
sn_api_insights_ws.api_
mgmt_architect_admi
n role in settings. For
more information on
setting an ownership
group, see Configure
settings to manage
APIs in API Insights.

sn_cmdb_admin

APIs missing data

Count of APIs
missing key attributes,
including business
context, ownership
group, product model,
or design.

Each bar represents
a key attribute and
indicates the number
of APIs missing the
attribute.

Color coding indicates
the severity of missing
data:

sn_cmdb_admin

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

Feature
Description
Required roles

Red

More than 50% of
APIs are missing the
attribute.

Yellow

Between 10% and 50%
of APIs are missing the
attribute.

Green

Less than 10% of
APIs are missing the
attribute.

Use the visual
indicator to prioritize
remediation efforts
based on data
completeness. Select
a bar in the bar
chart to start the
remediation process.
See Identifying and
remediating missing
API data in API
Insights.

APIs by business
application

Count of APIs linked to
business applications.

Enables tracking of
API connections to
business applications
to improve integration
after connections are
established.

sn_cmdb_admin

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

Feature
Description
Required roles

Connections overview

Summary of the
status and activity of
API data connections
using Service Graph
Connectors, including
counts of successful,
failed, or unknown
connection tests,
recent import success
rate, and the number
of connections
currently processing
data imports.

sn_cmdb_admin and
cmdb_inst_admin

## Monitoring APIs and assessing data quality with API
## Insights

The Overview tab in the API Insights workspace provides a centralized
view of data ingestion activities and integration health.

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

Access the API Insights Overview tab

To access the Overview tab, navigate to Workspaces > API Insights. The
Overview tab opens by default.

Required roles

You need the sn_api_insights_ws.api_mgmt_architect or the
sn_api_insights_ws.api_mgmt_architect_admin role.

Use cases

For examples of how different people in your organization would use this
workspace, see these use cases.

User
Workspace use

Enterprise architect

Search for APIs, compare APIs,
request access to APIs, and
address data issues.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

40

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 40, 1658x1186px]*

```
%#####%%%%%%%%%%%%%%%%%%%%%%%###%%%%%%%%%%%%%#**######%%%%%#
%##%##%##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%#*##**#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%%%%%%
%%########%####%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%*:---------------:::::::::::::::::::::::::=*--------:::::+%
.                                                          .


.   .
..        ..        ..        .
..        ..        ..        ..         ..:.......
.....





...  .
.    .  .
.                     ...
.
```

---
*Page 41*

User
Workspace use

Enterprise architect administrator

Manage API Insights settings,
including API creation tools,
business context relationship
models, and ownership groups.

Features

Access the various cards on the Overview tab to gain insights on the API
data available in your organization.

Overview tab features

Feature
Description
Required roles

Search APIs

API search within the
organization to locate
specific APIs for review
or management.

•

sn_api_insights_ws.a
pi_mgmt_architect

•

sn_api_insights_ws.a
pi_mgmt_architect_
admin

Access requests
received

Number of access
requests received
indicating the need
for API access
management.

•

sn_api_insights_ws.a
pi_mgmt_architect

•

sn_api_insights_ws.a
pi_mgmt_architect_
admin

Your access requests

Number of access
requests created by
the logged-in user,
indicating the activity

•

sn_api_insights_ws.a
pi_mgmt_architect

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

Feature
Description
Required roles

for API access
management.

•

sn_api_insights_ws.a
pi_mgmt_architect_
admin

Helpful resources

Links to product
documentation,
knowledge base
articles, and a
community forum for
additional support and
information.

•

sn_api_insights_ws.a
pi_mgmt_architect

•

sn_api_insights_ws.a
pi_mgmt_architect_
admin

APIs missing data

Missing business
context

Count of APIs with
no business context
assigned.

•

sn_api_insights_ws.a
pi_mgmt_architect

•

sn_api_insights_ws.a
pi_mgmt_architect_
admin

Missing ownership
groups

Count of APIs with
no ownership group
assigned.

Ownership groups
enable tracking
remediation and
managing access
requests.

•

sn_api_insights_ws.a
pi_mgmt_architect

•

sn_api_insights_ws.a
pi_mgmt_architect_
admin

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

Feature
Description
Required roles

Missing product
models

Count of APIs with
no product model
assigned,

Product models
enable accurate
reporting and
interactions with
multiple versioned
APIs.

•

sn_api_insights_ws.a
pi_mgmt_architect

•

sn_api_insights_ws.a
pi_mgmt_architect_
admin

Missing design

Count of runtime
APIs, available as
API configuration items
(CIs), with no design
representation.

Linking runtime APIs
with design-time APIs,
available as Digital
Interface records,
improves usability.

•

sn_api_insights_ws.a
pi_mgmt_architect

•

sn_api_insights_ws.a
pi_mgmt_architect_
admin

Your team's APIs

All APIs
Total number of APIs
managed by a team.

•

sn_api_insights_ws.a
pi_mgmt_architect

•

sn_api_insights_ws.a
pi_mgmt_architect_
admin

In design

Number of APIs
currently being
designed.

•

sn_api_insights_ws.a
pi_mgmt_architect

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

Feature
Description
Required roles

•

sn_api_insights_ws.a
pi_mgmt_architect_
admin

Operational
Number of APIs in
active use.

•

sn_api_insights_ws.a
pi_mgmt_architect

•

sn_api_insights_ws.a
pi_mgmt_architect_
admin

End of Life

Number of APIs
that are retired or
decommissioned.

•

sn_api_insights_ws.a
pi_mgmt_architect

•

sn_api_insights_ws.a
pi_mgmt_architect_
admin

APIs managed by your team

All APIs managed by
your team

Overview of the
APIs managed by
a team, based on
the group associated
with the logged-in
user and the APIs
linked to that group.
API details include
name, consumer
count, management
platform, life cycle

•

sn_api_insights_ws.a
pi_mgmt_architect

•

sn_api_insights_ws.a
pi_mgmt_architect_
admin

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

Feature
Description
Required roles

stage, version, and
requests per minute.

Populates data
corresponding to the
selected card in
the Your team's APIs
section.

## Managing API data in API Insights

You can use the API Insights workspace to centralize and manage API
data for informed decision-making.

Within the API Insights workspace, you can:

• View all APIs within your organization.

Manage and monitor all APIs within your organization by reviewing their
life cycle stages, identifying missing critical attributes, and accessing
helpful resources to ensure proper API maintenance and governance.

• Search for an API.

Search for an API or an API component available within your
organization in the API Insights workspace.

• Compare APIs.

Compare APIs available within your organization in the API Insights
workspace.

• Connect to an API creation tool from API Insights.

Initiate API creation directly from the API Insights workspace by
connecting to an external API design tool of your choice.

• Request access.

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

Request access to an API available within your organization in the API
Insights workspace.

• Identify and remediate missing API data.

Identify and remediate missing API data in the API Insights workspace
by linking missing elements and verifying complete API records.

• Manage your team's API data.

Improve the operational efficiency of the API ecosystem within your
organization by creating a relationship for APIs that lack key attributes
such as business context, ownership groups, product models, or designs.

• View details of an API.

Gain insights into your organization's API performance, relationships,
and governance from the API details page within the API Insights
workspace.

• Manage application service relationships.

Associate APIs with relevant configuration items (CIs) to ensure
accurate mappings between APIs and the configuration items they
support.

• Automate creating tag-based relationships.

Configure and automate creating CMDB relationships between APIs
and application services or business applications based on API tags.

## Viewing all APIs in API Insights

Manage and monitor all APIs within your organization by reviewing their
life cycle stages, identifying missing critical attributes, and accessing
helpful resources to ensure proper API maintenance and governance.

The All APIs page in the API Insights workspace provides a comprehensive
overview of all APIs within an organization ensuring that APIs are properly
maintained and aligned with the organization's standards for interfaces,
ownership, and product models.

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

All APIs page

Accessing and using the All APIs page

To access the All APIs page, navigate to Workspaces > API Insights, and
then select the API tab.

Viewing data

By default, the page displays the following data:

All APIs list

Displays the total number of APIs managed by the organization and
categorizes them by their life cycle stage (All APIs, In design, Operational,
End of Life). You can select the each card to view APIs by their life cycle
stage in the API data table.

API data table

Lists all APIs with detailed columns for the API name, the number of
consumers, management platform, life cycle stage, version, and the
number of API requests processed per minute for each API listed in the
table. This table provides an overview of the APIs and their status within
the organization. You can select an API from the Name column to view
API details and request access to the API managed by your team. See
Request access to an API in API Insights.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

47

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 47, 3454x1898px]*

```
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
...


.                     .


.
.
.                 ..
.                 ..
.
.                           ..
.                 ..        .......


```

---
*Page 48*

Available actions and filters in the API data table

Provides several actions and filtering options to manage and refine
the displayed data. These include exporting the list in various formats,
refreshing the data, and applying filters to narrow down the results by
platform type, instance, or specific column criteria.

Exporting API data

Export the APIs list as a PDF, CSV, JSON, or Microsoft Excel file by selecting
Export, and then selecting the desired file format from the File Type list.
You can either download the file to your local directory or email the
file by selecting a value from the Delivery Type list. After making your
selections, select Export to complete the process.

Refreshing the API data

Manually populate the API data table on demand by selecting the

refresh icon (

).

Filtering APIs by platform and instance

Narrow down the API list based on platform type and instance.

• Use the Management Platform Type list to filter APIs by platform
category.

• Use the Management Platform Instance list to refine results by a specific
ServiceNow instance.

Select Apply to update the list based on the selected filters. If you select
ALL in either list, APIs from all available options are included in the table.

Applying filters to API data columns

Refine the list of APIs by using column-specific filters or advanced
condition sets.

Each column in the All APIs list includes lightweight, inline filtering options:

Operator

Includes the comparison operator for the filter. The operator list includes
is, is not, starts with, ends with, contains, does not contain,

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

is empty, is not empty. In the Value field, you can enter the text
or number you want to filter on and then press the Enter key. The list
refreshes when the filter is applied.

For example, selecting contains and entering a value in the Value field,
filters the list to show only API records where the column contains that
text.

Open panel

Opens the full filter panel for the selected column and provides a finer
control over the filters to refine the data in the table according to the
parameters that are most important for your analysis.

You can define custom conditions for narrowing down data by selecting
a field, choosing an operator, such as equals or contains, and entering
a specific value. You can add multiple conditions to refine your search
further, and once you've set the filters, selecting Run updates the API
data table accordingly. The Show labels toggle switch controls whether
the labels for the fields and operators are displayed. When enabled, it
shows descriptive text next to each option to help you understand their
purpose, while disabling it hides the labels for a more compact view.

Add Filter

Inline filter rule added for a column so you can immediately define
conditions using the operator and value fields. For example, when
filtering by Type, you can choose REST, SOAP, gRPC, Websocket, Scripted
REST, and other predefined options.

APIs missing data section

Highlights the APIs missing key attributes like business context, ownership
groups, product models, and design helping to identify issues in API
governance. You can select the numeric value displayed in each
card to identify and resolve issues with API data. See Identifying and
remediating missing API data in API Insights.

Helpful resources

Contains quick links to product documentation, knowledge base articles,
and community forums, providing easy access to additional resources for
API management.

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

## Search for an API or an API component in API Insights

Search for an API or an API component available within your organization
in the API Insights workspace.

Before you begin

Role required: sn_api_insights_ws.api_mgmt_architect

Procedure

1. Navigate to Workspaces > API Insights.

2. In the Search APIs text box on the Overview tab, enter your search
phrase and select Search.

Tip:   Alternatively, after entering the search phrase, you can
press the Enter key.

3. On the Search results page, select a tab to view more details.

Tab
Description

APIs
List of APIs that match your
search query, including their
management platform, life
cycle stage, and most recent
discovery date.

API components
List of individual components of
APIs that match your search
query, including their class,
method, and URL.

## Compare APIs in API Insights

Compare APIs available within your organization in the API Insights
workspace.

Before you begin

Role required: sn_api_insights_ws.api_mgmt_architect or sn_cmdb_admin

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

Procedure

1. Navigate to Workspaces > API Insights.

2. In the Search APIs text box on the Overview tab, enter your search
phrase and select Search.

3. On the Search results page, select the APIs tab.

4. Select the check boxes next to the Name column for APIs that you
want to compare.

Note:   You can select up to three APIs to compare.

5. Select Compare selected.

6. On the Compare APIs page, compare the selected APIs based on
version, type, business context also called as business application,
managed by group, life cycle stage, and sources.

## Connect to an API creation tool from API Insights

Initiate API creation directly from the API Insights workspace by
connecting to an external API design tool of your choice.

Before you begin

The application administrator must configure an API creation tool. See
Configure settings to manage APIs in API Insights.

Role required: sn_api_insights_ws.api_mgmt_architect

About this task

Search for an existing API in the API Insights workspace, and if no
matches are found, initiate API creation directly from the workspace.

Procedure

1. Navigate to Workspaces > API Insights.

2. In the Search APIs text box on the Overview tab, enter the name or
keyword of the API to search for and select Search.

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

3. On the Search results page, select the APIs tab to view matching
APIs.

4. If no matching API is found, select Create API to start designing a
new API.

Result

Based on the settings configured by your application administrator, the
API creation tool opens, enabling you to create an API.

## Request access to an API in API Insights

Request access to an API available within your organization in the API
Insights workspace.

Before you begin

The application administrator must configure an ownership group and set
up a workflow for managing access requests.

Role required: sn_api_insights_ws.api_mgmt_architect

About this task

Alternatively, you can request access to an API managed by your team.
See Manage your team's API data in API Insights,

Procedure

1. Navigate to Workspaces > API Insights.

2. In the Search APIs text box on the Overview tab, enter your search
phrase and select Search.

3. On the Search results page, select the APIs tab.

4. Select the check box next to the Name column for the API for which
you want to request access.

Note:   You can request access for only one API at a time.

5. Select Request access.

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

6. In the Request access dialog box, fill in the details.

Field
Description

Access type

Method used for authenticating
and authorizing users or
applications when interacting
with an API or service. The
available options are:

API Key

Provides authentication using a
unique token included in the
request.

Application

Grants access at the application
level, authenticating the
application itself.

Basic Auth

Uses a base64-encoded string of
credentials sent in the request
header for authentication.

Developer

Offers access for individual
developers or development
environments.

OAuth 2.0

Employs tokens to authorize
access securely, allowing
applications to act on behalf of
a user.

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

Field
Description

Other

Includes custom methods
of authentication and
authorization.

Access duration in days

Length of time, measured in
days, for which access to an API
is granted before reauthorization
is needed.

Justification for your access
request

Reason or explanation for why
access to the API is needed.

7. Select Request.

Result

The access request is submitted for approval based on the workflow
settings configured by your application administrator.

## Identifying and remediating missing API data in API
## Insights

Identify and remediate missing API data in the API Insights workspace by
linking missing elements and verifying complete API records.

Missing metadata can reduce the effectiveness of API discovery, life
cycle tracking, and ownership accountability. Common missing elements
include:

• Business context

• Ownership group

• Product model

• Design details

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

Resolving missing data ensures a more complete, accurate view
of dependencies and ownership, improving impact assessments and
service management.

The Overview tab of the API Insights workspace enables improve
the usability, governance, and integration of APIs by highlighting any
incomplete or missing data within the Configuration Management
Database (CMDB).

Remediating missing API data by roles

The following roles can identify and resolve missing metadata in API:

• An enterprise architect with the sn_api_insights_ws.api_mgmt_architect
role can access the Overview tab in the API Insights workspace to
remediate missing API information using dedicated tiles for each type
of missing data.

• A CMDB administrator with the sn_cmdb_admin role can access the
Overview tab in the API Insights workspace and select a bar within
the APIs missing attributes bar chart to identify and update missing
metadata.

Monitoring key metrics

You can monitor the following missing data associated with APIs within
your organization:

Missing business context

APIs not associated with any business context reduce the clarity and
governance over which business areas are providing them.

Missing ownership groups

APIs without an assigned ownership group affect governance. Assigning
ownership groups streamlines tracking remediations, managing access,
and resolving issues quickly.

Missing product models

APIs without an assigned product model limit the ability to provide
accurate reporting and interactions with versioned APIs.

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

Missing design

APIs with no design representation hinder their full integration into the
system. Linking these APIs with their design-time counterparts (such as
digital interface records) improves usability and operational efficiency.

Resolving missing API data

You can resolve missing API data by creating relationships for business
context or references for ownership groups, product models, or designs,
to establish connections between the API and other CIs within the CMDB.

You can establish the following relationships or references in API Insights
to resolve missing API data:

API-to-business context relationship

Links an API to a specific business context, defining the context in which
the API is used and creating a relationship record in the CMDB.

API-to-ownership group reference

Links an API to a group responsible for its governance, access control,
and maintenance, serving as a reference without creating a record in
the CMDB.

API-to-product model reference

Links an API to a product model, providing information on the API's
versioning, product line, and life cycle stage, serving as a reference
without creating a record in the CMDB.

API-to-design reference

Links an API to its runtime or design-time interface, serving as a reference
without creating a record in the CMDB.

Create a relationship or reference to remediate missing API data

Improve the operational efficiency of the API ecosystem within your
organization by creating a relationship or reference for APIs that lack key
attributes such as business context, ownership groups, product models, or
designs.

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

Before you begin

Role required: sn_api_insights_ws.api_mgmt_architect, sn_cmdb_admin

About this task

Available missing data categories include:

• Missing business context

• Missing ownership groups

• Missing product models

• Missing designs

Note:   Displayed only when the Digital Integration Management
plugin (sn_apm_di) is activated.

Important:   When creating relationships for a large number of APIs,
you can automate creating relationships based on tags on API. For
more information, see Automating creating tag-based relationship
mapping within API Insights.

Procedure

1. Navigate to Workspaces > API Insights.

2. Select the Overview tab, if not already selected by default.

3. Select a missing data category to open the list of APIs missing that
attribute.

• As a user with the sn_api_insights_ws.api_mgmt_architect role, in
the APIs missing data section, select the number shown for a
specific missing data category.

• As a user with the sn_cmdb_admin role, select a category bar in
the APIs missing data bar chart.

4. On the APIs missing data page, select the check boxes next to the
API names.

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

5. Resolve missing data.

• For resolving missing business context, select Create relationships.

• For resolving missing ownership groups, product model, or
designs, select Create reference.

6. Select the check boxes next to the Name column for the application
services.

7. Based on the type of connection needed, establish relationships or a
reference.

• For business context, select Create relationships.

• For ownership groups, product model, or designs, select Create
reference.

8. In the dialog box that appears, select Create.

## Manage your team's API data in API Insights

Improve the operational efficiency of the API ecosystem within your
organization by creating a relationship for APIs missing key attributes such
as business context also called as business application ownership groups,
product models, or designs.

Before you begin

Role required: sn_api_insights_ws.api_mgmt_architect

Procedure

1. Navigate to Workspaces > API Insights > Overview.

2. In the Your team's APIs section, select a category based on the API's
life cycle stage.

• To view all the APIs managed by your team, select All APIs.

• To view the APIs managed by your team that are currently in the
design phase, select In design.

• To view the APIs managed by your team that are active and in
use, select Operational.

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

• To view the APIs managed by your team that have reached the
end of their life cycle, select End of Life.

3. From the Name column, select an API to view more details of the API.
See Viewing API details in API Insights.

4. (Optional) Select Request access to gain access to the API.

## Viewing API details in API Insights

As an enterprise architect, gain insights into your organization's API
performance, relationships, and governance from the API details page
within the API Insights workspace.

The API details page in the API Insights workspace provides a detailed
view of an API's operational status, usage, security, and relationships
within CMDB.
API details page

.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

59

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 59, 2028x1564px]*

```
..
.... . ........ ...                                       .
....          .
..         ..         .....      ......       . .
..  ..    .          ...                     ...
. ....    .                                  .
. .       .
. .
.
.  ......
. .
.
.........
...........


.





..                     ..
```

---
*Page 60*

Accessing and using the API details page

To access the API details page, navigate to Workspaces > API Insights,
select the APIs tab, and then select an API from the Name column from
the API data table.

Viewing data

By default, the page displays the following data:

• Header region

• Metadata region

• Related lists

• Overview panel

• Usage

• Events

• Security

• Relationship map

Header region

Displays the name of the API, version information, the API's current life
cycle stage, such as Operational, or End of Life.

The View By list enables you to toggle between different management
platforms, if available, under which the API is managed.

The version selector enables the selection of different versions of the API
to view and manage. Select Update to update the details based on the
selected version.

Note:   The View By list and the version selector appear only if
applicable for an API.

Metadata region

Displays the following fields.

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

Description
Brief summary or purpose of the
API.

Last discovered
Last date the API was discovered
or updated in the CMDB.

Discovery source
Source from where the API was
discovered.

Type

Type of the API whether scripted
REST API, HTTP API, platform REST
API, and so on.

Ownership group
Team or group responsible for
managing the API.

Digital interface
Interaction method of the API
within the system.

Related Lists

Displays the following items as links with their counts.

Item
Description

Access requests received

Displays the number of access
requests made for the API. Select
the link displayed on the card to
view access request details.

Consumers

Displays the number of consumers
of the API. Select the link displayed
on the card to view details for
each API consumer.

Deployments

Indicates any active or past
deployments of the API across
environments. Select the link

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

Item
Description

displayed on the card to view API
deployment details.

Products

Displays the number of products
associated with the API. Select the
link displayed on the card to view
API product details.

Tags

Displays the number of tags
associated with the API. Select the
link displayed on the card to view
details for each tag.

Overview panel

Lists all available components of the API, organized into three subsections
within the Overview panel:

Frontend

Contains client-side operations, including GraphQL mutations and
queries that interact with the UI or user-facing functionality.

Backend

Contains server-side operations, including backend-specific GraphQL
mutations and queries that process business logic and data.

Components

Contain various REST API endpoints or service interfaces, each providing
a specific function or resource within the API.

You can expand each subsection to view its endpoints and select any
endpoint to see its details.

Usage

Displays the following cards.

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

Card
Description

Average number of requests

Number of API component
requests over time, represented
as a line graph, with the x-axis
showing the date range and the
y-axis displaying the request count.

Usage by version

API request distribution across
different versions over the past 10
days.

Events

Displays the following cards.

Card
Description

Critical alerts

Critical alerts from IT operations
related to the API enabling
identifying major issues that could
affect the API’s performance.

Select the card to display all
the open alerts in the Service
Operations Workspace and access
more detailed information on
them. For more information, see
Service Operations Workspace.

Incidents

Recorded incidents, such as
outages, change requests, or
problems related to the API
essential for tracking operational
health and remediation efforts.

Select the card to display all
the open incidents in the Service
Operations Workspace and access
more detailed information on

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

Card
Description

them. For more information, see
Service Operations Workspace.

Security

Displays the following cards.

Card
Description

Active vulnerability items

Security vulnerabilities associated
with the API enabling to track and
resolve potential risks.

Select the card to display all
vulnerabilities in the Vulnerability
Manager Workspace and access
more detailed information on
them. For more information, see
Vulnerability Manager Workspace.

Security incidents

Security incidents, if enabled,
providing insights into security
breaches or issues that might have
occurred with the API.

Select the card to display all open
security incidents in the Security
Incident Response Workspace and
access more detailed information
on them. For more information,
see Security Incident Response
Workspace.

Relationship map

Provides a hierarchical overview of the API relationships with its
components, management platforms, business applications, and
designs, making it easier to understand the API's role within the

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

broader system architecture. In addition, provides the option to manage
application service relationships. See Managing application service
relationships for APIs.

A relationship map is a partial unified map similar to the one used in the
CMDB Workspace. To open the unified map for APIs, select Open full
map in the Relationship map section of the API details page. To learn
more, see Unified Map.

Unified map for APIs

Nodes on the map represent the API and its components in the
CMDB and lines represent connections and relationships between API
components. The connections help you, for example, to assess the
impact of a change to a selected node by showing components
that are connected to it through relationships and references. Products
such as Change Management, Incident Management, and Event
Management benefit from such information.

The map also shows the composition of application services useful with
products such as Event Management and Incident Management. You
can review historical changes.

The following elements are available in the unified map for APIs:

1: Map

The map displays the specified API and its connections and relationships.
In the example, the httpbin.org-v1.1 is the home node and the lines

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

65

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 65, 3348x1730px]*

```
..   .....                                      .          .
.                                               ....      .:
.                                                  ...    .:
.                   .                                     ..
.                    .                                .   ..
.                    ..                               .   ..
.                                                         ..
.                                                ...      ..
.                                                         ..
.                                                         ..
.                 .                        .              ..
.                                         ......          ..
.                                                         ..
.                                                         ..
. .  .  .. .                                              ..
```

---
*Page 66*

represent connections and relationships with other components. Select
any node to view details like related application services, change history.

2: Content controls

• Search for and select the home node, specify the number of
relationship levels for application services to display, and reload the
map after making changes.

• Use filters to limit the types and relationship types that appear on the
map.

• Show or hide the timeline of events (related items) for the selected API

3: Toolbox

Use the toolbox to control several visual aspects of the map, such as
zoom level or layout mode.

4: Contextual side panel

• The Attributes panel (

) lists attributes like location and operational
status for the selected API or relationship.

• The Application services panel (

) lists details of application services
associated with the selected API.

• The Related items panel (

) shows related items such as active
incidents or active problems for the selected API.

• The Changes panel (

) lists changes such as changes to operational
status for the selected API.

5: Mini-map navigator

Set the zoom level or move the view to an area of interest. Select the
icon to show or hide the navigator.

6: Timeline

The timeline indicates events (related items) like incidents, problems, and
changes for the selected API over a specified period of time. You can
use the timeline to visualize the history of changes to an API and how
they affect the topology of the CMDB.

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

## Managing application service relationships for APIs

You can associate APIs with relevant configuration items (CIs) to ensure
accurate mappings between APIs and the configuration items they
support.

Application service relationships link APIs to business context and the
CIs they depend on, providing clarity on dependencies and improving
performance visibility. They enable you to monitor, track changes, and
resolve issues more efficiently.

For APIs, application service relationships map how they interact with
other CIs, enabling you to manage dependencies, ensure business
continuity, and respond quickly to incidents. By understanding these
relationships, you gain better control over API performance and the
availability of connected CIs.

By using application service relationships, you can:

• Identify which APIs are tied to specific application services and their
related CIs.

• Understand the dependencies between APIs and the CIs they support.

• Manage and monitor API performance and its impact on critical
business services and CIs.

For more information, see Application services.

The available actions for handling application service relationships for
APIs include:

• View application service relationships.

• Create application service relationships.

• Remove application service relationships.

Note:   When managing multiple API relationships for application
services, you can automate the mapping. For more information, see
Automate tag-based relationship mapping.

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

View application service relationships

View existing relationships between an API and application services.

Before you begin

Role required: sn_cmdb_admin,
sn_api_insights_ws.api_mgmt_architect_admin, or
sn_api_insights_ws.api_mgmt_architect

Procedure

1. Navigate to Workspaces > API Insights.

2. Select the APIs tab.

3. Select an API from the Name column on the API data table.

4. In the Relationship map section, select Manage service relationships.

5. View existing relationships between application services and the
selected API on the Related application services table.

Create application service relationships

Create relationships between an API and application services.

Before you begin

Role required: sn_cmdb_admin or
sn_api_insights_ws.api_mgmt_architect_admin

Procedure

1. Navigate to Workspaces > API Insights.

2. Select the APIs tab.

3. Select an API from the Name column on the API data table.

4. In the Relationship map section, select Manage service relationships.

5. Select Create relationships.

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

6. Select application services to create relationships with the selected
API.

7. Select Create.

Remove application service relationships

Remove relationships between an API and application services.

Before you begin

Role required: sn_cmdb_admin or
sn_api_insights_ws.api_mgmt_architect_admin

Procedure

1. Navigate to Workspaces > API Insights.

2. Select the APIs tab.

3. Select an API from the Name column on the API data table.

4. In the Relationship map section, select Manage service relationships.

5. On the Related application services table, select the check box for
an existing relationship.

6. Select Remove relationships.

## Automating creating tag-based relationship mapping
## within API Insights

You can configure and automate creating CMDB relationships between
APIs and application services or business applications based on API tags.

Tag-based relationship mapping enables CMDB administrators and
enterprise architects to define rules that automatically create CMDB
relationships between APIs and application services or business
applications based on API tags. Each rule specifies how a tag on a
source CI is matched to a field on a target CI, and which relationship
type and direction to create. Rules are stored in the Tag Based
Relationship Mapping [sn_api_insights_ws_tag_relationship_mapping]

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

table, enabling automatic mapping of multiple APIs to application
services or business contexts.

You can use tag-based relationship mapping for:

• Relating APIs to application services using a tag, such as a service
name.

• Linking APIs or components to business applications by matching a tag
to an external ID field.

• Standardizing relationship creation across different environments.

To create CMDB relationships between APIs and application services or
business applications based on API tags, follow these steps:

1. Define tag-based mapping rules.

2. Schedule the tag-based mapping rule.

Define tag-based mapping rules

Establish relationships between APIs and application services by defining
tag-based mapping rules for APIs available within the API Insights
application.

Before you begin

Role required: sn_cmdb_admin or sn_api_insights_ws.api_mgmt_architect

About this task

Tag-based mapping rules enable you to automatically create
relationships between APIs and application services or business
applications based on tags. To define a tag-based mapping rule, you
need to create a tag relationship mapping record that specifies the
source and target CI classes and the relationship details.

Procedure

1. In the navigation filter of the application navigator, enter
sn_api_insights_ws_tag_relationship_mapping.list and
press the Enter key.

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

2. On the Tag Relationship Mappings page, select New.

3. On the form, fill in the fields.

New record form for the tag-based relationship mapping

Field
Description

Name
Name for the relationship.

Source Class

CI class including API, API
Component, API Frontend, API
Backend, or Managed API that
contains the tag as the source of
the relationship.

Target Class

CI class including Application
Service or Business Application
that the source CI is related to as
the target of the relationship.

Relationship Type

Type of relationship established
between the source CI and the
target CI.

Tag Key

Key from the Key Value
[cmdb_key_value] table that
corresponds to the target CI
field.

Target Match Field
Field on the target CI that
matches the tag value.

Parent Class Role

CI that acts as the parent in
the relationship, either source or
target.

Active
Option to enable the
relationship.

4. Select Submit.

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

Scheduling the tag-based mapping rules

You can use a scheduled job to automatically create CMDB relationships
between APIs and application services or business applications based on
API tags.

Scheduled jobs automate tasks that run at a specific time or on a
recurring schedule. You need the admin role to configure and run a
scheduled job. For more information on configuring a scheduled job, see
Scheduled jobs.

The Tag based relationship mapping scheduled job is available
to schedule applying tag-based mapping rules between APIs and
application services or business applications. By default, this job is
inactive. As a user with the admin role, you can configure and activate it
to run at regular intervals.

For each active tag-based relationship rule, the Tag based relationship
mapping scheduled job processes active rules with the following
workflow:

• Uses the specified tag key to retrieve relevant source CI tags.

• Identifies target CIs where the target CI's matching field matches the
tag value.

• Creates the specified relationship type between the source and target
CIs in the direction indicated by the parent_class_role setting.

• Avoids duplicating existing relationships.

By automating the process of creating relationships based on tags, the
Tag-based relationship mapping scheduled job enables maintaining up-
to-date and accurate mappings between APIs and related application
services or business applications.

## Managing API access within API Insights

Manage received and sent requests by granting or rejecting API access,
sending reminders, or withdrawing requests in API Insights.

You can manage API access requests by performing the following
actions:

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

• Manage requests received for API access in API Insights.

• Manage requests sent for API access in API Insights.

## Manage requests received for API access in API
## Insights

Manage incoming received requests for API access in API Insights.

Before you begin

Role required: sn_api_insights_ws.api_mgmt_architect

Procedure

1. Navigate to Workspaces > API Insights.

2. In the Access requests received section on the Overview tab, select
the displayed numeric value.

3. In the Requests received tab, review all incoming requests.
You can review the details such as API name, requested by, request
type, duration, and the reason for the request.

Important:   The View requests link in the
API request reminder email works only if you
have the sn_api_insights_ws.api_mgmt_architect or
sn_api_insights_ws.api_mgmt_architect_admin role and are part
of the same group that received the email to view the requests.

4. Select the check boxes next to the request names to select one or
more access requests that you want to process.

5. Manage the received requests.

• Select Grant access to approve access to the requested API.

• Select Reject request to deny access to the requested API.

Result

A confirmation notification appears, indicating that the API request
access flow process was initiated or completed successfully.

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

## Manage requests sent for API access in API Insights

Manage your sent access requests by either sending a reminder or
withdrawing the request in API Insights.

Before you begin

Role required: sn_api_insights_ws.api_mgmt_architect

Procedure

1. Navigate to Workspaces > API Insights.

2. In the Your access requests section on the Overview tab, select the
displayed numeric value.

3. In the Requests sent tab, view a list of access requests you have sent.

4. Select the check boxes next to the request names to select one or
more sent requests that you want to process.

5. Manage the sent requests.

Decision
Action

Send a reminder.
Select Send reminder.

A confirmation message
appears indicating that the
reminder has been sent.

Withdraw a request.
Select Withdraw request.

A confirmation message
appears indicating that the
request has been successfully
withdrawn.

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

## Optimizing API organization with clustering
## recommendations in API Insights

Use clustering recommendations to organize and group related
API components, improving the efficiency and accuracy of API
management.

The API clustering recommendations feature analyzes unlinked API
components and proposes clusters likely belonging to the same API.
Each recommendation includes a cluster concept, size, and quality
score. By accepting a recommendation, you can link the components to
an existing API or create another API record, improving data organization
and management.

As a CMDB administrator, you can:

• View API clustering recommendations.

• Accept clustering recommendations.

## Viewing API clustering recommendations in API Insights

Use machine learning-based suggestions to group related API
components, improving the organization and mapping of APIs within the
system.

The Proposed API clustering tab of the Data recommendations page
in the API Insights workspace provides machine learning-generated
recommendations for API clustering.

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

Proposed API clustering tab

Accessing the Proposed API clustering tab

To access the Proposed API clustering tab, navigate to Workspaces >
API Insights. On the Overview tab, select the count metric in the API
clustering recommendations section. The Proposed API clustering tab is
displayed on the Data recommendations page.

You need the following roles to access the API clustering
recommendations section: sn_cmdb_admin, ml_report_user, and
platform_ml_read.

Viewing data

By default, the page displays the following data:

Cluster Concept

Displays the API components that the machine learning model has
grouped together based on similarities. These concepts represent the
core idea or functionality that defines each cluster.

Cluster size

Indicates the total number of components within the cluster. A larger
size suggests that many components are related and grouped together
under the same API concept.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

76

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 76, 2220x1110px]*

```
###########################################################%
-....:::::::...............................................:
: .                                                        .
:.:::.:::::::::::::..:                                     .
: .. .     ..  .   .... .......... ..                      .
:                                                          .
:  ......                                                  .
:  ..........                                              .
:  ............. ...                                       .
:                                              .           .
:                                          .   .   .       .
:                                              .   .       .
:   .                                                      .
:                                                          .
:                                          .   .....       .
```

---
*Page 77*

Cluster Quality

Reflects the confidence or strength of the relationship between
components in the cluster, measured on a scale from 0 to 100. A higher
quality value implies stronger relationships among the API components
within the cluster.

Updated

Displays the most recent timestamp when the cluster was
updated, enabling tracking the recency of the machine learning
recommendations and any changes to the clusters.

## Accept clustering recommendation in API Insights

Associate API components with an API record by accepting clustering
recommendation in the API Insights workspace.

Before you begin

Role required: sn_cmdb_admin, ml_report_user, and platform_ml_read

Procedure

1. Navigate to Workspaces > API Insights.

2. On the Overview tab, select the count metric displayed in the API
clustering recommendations section.

3. On the Proposed API clustering tab, review the list of
recommendations.

4. From the Cluster Concept column, select a cluster concept link.

5. On the Missing API page, review the list of API components that have
not yet been associated with an API record.

6. Select the check boxes next to the API components to associate with
an API record.

Note:   You can select one or multiple components depending
on your requirement.

7. Select Accept.

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

8. Select an API record.

Option
Description

Existing API record
Select this option if the API
record already exists. Use the
search field to find the API
record by name.

Create API record
Select this option to create an
API record. Enter the required
details such as the name,
version, and base URL. The API
will be created through the
Identification and Reconciliation
engine (IRE) using the provided
details.

9. Select Submit.

Result

The Missing API list is refreshed with the linked components removed from
the list and associated with the specified API record.

## Managing API data connections added for Service
## Graph Connectors in API Insights

You can view the status of your API data connections, including success
rates, processing status, and ongoing executions, and monitor the
progress of connections added using Service Graph Connectors in API
Insights.

• View the status of API data connections in API Insights.

• Monitor configuration progress of connections in API Insights.

## View the status of API data connections in API Insights

View the status of your API data connections using Service Graph
Connectors, including success rates, processing status, and ongoing
executions.

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

Before you begin

Role required: sn_cmdb_admin and cmdb_inst_admin

Procedure

1. Navigate to Workspaces > API Insights.

2. In the Connections overview section of the Overview tab, access the
various cards to gain insights on the performance of Service Graph
Connectors.

Connections overview

Card
Description

Connections status

Percentage of connections
tested successfully based on
connection status, with the
count of success, error, and
unknown statuses.

Processing status

Percentage of connections for
which all data import runs in
the last import execution were
successful, with the count of
success and error statuses.

Ongoing executions

Number of connections where
data import execution is
currently in progress.

3. From the Connection column, select a connection.

4. On the connection record page, select a tab to view more
information about the selected connection.

Connection record details

Tab
Description

Details
Connection information, such
as the connection name and

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

Tab
Description

credentials associated with the
connection.

Connection properties
Properties configured for the
connection.

Data sources

Data sources associated with
the connection, specifying what
data is being retrieved or
synchronized.

Import schedules

Scheduled imports for the
connection, including parent
schedule, data source, timing
and frequency of data retrieval.

Errors
Error related to the connection.

## Monitor configuration progress of connections in API
## Insights

Check progress status of API data connections in API Insights.

Before you begin

Role required: sn_cmdb_admin and cmdb_inst_admin

About this task

Service Graph Connectors are integrations that facilitate API data
ingestion into the Configuration Management Database (CMDB) from
various third-party sources. To learn more, see Getting started with
Service Graph Connectors.

Procedure

1. Navigate to Workspaces > API Insights.

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

2. On the Connection status section of the Overview tab, monitor the
progress of connections configured for Service Graph Connectors
that import API data.

3. To view the number of installed connections, select the count metric
from Active connections.

4. Review the list of installed and draft connections in their respective
tabs.
See Viewing API data connections for a Service Graph Connector
within API Insights.

5. (Optional) Select Create connection to create a connection for
importing API data.
See Create an API data connection for a Service Graph Connector
within API Insights.

6. (Optional) Select Explore connectors to explore available options for
onboarding and maintaining Service Graph Connectors that import
API data within API Insights.
See Exploring Service Graph Connectors for API data within API
Insights.

## Viewing API data connections for a Service Graph
## Connector within API Insights

You can view installed and draft API data connections that were added
using Service Graph Connectors within API Insights.

The following connection types are available for viewing:

• Installed connection (see View an installed connection within API
Insights.)

• Draft connection (see View a draft connection within API Insights.)

View an installed connection within API Insights

View the details of an installed connection that was added using a
Service Graph Connector within SGC Central.

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

Before you begin

Role required: sn_cmdb_admin and cmdb_inst_admin

Procedure

1. Navigate to Workspaces > API Insights.

2. Select the Connections tab.

3. On the API connections page, select All connections.

4. Select the Installed tab.

5. Review the list of installed API data connections.

6. Select a connection from the Connection column to view the details,
data sources, import schedules, and errors associated with the
connection.

View a draft connection within API Insights

View the details and resume setting up draft connections.

Before you begin

Role required: sn_cmdb_admin and cmdb_inst_admin

Procedure

1. Navigate to Workspaces > API Insights.

2. Select the Connections tab.

3. On the API connections page, select All connections.

4. Select the Drafts tab.

5. Review the list of draft connections.

6. Complete setting up the draft connections.

• Select Configure to continue where a Service Graph Connector
was last configured within SGC Central.

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

• Select Resume setup to set up a single instance connector for the
first time.

## Create an API data connection for a Service Graph
## Connector within API Insights

Create an API data connection added for a Service Graph Connector
within API Insights.

Before you begin

Role required: sn_cmdb_admin and cmdb_inst_admin

Procedure

1. Navigate to Workspaces > API Insights.

2. Select the Connections tab.

3. On the API connections page, select Create connection.

4. On the Create connection window, select a connector type for
importing API data and then follow the playbook instructions to
create a connection.

## Exploring Service Graph Connectors for API data within
## API Insights

You can explore available options for onboarding and maintaining API
data using Service Graph Connectors within API Insights.

Service Graph Connectors are integrations that facilitate data ingestion
into the Configuration Management Database (CMDB) from various
third-party sources. To learn more, see Getting started with Service Graph
Connectors and API Service Graph Connectors.

Options for maintaining Service Graph Connectors for importing API data
within API Insights include:

• Update an installed Service Graph Connector in API Insights.

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

• Install a Service Graph Connector with an available entitlement in API
Insights.

• Install a Service Graph Connector from ServiceNow Store within API
Insights.

Update an installed Service Graph Connector in API Insights

Keep a Service Graph Connector for importing API data up-to-date
within API Insights.

Before you begin

Role required: sn_cmdb_admin and cmdb_inst_admin

Procedure

1. Navigate to Workspaces > API Insights.

2. Select the Connections tab.

3. On the API connections page, select Explore connectors.

4. In the Updates available section, review the updates that are
available for a Service Graph Connector.

5. Update the connector.

• Select a connector to access the connector in Application
Manager and then install any updates.

• Select Install updates to open Application Manager, and then
view and install updates for a connector from the Updates tab.
For more information, see Application Manager.

Install a Service Graph Connector with an available entitlement in
API Insights

Install a Service Graph Connector for importing API data that matches an
entitlement available in Application Manager from within API Insights.

Before you begin

Role required: sn_cmdb_admin and cmdb_inst_admin

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

Procedure

1. Navigate to Workspaces > API Insights.

2. Select the Connections tab.

3. On the API connections page, select Explore connectors.

4. In the Entitlements available section, select Explore in Application
Manager.

5. In Application Manager, review the entitlements and install a
connector for API data.
For more information, see Application Manager.

Install a Service Graph Connector from ServiceNow Store within
API Insights

Explore ServiceNow Store to request and use a Service Graph Connector
with no available entitlements for importing API data from within API
Insights.

Before you begin

Role required: sn_cmdb_admin and cmdb_inst_admin

Procedure

1. Navigate to Workspaces > API Insights.

2. Select the Connections tab.

3. On the API connections page, select Explore connectors.

4. In the Available from ServiceNow Store section, select Explore in
ServiceNow Store.

5. On ServiceNow Store, review the list of Service Graph Connectors for
importing API data and install a connector.
For more information, see the ServiceNow Store website.

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

## API Insights reference

Reference topics provide additional information about API Insights
components, API Insights properties, and domain separation.

• Components installed with API Insights

Several types of components are installed with activation of the API
Insights plugin, including tables, user roles, and scheduled jobs.

• API Insights properties

API Insights properties control the behavior of the application.

• Domain separation and API Insights

Domain separation is unsupported for API Insights. Domain separation
enables you to separate data, processes, and administrative tasks into
logical groupings called domains. You can control several aspects of
this separation, including which users can see and access data.

## Components installed with API Insights

Several types of components are installed with activation of the API
Insights plugin, including tables, user roles, and scheduled jobs.

Roles installed

Role title [name]
Description
Contains roles

Enterprise architect
administrator

[sn_api_insights_ws.api
_mgmt_architect_adm
in]

Accesses the API
Insights workspace
to search APIs,
review data model
recommendations,
monitors API
connections, evaluate
metrics on API usage,
and set parameters
for data model
recommendations

sn_api_insights_ws.api_
mgmt_architect

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

Role title [name]
Description
Contains roles

and de-duplication
tasks.

Enterprise architect

[sn_api_insights_ws.api
_mgmt_architect]

Accesses the API
Insights workspace
to search APIs,
monitor team APIs,
view managed and
subscribed APIs, track
API activity, review API
access requests, and
manage API life cycle
aspects, including
APIs without business
context, ownership,
product models, or
designs.

• task_editor

• sn_incident_read

•

sn_vul.vulnerability_r
ead

• sn_cmdb_editor

•

sn_msi.msi_incident_r
ead

Scheduled jobs installed

Scheduled job
Description

Gather APIs without Business App
relationship

Identifies and collects APIs that do
not have an associated business
context also called as business
application.

Import ServiceNow API to API
Insights

Retrieves ServiceNow APIs from the
ServiceNow registry and imports
them into API Insights.

Import ServiceNow API usage to
MetricBase

Collects ServiceNow API usage
data and pushes it to the
MetricBase application.

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

Scheduled job
Description

SyncOwnershipGroupsOfAPIVersio
ns

Synchronizes ownership groups for
API versions in API Insights.

API Specification Validation
Performs automated validation of
API specifications in an instance.

Tag based relationship mapping

Applies tag-based mapping rules
between APIs and application
services or business applications.

Tables installed

Table
Description

APIs missing relationships

[sn_api_insights_ws_apis_missing_rel
ationships]

API records that lack a defined
relationship.

API Specification

[sn_api_insights_ws_api_specificati
on]

API specification details, such as
OpenAPI definitions.

Importable ServiceNow APIs

[sn_api_insights_ws_importable_ser
vicenow_api]

Details of APIs imported from
ServiceNow.

Open API Specifications
OpenAPI specification records for
API Insights.

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

Table
Description

[sn_api_insights_ws_openapi_speci
fications]

Push API Specification

[sn_api_insights_ws_push_api_spec
]

Records for pushing API
specifications.

API Requests Access Task

[sn_api_insights_ws_request_access
_task]

Tasks related to API access
requests.

Specification Validation Rule

[sn_api_insights_ws_spec_validatio
n_rule]

Validation rules that validate
API specifications based on the
configured rules.

API Metric Configuration

[sn_api_insights_ws_api_metric_co
nfig]

Configuration that maps each
discovery source to the MetricBase
application used for analytics,
defining the metric name, whether
it applies at API or component
level, and the metric type (usage,
error rate, latency, cache hit).

Tag Based Relationship Mapping

[sn_api_insights_ws_tag_relationshi
p_mapping]

Relationship rules that apply tag-
based mapping between APIs and
application services or business
applications, defining the CI types

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

Table
Description

involved, the relationship type,
and which CI acts as the parent.

Plugins installed

Plugin
Description

MetricBase (com.snc.clotho)
Collects, retains, analyzes, graphs,
and acts on time-series data.

ServiceNow Store applications installed

Application
Description

@devsnc/sn-list-selector (sn_list-
selector)

Enables selecting a set of values
from a simple or multi-dimensional
data source.

CMDB CI Class Models
(sn_cmdb_ci_class)

Provides the single source for all
new base-system CMDB CI class
models defined by ServiceNow.

CMDB Workspace (sn_cmdb_ws)

Enables a workspace for working
with the CMDB to search and
explore the CMDB, understand
its health, work on related tasks,
view activity, performance and
feature usage, and access various
management tools to support tasks
in an organization.

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

Application
Description

Node map Experience
Component (sn_node_map)

Enables mapping and visualizing
connections between concepts.

SGC Central (sn_sgc_central)

Enables discovering, installing,
and monitoring Service Graph
Connectors.

Timeline component
(sn_ui_timeline)

Shows events and information
across a timeline to contextualize
history or important information for
an object.

UX Commons
(sn_app_ux_commons)

Enhances component experience
with common UI Builder utilities,
controllers, and bundles.

## API Insights properties

API Insights properties control the behavior of the application.

System properties

These system properties are available for API Insights.

Note:   To open the System Properties [sys_properties] table, enter
sys_properties.list in the navigation filter.

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

System properties for API Insights

Property
Description

sn_api_insights_ws.import_outboun
d_rest_api

Set the property to enable or
disable the import of outbound
REpresentational State Transfer
(REST) APIs from your ServiceNow
instance to the API Insights
workspace.

• Type: string

• Default value:
{"custom_api":false,"servi
cenow_api":false}

• Location: System Property
[sys_properties] table

sn_api_insights_ws.import_outboun
d_soap_api

Set the property to enable
or disable the import of
outbound Simple Object Access
Protocol Application Programming
Interface (SOAP) APIs from your
ServiceNow instance to the API
Insights workspace.

• Type: string

• Default value:
{"custom_api":false,"servi
cenow_api":false}

• Location: System Property
[sys_properties] table

sn_api_insights_ws.import_scripted_
rest_api

Set the property to enable or
disable the import of scripted
REST APIs from your ServiceNow
instance to the API Insights

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

Property
Description

workspace, and set the timeframe
for recent activity.

• Type: string

• Default value:
{"custom_api":false,"servi
cenow_api":true,"active_in
_last":false,"active_in_la
st_number_of_days":90}

• Location: System Property
[sys_properties] table

sn_api_insights_ws.import_scripted_
soap_api

Set the property to enable or
disable the import of scripted
SOAP APIs from your ServiceNow
instance to the API Insights
workspace, and set the timeframe
for recent activity.

• Type: string

• Default value:
{"custom_api":false,"servi
cenow_api":false,"active_i
n_last":false,"active_in_l
ast_number_of_days":90}

• Location: System Property
[sys_properties] table

sn_api_insights_ws.ml_min_cluster_
quality

Enter the minimum cluster quality
to display in machine learning
recommendations, ranging from 0
to 100.

• Type: integer

• Default value: 80

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

Property
Description

• Location: System Property
[sys_properties] table

sn_api_insights_ws.search_api_limit

Enter the desired limit on results for
API and API component searches.

• Type: integer

• Default value: 1000

• Location: System Property
[sys_properties] table

sn_api_insights_ws.settings_api_to_
business_app_service

Set the property to the relationship
model between APIs and business
context.

• Type: choice list

• Default value: CSDM

• Location: System Property
[sys_properties] table

sn_api_insights_ws.settings_grant_a
ccess_workflow

Set the property to the sys ID of the
workflow to be executed when an
access request is submitted in API
Insights.

• Type: string

• Default value: API Grant/
Reject Access Template

• Location: System Property
[sys_properties] table

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

Property
Description

sn_api_insights_ws.settings_preferre
d_tool

Set the preferred tool for the
creation of new APIs in API Insights.

• Type: choice list

• Default value: Authoring tool

• Location: System Property
[sys_properties] table

sn_api_insights_ws.settings_preferre
d_tool_url

Set the URL for the preferred API
authoring tool inAPI Insights. This
property value is used when the
settings_preferred_tool property is
set to API Authoring Tool.

• Type: string

• Default value: http://
www.postman.com

• Location: System Property
[sys_properties] table

sn_api_insights_ws.settings_support
_group_column

Set the column on the
Configuration item [cmdb_ci]
table that will represent the
support group in the API Insights
dashboards.

• Type: choice list

• Default value:
managed_by_group

• Location: System Property
[sys_properties] table

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

Property
Description

sn_api_insights_ws.show_ml_clusteri
ng_recs

Set the property to false
to disable the clustering
recommendations for orphan API
components.

• Type: true | false

• Default value: true

• Location: System Property
[sys_properties] table

sn_api_insights_ws.show_overview_
metrics_widgets

Set the property to true to enable
showing the Metric Base widgets
on the API and API Component
Overview pages.

• Type: true | false

• Default value: false

• Location: System Property
[sys_properties] table

## Domain separation and API Insights

Domain separation is unsupported for API Insights. Domain separation
enables you to separate data, processes, and administrative tasks into
logical groupings called domains. You can control several aspects of this
separation, including which users can see and access data.

Support level: No support

• The domain field may exist on data tables but there is no business logic
to manage the data.

• This level is not considered domain-separated.

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

For more information on support levels, see Application support for
domain separation.

Related topics

• Domain separation for service providers

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

97

Zurich ServiceNow AI Platform Capabilities

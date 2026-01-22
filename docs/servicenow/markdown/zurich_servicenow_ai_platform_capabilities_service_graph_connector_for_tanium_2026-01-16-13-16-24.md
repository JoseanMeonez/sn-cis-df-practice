# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_tanium_2026-01-16-13-16-24

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_tanium_2026-01-16-13-16-24.pdf*

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

## Service Graph Connector for Tanium

Use the Service Graph Connector for Tanium to bring in hardware,
software, and software usage data from a Tanium environment into your
ServiceNow instance.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported versions

Versions

Tanium
ServiceNow

• Tanium 1.9 or later versions for
hardware and software

• Tanium 1.17 or later versions for
software usage

• Washington DC

• Xanadu

• Yokohama

Important information for upgrading Service Graph Connector for
Tanium

Tanium Platform 7.6.2 or later versions support token-based authorization
only. After you have installed the latest version of the Service Graph
Connector for Tanium, verify the following configurations to use Tanium
Platform 7.6.2 or later versions in your on-premise setups:

• For a single instance, reconfigure the authentication type of an existing
connection to use token-based authorization.

• For multiple instances, deactivate the existing scheduled jobs for
previously configured instances that used basic authorization, and then
create and configure new instances to use token-based authorization.

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

Configuring a connection for the connector

You can configure a connection for the connector by using the
SGC Central view in the CMDB Workspace. The view enables you to
discover and install connectors, and then effectively manage the full life
cycle of creating, editing, monitoring, and debugging connections. To
configure the connector using SGC Central, see Configure Service Graph
Connector for Tanium using SGC Central.

Important:   Unless there are configuration issues, use the SGC
Central view in the CMDB Workspace to configure the connection
for the connector, as the guided setup method is being deprecated.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration,
or a specific integration run. For more details about monitoring Tanium
integrations in the CMDB Integrations Dashboard, see Using the CMDB
Integrations Dashboard.

Data mapping

Data from the Tanium data sources is mapped and transformed into
the ServiceNow CMDB Configuration Item (CI) class definitions using the
Robust Transform Engine (RTE). Data is inserted into the ServiceNow CMDB
using the Identification and Reconciliation Engine (IRE).

The following table describes the data sources, the staging tables, and
the target tables including CMDB CI and non-CMDB CI classes for the
Tanium application.

Data mapping for Tanium

Data source
Staging table
Target tables
Resource types

SG-Tanium
Applications

SG-Tanium
Applications
[sn_tanium_inte
g_sg_tanium_ap
plications]

Application

Running Process

Applications

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

Data source
Staging table
Target tables
Resource types

TCP

SG-Tanium
Hardware and
Software

SG Tanium
Import
[sn_tanium_inte
g_sg_tanium_im
port]

Computer

File System

Disk

IP Address

When the
Software Asset
Management
(SAM)
application isn't
installed:

Software

Software
Instance

When the SAM
application is
installed:

Software
Installation

Server and
software

SG-Tanium
Usage

SG Tanium
Usage Import
[sn_tanium_inte
g_sg_tanium_us
age_import]

Software Usage
[samp_sw_usag
e]

None

SG-Tanium
Remove
Software

Integration
Commons
Remove Record
[sn_cmdb_int_uti

None
None

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

Data source
Staging table
Target tables
Resource types

l_remove_recor
d]

Note:

• The SG-Tanium Usage data source is available only when the
Software Asset Management Professional plugin (com.snc.samp)
plugin is activated on your ServiceNow instance. See Request
Software Asset Management.

• The SG-Tanium Remove Software data source creates import sets
and uses the transform map-based method for removing any
target records for software data that weren't updated in the last
delta query check. See Managing CMDB data deletion.

• Starting with the Service Graph Connector for Tanium 1.8.0
release, a buffer time is added for software removal when
the buffer_days_from_last_scan_for_hardware system property is
enabled. When this system property is enabled, the software
removal candidate is removed only if the last scan time
of the hardware on which the software removal candidate
is installed is earlier than the last success import time +
buffer time. To enable this property, set the value of the
buffer_days_from_last_scan_for_hardware system property to a
non-zero numeral value according to the number of days of buffer
that you require. To disable this property, set the value to 0.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

Additional resource

How do I configure the Tanium Service Graph Connector? article on the
ServiceNow Community site

Related concepts

• Service Graph Connectors

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

## Configure Service Graph Connector for Tanium using
## SGC Central

Set up scheduled import jobs to pull in Tanium data into your
Configuration Management Database (CMDB).

Before you begin

Install Service Graph Connector for Tanium version 1.7.0 or later from the
ServiceNow Store. For ServiceNow Store installation steps, see Install a
ServiceNow Store application.
Role required: SGC-Admin (sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to run background scripts and
to provide table-level access to the SGC-Admin user.

About this task

The playbook experience for onboarding connectors is activated with
SGC Central in the CMDB Workspace. To configure the SGC Central
application, see Configuring SGC Central and for more information on
how to interact with a playbook, see Interact with Playbook.

Procedure

1. Navigate to Workspaces > CMDB Workspace.

2. In the CMDB Workspace, select SGC Central.

3. On the Overview page, select Create connection.

Tip:   Alternatively, you can select Create connection on the All
connections page.

4. On the Create connection window, select the Tanium connector
type, and then select Create connection.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

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

Note:   This step is required only during the first-time setup. See
Perform initial setup tasks when creating a connection in SGC
Central.

6. Complete the prerequisites for setting up the Tanium environment.

a. Create a custom view on your Tanium instance.

a. In the Prerequisites stage of the playbook, select the Create
custom view activity.

b. Create a custom view on your Tanium instance to be used in
the Select view activity later by referring to the Tanium Asset
User Guide for Cloud.

Note:   Copy the unmodifiable ServiceNow (reserved)
view from the Tanium instance to create the custom
view.

c. After creating a view, select the I have created a custom
view for this connection according to the instructions check
box.

d. After completing the Select view activity, select Continue.

7. Determine the type of authentication for the Tanium connection.

a. In the Setup stage of the playbook, select the Select alias
template activity.
If needed, expand the Setup stage to select an activity.

b. Select an alias template for the connection.

• Basic authentication: Select when using Basic authentication
that grants access to the Tanium data.

• Token-based authentication: Select when using an
authentication token for the Tanium API to grants access to
the Tanium data.

c. Select Continue.

8. Enter connection details and test the API connection for importing
Tanium data.

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

a. In the Setup stage of the playbook, select the Configure and test
connection activity.

b. On the form, fill in the fields.

Create and test connection form

Field
Description

Connection name
Name to identify the Tanium
connection record.

Host name
Base URL or IP address of the
Tanium server.

Username

Tanium account user name
that is used to authenticate
the connection request.

This field appears only when
the Basic authentication alias
template was selected in the
Select alias template activity.

Password

Password associated with
the user name required for
authenticating requests.

This field appears only when
the Basic authentication alias
template was selected in the
Select alias template activity.

Token

Authentication token for the
Tanium API that grants access
to the Tanium data.

This field appears only
when the Token-based
authentication alias template

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

Field
Description

was selected in the Select
alias template activity.

Use MID Server

Option to use a MID Server.

Note:   Use of a MID Server
is optional.

MID selection

Name of the MID Server used
by the connector.

This field appears only when
the Use MID Server check box
is selected.

c. Select Update and test connection.

d. Once the connection test is complete, select Continue.

9. Select the view created on your Tanium instance.

a. In the Setup stage of the playbook, select the Select view
activity.

b. In the View field, select the custom view you created on the
Tanium instance in the Prerequisites activity.

c. Select Continue.

10. Configure the import schedule to import data at regular intervals.

a. In the Setup stage of the playbook, select the Configure import
schedule activity.

b. Expand the Parent scheduled data import within the Import
schedules list to select the Connection name - SG-Tanium Usage
import schedule.

c. In the Configure import schedule dialog box, select the Active
check box, and then fill in the run schedule and time details.

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

For more information, see Schedule a data import.

d. Select Save.
Alternatively, select Execute Now to execute the import schedule
immediately.

e. Repeat steps 10.b to 10.d for the Connection name - SG-Tanium
Hardware and Software parent import schedule.

f. Select Continue.

11. In the Setup stage of the playbook, select the Confirm connection
creation activity to verify whether the connection was created.

What to do next

Select View all connections to review the connection details. The
configured connection appears in the Installed connections list.

Related concepts

• Service Graph Connector for Tanium

• Accessing the connection details of Service Graph Connector for
Tanium

Related reference

• CMDB classes targeted in Service Graph Connector for Tanium

## Configure Service Graph Connector for Tanium using
## the guided setup

Set up scheduled import jobs to pull in data from Tanium into your
Configuration Management Database (CMDB).

Before you begin

Important:   Unless there are configuration issues, use the SGC
Central view in the CMDB Workspace to configure the connection
for the connector, as the guided setup method is being deprecated.

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

To use this Service Graph Connector, you need a subscription to
a Subscription Unit that is based in the IT Operations Management
(ITOM) Visibility application or in the ITOM Discovery application. As
defined in the section titled "Managed IT Resource Types" in ServiceNow
Subscription Unit Overview for your subscription, for managed IT resources
that are created or modified in the CMDB by this Service Graph
Connector, but that aren’t yet managed by ITOM Visibility or ITOM
Discovery, these resources will increase Subscription Unit consumption
from that application. Review your current Subscription Unit consumption
within ITOM Visibility or ITOM Discovery to ensure available capacity.

Dependencies and requirements:

• The Integration Commons for CMDB store app, which is automatically
installed.

• The CMDB CI class models store app, which is automatically installed.
See CMDB CI Class Models.

• The Datastream Action plugin
(com.glide.hub.action_type.datastream), which is automatically
installed.

Note:   If you have an earlier version of the Service Graph Connector
for Tanium, then do not migrate data from the old connector. You
must uninstall the previous version and run the new integration.

Role required: SGC-Admin (sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to run background scripts and
to provide table-level access to the SGC-Admin user.

About this task

For more information on the Service Graph Connector for Tanium setup,
see How do I configure the Tanium Service Graph Connector? article on
the ServiceNow Community site.

Procedure

1. Ensure that the application scope is set to the Service Graph
Connector for Tanium application by using the application picker.
For more information, see Application picker.

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

2. Navigate to All > Service Graph Connectors > Tanium > Setup.

3. On the Getting started page, select Get Started.

4. Configure the authentication credentials and HTTP connection.

a. On the Service Graph Connector for Tanium page, in the
Configure the Connection and Credentials section, select Set
authentication type.

b. For the Set authentication type task, select Configure.

c. Specify the system property details for the authentication type.

a. In the Value field, enable either token-based authentication
or basic authentication.

• To enable the basic authorization, enter basic.

• To enable the token-based authorization, enter token.

Note:   Tanium Platform 7.6.2 supports only token-based
authorization for an on-premise setup. To use Tanium
Platform 7.6.2 or later versions, enable the token-based
authorization type and enter the details for the token-
based authorization in the next step.

b. Select Update.

c. Set the Set authentication type task to complete by selecting
Mark as Complete.

d. Configure the connection based on the authentication type.

a. For the basic authorization type:

a. For the Configure the Basic auth Credentials task, select
Configure.

Note:   The Configure the Basic auth Credentials task
appears only when you have specified basic as the
value in the step 4.c.i.

b. Select Edit for Basic authentication within the
sn_tanium_integ scope.

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

c. In the Connection Information section of the Edit
Connection window, fill in the fields.

Connection Information

Field
Description

Connection name

Name to identify the
Tanium connection record.

Token-based
authentication is the
default credential alias
name and is read-only.

Host name

Base URL or IP address of
the Tanium server.

Note:   This field is
automatically set to
the URL to connect to
the application. Leave
the field value as is.

d. (Optional) If a MID Server is required for the Tanium server
connection, select the Use MID Server check box. Then,
select the MID Server-related fields accordingly.

e. In the Credential Information section, enter the Tanium
account user name in the Username field and the
password in the Password field.

f. Select Edit connection.

g. Return to the guided setup page.

h. Set the Configure the Basic auth Credentials task to
complete by selecting Mark as Complete.

b. For the token-based authorization type:

a. For the Configure the Token auth Credentials task, select
Configure.

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

Note:   The Configure the Token auth Credentials
task appears only when you have specified token
as the value in the step 4.c.i.

b. Select Edit for Token-based authentication within the
sn_tanium_integ scope.

c. In the Connection Information section of the Edit
Connection window, fill in the fields.

Connection Information

Field
Description

Connection name

Name to identify the
Tanium connection record.

Token-based
authentication is the
default credential alias
name and is read-only.

Host name

Tanium base URL or IP
address.

Note:   This field is
automatically set to
the URL to connect to
the application. Leave
the field value as is.

d. (Optional) If a MID Server is required for the Tanium server
connection, select the Use MID Server check box. Then,
select the MID Server-related fields accordingly.

e. In the Credential Information section of the Edit
Connection window, enter the authentication token for
the Tanium API in the Token field to grants access to
Tanium data.

f. Select Edit connection.

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

g. Return to the guided setup page.

h. Set the Configure the Token auth Credentials task to
complete by selecting Mark as Complete.

e. Test the connection.

a. For the Test connection task, select Configure.

b. Select the Test Connection related link to start the testing
process.

c. When the Status field is set to Success, return to the guided
setup page.

Note:   If any of the tests have errors, follow the
suggestions for remediation.

d. Set the Test the connection task to complete by selecting
Mark as Complete.

f. Create a custom view.

Note:   The integration depends on a custom view from
Tanium.

a. Configure the view on your Tanium instance.

a. On your Tanium instance, navigate to Modules > Asset.

b. Select Views.

c. If you have not done so already, create the ServiceNow
(reserved) view by selecting Create View > Create
ServiceNow view.

Note:   By default, the ServiceNow (reserved) view is
non-editable.

d. Create a copy of the view to edit it.

e. Edit the copy.

a. Add all fields from the SIU Product Usage bucket.

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

b. Add Asset to the Last Seen field.

c. Add Network Adapter to the Model field.

f. Save the view.

b. Select the view on your ServiceNow instance.

a. In the guided setup, for the Configure the View task,
select Configure.

b. In the ServiceNow instance, select the view you created
in step 4.f.i.

c. Select Set View.

d. Set the Configure the View task to complete by selecting
Mark as Complete.

g. In the ADM setup instruction section, ignore the instructions as
application dependency mapping is not supported currently.

5. Configure the Tanium scheduled jobs.

a. For the Configure the Scheduled Import task, select Configure.

b. Select the scheduled job that you want to activate.

c. On the Scheduled Data Import form, verify the field values for a
scheduled job and select the Active check box to activate the
scheduled job.

Note:   When using a token-based authentication, the user
you specify in the Run as field for a scheduled job must have
the connection_admin role.

For more information, see Schedule a data import.

d. Select Update.

e. Repeat the steps 5.b to 5.d for each scheduled job for data
import.

f. Set the Configure the Scheduled Import task to complete by
selecting Mark as Complete.

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

6. (Optional) Add multiple instances.

Note:   If you don't need to add multiple instances, you can skip
this step.

a. On the Service Graph Connector for Tanium page, in the Add
Multiple Icons section, select the Update Data Source Access
task.

b. On the next page, in the Update Data Source Access section,
select Configure.

c. Select the Data Source [sys_data_source] table.

d. Select the Global application scope by using the application
picker.

e. In the Application Access related list, select the Can create, Can
update, and Can delete check boxes, if not already selected.

f. Select Update to close the tab and return to the guided setup.

g. Modify the application scope again to Service Graph Connector
for Tanium by using the application picker.

h. Set the Update Data Source Access task to complete by
selecting Mark as Complete.

i. Repeat the steps 6.d to 6.g for the Update Scheduled
data import access task with the Scheduled data import
[scheduled_data_set] table and set the task to complete by
selecting Mark as Complete.

a. Clear the cache for the new connection.

a. For the Clear Cache for Datasource and Import set task,
select Configure.

b. In the Run script text box of the background script page,
enter the following script:

GlideTableManager.invalidateTable("sys_data_sour
ce");
GlideCacheManager.flushTable("sys_data_sou
rce");

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

GlideTableManager.invalidateTable("schedul
ed_import_set");
GlideCacheManager.flushTable("scheduled_im
port_set");

GlideTableManager.invalidateTable("sys_db_
object");
GlideCacheManager.flushTable("sys_db_object
");

c. Select Run Script to run the background script in the global
scope.

The script may take several minutes to execute.

d. After the script is executed, select Close.

e. From the application picker, select the Service Graph
Connector for Tanium application.

f. Set the Clear Cache for Datasource and Import set task to
complete by selecting Mark as complete.

b. Add a basic authorization connection to another Tanium
instance.

Note:   Tanium Platform 7.6.2 supports only token-based
authorization for an on-premise setup. To use Tanium
Platform 7.6.2 or later versions, use the token-based
authorization.

a. For the Add Another Basic Auth Connection task, select
Configure.

b. To create a new connection, select Add Connection.

c. Enter the connection details on the Create Connection form.

d. Select Create Connection.

e. Navigate back to the guided setup and set the Add Another
Basic Auth Connection task to complete by selecting Mark
as Complete.

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

c. Add a token-based authorization connection to another Tanium
instance.

a. For the Add Another Token Auth Connection task, select
Configure.

b. To create a new connection, select Add Connection.

c. Enter the connection details on the Create Connection form.

d. Select Create Connection.

e. Navigate back to the guided setup and set the Add Another
Token Auth Connection task to complete by selecting Mark
as Complete.

d. Set configuration properties for newly added connections.

a. For the Set configuration properties task, select Configure.

b. From the Name column, select the new connection.

c. In the Service Graph Connection Properties related list,
review and modify the following properties.

Field
Value

max_retry_count

Determines the number of
retry attempts triggered for a
Tanium Asset REST action in
case of failure.

pagination_record_count

Specifies the page size for
each API call made during
a Tanium Application Data
REST action.

rest_action_limit

Specifies the page size for
each API call made during a
Tanium Asset REST action.

view_id

Specifies the identifier used
to fetch hardware and
software data from a
specific Tanium view. To

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
Value

modify the view identifier,
access the SG Tanium
Connection
[sn_tanium_integ_connectio
n] table.

d. Return to the guided setup page.

e. Set the Set configuration properties task to complete by
selecting Mark as Complete.

e. Test the newly added connections.

a. For the Test connections task, select Configure.

b. From the Name column, select the new connection.

c. Select the Test Connection related link to start the testing
process.

d. When the Status field is set to Success, return to the guided
setup page.

Note:   If any of the tests have errors, follow the
suggestions for remediation.

e. Set the Test connections task to complete by selecting Mark
as Complete.

f. Set the Tanium view for the connection.

a. For the Set view task, select Configure.

b. In the Connection and Credentials Alias field, search for and
select the alias created earlier in the Add Another Basic Auth
Connection or Add Another Token Auth Connection task.

c. In the View field, search for and select the corresponding
Tanium view associated with the connection.

d. Select Set View.

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

e. Set the Set view task to complete by selecting Mark as
Complete.

g. Skip the ADM setup for multi instance task as ADM is not
supported currently.

h. Configure the Tanium scheduled job.

a. For the Configure the Scheduled Imports task, select
Configure.

b. Select the scheduled data import that you want to activate.

c. On the Scheduled Data Import form, verify the field values for
the scheduled job and select the Active check box.

Note:   When using a token-based authentication, the
user you specify in the Run as field for a scheduled job
must have the connection_admin role.

For more information, see Schedule a data import.

d. Select Update.

e. Repeat steps 6.h.ii to 6.h.iv for each scheduled job for data
import.

f. Set the Configure the Scheduled Imports task to complete by
selecting Mark as Complete.

7. (Optional) Use the advanced settings to manage excluding the serial
number population on the IBM AIX and Oracle Solaris operating
system (OS) platforms.

a. In the Advanced section of the guided setup, for the Advanced
Settings task, select Configure.

b. To exclude the serial number population, enter false in the
Exclude the serial number population field.

c. Select Save.

d. Close the window and set the Advanced Settings task to
complete by selecting Mark as Complete.

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

## CMDB classes targeted in Service Graph Connector for
## Tanium

When you complete setting up the connection, you can configure the
integration to periodically pull data from Tanium. The data is saved in
tables that extend from the Configuration item [cmdb_ci] table.

Application [cmdb_ci_appl]

The following attributes in the Application [cmdb_ci_appl] table are
populated by collected data:

Attribute label
Attribute name

Class
sys_class_name

Name
name

Running process command
running_process_command

Relationship created for Application

Parent class
Relationship type
Child class

Application
[cmdb_ci_appl]
Runs on::Runs
Computer[cmdb_ci_c
omputer]

Computer [cmdb_ci_computer]

The following attributes in the Computer [cmdb_ci_computer] table are
populated by collected data:

Attribute label
Attribute name

Name
name

Serial number
serial_number

Class
sys_class_name

CPU core count
cpu_core_count

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

Attribute label
Attribute name

CPU count
cpu_count

CPU speed (MHz)
cpu_speed

CPU type
cpu_type

DNS Domain
dns_domain

IP Address
ip_address

CPU manufacturer
cpu_manufacturer

CPU name
cpu_name

Is Virtual
virtual

Most recent discovery
last_discovered

Operating System
os

OS Domain
os_domain

OS Service Pack
os_service_pack

OS Version
os_version

RAM (MB)
ram

Model ID
model_id

Manufacturer
manufacturer

Relationships created for Computer

Parent class
Relationship type
Child class

Computer
[cmdb_ci_computer]
Owns::Owned by

Network Adapter
[cmdb_ci_network_ad
apter]

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

Parent class
Relationship type
Child class

Computer
[cmdb_ci_computer]
Owns::Owned by
IP Address
[cmdb_ci_ip_address]

Computer
[cmdb_ci_computer]

Contains::Contained
by
Disk [cmdb_ci_disk]

Computer
[cmdb_ci_computer]

Contains::Contained
by

File System
[cmdb_ci_file_system]

Computer
[cmdb_ci_computer]
Reference
Software Installation
[cmdb_sam_sw_install]

Computer
[cmdb_ci_computer]

Virtualized
by::Virtualizes

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Disk [cmdb_ci_disk]

The following attributes in the Disk [cmdb_ci_disk] table are populated by
collected data:

Attribute label
Attribute name

Manufacturer
manufacturer

Name
name

Computer
computer

Serial number
serial_number

Device interface
device_interface

Storage type
storage_type

Model ID
model_id

Device ID
device_id

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

Attribute label
Attribute name

Size bytes
size_bytes

Relationship created for Disk

Parent class
Relationship type
Child class

Disk [cmdb_ci_disk]
Reference
Computer
[cmdb_ci_computer]

File System [cmdb_ci_file_system]

The following attributes in the File System [cmdb_ci_file_system] table are
populated by collected data:

Attribute label
Attribute name

Name
name

File system
file_system

Free space bytes
free_space_bytes

Label
label

Media type
media_type

Mount point
mount_point

Size bytes
size_bytes

Computer
computer

Relationship created for File System

Parent class
Relationship type
Child class

File System
[cmdb_ci_file_system]
Reference
Computer
[cmdb_ci_computer]

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

IP Address [cmdb_ci_ip_address]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data:

Attribute label
Attribute name

Nic
nic

IP Address
ip_address

IP version
ip_version

Name
name

Relationship created for IP Address

Parent class
Relationship type
Child class

IP Address
[cmdb_ci_ip_address]
Reference

Network Adapter
[cmdb_ci_network_ad
apter]

Network Adapter [cmdb_ci_network_adapter]

The following attributes in the Network Adapter
[cmdb_ci_network_adapter] table are populated by collected data:

Attribute label
Attribute name

Discovery source
discovery_source

Netmask
netmask

Mac manufacturer
mac_manufacturer

MAC Address
mac_address

Name
name

Model ID
model_id

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

Attribute label
Attribute name

DHCP Enabled
dhcp_enabled

Relationship created for Network Adapter

Parent class
Relationship type
Child class

Network Adapter
[cmdb_ci_network_ad
apter]

Reference
Computer
[cmdb_ci_computer]

Serial Number [cmdb_serial_number]

The following attributes in the Serial Number [cmdb_serial_number] table
are populated by collected data:

Attribute label
Attribute name

Serial Number
serial_number

Serial Number Type
serial_number_type

Valid
valid

Relationship created for Serial Number

Parent class
Relationship type
Child class

Serial Number
[cmdb_serial_number]
Reference
Computer
[cmdb_ci_computer]

Software [cmdb_ci_spkg]

The following attributes in the Software [cmdb_ci_spkg] table are
populated by collected data when the Software Asset Management
(SAM) application isn't installed:

Attribute label
Attribute name

Version
version

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

Attribute label
Attribute name

Manufacturer
manufacturer

Key
key

Name
name

Relationship created for Software

Parent class
Relationship type
Child class

Software
[cmdb_ci_spkg]
Reference

Software Instance
[cmdb_software_insta
nce]

Software Installation [cmdb_sam_sw_install]

The following attributes in the Software Installation [cmdb_sam_sw_install]
table are populated by collected data when the SAM application is
installed:

Attribute label
Attribute name

Display name
display_name

Publisher
publisher

Version
version

Discovery source
discovery_source

Last scanned
last_scanned

Software Instance [cmdb_software_instance]

The following attributes in the Software Instance
[cmdb_software_instance] table are populated by collected data when
the SAM application isn't installed:

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

Attribute label
Attribute name

Name
name

Installed on
installed_on

Relationship created for Software Instance

Parent class
Relationship type
Child class

Software Instance
[cmdb_software_insta
nce]

Reference
Computer
[cmdb_ci_computer]

Virtual Machine Instance [cmdb_ci_vm_instance]

The following attribute in the Virtual Machine Instance
[cmdb_ci_vm_instance] table is populated by collected data:

Attribute label
Attribute name

Sys ID
sys_id

Note:   Service Graph Connector for Tanium doesn't create a Virtual
Machine Instance CI. During look-up in the Virtual Machine Instance
[cmdb_ci_vm_instance] table, if a VM instance is found that has an
object ID that matches the cloud instance ID of a server instance,
a relationship is created between that VM instance and the server
instance.

## Accessing the connection details of Service Graph
## Connector for Tanium

You can access the connection details of the Service Graph
Connector for Tanium in a single view using the common connection
framework (CCF) included within the Integration Commons for CMDB
(sn_cmdb_int_util) store app.

With the CCF, you can access all the connections used by the
Service Graph Connector for Tanium. The connection details include the

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

connection alias, connection properties, data sources, and scheduled
data imports associated with a connection. You can also test the
connection. For more information, see Accessing the connection details
of Service Graph Connectors.

Access the details of a Tanium connection

Access the details of a Tanium connection configured for the Service
Graph Connector for Tanium.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > Tanium > Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

3. On the Service Graph Connections page, view the connection
details such as the connection name, alias, and data sources.

4. Select a related list to view further details of the connection.

5. (Optional) Select the Test Connection related link to test the
connection.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

31

Zurich ServiceNow AI Platform Capabilities

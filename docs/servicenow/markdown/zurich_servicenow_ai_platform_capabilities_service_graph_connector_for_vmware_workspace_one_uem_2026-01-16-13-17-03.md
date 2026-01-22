# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_vmware_workspace_one_uem_2026-01-16-13-17-03

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_vmware_workspace_one_uem_2026-01-16-13-17-03.pdf*

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

## Service Graph Connector for VMware Workspace ONE
## UEM

Use the Service Graph Connector for VMware Workspace ONE UEM to
pull data from VMware Workspace ONE Unified Endpoint Management
(UEM) into your ServiceNow Instance.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

The integration imports different hardware assets into the ServiceNow®
Configuration Management Database (CMDB) application.

Supported versions

• Supported versions:

• VMware Workspace ONE UEM version 2008

• Application Discovery Manager (ADM) API version 2

• Supported ServiceNow versions:

• Xanadu

• Yokohama

• Zurich

Use cases

The following are examples on how you can use the Service Graph
Connector for different ServiceNow applications:

• IT Operations Management (ITOM) Visibility

• Detailed hardware and application inventory for Android, Apple, and
Windows mobile devices. The inventory can be used with or without
Software Asset Management (SAM).

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

• Compliance tracking for mobile devices. You can build your own
device (BYOD) or use corporate-owned devices.

• IT Service Management (ITSM)

• Incident, problem, change on discovered configuration items (CI).

• Ownership tracking and assignment for mobile devices.

Guided setup

The guided setup for the Service Graph Connector for VMware
Workspace ONE UEM provides an organized sequence of tasks to
configure the integration on your instance. To access the guided setup,
see Configure Service Graph Connector for VMware Workspace ONE
UEM.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard
with a central view of the status, processing results, and processing errors
of all installed integrations. You can see metrics for all integration runs.
You can filter the view to a specific CMDB integration, a specific time
duration, or a specific integration run. For more details about monitoring
Workspace ONE integrations in the CMDB Integrations Dashboard, see
Using the CMDB Integrations Dashboard.

Data mapping

Data from the VMware Workspace ONE UEM Devices and Apps
data sources is mapped and transformed into the ServiceNow CMDB
Configuration Item (CI) class definitions using the Robust Transform Engine
(RTE). Data is inserted into the ServiceNow CMDB using the Identification
and Reconciliation Engine (IRE).

When you complete setting up the connection, you configure the
integration to periodically pull data from VMware Workspace ONE UEM.

The data is loaded into the SG-Workspace ONE UEM Devices and Apps
staging [sn_vmwoneuem_integ_devices_and_apps] table.

The data is then inserted into the following target tables:

• Computer [cmdb_ci_computer]

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

• Handheld Computing Device [cmdb_ci_handheld_computing]

• Media Player [cmdb_ci_media_player]

• Network Adapter [cmdb_ci_network_adapter]

• Printer [cmdb_ci_printer]

• SAM Software Installation [cmdb_sam_sw_install], if com.snc.sams
plugin is installed.

• Serial Number [cmdb_serial_number]

• Software Instance [cmdb_software_instance], if com.snc.sams plugin is
not installed.

• Software Package [cmdb_ci_spkg], if com.snc.sams plugin is not
installed.

Note:   To view any additional information such as the device owner,
type of ownership, or compliance status, you need to switch to the
SG-Workspace ONE UEM view. This view displays a SG-Workspace
ONE UEM Device Related tab in the related list tabs with the
additional information.

For more information on where data is saved when pulling data
from VMware Workspace ONE Unified Endpoint Management (UEM),
see CMDB classes targeted in Service Graph Connector for VMware
Workspace ONE UEM.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

Related concepts

• Service Graph Connectors

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

## Configure Service Graph Connector for VMware
## Workspace ONE UEM

Use the Service Graph Connector for VMware Workspace ONE UEM to
pull mobile and computing devices data from VMware Workspace ONE
Unified Endpoint Management (UEM) into your ServiceNow instance.

Before you begin

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

• The ITOM Discovery License plugin (com.snc.itom.discovery.license).
You must activate this plugin.

• ITOM Licensing plugin (com.snc.itom.license). For more information, see

Request Discovery.

• The Datastream Action plugin
(com.glide.hub.action_type.datastream), which is automatically
installed.

Role required: SGC-Admin (sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to run background scripts and
to provide table-level access to the SGC-Admin user.

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

When using client credentials for authentication, obtain the OAuth
credentials from your VMware Workspace ONE UEM administrator. Make
a note of the following details:

• Application (client) ID

• Client Secret

• Token URL

For information about how to get OAuth credentials, see the VMware
documentation site.

About this task

To configure the Service Graph Connector for VMware Workspace ONE
UEM, you must configure either OAuth authentication credentials or basic
authentication credentials.

Procedure

1. Navigate to All > Service Graph Connectors > Workspace ONE UEM >
Setup.

2. On the Getting started page, select Get Started.

3. In the Configure the Connection and Credentials section of the
Service Graph Connector for VMware Workspace ONE UEM page,
select Get Started.

4. Configure authentication credentials for the connection.
You can configure either a basic authentication connection or an
OAuth connection.

a. For the Set authentication type task, select Configure.

• To enable basic authentication, set the value of the
auth_type connection property to basic.

• To enable OAuth authentication, set the value of the
auth_type connection property to oauth.

b. Select Update, and navigate back to the guided setup page.

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

c. Set the Set authentication type task to complete by selecting
Mark as Complete.

5. Configure the credentials for authentication.

• Configure a basic authentication connection.

a. • For the Configure the Basic Auth Credentials task, select
Configure.

b. • On the form, fill in the fields.

Field
Description

Name

Name of the authentication.

For example,
WorkspaceOneUEM Basic
Auth Credentials.

User name
Your VMware Workspace
ONE UEM user name.

Password
Your VMware Workspace
ONE UEM password.

c. • Select Update, and navigate back to the guided setup
page.

d. • Set the Configure the Basic Auth Credentials task to
complete by selecting Mark as Complete.

e. • For the Configure API key task, select Configure to configure
an API key for the basic authentication connection.

f. • In the API Key field, enter your VMware Workspace ONE UEM
API key or tenant code.

g. • Select Update, and navigate back to the guided setup
page.

h. • Set the Configure API key task to complete by selecting Mark
as Complete.

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

• Configure an OAuth connection.

a. • For the Configure the OAuth Credentials task, select
Configure.

b. • On the form, fill in the fields.

Field
Description

Name

Name of the authentication.

For example,
WorkspaceOneUEM OAuth
Provider.

Client ID

Application (client) ID of
your VMware Workspace
ONE UEM client application
as noted in the Before you
begin section.

Client Secret

Client secret of your VMware
Workspace ONE UEM client
application as noted in the
Before you begin section.

c. • Select Update, and navigate back to the guided setup
page.

d. • Set the Configure the OAuth Credentials task to complete by
selecting Mark as Complete.

6. Establish an HTTP connection to send requests to the VMware
Workspace ONE UEM API.

a. For the Configure HTTP connection task, select Configure.

b. On the HTTP(s) Connection form, specify the host name of your
VMware Workspace ONE UEM instance in the Host field.

Note:   The HTTP connection is pre-configured to use the
authentication credentials that were configured in steps 4
and 5.

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

c. Select Update.

d. Set the Configure HTTP Connection task to complete by selecting
Mark as Complete.

7. Test the connection.

a. For the Test the Connection task, select Configure.

b. Select the Test Connection related link to start the testing process.

c. When the Status field is set to Success, navigate back to the
guided setup page.
If any of the tests have errors, follow the suggestions for
remediation.

d. Set the Test the Connection task to complete by selecting Mark
as Complete.

8. Set up the scheduled import job.

a. For the Configure the scheduled job task, select Configure.
The SG-Workspace ONE UEM Devices and Apps scheduled job is
set to inactive by default.

b. Select the SG-Workspace ONE UEM Devices and Apps scheduled
job.

c. On the Scheduled Data Import form, verify the field values for the
scheduled job.
For more information, see Schedule a data import.

d. Select the Active check box to activate the SG-Workspace ONE
UEM Devices and Apps scheduled job.

e. In the Run field, select Periodically to specify how often the job
should run.

f. Select Update.
Alternatively, select Execute Now to execute the import schedule
immediately.

g. Set the Configure the scheduled job task to complete by
selecting Mark as Complete.

9. (Optional) Add multiple instances.

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

Note:   If you don't need to add multiple instances, you can skip
this step.

a. In the Add multiple instances section of the Service Graph
Connector for VMware Workspace ONE UEM page, select Get
Started.

b. For the Update scheduled data import access task, select
Configure.

c. Select the Scheduled data import [scheduled_import_set] table.

d. Select the Global application scope by using the application
picker.

e. In the Application Access related list, select the Can create, Can
update, and Can delete check boxes, if not already selected.

f. Select Update, and then navigate back to the guided setup.

g. Modify the application scope again to Service Graph Connector
for VMware Workspace ONE UEM by using the application picker.

h. Set the Update scheduled data import access task to complete
by selecting Mark as Complete.

i. For the Update Data Source Access task, select Configure.

j. Select the Data Source [sys_data_source] table.

k. Repeat steps 9.d to 9.g.

l. Set the Update Data Source Access task to complete by
selecting Mark as Complete.

m. Clear the cache for the new connection.

a. For the Clear cache for Data Source and Import Set tables
task, select Configure.

b. Select the Global application scope by using the application
picker.

c. In the Run script text box of the background script page,
enter the following script:

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

GlideTableManager.invalidateTable("sys_data_sour
ce");
GlideCacheManager.flushTable("sys_data_sou
rce");
GlideTableManager.invalidateTable("schedul
ed_import_set");
GlideCacheManager.flushTable("scheduled_im
port_set");
GlideTableManager.invalidateTable("sys_db_
object");
GlideCacheManager.flushTable("sys_db_object
");

d. Select Run Script to run the background script.

The script may take several minutes to execute.

e. After the script is executed, select Close.

f. Modify the application scope again to Service Graph
Connector for VMware Workspace ONE UEM by using the
application picker.

g. Set the Clear cache for Data Source and Import Set tables
task to complete by selecting Mark as complete.

n. Configure the connection for the VMware Workspace ONE UEM
instance.

You can configure either a basic authentication connection or
an OAuth connection.

• Configure a basic authentication connection.

a. • For the Add basic authentication connection task, select
Configure.

b. • To create a new connection, select Add Connection.

c. • In the Connection Information section of the Create
Connection window, fill in the fields.

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

Connection Information

Field
Description

Connection name

Name to identify the
VMware Workspace ONE
UEM connection record.

Connection URL

Connection URL of your
VMware Workspace ONE
UEM connection.

Use the format https://
host-name/API for the
connection URL.

d. • In the Credential Information section of the Create
Connection window, fill in the fields.

Credential Information

Field
Description

Username

VMware Workspace ONE
UEM account user
name that is used
to authenticate the
connection request.

Password

Password that is used
to authenticate the
connection request.

e. • Select Create Connection.

f. • Navigate back to the guided setup, and set the Add
basic authentication connection task to complete by
selecting Mark as Complete.

g. • For the Configure API key task, select Configure to
configure an API key for the basic authentication
connection.

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

h. • Select the API Key record that corresponds to the
connection alias for the new basic authentication
connection.

i. • Set the API key, and then select Update.

j. • Navigate back to the guided setup, and set the
Configure API key task to complete by selecting Mark as
Complete.

• Configure an OAuth connection.

a. • For the Add an OAuth connection task, select Configure.

b. • To create a new connection, select Add Connection.

c. • In the Connection Information section of the Create
Connection window, fill in the fields.

Connection Information

Field
Description

Connection Name

Name to identify the
VMware Workspace ONE
UEM connection record.

Connection URL

Connection URL of your
VMware Workspace ONE
UEM controller.

Use the format https://
host-name/API for the
connection URL.

d. • In the Credential Information section of the Create
Connection window, fill in the fields.

Credential Information

Field
Description

OAuth Client ID
Application (client) ID
of your VMware

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

Field
Description

Workspace ONE UEM
client application as noted
in the Before you begin
section.

OAuth Client Secret

Client secret of your
VMware Workspace ONE
UEM client application as
noted in the Before you
begin section.

For information about how to get OAuth credentials, see
the VMware documentation site.

e. • Select Create and Get OAuth Token.

f. • Navigate back to the guided setup, and set the Add an
OAuth connection task to complete by selecting Mark as
Complete.

o. Test the newly added connections.

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

p. Configure the scheduled job to import data from the VMware
Workspace ONE UEM application.

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

The SG-Workspace ONE UEM Devices and Apps scheduled job is
set to inactive by default.

a. For the Configure import schedule task, select Configure.

b. Select the SG-Workspace ONE UEM Devices and Apps
scheduled job.

c. On the Scheduled Data Import form, verify the field values for
the scheduled job.

For more information, see Schedule a data import.

d. Select the Active check box to activate the SG-Workspace
ONE UEM Devices and Apps scheduled job.

e. In the Run field, select Periodically to specify how often the
job should run.

f. Select Update.

Alternatively, select Execute Now to execute the import
schedule immediately.

10. (Optional) Configure additional settings.

a. In the Configure additional settings (optional) section of the
Service Graph Connector for VMware Workspace ONE UEM
page, select Get Started.

b. For the Configure duplicate detection rules task, select
Configure.

c. On the CMDB Duplicate Row Rule form, select Active.

d. Update the Value field to true to activate the duplicate
detection rule during data import.

e. Select OK, and navigate back to the guided setup.

f. To remove fields from being evaluated, add the field names as a
comma-separated list in the Ignore Fields column on the CMDB
Duplicate Row Rules form.
Use this option for fields that change with every import.

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

g. Set the Configure duplicate detection rules task to complete by
selecting Mark as Complete.

h. For the Enable software import task, select Configure.

i. Select the connection record for which you want to enable the
import of software data.
The turn_off_software_import connection property is set to true by
default.

j. Set the turn_off_software_import connection property value to
false to import software data.

k. Set the Enable software import task to complete by selecting
Mark as Complete.

l. For the Import non-managed software task, select Configure.

m. Select the connection record for which you want to import non-
managed software data.
By default, software records that have the IsManaged field set to
false aren't imported.

n. Set the managed_apps_only connection property value to false
to import non-managed software data.

o. Set the Import non-managed software task to complete by
selecting Mark as Complete.

p. For the Import apps based on software status value task, select
Configure.
By default, the connector imports applications that have the
status value 2, 3, or 5.

Status values of applications

Status
Value

Pending Install
1

Installed
2

Pending Removal
3

Removed
4

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

Status
Value

Unknown
5

q. Select the connection record for which you want to update the
set of imported applications.

r. Set the import_apps_with_status connection property value to
the required software status values (as a comma-separated list).

s. Set the Import apps based on software status value task to
complete by selecting Mark as Complete.

## CMDB classes targeted in Service Graph Connector for
## VMware Workspace ONE UEM

When you complete setting up the connection, you can configure
the integration to periodically pull data from VMware Workspace ONE
Unified Endpoint Management (UEM). The data is saved in tables that
extend from the Configuration item [cmdb_ci] table.

Computer [cmdb_ci_computer]

The following attributes in the Computer [cmdb_ci_computer] table are
populated by collected data:

Attribute label
Attribute name

Name
name

Serial number
serial_number

Is Virtual
virtual

Most recent discovery
last_discovered

Operating System
os

OS Version
os_version

RAM (MB)
ram

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

Attribute label
Attribute name

Assigned to
assigned_to

Model ID
model_id

Manufacturer
manufacturer

Handheld Computing Device [cmdb_ci_handheld_computing]

The following attributes in the Handheld Computing Device
[cmdb_ci_handheld_computing] table are populated by collected
data:

Attribute label
Attribute name

MAC Address
mac_address

Name
name

Serial number
serial_number

IMEI
imei

Most recent discovery
last_discovered

Operating System
os

OS Version
os_version

Phone Number
phone_number

RAM (MB)
ram

Root Access
root_access

Manufacturer
manufacturer

Model ID
model_id

Carrier
carrier

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

Attribute label
Attribute name

Assigned to
assigned_to

Hardware [cmdb_ci_hardware]

The following attribute in the Hardware [cmdb_ci_hardware] table is
populated by collected data:

Attribute label
Attribute name

Most recent discovery
last_discovered

Relationships created for Hardware

Parent class
Relationship type
Child class

Hardware
[cmdb_ci_hardware]
Owns::Owned by

Network Adapter
[cmdb_ci_network_ad
apter]

Hardware
[cmdb_ci_hardware]
Owns::Owned by
IP Address
[cmdb_ci_ip_address]

Hardware
[cmdb_ci_hardware]
Reference

SG-Workspace ONE
UEM Device Related
[sn_vmwoneuem_inte
g_device_related]

Hardware
[cmdb_ci_hardware]
Reference
Key Value
[cmdb_key_value]

IP Address [cmdb_ci_ip_address]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data:

Attribute label
Attribute name

Name
name

Nic
nic

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

Attribute label
Attribute name

IP Address
ip_address

IP version
ip_version

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

Key Value [cmdb_key_value]

The following attributes in the Key Value [cmdb_key_value] table are
populated by collected data:

Attribute label
Attribute name

Key
key

Value
value

Media Player [cmdb_ci_media_player]

The following attributes in the Media Player [cmdb_ci_media_player]
table are populated by collected data:

Attribute label
Attribute name

Name
name

Serial number
serial_number

Manufacturer
manufacturer

Model ID
model_id

MAC Address
mac_address

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

Attribute label
Attribute name

Assigned to
assigned_to

Most recent discovery
last_discovered

Network Adapter [cmdb_ci_network_adapter]

The following attributes in the Network Adapter
[cmdb_ci_network_adapter] table are populated by collected data:

Attribute label
Attribute name

Name
name

Configuration Item
cmdb_ci

MAC Address
mac_address

Most recent discovery
last_discovered

Relationship created for Network Adapter

Parent class
Relationship type
Child class

Network Adapter
[cmdb_ci_network_ad
apter]

Reference
Hardware
[cmdb_ci_hardware]

Printer [cmdb_ci_printer]

The following attributes in the Printer [cmdb_ci_printer] table are
populated by collected data:

Attribute label
Attribute name

Assigned to
assigned_to

MAC Address
mac_address

Name
name

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

Attribute label
Attribute name

Most recent discovery
last_discovered

Manufacturer
manufacturer

Model ID
model_id

Serial number
serial number

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

Relationships created for Serial Number

Parent class
Relationship type
Child class

Serial Number
[cmdb_serial_number]
Reference
Computer
[cmdb_ci_computer]

Serial Number
[cmdb_serial_number]
Reference

Handheld Computing
Device
[cmdb_ci_handheld_c
omputing]

Serial Number
[cmdb_serial_number]
Reference
Printer
[cmdb_ci_printer]

Serial Number
[cmdb_serial_number]
Reference

Media Player
[cmdb_ci_media_play
er]

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

SG-Workspace ONE UEM Device Related
[sn_vmwoneuem_integ_device_related]

The following attributes in the SG-Workspace ONE UEM Device
Related [sn_vmwoneuem_integ_device_related] table are populated by
collected data:

Attribute label
Attribute name

Device ID
device_id

Device Compliance State
compliance_state

Device Ownership
device_ownership

User Email
user_email

User Name
user_name

Software [cmdb_ci_spkg]

The following attributes in the Software [cmdb_ci_spkg] table are
populated by collected data:

Attribute label
Attribute name

Key
key

Name
name

Version
version

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

Software Instance [cmdb_software_instance]

The following attributes in the Software Instance
[cmdb_software_instance] table are populated by collected data:

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
Hardware
[cmdb_ci_hardware]

## Accessing the connection details of Service Graph
## Connector for VMware Workspace ONE UEM

You can access the connection details of the Service Graph Connector
for VMware Workspace ONE UEM in a single view using the common
connection framework (CCF) included within the Integration Commons
for CMDB (sn_cmdb_int_util) store app.

With the CCF, you can access all the connections used by the Service
Graph Connector for VMware Workspace ONE UEM. The connection
details include the connection alias, connection properties, data
sources, and scheduled data imports associated with a connection. You
can also test the connection. For more information, see Accessing the
connection details of Service Graph Connectors.

Access the details of a VMware Workspace ONE UEM connection

Access the details of a VMware Workspace ONE UEM connection
configured for the Service Graph Connector for VMware Workspace ONE
UEM.

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

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > Workspace ONE UEM >
Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

3. On the Service Graph Connections page, view the connection
details such as the connection name, alias, and data sources.

4. Select a related list to view further details of the connection.

5. (Optional) Select the Test Connection related link to test the
connection.

Related concepts

• Service Graph Connector for VMware Workspace ONE UEM

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

26

Zurich ServiceNow AI Platform Capabilities

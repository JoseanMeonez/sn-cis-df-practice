# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_trellix_2026-01-16-13-16-55

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_trellix_2026-01-16-13-16-55.pdf*

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

## Service Graph Connector for Trellix

Use the Service Graph Connector for Trellix to bring in device, server, and
network data from a Trellix environment into your ServiceNow instance to
streamline your incident response and asset management use cases.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported versions

Supported ServiceNow versions:

• Washington DC

• Xanadu

• Yokohama

Use cases

The following examples describe how you can use the Service Graph
Connector for Trellix for security operations management:

• Identify cybersecurity risks in the environment.

• Assess dependencies between configuration items (CI).

• Enable effective security incident response and endpoint management
systems.

• Identify data quality issues, reconcile inconsistencies, and manage
incidents and changes on discovered CIs.

Configuring a connection for the connector

You can configure a connection for the connector by using the
SGC Central view in the CMDB Workspace. The view enables you to
discover and install connectors, and then effectively manage the full life
cycle of creating, editing, monitoring, and debugging connections. To

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

configure the connector using SGC Central, see Configure Service Graph
Connector for Trellix using SGC Central.

Important:   Unless there are configuration issues, use the SGC
Central view in the CMDB Workspace to configure the connection
for the connector, as the guided setup method is being deprecated.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration,
or a specific integration run. For more details about monitoring Trellix
integrations in the CMDB Integrations Dashboard, see Using the CMDB
Integrations Dashboard.

Data mapping

Data from the Trellix data sources is mapped and transformed into the
ServiceNow CMDB Configuration Item (CI) class definitions using the
Robust Transform Engine (RTE). Data is inserted into the ServiceNow CMDB
using the Identification and Reconciliation Engine (IRE).

The following data source is included for the Trellix application:

SG-Trellix-Devices

Imports data from devices and loads the imported data in the SGC Trellix
Device Import [sn_trellix_integ_sgc_trellix_device_import] staging table.

The imported data is then inserted into the following target tables:

• File System [cmdb_ci_file_system]

• IP Address [cmdb_ci_ip_address]

• Network Adapter [cmdb_ci_network_adapter]

• Server [cmdb_ci_server]

• Software Installation [cmdb_sam_sw_install] (if the Software Asset
Management (SAM) application is installed)

• Software [cmdb_ci_spkg] (if the SAM application isn't installed)

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

• Software Instance [cmdb_software_instance] (if the SAM application
isn't installed)

• Storage Disk [cmdb_ci_storage_disk]

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

System property

The following system property is available for Service Graph Connector
for Trellix: sn_trellix_integ.getdevices_count. This property sets the
pagination size for the records that are fetched from the Trellix API.

• Type: integer

• Default value: 100

Note:   To open the System Properties [sys_properties] table, enter
sys_properties.list in the navigation filter.

Related tasks

• Configure Service Graph Connector for Trellix using SGC Central

• Configure Service Graph Connector for Trellix using guided setup

Related concepts

• Service Graph Connectors

Related reference

• CMDB classes targeted in Service Graph Connector for Trellix

## Configure Service Graph Connector for Trellix using
## SGC Central

Use the playbook available with the SGC Central application to set up
the Service Graph Connector for Trellix for pulling in Trellix data into the
CMDB.

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

Before you begin

Install Service Graph Connector for Trellix version 1.0.0 from the
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

3. On the Dashboard page, select Create connection.

Tip:   Alternatively, you can select Create connection on the All
connections page.

4. On the Create connection window, select the Trellix connector type,
and then select Create connection.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

Note:   This step is required only during the first-time setup. See
Perform initial setup tasks when creating a connection in SGC
Central.

6. Complete the setup for configuring the connector for importing data.

a. Create and test a connection.

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

a. In the Setup stage of the playbook, select the Create and test
connection activity.

b. On the form, fill in the fields.

Create and test connection form

Field

Connection name

Name to identify the Trellix
connection record.

For example, SGTrellix.

Connection url
URL of the connection.

User name
User name of your Trellix
account.

Password
Password of your Trellix
account.

Use MID server

Option to use a MID Server.
Select this check box if
you’re using an on-premises
instance of Trellix.

Note:   A MID Server
must be configured
on your ServiceNow
instance before you
select this option.

Mid Selection

Name of the MID Server used
by the connector.

This field appears only when
the Use MID Server check
box is selected.

c. Select Create and test connection.

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

d. Once the connection test is complete, select Continue.

b. Configure the import schedule to import data at regular intervals.

a. In the Setup stage of the playbook, select the Configure
import schedule activity.

b. Expand the Parent scheduled data import within the
Import schedules list, and select the SG-Trellix-Devices import
schedule.

c. In the Configure import schedule dialog box, select the
Active check box, and then fill in the run schedule and time
details.

For more information, see Schedule a data import.

d. Select Save.

Alternatively, select Execute Now to execute the import
schedule immediately.

e. Select Continue.

c. In the Setup stage of the playbook, select the Confirm
connection setup activity to verify whether the connection was
created.

What to do next

Select View all connections to review the connection details. The
configured connection appears in the Installed connections list.

Related concepts

• Service Graph Connector for Trellix

• Accessing the connection details of Service Graph Connector for Trellix

Related reference

• CMDB classes targeted in Service Graph Connector for Trellix

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

## Configure Service Graph Connector for Trellix using
## guided setup

Set up scheduled import jobs to pull in data from a Trellix project into your
CMDB.

Before you begin

Important:   Unless there are configuration issues, use the SGC
Central view in the CMDB Workspace to configure the connection
for the connector, as the guided setup method is being deprecated.

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
installed. See Integration Commons for CMDB.

• The CMDB CI class models store app, which is automatically installed.
See CMDB CI Class Models.

• The ITOM Licensing plugin (com.snc.itom.license). See Request
Discovery.

Role required: SGC-Admin (sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to run background scripts and
to provide table-level access to the SGC-Admin user.

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

1. Verify that the application scope is set to the Service Graph
Connector for Trellix application by using the application picker.
For more information, see Application picker.

2. Navigate to All > Service Graph Connectors > Trellix > Setup.

3. On the Service Graph Connector for Trellix page, verify that the
Quick Start option is selected, and then select Continue.

4. Configure the connection to send requests to the Trellix application.

a. On the Service Graph Connector for Trellix page, in the Configure
the Connection and Credentials section, select Start.

b. Configure the authentication credentials.

a. For the Configure Trellix authentication credentials task, fill in
the fields on the Basic Auth Credentials form.

Basic Auth Credentials form

Field
Description

Name

Credentials to use for the
connection. For example,
SGTrellix.Credentials.

Order

The sequence in which the
records are processed. The
default value is 100.

User name
User name of your Trellix
account.

Password
Password of your Trellix
account.

Active
Verify that the check box is
selected.

b. Select Update to save the authentication credentials.

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

c. Set the Configure Trellix authentication credentials task to
complete by selecting Mark as complete, and then select
Continue.

c. Configure the HTTP connection.

a. For the Configure Trellix HTTP Connection task, fill in the fields
on the HTTP(s) Connection form.

HTTP(s) Connection form

Field
Description

Name

Name to identify the Trellix
connection record. For
example, SGTrellix.

Don’t modify the name
for the default connection
SGTrellix.

Active
Verify that the check box is
selected.

Credential
Credentials to use for the
connection.

Domain
Domain that contains the
connection.

Connection alias

Connection alias that
resolves your connection
and credentials at runtime.

Note:   Only one
connection is active per
connection alias at a
time.

Connection URL

Base URL of the connection.
The base URL is the
hostname of your Trellix
instance. For example,

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

Field
Description

https://
subdomain.domain.com:po
rt.

Use MID server

Option to use a MID Server.
Select this check box if
you're using an on-premises
instance of Trellix. Complete
the Advanced MID Server
Configuration.

Note:   A MID Server
must be configured
on your ServiceNow
instance before you
select this option.

MID selection

Select a MID Server from the
list.

This field appears only when
the Use MID Server check
box is selected.

MID application

Select a MID Server
application from the list.

This field appears only when
the Use MID Server check
box is selected.

Connection timeout

The maximum time (in
seconds) the system waits
while attempting to establish
a connection.

b. Select Update to save the HTTP connection details.

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

c. Set the Configure Trellix HTTP Connection task to complete by
selecting Mark as complete, and then select Continue.

d. Test the Trellix API connection to import data from the Trellix
application.

a. Test the connection by selecting the Test Connection related
link in the Test Connection task.

Testing the connection might take a few moments. The page
is refreshed to show the test results.

b. When the Status field is set to Success, set the Test
Connection task to complete by selecting Mark as complete,
and then select Continue.

If any of the tests have errors, follow the suggestions for
remediation.

5. (Optional) Add multiple instances.

Note:   If you don't need to add multiple instances, you can skip
this step.

a. On the Service Graph Connector for Trellix page, in the Add
Multiple Instances section, select Start.

b. In the Update Data Source Access section, select the Data
Source [sys_data_source] table.

c. Select the Global application scope by using the application
picker.

d. In the Application Access related list, select the Can create, Can
update, and Can delete check boxes, if not already selected.

e. Modify the application scope again to Service Graph Connector
for Trellix by using the application picker.

f. Select Update to save the data source access details.

g. Set the Update Data Source Access task to complete by
selecting Mark as Complete, and then select Continue.

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

h. Repeat steps 5.c to 5.e for the Update Scheduled
Data Import Access task with the Scheduled data import
[scheduled_data_set] table.

i. Select Update to save the scheduled data import access details.

j. Set the Update Scheduled Data Import Access task to complete
by selecting Mark as Complete, and then select Continue.

k. In the Add Another Connection section, modify the application
scope to Service Graph Connector for Trellix by using the
application picker.

l. Select Click Here.

m. On the Workflow Studio page, select Add Connection in the
SGTrellix section.

n. Fill in the fields on the Create Connection form, and then select
Create Connection.

Create Connection form

Field
Description

Connection name
Name to identify the Trellix
connection record.

Connection url
URL of the connection.

Use MID server

Option to use a MID Server.
Select this check box if
you're using an on-premises
instance of Trellix. Complete
the Advanced MID Server
Configuration.

Note:   A MID Server
must be configured on
your ServiceNow instance
before you select this
option.

MID selection
Select a MID Server from the
list.

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

This field appears only when
the Use MID Server check box
is selected.

MID application

Select a MID Server
application from the list.

This field appears only when
the Use MID Server check box
is selected.

User name
User name of your Trellix
account.

Password
Password of your Trellix
account.

o. Close the Workflow Studio page, and navigate back to the
guided setup.

p. Set the Add Another Connection task to complete by selecting
Mark as Complete, and then select Continue.

q. In the Test New Connections section, select the newly created
connection record, and then select the Test Connection related
link.

Testing the connection might take a few moments. The page is
refreshed to show the test results.

r. When the Status field is set to Success, set the Test New
Connections task to complete by selecting Mark as complete,
and then select Continue.

If any of the tests have errors, follow the suggestions for
remediation.

6. Configure the scheduled jobs to import data from the Trellix
application.

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

a. On the Service Graph Connector for Trellix page, in the Set up
scheduled import jobs section, select Start.

b. For the Configure the scheduled jobs task, select the connection.

Note:   The SG-Trellix-Devices scheduled import job is set to
inactive by default.

c. On the Scheduled Data Import form, verify the field values for the
scheduled job.

For more information, see Schedule a data import.

d. Select the Active check box to activate the SG-Trellix-Devices
scheduled import job.

e. In the Run field, select Periodically to specify how often the job
runs.

f. Select Execute Now to execute the import schedule.

g. Set the Configure the scheduled jobs task to complete by
selecting Mark as complete, and then select Continue.

7. On the Service Graph Connector for Trellix page, select Exit to exit
the guided setup.

Related concepts

• Service Graph Connector for Trellix

• Accessing the connection details of Service Graph Connector for Trellix

Related reference

• CMDB classes targeted in Service Graph Connector for Trellix

## CMDB classes targeted in Service Graph Connector for
## Trellix

When you complete setting up the connection, you can configure the
integration to periodically pull data from Trellix. The data is saved in tables
that extend from the Configuration item [cmdb_ci] table.

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

File System [cmdb_ci_file_system]

The following attributes in the File System [cmdb_ci_file_system] table are
populated by collected data:

Attribute label
Attribute name

Computer
computer

Disk Space (GB)
disk_space

Free space bytes
free_space_bytes

Name
name

Relationship created for File System

Parent class
Relationship type
Child class

File System
[cmdb_ci_file_system]
Reference
Server
[cmdb_ci_server]

IP Address [cmdb_ci_ip_address]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data:

Attribute label
Attribute name

IP Address
ip_address

Netmask
netmask

Nic
nic

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

Network Adapter [cmdb_ci_network_adapter]

The following attributes in the Network Adapter
[cmdb_ci_network_adapter] table are populated by collected data:

Attribute label
Attribute name

Configuration Item
cmdb_ci

IP Address
ip_address

MAC Address
mac_address

Name
name

Netmask
netmask

Relationship created for Network Adapter

Parent class
Relationship type
Child class

Network Adapter
[cmdb_ci_network_ad
apter]

Reference
Server
[cmdb_ci_server]

Server [cmdb_ci_server]

The following attributes in the Server [cmdb_ci_server] table are
populated by collected data:

Attribute label
Attribute name

Class
sys_class_name

CPU count
cpu_count

CPU speed (MHz)
cpu_speed

CPU type
cpu_type

DNS Domain
dns_domain

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

Host name
host_name

Install Status
install_status

IP Address
ip_address

Is Virtual
virtual

MAC Address
mac_address

Manufacturer
manufacturer

Model ID
model_id

Name
name

Operating System
os

OS Service Pack
os_service_pack

OS Version
os_version

RAM (MB)
ram

Serial number
serial_number

Relationships created for Server

Parent class
Relationship type
Child class

Server
[cmdb_ci_server]

Contains::Contained
by

Storage Disk
[cmdb_ci_storage_disk
]

Server
[cmdb_ci_server]

Contains::Contained
by

File System
[cmdb_ci_file_system]

Server
[cmdb_ci_server]
Owns::Owned by
IP Address
[cmdb_ci_ip_address]

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

Parent class
Relationship type
Child class

Server
[cmdb_ci_server]
Owns::Owned by

Network Adapter
[cmdb_ci_network_ad
apter]

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

Software Installation [cmdb_sam_sw_install]

The following attributes in the Software Installation [cmdb_sam_sw_install]
table are populated by collected data:

Attribute label
Attribute name

Discovery Source
discovery_source

Installed on
installed_on

Name
name

Version
version

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

Relationship created for Software Installation

Parent class
Relationship type
Child class

Software Installation
[cmdb_sam_sw_install]
Reference
Server
[cmdb_ci_server]

Software Instance [cmdb_software_instance]

The following attributes in the Software Instance
[cmdb_software_instance] table are populated by collected data:

Attribute label
Attribute name

Installed on
installed_on

Name
name

Relationship created for Software Instance

Parent class
Relationship type
Child class

Software Instance
[cmdb_software_insta
nce]

Reference
Server
[cmdb_ci_server]

Storage Disk [cmdb_ci_storage_disk]

The following attributes in the Storage Disk [cmdb_ci_storage_disk] table
are populated by collected data:

Attribute label
Attribute name

Computer
computer

Disk space (GB)
disk_space

Free disk space (GB)
free_space

Name
name

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

Relationship created for Storage Disk

Parent class
Relationship type
Child class

Storage Disk
[cmdb_ci_storage_disk
]

Reference
Server
[cmdb_ci_server]

Related concepts

• Service Graph Connector for Trellix

## Accessing the connection details of Service Graph
## Connector for Trellix

You can access the connection details of the Service Graph Connector
for Trellix in a single view using the common connection framework (CCF)
included within the Integration Commons for CMDB (sn_cmdb_int_util)
store app.

With the CCF, you can access all the connections used by the
Service Graph Connector for Trellix. The connection details include the
connection alias, connection properties, data sources, and scheduled
data imports associated with a connection. You can also test the
connection. For more information, see Accessing the connection details
of Service Graph Connectors.

Access the details of a Trellix connection

Access the details of a Trellix connection configured for the Service
Graph Connector for Trellix.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > Trellix > Connections.

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

2. From the Name column of the Service Graph Connections list, select
a connection.

3. On the Service Graph Connections page, view the connection
details such as the connection name, alias, and data sources.

4. Select a related list to view further details of the connection.

5. (Optional) Select the Test Connection related link to test the
connection.

Related concepts

• Service Graph Connector for Trellix

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

23

Zurich ServiceNow AI Platform Capabilities

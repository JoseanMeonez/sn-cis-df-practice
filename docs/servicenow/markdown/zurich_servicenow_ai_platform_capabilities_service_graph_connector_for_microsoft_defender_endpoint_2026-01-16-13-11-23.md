# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_microsoft_defender_endpoint_2026-01-16-13-11-23

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_microsoft_defender_endpoint_2026-01-16-13-11-23.pdf*

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

## Service Graph Connector for Microsoft Defender
## Endpoint

Use the Service Graph Connector for Microsoft Defender Endpoint to pull
data from machines protected by the Microsoft Defender for Endpoint
security solution into your ServiceNow instance.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported versions

• Supported Microsoft Defender for Endpoint versions:

• Microsoft Defender for Endpoint Plan 1

• Microsoft Defender for Endpoint Plan 2

• Supported ServiceNow versions:

• Washington DC

• Xanadu

• Yokohama

Use cases

The ServiceNow Security Operations applications have features that
interact with the Service Graph Connector to gain insights into machines
utilizing the Microsoft Defender for Endpoint security solution.

Important Information for upgrading Service Graph Connector for
Microsoft Defender Endpoint

After you upgrade to Service Graph Connector for Microsoft Defender
Endpoint 1.2.0, migrate data from the Server [cmdb_ci_server] CI class to
the Computer [cmdb_ci_computer] CI class. For more information, see
the Service Graph Connector for Microsoft Defender Endpoint - Data

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

migration after upgrade to version 1.2.0 [KB2096769] article in the Now
Support Knowledge Base.

Configuring a connection for the connector

You can configure a connection for the connector by using the
SGC Central view in the CMDB Workspace. The view enables you to
discover and install connectors, and then effectively manage the full life
cycle of creating, editing, monitoring, and debugging connections. To
configure the connector using SGC Central, see Configure Service Graph
Connector for Microsoft Defender Endpoint using SGC Central.

Important:   Unless there are configuration issues, use the SGC
Central view in the CMDB Workspace to configure the connection
for the connector, as the guided setup method is being deprecated.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration,
or a specific integration run. For more details about monitoring Microsoft
Defender for Endpoint integrations in the CMDB Integrations Dashboard,
see Using the CMDB Integrations Dashboard.

Data mapping

Data from the Microsoft Defender for Endpoint data source is mapped
and transformed into the ServiceNow CMDB configuration item (CI) class
definitions using the Robust Transform Engine (RTE). Data is inserted into
the ServiceNow CMDB using the Identification and Reconciliation Engine
(IRE).

When you complete setting up the connection, you can configure
the integration to pull data periodically from the machines utilizing the
Microsoft Defender for Endpoint security solution.

The following data source is included for the Microsoft Defender for
Endpoint security solution:

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

SG-Defender Machines

Imports all the machine-related data from the machines
utilizing the Microsoft Defender for Endpoint security solution,
loads the imported data in the SG-Defender Machines
[sn_defender_integ_sg_defender_machines] staging table, and then
populates the following target tables:

• IP Address [cmdb_ci_ip_address]

• Software Installation [cmdb_sam_sw_install] (If the Software Asset
Management (SAM) application is installed.)

• Software Instance [cmdb_software_instance] (If the SAM application is
not installed.)

• Software [cmdb_ci_spkg] (If the SAM application is not installed.)

• SG-Defender Machines Related
[sn_defender_integ_sg_defender_machines_related]

• Network Adapter [cmdb_ci_network_adapter]

• Computer [cmdb_ci_computer]

• Windows Server [cmdb_ci_win_server]

Note:   Only operating system details are populated in the
Software Installation [cmdb_sam_sw_install], Software Instance
[cmdb_software_instance], and Software [cmdb_ci_spkg] tables.

For more information on where data is saved when pulling data from
the Microsoft Defender for Endpoint security solution, see CMDB classes
targeted in Service Graph Connector for Microsoft Defender Endpoint.

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

## Configure Service Graph Connector for Microsoft
## Defender Endpoint using SGC Central

Set up scheduled import jobs to pull in Microsoft Defender for Endpoint
data into your Configuration Management Database (CMDB).

Before you begin

Complete the following tasks:

• Install Service Graph Connector for Microsoft Defender Endpoint
version 1.1.0 or later from the ServiceNow Store. For ServiceNow Store
installation steps, see Install a ServiceNow Store application.

• Verify that you have an active subscription to Microsoft Defender for
Endpoint.

• Verify that you have created an Azure application to get
programmatic access to Microsoft Defender for Endpoint. See Create
an app to access Microsoft Defender for Endpoint without a user in the
Microsoft 365 documentation.

• Obtain the tenant ID, client ID, and client secret details for the Microsoft
Defender for Endpoint administrator account.

• Enable the Machine.Read.All and Machine.ReadWrite.All permissions in
Microsoft Defender for Endpoint. See Permissions for the List machines
API in the Microsoft 365 documentation.

Role required: SGC-Admin (sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to run background scripts and
to provide table-level access to the SGC-Admin user.

About this task

The playbook experience for onboarding connectors is activated with
SGC Central in the CMDB Workspace. To configure the SGC Central
application, see Configuring SGC Central and for more information on
how to interact with a playbook, see Interact with Playbook.

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

Procedure

1. Navigate to Workspaces > CMDB Workspace.

2. In the CMDB Workspace, select SGC Central.

3. On the Overview page, select Create connection.

Tip:   Alternatively, you can select Create connection on the All
connections page.

4. On the Create connection window, select the Microsoft Defender
connector type, and then select Configure connection.
A default connection, SG Defender OAuth2.0 connection, for
Microsoft Defender for Endpoint is available within the application.
As the Service Graph Connector for Microsoft Defender Endpoint
supports only a single instance, you can configure the default
connection for the first time or resume editing it thereafter.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

Note:   This step is required only during the first-time setup. See
Perform initial setup tasks when creating a connection in SGC
Central.

6. Enter connection details and test the API connection for importing
Microsoft Defender for Endpoint data.

a. In the Setup stage of the playbook, select the Configure and test
connection activity.

b. On the form, fill in the fields.

Configure and test connection form

Field
Description

Connection Name

Name to identify the Microsoft
Defender for Endpoint
connection record.

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

Field
Description

Note:   This field
is automatically set to
SG Defender OAuth2.0
connection. Leave the
field value as is.

OAuth Client ID

Application (client) ID of
your Microsoft Defender for
Endpoint as described in the
Before you begin section.

OAuth Client Secret

Client Secret of your Microsoft
Defender for Endpoint as
described in the Before you
begin section.

OAuth token URL

Token URL of your Microsoft
Defender for Endpoint.
Enter the token URL in the
following format:

https://login.microsoft
online.com/<tenantid>/o
auth2/v2.0/token
Where <tenantid> is the tenant
ID of your Microsoft Defender
for Endpoint as described in
the Before you begin section.

Use MID Server

Option to use a MID Server.

Note:   Use of a MID Server
is optional.

Mid Selection
Name of the MID Server used
by the connector.

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

Field
Description

This field appears only when
the Use MID Server check box
is selected.

c. Select Update and test connection.

d. Once the connection test is complete, select Continue.

7. Configure the import schedule to import data at regular intervals.

a. In the Setup stage of the playbook, select the Configure import
schedule activity.

b. Select Configure import schedule.

c. Expand the Parent scheduled data import within the Import
schedules list to select the SG-Defender Machines import
schedule.

d. In the Configure import schedule dialog box, select the Active
check box, and then fill in the run schedule and time details.

For more information, see Schedule a data import.

e. Select Save.
Alternatively, select Execute Now to execute the import schedule
immediately.

f. Select Continue.

8. In the Setup stage of the playbook, select the Confirm connection
setup activity to verify whether the connection was configured.

What to do next

Select View all connections to review the connection details. The
configured connection appears in the Installed connections list.

Related concepts

• Service Graph Connector for Microsoft Defender Endpoint

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

• Accessing the connection details of Service Graph Connector for
Microsoft Defender Endpoint

Related reference

• CMDB classes targeted in Service Graph Connector for Microsoft
Defender Endpoint

## Configure Service Graph Connector for Microsoft
## Defender Endpoint using the guided setup

Pull in data from machines using the Microsoft Defender for Endpoint
security solution into your Configuration Management Database (CMDB).

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
installed.

• The CMDB CI class models store app, which is automatically installed.
See CMDB CI Class Models.

• The ITOM Discovery License plugin (com.snc.itom.discovery.license).
You must activate this plugin.

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

• ITOM Licensing plugin (com.snc.itom.license). For more information, see

Request Discovery.

• The Datastream Action plugin
(com.glide.hub.action_type.datastream), which is automatically
installed.

• Observability Commons for CMDB (sn_observability), which is only
required for event ingestion. For Event Management to work, the
Observability Commons for CMDB (sn_observability) app must be
installed prior to installing the connector. For more information, see
Observability Commons for CMDB on the ServiceNow Store.

Complete the following tasks:

• Install the Service Graph Connector for Microsoft Defender Endpoint
application (sn_defender_integ). For more information, see Install a
ServiceNow Store application.

• Ensure that you have an active subscription to Microsoft Defender for
Endpoint.

• Ensure that you have created an Azure application to get
programmatic access to Microsoft Defender for Endpoint. See Create
an app to access Microsoft Defender for Endpoint without a user in the
Microsoft 365 documentation.

• Obtain the tenant ID, client ID, and client secret details for the Microsoft
Defender for Endpoint administrator account.

• Enable the Machine.Read.All and Machine.ReadWrite.All permissions in
Microsoft Defender for Endpoint. See Permissions for the List machines
API in the Microsoft 365 documentation.

Role required: SGC-Admin (sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to run background scripts and
to provide table-level access to the SGC-Admin user.

Procedure

1. Ensure that the application scope is set to the Service Graph
Connector for Microsoft Defender Endpoint application by using the
application picker.

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

For more information, see Application picker.

2. Navigate to All > Service Graph Connectors > Microsoft Defender >
Setup.

3. On the Getting started page, select Get Started.

4. Configure the authentication credentials details for sending requests
to the List machines API in Microsoft Defender for Endpoint.

a. Configure your Microsoft Defender for Endpoint authentication
credentials.

a. In the Configure the connection section of the Service Graph
Connector for Microsoft Defender page, select Get Started.

b. For the Configure the credentials task, select Configure.

c. On the form, review and modify the fields.

Application Registries form

Field
Description

Connection Name

Name to identify the
connection record.

Note:   This field is
automatically set to the
SG Defender OAuth
connection record.
Leave the field value as
is.

Client ID

Application (client) ID of
your Microsoft Defender for
Endpoint as described in the
Before you begin section.

Client Secret

Client Secret of your
Microsoft Defender for
Endpoint as described in the
Before you begin section.

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

Field
Description

OAuth Token URL

Token URL of your Microsoft
Defender for Endpoint.
Enter the token URL in the
following format:

https://login.microsof
tonline.com/<tenantid>
/oauth2/v2.0/token
Where <tenantid> is the
tenant ID of your Microsoft
Defender for Endpoint as
described in the Before you
begin section.

d. Select Update to return to the guided setup page.

e. Set the Configure the credentials task to complete by
selecting Mark as Complete.

b. Test the List machines API connection to import machine-related
data from Microsoft Defender for Endpoint.

a. For the Test the connection task, select Configure.

b. On the Service Graph Connections page, select Test
Connection.

c. When the Status field is set to Success, select Update to close
the Test the connection dialog box and return to the guided
setup page.

If any of the tests have errors, follow the suggestions for
remediation.

d. Set the Test the connection task to complete by selecting
Mark as Complete.

5. Configure the scheduled jobs to import machine-related data from
Microsoft Defender for Endpoint.

a. In the Set up scheduled import jobs section of the Service Graph
Connector for Microsoft Defender page, select Get Started.

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

b. For the Configure scheduled jobs task, select Configure.

c. From the Name column, select the scheduled job that you want
to activate.
By default, the SG-Defender Machines scheduled job is available
to run the SG-Defender Machines data source.

d. On the Scheduled Data Import form, verify the field values for the
scheduled job.
For more information, see Schedule a data import.

e. Select Update.

f. Select the back button of your browser to return to the guided
setup page.

g. Set the Configure the scheduled jobs task to complete by
selecting Mark as Complete in the guided setup.

Related concepts

• Accessing the connection details of Service Graph Connector for
Microsoft Defender Endpoint

## CMDB classes targeted in Service Graph Connector for
## Microsoft Defender Endpoint

When you complete setting up the connection, you can configure the
integration to pull data periodically from machines utilizing the Microsoft
Defender for Endpoint security solution. The data is saved in tables that
extend from the Configuration item [cmdb_ci] table.

Computer [cmdb_ci_computer]

The following attributes in the Computer [cmdb_ci_computer] table are
populated by collected data:

Attribute label
Attribute name

Class
sys_class_name

Discovery source
discovery_source

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

Attribute label
Attribute name

Install Status
install_status

Name
name

Operating System
os

OS Version
os_version

Relationships created for Computer

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
Owns::Owned by

Network Adapter
[cmdb_ci_network_ad
apter]

Computer
[cmdb_ci_computer]
Reference

SG-Defender
Machines Related
[sn_defender_integ_sg
_defender_machines_r
elated]

Computer
[cmdb_ci_computer]
Reference
Software Installation
[cmdb_sam_sw_install]

IP Address [cmdb_ci_ip_address]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data:

Attribute label
Attribute name

Install Status
install_status

IP Address
ip_address

IP version
ip_version

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

Attribute label
Attribute name

Name
name

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

SG-Defender Machines Related
[sn_defender_integ_sg_defender_machines_related]

The following attributes in the SG-Defender Machines
Related [sn_defender_integ_sg_defender_machines_related] table are
populated by collected data:

Attribute label
Attribute name

Agent Version
agent_version

Device Id
device_id

Exposure Level
exposure_level

First Seen
first_seen_date

Health Status
health_status

IsAadJoined
isaadjoined

Last Reported
last_reported

Managed by
managed_by

Onboarding Status
onboarding_status

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

Network Adapter [cmdb_ci_network_adapter]

The following attributes in the Network Adapter
[cmdb_ci_network_adapter] table are populated by collected data:

Attribute label
Attribute name

Discovery source
discovery_source

Install Status
install_status

MAC Address
mac_address

Name
name

Relationships created for Network Adapter

Parent class
Relationship type
Child class

Network Adapter
[cmdb_ci_network_ad
apter]

Reference
Server
[cmdb_ci_server]

Network Adapter
[cmdb_ci_network_ad
apter]

Reference
Computer
[cmdb_ci_computer]

Software [cmdb_ci_spkg]

The following attributes in the Software [cmdb_ci_spkg] table are
populated by collected data when the Software Asset Management
(SAM) application isn't installed:

Attribute label
Attribute name

Key
key

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

17

Zurich ServiceNow AI Platform Capabilities

---
*Page 18*

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

Discovery source
discovery_source

Display name
display_name

Version
version

Software Instance [cmdb_software_instance]

The following attributes in the Software Instance
[cmdb_software_instance] table are populated by collected data when
the SAM application isn't installed:

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

Windows Server [cmdb_ci_win_server]

The following attributes in the Windows Server [cmdb_ci_win_server]
table are populated by collected data when the SAM application isn't
installed:

Attribute label
Attribute name

Class
sys_class_name

Discovery source
discovery_source

Install Status
install_status

Name
name

Operating System
os

OS Version
os_version

Relationships created for Windows Server

Parent class
Relationship type
Child class

Windows Server
[cmdb_ci_win_server]
Owns::Owned by

Network Adapter
[cmdb_ci_network_ad
apter]

Windows Server
[cmdb_ci_win_server]
Owns::Owned by
IP Address
[cmdb_ci_ip_address]

Windows Server
[cmdb_ci_win_server]
Reference

SG-Defender
Machines Related
[sn_defender_integ_sg
_defender_machines_r
elated]

Windows Server
[cmdb_ci_win_server]
Reference
Software Installation
[cmdb_sam_sw_install]

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

## Properties

Service Graph Connector for Microsoft Defender Endpoint properties
control the behavior of the connector.

System properties

These system properties are available for Service Graph Connector for
Microsoft Defender Endpoint.

Note:   To open the System Properties [sys_properties] table, enter
sys_properties.list in the navigation filter.

System properties for Service Graph Connector for Microsoft
Defender Endpoint

Property
Description

sn_defender_integ.pagination_rec
ord_count

Enter the maximum number of
rows fetched in the List machines
API response from the machine
resource type.

• Type: integer

• Default value: 500

• Location: System Property
[sys_properties] table

## Accessing the connection details of Service Graph
## Connector for Microsoft Defender Endpoint

You can access the connection details of the Service Graph Connector
for Microsoft Defender Endpoint in a single view using the common
connection framework (CCF) included within the Integration Commons
for CMDB (sn_cmdb_int_util) store app.

With the CCF, you can access all the connections used by the Service
Graph Connector for Microsoft Defender Endpoint. The connection

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

details include the connection alias, data sources, and scheduled data
imports associated with a connection. You can also test the connection.

Access the details of a Microsoft Defender for Endpoint connection

Access the details of a Microsoft Defender for Endpoint connection
configured for the Service Graph Connector for Microsoft Defender
Endpoint.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > Microsoft Defender >
Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

3. On the Service Graph Connections page, view the connection
details such as the connection name, alias, and data sources.

4. Select a related list to view further details of the connection.

5. (Optional) Select the Test Connection related link to test the
connection.

Related concepts

• Accessing the connection details of Service Graph Connectors

## Life cycle management of records in Service Graph
## Connector for Microsoft Defender Endpoint

Life cycle management in the Service Graph Connector for Microsoft
Defender Endpoint monitors and updates the statuses of Microsoft
Defender for Endpoint resources throughout their entire life cycle, from
creation to deletion.

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

The life cycle management process helps maintain the accuracy and
integrity of data in the Configuration Management Database (CMDB).

Life cycle management for CIs in Service Graph Connector for
Microsoft Defender Endpoint

The following table lists the configuration items (CIs) in CMDB and other
non-CMDB tables for which life cycle management is available in the
Service Graph Connector for Microsoft Defender Endpoint. The Install
Status [install_status] attribute of the CIs is updated to installed or retired
according to the state of the CI.

Supported tables for life cycle management

Data source
CIs
Life cycle management
available

SG-Defender
Machines

Windows Server
[cmdb_ci_win_server]
Yes

SG-Defender
Machines

IP Address
[cmdb_ci_ip_address]
Yes

SG-Defender
Machines

Network Adapter
[cmdb_ci_network_ad
apter]

Yes

SG-Defender
Machines

Computer
[cmdb_ci_computer]
Yes

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

22

Zurich ServiceNow AI Platform Capabilities

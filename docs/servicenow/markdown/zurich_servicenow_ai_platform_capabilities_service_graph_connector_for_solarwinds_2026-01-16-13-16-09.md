# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_solarwinds_2026-01-16-13-16-09

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_solarwinds_2026-01-16-13-16-09.pdf*

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

## Service Graph Connector for SolarWinds

Use the Service Graph Connector for SolarWinds to pull in data from the
SolarWinds software into your ServiceNow instance.

The Service Graph Connector for SolarWinds pulls in asset inventory
data (hardware and software) from the SolarWinds database into
the ServiceNow® Configuration Management Database (CMDB)
application.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported versions

• Supported SolarWinds Orion minimum versions:

• 2019.4 HF6

• 2020.2.1. HF2

• Supported ServiceNow versions:

• Washington DC

• Xanadu

• Yokohama

Use cases

The following are examples on how you can use the Service Graph
Connector:

• Automatic normalization of asset information for hardware,
virtualization and cloud resources, and software.

• Ability to configure and save synchronization schedules.

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

Guided setup

The guided setup for the Service Graph Connector for SolarWinds
provides an organized sequence of tasks to configure the integration on
your instance. To access the guided setup, see Configure Service Graph
Connector for SolarWinds.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard
with a central view of the status, processing results, and processing
errors of all installed Service Graph Connectors. You can see metrics
for all integration runs. You can filter the view to a specific integration,
a specific time duration, or a specific integration run. For more details
about monitoring SolarWinds integrations in the CMDB Integrations
Dashboard, see Using the CMDB Integrations Dashboard.

Data mapping

Data from data sources in the SolarWinds software is mapped and
transformed into ServiceNow CMDB tables using the Robust Transform
Engine (RTE). Data is inserted into ServiceNow CMDB using the
Identification and Reconciliation Engine (IRE).

When you complete setting up the connection, you can configure the
integration to periodically pull data from the SolarWinds software.

The data is loaded into staging tables and then inserted into the following
CMDB target tables:

• AIX Server [cmdb_ci_aix_server]

• Availability Zone [cmdb_ci_availability_zone]

• CI Relationship [cmdb_rel_ci]

• Cloud Network [cmdb_ci_network]

• Cloud Service Account [cmdb_ci_cloud_service_account]

• Cloud Subnet [cmdb_ci_cloud_subnet]

• Computer [cmdb_ci_computer]

• Disk [cmdb_ci_disk]

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

• Hardware [cmdb_ci_hardware]

• Hardware Type [cmdb_ci_compute_template]

• Hyper-V Server [cmdb_ci_hyper_v_server]

• IIS Virtual Directory [cmdb_ci_iisdirectory]

• Image [cmdb_ci_os_template]

• IP Address [cmdb_ci_ip_address]

• Linux Server [cmdb_ci_linux_server]

• Logical Datacenter [cmdb_ci_logical_datacenter]

• Microsoft iis Web Server [cmdb_ci_microsoft_iis_web_server]

• MS SQL Server [cmdb_ci_db_mssql_server]

• MS SQL DataBase [cmdb_ci_db_mssql_database]

• Network Adapter [cmdb_ci_network_adapter]

• Network Gear [cmdb_ci_netgear]

• Serial Number [cmdb_serial_number]

• Server [cmdb_ci_server]

• Software Installation [cmdb_sam_sw_install] (If the Software Asset
Management (SAM) application is installed.)

• Software Instance [cmdb_software_instance] (If the SAM application is
not installed.)

• Software [cmdb_ci_spkg] (If the SAM application is not installed.)

• Solaris Server [cmdb_ci_solaris_server]

• Storage Volume [cmdb_ci_storage_volume]

• UNIX Server [cmdb_ci_unix_server]

• VM Instance [cmdb_ci_vm_instance]

• Windows Server [cmdb_ci_win_server]

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

For more information on where data is saved when pulling data from
SolarWinds, see CMDB classes targeted in Service Graph Connector for
SolarWinds.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

Related concepts

• Service Graph Connectors

## Configure Service Graph Connector for SolarWinds
## using SGC Central

Use the playbook available with the SGC Central application to set up
the Service Graph Connector for SolarWinds for pulling in SolarWinds data
into the CMDB.

Before you begin

Install Service Graph Connector for SolarWinds version 2.6.0 or later from
the ServiceNow Store. For ServiceNow Store installation steps, see Install a
ServiceNow Store application.

Air gap connections are available from version 2.5.0 of the Service
Graph Connector for SolarWinds. You can set up either standard data
sources or air gap data sources. Before you set up air gap data
sources, you must configure the air gap solution for the Service Graph
Connector for SolarWinds in your high-secure server and low-secure
server. See Configuring air gap connections for Service Graph Connector
for SolarWinds.

Role required: SGC-Admin (sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to run background scripts and
to provide table-level access to the SGC-Admin user.

About this task

The playbook experience for onboarding connectors is activated with
SGC Central in the CMDB Workspace. To configure the SGC Central

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

application, see Configuring SGC Central and for more information on
how to interact with a playbook, see Interact with Playbook.

Procedure

1. Navigate to Workspaces > CMDB Workspace.

2. In the CMDB Workspace, select SGC Central.

3. On the Dashboard page, select Create connection.

Tip:   Alternatively, you can select Create connection on the All
connections page.

4. On the Create connection window, select the SolarWinds connector
type, and then select Create connection.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

Note:   This step is required only during the first-time setup. See
Perform initial setup tasks when creating a connection in SGC
Central.

6. Complete the setup for configuring the connector for importing data.

a. Select the data source type.

a. In the Setup stage of the playbook, select the Select data
source type activity.

• Select Standard data sources if you're working with
environments that have direct internet access.

Proceed to step 6.c.

• Select Air gap data sources if you're working with
restricted environments that don't have direct internet
access.

b. Select Continue.

b. Download and run the PowerShell scripts to set up an air gap
connection.

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

Note:   Before you add an air gap data source, you
must configure the air gap solution for the Service Graph
Connector for SolarWinds in your high-secure and low-secure
servers. See Configuring air gap connections for Service
Graph Connector for SolarWinds.

a. In the Setup stage of the playbook, select the Download
PowerShell scripts activity.

The Download PowerShell scripts activity appears only when
you select Air gap data sources as the data source type in
step 6.a.

b. Select Download PowerShell scripts.

c. Run the PowerShell scripts.

For more information on configuring an air gap connection,
see Configuring air gap connections for Service Graph
Connector for SolarWinds.

d. After configuring the air gap connection, select Continue.

c. Create and test a connection.

a. In the Setup stage of the playbook, select the Create and test
connection activity.

b. On the form, fill in the fields.

• For standard data sources:

Create and test connection form

Field
Description

Connection Name
Display name for the
connection.

Connection URL
Connection host name for
SolarWinds.

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

User name
User name for SolarWinds
authentication.

Password
Password for SolarWinds
authentication.

Use MID server
Option to use a MID Server.
Select this check box.

MID selection

Select a MID Server from
the list.

This field appears only
when the Use MID Server
check box is selected.

MID application

Select a MID Server
application from the list.

This field appears only
when the Use MID Server
check box is selected.

• For air gap data sources:

Create and test connection form

Field
Description

Connection name
Display name for the
connection.

Parent directory

Path of the SolarWinds
directory where the data
is stored in your low-secure
server.

Archive data after retrieval
Option to archive data
after retrieval.

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

Archive path [Optional]

Folder where the data is to
be archived if the Archive
data after retrieval check
box is selected.

MID server

Name of the MID Server
that you deployed in your
low-secure server.

See Configure air gap
solution for Service Graph
Connector for SolarWinds
in a low-secure server.

c. Select Create and test connection.

d. Once the connection test is complete, select Continue.

d. Configure the properties of the connector to access resources.

a. In the Setup stage of the playbook, select the Set
configuration properties activity.

• Select SAM installed if a Service & Application Monitor
(SAM) module is installed on the SolarWinds instance.

• Select NPM installed if a Network Performance Monitor
(NPM) module is installed on the SolarWinds instance.

b. Select Continue.

e. Configure the import schedule to import data at regular intervals.

a. In the Setup stage of the playbook, select the Configure
import schedule activity.

b. Expand the Parent scheduled data import within the Import
schedules list, and select the SG-Solarwinds Hardware import
schedule.

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

c. In the Configure import schedule dialog box, select the
Active check box, and then fill in the run schedule and time
details.

For more information, see Schedule a data import.

d. Select Save.

Alternatively, select Execute Now to execute the import
schedule immediately.

e. Select Continue.

f. In the Setup stage of the playbook, select the Confirm
connection creation activity to verify whether the connection
was created.

What to do next

Select View all connections to review the connection details. The
configured connection appears in the Installed connections list.

Related concepts

• Service Graph Connector for SolarWinds

• Accessing the connection details of Service Graph Connector for
SolarWinds

• Configuring air gap connections for Service Graph Connector for
SolarWinds

Related reference

• CMDB classes targeted in Service Graph Connector for SolarWinds

## Configure Service Graph Connector for SolarWinds

Set up authentication credentials and scheduled jobs to import
SolarWinds data into your CMDB.

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

Before you start the configuration, navigate to System Definition >
Business Rules, and deactivate the ValidateServiceAccountID business
rule.

Air gap connections are available from version 2.5.0 of the Service
Graph Connector for SolarWinds. You can set up either regular data
sources or air gap data sources. Before you set up air gap data
sources, you must configure the air gap solution for the Service Graph
Connector for SolarWinds in your high-secure server and low-secure
server. See Configuring air gap connections for Service Graph Connector
for SolarWinds.

Dependencies and requirements:

• The Integration Commons for CMDB store app, which is automatically
installed.

• The CMDB CI class models store app, which is automatically installed.
See CMDB CI Class Models.

• Discovery Core plugin (com.snc.discovery.core), which is automatically
installed by Discovery.

• ITOM Discovery License plugin (com.snc.itom.discovery.license). You
must activate this plugin.

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

• ITOM Licensing plugin (com.snc.itom.license). For more information, see

Request Discovery.

• SolarWinds Orion Platform.

• SolarWinds Server & Application Monitor and/or Network Performance
Monitor.

Roles required:

• To configure the ServiceNow platform: SGC-Admin
(sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to run background scripts
and to provide table-level access to the SGC-Admin user.

• To access SolarWinds data: User with SWIS (SolarWinds Information
Service) access (the same as through the Orion website, not database
users).

About this task

Note:   SolarWinds Integration can work with or without Service &
Application Monitor (SAM) and Network Performance Monitor (NPM)
being installed.

Procedure

1. Navigate to All > Service Graph Connectors > SolarWinds > Setup.

2. On the Getting started page, select Get Started.

3. Configure your authentication credentials used to connect to the
SolarWinds SWIS API.

a. On the Service Graph Connector for SolarWinds page, in the
Configure the connection section, select the Configure the
authentication credentials used to connect to SolarWinds SWIS
API task.

b. For the Configure the authentication credentials used to connect
to SolarWinds SWIS API task, select Configure.

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

c. Fill in the fields on the Basic Auth Credentials form.

Basic Auth Credentials form

Field
Description

Name

Human-readable name for
this credential. This field is
automatically set. You can
optionally change this setting.

User name

SolarWinds user name.

Note:   The SolarWinds
user must have a role
with read privileges to
the SolarWinds Information
Service API for all
SolarWinds data sources
that the integration can
pull data.

Password

SolarWinds password that is
stored in the database in
encrypted form.

Active
Option to check whether this
credential is active.

Credential alias
Advanced selection criteria for
this credential.

Order

Order in which credentials are
tried. Smaller numbers are tried
first.

d. Select Update if required.

e. Set the Configure the authentication credentials used to connect
to the SolarWinds SWIS API task to complete by selecting Mark as
Complete.

4. Configure the SolarWinds HTTP connection.

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

a. For the Configure SolarWinds HTTP connection task, select
Configure.

b. Review the HTTP(s) Connection form, and fill in the fields as
required.

HTTP(s) Connection form

Field
Description

Name

Name of the connection. This
field is automatically set. You
can optionally change the
name.

Use MID server

Option to enable the
connection to use a MID
server.

Host

Target host value used by
the connection. This field
is automatically set by the
connection URL.

Credential
Credential value used by the
connection.

Connection alias

Connection alias value with
which the connection can be
referred.

URL builder
URL builder that is used to build
the connection URL.

Mutual authentication
Option to enable mutual
authentication.

Protocol
Underlying protocol used by
the connection.

Active
Option to activate the HTTP
connection.

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

Field
Description

Domain
Domain to which the
connection belongs.

Override default port
Target port value used by the
connection.

Base path

Base path for HTTP(S)
connection that is required but
should not be modified.

c. Select Update, if required.

d. Set the Configure SolarWinds HTTP connection task to complete
by selecting Mark as Complete.

5. Configure the SolarWinds modules.

a. For the Configure SolarWinds Modules task, select Configure.

b. Update the Value for the sn_solarwinds_inte.npm_installed and
the sn_solarwinds_inte.sam_installed properties in one of the
following ways:

• If the respective module is installed on the SolarWinds
instance, then set the fields to true.

• If the respective module is not installed on the SolarWinds
instance, then set the fields to false.

Note:   This update changes the API class and the data that
is returned from them.

c. Set the Configure SolarWinds Modules task to complete by
selecting Mark as Complete.

6. Test the connection.

a. For the Test the connection task, select Configure.

b. Review the fields on the Data Source form, which are
automatically set.

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

Data Source form

Field
Description

Name
Unique name for this data
source.

Import set table label
Label of the table that will be
created for this data source.

Import set table name
Name of the table that will be
created for this data source.

Type
Data storage type of the data
to be imported.

Data in single column
Data in single column.

Application
Application containing this
record.

Data stream action

The Data Source request
action that will be invoked to
get data.

c. Test the connection by selecting the Test Load 20 Records related
link.

Testing the connection takes a few moments, after which the
page refreshes to show the test results.

This step tests the SG-Solarwinds Hardware data source, and
verifies that data is loaded into the staging table. A successful
connection for the SG-Solarwinds Hardware data source means
that all SolarWinds data sources connect successfully, so you do
not need to individually test all data sources.

The connection is successful if the HTTP Status is 200. If there is an
Error Code and Error Message, the connection failed and further
troubleshooting is required.

d. Navigate back to the guided setup, and set the Test the
connection task to complete by selecting Mark as Complete.

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

7. Add multiple instances.

Note:   If you do not need to add multiple instances, you can skip
this step.

a. On the Service Graph Connector for SolarWinds page, in the Add
Multiple Instances section, select the Update Data Source Access
task.

b. For the Update Data Source Access task, select Configure.

c. Select the Data Source [sys_data_source] table.

d. Select the Global application scope by using the application
picker.

e. In the Application Access related list, select the Can create, Can
update, and Can delete check boxes, if not already selected.

f. Select Update to close the tab and return to the guided setup.

g. Modify the application scope again to Service Graph Connector
for SolarWinds by using the application picker.

h. Set the Update Data Source Access task to complete by
selecting Mark as Complete.

i. Repeat the steps 7.d to 7.g for the Update Scheduled
Data Import Access task with the Scheduled data import
[scheduled_data_set] table and for the Update Value Access
task with the Value [sys_variable_table] table, and set the tasks to
complete by selecting Mark as Complete.

8. Clear the cache for the new connection.

a. Select the Clear Cache for Datasource and Import set task, and
then select Configure.

b. Clear the cache by selecting Global from the Scope menu.

c. Enter the following script.

GlideTableManager.invalidateTable("sys_data_s
ource");
GlideCacheManager.flushTable("sys_data_source"

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

);

GlideTableManager.invalidateTable("scheduled_
import_set");
GlideCacheManager.flushTable("scheduled_import
_set");

GlideTableManager.invalidateTable("sys_variab
le_value");
GlideCacheManager.flushTable("sys_variable_val
ue");

GlideTableManager.invalidateTable("sys_db_obj
ect");
GlideCacheManager.flushTable("sys_db_object");

d. Select Run Script.

e. From the Scope menu, select Service Graph Connector for
SolarWinds.

f. Set the Clear Cache for Datasource and Import set task to
complete by selecting Mark as Complete.

9. Add a connection to another SolarWinds instance.

Note:   Confirm that the current scope is Service Graph
Connector for SolarWinds.

a. Select the Add Another Connection task, and then select
Configure.

b. In the Select Data Source Type section, select either regular data
sources or air gap data sources.

• To add or edit regular data sources, select Regular Data
Sources.

• To add or edit air gap data sources, select Airgap Data
Sources.

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

Note:   Before you add an air gap data source, you
must configure the air gap solution for the Service Graph
Connector for SolarWinds in your high-secure and low-
secure servers. See Configuring air gap connections for
Service Graph Connector for SolarWinds.

c. Either create or edit a connection.

• To create a new connection, select Add Connection.

• To edit an existing connection, select Edit.

d. Fill in or edit the fields on the form, as required.

• For regular data sources:

Create Connection form

Field
Description

Connection Name
Display name for the
connection.

Connection URL
Connection host name for
SolarWinds.

User name
User name for SolarWinds
authentication.

Password
Password for SolarWinds
authentication.

• For air gap data sources:

Create Connection form

Field
Description

Connection Name
Display name for the
connection.

MID Server

Name of the MID server that
you deployed in your low-
secure server.

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

See Configure air gap
solution for Service Graph
Connector for SolarWinds in
a low-secure server.

Parent Directory

Path of the SolarWinds
directory where the data
is stored in your low-secure
server.

Archive Data After Retrieval
Option to archive data after
retrieval.

Archive Path [Optional]

Folder where the data is to
be archived if the Archive
Data After Retrieval check
box is selected.

e. Either add or save the connection.

• To add a new connection, select Create Connection.

• To save the edits for the existing connection, select Edit
Connection.

f. Navigate back to the guided setup, and select Mark as
Complete to set the Add Another Connection task to complete.

g. If required, set up the MID Server for the connection you created.

a. For the Configure Mid Servers task, select Configure.

b. Select the name of the connection you created.

c. Select the Use MID server check box.

d. Select Update.

e. Set the Configure Mid Servers task to complete by selecting
Mark as Complete.

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

h. If required, configure the connections in the Configure
SolarWinds Modules section by selecting Configure.

i. When you're finished, close the window, and navigate back to
the guided setup.

j. Set the Configure SolarWinds Modules task to complete by
selecting Mark as Complete.

k. For the Test New Connections task, select Configure.

a. Select the name of the data source associated with the
newly created connection.

b. Select the Test Load 20 Records related link.

Note:   If the displayed completion code is Success,
then the sources are validated. But if the displayed
completion code is Error, then there is an error that you
must fix.

c. Navigate back to the guided setup, and set the Test
New Connections task to complete by selecting Mark as
Complete.

10. Set up scheduled import jobs.

a. On the Service Graph Connector for SolarWinds page, in the
Set up scheduled import jobs section, select the Configure the
scheduled import jobs task.

b. For the Configure the scheduled import jobs task, select
Configure.

c. Review the fields on the Scheduled Data Import form, which are
automatically set.

Scheduled Data Import form

Field
Description

Name
Name of the scheduled job.

Data source
Data source record that
defines the data to import.

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

Field
Description

Run as

Option to run the scheduled
job with the credentials of the
specified user.

Active

Option to activate the
scheduled job. Select this
option.

Concurrent Import

Function that loads the data
from multiple import sets.
The function then processes
and transforms the data
concurrently.

Partition Method
Partition method for the
concurrent import set.

Partition Size
Import set size for early
scheduling.

Execute pre-import script

Option to run a pre-import
script before the import is
performed.

Execute post-import script

Option to run a post-import
script after the import is
performed.

Application
Application containing this
record.

Run
Frequency of running the
import.

Conditional
Conditions under which this job
is executed.

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

Note:   All active SolarWinds scheduled jobs will run in
their specified order after the SG-Solarwinds Hardware
scheduled job runs. You can modify the Active setting for
each SolarWinds scheduled job as appropriate for your
integration.

d. Select Update if required, and then select Mark as Complete to
set the Set up scheduled import jobs task to complete.

Related tasks

• Configure Service Graph Connector for SolarWinds using SGC Central

Related concepts

• Service Graph Connector for SolarWinds

• Accessing the connection details of Service Graph Connector for
SolarWinds

• Configuring air gap connections for Service Graph Connector for
SolarWinds

Related reference

• CMDB classes targeted in Service Graph Connector for SolarWinds

## CMDB classes targeted in Service Graph Connector for
## SolarWinds

When you complete setting up the connection, you can configure the
integration to periodically pull data from Solarwinds. The data is saved in
tables that extend from the Configuration item [cmdb_ci] table.

The following attributes in the Availability Zone
[cmdb_ci_availability_zone] table are populated by collected data:

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

Attribute label
Attribute name

Name
name

Object ID
object_id

Relationships created for Availability Zone

Parent class
Relationship type
Child class

Availability Zone
[cmdb_ci_availability_
zone]

Contains::Contained
by

Cloud Subnet
[cmdb_ci_cloud_subn
et]

Availability Zone
[cmdb_ci_availability_
zone]

Contains::Contained
by

Cloud Network
[cmdb_ci_network]

The following attributes in the Cloud Key Pair [cmdb_ci_cloud_key_pair]
table are populated by collected data:

Attribute label
Attribute name

Object ID
object_id

Name
name

Relationship created for Cloud Key Pair

Parent class
Relationship type
Child class

Cloud Key Pair
[cmdb_ci_cloud_key_
pair]

Hosted on::Hosts

Logical Datacenter
[cmdb_ci_logical_dat
acenter]

The following attributes in the Cloud Network [cmdb_ci_network] table
are populated by collected data:

Attribute label
Attribute name

Name
name

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

Object ID
object_id

Relationships created for Cloud Network

Parent class
Relationship type
Child class

Cloud Network
[cmdb_ci_network]

Contains::Contained
by

Cloud Subnet
[cmdb_ci_cloud_subn
et]

Cloud Network
[cmdb_ci_network]
Hosted on::Hosts

Logical Datacenter
[cmdb_ci_logical_dat
acenter]

The following attributes in the Cloud Service Account
[cmdb_ci_cloud_service_account] table are populated by collected
data:

Attribute label
Attribute name

Account Id
account_id

Name
name

Object ID
object_id

Datacenter Type
datacenter_type

The following attributes in the Cloud Subnet [cmdb_ci_cloud_subnet]
table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

The following attributes in the Computer [cmdb_ci_computer] table are
populated by collected data:

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

Attribute label
Attribute name

CPU core count
cpu_core_count

CPU core thread
cpu_core_thread

CPU name
cpu_name

CPU speed (MHz)
cpu_speed

CPU manufacturer
cpu_manufacturer

Is Virtual
virtual

Relationships created for Computer

Parent class
Relationship type
Child class

Computer
[cmdb_ci_computer]

Virtualized
by::Virtualizes

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Computer
[cmdb_ci_computer]

Contains::Contained
by
Disk [cmdb_ci_disk]

The following attributes in the Disk [cmdb_ci_disk] table are populated by
collected data:

Attribute label
Attribute name

Model ID
model_id

Device ID
device_id

Name
name

Disk space (GB)
disk_space

Free disk space (GB)
free_space

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

Size
size

Size bytes
size_bytes

Computer
computer

Manufacturer
manufacturer

Volume serial number
volume_serial_number

Relationship created for Disk

Parent class
Relationship type
Child class

Disk [cmdb_ci_disk]
Reference
Computer
[cmdb_ci_computer]

The following attributes in the Hardware [cmdb_ci_hardware] table are
populated by collected data:

Attribute label
Attribute name

Model ID
model_id

Name
name

DNS Domain
dns_domain

Manufacturer
manufacturer

Serial number
serial_number

Class
sys_class_name

Default Gateway
default_gateway

Fully qualified domain name
fqdn

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

Relationships created for Hardware

Parent class
Relationship type
Child class

Hardware
[cmdb_ci_hardware]
Owns::Owned by
IP Address
[cmdb_ci_ip_address]

Hardware
[cmdb_ci_hardware]
Owns::Owned by

Network Adapter
[cmdb_ci_network_ad
apter]

The following attributes in the Hardware Type
[cmdb_ci_compute_template] table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Relationship created for Hardware Type

Parent class
Relationship type
Child class

Hardware Type
[cmdb_ci_compute_t
emplate]

Hosed on::Hosts

Logical Datacenter
[cmdb_ci_logical_dat
acenter]

The following attributes in the IIS Virtual Directory [cmdb_ci_iisdirectory]
table are populated by collected data:

Attribute label
Attribute name

Alias
alias

Installation directory
install_directory

Name
name

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

Relationship created for IIS Virtual Directory

Parent class
Relationship type
Child class

IIS Virtual Directory
[cmdb_ci_iisdirectory]
Runs on::Runs
Hardware
[cmdb_ci_hardware]

The following attributes in the Image [cmdb_ci_os_template] table are
populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Relationship created for Image

Parent class
Relationship type
Child class

Image
[cmdb_ci_os_templat
e]

Hosted on::Hosts

Logical Datacenter
[cmdb_ci_logical_dat
acenter]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data:

Attribute label
Attribute name

IP Address
ip_address

Netmask
netmask

IP version
ip_version

Nic
nic

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

The following attributes in the Logical Datacenter
[cmdb_ci_logical_datacenter] table are populated by collected data:

Attribute label
Attribute name

Name
name

Region
region

Class
sys_class_name

Relationships created for Logical Datacenter

Parent class
Relationship type
Child class

Logical Datacenter
[cmdb_ci_logical_dat
acenter]

Contains::Contained
by

Availability Zone
[cmdb_ci_availability_
zone]

Logical Datacenter
[cmdb_ci_logical_dat
acenter]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

The following attributes in the Microsoft iis Web Server
[cmdb_ci_microsoft_iis_web_server] table are populated by collected
data:

Attribute label
Attribute name

Name
name

Running process command
running_process_command

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

Attribute label
Attribute name

Version
version

Operational status
operational_status

PID
pid

Install Status
install_status

Type
type

Relationships created for Microsoft iis Web Server

Parent class
Relationship type
Child class

Microsoft iis Web
Server
[cmdb_ci_microsoft_iis
_web_server]

Contains::Contained
by

IIS Virtual Directory
[cmdb_ci_iisdirectory]

Microsoft iis Web
Server
[cmdb_ci_microsoft_iis
_web_server]

Runs on::Runs
Hardware
[cmdb_ci_hardware]

The following attributes in the MS SQL DataBase
[cmdb_ci_db_mssql_database] table are populated by collected data:

Attribute label
Attribute name

Data Base
database

Name
name

Relationship created for MS SQL DataBase

Parent class
Relationship type
Child class

MS SQL DataBase
[cmdb_ci_db_mssql_d
atabase]

Runs on::Runs
Hardware
[cmdb_ci_hardware]

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

The following attributes in the MSFT SQL Instance
[cmdb_ci_db_mssql_instance] table are populated by collected data:

Attribute label
Attribute name

Edition
edition

Instance Name
instance_name

Name
name

Operational status
operational_status

Service pack
service_pack

Install Status
install_status

Relationships created for MSFT SQL Instance

Parent class
Relationship type
Child class

MSFT SQL Instance
[cmdb_ci_db_mssql_in
stance]

Runs on::Runs
Hardware
[cmdb_ci_hardware]

MSFT SQL Instance
[cmdb_ci_db_mssql_in
stance]

Contains::Contained
by

MS SQL DataBase
[cmdb_ci_db_mssql_d
atabase]

The following attributes in the Network Adapter
[cmdb_ci_network_adapter] table are populated by collected data:

Attribute label
Attribute name

DHCP Enabled
dhcp_enabled

Netmask
netmask

Configuration Item
cmdb_ci

Mac manufacturer
mac_manufacturer

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

Attribute label
Attribute name

MAC Address
mac_address

Name
name

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
Hardware
[cmdb_ci_hardware]

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

Attribute label
Attribute name

Manufacturer
manufacturer

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

The following attributes in the Software Instance
[cmdb_software_instance] table are populated by collected data:

Attribute label
Attribute name

Install date
install_date

Installed on
installed_on

Name
name

Relationships created for Software Instance

Parent class
Relationship type
Child class

Software Instance
[cmdb_software_insta
nce]

Reference
Computer
[cmdb_ci_computer]

Software Instance
[cmdb_software_insta
nce]

Reference
Hardware
[cmdb_ci_hardware]

The following attributes in the Storage Volume
[cmdb_ci_storage_volume] table are populated by collected data:

Attribute label
Attribute name

Object ID
object_id

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

Attribute label
Attribute name

Volume ID
volume_id

Name
name

Size bytes
size_bytes

Relationship created for Storage Volume

Parent class
Relationship type
Child class

Storage Volume
[cmdb_ci_storage_vol
ume]

Hosted on::Hosts

Logical Datacenter
[cmdb_ci_logical_dat
acenter]

The following attributes in the Virtual Machine Instance
[cmdb_ci_vm_instance] table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

IP Address
ip_address

State
state

Relationships created for Virtual Machine Instance

Parent class
Relationship type
Child class

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Hosted on::Hosts

Logical Datacenter
[cmdb_ci_logical_dat
acenter]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Provisioned
From::Provisioned

Image
[cmdb_ci_os_templat
e]

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

Parent class
Relationship type
Child class

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Provisioned
From::Provisioned

Hardware Type
[cmdb_ci_compute_t
emplate]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Use End Point To::Use
End Point From

Storage Volume
[cmdb_ci_storage_vol
ume]

Related concepts

• Service Graph Connector for SolarWinds

## Accessing the connection details of Service Graph
## Connector for SolarWinds

You can access the connection details of the Service Graph Connector
for SolarWinds in a single view using the common connection
framework (CCF) included within the Integration Commons for CMDB
(sn_cmdb_int_util) store app.

With the CCF, you can access all the connections used by the Service
Graph Connector for SolarWinds. The connection details include the
connection alias, connection properties, data sources, and scheduled
data imports associated with a connection. You can also test the
connection. For more information, see Accessing the connection details
of Service Graph Connectors.

Access the details of a SolarWinds connection

Access the details of a SolarWinds connection configured for the Service
Graph Connector for SolarWinds.

Before you begin

Role required: admin

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

Procedure

1. Navigate to All > Service Graph Connectors > SolarWinds >
Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

3. On the Service Graph Connections page, view the connection
details such as the connection name, alias, and data sources.

4. Select a related list to view further details of the connection.

5. (Optional) Select the Test Connection related link to test the
connection.

## Configuring air gap connections for Service Graph
## Connector for SolarWinds

Air gap connections for the Service Graph Connector for SolarWinds
enable safe and controlled data transfer without compromising security.

An air gap is a security measure that involves isolating a computer
or network and preventing it from establishing an external connection.
Air-gapped networks keep critical systems secure by isolating them
from external connections to protect the systems from cyber threats.
Air gap connections for the Service Graph Connector for SolarWinds
facilitate controlled data exchange between the air-gapped networks
and external systems while maintaining the integrity of the air-gapped
environment.

Air gap connections are available from version 2.5.0 of the Service Graph
Connector for SolarWinds. You can add either regular data sources or air
gap data sources during the guided setup. To access the guided setup,
see Configure Service Graph Connector for SolarWinds.

Perform the following sequence of tasks to configure the air gap solution
before you add air gap data sources during the guided setup:

1. Configure air gap solution for Service Graph Connector for
SolarWinds in a high-secure server

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

2. Configure air gap solution for Service Graph Connector for
SolarWinds in a low-secure server

3. Configure air gap solution for Service Graph Connector for
SolarWinds in a ServiceNow instance

4. Perform a test data load for the air gap solution for Service Graph
Connector for SolarWinds

5. Perform a full data load for the air gap solution for Service Graph
Connector for SolarWinds

## Configure air gap solution for Service Graph
## Connector for SolarWinds in a high-secure server

Configure the air gap solution for the Service Graph Connector for
SolarWinds in your high-secure server.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > SolarWinds > Setup >
Add Multiple Instances > Add Another Connection.

2. Download the SgSolarWindsHighSecureSetup.ps1 and
GetSolarWindsData.ps1 PowerShell scripts from the link provided in
the Add Another Connection section.

3. Log on to your high-secure server.

4. Create a SolarWinds directory.

All the configurations required for the air gap solution are created in
the SolarWinds directory.

5. Copy the GetSolarWindsData.ps1 and
SgSolarWindsHighSecureSetup.ps1 PowerShell scripts that you
downloaded in step 2 to the SolarWinds directory.

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

6. Start a PowerShell session, and run the
SgSolarWindsHighSecureSetup.ps1 script to generate the JSON
configuration file that is used by the GetSolarWindsData.ps1 script.

a. At the prompt, enter the path for the SolarWinds directory that
you created in step 4.

b. Enter a name for the configuration file, or press the Return key to
accept the default value.

c. Enter the values for the global properties, or press the Return key
to accept the default values.

• npmInstalled: Set the value to true if the module is installed
on the SolarWinds instance. Set the value to false if the
module isn't installed on the SolarWinds instance.

• samInstalled: Set the value to true if the module is installed
on the SolarWinds instance. Set the value to false if the
module isn't installed on the SolarWinds instance.

• pageSize: Enter the number of records to be fetched in a
SolarWinds API call.

• endpoint: Update the Host field with the host name for your
SolarWinds instance.

• port: Specify the port on which the SolarWinds instance
allows API calls.

• credentialsPath: Specify the location to store the SolarWinds
credentials XML file.

• logDirectory: Specify the location to store the log file from the
GetSolarWindsData.ps1 script.

d. Specify names for the data source data directories, or press the
Return key to accept the default values.

The directories are created if they don’t already exist.

e. Enter the SolarWinds credentials.

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

Note:   You can either use Windows credential manager
to store the user name and password, or implement
your own mechanism for storing the credentials. The
GetSolarWindsData.ps1 script must have access to the
credentials to trigger REST calls.

f. Exit the PowerShell session.

7. Provide write and delete permissions for the SolarWinds directory and
the child directories.

You must provide delete permissions for old records to be cleaned
up.

Related tasks

• Configure air gap solution for Service Graph Connector for SolarWinds
in a low-secure server

## Configure air gap solution for Service Graph
## Connector for SolarWinds in a low-secure server

Configure the air gap solution for the Service Graph Connector for
SolarWinds in your low-secure server after you finish the configuration in
your high-secure server.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > SolarWinds > Setup >
Add Multiple Instances > Add Another Connection.

2. Download the SgSolarWindsLowSecureSetup.ps1 PowerShell script
from the link provided in the Add Another Connection section.

3. Log on to your low-secure server.

4. Create a SolarWinds directory.

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

All the configurations required for the air gap solution are created in
the SolarWinds directory.

5. Copy the SgSolarWindsLowSecureSetup.ps1 PowerShell script that
you downloaded in step 2 to the SolarWinds directory.

6. Start a PowerShell session, and run the
SgSolarWindsLowSecureSetup.ps1 script.

a. At the prompt, enter the path for the SolarWinds directory that
you created in step 4.

b. Specify names for the data source data directories, or press the
Return key to accept the default values.

The directories are created if they don’t already exist.

c. Exit the PowerShell session.

7. Provide read and delete permissions for the SolarWinds directory.

Related tasks

• Configure air gap solution for Service Graph Connector for SolarWinds
in a ServiceNow instance

## Configure air gap solution for Service Graph
## Connector for SolarWinds in a ServiceNow instance

Configure the air gap solution for the Service Graph Connector for
SolarWinds in your ServiceNow instance after you finish the configuration
in your high-secure and low-secure servers.

Before you begin

Role required: admin

Procedure

1. Navigate to All > System Definition > Plugins, and download the
ServiceNow IntegrationHub Action Step – PowerShell plugin.

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

2. Navigate to All > Service Graph Connectors > SolarWinds > Setup >
Add Multiple Instances > Add Another Connection.

3. Select the Add Another Connection task, and then select Configure.

4. In the Select Data Source Type section, select Airgap Data Sources,
and then select Add Connection.

5. Fill in the fields on the Create Connection form.

Create Connection form

Field
Description

Connection Name
Display name for the
connection.

MID Server

Name of the MID Server that
you deployed in your low-secure
server.

You can obtain the sys_id of the
MID Server from the ecc_agent
table.

Parent Directory

Path of the SolarWinds directory
where the data is stored in your
low-secure server.

See Configure air gap solution
for Service Graph Connector
for SolarWinds in a low-secure
server.

Archive Data After Retrieval
Option to archive data after
retrieval.

Archive Path [Optional]

Folder where the data is to be
archived if the Archive Data
After Retrieval check box is
selected.

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

6. Select Create Connection.

Related tasks

• Perform a test data load for the air gap solution for Service Graph
Connector for SolarWinds

## Perform a test data load for the air gap solution for
## Service Graph Connector for SolarWinds

After you configure the air gap solution for the Service Graph Connector
for SolarWinds, test whether the SolarWinds endpoint is accessible from
the high-secure server.

Before you begin

Role required: admin

Procedure

1. Navigate to the SolarWinds directory in your high-secure server.

2. Run the .\GetSolarWindsData.ps1 -configFilePath CONFIG_PATH
script, where CONFIG_PATH is the location of the JSON configuration
file that is generated by the setup script.
The script accesses the SolarWinds Hardware API, and creates a
sample file in the Hardware directory and a log file in the Logs
directory.

• If the test data load is successful, the log file contains the Test
Load status SUCCESS! message.

• If the test data load fails, the log file contains the Error occurred
while processing hardware StatusCode 403 message.

If the test data load fails, verify the SolarWinds user credentials
and ensure that the user has the required permissions to pull the
data from SolarWinds. If the credentials need to be updated,
you must run the SgSolarWindsHighSecureSetup.ps1 PowerShell
script again. See Configure air gap solution for Service Graph
Connector for SolarWinds in a high-secure server.

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

Related tasks

• Perform a full data load for the air gap solution for Service Graph
Connector for SolarWinds

## Perform a full data load for the air gap solution for
## Service Graph Connector for SolarWinds

After you verify that the test data load for the air gap solution for the
Service Graph Connector for SolarWinds is successful, you can perform a
full data load.

Before you begin

Role required: admin

Procedure

1. Navigate to the SolarWinds directory in your high-secure server.

2. Run the .\GetSolarWindsdata.ps1 -completeLoad $true
-configFilePath CONFIG_PATH script, where CONFIG_PATH is the
location of the JSON configuration file that is generated by the setup
script.

By default, the existing files in the data source data directories
are deleted each time the .\GetSolarWindsdata.ps1 -completeLoad
$true -configFilePath CONFIG_PATH script is run. You can add the
-clean $false parameter to the script if you want to retain the existing
files.

The script fetches data from all the SolarWinds APIs, and stores the
data in the respective directories.

3. After the data is loaded in your high-secure server, transfer the data
to your low-secure server using a method of your choice, such as
SFTP.

4. Verify that the data is loaded in your low-secure server.

5. Set the full data load job (using the .\GetSolarWindsdata.ps1
-completeLoad $true -configFilePath CONFIG_PATH script) to run on

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

a schedule based on that of the Scheduled Import Job on your
Service Graph Connector for SolarWinds instance.

6. Set the data transfer job (from your high-secure server to your low-
secure server) on a schedule based on that of the Scheduled Import
Job on your Service Graph Connector for SolarWinds instance.

7. Test the air gap connection in your ServiceNow instance.

a. Navigate to All > Service Graph Connectors > SolarWinds >
Connections.

b. Select the air gap connection that you created.

c. Select the Test Connection related link.
When the connection is successful, the Status field is set to
Success. If the connection fails, follow the suggestions for
remediation.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

46

Zurich ServiceNow AI Platform Capabilities

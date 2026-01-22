# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_microsoft_sccm_2026-01-16-13-12-39

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_microsoft_sccm_2026-01-16-13-12-39.pdf*

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

## Service Graph Connector for Microsoft SCCM

Use the Service Graph Connector for Microsoft SCCM to pull data
from Microsoft System Center Configuration Manager (SCCM) into your
ServiceNow instance.

The Service Graph Connector for Microsoft SCCM (SG-SCCM) imports
SCCM data into the ServiceNow® Configuration Management Database
(CMDB) application. The integration does not write to the SCCM
database and supports the Microsoft Endpoint Configuration Manager
(MECM). The integration pulls data from computers, processors,
operating systems, disks, networks, and software.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported versions

• Supported Microsoft SCCM/MECM versions:

• 2409

• 2403

• Supported ServiceNow versions:

• Xanadu

• Yokohama

• Zurich

Use cases

The following ServiceNow applications have features that interact with
the Service Graph Connector:

• IT Operations Management (ITOM) Visibility

• Ability to get visibility into your infrastructure.

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

• Detailed hardware and software inventory tracking. The tracking can
be done with or without Software Asset Management (SAM).

• Ability to detect delta changes for efficient incremental imports from
SCCM to the ServiceNow AI Platform.

• IT Service Management (ITSM)

• Incidents, problems, and changes on discovered configuration items
(CI).

• Automatic device ownership assignment.

• Software Asset Management (SAM) and IT Asset Management (ITAM)

• Tight integration with Software Asset Management Professional and
client software distribution workflows.

• Inventory Software package and installation tracking.

• Software Usage tracking.

• License reclamation by detecting removed software.

• Support for software editions, normalizing publisher information, and
normalizing product Information.

• Support for SCCM Asset Intelligence.

Important information for upgrading Service Graph Connector for
Microsoft SCCM

After you've installed the latest version of the Service Graph Connector
for Microsoft SCCM, ensure that you have removed the last_run_datetime
field value from the Data Source [sys_data_source] table for the SCCM
data sources.

Configuring a connection for the connector

You can configure a connection for the connector by using the
SGC Central view in the CMDB Workspace. The view enables you to
discover and install connectors, and then effectively manage the full life
cycle of creating, editing, monitoring, and debugging connections. To
configure the connector using SGC Central, see Configure Service Graph
Connector for Microsoft SCCM using SGC Central.

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

Important:   Unless there are configuration issues, use the SGC
Central view in the CMDB Workspace to configure the connection
for the connector, as the guided setup method is being deprecated.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration,
or a specific integration run. For more details about monitoring Microsoft
SCCM integrations in the CMDB Integrations Dashboard, see Using the
CMDB Integrations Dashboard.

Data mapping

Data from the SCCM data sources is mapped and transformed into
the ServiceNow CMDB Configuration Item (CI) class definitions using the
Robust Transform Engine (RTE). Data is inserted into the ServiceNow®
CMDB using the Identification and Reconciliation Engine (IRE).

The SCCM data sources include the following:

• SG-SCCM Computer Identity
You can see the following data if it is available in SCCM:

• Asset Tag. If the Asset Tag data is available, the mapping can be
optionally enabled via the guided setup.

• Assigned

• DNS Domain

• SG-SCCM Computer OU. This data source imports data about the
Organizational Unit (OU) name. The data is stored in the SG-SCCM
Computer Related [sn_sccm_integrate_sccm_2019_computer_related]
table. To add the view, open the computer record, click the top
header, and select View > SG-SCCM Computer Related.

• SG-SCCM Disk

• SG-SCCM Last Discovered Update. This data source will run at the end
of the import schedules to update the last_discovered date on the
Computer CI. The source will conduct a full pull of all the computers

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

and bring in only the ResourceID and the LastHWScan columns to
update the CMDB Computer table.

• SG-SCCM Network

• SG-SCCM Operating System

• SG-SCCM Processor

• SG-SCCM Removed Software. Ensure the Use last run datetime option is
cleared for every run.

• SG-SCCM Removed Software AI. Ensure the Use last run datetime
option is cleared for every run.

• SG-SCCM Software

• SG-SCCM Software AI

Note:   If you have Asset Intelligence on your Microsoft SCCM
instance, you have to run SG-SCCM Removed Software AI and
SG-SCCM Software AI. If you do not have Asset Intelligence on
your instance, you have to run SG-SCCM Removed Software and
SG-SCCM Software.

When you complete setting up the connection, you can configure the
integration to periodically pull data from SCCM. The data is loaded into
staging tables and then inserted into the following target tables:

• CI Relationship [cmdb_rel_ci]

• Computer [cmdb_ci_computer] (required)

• Disk [cmdb_ci_disk]

• IP address [cmdb_ci_ip_address]

• Network Adapter [cmdb_ci_network_adapter]

• Serial Number [cmdb_serial_number]

• Software Installation [cmdb_sam_sw_install] (If the SAM application is
installed.)

• Software Instance [cmdb_software_instance] (If the SAM application is
not installed.)

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

• Software [cmdb_ci_spkg] (If the SAM application is not installed.)

• Software Usage [samp_sw_usage]

For more information on where data is saved when pulling data from
a Microsoft SCCM application, see CMDB classes targeted in Service
Graph Connector for Microsoft SCCM.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

Resolving the missing IP address or MAC address issue

By default, network adapters that are missing an IP address or MAC
address are not imported. To include these network adapters in the
import, do the following:

1. Navigate to Service Graph Connector for Microsoft SCCM > Data
Sources.

2. Select SG-SCCM Network.

3. Remove the where clause from the SQL statement field.

Additional resources

• How do I configure the SG-SCCM Service Graph Connector? article on
the ServiceNow Community site

• Service Graph Connector for Microsoft SCCM - FAQ and
Troubleshooting blog post on the ServiceNow Community site

• Service Graph Connector for Microsoft SCCM 3.0 Setup Guidelines
[KB1001248] article in the Now Support Knowledge Base

• Support for Removed Software functionality in Service Graph
Connector for SCCM integration blog post on the ServiceNow
Community site

Related concepts

• Service Graph Connectors

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

## Configure Service Graph Connector for Microsoft
## SCCM using SGC Central

Use the playbook available with the SGC Central application to set up
the Service Graph Connector for Microsoft SCCM for pulling in Microsoft
SCCM data into the CMDB.

Before you begin

Install Service Graph Connector for Microsoft SCCM version 3.5.0 or later
from the ServiceNow Store. For ServiceNow Store installation steps, see
Install a ServiceNow Store application.

Air gap connections are available from version 3.7.0 of the Service
Graph Connector for Microsoft SCCM. You can add either standard data
sources or air gap data sources. Before you set up air gap data sources,
you must configure the air gap solution for the Service Graph Connector
for Microsoft SCCM in your high-secure server and low-secure server. See
Configuring air gap connections for Microsoft SCCM.

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

4. On the Create connection window, select the Microsoft SCCM
connector type, and then select Create connection.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

Note:   This step is required only during the first-time setup. See
Perform initial setup tasks when creating a connection in SGC
Central.

6. Select an air gap template or a template that matches the
credentials for establishing a Java Database Connectivity (JDBC)
connection to the SCCM database.

a. In the Setup stage of the playbook, select the Select alias
template activity.

b. Select a template.

• SCCM JDBC Connection Credentials: Select to use a user
name and password to establish a JDBC connection to the
SCCM database.

• SCCM Air Gap: Select to use an air gap connection if you're
working with restricted environments that don't have direct
internet access.

• SCCM JDBC Conn Cred (Integrated Auth): Select to
use Windows JDBC-integrated authentication, which uses
domain credentials, for authenticating a JDBC connection
to the SCCM database.

c. Select Continue.

If you selected either SCCM JDBC Connection Credentials or
SCCM JDBC Conn Cred (Integrated Auth) in step 6.b, proceed
to step 8.

7. Download and run the PowerShell scripts to set up an air gap
connection.

The PowerShell Script Download activity appears only when you
select SCCM Air Gap as the template in step 6.b.

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

Note:   Before you add an air gap connection, you must
configure the air gap solution for the Service Graph Connector
for Microsoft SCCM in your high-secure and low-secure servers.
See Configuring air gap connections for Microsoft SCCM.

a. In the Setup stage of the playbook, select the PowerShell Script
Download activity.

b. Select Download Airgap Scripts.

c. Run the PowerShell scripts.

d. After configuring the air gap connection, select the I have read
the instructions and executed the scripts accordingly check box.

e. Select Continue.

8. Enter connection details and test the API connection for importing
Microsoft SCCM data.

a. In the Setup stage of the playbook, select the Create and test
connection activity.

b. On the form, fill in the fields.

• For SCCM JDBC Connection Credentials and SCCM JDBC
Conn Cred (Integrated Auth) templates:

Create and test connection form

Field
Description

Connection name

Name to identify the
Microsoft SCCM connection
record.

For example, SG-SCCM
connection.

Query timeout

Number of seconds the
JDBC driver waits for a query
to complete.

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

Field
Description

0 indicates no timeout. If
the timeout is exceeded,
the integration considers the
JDBC result inaccessible and
marks the result as an error.

Connection timeout

Number of seconds before
the MID Server connection
cache pool closes the
connection and removes
the connection.

0 indicates no timeout.

Host

Network address of the
server where the Microsoft
SQL Server database is
located.

Database name

Name of the Microsoft SQL
Server database that SCCM
uses.

Override default port

Custom port of the Microsoft
SQL Server instance.

The default port for Microsoft
SQL Server is 1433

Instance name
Microsoft SQL Server
instance.

MID Server
MID Server for the
connection.

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

Note:   It’s required
to select a MID
Server for an Integrated
Authentication
connection.

For the SCCM JDBC
Connection Credentials
option, this field appears
only when you select
the Use MID Server
check box.

Note:   The following fields appear only when you select
the SCCM JDBC Connection Credentials template in
step 6.

Format

JDBC driver used for
connecting to the SCCM
database.

SCCM uses Microsoft SQL
Server as its database
backend. This field is
automatically set to
com.microsoft.sqlserver.jdbc
.SQLServerDriver. Leave the
field value as is.

Username
User name for connecting to
the JDBC server.

Password
Password for the JDBC
server.

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

Use MID Server

Option to use the MID Server
for accessing the JDBC
server.

• For the SCCM Air Gap template:

Create and test connection form

Field
Description

Connection name
Display name for the
connection.

Parent directory

Path of the Microsoft SCCM
directory where the data
is stored in your low-secure
server.

Archive data after retrieval
Option to archive data after
retrieval.

Archive path [Optional]

Folder where the data is to
be archived if the Archive
data after retrieval check
box is selected.

MID server

Name of the MID Server that
you deployed in your low-
secure server.

See Configure air gap
solution for Microsoft SCCM
in a low-secure server.

c. Select Create and test connection.

d. Once the connection test is complete, select Continue.

9. (Optional) Configure the connection and connector properties to
map attributes and manage data imports.

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

Note:   To skip this step, select Continue for the Configure
properties activity.

a. In the Setup stage of the playbook, select the Configure
properties activity.

b. To map the asset tags from Microsoft SCCM to the asset tag
attribute in the Computer [cmdb_ci_computer] class, in the
Connection properties section of the Configure properties page,
select the Map asset tags check box.

c. To avoid creating duplicate records in the CMDB Disks
[cmdb_ci_disk] table when the Discovery application is running,
in the Connector properties section of the Configure properties
page, select the Avoid creating duplicate records check box.

d. To set the import disk name to the format starting with Disk
#[disknumber], in the Connector properties section of the
Configure properties page, select the Transform disk name to
disk number check box.
Where the disknumber is the number extracted from the disk
name

e. Select Continue.

10. (Optional) Modify the SQL statement for a data source.

Note:   To skip this step, select Skip for the Customize data source
SQL statement activity.

a. In the Setup stage of the playbook, select the Customize data
source SQL statement activity.

b. Double-click (or use the keyboard shortcut) the Custom SQL
statement column value for a data source and enter the custom
SQL statement.

c. Repeat the step 10.b for each data source where you want to
modify the SQL statement.

d. Select Mark Complete.

11. Configure the import schedules to import data at regular intervals.

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

a. In the Setup stage of the playbook, select the Configure import
schedule activity.

b. Expand the Parent scheduled data import within the Import
schedules list to select the Connection Name-SCCM Computer
Identity import schedule.

c. Select the Active check box, and then fill in the run schedule and
time details.

For more information, see Schedule a data import.

d. Select Save.
Alternatively, select Execute Now to execute the import schedule
immediately.

e. Select Continue.

12. In the Setup stage of the playbook, select the Confirm connection
creation activity to verify whether the connection was created.

What to do next

Select View all connections to review the connection details. The
created connection appears in the Installed connections list.

Related tasks

• Enable Software Editions in Service Graph Connector for Microsoft
SCCM

Related concepts

• Service Graph Connector for Microsoft SCCM

• Accessing the connection details of Service Graph Connector for
Microsoft SCCM

• Configuring air gap connections for Microsoft SCCM

Related reference

• CMDB classes targeted in Service Graph Connector for Microsoft SCCM

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

## Configure Service Graph Connector for Microsoft
## SCCM using the guided setup

Set up and validate data source connection credentials to import
Microsoft SCCM data into your CMDB.

Before you begin

Important:   Unless there are configuration issues, use the SGC
Central view in the CMDB Workspace to configure the connection
for the connector, as the guided setup method is being deprecated.

Confirm that you are in the Service Graph Connector for Microsoft SCCM
application scope by using the application picker.

Note:   If you’re currently using a version of the Microsoft SCCM
plugin, see Upgrade from the legacy SCCM plugin to the Service
Graph Connector for Microsoft SCCM.

Dependencies and requirements:

• The Integration Commons for CMDB store app, which is automatically
installed.

• The CMDB CI class models store app, which is automatically installed.
See CMDB CI Class Models.

• Integration - JDBC (com.snc.integration.jdbc)

• Windows MID Server required for access to the SCCM environment.

To access Microsoft SCCM data, you must have appropriate access to
the Microsoft SCCM database. You must have sufficient credentials to
query the SQL Server that contains the Microsoft SCCM database. You
must do the following:

1. Create a SQL Server account to connect to the Microsoft SCCM
database on the MID Server to use the data sources.

2. Connect to your Microsoft SCCM SQL Server and configure the
following:

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

a. Add a new login user name and password for SQL
authentication.

b. Choose the Microsoft SCCM database that ServiceNow data
sources will connect to.

c. Assign the db_datareader role membership to the Microsoft
SCCM user.

Note:   If you have the Service Graph Connector for Microsoft
SCCM version 2.1.6 or earlier versions installed in your production
environment, contact Customer Service and Support for additional
steps to remove the SCCM Discovery Source from being included
when calculating the subscription unit consumption.

Starting with Service Graph Connector for Microsoft SCCM version
3.0.4, support for multi-instance is introduced, enabling Service Graph
Connector for Microsoft SCCM to connect to and import data from
multiple Microsoft SCCM instances. This feature involves dynamically
creating data sources and scheduled imports, requiring the granting of
additional permissions. For more information about how to complete
these steps, see Service Graph Connector for Microsoft 3.0 Setup
Guidelines [KB1001248] in Now Support.

Air gap connections are available from version 3.7.0 of the Service
Graph Connector for Microsoft SCCM. You can add either standard data
sources or air gap data sources by using SGC Central. Before you set
up air gap data sources, you must configure the air gap solution for the
Service Graph Connector for Microsoft SCCM in your high-secure server
and low-secure server. See Configuring air gap connections for Microsoft
SCCM.

Role required: SGC-Admin (sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to run background scripts and
to provide table-level access to the SGC-Admin user.

Procedure

1. Navigate to All > Service Graph Connectors > SCCM > Setup.

2. On the Getting Started page, select Get Started.

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

3. On the Service Graph Connector for Microsoft SCCM page, in the
Configure Data source and Scheduled data import access section,
select the task Configure Data source access.

4. Update the data source access to enable creating data sources and
scheduled data imports for a new connection in the Service Graph
Connector for Microsoft SCCM.

a. For the Configure Data source access task, select Configure.

b. Select the Global application scope by using the application
picker.

c. In the Application Access related list, select the Can create, Can
update, and Can delete check boxes, if not already selected.

d. Select Update to close the tab and return to the guided setup.

e. Modify the application scope again to Service Graph Connector
for Microsoft SCCM by using the application picker.

f. Set the Update Data Source Access task to complete by
selecting Mark as Complete.

g. Repeat the steps 4.b to 4.e for the Update Scheduled
data import access task with the Scheduled data import
[scheduled_data_set] table and set the task to complete by
selecting Mark as Complete.

5. Configure the authentication credentials and configuration used for
connecting to the Microsoft SCCM database.

a. Use a user name and password to establish a JDBC connection
to the SCCM database.

Note:   Perform this step only when you want to use a
user name and password to establish a JDBC connection.
Otherwise, select Skip to skip the step.

a. For the Configure connection task in the Configure the
connection section, select Configure.

b. Configure the connection.

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

• To configure the connection available by default, select
Configure for the SCCM JDBC Connection Credentials
connection.

• To create another connection, select Add Connection.

Note:   You can create multiple connections
by selecting Add Connection. If not redirected
to the connection setup, on the Workflow
Studio Integrations page search for SCCM JDBC
Connection Credentials to modify the default
connection or add another connection.

c. On the form, fill in the fields.

Configure Connection or Create Connection form

Field
Description

Connection Information

Connection name

Name to identify the
Microsoft SCCM connection
record.

For example, SG-SCCM
connection.

Query timeout

Number of seconds the
JDBC driver waits for a query
to complete.

0 indicates no timeout. If
the timeout is exceeded,
the integration considers the
JDBC result inaccessible and
marks the result as an error.

Connection timeout

Number of seconds before
the MID Server connection
cache pool closes the

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

connection and removes
the connection.

0 indicates no timeout.

Format

JDBC driver used for
connecting to the Microsoft
SCCM database.

Microsoft SCCM uses
Microsoft SQL Server as its
database backend. This field
is automatically set to
com.microsoft.sqlserver.jdbc
.SQLServerDriver. Leave the
field value as is.

Host

Network address of the
server where the Microsoft
SQL Server database is
located.

Database name

Name of the Microsoft
SQL Server database that
Microsoft SCCM uses.

Override default port

Custom port of the Microsoft
SQL Server instance.

The default port for Microsoft
SQL Server is 1433

Instance name
Microsoft SQL Server
instance.

Use MID Server

Option to use the MID Server
for accessing the JDBC
server.

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

MID Server

MID Server for the
connection.

Note:   It’s required
to select a MID
Server for an Integrated
Authentication
connection.

For the SCCM JDBC
Connection Credentials
option.

Credential Information

Username
User name for connecting to
the JDBC server.

Password
Password for the JDBC
server.

d. Save your changes.

• For the default connection, select Configure Connection.

• For a new connection, select Create Connection.

e. Navigate back to the guided setup and set the Configure
connection task to complete by selecting Mark as Complete.

b. Use Windows JDBC-integrated authentication, which uses
domain credentials, for authenticating a JDBC connection to the
SCCM database.

Note:   Perform this step if you need the JDBC connection
with integrated authentication. Otherwise, select Skip to skip
the step.

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

a. For the Configure connection (Integrated authentication)
task in the Configure the connection section, select
Configure.

b. Configure the connection.

• To configure the connection available by default, select
Configure for the SCCM JDBC Conn Cred (Integrated
Auth) connection.

• To create another connection, select Add Connection.

Note:   You can create multiple connections
by selecting Add Connection. If not redirected
to the connection setup, on the Workflow Studio
Integrations page section search for SCCM JDBC
Conn Cred (Integrated Auth) to modify the default
connection or add another connection.

c. On the form, fill in the fields.

Configure Connection or Create Connection form

Field
Description

Connection name

Name to identify the
Microsoft SCCM connection
record.

Query timeout

Number of seconds the
JDBC driver waits for a query
to complete.

0 indicates no timeout. If
the timeout is exceeded,
the integration considers the
JDBC result inaccessible and
marks the result as an error.

Connection timeout

Number of seconds before
the MID Server connection
cache pool closes the

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

connection and removes
the connection.

0 indicates no timeout.

Host

Network address of the
server where the Microsoft
SQL Server database is
located.

Database name

Name of the Microsoft
SQL Server database that
Microsoft SCCM uses.

Override default port

Custom port of the Microsoft
SQL Server instance.

The default port for Microsoft
SQL Server is 1433

Instance name
Microsoft SQL Server
instance.

MID Server

MID Server for the
connection.

Note:   It’s required
to select a MID
Server for an Integrated
Authentication
connection.

For the SCCM JDBC
Connection Credentials
option.

d. Save your changes.

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

• For the default connection, select Configure Connection.

• For a new connection, select Create Connection.

e. Navigate back to the guided setup and set the Configure
connection (Integrated authentication) task to complete by
selecting Mark as Complete.

6. Configure the connection and connector properties to map
attributes and manage data imports.

a. (Optional) Enable mapping asset tags from Microsoft SCCM to
the asset tag attribute in the Computer [cmdb_ci_computer]
class.

a. For the Configure Connection Properties task in the Configure
Data Source and Scheduled Data Import section, select
Configure.

b. In the Name column, select the connection.

c. In the Service Graph Connection Properties related list, select
asset_tag in the Property column.

d. In the Value field, enter true to enable mapping asset tags.

e. Select Update.

f. Navigate back to guided setup and set the Configure
Connection Properties task to complete by selecting Mark
as Complete.

b. Test the Computer Identity data source to verify that all data
sources are properly connected.

a. For the Validate Data Sources task in the Configure Data
Source and Scheduled Data Import section, select Configure.

b. In the Name column, select the Computer Identity data
source associated with the connection.

c. Select Test Load 20 Records.

d. When the State field is set to Complete and the Completion
code field is set to Success, select the Return to data source
link.

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

e. Navigate back to guided setup and set the Validate Data
Sources task to complete by selecting Mark as Complete.

c. Ensure that all data from the Computer Identity source is
imported without the date time filtering during the next test load.

a. For the Reset 'Last run datetime' in test load data source task
in the Configure Data Source and Scheduled Data Import
section, select Configure.

b. In the Name column, select the Computer Identity data
source associated with the connection.

c. Clear the Use last run datetime check box.

d. Select Update.

e. Navigate back to guided setup and set the Reset 'Last run
datetime' in test load data source task to complete by
selecting Mark as Complete.

7. (Optional) Configure the process for importing disk data when the
Discovery application is running.

a. Avoid creating duplicate records in the CMDB Disks
[cmdb_ci_disk] table.

Note:   You can avoid creating duplicate records
in the CMDB Disks [cmdb_ci_disk] table when the
Discovery application is running by configuring the
sn_sccm_integrate.sccm_disks_managed property and
setting its value to true. By default, the property value is set
to false.

a. For the Configure Disk Data Imports task in the Configure Disk
Data Imports section, select Configure.

b. On the System Property page, set the value of the
sn_sccm_integrate.sccm_disks_managed property to true.

c. Select Update.

d. Set the Configure Disk Data Imports task to complete by
selecting Mark as Complete.

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

Note:   Any existing disk records are updated only after
the next hardware scan is executed in the Microsoft SCCM
instance.

b. (Optional) Transform imported disk name to disk number format.

Note:   You can set the imported disk name to the format
Disk #<disknumber>. Where <disknumber> is the number
extracted from the imported disk name.

a. Select the Integration Commons for CMDB application scope
from the application picker.

b. For the Configure Disk Name Transformation task in the
Configure Disk Data Imports section, select Configure.

c. On the System Property page, set the value of the
sn_cmdb_int_util.transform_disk_name_to_discovery_format
property to true.

d. Select Update.

e. From the application picker, select the Service Graph
Connector for Microsoft SCCM application scope.

f. Set the Configure Disk Name Transformation task to complete
by selecting Mark as Complete.

8. Configure the scheduled data imports.

Note:   If the Use Integrated Authentication check box is
selected for the data source, the run as user for the scheduled
data import job must have the import_admin role. For more
information, see the "Use Integrated Authentication" is being
unchecked when you run the scheduled import related to SG-
SCCM or SG-SCCM Computer Identity Data Source [KB1312810]
article in the Now Support Knowledge Base.

a. For the Configure scheduled jobs task in the Configure scheduled
jobs task section, select Configure.

b. On the Scheduled Data Import form, verify the field values for the
scheduled job.

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

For more information, see Schedule a data import.

All other Service Graph Connector for Microsoft SCCM scheduled
jobs that are active will run in their specified order after the
Computer Identity scheduled job is finished running. Select the
Active check box for a scheduled job to activate the job.

Important:   If you are upgrading to the Service Graph
Connector for Microsoft SCCM, deactivate the existing
'SG-SCCM Computer Identity scheduled data import'.
Additionally, you cannot use the baseline scheduled data
import or data sources that have a name starting with 'SG-
SCCM' because they are used as templates for creating an
instance of data sources and scheduled data imports.

c. Select Update.

d. Set the Configure Scheduled data imports task to complete by
selecting Mark as Complete.

e. (Optional) When upgrading the Service Graph Connector for
Microsoft SCCM, deactivate the existing SG-SCCM Computer
Identity scheduled data import.
For the Deactivate Legacy Scheduled Data Imports task, select
Configure.

f. In the Name column, select the SG-SCCM Computer Identity
scheduled data import and clear the Active check box.

g. Set the Deactivate Legacy Scheduled Data Imports task to
complete by selecting Mark as Complete.

9. (Optional) Customize the Instance Data source SQL statement.

a. For the Customizing Data source SQL statement task in the
Customize Instance Data source SQL statement section, select
Configure.

b. Select the name of the instance in which you want to customize
the SQL statement.

c. Select Update.

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

d. Set the Customizing Data source SQL statement task to complete
by selecting Mark as Complete.

To resolve issues when configuring the connector, you can view the
following additional resources:

• How to identify and delete duplicate CMDB CI Relationship records or
ones that have orphan or missing parent/child relationships [KB0780988]
in the Now Support Knowledge Base

• How to delete sys_object_source records [KB0746309 ] in the Now
Support Knowledge Base

• Duplicate software installs with different Discovery Source [KB0958768] in
the Now Support Knowledge Base

• Assigned To Field Doesn't Get Updated For Computer CIs in
Service Graph Connector for SCCM [KB1277555] in the Now Support
Knowledge Base

• Service Graph connector for Microsoft SCCM software usages data
import blog post on the ServiceNow Community site

Related tasks

• Configure Service Graph Connector for Microsoft SCCM using SGC
Central

• Enable Software Editions in Service Graph Connector for Microsoft
SCCM

Related concepts

• Service Graph Connector for Microsoft SCCM

• Accessing the connection details of Service Graph Connector for
Microsoft SCCM

• Configuring air gap connections for Microsoft SCCM

Related reference

• CMDB classes targeted in Service Graph Connector for Microsoft SCCM

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

## CMDB classes targeted in Service Graph Connector for
## Microsoft SCCM

When you complete setting up the connection, you can configure the
integration to periodically pull data from Microsoft SCCM. The data is
saved in tables that extend from the Configuration item [cmdb_ci] table.

Computer [cmdb_ci_computer]

The following attributes in the Computer [cmdb_ci_computer] table are
populated by collected data:

Attribute label
Attribute name

Serial number
serial_number

CPU core count
cpu_core_count

CPU speed (MHz)
cpu_speed

CPU type
cpu_type

CPU manufacturer
cpu_manufacturer

Name
name

Asset tag
asset_tag

Assigned
assigned

Chassis type
chassis_type

Class
sys_class_name

CPU core thread
cpu_core_thread

CPU count
cpu_count

CPU name
cpu_name

Default Gateway
default_gateway

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

DNS Domain
dns_domain

Most recent discovery
last_discovered

Operating System
os

OS Address Width (bits)
os_address_width

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

Assigned to
assigned_to

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
Reference
Key Value
[cmdb_key_value]

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

Parent class
Relationship type
Child class

Computer
[cmdb_ci_computer]
Reference
Software Installation
[cmdb_sam_sw_install]

Computer
[cmdb_ci_computer]
Reference

SG-SCCM Computer
Related
[sn_sccm_integrate_sc
cm_2019_computer_re
lated]

Disk [cmdb_ci_disk]

The following attributes in the Disk [cmdb_ci_disk] table are populated by
collected data:

Attribute label
Attribute name

Disk space (GB)
disk_space

Size bytes
size_bytes

Computer
computer

Device ID
device_id

Name
name

Description
short_description

Drive type
drive_type

Manufacturer
manufacturer

Model ID
model_id

Relationship created for Disk

Parent class
Relationship type
Child class

Disk [cmdb_ci_disk]
Reference
Computer
[cmdb_ci_computer]

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

IP Address [cmdb_ci_ip_address]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data:

Attribute label
Attribute name

IP Address
ip_address

IP version
ip_version

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

Key Value [cmdb_key_value]

The following attributes in the Key Value [cmdb_key_value] table are
populated by collected data:

Attribute label
Attribute name

Key
key

Value
value

Network Adapter [cmdb_ci_network_adapter]

The following attributes in the Network Adapter
[cmdb_ci_network_adapter] table are populated by collected data:

Attribute label
Attribute name

MAC Address
mac_address

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

Attribute label
Attribute name

Name
name

DHCP Enabled
dhcp_enabled

Netmask
netmask

Configuration Item
cmdb_ci

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

SG-SCCM Computer Related
[sn_sccm_integrate_sccm_2019_computer_related]

The following attributes in the SG-SCCM Computer Related
[sn_sccm_integrate_sccm_2019_computer_related] table are populated
by collected data:

Attribute label
Attribute name

Resource ID
resource_id

OU Name
ou_name

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

Vendor
vendor

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

Software Installation [cmdb_sam_sw_install]

The following attributes in the Software Installation [cmdb_sam_sw_install]
table are populated by collected data when the SAM application is
installed:

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

Publisher
publisher

Last scanned
last_scanned

Installed on
installed_on

Display name
display_name

Discovery source
discovery_source

Install date
install_date

Prod id
prod_id

Version
version

Revision
revision

Sccm group ID
sccm_group_id

SCCM TimeStamp
sccm_timestamp

Assigned to
assigned_to

Relationship created for Software Installation

Parent class
Relationship type
Child class

Software Installation
[cmdb_sam_sw_install]
Reference
Computer
[cmdb_ci_computer]

Software Instance [cmdb_software_instance]

The following attributes in the Software Instance
[cmdb_software_instance] table are populated by collected data:

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

35

Zurich ServiceNow AI Platform Capabilities

---
*Page 36*

Attribute label
Attribute name

Installed on
installed_on

Install date
install_date

Sccm group ID
sccm_group_id

SCCM TimeStamp
sccm_timestamp

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

## Upgrade from the legacy SCCM plugin to the Service
## Graph Connector for Microsoft SCCM

Deactivate the scheduled imports and pull records so that you can
upgrade from the Microsoft SCCM 2016 plugin or an earlier version of
the plugin to the Service Graph Connector for Microsoft SCCM.

Before you begin

Role required: none

If you are upgrading to the Service Graph Connector for Microsoft
SCCM, the following steps are mandatory. The steps must be executed
in any instance with an existing install of the Microsoft SCCM 2016 plugin
or with an earlier version of the plugin.

Note:   The Service Graph Connector for Microsoft SCCM is an
independent implementation that does not reuse any components
from the Microsoft SCCM 2016 plugin.

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

About this task

The Service Graph Connector for Microsoft SCCM is a successor to the
Microsoft SCCM 2016 plugin. If you already have the Microsoft SCCM
2016 plugin or an earlier version installed in your instance, you must
follow these steps to enable the successful transition from using the SCCM
plugin to using the Service Graph Connector. Additionally, you can run
a SG-SCCM cleanup to delete the Network Adapters and Disks created
from the older SCCM plugin to make the migration faster.

When the Service Graph Connector for Microsoft SCCM is installed in an
instance, you must no longer run any components from the Microsoft
SCCM 2016 plugin, including Data Sources and Scheduled Data Imports.
The SCCM 2016 plugin Scheduled Data Imports must be tuned off. The
Service Graph Connector for Microsoft SCCM installs a new set of SG-
SCCM Data Sources and Scheduled Data Imports.

Warning:   This upgrade process should be performed and validated
in a non-production or test instance that is based on a recent clone
of the customer production instance. Failure to first validate upgrade
in a non-production instance may result in unexpected outcomes
and possible data loss or corruption.

Any customizations to the SCCM 2016 plugin will not automatically
migrate. The customizations would have to be reimplemented in
the Service Graph Connector for Microsoft SCCM, such as by using
IntegrationHub-ETL.

Procedure

1. (Optional) If you are migrating from the SCCM 2016 plugin, then run
the Migration Readiness Tool for Service Graph Connector for SCCM.

The plugin can be downloaded from the ServiceNow Store.

The tool does not migrate any changes, but runs a series of ATF tests
to identify any customizations that were done to the legacy SCCM
2016 plugin compared to the OOB SCCM 2016 plugin. It will not
migrate the changes between the two plugins, but serves to alert
any customizations.

2. After the tool has finished running, review the tests that were failed.

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

A failed test means that a customization was made in the plugin.
The customization could be a transform map. For example, if a
transform map was modified, then it needs to be reimplemented in
the connector.

3. Deactivate the scheduled imports from the older SCCM plugin.
For more information on how to deactivate scheduled imports, see
Upgrade the SCCM integration version.

4. (Optional) Delete duplicate OS software records in the older SCCM
plugin.

Note:   There is no cleanup required for Computer OS Software
records if SAM is enabled.

a. Navigate to the Software Package or Software Instance table in
the older SCCM plugin.

b. Search for the duplicate OS records that you want to delete.
You can tell which records are the SG-SCCM software OS records
if the version number is included in the Name or Product Name.

c. To delete the duplicate software OS records from the Software
Package table, do the following:

a. On the Software Package table, select the duplicate OS
record that does not have SG-SCCM in the Discovery Source
column.

b. Delete the duplicate OS record and repeat with other
records as needed.

d. To delete the duplicate software OS records from the Software
Instance table, do the following:

a. On the Software Instance table, select the duplicate OS
record that has the SCCM group ID column empty.

b. Delete the duplicate OS record and repeat with other
records as needed.

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

Note:   This step is optional because there is a difference in the
way software OS records are written to the CMDB, between
the legacy SCCM plugin and Service Graph Connector. The
SCCM plugin did not record values to sys_object_source, a
discovery_source, or a sccm_group_id.

5. After you are finished deactivating the scheduled imports and
deleting the duplicate OS records from the older SCCM plugin,
configure the connector.
For instructions, see Configure the Service Graph Connector for
Microsoft SCCM.

6. (Optional) Clean up the Disk and Network Adapter records created
by the SCCM plugin.

a. Confirm that you are in the Service Graph Connector for
Microsoft SCCM application scope.

b. Navigate to Scheduled Job > SG-SCCM CleanupUtil.

c. Select the SG-SCCM CleanupUtil scheduled job, and then switch
to the global application scope.

d. To make a copy of the scheduled job, right-click the header of
the scheduled job and select Insert and Stay.

e. Change the name to SG-SCCM CleanupUtil Global.

f. Click Update.

g. When you need to run the scheduled job, click Execute Now.

h. (Optional) To check the progress of the run, do the following:

a. Navigate to System Log > All.

b. To filter the records for the script run, enter SG-SCCM
CleanupUtil under the Message search box.
The script will have a log message for each batch so that you
know the status of the current run and its progress.

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

Note:   The duration of the run depends on the amount
of Network Adapter and Disk data in the CMDB from
the previous SCCM integration. The data must meet the
condition for the cleanup.

What to do next

When you execute the Service Graph Connector components, your
existing CMDB data created by the SCCM plugin becomes managed
and maintained by Service Graph Connector for Microsoft SCCM.

## Upgrade to the latest version of Service Graph
## Connector for Microsoft SCCM

Upgrade your Service Graph Connector for Microsoft SCCM. When you
upgrade versions, you can select the files that you want to transfer from
the earlier version to the later version of the Service Graph Connector for
Microsoft SCCM.

Before you begin

To avoid any serious upgrade issues, perform the upgrade in a test or
development instance prior to upgrading in a production environment.

Role required: admin

About this task

When you upgrade from an earlier version to the latest version of
the Service Graph Connector for Microsoft SCCM, there are Skipped
Updates. The original SCCM data source files that were installed have
the last run date updated as part of the data source runs. The files will
be treated as custom files by the platform. When the newer version is
installed, the newer data sources will not be automatically upgraded.

After you have upgraded to the newer version, you can check the
upgrade status.

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

Procedure

1. Review all the updates from the upgrade center and select the data
source files from the newer version.
You can access the upgrade history and review the updates from
the Skipped Changes to Review related list. See Review skipped
records using related lists.

2. If you have customized the earlier version, select the changes that
you need from the older file and migrate them to the new file.

Note:   Repeat this migration process for all the other skipped
update files.

What to do next

After the upgrade, if there are changes to the SQL in the data source files
or mapping, then do the following:

1. Clear the Use last run datetime check box in all the data sources.

2. Perform a full pull of data from all the data sources.

Note:   Upgrading from Service Graph Connector for Microsoft SCCM
v2.3 to v2.3.1 requires a minimum pull of Computer and Software,
because the Source Native Key for the software within the SQL was
changed in the SG-SCCM Removed Software data source. Without
the correct Source Native Keys, it will not be able find the software in
the CMDB.

For more information on resolving any conflicts, see the following topics:

• Revert a customization

• Resolve a skipped update and set a resolution status

• Skipped Changes to Review related list

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

## Enable Software Editions in Service Graph Connector
## for Microsoft SCCM

Enable software editions so that you can gather edition information for
products such as Adobe Acrobat, Microsoft SQL Server, and Windows
Exchange Server into the Service Graph Connector for Microsoft SCCM.

Before you begin

Note:   There are two types of setup that are required, one on the
SCCM Manager and the other on the ServiceNow Instance. For more
information on how to set up the SCCM Manager, see the SCCM
Manager Setup section of the Custom solution to gather editions in
SCCM [KB0721360] article on the HI Knowledge Base. When you're
finished setting up the SCCM Manager, refer back to this task and
complete the steps.

Role required: admin

About this task

You can set up the ServiceNow Instance on the Service Graph
Connector for Microsoft SCCM.

Procedure

1. Navigate to All > Service Graph Connector Microsoft SCCM > Import
Schedules.

2. Select the Software Edition scheduled import you created to edit this
import record.

3. Select the Active check box.

4. Click Update.

5. Navigate to Service Graph Connector Microsoft SCCM > Data
Sources.

6. Select the Software Edition data source you created.

7. Under the Transforms list, select Update software install with edition.

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

8. Edit the data source and select the Active check box.

9. Click Update.

What to do next

You can verify that the edition information has been gathered by doing
the following:

1. Navigate to Service Graph Connector Microsoft SCCM > Data
Sources and the Software Edition data source you want to verify.

2. Select Load All Records.

Note:   If the displayed completion code is Success, then the
software edition data source was executed successfully. If the
displayed completion code is Error, then there is an error that must
be fixed.

## Accessing the connection details of Service Graph
## Connector for Microsoft SCCM

You can access the connection details of the Service Graph Connector
for Microsoft SCCM in a single view using the common connection
framework (CCF) included within the Integration Commons for CMDB
(sn_cmdb_int_util) store app.

With the CCF, you can access all the connections used by the Service
Graph Connector for Microsoft SCCM. The connection details include the
connection alias, connection properties, data sources, and scheduled
data imports associated with a connection. You can also test the
connection. For more information, see Accessing the connection details
of Service Graph Connectors.

Access the details of a Microsoft SCCM connection

Access the details of a Microsoft SCCM connection configured for the
Service Graph Connector for Microsoft SCCM.

Before you begin

Role required: admin

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

Procedure

1. Navigate to All > Service Graph Connectors > SCCM > Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

3. On the Service Graph Connections page, view the connection
details such as the connection name, alias, and data sources.

4. Select a related list to view further details of the connection.

5. (Optional) Select the Test Connection related link to test the
connection.

## Configuring air gap connections for Microsoft SCCM

Air gap connections for the Service Graph Connector for Microsoft SCCM
enable safe and controlled data transfer without compromising security.

An air gap is a security measure that involves isolating a computer or
network and preventing it from establishing an external connection. Air-
gapped networks keep critical systems secure by isolating them from
external connections to protect the systems from cyber threats. Air
gap connections for the Service Graph Connector for Microsoft SCCM
facilitate controlled data exchange between the air-gapped networks
and external systems while maintaining the integrity of the air-gapped
environment.

Air gap connections are available from version 3.7.0 of the Service
Graph Connector for Microsoft SCCM. You can add either standard data
sources or air gap data sources by using SGC Central. To access the
SGC Central setup, see Configure Service Graph Connector for Microsoft
SCCM using SGC Central.

Perform the following sequence of tasks to configure the air gap solution
before you add air gap data sources:

1. Configure air gap solution for Microsoft SCCM in a high-secure server

2. Configure air gap solution for Microsoft SCCM in a low-secure server

3. Configure air gap solution for Microsoft SCCM in a ServiceNow
instance

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

4. Perform a test data load for the air gap solution for Microsoft SCCM

5. Perform a full data load for the air gap solution for Microsoft SCCM

## Configure air gap solution for Microsoft SCCM in a
## high-secure server

Configure the air gap solution for the Service Graph Connector for
Microsoft SCCM in your high-secure server.

Before you begin

Role required: admin

Procedure

1. Navigate to Workspaces > CMDB Workspace > SGC Central > Create
connection.

2. Select the air gap template.

a. In the Setup stage of the playbook, select the Select alias
template activity.

b. Select SCCM Air Gap.

c. Select Continue.

3. Download and run the PowerShell scripts to set up an air gap
connection.

a. In the Setup stage of the playbook, select the PowerShell Script
Download activity.

b. Select Download Airgap Scripts.

c. Download the SgSCCMHighSecureSetup.ps1 and
GetSCCMData.ps1 PowerShell scripts from the link provided in the
Download Airgap Scripts section.

4. Log on to your high-secure server.

5. Create a Microsoft SCCM directory.

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

All the configurations required for the air gap solution are created in
the Microsoft SCCM directory.

6. Copy the GetSCCMData.ps1 and SgSCCMHighSecureSetup.ps1
PowerShell scripts that you downloaded in step 3.c to the Microsoft
SCCM directory.

7. Start a PowerShell session, and run the SgSCCMHighSecureSetup.ps1
script to generate the JSON configuration file that is used by the
GetSCCMData.ps1 script.

a. At the prompt, enter the path for the Microsoft SCCM directory
that you created in step 5.

b. Enter a name for the configuration file, or press the Return key to
accept the default value.

c. Enter the values for the global properties, or press the Return key
to accept the default values.

• logDirectory: Specify the location to store the log file from the
GetSCCMData.ps1 script.

• host: Specify the host name for your Microsoft SCCM
instance.

• dbname: Specify the SCCM database name.

• port: Specify the port on which the Microsoft SCCM instance
allows API calls.

• pageSize: Specify the number of records to be fetched in a
Microsoft SCCM API call.

• credentialsPath: Specify the location to store the Microsoft
SCCM credentials XML file.

d. Specify names for the data source data directories, or press the
Return key to accept the default values.

The directories are created if they don’t already exist.

e. Enter the Microsoft SCCM credentials.

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

Note:   You can either use Windows credential manager
to store the user name and password, or implement
your own mechanism for storing the credentials. The
GetSCCMData.ps1 script must have access to the
credentials to trigger REST calls.

f. Exit the PowerShell session.

8. Provide write and delete permissions for the Microsoft SCCM directory
and the child directories.

You must provide delete permissions for old records to be cleaned
up.

Related tasks

• Configure air gap solution for Microsoft SCCM in a low-secure server

## Configure air gap solution for Microsoft SCCM in a low-
## secure server

Configure the air gap solution for the Service Graph Connector
for Microsoft SCCM in your low-secure server after you finish the
configuration in your high-secure server.

Before you begin

Role required: admin

Procedure

1. Navigate to Workspaces > CMDB Workspace > SGC Central > Create
connection.

2. Select the air gap template.

a. In the Setup stage of the playbook, select the Select alias
template activity.

b. Select SCCM Air Gap.

c. Select Continue.

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

3. Download and run the PowerShell scripts to set up an air gap
connection.

a. In the Setup stage of the playbook, select the PowerShell Script
Download activity.

b. Select Download Airgap Scripts.

c. Download the SgSCCMLowSecureSetup.ps1 PowerShell script
from the link provided in the Download Airgap Scripts section.

4. Log on to your low-secure server.

5. Create a Microsoft SCCM directory.

All the configurations required for the air gap solution are created in
the Microsoft SCCM directory.

6. Copy the SgSCCMLowSecureSetup.ps1 PowerShell script that you
downloaded in step 3.c to the Microsoft SCCM directory.

7. Start a PowerShell session, and run the SgSCCMLowSecureSetup.ps1
script.

a. At the prompt, enter the path for the Microsoft SCCM directory
that you created in step 5.

b. Specify names for the data source data directories, or press the
Return key to accept the default values.

The directories are created if they don’t already exist.

c. Exit the PowerShell session.

8. Provide read and delete permissions for the Microsoft SCCM
directory.

Related tasks

• Configure air gap solution for Microsoft SCCM in a ServiceNow instance

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

## Configure air gap solution for Microsoft SCCM in a
## ServiceNow instance

Configure the air gap solution for the Service Graph Connector for
Microsoft SCCM in your ServiceNow instance after you finish the
configuration in your high-secure and low-secure servers.

Before you begin

Role required: admin

Procedure

1. Navigate to All > System Definition > Plugins, and download the
ServiceNow IntegrationHub Action Step – PowerShell plugin.

2. Navigate to Workspaces > CMDB Workspace > SGC Central > Create
connection.

3. Download and run the PowerShell scripts to set up an air gap
connection.

a. In the Setup stage of the playbook, select the Select alias
template activity.

b. Select SCCM Air Gap, and then select Continue.

c. In the Setup stage of the playbook, select the PowerShell Script
Download activity.

d. Download the scripts and configure the air gap connection.

e. Select the I have read the instructions and executed the scripts
accordingly check box, and then select Continue.

4. In the Setup stage of the playbook, select the Create and test
connection activity.

5. Fill in the fields on the Create Connection form.

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

Path of the Microsoft SCCM
directory where the data is
stored in your low-secure server.

See Configure air gap solution
for Microsoft SCCM in a low-
secure server.

Archive Data After Retrieval
Option to archive data after
retrieval.

Archive Path [Optional]

Folder where the data is to be
archived if the Archive Data
After Retrieval check box is
selected.

6. Select Create and test connection.

Related tasks

• Perform a test data load for the air gap solution for Microsoft SCCM

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

## Perform a test data load for the air gap solution for
## Microsoft SCCM

After you configure the air gap solution for the Service Graph Connector
for Microsoft SCCM, test whether the Microsoft SCCM endpoint is
accessible from the high-secure server.

Before you begin

Role required: admin

Procedure

1. Navigate to the Microsoft SCCM directory in your high-secure server.

2. Run the .\GetSCCMData.ps1 -configFilePath CONFIG_PATH script,
where CONFIG_PATH is the location of the JSON configuration file
that is generated by the setup script.
The script accesses the Microsoft SCCM API, and creates a sample
file in the ComputerIdentity directory and a log file in the Logs
directory.

• If the test data load is successful, the log file contains the Test
Load status SUCCESS! message.

• If the test data load fails, the log file contains the Error occurred
while processing ComputerIdentity StatusCode 403 message.

If the test data load fails, verify the Microsoft SCCM user
credentials and ensure that the user has the required permissions
to pull the data from Microsoft SCCM. If the credentials need
to be updated, you must run the SgSCCMHighSecureSetup.ps1
PowerShell script again. See Configure air gap solution for
Microsoft SCCM in a high-secure server.

Related tasks

• Perform a full data load for the air gap solution for Microsoft SCCM

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

## Perform a full data load for the air gap solution for
## Microsoft SCCM

After you verify that the test data load for the air gap solution for the
Service Graph Connector for Microsoft SCCM is successful, you can
perform a full data load.

Before you begin

Role required: admin

Procedure

1. Navigate to the Microsoft SCCM directory in your high-secure server.

2. Run the .\GetSCCMData.ps1 -completeLoad $true -configFilePath
CONFIG_PATH script, where CONFIG_PATH is the location of the JSON
configuration file that is generated by the setup script.

By default, the existing files in the data source data directories are
deleted each time the .\GetSCCMData.ps1 -completeLoad $true
-configFilePath CONFIG_PATH script is run. You can add the -clean
$false parameter to the script if you want to retain the existing files.

The script fetches data from all the Microsoft SCCM APIs, and stores
the data in the respective directories.

3. After the data is loaded in your high-secure server, transfer the data
to your low-secure server using a method of your choice.

4. Verify that the data is loaded in your low-secure server.

5. Set the full data load job (using the .\GetSCCMData.ps1
-completeLoad $true -configFilePath CONFIG_PATH script) to run on
a schedule based on that of the Scheduled Import Job on your
Service Graph Connector for Microsoft SCCM instance.

6. Set the data transfer job (from your high-secure server to your low-
secure server) on a schedule based on that of the Scheduled Import
Job on your Service Graph Connector for Microsoft SCCM instance.

7. Test the air gap connection in your ServiceNow instance.

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

a. Navigate to All > Service Graph Connectors > SCCM >
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

53

Zurich ServiceNow AI Platform Capabilities

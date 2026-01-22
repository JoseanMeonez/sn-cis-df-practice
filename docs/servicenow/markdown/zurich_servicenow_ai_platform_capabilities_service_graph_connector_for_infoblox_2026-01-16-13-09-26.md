# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_infoblox_2026-01-16-13-09-26

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_infoblox_2026-01-16-13-09-26.pdf*

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

## Service Graph Connector for Infoblox

Use the Service Graph Connector for Infoblox to pull data from an
Infoblox instance into your ServiceNow instance.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported versions

• Supported versions: Infoblox API v2.11.2

• Supported ServiceNow versions:

• Xanadu

• Yokohama

• Zurich

Use cases

The following example use cases describe how you can use the Service
Graph Connector for Infoblox for different ServiceNow® applications:

• Configure the Infoblox connection for connecting to an Infoblox
instance.

• Create IP address management (IPAM) tasks when subnets are added
or deleted.

• Schedule periodic synchronization of IPAM CIs by configuring
scheduled data imports jobs.

• View imported IPAM CIs and IPAM tasks.

Configuring a connection for the connector

You can configure a connection for the connector by using the
SGC Central view in the CMDB Workspace. The view enables you to

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

discover and install connectors, and then effectively manage the full life
cycle of creating, editing, monitoring, and debugging connections. To
configure the connector using SGC Central, see Configure Service Graph
Connector for Infoblox using SGC Central.

Important:   Unless there are configuration issues, use the SGC
Central view in the CMDB Workspace to configure the connection
for the connector, as the guided setup method is being deprecated.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration,
or a specific integration run. For more details about monitoring Infoblox
integrations in the CMDB Integrations Dashboard, see Using the CMDB
Integrations Dashboard.

Data mapping

Data from the Infoblox data source is mapped and transformed into
the ServiceNow CMDB configuration item (CI) class definitions using the
Robust Transform Engine (RTE). Data is inserted into the ServiceNow CMDB
using the Identification and Reconciliation Engine (IRE).

When you complete setting up the connection, you can configure the
integration to pull data periodically from Infoblox.

The following data sources are included for the Infoblox app:

SG-Infoblox IP Pool

Imports all the network containers from the Infoblox instance,
loads the imported data in the SG-Infoblox IP Pool
[sn_infoblox_integ_sg_infoblox_ip_pool] table, and then populates the
IP Pool [cmdb_ci_ip_pool] target table. The SG-Infoblox Network data
source runs after the SG-Infoblox IP Pool data source does.

SG-Infoblox Network

Runs after the SG-Infoblox IP Pool data source, imports the IPv4
and IPv6 networks and subnets data from the Infoblox instance,
loads the imported data in the SG-Infoblox Detailed Subnetwork

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

[sn_infoblox_integ_sg_infoblox_detailed_subnetwork] table, and then
populates the IP Network Subnet [cmdb_ci_ip_network_subnet] and
Managed Network [cmdb_ci_managed_network] target tables. The SG-
Infoblox IP Address data source runs after the SG-Infoblox Network data
source does.

The Detailed Subnetwork
[sn_infoblox_integ_sg_infoblox_detailed_subnetwork] table determines
which IP addresses are imported based on the value of the Get Ip
Address field. To import an IP address, set the Get Ip Address field
value to true. Alternatively, you can specify the list of IP addresses to
be imported in pipe-delimited string format in the Value field of the
sn_infoblox_integ.included_network_regex system property.

Note:   IP addresses will not be imported during the first run of
the Service Graph Connector for Infoblox unless you update the
sn_infoblox_integ.included_network_regex system property because
the Get Ip Address field value is set to false by default.

SG-Infoblox IP Address

Runs after the SG-Infoblox Network data source, imports
the IPv4 and IPv6 IP addresses from the Infoblox instance,
loads the imported data in the SG-Infoblox IP Address
[sn_infoblox_integ_sg_infoblox_ip_address] table, and then populates
the Allocated IP Address [cmdb_ci_allocated_ip_address], IP
Network Subnet [cmdb_ci_ip_network_subnet], and Managed Network
[cmdb_ci_managed_network] target tables.

SG-Infoblox DNS Alias

Imports all the canonical name (CNAME) records from the Infoblox
instance, loads the imported data in the SG-Infoblox DNS Alias
[sn_infoblox_integ_sg_infoblox_dns_alias] table, and then populates the
DNS Alias [cmdb_ci_dns_alias] target table.

For more information on where data is saved when pulling data from
Infoblox, see CMDB classes targeted in Service Graph Connector for
Infoblox.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

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

Parallel data loading

Starting with the Service Graph Connector for Infoblox 1.3.0 version,
parallel data loading can be enabled for the SG-Infoblox Network
and SG-Infoblox IP Address data sources by setting the partition size in
the sn_infoblox_integ.parallel_loading_partition_size system property. This
system property determines the maximum number of networks that each
partition processes. The maximum value that you can set for the partition
size is 150.

• For the SG-Infoblox Network data source, the partition size is based on
network views.

• For the SG-Infoblox IP Address data source, the partition size is based on
the number of networks.

Related concepts

• Service Graph Connectors

## Configure Service Graph Connector for Infoblox using
## SGC Central

Use the playbook available with the SGC Central application to set up
the Service Graph Connector for Infoblox for pulling in Infoblox data into
the CMDB.

Before you begin

Install Service Graph Connector for Infoblox version 1.2.0 or later from
the ServiceNow Store. For ServiceNow Store installation steps, see Install a
ServiceNow Store application.
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

3. On the Overview page, select Create connection.

Tip:   Alternatively, you can select Create connection on the All
connections page.

4. On the Create connection window, select the Infoblox connector
type and then select Configure connection.
A default connection, SG_Infoblox_Connection, for Infoblox is
available within the application. As the Service Graph Connector
for Infoblox supports only a single instance, you can configure the
default connection for the first time or resume editing it thereafter.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

Note:   This step is required only during the first-time setup. See
Perform initial setup tasks when creating a connection in SGC
Central.

6. Enter connection details and test the API connection for importing
Infoblox data.

a. In the Setup stage of the playbook, select the Configure and test
connection activity.

b. On the form, fill in the fields.

Configure and test connection form

Field
Description

Connection name
Name to identify the Infoblox
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

Connection URL
Infoblox base URL in the
following format: <base-URL>.

User name
User name for authenticating
the HTTP request.

Password

Password for the user name
used for authenticating the
HTTP request.

Use MID Server

Option to use the MID Server
for connecting to the Infoblox
instance.

Note:   A MID Server is
required only if a direct
connection between the
ServiceNow and Infoblox
instances isn’t possible.

Mid Selection

MID Server for the connection.

This field appears only when
you select the Use MID Server
check box.

c. Select Update and test connection.

d. Once the connection test is complete, select Continue.

7. (Optional) Specify network views and the API version for connecting
to the Infoblox instance by setting the configuration properties.

Note:   To skip this step, select Continue for the Set configuration
properties activity. If you skip this step, the default values of the
Network view and API version properties are considered.

a. In the Setup stage of the playbook, select the Set configuration
properties activity.

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

b. In the Network view field, enter the network views for which data
is to be imported.
For multiple views, separate them with commas. For example:
view1,view2.

If you leave this field empty or set it to Default, the data sources
within the connector import data from all the network views.

c. In the API version field, enter the version of WAPI you’re using.

For more information about the Infoblox API, see the Infoblox
Developer documentation.

d. Select Save properties.

e. Select Continue.

8. (Optional) Opt for task creation on network insertion or deletion.

Note:   To skip this step, select Continue for the Configure task
preferences activity.

a. In the Setup stage of the playbook, select the Configure task
preferences activity.

b. Select the Create task on network insertion check box to enable
creating a task when a network is inserted.

c. Select the Create task on network deletion to enable creating a
task when a network is deleted.

d. In the Task user group list, select the user group assigned to tasks
created on network insertion or deletion.

e. Select Save preferences.

f. Select Continue.

9. Configure the import schedule to import data at regular intervals.

a. In the Setup stage of the playbook, select the Configure import
schedule activity.

b. Select Configure import schedule.

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

c. Expand the Parent scheduled data import within the Import
schedules list to select the SG-Infoblox IP Pool import schedule.

d. In the Configure import schedule dialog box, select the Active
check box, and then fill in the run schedule and time details.

For more information, see Schedule a data import.

e. Select Save.
Alternatively, select Execute Now to execute the import schedule
immediately.

f. Select Continue.

10. In the Setup stage of the playbook, select the Confirm connection
setup activity to verify whether the connection was configured.

What to do next

Select View all connections to review the connection details. The
configured connection appears in the Installed connections list.

Related concepts

• Service Graph Connector for Infoblox

• Accessing the connection details of Service Graph Connector for
Infoblox

Related reference

• CMDB classes targeted in Service Graph Connector for Infoblox

## Configure Service Graph Connector for Infoblox using
## the guided setup

Pull in data from Infoblox into your CMDB.

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

• ITOM Licensing plugin (com.snc.itom.license). For more information, see

Request Discovery.

• The Datastream Action plugin
(com.glide.hub.action_type.datastream), which is automatically
installed.

• Observability Commons for CMDB (sn_observability), which is only
required for event ingestion. This must be installed prior to installing the
connector for Event Management to work. For more information, see
Observability Commons for CMDB on the ServiceNow Store.

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

Note:   If you have an earlier version of the Service Graph Connector
for Infoblox, then don’t migrate data from the old connector. You
must uninstall the previous version and run the new integration.

Role required: SGC-Admin (sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to run background scripts and
to provide table-level access to the SGC-Admin user.

Procedure

1. Ensure that the application scope is set to the Service Graph
Connector for Infoblox application by using the application picker.
For more information, see Application picker.

2. Navigate to All > Service Graph Connectors > Infoblox > Setup.

3. On the Getting started page, select Get Started.

4. Configure the authentication credentials and HTTP connection
details for sending requests to the Infoblox API.

a. Configure your Infoblox authentication credentials.

a. In the Configure the connection section of the Service Graph
Connector for Infoblox page, select Get Started.

b. For the Configure Infoblox authentication credentials task,
select Configure to open the Basic Auth Credentials page
opens in a new browser tab.

c. In the Name field, enter a name for the authentication.

For example, Infoblox Credential.

d. In the User name field, enter the user name that is used
to authenticate the HTTP request when this authentication
profile is enabled.

e. In the Password field, enter the password for the user name
that is used to authenticate the HTTP request.

f. Select Update to return to the guided setup page.

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

g. Set the Configure Infoblox authentication credentials task to
complete by selecting Mark as Complete.

b. Configure the Infoblox connection settings.

a. For the Configure Infoblox HTTP connection task, select
Configure to open the HTTP(s) Connection page in a new
browser tab.

b. Review the fields and in the Name field and enter the
Infoblox instance name.

c. Use the URL builder to build the connection string or in the
Connection URL field, enter the Infoblox base URL in the
following format: https://<base-URL>.

d. In the api_version field of the Attributes section, enter the

version of WAPI you’re using.

e. In the network_view field of the Attributes section, enter the
network views for which data is to be imported.

For multiple views, separate the views with commas. For
example: view1,view2. If you leave this field empty, the
data sources import data from all the network views.

f. Select Update to return to the guided setup page.

g. Set the Configure Infoblox HTTP connection task to complete
by selecting Mark as Complete.

For more information about the Infoblox API, see the Infoblox
Developer documentation.

c. Configure the connection properties.

a. For the Configure connection properties task, select
Configure to open the Service Graph Connections page in
a new browser tab.

b. To review and modify the property details, select a property
from the Property column in the Service Graph Connection
Properties related list.

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

c. Select Update on the Service Graph Connection Properties
page.

d. Select Update on the Service Graph Connections page to
return to the guided setup page.

e. Set the Configure connection properties task to complete by
selecting Mark as Complete.

d. Test the Infoblox API connection to import data from the Infoblox
application.

a. In the Configure the connection section of the Service Graph
Connector for Infoblox page, select Continue.

b. For the Test the connection task, select Configure to open
the Service Graph Connections page in a new browser tab.

c. Select Test Connection.

d. When the Status field is set to Success, select Update to close
the Test the connection dialog box and return to the guided
setup page.

If any of the tests have errors, follow the suggestions for
remediation.

e. Set the Test the connection task to complete by selecting
Mark as Complete.

5. (Optional) Add multiple instances.

Note:   If you don't need to add multiple instances, you can skip
this step.

a. In the Add Multiple Instances section of the Service Graph
Connector for Infoblox page, select Get Started.

b. For the Update Data Source Access task, select Configure.

c. Select the Data Source [sys_data_source] table.

d. Select the Global application scope by using the application
picker.

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

e. In the Application Access related list, select the Can create, Can
update, and Can delete check boxes, if not already selected.

f. Select Update to close the tab and return to the guided setup.

g. Modify the application scope again to Service Graph Connector
for Infoblox by using the application picker.

h. Set the Update Data Source Access task to complete by
selecting Mark as Complete.

i. For the Update Scheduled Data Import Access task, select
Configure.

j. Select the Scheduled data import [scheduled_import_set] table.

k. Repeat steps 5.d to 5.g.

l. Set the Update Scheduled Data Import Access task to complete
by selecting Mark as Complete.

m. Clear the cache for the new connection.

a. For the Clear Cache for Data Source and Scheduled Data
Imports tables task, select Configure.

b. Select the Global application scope by using the application
picker.

c. In the Run script text box of the background script page,
enter the following script:

GlideTableManager.invalidateTable("sys_data_sour
ce");
GlideCacheManager.flushTable("sys_data_source");

GlideTableManager.invalidateTable("scheduled_im
port_set");
GlideCacheManager.flushTable("scheduled_import_s
et");

GlideTableManager.invalidateTable("sys_db_object
");
GlideCacheManager.flushTable("sys_db_object");

d. Select Run Script to run the background script.

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

The script may take several minutes to execute.

e. After the script is executed, select Close.

f. Modify the application scope again to Service Graph
Connector for Infoblox by using the application picker.

g. Set the Clear Cache for Data Source and Scheduled
Data Imports tables task to complete by selecting Mark as
complete.

n. Add a basic authentication connection to the new Infoblox
instance.

a. For the Add Another Basic Auth Connection task, select
Configure.

b. To create a new connection, select Add Connection.

c. In the Connection Information section of the Create
Connection window, fill in the fields.

Connection Information

Field
Description

Connection name
Name to identify the Infoblox
connection record.

Connection URL

Infoblox base URL in the
following format: <base-
URL>.

Use MID Server

Option to use a MID Server.

Note:   Use of a MID
Server is optional.

MID Selection
Name of the MID Server used
by the connector.

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

Field
Description

This field appears only when
the Use MID server check
box is selected.

MID Application

Name of the MID
application used by the
connector.

This field appears only when
the Use MID server check
box is selected.

d. In the Credential Information section of the Create
Connection window, fill in the fields.

Credential Information

Field
Description

Username

Infoblox account user name
that is used to authenticate
the connection request.

Password

Password that is used to
authenticate the connection
request.

e. Select Create Connection.

f. Navigate back to the guided setup, and set the Add Another
Basic Auth Connection task to complete by selecting Mark
as Complete.

o. Test the newly added connections.

a. For the Test connections task, select Configure.

b. From the Name column, select the new connection.

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

c. Select the Test Connection related link to start the testing
process.

d. When the Status field is set to Success, return to the guided
setup page.

Note:   If any of the tests have errors, follow the
suggestions for remediation.

e. Set the Test connections task to complete by selecting Mark
as Complete.

6. Configure the IP address management tasks and user groups.

a. Enable properties to create an IP address management task
when deleting or inserting a network.

a. In the Configure IP address management tasks section of
the Service Graph Connector for Infoblox page, select Get
Started.

b. For Enable creating a task, select Configure to open the
Enable create Task page in a new browser tab.

c. Select the Create a task when a network is deleted and
Create a task when a network is inserted check boxes to
enable properties for creating IP address management tasks
when deleting and inserting a network, respectively.

d. Select Save.

e. Close the Enable create Task page tab and return to the
guided setup page.

f. Set Enable creating a task to complete by selecting Mark as
Complete.

b. Configure the user group for IP address management tasks.

a. For the Configure the user group for IP address management
tasks task, select Configure to open the SG Infoblox
Connection page in a new browser tab.

b. In the Connection alias field, review and change the
connection alias.

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

c. In the Task user group field, change the assignment group for
the connection alias.

Note:   By default, the user group for the IP address
management tasks is assigned to the IP Address
Management user group. To change the default
assignment group, change the task user group for the
connection alias.

d. Select Update to return to the guided setup page.

e. Set the Configure the user group for IP address management
tasks task to complete by selecting Mark as Complete.

7. Configure the scheduled jobs to import data from the Infoblox
application.

a. In the Set up scheduled import jobs section of the Service Graph
Connector for Infoblox page, select Get started.

b. For the Configure the scheduled jobs task, select Configure to
open the Scheduled Data Imports page in a new browser tab.

c. From the Name column, select the scheduled job that you want
to activate.

d. On the Scheduled Data Import form, verify the field values for the
scheduled job.
For more information, see Schedule a data import.

e. Select Update.

f. Repeat the steps 7.c to 7.e for each scheduled job for data
import.

g. Close the Scheduled Data Imports page tab and return to the
guided setup page.

h. Set the Configure the scheduled jobs task to complete by
selecting Mark as Complete in the guided setup.

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

## CMDB classes targeted in Service Graph Connector for
## Infoblox

When you complete setting up the connection, you can configure the
integration to pull data periodically from Infoblox. The data is saved in
tables that extend from the Configuration item [cmdb_ci] table.

Allocated IP Address [cmdb_ci_allocated_ip_address]

The following attributes in the Allocated IP Address
[cmdb_ci_allocated_ip_address] table are populated by collected data:

Attribute label
Attribute name

IP Address
ip_address

Managed Network
managed_network

Is Broadcast
is_broadcast

Is Conflict
is_conflict

Is DHCP
is_dhcp

Is DNS
is_dns

Is Managed
is_managed

Is Reserved
is_reserved

Name
name

Relationship created for Allocated IP Address

Parent class
Relationship type
Child class

Allocated IP Address
[cmdb_ci_allocated_i
p_address]

Reference

Managed Network
[cmdb_ci_managed_
network]

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

DNS Alias [cmdb_ci_dns_alias]

The following attribute in the DNS Alias [cmdb_ci_dns_alias] table is
populated by collected data:

Attribute label
Attribute name

Name
name

IP Network Subnet [cmdb_ci_ip_network_subnet]

The following attributes in the IP Network Subnet
[cmdb_ci_ip_network_subnet] table are populated by collected data:

Attribute label
Attribute name

Name
name

Parent Pool
parent_pool

CIDR
cidr

Relationships created for IP Network Subnet

Parent class
Relationship type
Child class

IP Network Subnet
[cmdb_ci_ip_network_
subnet]

Members::Member of

Allocated IP Address
[cmdb_ci_allocated_i
p_address]

IP Network Subnet
[cmdb_ci_ip_network_
subnet]

Reference

SG-Infoblox Detailed
Subnetwork
[sn_infoblox_integ_sg_i
nfoblox_detailed_subn
etwork]

IP Pool [cmdb_ci_ip_pool]

The following attributes in the IP Pool [cmdb_ci_ip_pool] table are
populated by collected data:

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

Name
name

Parent Pool
parent_pool

CIDR
cidr

Managed Network [cmdb_ci_managed_network]

The following attribute in the Managed Network
[cmdb_ci_managed_network] table is populated by collected data:

Attribute label
Attribute name

Name
name

SG-Infoblox Detailed Subnetwork
[sn_infoblox_integ_sg_infoblox_detailed_subnetwork]

The following attributes in the SG-Infoblox Detailed
Subnetwork [sn_infoblox_integ_sg_infoblox_detailed_subnetwork] table
are populated by collected data:

Attribute label
Attribute name

Connection ID
connection_id

Get Ip Address
list_ip_address

Network
network

Network Type
network_type

Network View
network_view

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

## Accessing the connection details of Service Graph
## Connector for Infoblox

You can access the connection details of the Service Graph
Connector for Infoblox in a single view using the common connection
framework (CCF) included within the Integration Commons for CMDB
(sn_cmdb_int_util) store app.

With the CCF, you can access all the connections used by the Service
Graph Connector for Infoblox. The connection details include the
connection alias, connection properties, data sources, and scheduled
data imports associated with a connection. You can also test the
connection. For more information, see Accessing the connection details
of Service Graph Connectors.

Access the details of an Infoblox connection

Access the details of an Infoblox connection configured for the Service
Graph Connector for Infoblox.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > Infoblox >
Connections.

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

23

Zurich ServiceNow AI Platform Capabilities

# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_microsoft_azure_2026-01-16-13-11-55

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_microsoft_azure_2026-01-16-13-11-55.pdf*

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

## Service Graph Connector for Microsoft Azure

Use the Service Graph Connector for Microsoft Azure to pull data from
Microsoft Azure into your CMDB.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported versions

Supported ServiceNow versions:

• Xanadu

• Yokohama

• Zurich

Use cases

The following are examples on how you can use the Service Graph
Connector:

• Visibility into cloud resources, relationships, and state in near real-time.

• Service ITAM/SAM outcomes through deep discovery of applications.

Configuring a connection for the connector

You can configure a connection for the connector by using the
SGC Central view in the CMDB Workspace. The view enables you to
discover and install connectors, and then effectively manage the full life
cycle of creating, editing, monitoring, and debugging connections. To
configure the connector using SGC Central, see Configure Service Graph
Connector for Microsoft Azure using SGC Central.

Important:   Unless there are configuration issues, use the SGC
Central view in the CMDB Workspace to configure the connection
for the connector, as the guided setup method is being deprecated.

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

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration,
or a specific integration run. For more details about monitoring Microsoft
Azure integrations in the CMDB Integrations Dashboard, see Using the
CMDB Integrations Dashboard.

Data mapping

Data from the Azure data sources is mapped and transformed into
the ServiceNow CMDB Configuration Item (CI) class definitions using the
Robust Transform Engine (RTE). Data is inserted into the ServiceNow®
CMDB using the Identification and Reconciliation Engine (IRE).

When you complete setting up the connection, you can configure the
integration to periodically pull data from Azure. The data is loaded into
staging tables and then inserted into the target tables.

The following table lists the data sources, the staging tables, and the
target tables as CMDB CI and non-CMDB classes for Azure.

Data mapping for Azure

Data source
Staging table
Target tables

SG-Azure Subscriptions

SG Azure Subscriptions
[sn_sg_azure_integ_su
bscriptions]

Cloud Service
Account

Key Value

SG-Azure Datacenter
Updation

SG-Azure Datacenter
Updation
[sn_sg_azure_integ_da
tacenter_updation]

Azure Datacenter

SG-Azure Resource
Group

SG-Azure Resource
Group
[sn_sg_azure_integ_res
ource_groups]

Resource Group

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

Key Value

SG-Azure Availability
Zone

SG-Azure Availability
Sets
[sn_sg_azure_integ_av
ailability_sets]

Availability Zone

Key Value

SG-Azure Storage
Volume

SG-Azure Storage
Volume
[sn_sg_azure_integ_sto
rage_volume]

Storage Volume

Key Value

SG-Azure Load
Balancers

SG-Azure Load
Balancers
[sn_sg_azure_integ_loa
d_balancers]

Cloud Load Balancer

Cloud LB IPAddress

Key Value

SG-Azure Network

SG-Azure Network
[sn_sg_azure_integ_ne
twork]

Cloud Network

Cloud Service
Account

Cloud Subnet

Key Value

SG-Azure Public IP
Address

SG-Azure Public IP
Address
[sn_sg_azure_integ_pu
blic_ip_address]

Cloud Public IP
Address

Cloud Mgmt Network
Interface

Cloud Load Balancer

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

Cloud LB IPAddress

Key Value

SG-Azure Security
Group

SG-Azure Security
Group
[sn_sg_azure_integ_se
curity_group]

Compute Security
Group

Key Value

SG-Azure Storage
Accounts

SG-Azure Storage
Accounts
[sn_sg_azure_integ_sto
rage_accounts]

Cloud Storage
Account

Key Value

SG-Azure Virtual
Machines

SG-Azure Virtual
Machine
[sn_sg_azure_integ_virt
ual_machine]

Virtual Machine
Instance

Image

Computer

Linux Server

Server

Windows Server

Key Value

SG-Azure Network
Interface

SG-Azure Network
Interface
[sn_sg_azure_integ_ne
twork_interface]

Cloud Mgmt Network
Interface

IP Address

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

Data source
Staging table
Target tables

Virtual Machine
Instance

Key Value

SG-Azure SQL

SG-Azure SQL
[sn_sg_azure_integ_sql
]

Cloud DataBase

Key Value

SG-Azure Functions

SG-Azure Functions
[sn_sg_azure_integ_fun
ctions]

Cloud Function

SG-Azure Generic
Resources

SG-Azure Generic
Resources
[sn_sg_azure_integ_ge
neric_resources]

Note:   The
SG-Azure Generic
Resources data
source imports
data for generic
resources that
aren't tracked
by other data
sources.

Cloud Resource

Key Value

SG-Azure Scale Sets

SG-Azure Scale Sets
[sn_sg_azure_integ_sc
ale_sets]

Instance Scale Set

SG-Azure Scale Sets
VMs

SG-Azure Scale Sets
VMs
[sn_sg_azure_integ_sc
ale_sets_vms]

Virtual Machine
Instance

Storage Volume

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

Data source
Staging table
Target tables

Image

Cloud Mgmt Network
Interface

Hardware Type

Azure Datacenter

Linux Server

Server

Windows Server

Key Value

SG-Azure Software

SG-Azure Software
[sn_sg_azure_integ_sof
tware]

Note:   The SG-
Azure Software
data source
imports the
software data
from the
ConfigurationDat
a table in the Log
Analytics
workspace of
Azure.

The SG-Azure
Software import is
set to inactive by
default.

When the Software
Asset Management
(SAM) application isn't
installed:

Software

Software Instance

When the SAM
application is installed:

Software Installation

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

Data source
Staging table
Target tables

SG-Azure Software
Remove

SG-Azure Software
Remove
[sn_sg_azure_integ_sof
tware_remove]

The SG-Azure Software
Remove import is set
to inactive by default.

When the SAM
application isn't
installed:

Software

Software Instance

When the SAM
application is installed:

Software Installation

SG-Azure TCP

SG-Azure TCP
[sn_sg_azure_integ_tc
p]

TCP Connection

Running Process

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

Data source
Staging table
Target tables

Note:   The
SG-Azure TCP
data source
imports the TCP
and processes
data from the
VMConnection
and VMProcess
tables in the
Log Analytics
workspace of
Azure. To
populate the
tables, you must
first enable the
VM insights
feature in the
Azure portal. For
more information,
see Enabling
VM insights for
collecting Azure
data.

SG-Azure Hardware
Template Updation

Hardware templates
[sn_sg_azure_integ_ha
rdware_templates]

Hardware Type

SG-Azure HW
Consolidation

SG-Azure HW
Consolidation
[sn_sg_azure_integ_hw
_consolidation]

Virtual Machine
Instance

Computer

SG-Azure Run
Command

SG-Azure Run
Command
[sn_sg_azure_integ_run
_command]

No data created

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

Data source
Staging table
Target tables

SG-Azure Get Run
Command

SG-Azure Get Run
Command
[sn_sg_azure_integ_ge
t_run_command]

Application

TCP Connection

Running Process

SG-Azure Kubernetes
Cluster

SG-Azure Kubernetes
Cluster
[sn_sg_azure_integ_ku
bernetes_cluster]

Kubernetes Cluster

• The connector utilizes the Service Graph Resource Inclusion Whitelist
[sn_cmdb_int_util_service_graph_resource_inclusion_whitelist] table to
differentiate between generic and other supported resource types.

The connector first populates all supported resources
in the Service Graph Resource Inclusion Whitelist
[sn_cmdb_int_util_service_graph_resource_inclusion_whitelist] table.
These resources, categorized under their respective supported
resource types, have specific data sources designated for ingestion
within the connector. When the SG-Azure Generic Resources data
source is executed and retrieves unsupported resource types,
they are added to the Service Graph Resource Inclusion Whitelist
[sn_cmdb_int_util_service_graph_resource_inclusion_whitelist] table and
categorized as generic.

• Starting with the Service Graph Connector for Microsoft Azure 1.12.0
version, the SG-Azure Hardware Template Updation and SG-Azure
HW Consolidation import schedules replace the SG-Azure Hardware
Template import schedule. The SG-Azure Hardware Template Updation
and SG-Azure HW Consolidation data sources fetch only the data of
the hardware templates that are used for VMs in Azure, instead of
fetching all hardware templates.

• Starting with the Service Graph Connector for Microsoft
Azure 1.14.0 version, the SG-Azure SQL data source populates
the microsoft.dbformysql/flexibleservers and microsoft.dbforpostgresql/
flexibleservers resource types in the Cloud Database

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

[cmdb_ci_cloud_database] table instead of the Cloud Resource
[cmdb_ci_cmp_resource] table.

After upgrading to version 1.14.0, run a full data load
to migrate all active flexible servers from the Cloud
Resource [cmdb_ci_cmp_resource] table to the Cloud Database
[cmdb_ci_cloud_database] table.

• Starting with the Service Graph Connector for Microsoft Azure 1.14.0
version, all data sources except SG-Azure Scale Sets VMs are migrated
from Azure Resource Manager (ARM) APIs to Resource Graph APIs for
a full data load. Microsoft Azure doesn't support uniform orchestration-
type Scale Set VMs on Resource Graph APIs.

For more information on where data is saved when pulling data from
Azure, see CMDB classes targeted in Service Graph Connector for
Microsoft Azure and Supported Microsoft Azure resource types.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

Event-based discovery

The Service Graph Connector for Microsoft Azure works with event-based
discovery. Events that are pulled from Azure can create and update CIs
that were brought by the Service Graph Connector for Microsoft Azure.

Additional resource

How do I configure the Azure Service Graph Connector?

Related tasks

• Configure Service Graph Connector for Microsoft Azure using the
guided setup

Related concepts

• Service Graph Connectors

• Configuring data synchronization in Service Graph Connector for
Microsoft Azure

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

• Enabling VM insights for collecting Azure data

• Setting up multiple connections in Service Graph Connector for
Microsoft Azure

Related reference

• CMDB classes targeted in Service Graph Connector for Microsoft Azure

## Configure Service Graph Connector for Microsoft Azure
## using SGC Central

Use the playbook available with the SGC Central application to set up
the Service Graph Connector for Microsoft Azure for pulling in Microsoft
Azure data into the CMDB.

Before you begin

Install Service Graph Connector for Microsoft Azure version 1.9.0 or later
from the ServiceNow Store. For ServiceNow Store installation steps, see
Install a ServiceNow Store application.

Important:   After the initial import of Azure data, the application
performs a delta import of data. However, you can perform a full
pull of data anytime later by disabling the delta synchronization
and setting the sn_sg_azure_integ.is_delta_sync_enabled property to
false. For more information, see Configuring data synchronization in
Service Graph Connector for Microsoft Azure.

Role required: The following table shows the roles required for each stage
of the playbook.

Role required for each playbook stage

Stage
Role

Prerequisites
admin

Setup
cmdb_inst_admin or admin

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

About this task

The playbook experience for onboarding connectors is activated with
SGC Central in the CMDB Workspace. To configure the SGC Central
application, see Configuring SGC Central and for more information on
how to interact with a playbook, see Interact with Playbook.

The connector uses the Azure Management APIs for the complete pull
of data from Azure. However, to pull delta changes from Azure, the
Azure Resource Graph APIs are used. The domain name system (DNS)
is Microsoft Azure Management, but the path is a resource graph.

Procedure

1. Navigate to Workspaces > CMDB Workspace.

2. In the CMDB Workspace, select SGC Central.

3. On the Overview page, select Create connection.

Tip:   Alternatively, you can select Create connection on the All
connections page.

4. On the Create connection window, select the Microsoft Azure
connector type and then select Create connection.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

Note:   This step is required only during the first-time setup. See
Perform initial setup tasks when creating a connection in SGC
Central.

6. Complete the prerequisites for setting up the Azure environment.

a. Complete the instructions required for setting up the Azure
environment.

a. In the Prerequisites stage of the playbook, select the Review
setup instructions activity.

b. Obtain the OAuth credentials including client ID, client
secret, and token URL from your Microsoft Azure
administrator.

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

c. For importing hardware data, grant the User.Read
permission on the Microsoft Graph API in the Azure
environment. Also, ensure that the IAM policy for the Azure
subscription has the Reader role. See Assign a user as an
administrator of an Azure subscription with conditions on the
Microsoft Azure documentation site.

d. For importing software data, grant the Data.Read permission
on the Log Analytics API in the Azure environment. In
addition, set up a Log Analytics workspace in the Azure
environment.

e. After completing the Review setup instructions activity, select
Continue.

7. Determine whether to import only hardware data or both hardware
and software data.

a. In the Setup stage of the playbook, select the Select services
activity.
If needed, expand the Setup stage to select an activity.

b. (Optional) To import both hardware and software data, select
the Hardware and software check box.

Note:   Importing software data requires a hardware
connection.

If you need to import only hardware data, the Hardware
only check box is already selected by default.

c. Select Continue.

8. Enter the connection details and test the API connection for
importing hardware data.

a. In the Setup stage of the playbook, select the Create and test
hardware connection activity.

b. On the form, fill in the fields.

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

Create and test hardware connection form

Field
Description

Connection name

Name to identify the hardware
connection record.

For example, SG-Azure
hardware connection.

Connection URL

Base URL to connect to your
Azure client application.

Note:   This field is
automatically set to the
URL to connect to the
application. Leave the
field value as is.

OAuth client ID

Application (client) ID of your
Azure client application as
noted in step 6.a.

OAuth client secret

Client secret of your Azure
client application as noted in
step 6.a.

OAuth token URL

Callback URL for the Azure
client application.
Based on the region of your
Azure client application, enter
the token URL in one of the
following formats:

• Global

https://login.micros
oftonline.com/<tenan
tid>/oauth2/v2.0/tok
en

• US Government

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

https://login.micros
oftonline.us/<tenant
id>/oauth2/v2.0/toke
n

• China

https://login.partne
r.microsoftonline.cn
/<tenantid>/oauth2/v
2.0/token

• Germany

https://login.micros
oftonline.de/<tenant
id>/oauth2/v2.0/toke
n
Where <tenantid> is the
tenant ID of your Azure client
application as noted in step
6.a.

c. Select Create and test connection.

d. Once the connection test is complete, select Continue.

9. Configure the import schedule to import hardware data at regular
intervals.

a. In the Setup stage of the playbook, select the Configure
hardware import schedule activity.

b. Select Configure import schedule.

c. Expand the Parent scheduled data import within the Import
schedules list to select the Connection name-SG-Azure
Subscriptions import schedule.

d. In the Configure import schedule dialog box, select the Active
check box, and then fill in the run schedule and time details.

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

For more information, see Schedule a data import.

e. Select Save.
Alternatively, select Execute Now to execute the import schedule
immediately.

f. Select Continue.

10. Enter the connection details and test the API connection for
importing software data.

The Create and test software connection activity for importing
software data appears only when the Hardware and software check
box is selected in step 7.b.

a. In the Setup stage of the playbook, select the Create and test
software connection activity.

b. On the form, fill in the fields.

Create and test software connection form

Field
Description

Software connection name

Name to identify the software
connection record.

For example, SG-Azure
software connection.

Hardware connection name

Name of the hardware
connection record.

Note:   This field
is automatically set to
the hardware connection
name specified in step
8.b.

Connection URL

Base URL to connect to the
Log Analytics workspace in the
following format:

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

Field
Description

https://api.loganalytic
s.io/v1/workspaces/<wor
kspace_id>
Where <workspace_id> is
the ID of the Log Analytics
workspace as noted in step
6.a.

Note:   This field
is automatically set to
the URL to connect
to the Log Analytics
workspace. Replace the
<workspace_id> variable
in the auto-generated
URL with the workspace
ID of your Log Analytics
workspace.

OAuth client ID

Application (client) ID of your
Azure client application as
noted in step 6.a.

OAuth client secret

Client secret of your Azure
client application as noted in
step 6.a.

OAuth token URL

Token URL of your Azure client
application.
Based on the region of your
Azure client application, enter
the token URL in one of the
following formats:

• Global

https://login.micros
oftonline.com/<tenan
tid>/oauth2/v2.0/tok
en

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

• US Government

https://login.micros
oftonline.us/<tenant
id>/oauth2/v2.0/toke
n

• China

https://login.partne
r.microsoftonline.cn
/<tenantid>/oauth2/v
2.0/token

• Germany

https://login.micros
oftonline.de/<tenant
id>/oauth2/v2.0/toke
n
Where <tenantid> is the
tenant ID of your Azure client
application as noted in step
6.a.

c. Select Create and test connection.

d. Once the connection test is complete, select Continue.

11. Configure the import schedule to import software data at regular
intervals.

The Configure software import schedule activity for importing
software data appears only when the Hardware and software check
box is selected in step 7.b.

a. In the Setup stage of the playbook, select the Configure software
import schedule activity.

b. Expand the Parent scheduled data import within the Import
schedules list to select the Connection name-SG-Azure TCP
import schedule.

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

c. In the Configure import schedule dialog box, select the Active
check box, and then fill in the run schedule and time details.

For more information, see Schedule a data import.

d. Select Save.
Alternatively, select Execute Now to execute the import schedule
immediately.

e. Repeat steps 11.b to 11.d for any other parent import schedule if
not already set to active.

f. Select Continue.

12. In the Setup stage of the playbook, select the Connection setup
complete activity to verify whether the connection was created.

What to do next

Select View all connections to review the connection details. The
created connection appears in the Installed connections list.

Related concepts

• Service Graph Connector for Microsoft Azure

• Accessing the connection details of Service Graph Connector for
Microsoft Azure

• Additional features within the Service Graph Connector for Microsoft
Azure

Related reference

• CMDB classes targeted in Service Graph Connector for Microsoft Azure

• Supported Microsoft Azure resource types

• Service Graph Connector for Microsoft Azure properties

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

## Configure Service Graph Connector for Microsoft Azure
## using the guided setup

Set up data sources and scheduled import jobs to pull in data from Azure
into your CMDB.

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

• Discovery Core plugin (com.snc.discovery.core), which is automatically
installed by Discovery.

• The Datastream Action plugin
(com.glide.hub.action_type.datastream), which is automatically
installed.

• The ITOM Discovery License plugin (com.snc.itom.discovery.license).
You must activate this plugin.

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

• ITOM Licensing plugin (com.snc.itom.license). For more information, see

Request Discovery.

Important:   After the initial import of Azure data, the application
performs a delta import of data. However, you can perform a full
pull of data anytime later by disabling the delta synchronization
and setting the sn_sg_azure_integ.is_delta_sync_enabled property to
false. For more information, see Configuring data synchronization in
Service Graph Connector for Microsoft Azure.

Role required: admin

About this task

The connector uses the Azure Management APIs for the complete pull
of data from Azure. However, to pull delta changes from Azure, the
Azure Resource Graph APIs are used. The domain name system (DNS)
is Microsoft Azure Management, but the path is a resource graph.

For more information on the Azure setup instructions, see the Service
Graph Connector for Azure - Overview article on the ServiceNow
Community site.

Procedure

1. Navigate to All > Service Graph Connectors > Azure > Setup.

2. On the Getting started page, select Get Started.

3. Create data sources and scheduled imports for the new connection.

a. On the Service Graph Connector for Microsoft Azure page, in the
Update Data Sources and Scheduled Imports Access, select the
task Update Scheduled Data Import Access.

b. In the Update Scheduled Data Import Access section, select
Configure and do the following:

a. For the Update Scheduled Data Import access task, select
Configure.

b. Select the Global application scope by using the application
picker.

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

c. In the Application Access related list, select the Can create,
Can update, and Can delete check boxes, if not already
selected.

d. Select Update to close the tab and return to the guided
setup.

e. Modify the application scope again to Service Graph
Connector for Microsoft Azure by using the application
picker.

f. Set the Update Scheduled Data Import access task to
complete by selecting Mark as Complete.

g. Repeat the steps 3.b.ii to 3.b.v for the Update Data Source
Access task with the Data Source [sys_data_source] table
and set the task to complete by selecting Mark as Complete.

c. Clear the cache for the new connection.

a. In the Clear Cache for Datasource and Import set section,
select Configure.

b. In the Run script text box of the background script page,
enter the following script:

GlideTableManager.invalidateTable("sys_data_sou
rce");
GlideCacheManager.flushTable("sys_data_so
urce");

GlideTableManager.invalidateTable("schedu
led_import_set");
GlideCacheManager.flushTable("scheduled_i
mport_set");

GlideTableManager.invalidateTable("sys_db
_object");
GlideCacheManager.flushTable("sys_db_obje
ct");

c. Select Run Script to run the background script in the global
scope.

The script may take several minutes to execute.

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

d. After the script is executed, select Close.

e. From the application picker, select the Service Graph
Connector for Microsoft Azure application.

f. Select Mark as Complete.

4. Create a connection to import hardware configuration items (CIs)
from the Azure client application.

Note:   Ensure that you have the User.Read permission on the
Microsoft Graph API for the hardware import. Also, ensure that
the IAM policy for the Azure subscription has the Reader role. See
Assign a user as an administrator of an Azure subscription with
conditions on the Microsoft Azure documentation site.

a. Obtain the OAuth credentials from your Azure administrator.
Make a note of the following details:

• Application (client) ID

• Client Secret

• Directory (tenant) ID

• Connection URL

Note:   After getting the OAuth credentials, in the guided
setup for Service Graph Connector for Microsoft Azure, go
to the Create connection for the hardware import section
of the Service Graph Connector for Microsoft Azure page
and set the Get the OAuth credentials task to complete by
selecting Mark as Complete.

b. Configure your Azure hardware connection and credentials.

a. In the Create connection for the hardware import section
of the Service Graph Connector for Microsoft Azure page,
select Continue.

b. For the Create or Edit connection task, select Configure.

c. On the Connections page of the Workflow Studio,
select Configure for the SG-Azure Hardware Connection

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

connection that is available by default for the hardware
import.

You can create multiple connections by selecting Add
Connection.

d. On the form, review and modify the fields.

Configure Connection form

Field
Description

Connection Information

Connection Name

Name to uniquely identify
the hardware connection
record. For example,
SG-Azure Hardware
Connection.

Connection URL

Base URL to connect to your
Azure client application.

Note:   This field is
automatically set to the
URL to connect to the
application. Leave the
field value as is.

Credential Information

OAuth Client ID

Application (client) ID of
your Azure client application
as described in step 4.a.

OAuth Client Secret

Client Secret of your
Azure client application as
described in step 4.a.

OAuth Token URL

Token URL of your Azure
client application.
Based on the region of your
Azure client application,

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

enter the token URL in one of
the following formats:

• Global

https://login.micro
softonline.com/<ten
antid>/oauth2/v2.0/
token

• US Government

https://login.micro
softonline.us/<tena
ntid>/oauth2/v2.0/t
oken

• China

https://login.partn
er.microsoftonline.
cn/<tenantid>/oauth
2/v2.0/token

• Germany

https://login.micro
softonline.de/<tena
ntid>/oauth2/v2.0/t
oken
Where <tenantid> is the
tenant ID of your Azure client
application as described in
step 4.a.

e. Select Configure and Get OAuth Token.

f. When the OAuth token flow is successfully completed, return
to the Create connection for the hardware import task page
using the back button for your browser.

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

g. Set the Create or Edit connection task to complete by
selecting Mark as Complete.

c. Test the Microsoft Graph API connection to import hardware
data from the Azure client application.

a. For the Test Connection task, select Configure.

b. Select the data source associated with the newly created
connection in the Name column of the Data Sources list.

c. Select the Test Load 20 Records related link.

d. When the state changes to Complete, return to the setup by
selecting Back to Guided Setup in the Help panel.

e. Set the Test Connection task to complete by selecting Mark
as Complete.

d. Review the scheduled data imports configuration.

a. For the Set up scheduled import jobs task, select Configure.

b. Select the SG-Azure Subscriptions scheduled job.

c. On the Scheduled Data Import form, verify the field values for
the scheduled job and select the Active check box.

For more information, see Schedule a data import.

d. Select Update.

e. Set the Set up scheduled import jobs task to complete by
selecting Mark as Complete in the Help panel.

5. Create a connection to import software information from the Azure
client application.

Note:   Ensure that you have the Data.Read permission on the
Log Analytics API for the software import.

a. Obtain the OAuth credentials and set up the Log Analytics
workspace in the Azure.

a. Ensure that you have the OAuth credentials from step 4.a.

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

b. Configure the Log Analytics workspace in the Azure client
application.

• Use an existing workspace, if available.

• Create another workspace.

For more information, see Create Log Analytics
workspace in the Azure documentation.

Note:   Make a note of the Workspace ID.

c. Deploy Azure Monitor Agent (AMA), and then enable
change tracking and inventory using AMA.

For more information, see Enable Change Tracking and
Inventory using Azure Monitoring Agent in the Azure
documentation and the Configuring Azure for monitoring
your Azure VMs section of the How do I configure the Azure
Service Graph Connector? [KB2226163] article in the Now
Support Knowledge Base.

Note:   After obtaining the OAuth credentials, in the guided
setup for Service Graph Connector for Microsoft Azure, go to
the Create connection for the software import section of the
Service Graph Connector for Microsoft Azure page and set
the Get the OAuth credentials task to complete by selecting
Mark as Complete.

b. Configure your Azure software connection and credentials.

a. In the Create connection for the software import section
of the Service Graph Connector for Microsoft Azure page,
select Continue.

b. For the Create or Edit connection task, select Configure.

c. On the Connections page of the Workflow Studio, select
Configure for the SG-Azure log analytics connection
connection that is available by default for the software
import.

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

You can create multiple connections by selecting Add
Connection.

d. On the form, review and modify the fields.

Configure Connection form

Field
Description

Connection Information

Software Connection Name

Name to uniquely identify
the software connection
record. For example, SG-
Azure log analytics
connection.

Hardware Connection
Name

Name of the hardware
connection associated with
the software as described in
step 4.b.iv.

You add a hardware
connection name to
associate the software
connection with the
respective hardware.

Connection URL

Base URL to connect to the
Log Analytics workspace in
the following format:

https://api.loganalyti
cs.io/v1/workspaces/<w
orkspace_id>
Where <workspace_id> is
the ID of the Log Analytics
workspace as described in
step 5.a.ii.

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

Field
Description

Note:   This field is
automatically set to
the URL to connect
to the Log Analytics
workspace. Replace
the <workspace_id>
variable in the auto-
generated URL with
the workspace ID of
your Log Analytics
workspace.

Credential Information

OAuth Client ID

Application (client) ID of
your Azure client application
as described in step 4.a.

OAuth Client Secret

Client Secret of your
Azure client application as
described in step 4.a.

OAuth Token URL

Token URL of your Azure
client application.
Based on the region of your
Azure client application,
enter the token URL in one of
the following formats:

• Global

https://login.micro
softonline.com/<ten
antid>/oauth2/v2.0/
token

• US Government

https://login.micro
softonline.us/<tena

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

Field
Description

ntid>/oauth2/v2.0/t
oken

• China

https://login.partn
er.microsoftonline.
cn/<tenantid>/oauth
2/v2.0/token

• Germany

https://login.micro
softonline.de/<tena
ntid>/oauth2/v2.0/t
oken
Where <tenantid> is the
tenant ID of your Azure client
application as described in
step 4.a.

e. Select Configure and Get OAuth Token.

f. When the OAuth token flow is successfully completed, return
to the Create connection for the software import task page
using the back button for your browser.

g. Set the Create or Edit connection task to complete by
selecting Mark as Complete.

c. Test the Log Analytics API connection to import software data
from the Azure client application.

a. For the Test Connection task, select Configure.

b. Select the data source associated with the newly created
connection in the Name column of the Data Sources list.

c. Select the Test Load 20 Records related link.

d. When the state changes to Complete, return to the setup by
selecting Back to Guided Setup in the Help panel.

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

e. Set the Test Connection task to complete by selecting Mark
as Complete.

d. Review the scheduled data imports configuration.

a. For the Set up scheduled import jobs task, select Configure.

b. Select the SG-Azure Software scheduled data import.

c. On the Scheduled Data Import form, verify the field values for
the scheduled job and select the Active check box.

For more information, see Schedule a data import.

d. Select Update.

e. Set the Set up scheduled import jobs task to complete by
selecting Mark as Complete in the Help panel.

6. (Optional) Enable extended discovery using the run command.

The run command is used to run a set of commands on the VMs
to fetch server information such as CPU count, cores, model, and
manufacturer. For information about extended discovery using the
run command, see the Extended discovery with Run Command on
Service Graph connector for Microsoft Azure [KB2210811] article in
the Now Support Knowledge Base.

a. Download the scripts that are required to enable extended
discovery.

a. For the Download the scripts task, select Configure.

b. After the scripts are downloaded, select Mark as Complete
to set the Download the scripts task to complete.

b. Configure an Azure storage account for extended discovery.

a. For the Configure Azure Storage account for Run Command
task, select Configure.

For information about configuring an Azure storage account
for extended discovery, see the Instructions for setting up Run
Command in Service Graph Connector for Azure [KB2001668]
article in the Now Support Knowledge Base.

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

b. Set up a new Azure storage account.

c. Set up a container to upload the script files.

d. Set up another container to store the results.

e. Provide run command access to the service principal.

f. Select Mark as Complete to set the Configure Azure Storage
account for Run Command task to complete.

c. Configure the connection properties for the new instance that
you created for Service Graph Connector for Microsoft Azure.

a. For the Configure connection properties task, select
Configure.

b. In the Connection* field of the SG-Azure Configuration
Properties section, select the new instance that you created.

The fields in the Properties section are populated with the
details of the instance.

c. In the Properties section, provide the following details for the
instance that you created:

• Name of the storage account where the containers are
created

• Subscription ID where the storage account is created

• Resource group of the storage account

• Name of the container where the sh and ps1 files are
uploaded in Azure

• Name of the container where the results of the
commands are to be stored

• URI of the sh file that has to be run on Linux machines

• URI of the ps1 file that has to be run on Windows
machines

d. Select Save.

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

e. Select Mark as Complete to set the Configure connection
properties task to complete.

Result

The data from Azure is pulled into your CMDB.

## CMDB classes targeted in Service Graph Connector for
## Microsoft Azure

When you complete setting up the connection, you can configure the
integration to periodically pull data from Microsoft Azure. The data is
saved in tables that extend from the Configuration item [cmdb_ci] table.

Application [cmdb_ci_appl]

The following attributes in the Application [cmdb_ci_appl] table are
populated by collected data:

Attribute label
Attribute name

Class
sys_class_name

Version
version

TCP port(s)
tcp_port

Running Process
running_process

Running process key parameters
running_process_key_parameters

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
Computer
[cmdb_ci_computer]

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

Availability Zone [cmdb_ci_availability_zone]

The following attributes in the Availability Zone
[cmdb_ci_availability_zone] table are populated by collected data.

Attribute label
Attribute name

Install Status
install_status

Name
name

Object ID
object_id

Operational status
operational_status

State
state

Relationship created for Availability Zone

Parent class
Relationship type
Child class

Availability Zone
[cmdb_ci_availability_
zone]

Reference
Key Value
[cmdb_key_value]

Azure Datacenter [cmdb_ci_azure_datacenter]

The following attributes in the Azure Datacenter
[cmdb_ci_azure_datacenter] table are populated by collected data.

Attribute label
Attribute name

Comments
comments

Name
name

Object ID
object_id

Region
region

Status
install_status

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

Relationships created for Azure Datacenter

Parent class
Relationship type
Child class

Azure Datacenter
[cmdb_ci_azure_data
center]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Azure Datacenter
[cmdb_ci_azure_data
center]

Contains::Contained
by

Resource Group
[cmdb_ci_resource_gr
oup]

Azure Datacenter
[cmdb_ci_azure_data
center]

Contains::Contained
by

Availability Zone
[cmdb_ci_availability_
zone]

Cloud DataBase [cmdb_ci_cloud_database]

The following attributes in the Cloud DataBase
[cmdb_ci_cloud_database] table are populated by collected data.

Attribute label
Attribute name

Fully qualified domain name
fqdn

Install Status
install_status

Name
name

Object ID
object_id

Operational status
operational_status

State
state

Type
type

Version
version

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

Relationships created for Cloud DataBase

Parent class
Relationship type
Child class

Cloud DataBase
[cmdb_ci_cloud_data
base]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Cloud DataBase
[cmdb_ci_cloud_data
base]

Reference
Key Value
[cmdb_key_value]

Cloud Function [cmdb_ci_cloud_function]

The following attributes in the Cloud Function [cmdb_ci_cloud_function]
table are populated by collected data.

Attribute label
Attribute name

App Function state
app_function_state

Code Location URL
code_location_url

Fully qualified domain name
fqdn

Function Last Modified
function_last_modified

Install Status
install_status

IP Address
ip_address

Name
name

Object ID
object_id

Operational status
operational_status

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

Relationship created for Cloud Function

Parent class
Relationship type
Child class

Cloud Function
[cmdb_ci_cloud_funct
ion]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Cloud LB IPAddress [cmdb_ci_cloud_lb_ipaddress]

The following attributes in the Cloud LB IPAddress
[cmdb_ci_cloud_lb_ipaddress] table are populated by collected data.

Attribute label
Attribute name

Fully qualified domain name
fqdn

Install Status
install_status

IP Address
ip_address

IPAddress Type
ipaddress_type

Name
name

Object ID
object_id

Operational status
operational_status

Cloud Load Balancer [cmdb_ci_cloud_load_balancer]

The following attributes in the Cloud Load Balancer
[cmdb_ci_cloud_load_balancer] table are populated by collected data.

Attribute label
Attribute name

Canonical Hosted Zone Name
canonical_hosted_zone_name

DNS Name
dns_name

Fully qualified domain name
fqdn

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

Attribute label
Attribute name

Install Status
install_status

IP Address
ip_address

Name
name

Object ID
object_id

Operational status
operational_status

State
state

Relationships created for Cloud Load Balancer

Parent class
Relationship type
Child class

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Owns::Owned by

Cloud LB IPAddress
[cmdb_ci_cloud_lb_ip
address]

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Reference
Key Value
[cmdb_key_value]

Cloud Mgmt Network Interface [cmdb_ci_nic]

The following attributes in the Cloud Mgmt Network Interface
[cmdb_ci_nic] table are populated by collected data.

Attribute label
Attribute name

Configuration Item
cmdb_ci

Install Status
install_status

IP Address
ip_address

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

Attribute label
Attribute name

MAC Address
mac_address

Name
name

Object ID
object_id

Operational status
operational_status

Primary
primary

Private IP
private_ip

Public DNS
public_dns

Public IP
public_ip

State
state

Static
is_static

Relationships created for Cloud Mgmt Network Interface

Parent class
Relationship type
Child class

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Contains::Contained
by

Cloud Public IP
Address
[cmdb_ci_cloud_publi
c_ipaddress]

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Reference
Key Value
[cmdb_key_value]

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Reference
Virtual Machine
Instance

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

Parent class
Relationship type
Child class

[cmdb_ci_vm_instanc
e]

Cloud Network [cmdb_ci_network]

The following attributes in the Cloud Network [cmdb_ci_network] table
are populated by collected data.

Attribute label
Attribute name

Cidr
cidr

Install Status
install_status

Name
name

Object ID
object_id

Operational status
operational_status

State
state

Relationships created for Cloud Network

Parent class
Relationship type
Child class

Cloud Network
[cmdb_ci_network]
Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Cloud Network
[cmdb_ci_network]

Contains::Contained
by

Compute Security
Group
[cmdb_ci_compute_s
ecurity_group]

Cloud Network
[cmdb_ci_network]

Contains::Contained
by

Cloud Subnet
[cmdb_ci_cloud_subn
et]

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

Parent class
Relationship type
Child class

Cloud Network
[cmdb_ci_network]
Reference
Key Value
[cmdb_key_value]

Cloud Public IP Address [cmdb_ci_cloud_public_ipaddress]

The following attributes in the Cloud Public IP Address
[cmdb_ci_cloud_public_ipaddress] table are populated by collected
data.

Attribute label
Attribute name

Install Status
install_status

Name
name

Object ID
object_id

Operational status
operational_status

Public DNS
public_dns

Public IP Address
public_ip_address

State
state

Relationships created for Cloud Public IP Address

Parent class
Relationship type
Child class

Cloud Public IP
Address
[cmdb_ci_cloud_publi
c_ipaddress]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Cloud Public IP
Address
[cmdb_ci_cloud_publi
c_ipaddress]

Reference
Key Value
[cmdb_key_value]

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

Cloud Resource [cmdb_ci_cmp_resource]

The following attributes in the Cloud Resource [cmdb_ci_cmp_resource]
table are populated by collected data.

Attribute label
Attribute name

Description
short_description

Install Status
install_status

Name
name

Object ID
object_id

Operational status
operational_status

Resource type
resource_type

State
state

Relationships created for Cloud Resource

Parent class
Relationship type
Child class

Cloud Resource
[cmdb_ci_cmp_resour
ce]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Cloud Resource
[cmdb_ci_cmp_resour
ce]

Reference
Key Value
[cmdb_key_value]

Cloud Service Account [cmdb_ci_cloud_service_account]

The following attributes in the Cloud Service Account
[cmdb_ci_cloud_service_account] table are populated by collected
data.

Attribute label
Attribute name

Account Id
account_id

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

Attribute label
Attribute name

Name
name

Object ID
object_id

Datacenter Type
datacenter_type

Relationship created for Cloud Service Account

Parent class
Relationship type
Child class

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Reference
Key Value
[cmdb_key_value]

Cloud Storage Account [cmdb_ci_cloud_storage_account]

The following attributes in the Cloud Storage Account
[cmdb_ci_cloud_storage_account] table are populated by collected
data.

Attribute label
Attribute name

Blob Service
blob_service

File Service
file_service

Install Status
install_status

Name
name

Object ID
object_id

Queue Service
queue_service

Sku Name
sku_name

State
state

Table Service
table_service

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

Relationships created for Cloud Storage Account

Parent class
Relationship type
Child class

Cloud Storage
Account
[cmdb_ci_cloud_stora
ge_account]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Cloud Storage
Account
[cmdb_ci_cloud_stora
ge_account]

Reference
Key Value
[cmdb_key_value]

Cloud Subnet [cmdb_ci_cloud_subnet]

The following attributes in the Cloud Subnet [cmdb_ci_cloud_subnet]
table are populated by collected data.

Attribute label
Attribute name

CIDR
cidr

Install Status
install_status

Name
name

Object ID
object_id

Operational status
operational_status

State
state

Relationship created for Cloud Subnet

Parent class
Relationship type
Child class

Cloud Subnet
[cmdb_ci_cloud_subn
et]

Reference
Key Value
[cmdb_key_value]

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

Compute Security Group [cmdb_ci_compute_security_group]

The following attributes in the Compute Security Group
[cmdb_ci_compute_security_group] table are populated by collected
data.

Attribute label
Attribute name

Install Status
install_status

Name
name

Object ID
object_id

Operational status
operational_status

State
state

Relationships created for Compute Security Group

Parent class
Relationship type
Child class

Compute Security
Group
[cmdb_ci_compute_s
ecurity_group]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Compute Security
Group
[cmdb_ci_compute_s
ecurity_group]

Reference
Key Value
[cmdb_key_value]

Computer [cmdb_ci_computer]

The following attributes in the Computer [cmdb_ci_computer] table are
populated by collected data.

Attribute label
Attribute name

Name
name

CPU core count
cpu_core_count

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

Attribute label
Attribute name

CPU count
cpu_count

Disk space (GB)
disk_space

IP Address
ip_address

Is Virtual
virtual

Object ID
object_id

Operating System
os

Operational status
operational_status

OS Version
os_version

RAM (MB)
ram

Serial number
serial_number

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

Virtualized
by::Virtualizes

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

For information about the classification of VDIs into the Computer
[cmdb_ci_computer] CI class, see the Classification of VDIs into
computer class using Service graph connector for Azure [KB2184443]
article in the Now Support Knowledge Base.

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

Hardware Type [cmdb_ci_compute_template]

The following attributes in the Hardware Type
[cmdb_ci_compute_template] table are populated by collected data.

Attribute label
Attribute name

Name
name

Object ID
object_id

Class
sys_class_name

Cores
cores

Logical Storage GB
local_storage_gb

Memory MB
memory_mb

vCPUs
vcpus

Relationship created for Hardware Type

Parent class
Relationship type
Child class

Hardware Type
[cmdb_ci_compute_t
emplate]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Note:   When the Cloud Hardware Type class extension is enabled,
the Class attribute is set to Cloud Hardware Type. Else, the attribute
is set to Hardware Type.

As a user with the admin role, you can enable the Cloud Hardware
Type class extension by setting the use a single hardware type for
cloud data centers property (sn_itom_pattern.use a single hardware
type for cloud data centers) to true. For more information, see
the Service Graph Connector For Microsoft Azure - Migrating to a
new hardware type model [KB1288455] article in the Now Support
Knowledge Base.

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

Relationship created for Hardware Type

Parent class
Relationship type
Child class

Hardware Type
[cmdb_ci_compute_t
emplate]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Image [cmdb_ci_os_template]

The following attributes in the Image [cmdb_ci_os_template] table are
populated by collected data.

Attribute label
Attribute name

Guest OS
guest_os

Image Source
image_source

Install Status
install_status

Name
name

Object ID
object_id

Offer
offer

Operational status
operational_status

Version
version

Vendor
vendor

Relationship created for Image

Parent class
Relationship type
Child class

Image
[cmdb_ci_os_templat
e]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

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

Instance Scale Set [cmdb_ci_instance_scale_set]

The following attributes in the Instance Scale Set
[cmdb_ci_instance_scale_set] table are populated by collected data.

Attribute label
Attribute name

Install Status
install_status

Name
name

Object ID
object_id

Operational status
operational_status

State
state

Relationship created for Instance Scale Set

Parent class
Relationship type
Child class

Instance Scale Set
[cmdb_ci_instance_sc
ale_set]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

IP Address [cmdb_ci_ip_address]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data.

Attribute label
Attribute name

Owned By Configuration Item
owned_by_cmdb_ci

IP Address
ip_address

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

51

Zurich ServiceNow AI Platform Capabilities

---
*Page 52*

Relationships created for IP Address

Parent class
Relationship type
Child class

IP Address
[cmdb_ci_ip_address]
Reference

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

IP Address
[cmdb_ci_ip_address]
Reference
Computer
[cmdb_ci_computer]

Key Value [cmdb_key_value]

The following attributes in the Key Value [cmdb_key_value] table are
populated by collected data.

Attribute label
Attribute name

Key
key

Value
value

Kubernetes Cluster [cmdb_ci_kubernetes_cluster]

The following attributes in the Kubernetes Cluster
[cmdb_ci_kubernetes_cluster] table are populated by collected data.

Attribute label
Attribute name

Cluster Resource ID
cluster_resource_id

Cluster Version
cluster_version

Fully qualified domain name
fqdn

Install Status
install_status

Kubernetes UID
k8s_uid

Name
name

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

Relationship created for Kubernetes Cluster

Parent class
Relationship type
Child class

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Linux Server [cmdb_ci_linux_server]

The following attributes in the Linux Server [cmdb_ci_linux_server] table
are populated by collected data.

Attribute label
Attribute name

CPU core count
cpu_core_count

Disk space (GB)
disk_space

Install Status
install_status

Is Virtual
virtual

Name
name

Object ID
object_id

Operating System
os

Operational status
operational_status

OS Version
os_version

RAM (MB)
ram

Serial number
serial_number

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

Relationship created for Linux Server

Parent class
Relationship type
Child class

Linux Server
[cmdb_ci_linux_server]

Virtualized
by::Virtualizes

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Resource Group [cmdb_ci_resource_group]

The following attributes in the Resource Group [cmdb_ci_resource_group]
table are populated by collected data.

Attribute label
Attribute name

Name
name

Object ID
object_id

Operational status
operational_status

Install Status
install_status

State
state

Relationships created for Resource Group

Parent class
Relationship type
Child class

Resource Group
[cmdb_ci_resource_gr
oup]

Contains::Contained
by

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Resource Group
[cmdb_ci_resource_gr
oup]

Contains::Contained
by

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Resource Group
[cmdb_ci_resource_gr
oup]

Contains::Contained
by

Instance Scale Set
[cmdb_ci_instance_sc
ale_set]

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

Parent class
Relationship type
Child class

Resource Group
[cmdb_ci_resource_gr
oup]

Contains::Contained
by

Image
[cmdb_ci_os_templat
e]

Resource Group
[cmdb_ci_resource_gr
oup]

Contains::Contained
by

Storage Volume
[cmdb_ci_storage_vol
ume]

Resource Group
[cmdb_ci_resource_gr
oup]

Reference
Key Value
[cmdb_key_value]

Serial Number [cmdb_serial_number]

The following attributes in the Serial Number [cmdb_serial_number] table
are populated by collected data.

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
Server
[cmdb_ci_server]

Serial Number
[cmdb_serial_number]
Reference
Windows Server
[cmdb_ci_win_server]

Serial Number
[cmdb_serial_number]
Reference
Linux Server
[cmdb_ci_linux_server]

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

Server [cmdb_ci_server]

The following attributes in the Server [cmdb_ci_server] table are
populated by collected data.

Attribute label
Attribute name

CPU core count
cpu_core_count

CPU count
cpu_count

Disk space (GB)
disk_space

Install Status
install_status

Is Virtual
virtual

Name
name

Object ID
object_id

Operating System
os

Operational status
operational_status

OS Version
os_version

RAM (MB)
ram

Serial number
serial_number

Comments
comments

Relationships created for Server

Parent class
Relationship type
Child class

Server
[cmdb_ci_server]
Owns::Owned by

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

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

Parent class
Relationship type
Child class

Server
[cmdb_ci_server]

Virtualized
by::Virtualizes

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Software [cmdb_ci_spkg]

The following attributes in the Software [cmdb_ci_spkg] table are
populated by collected data.

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
table are populated by collected data.

Attribute label
Attribute name

Display name
display_name

Publisher
publisher

Version
version

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

Attribute label
Attribute name

Discovery source
discovery_source

Software Instance [cmdb_software_instance]

The following attributes in the Software Instance
[cmdb_software_instance] table are populated by collected data.

Attribute label
Attribute name

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

Storage Volume [cmdb_ci_storage_volume]

The following attributes in the Storage Volume
[cmdb_ci_storage_volume] table are populated by collected data.

Attribute label
Attribute name

Install Status
install_status

Name
name

Object ID
object_id

Operational status
operational_status

Size
size

Size bytes
size_bytes

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

Attribute label
Attribute name

State
state

Volume ID
volume_id

Relationships created for Storage Volume

Parent class
Relationship type
Child class

Storage Volume
[cmdb_ci_storage_vol
ume]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Storage Volume
[cmdb_ci_storage_vol
ume]

Reference
Key Value
[cmdb_key_value]

Virtual Machine Instance [cmdb_ci_vm_instance]

The following attributes in the Virtual Machine Instance
[cmdb_ci_vm_instance] table are populated by collected data.

Attribute label
Attribute name

CPUs
cpus

Disks size (GB)
disks_size

Install Status
install_status

IP Address
ip_address

Memory (MB)
memory

Name
name

Object ID
object_id

Operational status
operational_status

State
state

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

Attribute label
Attribute name

VM Instance ID
vm_inst_id

Relationships created for Virtual Machine Instance

Parent class
Relationship type
Child class

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Managed
by::Manages

Instance Scale Set
[cmdb_ci_instance_sc
ale_set]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Provisioned
From::Provisioned

Image
[cmdb_ci_os_templat
e]

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

Contains::Contained
by

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Uses:Used by

Storage Volume
[cmdb_ci_storage_vol
ume]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Reference
Key Value
[cmdb_key_value]

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

Parent class
Relationship type
Child class

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Reference
Computer
[cmdb_ci_computer]

Windows Server [cmdb_ci_win_server]

The following attributes in the Windows Server [cmdb_ci_win_server] table
are populated by collected data.

Attribute label
Attribute name

CPU core count
cpu_core_count

Disk space (GB)
disk_space

Install Status
install_status

Is Virtual
virtual

Name
name

Object ID
object_id

Operating System
os

Operational status
operational_status

OS Version
os_version

RAM (MB)
ram

Serial number
serial_number

Relationship created for Windows Server

Parent class
Relationship type
Child class

Windows Server
[cmdb_ci_win_server]

Virtualized
by::Virtualizes

Virtual Machine
Instance

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

Parent class
Relationship type
Child class

[cmdb_ci_vm_instanc
e]

## Quick start tests for Service Graph Connector for
## Microsoft Azure

Validate that Service Graph Connector for Microsoft Azure still works after
you make any configuration change such as applying an upgrade or
developing an application. Copy and customize these quick start tests to
pass when using your instance-specific data.

Danger:   By default, the system property that is used to run
automated tests is disabled to prevent you from accidentally running
these tests on a production system. To avoid data corruption or
an outage, run tests only on development, test, and other non-
production instances. See Enable or disable executing Automated
Test Framework tests.

Service Graph Connector for Microsoft Azure

SG-Azure: Service Graph Connector for Microsoft Azure
Validation test suite
Test suite to verify the integrity of an integration using
multiple tests.

Test
Description
Release version

SG-Azure Availability
Zone

Validate the
successful ingestion of
the record in the
Availability Zone table
with the prerequisite
parent ingestion.

Utah

SG-Azure Data Center

Validate the
successful ingestion
of multiple records
in the Azure Data

Utah

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

Test
Description
Release version

Center table with
the prerequisite parent
ingestion.

SG-Azure Functions

Validate the
successful ingestion
of multiple records
in the Cloud
Service Account,
Data Center, Cloud
Database, and Cloud
Function.

Utah

SG-Azure Generic
Resources

Validate the
successful ingestion of
multiple records in the
Cloud Resource and
Relations table.

Utah

SG-Azure Hardware
Template

Validate the
successful ingesion of
multiple records in the
Hardware Template
and Compute
Template tables.

Utah

SG-Azure Load
Balancers

Validate the
successful ingestion of
multiple records in
the Load Balancer,
Computer Security
Group and Relations
table with the
prerequisite parent
ingestion.

Utah

SG-Azure Network

Validate the
successful ingestion of
multiple records in the
Network table with

Utah

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

Test
Description
Release version

the prerequisite parent
ingestion.

SG-Azure Network
Interface

Validate the
successful ingestion of
multiple records in the
Networks, Public IP
Address and Relations
table.

Utah

SG-Azure Public IP
Address

Validate the
successful ingestion of
multiple records in
the Public IP Address,
Networks, and Load
Balancer tables.

Utah

SG-Azure Resource
Group

Validate the
successful ingestion
of records in the
Resource Group table.

Utah

SG-Azure Scale Sets

Validate the
successful ingestion of
records in the Scale
Sets and Relations
tables.

Utah

SG-Azure Scale Sets
VMs

Validate the
successful ingestion of
multiple records in
the Servers, Virtual
Machine Instance,
Scale Sets, and
Relations tables with
the prerequisite parent
ingestion.

Utah

SG-Azure Security
Groups

Validate the
successful ingestion
of multiple records

Utah

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

Test
Description
Release version

in the Cloud Service
Account, Computer
Security Group, and
Relations tables with
the prerequisite parent
ingestion.

SG-Azure Server
Config Data

Validate the
successful ingestion of
multiple records in
the Virtual Machine
Instance, Linux Server,
and Relations tables
with the prerequisite
parent ingestion.

Utah

SG-Azure Software

Validate the
successful ingestion of
multiple records in
the Virtual Machine
Instance, Software
Records, and Relations
tables with the
prerequisite parent
ingestion.

Utah

SG-Azure SQL

Validate the
successful ingestion
of multiple records
in the Data Center,
Cloud Database, and
Relations tables with
the prerequisite parent
ingestion.

Utah

SG-Azure Storage
Account

Validate the
successful ingestion of
multiple records in
the Storage Account,
Computer Security
Group and Relations

Utah

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

Test
Description
Release version

tables with the
prerequisite parent
ingestion.

SG-Azure Storage
Volume

Validate the
successful ingestion of
multiple records in
the Storage Volume,
Computer Security
Group and Relations
tables with the
prerequisite parent
ingestion.

Utah

SG-Azure Subscription

Validate the
successful ingestion of
records in the Cloud
Service Account table.

Utah

SG-Azure VMs

Validate the
successful ingestion of
multiple records in
the Virtual Machines,
Virtual Machine
Instance and Relations
tables with prerequisite
parent ingestion.

Utah

To learn more about Service Graph Connector for Microsoft Azure, see
Service Graph Connector for Microsoft Azure.

Related topics

• Quick start tests

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

## Accessing the connection details of Service Graph
## Connector for Microsoft Azure

You can access the connection details of the Service Graph Connector
for Microsoft Azure in a single view using the common connection
framework (CCF) included within the Integration Commons for CMDB
(sn_cmdb_int_util) store app.

With the CCF, you can access all the connections used by the Service
Graph Connector for Microsoft Azure. The connection details include the
connection alias, connection properties, data sources, and scheduled
data imports associated with a connection. You can also test the
connection. For more information, see Accessing the connection details
of Service Graph Connectors.

Access the details of an Azure connection

Access the details of an Azure connection configured for the Service
Graph Connector for Microsoft Azure.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > Azure > Connections.

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

67

Zurich ServiceNow AI Platform Capabilities

---
*Page 68*

## Additional features within the Service Graph Connector
## for Microsoft Azure

Use the additional features available within the Service Graph Connector
for Microsoft Azure to maximize its use for importing data.

The following features are available within the Service Graph Connector
for Microsoft Azure:

Configure multiple Azure connections

Follow the guided setup to establish a hardware or software connection,
or configure a workspace when adding a software connection.

Set partition size for parallel loading-enabled Azure accounts

Optimize the performance of data sources by enabling parallel data
loading.

Disable delta synchronization

Import full data from your Azure instance when needed.

Enabling VM insights for collecting Azure data

Enable the VM insights feature for all the VMs in your Log Analytics
workspace to populate the VMConnection and VMProcess tables in
Azure.

## Setting up multiple connections in Service Graph
## Connector for Microsoft Azure

The Service Graph Connector for Microsoft Azure supports multiple Azure
connections.

Important:   Add multiple connections by selecting Add connection
on the Connections page of the Workflow Studio in the guided
setup. For more information, see Configure Service Graph Connector
for Microsoft Azure.

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

Setting up multiple connections

You can set up a hardware or software connection by using the guided
setup. The Service Graph Connector for Microsoft Azure supports only
one-to-one mapping between hardware and software connections.
Therefore, when configuring multiple software connections, you must
also configure an equivalent number of hardware connections. You
can differentiate multiple connections using their respective connection
aliases.

For example, if you add 10 software connections for 10 different
workspaces, you must also add 10 hardware connections for each
corresponding software connection.

Setting up multiple workspaces

You can set up a workspace when adding a software connection using
the guided setup. To set up multiple workspaces, you must configure that
many different software connections in the Service Graph Connector for
Microsoft Azure as there are workspaces and an equivalent number of
hardware connections.

For example, if you have 10 workspaces, you must add 10 software
connections for each workspace and 10 hardware connections for each
corresponding software connection.

## Set partition size for parallel loading-enabled Azure
## accounts

Optimize the performance of data sources by setting the partition size in
the azure_full_pull_partition_size system property.

Before you begin

Set the application scope to Service Graph Connector for Microsoft
Azure using the application picker. For more information, see Application
picker.

Role required: admin

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

About this task

The parallel loading feature is available for the following data sources:

• Starting with the Service Graph Connector for Microsoft Azure 1.13.0
version:

• SG-Azure Functions

• SG-Azure Generic Resources

• SG-Azure Get Run Command

• SG-Azure Hardware Template Updation

• SG-Azure HW Consolidation

• SG-Azure Kubernetes Cluster

• SG-Azure Load Balancers

• SG-Azure Network Interface

• SG-Azure Public IP Address

• SG-Azure Run Command

• SG-Azure Scale Sets VMs

• Starting with the Service Graph Connector for Microsoft Azure 1.11.0
version:

• SG-Azure Network

• SG-Azure Virtual Machines

• SG-Azure Storage Volume

For a full data pull, the azure_full_pull_partition_size property determines
the number of Azure subscriptions that can be executed as parallel
jobs to retrieve configuration item (CI) data. Partition size determines
how many Azure subscriptions a single parallel-thread evaluates for data
retrieval. If you set the azure_full_pull_partition_size property to 100, the
partition size is 100 subscriptions.

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

Note:   If the azure_full_pull_partition_size property isn't configured,
the partition size computation feature of the Integration Commons
for CMDB application automatically determines the partition size for
parallel loading at runtime. See Partition size computation for parallel
loading in Integration Commons for CMDB.

Procedure

1. Navigate to All > Service Graph Connectors > Azure > Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

3. From the Property column of the Service Graph Connection
Properties related list, select azure_full_pull_partition_size.
The azure_full_pull_partition_size system property determines the
number of subscriptions that each partition processes for a full pull.
For more information, see Service Graph Connector for Microsoft
Azure properties.

4. In the Value field, enter a numeric value greater than 0 for the
partition size.

5. Select Update.

Note:   After you enable parallel data loading for a data source,
the Test Load 20 Records and Load All Records options don't
work for executing the data source. You must select Execute
Now from Scheduled Data Import to execute the data source for
which parallel loading is enabled.

## Configuring data synchronization in Service Graph
## Connector for Microsoft Azure

You can configure the system property for synchronizing only delta data
from an Azure instance.

The connector provides the ability to import only delta data from
an Azure instance. With delta synchronization enabled, the importing
process of Azure data is quicker because the connector imports the
changes in Azure data only.

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

For data sources discovered by a software connection, the Last Run
Datetime field displays the timestamp of the most recent delta pull run.
The Last Run Datetime field is updated only when the last delta pull run
was a success. An empty Last Run Datetime field indicates no previous
delta pull run for the data source, but either a full pull run or no run at all.
The delta pull period is calculated by subtracting the last run date and
time from the current date and time; that is, Delta period = Current date
timestamp - Last run date timestamp.

For data sources discovered by a hardware connection, the Last Success
Import Time field displays the timestamp of the most recent delta pull run.
The Last Success Import Time field is updated only when the last delta
pull run was a success. An empty Last Success Import Time field indicates
no previous delta pull run for the data source, but either a full pull run
or no run at all. The delta pull period is calculated by subtracting the
last successful import date and time from the current date and time;
that is, Delta period = Current date timestamp - Last success import date
timestamp.

The application includes the sn_sg_azure_integ.is_delta_sync_enabled
system property to enable delta synchronization. By default, the property
is set to true. To import full data from your Azure instance, disable
the sn_sg_azure_integ.is_delta_sync_enabled property. See Disable delta
synchronization.

For a delta pull, you can also configure the grace time, page size,
preceding time period, and API call duration using system properties.
For more information, see Service Graph Connector for Microsoft Azure
properties.

Disable delta synchronization

Disable delta synchronization to import all Microsoft Azure data.

Before you begin

Set the application scope to Service Graph Connector for Microsoft
Azure using the application picker. For more information, see Application
picker.

Role required: admin

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

Procedure

1. Enter sys_properties.list in the navigation filter, and then open
the sn_sg_azure_integ.is_delta_sync_enabled property.

2. In the Value field, enter false.

3. Select Update.

## Enabling VM insights for collecting Azure data

You must enable the VM insights feature in the Azure portal for collecting
TCP and processes data using the Service Graph Connector for Microsoft
Azure.

Requirements for enabling the VM insights feature

• Ensure that you’ve created the Log Analytics workspace to push the
logs from virtual machines (VMs) via insights in Azure Monitor. See
Insights in Azure Monitor on the Microsoft Azure documentation site.

• Note down the subscription name associated with your Log Analytics
workspace.

Collecting the TCP and processes data

The SG-Azure TCP and SG-Azure VM Config Data data sources in the
Service Graph Connector for Microsoft Azure import data from the
VMConnection and VMProcess tables in Azure, respectively. To fetch
data correctly from the VMConnection and VMProcess tables in Azure,
you must enable the VM insights feature for all the VMs in your Log
Analytics workspace. To learn how to populate these tables via insights,
see Enable VM insights in the Azure portal on the Microsoft Azure
documentation site.

There are several methods available for enabling VM insights. For more
information, see Enable VM insights overview on the Microsoft Azure
documentation site.

Note:   In the data collection rule, ensure that you’ve selected the
Enable guest performance and Enable processes and dependencies
(Maps) check boxes on the rule form.

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

## Service Graph Connector for Microsoft Azure reference

Reference topics provide additional information about Service Graph
Connector for Microsoft Azure components.

• Supported Microsoft Azure resource types

Several Microsoft Azure resource types are imported as CMDB data.

• Microsoft Azure discovery solutions comparison

ITOM Visibility applications discover a variety of Microsoft Azure
resources and populate the relevant configuration item (CI) classes in
the Configuration Management Database (CMDB) with their attributes.

• Life cycle management of records in Service Graph Connector for
Microsoft Azure

Life cycle management in the Service Graph Connector for Microsoft
Azure monitors and updates the statuses of Azure resources throughout
their entire life cycle, from creation to deletion.

• Record removal process in Service Graph Connector for Microsoft
Azure

The Service Graph Connector for Microsoft Azure uses the Integration
Commons record removal process for life cycle management during
full data loads. For delta loads, life cycle management of records is
based on updates from Microsoft Azure.

• Service Graph Connector for Microsoft Azure properties

Service Graph Connector for Microsoft Azure properties control the
behavior of the connector.

## Supported Microsoft Azure resource types

Several Microsoft Azure resource types are imported as CMDB data.

Microsoft Azure resource types refer to the names included in delta
queries used for filtering data using the Azure Resource Graph API for
a specific data source.

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

Note:   Delta pulls include data from a specific time period that is
defined by the condition within a delta query.

The following table lists the Service Graph Connector for Microsoft Azure
data sources, Microsoft Azure resource types they import, and indicates
whether they support both full pull and delta pull of data during import.
✓ indicates supported and ✕ indicates not supported.

Resource types supported in Service Graph Connector for
Microsoft Azure

Data source
CMDB CI
classes

Microsoft
Azure
resource type

Full pull
Delta pull

SG-Azure
Subscriptions

Cloud
Service
Account
[cmdb_ci_cl
oud_service_
account]

Microsoft.Res
ources/
subscriptions

✓
✓

Key Value
[cmdb_key_
value]

Tags
✓
✓

SG-Azure
Datacenter
Updation

Azure
Datacenter
[cmdb_ci_az
ure_datacen
ter]

None
✓
✓

SG-Azure
Resource
Group

Resource
Group
[cmdb_ci_re
source_grou
p]

Microsoft.Res
ources/
subscriptions
/
resourcegro
ups

✓
✓

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

Data source
CMDB CI
classes

Microsoft
Azure
resource type

Full pull
Delta pull

Key Value
[cmdb_key_
value]

Tags
✓
✓

SG-Azure
Availability
Zone

Availability
Zone
[cmdb_ci_a
vailability_zo
ne]

Microsoft.Co
mpute/
availabilitySe
ts

✓
✓

Key Value
[cmdb_key_
value]

Tags
✓
✓

SG-Azure
Storage
Volume

Storage
Volume
[cmdb_ci_st
orage_volu
me]

Microsoft.Co
mpute/disks
✓
✓

Key Value
[cmdb_key_
value]

Tags
✓
✓

SG-Azure
Load
Balancers

Cloud Load
Balancer
[cmdb_ci_cl
oud_load_b
alancer]

Microsoft.Ne
twork/
loadBalance
rs

✓
✓

Cloud LB
IPAddress
[cmdb_ci_cl
oud_lb_ipad
dress]

Microsoft.Ne
twork/
loadBalance
rs

✓
✓

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

Data source
CMDB CI
classes

Microsoft
Azure
resource type

Full pull
Delta pull

Key Value
[cmdb_key_
value]

Tags
✓
✓

SG-Azure
Network

Cloud
Network
[cmdb_ci_n
etwork]

Microsoft.Ne
twork/
virtualnetwor
ks

✓
✓

Cloud
Service
Account
[cmdb_ci_cl
oud_service_
account]

Microsoft.Ne
twork/
virtualnetwor
ks

✓
✓

Cloud
Subnet
[cmdb_ci_cl
oud_subnet]

Microsoft.Ne
twork/
virtualnetwor
ks

✓
✓

Key Value
[cmdb_key_
value]

Tags
✓
✓

SG-Azure
Network
Interface

Cloud Mgmt
Network
Interface
[cmdb_ci_ni
c]

Microsoft.Ne
twork/
networkInterf
aces

✓
✓

IP Address
[cmdb_ci_ip
_address]

Microsoft.Ne
twork/
networkInterf
aces

✓
✓

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

Data source
CMDB CI
classes

Microsoft
Azure
resource type

Full pull
Delta pull

Hardware
[cmdb_ci_h
ardware]

Microsoft.Ne
twork/
networkInterf
aces

✓
✓

Virtual
Machine
Instance
[cmdb_ci_v
m_instance]

Microsoft.Ne
twork/
networkInterf
aces

✓
✓

Key Value
[cmdb_key_
value]

Tags
✓
✓

SG-Azure
Public IP
Address

Cloud Public
IP Address
[cmdb_ci_cl
oud_public_i
paddress]

Microsoft.Ne
twork/
publicIPAddr
esses

✓
✓

Cloud Mgmt
Network
Interface
[cmdb_ci_ni
c]

Microsoft.Ne
twork/
publicIPAddr
esses

✓
✓

Cloud Load
Balancer
[cmdb_ci_cl
oud_load_b
alancer]

Microsoft.Ne
twork/
publicIPAddr
esses

✓
✓

Cloud LB
IPAddress
[cmdb_ci_cl
oud_lb_ipad
dress]

Microsoft.Ne
twork/
publicIPAddr
esses

✓
✓

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

Data source
CMDB CI
classes

Microsoft
Azure
resource type

Full pull
Delta pull

Key Value
[cmdb_key_
value]

Tags
✓
✓

SG-Azure
Security
Group

Compute
Security
Group
[cmdb_ci_c
ompute_sec
urity_group]

Microsoft.Ne
twork/
networkSecu
rityGroups

✓
✓

Key Value
[cmdb_key_
value]

Tags
✓
✓

SG-Azure
Storage
Accounts

Cloud
Storage
Account
[cmdb_ci_cl
oud_storage
_account]

Microsoft.Sto
rage/
storageAcco
unts

✓
✓

Key Value
[cmdb_key_
value]

Tags
✓
✓

SG-Azure
Virtual
Machines

Virtual
Machine
Instance
[cmdb_ci_v
m_instance]

Microsoft.Co
mpute/
virtualMachi
nes

✓
✓

Image
[cmdb_ci_os
_template]

Microsoft.Co
mpute/
virtualMachi
nes

✓
✓

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

Data source
CMDB CI
classes

Microsoft
Azure
resource type

Full pull
Delta pull

Linux Server
[cmdb_ci_lin
ux_server]

Microsoft.Co
mpute/
virtualMachi
nes

✓
✓

Server
[cmdb_ci_se
rver]

Microsoft.Co
mpute/
virtualMachi
nes

✓
✓

Windows
Server
[cmdb_ci_wi
n_server]

Microsoft.Co
mpute/
virtualMachi
nes

✓
✓

Key Value
[cmdb_key_
value]

Tags
✓
✓

SG-Azure
Software

When the
Software
Asset
Manageme
nt (SAM)
application
isn't installed:

Software
[cmdb_ci_sp
kg]

Software
Installation
[cmdb_sam_
sw_install]

None
✓
✓

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

Data source
CMDB CI
classes

Microsoft
Azure
resource type

Full pull
Delta pull

When the
SAM
application
is installed:

Software
Instance
[cmdb_softw
are_instance
]

None
✓
✓

SG-Azure
SQL

Cloud
DataBase
[cmdb_ci_cl
oud_databa
se]

Microsoft.Sql
/servers

Microsoft.DBf
orPostgreSQ
L/servers

microsoft.db
formysql/
flexibleserver
s

microsoft.db
forpostgresql
/
flexibleserver
s

✓
✓

Key Value
[cmdb_key_
value]

Tags
✓
✓

SG-Azure
TCP

TCP
Connection
[cmdb_tcp]

None
✓
✓

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

Data source
CMDB CI
classes

Microsoft
Azure
resource type

Full pull
Delta pull

Running
Process
[cmdb_runni
ng_process]

None
✓
✓

SG-Azure
Functions

Cloud
Function
[cmdb_ci_cl
oud_functio
n]

Microsoft.We
b/sites
✓
✓

SG-Azure
Generic
Resources

Cloud
Resource
[cmdb_ci_c
mp_resource
]

Microsoft.Res
ourceGraph
/resources -
Generic

✓
✓

Key Value
[cmdb_key_
value]

Tags
✓
✓

SG-Azure
Scale Sets

Instance
Scale Set
[cmdb_ci_ins
tance_scale
_set]

Microsoft.Co
mpute/
virtualmachi
nescalesets

✓
✓

SG-Azure
Scale Sets
VMs

Note:
Imports
uniform
orchestr
ation
scale
sets
VMs.

Virtual
Machine
Instance
[cmdb_ci_v
m_instance]

None
✓
✕

Storage
Volume
[cmdb_ci_st
orage_volu
me]

None
✓
✕

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

Data source
CMDB CI
classes

Microsoft
Azure
resource type

Full pull
Delta pull

Image
[cmdb_ci_os
_template]

None
✓
✕

Cloud Mgmt
Network
Interface
[cmdb_ci_ni
c]

None
✓
✕

Hardware
Type
[cmdb_ci_c
ompute_tem
plate]

None
✓
✕

Azure
Datacenter
[cmdb_ci_az
ure_datacen
ter]

None
✓
✕

Linux Server
[cmdb_ci_lin
ux_server]

None
✓
✕

Server
[cmdb_ci_se
rver]

None
✓
✕

Windows
Server
[cmdb_ci_wi
n_server]

None
✓
✕

Key Value
[cmdb_key_
value]

Tags
✓
✕

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

Data source
CMDB CI
classes

Microsoft
Azure
resource type

Full pull
Delta pull

SG-Azure
Software
Remove

When the
SAM
application
isn't installed:

Software
[cmdb_ci_sp
kg]

Software
Installation
[cmdb_sam_
sw_install]

None
✓
✓

When the
SAM
application
is installed:

Software
Instance
[cmdb_softw
are_instance
]

None
✓
✓

SG-Azure
Hardware
Template
Updation

Hardware
Type
[cmdb_ci_c
ompute_tem
plate]

None
✓
✓

SG-Azure HW
Consolidatio
n

Virtual
Machine
Instance

None
✓
✓

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

Data source
CMDB CI
classes

Microsoft
Azure
resource type

Full pull
Delta pull

[cmdb_ci_v
m_instance]

Computer
[cmdb_ci_c
omputer]

None
✓
✓

SG-Azure
Run
Command

None
None
✓
✕

SG-Azure
Get Run
Command

Application
[cmdb_ci_a
ppl]

None
✓
✕

TCP
Connection
[cmdb_tcp]

None
✓
✕

Running
Process
[cmdb_runni
ng_process]

None
✓
✕

SG-Azure
Kubernetes
Cluster

SG-Azure
Kubernetes
Cluster
[sn_sg_azure
_integ_kuber
netes_cluster
]

microsoft.co
ntainerservic
e/
managedclu
sters

✓
✓

## Microsoft Azure discovery solutions comparison

ITOM Visibility applications discover a variety of Microsoft Azure resources
and populate the relevant configuration item (CI) classes in the
Configuration Management Database (CMDB) with their attributes.

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

ITOM Visibility solutions

ITOM Visibility can offer you comprehensive visibility into your
organization's cloud infrastructure. Each application offers unique
strengths and capabilities, and by comparing them you can gain holistic
insights on their capabilities and benefits.

ITOM Visibility solutions for discovering Azure

ITOM Visibility solution
Overview
Configuration

Discovery and Service
Mapping Patterns and
Visibility Content

Discovery patterns
used by ITOM Visibility

• You must update
your store apps to
the latest release
version.

• You must provide
ITOM Visibility
with access
permissions. For more
information, see Set
up Azure service
accounts

Service Graph
Connector for
Microsoft Azure

Service Graph
Connector for
Microsoft Azure

Configure Service
Graph Connector for
Microsoft Azure using
the guided setup

Note:

The CI class, in most cases, is applicable to both solutions. If it's not
applicable to one of the solutions, the solution is marked "N/A".

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

Discovery and Service Mapping Patterns vs Service Graph
Connector for Microsoft Azure

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

microsoft.comp
ute/
availabilitysets

Yes
N/A
cmdb_ci_availa
bility_set

microsoft.comp
ute/
availabilitysets

Yes
Yes
cmdb_ci_availa
bility_zone

Microsoft.Mana
gement/
managementGr
oups

Yes
No

cmdb_ci_azure_
management_g
roup

microsoft.KeyVa
ult/vaults
Yes
No
cmdb_ci_certific
ate

• Microsoft.Sql/
servers/
databases

•

Microsoft.DBfor
MySQL/servers

•

Microsoft.Doc
umentDB/
databaseAcc
ounts

•

Microsoft.Cac
he/Redis

Yes
No
cmdb_ci_cloud_
database

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

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

• Microsoft.Sql/
servers

•

Microsoft.DBfor
PostgreSQL/
servers

Yes
Yes
cmdb_ci_cloud_
database

microsoft.networ
k/
expressroutecirc
uits

Yes
No
cmdb_ci_cloud_
direct_connect

Microsoft.Storag
e/
storageAccount
s/fileServices

Yes
No
cmdb_ci_cloud_
file_service

Microsoft.Storag
e/
storageAccount
s/fileServices/
shares

Yes
No
cmdb_ci_cloud_
file_share

Microsoft.Web/
sites/functions
Yes
Yes
cmdb_ci_cloud_
function

VM Size
Yes
No
cmdb_ci_cloud_
hardware_type

microsoft.comp
ute/hostgroups/
hosts

Yes
No
cmdb_ci_cloud_
host

microsoft.networ
k/
Yes
No
cmdb_ci_cloud_
load_balancer

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

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

applicationgate
ways

microsoft.networ
k/loadbalancers
Yes
Yes
cmdb_ci_cloud_
load_balancer

Microsoft.Storag
e/
storageAccount
s/blobService

Yes
No
cmdb_ci_cloud_
object_service

Tenant
Yes
No
cmdb_ci_cloud_
org

microsoft.networ
k/
publicipaddress
es

Yes
Yes

cmdb_ci_cloud_
public_ipaddres
s

Microsoft.Storag
e/
storageAccount
s/queueServices

Yes
No
cmdb_ci_cloud_
queue_service

Microsoft.Resour
ces/
subscriptions

Yes
Yes
cmdb_ci_cloud_
service_account

Microsoft.Mana
gement/
managementGr
oup

Yes
No
cmdb_ci_cloud_
service_account

microsoft.storag
e/
storageaccount
s

Yes
Yes

cmdb_ci_cloud_
storage_accoun
t

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

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

Microsoft.Netwo
rk/
virtualNetworks/
subnets

Yes
No
cmdb_ci_cloud_
subnet

Microsoft.Storag
e/
storageAccount
s/tableServices

Yes
No
cmdb_ci_cloud_
table_service

microsoft.web/
sites
Yes
No
cmdb_ci_cloud_
webserver

microsoft.networ
k/
networksecurity
groups

Yes
Yes

cmdb_ci_comp
ute_security_gro
up

microsoft.networ
k/
privatednszones

Yes
No
cmdb_ci_dns_zo
ne

microsoft.comp
ute/
virtualmachines
calesets

Yes
Yes
cmdb_ci_instan
ce_scale_set

microsoft.contai
nerservice/
managedcluster
s

Yes
Yes
cmdb_ci_kubern
etes_cluster

Microsoft.Netwo
rk/
loadBalancers/
backendAddres
sPools

Yes
No
cmdb_ci_lb_po
ol

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

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

Microsoft.Netwo
rk/
loadBalancers/
inboundNatRule
s

Yes
No
cmdb_ci_lb_serv
ice

microsoft.networ
k/natgateways
Yes
No
cmdb_ci_nat_g
ateway

microsoft.networ
k/virtualnetworks
Yes
Yes
cmdb_ci_netwo
rk

microsoft.networ
k/
networkinterfac
es

Yes
Yes
cmdb_ci_nic

microsoft.comp
ute/images
Yes
No
cmdb_ci_os_te
mplate

Microsoft.Resour
ces/
resourceGroups

Yes
Yes
cmdb_ci_resour
ce_group

Microsoft.Netwo
rk/routeTables/
routes

Yes
No
cmdb_ci_route_
table

microsoft.networ
k/routetables
Yes
No
cmdb_ci_route_
table

microsoft.comp
ute/disks
Yes
Yes
cmdb_ci_storag
e_volume

microsoft.networ
k/
Yes
No
cmdb_ci_virtual
_pvt_gateway

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

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

localnetworkgat
eways

microsoft.networ
k/
virtualnetworkga
teways

Yes
No
cmdb_ci_virtual
_pvt_gateway

microsoft.comp
ute/
virtualmachines

Yes
Yes
cmdb_ci_vm_ins
tance

microsoft.sqlvirtu
almachine/
sqlvirtualmachin
es

Yes
No
cmdb_ci_vm_ins
tance

Microsoft.Netwo
rk/
virtualNetworks/
virtualNetworkPe
erings

Yes
No
cmdb_ci_vnet_p
eering

microsoft.networ
k/connections
Yes
No

cmdb_ci_vpc_g
ateway_connec
tion

Microsoft.Resour
ces/tags
Yes
Yes
cmdb_key_valu
e

Microsoft.Comp
ute/
virtualMachines

No
Yes
cmdb_ci_server

Microsoft.Comp
ute/
virtualMachines

No
Yes
cmdb_ci_win_se
rver

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

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

Microsoft.Netwo
rk/
networkInterfac
es

No
Yes
cmdb_ci_hardw
are

Microsoft.Comp
ute/
virtualMachines

No
Yes
cmdb_ci_linux_s
erver

microsoft.contai
nerservice/
managedcluster
s

Yes
Yes
cmdb_ci_kubern
etes_cluster

Microsoft.Comp
ute/
virtualmachines
calesets

No
Yes
cmdb_ci_vm_ins
tance

Microsoft.Servic
eBus/
namespaces/
queues

Yes
No
cmdb_azure_ser
vice_bus_queue

Microsoft.Servic
eBus/
namespaces/
topics

Yes
No
cmdb_azure_ser
vice_bus_topic

microsoft.appco
nfiguration/
configurationsto
res

Yes
No

cmdb_azure_ap
p_configuration
_configuration_s
tore

microsoft.autom
ation/
automationacc
ounts

Yes
No

cmdb_azure_au
tomation_autom
ation_account

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

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

microsoft.comp
ute/
diskencryptionse
ts

Yes
No

cmdb_azure_dis
k_encryption_set
_disk_encryption
_set

microsoft.comp
ute/galleries/
images

Yes
No

cmdb_azure_co
mpute_gallery_i
mage_definition

microsoft.comp
ute/snapshots
Yes
No
cmdb_azure_co
mpute_snapshot

microsoft.contai
nerregistry/
registries

Yes
No

cmdb_azure_co
ntainer_registry_r
egistry

microsoft.databr
icks/workspaces
Yes
No

cmdb_azure_da
tabricks_worksp
ace

microsoft.datafa
ctory/factories
Yes
No

cmdb_azure_da
ta_factory_data
_factory

microsoft.datapr
otection/
backupvaults

Yes
No

cmdb_azure_da
ta_protection_b
ackup_vault

microsoft.event
grid/
systemtopics

Yes
No

cmdb_azure_ev
ent_grid_system
_topic

microsoft.eventh
ub/namespaces
Yes
No

cmdb_azure_ev
ent_hub_names
pace

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

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

microsoft.insights
/components
Yes
No

cmdb_azure_ap
plication_insight
_component

microsoft.networ
k/
applicationgate
waywebapplica
tionfirewallpolici
es

Yes
No

cmdb_azure_we
b_application_fir
ewall_policy

microsoft.operat
ionalinsights/
workspaces

Yes
No

cmdb_azure_log
_analytics_works
pace

microsoft.networ
k/azurefirewalls
Yes
No

cmdb_azure_ne
twork_security_a
zure_firewall

microsoft.devce
nter/devcenters
Yes
No

cmdb_azure_de
v_centers_dev_
center

microsoft.kusto/
clusters
Yes
No

cmdb_azure_da
ta_explorer_clust
ers_data_explor
er_clusters

microsoft.recov
eryservices/
vaults

Yes
No

cmdb_azure_re
covery_services_
vault

microsoft.recov
eryservices/
vaults/
backupfabrics/
protectionconta

Yes
No

cmdb_azure_re
covery_services_
vault_backup_it
em

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

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

iners/
protecteditems

microsoft.dbforp
ostgresql/
servergroupsv2

Yes
No

cmdb_azure_co
smos_db_for_po
stgresql_cluster_
cluster

microsoft.insights
/
datacollectionru
les

Yes
No

cmdb_azure_ap
plication_insight
_data_collectio
n_rule

microsoft.networ
k/
serviceendpoint
policies

Yes
No

cmdb_azure_ser
vice_endpoint_
policy_service_e
ndpoint_policy

## Life cycle management of records in Service Graph
## Connector for Microsoft Azure

Life cycle management in the Service Graph Connector for Microsoft
Azure monitors and updates the statuses of Azure resources throughout
their entire life cycle, from creation to deletion.

The life cycle management process helps maintain the accuracy and
integrity of data in the Configuration Management Database (CMDB).

Life cycle management for CIs in Service Graph Connector for
Microsoft Azure

The following table lists the configuration items (CIs) in CMDB and other
non-CMDB tables for which life cycle management is available in Service
Graph Connector for Microsoft Azure.

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

Supported tables for life cycle management

Data source
CMDB CI classes
Life cycle management
available

SG-Azure Availability
Zone

Availability Zone
[cmdb_ci_availability_
zone]

Yes

Key Value
[cmdb_key_value]
No

SG-Azure Datacenter
Updation

Azure Datacenter
[cmdb_ci_azure_data
center]

Not applicable

SG-Azure Functions

Cloud Function
[cmdb_ci_cloud_funct
ion]

Yes

SG-Azure Generic
Resources

Cloud Resource
[cmdb_ci_cmp_resour
ce]

Yes

Key Value
[cmdb_key_value]
No

SG-Azure Get Run
Command

Application
[cmdb_ci_appl]
Not applicable

TCP Connection
[cmdb_tcp]
Not applicable

Running Process
[cmdb_running_proce
ss]

Not applicable

SG-Azure Hardware
Template Updation

Hardware Type
[cmdb_ci_compute_t
emplate]

Not applicable

SG-Azure HW
Consolidation

Virtual Machine
Instance
Not applicable

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

Data source
CMDB CI classes
Life cycle management
available

[cmdb_ci_vm_instanc
e]

Computer
[cmdb_ci_computer]
Not applicable

SG-Azure Kubernetes
Cluster

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Yes

SG-Azure Load
Balancers

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Yes

Cloud LB IPAddress
[cmdb_ci_cloud_lb_ip
address]

Yes

Key Value
[cmdb_key_value]
No

SG-Azure Network

Cloud Network
[cmdb_ci_network]
Yes

Cloud Subnet
[cmdb_ci_cloud_subn
et]

Yes

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

No

Key Value
[cmdb_key_value]
No

SG-Azure Network
Interface

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Yes

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

Data source
CMDB CI classes
Life cycle management
available

IP Address
[cmdb_ci_ip_address]
No

Hardware
[cmdb_ci_hardware]
Not applicable

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Not applicable

Key Value
[cmdb_key_value]
No

SG-Azure Public IP
Address

Cloud Public IP
Address
[cmdb_ci_cloud_publi
c_ipaddress]

Yes

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Yes

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Yes

Cloud LB IPAddress
[cmdb_ci_cloud_lb_ip
address]

Yes

Key Value
[cmdb_key_value]
No

SG-Azure Resource
Group

Resource Group
[cmdb_ci_resource_gr
oup]

Yes

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

Data source
CMDB CI classes
Life cycle management
available

Key Value
[cmdb_key_value]
No

SG-Azure Scale Sets

Instance Scale Set
[cmdb_ci_instance_sc
ale_set]

Yes

SG-Azure Scale Sets
VMs

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Yes

Storage Volume
[cmdb_ci_storage_vol
ume]

Yes

Image
[cmdb_ci_os_templat
e]

Not applicable

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Yes

Hardware Type
[cmdb_ci_compute_t
emplate]

Not applicable

Linux Server
[cmdb_ci_linux_server]
Yes

Server
[cmdb_ci_server]
Yes

Windows Server
[cmdb_ci_win_server]
Yes

Key Value
[cmdb_key_value]
No

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

Data source
CMDB CI classes
Life cycle management
available

SG-Azure Security
Group

Compute Security
Group
[cmdb_ci_compute_s
ecurity_group]

Yes

Key Value
[cmdb_key_value]
No

SG-Azure Software

When the Software
Asset Management
(SAM) application isn't
installed:

Software
[cmdb_ci_spkg]

Software Instance
[cmdb_software_insta
nce]

When the SAM
application is installed:

Software Installation
[cmdb_sam_sw_install]

Yes

SG-Azure Software
Remove

When the SAM
application isn't
installed:

Software
[cmdb_ci_spkg]

Software Instance
[cmdb_software_insta
nce]

Yes

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

Data source
CMDB CI classes
Life cycle management
available

When the SAM
application is installed:

Software Installation
[cmdb_sam_sw_install]

SG-Azure SQL

Cloud DataBase
[cmdb_ci_cloud_data
base]

Yes

Key Value
[cmdb_key_value]
No

SG-Azure Storage
Accounts

Cloud Storage
Account
[cmdb_ci_cloud_stora
ge_account]

Yes

Key Value
[cmdb_key_value]
No

SG-Azure Storage
Volume

Storage Volume
[cmdb_ci_storage_vol
ume]

Yes

Key Value
[cmdb_key_value]
No

SG-Azure Subscriptions

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

No

Key Value
[cmdb_key_value]
No

SG-Azure TCP

TCP Connection
[cmdb_tcp]
No

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

Data source
CMDB CI classes
Life cycle management
available

Running Process
[cmdb_running_proce
ss]

No

SG-Azure Virtual
Machines

Linux Server
[cmdb_ci_linux_server]
Yes

Server
[cmdb_ci_server]
Yes

Windows Server
[cmdb_ci_win_server]
Yes

Image
[cmdb_ci_os_templat
e]

Yes

Key Value
[cmdb_key_value]
No

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Yes

## Record removal process in Service Graph Connector
## for Microsoft Azure

The Service Graph Connector for Microsoft Azure uses the Integration
Commons record removal process for life cycle management during full
data loads. For delta loads, life cycle management of records is based
on updates from Microsoft Azure.

Record removal is the process of handling data that is no longer needed.
For any discovered resources deleted later after pulling data, the Service
Graph Connector for Microsoft Azure automatically updates the Install
Status field of the associated CMDB CI classes to indicate any retired or
deleted records.

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

The record removal process in the Service Graph Connector for Microsoft
Azure involves marking the Install Status of a record as retired rather
than permanently deleting it from the system. The record remains in
the database, making it possible to reference or restore it later. Record
removal for Service Graph Connector for Microsoft Azure relies on the
Source [sys_object_source table].

Starting with the Service Graph Connector for Microsoft Azure 1.14.0
version, life cycle management is supported for the following data
sources in full data load and delta load:

• SG-Azure Kubernetes Cluster

• SG-Azure Scale Sets

• SG-Azure Generic Resources

• SG-Azure Functions

• SG-Azure SQL

• SG-Azure Network Interface

• SG-Azure Virtual Machines

• SG-Azure Storage Accounts

• SG-Azure Security Group

• SG-Azure Public IP Address

• SG-Azure Network

• SG-Azure Load Balancers

• SG-Azure Storage Volume

• SG-Azure Availability Zone

• SG-Azure Resource Group

• SG-Azure Subscriptions

When you run a full data load for the first time after upgrading to version
1.14.0, the Install Status of all the records that aren't discovered is set to
retired.

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

## Service Graph Connector for Microsoft Azure
## properties

Service Graph Connector for Microsoft Azure properties control the
behavior of the connector.

System properties

These system properties are available for Service Graph Connector for
Microsoft Azure.

Note:   To open the System Properties [sys_properties] table, enter
sys_properties.list in the navigation filter.

System properties for Service Graph Connector for Microsoft
Azure

Property
Description

api_retry_max

Enter the maximum retry limit for
a Microsoft Azure API call made
from the data sources within the
connector.

• Type: integer

• Default value: 3

• Location: System Property
[sys_properties] table

api_retry_max_without_backoff

Enter the maximum retry limit
for a Microsoft Azure API call
made from the data sources
within the connector, without
using exponential backoff to
increase the waiting time between
consecutive retries.

• Type: integer

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

Property
Description

• Default value: 3

• Location: System Property
[sys_properties] table

azure_full_pull_partition_size

Set the partition size for Azure full
data pull. This property determines
the number of subscriptions that
each partition processes. The
value must be set to a numeric
value greater than 0.

• Type: integer

• Default value: null

• Location: System Property
[sys_properties] table

Note:   If no value is
specified, the property value
is determined based on the
number of active threads in
the instance.

See Set partition size for parallel
loading-enabled Azure accounts.

delta_grace_time

Enter the additional time period
in hours added to the current
delta pull period when fetching
incremental changes.

• Type: integer

• Default value: 0

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

Property
Description

• Location: System Property
[sys_properties] table

delta_page_size

Enter the page size, that is,
the maximum number of records
fetched per page in a data pull
for the data sources within the
connector.

• Type: integer

• Default value: 500

• Location: System Property
[sys_properties] table

insert_short_lived_vms

Set the property to false to filter
out Azure Databricks CIs during
delta loads.

For more information, see Azure
Databricks CIs.

• Type: true | false

• Default value: true

• Location: System Property
[sys_properties] table

is_delta_sync_enabled

Set the property to false to
deactivate delta synchronization.

• Type: true | false

• Default value: false

• Location: System Property
[sys_properties] table

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

Property
Description

See Configuring data
synchronization in Service Graph
Connector for Microsoft Azure.

LDC_status

Set the property to true to
enable populating the passive
status of an Azure datacenter
(also known as a logical
datacenter) in the Comments
attribute of the Azure Datacenter
[cmdb_ci_azure_datacenter] CI
class when the regionType
attribute is Logical or the service
account for the datacenter is
deactivated .

• Type: true | false

• Default value: false

• Location: System Property
[sys_properties] table

load_balancer_page_limit

Enter the maximum number of
records per page to be fetched in
a delta pull for the SG-Azure Load
Balancers data source.

• Type: integer

• Default value: 500

• Location: System Property
[sys_properties] table

maximum_delta_total_period

Enter the maximum time period
in days preceding the current run
time during delta pull.

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

Property
Description

• Type: integer

• Default value: 7

• Location: System Property
[sys_properties] table

maximum_delta_window_period

Enter the maximum time duration
in hours for each API call to repeat
within the total delta period during
delta pull.

• Type: integer

• Default value: 24

• Location: System Property
[sys_properties] table

network_interface_page_limit

Enter the maximum number of
records per page to be fetched
in a delta pull for the SG-Azure
Network Interface data source.

• Type: integer

• Default value: 500

• Location: System Property
[sys_properties] table

network_page_limit

Custom property for the SG-Azure
Network data source. Create this
system property if you need to
decrease the number of records
that are fetched in a delta pull.

For more information, see Add a
system property.

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

Property
Description

Specify the maximum number of
records per page to be fetched
in a delta pull for the SG-Azure
Network data source.

• Type: integer

• Default value: 500

• Location: System Property
[sys_properties] table

pull_disabled_subscriptions

Set the property to false to
deactivate the import of resources
associated with deactivated Azure
subscriptions.

• Type: true | false

• Default value: true

• Location: System Property
[sys_properties] table

security_group_page_limit

Enter the maximum number of
records per page to be fetched
in a delta pull for the SG-Azure
Security Group data source.

• Type: integer

• Default value: 500

• Location: System Property
[sys_properties] table

software_page_limit

Enter the maximum number of
records fetched per page when
importing software data through

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

Property
Description

the SG-Azure Software data
source.

• Type: integer

• Default value: 5000

• Location: System Property
[sys_properties] table

tcp_and_process_page_limit

Enter the maximum number of
records fetched per page when
importing TCP and running process
data through the SG-Azure TCP
data source.

• Type: integer

• Default value: 1000

• Location: System Property
[sys_properties] table

tcp_time_period

Enter the time period in hours
during which TCP and running
process data is imported through
the SG-Azure TCP data source.

• Type: integer

• Default value: 1

• Location: System Property
[sys_properties] table

vm_power_state_page_limit

Enter the maximum number of
records fetched per page when
importing the power state of VMs
through the SG-Azure VM Config
Data data source.

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

Property
Description

• Type: integer

• Default value: 1000

• Location: System Property
[sys_properties] table

Connection property

The filter_databricks connection property is available for the Hardware
connections of the Service Graph Connector for Microsoft Azure.

Note:   To open the Service Graph Connection Properties
[sn_cmdb_int_util_service_graph_connection_property] table for the
connector, navigate to All > Service Graph Connectors > Azure
> Connections, and select the connection name. The connection
properties are displayed in the Service Graph Connection Properties
related list.

filter_databricks

Set the value to true for each Hardware connection to filter Azure
Databricks CIs. For more information, see Azure Databricks CIs.

• Type: true | false

• Default value: false

Azure Databricks CIs

Azure Databricks virtual machines (VMs), Network Interface Controllers
(NICs), and storage volumes (collectively called Azure Databricks CIs)
have the value of the Vendor tag set to Databricks. Starting with the
Service Graph Connector for Microsoft Azure 1.14.0 version, all Microsoft
Azure Databricks CIs that have the value of the Vendor tag set to
Databricks are filtered out from discovery during a full data load.

During delta loads, set the value of the insert_short_lived_vms system
property to false to filter Azure Databricks CIs that are marked as retired
during discovery. Additionally, for each Hardware connection, set the
filter_databricks connection property to true.

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

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

113

Zurich ServiceNow AI Platform Capabilities

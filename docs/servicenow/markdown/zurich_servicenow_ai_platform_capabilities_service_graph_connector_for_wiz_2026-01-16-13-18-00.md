# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_wiz_2026-01-16-13-18-00

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_wiz_2026-01-16-13-18-00.pdf*

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

## Service Graph Connector for Wiz

Use the Service Graph Connector for Wiz to ingest CMDB data from
projects within the Wiz platform using the REST APIs.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Key features

• Get started quickly with a streamlined onboarding process.

• Use only the credentials you need.

• Be instantly aware of any modifications with near real-time discovery of
changes.

• Get visibility across multiple cloud environments.

• Identify risks in the environment through Wiz.

• Assess application dependencies.

• Get the most out of your security incident response and endpoint
management with the ServiceNow AI Platform.

Supported versions

Versions

Wiz
ServiceNow

Last tested on October 17, 2025

• Xanadu

• Yokohama

• Zurich

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

Use cases

You can use the Service Graph Connector for Wiz to get visibility into
cloud resource identities, relationships, and state in real-time.

Configuring a connection

Use the SGC Central view in the CMDB Workspace to install the
connector and configure the connection. The view enables you to install
and discover connectors and to manage the full life cycle of creating,
editing, monitoring, and debugging connections. For instructions, see Set
up the Wiz environment.

Important:   Starting with the Service Graph Connector for Wiz version
1.4.0, the guided setup method is deprecated. Use the SGC Central
view in the CMDB Workspace to configure the connection for the
connector.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration,
or a specific integration run. For more details about monitoring Wiz
integrations in the CMDB Integrations Dashboard, see Using the CMDB
Integrations Dashboard.

Data mapping

Data from the Wiz data sources is mapped and transformed into the
ServiceNow CMDB Configuration Item (CI) class definitions using the
Robust Transform Engine (RTE). Data is inserted into the ServiceNow CMDB
using the Identification and Reconciliation Engine (IRE).

When you complete setting up the connection, you can configure the
integration to periodically pull data from the Wiz application.

Note:   For any discovered resources that were deleted later,
the Service Graph Connector for Wiz automatically marks the
corresponding records as retired or absent in CMDB.

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

The following table lists the data sources, the staging tables, and the
target tables CMDB CI classes and non-CMDB classes where data is
stored for a Wiz project.

Data sources mapping for Wiz

Data source
Staging table
Target tables

SG-Wiz-Organization

SG-Wiz-Organization
[sn_wiz_integ_sg_wiz_o
rganization]

Cloud Organizations

SG-Wiz Extension
Attributes

Google Organization
Folder

SG-Wiz-Subscription

SG-Wiz-Subscription
[sn_wiz_integ_sg_wiz_s
ubscription]

Cloud Service
Account

Google Organization
Project

VMware vCenter
Datacenter

SG-Wiz Extension
Attributes

Key Value

SG-Wiz-Datacenter

SG-Wiz-Datacenter
[sn_wiz_integ_sg_wiz_d
atacenter]

AWS Datacenter

Azure Datacenter

Google Datacenter

Logical Datacenter

OCI Datacenter

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

SG-Wiz Extension
Attributes

SG-Wiz-Resource-
Group

SG-Wiz-Resource-
Group
[sn_wiz_integ_sg_wiz_r
esource_group]

Resource Group

SG-Wiz Extension
Attributes

Key Value

SG-Wiz-Network-
Interface

SG-Wiz-Network-
Interface
[sn_wiz_integ_sg_wiz_n
etwork_interface]

Cloud Mgmt Network
Interface

SG-Wiz Extension
Attributes

Key Value

SG-Wiz-Virtual-Network

SG-Wiz-Virtual-Network
[sn_wiz_integ_sg_wiz_vi
rtual_network]

Cloud Network

SG-Wiz Extension
Attributes

Key Value

SG-Wiz-Firewall

SG-Wiz-Firewall
[sn_wiz_integ_sg_wiz_fir
ewall]

Compute Security
GroupKey Value

SG-Wiz-Volume

SG-Wiz-Volume
[sn_wiz_integ_sg_wiz_v
olume]

Storage Volume

Cloud Disk Type

SG-Wiz Extension
Attributes

Key Value

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

SG-Wiz-Virtual-
Machine

SG-Wiz-Virtual-
Machine
[sn_wiz_integ_sg_wiz_vi
rtual_machine]

Virtual Machine
Instance

Hardware Type

Cloud Hardware Type

Linux Server

Windows Server

Server

Key Value

SG-Wiz Extension
Attributes

SG-Wiz-Virtual-
Machine-Image

SG-Wiz-Virtual-
Machine-Image
[sn_wiz_integ_sg_wiz_vi
rtual_machine_image]

Image

Note:   Data with
no subscription IDs
for images aren't
imported. Also, if
the subscription
ID for an image
is available, but
the subscription-
specific details
are not available
in Wiz, the data
isn't imported by
the connector.

Key Value

SG-Wiz Extension
Attributes

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

SG-Wiz-Load Balancer

SG-Wiz-Load Balancer
[sn_wiz_integ_sg_wiz_l
oad_balancer]

Cloud Load Balancer

Key Value

SG-Wiz Extension
Attributes

SG-Wiz-Database

SG-Wiz-Database
[sn_wiz_integ_sg_wiz_d
atabase]

Cloud DataBase

Cloud DataBase
Cluster

DynamoDB Table

Key Value

SG-Wiz Extension
Attributes

SG-Wiz-Bucket

SG-Wiz-Bucket
[sn_wiz_integ_sg_wiz_b
ucket]

Cloud Object Storage

Key Value

SG-Wiz Extension
Attributes

SG-Wiz-Serverless

SG-Wiz-Serverless
[sn_wiz_integ_sg_wiz_s
erverless]

Cloud Function

Key Value

SG-Wiz Extension
Attributes

SG-Wiz-Network-
Address

SG-Wiz-Network-
Address
[sn_wiz_integ_sg_wiz_n
etwork_address]

Cloud Public IP
Address

Key Value

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

SG-Wiz Extension
Attributes

SG-Wiz-Storage-
Account

SG-Wiz-Storage-
Account
[sn_wiz_integ_sg_wiz_st
orage_account]

Cloud Storage
Account

Key Value

SG-Wiz Extension
Attributes

SG-Wiz-API-Gateway

SG-Wiz-API-Gateway
[sn_wiz_integ_sg_wiz_a
pi_gateway]

Cloud Gateway

Key Value

SG-Wiz Extension
Attributes

SG-Wiz-Snapshot

SG-Wiz-Snapshot
[sn_wiz_integ_sg_wiz_s
napshot]

Storage Volume
Snapshot

Key Value

SG-Wiz Extension
Attributes

SG-Wiz Kubernetes
Cluster

SG-Wiz Kubernetes
Cluster
[sn_wiz_integ_sg_wiz_k
8s_cluster]

Kubernetes Cluster

Key Value

SG-Wiz Extension
Attributes

SG-Wiz Kubernetes
Namespace

SG-Wiz-K8s
Namespace
[sn_wiz_integ_sg_wiz_k
8s_namespace]

Kubernetes
Namespace

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

Key Value

SG-Wiz Extension
Attributes

SG-Wiz-Kubernetes
Node

SG-Wiz-Kubernetes
Node
[sn_wiz_integ_sg_wiz_k
ubernetes_node]

Kubernetes Node

Key Value

SG-Wiz Extension
Attributes

SG-Wiz-Kubernetes
Deployment

SG-Wiz-Kubernetes
Deployment
[sn_wiz_integ_sg_wiz_k
ubernetes_deploymen
t]

Kubernetes
Deployment

Key Value

SG-Wiz Extension
Attributes

SG-Wiz-Kubernetes
Service

SG-Wiz-Kubernetes
Service
[sn_wiz_integ_sg_wiz_k
ubernetes_service]

Kubernetes Service

Key Value

SG-Wiz Extension
Attributes

SG-Wiz-Kubernetes
Pod

SG-Wiz-Kubernetes
Pod
[sn_wiz_integ_sg_wiz_k
ubernetes_pod]

Kubernetes Pod

Key Value

SG-Wiz Extension
Attributes

SG-Wiz-Kubernetes
Replica Set

SG-Wiz-Kubernetes
Replica Set

Kubernetes ReplicaSet

Key Value

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

[sn_wiz_integ_sg_wiz_k
ubernetes_replica_set]

SG-Wiz Extension
Attributes

SG-Wiz Kubernetes
Container

SG-Wiz Kubernetes
Container
[sn_wiz_integ_sg_wiz_k
ubernetes_container]

Docker Container

SG-Wiz Extension
Attributes

SG-Wiz-Compute
Instance Group

SG-Wiz-Compute
Instance Group
[sn_wiz_integ_sg_wiz_c
ompute_instance_gro
up]

Instance Scale Set

SG-Wiz Extension
Attributes

Key Value

SG-Wiz-Gateway

SG-Wiz-Gateway
[sn_wiz_integ_sg_wiz_g
ateway]

Internet Gateway

AWS Datacenter

SG-Wiz Extension
Attributes

Key Value

Note:   All the labels or tags associated with a Wiz resource are
added to the Key Value [cmdb_key_value] table and the project
information about a Wiz resource is stored in the SG-Wiz Extension
Attributes [sn_wiz_integ_extension_attributes] table.

For more information on where data is saved when pulling data from a
Wiz project, see Target tables for storing Service Graph Connector for Wiz
data and Supported Wiz types.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

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

Related concepts

• Service Graph Connectors

## Set up the Wiz environment

You must obtain the credentials associated with the Wiz service account
to configure Wiz for use with the Service Graph Connector for Wiz.

Before you begin

Role required: Wiz user with a role that has Write (W) permission on service
accounts

About this task

To create a service account, you must be logged in as a Wiz user
with Write (W) permission on service accounts. Project-scoped roles can
create service accounts only on their own projects.

For more information on obtaining Wiz details, see Add a Service
Account on the Wiz documentation site (requires Wiz login).

Procedure

1. Log in to your Wiz dashboard.

2. Obtain the Wiz URL.

a. Navigate to your user profile and copy the API Endpoint URL.

Note:   The Service Graph Connector for Wiz uses the
following token URL:

https://auth.app.wiz.io/oauth/token

3. Obtain the client ID and client secret.

a. Navigate to Settings > Service Accounts.

b. Select Add Service Account.

c. Name the new service account.

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

d. (Optional) In the Projects list, select projects to limit access of the
service account.

e. In the API Scopes field, select the permissions read:resources and
read:projects.

f. Select Add Service Account.

g. From the Copy your secret credentials dialog box that appears,
copy the client secret and client ID from their respective fields.

h. Select Finish to return to the Wiz dashboard.

## Configure Service Graph Connector for Wiz using SGC
## Central

Set up scheduled import jobs to pull in data from a Wiz project into your
Configuration Management Database (CMDB).

Before you begin

• Install Service Graph Connector for Wiz version 1.3.0 or later from the
ServiceNow Store. For ServiceNow Store installation steps, see Install a
ServiceNow Store application.

• You must obtain the OAuth credentials associated with the Wiz service
account and make a note of the following details:

• Client ID

• Client secret

• OAuth token URL

• Connection URL
For more information, see Set up the Wiz environment.

• You must have the following permissions for the Wiz service account:

• read:resources

• read:projects

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

Role required: The following table shows the roles required for each stage
of the playbook.

Role required for each playbook stage

Stage
Role

Prerequisites
admin

Setup
cmdb_inst_admin or admin

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

4. On the Create connection window, select the Wiz connector type,
and then select Configure connection.
A default connection, SG-Wiz, for Wiz is available within the
application. As the Service Graph Connector for Wiz supports only
a single instance, you can configure the default connection for the
first time or resume editing it thereafter.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

Note:   This step is required when configuring the connector for
the first time only. See Perform initial setup tasks when creating a
connection in SGC Central.

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

6. Enter connection details and test the API connection for importing
Wiz data.

a. In the Setup stage of the playbook, select the Create and test
connection activity.

b. On the form, fill in the fields.

Create and test connection form

Field
Description

Connection name
Name to identify the Wiz
connection record.

Connection URL

Base URL to connect to your
Wiz application.

Note:   Based on
the region of your Wiz
application, enter the
connection URL in the
following format:

https://api.<region>
.app.wiz.io
Where <region> is the
region where the Wiz
tenant is located. For
example, us1, us2, eu1, or
eu2.

Client ID

Client ID of your Wiz
application as described in
Before you begin.

Client secret

Client secret of your Wiz
application as described in
Before you begin.

OAuth token URL

Token generation URL. This field
is automatically set to the
following URL:

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

https://auth.app.wiz.io/
oauth/token

c. Select Update and test connection.

d. Once the connection test is complete, select Continue.

7. (Optional) Configure properties of the connector to access
resources.

Note:   To skip this step, select Continue for the Set configuration
properties activity.

a. In the Setup stage of the playbook, select the Set configuration
properties activity.

b. On the form, fill in the fields.

Configuration properties

Field
Description

Projects

List of project IDs for which the
resources are to be imported.

Separate multiple entries with
a comma.

Exclude projects

List of project IDs for which the
resources are excluded only
when the Projects property
isn’t set. In this case, all
the resources except for
the specified projects are
imported.

Separate multiple entries with
a comma.

c. Select Continue.

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

8. Configure the import schedule to import data at regular intervals.

a. In the Setup stage of the playbook, select the Configure import
schedule activity.

b. Expand the Parent scheduled data import within the Import
schedules list to select the SG-Wiz-Organization import schedule.

c. Select the Active check box, and then fill in the run schedule and
time details.

For more information, see Schedule a data import.

d. Select Save.
Alternatively, select Execute Now to execute the import schedule
immediately.

9. (Optional) Enable the Reset Last Run Datetime for SG-Wiz script to
retrieve full data periodically.

Note:   To skip this step, select Skip for the Enable full data
retrieval activity.

a. In the Setup stage of the playbook, select the Enable full data
retrieval activity.

b. Select the Active check box, and then fill in the run schedule and
time details.

Note:   When active, the script clears the Last Run Date
Time field value in a data source, ensuring that the SG-Wiz
Organization scheduled job retrieves all Wiz-related data
sources periodically.

c. Select Continue.

10. In the Setup stage of the playbook, select the Confirm connection
creation activity to verify whether the connection was created.

What to do next

Select View all connections to review the connection details. The
created connection appears in the Installed connections list.

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

Related concepts

• Service Graph Connector for Wiz

• Accessing the connection details of Service Graph Connector for Wiz

Related reference

• Target tables for storing Service Graph Connector for Wiz data

• Service Graph Connector for Wiz properties

• Supported Wiz types

## Configure Service Graph Connector for Wiz using
## guided setup

Set up scheduled import jobs to pull in data from a Wiz project into your
CMDB.

Before you begin

Important:   Starting with the Service Graph Connector for Wiz version
1.4.0, the guided setup method is deprecated. Use the SGC Central
view in the CMDB Workspace to configure the connection for the
connector.

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

• Wiz advanced or standard license

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

• The Integration Commons for CMDB store app, which is automatically
installed. See Integration Commons for CMDB.

• The CMDB CI class models store app, which is automatically installed.
See CMDB CI Class Models.

• ITOM Licensing plugin (com.snc.itom.license). See Request Discovery.

• Discovery and Service Mapping Patterns (sn_itom_pattern). See Install
Discovery and Service Mapping Patterns.

• Discovery Core (com.snc.discovery.core)

You must obtain the OAuth credentials associated with the Wiz service
account and make a note of the following details:

• Client ID

• Client Secret

• OAuth Token URL

• Connection URL

See Set up the Wiz environment.
You must have the following permissions for the Wiz service account:

• read:resources

• read:projects

Role required: admin

Procedure

1. Verify that the application scope is set to the Service Graph
Connector for Wiz application by using the application picker.
For more information, see Application picker.

2. Navigate to All > Service Graph Connectors > Wiz > Setup.

3. On the Service Graph Connector for Wiz page, verify that the Quick
Start option is selected and then select Continue.

4. Configure the connection to send requests to the Wiz application.

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

a. In the Configure the Connection and Credentials section of the
Service Graph Connector for Wiz page, select Start.

b. Configure the connection.

a. Select the Configure the Connection task and then select
Click Here.

b. On the Connections page that opens in another browser
tab, select Edit for the SG-Wiz connection that is available by
default.

c. On the form, fill in the fields.

Edit Connection form

Field
Description

Connection Name

Name to identify the
connection record. For
example, SG-Wiz.

Don’t modify the name for
the default connection alias
SG-Wiz.

Connection URL

Base URL to connect to your
Wiz application.

Note:   Based on
the region of your Wiz
application, enter the
connection URL in the
following format:

https://api.<regio
n>.app.wiz.io
Where <region> is the
region where the Wiz
tenant is located. For
example, us1, us2, eu1,
or eu2.

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

Client ID

Client ID of your Wiz
application as described in
Before you begin.

Client Secret

Client secret of your Wiz
application as described in
Before you begin.

OAuth Token URL

Token generation URL. This
field is automatically set to
the following URL:

https://auth.app.wiz.i
o/oauth/token

d. Select Edit and Get OAuth Token.

e. Return to the guided setup.

f. Set the Configure the Connection task to complete by
selecting the Mark as complete check box and then select
Continue.

c. Configure the connection properties.

a. Select the Add configuration properties task.

b. In the Service Graph Connections section, review and modify
the property details by selecting a property from the Property
column in the Service Graph Connection Properties related
list.
You can configure the following properties:

Projects

A list of comma-separated project IDs for which the resources
are to be pulled.

Exclude Projects

A list of comma-separated project IDs for which the resources
are excluded only when the Projects property isn’t set. In this

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

case, all the resources except for the specified projects are
imported.

Note:   If no property is configured, data from all the Wiz
projects are fetched.

c. Select Update in the Service Graph Connection Properties
section.

d. Set the Add connection properties task to complete by
selecting the Mark as complete check box and then select
Continue.

d. Test the Wiz API connection to import data from the Wiz
application.

a. Select the Test Connection task.

b. Test the connection by selecting the Test Connection related
link.

Testing the connection might take a few moments. The page
is refreshed to show the test results.

c. When the Status field is set to Success, select Update.

If any of the tests have errors, follow the suggestions for
remediation.

d. Set the Test Connection task to complete by selecting the
Mark as complete check box and then select Continue.

5. Configure the scheduled jobs to import data from the Wiz
application.

a. Configure the scheduled job for the complete (full) import of
data during the initial execution, and then incremental (delta)
import of data on subsequent executions.

a. Select the Configure the scheduled jobs task.

b. Select the SG-Wiz-Organization scheduled job.

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

c. On the Scheduled Data Import form, verify the field values for
the scheduled job.

For more information, see Schedule a data import.

d. Select the Active check box to activate the SG-Wiz-
Organization scheduled job.

e. In the Run field, select Periodically to specify how often the
job will run.

f. Select Update.

g. Set the Configure the scheduled jobs task to complete by
selecting the Mark as complete check box and then select
Continue.

b. Configure the Reset Last Run Datetime for SG-Wiz scheduled
script to enable full pull for subsequent execution of the
scheduled job.

Note:   To fetch the complete data using a data source
on subsequent executions, you must remove the Last Run
Date Time field value from a data source. The Reset
Last Run Datetime for SG-Wiz scheduled script provided
with the connector resets the Last Run Date Time field
value automatically. Therefore, confirming that the SG-Wiz
Organization scheduled job executes all data sources for a
full pull.

a. Select the Configure the scheduled script for full data
retrieval task.

b. Select the Active check box to activate the SG-Wiz
scheduled script.

c. In the Run field, select Periodically to specify how often the
script will run.

For more information, see Automatically run a script of your
choosing.

d. Select Update.

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

e. Set the Configure the scheduled script for full data retrieval
task to complete by selecting the Mark as complete check
box and then select Continue.

6. On the Service Graph Connector for Wiz page, select Complete to
save your changes.

7. In Complete setup dialog box, select Complete to complete the
setup.

8. In the message box that appears, select Done.

## Target tables for storing Service Graph Connector for
## Wiz data

When you complete setting up the connection, you can configure the
integration to periodically pull data from a Wiz project. The data is saved
in tables that extend from the CMDB CI classes and other non-CMDB
classes.

AWS Datacenter [cmdb_ci_aws_datacenter]

The following attributes in the AWS Datacenter
[cmdb_ci_aws_datacenter] table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id
externalId

Region
region
externalId

Relationships created for AWS Datacenter

Parent class
Relationship type
Child class

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

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

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Azure Datacenter [cmdb_ci_azure_datacenter]

The following attributes in the Azure Datacenter
[cmdb_ci_azure_datacenter] table are populated by collected data.

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id
externalId

Region
region
externalId

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

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Cloud DataBase [cmdb_ci_cloud_database]

The following attributes in the Cloud DataBase
[cmdb_ci_cloud_database] table are populated by collected data:

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
Wiz attribute

Name
name
name

Object ID
object_id
externalId

Install Status
install_status
None

Type
type
nativeType

Relationships created for Cloud DataBase

Parent class
Relationship type
Child class

Cloud DataBase
[cmdb_ci_cloud_data
base]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Cloud DataBase
[cmdb_ci_cloud_data
base]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Cloud DataBase
[cmdb_ci_cloud_data
base]

Reference
Key Value
[cmdb_key_value]

Cloud DataBase Cluster [cmdb_ci_cloud_db_cluster]

The following attributes in the Cloud DataBase Cluster
[cmdb_ci_cloud_db_cluster] table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Cluster ID
cluster_id
externalId

Name
name
name

Cluster Type
cluster_type
kind

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
Wiz attribute

Install Status
install_status
None

Vendor
vendor
None

Relationships created for Cloud DataBase Cluster

Parent class
Relationship type
Child class

Cloud DataBase
Cluster
[cmdb_ci_cloud_db_c
luster]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Cloud DataBase
Cluster
[cmdb_ci_cloud_db_c
luster]

Reference
Key Value
[cmdb_key_value]

Cloud DataBase
Cluster
[cmdb_ci_cloud_db_c
luster]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Cloud Disk Type [cmdb_ci_disk_type]

The following attributes in the Cloud Disk Type [cmdb_ci_disk_type] table
are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Name
name
properties.volumeType
, zone

Object ID
object_id
properties.volumeType
, zone

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

Relationship created for Cloud Disk Type

Parent class
Relationship type
Child class

Cloud Disk Type
[cmdb_ci_disk_type]
Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

Cloud Function [cmdb_ci_cloud_function]

The following attributes in the Cloud Function [cmdb_ci_cloud_function]
table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id
externalId

CodeSha256
codesha256
awsLambda_codeSha
256

Install Status
install_status
None

Language
language
runtime

Relationships created for Cloud Function

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

Cloud Function
[cmdb_ci_cloud_funct
ion]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Cloud Function
[cmdb_ci_cloud_funct
ion]

Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

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

Parent class
Relationship type
Child class

Cloud Function
[cmdb_ci_cloud_funct
ion]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Cloud Function
[cmdb_ci_cloud_funct
ion]

Reference
Key Value
[cmdb_key_value]

Cloud Gateway [cmdb_ci_cloud_gateway]

The following attributes in the Cloud Gateway
[cmdb_ci_cloud_gateway] table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id
externalId

Install Status
install_status
None

Relationships created for Cloud Gateway

Parent class
Relationship type
Child class

Cloud Gateway
[cmdb_ci_cloud_gate
way]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Cloud Gateway
[cmdb_ci_cloud_gate
way]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Cloud Gateway
[cmdb_ci_cloud_gate
way]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

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

Parent class
Relationship type
Child class

Cloud Gateway
[cmdb_ci_cloud_gate
way]

Reference
Key Value
[cmdb_key_value]

Cloud Hardware Type [cmdb_ci_cloud_hardware_type]

The following attributes in the Cloud Hardware Type
[cmdb_ci_cloud_hardware_type] table are populated by collected
data:

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id
externalId

Provider
provider
cloudPlatform

Relationships created for Cloud Hardware Type

Parent class
Relationship type
Child class

Cloud Hardware Type
[cmdb_ci_cloud_hard
ware_type]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Cloud Hardware Type
[cmdb_ci_cloud_hard
ware_type]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

Cloud Load Balancer [cmdb_ci_cloud_load_balancer]

The following attributes in the Cloud Load Balancer
[cmdb_ci_cloud_load_balancer] table are populated by collected data:

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

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id

name (for AWS Load
Balancer v1)

externalId (for Azure
and AWS Load
Balancer v2)

Install Status
install_status
None

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

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Reference
Key Value
[cmdb_key_value]

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

Parent class
Relationship type
Child class

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Cloud Mgmt Network Interface [cmdb_ci_nic]

The following attributes in the Cloud Mgmt Network Interface
[cmdb_ci_nic] table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

MAC Address
mac_address
macAddress

Name
name
name

Object ID
object_id
externalId

Install Status
install_status
None

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

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Reference
Key Value
[cmdb_key_value]

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

Parent class
Relationship type
Child class

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Cloud Network [cmdb_ci_network]

The following attributes in the Cloud Network [cmdb_ci_network] table
are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id
externalId

Cidr
cidr
addressRanges

Install Status
install_status
None

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
Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Cloud Network
[cmdb_ci_network]
Reference
Key Value
[cmdb_key_value]

Cloud Network
[cmdb_ci_network]
Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

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

Cloud Object Storage [cmdb_ci_cloud_object_storage]

The following attributes in the Cloud Object Storage
[cmdb_ci_cloud_object_storage] table are populated by collected
data:

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id

externalId (for Azure
and GCP)

providerUniqueId (for
AWS)

Cloud Provider
cloud_provider
cloudPlatform

Install Status
install_status
None

Relationships created for Cloud Object Storage

Parent class
Relationship type
Child class

Cloud Object Storage
[cmdb_ci_cloud_obje
ct_storage]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Cloud Object Storage
[cmdb_ci_cloud_obje
ct_storage]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Cloud Object Storage
[cmdb_ci_cloud_obje
ct_storage]

Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

Cloud Object Storage
[cmdb_ci_cloud_obje
ct_storage]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

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

Parent class
Relationship type
Child class

Cloud Object Storage
[cmdb_ci_cloud_obje
ct_storage]

Reference
Key Value
[cmdb_key_value]

Cloud Organizations [cmdb_ci_cloud_org]

The following attributes in the Cloud Organizations [cmdb_ci_cloud_org]
table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Object ID
object_id

ProviderUniqueId(AWS
and Azure), externalId
(for GCP)

Name
name
name

Relationships created for Cloud Organizations

Parent class
Relationship type
Child class

Cloud Organizations
[cmdb_ci_cloud_org]

Contains::Contained
by

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Cloud Organizations
[cmdb_ci_cloud_org]
Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Cloud Public IP Address [cmdb_ci_cloud_public_ipaddress]

The following attributes in the Cloud Public IP Address
[cmdb_ci_cloud_public_ipaddress] table are populated by collected
data:

Attribute label
Attribute name
Wiz attribute

Name
name
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
Wiz attribute

Object ID
object_id

externalId (for Azure
and GCP)

ProviderUniqueId (for
AWS)

Install Status
install_status
None

Public IP Address
public_ip_address
address

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

Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

Cloud Public IP
Address
[cmdb_ci_cloud_publi
c_ipaddress]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Cloud Public IP
Address
[cmdb_ci_cloud_publi
c_ipaddress]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

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

36

Zurich ServiceNow AI Platform Capabilities

---
*Page 37*

Cloud Service Account [cmdb_ci_cloud_service_account]

The following attributes in the Cloud Service Account
[cmdb_ci_cloud_service_account] table are populated by collected
data:

Attribute label
Attribute name
Wiz attribute

Account Id
account_id
externalId

Name
name
name

Object ID
object_id
externalId

Datacenter Type
datacenter_type
cloudPlatform

Is management
account
is_master_account
ProviderUniqueID
(AWS only)

Organization Id
organization_id
ProviderUniqueID
(AWS only)

Parent account
parent_account
ProviderUniqueID
(AWS only)

Relationships created for Cloud Service Account

Parent class
Relationship type
Child class

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Reference

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Reference
Key Value
[cmdb_key_value]

Cloud Service
Account
Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

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

Parent class
Relationship type
Child class

[cmdb_ci_cloud_servi
ce_account]

Cloud Storage Account [cmdb_ci_cloud_storage_account]

The following attributes in the Cloud Storage Account
[cmdb_ci_cloud_storage_account] table are populated by collected
data:

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id
externalId

Install Status
install_status
None

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

Cloud Storage
Account
[cmdb_ci_cloud_stora
ge_account]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Compute Security Group [cmdb_ci_compute_security_group]

The following attributes in the Compute Security Group
[cmdb_ci_compute_security_group] table are populated by collected
data:

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

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id
externalId

Install Status
install_status
None

Region
region
region

Relationships created for Compute Security Group

Parent class
Relationship type
Child class

Compute Security
Group
[cmdb_ci_compute_s
ecurity_group]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Compute Security
Group
[cmdb_ci_compute_s
ecurity_group]

Hosted on::Hosts

OCI Datacenter
[cmdb_ci_oci_datace
nter]

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

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Compute Security
Group
[cmdb_ci_compute_s
ecurity_group]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Compute Security
Group
Reference
Key Value
[cmdb_key_value]

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

Parent class
Relationship type
Child class

[cmdb_ci_compute_s
ecurity_group]

Docker Container [cmdb_ci_docker_container]

The following attributes in the Docker Container
[cmdb_ci_docker_container] table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Container id
container_id

externalId (for
Kubernetes, ACA, and
ACI)

providerUniqueId (for
ECS)

Install Status
install_status
None

Name
name
name

Relationships created for Docker Container

Parent class
Relationship type
Child class

Docker Container
[cmdb_ci_docker_con
tainer]

Hosts:: Hosted on

AWS Datacenter
[cmdb_ci_aws_datac
enter] (for ECS)

Docker Container
[cmdb_ci_docker_con
tainer]

Hosts:: Hosted on

Azure Datacenter
[cmdb_ci_azure_data
center] (for ACA, ACI)

Docker Container
[cmdb_ci_docker_con
tainer]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

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

DynamoDB Table [cmdb_ci_dynamodb_table]

The following attributes in the DynamoDB Table
[cmdb_ci_dynamodb_table] table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id
externalId

Install Status
install_status
None

Relationships created for DynamoDB Table

Parent class
Relationship type
Child class

DynamoDB Table
[cmdb_ci_dynamodb_
table]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

DynamoDB Table
[cmdb_ci_dynamodb_
table]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

DynamoDB Table
[cmdb_ci_dynamodb_
table]

Reference
Key Value
[cmdb_key_value]

Google Datacenter [cmdb_ci_google_datacenter]

The following attributes in the Google Datacenter
[cmdb_ci_google_datacenter] table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id
externalId

Region
region
externalId

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

Relationships created for Google Datacenter

Parent class
Relationship type
Child class

Google Datacenter
[cmdb_ci_google_dat
acenter]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Google Datacenter
[cmdb_ci_google_dat
acenter]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Google Organization Folder [cmdb_ci_gcp_folder]

The following attributes in the Google Organization Folder
[cmdb_ci_gcp_folder] table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Object ID
object_id
externalId

Name
name
name

Relationship created for Google Organization Folder

Parent class
Relationship type
Child class

Google
Organization Folder
[cmdb_ci_gcp_folder]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Google Organization Project [cmdb_ci_gcp_project]

The following attributes in the Google Organization Project
[cmdb_ci_gcp_project] table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Name
name
name

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

Attribute label
Attribute name
Wiz attribute

Object ID
object_id
externalId

Project Id
project_id
providerUniqueId

Relationship created for Google Organization Project

Parent class
Relationship type
Child class

Google Organization
Project
[cmdb_ci_gcp_project
]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Hardware Type [cmdb_ci_compute_template]

The following attributes in the Hardware Type
[cmdb_ci_compute_template] table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Name
name
instanceType

Object ID
object_id
instanceType

Relationships created for Hardware Type

Parent class
Relationship type
Child class

Hardware Type
[cmdb_ci_compute_t
emplate]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Hardware Type
[cmdb_ci_compute_t
emplate]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Hardware Type
[cmdb_ci_compute_t
emplate]

Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

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

Image [cmdb_ci_os_template]

The following attributes in the Image [cmdb_ci_os_template] table are
populated by collected data:

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id
externalId

Install Status
install_status
None

Relationships created for Image

Parent class
Relationship type
Child class

Image
[cmdb_ci_os_templat
e]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Image
[cmdb_ci_os_templat
e]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Image
[cmdb_ci_os_templat
e]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Image
[cmdb_ci_os_templat
e]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Image
[cmdb_ci_os_templat
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

44

Zurich ServiceNow AI Platform Capabilities

---
*Page 45*

Note:   Data with no subscription IDs for images aren't imported. Also,
if the subscription ID for an image is available, but the subscription-
specific details are not available in Wiz, the data isn't imported by
the connector.

Instance Scale Set [cmdb_ci_instance_scale_set]

The following attributes in the Instance Scale Set
[cmdb_ci_instance_scale_set] table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Name
name
name

Install Status
install_status
None

Object ID
object_id
externalId

Relationships created for Instance Scale Set

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

Instance Scale Set
[cmdb_ci_instance_sc
ale_set]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Instance Scale Set
[cmdb_ci_instance_sc
ale_set]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Instance Scale Set
[cmdb_ci_instance_sc
ale_set]

Reference
Key Value
[cmdb_key_value]

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

Internet Gateway [cmdb_ci_internet_gateway]

The following attributes in the Internet Gateway
[cmdb_ci_internet_gateway] table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id
externalId

Install Status
install_status
None

Relationships created for Internet Gateway

Parent class
Relationship type
Child class

Internet Gateway
[cmdb_ci_internet_gat
eway]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Internet Gateway
[cmdb_ci_internet_gat
eway]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Internet Gateway
[cmdb_ci_internet_gat
eway]

Reference
Key Value
[cmdb_key_value]

Key Value [cmdb_key_value]

The following attributes in the Key Value [cmdb_key_value] table are
populated by collected data:

Attribute label
Attribute name
Wiz attribute

Key
key
tags

Value
value
tags

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

Note:   The cloud resource tags (key-value pairs) from the API
response are populated in the Key Value [cmdb_key_value] table.

Kubernetes Cluster [cmdb_ci_kubernetes_cluster]

The following attributes in the Kubernetes Cluster
[cmdb_ci_kubernetes_cluster] table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Cluster Resource ID
cluster_resource_id
providerUniqueId

Kubernetes UID
k8s_uid
externalId

Name
name
name

Install Status
install_status
None

Relationships created for Kubernetes Cluster

Parent class
Relationship type
Child class

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Contains::Contained
by

Kubernetes Service
[cmdb_ci_kubernetes_
service]

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Contains::Contained
by

Kubernetes
Namespace
[cmdb_ci_kubernetes_
namespace]

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Contains::Contained
by

Kubernetes Pod
[cmdb_ci_kubernetes_
pod]

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Contains::Contained
by

Docker Container
[cmdb_ci_docker_con
tainer]

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

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

47

Zurich ServiceNow AI Platform Capabilities

---
*Page 48*

Parent class
Relationship type
Child class

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Cluster of::Cluster

Kubernetes Node
[cmdb_ci_kubernetes_
node]

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Reference
Key Value
[cmdb_key_value]

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Kubernetes Deployment [cmdb_ci_kubernetes_deployment]

The following attributes in the Kubernetes Deployment
[cmdb_ci_kubernetes_deployment] table are populated by collected
data:

Attribute label
Attribute name
Wiz attribute

Kubernetes UID
k8s_uid
uid

Name
name
name

Namespace
namespace
namespace

Available Replicas
available_replicas
status_availableReplic
as

Desired Replicas
desired_replicas
spec_replicas

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

Attribute label
Attribute name
Wiz attribute

Install Status
install_status
None

Total Replicas
total_replicas
status_replicas

Updated Replicas
updated_replicas
status_updatedReplic
as

Kubernetes Cluster
cluster
Kubernetes_clusterExte
rnalID

SelfLink
self_link

api_version

namespace

name

Unavailable Replicas
unavailable_replicas
status_unavailableRep
licas

Relationships created for Kubernetes Deployment

Parent class
Relationship type
Child class

Kubernetes
Deployment
[cmdb_ci_kubernetes_
deployment]

Hosted on::Hosts

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Kubernetes
Deployment
[cmdb_ci_kubernetes_
deployment]

Reference

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Kubernetes
Deployment
[cmdb_ci_kubernetes_
deployment]

Reference
Key Value
[cmdb_key_value]

Kubernetes
Deployment
Reference
SG-Wiz Extension
Attributes

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

Parent class
Relationship type
Child class

[cmdb_ci_kubernetes_
deployment]

[sn_wiz_integ_extensio
n_attributes]

Kubernetes Namespace [cmdb_ci_kubernetes_namespace]

The following attributes in the Kubernetes Namespace
[cmdb_ci_kubernetes_namespace] table are populated by collected
data:

Attribute label
Attribute name
Wiz attribute

Install Status
install_status
None

Namespace
namespace
name

Kubernetes Cluster
cluster
Kubernetes_clusterExte
rnalID

Name
name
name

Relationships created for Kubernetes Namespace

Parent class
Relationship type
Child class

Kubernetes
Namespace
[cmdb_ci_kubernetes_
namespace]

Reference

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Kubernetes
Namespace
[cmdb_ci_kubernetes_
namespace]

Reference
Key Value
[cmdb_key_value]

Kubernetes
Namespace
[cmdb_ci_kubernetes_
namespace]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

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

Kubernetes Node [cmdb_ci_kubernetes_node]

The following attributes in the Kubernetes Node
[cmdb_ci_kubernetes_node] table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

IP Address
ip_address
status_address

Kubernetes UID
k8s_uid
uid

Name
name
name

Install Status
install_status
None

Kubernetes Cluster
cluster
Kubernetes_clusterExte
rnalID

Relationships created for Kubernetes Node

Parent class
Relationship type
Child class

Kubernetes Node
[cmdb_ci_kubernetes_
node]

Reference

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Kubernetes Node
[cmdb_ci_kubernetes_
node]

Reference
Key Value
[cmdb_key_value]

Kubernetes Node
[cmdb_ci_kubernetes_
node]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Kubernetes Pod [cmdb_ci_kubernetes_pod]

The following attributes in the Kubernetes Pod
[cmdb_ci_kubernetes_pod] table are populated by collected data:

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

Attribute label
Attribute name
Wiz attribute

Kubernetes UID
k8s_uid
uid

Namespace
namespace
namespace

Host IP
host_ip
status_hostIP

Install Status
install_status
None

IP Address
ip_address
status_podIPs

Kubernetes Cluster
cluster
Kubernetes_clusterExte
rnalID

Name
name
name

Resource version
resource_version
resourceVersion

Relationships created for Kubernetes Pod

Parent class
Relationship type
Child class

Kubernetes Pod
[cmdb_ci_kubernetes_
pod]

Reference

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Kubernetes Pod
[cmdb_ci_kubernetes_
pod]

Reference
Key Value
[cmdb_key_value]

Kubernetes Pod
[cmdb_ci_kubernetes_
pod]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Kubernetes ReplicaSet [cmdb_ci_kubernetes_replicaset]

The following attributes in the Kubernetes ReplicaSet
[cmdb_ci_kubernetes_replicaset] table are populated by collected
data:

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

Attribute label
Attribute name
Wiz attribute

Kubernetes UID
k8s_uid
uid

Name
name
name

Namespace
namespace
namespace

Available Replicas
available_replicas
status_availableReplic
as

Desired Replicas
desired_replicas
spec_replicas

Install Status
install_status
None

SelfLink
self_link

api_version

namespace

name

Total Replicas
total_replicas
status_replicas

Kubernetes Cluster
cluster
Kubernetes_clusterExte
rnalID

Relationships created for Kubernetes ReplicaSet

Parent class
Relationship type
Child class

Kubernetes ReplicaSet
[cmdb_ci_kubernetes_
replicaset]

Hosted on::Hosts

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Kubernetes ReplicaSet
[cmdb_ci_kubernetes_
replicaset]

Reference

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

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

Parent class
Relationship type
Child class

Kubernetes ReplicaSet
[cmdb_ci_kubernetes_
replicaset]

Reference
Key Value
[cmdb_key_value]

Kubernetes ReplicaSet
[cmdb_ci_kubernetes_
replicaset]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Kubernetes Service [cmdb_ci_kubernetes_service]

The following attributes in the Kubernetes Service
[cmdb_ci_kubernetes_service] table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Kubernetes UID
k8s_uid
uid

Name
name
name

Install Status
install_status
None

Kubernetes Cluster
cluster
Kubernetes_clusterExte
rnalID

Namespace
namespace
namespace

IP Address
ip_address
spec_clusterIP

Selector
selector
spec_selector

Service Type
service_type
spec_type

Relationships created for Kubernetes Service

Parent class
Relationship type
Child class

Kubernetes Service
[cmdb_ci_kubernetes_
service]

Reference

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

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

Kubernetes Service
[cmdb_ci_kubernetes_
service]

Reference
Key Value
[cmdb_key_value]

Kubernetes Service
[cmdb_ci_kubernetes_
service]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Linux Server [cmdb_ci_linux_server]

The following attributes in the Linux Server [cmdb_ci_linux_server] table
are populated by collected data.

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id
externalId

Serial number
serial_number
providerUniqueId

CPU count
cpu_count
vCPUs

Install Status
install_status
None

Is Virtual
None
None

Operating System
os
operatingSystem

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

Logical Datacenter [cmdb_ci_logical_datacenter]

The following attributes in the Logical Datacenter
[cmdb_ci_logical_datacenter] table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id
externalId

Region
region
externalId

Relationships created for Logical Datacenter

Parent class
Relationship type
Child class

Logical Datacenter
[cmdb_ci_logical_dat
acenter]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Logical Datacenter
[cmdb_ci_logical_dat
acenter]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

OCI Datacenter [cmdb_ci_oci_datacenter]

The following attributes in the OCI Datacenter [cmdb_ci_oci_datacenter]
table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id
externalId

Region
region
externalId

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

Relationships created for OCI Datacenter

Parent class
Relationship type
Child class

OCI Datacenter
[cmdb_ci_oci_datace
nter]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

OCI Datacenter
[cmdb_ci_oci_datace
nter]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Resource Group [cmdb_ci_resource_group]

The following attributes in the Resource Group [cmdb_ci_resource_group]
table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id
externalId

Install Status
install_status
None

Relationships created for Resource Group

Parent class
Relationship type
Child class

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

Storage Volume
[cmdb_ci_storage_vol
ume]

Resource Group
[cmdb_ci_resource_gr
oup]

Reference
SG-Wiz Extension
Attributes

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

Parent class
Relationship type
Child class

[sn_wiz_integ_extensio
n_attributes]

Resource Group
[cmdb_ci_resource_gr
oup]

Reference
Key Value
[cmdb_key_value]

Serial Number [cmdb_serial_number]

The following attributes in the Serial Number [cmdb_serial_number] table
are populated by collected data:

Attribute label
Attribute name
Wiz

Serial Number
providerUniqueID
providerUniqueId

Serial Number Type
serial_number_type
None

Valid
serial_number_valid
providerUniqueId

Note:   The Serial Number [cmdb_serial_number] table is populated
for Azure only.

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

Server [cmdb_ci_server]

The following attributes in the Server [cmdb_ci_server] table are
populated by collected data:

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
Wiz attribute

Name
name
name

Object ID
object_id
externalId

Serial number
serial_number
providerUniqueId

CPU count
cpu_count
vCPUs

Install Status
install_status
None

Is Virtual
virtual
None

Operating System
os
operatingSystem

Sys ID
sys_id
Not applicable

Relationship created for Server

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

SG-Wiz Extension Attributes [sn_wiz_integ_extension_attributes]

The following attributes in the SG-Wiz Extension Attributes
[sn_wiz_integ_extension_attributes] table are populated by collected
data:

Attribute label
Attribute name
Wiz attribute

Project ID
project_id
productIDs

CMDB Class
u_cmdb_class
None

Note:   Cloud resource project IDs are populated in the SG-Wiz
Extension Attributes [sn_wiz_integ_extension_attributes] table.

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

Storage Volume [cmdb_ci_storage_volume]

The following attributes in the Storage Volume
[cmdb_ci_storage_volume] table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Object ID
object_id
externalId

Volume ID
volume_id
externalId

Install Status
install_status
None

Name
name
name

Size
size
sizeGb

Size bytes
size_bytes
sizeGb

Storage type
storage_type
volumeType

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

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Storage Volume
[cmdb_ci_storage_vol
ume]

Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

Storage Volume
[cmdb_ci_storage_vol
ume]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

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

Storage Volume
[cmdb_ci_storage_vol
ume]

Reference
Key Value
[cmdb_key_value]

Storage Volume Snapshot [cmdb_ci_storage_vol_snapshot]

The following attributes in the Storage Volume Snapshot
[cmdb_ci_storage_vol_snapshot] table is populated by collected data:

Attribute label
Attribute name
Wiz attribute

Object ID
object_id
externalId

Name
name
name

Install Status
install_status
None

Relationships created for Storage Volume Snapshot

Parent class
Relationship type
Child class

Storage Volume
Snapshot
[cmdb_ci_storage_vol
_snapshot]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Storage Volume
Snapshot
[cmdb_ci_storage_vol
_snapshot]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Storage Volume
Snapshot
[cmdb_ci_storage_vol
_snapshot]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Storage Volume
Snapshot
[cmdb_ci_storage_vol
_snapshot]

Reference
Key Value
[cmdb_key_value]

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

Storage Volume
Snapshot
[cmdb_ci_storage_vol
_snapshot]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Virtual Machine Instance [cmdb_ci_vm_instance]

The following attributes in the Virtual Machine Instance
[cmdb_ci_vm_instance] table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id
externalId

CPUs
cpus
vCPUs

Disks
disks
totalDisks

Install Status
install_status
None

Memory (MB)
memory
memoryGB

VM Instance ID
vm_inst_id

externalId

providerUniqueId (for
Azure)

Relationships created for Virtual Machine Instance

Parent class
Relationship type
Child class

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

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

Parent class
Relationship type
Child class

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

Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Hosted on::Hosts

OCI Datacenter
[cmdb_ci_oci_datace
nter]

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

Hosted on::Hosts

VMware vCenter
Datacenter
[cmdb_ci_vcenter_dat
acenter]

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

Provisioned
From::Provisioned

Hardware Type
[cmdb_ci_compute_t
emplate]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Provisioned
From::Provisioned

Cloud Hardware Type
[cmdb_ci_cloud_hard
ware_type]

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

Parent class
Relationship type
Child class

Windows Server
[cmdb_ci_win_server]

Virtualized
by::Virtualizes

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Linux Server
[cmdb_ci_linux_server]

Virtualized
by::Virtualizes

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Server
[cmdb_ci_server]

Virtualized
by::Virtualizes

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Reference

SG-Wiz Extension
Attributes
[sn_wiz_integ_extensio
n_attributes]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Reference
Key Value
[cmdb_key_value]

VMware vCenter Datacenter [cmdb_ci_vcenter_datacenter]

The following attributes in the VMware vCenter Datacenter
[cmdb_ci_vcenter_datacenter] table are populated by collected data:

Attribute label
Attribute name
Wiz attribute

Name
name
externalId

Object ID
object_id
externalId

Region
region
externalId

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

Relationship created for VMware vCenter Datacenter

Parent class
Relationship type
Child class

VMware vCenter
Datacenter
[cmdb_ci_vcenter_dat
acenter]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Windows Server [cmdb_ci_win_server]

The following attributes in the Windows Server [cmdb_ci_win_server] table
are populated by collected data.

Attribute label
Attribute name
Wiz attribute

Name
name
name

Object ID
object_id
externalId

Serial number
providerUniqueID
providerUniqueId

CPU count
cpu_count
vCPUs

Install Status
install_status
None

Is Virtual
None
None

Operating System
os
operatingSystem

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
[cmdb_ci_vm_instanc
e]

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

## Service Graph Connector for Wiz properties

Service Graph Connector for Wiz properties control the behavior of the
connector.

Connection properties

These connection properties are available for Service Graph Connector
for Wiz.

Note:   To open the Service Graph Connection Properties
[sn_cmdb_int_util_service_graph_connection_property] table for the
connector, navigate to All > Service Graph Connectors > Wiz >
Connections and select the connection name. The connection
properties are displayed in the Service Graph Connection Properties
related list.

Connection properties for Service Graph Connector for Wiz

Property
Description

Projects

Enter a list of comma-separated
Project IDs for which the resource
data should be collected. For
multiple entries, separate the IDs
with commas.

Exclude Projects

Enter a list of comma-separated
Project IDs for which the resources
are excluded only when the
Projects property isn't set. In this
case, all the resources except
for the specified projects are
imported. For multiple entries,
separate the names with commas.

Server Bypass

Set the value to true to link VM
data to existing Server records
instead of creating new records.
If the value is set to false,
new Server and VM records are
created.

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

Property
Description

Fetch Scaleset VMs

Set the value to true to import
Scale Set VM records. If the value is
set to false, Scale Set VMs aren't
imported.

System properties

These system properties are available for Service Graph Connector for
Wiz.

Note:   To open the System Properties [sys_properties] table, enter
sys_properties.list in the navigation filter.

System properties for Service Graph Connector for Wiz

Property
Description

sn_wiz_integ.list_resources_action.p
age_size

Enter the page size used in REST
requests to fetch Wiz entities.

• Type: string

• Default value: 100

• Location: System Property
[sys_properties] table

## Supported Wiz types

The Wiz types and corresponding native types are imported as CMDB
data and saved in tables that extend from the Configuration item
[cmdb_ci] table.

For information on Wiz types and Wiz native types, see Security Graph
Object Normalization on the Wiz documentation site (requires Wiz login).

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

Wiz types
Wiz native types
CMDB CI classes

Cloud Organization

AWS Organization

GCP Organization
Cloud Organizations

GCP Folder
Google Organization
Folder

Subscription

AWS Account
Cloud Service
Account
Azure Subscription

GCP Project

Cloud Service
Account

Google Organization
Project

OCI Compartment

VMware vCenter
Datacenter
Alibaba Account

vSphere Datacenter

Region

AWS Region
AWS Datacenter

Azure Location
Azure Datacenter

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

Wiz types
Wiz native types
CMDB CI classes

GCP Region
Google Datacenter

OCI Region
OCI Datacenter

Alibaba Region
Logical Datacenter

Resource Group
Azure Resource Group
Resource Group

Compute Instance
Group

AWS Auto Scaling
Group

Instance Scale Set

Azure Compute Virtual
Machine Scale Set

Network Interface

AWS Network
Interface

Cloud Mgmt Network
Interface

Azure Network
Interface

GCP Compute
Network Interface

Virtual Network

AWS VPC

Cloud Network
Azure Virtual Network

Firewall

AWS EC2 Security
Group

Compute Security
Group

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

Wiz types
Wiz native types
CMDB CI classes

Azure Network Security
Group

GCP Firewall

OCI Network Security
Group

OCI Security List

Volume

AWS EC2 Volume (EBS)

Storage Volume
AWS Lightsail Disk

Azure Disk

GCP Compute Disk
Storage Volume,
Cloud Disk Type

Virtual Machine

AWS EC2 Instance

Virtual Machine
Instance, Server,
Hardware Type

AWS Lightsail Instance

Azure Scale Set Virtual
Machine

Azure Compute Virtual
Machine

GCP Compute
Instance

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

Wiz types
Wiz native types
CMDB CI classes

OCI Compute
Instance

Alibaba ECS Instance

vSphere Virtual
Machine

Snapshot

AWS EBS Unencrypted
Snapshot

Storage Volume
Snapshot

AWS DB Cluster
Snapshot

AWS DB Instance
Snapshot

AWS DocumentDB
Elastic Cluster
Snapshot

AWS EBS Encrypted
Snapshot

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

Wiz types
Wiz native types
CMDB CI classes

AWS Elasticache
Snapshot

AWS MemoryDB
Snapshot

AWS DynamoDB
Backup

AWS Neptune
Analytics Graph
Snapshot

AWS Redshift Cluster
Snapshot

Azure Compute Public
Snapshot

Azure SQL LTR Backup

GCP Compute
Snapshot

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

Wiz types
Wiz native types
CMDB CI classes

GCP AlloyDB Backup

GCP Cloud SQL
Backup

GCP Cloud SQL
Backup Run

Gateway

AWS Egress Only
Internet Gateway

Internet Gateway

AWS VPN Gateway

Virtual Machine Image

AWS Machine Image
(AMI)

Image

Azure Compute Virtual
Machine Image

Azure Compute
Gallery VM image
version

GCP Compute Image

Load Balancer
AWS ELB v1
Cloud Load Balancer

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

Wiz types
Wiz native types
CMDB CI classes

AWS ELB V2
Application Load
Balancer

AWS ELB V2 Gateway
Load Balancer

AWS ELB V2 Network
Load Balancer

AWS ELB V2

Azure Application
Gateway

Azure Load Balancer

Azure Traffic Manager

GCP Compute
Backend Service

GCP Compute Region
Backend Service

Bucket

AWS S3 Bucket

Cloud Object Storage
Azure Blob Storage
Container

GCP Bucket

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

Wiz types
Wiz native types
CMDB CI classes

Serverless

AWS Lambda Function

Cloud Function
Azure Function

GCP Cloud Function

Database

AWS DynamoDB Table
DynamoDB Table

AWS ElastiCache for
Memcached Cluster

Cloud DataBase
Cluster

AWS ElastiCache Redis
OSS Cluster

AWS ElastiCache
Valkey Cluster

AWS Elastic
DocumentDB Cluster

AWS RDS Aurora
MySQL Cluster

AWS DocumentDB
Cluster

AWS MemoryDB
Cluster

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

Wiz types
Wiz native types
CMDB CI classes

AWS RDS MSSQL Server
Cluster

AWS RDS MariaDB
Cluster

AWS RDS MySQL
Cluster

AWS Neptune Cluster

AWS RDS Oracle
Cluster

AWS RDS PostgreSQL
Cluster

AWS RDS Aurora
PostgreSQL Cluster

Azure Cosmos DB SQL
Database

Cloud DataBase

Azure Cosmos DB
Cassandra Keyspace

Azure MariaDB
Database

Azure Cosmos DB
MongoDB Collection

Azure Cosmos DB for
PostgreSQL Node

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

Wiz types
Wiz native types
CMDB CI classes

Azure Database for
MySQL Database

Azure Database
for MySQL Flexible
Database

Azure Database for
PostgreSQL Database

Azure Database for
PostgreSQL Flexible
Database

Azure Redis Database

Azure Redis Enterprise
Database

Azure Synapse
Dedicated SQL Pool

Azure Databricks
Schema

Azure SQL Database

Azure SQL Managed
Instance Database

Azure Data Explorer
Kusto Database
Instance

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

Wiz types
Wiz native types
CMDB CI classes

Bucket

AWS S3 Bucket

Cloud Object Storage

Azure Blob Storage
Container

GCP Bucket

Serverless

AWS Lambda Function

Cloud Function
Azure Function

GCP Cloud Function

Network Address

AWS Elastic IP Address

Cloud Public IP
Address

Azure CDN Endpoint

Azure Public IP
Addresses

GCP Compute
Address

GCP Endpoint

Storage Account
Azure Storage
Account

Cloud Storage
Account

API Gateway

AWS API Gateway

Cloud Gateway
AWS API Gateway V2

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

Wiz types
Wiz native types
CMDB CI classes

Azure API
Management

Kubernetes Cluster

AWS Elastic
Kubernetes Service
(EKS) Cluster

Kubernetes Cluster

Azure Kubernetes
Service (AKS) Cluster

GCP Kubernetes
Engine (GKE) Cluster

Kubernetes Cluster

Namespace
Kubernetes
Namespace

Kubernetes
Namespace

Kubernetes Node
Kubernetes Node
Kubernetes Node

Deployment
Kubernetes
Deployment

Kubernetes
Deployment

Kubernetes Service
Kubernetes Service
Kubernetes Service

Pod
Kubernetes Pod
Kubernetes Pod

Replica Set
Kubernetes Replica
Set
Kubernetes ReplicaSet

Container

Kubernetes Container

Docker Container
AWS ECS Container

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

Wiz types
Wiz native types
CMDB CI classes

Azure ACA Container

Azure ACI Container

## Accessing the connection details of Service Graph
## Connector for Wiz

You can access the connection details of the Service Graph Connector
for Wiz in a single view using the common connection framework (CCF)
included within the Integration Commons for CMDB (sn_cmdb_int_util)
store app.

With the CCF, you can access all the connections used by the Service
Graph Connector for Wiz. The connection details include the connection
alias, connection properties, data sources, and scheduled data imports
associated with a connection. You can also test the connection. For
more information, see Accessing the connection details of Service Graph
Connectors.

Access the details of a Wiz connection

Access the details of a Wiz connection configured for the Service Graph
Connector for Wiz.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > Wiz > Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

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

3. On the Service Graph Connections page, view the connection
details such as the connection name and alias.

4. Select a related list to view further details of the connection.

5. (Optional) Select the Test Connection related link to test the
connection.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

81

Zurich ServiceNow AI Platform Capabilities

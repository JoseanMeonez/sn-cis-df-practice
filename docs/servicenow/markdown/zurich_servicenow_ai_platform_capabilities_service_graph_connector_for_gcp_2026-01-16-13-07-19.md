# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_gcp_2026-01-16-13-07-19

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_gcp_2026-01-16-13-07-19.pdf*

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

## Service Graph Connector for GCP

Use the Service Graph Connector for GCP to ingest CMDB data from a
Google Cloud Platform (GCP) project using the REST APIs.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Key features

• Get started quickly with a streamlined onboarding process.

• Use only the credentials you need.

• No MID Server required.

• Get end-to-end data coverage.

• No agents or individual scanning needed.

• Performant at scale.

Supported versions

Versions

GCP
ServiceNow

Last tested on July 16, 2025

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

You can use the Service Graph Connector for GCP to get visibility into
cloud resource identities, relationships, and state in real-time.

Important information for upgrading Service Graph Connector for
GCP

After you've installed the latest version of the Service Graph Connector
for GCP, you must synchronize the newly added data sources. Use
the Advanced Setup section in the guided setup to synchronize data
sources. For more information, see Configure Service Graph Connector
for GCP.

Configuring a connection for the connector

You can configure a connection for the connector by using the
SGC Central view in the CMDB Workspace. The view enables you to
discover and install connectors, and then effectively manage the full life
cycle of creating, editing, monitoring, and debugging connections. To
configure the connector using SGC Central, see Configure Service Graph
Connector for GCP using SGC Central.

Important:   Unless there are configuration issues, use the SGC
Central view in the CMDB Workspace to configure the connection
for the connector, as the guided setup method is being deprecated.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration,
or a specific integration run. For more details about monitoring GCP
integrations in the CMDB Integrations Dashboard, see Using the CMDB
Integrations Dashboard.

Data mapping

Data from the GCP data sources is mapped and transformed into the
ServiceNow CMDB Configuration Item (CI) class definitions using the
Robust Transform Engine (RTE). Data is inserted into the ServiceNow CMDB
using the Identification and Reconciliation Engine (IRE).

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

When you complete setting up the connection, you can configure the
integration to periodically pull data from the GCP application.

The following table lists the data sources, the staging tables, the target
tables as the CMDB CI classes, and the resource types imported for a
GCP project.

Data mapping for GCP

Data source
Staging table
CMDB CI classes
Resource types

SG-GCP
Organization

SG-GCP
Organization
[sn_gcp_integ_s
g_gcp_organiza
tion]

Cloud
Organizations
Organization

SG-GCP Folder

SG-GCP Folder
[sn_gcp_integ_s
g_gcp_folder]

Google
Organization
Folder

SG-GCP
Extension
Attributes

Folder

SG-GCP Project

SG-GCP Project
[sn_gcp_integ_s
g_gcp_project]

Google
Organization
Project

Cloud Service
Account

Key Value

SG-GCP
Extension
Attributes

Project

SG-GCP
Network

SG-GCP
Network
[sn_gcp_integ_s
g_gcp_network]

Cloud Network
Network

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
CMDB CI classes
Resource types

SG-GCP
Extension
Attributes

SG-GCP
Machine Image

SG-GCP
Machine Image
[sn_gcp_integ_s
g_gcp_machine
_image]

Image

Key Value

SG-GCP
Extension
Attributes

MachineImage

SG-GCP Subnet

SG-GCP Subnet
[sn_gcp_integ_s
g_gcp_subnet]

Cloud Subnet

Google
Datacenter

Key Value

SG-GCP
Extension
Attributes

Subnetwork

SG-GCP Storage
Volume

SG-GCP Storage
Volume
[sn_gcp_integ_s
g_gcp_storage_
volume]

Storage Volume

Google
Datacenter

Cloud Disk Type

Key Value

SG-GCP
Extension
Attributes

Disk

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
CMDB CI classes
Resource types

SG-GCP
Storage Volume
Snapshot

SG-GCP Storage
Volume
Snapshot
[sn_gcp_integ_s
g_gcp_storage_
vol_snapshot]

Storage Volume
Snapshot

Key Value

SG-GCP
Extension
Attributes

Snapshot

SG-GCP Security
Group

SG-GCP Security
Group
[sn_gcp_integ_s
g_gcp_security_
group]

Compute
Security Group

Network ACL

Network ACL
Rule

Key Value

SG-GCP
Extension
Attributes

Firewall

SG-GCP
Software
Inventory

SG-GCP
Software
Inventory
[sn_gcp_integ_s
g_gcp_software
_inventory]

When the
Software Asset
Management
(SAM)
application isn't
installed:

Software

Software
Instance

When the
SAM application
is installed:

Instance

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
CMDB CI classes
Resource types

Software
Installation

SG-GCP VM
Instance

SG-GCP VM
Instance
[sn_gcp_integ_s
g_gcp_vm_insta
nce]

Virtual Machine
Instance

Google
Datacenter

Hardware Type

Availability Zone

Cloud Mgmt
Network
Interface

Server

Storage
Mapping

VNIC Endpoint

Block Endpoint

IP Address

Key Value

SG-GCP
Extension
Attributes

Instance

SG-GCP
Execute Patch
Job

SG-GCP
Execute Patch
Job
[sn_gcp_integ_s
g_gcp_execute
_patch_job]

Not applicable
Not applicable

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
CMDB CI classes
Resource types

SG-GCP
Hardware Type

SG-GCP
Hardware Type
[sn_gcp_integ_s
g_gcp_hardwar
e_type]

Hardware Type

Google
Datacenter

Availability Zone

MachineType

SG-GCP VM Hw
Consolidation

SG-GCP VM Hw
Consolidation
[sn_gcp_integ_s
g_gcp_vm_hw_
consolidation]

Virtual Machine
Instance

Server

None

SG-GCP Load
Balancer Pool

SG-GCP Load
Balancer Pool
[sn_gcp_integ_s
g_gcp_load_bal
ancer_pool]

Load Balancer
Pool

Google
Datacenter

Cloud Service
Account

SG-GCP
Extension
Attributes

Key Value

TargetPool

SG-GCP Load
Balancer Pool
Member

SG-GCP Load
Balancer Pool
Member
[sn_gcp_integ_s
g_gcp_load_bal
ancer_pool_me
mber]

Load Balancer
Pool Member

SG-GCP
Extension
Attributes

TargetPool

SG-GCP Load
Balancer Health
Service

SG-GCP Load
Balancer Health
Service[sn_gcp_i

Cloud Load
Balancer Health
Service

HealthCheck

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
CMDB CI classes
Resource types

nteg_sg_gcp_lo
ad_balancer_he
alth_service]

SG-GCP
Extension
Attributes

SG-GCP Load
Balancer

SG-GCP Load
Balancer
[sn_gcp_integ_s
g_gcp_load_bal
ancer]

Cloud Load
Balancer

Google
Datacenter

Cloud Service
Account

SG-GCP
Extension
Attributes

Key Value

BackendService

SG-GCP Load
Balancer Service

SG-GCP Load
Balancer Service
[sn_gcp_integ_s
g_gcp_load_bal
ancer_service]

Load Balancer
Service

SG-GCP
Extension
Attributes

ForwardingRule

SG-GCP Cloud
Database

SG-GCP Cloud
Database
[sn_gcp_integ_s
g_gcp_cloud_d
atabase]

Cloud DataBase

Google
Datacenter

SG-GCP
Extension
Attributes

Key Value

Instance

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
CMDB CI classes
Resource types

SG-GCP Cloud
Function

SG-GCP Cloud
Function
[sn_gcp_integ_s
g_gcp_cloud_fu
nction]

Cloud Function

Google
Datacenter

SG-GCP
Extension
Attributes

Key Value

Function

SG-GCP Cloud
Object Storage

SG-GCP Cloud
Object Storage
[sn_gcp_integ_s
g_gcp_cloud_o
bject_storage]

Cloud Object
Storage

Google
Datacenter

Key Value

SG-GCP
Extension
Attributes

Buckets

SG-GCP
Kubernetes
Cluster

SG-GCP
Kubernetes
Cluster
[sn_gcp_integ_s
g_gcp_kubernet
es_cluster]

Kubernetes
Cluster

Key Value

SG-GCP
Extension
Attributes

Cluster

SG-GCP
Kubernetes
Node

SG-GCP
Kubernetes
Node
[sn_gcp_integ_s
g_gcp_kubernet
es_node]

Kubernetes
Node
Node

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

Data source
Staging table
CMDB CI classes
Resource types

SG-GCP
Extension
Attributes

SG-GCP
Kubernetes Pod

SG-GCP
Kubernetes Pod
[sn_gcp_integ_s
g_gcp_kubernet
es_pod]

Kubernetes Pod

Kubernetes
Volume

Docker Image

Docker
Container

Key Value

SG-GCP
Extension
Attributes

Pod

SG-GCP
Kubernetes
Service

SG-GCP
Kubernetes
Service
[sn_gcp_integ_s
g_gcp_kubernet
es_service]

Kubernetes
Service

Key Value

SG-GCP
Extension
Attributes

Service

SG-GCP
Kubernetes
Namespace

SG-GCP
Kubernetes
Namespace
[sn_gcp_integ_s
g_gcp_kubernet
es_namespace]

Kubernetes
Namespace

Cloud Service
Account

Key Value

Namespace

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

Data source
Staging table
CMDB CI classes
Resource types

SG-GCP
Extension
Attributes

SG-GCP
Kubernetes
Deployment

SG-GCP
Kubernetes
Deployment
[sn_gcp_integ_s
g_gcp_kubernet
es_deployment]

Kubernetes
Deployment

Key Value

SG-GCP
Extension
Attributes

Deployment

SG-GCP
Kubernetes
Replicaset

SG-GCP
Kubernetes
Replicaset
[sn_gcp_integ_s
g_gcp_kubernet
es_replicaset]

Kubernetes
ReplicaSet

Key Value

SG-GCP
Extension
Attributes

ReplicaSet

SG-GCP
Kubernetes
Cluster Roles

SG-GCP
Kubernetes
Cluster Roles
[sn_gcp_integ_s
g_gcp_kubernet
es_cluster_role]

Kubernetes
Cluster Role

Key Value

SG-GCP
Extension
Attributes

ClusterRole

SG-GCP
Kubernetes
Cluster Role
Binding

SG-GCP
Kubernetes
Cluster Role
Binding
[sn_gcp_integ_s
g_gcp_kubernet

Kubernetes
Cluster Role
Binding

Key Value

ClusterRoleBindi
ng

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

Data source
Staging table
CMDB CI classes
Resource types

es_cluster_role_b
inding]

SG-GCP
Extension
Attributes

SG-GCP
Kubernetes
Node Pool

SG-GCP
Kubernetes
Node Pool
[sn_gcp_integ_s
g_gcp_kubernet
es_node_pool]

Kubernetes
Node Pool

Key Value

SG-GCP
Extension
Attributes

NodePool

SG-GCP
Generic
Resource

SG-GCP
Generic
Resource
[sn_gcp_integ_s
g_gcp_generic_
resource]

Note:   The
SG-GCP
Generic
Resource
data source
only works
with a
service
account
that has
organizatio
n-level
access.

Cloud Resource
Resource

SG-GCP
Annotation

SG-GCP
Annotation
[sn_gcp_integ_s
g_gcp_annotati
on]

Key Value
Annotation

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

Data source
Staging table
CMDB CI classes
Resource types

SG-GCP Get
Patch Job

SG-GCP Get
Patch Job
[sn_gcp_integ_s
g_gcp_get_pat
ch_job]

Not applicable
Not applicable

SG-GCP
Generic
Resource
Annotation

SG-GCP
Generic
Resource
Annotation
[sn_gcp_integ_s
g_gcp_generic_
resource_annot
ation]

Key Value
Annotation

• The SG-GCP Annotation data source populates all labels and tags
associated with GCP supported resources to the Key Value table.

• Starting with the Service Graph Connector for GCP 1.10 version, the
SG-GCP Generic Resource Annotation data source populates the tags
and labels for Generic resources to the Key Value table.

• The basic information about a GCP resource is stored in the SG-GCP
Extension Attributes [sn_gcp_integ_extension_attributes] table.

• After all the data sources are executed, the Server [cmdb_ci_server]
class is updated with the class entry, and then based on the
Windows or Linux class, the records are created in the Windows Server
[cmdb_ci_win_server] and Linux Server [cmdb_ci_linux_server] classes,
respectively.

• The SG-GCP Generic Resource data source imports data for
generic resources not tracked by other data sources. The
connector uses the Service Graph Resource Inclusion Whitelist
[sn_cmdb_int_util_service_graph_resource_inclusion_whitelist] table to
differentiate between generic and other supported resource types.

The connector first populates all supported resources
in the Service Graph Resource Inclusion Whitelist
[sn_cmdb_int_util_service_graph_resource_inclusion_whitelist] table.
These resources, categorized under their respective supported

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

resource types, have specific data sources designated for ingestion
within the connector. When the SG-GCP Generic Resource data
source is executed and retrieves unsupported resource types,
they are added to the Service Graph Resource Inclusion Whitelist
[sn_cmdb_int_util_service_graph_resource_inclusion_whitelist] table and
categorized as generic.

• For any discovered resources deleted later after pulling data, the
Service Graph Connector for GCP automatically updates the Install
Status field of the associated CMDB CI classes to indicate any retired
or deleted records. For more information, see Life cycle management
of records in Service Graph Connector for GCP and Record removal
process in Service Graph Connector for GCP.

• Starting with the Service Graph Connector for GCP 1.9.0 version, when
the sn_itom_pattern.use a single hardware type for cloud data centers
system property is set to true, hardware type data is added to the
Cloud Hardware Type [cmdb_ci_cloud_hardware_type] table, instead
of being added to the Hardware Type [cmdb_ci_compute_template]
table. For more information, see the Service Graph Connector For GCP
- Migrating to a new hardware type model [KB1899584] article in the
Now Support Knowledge Base.

• Starting with the Service Graph Connector for GCP 1.9.0 version, when
the sn_cmdb_ci_class.use_single_cloud_os_image system property is
set to true, image type data is added to the Cloud Image
[cmdb_ci_cloud_os_image] table, instead of being added to the
Image [cmdb_ci_os_template] table. For more information, see the
Service Graph Connector For GCP - Migrating to a new Cloud OS
Image model [KB1983751] article in the Now Support Knowledge Base.

• Starting with the Service Graph Connector for GCP 1.9.0 version, list API
calls return only the information that is required to make batch calls
and not the entire resource response.

• Starting with the Service Graph Connector for GCP 1.10 version, parallel
data loading is enabled for the SG-GCP Annotation and SG-GCP
Generic Resource Annotation data sources.

• Starting with the Service Graph Connector for GCP 1.10 version, you
can configure the AppScript Folder IDs connection property to exclude
AppScript folder information from imports. Automations are run on
AppScript folders, which contain multiple projects that include meta

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

information. AppScript folders don't contain any resources such as
networks, subnets, and VMs.

Specify the AppScript folder IDs as a comma-separated list in the Value
field of the AppScript Folder IDs connection property to exclude the
AppScript folders and projects information from being added to the
CMDB during import.

• Starting with the Service Graph Connector for GCP 1.10 version, the SG-
GCP Software Inventory scheduled import runs before the SG-GCP VM
Instance scheduled import. The SG-GCP Software Inventory scheduled
job populates the operating system information for the Server records,
which determines the script that needs to be run for deep discovery
(Shell script for Linux VMs or PowerShell script for Windows VMs).

• Starting with the Service Graph Connector for GCP 1.10 version, the
SG-GCP Get Patch Job scheduled import supports deep discovery
by running commands on VMs. For information about deep discovery
for the Service Graph Connector for GCP, see the Enabling deep
discovery for Service Graph Connector for GCP article in the Now
Support Knowledge Base.

For more information on where data is saved when pulling data from a
GCP project, see CMDB classes targeted in Service Graph Connector for
GCP.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

BYOL and BYOS support

Bringing your own licenses (BYOL) or bringing your own subscriptions
(BYOS) is the process of bringing previously purchased on-premises
licenses or subscriptions to Google Cloud. The connector supports the
BYOL and BYOS of the Image CIs for the Red Hat Enterprise Linux
(RHEL) and SUSE Linux Enterprise Server (SLES) services on Google
Cloud. The connector populates the Key Value [cmdb_key_value]
table with the licensing information. Depending on the platform usage,
the key is set to either Windows_OS_License_Type_automatic or
Linux_OS_License_Type_automatic, and the key value is set to either
BYOL or BYOS.

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

• Service Graph Connectors

• Handling import failures for large GCP resources

• Deep discovery for Service Graph Connector for GCP

## Configure Service Graph Connector for GCP using SGC
## Central

Use the playbook available with the SGC Central application to set up
the Service Graph Connector for GCP for pulling in GCP project data into
the CMDB.

Before you begin

Install Service Graph Connector for GCP version 1.8.0 or later from the
ServiceNow Store. For ServiceNow Store installation steps, see Install a
ServiceNow Store application.
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

2. In the CMDB Workspace, select SGC Central.

3. On the Overview page, select Create connection.

Tip:   Alternatively, you can select Create connection on the All
connections page.

4. On the Create connection window, select the GCP connector type
and then select Create connection.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

Note:   This step is required only during the first-time setup. See
Perform initial setup tasks when creating a connection in SGC
Central.

6. Complete the prerequisites for setting up the GCP environment.

a. Set up the GCP environment and create a Java KeyStore (JKS)
certificate to encrypt the security certificates obtained from a
GCP application.

a. In the Prerequisites stage of the playbook, select the Review
setup instructions activity.

b. Select Service Graph connector for GCP - Setup Instructions
link to view the setup instructions included in the Service
Graph connector for GCP - Setup Instructions [KB1220598]
article in the Now Support Knowledge Base.

c. Make a note of the destination keystore password. You need
to specify this password while importing the JKS certificate
into the Service Graph Connector for GCP application.

d. Select the I have read the setup instructions check box
to confirm that you have set up the GCP environment
according to the instructions.

e. Select Continue.

f. After completing the Review setup instructions activity, select
Continue.

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

b. Create an X.509 certificate to associate the JKS certificate for the
GCP application with the Service Graph Connector for GCP.

Note:   You can skip this step if you're reusing an existing
certificate by selecting Skip.

a. In the Prerequisites stage of the playbook, select the Create
X.509 certificate activity.

b. Select New.

c. On the form, fill in the fields.

Create new X.509 Certificate form

Field
Description

Name

Name of the X.509
certificate. For example, SG-
GCP-509Certificate-Org1.

Key store password

Password to access the JKS
certificate as noted down in
the step 6.a.iii.

Short description
Description of the X.509
certificate.

d. In the Attachments section, select Add File to browse and
upload the keystore.p12 file for the JKS certificate you
created in step 6.a.

e. Select the I have read the setup instructions check box after
you have completed the setup.

f. After completing the Create X.509 certificate activity, select
Continue.

7. (Optional) Download the scripts that are required to enable deep
discovery for the Service Graph Connector for GCP.

a. In the Prerequisites stage of the playbook, select the Download
GCP deep discovery scripts activity.

b. Download the deep discovery scripts for Linux and Windows VMs.

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

For more information about deep discovery for the Service Graph
Connector for GCP, see the Service Graph Connector for GCP -
Deep Discovery Setup Instructions [KB2213095] article in the Now
Support Knowledge Base.

c. After completing the Download GCP deep discovery scripts
activity, select Continue.

8. Enter connection details and test the API connection for importing
GCP data.

a. In the Setup stage of the playbook, select the Create and test
connection activity.

b. On the form, fill in the fields.

Create and test connection form

Field
Description

Connection Name
Name to identify the GCP
connection record.

Service Account Email

ServiceNow service account
associated with the GCP
application.

Keystore
Name of the X.509 certificate
that you created in step 6.b.

Keystore Password

Password to access the JKS
certificate as noted down in
the step 6.a.iii.

Organization Id

ID of the organization
associated with the GCP
application.

Discovery Scope

Discovery scope of the GCP
application. The available
options are:

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

Field
Description

Organization

Select Organization when the
ServiceNow service account
has access to data within the
GCP organization.

Projects

Select Projects when the
ServiceNow service account
has access to data within GCP
projects only.

c. Select Update and test connection.

d. Once the connection test is complete, select Continue.

9. (Optional) Configure the deep discovery connection properties.

a. In the Setup stage of the playbook, select the Configure
connection properties activity.
If deep discovery is already configured on the connection, the
values are pre-populated on the Deep Discovery properties
form. For more information about the deep discovery connection
properties for GCP, see Deep discovery connection properties.

b. Review the pre-populated fields on the Deep Discovery
properties form.

c. After completing the Configure connection properties activity,
select Continue.

10. Configure the import schedule to import data at regular intervals.

a. In the Setup stage of the playbook, select the Configure import
schedule activity.

b. Select Configure import schedule.

c. Expand the Parent scheduled data import within the Import
schedules list to select the SG-GCP Organization import schedule.

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

d. In the Configure import schedule dialog box, select the Active
check box, and then fill in the run schedule and time details.

For more information, see Schedule a data import.

e. Select Save.
Alternatively, select Execute Now to execute the import schedule
immediately.

f. Select Continue.

11. In the Setup stage of the playbook, select the Confirm connection
creation activity to verify whether the connection was configured.

What to do next

Select View all connections to review the connection details. The
configured connection appears in the Installed connections list.

Related concepts

• Service Graph Connector for GCP

• Deep discovery for Service Graph Connector for GCP

## Configure Service Graph Connector for GCP using the
## guided setup

Set up scheduled import jobs to pull in data from a GCP project into your
CMDB.

Before you begin

Important:   Unless there are configuration issues, use the SGC
Central view in the CMDB Workspace to configure the connection
for the connector, as the guided setup method is being deprecated.

To use this Service Graph Connector, you need a subscription to
a Subscription Unit that is based in the IT Operations Management
(ITOM) Visibility application or in the ITOM Discovery application. As
defined in the section titled "Managed IT Resource Types" in ServiceNow

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
required for event ingestion. This app must be installed prior to installing
the connector for Event Management to work. For more information,
see Observability Commons for CMDB on the ServiceNow Store.

Note:   If you have an earlier version of the Service Graph Connector
for GCP, then don’t migrate data from the old connector. You must
uninstall the previous version and run the new integration.

Role required: admin

Note:   If you create non-admin RunAs users to run scheduled
imports, grant the cmdb_inst_admin role to those users.

Procedure

1. Ensure that the application scope is set to the Service Graph
Connector for GCP application by using the application picker.
For more information, see Application picker.

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

2. Navigate to All > Service Graph Connectors > GCP > Setup.

3. On the Getting started page, select Get Started.

4. Configure the connection to send requests to the GCP application.

a. In the Configure the Connection and Credentials section of the
Service Graph Connector for GCP page, select Get Started.

b. Set up the GCP environment and create a Java KeyStore (JKS)
certificate to encrypt the security certificates obtained from a
GCP application.

Make a note of the destination keystore password. You need to
specify this password while importing the JKS certificate into the
Service Graph Connector for GCP application.

For instructions, see the Service Graph Connector for GCP - Setup
Instructions [KB1220598] article in the Now Support Knowledge
Base.

Note:   After you have set up the GCP environment, return
to the guided setup and set the GCP Setup Instructions task
in the Configure the Connection and Credentials section to
complete by selecting Mark as Complete.

c. Create an X.509 certificate to associate the JKS certificate for the
GCP application with the Service Graph Connector for GCP.

a. For the Create X.509 certificate task, select Configure.

b. On the form that opens in a new tab, fill in the fields.

X.509 Certificate form

Field
Description

Name

Name of the X.509
certificate. For example, SG-
GCP-509Certificate-Org1.

Notify on expiration

Users to be notified when
the certificate expires. If
no users are selected, the
logged-in user is added by

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

Field
Description

default, along with the last
two logged-in users with the
administrator role.

Warn in days to expire

Number of days to send
a notification before the
certificate expires.

Active
Option to activate the
certificate.

Type

Certificate container that is
automatically set to Java
Key Store. Leave the field
value set to Java Key Store.

Expires in days
Number of days until the
certificate expires.

Key store password

Password to access the JKS
certificate as noted down in
the previous step.

Short description
Description of the X.509
certificate.

c. Select the manage attachments icon (

).

d. Select Choose file to browse and upload the keystore.p12 file
for the JKS certificate you created in step 4.b.

e. Close the dialog box.

f. Select the Validate Stores/Certificates related link.

g. On successful validation, select Update to return to the
guided setup page.

h. Set the Create X.509 certificate task to complete by selecting
Mark as Complete.

d. Edit the default connection.

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

a. For the Edit Default Connection task, select Configure.

b. In the Flow Designer, select SG-GCP Default Connection, and
then select Edit.

c. On the form that opens in the Edit Connection dialog box, fill
in the fields.

Edit Connection form

Field
Description

Service Account Email

Service account created in
and associated with the
GCP application.

Keystore
Name of the keystore that
you created in step 4.b.

Key Password

Destination keystore
password associated with
the keystore.

Organization Id

ID of the organization
associated with the GCP
application.

Discovery Scope

Discovery scope of the GCP
application. The available
options are:

organizations

Select organizations when
the ServiceNow service
account has access to data
within the GCP organization.

projects

Select projects when the
ServiceNow service account

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

Field
Description

has access to data within
GCP projects only.

d. Select Edit and Get OAuth Token.

e. After the OAuth token flow is completed successfully, close
the dialog box and the browser tab, and return to the guided
setup page.

f. Set the Edit Default Connection task to complete by
selecting Mark as Complete.

e. Test the GCP API connection to import data from the GCP
application.

a. For the Test the Connection task, select Configure to open
the SG-GCP Default Connection page in a new browser tab.

b. Test the connection by selecting the Test Connection related
link.

Testing the connection may take a few moments. The page
is refreshed to show the test results.

c. When the Status field is set to Success, close the browser tab
and return to the guided setup page.

If any of the tests have an error code or message or error
sign, the connection failed and further troubleshooting is
required.

d. Set the Test the Connection task to complete by selecting
Mark as Complete.

f. Configure the scheduled jobs to import data from the GCP
application.

a. For the Configure the Scheduled Imports task, select
Configure to open the Scheduled Data Imports list in a new
browser tab.

b. Select the SG-GCP Organization scheduled job.

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

c. On the Scheduled Data Import form, verify the field values for
the scheduled job.

For more information, see Schedule a data import.

d. Select Active check box to activate the SG-GCP
Organization scheduled job.

e. In the Run field, select Periodically to specify how often the
job will run.

f. Select Update.

g. Return to the guided setup page.

h. Set the Configure the Scheduled Imports task to complete by
selecting Mark as Complete.

5. (Optional) Add multiple GCP instances.

a. In the Add Multiple Instances section of the Service Graph
Connector for GCP page, select Get Started.

b. Create data sources for the new GCP connection.

a. Ensure that you have edit permissions for the Datasource
[sys_data_source] table.

b. For the Update Data Source Access task, select Configure.

c. To edit the record, select the Global application scope from
the application picker.

d. In the Application Access related list of the Data Source form
that opens in a new tab, select the Can create, Can update,
and Can delete check boxes.

e. Select Update.

f. Return to the guided setup page.

g. From the application picker, select the Service Graph
Connector for GCP application scope.

h. Set the Update Data Source Access task to complete by
selecting Mark as Complete.

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

c. Create a scheduled import job for the new GCP connection.

a. Ensure that you have edit permissions for the Scheduled data
import [scheduled_import_set] table.

b. For the Update Scheduled Data Import Access task, select
Configure.

c. To edit the record, select the Global application scope from
the application picker.

d. In the Application Access related list of the Scheduled Data
Import form that opens in a new tab, select the Can create,
Can update, and Can delete check boxes.

e. Select Update.

f. Return to the guided setup page.

g. From the application picker, select the Service Graph
Connector for GCP application scope.

h. Set the Update Scheduled Data Import Access task to
complete by selecting Mark as Complete.

d. Clear the cache on the Data Source [sys_data_source] and
Scheduled Data Imports [scheduled_import_set] tables.

a. For the Clear Cache for Data Source and Scheduled Data
Imports tables task, select Configure.

b. In the Run script text box of the background script page,
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

c. Select Run Script to run the background script in the global
scope.

The script may take several minutes to execute.

d. After the script is executed, select Close.

e. Return to the guided setup page.

f. From the application picker, select the Service Graph
Connector for GCP application scope.

g. Set the Clear Cache for Data Source and Scheduled
Data Imports tables task to complete by selecting Mark as
Complete.

e. To create an X.509 certificate for the new GCP instance, repeat
the step 4.c, and then set the Create X.509 certificate task to
complete by selecting Mark as Complete.

f. Add a new connection.

a. For the Add New Connection task, select Configure.

b. In the Flow Designer, select Add Connection.

c. On the form that opens in the Create Connection dialog
box, fill in the fields.

Edit Connection form

Field
Description

Connection Name
Unique name for the new
connection.

Service Account Email

ServiceNow service account
associated with the GCP
application.

Keystore
Name of the keystore that
you created in step 5.e.

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

Key Password

Destination keystore
password associated with
the keystore.

Organization Id

ID of the organization
associated with the GCP
application.

Discovery Scope

Discovery scope of the GCP
application. The available
options are:

organizations

Select organizations when
the ServiceNow service
account has access to data
within the GCP organization.

projects

Select projects when the
ServiceNow service account
has access to data within
GCP projects only.

g. Test the new connection.

a. For the Test New Connection task, select Configure.

b. In Service Graph Connections page that opens in a new
browser tab, select the new connection that you want to test
from the list of available connections.

c. Test the connection by selecting the Test Connection related
link.

Testing the connection may take a few moments. The page
is refreshed to show the test results.

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

d. When the Status field is set to Success, close the browser tab
and return to the guided setup page.

If any of the tests have an error code or message or error
sign, the connection failed and further troubleshooting is
required.

e. Set the Test New Connection task to complete by selecting
Mark as Complete.

h. To configure the scheduled jobs to import data from the new
GCP instance, repeat step 4.f, and then set the Configure
the Scheduled Imports task to complete by selecting Mark as
Complete.

6. Synchronize new data sources to import data from GCP instances.

a. In the Advanced Setup section of the Service Graph Connector
for GCP page, select Get Started.

b. Synchronize new data sources for creating all the required
credentials to make the new data sources work correctly.

a. For the Sync New Data source task, select Configure.

b. Select Synchronize Datasources.

c. Return to the guided setup page by closing the Sync New
Data source window.

d. Set the Sync New Data source task to complete by selecting
Mark as Complete.

7. Set up OS Config Patch Jobs to enable deep discovery.

a. In the Setup OS Config Patch Jobs for extended discovery
section of the Service Graph Connector for GCP page, select
Get Started.

b. For the Download script files task, select Configure.

c. Save the Shell script and PowerShell script files.

The Shell script contains commands that run on Linux VMs. The
PowerShell script contains commands that run on Windows VMs.

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

d. In the Shell script and PowerShell script files, specify the name of
and the path in the Cloud Storage Bucket where the output of
the commands are to be uploaded.

e. Upload the deep discovery scripts to the Cloud Storage Bucket.

f. Navigate back to the guided setup page, and set the Download
script files task to complete by selecting Mark as Complete.

g. For the Configure GCP Cloud Storage Bucket for running Patch
Jobs task, select Configure.

h. To configure the GCP Cloud Storage Bucket to run patch
jobs, follow the deep discovery setup instructions in the Service
Graph Connector for GCP - Deep Discovery Setup Instructions
[KB2213095] article in the Now Support Knowledge Base.

i. Navigate back to the guided setup page, and set the Configure
GCP Cloud Storage Bucket for running Patch Jobs task to
complete by selecting Mark as Complete.

j. For the Configure connection properties task, select Configure.

k. On the SG-GCP Configuration Properties form, select the
connection for which you want to run deep discovery from the
Connection list.
In the Properties section of the SG-GCP Configuration Properties
form, the following fields are populated with the values for
the connection that you selected. If required, update the field
values.

Field
Description

Name of the Cloud Storage
Bucket where the .sh and .ps1
files are uploaded in Google
Cloud Platform

Name of the Cloud Storage
Bucket where the deep
discovery scripts are saved.

Path to the .sh file uploaded to
Cloud Storage Bucket

Path of the deep discovery
Shell script file.

Generation number of the .sh
file uploaded to Cloud Storage
Bucket

Number used to identify the
versioning of the cloud storage
object.

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

Field
Description

Path to the.ps1 file uploaded
to Cloud Storage Bucket

Path of the deep discovery
PowerShell script file.

Generation number of the .ps1
file uploaded to Cloud Storage
Bucket

Number used to identify the
versioning of the cloud storage
object.

Name of the Cloud Storage
Bucket provided in .sh and .ps1
files where the outputs of the
commands have to be stored

Name of the output Cloud
Storage Bucket.

Folder path provided in .sh
and .ps1 files where the
outputs are uploaded in the
Storage Bucket

Path of the output storage
folder in the Cloud Storage
Bucket.

l. Select Save.

m. Navigate back to the guided setup, and set the Configure
connection properties task to complete by selecting Mark as
Complete.

Related tasks

• Configure Service Graph Connector for GCP using SGC Central

Related concepts

• Service Graph Connector for GCP

• Deep discovery for Service Graph Connector for GCP

## CMDB classes targeted in Service Graph Connector for
## GCP

When you complete setting up the connection, you can configure the
integration to periodically pull data from a GCP project. The data is
saved in tables that extend from the Configuration item [cmdb_ci] table.

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
[cmdb_ci_availability_zone] table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Relationship created for Availability Zone

Parent class
Relationship type
Child class

Availability Zone
[cmdb_ci_availability_
zone]

Contains::Contained
by

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Block Endpoint [cmdb_ci_endpoint_block]

The following attributes in the Block Endpoint [cmdb_ci_endpoint_block]
table are populated by collected data:

Attribute label
Attribute name

Host
host

Name
name

Install Status
install_status

Operational status
operational_status

Cloud DataBase [cmdb_ci_cloud_database]

The following attributes in the Cloud DataBase
[cmdb_ci_cloud_database] table are populated by collected data:

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

Attribute label
Attribute name

Name
name

Object ID
object_id

TCP port(s)
tcp_port

CPU Count
cpu_count

Fully qualified domain name
fqdn

Install Status
install_status

IP Address
ip_address

Memory Size (GB)
memory_size

Node Count
node_count

Operational status
operational_status

State
state

Type
type

Version
version

Relationships created for Cloud DataBase

Parent class
Relationship type
Child class

Cloud DataBase
[cmdb_ci_cloud_data
base]

Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

Cloud DataBase
[cmdb_ci_cloud_data
base]

Reference
Key Value
[cmdb_key_value]

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

Cloud DataBase
[cmdb_ci_cloud_data
base]

Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Cloud Disk Type [cmdb_ci_disk_type]

The following attributes in the Cloud Disk Type [cmdb_ci_disk_type] table
are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Relationships created for Cloud Disk Type

Parent class
Relationship type
Child class

Cloud Disk Type
[cmdb_ci_disk_type]
Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

Cloud Disk Type
[cmdb_ci_disk_type]
Reference
Key Value
[cmdb_key_value]

Cloud Function [cmdb_ci_cloud_function]

The following attributes in the Cloud Function [cmdb_ci_cloud_function]
table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

CodeSha256
codesha256

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

Function Last Modified
function_last_modified

Install Status
install_status

Language
language

Operational status
operational_status

Version
version

Relationships created for Cloud Function

Parent class
Relationship type
Child class

Cloud Function
[cmdb_ci_cloud_funct
ion]

Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

Cloud Function
[cmdb_ci_cloud_funct
ion]

Reference
Key Value
[cmdb_key_value]

Cloud Function
[cmdb_ci_cloud_funct
ion]

Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Cloud Load Balancer [cmdb_ci_cloud_load_balancer]

The following attributes in the Cloud Load Balancer
[cmdb_ci_cloud_load_balancer] table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Install Status
install_status

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

Google Datacenter
[cmdb_ci_google_dat
acenter]

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Reference
Key Value
[cmdb_key_value]

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Cloud Load Balancer Health Service [cmdb_ci_lb_health_service]

The following attributes in the Cloud Load Balancer Health Service
[cmdb_ci_lb_health_service] table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Healthy threshold
healthy_threshold

Install Status
install_status

Interval in seconds
check_interval_sec

Monitor type protocol
monitor_type

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

Operational status
operational_status

Port
port

Request path
request_path

Timeout in seconds
timeout_sec

Unhealthy threshold
unhealthy_threshold

Relationships created for Cloud Load Balancer Health Service

Parent class
Relationship type
Child class

Cloud Load Balancer
Health Service
[cmdb_ci_lb_health_s
ervice]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Cloud Load Balancer
Health Service
[cmdb_ci_lb_health_s
ervice]

Contains::Contained
by

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Cloud Load Balancer
Health Service
[cmdb_ci_lb_health_s
ervice]

Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Cloud Mgmt Network Interface [cmdb_ci_nic]

The following attributes in the Cloud Mgmt Network Interface
[cmdb_ci_nic] table are populated by collected data:

Attribute label
Attribute name

IP Address
ip_address

Name
name

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

Attribute label
Attribute name

Object ID
object_id

Public IP
public_ip

Install Status
install_status

Operational status
operational_status

Private IP
private_ip

Configuration Item
cmdb_ci

Relationships created for Cloud Mgmt Network Interface

Parent class
Relationship type
Child class

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Owns::Owned by
IP Address
[cmdb_ci_ip_address]

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Reference

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Cloud Network [cmdb_ci_network]

The following attributes in the Cloud Network [cmdb_ci_network] table
are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Description
short_description

Install Status
install_status

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

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Cloud Network
[cmdb_ci_network]

Contains::Contained
by

Cloud Subnet
[cmdb_ci_cloud_subn
et]

Cloud Network
[cmdb_ci_network]

Contains::Contained
by

Network ACL
[cmdb_ci_network_acl
]

Cloud Network
[cmdb_ci_network]
Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Cloud Object Storage [cmdb_ci_cloud_object_storage]

The following attributes in the Cloud Object Storage
[cmdb_ci_cloud_object_storage] table are populated by collected
data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Cloud Provider
cloud_provider

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

Attribute label
Attribute name

Install Status
install_status

Operational status
operational_status

Service Name
service_name

Relationships created for Cloud Object Storage

Parent class
Relationship type
Child class

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
Key Value
[cmdb_key_value]

Cloud Object Storage
[cmdb_ci_cloud_obje
ct_storage]

Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Cloud Organizations [cmdb_ci_cloud_org]

The following attributes in the Cloud Organizations [cmdb_ci_cloud_org]
table are populated by collected data:

Attribute label
Attribute name

Object ID
object_id

Install Status
install_status

Name
name

Operational status
operational_status

Time
time

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

Relationships created for Cloud Organizations

Parent class
Relationship type
Child class

Cloud Organizations
[cmdb_ci_cloud_org]

Contains::Contained
by

Google
Organization Folder
[cmdb_ci_gcp_folder]

Cloud Organizations
[cmdb_ci_cloud_org]
Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Cloud Resource [cmdb_ci_cmp_resource]

The following attributes in the Cloud Resource [cmdb_ci_cmp_resource]
table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Description
short_description

Install status
install_status

Operational status
operational_status

Resource type
resource_type

Relationships created for Cloud Resource

Parent class
Relationship type
Child class

Cloud Resource
[cmdb_ci_cmp_resour
ce]

Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

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

Parent class
Relationship type
Child class

Cloud Resource
[cmdb_ci_cmp_resour
ce]

Reference
Key Value
[cmdb_key_value]

Cloud Service Account [cmdb_ci_cloud_service_account]

The following attributes in the Cloud Service Account
[cmdb_ci_cloud_service_account] table are populated by collected
data:

Attribute label
Attribute name

Account Id
account_id

Discovery credentials
discovery_credentials

Name
name

Object ID
object_id

Datacenter Type
datacenter_type

Install status
install_status

Operational status
operational_status

Organization Id
organization_id

Relationships created for Cloud Service Account

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

Cloud Service
Account
Reference
SG-GCP Extension
Attributes

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

Parent class
Relationship type
Child class

[cmdb_ci_cloud_servi
ce_account]

[sn_gcp_integ_extensi
on_attributes]

Cloud Subnet [cmdb_ci_cloud_subnet]

The following attributes in the Cloud Subnet [cmdb_ci_cloud_subnet]
table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Available IP Count
available_ip_count

Broadcast Address
broadcast_address

CIDR
cidr

Gateway
gateway

Install Status
install_status

Operational status
operational_status

State
state

Subnet Mask
subnet_mask

Relationships created for Cloud Subnet

Parent class
Relationship type
Child class

Cloud Subnet
[cmdb_ci_cloud_subn
et]

Contains::Contained
by

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

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

Cloud Subnet
[cmdb_ci_cloud_subn
et]

Reference
Key Value
[cmdb_key_value]

Cloud Subnet
[cmdb_ci_cloud_subn
et]

Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Compute Security Group [cmdb_ci_compute_security_group]

The following attributes in the Compute Security Group
[cmdb_ci_compute_security_group] table are populated by collected
data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Install Status
install_status

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

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Compute Security
Group
[cmdb_ci_compute_s
ecurity_group]

Reference
Key Value
[cmdb_key_value]

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

Parent class
Relationship type
Child class

Compute Security
Group
[cmdb_ci_compute_s
ecurity_group]

Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Docker Container [cmdb_ci_docker_container]

The following attributes in the Docker Container
[cmdb_ci_docker_container] table are populated by collected data:

Attribute label
Attribute name

Container id
container_id

Command
command

Container created
container_created_at

Image id
image_id

Install Status
install_status

Name
name

Operational status
operational_status

Status
status

Docker Image [cmdb_ci_docker_image]

The following attributes in the Docker Image [cmdb_ci_docker_image]
table are populated by collected data:

Attribute label
Attribute name

Image id
image_id

Name
name

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

Google Datacenter [cmdb_ci_google_datacenter]

The following attributes in the Google Datacenter
[cmdb_ci_google_datacenter] table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Region
region

Install Status
install_status

Relationships created for Google Datacenter

Parent class
Relationship type
Child class

Google Datacenter
[cmdb_ci_google_dat
acenter]

Contains::Contained
by

Availability Zone
[cmdb_ci_availability_
zone]

Google Datacenter
[cmdb_ci_google_dat
acenter]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Google Organization Folder [cmdb_ci_gcp_folder]

The following attributes in the Google Organization Folder
[cmdb_ci_gcp_folder] table are populated by collected data:

Attribute label
Attribute name

Object ID
object_id

Install Status
install_status

Name
name

Operational status
operational_status

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

Attribute label
Attribute name

Parent
parent_ci

Parent Id
parent_id

Parent Type
parent_type

Time
time

Relationship created for Google Organization Folder

Parent class
Relationship type
Child class

Google
Organization Folder
[cmdb_ci_gcp_folder]

Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Google
Organization Folder
[cmdb_ci_gcp_folder]

Reference
Cloud Organizations
[cmdb_ci_cloud_org]

Google
Organization Folder
[cmdb_ci_gcp_folder]

Reference

Google
Organization Folder
[cmdb_ci_gcp_folder]

Google Organization Project [cmdb_ci_gcp_project]

The following attributes in the Google Organization Project
[cmdb_ci_gcp_project] table are populated by collected data:

Attribute label
Attribute name

Operational status
operational_status

Discovery credentials
discovery_credentials

Name
name

Object ID
object_id

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

Install Status
install_status

Parent
parent_ci

Parent Id
parent_id

Parent Type
parent_type

Project Id
project_id

Status
status

Time
time

Relationships created for Google Organization Project

Parent class
Relationship type
Child class

Google Organization
Project
[cmdb_ci_gcp_project
]

Reference

Google
Organization Folder
[cmdb_ci_gcp_folder]

Google Organization
Project
[cmdb_ci_gcp_project
]

Reference
Cloud Organizations
[cmdb_ci_cloud_org]

Hardware Type [cmdb_ci_compute_template]

The following attributes in the Hardware Type
[cmdb_ci_compute_template] table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Class
className

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

Description
short_description

Local Storage GB
local_storage_gb

Memory MB
memory_mb

vCPUs
vcpus

Zone
zone

Note:   If the sn_itom_pattern.use a single hardware type for cloud
data centers system property is set to true, the className is set
to Cloud Hardware Type [cmdb_ci_cloud_hardware_type]. If the
property is set to false, the className is set to Hardware Type
[cmdb_ci_compute_template].

Relationship created for Hardware Type

Parent class
Relationship type
Child class

Hardware Type
[cmdb_ci_compute_t
emplate]

Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

Image [cmdb_ci_os_template]

The following attributes in the Image [cmdb_ci_os_template] table are
populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Class
className

Fully qualified domain name
fqdn

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

Attribute label
Attribute name

Install Status
install_status

Operational status
operational_status

Note:   If the sn_cmdb_ci_class.use_single_cloud_os_image system
property is set to true, the className is set to Cloud Image
[cmdb_ci_cloud_os_image]. If the property is set to false, the
className is set to Image [cmdb_ci_os_template].

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

Reference
Key Value
[cmdb_key_value]

Image
[cmdb_ci_os_templat
e]

Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

IP Address [cmdb_ci_ip_address]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data:

Attribute label
Attribute name

IP Address
ip_address

Install Status
install_status

IP version
ip_version

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

Attribute label
Attribute name

Name
name

Operational status
operational_status

Relationship created for IP Address

Parent class
Relationship type
Child class

IP Address
[cmdb_ci_ip_address]
Reference
Key Value
[cmdb_key_value]

Key Value [cmdb_key_value]

The following attributes in the Key Value [cmdb_key_value] table are
populated by collected data:

Attribute label
Attribute name

Key
key

Value
value

The tags and labels associated with the following CI classes are
populated in the Key Value [cmdb_key_value] table.

CMDB CI classes
Label populated
Tag populated

Cloud DataBase
[cmdb_ci_cloud_data
base]

Yes
Yes

Cloud Function
[cmdb_ci_cloud_funct
ion]

Yes
Yes

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

No
Yes

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

CMDB CI classes
Label populated
Tag populated

Cloud Load Balancer
Health Service
[cmdb_ci_lb_health_s
ervice]

No
Yes

Cloud Network
[cmdb_ci_network]
No
Yes

Cloud Object Storage
[cmdb_ci_cloud_obje
ct_storage]

Yes
Yes

Cloud Organizations
[cmdb_ci_cloud_org]
No
Yes

Cloud Resource
[cmdb_ci_cmp_resour
ce]

Yes
Yes

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Yes
Yes

Cloud Subnet
[cmdb_ci_cloud_subn
et]

No
Yes

Compute Security
Group
[cmdb_ci_compute_s
ecurity_group]

No
Yes

Google
Organization Folder
[cmdb_ci_gcp_folder]

No
Yes

Google Organization
Project
Yes
Yes

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

CMDB CI classes
Label populated
Tag populated

[cmdb_ci_gcp_project
]

Image
[cmdb_ci_os_templat
e]

No
Yes

IP Address
[cmdb_ci_ip_address]
Yes
Yes

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Yes
Yes

Kubernetes Cluster
Role
[cmdb_ci_kubernetes_
cluster_role]

Yes
Yes

Kubernetes Cluster
Role Binding
[cmdb_ci_kubernetes_
cluster_role_binding]

Yes
Yes

Kubernetes
Deployment
[cmdb_ci_kubernetes_
deployment]

Yes
Yes

Kubernetes
Namespace
[cmdb_ci_kubernetes_
namespace]

Yes
Yes

Kubernetes Node
[cmdb_ci_kubernetes_
node]

Yes
Yes

Kubernetes Node Pool
[cmdb_ci_kubernetes_
node_pool]

Yes
Yes

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

CMDB CI classes
Label populated
Tag populated

Kubernetes Pod
[cmdb_ci_kubernetes_
pod]

Yes
Yes

Kubernetes ReplicaSet
[cmdb_ci_kubernetes_
replicaset]

Yes
Yes

Kubernetes Service
[cmdb_ci_kubernetes_
service]

Yes
Yes

Load Balancer Pool
[cmdb_ci_lb_pool]
No
Yes

Load Balancer Service
[cmdb_ci_lb_service]
Yes
Yes

Storage Volume
[cmdb_ci_storage_vol
ume]

Yes
Yes

Storage Volume
Snapshot
[cmdb_ci_storage_vol
_snapshot]

Yes
Yes

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Yes
Yes

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

Note:   Labels are not supported by Google Cloud for the following
CI classes:

• Cloud Load Balancer [cmdb_ci_cloud_load_balancer]

• Cloud Load Balancer Health Service [cmdb_ci_lb_health_service]

• Cloud Network [cmdb_ci_network]

• Cloud Organizations [cmdb_ci_cloud_org]

• Cloud Subnet [cmdb_ci_cloud_subnet]

• Compute Security Group [cmdb_ci_compute_security_group]

• Google Organization Folder [cmdb_ci_gcp_folder]

• Image [cmdb_ci_os_template]

• Load Balancer Pool [cmdb_ci_lb_pool]

Kubernetes Cluster [cmdb_ci_kubernetes_cluster]

The following attributes in the Kubernetes Cluster
[cmdb_ci_kubernetes_cluster] table are populated by collected data:

Attribute label
Attribute name

Cluster Resource ID
cluster_resource_id

IP Address
ip_address

Kubernetes UID
k8s_uid

Name
name

Port
port

Cluster Version
cluster_version

Description
short_description

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

Install Status
install_status

Operational status
operational_status

SelfLink
self_link

Subnet Mask
subnet_mask

Relationships created for Kubernetes Cluster

Parent class
Relationship type
Child class

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

Kubernetes Cluster
Role
[cmdb_ci_kubernetes_
cluster_role]

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Contains::Contained
by

Kubernetes Cluster
Role Binding
[cmdb_ci_kubernetes_
cluster_role_binding]

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Contains::Contained
by

Kubernetes
Namespace
[cmdb_ci_kubernetes_
namespace]

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

Reference
Key Value
[cmdb_key_value]

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Kubernetes Cluster Role [cmdb_ci_kubernetes_cluster_role]

The following attributes in the Kubernetes Cluster Role
[cmdb_ci_kubernetes_cluster_role] table are populated by collected
data:

Attribute label
Attribute name

Kubernetes UID
k8s_uid

Comments
comments

Description
short_description

Install Status
install_status

Operational status
operational_status

Kubernetes Cluster
cluster

Name
name

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

Relationships created for Kubernetes Cluster Role

Parent class
Relationship type
Child class

Kubernetes Cluster
Role
[cmdb_ci_kubernetes_
cluster_role]

Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

Kubernetes Cluster
Role
[cmdb_ci_kubernetes_
cluster_role]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Kubernetes Cluster
Role
[cmdb_ci_kubernetes_
cluster_role]

Reference

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Kubernetes Cluster
Role
[cmdb_ci_kubernetes_
cluster_role]

Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Kubernetes Cluster
Role
[cmdb_ci_kubernetes_
cluster_role]

Reference
Key Value
[cmdb_key_value]

Kubernetes Cluster Role Binding
[cmdb_ci_kubernetes_cluster_role_binding]

The following attributes in the Kubernetes Cluster Role Binding
[cmdb_ci_kubernetes_cluster_role_binding] table are populated by
collected data:

Attribute label
Attribute name

Kubernetes UID
k8s_uid

Comments
comments

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

Attribute label
Attribute name

Description
short_description

Install Status
install_status

Name
name

Kubernetes Cluster
cluster

Operational status
operational_status

Relationships created for Kubernetes Cluster Role Binding

Parent class
Relationship type
Child class

Kubernetes Cluster
Role Binding
[cmdb_ci_kubernetes_
cluster_role_binding]

Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

Kubernetes Cluster
Role Binding
[cmdb_ci_kubernetes_
cluster_role_binding]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Kubernetes Cluster
Role Binding
[cmdb_ci_kubernetes_
cluster_role_binding]

Reference

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Kubernetes Cluster
Role Binding
[cmdb_ci_kubernetes_
cluster_role_binding]

Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Kubernetes Cluster
Role Binding
[cmdb_ci_kubernetes_
cluster_role_binding]

Reference
Key Value
[cmdb_key_value]

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

Kubernetes Deployment [cmdb_ci_kubernetes_deployment]

The following attributes in the Kubernetes Deployment
[cmdb_ci_kubernetes_deployment] table are populated by collected
data:

Attribute label
Attribute name

Kubernetes UID
k8s_uid

Name
name

Namespace
namespace

Available Replicas
available_replicas

Description
short_description

Desired Replicas
desired_replicas

Install Status
install_status

Kubernetes Cluster
cluster

Operational status
operational_status

Total Replicas
total_replicas

Unavailable Replicas
unavailable_replicas

Updated Replicas
updated_replicas

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
Hosted on::Hosts
Cloud Service
Account

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

Parent class
Relationship type
Child class

[cmdb_ci_kubernetes_
deployment]

[cmdb_ci_cloud_servi
ce_account]

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
[cmdb_ci_kubernetes_
deployment]

Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Kubernetes Namespace [cmdb_ci_kubernetes_namespace]

The following attributes in the Kubernetes Namespace
[cmdb_ci_kubernetes_namespace] table are populated by collected
data:

Attribute label
Attribute name

Kubernetes UID
k8s_uid

Name
name

Description
short_description

Install Status
install_status

Namespace
namespace

Operational status
operational_status

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

Relationships created for Kubernetes Namespace

Parent class
Relationship type
Child class

Kubernetes
Namespace
[cmdb_ci_kubernetes_
namespace]

Contains::Contained
by

Kubernetes Service
[cmdb_ci_kubernetes_
service]

Kubernetes
Namespace
[cmdb_ci_kubernetes_
namespace]

Contains::Contained
by

Kubernetes
Deployment
[cmdb_ci_kubernetes_
deployment]

Kubernetes
Namespace
[cmdb_ci_kubernetes_
namespace]

Contains::Contained
by

Kubernetes ReplicaSet
[cmdb_ci_kubernetes_
replicaset]

Kubernetes
Namespace
[cmdb_ci_kubernetes_
namespace]

Contains::Contained
by

Kubernetes Pod
[cmdb_ci_kubernetes_
pod]

Kubernetes
Namespace
[cmdb_ci_kubernetes_
namespace]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

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

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Kubernetes Node [cmdb_ci_kubernetes_node]

The following attributes in the Kubernetes Node
[cmdb_ci_kubernetes_node] table are populated by collected data:

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

Attribute label
Attribute name

IP Address
ip_address

Kubernetes UID
k8s_uid

Name
name

Description
short_description

Install Status
install_status

Namespace
namespace

Operational status
operational_status

Kubernetes Cluster
cluster

Relationships created for Kubernetes Node

Parent class
Relationship type
Child class

Kubernetes Node
[cmdb_ci_kubernetes_
node]

Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

Kubernetes Node
[cmdb_ci_kubernetes_
node]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

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

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

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

Parent class
Relationship type
Child class

Kubernetes Node
[cmdb_ci_kubernetes_
node]

Reference
Key Value
[cmdb_key_value]

Kubernetes Node Pool [cmdb_ci_kubernetes_node_pool]

The following attributes in the Kubernetes Node Pool
[cmdb_ci_kubernetes_node_pool] table are populated by collected
data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Disk Type
disk_type

Image Type
image_type

Install Status
install_status

Machine Type
machine_type

Operational status
operational_status

Pod CIDR Range
podIpv4CidrSize

Resource version
resource_version

Kubernetes Cluster
cluster

Relationships created for Kubernetes Node Pool

Parent class
Relationship type
Child class

Kubernetes Node Pool
[cmdb_ci_kubernetes_
node_pool]

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

68

Zurich ServiceNow AI Platform Capabilities

---
*Page 69*

Parent class
Relationship type
Child class

Kubernetes Node Pool
[cmdb_ci_kubernetes_
node_pool]

Uses::Used by

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Kubernetes Node Pool
[cmdb_ci_kubernetes_
node_pool]

Reference

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Kubernetes Node Pool
[cmdb_ci_kubernetes_
node_pool]

Reference
Key Value
[cmdb_key_value]

Kubernetes Node Pool
[cmdb_ci_kubernetes_
node_pool]

Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Kubernetes Pod [cmdb_ci_kubernetes_pod]

The following attributes in the Kubernetes Pod
[cmdb_ci_kubernetes_pod] table are populated by collected data:

Attribute label
Attribute name

Kubernetes UID
k8s_uid

Name
name

Namespace
namespace

Description
short_description

Host IP
host_ip

Install Status
install_status

IP Address
ip_address

Operational status
operational_status

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

Attribute label
Attribute name

Resource version
resource_version

Relationships created for Kubernetes Pod

Parent class
Relationship type
Child class

Kubernetes Pod
[cmdb_ci_kubernetes_
pod]

Contains::Contained
by

Docker Image
[cmdb_ci_docker_ima
ge]

Kubernetes Pod
[cmdb_ci_kubernetes_
pod]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Kubernetes Pod
[cmdb_ci_kubernetes_
pod]

Contains::Contained
by

Kubernetes Volume
[cmdb_ci_kubernetes_
volume]

Kubernetes Pod
[cmdb_ci_kubernetes_
pod]

Contains::Contained
by

Docker Container
[cmdb_ci_docker_con
tainer]

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

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

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

70

Zurich ServiceNow AI Platform Capabilities

---
*Page 71*

Attribute label
Attribute name

Kubernetes UID
k8s_uid

Name
name

Namespace
namespace

Description
short_description

Desired Replicas
desired_replicas

Install Status
install_status

Operational status
operational_status

SelfLink
self_link

Total Replicas
total_replicas

Kubernetes Cluster
cluster

Relationships created for Kubernetes ReplicaSet

Parent class
Relationship type
Child class

Kubernetes ReplicaSet
[cmdb_ci_kubernetes_
replicaset]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

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

71

Zurich ServiceNow AI Platform Capabilities

---
*Page 72*

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

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Kubernetes Service [cmdb_ci_kubernetes_service]

The following attributes in the Kubernetes Service
[cmdb_ci_kubernetes_service] table are populated by collected data:

Attribute label
Attribute name

Kubernetes UID
k8s_uid

Name
name

Namespace
namespace

Description
short_description

Install Status
install_status

IP Address
ip_address

Operational status
operational_status

Relationships created for Kubernetes Service

Parent class
Relationship type
Child class

Kubernetes Service
[cmdb_ci_kubernetes_
service]

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

72

Zurich ServiceNow AI Platform Capabilities

---
*Page 73*

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

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Kubernetes Volume [cmdb_ci_kubernetes_volume]

The following attributes in the Kubernetes Volume
[cmdb_ci_kubernetes_volume] table are populated by collected data:

Attribute label
Attribute name

Kubernetes UID
k8s_uid

Mount Path
mount_path

Name
name

Volume ID
volume_id

Namespace
namespace

Load Balancer Pool [cmdb_ci_lb_pool]

The following attributes in the Load Balancer Pool [cmdb_ci_lb_pool]
table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Install Status
install_status

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

Attribute label
Attribute name

Operational status
operational_status

Relationships created for Load Balancer Pool

Parent class
Relationship type
Child class

Load Balancer Pool
[cmdb_ci_lb_pool]
Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

Load Balancer Pool
[cmdb_ci_lb_pool]
Owns::Owned by

Load Balancer Pool
Member
[cmdb_ci_lb_pool_me
mber]

Load Balancer Pool
[cmdb_ci_lb_pool]
Reference
Key Value
[cmdb_key_value]

Load Balancer Pool
[cmdb_ci_lb_pool]
Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Load Balancer Pool Member [cmdb_ci_lb_pool_member]

The following attributes in the Load Balancer Pool Member
[cmdb_ci_lb_pool_member] table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Install status
install_status

Operational status
operational_status

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

Relationship created for Load Balancer Pool Member

Parent class
Relationship type
Child class

Load Balancer Pool
Member
[cmdb_ci_lb_pool_me
mber]

Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Load Balancer Service [cmdb_ci_lb_service]

The following attributes in the Load Balancer Service
[cmdb_ci_lb_service] table are populated by collected data:

Attribute label
Attribute name

IP Address
ip_address

Name
name

Object ID
object_id

Port
port

Install Status
install_status

Listener Protocol
listener_protocol

Operational status
operational_status

Service Type
service_type

Relationships created for Load Balancer Service

Parent class
Relationship type
Child class

Load Balancer Service
[cmdb_ci_lb_service]

Contains::Contained
by

Load Balancer Pool
[cmdb_ci_lb_pool]

Load Balancer Service
[cmdb_ci_lb_service]
Hosted on::Hosts

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

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

Parent class
Relationship type
Child class

Load Balancer Service
[cmdb_ci_lb_service]
Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Load Balancer Service
[cmdb_ci_lb_service]
Reference
Key Value
[cmdb_key_value]

Network ACL [cmdb_ci_network_acl]

The following attributes in the Network ACL [cmdb_ci_network_acl] table
are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Description
short_description

Install Status
install_status

Operational status
operational_status

Relationships created for Network ACL

Parent class
Relationship type
Child class

Network ACL
[cmdb_ci_network_acl
]

Contains::Contained
by

Network ACL Rule
[cmdb_ci_network_acl
_rule]

Network ACL
[cmdb_ci_network_acl
]

Reference
Key Value
[cmdb_key_value]

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

Network ACL Rule [cmdb_ci_network_acl_rule]

The following attributes in the Network ACL Rule
[cmdb_ci_network_acl_rule] table are populated by collected data:

Attribute label
Attribute name

Name
name

Allow Deny
allow_deny

Allowed\Denied Traffic
allowed_denied_traffic

Destination Ranges
destination_ranges

Install Status
install_status

Operational status
operational_status

Outbound
is_outbound

Source Ranges
source_ranges

Target Tags
target_tags

Relationship created for Network ACL Rule

Parent class
Relationship type
Child class

Network ACL Rule
[cmdb_ci_network_acl
_rule]

Reference
Key Value
[cmdb_key_value]

Server [cmdb_ci_server]

The following attributes in the Server [cmdb_ci_server] table are
populated by collected data:

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

77

Zurich ServiceNow AI Platform Capabilities

---
*Page 78*

Attribute label
Attribute name

Object ID
object_id

Class
sys_class_name

CPU count
cpu_count

Disk space (GB)
disk_space

Host name
host_name

Install Status
install_status

IP Address
ip_address

Is Virtual
virtual

Operating System
os

Operational status
operational_status

OS Version
os_version

RAM (MB)
ram

Note:   If the GCP Systems Manager (SSM) service isn't
enabled, the connector populates the server records in the
Server [cmdb_ci_server] class. If the GCP SSM service is enabled,
then based on the platform type obtained through the
SSM service, the server records are populated in either the
Linux Server [cmdb_ci_linux_server] class or the Windows Server
[cmdb_ci_win_server] class. The Server [cmdb_ci_server] class is the
parent class of the Linux Server [cmdb_ci_linux_server] and the
Windows Server [cmdb_ci_win_server] classes.

Relationships created for Server

Parent class
Relationship type
Child class

Server
[cmdb_ci_server]

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

78

Zurich ServiceNow AI Platform Capabilities

---
*Page 79*

Parent class
Relationship type
Child class

[cmdb_ci_vm_instanc
e]

Server
[cmdb_ci_server]
Owns::Owned by
IP Address
[cmdb_ci_ip_address]

Server
[cmdb_ci_server]
Reference
Software Installation
[cmdb_sam_sw_install]

Server
[cmdb_ci_server]
Reference
Key Value
[cmdb_key_value]

Server
[cmdb_ci_server]
Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

SG-GCP Extension Attributes [sn_gcp_integ_extension_attributes]

The following attributes in the SG-GCP Extension Attributes
[sn_gcp_integ_extension_attributes] table are populated by collected
data:

Attribute label
Attribute name

Resource ID
resource_id

Folder ID
folder_id

Organization ID
organization_id

Parent
parent

Project
project

Project ID
project_id

Self Link
self_link

Service Graph Connection Record
sg_connection_record

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

Attribute label
Attribute name

Region
region

Resource Type
resource_type

Organization-Credential Record
org_credential_record

Software [cmdb_ci_spkg]

The following attributes in the Software [cmdb_ci_spkg] table are
populated by collected data when the Software Asset Management
(SAM) application isn't installed:

Attribute label
Attribute name

Key
key

Discovery source
discovery_source

Name
name

Version
version

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

80

Zurich ServiceNow AI Platform Capabilities

---
*Page 81*

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

Installed on
installed_on

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
[cmdb_software_instance] table are populated by collected data when
the SAM application isn't installed:

Attribute label
Attribute name

Name
name

Installed on
installed_on

Install date
install_date

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

Storage Mapping [cmdb_ci_storage_mapping]

The following attributes in the Storage Mapping
[cmdb_ci_storage_mapping] table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Install Status
install_status

Mapping Type
mapping_type

Operational status
operational_status

Storage Volume [cmdb_ci_storage_volume]

The following attributes in the Storage Volume
[cmdb_ci_storage_volume] table are populated by collected data:

Attribute label
Attribute name

Object ID
object_id

Volume ID
volume_id

Install Status
install_status

Name
name

Operational status
operational_status

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

Attribute label
Attribute name

Size bytes
size_bytes

State
state

Storage type
storage_type

Relationships created for Storage Volume

Parent class
Relationship type
Child class

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
Key Value
[cmdb_key_value]

Storage Volume
[cmdb_ci_storage_vol
ume]

Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Storage Volume Snapshot [cmdb_ci_storage_vol_snapshot]

The following attributes in the Storage Volume Snapshot
[cmdb_ci_storage_vol_snapshot] table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Capacity
capacity

Install Status
install_status

Operational status
operational_status

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

Attribute label
Attribute name

Parent ID
parent_id

Size (GB)
size

State
state

Volume Name
volume_name

Relationships created for Storage Volume Snapshot

Parent class
Relationship type
Child class

Storage Volume
Snapshot
[cmdb_ci_storage_vol
_snapshot]

Hosted on::Hosts

Google Datacenter
[cmdb_ci_google_dat
acenter]

Storage Volume
Snapshot
[cmdb_ci_storage_vol
_snapshot]

Provisioned
From::Provisioned

Storage Volume
[cmdb_ci_storage_vol
ume]

Storage Volume
Snapshot
[cmdb_ci_storage_vol
_snapshot]

Reference
Key Value
[cmdb_key_value]

Storage Volume
Snapshot
[cmdb_ci_storage_vol
_snapshot]

Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

Virtual Machine Instance [cmdb_ci_vm_instance]

The following attributes in the Virtual Machine Instance
[cmdb_ci_vm_instance] table are populated by collected data:

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

84

Zurich ServiceNow AI Platform Capabilities

---
*Page 85*

Attribute label
Attribute name

Object ID
object_id

CPUs
cpus

Disks
disks

Disks size (GB)
disks_size

Install Status
install_status

IP Address
ip_address

Memory (MB)
memory

Network adapters
nics

Operational status
operational_status

State
state

Termination Protection
termination_protection

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

Cloud Subnet
[cmdb_ci_cloud_subn
et]

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

Parent class
Relationship type
Child class

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

Contains::Contained
by

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Contains::Contained
by

Storage Mapping
[cmdb_ci_storage_ma
pping]

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

Use End Point To::Use
End Point From

Block Endpoint
[cmdb_ci_endpoint_bl
ock]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Hosted on::Hosts

Google Organization
Project
[cmdb_ci_gcp_project
]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Reference
Key Value
[cmdb_key_value]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Reference

SG-GCP Extension
Attributes
[sn_gcp_integ_extensi
on_attributes]

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

VNIC Endpoint [cmdb_ci_endpoint_vnic]

The following attributes in the VNIC Endpoint [cmdb_ci_endpoint_vnic]
table are populated by collected data:

Attribute label
Attribute name

Host
host

Name
name

Object ID
object_id

Install Status
install_status

IP Address
ip_address

Operational status
operational_status

Relationship created for VNIC Endpoint

Parent class
Relationship type
Child class

VNIC Endpoint
[cmdb_ci_endpoint_v
nic]

Implement End Point
To::Implement End
Point From

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

## GCP discovery solutions comparison

ITOM Visibility applications discover a variety of Google Cloud Platform
(GCP) resources and populate the relevant configuration item (CI)
classes in the Configuration Management Database (CMDB) with their
attributes.

ITOM Visibility solutions

ITOM Visibility can offer you comprehensive visibility into your
organization's cloud infrastructure. Each application offers unique
strengths and capabilities, and by comparing them you can gain holistic
insights on their capabilities and benefits.

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

ITOM Visibility solutions for discovering GCP

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
up Google Cloud
Platform service
accounts

Service Graph
Connector for GCP

Service Graph
Connector for GCP

Configure Service
Graph Connector for
GCP using the guided
setup

Note:

The CI class, in most cases, is applicable to both solutions. If it's not
applicable to one of the solutions, the solution is marked "N/A".

If an entry is marked with one asterisk, the resource type is supported
by Patterns only by utilizing the Google Asset inventory pattern's
inclusion list. For more information, see .

If an entry is marked with two asterisks, the resource type is
supported by Service Graph Connecters only by utilizing the
[sn_cmdb_int_util_service_graph_resource_inclusion_whitelist] table.

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

Discovery and Service Mapping Patterns vs Service Graph
Connector for GCP

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

admissionregistr
ation.k8s.io/
mutatingwebho
okconfiguration

Yes*
Yes**
cmdb_ci_cmp_r
esource

admissionregistr
ation.k8s.io/
validatingwebh
ookconfiguratio
n

Yes*
Yes**
cmdb_ci_cmp_r
esource

alloydb.googlea
pis.com/Cluster
Yes
No
cmdb_ci_cloud_
db_cluster

apigateway.go
ogleapis.com/a
pi

Yes*
Yes**
cmdb_ci_cmp_r
esource

apigateway.go
ogleapis.com/
apiconfig

Yes*
Yes**
cmdb_ci_cmp_r
esource

apigee.googlea
pis.com/
instance

Yes*
Yes**
cmdb_ci_cmp_r
esource

apigee.googlea
pis.com/
organization

Yes*
Yes**
cmdb_ci_cmp_r
esource

apikeys.googlea
pis.com/key
Yes*
Yes**
cmdb_ci_cmp_r
esource

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

appengine.goo
gleapis.com/
application

Yes*
Yes**
cmdb_ci_cmp_r
esource

apps.k8s.io/
daemonset
Yes*
Yes**
cmdb_ci_cmp_r
esource

apps.k8s.io/
Deployment
Yes*
Yes

cmdb_ci_kubern
etes_deploymen
t

apps.k8s.io/
ReplicaSet
Yes*
Yes
cmdb_ci_kubern
etes_replicaset

apps.k8s.io/
statefulset
Yes*
Yes**
cmdb_ci_cmp_r
esource

artifactregistry.g
oogleapis.com/
dockerimage

Yes*
Yes**
cmdb_ci_cmp_r
esource

artifactregistry.g
oogleapis.com/
repository

Yes*
Yes**
cmdb_ci_cmp_r
esource

bigquery.google
apis.com/
bigquery-public-
data/datasets

Yes
No

cmdb_ci_cloud_
public_databas
e

bigquery.google
apis.com/
bigquery-public-
data/datasets/
tables

Yes
No
cmdb_ci_datab
ase

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

bigquery.google
apis.com/
Dataset

Yes
N/A
cmdb_ci_cloud_
database

bigquery.google
apis.com/
Dataset

N/A
Yes**
cmdb_ci_cmp_r
esource

bigquery.google
apis.com/Table
Yes
No
cmdb_ci_datab
ase

bigtableadmin.
googleapis.com
/Instance

Yes
Yes
cmdb_ci_cloud_
database

bigtableadmin.
googleapis.com
/Table

Yes
No
cmdb_ci_datab
ase

cloudasset.goo
gleapis.com/
feed

Yes*
Yes**
cmdb_ci_cmp_r
esource

cloudbilling.goo
gleapis.com/
billingaccount

Yes*
Yes**
cmdb_ci_cmp_r
esource

cloudbilling.goo
gleapis.com/
projectbillinginfo

Yes*
Yes**
cmdb_ci_cmp_r
esource

cloudfunctions.g
oogleapis.com/
CloudFunction

Yes*
Yes
cmdb_ci_cloud_
function

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

cloudresourcem
anager.googlea
pis.com/Folder

Yes
Yes
cmdb_ci_gcp_f
older

cloudresourcem
anager.googlea
pis.com/
Organization

Yes
Yes
cmdb_ci_cloud_
org

cloudresourcem
anager.googlea
pis.com/Project

Yes
Yes
cmdb_ci_gcp_p
roject

cloudresourcem
anager.googlea
pis.com/tagkey

Yes*
Yes
cmdb_ci_cmp_r
esource

cloudresourcem
anager.googlea
pis.com/
tagvalue

Yes*
Yes**
cmdb_ci_cmp_r
esource

compute.googl
eapis.com/
Address

Yes
No

cmdb_ci_cloud_
public_ipaddres
s

compute.googl
eapis.com/
autoscaler

Yes*
Yes**
cmdb_ci_cmp_r
esource

compute.googl
eapis.com/
BackendService

N/A
Yes
cmdb_ci_cloud_
load_balancer

compute.googl
eapis.com/
BackendService

Yes
N/A
cmdb_ci_lb_serv
ice

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

compute.googl
eapis.com/Disk
Yes
Yes
cmdb_ci_storag
e_volume

compute.googl
eapis.com/
DiskTypes

Yes
No
cmdb_ci_disk_ty
pe

compute.googl
eapis.com/
Firewall

N/A
Yes

cmdb_ci_comp
ute_security_gro
up

compute.googl
eapis.com/
Firewall

Yes
Yes
cmdb_ci_netwo
rk_acl_rule

compute.googl
eapis.com/
ForwardingRule

Yes
Yes
cmdb_ci_lb_serv
ice

compute.googl
eapis.com/
HttpHealthChec
k

Yes
Yes
cmdb_ci_lb_hea
lth_service

compute.googl
eapis.com/
Image

Yes
No
cmdb_ci_os_te
mplate

compute.googl
eapis.com/
Instance

Yes
N,A
cmdb_ci_lb_po
ol_member

compute.googl
eapis.com/
Instance

N/A
Yes
cmdb_ci_server

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

compute.googl
eapis.com/
Instance

Yes
Yes
cmdb_ci_vm_ins
tance

compute.googl
eapis.com/
Instance/
networkInterfac
es

Yes
No
cmdb_ci_endpo
int_vnic

compute.googl
eapis.com/
Instance/
networkInterfac
es

Yes
Yes
cmdb_ci_nic

compute.googl
eapis.com/
InstanceGroup

Yes
N/A
cmdb_ci_lb_po
ol

compute.googl
eapis.com/
InstanceGroup

N/A
Yes**
cmdb_ci_cmp_r
esource

compute.googl
eapis.com/
Instancegroupm
anager

Yes*
Yes**
cmdb_ci_cmp_r
esource

compute.googl
eapis.com/
Instancesettings

Yes*
Yes**
cmdb_ci_cmp_r
esource

compute.googl
eapis.com/
InstanceTemplat
e

Yes
No
cmdb_ci_instan
ce_template

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

compute.googl
eapis.com/
Instancetemplat
e

No
Yes**
cmdb_ci_cmp_r
esource

compute.googl
eapis.com/
MachineImage

No
Yes
cmdb_ci_os_te
mplate

compute.googl
eapis.com/
MachineTypes

Yes
No
cmdb_ci_cloud_
hardware_type

compute.googl
eapis.com/
MachineTypes

Yes
No
cmdb_ci_comp
ute_template

compute.googl
eapis.com/
Network

Yes
Yes
cmdb_ci_netwo
rk

compute.googl
eapis.com/
Networkendpoin
tgroup

Yes*
Yes**
cmdb_ci_cmp_r
esource

compute.googl
eapis.com/
Regions

Yes
No
cmdb_ci_googl
e_datacenter

compute.googl
eapis.com/
resourcepolicy

Yes*
Yes**
cmdb_ci_cmp_r
esource

compute.googl
eapis.com/
router

Yes*
Yes**
cmdb_ci_cmp_r
esource

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

compute.googl
eapis.com/
Snapshot

Yes
Yes
cmdb_ci_storag
e_vol_snapshot

compute.googl
eapis.com/ssh
Yes
No
cmdb_ci_cloud_
key_pair

compute.googl
eapis.com/
sslcertificate

Yes*
Yes**
cmdb_ci_cmp_r
esource

compute.googl
eapis.com/
Subnetwork

Yes
Yes
cmdb_ci_cloud_
subnet

compute.googl
eapis.com/
targetHttpProxy

Yes
N/A
cmdb_ci_lb_serv
ice

compute.googl
eapis.com/
targetHttpProxy

Yes
Yes**
cmdb_ci_cmp_r
esource

compute.googl
eapis.com/
TargetPool

Yes
N/A
cmdb_ci_cloud_
load_balancer

compute.googl
eapis.com/
TargetPool

N/A
Yes
cmdb_ci_lb_po
ol

compute.googl
eapis.com/
targetSslProxy

Yes
No
cmdb_ci_lb_serv
ice

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

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

compute.googl
eapis.com/
targetTcpProxy

Yes
No
cmdb_ci_lb_serv
ice

compute.googl
eapis.com/
UrlMap

Yes
N/A
cmdb_ci_cloud_
load_balancer

compute.googl
eapis.com/
UrlMap

N/A
Yes**
cmdb_ci_cmp_r
esource

compute.googl
eapis.com/
zones

Yes
No
cmdb_ci_availa
bility_zone

container.googl
eapis.com/
Cluster

Yes
Yes
cmdb_ci_kubern
etes_cluster

container.googl
eapis.com/
NodePool

No
Yes
cmdb_ci_kubern
etes_node_pool

containerregistry
.googleapis.co
m/image

Yes*
Yes**
cmdb_ci_cmp_r
esource

dataplex.googl
eapis.com/
entrygroup

Yes*
Yes**
cmdb_ci_cmp_r
esource

firebase.google
apis.com/
firebaseproject

Yes*
Yes**
cmdb_ci_cmp_r
esource

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

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

firebasedatabas
e.googleapis.co
m/instances

Yes
No
cmdb_ci_cloud_
database

firebaserules.go
ogleapis.com/
release

Yes*
Yes**
cmdb_ci_cmp_r
esource

firebaserules.go
ogleapis.com/
ruleset

Yes*
Yes**
cmdb_ci_cmp_r
esource

firestore.google
apis.com/
Database

Yes
Yes
cmdb_ci_cloud_
database

iam.googleapis.
com/role
Yes*
Yes**
cmdb_ci_cmp_r
esource

iam.googleapis.
com/
serviceaccount

Yes*
Yes**
cmdb_ci_cmp_r
esource

iam.googleapis.
com/
serviceaccountk
ey

Yes*
Yes**
cmdb_ci_cmp_r
esource

integrations.goo
gleapis.com/
integration

Yes*
Yes**
cmdb_ci_cmp_r
esource

integrations.goo
gleapis.com/
integrationversio
n

Yes*
Yes**
cmdb_ci_cmp_r
esource

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

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

K8s.io/endpoints
Yes*
Yes**
cmdb_ci_cmp_r
esource

K8s.io/
Namespace
Yes*
Yes

cmdb_ci_kubern
etes_namespac
e

k8s.io/Node
Yes*
Yes
cmdb_ci_kubern
etes_node

K8s.io/
persistentvolume Yes*
Yes**
cmdb_ci_cmp_r
esource

k8s.io/
persistentvolume
claim

Yes*
Yes**
cmdb_ci_cmp_r
esource

K8s.io/Pod
Yes*
Yes
cmdb_ci_docke
r_container

K8s.io/Pod
N/A
Yes
cmdb_ci_docke
r_image

K8s.io/Pod
N/A
Yes
cmdb_ci_kubern
etes_pod

K8s.io/Pod
N/A
Yes
cmdb_ci_kubern
etes_volume

K8s.io/
resourcequota
Yes*
Yes**
cmdb_ci_cmp_r
esource

k8s.io/Service
Yes*
Yes
cmdb_ci_kubern
etes_service

K8s.io/
serviceaccount
Yes*
Yes**
cmdb_ci_cmp_r
esource

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

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

labels
Yes
No
cmdb_key_valu
e

logging.googlea
pis.com/
logbucket

Yes*
Yes**
cmdb_ci_cmp_r
esource

logging.googlea
pis.com/
logmetric

Yes*
Yes**
cmdb_ci_cmp_r
esource

logging.googlea
pis.com/logsink
Yes*
Yes**
cmdb_ci_cmp_r
esource

logging.googlea
pis.com/
recentquery

Yes*
Yes**
cmdb_ci_cmp_r
esource

memcache.goo
gleapis.com/
Instance

Yes*
Yes
cmdb_ci_cloud_
database

monitoring.goog
leapis.com/
alertpolicy

Yes*
Yes**
cmdb_ci_cmp_r
esource

monitoring.goog
leapis.com/
dashboard

Yes*
Yes**
cmdb_ci_cmp_r
esource

monitoring.goog
leapis.com/
notificationchan
nel

Yes*
Yes**
cmdb_ci_cmp_r
esource

networkmanage
ment.googleapi
Yes*
Yes**
cmdb_ci_cmp_r
esource

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

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

s.com/
connectivitytest

orgpolicy.googl
eapis.com/
policy

Yes*
Yes**
cmdb_ci_cmp_r
esource

policy.k8s.io/
poddisruptionbu
dget

Yes*
Yes**
cmdb_ci_cmp_r
esource

pubsub.googlea
pis.com/
subscription

Yes*
Yes**
cmdb_ci_cmp_r
esource

pubsub.googlea
pis.com/topic
Yes*
Yes**
cmdb_ci_cmp_r
esource

rbac.authorizati
on.k8s.io/
ClusterRole

No
Yes
cmdb_ci_kubern
etes_cluster_role

rbac.authorizati
on.k8s.io/
ClusterRoleBindi
ng

No
Yes

cmdb_ci_kubern
etes_cluster_role
_binding

rbac.authorizati
on.k8s.io/role
Yes*
Yes**
cmdb_ci_cmp_r
esource

rbac.authorizati
on.k8s.io/
rolebinding

Yes*
Yes**
cmdb_ci_cmp_r
esource

redis.googleapis
.com/clusters
Yes
No
cmdb_ci_cloud_
db_cluster

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

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

redis.googleapis
.com/Instance
No
Yes
cmdb_ci_cloud_
database

run.googleapis.
com/revision
Yes*
Yes**
cmdb_ci_cmp_r
esource

run.googleapis.
com/service
Yes*
Yes**
cmdb_ci_cmp_r
esource

servicedirectory.
googleapis.com
/endpoint

Yes*
Yes**
cmdb_ci_cmp_r
esource

servicedirectory.
googleapis.com
/namespace

Yes*
Yes**
cmdb_ci_cmp_r
esource

servicedirectory.
googleapis.com
/service

Yes*
Yes**
cmdb_ci_cmp_r
esource

servicemanage
ment.googleapi
s.com/
managedservic
e

Yes*
Yes**
cmdb_ci_cmp_r
esource

servicenetworkin
g.googleapis.co
m/connection

Yes*
Yes**
cmdb_ci_cmp_r
esource

serviceusage.go
ogleapis.com/
service

Yes*
Yes**
cmdb_ci_cmp_r
esource

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

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

spanner.google
apis.com/
Database

Yes
No
cmdb_ci_datab
ase

spanner.google
apis.com/
Instance

Yes
Yes
cmdb_ci_cloud_
database

sqladmin.googl
eapis.com/
backup

Yes*
Yes**
cmdb_ci_cmp_r
esource

sqladmin.googl
eapis.com/
backuprun

Yes*
Yes**
cmdb_ci_cmp_r
esource

sqladmin.googl
eapis.com/
Instance

Yes*
Yes
cmdb_ci_cloud_
database

sqladmin.googl
eapis.com/
Instances/
databases

Yes*
No
cmdb_ci_datab
ase

storage.googlea
pis.com/Bucket
N/A
Yes
cmdb_ci_cloud_
object_storage

storage.googlea
pis.com/Bucket
Yes
N/A
cmdb_ci_cmp_r
esource

storage.k8s.io/
storageclass
Yes*
Yes**
cmdb_ci_cmp_r
esource

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

## Accessing the connection details of Service Graph
## Connector for GCP

You can access the connection details of the Service Graph Connector
for GCP in a single view using the common connection framework (CCF)
included within the Integration Commons for CMDB (sn_cmdb_int_util)
store app.

With the CCF, you can access all the connections used by the
Service Graph Connector for GCP. The connection details include the
connection alias, connection properties, data sources, and scheduled
data imports associated with a connection. You can also test the
connection. For more information, see Accessing the connection details
of Service Graph Connectors.

Access the details of a GCP connection

Access the details of a GCP connection configured for the Service
Graph Connector for GCP.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > GCP > Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

3. On the Service Graph Connections page, view the connection
details such as the connection name, alias, and data sources.

4. Select a related list to view further details of the connection.

5. (Optional) Select the Test Connection related link to test the
connection.

## Handling import failures for large GCP resources

Manage the data source failure when importing resources from GCP.

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

When importing large GCP resources, the data sources in the Service
Graph Connector for GCP might fail because of a Direct REST response
exceeding the 1024-MB limit. For more information, see REST step.

You can use one or more of the following options to handle the REST
response size limitation error in the Service Graph Connector for GCP:

• Save the response as an attachment

• Modify the batch size

Save the response as an attachment

With the save response as an attachment feature, the response of
each data source is temporarily stored as an attachment and after
the response is read, the attachment is deleted automatically. The
save response as an attachment feature is activated by default and is
triggered by the sn_gcp_integ.save_rest_response_as_attachment system
property.

As a user with the admin role, you can deactivate the
save response as an attachment feature by setting the
sn_gcp_integ.save_rest_response_as_attachment property to false.
When the feature is deactivated and the response size is within the limit,
the data sources run normally.

Modify the batch size

By default, the maximum batch size of the environment variable for a
data source is set to 100 records. You can reduce or increase the batch
size based on the data volume. To manage the batch size of a data
source, you must add a system property of integer type for the data
source as described in the following table.

System properties for handling the batch size of Service Graph
Connector for GCP data sources

Data source
System property

SG-GCP Cloud Database
sg_gcp_cloud_db_batch_size

SG-GCP Cloud Function
sg_gcp_cloud_function_batch_size

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

Data source
System property

SG-GCP Cloud Object Storage
sg_gcp_object_storage_batch_size

SG-GCP Kubernetes Cluster
sg_gcp_kubernetes_cluster_batch_
size

SG-GCP Kubernetes Cluster Role
sn_gcp_integ.sg_gcp_kubernetes_
cluster_role_batch_size

SG-GCP Kubernetes Cluster Role
Binding

sn_gcp_integ.sg_gcp_kubernetes_
cluster_role_binding_batch_size

SG-GCP Kubernetes Deployment
sg_gcp_kubernetes_deployment_
batch_size

SG-GCP Kubernetes Namespace
sg_gcp_kubernetes_namespace_b
atch_size

SG-GCP Kubernetes Node
sg_gcp_kubernetes_node_batch_s
ize

SG-GCP Kubernetes Pod
sg_gcp_kubernetes_pod_batch_siz
e

SG-GCP Kubernetes Replicaset
sg_gcp_kubernetes_replicaset_bat
ch_size

SG-GCP Kubernetes Service
sg_gcp_kubernetes_service_batch
_size

SG-GCP Load Balancer
sg_gcp_load_balancer_batch_size

SG-GCP Load Balancer Health
Service

sg_gcp_lb_health_service_batch_si
ze

SG-GCP Load Balancer Pool
sg_gcp_lb_pool_batch_size

SG-GCP Load Balancer Pool
Member

sg_gcp_lb_pool_member_batch_si
ze

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

Data source
System property

SG-GCP Load Balancer Service
sn_gcp_integ.sg_gcp_lb_service_b
atch_size

SG-GCP Network
sg_gcp_network_batch_size

SG-GCP Kubernetes Node Pool
sn_gcp_integ.sg_gcp_kubernetes_
node_pool_batch_size

SG-GCP Security Group
sg_gcp_security_group_batch_size

SG-GCP Software Inventory
sg_gcp_software_inventory_batch
_size

SG-GCP Storage Volume
sg_gcp_storage_volume_batch_siz
e

SG-GCP Storage Volume Snapshot
sg_gcp_storage_vol_snapshot_bat
ch_size

SG-GCP Subnet
sg_gcp_subnet_batch_size

SG-GCP VM Instance
sg_gcp_vm_instance_batch_size

Note:   You must add these system properties as they aren't available
by default. You must have the admin role to add or modify a system
property. For more information, see Add a system property.

## Deep discovery for Service Graph Connector for GCP

The SG-GCP Execute Patch Job and SG-GCP Get Patch Job scheduled
import jobs enable deep discovery by running patch jobs at the GCP
project level.

Deep discovery involves fetching server data. The deep discovery data
populates host name, serial number, CPU data, TCP connections, and
running processes data into the CMDB.

The Service Graph Connector for GCP uses OS Config Patch jobs on GCP
projects to execute the deep discovery commands on the VMs. These
patch jobs run independently on Linux and Windows VMs.

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

The following scheduled imports execute the OS Config Patch jobs, and
then read and delete the output:

• SG-GCP Execute Patch Job

• SG-GCP Get Patch Job

Deep discovery connection properties

Deep discovery connection properties

Connection property name
Connection property value

Scripts Bucket Name

Name of the Cloud Storage Bucket
where the deep discovery scripts
are saved.

Outputs Bucket Name
Name of the output Cloud Storage
Bucket.

Outputs Storage Path
Path of the output Cloud Storage
Bucket.

Shell Script Object Path
Path of the deep discovery Shell
script file.

Shell Script Generation Number

Number that is used to identify
the versioning of the cloud storage
object.

PowerShell Script Object Path
Path of the deep discovery
PowerShell script file.

PowerShell Script Generation
Number

Number that is used to identify
the versioning of the cloud storage
object.

SG-GCP Execute Patch Job

The SG-GCP Execute Patch Job scheduled import reads the path of the
Shell and PowerShell scripts uploaded to the Cloud Storage Bucket and
the generation numbers from the deep discovery connection properties.

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

The scheduled import then runs the commands on Linux and Windows
VMs separately.

In the Import Set table for the SG-GCP Execute Patch Job import
schedule, each project will have two rows, one for Linux VMs and the
other for Windows VMs. The Import Set rows remain in Pending state
because no transformations are required for these rows. The Import Set
rows include the patch job ID and the list of instances on which the deep
discovery script is run. The output is stored in the Cloud Storage Bucket
with the Object ID of the VMs on which the deep discovery commands
are run.

SG-GCP Get Patch Job

The SG-GCP Get Patch Job scheduled import reads the output of the
commands that are run on the Linux and Windows VMs. The scheduled
import reads the output from the output bucket and folder path that
are specified in the deep discovery connection properties. The SG-GCP
Get Patch Job scheduled import then deletes the output from the Cloud
Storage Bucket. The Import Set rows are processed using Application
Dependency Mapping (ADM) to populate the Server records with the
data of the VMs on which deep discovery was run. The Import Set rows
include VM data such as running processes, TCP connections, and CPU
information.

Application Dependency Mapping

Using the deep discovery information, Application Dependency
Mapping (ADM) creates and classifies the following applications from the
imported middleware information:

• Apache Web Server

• MongoDB Instance

• MSFT SQL Instance

• MySQL Instance

• Nginx Web Server

• Oracle Database Listener

• Oracle Instance

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

• PostgreSQL Instance

• Tomcat

Additional resource

Service Graph Connector for GCP - Deep Discovery Setup Instructions
[KB2213095] article in the Now Support Knowledge Base

## Life cycle management of records in Service Graph
## Connector for GCP

Life cycle management in the in the Service Graph Connector for GCP
monitors and updates the statuses of GCP resources throughout their
entire life cycle, from creation to deletion.

The life cycle management process helps maintain the accuracy and
integrity of data in the Configuration Management Database (CMDB).

In life cycle management, the record removal process involves
systematically deleting obsolete or unnecessary resources. This step
ensures that outdated entries are cleared, keeping the CMDB accurate
and up-to-date. See Record removal process in Service Graph
Connector for GCP.

Life cycle management for CIs in Service Graph Connector for
GCP

The following table lists the configuration items (CIs) for which life cycle
management is available in Service Graph Connector for GCP.

Supported CIs for life cycle management

Data source
CMDB CI classes
Life cycle management
available

SG-GCP Organization
Cloud Organizations
[cmdb_ci_cloud_org]
Yes

SG-GCP Folder

Google
Organization Folder
[cmdb_ci_gcp_folder]

Yes

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

Data source
CMDB CI classes
Life cycle management
available

SG-GCP Project

Google Organization
Project
[cmdb_ci_gcp_project
]

Yes

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Yes

SG-GCP Network
Cloud Network
[cmdb_ci_network]
Yes

SG-GCP Machine
Image

Image
[cmdb_ci_os_templat
e]

Not applicable

SG-GCP Subnet

Cloud Subnet
[cmdb_ci_cloud_subn
et]

Yes

Google Datacenter
[cmdb_ci_google_dat
acenter]

Not applicable

SG-GCP Storage
Volume

Storage Volume
[cmdb_ci_storage_vol
ume]

Yes

SG-GCP Storage
Volume Snapshot

Storage Volume
Snapshot
[cmdb_ci_storage_vol
_snapshot]

Yes

SG-GCP Security
Group

Compute Security
Group
[cmdb_ci_compute_s
ecurity_group]

Yes

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

Data source
CMDB CI classes
Life cycle management
available

Network ACL
[cmdb_ci_network_acl
]

Yes

Network ACL Rule
[cmdb_ci_network_acl
_rule]

Yes

SG-GCP Software
Inventory

Software
[cmdb_ci_spkg]

Software Instance
[cmdb_software_insta
nce]

Software Installation
[cmdb_sam_sw_install]

Yes

SG-GCP VM Instance

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Yes

Server
[cmdb_ci_server]
Yes

Storage Mapping
[cmdb_ci_storage_ma
pping]

Yes

VNIC Endpoint
[cmdb_ci_endpoint_v
nic]

Yes

Block Endpoint
[cmdb_ci_endpoint_bl
ock]

Yes

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

Data source
CMDB CI classes
Life cycle management
available

IP Address
[cmdb_ci_ip_address]
Yes

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Yes

Hardware Type
[cmdb_ci_compute_t
emplate]

Not applicable

Image
[cmdb_ci_os_templat
e]

Yes

Availability Zone
[cmdb_ci_availability_
zone]

Not applicable

SG-GCP Execute
Patch Job
Not applicable
Not applicable

SG-GCP Hardware
Type

Hardware Type
[cmdb_ci_compute_t
emplate]

Not applicable

Google Datacenter
[cmdb_ci_google_dat
acenter]

Not applicable

Availability Zone
[cmdb_ci_availability_
zone]

Not applicable

SG-GCP VM Hw
Consolidation

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Not applicable

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

113

Zurich ServiceNow AI Platform Capabilities

---
*Page 114*

Data source
CMDB CI classes
Life cycle management
available

SG-GCP Load
Balancer Pool

Load Balancer Pool
[cmdb_ci_lb_pool]
Yes

SG-GCP load Balancer
Pool Member

Load Balancer Pool
Member
[cmdb_ci_lb_pool_me
mber]

Yes

SG-GCP Load
Balancer Health
Service

Cloud Load Balancer
Health Service
[cmdb_ci_lb_health_s
ervice]

Yes

SG-GCP Load
Balancer

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Yes

SG-GCP Load
Balancer Service

Load Balancer Service
[cmdb_ci_lb_service]
Yes

SG-GCP Cloud
Database

Cloud DataBase
[cmdb_ci_cloud_data
base]

Yes

SG-GCP Cloud
Function

Cloud Function
[cmdb_ci_cloud_funct
ion]

Yes

SG-GCP Cloud Object
Storage

Cloud Object Storage
[cmdb_ci_cloud_obje
ct_storage]

Yes

SG-GCP Kubernetes
Cluster

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Yes

SG-GCP Kubernetes
Node

Kubernetes Node
[cmdb_ci_kubernetes_
node]

Yes

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

114

Zurich ServiceNow AI Platform Capabilities

---
*Page 115*

Data source
CMDB CI classes
Life cycle management
available

SG-GCP Kubernetes
Pod

Kubernetes Pod
[cmdb_ci_kubernetes_
pod]

Yes

Kubernetes Volume
[cmdb_ci_kubernetes_
volume]

No

Docker Image
[cmdb_ci_docker_ima
ge]

No

Docker Container
[cmdb_ci_docker_con
tainer]

Yes

SG-GCP Kubernetes
Service

Kubernetes Service
[cmdb_ci_kubernetes_
service]

Yes

SG-GCP Kubernetes
Namespace

Kubernetes
Namespace
[cmdb_ci_kubernetes_
namespace]

Yes

SG-GCP Kubernetes
Deployment

Kubernetes
Deployment
[cmdb_ci_kubernetes_
deployment]

Yes

SG-GCP Kubernetes
Replicaset

Kubernetes ReplicaSet
[cmdb_ci_kubernetes_
replicaset]

Yes

SG-GCP Kubernetes
Cluster Roles

Kubernetes Cluster
Role
[cmdb_ci_kubernetes_
cluster_role]

Yes

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

115

Zurich ServiceNow AI Platform Capabilities

---
*Page 116*

Data source
CMDB CI classes
Life cycle management
available

SG-GCP Kubernetes
Cluster Role Binding

Kubernetes Cluster
Role Binding
[cmdb_ci_kubernetes_
cluster_role_binding]

Yes

SG-GCP Kubernetes
Node Pool

Kubernetes Node Pool
[cmdb_ci_kubernetes_
node_pool]

Yes

SG-GCP Generic
Resource

Cloud Resource
[cmdb_ci_cmp_resour
ce]

Yes

SG-GCP Annotation
Key Value
[cmdb_key_value]
Not applicable

SG-GCP Get Patch
Job
Not applicable
Not applicable

SG-GCP Generic
Resource Annotation

Key Value
[cmdb_key_value]
Not applicable

## Record removal process in Service Graph Connector
## for GCP

The Service Graph Connector for GCP uses soft deletion and hard
deletion to manage the removal of records.

Record removal is the process of handling data that is no longer needed.
For any discovered resources that are deleted later after pulling data,
the Service Graph Connector for GCP automatically updates the Install
Status field of the associated CMDB CI classes to indicate any retired or
deleted records.

• Soft deletion

• Hard deletion

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

116

Zurich ServiceNow AI Platform Capabilities

---
*Page 117*

Soft deletion

Soft deletion involves marking the install status of a record as retired
rather than permanently deleting it from the system. The record remains
in the database, making it possible to reference or restore it later.

Starting with the Service Graph Connector for GCP 1.11.0 version,
Integration Commons Record Removal is implemented to mark the Install
Status and Operational Status of configuration items (CIs) as retired if
they aren't discovered during the latest pull. This implementation verifies
the Last Scan attribute of the CIs in the Source [sys_object_source] table
to identify CIs that aren't discovered during the latest pull. Additionally,
the source native keys (SNKs) for all CIs are modified to include the
connection alias ID to identify the connection that discovered specific
CIs.

Soft deletion for the Service Graph Connector for GCP 1.11.0
version relies on the Source [sys_object_source] table and the Use
Record Removal and lookback_time_in_days connection properties.
Soft deletion for the Service Graph Connector for GCP 1.10
version and earlier relied on the SG-GCP Extension Attributes
[sn_gcp_integ_extension_attributes] table.

After upgrading to version 1.11.0, the value of the Use Record Removal
connection property is set to true when the import is run for the first
time. Consequently, the latest SNKs for the CIs are included in the
Source [sys_object_source] table. Record removal is implemented from
the subsequent run.

After upgrading to version 1.11.0, the value of the lookback_time_in_days
connection property is set to null by default. During the initial run after the
upgrade, the Source [sys_object_source] table is queried for all records
that the connection discovered. By default, the value is set to 15 after the
initial run. Two weeks after the initial run, the Source [sys_object_source]
table is queried for all records that weren't discovered in the past 15 days.
All records that weren't discovered in the past 15 days are marked as
retired.

Soft deletion is enabled for the following data sources in Service Graph
Connector for GCP:

• SG-GCP Folder

• SG-GCP Project

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

117

Zurich ServiceNow AI Platform Capabilities

---
*Page 118*

• SG-GCP Network

• SG-GCP Subnet

• SG-GCP Storage Volume

• SG-GCP Storage Volume Snapshot

• SG-GCP Security Group

• SG-GCP VM Instance

• SG-GCP Load Balancer Pool

• SG-GCP Load Balancer Pool Member

• SG-GCP Load Balancer Health Service

• SG-GCP Load Balancer

• SG-GCP Load Balancer Service

• SG-GCP Cloud Database

• SG-GCP Cloud Function

• SG-GCP Cloud Object Storage

• SG-GCP Kubernetes Cluster

• SG-GCP Kubernetes Node

• SG-GCP Kubernetes Pod

• SG-GCP Kubernetes Service

• SG-GCP Kubernetes Namespace

• SG-GCP Kubernetes Deployment

• SG-GCP Kubernetes Replicaset

• SG-GCP Kubernetes Cluster Roles

• SG-GCP Kubernetes Cluster Role Binding

• SG-GCP Kubernetes Node Pool

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

118

Zurich ServiceNow AI Platform Capabilities

---
*Page 119*

Starting with the Service Graph Connector for GCP 1.10 version, the SG-
GCP Generic Resource data source uses the post-script method for soft
deletion, which relies on the Source [sys_object_source] table. For more
information about the post-script method, see Post-script method.

Hard deletion

Hard deletion involves permanently deleting a record from the system.
The record is removed from the CMDB and can't be referenced or
restored later. The SG-GCP Software Inventory data source uses the hard
deletion method for the deletion of records.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

119

Zurich ServiceNow AI Platform Capabilities

# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_observability_-_dynatrace_2026-01-16-13-13-57

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_observability_-_dynatrace_2026-01-16-13-13-57.pdf*

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

## Service Graph Connector for Observability - Dynatrace

Use the Service Graph Connector for Observability - Dynatrace to ingest
CI data, events, metrics, and logs from Dynatrace into your ServiceNow
instance.

Note:   The Service Graph Connector for Observability - Dynatrace
provided by ServiceNow is different from the Service Graph
Connector for Dynatrace provided by Dynatrace.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported versions

• Supported versions:

• Minimum version supported: Dynatrace SaaS; Version 1.284

• Supported ServiceNow versions:

• Xanadu

• Yokohama

• Zurich

Important information for upgrading Service Graph Connector for
Observability - Dynatrace

Before upgrading the Service Graph Connector for Observability -
Dynatrace to version 1.10.0 or later, disable the reconciliation rules
for tables extending the Application [cmdb_ci_appl] table. See the
Reconciliation rules(ServiceNow, ServiceWatch) on multiple table like
Apache web server stopping other discovery source to update fields on
those tables [KB1649455] article in the Now Support Knowledge Base.

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

You can configure a connection for the connector by using the SGC
Central view in the CMDB Workspace enables you to discover and install
connectors, and then effectively manage the full life cycle of creating,
editing, monitoring, and debugging connections. To configure the
connector using SGC Central, see Configure Service Graph Connector
for Observability - Dynatrace using SGC Central.

Important:   Unless there are configuration issues, use the SGC
Central view in the CMDB Workspace to configure the connection
for the connector, as the guided setup method is being deprecated.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration, or
a specific integration run. For more details about monitoring Dynatrace
integrations in the CMDB Integrations Dashboard, see Using the CMDB
Integrations Dashboard.

Data mapping

Data from the Dynatrace data sources is mapped and transformed into
the ServiceNow CMDB Configuration Item (CI) class definitions using the
Robust Transform Engine (RTE). Data is inserted into the ServiceNow CMDB
using the Identification and Reconciliation Engine (IRE).

The following table describes the data sources, the staging tables, the
target tables as CMDB CI classes, and the Dynatrace entities imported by
each data source.

Data mapping for Dynatrace entities

Data source
Description
Staging table
CMDB CI
classes
Entities

SGO-
Dynatrace
Hosts

Ingests host
data from
Dynatrace.

SGO-
Dynatrace
Hosts
[sn_dynatrac
e_integ_sg_d

Computer

IP Address
[cmdb_ci_ip
_address]

Host

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
Description
Staging table
CMDB CI
classes
Entities

Contains
computer
data.

ynatrace_ho
sts]

Key value

When the
Software
Asset
Manageme
nt (SAM)
application
isn't installed:

Software

Software
Instance

When the
SAM
application
is installed:
Software
Installation

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
Description
Staging table
CMDB CI
classes
Entities

Note:
Only the
operatin
g system
data is
stored in
the
Softwar
e
Packag
es,
Softwar
e
Instance
, and
Softwar
e
Installati
on CI
classes.

SGO-
Dynatrace
Processes

Ingests
process
data from
Dynatrace.

Contains
running
process
data.

SGO-
Dynatrace
Processes
[sn_dynatrac
e_integ_sg_d
ynatrace_pr
ocesses]

The target
table is
populated
using
Application
Dependenc
y Mapping
(ADM). The
ADM
adapter
analyzes the
imported
data and
command-
line
arguments,
identifies the
appropriate

Process

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
Description
Staging table
CMDB CI
classes
Entities

table based
on the
conditions
included in
Discovery
Process
Classification
s list, and
inserts the
data into the
table, which
extends the
Application
[cmdb_ci_a
ppl] table.
To learn
about
process
classification
, see
Discovery
classifiers.

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
Description
Staging table
CMDB CI
classes
Entities

Note:
The
addition
of
unclassif
ied
process
es to the
Applicat
ion
[cmdb_
ci_appl]
table
depend
s on the
value of
the
sn_dyna
trace_in
teg.cre
ateUnm
atched
Applicat
ionCIs
system
property
. For
more
informat
ion, see
Service
Graph
Connec
tor for
Observa
bility -
Dynatra
ce
properti
es.

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
Description
Staging table
CMDB CI
classes
Entities

SGO-
Dynatrace
Process
Groups

Ingests
process
group data
from
Dynatrace.

Contains a
group of
similar
running
processes.

SGO-
Dynatrace
Process
Groups
[sn_dynatrac
e_integ_sg_d
ynatrace_pr
ocess_group
s]

Group
Process
Group

SGO-
Dynatrace
Services

Ingests
service data
from
Dynatrace.

Contains
information
related to
services that
are
detected via
the
Dynatrace
agent.

Can be
filtered using
advanced
settings
properties.

SGO-
Dynatrace
Services
[sn_dynatrac
e_integ_sg_d
ynatrace_ser
vices]

Calculated
Application
Service

Key value

Service

SGO-
Dynatrace
Applications

Ingests
application
data from
Dynatrace.

SGO-
Dynatrace
Applications
[sn_dynatrac
e_integ_sg_d

Calculated
Application
Service

Key value

Application

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
Description
Staging table
CMDB CI
classes
Entities

Contains
information
related to
the
applications
defined
manually.

Applications
are parents
to services
representing
a higher
level, logical
group of
services.

ynatrace_ap
plications]

SGO-
Dynatrace
Application
Rels

Ingests
application
relationships
from
Dynatrace.

Returns the
same data
as the SGO-
Dynatrace
Services
data source.

Maps
relationships
between
applications
and
processes
that could
have been
skipped due

SGO-
Dynatrace
Application
Relationships
[sn_dynatrac
e_integ_sg_d
ynatrace_ap
plication_rel
ationships]

Calculated
Application
Service

Service

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
Description
Staging table
CMDB CI
classes
Entities

to filtered
services.

SGO-
Dynatrace
AWS
Application
Network LB

Ingests cloud
load
balancer
data from
Dynatrace.

Contains
information
related to
AWS
application
and network
load
balancer.

SGO-
Dynatrace
AWS
Application
Network LB
[sn_dynatrac
e_integ_sgo_
dynatrace_a
ws_applicati
on_network_l
b]

Cloud Load
Balancer

Key Value

AWS
Network
Load
Balancer

AWS
Application
Load
Balancer

SGO-
Dynatrace
AWS
Datacenters

Ingests AWS
datacenter
and
availability
zone data
from
Dynatrace.

Contains
information
related to
AWS
datacenters
and
availability
zones.

SGO-
Dynatrace
AWS
Availability
Zone
[sn_dynatrac
e_integ_sgo_
dynatrace_a
ws_availabilit
y_zone]

AWS
Datacenter

Availability
Zone

AWS
Availability
Zone

SGO-
Dynatrace

Ingests AWS
virtual
machine

SGO-
Dynatrace
AWS EC2

Virtual
Machine
Instance

EC2 Instance

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
Description
Staging table
CMDB CI
classes
Entities

AWS EC2
Instance

instance
data from
Dynatrace.

Contains
information
related to
virtual
machine
instances,
server
details,
cloud
hardware
type, cloud
image, and
tags.

Instance
[sn_dynatrac
e_integ_sg_d
ynatrace_a
ws_ec2_insta
nce]

Server

Cloud
Hardware
Type

Hardware
Type

Image

Key Value

SGO-
Dynatrace
AWS Elastic
Loadbalanc
er

Ingests cloud
load
balancer
data from
Dynatrace.

Contains
load
balancer
details and
tags.

SGO-
Dynatrace
AWS Elastic
Loadbalanc
er
[sn_dynatrac
e_integ_sgo_
dynatrace_a
ws_elastic_lo
adbalancer]

Cloud Load
Balancer

Key Value

Elastic Load
Balancer

SGO-
Dynatrace
AWS Service
Account

Ingests cloud
service
account
data from
Dynatrace.

Contains
information
related to

SGO-
Dynatrace
AWS Service
Account
[sn_dynatrac
e_integ_sgo_
dynatrace_a
ws_service_a
ccount]

Cloud
Service
Account

AWS
Credentials

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
Description
Staging table
CMDB CI
classes
Entities

AWS
account IDs.

SGO-
Dynatrace
Azure Load
Balancer

Ingests Azure
load
balancer
data from
Dynatrace.

Contains
Azure load
balancer
and cloud
load
balancer IP
address and
tag details.

SGO-
Dynatrace
Azure Load
Balancer
[sn_dynatrac
e_integ_sgo_
dynatrace_a
zure_load_b
alancer]

Cloud Load
Balancer

Cloud LB
IPAddress

Key Value

Azure Load
Balancer

SGO-
Dynatrace
Azure
Region

Ingests Azure
datacenter
data from
Dynatrace.

Contains
Azure
datacenter
information.

SGO-
Dynatrace
Azure
Region
[sn_dynatrac
e_integ_sgo_
dynatrace_a
zure_region]

Azure
Datacenter

Azure
Region

SGO-
Dynatrace
Azure
Storage
Accounts

Ingests Azure
cloud
storage
account
data from
Dynatrace.

Contains
information
related to

SGO-
Dynatrace
Azure
Storage
Accounts
[sn_dynatrac
e_integ_sgo_
dynatrace_a
zure_storage
_accounts]

Cloud
Storage
Account

Azure
Storage
Account

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
Description
Staging table
CMDB CI
classes
Entities

cloud
storage
accounts.

SGO-
Dynatrace
Azure Strg
Acnts v2

Ingests Azure
cloud
storage
account
data from
Dynatrace
using v2 API.

Contains
information
related to
cloud
storage
accounts.

SGO-
Dynatrace
Azure
Storage
Accounts v2
[sn_dynatrac
e_integ_sgo_
dynatrace_a
zure_storage
_accounts_v
2]

Cloud
Storage
Account

cloud:azure:
storage:stora
geaccounts

SGO-
Dynatrace
Azure
Subscriptions

Ingests Azure
subscription
data from
Dynatrace.

Contains
Azure
subscription
details.

SGO-
Dynatrace
Azure
Subscriptions
[sn_dynatrac
e_integ_sg_d
ynatrace_az
ure_subscript
ions]

Cloud
Service
Account

Azure
Subscription

SGO-
Dynatrace
Azure VM

Ingests Azure
virtual
machine
instance
data from
Dynatrace.

Contains
information

SGO-
Dynatrace
Azure VM
[sn_dynatrac
e_integ_sgo_
dynatrace_a
zure_vm]

Virtual
Machine
Instance

Azure VM

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
Description
Staging table
CMDB CI
classes
Entities

related to
Azure virtual
machine
instances.

SGO-
Dynatrace
Docker
Container

Ingests
Docker
container
data from
Dynatrace.

Contains
information
related to
the Docker
container
image.

SGO-
Dynatrace
Docker
Container
[sn_dynatrac
e_integ_sgo_
dynatrace_d
ocker_conta
iner]

Docker
Container

Application

Docker
Image

Computer
[cmdb_ci_c
omputer]

Container
Group
Instance

SGO-
Dynatrace
Kubernetes
Cluster

Ingests
Kubernetes
cluster data
from
Dynatrace.

Contains
information
related to
Kubernetes
clusters.

SGO-
Dynatrace
Kubernetes
Cluster
[sn_dynatrac
e_integ_sgo_
dynatrace_k
ubernetes_cl
uster]

Kubernetes
Cluster

Key Value

Kubernetes
Cluster

SGO-
Dynatrace
Kubernetes
Namespace

Ingests
Kubernetes
namespace
data from
Dynatrace.

Contains
information

SGO-
Dynatrace
Kubernetes
Namespace
[sn_dynatrac
e_integ_sgo_
dynatrace_k

Kubernetes
Namespace

Key Value

Cloud
Application
Namespace

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

Data source
Description
Staging table
CMDB CI
classes
Entities

related to
Kubernetes
namespaces
.

ubernetes_n
amespace]

SGO-
Dynatrace
Kubernetes
Node

Ingests
Kubernetes
node data
from
Dynatrace.

Contains
information
related to
Kubernetes
nodes.

SGO-
Dynatrace
Kubernetes
Node
[sn_dynatrac
e_integ_sgo_
dynatrace_k
ubernetes_n
ode]

Kubernetes
Node

Key Value

Kubernetes
Node

SGO-
Dynatrace
Kubernetes
Pod

Ingests
Kubernetes
pod data
from
Dynatrace.

Contains
information
related to
Kubernetes
pods.

SGO-
Dynatrace
Kubernetes
Pod
[sn_dynatrac
e_integ_sgo_
dynatrace_k
ubernetes_p
od]

Kubernetes
Pod

Key Value

Cloud
Application
Instance

SGO-
Dynatrace
Kubernetes
Service

Ingests
Kubernetes
service data
from
Dynatrace.

Contains
information
related to

SGO-
Dynatrace
Kubernetes
Service
[sn_dynatrac
e_integ_sgo_
dynatrace_k
ubernetes_s
ervice]

Kubernetes
Service

Key Value

Kubernetes
Service

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

Data source
Description
Staging table
CMDB CI
classes
Entities

Kubernetes
services.

SGO-
Dynatrace
Azure
Cosmos DB
v1

Ingests Azure
Cosmos DB
data from
Dynatrace.

Contains
information
related to
Azure
Cosmos DB.

SGO-
Dynatrace
Azure
Cosmos DB
v1
[sn_dynatrac
e_integ_sgo_
dynatrace_a
zure_cosmos
_db_v1]

Cloud
DataBase

Azure
Datacenter

Cloud
Service
Account

Key value

AZURE_COS
MOS_DB

SGO-
Dynatrace
Azure
Cosmos DB
V2

Ingests Azure
Cosmos DB
data from
Dynatrace.

Contains
information
related to
Azure
Cosmos DB.

SGO-
Dynatrace
Azure
Cosmos DB
V2
[sn_dynatrac
e_integ_sgo_
dynatrace_a
zure_cosmos
_db_v2]

Cloud
DataBase

Azure
Datacenter

Cloud
Service
Account

Key value

cloud:azure:
documentd
b:database
accounts:gl
obal

cloud:azure:
documentd
b:database
accounts:m
ongo

SGO-
Dynatrace
Azure SQL
Server V2

Ingests Azure
SQL Server
data from
Dynatrace.

Contains
information
related to
Azure SQL
Server.

SGO-
Dynatrace
Azure SQL
Server V2
[sn_dynatrac
e_integ_sgo_
dynatrace_a
zure_sql_serv
er_v2]

Cloud
DataBase

Azure
Datacenter

Key value

cloud:azure:
sql:servers:d
atabases:dt
u

cloud:azure:
sql:servers:d
atabases:vc
ore

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

Data source
Description
Staging table
CMDB CI
classes
Entities

cloud:azure:
sql:servers:d
atabases:hy
perscale

SGO-
Dynatrace
Azure
Function
App

Ingests Azure
Functions
app data
from
Dynatrace.

Contains
information
related to
Azure
Functions
app.

SGO-
Dynatrace
Azure
Function
App
[sn_dynatrac
e_integ_sgo_
dynatrace_a
zure_functio
n_app]

Cloud
Function

Azure
Datacenter

Cloud
Service
Account

Key value

AZURE_FUNC
TION_APP

SGO-
Dynatrace
Azure Scale
Sets VM

Ingests Azure
Virtual
Machine
Scale Sets
(VMSS) data
from
Dynatrace.

Contains
information
related to
Azure VMSS.

SGO-
Dynatrace
Azure Scale
Sets VM
[sn_dynatrac
e_integ_sgo_
dynatrace_a
zure_scale_s
ets_vm]

Instance
Scale Set

Azure
Datacenter

Cloud
Service
Account

Key value

AZURE_VM_S
CALE_SET

SGO-
Dynatrace
AWS RDS V1

Ingests
Amazon
Relational
Database
Service (RDS)
data from
Dynatrace.

SGO-
Dynatrace
AWS RDS V1
[sn_dynatrac
e_integ_sgo_
dynatrace_a
ws_rds_v1]

Cloud
DataBase

AWS
Datacenter

Key value

RELATIONAL_
DATABASE_S
ERVICE

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

Data source
Description
Staging table
CMDB CI
classes
Entities

Contains
information
related to
Amazon
RDS.

SGO-
Dynatrace
AWS RDS V2

Ingests
Amazon
Relational
Database
Service (RDS)
data from
Dynatrace.

Contains
information
related to
Amazon
RDS.

SGO-
Dynatrace
AWS RDS V2
[sn_dynatrac
e_integ_sgo_
dynatrace_a
ws_rds_v2]

Cloud
DataBase

AWS
Datacenter

Key value

cloud:aws:rd
s

SGO-
Dynatrace
AWS
Dynamo DB
v1

Ingests
Amazon
Dynamo DB
data from
Dynatrace.

Contains
information
related to
Amazon
Dynamo DB.

SGO-
Dynatrace
AWS
Dynamo DB
v1
[sn_dynatrac
e_integ_sgo_
dynatrace_a
ws_dynamo_
db_v1]

DynamoDB
Table

AWS
Datacenter

Key value

DYNAMO_D
B_TABLE

SGO-
Dynatrace
AWS
Dynamo DB
v2

Ingests
Amazon
Dynamo DB
data from
Dynatrace.

SGO-
Dynatrace
AWS
Dynamo DB
v2
[sn_dynatrac

DynamoDB
Table

AWS
Datacenter

cloud:aws:d
ynamodb

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

Data source
Description
Staging table
CMDB CI
classes
Entities

Contains
information
related to
Amazon
Dynamo DB.

e_integ_sgo_
dynatrace_a
ws_dynamo_
db_v2]

Key value

SGO-
Dynatrace
AWS
Lambda
Func V1

Ingests AWS
Lambda
Function
data from
Dynatrace.

Contains
information
related to
AWS
Lambda
Function.

SGO-
Dynatrace
AWS
Lambda
Func V1
[sn_dynatrac
e_integ_sgo_
dynatrace_a
ws_lambda_
func_v1]

Cloud
Function

Azure
Datacenter

Key value

AWS_LAMBD
A_FUNCTION

SGO-
Dynatrace
AWS
Lambda
Func V2

Ingests AWS
Lambda
Function
data from
Dynatrace.

Contains
information
related to
AWS
Lambda
Function.

SGO-
Dynatrace
AWS
Lambda
Func V2
[sn_dynatrac
e_integ_sgo_
dynatrace_a
ws_lambda_
func_v2]

Cloud
Function

Azure
Datacenter

Key value

cloud:aws:la
mbda

SGO-
Dynatrace
AWS S3
Bucket V2

Ingests
Amazon S3
bucket data
from
Dynatrace.

SGO-
Dynatrace
AWS S3
Bucket V2
[sn_dynatrac
e_integ_sgo_

Cloud
Object
Storage

AWS
Datacenter

cloud:aws:s3

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

Data source
Description
Staging table
CMDB CI
classes
Entities

Contains
information
related to
Amazon S3
bucket.

dynatrace_a
ws_s3_bucke
t_v2]

Key value

SGO-
Dynatrace
Custom
Applications

Ingests
custom
application
data from
Dynatrace.

Contains
information
related to
custom
applications.

SGO-
Dynatrace
Custom
Applications
[sn_dynatrac
e_integ_sgo_
dynatrace_c
ustom_appli
cations]

Calculated
Application
Service

Configuratio
n Item
[cmdb_ci]

Key value

CUSTOM_AP
PLICATION

SGO-
Dynatrace
AWS Auto
Scaling
Group V1

Ingests AWS
autoscaling
group data
from
Dynatrace
using V1 API.

Contains
information
related to
AWS
autoscaling
group.

SGO-
Dynatrace
AWS Auto
Scaling
Group V1
[sn_dynatrac
e_integ_sgo_
dynatrace_a
ws_auto_sca
ling_group_v
1]

Cloud
Resource

AWS
Datacenter

Key value

AUTO_SCALI
NG_GROUP

When you complete setting up the connection, you can configure the
integration to pull data from Dynatrace periodically. The data is loaded
into the staging tables, and then inserted into the target tables.

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

For more information on where data is saved when pulling data from
Dynatrace, see CMDB classes targeted in Service Graph Connector for
Observability - Dynatrace.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

Additional resources

• Introduction to Service Graph Connector for Observability Dynatrace

article on the ServiceNow Community site

• How do I configure the Dynatrace Service Graph Connector? article on
the ServiceNow Community site

Related concepts

• Service Graph Connectors

Related reference

• Service Graph Connector for Observability - Dynatrace properties

## Configure Service Graph Connector for Observability -
## Dynatrace using SGC Central

Set up scheduled import jobs to pull in Dynatrace data into your
Configuration Management Database (CMDB).

Before you begin

Install Service Graph Connector for Observability - Dynatrace version
1.11.0 or later from the ServiceNow Store. For ServiceNow Store installation
steps, see Install a ServiceNow Store application.
Role required: SGC-Admin (sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to run background scripts and
to provide table-level access to the SGC-Admin user.

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

4. On the Create connection window, select the Dynatrace connector
type, and then select Configure connection.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

a. (Optional) Install the Observability Commons for CMDB
application (sn_observability) for event ingestion.

Note:   The Install Observability Commons for CMDB activity
appears only when the Observability Commons for CMDB
application (sn_observability) isn't already installed. If event
ingestion isn't needed, you can skip this step by selecting
Continue for the Install Observability Commons for CMDB
activity.

a. In the Prerequisites stage of the playbook, select the Install
Observability Commons for CMDB activity.

b. Install the Observability Commons for CMDB application
(sn_observability) from the ServiceNow Store.

c. After you have installed the application, select Continue.

b. Create data sources for the connection.

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

Note:   This step is required when configuring the connector
for the first time only.

a. Verify that you have edit permissions for the Datasource
[sys_data_source] table.

b. In the Prerequisites stage of the playbook, select the Update
data source access activity.

c. Select Update access.

d. To edit the record, select the Global application scope from
the application picker.

e. In the Application Access related list of the Data Source form,
select the Can create, Can update, and Can delete check
boxes.

f. Select Update.

g. From the application picker, select the application scope of
the connector.

h. After completing the Update data source access activity,
select Continue.

c. Enable creating scheduled jobs for the connection by updating
the scheduled data import access.

Note:   This step is required when configuring the connector
for the first time only.

a. Verify that you have edit permissions for the Scheduled Data
Import [scheduled_import_set] table.

b. In the Prerequisites stage of the playbook, select the Update
scheduled data import access activity.

c. Select Update access.

d. To edit the record, select the Global application scope from
the application picker.

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

e. In the Application Access related list of the Data Source form,
select the Can create, Can update, and Can delete check
boxes.

f. Select Update.

g. From the application picker, select the application scope of
the connector.

h. After completing the Update scheduled data import access
activity, select Continue.

d. Enable creating values for the connection by updating the
variable value access.

Note:   This step is required when configuring the connector
for the first time only.

a. Verify that you have edit permissions for the Value
[sys_variable_value] table.

b. In the Prerequisites stage of the playbook, select the Update
variable value access activity.

c. Select Update access.

d. To edit the record, select the Global application scope from
the application picker.

e. In the Application Access related list of the Data Source form,
select the Can create, Can update, and Can delete check
boxes.

f. Select Update.

g. From the application picker, select the application scope of
the connector.

h. After completing the Update variable value access activity,
select Continue.

e. Clear the cache on the Data Source [sys_data_source] table.

Note:   This step is required when configuring the connector
for the first time only.

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

a. In the Prerequisites stage of the playbook, select the Clear
cache activity.

b. Select Run clear cache.

c. In the Run script text box of the background script page,
enter the following script:

GlideTableManager.invalidateTable("sys_data_sou
rce");
GlideCacheManager.flushTable("sys_data_sou
rce");

GlideTableManager.invalidateTable("schedu
led_import_set");
GlideCacheManager.flushTable("scheduled_im
port_set");

GlideTableManager.invalidateTable("sys_va
riable_value");
GlideCacheManager.flushTable("sys_variable
_value");

GlideTableManager.invalidateTable("sys_db
_object");
GlideCacheManager.flushTable("sys_db_objec
t");

d. Select Run Script to run the background script in the global
scope.

The script may take several minutes to execute.

e. After the script is executed, select Close.

f. From the application picker, select the application scope of
the connector.

g. After completing the Clear cache activity, select Continue.

f. Verify that the Event Management application works
properly with the Dynatrace environment by copying
the EvtMgmtImpactManagerMediator script to the Global
application scope.

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

Note:   This step is displayed only when the Observability
Commons for CMDB plugin (sn_observability) is already
installed and is required when configuring the connector for
the first time only.

a. In the Prerequisites stage of the playbook, select the Enable
script access for event management activity.

b. Select Enable script access.

c. Select the Global application scope from the application
picker.

d. From the context menu, select Insert and Stay.

e. Verify that the EvtMgmtlmpactManagerMediator script was
copied to the Global application scope and the Accessible
from field was set to All application scopes.

f. Select Update.

g. From the application picker, select the application scope of
the connector.

h. After completing the Enable script access for event
management activity, select Continue.

6. Enter connection details and test the API connection for importing
Dynatrace data.

a. In the Setup stage of the playbook, select the Create and test
connection activity.

b. On the form, fill in the fields.

Create and test connection form

Field
Description

Connection name
Name to identify the
Dynatrace connection record.

Hostname
Hostname of your Dynatrace
environment.

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

API Key

Dynatrace API Key.

Note:   The API Key
must be prefixed with
api-token.

c. Select Create and test connection.

d. Once the connection test is complete, select Continue.

7. (Optional) Configure the connection and connector properties to
map attributes and manage data imports.

Note:   To skip this step, select Continue for the Set configuration
properties activity.

a. In the Setup stage of the playbook, select the Set configuration
properties activity.

b. Fill in the form.

Configuration properties

Field
Description

Management zone Ids

List of the management
zone IDs to fetch from your
Dynatrace environment. For
multiple entries, separate the
zone IDs with commas.

Management zone names

List of the management
zones to fetch from your
Dynatrace environment. For
multiple entries, separate the
zone names with commas.

Service types

List of the Dynatrace service
types from where to ingest
the data into the CMDB. For

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

Field
Description

multiple entries, separate the
service types with commas.

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

Field
Description

Note:   All service types
except for
DATABASE_SERVICE are
mapped to the
Calculated Application
Service
[cmdb_ci_service_calcula
ted] CMDB table. The
DATABASE_SERVICE
service type is mapped to
the Database Instance
[cmdb_ci_db_instance]
CMDB table.

Valid values are:

•

BACKGROUND_ACTIVI
TY

• CICS_SERVICE

• CUSTOM_SERVICE

• DATABASE_SERVICE

•

ENTERPRISE_SERVICE_B
US_SERVICE

• EXTERNAL

•

IBM_INTEGRATION_BUS
_SERVICE

• IMS_SERVICE

• MESSAGING_SERVICE

•

QUEUE_LISTENER_SERVI
CE

• RMI_SERVICE

• RPC_SERVICE

•

WEB_REQUEST_SERVIC
E

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

Tags

List of the tag names to
fetch from your Dynatrace
environment. For multiple
entries, separate the tags with
commas.

c. To manage data source failures during import, select the Save
REST response as attachment check box to save each response
as an attachment temporarily.

d. Select Continue.

8. (Optional) To enable Dynatrace notifications as events in your
ServiceNow instance, trigger the workflow to create a problem
notification and alerting profile in your Dynatrace environment.

Note:   This step is displayed only when the Observability
Commons for CMDB plugin (sn_observability) is already installed.
To skip this step, select Skip for the Configure observability
activity.

a. In the Setup stage of the playbook, select the Configure
observability activity.

b. Select Create problem notification.

Note:   The created records appear in the Dynatrace
application under the display name ServiceNow default
Problem notification and can be customized.

c. Dismiss any success alerts and select Continue.

9. Configure the import schedule to import data at regular intervals.

a. In the Setup stage of the playbook, select the Configure import
schedule activity.

b. Expand the Parent scheduled data import within the Import
schedules list to select the SGO-Dynatrace Hosts - Connection
Name import schedule.

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

c. Select the Active check box, and then fill in the run schedule and
time details.

For more information, see Schedule a data import.

d. Select Save.
Alternatively, select Execute Now to execute the import schedule
immediately.

e. Select Continue.

10. In the Setup stage of the playbook, select the Confirm connection
creation activity to verify whether the connection was created.

What to do next

Select View all connections to review the connection details. The
created connection appears in the Installed connections list.

Related concepts

• Service Graph Connector for Observability - Dynatrace

Related reference

• CMDB classes targeted in Service Graph Connector for Observability -
Dynatrace

• Service Graph Connector for Observability - Dynatrace properties

## Configure Service Graph Connector for Observability -
## Dynatrace using guided setup

Use the Service Graph Connector for Observability - Dynatrace to ingest
Configuration Management Database (CMDB) data from Dynatrace
using REST APIs. This connector is the second generation of the Service
Graph Connector for Observability - Dynatrace application developed
by ServiceNow.

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
required for event ingestion and will need to be installed prior to
installing the connector for Event Management to work. For more
information, see Observability Commons for CMDB on the ServiceNow
Store.

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

Note:   To access the Dynatrace API, you need an access token with
Read entities (entities.read) scope.

Role required: SGC-Admin (sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to run background scripts and
to provide table-level access to the SGC-Admin user.

Procedure

1. Navigate to All > Service Graph Connectors > Dynatrace
Observability > Setup.

2. On the Getting started page, select Get Started.

3. Set impact values for clusters and have the connector get access to
the SNC.ImpactManager API.

Note:   This step appears when Observability Commons is
installed.

a. On the Setup page, in the Enable Access To SNC.Impact
Manager section, select the Copy Script to Global Scope task.

b. In the Copy Script to Global Scope section, copy the script.

a. Select Configure.

b. Switch to the global scope.

c. Select the Additional actions icon (

).

d. Select Insert and Stay.

e. Select Mark as Complete.

c. In the Verify script is copied properly section, verify the script.

a. Select Configure.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

34

Zurich ServiceNow AI Platform Capabilities

*[Icon Or Small Graphic - Page 34, 74x78px]*

```









..::::::::::::::::::::::::::::..
.##%%%%%%%%%%%%%%%%%%%%%%%%%%%%##:
:%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%:
.:------------------------------:.

.::::::::::::::::::::::::::::::.
:#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#:
:#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%:
..------------------------------.

.=++++++++++++++++++++++++++++++=.
:%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%-
.+*############################*+.









```

---
*Page 35*

b. Select the EvtMgmtImpactManagerMediator script and
verify it was copied to the global scope.

c. In the Accessible from field, ensure it is set to All application
scopes.

d. Select Mark as Complete.

4. Configure the basic setup.

a. On the Setup page, in the Basic section, select the Configure
Auth Token for Dynatrace task.

b. On the next page, in the Configure Auth Token for Dynatrace
section, configure the authentication token.

a. Select Configure.

b. In the API Key field, enter api-token <your api token>.

For example, api-token mytokenid.

c. Select Mark as Complete.

c. In the Configure HTTP Connection for Dynatrace section,
configure the HTTP connection.

a. Select Configure.

b. Update the Host field with a fully qualified hostname for your
Dynatrace instance.

For example, abc123.live.dynatrace.com.

The hostname is automatically filled in the Connection URL
field.

c. Enable the use of a MID Server, select the Use MID Server
check box.

Note:   The HTTP connection will be pre-configured to
use the API key that was configured during the previous
setup task.

d. Select Mark as Complete.

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

d. Test the HTTP connection.

a. In the Test Connection section, select Configure.

b. To test the connection configuration, select Test Connection.

Note:   If any of the tests have errors, follow the
suggestions for remediation.

c. Set the Test Connection task to complete by selecting Mark
as Complete.

e. In the Create Default Notification Payload Template section,
select Configure.

Note:   You need an access token with the following scopes:

• Read configuration (ReadConfig)

• Write configuration (WriteConfig)

• Read log content (LogExport)

• Read metrics (metrics.read)

• Read settings (settings.read)

• Write settings (settings.write)

• Read logs (logs.read)

a. Update the name of the payload template, if needed.

b. Select Problem Notification Setup.

c. Set the Create Default Notification Payload Template task to
complete by selecting Mark as Complete.

f. (Optional) If you want to support multiple instances, in the
Upgrade Source Native Keys section, select Configure.

a. In the Run script text box of the background script page,
enter the following script:

var gr = new GlideRecord("sys_object_source");
gr.addQuery("name", "SGO-Dynatrace");

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

var grOR = gr.addQuery("id", "STARTSWITH", "HOS
T-");
grOR.addOrCondition("id", "STARTSWITH", "PROCES
S_GROUP_INSTANCE-");
grOR.addOrCondition("id", "STARTSWITH", "PROCES
S_GROUP-");
grOR.addOrCondition("id", "STARTSWITH", "SERVIC
E-");
grOR.addOrCondition("id", "STARTSWITH", "APPLIC
ATION-");
gr.query();
while (gr.next()) {
gr.setValue("id", "f379137e075820107add6a77
c4a93538|||" + gr.getValue("id"));
gr.update();
}

b. Select Run Script to run the background script in the global
scope.

The script may take several minutes to execute.

c. After the script is executed, select Close.

d. From the application picker, select the Service Graph
Connector for Observability Dynatrace application.

e. Select Mark as Complete.

5. For a Grail-enabled tenant, configure the OAuth 2.0 client credentials
and test the connection.
For more information on Dynatrace OAuth credentials, see
Authentication for the Account Management API on the Dynatrace
documentation site.

a. Set the Dynatrace Grail status to indicate whether using the Grail-
enabled tenant.

Note:

You can check Grail enablement by contacting your
Dynatrace administrator.

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

a. In the Configure Dynatrace Grail OAuth section of the
Service Graph Connector for Observability Dynatrace Setup
page, select Get Started.

b. For the Set Dynatrace Grail status task, select Configure and
review or modify the property settings for a Grail-enabled
tenant.

c. If you've Grail-enabled tenant, set the Value field of the
grailEnabled property to true.

Else, leave the value set to false.

d. Set the Configure Dynatrace Grail OAuth task to complete
by selecting Mark as Complete.

b. Add a new OAuth connection.

Note:   You need an OAuth token with the following scope
permissions in Grail:

• storage:logs:read

• storage:buckets:read

a. In the Configure OAuth credentials section, select Configure.

b. On the Workflow Studio page that opens in a new browser
tab, select Add Connection.

c. Enter a name, the connection URL, OAuth client ID, and
OAuth client secret details.

d. Select Create and Get OAuth Token.

e. Return to the guided setup page.

f. Set the Configure OAuth credentials task to complete by
selecting Mark as Complete.

c. Test the new OAuth connection.

a. In the Test Connection section, select Configure.

b. To test the connection configuration, select Test Connection.

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

c. When the Status field is set to Success, select Update to close
the Test the connection dialog box and return to the guided
setup page.

If any of the tests have errors, follow the suggestions for
remediation.

d. Set the Test Connection task to complete by selecting Mark
as Complete.

6. Set up the additional configurations.

a. On the Guided setup page, in the Advanced section, select the
Advanced settings task.

b. In the Advanced Settings section, select Configure and review or
modify the existing settings for a custom configuration.
You can configure the following settings:

• Review the page size used in REST API requests to fetch
Dynatrace entities.

• Define number of days a configuration item (CI) can be
inactive before it is ignored.

• Enter the percentage of an application cluster's nodes that
need to be in a state to raise that state to its parent in the
service map.

For example, you can define the percentage of nodes that
need to go critical for the parent of a cluster to be in a
critical state. If there are 10 nodes in a cluster, setting the
property value to 70 would require at least 7 out of the 10
nodes in the cluster to go into a critical state to reflect up to
the parent service of the cluster.

• Enable ingesting events that do not have a matching CI in
the CMDB.

• Enable populating the Application (cmdb_ci_appl) CIs from
Dynatrace (Dynatrace processes) during scheduled imports.

c. Select Save.

d. Select Mark as Complete for the Advanced Settings task.

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

e. Configure connection properties for the Dynatrace connection.

a. In the Configure Instance Settings section, select Configure.

b. In the Service Graph Connection Properties related list,
configure the properties of the connection record.

Dynatrace connection properties

Property
Description

managementZoneNames

Enter the name of the
management zone to
fetch from your Dynatrace
environment. For multiple
entries, separate the zone
names with commas.

tags

Enter the name of the
tags to fetch from your
Dynatrace environment. For
multiple entries, separate the
tags with commas.

serviceTypes

Enter the list of Dynatrace
service types from where
to ingest the data into
CMDB. For multiple entries,
separate the service types
with commas.

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

Property
Description

Note:   All service types
except for
DATABASE_SERVICE are
mapped to the
Calculated Application
Service
[cmdb_ci_service_calcu
lated] CMDB table. The
DATABASE_SERVICE
service type is mapped
to the Database
Instance
[cmdb_ci_db_instance]
CMDB table.

Valid values are:

•

BACKGROUND_ACTI
VITY

• CICS_SERVICE

• CUSTOM_SERVICE

• DATABASE_SERVICE

•

ENTERPRISE_SERVICE
_BUS_SERVICE

• EXTERNAL

•

IBM_INTEGRATION_B
US_SERVICE

• IMS_SERVICE

•

MESSAGING_SERVIC
E

•

QUEUE_LISTENER_SER
VICE

• RMI_SERVICE

• RPC_SERVICE

•

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

Property
Description

managementZoneIds

Enter the management zone
ID to fetch from your
Dynatrace environment. For
multiple entries, separate the
zone IDs with commas.

c. Select Update.

d. Complete the Configure Instance Settings task by selecting
Mark as Complete.

f. Execute the Fix Older Ids fix script to migrate the IDs of the
imported data from the previous format to the latest format of
the object IDs.

Note:   Beginning with the 1.9.0 version of the Service Graph
Connector for Observability - Dynatrace, the latest format of
the object IDs, which is Base64 Encoding, is used for data
import. The Fix Older Ids fix script migrates any existing data
with previous object IDs to the latest format.

g. Configure the notification settings.

The setup enables pulling ITOM events from Dynatrace into the
ServiceNow instance.

a. In the Configure Problem Notification section, select
Configure.

b. To push the configuration to Dynatrace, select Problem
Notification Setup.

c. To receive the configuration from Dynatrace, select Fetch
Notification Setup.

d. Complete the Configure Problem Notification task by
selecting Mark as Complete.

7. Clean up records from the previous instance.

Note:   If you are not migrating from the previous Dynatrace
version, you can skip this step.

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

a. On the Setup page, in the Clean Up Records From Previous
Integration section, select the Execute the New Integration task.

b. On the next page, in the Execute the New Integration section,
select Configure and select Update.

c. Select Mark as Complete.

d. In the Verify Integration Execution Has Completed section, verify
the integration execution.

a. Select Configure.

b. In the State field, wait for the field to change to Complete or
Complete with errors.

It is normal to have errors during the migration from an older
version.

c. To refresh the list, select and hold (or right-click) the header
and select Refresh List.

d. Select Mark as Complete.

e. In the Delete Application Services Left Over From Previous Version
section, select Configure to delete any application services that
you no longer need from the previous integration.

f. Select Mark as Complete.

g. In the Cleanup Identification Remnants - Copy Script section,
copy the script.

a. Select Configure.

b. Change the current scope to Global.

c. Select the menu icon (

).

d. Select Insert and Stay.

e. Select Mark as Complete.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

43

Zurich ServiceNow AI Platform Capabilities

*[Icon Or Small Graphic - Page 43, 74x78px]*

```









..::::::::::::::::::::::::::::..
.##%%%%%%%%%%%%%%%%%%%%%%%%%%%%##:
:%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%:
.:------------------------------:.

.::::::::::::::::::::::::::::::.
:#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#:
:#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%:
..------------------------------.

.=++++++++++++++++++++++++++++++=.
:%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%-
.+*############################*+.









```

---
*Page 44*

h. In the Cleanup Identification Remnants - Execute Script section,
execute the script.

a. Select Configure.

b. Select the record of the script you copied.

c. Select Update.

8. (Optional) Add multiple instances.

Note:   If you do not need to add multiple instances, you can skip
this step.

a. In the Add Multiple Instances section of the Service Graph
Connector for Observability - Dynatrace page, select Get
Started.

b. Update the data source access to create a data source for the
new connection.

a. Ensure that you have edit permissions for the Datasource
[sys_data_source] table.

b. For the Update Data Source Access task, select Configure.

c. To edit the record, select the Global application scope from
the application picker.

d. In the Application Access related list of the Data Source form
that opens in a new tab, select the Can create, Can update,
and Can delete check boxes.

e. Select Update to return to the guided setup page.

f. Select the Service Graph Connector for Observability
Dynatrace application scope from the application picker.

g. Set the Update Data Source Access task to complete by
selecting Mark as Complete.

c. Update the scheduled data import access to create a
scheduled import for the new connection.

a. Ensure that you have edit permissions for the Scheduled data
import [scheduled_import_set] table.

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

b. For the Update Scheduled Data Import Access task, select
Configure.

c. To edit the record, select the Global application scope from
the application picker.

d. In the Application Access related list of the Data Source form
that opens in a new tab, select the Can create, Can update,
and Can delete check boxes.

e. Select Update to return to the guided setup page.

f. Select the Service Graph Connector for Observability
Dynatrace application scope from the application picker.

g. Set the Update Scheduled Data Import Access task to
complete by selecting Mark as Complete.

d. Update the value access to create the data source for the new
connection.

a. Ensure that you have edit permissions for the Value
[sys_variable_value] table.

b. For the Update Value Access task, select Configure.

c. To edit the record, select the Global application scope from
the application picker.

d. In the Application Access related list of the Data Source form
that opens in a new tab, select the Can create, Can update,
and Can delete check boxes.

e. Select Update to return to the guided setup page.

f. Select the Service Graph Connector for Observability
Dynatrace application scope from the application picker.

g. Set the Update Value Access task to complete by selecting
Mark as Complete.

e. Clear the data source and import set cache for the new
connection.

a. For the Clear Cache for Datasource and Import set task,
select Configure.

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

b. In the Run script text box of the background script page,
enter the following script:

GlideTableManager.invalidateTable("sys_da
ta_source");
GlideCacheManager.flushTable("sys_data_sou
rce");

GlideTableManager.invalidateTable("schedu
led_import_set");
GlideCacheManager.flushTable("scheduled_im
port_set");

GlideTableManager.invalidateTable("sys_va
riable_value");
GlideCacheManager.flushTable("sys_variable
_value");

GlideTableManager.invalidateTable("sys_db
_object");
GlideCacheManager.flushTable("sys_db_objec
t");

c. Select Run Script to run the background script in the global
scope.

The script may take several minutes to execute.

d. After the script is executed, select Close.

e. Select the Service Graph Connector for Observability
Dynatrace application scope from the application picker.

f. Set the Clear Cache for Datasource and Import set task to
complete by selecting Mark as Complete.

f. Add another connection.

a. Ensure that the application scope is set to Service Graph
Connector for Observability in the application picker.

b. For the Add Another Connection task, select Configure.

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

c. On the Workflow Studio page that opens in a new browser
tab, select Add Connection.

d. On the form, fill in the fields.

Connection form

Field
Description

Connection Name
Display name for the
connection.

Connection Hostname
Host name of the Dynatrace
instance.

API Key

Dynatrace API Key.

Note:   The API Key must
be prefixed with api-
token.

e. Select Create Connection.

f. Return to the guided setup page.

g. Set the Add Another Connection task to complete by
selecting Mark as Complete.

g. If using a Grail-enabled tenant, configure additional OAuth 2.0
connections.

a. For the Add another OAuth connection task, select
Configure.

b. On the Workflow Studio page that opens in a new browser
tab, select Add Connection.

c. Enter a name, the connection URL, OAuth client ID, and
OAuth client secret details.

d. Select Create and Get OAuth Token.

e. Return to the guided setup page.

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

f. Set the Add another OAuth connection task to complete by
selecting Mark as Complete.

h. If using a Grail-enabled tenant, select the OAuth 2.0 client
credentials alias created earlier in the Add another OAuth
connection task.

a. For the Link connection record with OAuth client credentials
task, select Configure.

b. In the OAuth 2.0 Connection and Credentials Alias field,
search for and select the OAuth connection alias you
created in the step 8.g.

c. In the Service Graph connection record, search for and
select the connection record you created in step 8.f.

d. Select Submit.

e. Return to the guided setup page.

f. Set the Link connection record with OAuth client credentials
task to complete by selecting Mark as Complete.

i. (Optional) Set up the MID Server for the connection you created.

a. For the Configure Mid Servers task, select Configure.

b. Select the name of the connection you created.

c. Select the Use MID server check box.

d. Select Update.

e. Set the Configure Mid Servers task to complete by selecting
Mark as Complete.

j. Configure the instance settings.

a. In the Configure Instances section, select Configure.

b. Select the name of the connection you want to configure
and then select Update.

c. Set the Configure Instances task to complete by selecting
Mark as Complete.

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

k. Test the new connections.

a. For the Test Connections task, select Configure.

b. Select the name of the connection you want to test.

c. To validate the data source configuration, select Test Load 20
Records.

d. When the Status field is set to Success, select Update to close
the Test the connection dialog box and return to the guided
setup page.

If any of the tests have errors, follow the suggestions for
remediation.

e. Set the Test Connections task to complete by selecting Mark
as Complete.

l. Create default notification payload templates.

a. Ensure that you have the access token with the following
scopes:

• Read configuration (ReadConfig)

• Write configuration (WriteConfig)

• Read log content (LogExport)

• Read metrics (metrics.read)

b. For the Create Default Notification Payload Templates task,
select Configure.

c. Select the connection you want to create a default
notification payload template for.

d. Update the name of the payload template, if needed.

e. Select Problem Notification Setup.
The notification is created with the payload parameters as
described in the following table.

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

Notification payload paramters

Parameter
Description

name

Name of the notification.
The name is automatically
prefixed with ServiceNow
Default Problem
Notification and the
instance name is added to
it.

alertingProfile
ID of the alerting profile in
Dynatrace.

type

Type of payload that
is automatically set to
webhook.

url

Webhook URL in
the format https://
https://<instance
name>.service-
now.com/ /api/
sn_em_connector/em/
inbound_event?
source=SGO-Dynatrace.

payload

Custom payload created for
notification in the following
format:

{

"ImpactedEntities":
{ImpactedEntities},

"ImpactedEntity": "{
ImpactedEntity}",

"PID": "{PID}",

"ProblemDetailsHTML"

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

Parameter
Description

: "{ProblemDetailsHTML
}",

"ProblemDetailsJSON"
: {ProblemDetailsJSON}
,

"ProblemDetailsMarkd
own": "{ProblemDetails
Markdown}",

"ProblemDetailsText"
: "{ProblemDetailsText
}",

"ProblemID": "{Probl
emID}",

"ProblemImpact": "{P
roblemImpact}",

"ProblemSeverity": "
{ProblemSeverity}",

"ProblemTitle": "{Pr
oblemTitle}",

"ProblemURL": "{Prob
lemURL}",

"State": "{State}"
,

"Tags": "{Tags}"

}

f. Repeat the steps for each connection.

g. Set the Create Default Notification Payload Templates task to
complete by selecting Mark as Complete.

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

9. Set up scheduled import jobs.

a. In the Set up scheduled import jobs section of the Service
Graph Connector for Observability - Dynatrace page, select Get
Started.

b. For the Configure the scheduled import jobs task, select
Configure.

c. Select the name of the scheduled import you want to run.

d. On the Scheduled Data Import form, verify the field values for the
scheduled job and select the Active check box.

For more information, see Schedule a data import.

e. Select Update.

f. Set the Set up scheduled import jobs task to complete by
selecting Mark as Complete.

## CMDB classes targeted in Service Graph Connector for
## Observability - Dynatrace

When you complete setting up the connection, you can configure the
integration to periodically pull data from Dynatrace. The data is saved in
tables that extend from the Configuration item [cmdb_ci] table.

Application [cmdb_ci_appl]

The following attributes in the Application [cmdb_ci_appl] table are
populated by collected data.

Attribute label
Attribute name

Class
sys_class_name

Configuration file
config_file

Installation directory
install_directory

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

Name
name

Operational status
operational_status

Running process command
running_process_command

Running process key parameters
running_process key parameters

Version
version

Relationships created for Application

Parent class
Relationship type
Child class

Application
[cmdb_ci_appl]
Runs on::Runs
Computer
[cmdb_ci_computer]

Application
[cmdb_ci_appl]
Runs on::Runs

Docker Container
[cmdb_ci_docker_con
tainer]

Application
[cmdb_ci_appl]
Reference
Key value
[cmdb_key_value]

Note:   Based on the Discovery Process Classifications
list, the tables that extend the Application [cmdb_ci_appl]
table are populated by the SGO-Dynatrace Processes
[sn_dynatrace_integ_sg_dynatrace_processes] data source.

Availability Zone [cmdb_ci_availability_zone]

The following attributes in the Availability Zone
[cmdb_ci_availability_zone] table are populated by collected data.

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

53

Zurich ServiceNow AI Platform Capabilities

---
*Page 54*

Attribute label
Attribute name

Object ID
object_id

AWS Datacenter [cmdb_ci_aws_datacenter]

The following attributes in the AWS Datacenter
[cmdb_ci_aws_datacenter] table are populated by collected data.

Attribute label
Attribute name

Name
name

Object ID
object_id

Region
region

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

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Contains::Contained
by

Availability Zone
[cmdb_ci_availability_
zone]

Azure Datacenter [cmdb_ci_azure_datacenter]

The following attributes in the Azure Datacenter
[cmdb_ci_azure_datacenter] table are populated by collected data.

Attribute label
Attribute name

Install Status
install_status

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

Object ID
object_id

Region
region

Relationship created for Azure Datacenter

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

Calculated Application Service [cmdb_ci_service_calculated]

The following attributes in the Calculated Application Service
[cmdb_ci_service_calculated] table are populated by collected data.

Attribute label
Attribute name

Comments
comments

Correlation ID
correlation_id

Hide from dashboard
hide_from_dashboard

Metadata
metadata

Name
name

Operational status
operational_status

Service Populator
service_populator

Service Populator Status
populator_status

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

Attribute label
Attribute name

Service Type
type

Note:   The Comments attribute includes the following information:

• Service Type

• Edition

• TCP Port

Relationships created for Calculated Application Service

Parent class
Relationship type
Child class

Calculated
Application Service
[cmdb_ci_service_cal
culated]

Depends on::Used by
Configuration Item
[cmdb_ci]

Calculated
Application Service
[cmdb_ci_service_cal
culated]

Runs on::Runs
Computer
[cmdb_ci_computer]

Calculated
Application Service
[cmdb_ci_service_cal
culated]

Contains::Contained
by

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Calculated
Application Service
[cmdb_ci_service_cal
culated]

Contains::Contained
by

Group
[cmdb_ci_group]

Calculated
Application Service
[cmdb_ci_service_cal
culated]

Reference
Key value
[cmdb_key_value]

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

State
state

TCP port(s)
tcp_port

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

AWS Datacenter
[cmdb_ci_aws_datac
enter]

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

Cloud Function [cmdb_ci_cloud_function]

The following attributes in the Cloud Function [cmdb_ci_cloud_function]
table are populated by collected data.

Attribute label
Attribute name

Code Size
code_size

Fully qualified domain name
fqdn

Install Status
install_status

Language
language

Name
name

Object ID
object_id

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

Azure Datacenter
[cmdb_ci_azure_data
center]

Cloud Function
[cmdb_ci_cloud_funct
ion]

Reference
Key Value
[cmdb_key_value]

Cloud Hardware Type [cmdb_ci_cloud_hardware_type]

The following attributes in the Cloud Hardware Type
[cmdb_ci_cloud_hardware_type] table are populated by collected
data.

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

Name
name

Object ID
object_id

Provider
provider

Relationship created for Cloud Hardware Type

Parent class
Relationship type
Child class

Cloud Hardware Type
[cmdb_ci_cloud_hard
ware_type]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Cloud LB IPAddress [cmdb_ci_cloud_lb_ipaddress]

The following attributes in the Cloud LB IPAddress
[cmdb_ci_cloud_lb_ipaddress] table are populated by collected data.

Attribute label
Attribute name

Install Status
install_status

Name
name

Object ID
object_id

Cloud Load Balancer [cmdb_ci_cloud_load_balancer]

The following attributes in the Cloud Load Balancer
[cmdb_ci_cloud_load_balancer] table are populated by collected data.

Attribute label
Attribute name

Install Status
install_status

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

Name
name

Object ID
object_id

Operational status
operational_status

Relationships created for Cloud Load Balancer

Parent class
Relationship type
Child class

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

Owns::Owned by

Cloud LB IPAddress
[cmdb_ci_cloud_lb_ip
address]

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

Reference
Key Value
[cmdb_key_value]

Cloud Object Storage [cmdb_ci_cloud_object_storage]

The following attributes in the Cloud Object Storage
[cmdb_ci_cloud_object_storage] table are populated by collected
data.

Attribute label
Attribute name

Cloud Provider
cloud_provider

Install Status
install_status

Name
name

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

Attribute label
Attribute name

Object ID
object_id

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

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Cloud Object Storage
[cmdb_ci_cloud_obje
ct_storage]

Reference
Key Value
[cmdb_key_value]

Cloud Resource [cmdb_ci_cmp_resource]

The following attributes in the Cloud Resource [cmdb_ci_cmp_resource]
table are populated by collected data.

Attribute label
Attribute name

Install Status
install_status

Name
name

Object ID
object_id

Relationships created for Cloud Resource

Parent class
Relationship type
Child class

Cloud Resource
[cmdb_ci_cmp_resour
ce]

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

61

Zurich ServiceNow AI Platform Capabilities

---
*Page 62*

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
data.

Attribute label
Attribute name

Account Id
account_id

Datacenter Type
datacenter_type

Install Status
install_status

Name
name

Object ID
object_id

Operational status
operational_status

Cloud Storage Account [cmdb_ci_cloud_storage_account]

The following attributes in the Cloud Storage Account
[cmdb_ci_cloud_storage_account] table are populated by collected
data.

Attribute label
Attribute name

Name
name

Install Status
install_status

Object ID
object_id

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

Sku Name
sku_name

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

Computer [cmdb_ci_computer]

The following attributes in the Computer [cmdb_ci_computer] table are
populated by collected data.

Attribute label
Attribute name

Class
sys_class_name

CPU core count
cpu_core_count

DNS Domain
dns_domain

Fully qualified domain name
fqdn

Is Virtual
virtual

Name
name

Operating System
os

OS Version
os_version

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

Attribute label
Attribute name

RAM (MB)
ram

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
Reference
Key Value
[cmdb_key_value]

Computer
[cmdb_ci_computer]
Reference
Software Installation
[cmdb_sam_sw_install]

Docker Container [cmdb_ci_docker_container]

The following attributes in the Docker Container
[cmdb_ci_docker_container] table are populated by collected data.

Attribute label
Attribute name

Container id
container_id

Install Status
install_status

Name
name

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

Note:   The Install Status value is based on the value of the
properties.containerStatus.state field in the incoming payload.

• If the properties.containerStatus.state value is running, the Install
Status value is set to 1 (Installed).

• If the properties.containerStatus.state value is terminated or is
empty, or if there are any errors, the Install Status value is set to
7 (Retired).

• For all other properties.containerStatus.state values, the Install
Status value isn't updated.

Docker Image [cmdb_ci_docker_image]

The following attributes in the Docker Image [cmdb_ci_docker_image]
table are populated by collected data.

Attribute label
Attribute name

Image id
image_id

Image digest
image_digest

Name
name

Relationship created for Docker Image

Parent class
Relationship type
Child class

Docker Image
[cmdb_ci_docker_ima
ge]

Instantiates::Instantiate
d by

Docker Container
[cmdb_ci_docker_con
tainer]

DynamoDB Table [cmdb_ci_dynamodb_table]

The following attributes in the DynamoDB Table
[cmdb_ci_dynamodb_table] table are populated by collected data.

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

Attribute label
Attribute name

Name
name

Install Status
install_status

Object ID
object_id

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
Key Value
[cmdb_key_value]

Group [cmdb_ci_group]

The following attribute in the Group [cmdb_ci_group] table is populated
by collected data.

Attribute label
Attribute name

Name
name

Relationship created for Group

Parent class
Relationship type
Child class

Group
[cmdb_ci_group]

Contains::Contained
by

Application
[cmdb_ci_appl]

Hardware Type [cmdb_ci_compute_template]

The following attributes in the Hardware Type
[cmdb_ci_compute_template] table are populated by collected data.

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

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Image [cmdb_ci_os_template]

The following attributes in the Image [cmdb_ci_os_template] table are
populated by collected data.

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

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Instance Scale Set [cmdb_ci_instance_scale_set]

The following attributes in the Instance Scale Set
[cmdb_ci_instance_scale_set] table are populated by collected data.

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

Attribute label
Attribute name

Name
name

Install Status
install_status

Object ID
object_id

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

Reference
Key Value
[cmdb_key_value]

IP Address [cmdb_ci_ip_address]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data.

Attribute label
Attribute name

IP Address
ip_address

IP version
ip_version

Name
name

Key value [cmdb_key_value]

The following attributes in the Key value [cmdb_key_value] table are
populated by collected data.

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

Install Status
install_status

Name
name

Relationships created for Kubernetes Cluster

Parent class
Relationship type
Child class

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

Cluster of::Cluster

Kubernetes Node
[cmdb_ci_kubernetes_
node]

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

Kubernetes Pod
[cmdb_ci_kubernetes_
pod]

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

Kubernetes Namespace [cmdb_ci_kubernetes_namespace]

The following attributes in the Kubernetes Namespace
[cmdb_ci_kubernetes_namespace] table are populated by collected
data.

Attribute label
Attribute name

Install Status
install_status

Kubernetes UID
k8s_uid

Name
name

Kubernetes Node [cmdb_ci_kubernetes_node]

The following attributes in the Kubernetes Node
[cmdb_ci_kubernetes_node] table are populated by collected data.

Attribute label
Attribute name

Install Status
install_status

Kubernetes UID
k8s_uid

Name
name

Kubernetes Pod [cmdb_ci_kubernetes_pod]

The following attributes in the Kubernetes Pod
[cmdb_ci_kubernetes_pod] table are populated by collected data.

Attribute label
Attribute name

Install Status
install_status

Kubernetes UID
k8s_uid

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

Name
name

Namespace
namespace

Relationships created for Kubernetes Pod

Parent class
Relationship type
Child class

Kubernetes Pod
[cmdb_ci_kubernetes_
pod]

Runs on::Runs

Kubernetes Node
[cmdb_ci_kubernetes_
node]

Kubernetes Pod
[cmdb_ci_kubernetes_
pod]

Contains::Contained
by

Docker Container
[cmdb_ci_docker_con
tainer]

Kubernetes Service [cmdb_ci_kubernetes_service]

The following attributes in the Kubernetes Service
[cmdb_ci_kubernetes_service] table are populated by collected data.

Attribute label
Attribute name

Install Status
install_status

Kubernetes UID
k8s_uid

Name
name

Namespace
namespace

Server [cmdb_ci_server]

The following attributes in the Server [cmdb_ci_server] table are
populated by collected data.

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

Attribute label
Attribute name

DNS Domain
dns_domain

Fully qualified domain name
fqdn

Is Virtual
virtual

Name
name

Object ID
object_id

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
[cmdb_ci_vm_instanc
e]

Server
[cmdb_ci_server]
Reference
Key Value
[cmdb_key_value]

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

Discovery source
discovery_source

Display name
display_name

Version
version

Software Instance [cmdb_software_instance]

The following attributes in the Software Instance
[cmdb_software_instance] table are populated by collected data.

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
Computer
[cmdb_ci_computer]

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

Virtual Machine Instance [cmdb_ci_vm_instance]

The following attributes in the Virtual Machine Instance
[cmdb_ci_vm_instance] table are populated by collected data.

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

Cloud Hardware Type
[cmdb_ci_cloud_hard
ware_type]

Virtual Machine
Instance

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

74

Zurich ServiceNow AI Platform Capabilities

---
*Page 75*

Parent class
Relationship type
Child class

[cmdb_ci_vm_instanc
e]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Reference
Key Value
[cmdb_key_value]

## Set up push notifications from Dynatrace

Set up push notifications of events from Dynatrace into a ServiceNow
instance that has the Service Graph Connector for Observability -
Dynatrace installed.

Before you begin

If you don't have an alerting profile in Dynatrace, then complete the
following steps to create one:

1. Navigate to Settings > Alerting > Alerting Profiles.

2. Set up an alerting profile according to your business needs.

Note:   For more information about how to set up an alerting
profile, see Alerting profiles on the Dynatrace documentation
site.

You must have Observability Commons for CMDB installed.

Role required: admin

Procedure

1. In the Dynatrace instance, navigate to Settings > Integration >
Problem notifications.

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

2. Click Add Notification.

3. On the form, fill in the fields.

Field
Value

N
o
t
i
f
i
c
a
t
i
o
n
T
y
p
e

Custom Integration

D
i
s
p
l
a
y
N
a
m
e

Name of the notification

W
e
b
h
o
o
k
U

Use the following URL: https://<name_of_your_servicenow_instance_name> /api/sn_em_
inbound_event?source=SGO-Dynatrace

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

Field
Value

R
L

A
d
d
i
t
i
o
n
a
l
H
T
T
P
H
e
a
d
e
r
s
>
C
r
e
a
t
e
b
a
s
i
c
a
u
t
h
o
r

a. In the ServiceNow instance, set a password for the pre-created Dynatrace API user by doing

a. Navigate to System Security > Users.

b. Select the Dynatrace API user.

c. Set the Password field with a new password.

d. Clear the Password needs reset check box.

e. Update or save the user.

b. Set the Username field to DynatraceAPI.

c. Set the Password field to the password that you had created.

d. Click Add.

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

Field
Value

i
z
a
t
i
o
n

C
u
s
t
o
m
P
a
y
l
o
a
d

Use the following payload:

{
"connectionId": <connections_alias_sys_id>,
"ImpactedEntities": {ImpactedEntities},
"ImpactedEntity": "{ImpactedEntity}",
"PID": "{PID}",
"ProblemDetailsHTML": "{ProblemDetailsHTML}",
"ProblemDetailsJSONv2": {ProblemDetailsJSONv2},
"ProblemDetailsMarkdown": "{ProblemDetailsMarkdown}",
"ProblemDetailsText": "{ProblemDetailsText}",
"ProblemID": "{ProblemID}",
"ProblemImpact": "{ProblemImpact}",
"ProblemSeverity": "{ProblemSeverity}",
"ProblemTitle": "{ProblemTitle}",
"ProblemURL": "{ProblemURL}",
"State": "{State}",
"Tags": "{Tags}"
}

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

Field
Value

Note:   For the <connections_alias_sys_id>:

a. Navigate to All > IntegrationHub > Connection & Credentials > Connection & Credential

b. Select to open the connector for which you want to get the <connections_alias_sys_id>

c. Right-click the context menu (

) and then select Copy sys_id.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

79

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 79, 3456x1768px]*

```
%#####%%%%%#*#########*########********####*++******######*#
##**#######: ........... ..  ..                 ........ .-:
###%%%%%%%#.  .                .
######%%%%#.  .                ..         .
###########.                   ..          ...
###########. .......           ......     .........
###**####%#.  ..               ..         ......
###########.                   ..         .....
%%###%%%#%#.                   .....      .....
%%%%%%%%%%#.                   .....      ....... .
######%%%%#.
###%%%%%%%#.
%%%%####%%#.
###########.
####%%%%%%#.
```

*[Diagram Or Flowchart - Page 79, 3426x1746px]*

```
*+++**#*#*****************+++***+**++*******++++++++*******=
..   .:................................ ...............
.    .............................. ............
....     .......                     ..........
..                                   ......

...                                  ......
..
....
....
::
.       ...



```

---
*Page 80*

Field
Value

A
l
e
r
t
i
n
g
P
r
o
f
i
l
e

Select the alerting profile created in the Before you begin section or another alerting profile.

S
e
n
d
i
n
g
T
e
s
t
N
o
t
i
f
i
c
a
t
i
o
n
s

Click to send a test notification, and verify that the response status is 200.

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

## Service Graph Connector for Observability - Dynatrace
## properties

Service Graph Connector for Observability - Dynatrace properties control
the behavior of the connector.

Connection properties

These connection properties are available for Service Graph Connector
for Observability - Dynatrace.

Note:   To open the Service Graph Connection Properties
[sn_cmdb_int_util_service_graph_connection_property] table for the
connector, navigate to All > Service Graph Connectors > Dynatrace
Observability > Connections and select the connection name.
The connection properties are displayed in the Service Graph
Connection Properties related list.

Connection properties for Service Graph Connector for
Observability - Dynatrace

Property
Description

managementZoneIds

Enter a list of management zone
IDs to fetch from Dynatrace. For
multiple entries, separate the IDs
with commas.

managementZoneNames

Enter a list of management
zones to fetch from Dynatrace.
For multiple entries, separate the
names with commas.

tags

Enter a list of tags to fetch from
Dynatrace. For multiple entries,
separate the tags with commas.

grailEnabled
Set the property to true for a
Grail-enabled tenant.

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

Property
Description

OAuth Connection

View the Sys ID of the OAuth
connection and credential alias
linked to the Service Graph
connection record.

serviceTypes

Enter a list of Dynatrace service
types from where to ingest the
data into CMDB. For multiple
entries, separate the service types
with commas.

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

Property
Description

Note:   All service types except
for DATABASE_SERVICE are
mapped to the Calculated
Application Service
[cmdb_ci_service_calculated]
CMDB table. The
DATABASE_SERVICE service
type is mapped to
the Database Instance
[cmdb_ci_db_instance] CMDB
table.

Valid values are:

• BACKGROUND_ACTIVITY

• CICS_SERVICE

• CUSTOM_SERVICE

• DATABASE_SERVICE

•

ENTERPRISE_SERVICE_BUS_SE
RVICE

• EXTERNAL

•

IBM_INTEGRATION_BUS_SERVI
CE

• IMS_SERVICE

• MESSAGING_SERVICE

• QUEUE_LISTENER_SERVICE

• RMI_SERVICE

• RPC_SERVICE

• WEB_REQUEST_SERVICE

• WEB_SERVICE

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

Property
Description

saveRESTResponseAsAttachment

Set the property to true to use
the SGO-Dynatrace Fetch Entities
For Larger Payload action flow and
save the response from Dynatrace
as an attachment with a .json
extension.

Set the property to false to
use the dedicated action flow
and consume the response from
Dynatrace as a data stream for
processing.

• Type: true | false

• Default value: false

System properties

These system properties are available for Service Graph Connector for
Observability - Dynatrace.

Note:   To open the System Properties [sys_properties] table, enter
sys_properties.list in the navigation filter.

System properties for Service Graph Connector for Observability -
Dynatrace

Property
Description

sn_dynatrace_integ.critical_cluster
_threshold

Enter the percentage of an
application cluster's nodes that
need to be in a state to raise that
state to its parent in the service
map.

• Type: integer

• Default value: 75

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

Property
Description

• Location: System Property
[sys_properties] table

sn_dynatrace_integ.default_from_
value_days

Enter the number of days a
configuration item (CI) can be
inactive before it is ignored.

• Type: integer

• Default value: 300

• Location: System Property
[sys_properties] table

sn_dynatrace_integ.events_for_un
matched_ci.enabled

Set the property to true to ingest
events that don't have a matching
CI in CMDB.

• Type: true | false

• Default value: false

• Location: System Property
[sys_properties] table

sn_dynatrace_integ.page_size

Enter the page size used in
REST requests to fetch Dynatrace
entities.

• Type: integer

• Default value: 50

• Location: System Property
[sys_properties] table

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

Property
Description

sn_dynatrace_integ.populate_app
lications

Set the property to true
to populate the Application
[cmdb_ci_appl] CIs from
Dynatrace processes. Set the
property to false to ignore the
Application [cmdb_ci_appl] CIs.

• Type: true | false

• Default value: false

• Location: System Property
[sys_properties] table

Note:   This property is
read via scheduled imports.
The manual execution of
the SGO-Dynatrace Processes
and SGO-Dynatrace Process
Groups data sources will not
consider this property.

sn_dynatrace_integ.createUnmatc
hedApplicationCIs

Set the property to true to
add unclassified processes to the
Application [cmdb_ci_appl] table.
Set the property to false to ignore
unclassified processes.

• Type: true | false

• Default value: true

• Location: System Property
[sys_properties] table

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

Property
Description

Note:   Classified processes are
added to the corresponding
child application classes in the
Application [cmdb_ci_appl]
table regardless of the value
of this property.

## Accessing the connection details of Service Graph
## Connector for Observability - Dynatrace

You can access the connection details of the Service Graph Connector
for Observability - Dynatrace in a single view using the common
connection framework (CCF) included within the Integration Commons
for CMDB (sn_cmdb_int_util) store app.

With the CCF, you can access all the connections used by the Service
Graph Connector for Observability - Dynatrace. The connection details
include the connection alias, connection properties, data sources, and
scheduled data imports associated with a connection. You can also test
the connection.

Access the details of a Dynatrace connection

Access the details of a Dynatrace connection configured for the Service
Graph Connector for Observability - Dynatrace.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > Dynatrace
Observability > Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

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

3. On the Service Graph Connections page, view the connection
details such as the connection name, alias, and data sources.

4. Select a related list to view further details of the connection.

5. (Optional) Select the Test Connection related link to test the
connection.

Related concepts

• Accessing the connection details of Service Graph Connectors

Related reference

• Service Graph Connector for Observability - Dynatrace properties

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

88

Zurich ServiceNow AI Platform Capabilities

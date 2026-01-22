# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_aws_2026-01-16-13-07-10

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_aws_2026-01-16-13-07-10.pdf*

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

## Service Graph Connector for AWS

Use the Service Graph Connector for AWS to securely bring in Amazon
Web Services (AWS) data into your ServiceNow instance.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

The integration uses AWS native technologies and AWS security best
practices to enable cloud teams to connect the data within their
ServiceNow workflow. For more information about the Service Graph
Connector for AWS, see the Service Graph Connector for AWS -
Introduction article on the ServiceNow Community site.

Supported ServiceNow versions

• Xanadu

• Yokohama

• Zurich

Use cases

The following are examples on how you can use the Service Graph
Connector for different ServiceNow applications:

• Visibility into cloud resources, relationships, and state in real time.

• Deep discovery of applications for ITAM or SAM outcomes.

• Governance and compliance outcome.

Important information for upgrading Service Graph Connector for
AWS

Before you begin the upgrade process, complete the following tasks:

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

• If there are any customizations, delete the records associated with
the Service Graph Connector for AWS from the Customer Updates
[sys_update_xml] table. See Customer Updates table.

• Upgrade any dependencies.

After you've installed the latest version of the Service Graph Connector
for AWS:

• Perform a full import of data from your AWS instance. Verify that the Use
last run datetime field value is cleared for all the AWS data sources in
the Data Source [sys_data_source] table.

• Download and rerun the AWS scripts. See Configure the AWS
environment.

Configuring a connection for the connector

You can configure a connection for the connector by using the
SGC Central view in the CMDB Workspace. The view enables you to
discover and install connectors, and then effectively manage the full life
cycle of creating, editing, monitoring, and debugging connections. To
configure the connector using SGC Central, see Configure Service Graph
Connector for AWS using SGC Central.

Important:   Unless there are configuration issues, use the SGC
Central view in the CMDB Workspace to configure the connection
for the connector, as the guided setup method is being deprecated.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration,
or a specific integration run. For more details about monitoring AWS
integrations in the CMDB Integrations Dashboard, see Using the CMDB
Integrations Dashboard.

Data mapping

Data from the AWS data sources is mapped and transformed into the
ServiceNow CMDB Configuration Item (CI) class definitions using the

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

Robust Transform Engine (RTE). Data is inserted into the ServiceNow CMDB
using the Identification and Reconciliation Engine (IRE).

Note:   If the Use last run datetime field for an AWS data source in the
Data Source [sys_data_source] table is empty, the connector imports
all available initial data. If the Use last run datetime field includes a
date stamp, the connector imports incremental data that has been
newly added since the previous run.

The following table lists the import schedule order, the data sources and
import schedules of the same name, the staging tables, the target tables
as CMDB CI classes, the import schedule requirement type, and the
import schedule dependencies for AWS.

Data mapping for AWS

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

1

SG-AWS-
Organizati
on

SG-AWS-
Organizati
on
[sn_aws_in
teg_sg_a
ws_organi
zation]

Cloud
Organizati
ons

Required
None

2
SG-AWS-
Org-Units

SG-AWS-
Org-Units
[sn_aws_in
teg_sg_a
ws_org_un
its]

AWS
Organizati
onal Unit

Optional

SG-AWS-
Organizati
on

3

SG-AWS-
Service-
Account

SG-AWS-
Service-
Account
[sn_aws_in
teg_sg_a

Cloud
Service
Account

Required

SG-AWS-
Organizati
on

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

ws_service
_account]

Cloud
Organizati
ons

Key Value

4

SG-AWS-
Service-
Account-
Tags

SG-AWS-
Service-
Account-
Tags
[sn_aws_in
teg_sg_a
ws_service
_account_
tags]

Cloud
Service
Account

Key Value

Optional

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

5

SG-AWS-
Org-Unit-
Accounts

SG-AWS-
Org-Unit-
Accounts
[sn_aws_in
teg_sg_a
ws_org_un
it_accoun
ts]

Cloud
Service
Account

Optional

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

6

SG-AWS-
Datacent
ers

SG-AWS-
Datacent
ers
[sn_aws_in
teg_sg_a
ws_datac
enters]

Cloud
Service
Account

AWS
Datacent
er

Required

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

7
SG-AWS-
VPC

SG-AWS-
VPC
[sn_aws_in
teg_sg_a
ws_vpc]

Cloud
Service
Account

Cloud
Network

AWS
Datacent
er

Key Value

SG-AWS
Extension
Attributes

Required

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

8
SG-AWS-
Subnets

SG-AWS-
Subnets
[sn_aws_in
teg_sg_a
ws_subnet
s]

Availabilit
y Zone

Cloud
Network

Cloud
Subnet

AWS
Datacent
er

Key Value

Required

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

SG-AWS-
VPC

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

SG-AWS
Extension
Attributes

9

SG-AWS-
Network-
Interface

SG-AWS-
Network-
Interface
[sn_aws_in
teg_sg_a
ws_networ
k_interfac
e]

Cloud
Network

Cloud
Subnet

Cloud
Mgmt
Network
Interface

AWS
Datacent
er

Key Value

SG-AWS
Extension
Attributes

Required
for a
virtual
machine
(VM)
instance

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

SG-AWS-
VPC

10

SG-AWS-
Security-
Group

SG-AWS-
Security-
Group
[sn_aws_in
teg_sg_a
ws_securit
y_group]

Cloud
Network

Compute
Security
Group

Required
for a VM
instance

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

AWS
Datacent
er

Key Value

SG-AWS
Extension
Attributes

SG-AWS-
Datacent
ers

SG-AWS-
VPC

11

SG-AWS-
Storage-
Volume

SG-AWS-
Storage-
Volume
[sn_aws_in
teg_sg_a
ws_storag
e_volume]

Storage
Volume

Storage
Volume
Snapshot

AWS
Datacent
er

Key Value

SG-AWS
Extension
Attributes

Required
for a VM
instance

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

SG-AWS-
VPC

12

SG-AWS-
Image-
Private

SG-AWS-
Image
[sn_aws_in
teg_sg_a
ws_image
]

Image

Required
for a VM
instance

SG-AWS-
Organizati
on

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

SG-AWS-
VPC

13
SG-AWS-
Image-Id

SG-AWS-
Image-Id
[sn_aws_in
teg_sg_a
ws_image
_id]

Image

Required
for a VM
instance

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

SG-AWS-
VPC

14

SG-AWS-
Hardware-
Type

SG-AWS-
Hardware-
Type
[sn_aws_in
teg_sg_a
ws_hardw
are_type]

Hardware
Type

Required
for a VM
instance

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

AWS
Datacent
er

SG-AWS-
Datacent
ers

SG-AWS-
VPC

15
SG-AWS-
EC2

SG-AWS-
EC2
[sn_aws_in
teg_sg_a
ws_ec2]

Virtual
Machine
Instance

The
following
CIs are
populated
when
populatin
g the
Virtual
Machine
Instance
CI:

Server

VNIC
Endpoint

Storage
Mapping

Block
Endpoint

Optional

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

SG-AWS-
VPC

SG-AWS-
Subnets

SG-AWS-
Network-
Interface

SG-AWS-
Hardware-
Type

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

IP Address

Network
Adapter

Key Value

SG-AWS-
Security-
Group

SG-AWS-
Storage-
Volume

SG-AWS-
Image-
Private

SG-AWS-
Image-Id

16
SG-AWS-
ELB-V1

SG-AWS-
ELB-V1
[sn_aws_in
teg_sg_a
ws_elb_v1
]

Cloud
Load
Balancer

Compute
Security
Group

Availabilit
y Zone

AWS
Datacent
er

Key Value

Optional

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

SG-AWS
Extension
Attributes

17
SG-AWS-
ELB-V2

SG-AWS-
ELB-V2
[sn_aws_in
teg_sg_a
ws_elb_v2
]

Cloud
Load
Balancer

Compute
Security
Group

Availabilit
y Zone

AWS
Datacent
er

Key Value

SG-AWS
Extension
Attributes

Optional

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

18
SG-AWS-
RDS

SG-AWS-
RDS
[sn_aws_in
teg_sg_a
ws_rds]

Cloud
DataBase

AWS
Datacent
er

Optional

SG-AWS-
Organizati
on

SG-AWS-
Service-
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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

Key Value

SG-AWS
Extension
Attributes

SG-AWS-
Datacent
ers

19

SG-AWS-
API-
Gateway

SG-AWS-
API-
Gateway
[sn_aws_in
teg_sg_a
ws_api_ga
teway]

Cloud
Gateway
[cmdb_ci_
cloud_gat
eway]

AWS
Datacent
er

Key Value

SG-AWS
Extension
Attributes

Optional

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

20
SG-AWS-
Lambda

SG-AWS-
Lambda
[sn_aws_in
teg_sg_a
ws_lambd
a]

Cloud
Function
Optional

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

SG-AWS-
Datacent
ers

21
SG-AWS-
S3

SG-AWS-
S3
[sn_aws_in
teg_sg_a
ws_s3]

Cloud
Object
Storage

Optional

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

22

SG-AWS-
DynamoD
b

SG-AWS-
DynamoD
b
[sn_aws_in
teg_sg_a
ws_dynam
odb]

DynamoD
B Table

AWS
Datacent
er

Key Value

SG-AWS
Extension
Attributes

Optional

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

23

SG-AWS-
Software-
Inventory

SG-AWS-
Software-
Inventory
[sn_aws_in
teg_sg_a
ws_softwa
re_invento
ry]

SG-AWS-
Software-
Staging
[sn_aws_in
teg_sg_a
ws_temp_
software_s
taging]

When the
Software
Asset
Managem
ent (SAM)
applicatio
n isn't
installed:

Software
Packages

Software
Instance

Server

When the
SAM
applicatio
n is
installed:

Software
Installation

Server

Optional

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

SG-AWS-
VPC

SG-AWS-
Subnets

SG-AWS-
Network-
Interface

SG-AWS-
Hardware-
Type

SG-AWS-
Security-
Group

SG-AWS-
Storage-
Volume

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

SG-AWS-
Image-
Private

SG-AWS-
Image-Id

SG-AWS-
EC2

24

SG-AWS-
Software-
Remove

SG-AWS-
Software-
Remove
[sn_aws_in
teg_sg_a
ws_softwa
re_remov
e]

None
Optional

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

SG-AWS-
VPC

SG-AWS-
Subnets

SG-AWS-
Network-
Interface

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

SG-AWS-
Hardware-
Type

SG-AWS-
Security-
Group

SG-AWS-
Storage-
Volume

SG-AWS-
Image-
Private

SG-AWS-
Image-Id

SG-AWS-
EC2

SG-AWS-
Software-
Inventory

25

SG-AWS-
SSM-
SendCom
mand

SG-AWS-
SSM-
SendCom
mand
[sn_aws_in
teg_sg_a
ws_ssm_se
ndcomma
nd]

Applicatio
n

Running
Process
[cmdb_ru
nning_pro
cess]

Optional

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

TCP
Connectio
ns
[cmdb_tc
p]

SG-AWS-
Datacent
ers

SG-AWS-
VPC

SG-AWS-
Subnets

SG-AWS-
Network-
Interface

SG-AWS-
Security-
Group

SG-AWS-
Storage-
Volume

SG-AWS-
Image-
Private

SG-AWS-
Image-Id

SG-AWS-
EC2

26
SG-AWS-
Tags

SG-AWS-
Tags
[sn_aws_in

DynamoD
B Table
Optional

SG-AWS-
Organizati
on

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

teg_sg_a
ws_tags]

Cloud
Load
Balancer

Cloud
Function

Key Value

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

SG-AWS-
ELB-V1

SG-AWS-
ELB-V2

SG-AWS-
DynamoD
b

SG-AWS-
Lambda

27

SG-AWS-
VM-Hw-
Consolida
tion

SG-AWS-
VM-Hw-
Consolida
tion
[sn_aws_in
teg_sg_a
ws_vm_hw
_consolid
ation]

Virtual
Machine
Instance

Server

Optional

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

SG-AWS-
VPC

SG-AWS-
Subnets

SG-AWS-
Network-
Interface

SG-AWS-
Security-
Group

SG-AWS-
Storage-
Volume

SG-AWS-
Image-
Private

SG-AWS-
Image-Id

SG-AWS-
EC2

SG-AWS-
Hardware-
Type

28

SG-AWS-
EKS-
Cluster

SG-AWS-
EKS-
Cluster
[sn_aws_in

Kubernete
s Cluster
Optional

SG-AWS-
Organizati
on

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

teg_sg_a
ws_eks_cl
uster]

AWS
Datacent
er

Key Value

SG-AWS
Extension
Attributes

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

SG-AWS-
VPC

SG-AWS-
Subnets

SG-AWS-
Network-
Interface

SG-AWS-
Security-
Group

SG-AWS-
Storage-
Volume

SG-AWS-
Image-
Private

SG-AWS-
Image-Id

SG-AWS-
EC2

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

SG-AWS-
Hardware-
Type

SG-AWS-
VM-Hw-
Consolida
tion

29

SG-AWS-
EKS-
Cluster-2

SG-AWS-
EKS-
Cluster-2
[sn_aws_in
teg_sg_a
ws_eks_cl
uster_2]

Kubernete
s Cluster

AWS
Datacent
er

Key Value

SG-AWS
Extension
Attributes

Optional

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

SG-AWS-
VPC

SG-AWS-
Subnets

SG-AWS-
Network-
Interface

SG-AWS-
Security-
Group

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

SG-AWS-
Storage-
Volume

SG-AWS-
Image-
Private

SG-AWS-
Image-Id

SG-AWS-
EC2

SG-AWS-
Hardware-
Type

SG-AWS-
VM-Hw-
Consolida
tion

SG-AWS-
EKS-
Cluster

30
SG-AWS-
EKS-FULL

SG-AWS-
EKS-FULL
[sn_aws_in
teg_sg_a
ws_eks_full
]

Kubernete
s Cluster

Server

Kubernete
s

Optional

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

Namespa
ce

Kubernete
s Node

Kubernete
s Service

Kubernete
s Pod

Docker
Container

Docker
Image

Kubernete
s Volume

Kubernete
s
Deployme
nt

Kubernete
s
DaemonS
et

Kubernete
s
ReplicaSet

SG-AWS-
Datacent
ers

SG-AWS-
VPC

SG-AWS-
Subnets

SG-AWS-
Network-
Interface

SG-AWS-
Security-
Group

SG-AWS-
Storage-
Volume

SG-AWS-
Image-
Private

SG-AWS-
Image-Id

SG-AWS-
EC2

SG-AWS-
Hardware-
Type

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

SG-AWS-
VM-Hw-
Consolida
tion

SG-AWS-
EKS-
Cluster

SG-AWS-
EKS-
Cluster-2

31

SG-AWS-
Generic-
Resources

SG-AWS-
Generic-
Resources
[sn_aws_in
teg_sg_a
ws_generi
c_resourc
es]

Cloud
Resource

SG-AWS
Extension
Attributes

Optional

SG-AWS-
Organizati
on

32

SG-AWS-
Redshift-
Cluster

SG-AWS-
Redshift-
Cluster
[sn_aws_in
teg_sg_a
ws_redshif
t_cluster]

Amazon
Redshift
Optional

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

33

SG-AWS-
Get-
Inventory

SG-AWS-
Get-
Inventory
[sn_aws_in
teg_sg_a
ws_get_in
ventory]

Server
Required

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

34

SG-AWS-
GenericTa
gs

SG-AWS-
GenericTa
gs
[sn_aws_in
teg_sg_a
ws_generi
ctags]

Cloud
Resource

Key Value

Optional

SG-AWS-
Organizati
on

SG-AWS-
Generic-
Resources

35

SG-AWS-
SendCom
mand

SG-AWS-
SendCom
mand
[sn_aws_in
teg_sg_a
ws_ssm_se
ndcomma
nd]

None
Optional

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

Note:
The
SG-
AWS-
Send
Com
mand
data
sourc
e
doesn
't
have
target
CMD
B CI
classe
s. This
data
sourc
e
popul
ates
the
data
into
the
sn_aw
s_inte
g_sg_
aws_s
sm_se
ndco
mma
nd
stagin
g
table,
but
the
impor
t
recor
ds
aren't

SG-AWS-
VPC

SG-AWS-
Subnets

SG-AWS-
Network-
Interface

SG-AWS-
Security-
Group

SG-AWS-
Storage-
Volume

SG-AWS-
Image-
Private

SG-AWS-
Image-Id

SG-AWS-
EC2

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

36

SG-AWS-
SSM-
GetS3Obj
ect

SG-AWS-
SSM-
GetS3Obj
ect
[sn_aws_in
teg_sg_a
ws_ssm_g
ets3object
]

Server

Running
Process
[cmdb_ru
nning_pro
cess]

TCP
Connectio
ns
[cmdb_tc
p]

Optional

SG-AWS-
Organizati
on

SG-AWS-
Service-
Account

SG-AWS-
Datacent
ers

SG-AWS-
VPC

SG-AWS-
Subnets

SG-AWS-
Network-
Interface

SG-AWS-
Security-
Group

SG-AWS-
Storage-
Volume

SG-AWS-
Image-
Private

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

Order

Name

(data
source or
import
schedule)

Staging
table

CMDB CI
classes

Import
schedule
requirement
type

Import
schedule
dependencies

SG-AWS-
Image-Id

SG-AWS-
EC2

SG-AWS-
SendCom
mand

• The SG-AWS-Generic-Resources data source imports data for
generic resources that aren't tracked by other data sources. The
connector uses the Service Graph Resource Inclusion Whitelist
[sn_cmdb_int_util_service_graph_resource_inclusion_whitelist] table to
differentiate between generic and other supported resource types.

The connector first populates all supported resources
in the Service Graph Resource Inclusion Whitelist
[sn_cmdb_int_util_service_graph_resource_inclusion_whitelist] table.
These resources, categorized under their respective supported
resource types, have specific data sources designated for ingestion
within the connector. When the SG-AWS-Generic-Resources data
source is executed and retrieves unsupported resource types,
they are added to the Service Graph Resource Inclusion Whitelist
[sn_cmdb_int_util_service_graph_resource_inclusion_whitelist] table and
categorized as generic.

• To import global generic resources such as IAM user and IAM
group, specify a standard AWS region that has Config enabled with
includeGlobalResourceTypes set to true by updating the value of the
sn_aws_integ.global_generic_resource_region system property for the
SG-AWS-Generic-Resources data source.

If an aggregator is configured, and the
sn_aws_integ.global_generic_resource_region value is not specified,

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

the aggregator region is assigned as the value of this system property
for importing global generic resources.

• If the AWS Systems Manager (SSM) service isn't enabled, the connector
populates the server records in the Server [cmdb_ci_server] class. If
the AWS SSM service is enabled, then based on the platform type
obtained through the SSM service, the server records are populated
in either the Linux Server [cmdb_ci_linux_server] class or the Windows
Server [cmdb_ci_win_server] class. The Server [cmdb_ci_server] class
is the parent class of the Linux Server [cmdb_ci_linux_server] and the
Windows Server [cmdb_ci_win_server] classes.

• All labels associated with an AWS resource are added to the Key Value
[cmdb_key_value] table.

Note:   You can use the CMDB Data Manager to delete tag data
from retired CIs in the Key Value [cmdb_key_value] table based on
conditions like retention time and discovery source. A scheduled
job runs the policy, which can be configured to execute during
off-peak hours.

• The basic information about an AWS resource is stored in the SG-AWS
Extension Attributes [sn_aws_extension_attributes] table.

• Starting with the Service Graph Connector for AWS 2.10.0 version, the
SG-AWS-Get-Inventory data source runs before the SG-AWS-EC2 data
source and creates a Server [cmdb_ci_server] CI with the host name
mapped to the Name attribute, instead of being mapped to the VM
name.

• The SG-AWS-GenericTags data source imports tag data only for generic
resources that have an ARN key. You can use the SG-AWS Extension
Attributes [sn_aws_extension_attributes] table to verify which generic
resources have an ARN key.

For more information on where data is saved when pulling data from
AWS, see CMDB classes targeted in Service Graph Connector for AWS
and Supported AWS resource types.

When you run the diagnostic test, the data is loaded in the following
tables:

• SG AWS Diagnostic Details [sn_aws_integ_sg_aws_diagnostic_details]

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

• SG-AWS Diagnostic Summary
[sn_aws_integ_sg_aws_diagnostic_summary]

• SG AWS Diagnostic Summary Notes
[sn_aws_integ_sg_aws_diagnostic_summary_notes]

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

The AWS configuration data for each connection is stored in the SG AWS
Application properties [sn_aws_integ_sg_aws_application_properties]
table.

For more information about how CI information is pulled from AWS, see
the Service Graph Connector for AWS - Functional Spec and CI article on
the ServiceNow Community site.

BYOL support

Bringing your own licenses (BYOL) is the process of bringing previously
purchased on-premises licenses to Amazon AWS Cloud. The connector
supports the BYOL of the Image CIs for Oracle Database servers on
Amazon AWS Cloud by populating the Key Value [cmdb_key_value]
table with the licensing information. When the licensing information is
found, the key is set to Windows_OS_License_Type_automatic and the
key value is set to BYOL in the Key Value [cmdb_key_value] table.

To support BYOL, the sn_aws_integ.load_all_images system property is
enabled during the initial pull to import the metadata of all Image
CIs included in the SG-AWS-Image-Id data source. After the initial pull,
the property is deactivated automatically. The SG-AWS-Image-Id data
source then imports the metadata of the Image CIs without names only.

Event-based discovery

The Service Graph Connector for AWS works with event-based discovery.
Events that are pulled from AWS can create and update CIs that were
brought by the Service Graph Connector for AWS.

Managing retired CIs in EKS components

If the Amazon Elastic Kubernetes Services (EKS) CIs are deleted in EKS
components such as pods, services, and volumes, the corresponding CI
entries are automatically set to Retired in the following CMDB CI classes:

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

Kubernetes Cluster, Kubernetes Node, Kubernetes Pod, Kubernetes
Service, Kubernetes DaemonSet Kubernetes Namespace, Kubernetes
Deployment, Docker Container, Kubernetes Volume

Shared VPC and subnets support

Import CI relationships established between virtual private clouds (VPCs),
subnets, and network interfaces hosted in different AWS accounts. For
example, a VPC in one AWS account can be connected to a subnet
in the same account, which can then link to a network interface and a
virtual machine in another AWS account.

Additional resources

See the following articles on the ServiceNow Community site for any
additional information on the AWS set up:

• Service Graph Connector for AWS - Introduction

• How do I configure the AWS Service Graph Connector?

• Service Graph Connector for AWS - Diagnostic Tool & Troubleshooting
Issues

• Service Graph Connector for AWS - Functional Spec and CI

• Cloud Discovery and SG-AWS

Related content

Service Graph Connectors

Enable optimized deletion of retired CIs in AWS

Enable optimized SG-AWS-SendCommand data source performance

Handling import failures for large AWS resources

Handling memory utilization errors for Service Graph Connector for AWS

Life cycle management of records in Service Graph Connector for AWS

Record removal process in Service Graph Connector for AWS

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

## Configure the AWS environment

Configure your Amazon Web Services (AWS) environment to import data
using the Service Graph Connector for AWS.

Before you begin

Install the Service Graph Connector for AWS application (sn_aws_integ).
For more information, see Install a ServiceNow Store application.

Role required: application administrator

Procedure

1. Learn about the AWS resources used by the connector.
Get familiar with the AWS concepts to learn how the Service Graph
Connector for AWS is integrated with AWS.

2. Download the AWS scripts.
Download the AWS scripts included within the guided setup of the
Service Graph Connector for AWS.

3. Review the requirements before executing the AWS scripts.
Complete the prerequisites before you execute the AWS scripts.

4. Execute the AWS scripts.
Execute scripts provided with the Service Graph Connector for AWS
to set up the AWS environment for importing data.

## AWS resources used by the Service Graph Connector
## for AWS

Get familiar with the AWS concepts to learn how the Service Graph
Connector for AWS is integrated with Amazon Web Services (AWS).

AWS Config service and configuration recorder

Important:   The AWS Config service and AWS configuration recorder
are required for setting up the connector.

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

The AWS Config service monitors and records changes to your AWS
resource configurations.

The AWS configuration recorder detects changes in resource
configurations and captures these changes as configuration items (CIs).
The is required for setting up the connector. The configuration recorder
enables recording all hardware data in AWS Config. See What Is AWS
Config? on the AWS Documentation site.

The Service Graph Connector for AWS includes the
EnableAWSConfig.yml script to enable the AWS Config service that
instead enables the configuration recorder. See Executing scripts
required for setting up AWS.

Note:   Ensure that the AWS Config service is enabled for all
applicable AWS accounts and regions.

AWS Config aggregator

Important:   The AWS Config aggregator is optional for setting up the
connector.

The AWS Config aggregator collects the AWS Config configuration and
compliance data from the following sources:

• Multiple accounts and multiple regions

• Single account and multiple regions

• An organization in AWS organizations and all the accounts within the
organization that have AWS Config enabled.

The advantages of using an AWS Config aggregator with the Service
Graph Connector for AWS are:

• Gets all the data from a single location.

• Gets the bootstrap updates (baseline configurations) and the
incremental updates (new configurations added after the last update).

• Doesn't require looping into each account and region.

• Accelerates pulling data.

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

Due to these advantages, consider leveraging the AWS Config
aggregator for pulling data from multiple accounts or multiple regions.

Note:   For detecting any deleted resources, the connector uses
the config:ListDiscoveredResources API to loop through each AWS
account and region and update the CMDB CI accordingly. As
a date range for selecting resources can't be specified in the
ListDiscoveredResources API, the connector might make multiple API
calls to gather all the data that might impact the performance of
the connector.

For more information on setting up an AWS Config aggregator, see Multi-
Account Multi-Region Data Aggregation and Setting Up an Aggregator
Using the Console on the AWS Documentation site.

AWS Systems Manager and AWS Systems Manager Inventory

Important:   AWS Systems Managerand AWS Systems Manager
Inventory are required for setting up the deep discovery feature.

The AWS Systems Manager enables fetching server data, also called
as deep discovery data, from EC2 instances across AWS accounts and
regions through SSM documents. The deep discovery data includes host
name, serial number, CPU data, TCP data, and process information.

The AWS Systems Manager Inventory imports the software data installed
on the EC2 instances. The Inventory resource group in AWS Systems
Manager collects information about the EC2 instances and the software
applications installed on them.

Ensure that the following items are configured in all AWS accounts:

• The AWS Systems Manager Agent (SSM Agent) is installed on all
managed EC2 instances.

• The AmazonSSMForInstancesRole IAM instance profile role is attached
as the instance profile on EC2 instances.

• The AWS Systems Manager Inventory is configured in each AWS region.

• The AWS Systems Manager has access to the managed EC2 instances.

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

Note:   By default, AWS Systems Manager doesn’t have permission
to perform actions on EC2 instances. You can grant access by
attaching the AmazonSSMForInstancesRole IAM instance profile
role to the EC2 instance. See Setting up AWS Systems Manager on
the AWS Documentation site.

The advantages of using AWS Systems Manager and AWS Systems
Manager Inventory are:

• The AWS Systems Manager enables getting the detailed server data
such as host name, serial number, CPU data, TCP data, and process
information.

• The AWS Systems Manager Inventory enables the server classification
and getting the software data.

## Download the AWS scripts

Download the AWS scripts included within the guided setup of the
Service Graph Connector for AWS.

Before you begin

• Ensure that you have installed the Service Graph Connector for
AWS application (sn_aws_integ). For more information, see Install a
ServiceNow Store application.

• Ensure that you’ve selected the Service Graph Connector for AWS
application scope by using the application picker. See Application
picker.

Role required: admin

Procedure

1. Navigate to All > Service Graph Connector for AWS > Setup.

2. On the Getting started page, select Get Started.

3. In the Configure the AWS environment section of the Service Graph
Connector for AWS page, select Get Started.

4. For the Download the scripts task, select Configure.

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

5. When you download all the scripts onto your local machine, select
Close to close the Download the scripts dialog box and return to the
guided setup.

6. Set the Download the scripts task to complete by selecting Mark as
Complete.

## Prerequisites for executing scripts

Complete the prerequisites before you execute the AWS scripts.

Important:   Ensure that you have downloaded the scripts available
within the Service Graph Connector for AWS. See Download the
AWS scripts.

Decide the following details to be used later during the execution of the
AWS scripts:

• ServiceNow IAM role

• ServiceNow IAM username

• S3 bucket for the ServiceNow IAM role

Note:   Define an S3 bucket only when you are using deep
discovery scripts.

Determine the ServiceNow IAM role

Determine the identity and access management (IAM) role that performs
read-only operations in member accounts to fetch the configuration
items (CIs) from the AWS environment.

By default, the
CreateSnowOrganizationAccountAccessRoleInMemberAccount.yml
script creates the SnowOrganizationAccountAccessRole IAM role. You
can use the default name created by the script or create a new IAM
role. However, when required as an input parameter, you must enter the
same IAM role across scripts. See Executing scripts required for setting up
AWS.

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

Determine the ServiceNow IAM username

Determine the name of the IAM user that assumes the ServiceNow IAM
role in the member accounts.

By default, the CreateServiceNowUser.yml script creates the
NOWSGCUser IAM user. You can use the default name created by the
script or create a new IAM user. However, when required as an input
parameter, you must enter the same IAM username across scripts. See
Executing scripts required for setting up AWS.

Define the S3 bucket for deep discovery

Set up an S3 bucket with read and delete privileges for the ServiceNow
IAM role to store and delete the SendCommand API responses when
importing AWS data.

Before you begin

Role required: Application administrator

About this task

Create an S3 bucket for the Service Graph Connector for AWS
application and enable the ServiceNow IAM role to have access to this
bucket in the organization.

Note:   Use an S3 bucket only when you want to perform deep
discovery on EC2 instances.

Procedure

1. Create an S3 bucket in an AWS account region.
See Creating a bucket on the AWS documentation site.

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

Note:   The S3 bucket must have the following permission settings.

S3 bucket permissions and their settings

Permission
Setting

Access
Bucket and objects not public

S3 Block Public Access
Block public access to S3
buckets and objects

For more information, see S3 Block Public Access on the AWS
documentation site.

2. Add a bucket policy.

See Bucket policies on the AWS documentation site.

To access the S3 bucket you created in step 1, its bucket policy must
allow the IAM instance profile role attached to the managed EC2
instances. You can either create a bucket policy or grant access to
your AWS member account in the bucket access control list (ACL).
The member account must include the EC2 instances.

Note:   Adding an AWS member account to the bucket ACL
allows all users and roles in the member account to access the
S3 bucket.

Refer to the following sample code when adding a bucket policy.

{
"Version": "2012-10-17",
"Id": "S3PolicyforServiceNowIAMrole",
"Statement": [
{
"Sid": "EC2S3Access",
"Effect": "Allow",
"Principal": {
"AWS": "arn:aws:iam::AWS-ACCOUNT:role/
INSTANCE-PROFILE-ROLE-NAME"
},
"Action": [
"s3:GetObject",

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

"s3:PutObject",
"s3:PutObjectAcl"
],
"Resource": "arn:aws:s3:::DOC-EXAMPLE-BUCK
ET/*"
}
]
}
Where

• SOURCE-AWS-ACCOUNT is the AWS account ID of the member
account that includes the EC2 instances.

• INSTANCE-PROFILE-ROLE-NAME is the IAM instance profile that is
attached to the EC2 instances.

By default, the AmazonSSMForInstancesRoleSetup.yml
script creates the AmazonSSMForInstancesRole IAM
instance profile role and attaches the role to the
AmazonSSMManagedInstanceCore bucket policy. See Executing
scripts required for setting up AWS.

• DOC-EXAMPLE-BUCKET is the S3 bucket name.
The following example bucket policy shows the effect,
principal, action, and resource elements. The policy allows
AmazonSSMRoleForInstances, an IAM instance profile role in an
account with ID 123456789000, s3:GetObject, s3:PutObject, and
s3:PutObjectAcl S3 permissions on the myS3Bucket bucket.

{
"Version": "2012-10-17",
"Id": "S3PolicyforServiceNowIAMrole",
"Statement": [
{
"Sid": "EC2S3Access",
"Effect": "Allow",
"Principal": {
"AWS": [
"arn:aws:iam::123456789000:role/Am
azonSSMRoleForInstances",
"arn:aws:iam::123456789001:role/Am
azonSSMRoleForInstances",
"arn:aws:iam::123456789002:role/Am
azonSSMRoleForInstances",

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

"arn:aws:iam::123456789003:role/Am
azonSSMRoleForInstances",
"arn:aws:iam::123456789004:role/Am
azonSSMRoleForInstances"
]
},
"Action": [
"s3:GetObject",
"s3:PutObject",
"s3:PutObjectAcl"
],
"Resource": "arn:aws:s3:::myS3Bucket/*"
}
]
}

3. Attach IAM permissions to the instance profile role for EC2 instances
to publish the SendCommand API responses to the S3 bucket you
created in step 1.
See Using instance profiles and Attach an IAM role to an instance on
the AWS documentation site.
The IAM instance profile role attached to the managed EC2
instances must have the s3:GetObject, s3:PutObject, and
s3:PutObjectAcl S3 permissions to allow access to the S3 bucket
as shown in the following sample policy.

{
"Version": "2012-10-17",
"Statement": [
{
"Sid": "PublishTerminalOutputToS3",
"Effect": "Allow",
"Action": [
"s3:PutObject",
"s3:GetObject",
"s3:PutObjectAcl"
],
"Resource": "arn:aws:s3:::DOC-EXAMPLE-BUCK
ET/*"
}
]
}
Where, DOC-EXAMPLE-BUCKET is the S3 bucket name.

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

Note:   Make sure you add the suffix /* at the end of the bucket
name to enable creating files under the bucket name.

## Executing scripts required for setting up AWS

You must execute scripts provided with the Service Graph Connector for
AWS to set up the AWS environment for importing data.

Important:   Before executing an AWS script, ensure that you have
completed the prerequisites. See Prerequisites for executing scripts.

The AWS scripts provided with the connector configure AWS resources to
import the configuration items (CIs) data into the CMDB. To learn more,
see AWS resources used by the Service Graph Connector for AWS.

Based on the AWS environment requirements, the scripts provided with
the Service Graph Connector for AWS are categorized as described in
the following table.

Basic scripts

Scripts for
configuring the AWS
environment to import
data by using the
connector.

Deep discovery scripts

Scripts for
setting up deep
discovery on Amazon
Elastic Compute
Cloud (Amazon EC2)
instances.

Amazon EKS scripts

Scripts for
setting up Amazon
Elastic Kubernetes
Service (EKS) clusters.

Basic scripts

Use the basic scripts to configure the AWS environment for importing
data using the Service Graph Connector for AWS.

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

The following table describes the basic AWS scripts available with the
connector, the input parameters entered when executing a script, the
conditions to execute the scripts, and the script execution results.

Basic script details

Script
Input parameters
Execution
condition
Result

EnableAWSConfi
g.yml
None

Execute the
script in all the
AWS accounts
and AWS
regions by
creating a
CloudFormation
StackSet in the
management
account.

See Create
a stack set
on the AWS
documentation
site.

Enables the AWS
Config recorder.

CreateServiceN
owUser.yml

SNUserName

Name of the
ServiceNow IAM
user that was
created as part
of the setup.
See Prerequisites
for executing
scripts.

Default value:
NOWSGCUser

Execute the
script by
creating a stack
either in the
management
account or in
a designated
member
account.

See Creating
a stack on
the AWS
CloudFormation

Creates the
ServiceNow IAM
user.

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

Script
Input parameters
Execution
condition
Result

MbrActRoleNam
e

Name of the
ServiceNow IAM
role that was
created as part
of the setup.
See Prerequisites
for executing
scripts.

Default value:
SnowOrganizat
ionAccountAcc
essRole

console on
the AWS
documentation
site.

CreateSnowOrg
anizationAccou
ntAccessRoleIn
MemberAccoun
t.yml

ACNNBR

Management
account ID
when the
ServiceNow IAM
user is in a
management
account

Or

Designated
member
account ID
when the
ServiceNow IAM
user is in
a designated
member
account.

Execute the
script in all the
AWS accounts
by creating a
CloudFormation
StackSet in the
management
account.

See Create
a stack set
on the AWS
documentation
site.

Enables read-
only IAM
policies, roles,
and groups for
the ServiceNow
IAM user.

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

Script
Input parameters
Execution
condition
Result

S3Bucket

Amazon S3
bucket name
to get the
SendCommand
output.

ServiceNowUser
Name

Name of the
ServiceNow IAM
user that was
created as part
of the setup.
See Prerequisites
for executing
scripts.

Default value:
NOWSGCUser

SnowDesignate
dAccountAcces
sRoleInManage
mentAccount.y
ml

MEMBERACTNBR

Member
account ID
where the
ServiceNow IAM
user was
created.

Execute the
script by
creating a
stack in the
management
account.

See Creating
a stack on
the AWS
CloudFormation
console on
the AWS
documentation
site.

Creates the
ServiceNow IAM
role in the
management
account.

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

Script
Input parameters
Execution
condition
Result

Note:   Use
the
SnowDesig
natedAcco
untAccess
RoleInMan
agementAc
count.yml
script only
when the
ServiceNow
IAM user
was
created in
a member
account.

AWS-
SystemsManage
r-
AutomationExec
utionRole.yml

None

Execute the
script in all the
AWS accounts
by creating a
CloudFormation
StackSet in the
management
account.

See Create
a stack set
on the AWS
documentation
site.

Provisions the
execution role
necessary to
run automations
in member
accounts. A
prerequisite
for configuring
Systems
Manager
Automation.

AWS-
SystemsManage
r-
AutomationAdm

None

Execute the
script by
creating a
stack in the

Provisions the
administrator
role in the
management
account

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

Script
Input parameters
Execution
condition
Result

inistrationRole.y
ml

management
account.

See Creating
a stack on
the AWS
CloudFormation
console on
the AWS
documentation
site.

necessary to run
cross-account
automation
across multiple
accounts. A
prerequisite
for configuring
Systems
Manager
Automation.

Deep discovery scripts

Use the deep discovery scripts to set up deep discovery on Amazon EC2
instances.

Note:   Execute the deep discovery scripts only when you want to
perform deep discovery on EC2 instances.

The following table describes the deep discovery scripts, the input
parameters entered when executing a script, the conditions to execute
the scripts, and the script execution results.

Deep discovery script details

Script
Input parameters
Execution
condition
Result

AmazonSSMForI
nstancesRoleSet
up.yml

S3Bucket

S3 bucket name
that collects
the details from
EC2 instances.
See Prerequisites
for executing
scripts.

Execute the
script in all the
AWS accounts
by creating a
CloudFormation
StackSet in the
management
account.

See Create
a stack set

Creates the
AmazonSSMForI
nstancesRole
IAM instance
profile role to be
attached to the
EC2 instances.

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

Script
Input parameters
Execution
condition
Result

on the AWS
documentation
site.

SG-AWS-
RunShellScript-
Setup.yml

None

Execute the
script in all the
AWS accounts
and the AWS
regions by
creating a
CloudFormation
StackSet in the
management
account.

AWS
administrators
must update
SSM documents
and verify that
EC2 instances
can execute
relevant
commands
for proper
integration.

See Create
a stack set
on the AWS
documentation
site.

Creates
AWS Systems
Manager (SSM)
documents to
fetch deep
discovery data
from a Linux
EC2 instance.
Retrieves version
details for
middleware
applications,
including
Apache HTTP
server, Nginx
server, Apache
Tomcat server,
and MySQL
instance.

SG-AWS-
RunPowerShellSc
ript-Setup.yml

None

Execute the
script in all the
AWS accounts
and the AWS

Creates AWS
SSM documents
to fetch deep
discovery data

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

Script
Input parameters
Execution
condition
Result

regions by
creating a
CloudFormation
StackSet in the
management
account.

See Create
a stack set
on the AWS
documentation
site.

from a Windows
EC2 instance.

Amazon EKS scripts

Use the Amazon EKS scripts to set up Amazon Elastic Kubernetes Service
(EKS) clusters.

Note:   Execute the Amazon EKS scripts only when the Amazon EKS
service for Kubernetes clusters is required.

The following table describes the Amazon EKS scripts, the conditions to
execute the scripts, and the script execution results.

Amazon EKS script details

Script
Execution condition
Result

SG-AWS-
RunKubeCtlEKSNames
ShellScript.yml

Execute the script in
all the AWS accounts
and the AWS regions
where the EC2
Bastion hosts are
located by creating
a CloudFormation
StackSet in

Creates an AWS SSM
document to discover
EKS clusters associated
with EC2 Bastion hosts.

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

Script
Execution condition
Result

the management
account.

See Create a stack
set on the AWS
documentation site.

Note:   An
AWS Cloud
administrator can
update the SSM
document in their
AWS setup.

SG-AWS-
RunKubeCtlShellScript.
yml

Execute the script in
all the AWS accounts
and the AWS regions
where the EC2
Bastion hosts are
located by creating
a CloudFormation
StackSet in
the management
account.

See Create a stack
set on the AWS
documentation site.

Creates an AWS SSM
document to fetch CIs
related to Kubernetes
components, such as
pods, services, and
deployments, from EKS
clusters.

Note:   An
AWS Cloud
administrator can
update the SSM
document in their
AWS setup.

## Configure Service Graph Connector for AWS using SGC
## Central

Use the playbook available with the SGC Central application to set up
the Service Graph Connector for AWS for pulling in AWS data into the
CMDB

Before you begin

• Install Service Graph Connector for AWS version 2.7.0 or later from the
ServiceNow Store. For ServiceNow Store installation steps, see Install a
ServiceNow Store application.

• Verify that you’ve completed the prerequisites for setting up AWS. See

Configure the AWS environment.

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

3. On the Dashboard page, select Create connection.

Tip:   Alternatively, you can select Create connection on the All
connections page.

4. On the Create connection window, select the AWS connector type
and then select Create connection.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

Note:   This step is required only during the first-time setup. See
Perform initial setup tasks when creating a connection in SGC
Central.

6. Complete the prerequisites for setting up the AWS environment.

a. Configure the basic setup in the AWS environment required for
importing data using the connector.

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

a. In the Prerequisites stage of the playbook, select the
Download basic scripts activity.

b. Execute the scripts to configure the AWS environment.

For more information on executing scripts, see Basic scripts.

c. Select the I have read the instructions and executed the
script accordingly check box to confirm that you have
executed the scripts.

d. Select Continue.

b. Set up deep discovery on Amazon Elastic Compute Cloud
(Amazon EC2) instances.

Note:   Complete this step only to perform deep discovery on
EC2 instances. Else, select Skip.

a. In the Prerequisites stage of the playbook, select the
Download deep discovery scripts activity.

b. Execute the scripts to configure Amazon EC2 instances for
deep discovery.

For more information on executing scripts, see Deep
discovery scripts.

c. Select Continue.

c. Set up Amazon Elastic Kubernetes Service (EKS) clusters.

Note:   Complete this step only when the Amazon EKS service
for Kubernetes clusters is required. Else, select Skip.

a. In the Prerequisites stage of the playbook, select the
Download Amazon EKS scripts activity.

b. Execute the scripts to set up Amazon EKS clusters.

For more information on executing scripts, see Amazon EKS
scripts.

c. Select Continue.

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

7. Complete the setup for configuring the connector for importing data.

a. Create and test connection.

a. In the Setup stage of the playbook, select the Create and test
connection activity.

b. On the form, fill in the fields.

Create and test connection form

Field

Connection name

Name to identify the AWS
connection record.

For example,
SG_AWS_CredentialAlias_
Org.

Access Key ID

Access key ID of the IAM
user that has permissions
to interact with the AWS
resources.

Secret Access Key

Secret access key that
corresponds to the
Access key ID required
for authenticating the
connection securely.

Use MID Server

Option to use a MID Server.

Note:   Use of a MID
Server is optional.

Mid Selection

Name of the MID Server used
by the connector.

This field appears only when
the Use MID Server check
box is selected.

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

c. Select Create and test connection.

d. Once the connection test is complete, select Continue.

b. Set configuration properties for the connection to access the
AWS resources.

a. In the Setup stage of the playbook, select the Set
configuration properties activity.

b. In the Organization details section, fill in the organization
details including the account identifier, name and
description of the AWS organization.

c. In the S3 account details section, fill in the details.

S3 account details

Field
Description

S3 account ID

Numeric identifier of the
AWS account that hosts
the Amazon Simple Storage
Service (Amazon S3) bucket.

S3 bucket name

Name of the Amazon S3
bucket that collects the
details from Amazon EC2
instances.

S3 region
Region where the Amazon
S3 bucket resides.

d. In the AWS regions field of the AWS regions and STS assume
role name section, enter the AWS regions to collect the CI
data.

By default, the Service Graph Connector for AWS runs
through all the AWS regions to collect the CI data.

You can enter AWS specific regions to speed up the CI data
import process. For example, us-east1, us-east-2.

If you update the AWS regions field value later, clear the
value of the Last run datetime field in all the data sources

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

related to the Service Graph Connector for AWS to import a
new set of data.

e. In the STS assume role name field of the AWS regions and
STS assume role name section, enter the AWS Identity and
Access Management (IAM) role name.
The AWS IAM role name is obtained by the ServiceNow user
by calling the AssumeRole API offered by the AWS Security
Token Service (STS). The AssumeRole API returns a set of
temporary security credentials for the ServiceNow user to
access the AWS resources.

Note:   Enter the IAM role name but don’t
prefix arn in the name. If you leave this field is
empty, the value of this field is automatically set
to SnowOrganizationAccountAccessRole, which is the
default IAM role name for the ServiceNow user.

f. In the SSM SendCommand document details section, enter
the name of the document that defines the actions run by
the AWS Systems Manager (SSM) on a Linux-based Amazon
EC2 instance or a Windows-based Amazon EC2 instance in
their respective fields.

g. In the Management account ID field of the Management
account ID and standalone account ID section, enter the
management account ID in the AWS organization.

Enter a value for this field when the ServiceNow user was
created in an AWS member account.

The account calls the ListAccounts API associated with the
AWS organization to collect CI information from all the
accounts. For more information, see ListAccounts on the AWS
documentation site.

h. In the Standalone account ID field of the Management
account ID and standalone account ID section, enter the ID
of a member account in the AWS organization.

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

Note:   When specifying a standalone account, the
AWS organization-related data such as the organization
name, organization units, organization ID, and service
accounts are not imported. To import the full data later,
clear any value mentioned in the Standalone account
ID field. See the Service Graph Connector for AWS -
Standalone Setup [KB1642159] article in the Now Support
Knowledge Base.

i. In the AWS config aggregator details section, enter the AWS
account details for the aggregator resource type.

AWS config aggregator details

Field
Description

Config aggregator account

AWS account where the
aggregator resource type in
the AWS Config service has
been configured.

Enter a value in this field
when you’re using an AWS
Config aggregator.

Config aggregator name

Name of the aggregator
resource type. This field is
available only when you
enter a value in the Config
aggregator account field.

Config aggregator region

Region where the
aggregator resource type
resides. This field is available
only when you enter a value
in the Config aggregator
account field.

j. In the AWS key rotation setup section, enter the key rotation
process details.

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

AWS key rotation setup

Field
Description

AWS rotate keys
Option to enable the key
rotation process.

AWS key rotation date

Key rotation date. Set the
value to the required key
rotation date for the first
run. For subsequent runs, this
field is automatically set to
the rotation date. This field
is available only when you
select the AWS Rotate Keys
check box.

AWS key rotation period (in
days)

Key rotation period in days.
This field is available only
when you select the AWS
rotate keys check box.

AWS key rotation status

Status message of a key
rotation displaying whether
the rotation was a success
or a failure. This field
is automatically set to
display the key rotation
status message. This field
is available only when you
select the AWS rotate keys
check box. If the rotation
status is a failure, an email
notification is triggered, if
configured.

Email accounts for receiving
error notifications

Comma-separated list of the
email addresses of recipients
who receive notifications
about the AWS key rotation
errors.

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

Field
Description

Email account groups for
receiving error notifications

Comma-separated list of
the ServiceNow groups who
receive notifications about
the AWS key rotation errors.

k. Select the Is gov cloud check box in the Gov cloud setup
section to indicate that the connection setup is for the AWS
GovCloud.

l. In the SSM EKS SendCommand document details section,
enter the AWS SSM document details.

SSM EKS SendCommand document details

Field
Description

EKS cluster names document

Name of the AWS SSM
document to discover EKS
clusters associated with EC2
Bastion hosts.

EKS shell script document

Name of the AWS SSM
document to fetch CIs
related to Kubernetes
components, such as pods,
services, and deployments,
from EKS clusters.

m. Select Save properties.

n. Select Continue.

c. Configure the required EC2 resources for Amazon Elastic
Kubernetes Service (EKS) to import EKS cluster data.

Note:   Complete this step only when EC2 resources are
needed. Else, select Skip for the Configure EKS EC2 resources
activity.

An EKS EC2 resource is a bastion host that has network access
to EKS clusters. The EKS clusters aren't directly accessible to the
connector. Therefore, you must provide the EKS EC2 resource

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

details. For importing EKS cluster data, the connector uses the
SSM Send Command on EKS EC2 resources to run kubectl
commands remotely.

Note:   Ensure that you’ve configured your AWS environment
for the EKS integration. For more information, see the
Service Graph Connector for AWS - Amazon EKS Integration
[KB1437138] article in the Now Support Knowledge Base.

a. In the Setup stage of the playbook, select the Configure EKS
EC2 resources activity.

b. On the Configure EKS EC2 resources page, select New.

c. On the Configure EKS EC2 resources window that appears, fill
in the fields.

Configure EKS EC2 resources fields

Field
Description

EKS EC2 Resource Id
Identifier of the EKS EC2
resource.

EC2 Region
AWS region where the EKS
EC2 resource is located.

EC2 Account
User name assigned to the
EKS EC2 resource account.

Connection Alias

Connection alias associated
with the AWS environment
setup and configured in step
7.a.ii.

Connection

Connection name
associated with the AWS
environment setup and
configured in step 7.a.ii.

Active
Option to activate the EKS
EC2 resource.

d. Select Save.

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

e. Repeat steps from 7.c.ii to 7.c.iv to add more EKS EC2
resources.

f. Select Continue.

d. Run the AWS diagnostic tool before running a scheduled import
job to identify any issues in the AWS environment setup.

a. In the Setup stage of the playbook, select the Run diagnostic
tests activity.

b. On the Run diagnostic test page, select an option to exclude
the corresponding test results from the diagnostic summary.

Skip SSM setup tests

Excludes the software inventory data from the summary
results by not calling the GetInventory API. Select this option
when you’ve opted out or not set up the configuration for
SSM.

Skip SSM Deep Discovery tests

Excludes the deep discovery data from the summary results.
Select this option when you’ve opted out or not set up the
configuration for SSM deep discovery.

Skip EKS setup tests

Excludes the EKS data from the summary results by not
running the kubectl commands.

Note:   This check box appears only when you’ve
configured EC2 resources in the Configure EKS EC2
resources activity.

c. Select Run diagnostic test and wait for the test to complete.

d. Review the diagnostic summary, the API access results, and
the IAM permission validation logs.

e. When the test results are successful, select Continue.

e. Configure the import schedule to import data at regular intervals.

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

a. In the Setup stage of the playbook, select the Configure
import schedule activity.

b. Expand the Parent scheduled data import within the Import
schedules list to select the SG-AWS-Organization import
schedule.

c. In the Configure import schedule dialog box, select the
Active check box, and then fill in the run schedule and time
details.

For more information, see Schedule a data import.

d. Select Save.

Alternatively, select Execute Now to execute the import
schedule immediately.

e. Select Continue.

f. In the Setup stage of the playbook, select the Confirm
connection setup activity to verify whether the connection was
created.

What to do next

Select View all connections to review the connection details. The
configured connection appears in the Installed connections list.

Related concepts

• Service Graph Connector for AWS

• Accessing the connection details of Service Graph Connector for AWS

• Additional features within the Service Graph Connector for AWS

Related reference

• CMDB classes targeted in Service Graph Connector for AWS

• Supported AWS resource types

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

## Configure Service Graph Connector for AWS using the
## guided setup

Set up the AWS environment and scheduled jobs to pull in AWS data into
the CMDB.

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

• The ITOM Discovery License plugin (com.snc.itom.discovery.license).
You must activate this plugin.

• ITOM Licensing plugin (com.snc.itom.license). For more information, see

Request Discovery.

Ensure that you’ve completed the prerequisites for setting up AWS. See
Configure the AWS environment.

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

Note:   When upgrading from an earlier version, ensure that you’ve
updated the SSM documents and IAM permissions in your AWS
instance.

• For updating SSM documents, run the SG-AWS-RunShellScript-
Setup.yml, SG-AWS-RunPowerShellScript-Setup.yml, and SG-AWS-
RunKubeCtlShellScript.yml scripts.

• For updating the IAM permissions assigned to the
SnowOrganizationAccountAccessRole role, run the
CreateSnowOrganizationAccountAccessRoleInMemberAccount.yml
script.

Role required: admin

About this task

For more information on the Service Graph Connector for AWS setup
instructions, see the following articles:

• Service Graph Connector for AWS - Setup Instructions [KB1220597]

article on the Now Support Knowledge Base.

• Service Graph Connector for AWS - Introduction on the ServiceNow
Community site.

• SGC-AWS - Release 2.0 Features on the ServiceNow Community site.

If you upgrade the connector, complete the following tasks before the
upgrade process:

• If there are any customizations, delete the records associated with
the Service Graph Connector for AWS from the Customer Updates
[sys_update_xml] table. See Customer Updates table.

• Upgrade any dependencies.

After you've installed the latest version of the Service Graph Connector
for AWS:

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

• Perform a full import of data from your AWS instance. Verify that the Use
last run datetime field value is cleared for all the AWS data sources in
the Data Source [sys_data_source] table.

• Download and rerun the AWS scripts. See Configure the AWS
environment.

Procedure

1. Ensure that you’ve selected the Service Graph Connector for AWS
application scope by using the application picker.
For more information, see Application picker.

2. Navigate to All > Service Graph Connectors > AWS > Setup.

3. Configure the AWS environment.

Note:   For the Download the scripts task, select Configure to
download the scripts.

After you’ve downloaded the scripts and configured the AWS
environment, set the Download the scripts and AWS Setup
Instructions tasks to complete.

4. Configure the authentication credentials to authenticate requests
sent to the AWS APIs.

a. Configure your AWS credentials.

a. For the Configure the connection section of the Service
Graph Connector for AWS page, select Get Started.

b. For the Configure the credentials task, select Configure.

c. In the Name field, enter a name for the authentication.

SG-AWS-Credentials-Org is the default credential alias
name. You can add multiple AWS instances. However, don’t
modify the default connection alias.

d. Enter the access key ID and the secret access key in the
Access Key ID and Secret Access Key fields respectively.

The AWS access keys are long-term credentials for the IAM
user and include two parts: an access key ID and a secret

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

access key. You must use both the access key ID and the
secret access key together to authenticate requests.

e. Return to the Configure the connection task page by
selecting the back icon (<).

f. Set the Configure the credentials task to complete by
selecting Mark as Complete.

b. Test the AWS API connection to import data from the AWS
application.

a. For the Test the connection task in the Configure the
connection section, select Configure.

b. Select the Test Connection related link.

c. When the Status field is set to Success, select the back icon
(<) to return to the guided setup.

d. Set the Test the connection task to complete by selecting
Mark as Complete.

c. Update the required configuration properties for an AWS
instance.

a. For the Update configuration properties for instance task,
select Configure.

b. On the SG-AWS Configuration Properties form that opens in a
new tab, review, and modify the fields.

SG-AWS Configuration Properties form

Field
Description

Connection Details

Connection Alias

Name to identify the AWS
connection record. For
example,
SG_AWS_CredentialAlias_
Org.

You can add multiple AWS
instances. However, don’t

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

Field
Description

modify the name for the
default connection alias
SG_AWS_CredentialAlias_
Org.

Organization Details

Organization Account
Numeric account identifier
of the AWS organization.

Organization Name
Name of the AWS
organization.

Organization Description
Description of the AWS
organization.

AWS Regions

Regions

AWS regions to collect the CI
data.

By default, the Service
Graph Connector for AWS
runs through all the AWS
regions to collect the CI
data.

You can enter AWS specific
regions to speed up the
CI data import process. For
example, us-east1, us-
east-2.

If this field is left empty, the
Service Graph Connector for
AWS pulls the resources from
all the AWS regions.

However, for the AWS
GovCloud regions, don’t
leave the Regions field

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

Field
Description

empty. The supported AWS
GovCloud regions are us-
gov-east-1 and us-gov-
west-1.

If you update the Regions
field value later, clear the
value of the Last run
datetime field in all the
data sources related to the
Service Graph Connector for
AWS to import a new set of
data.

STS Assume Role Name

STS Role

AWS Identity and Access
Management (IAM) role
name that is obtained
by the ServiceNow user
by calling the AssumeRole
API offered by the AWS
Security Token Service
(STS). The AssumeRole API
returns a set of temporary
security credentials for the
ServiceNow user to access
the AWS resources.

Note:   Enter the IAM role
name but don’t prefix
arn in the name. If you
leave this field is empty,
the value of this field is
automatically set to
SnowOrganizationAcco
untAccessRole, which is
the default IAM role
name for the
ServiceNow user.

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

Field
Description

S3 Account Details

S3 Account Id

Numeric identifier of the
AWS account that hosts
the Amazon Simple Storage
Service (Amazon S3) bucket.

S3 Bucket Name

Name of the Amazon S3
bucket that collects the
details from Amazon EC2
instances.

S3 Region
Region where the Amazon
S3 bucket resides.

SSM SendCommand Document Details

SSM Send Command Linux
Name

Name of the document that
defines the actions run by
the AWS Systems Manager
(SSM) on a Linux-based
Amazon EC2 instance.

SSM Send Command
Windows Name

Name of the document
that defines the actions
run by the AWS SSM on
a Windows-based Amazon
EC2 instance.

Management Account ID

Management Account ID

Management account in
the AWS organization.
The account calls the
ListAccounts API associated
with the AWS organization to
collect CI information from
all the accounts. For more
information, see ListAccounts
on the AWS documentation
site.

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

Field
Description

Enter a value for this field
when the ServiceNow user
was created in an AWS
member account.

Standalone Account ID Details

Standalone Account ID

ID of a member account in
the AWS organization.

Note:   When
specifying a standalone
account, AWS
organization-related
data such as the
organization name,
organization units,
organization ID, and
service accounts are
not imported. If you
want to import the full
data later, clear any
value mentioned in the
Standalone Account ID
field. See the Service
Graph Connector for
AWS - Standalone Setup
[KB1642159] article in
the Now Support
Knowledge Base.

AWS Config Aggregator Details

Config Aggregator Account

AWS account where the
aggregator resource type in
the AWS Config service has
been configured.

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

Field
Description

Enter a value in this field
when you’re using an AWS
Config aggregator.

Config Aggregator Name

Name of the aggregator
resource type. This field is
available only when you
enter a value in the Config
Aggregator Account field.

Config Aggregator Region

Region where the
aggregator resource type
resides. This field is available
only when you enter a value
in the Config Aggregator
Account field.

AWS Key Rotation Setup

AWS Rotate Keys
Option to enable the key
rotation process.

AWS Key Rotation Date

Key rotation date. Set the
value to the required key
rotation date for the first
run. For subsequent runs, this
field is automatically set to
the rotation date. This field
is available only when you
select the AWS Rotate Keys
check box.

AWS Key Rotation Period (in
Days)

Key rotation period in days.
This field is available only
when you select the AWS
Rotate Keys check box.

AWS Key Rotation Status

Status message of a key
rotation displaying whether
the rotation was a success

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

Field
Description

or a failure. This field
is automatically set to
display the key rotation
status message. This field
is available only when you
select the AWS Rotate Keys
check box. If the rotation
status is a failure, an email
notification is triggered, if
configured.

Email accounts for receiving
error notifications

Comma-separated list of the
email addresses of recipients
who receive notifications
about the AWS key rotation
errors.

Email account groups for
receiving error notifications

Comma-separated list of
the ServiceNow groups who
receive notifications about
the AWS key rotation errors.

Gov Cloud Setup

Is Gov Cloud

Option to indicate that the
connection setup is for the
AWS GovCloud.

SSM EKS SendCommand Document Details

EKS Cluster Names
Document

Name of the AWS SSM
document to discover EKS
clusters associated with EC2
Bastion hosts.

EKS Shell Script Document

Name of the AWS SSM
document to fetch CIs
related to Kubernetes
components, such as pods,
services, and deployments,
from EKS clusters.

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

c. Select Save and then Close to close the tab and return to
the guided setup tab.

d. Set the Update configuration properties for instance task to
complete by selecting Mark as Complete.

5. Configure the required EC2 resources for Amazon Elastic Kubernetes
Service (EKS) to import EKS cluster data.
An EKS EC2 resource is a bastion host that has network access
to EKS clusters. The EKS clusters aren't directly accessible to the
connector. Therefore, you must provide the EKS EC2 resource details.
For importing EKS cluster data, the connector uses the SSM Send
Command on EKS EC2 resources to run kubectl commands remotely.

Note:   Ensure that you’ve configured your AWS environment for
the EKS integration. For more information, see the Service Graph
Connector for AWS - Amazon EKS Integration [KB1437138] article
in the Now Support Knowledge Base.

a. For the Configure the EKS Resource Details section of the Service
Graph Connector for AWS page, select Get Started.

b. For the Enter the EKS EC2 Resource Details task, select Configure.

c. On the form that opens in a new tab, fill in the fields.

SG-AWS-EKS-EC2-Resource form

Field
Description

EKS EC2 Resource Id
Identifier of the EKS EC2
resource.

EC2 Account
User name assigned to the EKS
EC2 resource account.

EC2 Region
AWS region where the EKS EC2
resource is located.

Active
Option to activate the EKS EC2
resource.

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

Field
Description

Note:   Set to false, if you
are not using the EKS EC2
resource resource.

Connection

Connection alias associated
with the AWS environment
setup and configured in step
4.a.

d. Select Submit to return to the guided setup.

e. Repeat steps from 5.b to 5.d to add multiple EKS EC2 resources.
All the EKS EC2 resources are added to the SG-AWS-EKS-Master
[sn_aws_integ_sg_aws_eks_master] table.

f. Set the Enter the EKS EC2 Resource Details task to complete by
selecting Mark as Complete.

6. Run the AWS diagnostic tool before running a scheduled import job
to identify any issues in the AWS environment setup.

a. For the Service Graph AWS Diagnostic Tool section of the Service
Graph Connector for AWS page, select Get Started.

b. For the AWS Setup Diagnostic Tool task, select Configure.

c. Select the organization ID from the text field.

d. Select Run Diagnostic Test.

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

Tip:   Select one of the following options to exclude the
corresponding test results from the diagnostic summary:

Skip SSM setup tests

Excludes the software inventory data from the summary
results by not calling the GetInventory API. Select this option
when you’ve opted out or not set up the configuration for
SSM.

Skip SSM Deep Discovery tests

Excludes the deep discovery data from the summary results.
Select this option when you’ve opted out or not set up the
configuration for SSM deep discovery.

Skip EKS setup tests

Excludes the EKS data from the summary results by not
running the kubectl commands. Select this option when
you’ve opted out or not set up the EKS integration.

e. (Optional) View only EKS cluster test results by selecting View EKS
Test Details.

f. (Optional) Preview any previous diagnostic tool results by
selecting Load DT Results, selecting a diagnostic ID, and then
selecting Load Results.

g. When you finish reviewing the diagnostic summary results, select
the back button of your browser to return to the guided setup.

h. Set the AWS Setup Diagnostic Tool task to complete by selecting
Mark as Complete.

7. Configure the scheduled jobs to import data from the AWS
application.

a. In the Configure the scheduled import jobs section of the Service
Graph Connector for AWS page, select Get started.

b. For the Configure the scheduled job task, select Configure.

c. Select the scheduled job that you want to activate.

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

d. On the Scheduled Data Import form, verify the field values for the
scheduled job.
For more information, see Schedule a data import.

e. Select Update.

f. Repeat the steps 7.c to 7.e for each scheduled job for data
import.

g. Select the back icon (<) to return to the guided setup page.

h. Set the Configure the scheduled job task to complete by
selecting Mark as Complete in the guided setup.

8. (Optional) Add multiple AWS instances.

a. In the Add Multiple Instances section of the Service Graph
Connector for AWS page, select Get Started.

b. Ensure that you have edit permissions for the Datasource
[sys_data_source] table to create data sources for the new
instance.

a. Select the Global application scope by using the application
picker.

b. For the Update Data Source Access task, select Configure.

c. In the Application Access related list, select the Can create,
Can update, and Can delete check boxes, if not already
selected.

d. Select Update to close the tab and return to the guided
setup.

e. Modify the application scope again to Service Graph
Connector for AWS by using the application picker.

f. Set the Update Data Source Access task to complete by
selecting Mark as Complete.

c. Update access for scheduled import jobs.

a. Select the Global application scope by using the application
picker.

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

b. For the Update Scheduled Data Import Access task, select
Configure.

c. In the Application Access related list, select the Can create,
Can update, and Can delete check boxes, if not already
selected.

d. Select Update to close the tab and return to the guided
setup tab.

e. Set the Update Scheduled Data Import Access task to
complete by selecting Mark as Complete.

f. Modify the application scope again to Service Graph
Connector for AWS by using the application picker.

d. Clear the cache of the Data Source [sys_data_source] and
Scheduled Data Imports [scheduled_import_set] tables to enable
creating a data source for the new connection in the Service
Graph Connector for AWS.

a. For the Clear Cache for Data Source and Scheduled Data
Imports tables task, select Configure.

b. In the Run script text box of the background script page,
enter the following script:

GlideTableManager.invalidateTable("sys_data_sou
rce");
GlideCacheManager.flushTable("sys_data_sou
rce");

GlideTableManager.invalidateTable("schedu
led_import_set");
GlideCacheManager.flushTable("scheduled_im
port_set");

GlideTableManager.invalidateTable("sys_db
_object");
GlideCacheManager.flushTable("sys_db_objec
t");

c. Select Run Script to run the background script in the global
scope.

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

The script may take several minutes to execute.

d. After the script is executed, select Close.

e. Set the Clear Cache for Data Source and Scheduled
Data Imports tables task to complete by selecting Mark as
Complete.

f. Modify the application scope again to Service Graph
Connector for AWS by using the application picker.

e. Create a credential alias for the new AWS connection in the
Service Graph Connector for AWS.

a. For the Create new Connection & Credentials Alias Record
task, select Configure.

b. On the Connection & Credential Aliases form that opens in a
new tab, fill in the connection details.

c. Select Submit and close the tab and return to the guided
setup tab.

d. Set the Create new Connection & Credentials Alias Record
task to complete by selecting Mark as Complete.

f. Create credentials for the new AWS credential alias.

a. For the Create new Connection & Credentials Alias Record
task, select Configure.

b. On the Connections page of the Workflow Studio, select Add
Connection.

c. In the Create Connection window, fill in the connection
name, access key, and secret key details.

d. Select Create Connection.

e. Close the Workflow Studio and return to the guided setup
tab.

f. Set the Create new Connection & Credentials Alias Record
task to complete by selecting Mark as Complete.

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

g. Update properties for the new instance for the Service Graph
Connector for AWS by selecting Configure for the Configure AWS
environment for the new Instance task.
For more information, follow the step 4.c discussed earlier for
configuring the properties of the AWS connection available by
default.

When you're done updating the properties, set the Configure
AWS environment for the new Instance task to complete by
selecting Mark as Complete.

h. Enter the EKS EC2 Resource details by selecting Configure for the
Update EKS Resource Details task.
For more information, follow the step 5 discussed earlier for
configuring the EKS EC2 Resource details for the AWS connection
available by default.

When you're done updating the properties, set the Update
EKS Resource Details task to complete by selecting Mark as
Complete.

i. Configure the scheduled imports for the new AWS instance.

a. For the Configure the Scheduled Imports task, select
Configure.

b. In the Scheduled Data Imports list that opens in a new tab,
select the organization of the AWS instance that you want to
configure.

c. Select the scheduled data import that you want to activate.

d. On the Scheduled Data Import form, modify the field values
for the scheduled job.

e. Select Update.

f. Repeat the steps 8.i.iii to 8.i.v for each scheduled job for data
import.

g. Close the tab for the Scheduled Data Imports list and return
to the guided setup tab.

h. Set the Configure the Scheduled Imports task to complete by
selecting Mark as Complete in the guided setup.

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

Related concepts

• Handling import failures for large AWS resources

• Handling memory utilization errors for Service Graph Connector for AWS

## CMDB classes targeted in Service Graph Connector for
## AWS

When you complete setting up the connection, you can configure the
integration to periodically pull data from AWS. The data is saved in tables
that extend from the Configuration item [cmdb_ci] table.

Amazon Redshift [cmdb_ci_aws_redshift]

The following attributes in the Amazon Redshift [cmdb_ci_aws_redshift]
table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

TCP port(s)
tcp_port

Cluster Availability Status
cluster_availability_status

Install Status
install_status

Availability Zone
availability_zone

Fully qualified domain name
fqdn

Node Count
node_count

Node Type
node_type

Operational status
operational_status

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

Start date
start_date

VPC ID
vpc_id

Relationships created for Application

Parent class
Relationship type
Child class

Amazon Redshift
[cmdb_ci_aws_redshift
]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Amazon Redshift
[cmdb_ci_aws_redshift
]

Reference

Availability Zone
[cmdb_ci_availability_
zone]

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

Relationship created for Application

Parent class
Relationship type
Child class

Application
[cmdb_ci_appl]
Runs on::Runs
Server
[cmdb_ci_server]

Availability Zone [cmdb_ci_availability_zone]

The following attributes in the Availability Zone
[cmdb_ci_availability_zone] table are populated by collected data:

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

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

AWS Datacenter [cmdb_ci_aws_datacenter]

The following attributes in the AWS Datacenter
[cmdb_ci_aws_datacenter] table are populated by collected data:

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

Name
name

Object ID
object_id

Region
region

Install Status
install_status

Operational status
operational_status

Relationships created for AWS Datacenter

Parent class
Relationship type
Child class

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Contains::Contained
by

Availability Zone
[cmdb_ci_availablity_z
one]

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

AWS Organizational Unit [cmdb_ci_aws_org_unit]

The following attributes in the AWS Organizational Unit
[cmdb_ci_aws_org_unit] table are populated by collected data:

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

Org Unit Parent ID
org_unit_parent_id

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

Organizational ID
aws_org_id

Root ID
root_id

Relationship created for AWS Organizational Unit

Parent class
Relationship type
Child class

AWS Organizational
Unit
[cmdb_ci_aws_org_uni
t]

Contains::Contained
by

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Block Endpoint [cmdb_ci_endpoint_block]

The following attributes in the Block Endpoint [cmdb_ci_endpoint_block]
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

Operational status
operational_status

Cloud DataBase [cmdb_ci_cloud_database]

The following attributes in the Cloud DataBase
[cmdb_ci_cloud_database] table are populated by collected data:

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

TCP port(s)
tcp_port

Automated Backups
automated_backup

Category
category

Fully qualified domain name
fqdn

Install Status
install_status

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

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Cloud DataBase
[cmdb_ci_cloud_data
base]

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

Attribute label
Attribute name

Object ID
object_id

Code Size
code_size

CodeSha256
codesha256

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

AWS Datacenter
[cmdb_ci_aws_datac
enter]

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

Name
name

Object ID
object_id

Fully qualified domain name
fqdn

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

Attribute label
Attribute name

Install Status
install_status

Operational status
operational_status

Relationships created for Cloud Gateway

Parent class
Relationship type
Child class

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
Key Value
[cmdb_key_value]

Cloud Hardware Type [cmdb_ci_cloud_hardware_type]

The following attributes in the Cloud Hardware Type
[cmdb_ci_cloud_hardware_type] table are populated by collected
data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Provider
provider

Cores
cores

Install Status
install_status

IP Address
ip_address

Local Storage GB
local_storage_gb

Memory MB
memory_mb

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

Attribute label
Attribute name

Operational status
operational_status

vCPUs
vcpus

Zone
zone

Relationships created for Cloud Hardware Type

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

Cloud Image [cmdb_ci_cloud_os_image]

The following attributes in the Cloud Image [cmdb_ci_cloud_os_image]
table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Description
short_description

Environment
environment

Guest OS
guest_os

Image Source
image_source

Image Type
image_type

Provider
provider

Root Device Type
root_device_type

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

Relationships created for Cloud Image

Parent class
Relationship type
Child class

Cloud Image
[cmdb_ci_cloud_os_im
age]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Cloud Image
[cmdb_ci_cloud_os_im
age]

Reference
Key Value

Cloud Load Balancer [cmdb_ci_cloud_load_balancer]

The following attributes in the Cloud Load Balancer
[cmdb_ci_cloud_load_balancer] table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Canonical Hosted Zone ID
canonical_hosted_zone_id

Canonical Hosted Zone Name
canonical_hosted_zone_name

DNS Name
dns_name

Fully qualified domain name
fqdn

Install Status
install_status

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

89

Zurich ServiceNow AI Platform Capabilities

---
*Page 90*

Relationships created for Cloud Load Balancer

Parent class
Relationship type
Child class

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Contains::Contained
by

Compute Security
Group
[cmdb_ci_compute_s
ecurity_group]

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

Reference
Key Value
[cmdb_key_value]

Cloud Mgmt Network Interface [cmdb_ci_nic]

The following attributes in the Cloud Mgmt Network Interface
[cmdb_ci_nic] table are populated by collected data:

Attribute label
Attribute name

IP Address
ip_address

Name
name

Object ID
object_id

Public IP
public_ip

Install Status
install_status

Operational status
operational_status

Private DNS
private_dns

Private IP
private_ip

Public DNS
public_dns

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

Attribute label
Attribute name

State
state

Configuration Item
cmdb_ci

Relationships created for Cloud Mgmt Network Interface

Parent class
Relationship type
Child class

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

Use End Point To::Use
End Point From

VNIC Endpoint
[cmdb_ci_endpoint_v
nic]

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

Cidr
cidr

Install Status
install_status

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

AWS Datacenter
[cmdb_ci_aws_datac
enter]

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

Compute Security
Group
[cmdb_ci_compute_s
ecurity_group]

Cloud Network
[cmdb_ci_network]
Reference
Key Value
[cmdb_key_value]

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

ACL Access Type
acl_access_type

Cloud Provider
cloud_provider

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

Attribute label
Attribute name

Creation Date
creation_date

Encryption Type
encryption_type

Install Status
install_status

Operational status
operational_status

Policy Access Type
policy_access_type

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

Cloud Organizations [cmdb_ci_cloud_org]

The following attributes in the Cloud Organizations [cmdb_ci_cloud_org]
table are populated by collected data:

Attribute label
Attribute name

Object ID
object_id

Install Status
install_status

Master Email
master_email

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

93

Zurich ServiceNow AI Platform Capabilities

---
*Page 94*

Attribute label
Attribute name

Root ID
root_id

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

Contains::Contained
by

AWS Organizational
Unit
[cmdb_ci_aws_org_uni
t]

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

Install Status
install_status

Operational status
operational_status

Resource type
resource_type

State
state

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

Relationship created for Cloud Resource

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

Name
name

Account Email
account_email

Install Status
install_status

Is management account
is_master_account

Operational status
operational_status

Parent account
parent_account

Datacenter Type
datacenter_type

Discovery credentials
discovery_credentials

Account Id
account_id

Object ID
object_id

Organization Id
organization_id

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

CIDR
cidr

Install Status
install_status

Operational status
operational_status

State
state

Relationships created for Cloud Subnet

Parent class
Relationship type
Child class

Cloud Subnet
[cmdb_ci_cloud_subn
et]

Contains::Contained
by

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

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

Parent class
Relationship type
Child class

Cloud Subnet
[cmdb_ci_cloud_subn
et]

Contains::Contained
by

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Cloud Subnet
[cmdb_ci_cloud_subn
et]

Reference
Key Value
[cmdb_key_value]

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

Relationships created for Compute Security Group Table

Parent class
Relationship type
Child class

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
Key Value
[cmdb_key_value]

Docker Container [cmdb_ci_docker_container]

The following attributes in the Docker Container
[cmdb_ci_docker_container] table are populated by collected data:

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

Attribute label
Attribute name

Container id
container_id

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

Install Status
install_status

Name
name

Operational status
operational_status

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
[cmdb_ci_dynamodb_table] table are populated by collected data:

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

Attribute label
Attribute name

Name
name

Object ID
object_id

Cloud Provider
cloud_provider

Creation Date
creation_date

Encryption
encryption

Install Status
install_status

Operational status
operational_status

Read Units
read_units

Service Name
service_name

Write Units
write_units

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

Hardware Type [cmdb_ci_compute_template]

The following attributes in the Hardware Type
[cmdb_ci_compute_template] table are populated by collected data:

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

Attribute label
Attribute name

Name
name

Object ID
object_id

Cores
cores

Install Status
install_status

Local Storage GB
local_storage_gb

Memory MB
memory_mb

Operational status
operational_status

vCPUs
vcpus

Note:   If the sn_itom_pattern.use a single hardware type
for cloud data center property is set to true, hardware
type data is populated in the Cloud Hardware Type
[cmdb_ci_cloud_hardware_type] table. If this property is set to
false, hardware type data is populated in the Hardware Type
[cmdb_ci_compute_template] table. Before you configure the
sn_itom_pattern.use a single hardware type for cloud data center
property, the existing hardware type data must be cleaned. For
instructions, see the Service Graph Connector For AWS - Migrating to
a new hardware type model [KB1705233] article in the Now Support
Knowledge Base.

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
sys_class_name

Description
short_description

Environment
environment

Guest OS
guest_os

Image Source
image_source

Image Type
image_type

Install Status
install_status

Operational status
operational_status

Root Device Type
root_device_type

Relationships created for Image

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

Image
[cmdb_ci_os_templat
e]

Reference
Key Value

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

IP Address [cmdb_ci_ip_address]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data:

Attribute label
Attribute name

Install Status
install_status

Nic
nic

IP Address
ip_address

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
Value

Kubernetes Cluster [cmdb_ci_kubernetes_cluster]

The following attributes in the Kubernetes Cluster
[cmdb_ci_kubernetes_cluster] table are populated by collected data:

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

Attribute label
Attribute name

Cluster Resource ID
cluster_resource_id

IP Address
ip_address

Name
name

Port
port

Fully qualified domain name
fqdn

Install status
install_status

Namespace
namespace

Operational status
operational_status

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

Kubernetes Service
[cmdb_ci_kubernetes_
service]

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Cluster of::Cluster

Kubernetes Node
[cmdb_ci_kubernetes_
node]

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

Managed
by::Manages

Server
[cmdb_ci_server]

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Reference
Key Value
[cmdb_key_value]

Kubernetes DaemonSet [cmdb_ci_kubernetes_daemonset]

The following attributes in the Kubernetes DaemonSet
[cmdb_ci_kubernetes_daemonset] table are populated by collected
data:

Attribute label
Attribute name

Kubernetes UID
k8s_uid

Name
name

Namespace
namespace

Install Status
install_status

Operational status
operational_status

SelfLink
self_link

Relationship created for Kubernetes DaemonSet

Parent class
Relationship type
Child class

Kubernetes
DaemonSet
[cmdb_ci_kubernetes_
daemonset]

Hosted on::Hosts

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

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

Install Status
install_status

Operational status
operational_status

SelfLink
self_link

Relationship created for Kubernetes Deployment

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

Attribute label
Attribute name

Install Status
install_status

Namespace
namespace

Operational status
operational_status

Kubernetes Node [cmdb_ci_kubernetes_node]

The following attributes in the Kubernetes Node
[cmdb_ci_kubernetes_node] table are populated by collected data:

Attribute label
Attribute name

Kubernetes UID
k8s_uid

Name
name

Install Status
install_status

Operational status
operational_status

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

106

Zurich ServiceNow AI Platform Capabilities

---
*Page 107*

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

Docker Container
[cmdb_ci_docker_con
tainer]

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

Docker Image
[cmdb_ci_docker_ima
ge]

Kubernetes ReplicaSet [cmdb_ci_kubernetes_replicaset]

The following attributes in the Kubernetes ReplicaSet
[cmdb_ci_kubernetes_replicaset] table are populated by collected
data:

Attribute label
Attribute name

Kubernetes UID
k8s_uid

Name
name

Namespace
namespace

Install Status
install_status

Operational status
operational_status

SelfLink
self_link

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

Install Status
install_status

IP Address
ip_address

Operational status
operational_status

Selector
selector

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

Attribute label
Attribute name

Volume ID
volume_id

Install Status
install_status

Namespace
namespace

Operational status
operational_status

Network Adapter [cmdb_ci_network_adapter]

The following attributes in the Network Adapter
[cmdb_ci_network_adapter] table are populated by collected data:

Attribute label
Attribute name

IP Address
ip_address

MAC Address
mac_address

Configuration Item
cmdb_ci

Name
name

Install Status
install_status

Operational status
operational_status

Relationship created for Network Adapter

Parent class
Relationship type
Child class

Network Adapter
[cmdb_ci_network_ad
apter]

Reference

Server
[cmdb_ci_server],
Linux Server
[cmdb_ci_linux_server]
, or Windows Server
[cmdb_ci_win_server]

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

Server [cmdb_ci_server]

The following attributes in the Server [cmdb_ci_server] table are
populated by collected data:

Attribute label
Attribute name
Data source

Name
name

SG-AWS-SSM-
GetS3Object

SG-AWS-Get-Inventory
(if the AWS SSM service
is enabled)

SG-AWS-EC2 (if the
AWS SSM service isn't
enabled)

Class
sys_class_name

SG-AWS-Software-
Inventory (if the
AWS SSM service
is enabled)

CPU core count
cpu_core_count
SG-AWS-SSM-
GetS3Object

CPU core thread
cpu_core_thread
SG-AWS-SSM-
GetS3Object

CPU count
cpu_count
SG-AWS-SSM-
GetS3Object

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

Attribute label
Attribute name
Data source

CPU name
cpu_name
SG-AWS-SSM-
GetS3Object

CPU manufacturer
cpu_manufacturer
SG-AWS-SSM-
GetS3Object

CPU speed (MHz)
cpu_speed
SG-AWS-SSM-
GetS3Object

CPU type
cpu_type
SG-AWS-SSM-
GetS3Object

Disk Space (GB)
disk_space

SG-AWS-SSM-
GetS3Object

SG-AWS-EC2

DNS Domain
dns_domain
SG-AWS-EC2

Fully qualified domain
name
fqdn
SG-AWS-EC2

Host Name
host_name
SG-AWS-SSM-
GetS3Object

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

Attribute label
Attribute name
Data source

Install Status
install_status
SG-AWS-EC2

Is Virtual
virtual
SG-AWS-EC2

Model ID
model_id
SG-AWS-SSM-
GetS3Object

Object ID
object_id
SG-AWS-EC2

Operating System
os

SG-AWS-EC2

SG-AWS-Software-
Inventory

Operational status
operational_status
SG-AWS-EC2

OS Version
os_version
SG-AWS-Software-
Inventory

RAM (MB)
ram

SG-AWS-SSM-
GetS3Object

SG-AWS-EC2

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

Attribute label
Attribute name
Data source

Serial Number
serial_number
SG-AWS-SSM-
GetS3Object

Note:

• If the AWS Systems Manager (SSM) service isn't enabled,
the connector populates the server records in the Server
[cmdb_ci_server] class. If the AWS SSM service is enabled,
then based on the platform type obtained through the
SSM service, the server records are populated in either the
Linux Server [cmdb_ci_linux_server] class or the Windows Server
[cmdb_ci_win_server] class. The Server [cmdb_ci_server] class is the
parent class of the Linux Server [cmdb_ci_linux_server] and the
Windows Server [cmdb_ci_win_server] classes.

• If the AWS SSM service is enabled, the name field is populated by
the SG-AWS-Get-Inventory data source, and the sys_class_name
field is populated by the SG-AWS-Software-Inventory data source.
If the AWS SSM service isn't enabled, the name field is populated
by the SG-AWS-EC2 data source, and the sys_class_name field isn't
populated.

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
Owns::Owned by
IP Address
[cmdb_ci_ip_address]

Server
[cmdb_ci_server]
Owns::Owned by

Network Adapter
[cmdb_ci_network_ad
apter]

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

Parent class
Relationship type
Child class

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

114

Zurich ServiceNow AI Platform Capabilities

---
*Page 115*

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

Attribute label
Attribute name

Object ID
object_id

Host
host

Install Status
install_status

Mapping Type
mapping_type

Mount Point
mount_point

Operational status
operational_status

Relationship created for Storage Mapping

Parent class
Relationship type
Child class

Storage Mapping
[cmdb_ci_storage_ma
pping]

Use End Point To::Use
End Point From

Block Endpoint
[cmdb_ci_endpoint_bl
ock]

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

116

Zurich ServiceNow AI Platform Capabilities

---
*Page 117*

Attribute label
Attribute name

State
state

Storage Type
storage_type

Relationships created for Storage Volume

Parent class
Relationship type
Child class

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

Reference
Key Value
[cmdb_key_value]

Storage Volume Snapshot [cmdb_ci_storage_vol_snapshot]

The following attributes in the Storage Volume Snapshot
[cmdb_ci_storage_vol_snapshot] table are populated by collected data:

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

Relationship created for Storage Volume Snapshot

Parent class
Relationship type
Child class

Storage Volume
Snapshot
[cmdb_ci_storage_vol
_snapshot]

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

117

Zurich ServiceNow AI Platform Capabilities

---
*Page 118*

Virtual Machine Instance [cmdb_ci_vm_instance]

The following attributes in the Virtual Machine Instance
[cmdb_ci_vm_instance] table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

CPUs
cpus

Disks
disks

Disks size (GB)
disks_size

Fully qualified domain name
fqdn

Install Status
install_status

IP Address
ip_address

Memory (MB)
memory

Monitor
monitor

Network adapters
nics

Operational status
operational_status

Placement Group ID
placement_group_id

State
state

VM Instance ID
vm_inst_id

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

Relationships created for Virtual Machine Instance

Parent class
Relationship type
Child class

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Located in::Houses

Availability Zone
[cmdb_ci_availability_
zone]

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

Provisioned
From::Provisioned

Cloud Hardware Type
[cmdb_ci_cloud_hard
ware_type]

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

Reference
Key Value
[cmdb_key_value]

Virtual Machine
Instance

Use End Point To::Use
End Point From

Storage Volume
[cmdb_ci_storage_vol
ume]

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

119

Zurich ServiceNow AI Platform Capabilities

---
*Page 120*

Parent class
Relationship type
Child class

[cmdb_ci_vm_instanc
e]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Use End Point To::Use
End Point From

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

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

Operational status
operational_status

## Quick start tests for Service Graph Connector for AWS

Validate that Service Graph Connector for AWS still works after you make
any configuration change such as applying an upgrade or developing
an application. Copy and customize these quick start tests to pass when
using your instance-specific data.

Danger:   By default, the system property that is used to run
automated tests is disabled to prevent you from accidentally running
these tests on a production system. To avoid data corruption or
an outage, run tests only on development, test, and other non-
production instances. See Enable or disable executing Automated
Test Framework tests.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

120

Zurich ServiceNow AI Platform Capabilities

---
*Page 121*

SG-AWS: Service Graph Connector for AWS Validation test suite
Test suite to verify the integrity of an integration using
multiple tests.

Test
Description
Release version

SG-AWS API Gateway

Validate the ingestion
of multiple CI records
in the Cloud Gateway.

Utah

SG-AWS DynamoDb

Validate the ingestion
of multiple CI records
in the DynamoDB
table.

Utah

SG-AWS EC2

Loads data in
the CMDB such
as all dependent
CIs such as
Organizations, Service-
Accounts, Networks,
Subnets, and Network-
Interfaces, after which
mock data for SG-
AWS-EC2 is prepared.

Utah

SG-AWS EKS Cluster

Validates the ingestion
of multiple CI records
in the Kubernetes
Cluster table.

Utah

SG-AWS ELB V1

Validates the ingestion
of multiple CI records
in the Cloud Load
Balancer.

Utah

SG-AWS ELB V2

Validates the ingestion
of multiple CI records
in the Cloud Load
Balancer.

Utah

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

121

Zurich ServiceNow AI Platform Capabilities

---
*Page 122*

Test
Description
Release version

SG-AWS Generic
Resource

Validates the ingestion
of multiple CI records
in the Cloud Resource
table.

Utah

SG-AWS Hardware
Type

Validates the ingestion
of multiple CI records
in the Hardware Type
table.

Utah

SG-AWS Image Id

Validates the ingestion
of multiple CI records
in the Image table.

Utah

SG-AWS Image Private

Validates the ingestion
of multiple CI records
in the Image table.

Utah

SG-AWS Lambda

Validates the ingestion
of multiple CI records
in the Cloud function
table.

Utah

SG-AWS Network
Interface

Validates the ingestion
of multiple CI records
in the Cloud Mgmt
Network Interface
table.

Utah

SG-AWS Organization

Tests RTE mappings
for the ingestion of
CIs in the Cloud
Organization table.

Utah

SG-AWS RDS

Validates the ingestion
of mutliple CI records
in the Cloud Database
table.

Utah

SG-AWS S3
Validates the ingestion
of multiple CI records
Utah

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

122

Zurich ServiceNow AI Platform Capabilities

---
*Page 123*

Test
Description
Release version

in the Cloud Object
Storage table.

SG-AWS Security
Group

Validates the ingestion
of multiple CI records
in the Compute
Security Group table.

Utah

SG-AWS Service
Account

Tests RTE mappings for
the ingestion of CIs
in the Cloud Service
Account table.

Utah

SG-AWS Software
Inventory

Validates the ingestion
of Software Data and
classification of CI
records in the Server
table. It tests whether
the server is classified
as Linux or Windows.

Utah

SG-AWS Software
Remove

Validates the removal
of Software Data from
the
cmdb_software_instan
ce or the
cmdb_sam_sw_install
table.

Utah

SG-AWS Storage
Volume

Loads mock import
data for Storage
Volume into the
relevant staging table.
Validates if fields are
populated as
expected in the
cmdb_ci_storage_volu
me,
cmdb_ci_storage_vol_
snapshot, and
sn_aws_extension_attri

Utah

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

123

Zurich ServiceNow AI Platform Capabilities

---
*Page 124*

Test
Description
Release version

butes tables and if the
appropriate
relationships have
been created
between the inserted
CIs.

SG-AWS SSM
SendCommand

Validates the ingestion
of multiple CI records
in the TCP Connection
and Running Process
tables. Updates
records in the Server
table.

Utah

SG-AWS Subnets

Validates the ingestion
of multiple CIs in the
Cloud Subnet table.

Utah

SG-AWS VM Hw
Consolidation

Validates the update
of multiple CI records
in the Virtual Machine
Instance and Server
table.

Utah

SG-AWS VPC

Tests RTE mappings
associated with SG-
AWS VPC Data
source. It loads
import set data for
VPCs, Datacenters,
Service-Acccount,
and Organizations.
Validates if the CIs
have been added to
the cmdb_ci_network
table, the fields
are populated with
the expected value,
and appropriate
relationships verified

Utah

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

124

Zurich ServiceNow AI Platform Capabilities

---
*Page 125*

Test
Description
Release version

through the
cmdb_rel_ci table.

Related topics

• Quick start tests

## Accessing the connection details of Service Graph
## Connector for AWS

You can access the connection details of the Service Graph Connector
for AWS in a single view using the common connection framework (CCF)
included within the Integration Commons for CMDB (sn_cmdb_int_util)
store app.

With the CCF, you can access all the connections used by the
Service Graph Connector for AWS. The connection details include the
connection alias, connection properties, data sources, and scheduled
data imports associated with a connection. You can also test the
connection. For more information, see Accessing the connection details
of Service Graph Connectors.

Access the details of an AWS connection

Access the details of an AWS connection configured for the Service
Graph Connector for AWS.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > AWS > Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

3. On the Service Graph Connections page, view the connection
details such as the connection name, alias, and data sources.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

125

Zurich ServiceNow AI Platform Capabilities

---
*Page 126*

4. Select a related list to view further details of the connection.

5. (Optional) Select the Test Connection related link to test the
connection.

## Additional features within the Service Graph Connector
## for AWS

Use the additional features available within the Service Graph Connector
for AWS to maximize its use for importing data.

The following features are available within the Service Graph Connector
for AWS:

Enabling optimized deletion of retired CIs in AWS

Enable the sn_aws_integ.enableOptimizedDeletion system property for
the optimized deletion of retired configuration items (CIs) in AWS during
delta import of data.

Enabling optimized SG-AWS-SendCommand data source performance

When using the SG-AWS-Software-Inventory data source, enable
the sn_aws_integ.is_software_inventory_enabled system property for
optimizing the performance of the SG-AWS-SendCommand and SG-
AWS-SSM-GetS3Object data sources.

Handling import failures for large AWS resources

Manage the data source failure when importing resources from AWS.

Handling memory utilization errors for Service Graph Connector for AWS

Avoid the memory utilization errors when using the Service Graph
Connector for AWS to import a large number of CIs from an AWS
instance.

Setting up partition size with parallel loading enabled

Optimize the performance of the SG-AWS-Image-Private, SG-AWS-Tags,
SG-AWS-SendCommand, and AWS-SSM-GetS3Object data sources by
configuring the partition size setting in the aws_account_partition_size
connection property.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

126

Zurich ServiceNow AI Platform Capabilities

---
*Page 127*

Disable parallel loading for Service Graph Connector for AWS data
sources

Disable parallel loading for specific data sources in the Service Graph
Connector for AWS.

Handling parallel deletion of CIs in Service Graph Connector for AWS

Optimize performance when using the Service Graph Connector for AWS
by enabling the parallel deletion of CIs.

Enable mapping for Cloud Os Image in AWS

Enable mapping of AWS Cloud Os Image data to the Cloud Image
[cmdb_ci_cloud_os_image] table.

## Enable optimized deletion of retired CIs in AWS

Enable the sn_aws_integ.enableOptimizedDeletion system property for
the optimized deletion of retired configuration items (CIs) in AWS during
full import of data.

Before you begin

Set the application scope to Service Graph Connector for AWS using the
application picker. For more information, see Application picker.

Role required: admin

About this task

By default, the ListDiscoveredResources API is used in batches of 20
to ascertain deleted resource data as there's no other API in AWS
that provides deleted resource deltas. This action adversely impacts
performance, particularly with a large number of resources, as the
majority of time is dedicated to API calls.

When your AWS instance has a large number of CIs to import,
you can enable the sn_aws_integ.enableOptimizedDeletion property to
accelerate the import time. The property enables deleting any retired CI
classes with an improved logic. In this optimized deletion approach, a
complete pull is conducted. Without depending on AWS API calls, the
deleted CI is determined by comparing imported resources from the last

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

127

Zurich ServiceNow AI Platform Capabilities

---
*Page 128*

run with the resources imported in the current run. By default, the value of
the property is set to false.

Procedure

1. Enter sys_properties.list in the navigation filter, and then open
the sn_aws_integ.enableOptimizedDeletion property.

2. In the Value field, enter true.

3. Select Update.

## Enable optimized SG-AWS-SendCommand data
## source performance

When the SG-AWS-Software-Inventory data source is being used,
enable the sn_aws_integ.is_software_inventory_enabled system property
for optimizing the performance of the SG-AWS-SendCommand and SG-
AWS-SSM-GetS3Object data sources.

Before you begin

Set the application scope to Service Graph Connector for AWS using the
application picker. For more information, see Application picker.

Role required: admin

About this task

The SG-AWS-SendCommand and SG-AWS-SSM-GetS3Object data
sources utilize SSM GetInventory API calls for importing software data,
impacting performance. To enhance the performance of the SG-AWS-
SendCommand and SG-AWS-SSM-GetS3Object data sources, consider
leveraging the SG-AWS-Software-Inventory data source by enabling
the sn_aws_integ.is_software_inventory_enabled system property. This
optimization skips a substantial number of SSM GetInventory API
calls, enhancing the performance of the SG-AWS-SendCommand
and SG-AWS-SSM-GetS3Object data sources. However, the SG-AWS-
SendCommand and SG-AWS-SSM-GetS3Object data sources import
data from the same servers that are configured for the SG-AWS-Software-
Inventory data source.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

128

Zurich ServiceNow AI Platform Capabilities

---
*Page 129*

By default, the sn_aws_integ.is_software_inventory_enabled property
is set to false. To enhance the performance of the SG-AWS-
SendCommand and SG-AWS-SSM-GetS3Object data sources, set the
sn_aws_integ.is_software_inventory_enabled property to true.

Procedure

1. Enter sys_properties.list in the navigation filter, and then open
the sn_aws_integ.is_software_inventory_enabled property.

2. In the Value field, enter true.

3. Select Update.

## Handling import failures for large AWS resources

Manage the data source failure when importing resources from AWS.

When importing large AWS resources, the data sources in the Service
Graph Connector for AWS might fail because of a Direct REST response
exceeding the 1024-MB limit. For more information, see REST step.

You can save the response as an attachment to handle the REST
response size limitation error in the Service Graph Connector for AWS.

Save the response as an attachment

With the save response as an attachment feature, the response of
each data source is temporarily stored as an attachment and after
the response is read, the attachment is deleted automatically. The
save response as an attachment feature is activated by default and
is triggered by the sn_aws_integ.save_payload_as_attachment system
property.

As a user with the admin role, you can deactivate the
save response as an attachment feature by setting the
sn_aws_integ.save_payload_as_attachment property to false. When
the feature is deactivated and the response size is within the limit, the
data sources run normally.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

129

Zurich ServiceNow AI Platform Capabilities

---
*Page 130*

## Handling memory utilization errors for Service Graph
## Connector for AWS

You can use the SgAwsApplicationProperties script include to avoid
memory utilization errors when importing a large number of configuration
items (CIs) from an AWS instance via the Service Graph Connector for
AWS.

By making multiple database calls to ingest AWS data in smaller batches,
the SgAwsApplicationProperties script include avoids overloading of the
Robust Transform Engine (RTE) and results in reduced memory usage.
However, for the script include to function properly, verify that the AWS
Config aggregator is enabled on your AWS instance.

To access the script include, navigate to All > System Definitions > Script
Includes, and then search for and select SgAwsApplicationProperties. For
more information, see Script includes.

In the SgAwsApplicationProperties script include, you can modify the
functions as described in the following table to resolve memory utilization
errors.

SgAwsApplicationProperties script include functions

Functionality
Implementation

Enable multiple database calls to
import the AWS Config data.

Set the value of the
isConfigDbLoadEnabled function
to true. For the function to work
correctly, verify that the AWS
Config aggregator is enabled.

Note:   Enabling
isConfigDbLoadEnabled might
impact the import set load
time as multiple database
calls are being made instead
of a single database call.

Enabling the
isConfigDbLoadEnabled function
resolves the memory utilization

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

130

Zurich ServiceNow AI Platform Capabilities

---
*Page 131*

Functionality
Implementation

error for the following data
sources:

• SG-AWS-API-Gateway

• SG-AWS-DynamoDb

• SG-AWS-EC2

• SG-AWS-EKS-Cluster

• SG-AWS-ELB-V1

• SG-AWS-ELB-V2

• SG-AWS-Generic-Resources

• SG-AWS-Lambda

• SG-AWS-Network-Interface

• SG-AWS-RDS

• SG-AWS-S3

• SG-AWS-Security-Group

• SG-AWS-Storage-Volume

• SG-AWS-Subnets

• SG-AWS-VPC

Enable multiple database calls to
import the tag-related data from
your AWS service account.

Set the value of
the isConfigTagsDbLoadEnabled
function to true. For the function
to work correctly, verify that
both the AWS Config aggregator
and the isConfigDbLoadEnabled
function are enabled.
Enabling the
isConfigTagsDbLoadEnabled
function facilitates the AWS Config

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

131

Zurich ServiceNow AI Platform Capabilities

---
*Page 132*

Functionality
Implementation

aggregator to reduce the load
time for tag-related data in the
following data sources:

• SG-AWS-Lambda

• SG-AWS-DynamoDb

• SG-AWS-ELB-V1

• SG-AWS-ELB-V2

## Set partition size for parallel loading-enabled AWS
## accounts

When using the SG-AWS-Image-Private, SG-AWS-Tags, SG-AWS-
SendCommand, and AWS-SSM-GetS3Object data sources, you can
optimize their performance by setting the partition size in the
aws_account_partition_size connection property.

Before you begin

Set the application scope to Service Graph Connector for AWS using the
application picker. For more information, see Application picker.

Role required: admin

About this task

The parallel loading feature is available for the SG-AWS-Image-Private,
SG-AWS-Tags, SG-AWS-SendCommand, and AWS-SSM-GetS3Object data
sources from the Washington DC Patch 5 release. This feature determines
the number of AWS accounts that can be executed as parallel jobs to
retrieve configuration item (CI) data. Partition size determines how many
AWS accounts a single parallel-thread evaluates for data retrieval. For
example, if you set the aws_account_partition_size property to 5 and
there are 25 AWS accounts, the application generates 5 parallel jobs
during data loading.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

132

Zurich ServiceNow AI Platform Capabilities

---
*Page 133*

Note:   If the aws_account_partition_size property isn't configured,
the partition size computation feature of the Integration Commons
for CMDB application automatically determines the partition size for
parallel loading at runtime. See Partition size computation for parallel
loading in Integration Commons for CMDB.

Procedure

1. Navigate to All > Service Graph Connectors > AWS > Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

3. From the Property column of the Service Graph Connection
Properties related list, select aws_account_partition_size.

4. In the Value field, enter a numeric value greater than 0 for the
partition size.

5. Select Update.

## Disable parallel loading for Service Graph Connector
## for AWS data sources

You can disable parallel loading for specific data sources in the Service
Graph Connector for AWS.

Before you begin

Set the application scope to Service Graph Connector for AWS using the
application picker. For more information, see Application picker.

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > AWS > Data sources.

2. From the list of data sources, open the data source for which you
want to disable parallel loading.

3. Clear the Enable parallel loading check box.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

133

Zurich ServiceNow AI Platform Capabilities

---
*Page 134*

4. Select Update.

## Handling parallel deletion of CIs in Service Graph
## Connector for AWS

Parallel deletion of configuration items (CIs) in the Service Graph
Connector for AWS optimizes performance.

The parallel deletion feature is available for the following data sources
from Washington DC patch 5 after the parallel job plugin is activated:

• SG-AWS-API-Gateway

• SG-AWS-DynamoDb

• SG-AWS-EC2

• SG-AWS-ELB-V1

• SG-AWS-ELB-V2

• SG-AWS-Generic-Resources

• SG-AWS-Lambda

• SG-AWS-Network-Interface

• SG-AWS-RDS

• SG-AWS-S3

• SG-AWS-Security-Group

• SG-AWS-Storage-Volume

• SG-AWS-Subnets

• SG-AWS-VPC

Note:   If you upgraded to Service Graph Connector for AWS version
2.9.1 before the parallel job plugin was activated, you must run the
SGC - Parallel Loading Fix script to enable parallel deletion.

Multiple jobs are created for deleting CIs based on the number of
accounts in your configuration. You can modify the number of jobs that

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

134

Zurich ServiceNow AI Platform Capabilities

---
*Page 135*

are created by setting the partition size in the aws_account_partition_size
connection property. See Set partition size for parallel loading-enabled
AWS accounts.

Note:   Only one job is created to import new and updated CIs.

## Enable mapping for Cloud Os Image in AWS

Enable the sn_cmdb_ci_class.use_single_cloud_os_image system
property to add Cloud Os Image data to the Cloud Image
[cmdb_ci_cloud_os_image] table instead of adding the data to the
Image [cmdb_ci_os_template] table.

Before you begin

Set the application scope to Service Graph Connector for AWS using the
application picker. For more information, see Application picker.

Role required: admin

About this task

In Service Graph Connector for AWS version 2.9.1 and earlier, the
Cloud Os Image data was added to the Image [cmdb_ci_os_template]
table. Multiple records were created for the same image
because the Image [cmdb_ci_os_template] table is a dependent
class. Starting with the Service Graph Connector for AWS 2.10.0
version, Cloud Os Image data is added to the Cloud Image
[cmdb_ci_cloud_os_image] table, which is an independent class, when
the sn_cmdb_ci_class.use_single_cloud_os_image system property is
enabled.

Procedure

1. Enter sys_properties.list in the navigation filter, and then open
the sn_cmdb_ci_class.use_single_cloud_os_image property.

2. In the Value field, enter true.

3. Select Update.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

135

Zurich ServiceNow AI Platform Capabilities

---
*Page 136*

## Service Graph Connector for AWS reference

Reference topics provide additional information about Service Graph
Connector for AWS components.

• Supported AWS resource types

Several AWS resource types are imported as CMDB data by the Service
Graph Connector for AWS.

• AWS discovery solutions comparison

ITOM Visibility applications discover a variety of AWS resources
and populate the relevant configuration item (CI) classes in the
Configuration Management Database (CMDB) with their attributes.

• Life cycle management of records in Service Graph Connector for AWS

Life cycle management in the Service Graph Connector for AWS
monitors and updates the statuses of AWS resources throughout their
entire life cycle, from creation to deletion.

• Record removal process in Service Graph Connector for AWS

The Service Graph Connector for AWS uses the optimized deletion
approach to manage removal of records.

## Supported AWS resource types

Several AWS resource types are imported as CMDB data by the Service
Graph Connector for AWS.

AWS Config resources

When the AWS Config aggregator is enabled, the following APIs are
invoked:

• ListDiscoveredResources

• BatchGetAggregateResourceConfig

• SelectAggregateResourceConfig

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

136

Zurich ServiceNow AI Platform Capabilities

---
*Page 137*

When the AWS Config aggregator is disabled, the following APIs are
invoked:

• ListDiscoveredResources

• SelectResourceConfig

• BatchGetResourceConfigAction

Note:   For a list of AWS resource types supported by AWS Config, see
Supported Resource Types on the AWS documentation site.

CMDB CI classes and AWS Config resources

CMDB CI classes
AWS resource type
AWS Config resource
identifier

Cloud Network
[cmdb_ci_network]
Amazon VPC
AWS::EC2::VPC

Cloud Subnet
[cmdb_ci_cloud_subn
et]

Amazon subnet
AWS::EC2::Subnet

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Amazon Elastic
network interface

AWS::EC2::NetworkInte
rface

Compute Security
Group
[cmdb_ci_compute_s
ecurity_group]

Amazon EC2 security
group

AWS::EC2::SecurityGro
up

Storage Volume
[cmdb_ci_storage_vol
ume]

Amazon EBS volume
AWS::EC2::Volume

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

137

Zurich ServiceNow AI Platform Capabilities

---
*Page 138*

CMDB CI classes
AWS resource type
AWS Config resource
identifier

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Classic load balancer
AWS::ElasticLoadBalan
cing::LoadBalancer

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Application load
balancer, network
load balancer,
or gateway load
balancer

AWS::ElasticLoadBalan
cingV2::LoadBalancer

Cloud Gateway
[cmdb_ci_cloud_gate
way]

API gateway with
WebSocket APIs or
HTTP APIs

AWS::ApiGatewayV2::
Api

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Amazon EC2 instance
AWS::EC2::Instance

Server
[cmdb_ci_server]
Amazon EC2 instance
AWS::EC2::Instance

Cloud DataBase
[cmdb_ci_cloud_data
base]

Amazon RDS DB
instance
AWS::RDS::DBInstance

Cloud Function
[cmdb_ci_cloud_funct
ion]

Lambda function
AWS::Lambda::Functio
n

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

138

Zurich ServiceNow AI Platform Capabilities

---
*Page 139*

CMDB CI classes
AWS resource type
AWS Config resource
identifier

Cloud Object Storage
[cmdb_ci_cloud_obje
ct_storage]

Amazon S3 bucket
AWS::S3::Bucket

DynamoDB Table
[cmdb_ci_dynamodb_
table]

DynamoDB table
AWS::DynamoDB::Tabl
e

Software
[cmdb_ci_spkg]

Software configuration
for managed
instances

AWS::SSM::ManagedIn
stanceInventory

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Amazon EKS cluster
AWS::EKS::Cluster

Amazon Redshift
[cmdb_ci_aws_redshift
]

Amazon Redshift
AWS::Redshift::Cluster

Amazon EC2 resources

CMDB CI classes and Amazon EC2 resources

CMDB CI classes
AWS resource type
AWS API action

Availability Zone
[cmdb_ci_availability_
zone]

AWS availability zone
None

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

139

Zurich ServiceNow AI Platform Capabilities

---
*Page 140*

CMDB CI classes
AWS resource type
AWS API action

Hardware Type
[cmdb_ci_compute_t
emplate]

Amazon EC2 instance
types
DescribeInstanceTypes

Image
[cmdb_ci_os_templat
e]

Amazon Machine
Image (AMI)
DescribeImages

Cloud Image
[cmdb_ci_cloud_os_im
age]

Amazon Machine
Image (AMI)
DescribeImages

Cloud Hardware Type
[cmdb_ci_cloud_hard
ware_type]

Amazon EC2 instance
types
DescribeInstanceTypes

AWS Systems Manager resources

All AWS Systems Manager resources invoke the SendCommand API
action.

CMDB CI classes and AWS Systems Manager resources

CMDB CI classes
AWS resource type
AWS API action

Running Process
[cmdb_running_proce
ss]

Running process in
EC2 instances
SendCommand

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

140

Zurich ServiceNow AI Platform Capabilities

---
*Page 141*

CMDB CI classes
AWS resource type
AWS API action

TCP Connections
[cmdb_tcp]

TCP connections in
EC2 instances

Kubernetes Node
[cmdb_ci_kubernetes_
node]

Amazon EKS node

Kubernetes Pod
[cmdb_ci_kubernetes_
pod]

Amazon EKS pod

Kubernetes Service
[cmdb_ci_kubernetes_
service]

Amazon EKS service

Kubernetes
DaemonSet
[cmdb_ci_kubernetes_
daemonset]

Kubernetes
DaemonSet

Kubernetes
Namespace
[cmdb_ci_kubernetes_
namespace]

Kubernetes
namespace

Kubernetes
Deployment
Kubernetes
deployment

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

141

Zurich ServiceNow AI Platform Capabilities

---
*Page 142*

CMDB CI classes
AWS resource type
AWS API action

[cmdb_ci_kubernetes_
deployment]

Docker Container
[cmdb_ci_docker_con
tainer]

Docker container

Kubernetes Volume
[cmdb_ci_kubernetes_
volume]

Kubernetes Volume

Organizations resources

CMDB CI classes and organizations

CMDB CI classes
AWS resource type
AWS API action

Cloud Organizations
[cmdb_ci_cloud_org]
AWS Organizations
DescribeOrganization

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

AWS accounts
ListAccounts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

AWS regions
DescribeRegions

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

142

Zurich ServiceNow AI Platform Capabilities

---
*Page 143*

Resource Group Tagging resources

CMDB CI class and resource group tagging

CMDB classes
AWS resource type
AWS API action

Key Value
[cmdb_key_value]

Tags for AWS Lambda,
Amazon DynamoDB,
ELBv1, and ELBv2

GetResources

Generic resources

Generic resources are stored in the Cloud Resource
[cmdb_ci_cmp_resource] CMDB CI class.

CMDB CI classes and generic resources

CMDB CI class
AWS resource type
AWS API action

Cloud Resource
[cmdb_ci_cmp_resour
ce]

State Manager
association
compliance

AWS::SSM::Association
Compliance

Database subnet
group

AWS::RDS::DBSubnetGr
oup

AWS WAF rate based
rule

AWS::WAF::RateBased
Rule

AWS WAF regional rule
group

AWS::WAFRegional::Ru
leGroup

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

143

Zurich ServiceNow AI Platform Capabilities

---
*Page 144*

CMDB CI class
AWS resource type
AWS API action

AWS WAF regional
rate based rule

AWS::WAFRegional::Ra
teBasedRule

Managed policies and
inline policies
AWS::IAM::Policy

AWS WAF Web ACL
rule
AWS::WAF::WebACL

AWS WAF Regional
Web ACL rule

AWS::WAFRegional::W
ebACL

AWS Certificate
Manager (ACM)
certificate

AWS::ACM::Certificate

Amazon EC2 Auto
Scaling group

AWS::AutoScaling::Aut
oScalingGroup

IAM user for AWS
account
AWS::IAM::User

Amazon Redshift
event subscription

AWS::Redshift::EventSu
bscription

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

144

Zurich ServiceNow AI Platform Capabilities

---
*Page 145*

CMDB CI class
AWS resource type
AWS API action

Amazon RDS DB
snapshot
AWS::RDS::DBSnapshot

Amazon Redshift
cluster parameter
group

AWS::Redshift::ClusterP
arameterGroup

Amazon EC2 Auto
Scaling group launch
configuration

AWS::AutoScaling::Lau
nchConfiguration

Amazon Redshift
cluster snapshot

AWS::Redshift::ClusterS
napshot

AWS CloudFormation
stack

AWS::CloudFormation:
:Stack

AWS CodeBuild
project

AWS::CodeBuild::Proje
ct

AWS Elastic Beanstalk
application version

AWS::ElasticBeanstalk::
ApplicationVersion

AWS CodePipeline
pipeline

AWS::CodePipeline::Pi
peline

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

145

Zurich ServiceNow AI Platform Capabilities

---
*Page 146*

CMDB CI class
AWS resource type
AWS API action

Amazon Redshift
security group

AWS::Redshift::ClusterS
ecurityGroup

Amazon CloudFront
distribution

AWS::CloudFront::Distri
bution

AWS CloudTrail trail
AWS::CloudTrail::Trail

Amazon CloudFront
streaming distribution

AWS::CloudFront::Strea
mingDistribution

AWS WAF rule group
AWS::WAF::RuleGroup

Amazon RDS DB
security group

AWS::RDS::DBSecurityG
roup

Amazon RDS event
subscription

AWS::RDS::EventSubscr
iption

AWS WAF regional rule
AWS::WAFRegional::Ru
le

AWS WAF rule
AWS::WAF::Rule

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

146

Zurich ServiceNow AI Platform Capabilities

---
*Page 147*

CMDB CI class
AWS resource type
AWS API action

IAM role for AWS
account
AWS::IAM::Role

Amazon EC2 Auto
Scaling scheduled
action

AWS::AutoScaling::Sch
eduledAction

AWS Elastic Beanstalk
environment

AWS::ElasticBeanstalk::
Environment

AWS Redshift cluster
AWS::Redshift::Cluster

Amazon EC2 Auto
Scaling group scaling
policy

AWS::AutoScaling::Sca
lingPolicy

AWS Shield protected
AWS resource

AWS::Shield::Protectio
n

Amazon CloudWatch
alarm

AWS::CloudWatch::Ala
rm

EncryptionConfig -
AWS X-Ray

AWS::XRay::Encryption
Config

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

147

Zurich ServiceNow AI Platform Capabilities

---
*Page 148*

CMDB CI class
AWS resource type
AWS API action

AWS Shield protected
AWS region

AWS::ShieldRegional::P
rotection

Amazon Redshift
subnet group

AWS::Redshift::ClusterS
ubnetGroup

AWS Elastic Beanstalk
application

AWS::ElasticBeanstalk::
Application

IAM group for AWS
account
AWS::IAM::Group

## AWS discovery solutions comparison

ITOM Visibility applications discover a variety of AWS resources and
populate the relevant configuration item (CI) classes in the Configuration
Management Database (CMDB) with their attributes.

ITOM Visibility solutions

ITOM Visibility can offer you comprehensive visibility into your
organization's cloud infrastructure. Each application offers unique
strengths and capabilities, and by comparing them you can gain holistic
insights on their capabilities and benefits.

ITOM Visibility solutions for discovering AWS

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

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

148

Zurich ServiceNow AI Platform Capabilities

---
*Page 149*

ITOM Visibility solution
Overview
Configuration

the latest release
version.

• You must provide
ITOM Visibility
with access
permissions. For more
information, see
Setting up AWS
service accounts

Service Graph
Connector for AWS

Service Graph
Connector for AWS

Configure Service
Graph Connector for
AWS using the guided
setup

Note:

The CI class, in most cases, is applicable to both solutions. If it's not
applicable to one of the solutions, the solution is marked "N/A".

Discovery and Service Mapping Patterns vs Service Graph
Connector for AWS

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

AWS::AppSync::
API
Yes
No
cmdb_aws_app
sync_api

AWS::Athena::W
orkgroup
Yes
No
cmdb_aws_athe
na_workgroup

AWS::Backup::B
ackupPlan
Yes
No

cmdb_aws_bac
kup_backup_pl
an

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

149

Zurich ServiceNow AI Platform Capabilities

---
*Page 150*

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

AWS::Backup::B
ackupVault
Yes
No

cmdb_aws_bac
kup_backup_va
ult

AWS::CloudFront
::Distribution
Yes
N/A

cmdb_aws_clou
dfront_distributio
n

AWS::CloudFront
::Distribution
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::CloudWat
ch::Log
Yes
No
cmdb_aws_clou
dwatch_log

AWS::CodeDepl
oyment::Deploy
ment

Yes
No

cmdb_aws_cod
edeploy_deploy
ment

AWS::CodePipeli
ne::Pipeline
Yes
N/A

cmdb_aws_cod
epipeline_pipeli
ne

AWS::CodePipeli
ne::Pipeline
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::DMS::Endp
oint
Yes
No
cmdb_aws_dms
_endpoint

AWS::ElasticBea
nstalk::Applicati
on

Yes
N/A

cmdb_aws_elast
ic_beanstalk_ap
plication

AWS::ElasticBea
nstalk::Applicati
on

N/A
Yes
cmdb_ci_cmp_r
esource

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

150

Zurich ServiceNow AI Platform Capabilities

---
*Page 151*

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

AWS::EMR::Clust
er
Yes
No
cmdb_aws_emr
_cluster

AWS::EventBridg
e::EventBus
Yes
No

cmdb_aws_eve
ntbridge_event_
bus

AWS::FSx::Backu
p
Yes
No
cmdb_aws_fsx_
backup

AWS::FSx::FileSyst
em
Yes
No
cmdb_aws_fsx_fi
le_system

AWS::Glue::Data
base
Yes
No
cmdb_aws_glue
_database

AWS::IAM::Policy
Yes
N/A
cmdb_aws_iam
_policy

AWS::IAM::Policy
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::IAM::Role
Yes
N/A
cmdb_aws_iam
_role

AWS::IAM::Role
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::IAM::User
Yes
N/A
cmdb_aws_iam
_user

AWS::IAM::User
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::KMS::Key
Yes
No
cmdb_aws_kms
_key

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

151

Zurich ServiceNow AI Platform Capabilities

---
*Page 152*

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

AWS::MQ::Broker
Yes
No
cmdb_aws_mq_
broker

AWS::MQ::Confi
guration
Yes
No
cmdb_aws_mq_
configuration

AWS::S3::Glacier
Vault
Yes
No
cmdb_aws_s3_g
lacier_vault

AWS::SageMake
r::NotebookInsta
nce

Yes
No

cmdb_aws_sag
emaker_notebo
ok_instance

AWS::SecretsMa
nager::Secret
Yes
No

cmdb_aws_secr
ets_manager_se
cret

AWS::SimpleEma
ilService::Identity
Yes
No

cmdb_aws_simp
le_email_service
_identity

AWS::SQS::Queu
e
Yes
No
cmdb_aws_sqs_
queue

AWS::StepFuncti
ons::StateMachi
ne

Yes
No

cmdb_aws_step
_functions_state
_machine

AWS::StorageGa
teway::Gatewa
y

Yes
No

cmdb_aws_stor
age_gateway_g
ateway

AWS::SystemsMa
nager::Docume
nt

Yes
No

cmdb_aws_syste
ms_manager_d
ocument

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

152

Zurich ServiceNow AI Platform Capabilities

---
*Page 153*

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

AWS::SystemsMa
nager::Paramet
erStore

Yes
No

cmdb_aws_syste
ms_manager_p
arameter_store

AWS::TransferFa
mily::Server
Yes
No

cmdb_aws_tran
sfer_family_serve
r

AWS::VPC::FlowL
og
Yes
No
cmdb_aws_vpc
_flow_log

AWS::VPC::Man
agedPrefixList
Yes
No

cmdb_aws_vpc
_managed_prefi
x_list

AWS::XRay::Sam
plingRule
Yes
No
cmdb_aws_xray
_sampling_rule

ec2:DescribeAv
ailabilityZones
Yes
Yes
cmdb_ci_availa
bility_zone

ec2:DescribeRe
gions
Yes
Yes
cmdb_ci_aws_d
atacenter

AWS::Kinesis::Stre
am
Yes
No
cmdb_ci_aws_ki
nesis_data

AWS::KinesisAnal
ytics
Yes
No

cmdb_ci_aws_ki
nesis_data_anal
ytics

AWS::KinesisFireh
ose
Yes
No
cmdb_ci_aws_ki
nesis_firehose

AWS::KinesisVide
o
Yes
No
cmdb_ci_aws_ki
nesis_video

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

153

Zurich ServiceNow AI Platform Capabilities

---
*Page 154*

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

AWS::Redshift::Cl
uster
Yes
N/A
cmdb_ci_aws_re
dshift

AWS::Redshift::Cl
uster
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::Certificate
Manager::Certifi
cate

Yes
No
cmdb_ci_certific
ate

AWS::Cognito::U
serPool
Yes
No
cmdb_ci_cloud_
authentication

AWS::RDS::DBInst
ance
Yes
Yes
cmdb_ci_cloud_
database

AWS::ECS::Cluste
r
Yes
No
cmdb_ci_cloud_
ecs_cluster

AWS::ECS::Servic
e
Yes
No
cmdb_ci_cloud_
ecs_service

AWS::ECS::TaskD
efinition
Yes
No

cmdb_ci_cloud_
ecs_task_definiti
on

AWS::Lambda::F
unction
Yes
Yes
cmdb_ci_cloud_
function

AWS::ApiGatew
ay::RestApi
Yes
Yes
cmdb_ci_cloud_
gateway

ec2:DescribeInst
anceTypes
Yes
Yes
cmdb_ci_cloud_
hardware_type

AWS::EC2::Host
Yes
No
cmdb_ci_cloud_
host

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

154

Zurich ServiceNow AI Platform Capabilities

---
*Page 155*

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

AWS::EC2::KeyP
air
Yes
No
cmdb_ci_cloud_
key_pair

AWS::ElasticLoa
dBalancingV2::L
oadBalancer

Yes
Yes
cmdb_ci_cloud_
load_balancer

Amazon::S3::Buc
ket
Yes
Yes
cmdb_ci_cloud_
object_storage

Organizations
Yes
Yes

cmdb_ci_cloud_
org or
cmdb_ci_cloud_
service_account

Organizations::A
WS accounts
Yes
Yes
cmdb_ci_cloud_
service_account

AWS::EC2::Subn
et
Yes
Yes
cmdb_ci_cloud_
subnet

AWS SSM agents
Yes
No

cmdb_ci_cloud_
system_manage
ment_agent

AWS::EC2::Subn
et
Yes
No
cmdb_ci_cloud_
subnet

AWS::WAF::Web
ACL
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::WAFRegio
nal::WebACL
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::ACM::Certi
ficate
N/A
Yes
cmdb_ci_cmp_r
esource

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

155

Zurich ServiceNow AI Platform Capabilities

---
*Page 156*

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

AWS::Redshift::E
ventSubscription
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::RDS::DBSn
apshot
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::Redshift::Cl
usterParameter
Group

N/A
Yes
cmdb_ci_cmp_r
esource

AWS::AutoScalin
g::LaunchConfig
uration

N/A
Yes
cmdb_ci_cmp_r
esource

AWS::Redshift::Cl
usterSnapshot
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::CloudForm
ation::Stack
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::CodeBuild:
:Project
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::ElasticBea
nstalk::Applicati
onVersion

N/A
Yes
cmdb_ci_cmp_r
esource

AWS::Redshift::Cl
usterSecurityGro
up

N/A
Yes
cmdb_ci_cmp_r
esource

AWS::CloudTrail::
Trail
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::CloudFront
::StreamingDistri
bution

N/A
Yes
cmdb_ci_cmp_r
esource

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

156

Zurich ServiceNow AI Platform Capabilities

---
*Page 157*

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

AWS::WAF::Rule
Group
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::RDS::DBSe
curityGroup
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::RDS::Event
Subscription
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::WAF::Rule
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::AutoScalin
g::ScheduledAc
tion

N/A
Yes
cmdb_ci_cmp_r
esource

AWS::ElasticBea
nstalk::Environm
ent

N/A
Yes
cmdb_ci_cmp_r
esource

AWS::AutoScalin
g::ScalingPolicy
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::Shield::Prot
ection
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::CloudWat
ch::Alarm
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::XRay::Encr
yptionConfig
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::ShieldRegi
onal::Protection
N/A
Yes
cmdb_ci_cmp_r
esource

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

157

Zurich ServiceNow AI Platform Capabilities

---
*Page 158*

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

AWS::Redshift::Cl
usterSubnetGrou
p

N/A
Yes
cmdb_ci_cmp_r
esource

AWS::IAM::Grou
p
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::WAFRegio
nal::RateBasedR
ule

N/A
Yes
cmdb_ci_cmp_r
esource

AWS::WAFRegio
nal::RuleGroup
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::WAF::Rate
BasedRule
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::RDS::DBSu
bnetGroup
N/A
Yes
cmdb_ci_cmp_r
esource

AWS::SSM::Assoc
iationComplianc
e

N/A
Yes
cmdb_ci_cmp_r
esource

AWS::EC2::Securi
tyGroup
Yes
Yes

cmdb_ci_comp
ute_security_gro
up

ec2:DescribeInst
anceTypes
Yes
Yes
cmdb_ci_comp
ute_template

AWS::ECR::Repo
sitory
Yes
No
cmdb_ci_contai
ner_repository

AWS::EC2::Custo
merGateway
Yes
No
cmdb_ci_custo
mer_gateway

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

158

Zurich ServiceNow AI Platform Capabilities

---
*Page 159*

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

Docker
container
Yes
Yes
cmdb_ci_docke
r_container

ecr:DescribeIma
ges
Yes
No
cmdb_ci_docke
r_image

AWS::DynamoD
B::GlobalTable
Yes
Yes
cmdb_ci_dyna
modb_table

AWS::AutoScalin
g::AutoScalingG
roup

Yes
N/A
cmdb_ci_instan
ce_scale_set

AWS::AutoScalin
g::AutoScalingG
roup

N/A
Yes
cmdb_ci_cmp_r
esource

AWS::EC2::Intern
etGateway
Yes
No
cmdb_ci_interne
t_gateway

AWS::EKS::Cluste
r
Yes
Yes
cmdb_ci_kubern
etes_cluster

WS::ElasticLoadB
alancingV2::Tar
getGroup

Yes
No
cmdb_ci_lb_po
ol

AWS::ElasticLoa
dBalancingV2::T
argetGroup
TargetDescriptio
n

Yes
No
cmdb_ci_lb_po
ol_member

AWS::ElasticLoa
dBalancingV2::Li
stener

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

159

Zurich ServiceNow AI Platform Capabilities

---
*Page 160*

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

AWS::EC2::NatG
ateway
Yes
No
cmdb_ci_nat_g
ateway

AWS::EC2::VPC
Yes
Yes
cmdb_ci_netwo
rk

AWS::EC2::Netw
orkAcl
Yes
No
cmdb_ci_netwo
rk_acl

AWS::EC2::Netw
orkInterface
Yes
Yes
cmdb_ci_nic

AWS::EC2::Route
Table
Yes
No
cmdb_ci_route_
table

AWS::EC2::Volu
meAttachment
Yes
Yes
cmdb_ci_storag
e_mapping

AWS::EC2::Volu
me
Yes
Yes
cmdb_ci_storag
e_volume

AWS::EC2::VPNG
ateway
Yes
No
cmdb_ci_virtual
_pvt_gateway

AWS::EC2::VPNC
onnection
Yes
No
cmdb_ci_vpn_c
onnection

AWS::WAFv2::W
ebACL
Yes
N/A
cmdb_ci_web_a
cl

AWS::WAFv2::W
ebACL
N/A
Yes
cmdb_ci_cmp_r
esource

Tags
Yes
Yes
cmdb_key_valu
e

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

160

Zurich ServiceNow AI Platform Capabilities

---
*Page 161*

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

Kubernetes
DaemonSet
No
Yes
cmdb_ci_kubern
etes_daemonset

Kubernetes
deployment
No
Yes

cmdb_ci_kubern
etes_deploymen
t

Kubernetes
namespace
No
Yes

cmdb_ci_kubern
etes_namespac
e

Amazon EKS
node
No
Yes
cmdb_ci_kubern
etes_node

Amazon EKS
pod
No
Yes
cmdb_ci_kubern
etes_pod

Amazon EKS
service
No
Yes
cmdb_ci_kubern
etes_service

Kubernetes
Volume
No
Yes
cmdb_ci_kubern
etes_volume

AWS::SSM::Mana
gedInstanceInv
entory

No
Yes
cmdb_ci_spkg

AWS::EC2::VPCP
eeringConnecti
on

Yes
No

cmdb_aws_elast
ic_compute_clo
ud_vpc_peering
_connection

AWS::Elastic
Compute
Cloud::VPC
Endpoint Service

Yes
No

cmdb_aws_elast
ic_cloud_comp
ute_vpc_endpoi
nt_service

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

161

Zurich ServiceNow AI Platform Capabilities

---
*Page 162*

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

AWS::Elastic
Compute
Cloud::EBS
Snapshot

Yes
No

cmdb_aws_elast
ic_cloud_comp
ute_ebs_snapsh
ot

AWS::Elastic
Compute
Cloud::Reserved
Instance

Yes
No

cmdb_aws_elast
ic_cloud_comp
ute_reserved_ins
tance

AWS::RDS::DBSn
apshot
Yes
No

cmdb_aws_relat
ional_database_
services_db_sna
pshot

AWS::SageMake
r::Training Job
Yes
No

cmdb_aws_sag
emaker_training
_job

AWS::Elastic
File System::File
System

Yes
No

cmdb_aws_elast
ic_file_system_fil
e_system

AWS::Redshift
Serverless::Name
space

Yes
No

cmdb_aws_reds
hift_serverless_n
amespace

AWS::Redshift
Serverless::Work
group

Yes
No

cmdb_aws_reds
hift_serverless_w
orkgroup

AWS::Redshift
Serverless::Snaps
hot

Yes
No

cmdb_aws_reds
hift_serverless_sn
apshot

AWS::ElastiCach
e::Snapshot
Yes
No

cmdb_aws_elast
icache_snapsho
t

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

162

Zurich ServiceNow AI Platform Capabilities

---
*Page 163*

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

AWS::CloudTrail::
Trail
Yes
No
cmdb_aws_clou
dtrail_trail

AWS::Batch::Co
mputeEnvironm
ent

Yes
No

cmdb_aws_bat
ch_compute_en
vironment

AWS::StorageGa
teway::FileShare
Yes
No

cmdb_aws_stor
age_gateway_fil
e_share

AWS::DataSync::
Task
Yes
No
cmdb_aws_dat
async_task

AWS::API
Gateway::Dom
ain Name

Yes
No

cmdb_aws_api_
gateway_domai
n_name

AWS DynamoDB
Cluster
Yes
No
cmdb_ci_cluster
_node

AWS::GlobalAcc
elerator::Accele
rator

Yes
No

cmdb_aws_glob
al_accelerator_
accelerator

AWS::Timestrea
m::InfluxDBInstan
ce

Yes
No

cmdb_aws_time
stream_for_influx
db_database_in
stance

AWS::CloudHSM:
:HSM
Yes
No
cmdb_aws_clou
dhsm_hsm

AWS::MWAA::En
vironment
Yes
No

cmdb_aws_man
aged_workflows
_for_apache_air

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

163

Zurich ServiceNow AI Platform Capabilities

---
*Page 164*

Resource type

Supported by
Cloud Discovery
and Service
Mapping Patterns

Supported by
Cloud Service
Graph Connectors

CI Class

flow_environme
nt

AWS::NetworkFir
ewall::Firewall
Yes
No

cmdb_aws_net
work_firewall_fire
wall

## Life cycle management of records in Service Graph
## Connector for AWS

Life cycle management in the Service Graph Connector for AWS
monitors and updates the statuses of AWS resources throughout their
entire life cycle, from creation to deletion.

The life cycle management process helps maintain the accuracy and
integrity of data in the Configuration Management Database (CMDB).

In life cycle management, the record removal process involves
systematically deleting obsolete or unnecessary resources. This step
ensures that outdated entries are cleared, keeping the CMDB accurate
and up-to-date. See Record removal process in Service Graph
Connector for AWS.

Life cycle management for CIs in Service Graph Connector for
AWS

The following table lists the configuration items (CIs) in CMDB and other
non-CMDB tables for which life cycle management is available in Service
Graph Connector for AWS.

Supported tables for life cycle management

Data source
CMDB CI classes
Life cycle management
available

SG-AWS-Organization
Cloud Organizations
[cmdb_ci_cloud_org]
Yes

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

164

Zurich ServiceNow AI Platform Capabilities

---
*Page 165*

Data source
CMDB CI classes
Life cycle management
available

SG-AWS-Org-Units

AWS Organizational
Unit
[cmdb_ci_aws_org_uni
t]

Yes

SG-AWS-Service-
Account

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Yes

SG-AWS-Service-
Account-Tags

Key Value
[cmdb_key_value]
No

SG-AWS-Org-Unit-
Accounts
None
No

SG-AWS-Datacenters

AWS Datacenter
[cmdb_ci_aws_datac
enter]

No

SG-AWS-VPC

Network Adapter
[cmdb_ci_network_ad
apter]

Yes

SG-AWS-Subnets

Availability Zone
[cmdb_ci_availability_
zone]

No

Cloud Subnet
[cmdb_ci_cloud_subn
et]

Yes

SG-AWS-Network-
Interface

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Yes

SG-AWS-Security-
Group

Compute Security
Group
Yes

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

165

Zurich ServiceNow AI Platform Capabilities

---
*Page 166*

Data source
CMDB CI classes
Life cycle management
available

[cmdb_ci_compute_s
ecurity_group]

SG-AWS-Storage-
Volume

Storage Volume
[cmdb_ci_storage_vol
ume]

Yes

Storage Volume
Snapshot
[cmdb_ci_storage_vol
_snapshot]

Yes

SG-AWS-Image-Private

Image
[cmdb_ci_os_templat
e]

Yes

SG-AWS-EC2

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Yes

Server
[cmdb_ci_server]
Yes

Block Endpoint
[cmdb_ci_endpoint_bl
ock]

Yes

VNIC Endpoint
[cmdb_ci_endpoint_v
nic]

Yes

Storage Mapping
[cmdb_ci_storage_ma
pping]

Yes

Image
[cmdb_ci_os_templat
e]

Yes

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

166

Zurich ServiceNow AI Platform Capabilities

---
*Page 167*

Data source
CMDB CI classes
Life cycle management
available

IP Address
[cmdb_ci_ip_address]
Yes

SG-AWS-Image-Id

Image
[cmdb_ci_os_templat
e]

Yes

SG-AWS-Hardware-
Type

Hardware Type
[cmdb_ci_compute_t
emplate]

Yes

SG-AWS-VM-Hw-
Consolidation
None
No

SG-AWS-ELB-V1

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Yes

SG-AWS-ELB-V2

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Yes

SG-AWS-RDS

Cloud DataBase
[cmdb_ci_cloud_data
base]

Yes

SG-AWS-S3

Cloud Object Storage
[cmdb_ci_cloud_obje
ct_storage]

Yes

SG-AWS-DynamoDb

DynamoDB Table
[cmdb_ci_dynamodb_
table]

Yes

SG-AWS-API-Gateway

Cloud Gateway
[cmdb_ci_cloud_gate
way]

Yes

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

167

Zurich ServiceNow AI Platform Capabilities

---
*Page 168*

Data source
CMDB CI classes
Life cycle management
available

SG-AWS-Lambda

Cloud Function
[cmdb_ci_cloud_funct
ion]

Yes

SG-AWS-Software-
Inventory

Software Installation
[cmdb_sam_sw_install]
No

Software
[cmdb_ci_spkg]
No

Software Instance
[cmdb_software_insta
nce]

No

SG-AWS-Software-
Remove
None
No

SG-AWS-SSM-
SendCommand

TCP Connections
[cmdb_tcp]
No

Running
[cmdb_running_proce
ss]

No

Application
[cmdb_ci_appl]
No

SG-AWS-Tags
Key Value
[cmdb_key_value]
No

SG-AWS-EKS-Cluster

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Yes

SG-AWS-EKS-Cluster-2
None
No

SG-AWS-EKS-FULL
Kubernetes
Namespace
Yes

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

168

Zurich ServiceNow AI Platform Capabilities

---
*Page 169*

Data source
CMDB CI classes
Life cycle management
available

[cmdb_ci_kubernetes_
namespace]

Kubernetes Node
[cmdb_ci_kubernetes_
node]

Yes

Kubernetes Service
[cmdb_ci_kubernetes_
service]

Yes

Kubernetes Pod
[cmdb_ci_kubernetes_
pod]

Yes

Docker Container
[cmdb_ci_docker_con
tainer]

Yes

Kubernetes Volume
[cmdb_ci_kubernetes_
volume]

Yes

Kubernetes
Deployment
[cmdb_ci_kubernetes_
deployment]

Yes

Kubernetes
DaemonSet
[cmdb_ci_kubernetes_
daemonset]

Yes

Kubernetes ReplicaSet
[cmdb_ci_kubernetes_
replicaset]

Yes

SG-AWS-Generic-
Resources

Cloud Resource
[cmdb_ci_cmp_resour
ce]

Yes

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

169

Zurich ServiceNow AI Platform Capabilities

---
*Page 170*

Data source
CMDB CI classes
Life cycle management
available

SG-AWS-Redshift-
Cluster

Amazon Redshift
[cmdb_ci_aws_redshift
]

Yes

SG-AWS-Generic-Tags
Key Value
[cmdb_key_value]
No

SG-AWS-Get-Inventory
Server
[cmdb_ci_server]
Yes

## Record removal process in Service Graph Connector
## for AWS

The Service Graph Connector for AWS uses the optimized deletion
approach to manage removal of records.

Record removal is the process of handling data that is no longer needed.
For any discovered resources deleted later after pulling data, the Service
Graph Connector for AWS automatically updates the Install Status field
of the associated CMDB CI classes to indicate any retired or deleted
records.

Deletion of records in Service Graph Connector for AWS involves marking
the install status of a record as retired rather than permanently deleting it
from the system. The record remains in the database, making it possible
to reference or restore it later. Deletion for Service Graph Connector for
AWS relies on the Source [sys_object_source table], which can become
inefficient with large datasets.

To enhance the deletion process, you can enable the optimized
deletion method that leverages the SG-AWS Extension Attributes
[sn_aws_extension_attributes] table. This table is regularly purged of
obsolete records, improving performance and efficiency. The process
still marks the install status of a record as retired but the streamlined
data structure reduces overhead, ensuring quicker processing and better
system performance. See Enable optimized deletion of retired CIs in AWS.

Optimized deletion is enabled for all tables in the Service Graph
Connector for AWS, except for the following tables:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

170

Zurich ServiceNow AI Platform Capabilities

---
*Page 171*

• Hardware Type [cmdb_ci_compute_template]

• Availability Zone [cmdb_ci_availability_zone]

• AWS Datacenter [cmdb_ci_aws_datacenter]

• Running Process [cmdb_running_process]

• TCP Connections [cmdb_tcp]

• Application [cmdb_ci_appl]

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

171

Zurich ServiceNow AI Platform Capabilities

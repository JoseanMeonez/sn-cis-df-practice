# zurich_servicenow_ai_platform_capabilities_application_services_2026-01-16-12-52-24

*Source: zurich_servicenow_ai_platform_capabilities_application_services_2026-01-16-12-52-24.pdf*

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

## Application services

Understand application services, learn about different application service
types and how multiple ServiceNow® business units and products use
them.

What application services are

A service instance is a set of interconnected applications and hosts that
are configured to offer a service to the organization. Service instances
can be internal, like an organization email system or customer-facing,
like an organization website. For example, creating financial reports
through a web-based application requires a computer, web server,
application server, databases, middleware, and network infrastructure.
These applications and hosts are all configured to offer the service of
financial reporting. In development environments, an application service
represents an instance of a business application or system.

ServiceNow applications refer to devices and applications that comprise
an application service as configuration items (CIs). The various CIs and
the relationships between them, that comprise an application service,
are stored in the Configuration Management Database (CMDB).

Each application service contains an entry point as the top-level CI. An
entry point is a point where clients access a service instance. Typically,
it is a URL, or a combination of the IP address and port for application
services in enterprise deployments. For cloud-based deployments, an
entry point can be a URL to a cloud resource like an AWS gateway.

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

Application service

The Common Service Data Model (CSDM) helps you streamline service
types and service offerings. You can add relationships between
application services and other service-related objects in the CSDM:
Business Application, Technical Service Offerings, or Business Service
Offerings.

There are the following types of application services:

Discovered

Service Mapping discovers application services using patterns and by
following traffic connections.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

4

Zurich ServiceNow AI Platform Capabilities

*[Figure Or Illustration - Page 4, 353x438px]*

```
........
....    ..
...::....
:  ::  :
:=. --  --
.:.::..::..:
...  .....
......:.::......::
.
.
..
...-:...
-..::...:.
-:.::...-.
-..::.. :.
.:..:...:
.:::::. ::::..:::
....:.
.....    ..
....           ..
.  ....                  ::
..........:.                   ....-:...
- :::. .-                      -..::. .-
-.:::...-                      -:.::...-
- :::. .-                      -..::. .-
.........                       ........
:::.:.::...:::.:. ::::..::.    :::.::::...:::.:. ::::..:::
. .                            . .        .
.
.
::
..-:.
-:::-.
-:::-.
.....
......... .....
.......:...:.:.
```

---
*Page 5*

Pattern-based discovery creates precise and complete application
services that represent the service-centric view of the IT infrastructure. It
creates a high-fidelity map that is well suited to managing mission-critical
application services.

In addition, it provides visibility of cloud-native services such as compute,
load balancers, and API gateways. You can use service entry points
such as AWS S3 buckets, AWS and Microsoft Azure API gateways, AWS
Lambda functions, and Microsoft Azure functions to map services. It can
also detect Lambda to Lambda calls and Lambda to RDS connections to
build dynamic service maps.

Top-down method maps VMs on-premises and in public clouds. However,
it requires these VMs to be fully discovered for the top-down discovery
to determine which applications are running in the VM. If a VM isn't
fully discovered, use the tag-based method to bridge the gap (see later
in this document). Tag-based mapping also maps containers, that you
cannot map using the top-down discovery.

Discovered application services have the service classification of
application service. They are stored in the Mapped Application Service
[cmdb_ci_service_discovered] table.

Dynamic CI Group

Dynamic CI groups which act as application services. The members
of the CMDB groups that is associated with the dynamic CI group,
populates the application service. A dynamic CI group is a dynamic
grouping of CIs, based on some common criteria such as the location of
all web servers in Detroit or all Oracle databases in Boston. After creating
a dynamic CI group, it can be used as a group offering in IT Service
Management.

If created from the Application Service wizard, the service classification is
application service, and if created from the legacy Event Management
UI or Service Mapping UI, the classification is technical service.
Application services of the Dynamic CI Group type are stored in the
Dynamic CI Group [cmdb_ci_query_based_service] table.

Tag-based

A tag is a label that consists of a key-value pair. Your organization
may use tags to categorize its assets, to enhance query and reporting
capabilities. Discovery and Cloud Provisioning and Governance can

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

discover tags used by all major cloud providers and container
ecosystems. Once the tags are discovered, Service Mapping can create
service instances based on these tags. For example, you can use tags
to map all application services your organization uses in the production
environment in the EMEA region.

Tag-based application services have the service classification of
application service. They are stored in the Tag-based Application Service
[cmdb_ci_service_by_tags] table.

Created Manually

With manual mapping, application owners manually document the
applications, IT infrastructure, and relationships that support each
application service. This methodology is the best fit for configuration items
that are not fully discoverable due to security access issues. For example,
IPS devices which support an intrusion prevention service for the security
business unit.

Try to avoid manual mapping wherever possible. It’s incredibly time
consuming to map services manually, and often the information needed
for mapping is not available due to evolving technology and a lack
of processes that track and document the infrastructure dependencies
needed for application context. And, whenever subsequent changes
are made to the application service topology, the service map must be
manually updated.

Manually created application services have the service classification
of application service. Application services of the created
manually type are stored in the Mapped Application Service
[cmdb_ci_service_discovered] table.

Dynamic

A dynamic application service includes only CIs that are part of CI
relationships stored in the CMDB CI Relationship [cmdb_rel_ci] table.

You can't edit a dynamic application service by directly adding
or removing CIs from it. Dynamic application services are updated
automatically to reflect any change to CI relationships in the CMDB CI
Relationship [cmdb_rel_ci] table. When you add a relationship to a CI
that is contained in a dynamic application service, then that service
automatically updates to reflect the addition of the relationship and
the associated new CI. In a similar manner, a dynamic application

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

service automatically updates upon the removal of a relationship and
its associated CI from a CI within the service.

One way to create dynamic application services, is by converting
legacy business services or legacy manual services (created with Event
Management, for example) into application services of the dynamic
type.

Dynamic application services have the service classification of
application service. Dynamic application services are stored in
Calculated Application Services [cmdb_ci_service_calculated] table.

Who uses application services

Application services provide foundation for operation of the following
business units and products of the ServiceNow AI Platform:

• ITOM Health gathers alerts from infrastructure events captured by third-
party monitoring tools. It then uses IT-related information gathered by
Discovery to map alerts to configuration items. Based on the collected
information, then provides dashboards showing a consolidated view of
all service-impact events.

• ITOM Optimization gives you tools to provision private and public cloud
infrastructure and services and to achieve consistent management
and cost visibility. The Cloud Cost Management application, available
in the ServiceNow Store, helps you to analyze the full range of costs
associated with cloud assets so you can identify and take action on
opportunities to save money and optimize operations.

• IT Service Management users rely on the application services reflecting
the IT infrastructure to manage and deliver services to their customers.

• Customer Service Management users efficiently diagnose and resolve
issues related to the IT infrastructure in the context of application
services.

• Software Asset Management users understand the software running
in your IT environment and track configurations that impact software
license consumption across your IT environments and datacenters.

• Strategic Portfolio Management users utilize data collected for
application services to gain a comprehensive understanding of the
applications used in your organization.

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

How to create application services

Depending on the needs of your organization, you can deploy different
methods of creating and populating application services.

Important:   You can use the top-down and manual methods for the
same application service. You cannot combine any other methods
for creating or populating the same application service.

Analyze the IT infrastructure and service deployment in your organization
to pick the optimal method of creating and populating application
services.

Choosing the right method for your deployment

Method
When to use
Additional considerations

Top-down discovery

Service Mapping
performs top-down
discovery of
application services.
Service Mapping uses
patterns to discover
and map CIs. A
pattern is a sequence
of steps whose
purpose is to detect
attributes of a CI
and its outbound
connections. This
method creates
precise and complete
application services
that reliably represent
the service-aware
view of your
organization's IT
infrastructure

Tag-based discovery
in Service Mapping

Use this method
to discover industry-
recognized or
customized second-
tier and third-
tier applications.
Such applications
may include load-
balancing solutions,
application or web
servers with database
connections.

Pattern-based
mapping requires
configuring
credentials, users,
and user permissions
to let Service
Mapping access
applications inside
your organization
private network. This
process may take time
and effort.

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

Method
When to use
Additional considerations

is a complimentary
method that enriches
the results of top-down
discovery.

Tag-based

If your organization
uses tags for asset
management, you
can use these tags
to map application
services. Discovery
and Cloud Provisioning
and Governance
discover tags assigned
to CIs, and populate
the CMDB with
this data. Service
Mapping uses the tag-
related data from
the CMDB to map
services.

Tag-based
service mapping
complements top-
down service
mapping. It provides
visibility of containers
and also maps VMs
that aren’t fully
discovered, which
top-down service
mapping is unable to
do. However, while
tag-based mapping
associates tagged
components with
specific application
services, it doesn’t

Map resources on
cloud workloads like
IaaS/Paas/FaaS/CaaS
as well as on
container workloads
using Kubernetes,
OpenShift, or AWS
ECS.

Also, map resources
in the Site Reliability
Engineering (SRE) or
Customer Reliability
Engineering (CRE)
deployments.

Using tag-based
method, you can map
container resources in
your deployments.

Typically, you use this
method to discover
applications on cloud
virtualizations or PaaS
deployments.

Unlike other mapping
methods, tag-based
mapping doesn't
require configuring
credentials or
providing users with
elevated rights.

Tag-based application
services may not
include relevant CIs, if
these CIs don't have
correct tags assigned
to them.

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

Method
When to use
Additional considerations

map the connections
between these
components—This is
another reason why
tag-based mapping
complements rather
than replaces
top-down service
mapping.

Ingesting Application
Performance
Management (APM)
maps from
integrated Dynatrace
or AppDynamics
deployments

Create application
services using
the integration
with AppDynamics
application model
and Dynatrace
monitoring platform
available on
ServiceNow Store.

Use this integration
to create application
services based
on APM maps
from Dynatrace or
AppDynamics. You
are able to use
application services
created by this
method for monitoring
Health.

Analyze discovered
resources in the CMDB
before ingesting from
3rd party to avoid
creating duplicate CIs.

Populate an
application service
using the Dynamic CI
Group method

Based on CMDB
groups, whose
members populate
the application
service.

Use this method
as a simple and
fast way to create
dynamic CI groups for
deployments including
Microsoft Active
Directory, Microsoft
Exchange or other
DNS-related services.
Dynamic CI Groups
are especially useful if
only a list of resource

There is no map
view for application
services created using
this method. You
can only view CIs
belonging to such an
application service as
a list.

Need to ensure that
the CMDB group

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

Method
When to use
Additional considerations

is available, without
configuration details
or credentials.

Using a CMDB group
lets you use CMDB
Health to monitor
health, and use a
CMDB Query Builder
saved query to filter for
the CIs included in the
application service.

accurately filters for
the CIs that should
be included in the
application service.

Application service
API

Create an automation
for creating
application services in
bulk. Use this method,
if your organization
has performed cross-
organization mapping
and analysis and
collected some
information about
services.

Application services
created using APIs
belong to the manual
type are stored in the
Mapped Application
Service
[cmdb_ci_service_disc
overed] table.

Use this method
for environments that
require tracing of
DevOps Continuous
Integration/
Continuous
Deployment (CI/CD)
process.

You can import
third-party service
maps into manual
application services
individually or in bulk.
For example, see
the Digital Guidebook:
Importing 3rd-party
service maps into
ServiceNow Service
Mapping.

Be familiar with
the exact service
structure: sys_id of
each CI comprising
the service and the
hierarchy that the
CIs form. This method
requires knowledge
of the scripting
infrastructure that your
organization uses.

Populate an
application service
using the Manual
method

Use the manual
method if you can't
use other methods of

This method doesn't
require any preexisting
setup or object
configuration.

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

Method
When to use
Additional considerations

Create a manual
application service
with one CI only:
the entry point. To
populate a manually
created application
service, add other CIs
manually as described
in Manually add CIs to
an application service.

Alternatively, create
and populate manual
application services
by converting business
services created in the
CMDB and stored in
[cmdb_ci_service].

creating or populating
application services.

Create application
services manually for
intrusion prevention.

You can include CIs of
any class in manually
created application
services.

Manually created
application services
reflect some changes
to CIs, like CI
attributes. However,
they do not
automatically reflect
changes to CI
relationships.

Populate an
application service
using the Dynamic
Service method

Application services
that automatically
update to reflect
any change to CI
relationships in the
CMDB CI Relationship
[cmdb_rel_ci] table.

To conform with
Common Service Data
Model, you can also
convert legacy
services to dynamic
application services.
Those legacy services
are stored in the
[cmdb_ci_service] or

Use this method
to transform legacy
business services into
application services
that other ServiceNow
products can utilize.
For example, dynamic
application services
can be used for
service monitoring
and change
management.

You can't edit a
dynamic application
service by adding
or removing CIs
from it. The system
automatically modifies
an application service
of the dynamic type
when you modify
relevant relationships
for CIs that are part
of that application
service.

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

Method
When to use
Additional considerations

[cmdb_ci_service_ma
nual] CMDB tables:

• Convert business
services to
application services

• Convert legacy
manual services into
dynamic application
services

From CSV file

Service Mapping
extracts information
from this file and
creates potential
application services
referred to as
service candidates.
Use this method,
if your organization
has performed cross-
organization mapping
and analysis and
collected some
information about
services.

If necessary, you
can import service
candidates from
multiple CSV files.

Organize all the
collected information
in a specific order in
a CSV file, precisely
as described in the
documentation.

To comply with CSDM, convert manual services created using
IT Operations Management Event Management and stored in
[cmdb_ci_service_manual] as covered in Convert manual services
to application services or Convert manual services to application
services using API. Converted services become application services
of the manual type stored in the Mapped Application Service
[cmdb_ci_service_discovered] table.

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

Domain separation

Domain separation, if deployed, impacts an service instance as follows:

• When creating an service instance, the service instance is assigned to
the user's domain.

• When manually adding a CI to an service instance, you can choose
only CIs that belong to the service domain.

• When using the createOrUpdateService - POST REST API for creating
or updating an application service, the process stops if one of the
CIs referenced in the API belongs to a different domain than the
application service itself.

• When converting business services into application services, the newly
created application service belongs to the same domain as the original
business service. The application service comprises only CIs belonging
to the same domain as the application service itself.

## Create an application service

Create an application service to adhere to Common Service Data
Model standards and to standardize the organization, maintenance, and
monitoring of services in your organization.

Before you begin

Role required: Depending on the population method used:

• Dynamic CI Group: app_service_admin

• Manual: app_service_admin

• Dynamic Service: app_service_admin

• Top-Down Discovery: sm_admin

• Tags: sm_admin

About this task

An application service is a set of interconnected applications and hosts,
which are configured to offer a service for the organization. Application

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

services can be internal, like an organization's email system, or customer-
facing, like an organization's website.

An application service has an entry point, which lets users access the
application service. If you are at the planning stage and don’t know
what the entry points are for an application service, you can create the
application service without entry points. Such an application service is
referred to as an empty application service, to which you can add entry
points at any later time.

All application services created in the Application Service wizard, are set
with the application service classification.

Service Mapping, if activated, can automatically discover and map
application services as described in Application service mapping. A
discovered application service contains the CIs and the connections
between them that Service Mapping discovered and mapped.

You can also create an application service by using the
createOrUpdateService - POST REST API.

Procedure

1. Navigate to All > CSDM > Manage Technology Management
Services > Service Instance.

2. In the Application Services list view, select New to open the
Application Service wizard.

3. In the Provide Basic Details tab:

a. Fill out the fields for Basic Details.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

15

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 15, 643x198px]*

```
@@***#*+****##**@@@##@@%#####%@%####%@@%#######%@%####%@@@@@
%%##############%%%##%%%#####%%%#####%%%#######%%%####%%%%%%
....................  ....... ......  ......... ...........
.. ...... . .
======================================================:
#####################******+*******###################+: ...
::::-::::--:::-:::::::::::::::::::::::::::::::::::::::
:.........:.
....  .... .       ..  .    .. .
```

---
*Page 16*

Field
Description

Number
Pre-populated unique ID for
the application service.

Name

Unique application service
name, which isn’t in use
by any other type of
application service. Use self-
explanatory names such
as mailing service or
printing service.

Environment

The environment of the
offering such as production,
development, or test, as
identified by some service
offerings.

Used by Incident
Management and Change
Management.

Version
The application service
configuration version.

Model ID

A product model such as a
software model where end of
life data is stored.

Operational Status

Operational status of the
application service, such as
Ready or Retired.

Support Group

Used by Incident
Management as the group
managing the contract
covering the asset.

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

Change Group

Used by ITSM for routing of
change and change-related
tasks.

Managed By Group
Group responsible for
managing the data.

Owned By

User who is familiar with the
infrastructure and applications
making up the service. This
user is the application service
Subject Matter Expert (SME)
who provides information
necessary for a successful
creation of an application
service.

If the owner name is not
listed, create a user with
the sm_app_owner role, as
the owner. Alternatively, you
can choose a user with the
sm_admin role.

Note:   See Teams related list for details about the automatic
synchronization between the assignment group fields and
the Teams related list.

b. In the Set Relationships section, add relationships between the
application service and other components in the CSDM domain.

c. Select the Business Application, Technical Service Offering,
Business Service Offering, or the Parent Application Service tab,
and add items to the respective Selected list.

• The technical service offering list includes records in the
Service Offering [service_offering] table, in which the Service
classification attribute is Technical Service.

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

• The business service offering list includes records in the
Service Offering [service_offering] table, in which the Service
classification attribute is Business Service.

• The parent application service list includes
application service records from the Service Instance
[cmdb_ci_service_auto] table. Adding a parent application
service relationship creates hierarchies and dependencies of
application services in deployments such as:

• Platform host and platform application deployments

• Micro service deployments in which one or more micro
services identified as an application service, is part of a
larger application service deployment

• Shared technical service dependencies

d. Select Next.

For information about CSDM relationships, see CI relationships in the
CSDM.

Also, some fields and relationships are noted as required on the
page. To change which fields and which relationships are required,
see Modify the attributes and relationships required for application
services.

4. On the Populate the Application Service tab:

a. Click Choose a Method or select Next to skip selecting a service
population method.

b. On the Choose a Method page, select a Service Population
Method, and then follow the respective link to complete the
specific population method:

• Top Down Discovery: Use top-down discovery to populate
application services

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

18

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 18, 1276x158px]*

```
#*******###############################******##############%
...::::....................................................
----------------------------=+++++++++==========++++++++++:
```

---
*Page 19*

• Dynamic CI Group: Populate an application service using the
Dynamic CI Group method.

• Tags: Use tags to populate application services

• Manual: Use the Manual method to populate application
services

• Dynamic Service: Populate an application service using the
Dynamic Service method

Note:   The Top Down Discovery and the Tags options are
available only if Service Mapping is installed.

c. To add another method to populate the application service,
click Add Method on the Service Population Methods page.
Or, select Next.

• You can add any combination of the Top Down Discovery
and the Manual methods. However, if you select the
Dynamic CI Group, Tags, or the Dynamic Service method,
the Add Method button is grayed out and you can’t add
additional methods.

• You can select a card for a Converted Business Service
method to see details about the service conversion, such
as the conversion type. For more information, see Convert
business services to application services.

5. On the Preview the Service tab, review and verify the summaries for
creating and populating the application service.

a. Review Relationships.

b. You can select Edit Relationships to modify the relationships to
other CSDM objects.

c. Review Population Methods Summary.

d. You can select Edit Methods to modify the selection methods.

e. Select Done.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

19

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 19, 1792x154px]*

```
+=+=+++++++++++++++++++++++=====++++++++++++========+++++*++
::::::::::::::::::::::::::::::::::::::::::------------====+=
```

---
*Page 20*

Result

The application service is created, and you can access the new
application service by navigating to application services list views:

• CSDM > Manage Technology Management Services > Application
Service: Contains application service CIs from any class extending the
Service Instance [cmdb_ci_service_auto] class, except alert groups.
The list view includes the tag-based, discovered, manual, dynamic CI
groups, converted, dynamic, and empty application service types.

• Configuration > Application Services > Application Services: Contains
application service CIs from any class extending the Service Instance
[cmdb_ci_service_auto] class, except alert groups. The list view includes
the tag-based, discovered, manual, dynamic CI groups, converted,
dynamic, and empty application service types.

• Service Mapping > Services > Service Instances: Contains
application service CIs from the Mapped Application Service
[cmdb_ci_service_discovered] class. The list view includes the top-down
(discovered) and empty application service types.

What to do next

• If the service population method is Dynamic CI Group:

• Select View CMDB Group CI's to list all the CIs in the CMDB group that
is associated with the application service.

• Select View Service CI's to list all the CIs in the application service.
Both lists of CIs are identical, unless the CMDB group contains more
than 10,000 CIs. In this case, View CMDB Group CI's shows all the CIs in
the CMDB group, and View Service CI's shows only the 10,000 CIs that
are members of the application service.

• If the service population method is Tags, Top Down Discovery, or
Manual, and select View Map to view the application service map
where you can:

• Link application services

• View CI attributes in an application service map

• View the change history of application services

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

• Compare two versions of an application service

• Select Advanced, and then on the Advanced Details page, select
Additional Info, Questionnaire, Reject Messages, or Worknotes, to add
details.

## Use top-down discovery to populate application
## services

Use top-down discovery to populate an application service. This
discovery method deploys discovery patterns to find configuration items
(CIs) belonging to the service and connections between these CIs.
Pattern-based discovery creates precise and complete service instances
that reliably represent the service-aware view of your organization's IT
infrastructure.

Before you begin

•

Top-Down Discovery is one of several methods for populating an
application service with CIs. Choosing a method for populating an
application service, is only one step of the generic procedure for
creating an application service. Ensure that you have completed
the initial steps as described in Create an application service. The
procedure described here is incomplete by itself as it complements
that generic procedure.

• Verify that Service Mapping is set up properly.

• Ensure you know which entry point to use for this application service
and which attributes you must be able to define for this entry point.
Learn about Entry point attributes available with Service Mapping.

For information about the different types of application services and
the different methods you can use to populate application services,
including using top-down discovery, see Application services.

Role required: sm_admin

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

About this task

A pattern is a sequence of commands designed to detect attributes of a
CI and its outbound connections. Service Mapping and Discovery share
a set of preconfigured patterns that cover most of the commonly used
devices and applications.

Service Mapping starts pattern-based top-down discovery process from
the entry point you define.

An entry point is a point where clients access a service instance. Usually,
it is either a URL or a combination of the IP address and port. Service
Mapping starts the mapping process from this point. For example, to map
your electronic mailing service instance, define an IP address or host
name of the email server as an entry point.

Entry points vary depending on the nature of the service instance.
Service Mapping comes with a wide range of preconfigured entry point
types that cover many commonly used applications.

Procedure

1. From the Service Population Method list in the Choose a Method
window, select Top-Down Discovery.

2. From the Application Type list, select the CI class of the application
that serves as the entry point for this application service.
Entry point parameters depend on the type you select.

3. Define attributes for the selected entry point as described in Entry
point attributes.

4. (Optional) Add free-text comment that may provide useful
information for handling this application service later.

5. Click Save.

What to do next

Complete the generic procedure Create an application service.

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

Related topics

• Discovery patterns used by ITOM Visibility

## Use the Dynamic CI Group method to populate
## application services

The Dynamic CI Group method for populating an application service,
automatically generates a dynamic CI group. The members of the CMDB
group that the dynamic CI group is based on, populates the application
service. The application service continuously synchronizes with the CMDB
group to reflect any changes in membership in the CMDB group.

Before you begin

The Dynamic CI Group is one of several methods for populating an
application service with CIs. Choosing a method for populating an
application service, is only one step of the generic procedure for
creating an application service. Ensure that you have completed the
initial steps as described in Create an application service. The procedure
described here is incomplete by itself as it complements that generic
procedure.

Note:

• The number of CIs in an application service that is populated by
the Dynamic CI Group method, is limited to 10,000, even if the
associated CMDB group has more than 10,000 CIs.

• A CMDB group can be used to populate only a single application
service. For more information about populating and using CMDB
groups, see CMDB groups.

• A dynamic CI group contains CIs but can't contain other groups.

For information about the different types of application services and
the different methods you can use to populate application services,
including Dynamic CI Group, see Application services.

Role required: app_service_admin

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

Procedure

1. In the Choose a Method page, select Dynamic CI Group as the
Service Population Method.

2. Fill out the fields that appear, which are specific to the Dynamic CI
Group service population method.

Field
Description

Service Population Method

The method used for populating the
application service with CIs. Set to
Dynamic CI Group.

CMDB Table

Notes the Dynamic CI Group
[cmdb_ci_query_based_service]
table, in which application services
created by the Dynamic CI Group
method, are stored.

Group Name

The CMDB group whose members
become members the application
service.

Note:   CIs from
a class that extends
the cmdb_ci_service class
(Services), are automatically
filtered out and are not added
to the application service.

3. Select Save.

Result

The alert impact on dynamic CI groups is calculated on the following CIs:

• All CIs that are part of the dynamic CI's CMDB group.

• Children of current CIs with a relationship of: Runs on::Runs

• CIs related to either the current CIs or their children, with a relationship
of: Virtualized by::Virtualizes

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

For more information, see alert impact calculation.

What to do next

Complete the generic procedure Create an application service.

## Use tags to populate application services

Use tags that help categorize and organize configuration items (CIs) in
your organization to populate an service instance. Tag-based mapping
doesn't require configuring credentials or providing users with elevated
rights. Tag-based population method requires the Service Mapping
feature of ITOM Visibility.

Before you begin

1.
Tags is one of several methods for populating an application service
1.

with CIs. Choosing a method for populating an application service, is
only one step of the generic procedure for creating an application
service. Ensure that you have completed the initial steps as described
in Create an application service. The procedure described here is
incomplete by itself as it complements that generic procedure.

2. Analyze the tag usage in your organization and make a list of all tags
and their purposes. Use the Key Value [cmdb_key_value] table to see
the tags in the CMDB.

3. If necessary, assign tags to CIs that you want to include in an service
instance.

Role required: sm_admin

About this task

A tag is a label that consists of a key-value pair. Your organization
may use tags to categorize its assets, to enhance query and reporting
capabilities. Discovery and Cloud Provisioning and Governance can
discover tags used by all major cloud providers and container
ecosystems. Once the tags are discovered, Service Mapping can create
service instances based on these tags. For example, you can use tags
to map all application services your organization uses in the production
environment in the Europe, the Middle East and Africa (EMEA) region.

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

If you have configured tag-based service families and tag categories,
you can use these tag definitions for populating an application service.
Part of defining a tag-based service family is defining a tag category,
which contains tag keys. If necessary, you can also define tag values to
narrow the criteria used for populating application services. Based on the
tag definitions for the tag-based service family, Service Mapping creates
service candidates - suggested application services. When you use the
tag-based service families to populate an application service, you must
select the relevant service candidate.

Alternatively, you can define tag keys and their values while choosing the
tag-based population method for a new application service. Define up
to three tag keys and tag values for the population criteria. CIs that have
discovered tag keys and tag values, become part of an service instance.

For information about the different types of application services and
the different methods you can use to populate application services,
including using tags, see Application services.

Note:   Service Mapping includes CIs that are part of CI relationships
even if these CIs do not have tags assigned to them. For more
information, see Tag-based discovery in Service Mapping.

Procedure

1. From the Service Population Method list in the Choose a Method
window, select Tags.

2. To define new tag criteria, perform the following steps:

a. Select Use a list of tags.

b. Enter the tag key and its respective tag value.
Matching tag keys that exist in the system, appear in the auto-fill
options.

Important:   Tag-based mapping is not case-sensitive; same
key names and key values spelled with upper and lower
case are identified as the same.

c. (Optional) Click the plus icon and add another tag key and tag
value.

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

d. Click Preview Result to see the list of CIs that match the defined
criteria.

Note:   If necessary, refine the tag definitions. You can add
no more than three tag key-value pairs for one application
service.

3. To use tag definitions from a preconfigured tag-based service family,
perform the following steps:

a. Select Use a candidate from a tag-based service family.

b. (Optional) To see the tag definitions for this tag-based service

family, click the Preview button

c. From the Tag-Based Service Family list, select the relevant family.

d. Review the tag categories and values assigned to the service
family.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

27

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 27, 700x433px]*

```
. .  ...                                                 .


.



.     ..........


.
..                                   .
........



-==:
..
```

---
*Page 28*

e. From the Service Candidate list, select the relevant candidate.

f. (Optional) To review the service candidate form, click the

Preview button

.

4. (Optional) Add free-text comment that may provide useful
information for handling this application service later.

5. Click Save.

What to do next

Complete the generic procedure Create an application service.

## Use the Manual method to populate application
## services

The Manual method for populating an application service, is based
on selecting an entry point CI, which lets users access the application
service. To populate the application service, you then manually add CIs
to the new application service.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

28

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 28, 700x398px]*

```
. .  ...                                                 .


.


.          .
..........


.  ......           .  .....




-=+:
..
```

---
*Page 29*

Before you begin

Role required: app_service_admin

About this task

Manual is one of several methods for populating an application service
with CIs. Choosing a method for populating an application service, is only
one step of the generic procedure for creating an application service.
Ensure that you have completed the initial steps as described in Create
an application service. The procedure described here is incomplete by
itself as it complements that generic procedure.

For information about the different types of application services and
the different methods you can use to populate application services,
including Manual, see Application services.

Procedure

1. In the Choose a Method page, select Manual as the Service
Population Method.

2. Fill out the fields that appear, which are specific to the Manual
service population method.

Field
Description

Service Population Method
Manual

CMDB Table

Notes the Mapped
Application Service
[cmdb_ci_service_discovered]
table, in which application
services, created by the Manual
service population method, are
stored.

Class

The class from which to choose
the entry point CI for the
application service.

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

CI

The CI from the specified Class,
to be the entry point for the
application service.

Note:   To eliminate
the possibility of delayed
results when searching for
a specific CI, make your
search as specific as
possible. A search with
*<name> might take a long
time and return a large data
set.

3. Click Save.

What to do next

1. Complete the generic procedure Create an application service.

2. Manually add CIs to populate the application service.

## Use the Dynamic Service method to populate
## application services

The Dynamic Service method for populating an application service
generates a dynamic application service. A dynamic application service
automatically updates to reflect any changes to CI relationships in the
CMDB CI Relationship [cmdb_rel_ci] table.

Before you begin

The Dynamic Service is one of several methods for populating an
application service with CIs. Choosing a method for populating an
application service, is only one step of the generic procedure for
creating an application service. Ensure that you have completed the
initial steps as described in Create an application service. The procedure
described here is incomplete by itself as it complements that generic
procedure.

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

New dynamic application services initially don't contain any CIs (unless
they were converted from legacy business services or legacy manual
services). Dynamic application services are automatically populated
when CIs that are contained in the service, get connected to other CIs
by CMDB relationships. Entry points are automatically created when a
relationship between a dynamic application service CI and other CIs is
created.

For information about the different types of application services and
the different methods you can use to populate application services,
including Dynamic Service, see Application services.

Role required: app_service_admin

Procedure

1. In the Choose a Method page, select Dynamic Service as the
Service Population Method.

2. Fill out the fields that appear, which are specific to the Dynamic
Service service population method.

Field
Description

Service Population Method

The method used for populating the
application service with CIs. Set to
Dynamic Service.

CMDB Table

Notes the Calculated
Application Services
[cmdb_ci_service_calculated]
table, in which application services
created by the Dynamic Service
method, are stored.

Levels
The number of levels of related CIs
to include in the application service.

3. Click Save.

What to do next

Complete the generic procedure Create an application service.

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

## Use Application Services dashboard to monitor health

Use insights from the Application Services dashboard to reduce the
number of incomplete application services by populating them and
adding missing data. To use application services effectively, ensure that
application services are fully configured and are populated.

Before you begin

Role required: itil_admin or app_service_admin

About this task

The dashboard queries for Application Services by checking for those
records in the [cmdb_ci_service_auto] class in which the value of Service
classification is Application Service. Reduce the number of incomplete
application services by editing application services and populating any
empty attributes. For example, if an application service isn't configured
with a service population method, then configure a service population
method for it.

The Application Services dashboard is fully integrated into the Insights
view in CMDB Workspace and refreshes on a 24-hour cycle during night
hours.

Procedure

1. Follow either navigation step to access the Application Services
dashboard:

• Navigate to Workspaces > CMDB Workspace and then select
Insights on the CMDB Workspace menu bar. On the Insights view,
select the Application services tile.

• Navigate to All > CSDM > Application Service Dashboard.

2. View the tiles on the Overview tab, which show application services
in which basic configurations are incomplete.

• Total Application Services: Count of all application services,
complete and incomplete.

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

• Population method defined: Count of application services for
which a service population method is specified.

• Population method not defined: Count of application services
missing a service population method. Data for the tags and
top down discovery methods appear only if Service Mapping is
installed.

Note:   Some population methods for application services
are available only with Service Mapping and therefore won't
appear in the tile if Service Mapping isn't installed.

• Application services types: Chart of application services by
population methods such as Dynamic CI Group and Manual,
including application services without a population method
(Empty). The chart includes business services that were converted
to application services.

• Application services missing data: Chart of application services
by key data that is missing, such as service offering and owner.
For example, the bar 'No Service Offering' shows application
services without any relationship with a business service or a
technical service.

3. View counts on the Application service coverage tab, which shows
application services in which other configurations are potentially
incomplete.

• Application Servers: Total number of application servers. The
number of those which aren't in any application service and a
breakdown of those application servers by class.

• Databases: Total number of databases. The number of those
which aren't in any application service and a breakdown of
those databases by class.

• Hardware Servers: Total number of hardware servers. The
number of those which aren't in any application service and a
breakdown of those hardware servers by class.

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

Note:   Application servers, hardware servers, and databases,
not included in application services, are counted only up
to about 100,000, even if the actual count is greater than
this limit. This number limit is determined by the value of the
glide.cmdb.csdm.app_service.max_results property.

4. Select Owned by, Support group, or Change Group to filter the list
of application services that are included in the dashboard, by a key
attribute.
A filter doesn't impact counts of application services in which the
respective filter attribute is missing. For example, filtering by Owner,
doesn't change the count of the Missing Owner card.

5. Select a tile in either tab on the dashboard to drill down to the
associated CIs list view.
For example, select the Population method not defined tile to see the
CIs list view of application services without a population method.

What to do next

Update application services with any missing important details:

1. Navigate to CSDM > Manage Technology Management Services >
Application Services.

2. In the Application Services list view, select an application service to
edit.

3. Add the missing details.

For details about configuring an application service, see Create
application service.

## Modify the attributes and relationships required for
## application services

Modify the lists of attributes and relationships that are required when
creating application services.

Before you begin

Role required: itil_admin

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

About this task

In application service settings, the lists of required attributes and required
relationships determine which of those items are required when creating
application services. By default, the list of required attributes contains the
required Name and Number attributes. Also by default, no relationships
are required.

You can choose from predefined lists of allowed required attributes and
relationships. To change the requirement status of an attribute, remove it
from or add it to the list of required attributes. You can also add Business
Application, Technical Service Offering, or Business Service Offering to the
list of required relationships.

Procedure

1. Navigate to All > CSDM > Service Instance Settings.

2. Review the list of Available items in the Required attributes and
Required relationships lists and then add items to the Selected list.

3. Click Save.

Result

Next time that you create an application service, the required attributes
and relationships are visibly noted in the Basic Details section on the
Create an Application Service page.

## Convert business services to application services

Unify the way you manage services in the organization by converting
manually created records in the Service [cmdb_ci_service] table into
application services. Conversion lets you streamline the different types
of services in your organization, leverage ITOM Visibility capabilities, and
align with the Common Service Data Model (CSDM). The conversion is
irreversible: You can't transform application services back into business
services.

Using application services has benefits such as:

• Viewing service maps and change history of services.

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

• Easily seeing the service context by providing a flat list of all CIs in the
application service.

• Monitoring service health. If Event Management is deployed, you can
monitor service performance and identify health issues for application
services.

• In Change Management, the list of impacted services on a change
request form is more accurate because the list includes only
application services.

• Applying Customer Service Management tools to open and manage
cases at the service level.

Discovery doesn't run on converted application services, because
converted services are manual. However, if after the conversion you add
Discoverable by Service Mapping entry points to the application service,
then Service Mapping starts discovering such this application service.

Choosing between application services of the manually created
and dynamic type

You can convert business services into application services of the
manually created type or of the dynamic type. You can edit manually
created application services by adding or removing CIs at any time. The
system does not update manually created services automatically. If there
are changes to CIs making up a manually created application service,
the service does not automatically reflect it.

Dynamic services are updated automatically to reflect any change
to CI relationships stored in the CMDB CI Relationship [cmdb_rel_ci]
table. When you add a relationship to a CI that is contained in a
dynamic service, then that service automatically updates to reflect the
addition of the relationship and the associated new CI. In a similar
manner, a dynamic service automatically updates upon the removal of
a relationship and its associated CI from a CI within the service.

To learn more about different types of application services, see
application services.

Conversion process

During conversion, the following changes and processes occur:

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

• The service record is moved from the Service [cmdb_ci_service] table
into the Mapped Application Service [cmdb_ci_service_discovered]
table by changing the record class.

• The service instance is set with all the original business service attributes
such as name, owner, and operational status.

• The system adds related items from the business service to the
converted service instance, up to the specified level.

• The system queries the CMDB for the latest CI changes.

• Event Management, if activated, applies CI impact rules to CIs that are
associated with alerts and that are part of the service instance. Event
Management deploys CI impact rules for alert monitoring.

• You can edit a converted application service of the manually created
type by navigating to CSDM > Manage Technology Management
Services > Application Service. Then select a converted application
service. The service population method for a converted application
service, is set to Converted Business Service. For more information
about editing application services, see Create an application service.

Note:   You can't edit a dynamic application service by adding
or removing CIs from it. The system automatically modifies an
application service of the dynamic type when you modify relevant
relationships for CIs that are part of that application service.

Non-compliant CIs

A conversion might involve adding CIs of the following CI types, which
cannot be added to an service instance:

• NAT [cmdb_ci_translation_rule]

• Endpoint [cmdb_ci_endpoint]

• Qualifier [cmdb_ci_qualifier]

• Application cluster [cmdb_ci_application_cluster]

If the original business service contains related items belonging to
these CI types, then the system does not add such CIs or connections
coming from them. There are system records in the Manual CI Exclusions/

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

Inclusions [svc_manual_ci_exclusions_inclusions] table. See Components
installed with application services for more information.

Note:   The Manual CI Exclusions/Inclusions
[svc_manual_ci_exclusions_inclusions] table doesn't include CIs
added using traversal rules.

Domain separation

In environments with domain separation, only CIs belonging to the same
domain as the service instance are added to the service instance. If
there is a domain hierarchy, CIs must belong to the same child domain as
the service instance.

Convert business services to application services in bulk

Convert a subset of business services to application services, in bulk and
automatically rather than one at a time. Individually select the business
services for the conversion, and then convert them into application
services.

Before you begin

Role required: app_service_admin, ecmdb_admin, or itil_admin

About this task

Use bulk conversion to convert legacy business services to application
services. For the bulk conversion, individually select the business services
from the Services list view, typically up to 100 business services in a single
conversion. You can create multiple bulk conversion records, each with
a different set of business services. However, do not include a business
service in more than one bulk conversion.

Note:   You can't undo this conversion operation.

Procedure

1. Navigate to All > Configuration > Services.

2. In the Services list view, select the services that you want to include in
the conversion.

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

3. In the Actions on selected rows drop down list, select Bulk Convert
Application Services.

4. Fill out the Bulk Convert Services form.

Field
Description

Name

Pre-populated with "Application
Service Conversion: <time
stamp>".

Select configuration items

List of services included in the
conversion.

You can unlock the list and
select services to remove from
the list. Or, use the Select target
record search box to search and
add services to the list, by service
names.

Levels

The number of levels of related
CIs to include in the converted
application service.

Update service when CMDB
updates

Select this check box to
convert the business service into
an application service of the
dynamic type.

5. Select Start Conversion.

What to do next

• Check the status of a conversion: On the Bulk Convert Services form,
scroll to the Bulk Convert Services Entries section to see the status (such
as Ready or Completed) of a conversion.

• Track the progress of a conversion as it runs: In the navigation filter,
enter cmdb_convert_bulk_services.list and press the Enter key to
see the list of conversions, and their progress.

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

• (Optional) On a change request form, view affected dynamic services.
For example, after you add an affected CI that is associated with a
dynamic service:

1. • Navigate to Change > Open.

2. • Select a new change request to add affected CIs to.

3. • On the Change Request form, scroll to the Related Links section.

4. • Click the Affected CIs tab and then click Add to add an affected
CI to the change request.

5. • Open the form context menu and select Refresh Impacted
Services.

6. • Click the Impacted Services/CIs tab to see any dynamic services
that are associated with the affected CI and that are impacted by
the change request.
For more information about affected CIs on a change request, see
Associated CIs on a change request.

Convert an individual business service to an application service

Manually convert a specific business service to an application service.

Before you begin

Review the original business service to evaluate it.

• Make sure that all CIs and CI relations are relevant for the future
application service. If necessary, change the CI relations in the CMDB.

• Make sure that the original business service doesn't contain more than
5000 CI relations. Application services that contain more than 5000 CI
relations cause mapping and monitoring performance issues.

• Decide how many levels of CI relations you are going to use during
conversion.

Warning:   The conversion is irreversible: You can't transform
application services back into business services.

Role required: app_service_admin

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

1. Navigate to All > Configuration > Business Services.

2. Select the business service that you want to convert to an service
instance.

3. Click Convert to Application Service.
The Converting to Application Service dialog box opens.

4. Select a number from the Up to list, as the number of levels of related
CIs to include in the conversion.
The maximum number of levels is eight.

5. Select Update service when CMDB updates to convert the business
service into an application service of the dynamic type.

6. Click OK.

Result

The system adds the CIs from the business service to the converted
service instance.

What to do next

Open the map for the newly converted service instances.

Make sure that the service instances aren't too large:

• Service Mapping doesn't offer to view CI list instead of a map for a
service instance.

• There is no discovery message indicating that the service instance is too
large: The map does not display the entire service, because it is too
large. The number of CI connections exceeded the allowed maximum.

If the service is too large, perform the following actions:

• Review the converted service instance to identify CI relations irrelevant
or redundant for this service. Remove such CI relations in the CMDB.

• Decide how many levels of related CIs you must include into this service
instance. If necessary, change the number of levels used in conversion
to reduce the service size.

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

Related concepts

• Application services

## Convert legacy manual services to dynamic
## application services

Unify the way that you manage services in your organization by
converting legacy manual services into dynamic application services.
Conversion lets you streamline the different types of services in your
organization, leverage ITOM capabilities, and align with the Common
Service Data Model (CSDM).

Before you begin

Role required: app_service_admin

About this task

Note:   Converting a legacy manual service to a dynamic
application service is irreversible. Once converted, you can’t revert
it back to a legacy manual service. However, you can convert a
dynamic application service to a manual application service.

You can't edit a dynamic application service directly. If you remove
a CI from the map, it reappears once the service is recalculated. To
ensure permanent changes, update the CI relationships in the CMDB CI
Relationship [cmdb_rel_ci] table.

During conversion, the following changes and processes occur:

• A change to the record class moves the service record
from the Service [cmdb_ci_service] or the Manual Service
[cmdb_ci_service_manual] table to the [cmdb_ci_service_calculated]
table.

• The dynamic application service is configured with all the original
attributes of the legacy manual service such as name, owner, and
operational status.

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

• Related items from the legacy manual service are added to the
converted dynamic application service, up to three levels by default.

• All connections created between CIs in the dynamic application
service are endpoint CIs with the relationship uses, implement, or
application flow.

• Event Management, if activated, applies CI impact rules to CIs that
are associated with alerts and that are part of the application service.
Event Management deploys CI impact rules for alert monitoring.

A conversion might involve adding non-compliant CIs, which can’t be
added to an application service:

• NAT [cmdb_ci_translation_rule]

• Endpoint [cmdb_ci_endpoint]

• Qualifier [cmdb_ci_qualifier]

• Application cluster [cmdb_ci_application_cluster]

If the original manual service contains related items belonging to these
CI types, then these CIs or connections coming from them aren’t added
to the dynamic service. If necessary, you can prevent other CI types
from being added to application services by modifying the Manual CI
Inclusions/Exclusions [svc_manual_ci_exclusions_inclusions.list] table.

Procedure

1. Navigate to All > Configuration > Application Services > Application
Services.

2. Confirm that the view is set to the default view.

a. Select the List controls icon for the list view.

b. Select View and then select Default view.

3. Open the legacy manual service that you want to convert to a
dynamic application service.

4. In the Related Links section on the service form, select Convert to
Dynamic Service.

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

## Manually add CIs to an application service

Add configuration items to manually created application services or to
services discovered by Service Mapping.

Before you begin

• Verify that the CI type for the configuration item (CI) that you are
planning to add, exists. If necessary, create the CI type as described
in Create CI types for Service Mapping and Discovery.

• Add CIs to the CMDB for the device or application that you want to
add, if necessary. See Populate the CMDB for more information.

Role required: app_service_admin or service_mapping_admin

About this task

Adding a CI to an application service requires creating a relationship
between the new CI and a CI in the application service. You can add
CIs to an application service that was created manually, by either:

•

Adding a method to populate the application service.

Navigate to CSDM > Manage Technology Management Services >
Application Service. Select an application service and then use the
Populate the Application Service tab to choose a method to populate
the application service. For more details, see Create an application
service.

•

Using the application service service map as described in the steps
below.

The default relationship type of the added connection in this case
is Depends on::Used by. You can modify this default relationship
type by changing the value of the sa.it_service.manual_ci_rel_type
property. See Components installed with application services for more
information.

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

Important:   You cannot fine-tune or edit tag-based and dynamic
services from the map.

Manually adding a new CI to an existing CI in a service instance prompts
the CMDB to update the information about both CIs, including their
relationship type. If other application services use the same applicative
flow, the CMDB recognizes the new CI and automatically adds it to those
services as well.

For example, you manually add an IBM WebSphere Message Broker to
an IBM WebSphere HTTP Listener in the Bank Customer Portal service.
The system also adds this IBM WebSphere Message Broker to the same
HTTP Listener in the Bank Internal Portal service, because it uses this
HTTP Listener. Similarly, when you remove a CI you added manually, the
system removes it from all application services where you either manually
added it or it was automatically added by analogy.

You can manually connect a CI only to actual CIs existing in the CMDB,
not to a visualization of other items on the map such as clusters or
boundaries. Also, you cannot add CIs of these CI types to an application
service:

• NAT [cmdb_ci_translation_rule]

• Endpoint [cmdb_ci_endpoint]

• Qualifier [cmdb_ci_qualifier]

• Application cluster [cmdb_ci_application_cluster]

There are system records in the Manual CI Exclusions/Inclusions
[svc_manual_ci_exclusions_inclusions] table. See Components installed
with application services for more information.

Note:   The Manual CI Exclusions/Inclusions
[svc_manual_ci_exclusions_inclusions] table doesn't include CIs
added using traversal rules.

In environments with domain separation, only CIs belonging to the same
domain as the service instance are added to the service instance. If
there is a domain hierarchy, CIs must belong to the same child domain as
the service instance.

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

If working with an service instance discovered by Service Mapping,
manually add a CI:

• To indicate that an service instance contains a device or application,
which Service Mapping cannot discover. For example, add an A/C unit
to the Production Floor service.

• To add a temporary placeholder for a CI, which Service Mapping
did not discover. In this case you are planning to perform necessary
troubleshooting to ensure that Service Mapping discovers this CI in the
future. For example, add an IBM WebSphere Message Broker to the
Bank Customer Portal service.

• To create an service instance that combines entry points and CIs
automatically discovered by Service Mapping with entry points and
CIs from the CMDB. After you manually add an entry point, you can
update the service instance with CIs from the CMDB based on the
relationships defined there.

For additional information related to Service Mapping, see Pattern
customization and Enable traffic-based discovery for CI types or specific
CIs.

Procedure

1. Open the service instance map.

a. Navigate to All > CSDM > Manage Technology Management
Services > Service Instance.

b. Select the needed service instance.

c. On the service instance page, select View Map.

2. If needed, click Edit to ensure that the map is in Edit mode.

If Service Mapping is deployed, then in Edit mode, the Discovery
Messages section appears below the map.

3. To connect a CI to another CI on the map, right-click the CI to which
you want to connect the new CI, and then select Add a CI.

4. In the Add A CI dialog box, specify the CI to add:

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

Field
Description

CI Type

Select the CI type (CI class)
for the CI you are adding.
Every CI belongs to a CI type
which contains a set of attributes
configured for this kind of CI,
for example, cmdb_ci_appl for
applications.

CI Name

Select the CI from the list of CIs
of the selected CI type.

Note:   To eliminate
the possibility of delayed
results when searching for
a specific CI, make your
search as specific as
possible. A search with
*<name> might take a long
time and return a large data
set.

The CI type list includes only allowed CI types. For example, you
cannot add an application cluster.

5. Click Submit.
The manually added CI appears on the map.

Note:   When you manually add a CI, which is an application, as
a child to a service that already includes its parent application
CI, the newly added child application CI is hidden inside the
inclusion. Click the plus (+) symbol next to the parent application
CI to see the child application CI.

6. (Optional) If Service Mapping is activated, add a discoverable
outgoing connection for the manually added CI:

a. Right-click the manually added CI.

b. Select Manually add a connection.

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

Note:   If you do not see the Manually add a connection
option in the right-click menu, check that you are logged
in with the user that belongs to the same domain as the
application service.

c. Configure attributes for the entry point as described in Entry
points attributes.

d. Click Submit.
Discovery and Service Mapping attempt to discover this CI. If
successful, the CI appears on the map. Otherwise, a warning

icon (

) appears.

7. (Optional) If Service Mapping is activated and you want Service
Mapping to automatically discover a CI, which you previously added
manually:

a. Customize the relevant pattern or fine-tune traffic-based
discovery to enable Service Mapping to discover the CI.

b. Navigate to the relevant service instance map.

c. Click Run discovery.

d. After the discovery process finishes, verify that Service Mapping
discovered the CI by checking the connector leading to the CI.
If Service Mapping discovered the CI, then two connectors, a
manual and automatically discovered, appear for the CI.

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

e. Right-click the CI you added manually.
In the example, it is IBM WebSphere Message Broker.

f. Select Remove manually added CI.
The map shows the CI with only one connector leading to it. If
this CI had any manually added connections, they are removed
together with the manually added CI.

Related tasks

• Link application services

Related topics

• addCI()

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

49

Zurich ServiceNow AI Platform Capabilities

*[Figure Or Illustration - Page 49, 397x393px]*

```
............................................................
. .  .:.....:.....                                         .
.                                                          .
..  ........ .                                             .
.  ............                                            .


.
..
.+.
.-.

.
.
.
.:-:. ..:.::::...
...  . ..  . ...
.:.
:-:
:
...  ........
..... ::::::::...




........                                                   .
.:::::::.                                                  .
..::::::....................................................
```

---
*Page 50*

## Manually update an application service with changes
## from the CMDB

Ensure that an service instance is up-to-date and reflects all the latest
changes to its configuration items (CIs). Regularly update application
services to reflect any changes to CIs and their relationships in the CMDB.

Before you begin

Role required: app_service_admin

About this task

There is no mechanism or an API that automatically updates application
services that were created manually. Also, you may need to manually
update application services discovered by Service Mapping, if they
contain manually added CIs. You can only update application services
which contain manually created entry points and which are not
discovered by Service Mapping.

An example of a change is deleting CIs from the CMDB or connecting
two CIs one of which is part of an application service. In the first case,
your application service may show a CI that no longer exists. In the
second case, on the contrary, the application service omits a CI.

An update might involve adding CIs of the following CI types, which
cannot be added to an application service:

• NAT [cmdb_ci_translation_rule]

• Endpoint [cmdb_ci_endpoint]

• Qualifier [cmdb_ci_qualifier]

• Application cluster [cmdb_ci_application_cluster]

There are system records in the Manual CI Exclusions/Inclusions
[svc_manual_ci_exclusions_inclusions] table. See Components installed
with application services for more information.

Note:   The Manual CI Exclusions/Inclusions
[svc_manual_ci_exclusions_inclusions] table doesn't include CIs
added using traversal rules.

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

Also, the system can connect a CI from the service instance only to
actual CIs that exist in the CMDB, not a visualization of other items on the
map like clusters or boundaries.

The maximum number of CI connections added to
application services during this operation is controlled by the
sa.service.max_ci_service_population property. By default, the value
is 1,000 (one thousand connections). Increasing the number
of CI connections may cause performance issues. To adjust
the maximum number of added CI connections, add the
sa.service.max_ci_service_population property, as described in Add a
system property.

In environments with domain separation, only CIs belonging to the same
domain as the service instance are added into the service instance. If
there is a domain hierarchy, CIs must belong to the same child domain.

You can also update application services by using APIs.

Procedure

1. Navigate to All > CSDM > Manage Technology Management
Services > Application Service.

2. On the Application Services list view, select the service instance that
you want to update.

3. Click Advanced and then click Advanced Configurations.

4. On the Additional Info page, click the Update with changes from
CMDB related link.

5. Select a number in the Up to list to limit the number of levels of
related items to be updated.
If the specified number is higher than the number of levels of related
items that already exist in the service instance, then the system adds
the missing CIs and their connections.

Warning:   Specifying a lower number than the number of levels
that already exist in the service instance, does not result in the
removal of CIs from the service instance.

6. Click OK.

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

Result

• The system updates the service instance with the changes from the
CMDB and shows them on the map.

• After the update process is complete, the service instance form opens.

## Link application services

You can manually link two application services by adding a reference
to one application service into another application service. The service
that contains the reference, becomes a dependent service. The service
that you include as a reference is a contained service. You can link
application services to create dependencies for impact monitoring in
Event Management.

Before you begin

You can edit discovered and manually created service instances.

Important:   You cannot fine-tune or edit tag-based and dynamic
services from the map.

Ensure that you know the name and the service type of the application
service, to which you want to add a reference.

Role required: app_service_admin or service_mapping_admin

About this task

To create a link, add a reference to the relevant application service as
an outgoing connection of the relevant CI inside another application
service. For example, you can add the UK Portal application service as a
link to the Online Store application service. In this case, the Online Store
service becomes dependent on the UK Portal service that it contains. The
Online Store service reflects discovery errors for its contained service in
the Edit map mode, as well as alerts in Event Management.

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

Example of linked application services

When you link an application service to another application service, the
information about the CI, to which you linked the service, is updated in
the CMDB. The CMDB recognizes other application services that use the
same applicative flow, and adds the contained application service to
these application services by analogy. The same logic applies when you
remove a contained application service: The system removes it from all
application services where you either manually linked this service or the
system linked this service by analogy.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

53

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 53, 531x565px]*

```
. ...... .... .
. .:......... .
:
.
.    ......:....... ...                                    .
. .  :::.::::::::-. :..                          ..........
.    .............                                         .
...                                                        .
....::.....:.:.:.
.   .............                                          .

.
.*=.
:.                   .::
..
.
.

:-::  :::..::...
:::.

.
.
.......        .
...--.  . ...  .
..:--:      .   .
.     ..
.
..
. .......... .
..............
```

---
*Page 54*

When using Service Mapping, you may want to link application services
to create:

• A dependency between two application services.

• A placeholder for a map branch that Service Mapping failed to
discover. If you create or customize a pattern to discover the
configuration item (CI) serving as an entry point for the contained
service instance, Service Mapping can discover this contained service.

• An indication that an service instance contains a branch, which Service
Mapping cannot discover.

You can add an service instance as a contained service to as many
service instance as necessary.

Procedure

1. Navigate to Service Mapping > Application Services.

2. Click View map next to the relevant application service.

3. If needed, click Edit to ensure that the map is in Edit mode.

4. Right-click the CI to which you want to link an application service as
a reference.

5. Select Add A CI.

6. In the Add a CI dialog box, select the application service you want
to add as a contained service:

Field
Description

CI Type

Select the relevant service type
from this list:

• Tag-Based Application
Service

• Mapped Application
Service for discovered
or manually created
application services

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

Field
Description

• Calculated Application
Service for dynamic
services

• Dynamic CI Group

CI Name

Select the name of the
application service that you
want to link as a contained
service.

7. Click Submit.
The icon for the contained service appears on the map.

Related concepts

• Application services

Related topics

• View dependent application services in classic Service Mapping

• View contained application services in classic Service Mapping

## Group application services

Organize application services by groups to perform actions
simultaneously on multiple services, and to control user access to
services. You can use Event Management to track service health by
service groups.

Before you begin

Role required: service_mapping_admin or app_service_admin

About this task

Typically, enterprises have hundreds of services which makes it
impractical to manage them individually. Service groups can make

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

service lists much shorter and easier to manage, especially in large
organizations or service providers.

How you group service instances depends on the user and on service
provisioning policies in your enterprise. The relation between service
instances in groups is purely logical and the same service instance can
belong to multiple groups. For example, the Mobile service can be part
of the following service groups: Sales, Beijing, and Telephony.
Example of a service instance belonging to different groups

You can embed a service group within another service group to create
a hierarchy of service groups. If users have access to a parent service
group, they automatically have access to all its child groups. By default,
all new services are assigned to the All service group that lets all users
view and manage service instances. When you assign a role to a service
group, the users with this role can access service instances in this service
group and in the All service group. To enable users with this role to access
other services, assign this role to the respective service group. Do not
assign user roles directly to the All service group.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

56

Zurich ServiceNow AI Platform Capabilities

*[Figure Or Illustration - Page 56, 383x343px]*

```

................
......-----:--........
..........................
..............................
................................
..................................
...................................
.......................:::::::::::..
....................:::-------------:..
.   ................::--::::::::::::::-::::..
.      ..............:------:::::::::::::::::::::
.         ............:-=------:::::::::::-:::::::::.
.           ..........-----------:::::::::::::::::::::.
.             ........:-:--:::-:---:::::::::::::::::::::.
.               .....:------=-=----:::-::::::::::::::::::
...:-------------::::::::::::::::::::::
.:::::::::::::::::::::::::::::::::::
.                    .:::::::::::::::::::::::::::::::::::
.                     ::::::::::::::::::::::::::::::::::.
.  .                 .::::::::::::::::::::::::::::::::.
. ::::::::::::.      .::::::::::::::::::::::------::.
.............        .::::::::::::::::::::::::::.
..::::::::::::::::::::::.
..::::::::::::::...
........
```

---
*Page 57*

If Service Mapping is activated, service groups can contain a mixture
of manually created application services and application services
discovered by Service Mapping.

You can use ServiceNow AI Platform Notifications to alert users if the
service group severity changes to critical. The overall severity of the
group is determined by the highest alert severity within the group.

Procedure

1. Navigate to All > Configuration > Application Services > Service
Groups.

2. Click New.

3. Enter the name of the new service instance group in the Name field.

4. To embed this group in another group, enter the name of the other
group in the Parent Group field.

5. Right-click the form header and click Save.

6. Add a service instance to the newly created service group.

a. In the Service Group Members section, click New.

b. In the Name field, enter the name of the service instance.
If you are using Event Management, you can also enter an alert
group name.

c. Click Submit.

7. Alternatively, add a service instance to a group from the service
instance form.

a. Navigate to All > Configuration > Service Instances > Service
Instances.

b. Select the service instance you want to add to a service group.

c. In the Service Group Members section, double-click Insert a new
row.

d. Enter the name of the service group to which you want to add
the selected service instance.

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

e. Click the OK icon (

).

f. Click Update.

## Control user access to application services

Assign user roles to service groups to grant users access to application
services in your organization. Your organization may restrict access to
some services for security or secrecy reasons.

Before you begin

Make sure that you have performed the user provisioning tasks for the
users you want to grant access:

1. Add users to user groups.

2. Create new roles.

3. Assign roles to users or user groups.

Also, make sure that you have created service groups as described in
Group application services.

Role required: app_service_admin or service_mapping_admin

About this task

In the base system, the following roles provide access to application
services:

app_service_admin

Creates and modifies service instances, creates service groups, views,
and edits service instance maps.

app_service_user

Views maps for operational service instances and retrieves service
content using the getContent - GET REST API. The itil role that serves as
the basic helpdesk technician role contains the app_service_user role.

Service Mapping provides these preconfigured roles:

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

service_mapping_admin

Sets up the Service Mapping application. Maps, fixes, and
maintains service instances. Also performs advanced configuration
and customization of the product. Assign this role to application
administrators.

service_mapping_user

Views maps for operational service instances to plan change or
migration, as well as analyze the continuity and availability of services.
Assign this role to application users.

sm_app_owner

Provides information necessary for successful mapping of a service
instance. Once a service is mapped, this user reviews the results and
either approves it or suggests changes. Assign the sm_app_owner role to
users who own service instances and are familiar with the infrastructure
and applications that make up the services.

Note:   Users with the itil role only can view all service instances.

Event Management provides these preconfigured roles:

evt_mgmt_admin

Has read and write access to all Event Management features to
configure Event Management.

evt_mgmt_operator

In addition to the evt_mgmt_user permissions, can also activate
operations on alerts such as acknowledge, close, open incident, and run
remediations.

evt_mgmt_user

Has read access to all Event Management features. Has write access to
alerts to manage the alert life. Has the itil role to be able to manage
incidents that are created from alerts.

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

evt_mgmt_integration

Has create access to the Event [em_event] and Registered Nodes
[em_registered_nodes] tables to integrate with external event sources.

Typically, enterprises have hundreds of services which makes it
impractical to manage them individually. Service groups can make
service lists much shorter and easier to manage, especially in large
organizations or service providers. In a hierarchy of service groups, access
to a parent service group automatically grants access to all the child
service groups.

Users inherit permissions from roles that are assigned to them. You can
assign some roles directly to service groups to allow all users with this
role to access all application services belonging to this group. However,
most enterprises choose to organize their roles as a hierarchy. It helps to
manage roles across multiple ServiceNow applications. For example, the
Service Mapping administrator [service_mapping_admin] can be part of
a broader administrator role like administrator [admin]. You can add
users to user groups and then assign roles to the user groups to give
permissions of this role simultaneously to all the group users.
Assigning a role to an application service group

By default, all new services are assigned to the All service group that lets
all users view and manage service instances. When you assign a role to a
service group, the users with this role can access service instances in this
service group and in the All service group. To enable users with this role to

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

60

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 60, 704x311px]*

```
.......                                              .....
........                                             .....
..                                                 .....
::.  .                                          .. .::..
...  ...                                      ....   .
...                                   ....
..   .....:----------... ... ...:---------:....... .:.:.
::. ......:====--====... .:. ...-=---=---=-.......  .:.
..     ....:..:::..:.. ........ .:::::::::.....      .
.    ....              ........              ...    . .
::  ...                                        ... .:.:.
..                                              ..  .:.

```

---
*Page 61*

access other services, assign this role to the respective service group. Do
not assign user roles directly to the All service group.

Procedure

1. Navigate to either of the following:

• Configuration > Application Services > Service Group
Responsibilities.

• If Service Mapping is activated: Service Mapping > Services >
Service Group Responsibilities.

• If Event Management is activated: Event Management > Services
> Service Group Responsibilities.

2. Click New and fill out the Application Service Group Responsibilities
form.

Field
Description

Application Service Group
Service group to which you want
to assign a role.

Role

Role you want to assign to the
selected service group.

For example,
financial_services_admin.

3. Click Submit.

Example

To manage access to services that contain sensitive financial information
in your organization:

1. Organize the services into the Financial Services group.

2. Create a new user role, financial services
administrator [financial_services_admin] role, that contains the
[app_service_admin] role.

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

3. Assign the Financial Services administrator role to the Financial
Services group.

As a result, only users with the Financial Services administrator role can
access application services belonging to the Financial Services group.

## View an application service map in base system

An application service map provides a visualization of data for the CIs
comprising an application service, and the relationships and connections
between these CIs.

Before you begin

Role required: app_service_user to view the map in View mode, and
app_service_admin to modify services in Edit mode.

About this task

When you create an application service, the system generates an
associated application service map. The system then updates the map
to reflect any changes to the application service. This map consists
of icons representing CIs and arrows that represent the connections
between them.

If Service Mapping is deployed, see Application service maps and View
CI connection attributes in an application service map for more details.

To open an application service map, navigate to CSDM > Manage
Technology Management Services > Application Service, select an
application service, and then click View map.

Perform any of the following operations in the application service map.

Procedure

• Select

on the windows bar to navigate to a different application
service.

• Use the navigation tools to increase or decrease the view of the map
and to move the map on the page.

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

You can also click anywhere on the map area and
drag a segment of the map into the visible area.

• View changes: You can view changes and change records associated
with the application service as a whole or with any of its CIs, within a
time range.

For more information, see View the change history of application
services.

Records under the Change tab underneath the map, which are
associated with a selected CI or connection, are highlighted. If you
select a change record under the Change tab, then the associated CI
icon appears yellow on the map.

• View attributes: When you select a device, application, or connector
on the map, it appears in blue and its attributes appear in the
Properties pane on the right of the map.

When nothing is selected on the map, the details of the application
service itself appear on the Properties pane.

Open the CI's form for further details by clicking Detailed Properties at
the bottom of the Properties pane.

• Select Edit to add or remove CIs from the map or View to switch the
map mode.

• Select

for Additional actions:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

63

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 63, 430x190px]*

```
.                     .
.  ......  ... .....  .
.    .. ...... ...    .
.    ..  .... ....    .
:..:
.  .
.                     ..       .  .
.  .....  . ..... ....  :.  ....:...
.             .       ..       ..
....      .                .
.  :    .:  ....    ... ..  .
....      . .... . ....... .

```

---
*Page 64*

• Set Group CIs on map: Simplify maps by grouping 10 or more CIs
belonging to the same type and hosted on servers sharing prefix and
domain name.

• Set Spanning tree view: Simplify the map by organizing CIs into a tree
structure and hiding some connection lines. This option is especially
useful for very large maps.

• Map Indicators: Show additional information for a CI or for the
application service itself by displaying related records such as alerts,
outages, incidents, and problems. For each indicator that is enabled,
the corresponding indicator icon appears next to CIs with associated
records, and the corresponding tab appears underneath the map. If
a record is associated with the application service itself, the indicator
appears next to the application service name.

For information about managing map indicators, see Create or
modify map indicators. For more general information, see Event
Management Map Indicators (Video).

• Export to PDF: Export the map to a .PDF file which you can then share

as needed. After the PDF file is ready, click

to download the PDF
file to your local drive.

• View the details of a connection.
By default, connection lines for the same CI on an application service
map, are merged. This merge reduces clutter on the map and helps to
make the map more readable. For a merged connection line, you can
view details for all the underlying connection lines.
Merged connection lines

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

64

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 64, 1092x436px]*

```

.                                  .
.        .                         .        .
..                                  .
.                                  .
.                                  .
.......                            .......
..................                  .          ..         .
. ..                               .
.        .                                  .
..        .        ..              ..        .        ..
```

---
*Page 65*

• To view the source and target CIs of a connection, right-click a
connection line.
If spanning tree view is enabled:

1. • Select the CI whose connections you want to view to show all the
concealed connections for the CI.

2. • Right-click one of the connection lines.

• To view properties of a connection, click a connection line. For
manually added connections, Endpoint Type is Manual Endpoint.

• To view properties of a connection within a merged connection:

1. • Right-click the merged connection line.

2. • Select one of the connections.

3. • Select Select edge.

What to do next

You can change the details that appear in the Properties pane by
updating the form view 'Form view and section', as described in
Configuring the form layout.

Related reference

• Spanning tree view property

## View CI attributes in an application service map in
## classic Service Mapping

An application service map displays attributes for each configuration
item (CI) that is part of the application service, as well as for the
application service itself. The attributes come from the CMDB.

Before you begin

Role required: service_mapping_admin or service_mapping_user

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

About this task

You can view the following information for each CI:

Name label

The CI name. This attribute is either preconfigured on the CI or configured
during CI installation.

Basic attributes

A summary of the most important CI attributes.

Detailed attributes

A complete list of all attributes collected for the CI.

Each CI type (CI class) has different attributes. For example, the Linux
Server type has different attributes than the SQL Instance type.

If Service Mapping is deployed, the way CIs appear on the map
depends on the view you select for the map. Attributes available
for viewing also depend on the Service Mapping setup. For more
information, see description of components installed with Service
Mapping.

Procedure

1. Open the service instance map.

a. Navigate to All > CSDM > Manage Technology Management
Services > Service Instance.

b. Select the needed service instance.

c. On the service instance page, select View Map.

2. If needed, click Edit to ensure that the map is in Edit mode.

If Service Mapping is deployed, then in Edit mode, the Discovery
Messages section appears below the map.

3. To see the full name of a CI whose name has been shortened on the
map, point to the CI.

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

A tooltip displays the full CI name.

4. Click a CI to see its details in the Properties pane.

The attributes of applications and the servers that host them appear
separately.

5. To view more detailed attributes for the CI, click Detailed properties
at the bottom of the Properties pane.

6. (Optional) To view configuration files associated with a CI in
environments where Service Mapping or Discovery are enabled and
tracking changes to CI configuration files is enabled):

• Review the list of files under Tracked Files in the Properties pane.
Click the file name to open the actual file.

• Click the Affected CIs tab and view the list of configuration files.
Click the file name to open the actual file.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

67

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 67, 650x475px]*

```
......   .       :.
. ....     .       ..
.     .    .:.  . .  .
.......         ..        .
.:              ......
.-
.... . .               .
.
.                                       .
::. .....                                .
.
.                                       .
.                                         .
.::....::.::.                             .
..                                       .
.                                       .
.
...  ..:....                              .
..  ... ...
.

```

---
*Page 68*

## View the change history of application services in
## classic Service Mapping

You can view the changes made to an application service as a whole
and to the individual configuration items (CIs) comprising the service.
Change history is useful for maintenance, planning, or troubleshooting
procedures.

Before you begin

Role required: admin, service_mapping_admin, service_mapping_user,
app_service_admin, or app_service_user

About this task

Details about changes to a service instance and to its CIs are stored
in the CMDB. Typically, these changes reflect adding or removing CIs
from a service instance, upgrading or updating CIs, or modifying CI
configuration files. The system gathers this data by querying CMDB
tables and then creating the change history view. In deployments where
Service Mapping is activated, the type of change information Service
Mapping queries depends on discovery patterns that Service Mapping
uses to discover CIs.

Changes to configuration files are associated with CIs to which these files
belong. Maps show configuration file changes as changes to related CIs.

While you can see change records for a specific CI in the context of
application services, you can also see detailed history of a specific CI
separate from its service instance as described in History Timeline.

If the ServiceNow AI Platform is configured to validate changes, all
changes are evaluated and rendered as valid or not. If a change
is valid, its change record on the service instance map is marked
as approved. For more information about configuring the platform for
change validation, see Managing proposed changes.

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

Changes to the service instance appear on the history timeline.

The type of change mark depends on the nature of changes that it
represents:

Light gray balloon (

)

Unapproved change that does not influence the service instance
behavior. For example, a change in a network path or adding a node
to a cluster.

Dark gray balloon (

)

Unapproved change that changes the service instance behavior.

Green balloon (

)

An approved change in deployments where the ServiceNow AI Platform
is configured to validate changes.

Double balloon (

)

Multiple separate changes that happened a short time from each other.

You can mark times on the history scale by creating baselines to quickly
return to the marked view.

Procedure

1. Open the service instance map.

a. Navigate to All > CSDM > Manage Technology Management
Services > Service Instance.

b. Select the needed service instance.

c. On the service instance page, select View Map.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

69

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 69, 664x139px]*

```
...........
...:...
.
............. :          .....  .....  ...   ...  ..::.
........     :. ..           .. .......  . ..... ........
.........    .                 ........     . .. .........
```

---
*Page 70*

2. Review change records created for this service instance on the
Changes tab at the bottom of the page.

If Service Mapping is deployed, then in Edit mode, the Discovery
Messages section appears below the map.

3. On the history timeline, set the time range of changes that you want
to view.

Option
Action

To set the time range of the
history timeline

Click the hour, day, week, or
month icons.

To increase or decrease the
time range

Click the zoom in and zoom out
icons.

To change the upper limit on
your history range

Click the history scale.

The time that serves as the
upper limit appears above the
history timeline.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

70

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 70, 467x74px]*

```
. .  .........  .:::.:.:.::.:....
. .  .........  .:...:....................
..     .    .                         ....
..........
```

---
*Page 71*

Option
Action

Note:

You cannot set the lower
limit on your history range
to a time before this service
instance was created. This
time is marked with the IT
Service Created event on
the history timeline.

The map shows the history view of the service instance for the time
you selected.

Note:   The Change tab shows all change records, even the ones
which are filtered out of the history view.

4. To mark a time on the time scale, set a baseline:

a. Click the Compare icon.

b. Navigate to the time you want to mark as a baseline on the
history scale.

c. Click Set baseline.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

71

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 71, 303x93px]*

```
:..:............................:...........................
:-. :::.:.::.::.::.::.        ... ... ... .. ...
. .:  ::........:.............. .::.:::.::..::.:::
.     :::::::::.:::::::.:::::::.... ... ... ......
.                               .. . ...  ....   ....  .....
.-                                 :-:  .:-.    :-.  .-:
.  .               ..                 .    ...     .    .
.::::.::.:..:.::.:-.
........... .... ..
```

---
*Page 72*

d. Enter the name of the baseline and click OK.
The new baseline appears as a button above the history scale
and as a blue flag on the history scale.

5. View the change history.

Option
Action

To see the CI responsible for a
change record

Select a change record on the
Changes tab.

The related CI is marked yellow
in the map.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

72

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 72, 282x133px]*

```
..    .
.  ..  . .-: .:::::. ::     .:....::..:..:....
.  ..    .::..:.:::. .:     ..................
.................. .........................................
. ............. ...........  .. ::.........:: ..............
. .:::::::::..   .:::.:::.   :. :---:-------:
.   ....  ...........     ..... .:::::::::::.
............................................................
............................................................
............................................................
.............:-...................::.........::.............
...:..        .                   .           .
......:::::::::::::.:-......................................
......::::::::.::::.::......................................
```

*[Banner/Header Image - Page 72, 282x133px]*

```
..    .
.  ..  . .-: .:::::. ::     .:....::..:..:....
.  ..    .::..:.:::. .:     ..................
............................................................
. ...........::.:::::::::::..:::............................
. .:::::::::.-. ..:::.:::.   :.:.:--:----:-.
.   ....  .. ::::::::.:...:::-::............
.............................:-:............................
...............................:::..........................
................................:=:.........................
.............:-...................::.........::.............
...:..        .                               .
......:::::::::::::.:-......................................
......::::::::.::::.::......................................
```

*[Diagram Or Flowchart - Page 72, 600x409px]*

```

-.                .-
:.                .-

.
....  .            :... .    .
.:. .........      .:. ......:..
..
.
..         .
.::. ........
.
.::::::. ........................    ...... .. .............
........                                    ..
...                              .... .: ...
.............................................:..............
:...........................:::.............:.:.:..:.::....:
....................................................... ....

..   ..........            ....        ...............
```

---
*Page 73*

Option
Action

To see only change records
related to a CI

Select the required CI or the
connection on the map.

The Changes tab displays only
change records related to the
selected CI or connection.

To see the configuration file at
the selected moment in the past
a. Set the time on the history
scale.

b. In the Properties pane, scroll
to Tracked Configuration
Files, and click the file
name.

The new tab opens
displaying the content of
the tracked configuration
file at the selected time.

To see the network at the
selected moment in the past
a. Set the time on the history
scale.

b. Right-click the connection
and select Show network
path.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

73

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 73, 557x414px]*

```
:+.                 ==
.                   .

. .
..:. .... ....     ..... .... ...
.:. ..........     .::. ......:..
.
.
.
.::. ..:::..
.

.....          .
..............   .
................ .
..
.......              ..
.:::::::.             ..
.......              ..
.....            .     .                 ..... .......
..    ..........      .      ....              ...... . ....
:.    .  .     .             ....              .............
```

---
*Page 74*

Option
Action

The new tab opens
displaying the network or
storage path map for the
time you selected.

Note:   You cannot
view the network path
for connections marked as
boundaries to this service
instance.

6. To exit the history view and see the current status of the service
instance, click the current icon.

Related tasks

• View an application service map in base system

• Compare two versions of an application service in classic Service
Mapping

Related topics

• Modify tracking changes in configuration files

• Fine-tune tracking changes for the change history

## Compare two versions of an application service in
## classic Service Mapping

You can see a summary of application service changes at a glance by
comparing two versions of an application service. This feature is useful
for checking the application service status before and after a certain
change or problem.

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

Before you begin

Role required: admin, app_service_admin, app_service_user,
service_mapping_admin, or service_mapping_user

About this task

Specify two points in time for which to compare the two versions of an
application service. You can use the change indicators on the timeline
to specify one point in time that is before and another that is after a
change for which to see the details. For example, if you know that the
application service started to fail at a certain time, you can compare
two versions of the application service, one before and one after the
problem started. This comparison lets you see the summary of changes
that possibly led to the problems.

Service Mapping, if deployed, tracks and shows all changes to a CI
including configuration files associated with a CI. When you compare
two versions of an application service, you can see changes made to
configuration files as changes to CIs. You can also compare two versions
of a configuration file to see the actual changes in the files, during the
time range specified for the comparison.

Procedure

1. Open the service instance map.

a. Navigate to All > CSDM > Manage Technology Management
Services > Service Instance.

b. Select the needed service instance.

c. On the service instance page, select View Map.

2. If needed, click Edit to ensure that the map is in Edit mode.

If Service Mapping is deployed, then in Edit mode, the Discovery
Messages section appears below the map.

3. On the history timeline, set the time range of changes that you want
to view.

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

Option
Action

To set the time range of the
history timeline

Click the hour, day, week, or
month icons.

To increase or decrease the
time range

Click the zoom in and zoom out
icons.

To change the upper limit on
your history range

Click the history scale.

The time that serves as the
upper limit appears above the
history timeline.

Note:

You cannot set the lower
limit on your history range
to a time before this service
instance was created. This
time is marked with the IT
Service Created event on
the history timeline.

The map shows the history view of the service instance for the time
you selected.

Note:   The Change tab shows all change records, even the ones
which are filtered out of the history view.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

76

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 76, 467x74px]*

```
. .  .........  .:::.:.:.::.:....
. .  .........  .:...:....................
..     .    .                         ....
..........
```

*[Banner/Header Image - Page 76, 303x93px]*

```
:..:............................:...........................
:-. :::.:.::.::.::.::.        ... ... ... .. ...
. .:  ::........:.............. .::.:::.::..::.:::
.     :::::::::.:::::::.:::::::.... ... ... ......
.                               .. . ...  ....   ....  .....
.-                                 :-:  .:-.    :-.  .-:
.  .               ..                 .    ...     .    .
.::::.::.:..:.::.:-.
........... .... ..
```

---
*Page 77*

4. Click the Compare icon.

5. Set Compare point 1 and Compare point 2 as the two points in time
for the comparison.

You can drag the pointers on the history scale to set corresponding
time points.

If the history scale does not include the time set for comparison,
then its corresponding pointer appears next to the compare point in
yellow:

Note:   If there are no changes to the service during the time
interval specified by Compare point 1 and Compare point 2,
then no change details are displayed.

6. Click Compare.
The comparison view opens in a separate tab.

7. Select a marked CI to see the relevant change record on the
Changes tab.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

77

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 77, 774x129px]*

```
......................:::...::::.......::...................
......................:::..............::...................
............................................................
.   ...... . .    ...    ......      ..              .::::..
.................   ...................  .............---=:.
```

*[Banner/Header Image - Page 77, 730x131px]*

```
............................:::::..............:...........:
...............................................:...........:
...........................................................:
.   ....... . .      .    .......           ....    .:::::.:
...................  ....................  ..::......-----.:
```

---
*Page 78*

8. (Optional) If Service Mapping is deployed, you can compare two
versions of a configuration file that appears on the map as Updated:

a. Select the CI that is associated with the updated configuration
file.

b. In the Properties pane, click the link to the updated file.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

78

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 78, 817x483px]*

```
:.           :.           ::           .:               .
.
.
...:::....  .             ...:::....         .
........... .               .........        .
.....::.... .               .........        .
..  .                                      .
.                                      .
.. .....                      .
.                          .
.
.                                      :
.:::::. .......... .. ..........        .:...     ........::
...           ...            .........                 .
.   .........     ..:.           ...............           :
... .........     .....          ................          :
..   . .            ..             .    . ..               .
```

---
*Page 79*

The Tracked Configuration Files Version Compare tab opens
showing two versions of the configuration file side by side.

c. Review actual changes.

Highlight colors indicate the type of change:

• Purple — Updated line

• Pink — New line

• Gray — Deleted line

d. Navigate between the changes using the Next difference icon

and the Previous difference icon .

e. Close the Tracked Configuration Files Version Compare tab when
finished.

9. Close the comparison view when finished.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

79

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 79, 580x424px]*

```
............................................................
.........................
..                .....                   .
.              :.
.
..:.     .
:.........
.....:::::            ..  .         .    ..
..  .. .. ..
...... ......
.:................:::.
....................
.:.
.         ....


.::::. .......  .........        ..............:...    .....
...        ..          .......

.                ..                 .
.  ........   .....       ................                 .
```

---
*Page 80*

Related tasks

• View the change history of application services in classic Service
Mapping

Related topics

• Compare versions of CI configuration files

## Use application services APIs

Application services provide APIs that let you perform operations such as
creating and updating an service instance, populating it with CIs from
the CMDB, and retrieving details from an existing service instance.

Role required: app_service_admin

A service instance is a set of interconnected applications and hosts that
are configured to offer a service to the organization. Service instances
can be internal, like an organization email system or customer-facing, like
an organization website.

Create an application service

Using the createOrUpdateService - POST REST API to create an service
instance suits your organization if the ServiceNow CMDB already contains
the CIs making up the service. Typically, it is the case when you have
manually added CIs directly into the CMDB, or used the Discovery
application to discover CIs and store information about them in the
CMDB. You can also use this API to create an service instance containing
CIs discovered using non-ServiceNow applications.

By default, when an service instance is created, all CI connections are of
the Depends on::Used by relationship type. You can modify this default
type by changing the value of the sa.it_service.manual_ci_rel_type
property.

Before creating an application service, ensure that:

• The CMDB contains all the CIs comprising the application service.

• You have the sys_id of each CI comprised in the application service
you want to create.

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

• You understand the hierarchy that the CIs form.

The Mapped Application Service [cmdb_ci_service_discovered] table
contains every service instance including services you create using APIs.

You can also manually create an service instance using the user
interface as described in Create an application service.

Retrieve content from an application service

Use the getContent - GET REST API to retrieve a list of CIs and the
relationships between them, for an application service that was created
manually.

Additional APIs

The following JavaScript APIs are also available:

•

addCI(): Add a CI to a manually created an service instance.

For restrictions on the CIs being added and other details about adding
a CI to an service instance, see Manually add CIs to an application
service.

•

addManualConnection(): Add a manually created connection to an
application service.

•

migrateManualToApplicationService(): Convert a manual service to an
application service.

•

populateApplicationService(): Populate an application service with CIs
and relationships from the designated entry point.

•

removeCI(): Remove a manually created CI from an application
service.

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

•

removeManualConnection(): Remove a manually created connection
and the connected CI from an application service.

Related topics

• Application Service API

## Components installed with application services

Several types of components are installed with activation of the
Application Service [com.snc.cmdb.it_service] plugin, including tables,
user roles, and scheduled jobs.

Note:   The Application Files table lists the components that are
installed with this application. For instructions on how to access this
table, see Find components installed with an application.

Roles installed

Role title [name]
Description
Contains roles

[app_service_user]

Views maps for
operational service
instances and retrieves
service content using
the getContent -
GET REST API.
The itil role that
serves as the basic
helpdesk technician
role contains the
app_service_user role.

None

[app_service_admin]
Creates and modifies
service instances,
creates service

itil

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

Role title [name]
Description
Contains roles

groups, views, and
edits service instance
maps.

Tables installed

Table
Description

BaseLines

[sa_baselines]

Storing points in the time defined
as baselines for application
services.

Business Service User preferences

[sa_business_service_user_prefs]

User preferences associated with a
specific application service.

Menu Action

[sa_context_menu]

Data on configurable menu
options for CIs in the application
service map.

Hash

[sa_hash]

Internal table which contains
counters and hashes on various
types of updates related to
application services.

Entry Point

[sa_m2m_service_entry_point]

Maps entry points to application
services.

Discovered Service Notification

[sa_notification]

Internal table which contains data
on notifications between different
parts of the software. Mostly used
after activating Service Mapping.

Service Group Members
Maps service groups to application
service members.

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

Table
Description

[sa_service_group_member]

Business Service Group
Responsibilities

[sa_service_group_responsibilities]

Data on users having access to
application service groups.

Checkpoint Attribute Description

[checkpoint_attribute_description]

Links between history timeline
changes and service model
internal entities (checkpoints).
Used in lists of history of changes in
application service maps.

Service Instance

[cmdb_ci_service_auto]

Services that can be monitored
by the system, which in the base
system, includes only application
services. If Service Mapping is
activated, there can also be
records for dynamic CI groups. If
Event Management is activated,
there can be records for alert
groups.

Mapped Application Service

[cmdb_ci_service_discovered]

Application service CIs. For each
application service, there is a
container CI record that models
the application service.

Bulk Convert Services

[cmdb_convert_bulk_services]

All bulk conversions of business
services to application services
(current and past), along with
the conversion progress which is
refreshed every 10 seconds.

Application Services Action Results

[csdm_dashboard_action_report_r
esult]

Results for the 'Application Services
Missing Data' report in the
Application Services dashboard.

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

Table
Description

Application Services Types Results

[csdm_dashboard_type_report_res
ult]

Results for the 'Application Services
by Type' report in the Application
Services dashboard.

Application Services Dashboard
Results

[csdm_dashboard_reports_result]

Results for the '<Application Servers
| Databases | Hardware Servers>
Not in an Application Service'
reports in the Application Services
dashboard.

Manual CI Inclusions / Exclusions
[svc_manual_ci_exclusions_inclusio
ns.list]

Contains CI classes included or
excluded from application services
during population of manual
or dynamic application services.
Service population happens when

• Manually adding CIs to an
application service

• Converting a business service to
an application service

• Creating or updating an
application service using APIs

• Manually updating an
application service with changes
from the CMDB

Note:   The Manual CI
Exclusions/Inclusions
[svc_manual_ci_exclusions_inc
lusions] table doesn't include
CIs added using traversal
rules.

In the base system, the following CI
classes are excluded:

• NAT [cmdb_ci_translation_rule]

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

Table
Description

• Endpoint [cmdb_ci_endpoint]

• Qualifier [cmdb_ci_qualifier]

• Application cluster
[cmdb_ci_application_cluster]

CIs of any CI class that is
not configured for exclusion in
this table can be added to
application services.

Note:   In the CMDB hierarchy,
a class derives the included/
excluded setting from its
closest ancestor. If a class
has its own explicit setting, it
overrides the derived setting.

This table supports the functionality
that was earlier supported using
the following deprecated
property:
sa.mapping.user.manual.citype.bl
acklist.

Properties installed

To access application services properties, navigate to All > Configuration
> Application Services > Properties. The role required for modifying
property values, is app_service_admin.

If Service Mapping is deployed, see Properties installed with Service
Mapping for additional application service properties.

Note:   To open the System Properties [sys_properties] table, enter
sys_properties.list in the navigation filter.

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
Usage

The sys_id of the default relation
type to be added between
source and target when adding CI
manually to application service

sa.it_service.manual_ci_rel_type

• Type: string

• Default value:
5599a965c0a8010e00da3b58b11
3d70e (Depends on::Used by)

• Learn more: Manually add CIs to
an application service

Coefficient of aggregation
interval. 0 value means no
aggregation is performed on
history timeline. The purpose of this
property is to decrease number
of changes in history timeline by
increasing the interval allowed
between changes

sa.history.aggr_interval_coef

• Type: integer

• Default value: 1

Sync Service Mapping operations
with Service Modeling

sa.service_modeling.use

• Type: true|false

• Default value: true

Enable limitation of application
service maps drawing by number
of nodes and edges.

sa.map.LIMIT_MAX_GRAPH_SIZE

Limit the number of nodes and
edges on application service
maps.

• Type: true|false

• Default value: true

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

Property
Usage

Setting this property to false may
reduce performance in maps of
large services.

Maximal number of displayable
nodes on application service map.
Maps with larger values will not be
displayed.

sa.map.MAX_NODES_FOR_LAYOUT

The max number of nodes
displayed on an application
service map. If the number of
nodes exceeds the specified
number, the map does not appear
and an error message appears.

• Type: integer

• Default value: 5000

Global flag to allow or disable
spanning tree view for maps. true
(default) - allows but not forces
spanning tree view on maps.

sa.map.ALLOW_SPANNING_TREE_V
IEW

Enable spanning tree view for
application service maps.

• Type: true|false

• Default value: true

Maximal number of displayable
edges on application service map
before spanning tree view applied.

sa.map.MAX_EDGES_FOR_FULL_LA
YOUT

The max number of edges
displayed on an application
service map, before applying
spanning tree view.

• Type: integer

• Default value: 1000

Maximal number of displayable
edges on application service map.

Max number of edges displayed
on an application service map. If
the number of edges exceeds the

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

Property
Usage

Maps with larger values will not be
displayed.

sa.map.MAX_EDGES_FOR_LAYOUT

specified number, the map does
not appear and an error message
appears.

• Type: integer

• Default value: 100000

Increasing the default value may
reduce performance in maps for
large services.

Maximal degree of node on
application service map for large
map mode. Maps with smaller
degrees will be displayed in
regular mode. Maps with larger
degrees will apply more edges
merging for more compact view.

sa.map.LIMIT_GRAPH_DEGREE

• Type: integer

• Default value: 1000

Increasing the default value may
reduce performance in maps for
large services.

Limit of amount of services that
displayed on Services Tree on
maps. Then this limit reached,
Services Tree will be blocked.

sa.service_tree.MAX_ITEMS_TO_DIS
PLAY

• Type: integer

• Default value: 7000

Maximal amount of connection
properties to be shown at once
when connection line selected
on service map. If selected line
contains more connections than
defined here, then properties

• Type: integer

• Default value: 50

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

Property
Usage

panel will have notification about
cut-off connections.

sa.map.max_connections_in_prop
erties_panel

Enable grouping of CIs on map.

sa.map.enable_auto_grouping

• Type: true|false

• Default value: true

Minimal number of CIs on a map
to apply CI grouping. Relevant
only if CI grouping is enabled on
the map. The following CIs are
not counted: discovered clusters,
internal CIs inside inclusion boxes,
entry points, error nodes, host CIs
or CIs that are not hosted on other
CIs.

sa.map.min_nodes_for_auto_grou
ping

• Type: integer

• Default value: 10

Render full labels on CIs on map.
Applicable to all CI labels (CI
name, host name, cluster label,
etc.) Enabling this will disable
labels truncation, and labels will
most probably overlap with other
map elements. Not applicable to
network/storage path maps.

sncCommonMap.RENDER_FULL_LA
BELS

The default value of disabled,
means none.

• Type: choice list

• Default value: Disabled

• Other possible values:

• Exported PDF only: pdf

• Map and PDF views: all

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

Property
Usage

Maximal width of CI node labels
in pixels. Relevant for any kind
of labels (CI name, host name,
cluster label etc.) This size also
modifies horizontal space between
CI elements. Applied to map
view and exported PDF view.
Not applicable to network/storage
path maps.

sncCommonMap.NODE_LABEL_WI
DTH

• Type: integer

• Default value: 95

• Other possible values:

• Min value: 20

• Max value: 1000

glide.cmdb.csdm.app_service.ma
x_results

Max number of items that are
calculated in the '<Application
Servers | Databases | Hardware
Servers> Not in an Application
Service' report in the Application
Services dashboard.

• Type: integer

• Default value: 100000

• Location: Add to System
Properties [sys_properties] table.

sa.service.max_ci_service_populati
on

The maximum number of CI
connections added to application
services during the following
operations: Converting manual
services created in Event
Management into application
services and updating application
services with changes from the
CMDB.

• Type: integer

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

Property
Usage

• Default value: 1,000

• Location: Add to System
Properties [sys_properties] table.

Increasing the default value may
cause performance issues.

sa.service.population.stop_expansi
on_under_ci_classes

List of application service CI
classes. If an application service
belongs to a CI class that extends
one of the CI classes in the list, the
system does not insert CIs under
this application service CI during
Manually updating an application
service with changes from the
CMDB.

• Type: string

• Default value:
cmdb_ci_service_discovered

• Location: System Property
[sys_properties] table.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

92

Zurich ServiceNow AI Platform Capabilities

# zurich_servicenow_ai_platform_capabilities_api_service_graph_connectors_2026-01-16-13-19-02

*Source: zurich_servicenow_ai_platform_capabilities_api_service_graph_connectors_2026-01-16-13-19-02.pdf*

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

## API Service Graph Connectors

You can use an API Service Graph Connector to import and integrate
third-party API data into CMDB tables.

Important:   Visit the ServiceNow Store website to view the latest list of
all API Service Graph Connectors.

Select a technology to learn about the API Service Graph Connector
available for ingesting data from an application using the technology
into your CMDB.

Apigee X

AWS API Gateway

Azure API
Management

Kong Gateway

Kong Konnect

## API Service Graph Connector for Apigee X

Use the ServiceNow® API Service Graph Connector for Apigee X
to import API proxy details from an Apigee X application into the
Configuration Management Database (CMDB).

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

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

Key features

Import data into a normalized data model for consistency across other
technologies.

The API Insights workspace provides a centralized interface where you
can analyze and interact with API data, without needing direct access to
Apigee X, enhancing visibility, governance, and collaboration across the
API estate. To learn more, see API Insights.

Supported ServiceNow versions

• Xanadu

• Yokohama

• Zurich

Use cases

You can use the API Service Graph Connector for Apigee X to:

• Maintain an end-to-end inventory of exposed and backend APIs,
identifying what APIs are published, used, and by whom.

• Track APIs from customer-facing endpoints to the underlying services,
identifying impacted endpoints when services change or fail and
creating incidents for reported issues.

• Address vulnerabilities and security incidents related to API endpoints,
and create compliance requirements to measure against.

Important information for upgrading API Service Graph Connector
for Apigee X

If you’re an existing customer using production instances, reach out
to Now Support before upgrading to API Service Graph Connector for
Apigee X v2.3.0. This upgrade alters source native keys that can impact
Source [sys_object_source] table records. Coordinating with Now Support
helps to prevent duplicate record creation.

Configuring a connection for the connector

You can configure a connection for the connector by using the SGC
Central view in the CMDB Workspace. The view enables you to discover

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

and install connectors, and then effectively manage the full life cycle of
creating, editing, monitoring, and debugging connections. To configure
the connector using SGC Central, see Configure API Service Graph
Connector for Apigee X using SGC Central.

Data mapping

Data from the Apigee X data sources is mapped and transformed
into the CMDB Configuration Item (CI) class definitions using the Robust
Transform Engine (RTE). Data is inserted into the CMDB using the
Identification and Reconciliation Engine (IRE).

When you complete setting up the connection, you can configure the
integration to periodically pull data from an Apigee X application.

The following table lists the data sources in the order that they run, the
staging tables, and the target tables as CMDB CI and non-CMDB classes
for an Apigee X application.

Data mapping for Apigee X

Data source
Staging table
Target tables

Apigee Organization

SGA Apigee X Apigee
Organization
[sn_apigee_x_apigee_
organization]

Google Organization
Project

Apigee API Gateway

Managed API

SGA Apigee X
Managed API
[sn_apigee_x_sga_api
gee_x_managed_api]

Managed API

API Deployment

Apigee API Gateway

API Consumer

SGA Apigee X API
Consumer
[sn_apigee_x_sga_api
gee_x_api_consumer]

API Consumer

API Frontend Backend

SGA Apigee X
Frontend Backend
[sn_apigee_x_sga_api

API Frontend

API Backend

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

gee_x_frontend_back
end]

API Product

SGA Apigee X API
Product
[sn_apigee_x_sga_api
gee_x_api_product]

API Product Bundle

Key Value

API Consumer
Subscription

SGA Apigee X API
Consumer Subscription
[sn_apigee_x_sga_api
gee_x_api_consumer_
subscription]

API Consumer
Subscription

Key Value

API Consumer Access

SGA Apigee X API
Consumer Access
[sn_apigee_x_sga_api
gee_x_api_consumer_
access]

API Consumer Access

GCP Organization

SGA Apigee X
Organization
[sn_apigee_x_sga_api
gee_x_organization]

Cloud Organizations

GCP Folder

SGA Apigee X Folder
[sn_apigee_x_sga_api
gee_x_folder]

Google Organization
Folder

GCP Project

SGA Apigee X Project
[sn_apigee_x_sga_api
gee_x_project]

Google Organization
Project

For more information on where data is saved when pulling data from
an Apigee X application, see Target tables for storing API Service Graph
Connector for Apigee X data.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

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

Record removal process

The connector supports soft deletion for CMDB CI classes only, meaning
records aren’t permanently removed from the system. Instead, any
CMDB CI records not discovered during the last scheduled job run are
marked as Non-Operational.

## Configure API Service Graph Connector for Apigee X
## using SGC Central

Set up scheduled import jobs to pull in Apigee X data into your CMDB.

Before you begin

Install API Service Graph Connector for Apigee X version 1.0.0 or later
from the ServiceNow Store. For ServiceNow Store installation steps, see
Install a ServiceNow Store application.

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

Note:   Alternatively, you can configure a default connection
already available from the installed or draft connections in SGC
Central. Go to All > Service Graph Connectors, then select Setup
for the connector from the menu. To learn about installed and draft
connections, see Managing connections added for Service Graph
Connectors in SGC Central.

Procedure

1. Navigate to Workspaces > CMDB Workspace.

2. In the CMDB Workspace, select SGC Central.

3. On the Overview page, select Create connection.

Tip:   Alternatively, you can select Create connection on the All
connections page.

4. On the Create connection window, select the Apigee X connector
type, and then select Create connection.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

Note:   This step is required only during the first-time setup. See
Perform initial setup tasks when creating a connection in SGC
Central.

6. Complete the prerequisites for setting up the Apigee X environment.

a. Set up the Apigee X environment and create a Java KeyStore
(JKS) certificate to encrypt the security certificates obtained from
an Apigee X application.

a. In the Prerequisites stage of the playbook, select the Review
setup instructions activity.

b. Review and complete the setup instructions on the API
Service Graph connector for Apigee X - Setup Instructions
[KBB0010364] article in the Now Support Knowledge Base.

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

You must create a service account, assign roles, bind roles
to the service account, enable APIs, create a P12 file, and
register it in your ServiceNow instance.

Make a note of the destination keystore password. You
need to specify this password while importing the JKS
certificate into the API Service Graph Connector for Apigee
X application.

c. Select the I have read the setup instructions check box to
confirm that you have set up the Apigee X environment
according to the instructions.

d. Select Continue.

b. Create an X.509 certificate to associate the Java KeyStore (JKS)
certificate for the Apigee X application with the connector.

Note:   You can skip this step if you're reusing a previously
created certificate.

a. In the Prerequisites stage of the playbook, select the Create
X.509 certificate activity.

b. On the form, fill in the fields.

X.509 Certificate form

Field
Description

Name

Name of the X.509
certificate. For example,
ApigeeX-509Certificate.

Key store password

Password to access the JKS
certificate as noted down in
the previous step.

Short description
Description of the X.509
certificate.

c. In the Attachments section, select Add File.

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

d. Browse and select the P12 file for the JKS certificate you
created in the previous step.

e. On the Upload a file dialog box, select Upload.

f. Select Continue.

7. Enter connection details and test the API connection for importing
Apigee X data.

a. In the Setup stage of the playbook, select the Create and test
connection activity.

b. On the form, fill in the fields.

Configure and test connection form

Field
Description

Connection name
Name to identify the Apigee X
connection record.

Service account email

Email address associated
with the ServiceNow
service account used for
authentication with Apigee X
as noted in the previous step.

X.509 certificate
Name of the X.509 certificate
as noted in the previous step.

Keystore password

Password associated with the
keystore as noted in the
previous step.

c. Select Create and test connection.

d. Once the connection test is complete, select Continue.

8. Set the configuration properties for the connection.

a. In the Setup stage of the playbook, select the Set configuration
properties activity.

b. Enter the properties.

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

Service Graph Connection Properties

Property
Description

Apigee identification

Apigee organization
name/GCP project id

Apigee X organization names
or GCP project IDs from which
data should be fetched. If
left blank, data is retrieved
from all permitted Apigee X
organizations.

For multiple values, separate
them with commas.

Data retrieval configuration

Include environments

Apigee X environments to
include in the connection.

For multiple environments,
separate them with commas.
Only API proxies in the
environments listed in the
Include environments property
are imported.

If you leave this field empty,
the data sources within the
connector import API proxies
from all environments.

Collection period (in days)
Duration in days for collecting
API usage data.

Collect usage data

Option to enable usage data
collection to retrieve API usage
data over a specified duration.

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

Property
Description

Apigee identification

Expand HTTP method types

HTTP methods including GET,
POST, PUT, PATCH, DELETE,
OPTIONS, HEAD, CONNECT, and
TRACE, to consider for routes.

For multiple methods, separate
them with commas.If left
blank, results in a single API
Frontend being created with
the ALL method, indicating
support for all standard HTTP
methods.

GCP identification

GCP Organization id

GCP organization ID for
retrieving data from GCP
Organization, GCP Folder, and
GCP Project data sources.

c. Select Continue.

9. Configure the import schedule to import data at regular intervals.

a. In the Setup stage of the playbook, select the Configure import
schedule activity.

b. Expand the Parent scheduled data import within the Import
schedules list to select the Apigee Organization import schedule
associated with your connection.

Note:   The connection name is prefixed to the schedule
name.

c. In the Configure import schedule dialog box, select the Active
check box, and then fill in the run schedule and time details.

For more information, see Schedule a data import.

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

d. Select Save.
Alternatively, select Execute Now to execute the import schedule
immediately.

e. Select Continue.

10. In the Setup stage of the playbook, select the Confirm connection
creation activity to verify whether the connection was created.

What to do next

Select View all connections to review the connection details. The
configured connection appears in the Installed connections list.

You can then manage connections from the SGC Central view of the
CMDB Workspace. For more information, see Managing connections
added for Service Graph Connectors in SGC Central.

Related concepts

• API Service Graph Connector for Apigee X

Related reference

• Target tables for storing API Service Graph Connector for Apigee X
data

## Target tables for storing API Service Graph Connector
## for Apigee X data

When you complete setting up the connection, you can configure
the integration to periodically pull data from an Apigee X application.
The data is saved in tables that extend from the Configuration item
[cmdb_ci] classes and other non-CMDB tables.

Google Organization Project [cmdb_ci_gcp_project]

The following attributes in the Google Organization Project
[cmdb_ci_gcp_project] table are populated by collected data:

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

Attribute label
Attribute name

Parent
parent_ci

Name
name

Object ID
object_id

Install Status
install_status

Operational status
operational_status

Parent Id
parent_id

Parent Type
parent_type

Project Id
project_id

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
Cloud Organizations
[cmdb_ci_cloud_org]

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

Contains::Contained
by

Apigee API Gateway
[cmdb_ci_apigee_api
_gateway]

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

Apigee API Gateway [cmdb_ci_apigee_api_gateway]

The following attributes in the Apigee API Gateway
[cmdb_ci_apigee_api_gateway] table are populated by collected data:

Attribute label
Attribute name

ID
id

Name
name

Install Status
install_status

Operational status
operational_status

Relationships created for Apigee API Gateway

Parent class
Relationship type
Child class

APIgee API Gateway
[cmdb_ci_apigee_api
_gateway]

Provides::Provided by

Managed API
[cmdb_ci_managed_
api]

APIgee API Gateway
[cmdb_ci_apigee_api
_gateway]

Reference
API Consumer
[api_consumer]

Apigee API Gateway
[cmdb_ci_apigee_api
_gateway]

Provides::Provided by

API Consumer
Subscription
[cmdb_ci_api_consum
er_subscription]

Apigee API Gateway
[cmdb_ci_apigee_api
_gateway]

Provides::Provided by

API Product Bundle
[cmdb_ci_api_produc
t_bundle]

Managed API [cmdb_ci_managed_api]

The following attributes in the Managed API [cmdb_ci_managed_api]
table are populated by collected data:

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

Description
short_description

Life Cycle Stage
life_cycle_stage

ID
id

Name
name

Version
version

Base URL
base_url

Model ID
model_id

Correlation ID
correlation_id

Life Cycle Stage Status
life_cycle_stage_status

Operational status
operational_status

Relationships created for Managed API

Parent class
Relationship type
Child class

Managed API
[cmdb_ci_managed_
api]

Uses::Used by

API Frontend
[cmdb_ci_api_fronten
d]

Managed API
[cmdb_ci_managed_
api]

Uses::Used by

API Backend
[cmdb_ci_api_backen
d]

Managed API
[cmdb_ci_managed_
api]

Reference
API Deployment
[api_deployment]

Managed API
[cmdb_ci_managed_
api]

Uses::Used by
DNS Alias
[cmdb_ci_dns_alias]

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

API Deployment [api_deployment]

The following attributes in the API Deployment [api_deployment] table
are populated by collected data:

Attribute label
Attribute name

API
api

Name
name

API Consumer [api_consumer]

The following attributes in the API Consumer [api_consumer] table are
populated by collected data:

Attribute label
Attribute name

ID
id

API Gateway
api_gateway

Custom ID
custom_id

Email
email

Registration Date
registration_date

Username
username

API Frontend [cmdb_ci_api_frontend]

The following attributes in the API Frontend [cmdb_ci_api_frontend] table
are populated by collected data:

Attribute label
Attribute name

API Version
api_version

Host
host

Method
method

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

Attribute label
Attribute name

Path
path

URL
url

Description
short_description

Name
name

Operational status
operational_status

Protocol
protocol

Relationship created for API Frontend

Parent class
Relationship type
Child class

API Frontend
[cmdb_ci_api_fronten
d]

Use End Point To::Use
End Point From

API Backend
[cmdb_ci_api_backen
d]

API Backend [cmdb_ci_api_backend]

The following attributes in the API Backend [cmdb_ci_api_backend]
table are populated by collected data:

Attribute label
Attribute name

URL
url

Name
name

Operational status
operational_status

Type
type

API Product Bundle [cmdb_ci_api_product_bundle]

The following attributes in the API Product Bundle
[cmdb_ci_api_product_bundle] table are populated by collected data:

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

Attribute label
Attribute name

ID
id

Creation Date
creation_date

Description
short_description

Discovered Access Type
discovered_access_type

Discovered Approval Type
discovered_approval_type

Last Modified Date
last_modified_date

Name
name

Operational status
operational_status

Relationships created for API Product Bundle

Parent class
Relationship type
Child class

API Product Bundle
[cmdb_ci_api_produc
t_bundle]

Contains::Contained
by
API [cmdb_ci_api]

API Product Bundle
[cmdb_ci_api_produc
t_bundle]

Used by::Uses

API Consumer
Subscription
[cmdb_ci_api_consum
er_subscription]

API Product Bundle
[cmdb_ci_api_produc
t_bundle]

Reference
Key Value
[cmdb_key_value]

Key Value [cmdb_key_value]

The following attributes in the Key Value [cmdb_key_value] table are
populated by collected data:

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

Attribute label
Attribute name

Tag
tag

Configuration item
configuration_item

Key
key

Value
value

API Consumer Subscription [cmdb_ci_api_consumer_subscription]

The following attributes in the API Consumer Subscription
[cmdb_ci_api_consumer_subscription] table are populated by collected
data:

Attribute label
Attribute name

ID
id

Creation Date
creation_date

API Consumer
api_consumer

Discovered State
discovered_state

Last Modified Date
last_modified_date

Name
name

Operational status
operational_status

Relationship created for API Consumer Subscription

Parent class
Relationship type
Child class

API Consumer
Subscription
[cmdb_ci_api_consum
er_subscription]

Reference
Key Value
[cmdb_key_value]

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

API Consumer Access [api_consumer_access]

The following attributes in the API Consumer Access
[api_consumer_access] table are populated by collected data:

Attribute label
Attribute name

Auth Method
access_type

State
state

Valid to
valid_to

API Product Bundle
api_product_bundle

API Consumer Subscription
api_consumer_subscription

API
api

API Consumer
api_consumer

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

21

Zurich ServiceNow AI Platform Capabilities

---
*Page 22*

Relationship created for Cloud Organizations

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

Google Organization Folder [cmdb_ci_gcp_folder]

The following attributes in the Google Organization Folder
[cmdb_ci_gcp_folder] table are populated by collected data:

Attribute label
Attribute name

Parent
parent_ci

Object ID
object_id

Install Status
install_status

Name
name

Operational status
operational_status

Parent Id
parent_id

Parent Type
parent_type

Time
time

Relationships created for Google Organization Folder

Parent class
Relationship type
Child class

Google
Organization Folder
[cmdb_ci_gcp_folder]

Reference

Google
Organization Folder
[cmdb_ci_gcp_folder]

Google
Organization Folder
[cmdb_ci_gcp_folder]

Reference
Cloud Organizations
[cmdb_ci_cloud_org]

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

DNS Alias [cmdb_ci_dns_alias]

The following attributes in the DNS Alias [cmdb_ci_dns_alias] table are
populated by collected data:

Attribute label
Attribute name

Name
name

Operational status
operational_status

## Accessing the connection details of API Service Graph
## Connector for Apigee X

You can access the connection details of the API Service Graph
Connector for Apigee X in a single view using the common connection
framework (CCF) included within the Integration Commons for CMDB
(sn_cmdb_int_util) store app.

With the CCF, you can access all the connections used by the
API Service Graph Connector for Apigee X. The connection details
include the connection alias, connection properties, data sources, and
scheduled data imports associated with a connection. You can also
test the connection. For more information, see Accessing the connection
details of Service Graph Connectors.

Access the details of an Apigee X connection

Access the details of an Apigee X connection configured for the API
Service Graph Connector for Apigee X.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > Apigee X >
Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

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

3. On the Service Graph Connections page, view the connection
details such as the connection name and alias.

4. Select a related list to view further details of the connection.

5. (Optional) Select the Test Connection related link to test the
connection.

## API Service Graph Connector for AWS API Gateway

Use the ServiceNow® API Service Graph Connector for AWS API Gateway
to import API details from an AWS API Gateway service into the
Configuration Management Database (CMDB).

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Key features

Import data into a normalized data model for consistency across other
technologies.

The API Insights workspace provides a centralized interface where you
can analyze and interact with API data, without needing direct access to
AWS API Gateway, enhancing visibility, governance, and collaboration
across the API estate. To learn more, see API Insights.

Supported ServiceNow versions

• Washington DC

• Xanadu

• Yokohama

• Zurich

Use cases

You can use the API Service Graph Connector for AWS API Gateway to:

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

• Maintain an end-to-end inventory of defined APIs, identifying what APIs
are published, used, and by whom.

• Track APIs from customer-facing endpoints to the underlying services,
identifying impacted endpoints when services change or fail and
creating incidents for reported issues.

• Address vulnerabilities and security incidents related to API endpoints,
and create compliance requirements to measure against.

Configuring a connection for the connector

You can configure a connection for the connector by using the SGC
Central view in the CMDB Workspace. The view enables you to discover
and install connectors, and then effectively manage the full life cycle of
creating, editing, monitoring, and debugging connections. To configure
the connector using SGC Central, see Configure API Service Graph
Connector for AWS API Gateway using SGC Central.

Data mapping

Data from the AWS API Gateway data sources is mapped and
transformed into the CMDB Configuration Item (CI) class definitions using
the Robust Transform Engine (RTE). Data is inserted into the CMDB using
the Identification and Reconciliation Engine (IRE).

When you complete setting up the connection, you can configure the
integration to periodically pull data from an AWS API Gateway service.

The following table lists the data sources in the order they run, the staging
tables, and the target tables as CMDB CI and non-CMDB classes for an
AWS API Gateway service.

Data mapping for AWS API Gateway

Data source
Staging table
Target tables

Managed API Rest

SGA-AWS Managed
API Rest
[sn_aws_api_gw_int_a
pi_gateway_manage
d_api_import_set]

AWS API Gateway

DNS Alias

Managed API

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

Data source
Staging table
Target tables

Key Value

Managed API V2

SGA-AWS Managed
API V2
[sn_aws_api_gw_int_sg
a_aws_managed_api_
v2]

Managed API

AWS API Gateway

DNS Alias

Key Value

Frontend Backend
REST

SGA-AWS Frontend-
Backend REST
[sn_aws_api_gw_int_sg
a_aws_frontend_back
end_rest]

API Backend

API Frontend

Backend V2

SGA-AWS Backend V2
[sn_aws_api_gw_int_sg
a_aws_backend_v2]

API Backend

Frontend V2

SGA-AWS Frontend V2
[sn_aws_api_gw_int_sg
a_aws_frontend_v2]

API Frontend

Deployment Rest

SGA-AWS API
Gateway Deployment
Rest
[sn_aws_api_gw_int_sg
a_aws_api_gateway_
deployment_rest]

API Deployment

Deployment V2

SGA-AWS API
Gateway Deployment
V2
[sn_aws_api_gw_int_sg
a_aws_api_gateway_
deployment_v2]

API Deployment

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

Data source
Staging table
Target tables

Consumer

SGA-AWS Consumers
[sn_aws_api_gw_int_sg
a_aws_consumers]

API Consumer

Policies

SGA-AWS API
Gateway Policies
[sn_aws_api_gw_int_sg
a_aws_api_gateway_
policies]

API Policy

API Consumer Access

SGA-AWS-API-
Consumer-Access
[sn_aws_api_gw_int_sg
a_aws_api_consumer_
access]

API Consumer Access

For more information on where data is saved when pulling data from an
AWS API Gateway service, see Target tables for storing API Service Graph
Connector for AWS API Gateway data.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

Record removal process

The connector supports soft deletion for CMDB CI classes only, meaning
records are not permanently removed from the system. Instead, any
CMDB CI records not discovered during the last scheduled job run are
marked as Non-Operational.

## Configure API Service Graph Connector for AWS API
## Gateway using SGC Central

Set up scheduled import jobs to pull in AWS API Gateway data into your
CMDB.

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

Before you begin

Install API Service Graph Connector for AWS API Gateway version 1.0.0 or
later from the ServiceNow Store. For ServiceNow Store installation steps,
see Install a ServiceNow Store application.

The authentication mechanism used by the connector is AWS Signature
Type (HMAC Authentication Technique) with AWS Security Token Service
(STS) token. For information about permissions, see the API Service Graph
Connector for AWS API Gateway - Setup Instructions [KB1962734] article
in the Now Support Knowledge Base.

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

Note:   Alternatively, you can configure a default connection
already available from the installed or draft connections in SGC
Central. Go to All > Service Graph Connectors, then select Setup
for the connector from the menu. To learn about installed and draft
connections, see Managing connections added for Service Graph
Connectors in SGC Central.

Procedure

1. Navigate to Workspaces > CMDB Workspace.

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

2. In the CMDB Workspace, select SGC Central.

3. On the Overview page, select Create connection.

Tip:   Alternatively, you can select Create connection on the All
connections page.

4. On the Create connection window, select the AWS API Gateway
connector type, and then select Create connection.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

Note:   This step is required only during the first-time setup. See
Perform initial setup tasks when creating a connection in SGC
Central.

6. Enter connection details and test the API connection for importing
AWS API Gateway data.

a. In the Setup stage of the playbook, select the Create and test
connection activity.

b. On the form, fill in the fields.

Create and test connection form

Field
Description

AWS API Gateway Connection
Name

Name to identify the AWS API
Gateway connection record.

For example, SG-AWS-API-
Gateway connection.

Access Key

Access key ID of the IAM user
that has permissions to interact
with the AWS resources.

Secret Key

Secret access key that
corresponds to the Access key
ID required for authenticating
the connection securely.

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

c. Select Create and test connection.

d. Once the connection test is complete, select Continue.

7. (Optional) Copy configuration properties from an existing AWS
connection.

Note:   The Copy configuration properties activity is displayed
only when an AWS connection is already set up on your
instance.

a. In the Setup stage of the playbook, select the Copy configuration
properties activity.

b. In the AWS Connection field, select the connection.
The values of the following properties are copied from the
selected AWS connection:

• Standalone account ID

• Management account ID

• Gov cloud

• STS assume role

• AWS regions

• Config aggregator name

• Config aggregator account

• Config aggregator region

c. Select Continue.

d. Once the connection test is complete, select Continue.

8. Set the configuration properties for the connection.

a. In the Setup stage of the playbook, select the Set configuration
properties activity.

b. Fill in the property details.

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

Note:   If you select to copy the configuration properties from
an existing AWS connection, the properties listed in the step
7.b are copied from the existing connection automatically.

AWS API Gateway configuration properties

Property
Description

Management account ID or standalone account ID

Management account ID

Management account ID
associated with the AWS API
Gateway account.

Standalone account ID

ID of a member account
associated with the AWS API
Gateway account.

STS assume role name and AWS regions

STS assume role name

STS Assume Role name of the
AWS account that is used
for querying the STS Assume
Role API to obtain the API
credentials.

AWS regions

List of comma-separated
regions where the AWS API
Gateway resides.

Config aggregator setup

Config aggregator account ID

AWS account ID where the
aggregator resource type in
the AWS Config service has
been configured.

Config aggregator name

Name of the aggregator
resource type in the AWS
Config service.

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

Property
Description

Management account ID or standalone account ID

Config aggregator region
Region where the aggregator
resource type resides.

API usage data

CollectUsageData

Option to enable usage data
collection to retrieve API usage
data over a specified duration.

Collection period in days
Duration in days for collecting
API usage data.

Gov cloud setup

Is gov cloud

Option to indicate that the
connection setup is for the
AWS GovCloud.

c. Select Continue.

9. Configure the import schedule to import data at regular intervals.

a. In the Setup stage of the playbook, select the Configure import
schedule activity.

b. Expand the Parent scheduled data import within the Import
schedules list to select the Managed API Rest import schedule
associated with your connection.

Note:   The connection name is prefixed to the schedule
name.

c. In the Configure import schedule dialog box, select the Active
check box, and then fill in the run schedule and time details.

For more information, see Schedule a data import.

d. Select Save.

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

Alternatively, select Execute Now to execute the import schedule
immediately.

e. Select Continue.

10. In the Setup stage of the playbook, select the Confirm connection
creation activity to verify whether the connection was configured.

What to do next

Select View all connections to review the connection details. The
configured connection appears in the Installed connections list.

You can then manage connections from the SGC Central view of the
CMDB Workspace. For more information, see Managing connections
added for Service Graph Connectors in SGC Central.

Related concepts

• API Service Graph Connector for AWS API Gateway

Related reference

• Target tables for storing API Service Graph Connector for AWS API
Gateway data

## Target tables for storing API Service Graph Connector
## for AWS API Gateway data

When you complete setting up the connection, you can configure the
integration to periodically pull data from an AWS API Gateway service.
The data is saved in tables that extend from the Configuration item
[cmdb_ci] classes and other non-CMDB classes.

AWS API Gateway [cmdb_ci_aws_api_gateway]

The following attributes in the AWS API Gateway
[cmdb_ci_aws_api_gateway] table are populated by collected data:

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

ID
id

Name
name

Operational status
operational_status

Relationships created for AWS API Gateway

Parent class
Relationship type
Child class

AWS API Gateway
[cmdb_ci_aws_api_ga
teway]

Provides::Provided by

Managed API
[cmdb_ci_managed_
api]

AWS API Gateway
[cmdb_ci_aws_api_ga
teway]

Reference
API Policy [api_policy]

AWS API Gateway
[cmdb_ci_aws_api_ga
teway]

Reference
API Consumer
[api_consumer]

AWS API Gateway
[cmdb_ci_aws_api_ga
teway]

Uses::Used by
DNS Alias
[cmdb_ci_dns_alias]

DNS Alias [cmdb_ci_dns_alias]

The following attributes in the DNS Alias [cmdb_ci_dns_alias] table are
populated by collected data:

Attribute label
Attribute name

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

34

Zurich ServiceNow AI Platform Capabilities

---
*Page 35*

Managed API [cmdb_ci_managed_api]

The following attributes in the Managed API [cmdb_ci_managed_api]
table are populated by collected data:

Attribute label
Attribute name

Life Cycle Stage Status
life_cycle_stage_status

ID
id

Name
name

Base URL
base_url

Operational status
operational_status

Life Cycle Stage
life_cycle_stage

Model ID
model_id

Type
type

Relationships created for Managed API

Parent class
Relationship type
Child class

Managed API
[cmdb_ci_managed_
api]

Uses::Used by

API Frontend
[cmdb_ci_api_fronten
d]

Managed API
[cmdb_ci_managed_
api]

Uses::Used by

API Backend
[cmdb_ci_api_backen
d]

Managed API
[cmdb_ci_managed_
api]

Reference
API Deployment
[api_deployment]

Managed API
[cmdb_ci_managed_
api]

Reference
Key Value
[cmdb_key_value]

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

API Frontend [cmdb_ci_api_frontend]

The following attributes in the API Frontend [cmdb_ci_api_frontend] table
are populated by collected data:

Attribute label
Attribute name

Host
host

Method
method

Path
path

URL
url

Authorization
authorization

Name
name

Operational status
operational_status

Protocol
protocol

Relationship created for API Frontend

Parent class
Relationship type
Child class

API Frontend
[cmdb_ci_api_fronten
d]

Use End Point To::Use
End Point From

API Backend
[cmdb_ci_api_backen
d]

API Backend [cmdb_ci_api_backend]

The following attributes in the API Backend [cmdb_ci_api_backend]
table are populated by collected data:

Attribute label
Attribute name

ID
id

URL
url

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

Operational status
operational_status

Type
type

API Consumer [api_consumer]

The following attributes in the API Consumer [api_consumer] table are
populated by collected data:

Attribute label
Attribute name

ID
id

Username
username

API Gateway
api_gateway

API Consumer Access [api_consumer_access]

The following attributes in the API Consumer Access
[api_consumer_access] table are populated by collected data:

Attribute label
Attribute name

API
api

API Consumer
api_consumer

State
state

API Deployment [api_deployment]

The following attributes in the API Deployment [api_deployment] table
are populated by collected data:

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

Attribute label
Attribute name

Name
name

API
api

API Policy [api_policy]

The following attributes in the API Policy [api_policy] table are populated
by collected data:

Attribute label
Attribute name

Name
name

Consumer
consumer

ID
id

Managed API
managed_api

Relationship created for API Policy

Parent class
Relationship type
Child class

API Policy [api_policy]
Reference

Managed API
[cmdb_ci_managed_
api]

Key Value [cmdb_key_value]

The following attributes in the Key Value [cmdb_key_value] table are
populated by collected data:

Attribute label
Attribute name

Key
key

Value
value

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

## Accessing the connection details of API Service Graph
## Connector for AWS API Gateway

You can access the connection details of the API Service Graph
Connector for AWS API Gateway in a single view using the common
connection framework (CCF) included within the Integration Commons
for CMDB (sn_cmdb_int_util) store app.

With the CCF, you can access all the connections used by the API
Service Graph Connector for AWS API Gateway. The connection details
include the connection alias, connection properties, data sources, and
scheduled data imports associated with a connection. You can also
test the connection. For more information, see Accessing the connection
details of Service Graph Connectors.

Access the details of an AWS API Gateway connection

Access the details of an AWS API Gateway connection configured for
the API Service Graph Connector for AWS API Gateway.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > AWS API Gateway >
Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

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

39

Zurich ServiceNow AI Platform Capabilities

---
*Page 40*

## API Service Graph Connector for Azure API
## Management

Use the ServiceNow® API Service Graph Connector for Azure API
Management to import API details from an Azure API Management
application into the Configuration Management Database (CMDB).

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Key features

Import data into a normalized data model for consistency across other
technologies.

The API Insights workspace provides a centralized interface where
you can analyze and interact with API data, without needing direct
access to Azure API Management, enhancing visibility, governance, and
collaboration across the API estate. To learn more, see API Insights.

Supported ServiceNow versions

• Xanadu

• Yokohama

• Zurich

Use cases

You can use the API Service Graph Connector for Azure API
Management to:

• Maintain an end-to-end inventory of exposed and backend APIs,
identifying what APIs are published, used, and by whom.

• Track APIs from customer-facing endpoints to the underlying services,
identifying impacted endpoints when services change or fail and
creating incidents for reported issues.

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

• Address vulnerabilities and security incidents related to API endpoints,
and create compliance requirements to measure against.

Configuring a connection for the connector

You can configure a connection for the connector by using the SGC
Central view in the CMDB Workspace. The view enables you to discover
and install connectors, and then effectively manage the full life cycle of
creating, editing, monitoring, and debugging connections. To configure
the connector using SGC Central, see Configure API Service Graph
Connector for Azure API Management using SGC Central.

Important:   Unless there are configuration issues, use the SGC
Central view in the CMDB Workspace to configure the connection
for the connector, as the guided setup method is being deprecated.

Data mapping

Data from the Azure API Management data sources is mapped and
transformed into the CMDB Configuration Item (CI) class definitions using
the Robust Transform Engine (RTE). Data is inserted into the CMDB using
the Identification and Reconciliation Engine (IRE).

When you complete setting up the connection, you can configure the
integration to periodically pull data from an Azure API Management
application.

The following table lists the data sources in the order they run, the staging
tables, and the target tables as CMDB CI and non-CMDB classes for an
Azure API Management application.

Data mapping for Azure API Management

Data source
Staging table
Target tables

API Management
Services

SGA Azure API
Management
[sn_azure_api_gw_sga
_azure_api_managem
ent]

Azure API
Management

Azure Subscription

Cloud Service
Account

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

Data source
Staging table
Target tables

Resource Group

DNS Alias

Managed API

SGA Azure Managed
API
[sn_azure_api_gw_sga
_azure_managed_api]

Managed API

API Frontend Backend

SGA Azure API
Frontend Backend
[sn_azure_api_gw_sga
_azure_api_frontend_b
ackend_import]

API Frontend

API Backend

API GraphQL Frontend
Backend

SGA Azure API
GraphQL Frontend
Backend
[sn_azure_api_gw_sga
_azure_api_graphql_fr
ontend_backend]

API Frontend

API Backend

API Consumer

SGA Azure API
Consumer
[sn_azure_api_gw_sga
_azure_api_consumer]

API Consumer

API Product

SGA Azure API Product
[sn_azure_api_gw_sga
_azure_api_product]

API Product Bundle

API Consumer
Subscription

SGA Azure API
Consumer Subscription
[sn_azure_api_gw_sga
_azure_api_subscriptio
n]

API Consumer
Subscription

API Tag

API Tag
[sn_azure_api_gw_api
_tag]

Key Value

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

Data source
Staging table
Target tables

API Consumer Access

SGA Azure API
Consumer Access
[sn_azure_api_gw_sga
_azure_managed_api]

API Consumer Access

For more information on where data is saved when pulling data from
an Azure API Management application, see Target tables for storing API
Service Graph Connector for Azure API Management data.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

Record removal process

The connector supports soft deletion for CMDB CI classes only, meaning
records are not permanently removed from the system. Instead, any
CMDB CI records not discovered during the last scheduled job run are
marked as Non-Operational.

## Configure API Service Graph Connector for Azure API
## Management using SGC Central

Set up scheduled import jobs to pull in Azure API Management data into
your CMDB.

Before you begin

Install API Service Graph Connector for Azure API Management version
1.0.0 or later from the ServiceNow Store. For ServiceNow Store installation
steps, see Install a ServiceNow Store application.
Obtain the OAuth credentials from your Azure administrator. Make a note
of the following details:

• Application (client) ID

• Client Secret

• Directory (tenant) ID

• Connection URL

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

Note:   Alternatively, you can configure a default connection
already available from the installed or draft connections in SGC
Central. Go to All > Service Graph Connectors, then select Setup
for the connector from the menu. To learn about installed and draft
connections, see Managing connections added for Service Graph
Connectors in SGC Central.

Procedure

1. Navigate to Workspaces > CMDB Workspace.

2. In the CMDB Workspace, select SGC Central.

3. On the Overview page, select Create connection.

Tip:   Alternatively, you can select Create connection on the All
connections page.

4. On the Create connection window, select the Azure API
Management connector type, and then select Create connection.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

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

Note:   This step is required only during the first-time setup. See
Perform initial setup tasks when creating a connection in SGC
Central.

6. Enter connection details and test the API connection for importing
Azure API Management data.

a. In the Setup stage of the playbook, select the Create and test
connection activity.

b. On the form, fill in the fields.

Create and test connection form

Field
Description

Azure API Management
Connection Name

Name to identify the Azure
API Management connection
record.

For example, Azure API
Management Connection.

Connection URL

Base URL to connect to
the Azure API Management
service.

Note:   This field is
automatically set to the
URL to connect to the
application. Leave the
field value as is.

OAuth Client ID

Application (client) ID of your
Azure client application as
noted in the Before you begin
section.

OAuth Client Secret

Client Secret of your Azure
client application as noted in
the Before you begin section.

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

Field
Description

OAuth Token URL

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
application as noted in the
Before you begin section.

c. Select Create and test connection.

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

d. Once the connection test is complete, select Continue.

7. (Optional) Set the configuration properties for the connection.

Note:   To skip this step, select Continue for the Set configuration
properties activity.

a. In the Setup stage of the playbook, select the Set configuration
properties activity.

b. Fill in the property details.

Azure API Management configuration properties

Property
Description

Azure API Management connection

Discovery Scope

Discovery scope of the
Azure client application. The
available options are:

Management Group

Select Management Group
when the ServiceNow service
account has access to data
within the Azure management
group.

Subscription

Select Subscription when the
ServiceNow service account
has access to data within the
Azure subscription only.

Subscription

Subscription Id(s)

Subscription IDs of Azure API
Management services.

For multiple subscription IDs,
separate them with commas.

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

Property
Description

Azure API Management connection

If the discovery scope is set
to Subscription and this field
is left blank, all subscriptions
for the specified tenant in the
credentials are discovered.

Management Group

Management Group Id(s)

Management group IDs of
Azure API Management
services.

For multiple management
groups, separate them with
commas.

Get Nested Group
Subscriptions

Option to enable retrieving
data from all nested
child subscriptions when
Management Group is set as
the discovery scope.

Disable the property to
exclude nested child
subscriptions.

Optional Exclusive Configuration

ExcludeServices

Azure API Management
services that should
be excluded from the
connection.

For multiple services, separate
them with commas. All
gateways except those listed

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

Property
Description

Azure API Management connection

in the ExcludeServices property
are fetched.

ResourceGroups

Resource group name of Azure
API Management services.

For multiple resource groups,
separate their names with
commas. If you leave this field
empty, the data sources within
the connector import data
from all the available resource
groups.

Usage Data Configuration

CollectUsageData

option to enable usage data
collection to retrieve API usage
data over a specified duration.

c. Select Continue.

8. Configure the import schedule to import data at regular intervals.

a. In the Setup stage of the playbook, select the Configure import
schedule activity.

b. Expand the Parent scheduled data import within the Import
schedules list to select the API Management Services import
schedule associated with your connection.

Note:   The connection name is prefixed to the schedule
name.

c. In the Configure import schedule dialog box, select the Active
check box, and then fill in the run schedule and time details.

For more information, see Schedule a data import.

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

d. Select Save.
Alternatively, select Execute Now to execute the import schedule
immediately.

e. Select Continue.

9. In the Setup stage of the playbook, select the Confirm connection
creation activity to verify whether the connection was created.

What to do next

Select View all connections to review the connection details. The
created connection appears in the Installed connections list.

You can then manage connections from the SGC Central view of the
CMDB Workspace. For more information, see Managing connections
added for Service Graph Connectors in SGC Central.

Related concepts

• API Service Graph Connector for Azure API Management

Related reference

• Target tables for storing API Service Graph Connector for Azure API
Management data

## Target tables for storing API Service Graph Connector
## for Azure API Management data

When you complete setting up the connection, you can configure the
integration to periodically pull data from an Azure API Management
application. The data is saved in tables that extend from the
Configuration item [cmdb_ci] classes and other non-CMDB classes.

Cloud Service Account [cmdb_ci_cloud_service_account]

The following attributes in the Cloud Service Account
[cmdb_ci_cloud_service_account] table are populated by collected
data:

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

Account Id
account_id

Name
name

Object ID
object_id

Datacenter Type
datacenter_type

Operational status
operational_status

Relationship created for Cloud Service Account

Parent class
Relationship type
Child class

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Contains::Contained
by

Resource Group
[cmdb_ci_resource_gr
oup]

Azure Subscription [cmdb_ci_azure_subscription]

The following attributes in the Azure Subscription
[cmdb_ci_azure_subscription] table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Operational status
operational_status

Azure API Management [cmdb_ci_azure_api_mgmt]

The following attributes in the Azure API Management
[cmdb_ci_azure_api_mgmt] table are populated by collected data:

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

ID
id

Name
name

Fully qualified domain name
fqdn

Gateway URL
gateway_url

Operational status
operational_status

Version
version

Relationships created for Azure API Management

Parent class
Relationship type
Child class

Azure API
Management
[cmdb_ci_azure_api_
mgmt]

Provides::Provided by

API Product Bundle
[cmdb_ci_api_produc
t_bundle]

Azure API
Management
[cmdb_ci_azure_api_
mgmt]

Provides::Provided by

API Consumer
Subscription
[cmdb_ci_api_consum
er_subscription]

Azure API
Management
[cmdb_ci_azure_api_
mgmt]

Uses::Used by
DNS Alias
[cmdb_ci_dns_alias]

Azure API
Management
[cmdb_ci_azure_api_
mgmt]

Provides::Provided by

Managed API
[cmdb_ci_managed_
api]

Azure API
Management
Reference
API Consumer
[api_consumer]

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

Parent class
Relationship type
Child class

[cmdb_ci_azure_api_
mgmt]

Resource Group [cmdb_ci_resource_group]

The following attributes in the Resource Group [cmdb_ci_resource_group]
table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Operational status
operational_status

DNS Alias [cmdb_ci_dns_alias]

The following attributes in the DNS Alias [cmdb_ci_dns_alias] table are
populated by collected data:

Attribute label
Attribute name

Name
name

Managed API [cmdb_ci_managed_api]

The following attributes in the Managed API [cmdb_ci_managed_api]
table are populated by collected data:

Attribute label
Attribute name

ID
id

Minor Version
minor_version

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

53

Zurich ServiceNow AI Platform Capabilities

---
*Page 54*

Attribute label
Attribute name

Base URL
base_url

Correlation ID
correlation_id

Description
short_description

Fully qualified domain name
fqdn

Operational status
operational_status

Type
type

Life Cycle Stage Status
life_cycle_stage_status

Life Cycle Stage
life_cycle_stage

Model ID
model_id

Relationships created for Managed API

Parent class
Relationship type
Child class

Managed API
[cmdb_ci_managed_
api]

Uses::Used by

API Frontend
[cmdb_ci_api_fronten
d]

Managed API
[cmdb_ci_managed_
api]

Uses::Used by

API Backend
[cmdb_ci_api_backen
d]

Managed API
[cmdb_ci_managed_
api]

Uses::Used by

API Consumer
Subscription
[cmdb_ci_api_consum
er_subscription]

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

Note:   Applies
only when the
Discovered Scope
[discovered_scop
e] attribute value
is set to api.

API Frontend [cmdb_ci_api_frontend]

The following attributes in the API Frontend [cmdb_ci_api_frontend] table
are populated by collected data:

Attribute label
Attribute name

API Minor Version
api_minor_version

API Version
api_version

Host
host

Method
method

Path
path

URL
url

Description
short_description

Name
name

Operational status
operational_status

Relationship created for API Frontend

Parent class
Relationship type
Child class

API Frontend
[cmdb_ci_api_fronten
d]

Use End Point To::Use
End Point From

API Backend
[cmdb_ci_api_backen
d]

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

API Backend [cmdb_ci_api_backend]

The following attributes in the API Backend [cmdb_ci_api_backend]
table are populated by collected data:

Attribute label
Attribute name

Host
host

ID

id

Note:   Applicable to GraphQL
APIs only.

Method

method

Note:   Applicable to GraphQL
APIs only.

Path
path

URL
url

Name
name

Operational status
operational_status

API Consumer [api_consumer]

The following attributes in the API Consumer [api_consumer] table are
populated by collected data:

Attribute label
Attribute name

ID
id

Discovered State
discovered_state

Email
email

Provider
provider

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

Attribute label
Attribute name

Registration Date
registration_date

Username
username

API Product Bundle [cmdb_ci_api_product_bundle]

The following attributes in the API Product Bundle
[cmdb_ci_api_product_bundle] table are populated by collected data:

Attribute label
Attribute name

ID
id

Discovered Access Type
discovered_access_type

Discovered Approval Type
discovered_approval_type

Discovered State
discovered_state

Name
name

Operational status
operational_status

Relationships created for API Product Bundle

Parent class
Relationship type
Child class

API Product Bundle
[cmdb_ci_api_produc
t_bundle]

Contains::Contained
by

Managed API
[cmdb_ci_managed_
api]

API Product Bundle
[cmdb_ci_api_produc
t_bundle]

Used by::Uses

API Consumer
Subscription
[cmdb_ci_api_consum
er_subscription]

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

API Consumer Subscription [cmdb_ci_api_consumer_subscription]

The following attributes in the API Consumer Subscription
[cmdb_ci_api_consumer_subscription] table are populated by collected
data:

Attribute label
Attribute name

ID
id

Creation Date
creation_date

Discovered Scope
discovered_scope

Name
name

Sys ID
sys_id

API Consumer
api_consumer

Operational status
operational_status

Relationship created for API Consumer Subscription

Parent class
Relationship type
Child class

API Consumer
Subscription
[cmdb_ci_api_consum
er_subscription]

Reference

API Consumer Access
[api_consumer_access
]

Key Value [cmdb_key_value]

The following attributes in the Key Value [cmdb_key_value] table are
populated by collected data:

Attribute label
Attribute name

Key
key

Value
value

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

API Consumer Access [api_consumer_access]

The following attributes in the API Consumer Access
[api_consumer_access] table are populated by collected data:

Attribute label
Attribute name

API Consumer
api_consumer

Access type
access_type

API Product Bundle
api_product_bundle

State
state

API Consumer Subscription
api_consumer_subscription

API
api

Valid to
valid_to

## Accessing the connection details of API Service Graph
## Connector for Azure API Management

You can access the connection details of the API Service Graph
Connector for Azure API Management in a single view using the common
connection framework (CCF) included within the Integration Commons
for CMDB (sn_cmdb_int_util) store app.

With the CCF, you can access all the connections used by the API
Service Graph Connector for Azure API Management. The connection
details include the connection alias, connection properties, data
sources, and scheduled data imports associated with a connection. You
can also test the connection. For more information, see Accessing the
connection details of Service Graph Connectors.

Access the details of an Azure API Management connection

Access the details of an Azure API Management connection configured
for the API Service Graph Connector for Azure API Management.

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

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > Azure API
Management > Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

3. On the Service Graph Connections page, view the connection
details such as the connection name and alias.

4. Select a related list to view further details of the connection.

5. (Optional) Select the Test Connection related link to test the
connection.

## API Service Graph Connector for Kong Gateway

Use the ServiceNow® API Service Graph Connector for Kong Gateway
to import API details from a Kong Gateway application into the
Configuration Management Database (CMDB).

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Key features

Import data into a normalized data model for consistency across other
technologies.

The API Insights workspace provides a centralized interface where you
can analyze and interact with API data, without needing direct access
to Kong Gateway, enhancing visibility, governance, and collaboration
across the API estate. To learn more, see API Insights.

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

Supported ServiceNow versions

• Washington DC

• Xanadu

• Yokohama

Use cases

You can use the API Service Graph Connector for Kong Gateway to:

• Maintain an end-to-end inventory of exposed and backend APIs,
identifying what APIs are published, used, and by whom.

• Track APIs from customer-facing endpoints to the underlying services,
identifying impacted endpoints when services change or fail and
creating incidents for reported issues.

• Address vulnerabilities and security incidents related to API endpoints,
and create compliance requirements.

Configuring a connection for the connector

You can configure a connection for the connector by using the SGC
Central view in the CMDB Workspace. The SGC Central view enables you
to discover and install connectors, and then effectively manage the full
life cycle of creating, editing, monitoring, and debugging connections.
To configure the connector using SGC Central, see Configure API Service
Graph Connector for Kong Gateway using SGC Central.

Note:   You can also include a Prometheus connection and map
it to the Kong Gateway connection during setup for importing
Kong Gateway metrics data using the Prometheus plugin. To learn
more about the Prometheus plugin, see Prometheus on the Kong
Developer documentation site.

Data mapping

Data from the Kong Gateway data sources is mapped and transformed
into the CMDB Configuration Item (CI) class definitions using the Robust
Transform Engine (RTE). Data is inserted into the CMDB using the
Identification and Reconciliation Engine (IRE).

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

When you complete setting up the connection, you can configure the
integration to periodically pull data from a Kong Gateway application.

The following table lists the data sources in the order they run, the staging
tables, and the target tables as CMDB CI and non-CMDB classes for a
Kong Gateway application.

Data mapping for Kong Gateway

Data source
Staging table
Target tables

SG-Kong Gateway

SG-Kong Gateway
[sn_kong_integ_sg_kon
g_gateway]

Kong Gateway

SG-Kong Workspaces

SG-Kong Workspaces
[sn_kong_integ_sg_kon
g_workspaces]

Kong Workspace

SG-Kong Load
Balancers

SG-Kong Load
Balancers
[sn_kong_integ_sg_kon
g_lbs]

Kong Load Balancer

SG-Kong Targets

SG-Kong Targets
[sn_kong_integ_sg_kon
g_targets]

Kong Target

Key Value

SG-Kong Services

SG-Kong Services
[sn_kong_integ_sg_kon
g_services]

Managed API

API Backend

Key Value

SG-Kong Routes

SG-Kong Routes
[sn_kong_integ_sg_kon
g_routes]

API Frontend

SG-Kong Consumers

SG-Kong Consumers
[sn_kong_integ_sg_kon
g_consumers]

API Consumer

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

Data source
Staging table
Target tables

SG-Kong Plugins

SG-Kong Plugins
[sn_kong_integ_sg_kon
g_plugins]

API Policy

For more information on where data is saved when pulling data from
a Kong Gateway application, see Target tables for storing API Service
Graph Connector for Kong Gateway data.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

## Configure API Service Graph Connector for Kong
## Gateway using SGC Central

Set up scheduled import jobs to pull in Kong Gateway data into your
Configuration Management Database (CMDB).

Before you begin

Install API Service Graph Connector for Kong Gateway version 2.0.0 or
later from the ServiceNow Store. For ServiceNow Store installation steps,
see Install a ServiceNow Store application.

If setting up the Prometheus connection, enable the Prometheus plugin
on Kong Gateway and verify that any required credentials are available.
To learn more about the Prometheus plugin, see Prometheus on the Kong
Developer documentation site.

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

63

Zurich ServiceNow AI Platform Capabilities

---
*Page 64*

About this task

The playbook experience for onboarding connectors is activated with
SGC Central in the CMDB Workspace. To configure the SGC Central
application, see Configuring SGC Central and for more information on
how to interact with a playbook, see Interact with Playbook.

Note:   Alternatively, you can configure a default connection
already available from the installed or draft connections in SGC
Central. Go to All > Service Graph Connectors, then select Setup
for the connector from the menu. To learn about installed and draft
connections, see Managing connections added for Service Graph
Connectors in SGC Central.

Procedure

1. Navigate to Workspaces > CMDB Workspace.

2. In the CMDB Workspace, select SGC Central.

3. On the Overview page, select Create connection.

Tip:   Alternatively, you can select Create connection on the All
connections page.

4. On the Create connection window, select the Kong connector type,
and then select Create connection.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

Note:   This step is required only during the first-time setup. See
Perform initial setup tasks when creating a connection in SGC
Central.

6. Select a template for the authentication type to create a
connection.

a. In the Setup stage of the playbook, select the Select alias
template activity.

b. Select a template type.

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

• Kong RBAC Authentication: Select when using token-based
authentication.

• Kong Basic Authentication: Select when using basic
authentication.

7. Enter connection details and test the API connection for importing
Kong Gateway data.

a. In the Setup stage of the playbook, select the Create and test
connection activity.

b. On the form, fill in the fields.

Create and test connection form

Field
Description

Connection Name
Name to identify the Kong
Gateway connection record.

Host Name
Admin URL address of the
Kong Admin API server.

Protocol

Protocol used for the
connection ensuring secured
communication between the
client and the Kong server.

Override default port
Port used by the Kong Admin
API.

API Key

Authentication secret to
connect to the Kong Gateway
service. This field appears
only when Kong RBAC
Authentication is selected in
the Select alias template
activity.

User Name

User name required for
authenticating requests to the
Kong Gateway Admin API.
This field appears only when

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

Field
Description

Kong Basic Authentication is
selected in the Select alias
template activity.

Password

Password associated with
the user name required for
authenticating requests. This
field appears only when
Kong Basic Authentication is
selected in the Select alias
template activity.

c. Select Create and test connection.

d. Once the connection test is complete, select Continue.

8. (Optional) Set the configuration properties for the connection.

a. In the Setup stage of the playbook, select the Set configuration
properties activity.

b. In the Expand HTTP Method Types field available in the Data
retrieval configuration section, enter the HTTP methods including
GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD, CONNECT, and
TRACE, to consider for routes.
For multiple methods, separate them with commas. If left blank,
results in a single API Frontend being created with the ALL
method, indicating support for all standard HTTP methods.

c. In the Exclude workspaces field available in the Property settings
section, enter the workspace that must be excluded from import.

For multiple workspaces, separate them with commas. For
example: workspace1,workspace2. If you leave this field empty,
the data sources within the connector import data from all the
workspaces.

d. Select the Import tags check box available in the tag settings
section, to ingest tags from the Kong Gateway service.
When selected, specify the key-value pair separator for tags in
the Tags value separator field. If not selected, tags won't be
fetched.

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

e. In the Tags value separator field available in the tag settings
section, enter the separator for key and value in tags.
For example, if the tag value separator is set to =, the tag
env=prod is saved with env as the key and prod as the value.

If left empty, no tags will be ingested.

f. Select the Collect Usage Data check box available in the Metric
Settings section to enable usage data collection to retrieve API
usage data over a specified duration.

g. In the Collection period (in days) field available in the Metric
Settings section, enter the duration in days for collecting API
usage data.

h. Select Continue.

9. (Optional) Enter Prometheus connection details and test the API
connection for importing Kong Gateway metrics data using the
Prometheus plugin.

Note:   You can skip this step if API usage monitoring with
Prometheus isn't required or if you're using an existing Prometheus
instance. To skip this step, select Skip for the Create and Test
Prometheus Connection activity.

a. In the Setup stage of the playbook, select the Create and Test
Prometheus Connection activity.

b. On the form, fill in the fields.

Create and Test Prometheus Connection form

Field
Description

Connection Name

Name to identify the
Prometheus connection
record.

Connection URL

Base URL of the Prometheus
HTTP API, used for fetching
metrics.

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

User Name

User name required for
authenticating requests to the
Prometheus server.

Password

Password associated with
the user name required for
authenticating requests to the
Prometheus server.

c. Select Create and test connection.

d. Once the connection test is complete, select Continue.

10. (Optional) Associate the Prometheus connection with a Kong
Gateway connection.

Note:   You can skip this step if API usage monitoring with
Prometheus isn't required. To skip this step, select Skip for the
Kong Prometheus Mapping activity.

a. In the Setup stage of the playbook, select the Kong Prometheus
Mapping activity.

b. In the Prometheus Connections field, search for and select a
Prometheus connection to associate.
You can select the Prometheus connection created in step 9 or
select any existing Prometheus connection during this step. If you
skip step 9, select any existing Prometheus connection.

c. Select Submit.
A Prometheus connection can be associated with multiple Kong
Gateway connections. You can update the Prometheus mapping
in the Kong Gateway connection from the SGC Central view at any
time. See Update a connection for a Service Graph Connector in
SGC Central.

11. Configure the import schedule to import data at regular intervals.

a. In the Setup stage of the playbook, select the Configure import
schedule activity.

b. Select Configure import schedule.

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

c. Expand the Parent scheduled data import within the Import
schedules list to select the SG-Kong Gateway import schedule
associated with your connection.

Note:   The connection name is prefixed to the schedule
name.

d. In the Configure import schedule dialog box, select the Active
check box, and then fill in the run schedule and time details.

For more information, see Schedule a data import.

e. Select Save.
Alternatively, select Execute Now to execute the import schedule
immediately.

f. Select Continue.

12. In the Setup stage of the playbook, select the Confirm connection
creation activity to check whether the connection was configured.

What to do next

Select View all connections to review the connection details. The
configured connections, including the Kong Gateway connection
and the Prometheus connection, if created, appear in the Installed
connections list.

You can then manage connections from the SGC Central view of the
CMDB Workspace. For more information, see Managing connections
added for Service Graph Connectors in SGC Central.

Related concepts

• API Service Graph Connector for Kong Gateway

Related reference

• Target tables for storing API Service Graph Connector for Kong
Gateway data

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

## Target tables for storing API Service Graph Connector
## for Kong Gateway data

When you complete setting up the connection, you can configure the
integration to periodically pull data from a Kong Gateway application.
The data is saved in tables that extend from the Configuration item
[cmdb_ci] classes and other non-CMDB tables.

Kong Gateway [cmdb_ci_kong_gateway]

The following attributes in the Kong Gateway [cmdb_ci_kong_gateway]
table are populated by collected data:

Attribute label
Attribute name

ID
id

Name
name

Admin URL
admin_url

Database
database

Description
short_description

Operational status
operational_status

Version
version

Relationships created for Kong Gateway

Parent class
Relationship type
Child class

Kong Gateway
[cmdb_ci_kong_gate
way]

Provides::Provided by
Kong Load Balancer
[cmdb_ci_kong_lb]

Kong Gateway
[cmdb_ci_kong_gate
way]

Provides::Provided by

Managed API
[cmdb_ci_managed_
api]

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

Parent class
Relationship type
Child class

Kong Gateway
[cmdb_ci_kong_gate
way]

Reference
Kong Workspace
[kong_workspace]

Kong Gateway
[cmdb_ci_kong_gate
way]

Reference
API Policy [api_policy]

Kong Gateway
[cmdb_ci_kong_gate
way]

Reference
API Consumer
[api_consumer]

Kong Workspace [kong_workspace]

The following attributes in the Kong Workspace [kong_workspace] table
are populated by collected data:

Attribute label
Attribute name

ID
id

Name
name

API Gateway
api_gateway

Relationship created for Kong Workspace

Parent class
Relationship type
Child class

Kong Workspace
[kong_workspace]
Reference

Kong Gateway
[cmdb_ci_kong_gate
way]

Kong Load Balancer [cmdb_ci_kong_lb]

The following attributes in the Kong Load Balancer [cmdb_ci_kong_lb]
table are populated by collected data:

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

ID
id

Name
name

Algorithm
algorithm

Operational status
operational_status

Relationships created for Kong Load Balancer

Parent class
Relationship type
Child class

Kong Load Balancer
[cmdb_ci_kong_lb]

Contains::Contained
by

Kong Target
[cmdb_ci_kong_target
]

Kong Load Balancer
[cmdb_ci_kong_lb]
Reference
Key Value
[cmdb_key_value]

Kong Target [cmdb_ci_kong_target]

The following attributes in the Kong Target [cmdb_ci_kong_target] table
are populated by collected data:

Attribute label
Attribute name

ID
id

Name
name

Target
target

Operational status
operational_status

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

Relationship created for Kong Target

Parent class
Relationship type
Child class

Kong Target
[cmdb_ci_kong_target
]

Reference
Key Value
[cmdb_key_value]

Managed API [cmdb_ci_managed_api]

The following attributes in the Managed API [cmdb_ci_managed_api]
table are populated by collected data:

Attribute label
Attribute name

Life Cycle Stage
life_cycle_stage

Life Cycle Stage Status
life_cycle_stage_status

ID
id

Name
name

Base URL
base_url

Type
type

Model ID
model_id

Operational status
operational_status

Relationships created for Managed API

Parent class
Relationship type
Child class

Managed API
[cmdb_ci_managed_
api]

Uses::Used by

API Frontend
[cmdb_ci_api_fronten
d]

Managed API
[cmdb_ci_managed_
api]

Uses::Used by

API Backend
[cmdb_ci_api_backen
d]

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

API Backend [cmdb_ci_api_backend]

The following attributes in the API Backend [cmdb_ci_api_backend]
table are populated by collected data:

Attribute label
Attribute name

Host
host

ID
id

Path
path

URL
url

Name
name

Port
port

Protocol
protocol

Operational status
operational_status

Relationship created for API Backend

Parent class
Relationship type
Child class

API Backend
[cmdb_ci_api_backen
d]

Uses::Used by
Kong Load Balancer
[cmdb_ci_kong_lb]

API Frontend [cmdb_ci_api_frontend]

The following attributes in the API Frontend [cmdb_ci_api_frontend] table
are populated by collected data:

Attribute label
Attribute name

Host
host

ID
id

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

Attribute label
Attribute name

Method
method

Path
path

URL
url

Name
name

Protocol
protocol

Operational status
operational_status

Relationship created for API Frontend

Parent class
Relationship type
Child class

API Frontend
[cmdb_ci_api_fronten
d]

Use End Point To::Use
End Point From

API Backend
[cmdb_ci_api_backen
d]

API Consumer [api_consumer]

The following attributes in the API Consumer [api_consumer] table are
populated by collected data:

Attribute label
Attribute name

ID
id

API Gateway
api_gateway

Custom ID
custom_id

Username
username

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

Relationship created for API Consumer

Parent class
Relationship type
Child class

API Consumer
[api_consumer]
Reference

Kong Gateway
[cmdb_ci_kong_gate
way]

API Policy [api_policy]

The following attributes in the API Policy [api_policy] table are populated
by collected data:

Attribute label
Attribute name

Frontend
frontend

ID
id

Active
active

Name
name

Protocols
protocols

Managed API
managed_api

Consumer
consumer

API Gateway
api_gateway

Relationship created for API Policy

Parent class
Relationship type
Child class

API Policy [api_policy]
Reference

Kong Gateway
[cmdb_ci_kong_gate
way]

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

Key Value [cmdb_key_value]

The following attributes in the Key Value [cmdb_key_value] table are
populated by collected data:

Attribute label
Attribute name

Configuration item
configuration_item

Key
key

Value
value

## Accessing the connection details of API Service Graph
## Connector for Kong Gateway

You can access the connection details of the API Service Graph
Connector for Kong Gateway in a single view using the common
connection framework (CCF) included within the Integration Commons
for CMDB (sn_cmdb_int_util) store app.

With the CCF, you can access all the connections used by the API
Service Graph Connector for Kong Gateway. The connection details
include the connection alias, connection properties, data sources, and
scheduled data imports associated with a connection. You can also
test the connection. For more information, see Accessing the connection
details of Service Graph Connectors.

Access the details of a Kong Gateway connection

Access the details of a Kong Gateway connection configured for the API
Service Graph Connector for Kong Gateway.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > Kong Gateway >
Connections.

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

2. From the Name column of the Service Graph Connections list, select
a connection.

3. On the Service Graph Connections page, view the connection
details such as the connection name and alias.

4. Select a related list to view further details of the connection.

5. (Optional) Select the Test Connection related link to test the
connection.

## API Service Graph Connector for Kong Konnect

Use the ServiceNow® API Service Graph Connector for Kong Konnect to
import API details from a Kong Konnect service into the Configuration
Management Database (CMDB).

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Key features

Import data into a normalized data model for consistency across other
technologies.

The API Insights workspace provides a centralized interface where you
can analyze and interact with API data, without needing direct access
to Kong Konnect, enhancing visibility, governance, and collaboration
across the API estate. To learn more, see API Insights.

Supported ServiceNow versions

• Xanadu

• Yokohama

• Zurich

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

Use cases

You can use the API Service Graph Connector for Kong Konnect to:

• Maintain an end-to-end inventory of defined APIs, identifying what APIs
are published, used, and by whom.

• Track APIs from customer-facing endpoints to the underlying services,
identifying impacted endpoints when services change or fail and
creating incidents for reported issues.

• Address vulnerabilities and security incidents related to API endpoints
and create compliance requirements to measure against.

Configuring a connection for the connector

You can configure a connection for the connector by using the SGC
Central view in the CMDB Workspace. The view enables you to discover
and install connectors, and then effectively manage the full life cycle of
creating, editing, monitoring, and debugging connections. To configure
the connector using SGC Central, see Configure API Service Graph
Connector for Kong Konnect using SGC Central.

Data mapping

Data from the Kong Konnect data sources is mapped and transformed
into the CMDB Configuration Item (CI) class definitions using the Robust
Transform Engine (RTE). Data is inserted into the CMDB using the
Identification and Reconciliation Engine (IRE).

When you complete setting up the connection, you can configure the
integration to periodically pull data from a Kong Konnect service.

The following table lists the data sources in the order they run, the staging
tables, and the target tables as CMDB CI classes and non-CMDB tables
for a Kong Konnect service.

Data mapping for Kong Konnect

Data source
Staging table
Target tables

Gateway

Gateway
[sn_kong_konnect_gat
eway]

Kong Gateway

DNS Alias

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
Staging table
Target tables

Logical Datacenter

Cloud Service
Account

Key Value

Load Balancer

Load Balancer
[sn_kong_konnect_loa
d_balancer]

Kong Load Balancer

Target

Target
[sn_kong_konnect_tar
get]

Kong Target

Services

Services
[sn_kong_konnect_ser
vices]

Managed API

API Backend

Key Value

Routes

Routes
[sn_kong_konnect_rou
tes]

API Frontend

Consumer

Consumer
[sn_kong_konnect_co
nsumer]

API Consumer

Policy

Policy
[sn_kong_konnect_poli
cy]

API Policy

Developers

Developers
[sn_kong_konnect_de
velopers]

API Consumer

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
Staging table
Target tables

Applications

Applications
[sn_kong_konnect_ap
plications]

API Consumer
Subscription

API Consumer Access

API Consumer Access
[sn_kong_konnect_api
_consumer_access]

API Consumer Access

For more information on where data is saved when pulling data from
a Kong Konnect service, see Target tables for storing API Service Graph
Connector for Kong Konnect data.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

Record removal process

The connector supports soft deletion for CMDB CI classes only, meaning
records are not permanently removed from the system. Instead, any
CMDB CI records not discovered during the last scheduled job run are
marked as Non-Operational.

## Configure API Service Graph Connector for Kong
## Konnect using SGC Central

Set up scheduled import jobs to pull in Kong Konnect data into your
CMDB.

Before you begin

Install API Service Graph Connector for Kong Konnect version 1.0.0 or
later from the ServiceNow Store. For ServiceNow Store installation steps,
see Install a ServiceNow Store application.

Role required: The following table shows the roles required for each stage
of the playbook.

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

Note:   Alternatively, you can configure a default connection
already available from the installed or draft connections in SGC
Central. Go to All > Service Graph Connectors, then select Setup
for the connector from the menu. To learn about installed and draft
connections, see Managing connections added for Service Graph
Connectors in SGC Central.

Procedure

1. Navigate to Workspaces > CMDB Workspace.

2. In the CMDB Workspace, select SGC Central.

3. On the Overview page, select Create connection.

Tip:   Alternatively, you can select Create connection on the All
connections page.

4. On the Create connection window, select the Kong Konnect
connector type, and then select Create connection.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

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

Note:   This step is required only during the first-time setup. See
Perform initial setup tasks when creating a connection in SGC
Central.

6. Enter connection details and test the API connection for importing
Kong Konnect data.

a. In the Setup stage of the playbook, select the Create and test
connection activity.

b. On the form, fill in the fields.

Create and test connection form

Field
Description

Connection name

Name to identify the Kong
Konnect connection record.

For example, Kong Konnect
connection.

Personal access token

Token used to securely
authenticate your identity and
authorize access to your Kong
Konnect account via the API

c. Select Create and test connection.

d. Once the connection test is complete, select Continue.

7. Set the configuration properties for the connection.

a. In the Setup stage of the playbook, select the Set configuration
properties activity.

b. Fill in the property details.

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

Kong Konnect configuration properties

Property
Description

Data retrieval configuration

Gateway group IDs

Group IDs associated with
a Kong Konnect gateway
representing control plane
groups consisting of self-
managed control planes.
For multiple IDs, separate them
with commas.

Note:   The Gateway
group IDs property is
used if specified, and it
overrides the Gateway
IDs.

Gateway IDs

IDs of individual Kong Konnect
gateways, each representing
a control plane.
For multiple IDs, separate them
with commas.

Note:   The Gateway IDs
property value is ignored
if Gateway group IDs are
specified.

Regions

List of comma-separated
regions where the Kong
Konnect gateway resides.

Expand HTTP method types

HTTP methods including GET,
POST, PUT, PATCH, DELETE,
OPTIONS, HEAD, CONNECT, and
TRACE, to consider for routes.

For multiple methods, separate
them with commas. If left

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

Data retrieval configuration

blank, results in a single API
Frontend being created with
the ALL method, indicating
support for all standard HTTP
methods.

Tags settings

Import tags
Option to ingest tags from the
Kong Konnect gateway.

Tags value separator
Separator for key and value in
tags.

c. Select Continue.

8. Configure the import schedule to import data at regular intervals.

a. In the Setup stage of the playbook, select the Configure import
schedule activity.

b. Expand the Parent scheduled data import within the Import
schedules list to select the Gateway import schedule associated
with your connection.

Note:   The connection name is prefixed to the schedule
name.

c. In the Configure import schedule dialog box, select the Active
check box, and then fill in the run schedule and time details.

For more information, see Schedule a data import.

d. Select Save.
Alternatively, select Execute Now to execute the import schedule
immediately.

e. Select Continue.

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

9. In the Setup stage of the playbook, select the Confirm connection
creation activity to verify whether the connection was created.

What to do next

Select View all connections to review the connection details. The
configured connection appears in the Installed connections list.

You can then manage connections from the SGC Central view of the
CMDB Workspace. For more information, see Managing connections
added for Service Graph Connectors in SGC Central.

Related concepts

• API Service Graph Connector for Kong Konnect

Related reference

• Target tables for storing API Service Graph Connector for Kong Konnect
data

## Target tables for storing API Service Graph Connector
## for Kong Konnect data

When you complete setting up the connection, you can configure the
integration to periodically pull data from a Kong Konnect application.
The data is saved in tables that extend from the Configuration item
[cmdb_ci] classes and other non-CMDB tables.

Kong Gateway [cmdb_ci_kong_gateway]

The following attributes in the Kong Gateway [cmdb_ci_kong_gateway]
table are populated by collected data:

Attribute label
Attribute name

ID
id

Name
name

Asset tag
asset_tag

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

Correlation ID
correlation_id

Description
short_description

Operational status
operational_status

Relationships created for Kong Gateway

Parent class
Relationship type
Child class

Kong Gateway
[cmdb_ci_kong_gate
way]

Provides::Provided by
Kong Load Balancer
[cmdb_ci_kong_lb]

Kong Gateway
[cmdb_ci_kong_gate
way]

Provides::Provided by

Managed API
[cmdb_ci_managed_
api]

Kong Gateway
[cmdb_ci_kong_gate
way]

Uses::Used by
DNS Alias
[cmdb_ci_dns_alias]

Kong Gateway
[cmdb_ci_kong_gate
way]

Reference
Key Value
[cmdb_key_value]

Kong Gateway
[cmdb_ci_kong_gate
way]

Reference
API Consumer
[api_consumer]

Cloud Service Account [cmdb_ci_cloud_service_account]

The following attributes in the Cloud Service Account
[cmdb_ci_cloud_service_account] table are populated by collected
data:

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

87

Zurich ServiceNow AI Platform Capabilities

---
*Page 88*

Attribute label
Attribute name

Name
name

Datacenter Type
datacenter_type

Operational status
operational_status

Logical Datacenter [cmdb_ci_logical_datacenter]

The following attributes in the Logical Datacenter
[cmdb_ci_logical_datacenter] table are populated by collected data:

Attribute label
Attribute name

Name
name

Object ID
object_id

Region
region

Operational status
operational_status

Relationships created for Logical Datacenter

Parent class
Relationship type
Child class

Logical Datacenter
[cmdb_ci_logical_dat
acenter]

Hosted on::Hosts

Kong Gateway
[cmdb_ci_kong_gate
way]

Logical Datacenter
[cmdb_ci_logical_dat
acenter]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

DNS Alias [cmdb_ci_dns_alias]

The following attributes in the DNS Alias [cmdb_ci_dns_alias] table are
populated by collected data:

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

Attribute label
Attribute name

Name
name

Operational status
operational_status

Kong Load Balancer [cmdb_ci_kong_lb]

The following attributes in the Kong Load Balancer [cmdb_ci_kong_lb]
table are populated by collected data:

Attribute label
Attribute name

ID
id

Name
name

Algorithm
algorithm

Description
short_description

Operational status
operational_status

Relationship created for Kong Load Balancer

Parent class
Relationship type
Child class

Kong Load Balancer
[cmdb_ci_kong_lb]

Contains::Contained
by

Kong Target
[cmdb_ci_kong_target
]

Kong Target [cmdb_ci_kong_target]

The following attributes in the Kong Target [cmdb_ci_kong_target] table
are populated by collected data:

Attribute label
Attribute name

ID
id

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

Attribute label
Attribute name

Description
short_description

Name
name

Operational status
operational_status

Target
target

Managed API [cmdb_ci_managed_api]

The following attributes in the Managed API [cmdb_ci_managed_api]
table are populated by collected data:

Attribute label
Attribute name

ID
id

Name
name

Base URL
base_url

Description
short_description

Operational status
operational_status

Life Cycle Stage Status
life_cycle_stage_status

Life Cycle Stage
life_cycle_stage

Type
type

Relationships created for Managed API

Parent class
Relationship type
Child class

Managed API
[cmdb_ci_managed_
api]

Uses::Used by

API Frontend
[cmdb_ci_api_fronten
d]

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

Parent class
Relationship type
Child class

Managed API
[cmdb_ci_managed_
api]

Uses::Used by

API Backend
[cmdb_ci_api_backen
d]

API Backend [cmdb_ci_api_backend]

The following attributes in the API Backend [cmdb_ci_api_backend]
table are populated by collected data:

Attribute label
Attribute name

Host
host

ID
id

Path
path

URL
url

Name
name

Port
port

Protocol
protocol

Relationship created for API Backend

Parent class
Relationship type
Child class

API Backend
[cmdb_ci_api_backen
d]

Uses::Used by
Kong Load Balancer
[cmdb_ci_kong_lb]

API Frontend [cmdb_ci_api_frontend]

The following attributes in the API Frontend [cmdb_ci_api_frontend] table
are populated by collected data:

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

Host
host

ID
id

Method
method

Path
path

URL
url

Description
short_description

Name
name

Operational status
operational_status

Protocol
protocol

Relationship created for API Frontend

Parent class
Relationship type
Child class

API Frontend
[cmdb_ci_api_fronten
d]

Use End Point To::Use
End Point From

API Backend
[cmdb_ci_api_backen
d]

API Consumer [api_consumer]

The following attributes in the API Consumer [api_consumer] table are
populated by collected data:

Attribute label
Attribute name

ID
id

Custom ID
custom_id

Email
email

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

Note:   Fetched using the
Developers data source only.

Username
username

API Gateway
api_gateway

Relationship created for API Consumer

Parent class
Relationship type
Child class

API Consumer
[api_consumer]
Reference

Kong Gateway
[cmdb_ci_kong_gate
way]

API Consumer Subscription [cmdb_ci_api_consumer_subscription]

The following attributes in the API Consumer Subscription
[cmdb_ci_api_consumer_subscription] table are populated by collected
data:

Attribute label
Attribute name

Operational status
operational_status

API Consumer
api_consumer

ID
id

Creation Date
creation_date

Description
short_description

Last Modified Date
last_modified_date

Name
name

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

Relationship created for API Consumer Subscription

Parent class
Relationship type
Child class

API Gateway
[cmdb_ci_api_gatewa
y]

Provides::Provided by

API Consumer
Subscription
[cmdb_ci_api_consum
er_subscription]

API Consumer Access [api_consumer_access]

The following attributes in the API Consumer Access
[api_consumer_access] table are populated by collected data:

Attribute label
Attribute name

API
api

API Consumer
api_consumer

State
state

API Consumer Subscription
api_consumer_subscription

API Policy [api_policy]

The following attributes in the API Policy [api_policy] table are populated
by collected data:

Attribute label
Attribute name

Name
name

Managed API
managed_api

ID
id

Protocols
protocols

Frontend
frontend

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

Attribute label
Attribute name

Active
active

Consumer
consumer

Relationship created for API Policy

Parent class
Relationship type
Child class

API Policy [api_policy]
Reference

Managed API
[cmdb_ci_managed_
api]

Key Value [cmdb_key_value]

The following attributes in the Key Value [cmdb_key_value] table are
populated by collected data:

Attribute label
Attribute name

Tag
tag

Configuration item
configuration_item

Key
key

Value
value

## Accessing the connection details of API Service Graph
## Connector for Kong Konnect

You can access the connection details of the API Service Graph
Connector for Kong Konnect in a single view using the common
connection framework (CCF) included within the Integration Commons
for CMDB (sn_cmdb_int_util) store app.

With the CCF, you can access all the connections used by the API
Service Graph Connector for Kong Konnect. The connection details
include the connection alias, connection properties, data sources, and
scheduled data imports associated with a connection. You can also

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

test the connection. For more information, see Accessing the connection
details of Service Graph Connectors.

Access the details of a Kong Konnect connection

Access the details of a Kong Konnect connection configured for the API
Service Graph Connector for Kong Konnect.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > Kong Konnect >
Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

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

96

Zurich ServiceNow AI Platform Capabilities

# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_opentelemetry_2026-01-16-13-14-55

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_opentelemetry_2026-01-16-13-14-55.pdf*

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

## Service Graph Connector for OpenTelemetry

Use the Service Graph Connector for OpenTelemetry to ingest
Configuration Management Database (CMDB) data from the
ServiceNow Cloud Observability (formerly Lightstep) application using
REST APIs. Push events from the Cloud Observability application into
ServiceNow with Event Management.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported ServiceNow versions

• Utah

• Vancouver

• Washington DC

Use cases

The following examples describe how you can use the Service Graph
Connector for OpenTelemetry:

• Import project topologies from Cloud Observability so that the site
reliability engineering (SRE) teams can have a single view for triage with
other ServiceNow data points (such as a change request, an incident)
from a single view.

• Import events created by Cloud Observability against monitored
projects to pinpoint SRE triage activities.

Guided setup

The guided setup for the Service Graph Connector for OpenTelemetry
provides an organized sequence of tasks to configure the integration on
your instance. To access the guided setup, see Configure Service Graph
Connector for OpenTelemetry.

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
or a specific integration run. For more details about monitoring Cloud
Observability integrations in the CMDB Integrations Dashboard, see Using
the CMDB Integrations Dashboard.

Data mapping

Data from the Cloud Observability data sources is mapped and
transformed into the ServiceNow CMDB configuration item (CI) class
definitions using the Robust Transform Engine (RTE). Data is inserted into
the ServiceNow CMDB using the Identification and Reconciliation Engine
(IRE).

When you complete setting up the connection, you can configure the
integration to pull data from the application periodically.

The following table describes the data sources, the scheduled jobs, the
staging tables, and the target tables as CMDB CI classes for the Cloud
Observability application.

Data mapping for Cloud Observability

Data source
Description
Scheduled job
Staging table
CMDB CI
classes

OpenTeleme
try Resources

Imports all
the
Kubernetes
clusters,
workloads,
and
application
services from
the
OpenTeleme
try traces.

OpenTeleme
try Resources

OpenTeleme
try Delta
Resources

OpenTeleme
try Resources
[sn_sg_lightst
ep_resource
s]

Calculated
Application
Service

Kubernetes
Cluster

Kubernetes
Deployment

Kubernetes
Node

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
Scheduled job
Staging table
CMDB CI
classes

Kubernetes
Pod

Kubernetes
StatefulSet

Kubernetes
ReplicaSet

Kubernetes
DaemonSet

Kubernetes
Job

Kubernetes
Cronjob

Kubernetes
Namespace

Server

Key Value

OpenTeleme
try Pods

Imports all
the
Kubernetes
pods from
the
containers.

OpenTeleme
try Pods

OpenTeleme
try Delta
Pods

OpenTeleme
try K8s Pods
[sn_sg_lightst
ep_pods]

Kubernetes
Cluster

Kubernetes
Pod

OpenTeleme
try
Containers

Imports all
the
containers
from the
OpenTeleme
try traces.

OpenTeleme
try
Containers

OpenTeleme
try docker
containers
[sn_sg_lightst
ep_containe
rs]

Docker
Container

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
Scheduled job
Staging table
CMDB CI
classes

OpenTeleme
try Delta
Containers

OpenTeleme
try Container
Images

Imports all
the
container
images from
the
OpenTeleme
try traces.

OpenTeleme
try Container
Images

OpenTeleme
try Delta
Container
Images

Openteleme
try container
images
[sn_sg_lightst
ep_containe
r_images]

Docker
Image

OpenTeleme
try Services

Imports all
the
Kubernetes
services from
the
OpenTeleme
try traces.

OpenTeleme
try Delta
Services

OpenTeleme
try Services

OpenTeleme
try K8s
Services
[sn_sg_lightst
ep_kubernet
es_services]

Kubernetes
Service

OpenTeleme
try
Dependenc
y Map

Imports the
dependenc
y maps to
get an
aggregate
view of the
traced data.

The data
source also
imports and
loads any
inferred
services and
their related
services
data in the
Inferred

OpenTeleme
try
Dependenc
y Map

OpenTeleme
try
Dependenc
y Map
[sn_sg_lightst
ep_depend
ency_map]

Calculated
Application
Service

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
Scheduled job
Staging table
CMDB CI
classes

service
[sn_sg_lightst
ep_inferred_
service]
staging
table.

Note:
You
need to
link the
importe
d
inferred
services
with a
CI
manuall
y. See
Inferred
service
linking.

For more information on where data is saved when pulling data
from Cloud Observability, see CMDB classes targeted in Service Graph
Connector for OpenTelemetry.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

Inferred service linking

The ServiceNow Cloud Observability application can infer the presence
of an inferred service when the span calling the remote service has
the necessary information. Service Graph Connector for OpenTelemetry
provides the linking of inferred services and their related services with CIs
in the CMDB. For more information, see Linking inferred services with CIs.

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

Related concepts

• Service Graph Connectors

## Configure Service Graph Connector for OpenTelemetry

Set up scheduled import jobs to pull in data from ServiceNow Cloud
Observability (formerly Lightstep) into your Configuration Management
Database (CMDB).

Before you begin

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
required for event ingestion. For Event Management to work, the
Observability Commons for CMDB app must be installed prior to

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

installing the connector. For more information, see Observability
Commons for CMDB on the ServiceNow Store.

Note:   If you have an earlier version of the Service Graph Connector
for OpenTelemetry, then don’t migrate data from the old connector.
You must uninstall the previous version and run the new integration.

Role required: SGC-Admin (sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to run background scripts and
to provide table-level access to the SGC-Admin user.

Procedure

1. Ensure that the application scope is set to Service Graph Connector
for OpenTelemetry by using the application picker.
For more information, see Application picker.

2. Navigate to All > Service Graph Connectors > OpenTelemetry >
Setup.

3. On the Getting started page, select Get Started.

4. Configure the application properties to set up your organization and
authentication credentials for sending requests to the ServiceNow
Cloud Observability APIs.

a. In the Configure the connection section of the Service Graph
Connector for OpenTelemetry page, select Get started.

b. For the Use OpenTelemetry task, ensure that the Cloud
Observability application meets the conditions as discussed in the
ServiceNow Cloud Observability setup [KB1527588] article in the
Now Support Knowledge Base.

Important:   Note down your projects, organization, and API
key details of the Cloud Observability application to be used
later during the installation of the connector.

After you have set up the OpenTelemetry environment in the
Cloud Observability application, return to the guided setup and
mark the Use OpenTelemetry task to complete by selecting Mark
as Complete.

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

c. Enter your Cloud Observability organization details from where
you want to retrieve the projects, resources, and dependency-
mapping information.

a. For the Set up your organization task, select Configure.

b. In the Value field of the Service Graph Connection
Properties form, enter the name of your Cloud Observability
organization.

c. Select Update.

d. Mark the Set up your organization task to complete by
selecting Mark as Complete.

d. Enter the API key details associated with the Cloud Observability
application.

a. For the Set up the API key task, select Configure.

b. In the API Key field of the API Key Credentials form, enter the
API key associated with the Cloud Observability application
that you noted down in step 4.b.

c. Select Update.

d. Set the Set up the API key task to complete by selecting Mark
as Complete.

e. Test the Cloud Observability API connection to import data from
the Cloud Observability application.

a. For the Test the connection task, select Configure.

b. Select the Test Connection related link.

c. When the Status field is set to Success, select X to close the
Test the connection dialog box and return to the guided
setup page.

If any of the tests have errors, follow the suggestions for
remediation.

d. Set the Test the connection task to complete by selecting
Mark as Complete.

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

f. Retrieve all the projects included in your Cloud Observability
organization.

a. For the Get projects task, select Configure.

b. Select Get Projects.

c. When the Project properties related list is populated with all
the projects included in the organization you specified in step
4.c.ii, select X to close the Get projects dialog box and return
to the guided setup page.

d. Set the Get projects task to complete by selecting Mark as
Complete.

5. (Optional) Configure additional configurations to set up lookback
time, add excluded projects, run project diagnostics, and configure
integration settings for service maps and stale configuration items
(CIs).

a. In the Advanced settings section of the Service Graph Connector
for OpenTelemetry page, select Continue.

b. Set up the lookback time from when you want to retrieve
resources from the projects.

Lookback time is used to calculate the start and end time for
retrieving resources from a project of an organization and should
match the scheduled job frequency setting. For example, if the
lookback time is set to 12 hours, resources are retrieved from the
start time calculated as the current time minus 12 hours and until
the end time that is the current time.

a. For the Set up lookback time task, select Configure.

b. In the Value field of the Service Graph Connection Properties
form, enter the lookback time in hours.

c. Select Update.

d. Set the Set up lookback time task to complete by selecting
Mark as Complete.

c. Select the projects from which you don't want to retrieve
resources.

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

a. For the Add excluded projects task, select Configure.

b. Select a project from the Project column.

c. Select the Exclude project check box.

d. Select Update.

e. Repeat steps from 5.c.ii to 5.c.iv for each project that you
want to exclude.

f. Select X to close the Add excluded projects dialog box and
return to the guided setup page.

g. Set the Add excluded projects task to complete by selecting
Mark as Complete.

d. Run project diagnostics to test the Resource API response and
ensure that the API contains the Kubernetes cluster name,
Kubernetes namespace, and Kubernetes nodes.

a. For the Run project diagnostics task, select Configure.

b. Select a project from the Project column.

c. Select Run diagnostics.

d. When the Diagnostics status field set to Success, select X to
close the Run project diagnostics dialog box and return to
the guided setup page.

If any of the Diagnostic tests have errors, follow the
instructions in the Diagnostics message field to resolve the
errors.

e. Repeat the steps 5.d.ii to 5.d.iv for each project that you
want to run diagnostics.

f. Set the Run project diagnostics task to complete by selecting
Mark as Complete.

e. Configure the system properties for service maps and stale CIs.

a. For the Configure system properties for the connector task,
select Configure.

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

b. Verify the default values for the properties or fill in the values
for a custom configuration.

c. Select Save.

d. Set the Configure system properties for the connector task to
complete by selecting Mark as Complete.

6. Configure the scheduled jobs to import complete or incremental
data from the Cloud Observability application.

a. In the Configure the scheduled import jobs section of the Service
Graph Connector for OpenTelemetry page, select Continue.

b. Activate the scheduled job for full data import.

By default, the OpenTelemetry Resources scheduled job is
available for full data import. However, you must activate the
job.

a. For the Configure the scheduled job for full import task, select
Configure.

b. On the Scheduled Data Import form for the OpenTelemetry
Resources scheduled job, verify the field values for the
scheduled job and select the Active check box.

For more information, see Schedule a data import.

c. Select Update.

d. Set the Configure the scheduled job for full import task to
complete by selecting Mark as Complete in the guided
setup.

c. (Optional) Activate the scheduled job for delta data import.

By default, the OpenTelemetry Delta Resources scheduled job is
available for delta data import. However, you must activate the
job.

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

Note:   The delta data pull doesn't occur in the following
scenarios:

• The full data import is scheduled at the same time.

• The Last Run Datetime field of a data source is empty.

• The last delta data pull period is more than 3 days.

a. For the Configure the scheduled job for delta import task,
select Configure.

b. On the Scheduled Data Import form for the OpenTelemetry
Delta Resources scheduled job, verify the field values for the
scheduled job and select the Active check box.

For more information, see Schedule a data import.

c. Select Update.

d. Set the Configure the scheduled job for delta import task
to complete by selecting Mark as Complete in the guided
setup.

Note:   When adding a new project to retrieve resources, be sure
to perform a full import before running a delta import to avoid
partial data and populate the CMDB accurately.

7. Manage alerts and events by sending events from the Cloud
Observability application to the ServiceNow Event Management
application.
You can manage alerts and events only when the Observability
Commons for CMDB application is installed.

Note:   Enabling this feature requires a paid Cloud Observability
license, but the feature is also available to free accounts
for the purpose of evaluating the product in non-production
environments. You can reach out to your ServiceNow account
representative for more information.

a. In the Manage alerts and events section of the Service Graph
Connector for OpenTelemetry page, select Continue.

b. Create a webhook destination for a project.

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

a. For the Create a webhook task, select Configure.

b. Select a project that is not excluded from the Project column.

c. Select Create Webhook to create a webhook destination in
the Cloud Observability application.

d. After a success message appears, select X to close the
Create a webhook dialog box and return to the guided
setup page.

When the webhook is created successfully:

• The system automatically creates a user record for each
webhook destination in your ServiceNow instance.

• The user name of the user record starts with
ls_api_<project_name> and the user is assigned the
evt_mgmt_integration role.

e. Repeat the steps 7.b.ii to 7.b.iv for each project for which you
want to create a webhook.

f. Set the Create a webhook task to complete by selecting
Mark as Complete in the guided setup.

c. Configure the system property for ingesting events that don’t
have matching CIs in the CMDB.

a. For the Configure the property for unmatched CIs task, select
Configure.

b. In the Value field, enter true.

c. Select Update.

d. Set the Configure the property for unmatched CIs task to
complete by selecting Mark as Complete in the guided
setup.

Related concepts

• Accessing the connection details of Service Graph Connector for
OpenTelemetry

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

Related reference

• Service Graph Connector for OpenTelemetry properties

• Linking inferred services with CIs

## CMDB classes targeted in Service Graph Connector for
## OpenTelemetry

When you complete setting up the connection, you can configure the
integration to periodically pull data from ServiceNow Cloud Observability
(formerly Lightstep). The data is saved in tables that extend from the
Configuration item [cmdb_ci] table.

Calculated Application Service [cmdb_ci_service_calculated]

The following attributes in the Calculated Application Service
[cmdb_ci_service_calculated] table are populated by collected data:

Attribute label
Attribute name

Service Populator
service_populator

Name
name

Hide from dashboard
hide_from_dashboard

Operational status
operational_status

Service Populator Status
populator_status

Service Type
type

Relationships created for Calculated Application Service

Parent class
Relationship type
Child class

Calculated
Application Service
[cmdb_ci_service_cal
culated]

Connects
to::Connected by

Kubernetes
Deployment
[cmdb_ci_kubernetes_
deployment]

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

Parent class
Relationship type
Child class

Calculated
Application Service
[cmdb_ci_service_cal
culated]

Connects
to::Connected by

Calculated
Application Service
[cmdb_ci_service_cal
culated]

Calculated
Application Service
[cmdb_ci_service_cal
culated]

Reference
Key Value
[cmdb_key_value]

Docker Container [cmdb_ci_docker_container]

The following attributes in the Docker Container
[cmdb_ci_docker_container] table are populated by collected data:

Attribute label
Attribute name

Container id
container_id

Install Status
install_status

Name
name

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

Key Value [cmdb_key_value]

The following attributes in the Key Value [cmdb_key_value] table are
populated by collected data:

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

Key
key

Value
value

Kubernetes Cluster [cmdb_ci_kubernetes_cluster]

The following attributes in the Kubernetes Cluster
[cmdb_ci_kubernetes_cluster] table are populated by collected data:

Attribute label
Attribute name

Name
name

Namespace
namespace

Install Status
install_status

Kubernetes UID
k8s_uid

Relationships created for Kubernetes Cluster

Parent class
Relationship type
Child class

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

Kubernetes
Namespace
[cmdb_ci_kubernetes_
namespace]

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Contains::Contained
by

Kubernetes Service
[cmdb_ci_kubernetes_
service]

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

Kubernetes Cronjob [cmdb_ci_kubernetes_cronjob]

The following attributes in the Kubernetes Cronjob
[cmdb_ci_kubernetes_cronjob] table are populated by collected data:

Attribute label
Attribute name

Kubernetes Cluster
cluster

Name
name

Namespace
namespace

Install Status
install_status

Relationships created for Kubernetes Cronjob

Parent class
Relationship type
Child class

Kubernetes Cronjob
[cmdb_ci_kubernetes_
cronjob]

Hosted on::Hosts

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Kubernetes Cronjob
[cmdb_ci_kubernetes_
cronjob]

Reference

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Kubernetes DaemonSet [cmdb_ci_kubernetes_daemonset]

The following attributes in the Kubernetes DaemonSet
[cmdb_ci_kubernetes_daemonset] table are populated by collected
data:

Attribute label
Attribute name

Kubernetes Cluster
cluster

Name
name

Namespace
namespace

Install Status
install_status

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

Relationships created for Kubernetes DaemonSet

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

Kubernetes
DaemonSet
[cmdb_ci_kubernetes_
daemonset]

Reference

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Kubernetes Deployment [cmdb_ci_kubernetes_deployment]

The following attributes in the Kubernetes Deployment
[cmdb_ci_kubernetes_deployment] table are populated by collected
data:

Attribute label
Attribute name

Kubernetes Cluster
cluster

Name
name

Namespace
namespace

Install Status
install_status

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

Connects
to::Connected by

Kubernetes Node
[cmdb_ci_kubernetes_
node]

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

Parent class
Relationship type
Child class

[cmdb_ci_kubernetes_
deployment]

Kubernetes
Deployment
[cmdb_ci_kubernetes_
deployment]

Connects
to::Connected by

Kubernetes ReplicaSet
[cmdb_ci_kubernetes_
replicaset]

Kubernetes
Deployment
[cmdb_ci_kubernetes_
deployment]

Reference

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Kubernetes Job [cmdb_ci_kubernetes_job]

The following attributes in the Kubernetes Job [cmdb_ci_kubernetes_job]
table are populated by collected data:

Attribute label
Attribute name

Kubernetes Cluster
cluster

Kubernetes UID
k8s_uid

Name
name

Namespace
namespace

Install Status
install_status

Relationships created for Kubernetes Job

Parent class
Relationship type
Child class

Kubernetes Job
[cmdb_ci_kubernetes_
job]

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

21

Zurich ServiceNow AI Platform Capabilities

---
*Page 22*

Parent class
Relationship type
Child class

Kubernetes Job
[cmdb_ci_kubernetes_
job]

Reference

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Kubernetes Namespace [cmdb_ci_kubernetes_namespace]

The following attributes in the Kubernetes Namespace
[cmdb_ci_kubernetes_namespace] table are populated by collected
data:

Attribute label
Attribute name

Kubernetes Cluster
cluster

Name
name

Install Status
install_status

Relationship created for Kubernetes Namespace

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

Attribute label
Attribute name

Namespace
namespace

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
Server
[cmdb_ci_server]

Kubernetes Node
[cmdb_ci_kubernetes_
node]

Reference

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Kubernetes Pod [cmdb_ci_kubernetes_pod]

The following attributes in the Kubernetes Pod
[cmdb_ci_kubernetes_pod] table are populated by collected data:

Attribute label
Attribute name

Name
name

Install Status
install_status

Kubernetes Cluster
cluster

Kubernetes UID
k8s_uid

Namespace
namespace

IP Address
ip_address

Start date
start_date

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

Contains::Contained
by

Docker Container
[cmdb_ci_docker_con
tainer]

Kubernetes Pod
[cmdb_ci_kubernetes_
pod]

Reference

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

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

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

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

Kubernetes ReplicaSet
[cmdb_ci_kubernetes_
replicaset]

Connects
to::Connected by

Kubernetes Node
[cmdb_ci_kubernetes_
node]

Kubernetes ReplicaSet
[cmdb_ci_kubernetes_
replicaset]

Reference

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Kubernetes Service [cmdb_ci_kubernetes_service]

The following attributes in the Kubernetes Service
[cmdb_ci_kubernetes_service] table are populated by collected data:

Attribute label
Attribute name

Name
name

Namespace
namespace

Install Status
install_status

Kubernetes StatefulSet [cmdb_ci_kubernetes_statefulset]

The following attributes in the Kubernetes StatefulSet
[cmdb_ci_kubernetes_statefulset] table are populated by collected
data:

Attribute label
Attribute name

Name
name

Kubernetes Cluster
cluster

Namespace
namespace

Install Status
install_status

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

Relationship created for Kubernetes StatefulSet

Parent class
Relationship type
Child class

Kubernetes StatefulSet
[cmdb_ci_kubernetes_
statefulset]

Hosted on::Hosts

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Kubernetes StatefulSet
[cmdb_ci_kubernetes_
statefulset]

Reference

Kubernetes Cluster
[cmdb_ci_kubernetes_
cluster]

Server [cmdb_ci_server]

The following attribute in the Server [cmdb_ci_server] table is populated
by collected data:

Attribute label
Attribute name

Name
name

Related concepts

• Kubernetes extension classes

• CI relationships in the CMDB

## Service Graph Connector for OpenTelemetry properties

Service Graph Connector for OpenTelemetry properties control the
behavior of the connector.

Connection properties

These connection properties are available for Service Graph Connector
for OpenTelemetry.

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

Note:   To open the Service Graph Connection Properties
[sn_cmdb_int_util_service_graph_connection_property] table for the
connector, navigate to All > Service Graph Connectors >
OpenTelemetry > Connections and select the connection name.
The connection properties are displayed in the Service Graph
Connection Properties related list.

Connection properties for Service Graph Connector for
OpenTelemetry

Property
Description

Organization

Enter the name of an
OpenTelemetry organization.

• Type: string

• Default value: None

• Location: Service Graph
Connection Properties
[sn_cmdb_int_util_service_graph_
connection_property] table

Lookback Time

Enter time in hours to retrieve
OpenTelemetry resources.

• Type: integer

• Default value: 12

• Location: Service Graph
Connection Properties
[sn_cmdb_int_util_service_graph_
connection_property] table

System properties

These system properties are available for Service Graph Connector for
OpenTelemetry.

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

Note:   To open the System Properties [sys_properties] table, enter
sys_properties.list in the navigation filter.

System properties for Service Graph Connector for
OpenTelemetry

Property
Description

sn_sg_lightstep.classes_to_inactivat
e_stale_records

Enter a list of configuration item
(CI) classes to be inactivated as
stale records. For multiple entries,
separate the CI classes with
commas.

• Type: string

• Default value: None

• Location: System Property
[sys_properties] table

sn_sg_lightstep.events_for_unmatc
hed_ci.enabled

Set the property to true to ingest
events that don't have a matching
CI in CMDB.

• Type: true | false

• Default value: false

• Location: System Property
[sys_properties] table

sn_sg_lightstep.resource_api_num_
rows

Enter the maximum number of
rows fetched in the Resource
API response from OpenTelemetry
resources.

• Type: integer

• Default value: 2500

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

Property
Description

• Location: System Property
[sys_properties] table

sn_sg_lightstep.service_map_classe
s_to_exclude

Enter a list of CI classes to be
excluded from the service map.
For multiple entries, separate the CI
classes with commas.

• Type: string

• Default value: None

• Location: System Property
[sys_properties] table

sn_sg_lightstep.service_map_max_l
evels

Enter the maximum hierarchy level
of CIs to be included in the service
map.

• Type: integer

• Default value: 5

• Location: System Property
[sys_properties] table

sn_sg_lightstep.service_map_relati
onship_types_to_exclude

Enter a list of Cl relationship types
to be excluded from the service
map. For multiple entries, separate
the CI relationship types with
commas.

• Type: string

• Default value: None

• Location: System Property
[sys_properties] table

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

## Linking inferred services with CIs

Create inferred services relationships in your ServiceNow instance with
other Cloud Observability application services as originally configured in
the application by linking an inferred service configuration item (CI) in
CMDB with an inferred service from the Cloud Observability application.

Inferred services

The inferred services in the Cloud Observability application are referred
to as external services, libraries, or dependencies such as a database or
a third-party API that haven’t been instrumented with OpenTelemetry.
These types of technologies are manually defined in the Cloud
Observability application, and you can import them into your ServiceNow
instance through the Service Graph Connector for OpenTelemetry.

For information about adding inferred services in the Cloud Observability
application, see Add inferred services in the Cloud Observability
documentation.

Storing inferred services data

The OpenTelemetry Dependency Map
[sn_sg_lightstep_dependency_map] data source available with the
Service Graph Connector for OpenTelemetry iterates through all the
included projects in a Cloud Observability organization and pulls in
the inferred services details. Inferred services details include mapping
of related services. The data source saves these details in the Inferred
service [sn_sg_lightstep_inferred_service] table.

The following attributes in the Inferred service
[sn_sg_lightstep_inferred_service] table are populated by the
OpenTelemetry Dependency Map [sn_sg_lightstep_dependency_map]
data source.

Attribute label
Attribute name

Project
project

Organization
organization

ID
id

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

Inferred service
inferred_service

Inferred service CI
inferred_service_ci

Active
active

Last scan
last_scan

Cloud Observability CI
cloud_observability_ci

Due to insufficient information for defining identification rules, the pulled
in inferred services don’t automatically bind to a CI in CMDB. However,
as a user with the cmdb_inst_admin role, you can manually link a CI
to an inferred service. The linking creates appropriate relationships with
the related services and generates the inferred service mapping in the
respective application service maps of your ServiceNow instance.

Link an inferred service

Link a Cloud Observability inferred service with a CI to create
relationships between the inferred service and other Cloud Observability
services in your ServiceNow instance.

Before you begin

Role required: cmdb_inst_admin

Procedure

1. Navigate to All > Service Graph Connectors > OpenTelemetry >
Inferred services.

2. Review the inferred services available from the Cloud Observability
app in the Inferred service column.

3. For an inferred service, double-click the Inferred service CI column
cell.

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

4. Select the lookup using list icon (

) to search for and select an
inferred service CI available within the Configuration item [cmdb_ci]
table.

5. Select the save icon (

).

6. Repeat the steps 3 to 5 for each inferred service that you want to link
with a CI.

Result

The Update CI relationship business rule is triggered that creates
appropriate relationships for the inferred service with the related services
and generates the inferred service mapping in the respective application
service maps.

Note:

• If you remove any mapping later, the Delete CI relationship
business rule is triggered to delete any relationships between the
inferred service CIs and the Cloud Observability inferred services.

• For any inferred services that were not last scanned in the Cloud
Observability app, the Service Graph Connector automatically
deactivates the corresponding records in CMDB and deletes the
relationship for the inactive records.

## Accessing the connection details of Service Graph
## Connector for OpenTelemetry

You can access the connection details of the Service Graph Connector
for OpenTelemetry in a single view using the common connection
framework (CCF) included within the Integration Commons for CMDB
(sn_cmdb_int_util) store app.

With the CCF, you can access all the connections used by the Service
Graph Connector for OpenTelemetry. The connection details include the
connection alias, connection properties, data sources, and scheduled
data imports associated with a connection. You can also test the
connection.

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

Access the details of an OpenTelemetry connection

Access the details of an OpenTelemetry connection configured for the
Service Graph Connector for OpenTelemetry.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > OpenTelemetry >
Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

3. On the Service Graph Connections page, view the connection
details such as the connection name, alias, and data sources.

4. Select a related list to view further details of the connection.

5. (Optional) Select the Test Connection related link to test the
connection.

Related concepts

• Accessing the connection details of Service Graph Connectors

Related reference

• Service Graph Connector for OpenTelemetry properties

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

33

Zurich ServiceNow AI Platform Capabilities

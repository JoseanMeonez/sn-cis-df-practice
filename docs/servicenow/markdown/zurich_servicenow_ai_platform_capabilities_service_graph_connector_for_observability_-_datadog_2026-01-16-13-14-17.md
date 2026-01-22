# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_observability_-_datadog_2026-01-16-13-14-17

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_observability_-_datadog_2026-01-16-13-14-17.pdf*

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

## Service Graph Connector for Observability - Datadog

Use the Service Graph Connector for Observability - Datadog to ingest
CMDB data from a Datadog installation using REST APIs. Push events from
Datadog into ServiceNow with Event Management.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported versions

Supported ServiceNow versions:

• Washington DC

• Xanadu

• Yokohama

Guided setup

The guided setup for the Service Graph Connector for Observability
- Datadog provides an organized sequence of tasks to configure the
integration on your instance. To access the guided setup, see Configure
Service Graph Connector for Observability - Datadog.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration, or
a specific integration run. For more details about monitoring Observability
Datadog integrations in the CMDB Integrations Dashboard, see Using the
CMDB Integrations Dashboard.

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

Data mapping

Data from the Datadog data sources is mapped and transformed into
the ServiceNow CMDB Configuration Item (CI) class definitions using the
Robust Transform Engine (RTE). Data is inserted into the ServiceNow CMDB
using the Identification and Reconciliation Engine (IRE).

The Datadog data source includes SGO-Datadog Hosts
[sn_datadog_integra_datadog_hosts].

For more information on where data is saved when pulling data from
Datadog, see CMDB classes targeted in Service Graph Connector for
Observability - Datadog.

When you complete setting up the connection, the data from Datadog
is automatically loaded into staging tables and then inserted into the
following target tables:

• Cloud DataBase [cmdb_ci_cloud_database]

• Cloud Load Balancer [cmdb_ci_cloud_load_balancer]

• Cloud Service Account [cmdb_ci_cloud_service_account]

• IP Address [cmdb_ci_ip_address]

• Key Value [cmdb_key_value]

• Logical Datacenter [cmdb_ci_logical_datacenter]

• Network Adapter [cmdb_ci_network_adapter]

• Server [cmdb_ci_server]

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

Related tasks

• Configure Service Graph Connector for Observability - Datadog

Related concepts

• Service Graph Connectors

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

• Accessing the connection details of Service Graph Connector for
Observability - Datadog

Related reference

• CMDB classes targeted in Service Graph Connector for Observability -
Datadog

## Configure Service Graph Connector for Observability -
## Datadog

Pull in data from Datadog into your Configuration Management
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

• The Datastream Action plugin
(com.glide.hub.action_type.datastream), which is automatically
installed.

• Observability Commons for CMDB (sn_observability), which is only
required for event ingestion. This must be installed prior to installing the
connector for Event Management to work. For more information, see
Observability Commons for CMDB on the ServiceNow Store.

Note:   If you have an earlier version of the Service Graph Connector
for Observability - Datadog, then don’t migrate data from the old
connector. You must uninstall the previous version and run the new
integration.

Role required: SGC-Admin (sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to run background scripts and
to provide table-level access to the SGC-Admin user.

Procedure

1. Navigate to All > Service Graph Connectors > Observability Datadog
> Setup.

2. On the Getting started page, select Get Started.

3. Configure the authentication credentials and the host name to send
requests to the Datadog API.

a. Configure your Datadog credentials.

a. In the Configure the Connection section of the Datadog
Integration with CMDB page, select Get Started.

b. For the Configure the Credentials task, select Configure.

c. In the Connection name field, enter a name for the
connection.

Note:   Do not modify the name of the default
connection.

d. In the Connection URL field, enter the base URL or IP address
for Datadog.

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

e. In the API key field, enter the Datadog API token.

f. In the Application key field, enter the application key used
for connecting to the Datadog API.

g. Select Update.

h. Set the Configure the Credentials task to complete by
selecting Mark as Complete.

b. Test the connection.

a. For the Test Connection task, select Configure.

b. Test the connection by selecting the Test Connection related
link.

Testing the connection might take a few moments. The page
is refreshed to show the test results.

c. When the Status field is set to Success, select Update.

If any of the tests have errors, follow the suggestions for
remediation.

d. Set the Test Connection task to complete by selecting Mark
as complete.

c. (Optional) Add a filter for the SGO-Datadog Hosts
[sn_datadog_integra_datadog_hosts] data source.

a. For the Create Hosts Filter task, select Configure.

b. Enter a comma-separated list of host tags in key:value
format in the Value field to define a filter for pulling host data
from Datadog.

For example, datadog:monitored,env:production.

c. Select Update.

d. Set the Create Hosts Filter task to complete by selecting Mark
as complete.

4. Configure the webhook and monitors for Observability Datadog.

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

a. In the Configure Observability section of the Datadog Integration
with CMDB page, select Get started.

b. For the Configure the Webhooks and Monitors task, select
Configure.

c. In the Datadog Webhooks list, select New to add a Datadog
webhook.

d. Fill in the fields.

New record form

Field
Description

Name
Name of the Datadog
webhook.

Connection Alias

Search for and select the
connection and credential
alias that you created in step
3.

e. Select Submit.

f. Populate the Datadog Webhooks list by selecting the
Synchronize Monitors related link on the Datadog Webhook
page.

Note:   In the Datadog Webhooks list, don't select New to
add a monitor as this option is not used in this scenario.

g. In the Name column of the Datadog Webhooks list, select a
monitor.

h. On the Datadog Monitors page, select the Webhook Active
check box, and then select Update.

i. Repeat steps 4.g and 4.h for all the monitors in the Datadog
Webhooks list.

j. On the Datadog Webhook page, select Update to save your
changes.

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

k. Set the Configure the Webhooks and Monitors task to complete
by selecting Mark as Complete.

5. Set up scheduled import jobs.

a. Navigate to All > Service Graph Connectors > Observability
Datadog > Import Schedules.

b. Select the name of the scheduled import that you want to
activate.

c. On the Scheduled Data Import form, verify the field values for the
scheduled job and select the Active check box.

For more information, see Schedule a data import.

d. Select Update.

Related concepts

• Service Graph Connector for Observability - Datadog

• Accessing the connection details of Service Graph Connector for
Observability - Datadog

Related reference

• CMDB classes targeted in Service Graph Connector for Observability -
Datadog

## CMDB classes targeted in Service Graph Connector for
## Observability - Datadog

When you complete setting up the connection, the data is automatically
pulled from Datadog. The data is saved in target tables.

Cloud DataBase [cmdb_ci_cloud_database]

The following attributes in the Cloud DataBase
[cmdb_ci_cloud_database] table are populated by collected data:

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

Attribute label
Attribute name

Object ID
object_id

Fully qualified domain name
fqdn

Name
name

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

Logical Datacenter
[cmdb_ci_logical_dat
acenter]

Cloud DataBase
[cmdb_ci_cloud_data
base]

Reference
Key Value
[cmdb_key_value]

Cloud Load Balancer [cmdb_ci_cloud_load_balancer]

The following attributes in the Cloud Load Balancer
[cmdb_ci_cloud_load_balancer] table are populated by collected data:

Attribute label
Attribute name

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

10

Zurich ServiceNow AI Platform Capabilities

---
*Page 11*

Relationships created for Cloud Load Balancer

Parent class
Relationship type
Child class

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

Hosted on::Hosts

Logical Datacenter
[cmdb_ci_logical_dat
acenter]

Cloud Load Balancer
[cmdb_ci_cloud_load
_balancer]

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

Name
name

Object ID
object_id

Datacenter Type
datacenter_type

IP Address [cmdb_ci_ip_address]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data:

Attribute label
Attribute name

IP Address
ip_address

Nic
nic

Name
name

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

Relationship created for Logical Datacenter

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

Network Adapter [cmdb_ci_network_adapter]

The following attributes in the Network Adapter
[cmdb_ci_network_adapter] table are populated by collected data:

Attribute label
Attribute name

Configuration Item
cmdb_ci

MAC Address
mac_address

Name
name

Relationship created for Network Adapter

Parent class
Relationship type
Child class

Network Adapter
[cmdb_ci_network_ad
apter]

Reference
Server
[cmdb_ci_server]

Server [cmdb_ci_server]

The following attributes in the Server [cmdb_ci_server] table are
populated by collected data:

Attribute label
Attribute name

Class
sys_class_name

CPU core thread
cpu_core_thread

CPU count
cpu_count

CPU speed (MHz)
cpu_speed

CPU type
cpu_type

Disk space (GB)
disk_space

DNS Domain
dns_domain

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

Fully qualified domain name
fqdn

Name
name

Operating System
os

RAM (MB)
ram

Relationships created for Server

Parent class
Relationship type
Child class

Server
[cmdb_ci_server]
Owns::Owned by

Network Adapter
[cmdb_ci_network_ad
apter]

Server
[cmdb_ci_server]
Owns::Owned by
IP Address
[cmdb_ci_ip_address]

Server
[cmdb_ci_server]
Reference
Key Value
[cmdb_key_value]

Related concepts

• Service Graph Connector for Observability - Datadog

## Accessing the connection details of Service Graph
## Connector for Observability - Datadog

You can access the connection details of the Service Graph Connector
for Observability - Datadog in a single view using the common
connection framework (CCF) included within the Integration Commons
for CMDB (sn_cmdb_int_util) store app.

With the CCF, you can access all the connections used by the Service
Graph Connector for Observability - Datadog. The connection details
include the connection alias, connection properties, data sources, and
scheduled data imports associated with a connection. You can also

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

test the connection. For more information, see Accessing the connection
details of Service Graph Connectors.

Access the details of a Datadog connection

Access the details of a Datadog connection configured for the Service
Graph Connector for Observability - Datadog.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > Datadog >
Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

3. On the Service Graph Connections page, view the connection
details such as the connection name, alias, and data sources.

4. Select a related list to view further details of the connection.

5. (Optional) Select the Test Connection related link to test the
connection.

Related concepts

• Service Graph Connector for Observability - Datadog

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

15

Zurich ServiceNow AI Platform Capabilities

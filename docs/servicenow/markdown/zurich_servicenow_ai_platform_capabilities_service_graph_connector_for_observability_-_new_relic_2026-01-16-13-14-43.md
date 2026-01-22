# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_observability_-_new_relic_2026-01-16-13-14-43

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_observability_-_new_relic_2026-01-16-13-14-43.pdf*

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

## Service Graph Connector for Observability - New Relic

Use the Service Graph Connector for Observability - New Relic to ingest
CMDB data from a New Relic installation using REST APIs. Push events
from New Relic into ServiceNow with Event Management.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported versions

• New Relic version: Last tested on July 01, 2025

• Supported ServiceNow versions:

• Xanadu

• Yokohama

• Zurich

Configuring a connection for the connector

You can configure a connection for the connector by using the
SGC Central view in the CMDB Workspace. The view enables you to
discover and install connectors, and then effectively manage the full life
cycle of creating, editing, monitoring, and debugging connections. To
configure the connector using SGC Central, see Configure Service Graph
Connector for Observability - New Relic using SGC Central.

Important:   Unless there are configuration issues, use the SGC
Central view in the CMDB Workspace to configure the connection
for the connector, as the guided setup method is being deprecated.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can

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

filter the view to a specific CMDB integration, a specific time duration, or
a specific integration run. For more details about monitoring Observability
New Relic integrations in the CMDB Integrations Dashboard, see Using the
CMDB Integrations Dashboard.

Data mapping

Data from the New Relic data sources is mapped and transformed into
the ServiceNow CMDB Configuration Item (CI) class definitions using the
Robust Transform Engine (RTE). Data is inserted into the ServiceNow CMDB
using the Identification and Reconciliation Engine (IRE).

The following data sources are included for New Relic:

• SG-New Relic Application Services

• SG-New Relic Applications

• SG-New Relic Disks

• SG-New Relic Hosts

• SG_New Relic Networks

When you complete setting up the connection, you can configure the
integration to periodically pull data from the New Relic application. The
data is loaded into the following staging tables:

• SG-New Relic Applications
[sn_newrelic_integ_sg_new_relic_applications]

• SG-New Relic Application Services
[sn_newrelic_integ_application_services]

• SG-New Relic Disks [sn_newrelic_integ_disks]

• SG-New Relic Hosts [sn_newrelic_integ_hosts]

• SG_New Relic Networks [sn_newrelic_integ_networks]

The data is then inserted into the following target tables:

• Application [cmdb_ci_appl]

• Application service [cmdb_ci_service_calculated]

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

• Disk [cmdb_ci_disk]

• IP Address[cmdb_ci_ip_address]

• Network Adapter [cmdb_ci_network_adapter]

• Running Process [cmdb_running_process]

• Server [cmdb_ci_server]

• Software Installation [cmdb_sam_sw_install] (If the Software Asset
Management (SAM) application is installed.)

• Software Instance [cmdb_software_instance] (If the SAM application is
not installed.)

• Software [cmdb_ci_spkg] (If the SAM application is not installed.)

For more information on where data is saved when pulling data from
New Relic, see CMDB classes targeted in Service Graph Connector for
Observability - New Relic.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

System property

The sn_newrelic_integ.alerts_for_unmatched_ci.enabled system property
determines whether to ingest events that don't have a matching CMDB
CI class. Set the value of this system property to true to ingest unmatched
events. The default value is false.

Related concepts

• Service Graph Connectors

## Configure Service Graph Connector for Observability -
## New Relic using SGC Central

Use the playbook available with the SGC Central application to set up
the Service Graph Connector for Observability - New Relic for pulling in
New Relic project data into the CMDB.

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

Before you begin

Dependencies and requirements:

• Install Service Graph Connector for Observability - New Relic version
1.3.0 or later from the ServiceNow Store. For ServiceNow Store
installation steps, see Install a ServiceNow Store application.

• Install Observability Commons for CMDB (sn_observability), which is only
required for event ingestion. This must be installed prior to installing the
connector for Event Management to work. For more information, see
Observability Commons for CMDB on the ServiceNow Store.

Role required: SGC-Admin (sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to run background scripts and
to provide table-level access to the SGC-Admin user.

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

4. On the Create connection window, select the New Relic connector
type, and then select Create connection.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

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

Note:   This step is required only during the first-time setup. See
Perform initial setup tasks when creating a connection in SGC
Central.

6. Enter connection details and test the API connection for importing
New Relic data.

a. In the Setup stage of the playbook, select the Create and test
connection activity.

b. On the form, fill in the fields.

Configure and test connection form

Field
Description

Connection Name
Name to identify the New Relic
connection record.

Connection URL
New Relic base URL in the
following format: <base-URL>.

API Key
New Relic API key or tenant
code.

Account ID
New Relic account ID.

c. Select Update and test connection.

d. After the connection test is complete, select Continue.

7. For the Configure Observability activity, select Continue.
New Relic creates the destination, channel, and workflow required to
enable alerts for all configuration items (CIs).

8. Configure the import schedule to import data at regular intervals.

a. In the Setup stage of the playbook, select the Configure import
schedule activity.

b. Select Configure import schedule.

c. Expand the Parent scheduled data import within the Import
schedules list to select the SG-New Relic Hosts import schedule.

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

d. In the Configure import schedule dialog box, select the Active
check box, and then fill in the run schedule and time details.

For more information, see Schedule a data import.

e. Select Save.
Alternatively, select Execute Now to execute the import schedule
immediately.

f. Select Continue.

9. In the Setup stage of the playbook, select the Confirm connection
creation activity to verify whether the connection was configured.

10. Enable alerts for configuration items (CIs) that aren’t available in the
CMDB.

a. Navigate to Workspaces > CMDB Workspace > SGC Central.

b. Select Settings.

c. Select New Relic system properties.

d. On the System Properties form, select the
sn_newrelic_integ.alerts_for_unmatched_ci.enabled system
property.

e. Set the Value of the system property to true.

f. Select Submit.

What to do next

Select View all connections to review the connection details. The
configured connection appears in the Installed connections list.

Related concepts

• Service Graph Connector for Observability - New Relic

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

## Configure Service Graph Connector for Observability -
## New Relic using the guided setup

Set up scheduled import jobs to pull in data from New Relic into your
CMDB.

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
required for event ingestion. This must be installed prior to installing the
connector for Event Management to work. For more information, see
Observability Commons for CMDB on the ServiceNow Store.

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

Note:   If you have an earlier version of the Service Graph Connector
for Observability - New Relic, then don’t migrate data from the old
connector. You must uninstall the previous version and run the new
integration.

Role required: SGC-Admin (sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to run background scripts and
to provide table-level access to the SGC-Admin user.

Procedure

1. Ensure that the application scope is set to the Service Graph
Connector for Observability - New Relic application by using the
application picker.
For more information, see Application picker.

2. Navigate to All > Service Graph Connectors > New Relic > Setup.

3. On the Getting started page, select Get Started.

4. Configure the authentication credentials to send requests to the New
Relic application.

a. Configure your New Relic connection and credentials.

a. In the Configure the Connection section of the New Relic
Integration with CMDB page, select Get Started.

b. For the Configure connection and credentials task, select
Configure.

c. On the Connections page of the Workflow Studio, select
Configure for the NewRelicConnectionAlias connection that
is available by default.

d. On the form, review and modify the fields.

Configure Connection form

Field
Description

Connection Information

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

Field
Description

Connection Name

Name to uniquely identify
the connection record. For
example,
NewRelicConnectionAlias
.

Connection URL

Base URL to connect to the
New Relic application in the
following format:

https://api.newrelic.c
om/graphql

Note:   This field is
automatically set to the
URL to connect to the
NerdGraph API in the
New Relic application.
Leave the field value as
is.

Credential Information

API Key

NerdGraph API token used
for authentication on the
New Relic application.

Account ID
Account ID associated with
the New Relic credential.

e. Select Configure Connection.

Note:   The Service Graph Connector for Observability
- New Relic supports connection to a single New
Relic instance only. So, you can use the single default
connection only.

f. Return to the Configure the connection task page using the
back button for your browser.

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

g. Set the Configure connection and credentials task to
complete by selecting Mark as Complete.

b. Test the NerdGraph API connection to import data from the New
Relic application.

a. In the Configure the Connection section of the New Relic
Integration with CMDB page, select Continue.

b. For the Test Connection task, select Configure.

c. Test the connection by selecting the Test Connection related
link.

Testing the connection might take a few moments. The page
is refreshed to show the test results.

d. When the Status field is set to Success, select Update.

If any of the tests have errors, follow the suggestions for
remediation.

e. Set the Test Connection task to complete by selecting Mark
as Complete.

5. Configure the destination, channel, and workflow for Observability
New Relic and turn on alerts for unmatched configuration items (CIs).

a. Configure the destination, channel, and workflow for
Observability New Relic.

a. In the Configure Observability section of the New Relic
Integration with CMDB page, select Get started.

b. For the Configure destination, channel and workflow task,
select Configure.

c. In the SG-New Relic Webhooks list, select New.

d. On the form, fill in the fields.

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

New record form

Field
Description

Name

Name of the New Relic
configuration.

The destination, channel,
and workflow strings
are appended to the
configuration name when
the configuration is created.

Connection and Credential
Alias

Select the connection alias
that you created in step 4.

e. Select Submit.

f. Set the Configure destination, channel and workflow task to
complete by selecting Mark as Complete.

b. Enable alerts for configuration items (CIs) that aren’t available in
the CMDB.

a. In the Configure Observability section of the New Relic
Integration with CMDB page, select Continue.

b. For the Turn on alerts for unmatched CI task, select Configure.

c. On the System Properties form, select the
sn_newrelic_integ.alerts_for_unmatched_ci.enabled system
property.

d. Set the Value of the system property to true.

e. Select Submit.

f. Set the Turn on alerts for unmatched CI task to complete by
selecting Mark as Complete.

6. Configure the scheduled jobs to import data from the New Relic
application.

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

a. In the Set up scheduled data imports section of the New Relic
Integration with CMDB page, select Get started.

b. For the Configure Scheduled Data Imports task, select Configure.

c. Select the scheduled job that you want to activate.

d. On the Scheduled Data Import form, verify the field values for the
scheduled job.
For more information, see Schedule a data import.

e. Select the Active check box to activate the scheduled job.

f. Select Update.

g. Repeat steps 6.c to 6.f for each scheduled job for data import.

h. Navigate back to the guided setup page.

i. Set the Configure Scheduled Data Imports task to complete by
selecting Mark as Complete.

## CMDB classes targeted in Service Graph Connector for
## Observability - New Relic

When you complete setting up the connection, you can configure the
integration to periodically pull data from New Relic. The data is saved in
tables that extend from the Configuration item [cmdb_ci] table.

Server [cmdb_ci_server]

The following attributes in the Server [cmdb_ci_server] table are
populated by collected data:

Attribute label
Attribute name

CPU core count
cpu_core_count

Disk space (GB)
disk_space

DNS Domain
dns_domain

Fully qualified domain name
fqdn

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

Attribute label
Attribute name

Host name
host_name

Operating System
os

Relationships created for Server

Parent class
Relationship type
Child class

Server
[cmdb_ci_server]

Contains::Contained
by
Disk [cmdb_ci_disk]

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

Calculated Application Service [cmdb_ci_service_calculated]

The following attributes in the Calculated Application Service
[cmdb_ci_service_calculated] table are populated by collected data:

Attribute label
Attribute name

Name
name

Metadata
metadata

Service Populator Status
populator_status

Service Type
type

IP Address [cmdb_ci_ip_address]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data:

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

IP Address
ip_address

IP version
ip_version

Name
name

Nic
nic

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

Software Instance [cmdb_software_instance]

The following attributes in the Software Instance
[cmdb_software_instance] table are populated by collected data:

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
Server
[cmdb_ci_server]

Software [cmdb_ci_spkg]

The following attributes in the Software [cmdb_ci_spkg] table are
populated by collected data:

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

Attribute label
Attribute name

Key
key

Nic
nic

Name
name

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

Disk [cmdb_ci_disk]

The following attributes in the Disk [cmdb_ci_disk] table are populated by
collected data:

Attribute label
Attribute name

Device ID
device_id

Free disk space (GB)
free_space

Computer
computer

Name
name

Disk space (GB)
disk_space

File system
file_system

Relationship created for Disk

Parent class
Relationship type
Child class

Disk [cmdb_ci_disk]
Hosted on::Hosts
Server
[cmdb_ci_server]

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

Application [cmdb_ci_appl]

The following attributes in the Application [cmdb_ci_appl] table are
populated by collected data:

Attribute label
Attribute name

Class
sys_class_name

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
Server
[cmdb_ci_server]

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

## Accessing the connection details of Service Graph
## Connector for Observability - New Relic

You can access the connection details of the Service Graph Connector
for Observability - New Relic in a single view using the common
connection framework (CCF) included within the Integration Commons
for CMDB (sn_cmdb_int_util) store app.

With the CCF, you can access all the connections used by the Service
Graph Connector for Observability - New Relic. The connection details
include the connection alias, connection properties, data sources, and
scheduled data imports associated with a connection. You can also
test the connection. For more information, see Accessing the connection
details of Service Graph Connectors.

Access the details of a Service Graph Connector for Observability
- New Relic connection

Access the details of a New Relic connection configured for the Service
Graph Connector for Observability - New Relic.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > New Relic >
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

19

Zurich ServiceNow AI Platform Capabilities

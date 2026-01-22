# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_observability_-_appdynamics_2026-01-16-13-13-26

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_observability_-_appdynamics_2026-01-16-13-13-26.pdf*

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

## Service Graph Connector for Observability -
## AppDynamics

Use the Service Graph Connector for Observability - AppDynamics to
ingest CMDB data from an AppDynamics installation using REST APIs. Push
events from AppDynamics into ServiceNow with Event Management.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported versions

• Supported versions: AppDynamics version 20.3

• Supported ServiceNow versions:

• Xanadu

• Yokohama

• Zurich

Configuring a connection for the connector

You can configure a connection for the connector by using the SGC
Central view in the CMDB Workspace enables you to discover and install
connectors, and then effectively manage the full life cycle of creating,
editing, monitoring, and debugging connections. To configure the
connector using SGC Central, see Configure Service Graph Connector
for Observability - AppDynamics using SGC Central.

Important:   Unless there are configuration issues, use the SGC
Central view in the CMDB Workspace to configure the connection
for the connector, as the guided setup method is being deprecated.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard
with a central view of the status, processing results, and processing errors

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

of all installed integrations. You can see metrics for all integration runs.
You can filter the view to a specific CMDB integration, a specific time
duration, or a specific integration run. For more details about monitoring
AppDynamics integrations in the CMDB Integrations Dashboard, see
Using the CMDB Integrations Dashboard.

Data mapping

Data from the AppDynamics data sources is mapped and transformed
into the ServiceNow CMDB Configuration Item (CI) class definitions using
the Robust Transform Engine (RTE). Data is inserted into the ServiceNow
CMDB using the Identification and Reconciliation Engine (IRE).

The AppDynamics data sources include the following:

• SG-AppDynamics Application Services

• SG-AppDynamics Servers and Applications

• SG-AppDynamics Server Tags

• SG-AppDynamics Tier to Tier Relationship

For more information on where data is saved when pulling data from
AppDynamics, see CMDB classes targeted in Service Graph Connector
for Observability - AppDynamics.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

Additional resources

• Service Graph Connector for Observability AppDynamics article on the
ServiceNow Community site

• How do I configure the AppDynamics Service Graph Connector?

article on the ServiceNow Community site

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

## Configure Service Graph Connector for Observability -
## AppDynamics using SGC Central

Set up scheduled import jobs to pull in AppDynamics data into your
Configuration Management Database (CMDB).

Before you begin

• Install Service Graph Connector for Observability - AppDynamics
version 1.4.0 or later from the ServiceNow Store. For ServiceNow Store
installation steps, see Install a ServiceNow Store application.

• Install Observability Commons for CMDB (sn_observability), which is only
required for event ingestion. This application must be installed prior
to installing the connector for Event Management to work. For more
information, see Observability Commons for CMDB on the ServiceNow
Store.

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

4. On the Create connection window, select the AppDynamics
connector type, and then select Configure connection.
A default connection for AppDynamics is available within the
application. As the Service Graph Connector for Observability -
AppDynamics supports only a single instance, you can configure the
default connection for the first time or resume editing it thereafter.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

Note:   This step is required only during the first-time setup. See
Perform initial setup tasks when creating a connection in SGC
Central.

6. Enter connection details and test the API connection for importing
AppDynamics data.

a. In the Setup stage of the playbook, select the Configure and test
connection activity.

b. On the form, fill in the fields.

Configure and test connection form

Field
Description

Connection name

Name to identify the
AppDynamics connection
record.

Connection URL
Base URL of your AppDynamics
controller.

OAuth Client ID

Application (client) ID of
your AppDynamics client
application.

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

Field
Description

Note:   Verify that Server
Visibility is active for the
AppDynamics account
and the AppDynamics
user has the Applications
and Dashboards Viewer
(Default) and Server
Monitoring User (Default)
roles.

OAuth Client Secret

Client secret of
your AppDynamics client
application.

Use MID server

Option to use a MID Server.

Note:   Use of a MID Server
is optional.

MID selection

Name of the MID Server used
by the connector.

This field appears only when
the Use MID server check box
is selected.

c. Select Update and test connection.

d. Once the connection test is complete, select Continue.

7. (Optional) Enable real-time event integration by creating an HTTP
request template to receive real-time health-check alerts and events
from AppDynamics to your ServiceNow instance.

Note:   To skip this step, select Skip for the Enable real-time event
integration activity.

a. In the Setup stage of the playbook, select the Enable real-time
event integration activity.

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

b. Select Continue to create an HTTP request template
automatically.

After you enable real-time event integration, multiple API
calls are executed to start the event ingestion service in
AppDynamics. For more information, see the Service Graph
Connector for Observability AppDynamics article on the
ServiceNow Community site.

8. Configure duplicate detection rules.

AppDynamics uses duplicate detection rules to insert only new or
updated rows into the CMDB. To insert all rows, deactivate the rule
and run the Clean AppDynamics Duplicate Row Hashes scheduled
job for a full data import.

a. In the Setup stage of the playbook, select the Configure
duplicate detection rules activity.

b. In the Duplicate detection rules list, select the rule from the Name
column.

c. On the Edit duplicate detection rule window, select the Active
check box to activate the rule.

Note:   To remove fields from being evaluated, add the field
names in the Ignore Fields field for a rule. To ignore multiple
fields, separate the fields with commas.

d. Select Save.

e. Repeat steps from 8.b to 8.d for each rule you want to activate.

f. Select Continue.

9. Configure the import schedule to import data at regular intervals.

a. In the Setup stage of the playbook, select the Configure import
schedule activity.

b. Expand the Parent scheduled data import within the Import
schedules list to select the SG-AppDynamics Servers and
Applications import schedule.

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

c. Select the Active check box, and then fill in the run schedule and
time details.

For more information, see Schedule a data import.

d. Select Save.
Alternatively, select Execute Now to execute the import schedule
immediately.

e. Select Continue.

10. In the Setup stage of the playbook, select the Confirm connection
setup activity to verify whether the connection was configured.

What to do next

Select View all connections to review the connection details. The
configured connection appears in the Installed connections list.

Related concepts

• Service Graph Connector for Observability - AppDynamics

• Accessing the connection details of Service Graph Connector for
Observability - AppDynamics

Related reference

• CMDB classes targeted in Service Graph Connector for Observability -
AppDynamics

## Configure Service Graph Connector for Observability -
## AppDynamics using the guided setup

Set up scheduled import jobs to pull in data from AppDynamics into your
Configuration Management Database (CMDB).

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
required for event ingestion. This must be installed prior to installing the
connector for Event Management to work. For more information, see
Observability Commons for CMDB on the ServiceNow Store.

When using client credentials for authentication, obtain the OAuth
credentials from your AppDynamics administrator. Make a note of the
following details:

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

• Application (client) ID

• Client Secret

Note:   If you have an earlier version of the Service Graph Connector
for Observability - AppDynamics, then do not migrate data from the
old connector. You must uninstall the previous version and run the
new integration.

Role required: SGC-Admin (sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to run background scripts and
to provide table-level access to the SGC-Admin user.

Procedure

1. Ensure that the application scope is set to the Service Graph
Connector for Observability - AppDynamics application by using the
application picker.
For more information, see Application picker.

2. Navigate to All > Service Graph Connectors > AppDynamics > Setup.

3. On the Getting started page, select Get Started.

4. Configure the authentication credentials and establish an HTTP
connection to send requests to the AppDynamics API.

a. In the Configure API authentication section of the Service Graph
Connector for Observability - AppDynamics page, select Get
Started.

b. Configure the connection for AppDynamics by editing the
default connection.

You can configure either a Basic Auth connection or an OAuth
connection.

Note:   As the connector supports only single instance, edit
the AppDynamicsConnectionAlias connection, available by
default.

• Configure a Basic Auth connection.

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

a. • For the Configure Basic Auth Connection task, select
Configure.

b. • Select Edit for AppDynamicsConnectionAlias.

Note:   If not redirected to the connection setup,
search for AppDynamicsConnectionAlias on the
Integrations page, and then select View Details to
edit the default connection.

c. • In the Connection Information section of the Edit
Connection window, fill in the fields.

Connection Information

Field
Description

Connection name

Name to identify the
AppDynamics connection
record.

AppDynamicsConnection
Alias is the default
credential alias name and
is read-only.

Host name
Host name of your
AppDynamics controller.

d. • (Optional) If a MID Server is required for the
AppDynamics server connection, select the Use MID
server check box. Then, select the MID Server-related
fields accordingly.

e. • In the Credential Information section of the Edit
Connection window, fill in the fields.

Credential Information

Field
Description

Username
AppDynamics account
user name that is used

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

Field
Description

to authenticate the
connection request.

Note:   Verify
that Server Visibility
is active for
the AppDynamics
account and the
AppDynamics user
has the Applications
and Dashboards
Viewer (Default) and
Server Monitoring User
(Default) roles.

Password

Password that is used
to authenticate the
connection request.

f. • Select Edit Connection.

g. • Return to the guided setup page.

h. • Set the Configure Basic Auth Connection task to
complete by selecting Mark as Complete.

• Configure an OAuth connection.

a. • For the Configure OAuth Authentication: Client
Credentials task, select Configure.

b. • Select Edit for AppDynamicsConnectionAlias.

Note:   If not redirected to the connection setup,
search for AppDynamicsConnectionAlias on the
Integrations page, and then select View Details to
edit the default connection.

c. • In the Connection Information section of the Edit
Connection window, fill in the fields.

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

Connection Information

Field
Description

Connection name

Name to identify the
AppDynamics connection
record.

AppDynamicsConnection
Alias is the default
credential alias name and
is read-only.

Connection URL
Base URL of your
AppDynamics controller.

d. • (Optional) If a MID Server is required for the
AppDynamics server connection, select the Use MID
server check box. Then, select the MID Server-related
fields accordingly.

e. • In the Credential Information section of the Edit
Connection window, fill in the fields.

Credential Information

Field
Description

OAuth Client ID

Application (client) ID of
your AppDynamics client
application as noted in the
Before you begin section.

Note:   Verify that
the API client has
a role with the
required privileges
and sufficient Token
Expiration Time.

OAuth Client Secret
Client secret of your
AppDynamics client

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

Field
Description

application as noted in the
Before you begin section.

f. • Select Edit Connection.

g. • Return to the guided setup page.

h. • Set the Configure OAuth Authentication: Client
Credentials task to complete by selecting Mark as
Complete.

c. Test the connection.

a. For the Test connection task, select Configure.

b. Select the Test Connection related link to start the testing
process.

c. When the Status field is set to Success, return to the guided
setup page.

Note:   If any of the tests have errors, follow the
suggestions for remediation.

d. Set the Test the connection task to complete by selecting
Mark as Complete.

d. Enable AppDynamics event integration with your ServiceNow
instance by pushing a default HTTP Request Template to
AppDynamics.

Note:   To push HTTP requests, verify that the Observability
Commons for CMDB application (sn_observability) is installed
for events ingestion on your ServiceNow instance. Also,
on your AppDynamics instance, as the ServiceNow user,
you must have the account-level Configure HTTP Request
Templates permission to create or modify HTTP Request
Templates.

a. For the Push HTTP Request Template task, select Configure.

b. Select the Push HTTP Request Template related link.

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

c. Return to the guided setup page.

d. Set the Push HTTP Request Template task to complete by
selecting Mark as Complete.

After you push the HTTP request template, multiple API calls are
executed to start the event ingestion service in AppDynamics.
For more information, see the Service Graph Connector
for Observability AppDynamics article on the ServiceNow
Community site.

5. Configure duplicate detection rules.

a. For the Configure duplicate detection rules task in the Duplicate
detection rules section, select Configure.

b. In the CMDB Duplicate Row Rules list, set the Active column value
for a rule to true to activate the rule.

Note:   To remove fields from being evaluated, add the
field names in the Ignore Fields column for a rule. To ignore
multiple fields, separate the fields with commas.

c. Return to the guided setup page.

d. Set the Configure duplicate detection rules task to complete by
selecting Mark as Complete.

6. Configure advanced settings.

a. For the Advanced Settings task in the Advanced section, select
Configure.

b. Review and modify the advanced properties.

Advanced properties

Property
Description

Toggle to populate
relationships between tiers

Option to enable the import
of relationships between
AppDynamics tiers in the
CI Relationship [cmdb_rel_ci]
table.

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

Property
Description

The number of minutes of
metrics to fetch in order
to generate tier to tier
relationships

Number of minutes of metrics
to fetch for generating tier-to-
tier relationships. For example,
60 retrieves the last hour's
relationships.

Toggle to import
business transactions from
AppDynamics

Option to enable the
import of business transactions
into the Calculated
Application Service
[cmdb_ci_service_calculated]
table.

Toggle to populate tags for
imported servers

Option to enable the import of
server tags into the Key Value
[cmdb_key_value] table.

Toggle to import node data
from AppDynamics and map
to the cmdb_ci_appl hierarchy

Option to enable the
import of nodes into the
Application [cmdb_ci_appl]
table hierarchy.

c. Select Save.

d. Set the Advanced Settings task to complete by selecting Mark as
Complete.

7. Set up the SG-AppDynamics Servers and Applications scheduled job
available by default.

a. For the Configure scheduled job task in the Set up scheduled
import jobs section, select Configure.

b. On the Scheduled Data Import form, verify the field values for the
SG-AppDynamics Servers and Applications scheduled job and
select the Active check box.

For more information, see Schedule a data import.

c. Select Update.

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

d. Set the Configure scheduled job task to complete by selecting
Mark as Complete.

## CMDB classes targeted in Service Graph Connector for
## Observability - AppDynamics

When you complete setting up the connection, you can configure the
integration to periodically pull data from AppDynamics. The data is
saved in tables that extend from the Configuration item [cmdb_ci] table.

AppDynamics Extension [sn_sg_appd_extension]

The following attributes in the AppDynamics Extension
[sn_sg_appd_extension] table are populated by collected data:

Attribute label
Attribute name

AppDynamics ID
appdynamics_id

Controller Name
controller_name

Agent Type
agent_type

Type
type

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

Relationships created for Application

Parent class
Relationship type
Child class

Application
[cmdb_ci_appl]
Runs on::Runs
Server
[cmdb_ci_server]

Application
[cmdb_ci_appl]
Reference

AppDynamics
Extension
[sn_sg_appd_extensio
n]

Calculated Application Service [cmdb_ci_service_calculated]

The following attributes in the Calculated Application Service
[cmdb_ci_service_calculated] table are populated by collected data:

Attribute label
Attribute name

Name
name

Hide from dashboard
hide_from_dashboard

Metadata
metadata

Operational status
operational_status

Service Populator Status
populator_status

Service Populator
service_populator

Service Type
type

Short Description
short_description

Relationships created for Calculated Application Service

Parent class
Relationship type
Child class

Calculated
Application Service
Depends on::Used by
Application
[cmdb_ci_appl]

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

Parent class
Relationship type
Child class

[cmdb_ci_service_cal
culated]

Calculated
Application Service
[cmdb_ci_service_cal
culated]

Depends on::Used by
Server
[cmdb_ci_server]

Calculated
Application Service
[cmdb_ci_service_cal
culated]

Depends on::Used by

Calculated
Application Service
[cmdb_ci_service_cal
culated]

IP Address [cmdb_ci_ip_address]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data:

Attribute label
Attribute name

IP Address
ip_address

Nic
nic

IP version
ip_version

Name
name

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

Attribute label
Attribute name

Key
key

Value
value

Network Adapter [cmdb_ci_network_adapter]

The following attributes in the Network Adapter
[cmdb_ci_network_adapter] table are populated by collected data:

Attribute label
Attribute name

MAC Address
mac_address

Name
name

Discovery source
discovery_source

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

Name
name

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

Relationships created for Server

Parent class
Relationship type
Child class

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

Server
[cmdb_ci_server]
Reference
Key Value
[cmdb_key_value]

## Accessing the connection details of Service Graph
## Connector for Observability - AppDynamics

You can access the connection details of the Service Graph Connector
for Observability - AppDynamics in a single view using the common
connection framework (CCF) included within the Integration Commons
for CMDB (sn_cmdb_int_util) store app.

With the CCF, you can access all the connections used by the Service
Graph Connector for Observability - AppDynamics. The connection
details include the connection alias, connection properties, data
sources, and scheduled data imports associated with a connection. You
can also test the connection. For more information, see Accessing the
connection details of Service Graph Connectors.

Access the details of an AppDynamics connection

Access the details of an AppDynamics connection configured for the
Service Graph Connector for Observability - AppDynamics.

Before you begin

Role required: admin

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

Procedure

1. Navigate to All > Service Graph Connectors > AppDynamics >
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

23

Zurich ServiceNow AI Platform Capabilities

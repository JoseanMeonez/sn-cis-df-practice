# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_akamai_api_security_2026-01-16-13-06-17

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_akamai_api_security_2026-01-16-13-06-17.pdf*

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

## Service Graph Connector for Akamai API Security

Use the Service Graph Connector for Akamai API Security to integrate
the APIs discovered by Akamai into your ServiceNow instance to support
various API management use cases.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported versions

• Supported ServiceNow versions:

• Xanadu

• Yokohama

• Zurich

• Supported Akamai API Security REST APIs:

• /api/v3/apis

• /api/v3/sources

• /auth/token

Use cases

The Service Graph Connector for Akamai API Security brings data into
the new API Insights capability of the ServiceNow platform, enabling
the management of different APIs in one instance. The connector adds
information discovered by Akamai API Security to the API Component CI
class.

The Service Graph Connector for Akamai API Security populates
attributes that are security- and risk-related, such as the request and
response data types, whether an API endpoint is internet-facing, and the

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

type of authentication used for the endpoint. These data points enable
risk and security use cases to be implemented for API security.

Configuring a connection for the connector

You can configure a connection for the connector by using the
SGC Central view in the CMDB Workspace. The view enables you to
discover and install connectors, and then effectively manage the full life
cycle of creating, editing, monitoring, and debugging connections. To
configure the connector using SGC Central, see Configure Service Graph
Connector for Akamai API Security using SGC Central.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration, or
a specific integration run. For more details about monitoring Akamai API
Security integrations in the CMDB Integrations Dashboard, see Using the
CMDB Integrations Dashboard.

Data mapping

Data from the Akamai API Security data sources is mapped and
transformed into the ServiceNow CMDB Configuration Item (CI) class
definitions using the Robust Transform Engine (RTE). Data is inserted into
the ServiceNow CMDB using the Identification and Reconciliation Engine
(IRE).

The following table lists the data sources, the staging tables, and the
target tables as CMDB CI and non-CMDB classes for Akamai API Security.

Data mapping for Akamai API Security

Data source
Staging table
Target tables

Sources
sn_akamai_api_sec_ak
amai_sources

Akamai API
Security Sources
[sn_akamai_source]

API Component

sn_akamai_api_sec_sg
a_akamai_api_compo
nent

API Component
[cmdb_ci_api_compo
nent]

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
Staging table
Target tables

Key Value
[cmdb_key_value]

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

Scheduled script for full data load

The Service Graph Connector for Akamai API Security supports both full
load and delta load data ingestion methods. A full data load retrieves all
API-related data and populates the corresponding CMDB tables. Delta
loads fetch only the data that changed since the previous execution.

During the initial scheduled data import, a full data load is executed.
Subsequent data imports perform delta loads.

To run a full data load on a recurring basis, customize the execution
schedule of the Reset Last Run Datetime for SG-Akamai scheduled script
based on your requirements. To open the Scheduled Script Executions
table, enter sysauto_script.list in the navigation filter.

Additional resource

Management API Reference

Related tasks

• Configure Service Graph Connector for Akamai API Security using SGC
Central

Related concepts

• Service Graph Connectors

Related reference

• CMDB classes targeted in Service Graph Connector for Akamai API
Security

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

## Configure Service Graph Connector for Akamai API
## Security using SGC Central

Use the playbook available with the SGC Central application to set
up the Service Graph Connector for Akamai API Security for pulling in
Akamai API Security data into the CMDB.

Before you begin

• Install Service Graph Connector for Akamai API Security version 1.0.0
from the ServiceNow Store.

For ServiceNow Store installation steps, see Install a ServiceNow Store
application.

• Create a service account on the Akamai platform and generate client
credentials to enable data retrieval using the Service Graph Connector
for Akamai API Security.

The Akamai API Security platform supports client credentials-based
authentication. Client credentials are required to authenticate and
securely access API data.

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

3. On the Dashboard page, select Create connection.

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

Tip:   Alternatively, you can select Create connection on the All
connections page.

4. On the Create connection window, select the Akamai connector
type, and then select Create connection.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

Note:   This step is required only during the first-time setup. See
Perform initial setup tasks when creating a connection in SGC
Central.

6. Complete the setup for configuring the connector for importing data.

a. Create and test a connection.

a. In the Setup stage of the playbook, select the Create and test
connection activity.

b. On the form, fill in the fields.

Create and test connection form

Field

Akamai Connection Name

Name to identify the Akamai
connection record.

For example, Akamai.

Connection URL
URL of the connection.

OAuth Client ID

Application (client) ID
of your Akamai client
application.

OAuth Client Secret
Client secret of your Akamai
client application.

OAuth Token URL
Token URL of your Akamai
client application.

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

c. Select Create and test connection.

d. After the connection test is complete, select Continue.

b. Set the configuration properties to import tags and to configure
source-based filtering.

a. In the Setup stage of the playbook, select the Set
configuration properties activity.

b. (Optional) In the Data retrieval configuration section, specify
the Source name or Source alias as a comma-separated
list to fetch API Component data from specific sources or
gateways, respectively.

Note:   When a value is specified or updated in the
Source name or Source alias field, the last_run_datetime
field for SG-Akamai data sources is reset. This triggers
full data ingestion during the next scheduled import.
Subsequent runs perform delta loads based on the
configured filters.

c. In the Tags settings section, select the Import tags check box
to import tags for the records.

d. In the Tags value separator field, specify = as the key-value
pair separator.

e. Select Continue.

c. Configure the import schedule to import data at regular intervals.

a. In the Setup stage of the playbook, select the Configure
import schedule activity.

b. Expand the Parent scheduled data import within the Import
schedules list, and select the Sources import schedule.

c. In the Configure import schedule dialog box, select the
Active check box, and then fill in the run schedule and time
details.

For more information, see Schedule a data import.

d. Select Save.

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

Alternatively, select Execute Now to execute the import
schedule immediately.

e. Select Continue.

d. In the Setup stage of the playbook, select the Confirm
connection setup activity to verify whether the connection was
created.

What to do next

Select View all connections to review the connection details. The
configured connection appears in the Installed connections list.

Related concepts

• Service Graph Connector for Akamai API Security

Related reference

• CMDB classes targeted in Service Graph Connector for Akamai API
Security

## CMDB classes targeted in Service Graph Connector for
## Akamai API Security

When you complete setting up the connection, you can configure the
integration to periodically pull data from Akamai API Security. The data is
saved in tables that extend from the Configuration item [cmdb_ci] table.

API Component [cmdb_ci_api_component]

The following attributes in the API Component
[cmdb_ci_api_component] table are populated by collected data:

Attribute label
Attribute name

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

9

Zurich ServiceNow AI Platform Capabilities

---
*Page 10*

Attribute label
Attribute name

Path
path

URL
url

Attributes
attributes

Authorization
authorization

Correlation ID
correlation_id

Internet Facing
internet_facing

Name
name

Operational status
operational_status

Product instance identifier
product_instance_id

Request Data Types
request_data_types

Response Data Types
response_data_types

Relationship created for API Component

Parent class
Relationship type
Child class

API Component
[cmdb_ci_api_compo
nent]

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

Attribute label
Attribute name

Configuration item
configuration_item

Related concepts

• Service Graph Connector for Akamai API Security

## Accessing the connection details of Service Graph
## Connector for Akamai API Security

You can access the connection details of the Service Graph Connector
for Akamai API Security in a single view using the common connection
framework (CCF) included within the Integration Commons for CMDB
(sn_cmdb_int_util) store app.

With the CCF, you can access all the connections used by the Service
Graph Connector for Akamai API Security. The connection details
include the connection alias, connection properties, data sources, and
scheduled data imports associated with a connection. You can also
test the connection. For more information, see Accessing the connection
details of Service Graph Connectors.

Access the details of an Akamai API Security connection

Access the details of an Akamai API Security connection configured for
the Service Graph Connector for Akamai API Security.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > Akamai API Security >
Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

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

3. On the Service Graph Connections page, view the connection
details such as the connection name, alias, and data sources.

4. Select a related list to view further details of the connection.

5. (Optional) Select the Test Connection related link to test the
connection.

Related concepts

• Service Graph Connector for Akamai API Security

## Service Graph Connector for Akamai API Security
## properties

Service Graph Connector for Akamai API Security properties control the
behavior of the connector.

Connection properties

These connection properties are available for the Service Graph
Connector for Akamai API Security.

Note:   To open the Service Graph Connection Properties
[sn_cmdb_int_util_service_graph_connection_property] table for the
connector, navigate to All > Service Graph Connectors > Akamai
API Security > Connections, and select the connection name.
The connection properties are displayed in the Service Graph
Connection Properties related list.

Connection properties for Service Graph Connector for Akamai
API Security

Property
Description

Import tags

Set the property to true to import
API tags.

• Type: true | false

• Default value: false

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

Property
Description

Tags storage type

Specify whether the tag values
should be stored in the
Key Value [cmdb_key_value]
table or in the Attributes
field of the API Component
[cmdb_ci_api_component] table.

• Type: cmdb_key_value |
attributes

• Default value: cmdb_key_value

Tags value separator

Specify the delimiter to parse tag
strings into key-value pairs.

• Type: custom

• Default value: null

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

13

Zurich ServiceNow AI Platform Capabilities

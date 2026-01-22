# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_rapid7_2026-01-16-13-15-25

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_rapid7_2026-01-16-13-15-25.pdf*

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

## Service Graph Connector for Rapid7

The Service Graph Connector for Rapid7 pulls in asset inventory
data (hardware and software) from the Rapid7 database into the
Configuration Management Database (CMDB) application in your
ServiceNow AI Platform® instance.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported versions

• Version 4.0 of the Rapid7 InsightVM application.

• Utah, Vancouver, and Washington ServiceNow® family releases.

Use cases

• Complement the data from the Rapid7 InsightVM discovery product.

• Import hardware data and details about your assets from the Rapid7
InsightVM integration and store them in appropriate configuration item
(CI) classes in your CMDB.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration,
or a specific integration run. For more details about monitoring Rapid7
integrations in the CMDB Integrations Dashboard, see Using the CMDB
Integrations Dashboard.

Guided setup

Use the guided setup feature for the Service Graph Connector for Rapid7
to help you configure your integration in an organized sequence of tasks.

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

Note:   The API token requires the InsightIDR viewer role.

Configure the Service Graph Connector for Rapid7

After you have followed the instructions provided to you to download
and activate the Service Graph Connector for Rapid7 application, refer
to Download an application from the ServiceNow Store for the first time
and Install a Security Operations integration. There are a few steps you
need to complete before you configure this integration.

## Configure the Service Graph Connector for Rapid7

Configure your connections, set up scheduled imports, verify successful
connections and optionally add multiple instances in the Guided Setup.

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

• Observability Commons for CMDB (sn_observability), which is only
required for event ingestion. This app must be installed prior to installing
the connector for Event Management to work. For more information,
see Observability Commons for CMDB on the ServiceNow Store.

Roles required:

• admin for tasks in the Guided Setup

• insightIDR viewer role for the API token

Procedure

1. Navigate to All > Service Graph Connectors > Rapid7 > Setup in the
navigation panel in your instance.

2. On the Welcome to Guided Setup Home page, select Continue.

3. On the Experience page that is displayed, select Best Experience
followed by Continue.
On the Service Graph Connector for Rapid7 page, there are three
tasks displayed:

• Configure the connection

• Add multiple instances

• Set up scheduled imports

4. Select Configure the connection to expand it.
There are three steps:

• Configure Rapid7 authentication credentials

• Configure Rapid7 HTTP Connection

• Test Connection

5. Select Configure Rapid7 authentication credentials and fill in the
fields.

a. Enter a name for the credentials, for example
SGRapid7.Credential.

b. Verify the Active check box is selected.

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

c. In the API Key field, enter your Rapid7 InsightVM API key.

d. Leave the other field values in their current settings.

e. Right-click in the gray header titled API Key Credentials and
select Save.

f. Select Mark as complete followed by Continue.
The Configure Rapid7 HTTP Connection page is displayed.

6. Configure Rapid7 HTTP Connection.

a. Fill in the fields,

Field
Value

Name
Connection name, SGRapid7,
for example.

Active
Selected.

Credential

Credentials to use for the
connection. Select one from
the list.

Connection alias

Select one from the list.
sn_sec_sgc_rapid7.SGRapid7,
for example

URL builder
Select the check box. Fill in the
new fields.

Connection URL

URL that includes
'https', for example, https://
us.api.insight.rapid7.com

Host

Rapid7 domain part of the URL
without the 'https'. An example
might be
us.api.insight.rapid7.co
m.

Protocol
https

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

b. Right-click in the gray header titled HTTP(s) Connection and
select Save.

c. Select Mark as complete followed by Continue.
The Test Connection page is displayed.

7. Test the connection.

a. Select the Test Connection link under Related Links.
If the connection is successful, 200 is displayed in the Status Code
field and a message is displayed. If your connection test fails,
review the Message and Suggestion fields for how to proceed.

b. Right-click in the gray header titled Service Graph Connections
and select Save.

c. Select Mark as complete followed by Continue.
The steps for Add Multiple Instances is displayed. This step is
optional and you might prefer to wait after you confirm you can
import data before setting up multiple instances.

8. To configure the scheduled job, navigate back to the Guided Setup
page and select Set up scheduled import jobs.

a. Follow the steps listed at the top of the page to switch the
application scope with the application picker to open, edit, and
save the record.
You must select the Active check box to activate the scheduled
job.

b. Select a record.

c. Fill in the fields.

Field
Value

Name
Unique Name for scheduled
job.

Application
Read-only: Service Graph
Connector for Rapid7.

Data source
Data source used.

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

Field
Value

Run

How often you want the job
to run. If you want to run a
test import prior to scheduling
it, you might prefer to select
Once.

Run as

Run the scheduled job with
the credentials of another
specified user.

Time
When you want the job to run.

Active
Select the check box to
activate the job.

Conditional
Specific conditions under
which this job is run.

Use connection

Leave this check box
deactivated for the first run.
Specifies another connection
and credentials for this job.

Concurrent import

Leave check box activated.
Splits data into multiple imports
sets. See the field message for
more information.

Partition Method
Leave as Custom size.

Partition size

15,000. Leave this value for
the import set size for early
scheduling.

Execute pre-import script

Leave check box activated.
Specifies a script to run before
the import is performed.

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

Field
Value

Execute post-import script

Leave check box activated.
Specifies a script to run after
the import is performed.

d. (Optional) Select Execute now to run the job.
If you do not choose to run the job on-demand, the next job runs
according to the schedule you set.

e. Right-click in the gray header titled Scheduled Data Imports and
select Save.

f. Select Mark as complete followed by Continue.

9. (Optional) Return to Guided setup and add multiple instances.
When indicated, follow the steps listed at the top of the page to
switch the application scope with the application picker to open,
edit, and save the record.

10. Select Update Data Sources.

a. On the Update Data Source Access page, select Data Source.

b. On the page that is displayed, select the Application Access tab.

c. Review the access settings and update as needed.

d. Right-click in the gray header titled Table and select Save.

e. Select Mark as complete followed by Continue.

f. Select Schedule Update Schedule Data Import.

g. Select the Application Access tab to view the permission settings.

h. When you are satisfied with the settings, right-click in the gray
header titled Tables and select Save.

i. Select Mark as complete followed by Continue.

j. Follow the steps listed at the top of the page to switch the
application scope with the application picker to open, edit, and
save the record.

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

k. On the Add Another Connection page, select the Click here link.
The Workflow Studio connection page is displayed and you can
create a new connection.

l. From this page, select Add Connection.

m. Fill in the fields with your connection information.

Field
Description

Rapid7 Connection name
Unique name for your
connection.

Rapid7 Connection URL
Connection URL.

API Key
Rapid7 API key.

n. Select Create Connection.
Your connections are displayed on the Rapid7 page.

o. Select Mark as complete followed by Continue.
The Test New Connections page is displayed. Locate your new
connection and note the status is 'Pending'.

p. Scroll and select the Test Connection link.
If the connection is successful, 200 is displayed in the Status Code
field and a message is displayed. If your connection test fails,
review the Message and Suggestion fields for how to proceed.

q. Right-click in the gray header titled Service Graph Connections
and select Save.

r. Select Mark as complete followed by Continue.
The Configure the scheduled jobs page is displayed.

s. Repeat the steps listed previously in step 8.

t. On the Service Graph Connector for Rapid7 page for Guided
Setup, select Complete to finish the configuration.

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

## CMDB classes targeted in the Service Graph
## Connector for Rapid7

When you complete setting up the connection, you can configure the
integration to periodically pull data. The data is saved in tables that
extend from the Configuration item [cmdb_ci] table.

Hardware [cmdb_ci_hardware]

The following attributes in the Hardware [cmdb_ci_hardware] table are
populated by collected data.

Attribute label
Attribute name

Name
name

Correlation ID
correlation_id

MAC Address
mac_address

Install Status
install_status

Operational Status
operational_status

IP Address [cmdb_ci_ip_address]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data.

Attribute label
Attribute name

Name
name

IP Address
ip_address

Owned By Configuration Item
owned_by_cmdb_ci

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

SGC Rapid7 Asset [sn_sec_sgc_rapid7_sgc_rapid7_asset]

The following attributes in the SGC Rapid7 Asset
[sn_sec_sgc_rapid7_sgc_rapid7_asset] table are populated by collected
data.

Attribute label
Attribute name

Assessed for policies
assessed_for_policies

Assessed for vulnerabilities
assessed_for_vulnerabilities

Configuration item
configuration_item

Credential assessments
credential_assessments

Critical vulnerabilities
critical_vulnerabilities

Exploits
exploits

Last assessed for vulnerabilities
last_assessed_for_vulnerabilities

Last scan end
last_scan_end

Last scan start
last_scan_start

Malware kits
malware_kits

Moderate vulnerabilities
moderate_vulnerabilities

New
new

OS architecture
os_architecture

OS description
os_description

OS family
os_family

OS name
os_name

OS system name
os_system_name

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

Attribute label
Attribute name

OS type
os_type

OS vendor
os_vendor

OS version
os_version

Remediated
remediated

Risk score
risk_score

Same
same

Severe vulnerabilities
severe_vulnerabilities

Tags
tags

Total vulnerabilities
total_vulnerabilities

Type
type

Unique identifiers
unique_identifiers

Configuration item
configuration_item

Relationships created for Hardware

Parent class
Relationship type
Child class

Hardware
[cmdb_ci_hardware]
Owns::Owned by
IP Address
[cmdb_ci_ip_address]

Hardware
[cmdb_ci_hardware]
Reference

SGC Rapid7 Asset
[sn_sec_sgc_rapid7_sg
c_rapid7_asset]

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

Relationships created for IP Address

Parent class
Relationship type
Child class

IP Address
[cmdb_ci_ip_address]
Reference
Hardware
[cmdb_ci_hardware]

Relationships created by SGC Rapid7 Asset

Parent class
Relationship type
Child class

SGC Rapid7 Asset
[sn_sec_sgc_rapid7_sg
c_rapid7_asset]

Reference
Hardware
[cmdb_ci_hardware]

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

14

Zurich ServiceNow AI Platform Capabilities

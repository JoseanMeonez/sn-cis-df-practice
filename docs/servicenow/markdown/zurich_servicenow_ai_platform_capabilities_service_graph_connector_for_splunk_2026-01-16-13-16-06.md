# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_splunk_2026-01-16-13-16-06

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_splunk_2026-01-16-13-16-06.pdf*

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

## Service Graph Connector for Splunk

The Service Graph Connector for Splunk pulls in asset inventory
data (hardware and software) from the Splunk database into the
Configuration Management Database (CMDB) application in your
ServiceNow AI Platform® instance.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported versions

Supported versions:

• Xanadu

• Washingtondc

• Vancouver

Use cases

By default, the Service Graph Connector for Splunk pulls the following
basic forwarding details:

• Forwarder's version

• Forwarder's type

• Forwarder's last check-in time

• OS

• Host

• Host IP address

With the Service Graph Connector for Splunk add-on, you have the
option to import extended data for your Windows and Linux assets

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

with the Service Graph Connector for Splunk that includes the following
details:

• MAC address

• Operating system details

• Asset name

• Software details

• File system

• Last logon date

• Open ports

This data is stored in the Configuration Management Database (CMDB)
and Splunk Asset Details extension attributes custom tables. To import
these extended asset details, the add-on is required. See Install the add-
on for the Service Graph Connector for Splunk.

Guided setup

The guided setup for the Service Graph Connector for Splunk provides
an organized sequence of tasks to configure the integration on your
instance. To access the guided setup, see the section titled Configure the
Service Graph Connector for Splunk.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration, or
a specific integration run. For more details about monitoring integrations
in the CMDB Integrations Dashboard, see Using the CMDB Integrations
Dashboard.

## Configure the Service Graph Connector for Splunk

Configure your connections, set up scheduled imports, verify successful
connections and optionally add multiple instances in the Guided Setup.

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

• Optional: Only required for event ingestion. Observability Commons
for CMDB (sn_observability). If used, this app must be installed prior
to installing the connector for Event Management to work. For more
information, see Observability Commons for CMDB on the ServiceNow
Store.

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > Splunk > Setup in the
navigation panel in your instance.

2. On the Welcome to Guided Setup Home page, select Continue.

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

3. On the Experience page that is displayed, select Best Experience
followed by Continue.
On the Service Graph Connector for Splunk page, there are three
tasks displayed:

• Configure the connection

• Add multiple instances

• Set up scheduled import jobs

4. Select Configure the connection to expand it.
There are three tasks:

• Configure Splunk authentication credentials

• Configure Splunk HTTP Connection

• Test Connection

5. Select Configure Splunk authentication credentials and fill in the
fields.

a. Enter a name for the credentials, for example SG-Splunk
Credentials.

b. Verify the Active check box is selected.

c. Enter your User name and Password for your Splunk instance.

d. Leave the other field values in their current settings.

e. Right-click in the gray header titled Basic Auth Credentials and
select Save.

f. Select Mark as complete followed by Continue.
The Configure Splunk HTTP Connection page is displayed.

6. Configure the Splunk HTTP connection.

a. Fill in the fields.

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
Value

Name
Connection name, SG-Splunk
Connection, for example.

Active
Selected.

Credential

Credentials to use for the
connection. Select one from
the list.

Domain
global.

Connection alias

Select one from the list.
sn_sec_sgc_splunk.SGSplunk,
for example

URL builder
Select the check box. Fill in the
new fields.

Host

Splunk domain part of the URL
without the 'https'. An example
might be splunk3.com or an
IP address.

Override default port
The Splunk instance port,8089,
for example.

Protocol
https.

(Optional) Use MID server

Select the check box for a
dedicated MID Server for the
connection, if available.

a. Select Specific MID Server
from the MID Selection
drop down list.

b. Select a MID Server from
the list.

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

Note:   A MID
Server is required for on-
premise connections if the
connection is not publicly
accessible.

b. Right-click in the gray header titled HTTP(s) Connection and
select Save.

c. Select Mark as complete followed by Continue.
The Test Connection page is displayed.

d. (Optional) Set the flag for the is the servicenow addon installed
(is_snow_addon_installed).
By default, the property on the Service Graph Connection
Properties tab is set to false.

Option
Description

false

The default query is set
to extract only essential
information about the
forwarder that includes the
host name and the operating
system.

true

The query offers more
information about the
forwarder along with extensive
asset details via the
ServiceNow add-on.

This data is imported only if
the add-on is installed on the
Splunk instance.

7. Test the connection.

a. Select the Test Connection link under Related Links.

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

If the connection is successful, 201 is displayed in the Status Code
field and a message is displayed after a few moments. If your
connection test fails, review the Message and Suggestion fields
for how to proceed.

b. After a successful test, right-click in the gray header titled Service
Graph Connections and select Save.

c. Select Mark as complete followed by Continue.
The steps for Add Multiple Instances is displayed. To add multiple
instances, proceed to step 9. This step is optional and you might
prefer to wait after you confirm you can import data before
setting up multiple instances. To set the import schedule, follow
the steps below.

8. To configure the scheduled job, select Set up scheduled import jobs
from the drop down list under Add Multiple Instances in the header.

a. On the Configure the scheduled jobs page, select a record
under Scheduled Data Imports.

b. Select the frequency from the list for the Run field.
If you want to run a test import prior to scheduling it, you might
prefer to select Once.

c. Select the Active box to activate the scheduled job.

d. (Optional) Edit the fields as required.

You might prefer to leave these fields in their default settings for
the first few runs to confirm data imports.

Field
Value

Name
Unique Name for scheduled
job.

Application
Read-only: Service Graph
Connector for Splunk

Data source
Data source used.

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

Field
Value

Run as

Run the scheduled job with
the credentials of another
specified user.

Time
When you want the job to run.

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

Execute post-import script

Leave check box activated.
Specifies a script to run after
the import is performed.

e. (Optional) Select Execute now to run the job.
If you do not choose to run the job on-demand, the next job runs
according to the schedule you set.

f. Right-click in the gray header titled Scheduled Data Import and
select Save.

g. Select Mark as complete followed by Continue.

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

The main task page is displayed.

9. (Optional) To add multiple instances, select Update Data Sources.

When indicated, follow the steps listed at the top of the page to
switch the application scope with the application picker to open,
edit, and save the record.

a. On the Update Data Source Access page, select Data Source.

b. On the page that is displayed, select the Application Access tab.

c. Review the access settings and update as needed.

d. Right-click in the gray header titled Table and select Save.

e. Select Mark as complete followed by Continue.

f. On the Update Schedule Data Import record, select Schedule
Data Import to open it.

g. Select the Application Access tab to view the permission settings.

h. When you are satisfied with the settings, right-click in the gray
header titled Tables and select Save.

i. Select Mark as complete followed by Continue.

j. Follow the steps listed at the top of the page to switch the
application scope with the application picker to open, edit, and
save the record.

k. On the Add Another Connection page, select the Click here link.
The Flow Designer connection page is displayed and you can
create a new connection.

l. From this page, select Add Connection.

m. Fill in the fields with your connection information.

Field
Description

Splunk Connection name
Unique name for your
connection.

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

Field
Description

Splunk Connection URL
Connection URL in https
format.

User name
Splunk user name.

Password
Splunk password.

n. Select Create Connection.
Your connections are displayed on the page.

o. On the Add Multiple Instance page, select Mark as complete
followed by Continue.
The Configure MID Server for New HTTP Connection page is
displayed.

p. Locate your new connection and select it to open the record.
The connection URL is displayed in the Connection URL field.

q. (Optional) Select the Use MID server check box to add a MID
Server.

a. Select Specific MID Server from the MID Selection drop down
list.

b. Select a MID Server from the list.

r. Right-click in the gray header titled HTTP(s) Connection and
select Save.

s. Select Mark as complete followed by Continue.
The Test New Connections page is displayed.

10. Test the new connection.

a. Scroll and select the connection you want to test.

b. Select the Test Connection link under Related Links.
If the connection is successful, 201 is displayed in the Status Code
field and a message is displayed after a few moments. If your
connection test fails, review the Message and Suggestion fields
for how to proceed.

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

c. After a successful test, right-click in the gray header titled Service
Graph Connections and select Save.

d. Select Mark as complete followed by Continue.
The Configure the scheduled jobs page is displayed

e. On the Service Graph Connector for Splunk page for Guided
Setup, select Complete to finish the configuration.

## Service Graph Connector for Splunk add-on

Import more detailed asset data with the Service Graph Connector for
Splunk with an add-on developed by ServiceNow engineering. The add-
on permits you to import data about your Windows and Linux assets.

Service Graph Connector for Splunk

The Service Graph Connector for Splunk retrieves computer and software
information from the Splunk product and imports it into the Configuration
Management Database (CMDB) in your instance. By default, the
following basic data is imported:

• Forwarder's version (agent)

• Forwarder's type (agent)

• Forwarder's last check-in time (agent)

• OS

• Host

• Host IP address

The service graph connector for Splunk is available on the ServiceNow®
Store.

The ServiceNow Add-on for Windows and Linux assets

With the Windows and Linux Assets add-on, you have the option to
import more detailed asset data with the Service Graph Connector for
Splunk that includes the following data:

• MAC address

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

• Operating system details

• Asset name

• Installed software details

• File system

• Last logon date

• Open ports

• Running processes

• Running services

This add-on is available for download into your Splunk console from
splunkbase.

Downloading and installing the add-on

Prior to installing this add-on, you must verify you have installed and
activated the following applications and add-ons:

• Service Graph Connector Splunk

• Splunk_TA_nix version 9.0.0 (Linux) or later

• Splunk_TA_windows version 8.9.0 or later add-ons available from
splunkbase.

These add-ons permit you to identify and import more specific data
related to your Linux and Windows assets with your imports with the
Splunk Service Graph Connector API.

For example, searches from these add-ons might provide you with data
you want about Windows drivers, Windows Network Adaptors, Linux
Hardware, and other OS Details.

Target workloads

In the app.manifest, individual agents on a specific machine send
information to a central hub (server) where data is collected, stored, and
managed. This central machine is where the apps are installed.

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

To adjust workloads to specify resources for a search, indexing, or other
workloads, in Splunk Web, select Settings > Workload Management >
Workload Rules.

In the Status column, select the toggle to activate or deactivate
individual workload rules.

Supported deployments

This add-on supports the following types of deployments:

• standalone

• distributed

• search head clustering

See Splunk documentation for more information about their supported
workloads.

## Install the add-on for the Service Graph Connector for
## Splunk

Install the Splunk add-on developed by ServiceNow® engineering from
splunkbase to search for Windows and Linux Assets.

Before you begin

Role required: admin or security_admin

Procedure

1. Navigate to splunkbase (splunkbase) and log in.

2. In your Splunk console, select Apps > FInd More Apps.

3. Locate the ServiceNow Add-on for Windows and Linux Assets app
and select Install.

Note:   You can upgrade from within the app.

4. Follow the prompts.

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

5. (Optional) Navigate to Settings > Searches, reports and alerts to view
when searches are scheduled.

Note:

You can change the schedules, but since the schedules run in a
specific order and require successful completion before the next
search in the list is initiated, you might prefer to leave the settings
in their defaults.

After all the searches are completed, the data is grouped from
each search into a few coalesced key-value parings (kvstores)
for import into your instance: asset details, asset process details,
asset service details, and asset software details.

6. Select App: Search and Reporting (search) > ServiceNow Add-on for
Windows and Linux Assets.
By default, search data is stored in the following key definitions:

• Asset_index_macro: Index=”internal”

• Asset_linex_Index_macro: index=”main”

• Asset_windows_index=”main”

If you are storing the search data for Linux and Windows in custom
indexes, you must update your search macros.

7. To update your search macros, navigate to Settings >
Advanced search > Search macros > Search & Reporting
(Search) > ServiceNow Add-on for Windows and Linux Assets
ServiceNow_TA_windows_linux_assets

8. On the Search macros page, update the index as required in the
Definition column.

9. (Optional) Adjust workloads to specify resources for search, indexing,
and other workloads.

a. In Splunk Web, select Settings > Workload Management >
Workload Rules.

b. In the Status column, select the toggle to activate or deactivate
individual workload rules.

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

See Service Graph Connector for Splunk add-on for more information
about target workloads and supported deployments.

## CMDB classes targeted in the Service Graph
## Connector for Splunk

When you complete setting up the connection, you can configure the
integration to periodically pull data. The data is saved in tables that
extend from the Configuration item [cmdb_ci] table.

Computer [cmdb_ci_computer]

The following attributes in the Hardware [cmdb_ci_computer] table are
populated by collected data.

Attribute label
Attribute name

Name
name

Serial Number
serial_number

Operating System
os

OS Version
os_version

CPU name
cpu_name

CPU manufacturer
cpu_manufacturer

CPU type
cpu_type

CPU speed (MHz)
cpu_speed

CPU core count
cpu_core_count

CPU count
cpu_count

Manufacturer
manufacturer

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

IP Address [cmdb_ci_ip_address]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data.

Attribute label
Attribute name

Name
name

IP Address
ip_address

Network Adapter [cmdb_ci_network_adapter]

The following attributes in the Network Adapter
[cmdb_ci_network_adapter] table are populated by collected data.

Attribute label
Attribute name

Name
name

MAC Address
mac_address

Manufacturer
manufacturer

Software [cmdb_ci_spkg]

The following attributes in the Software [cmdb_ci_spkg] table are
populated by collected data.

Attribute label
Attribute name

Name
name

Version
version

Software Instance [cmdb_software_instance]

The following attributes in the Software Instance
[cmdb_software_instance] table are populated by collected data.

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

Name
name

Product name
software

Installed On
installed_on

Software Installation [cmdb_sam_sw_install]

The following attributes in the Software Installation [cmdb_sam_sw_install]
table are populated by collected data. This table is populated only when
the Software Asset Management applications are installed.

Attribute label
Attribute name

Display Name
display_name

Version
version

Discovery Source
discovery_source

Splunk Asset Details [sn_sec_sgc_splunk_asset_details]

The following attributes in the Splunk Asset Details
[sn_sec_sgc_splunk_asset_details] table are populated by collected
data.

Attribute label
Attribute name

Configuration Item
configuration_item

Forwarder GUID
forwarder_guid

Forwarder Type
forwarder_type

Forwarder Version
forwarder_version

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

Host Name
host_name

Host Status
host_status

Host type
host_type

Last logon date
last_check_in

Model Name
model_name

OS Architecture
os_architecture

OS Build Number
os_build_number

OS Family
os_family

Relationships created for Computer

Parent class
Relationship type
Child class

Computer
[cmdb_rel_ci
Owns::Owned by
IP Address
[cmdb_ci_ip_address]

Computer
[cmdb_rel_ci
Owns::Owned by

Network Adapter
[cmdb_ci_network_ad
apter]

Computer
[cmdb_rel_ci

Contains::Contained
by

File system
[cmdb_ci_file_system]

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

20

Zurich ServiceNow AI Platform Capabilities

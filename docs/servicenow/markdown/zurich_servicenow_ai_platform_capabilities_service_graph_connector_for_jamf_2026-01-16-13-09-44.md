# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_jamf_2026-01-16-13-09-44

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_jamf_2026-01-16-13-09-44.pdf*

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

## Service Graph Connector for Jamf

Use the Service Graph Connector for Jamf to pull data from Jamf into
your ServiceNow instance.

The Service Graph Connector for Jamf pulls data from computers, disks,
networks, and software applications into the ServiceNow® Configuration
Management Database (CMDB) application.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported versions

Supported ServiceNow versions:

• Xanadu

• Yokohama

• Zurich

Use cases

The following are examples on how you can use the Service Graph
Connector for different ServiceNow® applications:

• IT Operations Management (ITOM) Visibility

• Detailed hardware and software inventory tracking for macOS
hardware and apps. The tracking can be done with or without
Software Asset Management (SAM).

• Detailed hardware and software inventory tracking for hardware and
apps for both iPhones and iPads. The tracking can be done with or
without Software Asset Management (SAM).

• Compliance tracking for mobile devices and end-user computers.

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

• Duplicate data detection on imports to improve performance of
nightly imports.

• Software Asset Management (SAM) and IT Asset Management (ITAM)

• Software package and installation tracking.

• License reclamation by detecting removed software.

• Software Usage tracking.

• IT Service Management (ITSM)

• Incidents, problems, and changes on discovered configuration items
(CI).

• Automatic ownership assignment based on top users.

Configuring a connection for the connector

You can configure a connection for the connector by using the
SGC Central view in the CMDB Workspace. The view enables you to
discover and install connectors, and then effectively manage the full life
cycle of creating, editing, monitoring, and debugging connections. To
configure the connector using SGC Central, see Configure Service Graph
Connector for Jamf using SGC Central.

Important:   Unless there are configuration issues, use the SGC
Central view in the CMDB Workspace to configure the connection
for the connector, as the guided setup method is being deprecated.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration,
or a specific integration run. For more details about monitoring Jamf
integrations in the CMDB Integrations Dashboard, see Using the CMDB
Integrations Dashboard.

Data mapping

Data from the Jamf data source is mapped and transformed into the
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

When you complete setting up the connection, you can configure the
integration to periodically pull data from Jamf.

The delta data synchronization feature is available in Jamf version 2.14
and higher. You can configure the is_delta_enabled_for_computers and
is_delta_enabled_for_mobiles connection properties for synchronizing
only delta data from a Jamf instance. See Configuring data
synchronization in Service Graph Connector for Jamf.

The following data sources are included for the Jamf application:

SG-Jamf Computers

Imports data from computers and loads the imported data in the SG-
Jamf Computers [sn_jamf_integrate_sg_jamf_computers] staging table.

SG-Jamf Lookup Mac Software Bundle Ids

Imports data from software applications installed on macOS devices and
loads the imported data in the SG-Jamf Lookup Mac Software Bundle Ids
[sn_cmdb_int_util_mac_software_bundleid_lookup] staging table.

Note:   To view the publisher information for applications installed
on macOS devices, run the SG-Jamf Lookup Mac Software Bundle
Ids data source before running the SG-Jamf Computers or SG-Jamf
Mobile Devices data sources.

SG-Jamf Mobile Devices

Imports data from mobile devices and loads the imported data in
the SG-Jamf Mobile Devices [sn_jamf_integrate_sg_jamf_mobile_devices]
staging table.

SG-Jamf Remove Computers Software

Removes the imported computer software data that were later deleted
from the source and updates the information in the SG-Jamf Remove
Computers Software [sn_jamf_integrate_jamf_remove_software] staging
table.

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

SG-Jamf Remove Mobile Software

Removes the imported mobile software data that were later deleted
from the source and updates the information in the SG-Jamf Remove
Mobile Software [sn_jamf_integrate_remove_mobile_software] staging
table.

SG-Jamf Software Usage

Imports the software usage details from the Jamf environment to track
which software data is being used infrequently, hasn't been used recently
enough, or isn't being used at all and loads the imported data in
the SG-Jamf Software Usage [sn_jamf_integrate_jamf_software_usage]
staging table. Based on the software usage information, you can add
a reclamation rule to aggregate usage records and to identify unused
software devices. See Software reclamation rules.

Note:   The SG-Jamf Software Usage data source is available
only when the Software Asset Management Professional plugin
(com.snc.samp) is activated on your ServiceNow instance. See
Request Software Asset Management.

The imported data is then inserted into the following target tables:

• CI Relationship [cmdb_rel_ci]

• Computer [cmdb_ci_computer]

• Disk [cmdb_ci_disk]

• Handheld Computing device [cmdb_ci_handheld_computing]

• IP Address [cmdb_ci_ip_address]

• Network Adapter [cmdb_ci_network_adapter]

• Printer [cmdb_ci_printer]

• Serial Number [cmdb_serial_number]

• Software Installation [cmdb_sam_sw_install] (If the SAM application is
installed.)

• Software Instance [cmdb_software_instance] (If the SAM application is
not installed.)

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

• Software [cmdb_ci_spkg] (If the SAM application is not installed.)

• Software Usage [samp_sw_usage]

Note:   For the Computer [cmdb_ci_computer] and Handheld
Computing device [cmdb_ci_handheld_computing] data sources,
if you created multiple Jamf instances and want to know where
the CIs originated from, you can identify the origins from the Key
and Value columns. Additionally, you can view the Jamf Extension
Attributes [sn_jamf_integrate_extension_attribute] and Most recent
discovery [last_discovered] fields in both data sources. If you want
to configure multiple instances, follow the steps in Configure Service
Graph Connector for Jamf using the guided setup in step 4.

For more information on where data is saved when pulling data from
a Jamf application, see CMDB classes targeted in Service Graph
Connector for Jamf.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

Related concepts

• Service Graph Connectors

## Configure Service Graph Connector for Jamf using
## SGC Central

Use the playbook available with the SGC Central application to set up
the Service Graph Connector for Jamf for pulling in Jamf data into the
CMDB.

Before you begin

Install Service Graph Connector for Jamf version 2.13.0 or later from the
ServiceNow Store. For ServiceNow Store installation steps, see Install a
ServiceNow Store application.
When using client credentials for authentication, obtain the OAuth
credentials from your Jamf administrator. Make a note of the following
details:

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

• Application (client) ID

• Client Secret

If using Client Credentials authentication in Jamf Pro, you need to use the
API Roles and Clients functionality. For more details, refer to the API Roles
and Clients section in the Jamf documentation. When creating a new
API client in the Jamf environment, the Access token lifetime field on the
form for creating a client enables setting how long the token remains
valid. The default is 60 seconds, but due to ServiceNow AI Platform
limitations, the value must be set to more than 60 seconds. Setting the
token lifetime to 3600 seconds (1 hour) helps prevent potential issues.

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

4. On the Create connection window, select the Jamf connector type
and then select Create connection.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

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

Note:   This step is required only during the first-time setup. See
Perform initial setup tasks when creating a connection in SGC
Central.

6. Determine the type of authentication for the Jamf connection.

a. In the Setup stage of the playbook, select the Select alias
template activity.
If needed, expand the Setup stage to select an activity.

b. Select an alias template for the connection.

• SG-Jamf OAuth Connection: Select when using OAuth or
client credentials for authentication.

• SG-Jamf Basic Connection: Select when using Basic
authentication or Bearer token.

c. Select Continue.

7. Enter connection details and test the API connection for importing
data.

a. In the Setup stage of the playbook, select the Configure and test
connection activity.

b. On the form, fill in the fields.

• When the SG-Jamf OAuth Connection template is selected,
fill in the details as shown in the following table.

OAuth connection information

Field
Description

Connection Name
Name to identify the Jamf
connection record.

Connection URL
Base URL to connect to the
Jamf API.

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
Description

Note:   This field is
automatically set to the
URL to connect to the
application. Leave the
field value as is.

OAuth Client ID

Application (client) ID of
your Jamf client application
as noted in the Before you
begin section.

Note:   Verify that
the Jamf client has
read privileges for the
Computers and Mobile
Devices categories in
Jamf.

OAuth Client Secret

Client Secret of your Jamf
client application as noted
in the Before you begin
section.

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

• When the SG-Jamf Basic Connection template is selected, fill
in the details as shown in the following table.

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

Basic connection information

Field
Description

Connection Name
Name to identify the Jamf
connection record.

Connection Host

Target host value used by
the connection.

Note:   Update the
Host field with your
Jamf base URL or IP
address. For example,
demojamfhost.com or
127.0.0.1.

User Name

User name that is used
to authenticate the HTTP
or HTTPS request when this
Basic authentication profile is
enabled.

Note:   Verify that
the Jamf user has
read privileges for the
Computers and Mobile
Devices categories in
Jamf.

Password

Password that is used to
authenticate the HTTP or
HTTPS request when this
Basic authentication profile is
enabled.

Use MID Server

Option to use a MID Server.

Note:   Use of a MID
Server is optional.

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

Mid Selection

Name of the MID Server used
by the connector.

This field appears only when
the Use MID Server check
box is selected.

c. Select Create and test connection.

d. Once the connection test is complete, select Continue.

8. (Optional) Set configuration properties for the connection to access
Jamf resources.

Note:   To skip this step, select Continue for the Set configuration
properties activity. If you skip this step, the default values of the
properties are considered.

a. In the Setup stage of the playbook, select the Set configuration
properties activity.

b. Set the fields for configuration properties as described in the
following table.

Configuration properties

Field
Description

Import managed application
records only

Option to limit the import to
managed application records
only.

Note:   If the Import
managed application
records only check box
is cleared, the default
behavior is to import all
application records.

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

Use JAMF Pro API

Option to enable the use of
the Jamf Pro API for querying
computer records.

Note:   When the Use
JAMF Pro API check box
is selected, the connector
uses the Jamf Pro API,
which offers pagination
of response data and
improved performance
over the Jamf Classic API.

c. Select Continue.

9. Configure the import schedule to import data at regular intervals.

a. In the Setup stage of the playbook, select the Configure import
schedule activity.

b. Select Configure import schedule.

c. Select the Active check box, and then fill in the run schedule and
time details.

For more information, see Schedule a data import.

d. Select Save.

e. Repeat steps from 9.b to 9.d for each job displayed on the page.

f. Select Continue.

10. In the Setup stage of the playbook, select the Confirm connection
creation activity to verify whether the connection was created.

What to do next

Select View all connections to review the connection details. The
configured connection appears in the Installed connections list.

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

Related concepts

• Service Graph Connector for Jamf

• Accessing the connection details of Service Graph Connector for Jamf

Related reference

• CMDB classes targeted in Service Graph Connector for Jamf

## Configure Service Graph Connector for Jamf using the
## guided setup

Set up authentication credentials and scheduled jobs to import Jamf
data into your Configuration Management Database (CMDB).

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

• ITOM Licensing plugin (com.snc.itom.license). An unlicensed plugin that
contains computation logic for SU consumption as necessary. For more
information, see Request Discovery.

• Jamf Classic API version 10.x.

When using client credentials for authentication, obtain the OAuth
credentials from your Jamf administrator. Make a note of the following
details:

• Application (client) ID

• Client Secret

If using Client Credentials authentication in Jamf Pro, you need to utilize
the API Roles and Clients functionality. For more details, refer to the API
Roles and Clients section in the Jamf documentation. When creating a
new API client in the Jamf environment, the Access token lifetime field on
the form for creating a client enables setting how long the token remains
valid. The default is 60 seconds, but due to ServiceNow AI Platform
limitations, the value must be set to more than 60 seconds. Setting the
token lifetime to 3600 seconds (1 hour) helps prevent potential issues.

Role required: SGC-Admin (sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to run background scripts and
to provide table-level access to the SGC-Admin user.

Procedure

1. Navigate to All > Service Graph Connectors > Jamf > Setup.

2. On the Getting Started page, select Get started.

3. Set configuration properties.

a. On the Service Graph Connector for Jamf page, in the Set
configuration properties section, select Configure JSON data size
limit.

b. For the Configure JSON data size limit task, select Configure.

c. Select the Global application scope from the application picker.

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

d. Set the com.glide.transform.json.max-partial-length
system property value.

• To create a system property, select New and enter
com.glide.transform.json.max-partial-length as the
name and 65536 as the value of the property.

• If the com.glide.transform.json.max-partial-length property
already exists, verify that its value is set to 65536.

e. Set the Configure JSON data size limit task to complete by
selecting Mark as Complete.

4. Configure the authentication credentials and HTTP connection for
sending requests to the Jamf API.

a. Enter Basic or Bearer token authentication details.

Important:   Skip this step if using Client credentials for
authentication, and instead go to step 4.c.

a. For the Configure Jamf authentication: Basic or Bearer token
authentication task, select Configure.

b. On the form, fill in the fields.

Basic Auth Credentials form

Field
Description

Name

Descriptive name of
this authentication
configuration.

User name

User name that is used
to authenticate the HTTP
or HTTPS request when this
Basic authentication profile is
enabled.

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

Note:   Verify that
the Jamf user has
read privileges for the
Computers and Mobile
Devices categories in
Jamf.

Password

Password that is used to
authenticate the HTTP or
HTTPS request when this
Basic authentication profile is
enabled.

c. Select Update.

d. Set the Configure Jamf authentication: Basic or Bearer
token authentication task to complete by selecting Mark as
Complete.

b. Configure the Jamf HTTP connection.

Important:   Skip this step if using Client credentials for
authentication, and instead go to step 4.c.

a. For the Configure Jamf HTTP connection task, select
Configure.

b. On the form, fill in the fields.

HTTP(s) Connection form

Field
Description

Name
Name of the connection.

Credential
Credential value used by this
connection.

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

Field
Description

Connection alias

Connection value that is
used to refer to the
connection.

Active
Option to activate the HTTP
connection.

Domain
Domain that contains the
connection.

URL builder
Option to enable the system
to build the connection URL.

Connection URL

Connection URL for the
connection. You can either
manually enter a URL or use
the URL builder to build the
connection string.

Note:   You can't modify
the Connection URL field
if you select the URL
builder check box.

Mutual authentication

Option to set the connection
with mutual authentication.
This field appears only when
the URL builder check box is
selected.

Protocol

Underlying protocol used by
the connection. This field
appears only when the
URL builder check box is
selected.

Note:   Update the
Protocol field if you
are using anything other
than https.

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

Field
Description

Use MID server

Option to select a MID
Server that sends this HTTP
connection. Using a MID
Server is not compatible with
mutual authentication.

Connection timeout

Number of milliseconds
the system waits for a
successful host connection.
If a successful connection
doesn't occur during this
time, the connection request
times out. Leave this field
empty to use the system
default connection timeout
value.

Host

Target host value used by
the connection. This field
appears only when the
URL builder check box is
selected.

Note:   Update the
Host field with your
Jamf base URL or IP
address. For example,
demojamfhost.com or
127.0.0.1.

Override default port

Target value port that is
used by the connection. This
field appears only when the
URL builder check box is
selected.

Base path

Base path for HTTPS
connection. This field
appears only when the
URL builder check box is
selected.

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

Field
Description

Note:   To use the Jamf
Pro API, the Base path
field must be empty.
Therefore, clear any
value in the Base path
field.

c. Select Update.

d. Set the Configure Jamf HTTP connection task to complete by
selecting Mark as Complete.

c. Configure the client authentication credentials.

Important:   Skip this step if using basic token for
authentication, and instead go to step 4.a.

a. For the Configure Jamf authentication: Client credentials
task, select Configure.

b. Select Edit for the SG-Jamf OAuth Connection, the default
connection.

c. In the Connection Information section of the Edit Connection
window, fill in the fields.

Connection Information

Field
Description

Connection Name

Name to identify the Jamf
connection record.

SG-Jamf OAuth
Connection is the default
credential alias name and is
read-only.

Connection URL
Base URL to connect to the
Jamf API.

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

Field
Description

Note:   This field is
automatically set to the
URL to connect to the
application. Leave the
field value as is.

d. (Optional) If a MID Server is required for the Jamf server
connection, select the Use MID Server check box. Then,
select the MID Server-related fields accordingly.

e. In the Credential Information section of the Edit Connection
window, fill in the fields.

Credential Information

Field
Description

OAuth Client ID

Application (client) ID of
your Jamf client application
as noted in the Before you
begin section.

Note:   Verify that
the Jamf client has
read privileges for the
Computers and Mobile
Devices categories in
Jamf.

OAuth Client Secret

Client Secret of your Jamf
client application as noted
in the Before you begin
section.

d. Test the connection.

a. For the Test connection task, select Configure.

b. Review the properties in the Service Graph Connection
Properties related list.

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

Note:   The properties in the Service Graph Connection
Properties related list of the connection record are
modifiable. Be sure to complete the guided setup,
review the property descriptions, and follow the
instructions carefully before making any changes to
them.

• For Basic authentication, set the auth_type property
value to basic (applicable only for Jamf versions
lower than 10.35. Note that Jamf no longer supports
Basic authentication, and it will be disabled for all
instances starting with Jamf version 11.5).

• For Bearer token authentication, set the auth_type
property value to bearer (available in Jamf version
10.35 or higher).

• For Client credentials (OAuth 2.0) authentication, set
the auth_type property value to oauth (available in
Jamf version 10.49 or higher).

• If no authentication type is selected, the connector
defaults to Bearer token authentication.

c. Test the connection by selecting the Test Load 20 Records
related link.

Testing the connection might take a few moments. The page
is refreshed to show the test results.

Note:   The connection is successful if the HTTP Status
is 200. If there is anything displayed in the Error Code
and Error Message fields, then the connection failed and
further troubleshooting is required. Do not select Load All
Records during this setup.

d. Set the Test the connection task to complete by selecting
Mark as Complete.

5. (Optional) Add multiple instances.

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

Note:   If you don't need to add multiple instances, you can skip
this step.

a. In the Add Multiple Instances section of the Service Graph
Connector for Jamf page, select Get Started.

b. Enable creating data sources for the new Jamf connection.

a. Ensure that you have edit permissions for the Datasource
[sys_data_source] table.

b. For the Update data source Access task, select Configure.

c. To edit the record, select the Global application scope from
the application picker.

d. In the Application Access related list of the Data Source form
that opens in a new tab, select the Can create, Can update,
and Can delete check boxes.

e. Select Update.

f. Select the back icon (<) to return to the guided setup page.

g. From the application picker, select the Service Graph
Connector for Jamf application scope.

h. Set the Update data source Access task to complete by
selecting Mark as Complete

c. Enable creating a scheduled data import job for the new Jamf
connection.

a. Ensure that you have edit permissions for the Scheduled data
import [scheduled_import_set] table.

b. For the Update scheduled data import access task, select
Configure.

c. To edit the record, select the Global application scope from
the application picker.

d. In the Application Access related list of the Scheduled Data
Import form that opens in a new tab, select the Can create,
Can update, and Can delete check boxes.

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

e. Select Update.

f. Select the back icon (<) to return to the guided setup page.

g. From the application picker, select the Service Graph
Connector for Jamf application scope.

h. Set the Update scheduled data import access task to
complete by selecting Mark as Complete.

d. Select authentication type for new connection.

Note:   From the application picker, select the Service Graph
Connector for Jamf application scope.

a. For the Select authentication type for new connection task,
select Configure.

b. Select sn_jamf_integrate.auth_type from the Name column.

c. Set the sn_jamf_integrate.auth_type property to one of the
following values:

• basic: Basic authentication that uses a user name and
password.

• bearer: Bearer token authentication that uses a user
name and password to retrieve a bearer token.

• oauth: Client credentials authentication that uses a
client ID and client secret to authenticate via OAuth 2.0.

d. Navigate back to the guided setup.

e. Set the Select authentication type for new connection task
to complete by selecting Mark as Complete.

e. Add another connection.

Note:   Verify that the Service Graph Connector for Jamf
application scope is selected in the application picker.

a. For the Add another connection task, select Configure.

b. In the Workflow Studio, select Add Connection.

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

c. On the form, based on the authentication type fill in the
fields.

Note:

• For Basic or Bearer token authentication-based
connection, don't include https:// in the
Connection Host field. Example connection host
value: test.jamfcloud.com.

• For Client credentials authentication-based
connection, include https:// in the Connection
URL field. Example connection URL value: https://
test.jamfcloud.com.

d. Depending on the authentication type, select the button to
create the connection.

e. Navigate back to the guided setup.

f. Set the Add another connection task to complete by
selecting Mark as Complete.

f. When using the Jamf Pro API, the Jamf Pro 10.35 or higher version,
or both, specify the Jamf Pro version and API.

a. For the Select JAMF Pro version and API task, select
Configure.

b. In the Use JAMF Pro API column, for the connection you
created, modify the value from false to true to use the Jamf
Pro API instead of the Classic API.

c. Update the Jamf Pro 10.35 or higher column value to true
when using the Jamf Pro 10.35 or higher version.

Note:   With the Jamf Pro 10.35 or higher column value
set to true, the Bearer Token authentication is used to
authenticate the Jamf API. Else, the basic authentication
is used.

d. Set the Select JAMF Pro version and API task to complete by
selecting Mark as Complete.

g. Test the new connections.

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

a. For the Test new connections task, select Configure.

b. Select the name of the connection you want to test.

c. To validate the data source configuration, select Test Load 20
Records.

Note:   If any of the tests have an error code or
message or error sign, the connection failed and further
troubleshooting is required.

d. Set the Test new connections task to complete by selecting
Mark as Complete.

6. Set up the scheduled import jobs.

a. For the Configure scheduled jobs task in the Set up scheduled
import jobs section, select Configure.

b. Select the scheduled job that you want to activate.

Note:   By default, the SG-Jamf Mobile Devices scheduled
job is automatically set as Active and runs the SG-Jamf
Computer scheduled job as a parent.

c. On the Scheduled Data Import form, verify the field values for the
scheduled job and select the Active check box to activate the
scheduled job.

For more information, see Schedule a data import.

d. Select Update.

e. Repeat the steps 6.b to 6.d for each scheduled job for data
import.

f. Set the Configure scheduled jobs task to complete by selecting
Mark as Complete in the guided setup.

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

## CMDB classes targeted in Service Graph Connector for
## Jamf

When you complete setting up the connection, you can configure the
integration to periodically pull data from Jamf. The data is saved in tables
that extend from the Configuration item [cmdb_ci] table.

Computer [cmdb_ci_computer]

The following attributes in the Computer [cmdb_ci_computer] table are
populated by collected data:

Attribute label
Attribute name

MAC Address
mac_address

Name
name

Serial number
serial_number

CPU core count
cpu_core_count

CPU count
cpu_count

CPU name
cpu_name

CPU speed (MHz)
cpu_speed

CPU type
cpu_type

DNS Domain
dns_domain

Fully qualified domain name
fqdn

Most recent discovery
last_discovered

OS Service Pack
os_service_pack

OS Version
os_version

RAM (MB)
ram

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

Attribute label
Attribute name

Model ID
model_id

Assigned to
assigned_to

Manufacturer
manufacturer

Operating System
os

Relationships created for Computer

Parent class
Relationship type
Child class

Computer
[cmdb_ci_computer]
Owns::Owned by

Network Adapter
[cmdb_ci_network_ad
apter]

Computer
[cmdb_ci_computer]
Owns::Owned by
IP Address
[cmdb_ci_ip_address]

Computer
[cmdb_ci_computer]

Contains::Contained
by
Disk [cmdb_ci_disk]

Computer
[cmdb_ci_computer]
Reference
Key Value
[cmdb_key_value]

Computer
[cmdb_ci_computer]
Reference

SG-Jamf Extension
Attributes
[sn_jamf_integrate_ext
ension_attributes]

Disk [cmdb_ci_disk]

The following attributes in the Disk [cmdb_ci_disk] table are populated by
collected data:

Attribute label
Attribute name

Manufacturer
manufacturer

Computer
computer

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

Attribute label
Attribute name

Model ID
model_id

Name
name

Serial number
serial_number

Most recent discovery
last_discovered

Size bytes
size_bytes

Relationship created for Disk

Parent class
Relationship type
Child class

Disk [cmdb_ci_disk]
Reference
Computer
[cmdb_ci_computer]

Handheld Computing Device [cmdb_ci_handheld_computing]

The following attributes in the Handheld Computing Device
[cmdb_ci_handheld_computing] table are populated by collected
data:

Attribute label
Attribute name

Description
short_description

Carrier
carrier

Name
name

Serial number
serial_number

Disk spae (GB)
disk_space

ICCID
iccid

IMEI
imei

MEID
meid

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

Attribute label
Attribute name

Operating System
os

OS Version
os_version

Phone Number
phone_number

Root Access
root_access

Manufacturer
manufacturer

Assigned to
assigned_to

Model ID
model_id

Relationships created for Handheld Computing Device

Parent class
Relationship type
Child class

Handheld Computing
Device
[cmdb_ci_handheld_c
omputing]

Owns::Owned by

Network Adapter
[cmdb_ci_network_ad
apter]

Handheld Computing
Device
[cmdb_ci_handheld_c
omputing]

Owns::Owned by
IP Address
[cmdb_ci_ip_address]

Handheld Computing
Device
[cmdb_ci_handheld_c
omputing]

Reference
Key Value
[cmdb_key_value]

Handheld Computing
Device
[cmdb_ci_handheld_c
omputing]

Reference

SG-Jamf Extension
Attributes
[sn_jamf_integrate_ext
ension_attributes]

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

IP Address [cmdb_ci_ip_address]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data:

Attribute label
Attribute name

IP Address
ip_address

IP version
ip_version

Most recent discovery
last_discovered

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

Key Value [cmdb_key_value]

The following attributes in the Key Value [cmdb_key_value] table are
populated by collected data:

Attribute label
Attribute name

Key
key

Value
value

Network Adapter [cmdb_ci_network_adapter]

The following attributes in the Network Adapter
[cmdb_ci_network_adapter] table are populated by collected data:

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

Attribute label
Attribute name

MAC Address
mac_address

Name
name

Discovery Source
discovery_source

Most recent discovery
last_discovered

Relationships created for Network Adapter

Parent class
Relationship type
Child class

Network Adapter
[cmdb_ci_network_ad
apter]

Reference
Computer
[cmdb_ci_computer]

Network Adapter
[cmdb_ci_network_ad
apter]

Reference

Handheld Computing
Device
[cmdb_ci_handheld_c
omputing]

Printer [cmdb_ci_printer]

The following attributes in the Printer [cmdb_ci_printer] table are
populated by collected data:

Attribute label
Attribute name

Name
name

IP Address
ip_address

Most recent discovery
last_discovered

Serial Number [cmdb_serial_number]

The following attributes in the Serial Number [cmdb_serial_number] table
are populated by collected data:

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

Attribute label
Attribute name

Serial Number
serial_number

Serial Number Type
serial_number_type

Valid
valid

Relationships created for Serial Number

Parent class
Relationship type
Child class

Serial Number
[cmdb_serial_number]
Reference
Computer
[cmdb_ci_computer]

Serial Number
[cmdb_serial_number]
Reference

Handheld Computing
Device
[cmdb_ci_handheld_c
omputing]

SG-Jamf Extension Attributes
[sn_jamf_integrate_extension_attributes]

The following attributes in the SG-Jamf Extension Attributes
[sn_jamf_integrate_extension_attributes] table are populated by
collected data:

Attribute label
Attribute name

Id
id

Extension Attributes
extension_attributes

Software [cmdb_ci_spkg]

The following attributes in the Software [cmdb_ci_spkg] table are
populated by collected data Software Asset Management (SAM)
application isn't installed:

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

Version
version

Manufacturer
manufacturer

Key
key

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

Software Installation [cmdb_sam_sw_install]

The following attributes in the Software Installation [cmdb_sam_sw_install]
table are populated by collected data when the SAM application is
installed:

Attribute label
Attribute name

Discovery source
discovery_source

Display name
display_name

Installed on
installed_on

Last scanned
last_scanned

Publisher
publisher

Version
version

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

Relationship created for Software Installation

Parent class
Relationship type
Child class

Software Installation
[cmdb_sam_sw_install]
Reference
Server
[cmdb_ci_server]

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

Relationships created for Software Instance

Parent class
Relationship type
Child class

Software Instance
[cmdb_software_insta
nce]

Reference

Handheld Computing
Device
[cmdb_ci_handheld_c
omputing]

Software Instance
[cmdb_software_insta
nce]

Reference
Computer
[cmdb_ci_computer]

## Accessing the connection details of Service Graph
## Connector for Jamf

You can access the connection details of the Service Graph Connector
for Jamf in a single view using the common connection framework (CCF)
included within the Integration Commons for CMDB (sn_cmdb_int_util)
store app.

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

With the CCF, you can access all the connections used by the
Service Graph Connector for Jamf. The connection details include the
connection alias, connection properties, data sources, and scheduled
data imports associated with a connection. You can also test the
connection. For more information, see Accessing the connection details
of Service Graph Connectors.

Access the details of a Jamf connection

Access the details of a Jamf connection configured for the Service
Graph Connector for Jamf.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > Jamf > Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

3. On the Service Graph Connections page, view the connection
details such as the connection name, alias, and data sources.

4. Select a related list to view further details of the connection.

5. (Optional) Select the Test Connection related link to test the
connection.

## Configuring data synchronization in Service Graph
## Connector for Jamf

You can configure the connection properties for synchronizing only delta
data from a Jamf instance.

The delta data synchronization feature is available in Jamf version 2.14
and higher. The connector provides the ability to import only delta data
from a Jamf instance. With delta synchronization enabled, the importing
process of Jamf data is quicker because the connector imports only
the changes in Jamf data. The Last success import time field of a data
source displays the timestamp of the most recent successful pull run. The

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

delta pull period is calculated by subtracting the last successful run date
and time from the current date and time that is Delta period = Current
date timestamp - Last success import date timestamp.

The application includes the is_delta_enabled_for_computers and
is_delta_enabled_for_mobiles connection properties to enable
delta synchronization for computers and mobile devices,
respectively. By default, the is_delta_enabled_for_computers and
is_delta_enabled_for_mobiles properties are set to false. To enable
delta data synchronization, set these properties to true.

Note:

• The is_delta_enabled_for_computers connection property is
available only if the use_jamf_pro_api property is set to true.

• The is_delta_enabled_for_mobiles connection property is available
only if the use_jamf_mobile_pro_api property is set to true.

See Service Graph Connector for Jamf properties.

When you want to import full data from your Jamf
instance, you must disable the is_delta_enabled_for_computers and
is_delta_enabled_for_mobiles properties by setting these properties to
false. See Disable delta synchronization.

Note:   When the full import of data is completed, set the
is_delta_enabled_for_computers and is_delta_enabled_for_mobiles
properties back to true to pull delta data later. If you leave the
properties set to false, full data is imported with every pull, which
takes considerable time.

Disable delta synchronization

Disable delta synchronization to import all the Jamf data.

Before you begin

Role required: admin

About this task

The delta data synchronization feature is available in Jamf version 2.14
and higher.

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

Procedure

1. Navigate to All > Service Graph Connectors > Jamf > Connections.

2. From the list of connections, open the connection for which you want
to disable delta synchronization.

The connection properties are displayed in the Service Graph
Connection Properties related list.

• To disable delta synchronization for computers, open the
is_delta_enabled_for_computers property.

• To disable delta synchronization for mobile devices, open the
is_delta_enabled_for_mobiles property.

3. In the Value field, enter false.

4. Select Update.

## Service Graph Connector for Jamf properties

Service Graph Connector for Jamf properties control the behavior of the
connector.

Connection properties

These connection properties are available for the Service Graph
Connector for Jamf.

Note:   To open the Service Graph Connection Properties
[sn_cmdb_int_util_service_graph_connection_property] table for the
connector, navigate to All > Service Graph Connectors > Jamf
> Connections, and select the connection name. The connection
properties are displayed in the Service Graph Connection Properties
related list.

Connection properties for Service Graph Connector for Jamf

Property
Description

auth_type

Set the property to basic to
use Basic authentication for the
connection. This authentication

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

Property
Description

type uses a user name and
password.

Set the property to oauth to
use Client credentials (OAuth 2.0)
authentication for the connection.
This authentication type uses a
client ID and client secret.

The default Bearer token
authentication type uses a user
name and password to retrieve a
token for subsequent connection
requests.

• Type: basic | bearer | oauth

• Default value: bearer

Note:

• For an OOB default
connection, any of the three
authentication types can be
used.

• For additional connections
(multi-instance), only the
Basic and Bearer
authentication types can
be used. To use
the Client credentials
(OAuth 2.0) authentication
type, follow the guided
setup to configure client
authentication credentials
for the connection. See
Configure Service Graph
Connector for Jamf using
the guided setup.

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

Property
Description

import_managed_apps_only

Set the property to true to
import only managed application
records.

When the property is set to
false, all application records are
imported.

• Type: true | false

• Default value: false

is_delta_enabled_for_computers

Set the property to true to enable
the SG-Jamf Computers data
source to pull only the changes
(delta) between consecutive
imports.

When the property is set to false,
a full import is performed with
every pull.

Note:   This property
is available only if the
use_jamf_pro_api property is
set to true.

• Type: true | false

• Default value: false

See Configuring data
synchronization in Service Graph
Connector for Jamf.

is_delta_enabled_for_mobiles

Set the property to true to enable
the SG-Jamf Mobile Devices data
source to pull only the changes

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

Property
Description

(delta) between consecutive
imports.

When the property is set to false,
a full import is performed with
every pull.

Note:   This property
is available only if
the use_jamf_mobile_pro_api
property is set to true.

• Type: true | false

• Default value: false

See Configuring data
synchronization in Service Graph
Connector for Jamf.

use_jamf_mobile_pro_api

Set the property to true to use
the Jamf Pro API for querying Jamf
mobile device records. Set the
property to false to use the Jamf
Classic API.

Note:   The Jamf Pro API
is supported by Jamf version
11.4 and higher. The Jamf
Pro API supports pagination of
response data and provides
performance improvement
compared to the Jamf Classic
API.

• Type: true | false

• Default value: null

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

Property
Description

use_jamf_pro_api

Set the property to false to use
the Jamf Classic API instead of the
Jamf Pro API for querying Jamf
mobile device records.

When the property is set to
true, the Jamf Pro API is used
for querying Jamf mobile device
records.

Note:   The Jamf Pro API
is supported by Jamf version
11.4 and higher. The Jamf
Pro API supports pagination of
response data and provides
performance improvement
compared to the Jamf Classic
API.

• Type: true | false

• Default value: true

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

42

Zurich ServiceNow AI Platform Capabilities

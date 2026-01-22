# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_microsoft_intune_2026-01-16-13-11-36

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_microsoft_intune_2026-01-16-13-11-36.pdf*

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

## Service Graph Connector for Microsoft Intune

Use the Service Graph Connector for Microsoft Intune to pull data from
the Microsoft Intune application into your ServiceNow instance.

The Service Graph Connector for Microsoft Intune pulls data from mobile
devices, computers and software applications into the ServiceNow®
Configuration Management Database (CMDB) application. The
integration provides greater visibility into mobile devices, computers and
related software applications that run on them.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported versions

Versions

Microsoft Intune
ServiceNow

• Microsoft Intune Graph API v1.0

• Microsoft Intune Graph API Beta

• Xanadu

• Yokohama

• Zurich

Use cases

The following are examples on how you can use the Service Graph
Connector for different ServiceNow® applications:

• IT Operations Management (ITOM) Visibility

• Detailed hardware and application inventory for Android, Apple, and
Windows mobile devices. The inventory can be used with or without
Software Asset Management (SAM).

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

• Compliance tracking for mobile devices. You can build your own
device (BYOD) or use corporate-owned devices.

• IT Service Management (ITSM)

• Incidents, problems, and changes on discovered configuration items
(CI).

• Ownership tracking and assignment for mobile devices.

You can also do the following types of administrative actions:

• Device Management: You can report on various aspects of the device.

• Integration with Azure Monitor: Delta notification.

Configuring a connection for the connector

You can configure a connection for the connector by using the
SGC Central view in the CMDB Workspace. The view enables you to
discover and install connectors, and then effectively manage the full life
cycle of creating, editing, monitoring, and debugging connections. To
configure the connector using SGC Central, see Configure Service Graph
Connector for Microsoft Intune using SGC Central.

Important:   Starting with the Service Graph Connector for Microsoft
Intune version 2.7.0, the guided setup method is deprecated. Use
the SGC Central view in the CMDB Workspace to configure the
connection for the connector.

CMDB integration dashboards

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration,
or a specific integration run. For more details about monitoring Microsoft
Intune integrations in the CMDB Integrations Dashboard, see Using the
CMDB Integrations Dashboard.

Data mapping

Data from data sources in the Microsoft Intune application is mapped
and transformed into the ServiceNow CMDB Configuration Item (CI) class
definitions using the Robust Transform Engine (RTE). Data is inserted into

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

the ServiceNow CMDB using the Identification and Reconciliation Engine
(IRE).

The following table describes the data sources, the staging tables, and
the target tables as CMDB CI classes, and the resource types imported
for a Microsoft Intune application.

Data mapping for Microsoft Intune

Data source
Staging table
CMDB CI
classes

Resource
types

Data source
type

SG-Intune
Computer

SG-Intune
Computer
[sn_intune_in
tegrat_com
puter]

Computer

SG-Intune
Computer
Related

IP Address

Serial
Number

When the
Software
Asset
Manageme
nt (SAM)
application
isn't installed:

Software

Software
Instance

When the
SAM
application
is installed:
Software
Installation

Computers
Regular

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
CMDB CI
classes

Resource
types

Data source
type

SG-Intune
Devices

SG-Intune
Devices
[sn_intune_in
tegrat_devic
es]

Handheld
Computing
Device

Serial
Number

Network
Adapter

SG-Intune
Device
Related

IP Address

When the
Software
Asset
Manageme
nt (SAM)
application
isn't installed:

Software

Software
Instance

When the
SAM
application
is installed:
Software
Installation

Mobile
devices
Regular

SG-Intune
Software

SG-Intune
Software
[sn_intune_in
Software

Discovered
apps
Regular

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
Staging table
CMDB CI
classes

Resource
types

Data source
type

tegrat_softw
are]

SG-Intune
Device
Reports

SG-Intune
Device
Reports
[sn_intune_in
tegrat_devic
e_reports]

Computer or
Handheld
Computing
Device

Serial
Number

Network
adapter

SG-Intune
Computer
Related

SG-Intune
Device
Related

IP Address

Note:
Imports
Wireless
(Wi-Fi)
IPv4
Address
of a
device
only.

When the
Software
Asset
Manageme
nt (SAM)

Computers
and mobile
devices

Advanced

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

Data source
Staging table
CMDB CI
classes

Resource
types

Data source
type

application
isn't installed:

Software

Software
Instance

When the
SAM
application
is installed:
Software
Installation

SG-Intune
Software
Reports

SG-Intune
Software
Reports
[sn_intune_in
tegrat_softw
are_reports]

When the
Software
Asset
Manageme
nt (SAM)
application
isn't installed:

Software

Software
Instance

When the
SAM
application
is installed:
Software
Installation

Discovered
apps
Advanced

Starting with the Service Graph Connector for Microsoft Intune 2.7.0
version, the SG-Intune Device Reports and SG-Intune Software Reports
advanced data sources are not available by default. To use these

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

advanced data sources, you must select the Advanced data sources
option while configuring the connection using SGC Central. See
Configure Service Graph Connector for Microsoft Intune using SGC
Central.

Configure the SG-Intune Device Reports and SG-Intune Software Reports
advanced data sources for faster data import, better performance,
and inclusion of software publisher details. Compared to the regular
data sources (SG-Intune Computer, SG-Intune Devices, and SG-Intune
Software), the advanced data sources help resolve server errors and
performance issues caused by having a large number of Microsoft Intune
devices.

For more information, see Service Graph Connector For Microsoft Intune -
Advanced (Configure advanced Data sources) [KB1641546].

Note:   The SG-Intune Device Reports advanced data source is
an alternative to the SG-Intune Computer and SG-Intune Devices
regular data sources. The SG-Intune Software Reports advanced
data source is an alternative to the SG-Intune Software data source.
The data imported by the advanced data sources is similar to the
data imported by the corresponding regular data sources.

After you complete setting up the connection, you can configure the
integration to periodically pull data from the Microsoft Intune application.

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

Note:

• For any discovered software applications that were deleted later
in the Microsoft Intune application, the Service Graph Connector
automatically deletes the corresponding records in CMDB.

• To view more details about a handheld computing device or
computer in the Computer [cmdb_ci_computer] class, enable the
related lists SG-Intune Device Related and SG-Intune Computer
Related.

You can add these related lists by configuring the Related Lists
view on the form that opens when you select a handheld
computing device or computer configuration item (CI) in the
Computer [cmdb_ci_computer] class. Computer CIs are displayed
in the Computers list, accessed by navigating to All > Configuration
> Base Items > Computers. For more information about adding
related lists to a form, see Configuring the form layout.

For more information on where data is saved when pulling data from
a Microsoft Intune application, see CMDB classes targeted in Service
Graph Connector for Microsoft Intune.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

Additional resources

• Service Graph Connector for Microsoft Intune - Troubleshooting
connection issues article on the ServiceNow Community site

• Service Graph Connector For Microsoft Intune - Advanced (Configure
advanced Data sources) [KB1641546 ] article in the Now Support
Knowledge Base

Related tasks

• Configure Service Graph Connector for Microsoft Intune using SGC
Central

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

Related concepts

• Service Graph Connectors

## Configure Service Graph Connector for Microsoft
## Intune using SGC Central

Use the playbook available with the SGC Central application to set up
the Service Graph Connector for Microsoft Intune for pulling in Microsoft
Intune data into the CMDB.

Before you begin

Install Service Graph Connector for Microsoft Intune version 2.5.0 or later
from the ServiceNow Store. For ServiceNow Store installation steps, see
Install a ServiceNow Store application.
Obtain the following information from your Microsoft Intune administrator:

• Client ID

• Client Secret

• Token URL

For the connector to access the data in Microsoft Intune, the credential
information is required to use the Microsoft Graph API. Therefore, you
must grant the following Graph API permissions from the App registrations
page in the Microsoft portal:

• DeviceManagementManagedDevices.Read.All (Type: Application)

• DeviceManagementApps.Read.All (Type: Application)

• User.Read.All (Type: Application)

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

11

Zurich ServiceNow AI Platform Capabilities

---
*Page 12*

• Datastream Action plugin (com.glide.hub.action_type.datastream),
which is automatically installed.

• ITOM Licensing plugin (com.snc.itom.license). For more information, see

Request Discovery.

• ServiceNow IntegrationHub Zip step (com.glide.hub.action_step.zip),
which is automatically installed.

• ServiceNow IntegrationHub JSON Parser step
(com.glide.hub.action_step.jsonparser), which is automatically installed.

• The SGC Central application (sn_sgc_central), which is automatically
installed.

Role required: SGC-Admin (sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to perform the following tasks:

• Run background scripts.

• Configure advanced data sources.

• Provide table-level access to the SGC-Admin user.

About this task

The playbook experience for onboarding connectors is activated with
SGC Central in the CMDB Workspace. To configure the SGC Central
application, see Configuring SGC Central and for more information on
how to interact with a playbook, see Interact with Playbook.

For more details on permissions, see Service Graph Connector for
Microsoft Intune - Troubleshooting connection issues on ServiceNow
Community and Microsoft Graph permissions reference on the Microsoft
documentation site.

Procedure

1. Navigate to Workspaces > CMDB Workspace.

2. In the CMDB Workspace, select SGC Central.

3. On the Overview page, select Create connection.

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

Tip:   Alternatively, you can select Create connection on the All
connections page.

4. On the Create connection window, select the Microsoft Intune
connector type and then select Create connection.

5. Complete the initial prerequisites when setting up a connection for
the first time using a connector.

Note:   This step is required only during the first-time setup. See
Perform initial setup tasks when creating a connection in SGC
Central.

6. Select the data source type.

a. In the Setup stage of the playbook, select the Select data source
type activity.

b. Select a data source type:

• Advanced data sources: Advanced data sources offer faster
data import and better performance, and include software
publisher details. Select this option if you have a large
number of Microsoft Intune devices.

Note:

• The admin role is required to configure advanced
data sources.

• The response for advanced data sources is returned
in ZIP file format. Ensure that the value of the
glide.attachment.extensions system property either is
empty or includes zip, bin, json.

• Regular data sources: The standard option, which doesn't
include software publisher details.

c. Select Continue.

7. Enter connection details and test the API connection for importing
Microsoft Intune data.

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

a. In the Setup stage of the playbook, select the Create and test
connection activity.

b. On the form, fill in the fields.

Create and test connection form

Field
Description

Connection Name

Name to identify the Microsoft
Intune connection record.

For example, SG-Intune
connection.

Connection URL

Base URL to connect to your
Microsoft Intune application.
Based on the region of your
Microsoft Intune application,
enter the connection URL in
one of the following formats:

• Global

https://graph.micros
oft.com

• US Government

https://graph.micros
oft.us

• China

https://microsoftgra
ph.chinacloudapi.cn

• Germany

https://graph.clouda
pi.de/

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

OAuth Client ID

Client ID of the Microsoft
Intune application as noted in
the Before you begin section.

OAuth Client Secret

Client secret of the Microsoft
Intune application as noted in
the Before you begin section.

OAuth Token URL

Callback URL for the Microsoft
Intune application.
Based on the region of your
Microsoft Intune application,
enter the token URL in one of
the following formats:

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

Field
Description

Where <tenantid> is the
tenant ID of your Microsoft
Intune application.

Use MID server

Option to use the MID
Server for connecting to the
Microsoft Intune instance.

Note:   A MID Server is
required only if a direct
connection between the
ServiceNow and Microsoft
Intune instances isn’t
possible.

Mid Selection

MID Server for the connection.

This field appears only when
you select the Use MID Server
check box.

c. Select Create and test connection.

d. Once the connection test is complete, select Continue.

8. Configure the connection properties to enable the connector to
access resources.

a. In the Setup stage of the playbook, select the Configure
properties activity.

b. In the Configure properties section, update the connection
properties for advanced and regular data sources if required.

c. Select Continue.

9. Configure the report trigger job for advanced data sources.
The Activate report trigger job activity appears only if you selected
Advanced data sources in step 6.b. The advanced data sources
require device reports and software reports to be triggered in the

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

Microsoft environment before related jobs and scheduled imports are
run.

a. In the Setup stage of the playbook, select the Activate report
trigger job activity.

b. Fill in the fields on the Scheduled Script Execution form.

Scheduled Script Execution form

Field
Description

Name
Specify a name for the report
trigger job.

Active
Select this check box to
activate the report trigger job.

Run
Specify the schedule for the
job to be run.

Time
Specify the time when the job
should run.

Run as
Specify the user role required
to run the report trigger job.

Note:   After you configure the report trigger job, all related
jobs and the device and software reports scheduled imports
are automatically scheduled to run in a specific sequence
a few hours later (typically 3–4 hours). You can review the
scheduled imports that are already activated and their
scheduled time in step 10.

c. Select Continue.

10. Configure the import schedule to import data at regular intervals.

a. In the Setup stage of the playbook, select the Configure import
schedule activity.

b. Expand the Parent scheduled data import within the Import
schedules list to select the Connection Name-SG-Intune Devices
import schedule.

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

c. Select the Active check box, and then fill in the run schedule and
time details.

For more information, see Schedule a data import.

d. Select Save.
Alternatively, select Execute Now to execute the import schedule
immediately.

e. Select Continue.

11. In the Setup stage of the playbook, select the Confirm connection
setup activity to verify whether the connection was configured.

What to do next

Select View all connections to review the connection details. The
configured connection appears in the Installed connections list.

Related concepts

• Service Graph Connector for Microsoft Intune

• Accessing the connection details of Service Graph Connector for
Microsoft Intune

Related reference

• CMDB classes targeted in Service Graph Connector for Microsoft Intune

## Configure Service Graph Connector for Microsoft
## Intune using the guided setup

Set up authentication credentials and a scheduled job to import
Microsoft Intune data into your CMDB.

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

Before you begin

Important:   Starting with the Service Graph Connector for Microsoft
Intune version 2.7.0, the guided setup method is deprecated. Use
the SGC Central view in the CMDB Workspace to configure the
connection for the connector.

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

Obtain the following information from your Microsoft Intune administrator:

• Client ID

• Client Secret

• Token URL

For the connector to access the data in Microsoft Intune, the credential
information is required to use the Microsoft Graph API. Therefore, you
must grant the following Graph API permissions from the App registrations
page in the Microsoft portal:

• DeviceManagementManagedDevices.Read.All (Type: Application)

• DeviceManagementApps.Read.All (Type: Application)

• User.Read.All (Type: Application)

For more details on permissions, see Service Graph Connector for
Microsoft Intune - Troubleshooting connection issues on ServiceNow
Community and Microsoft Graph permissions reference on the Microsoft
documentation site.

Dependencies and requirements:

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

• The Integration Commons for CMDB store app, which is automatically
installed.

• The CMDB CI class models store app, which is automatically installed.
See CMDB CI Class Models.

• Datastream Action plugin (com.glide.hub.action_type.datastream),
which is automatically installed.

• ITOM Licensing plugin (com.snc.itom.license). For more information, see

Request Discovery.

• ServiceNow IntegrationHub Zip step (com.glide.hub.action_step.zip),
which is automatically installed.

• ServiceNow IntegrationHub JSON Parser step
(com.glide.hub.action_step.jsonparser), which is automatically installed.

Starting with Service Graph Connector for Microsoft Intune 2.1.1 release,
the multi-instance support is available to import data from multiple
Microsoft Intune instances. This feature involves dynamically creating
data sources and scheduled imports; thus, requires the granting of
additional permissions. The guided setup includes additional steps for this
feature.

Role required: SGC-Admin (sn_cmdb_int_util.sgc_admin)

Note:   The admin user role is required to run background scripts and
to provide table-level access to the SGC-Admin user.

Procedure

1. Navigate to All > Service Graph Connectors > Intune > Setup.

2. On the Getting Started page, select Get started.

3. Configure the credentials.

a. On the Service Graph Connector for Microsoft Intune page, in
the Configure the connection section, select the task Configure
credentials.

b. On the next page, in the Configure credentials task section,
select Configure.

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

c. On the form, fill in the fields.

Edit Connection form

Field
Description

Connection Name

Name of the Microsoft Intune
application. This field is
automatically set.

Connection URL

Connection URL for the
connection.
Based on the region of your
Microsoft Intune application,
enter the connection URL in
one of the following formats:

• Global

https://graph.micros
oft.com

• US Government

https://graph.micros
oft.us

• China

https://microsoftgra
ph.chinacloudapi.cn

• Germany

https://graph.clouda
pi.de/

OAuth Client ID
The client ID of the Microsoft
Intune application.

OAuth Client Secret
The client secret of the
Microsoft Intune application.

OAuth Token URL
Callback URL for the Microsoft
Intune application.

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

Field
Description

Based on the region of your
Microsoft Intune application,
enter the token URL in one of
the following formats:

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
tenant ID of your Microsoft
Intune application.

d. Select Edit and Get OAuth Token.

e. Go back to the guided setup page and for the Configure
credentials task, select Mark as Complete.

4. (Optional) If needed, configure the MID Server.

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

a. In the Configure MID Server section, select Configure.

b. Select the Use MID server check box.

c. Select Update to save the record.

Note:   You do not need to update the other fields.

5. Test the connection to the Microsoft Intune API.

a. In the Test the connection section, select Configure.

b. On the form, review the fields.

Data Source form

Field
Description

Name
Unique name for this data
source.

Import set table label
Label of the table that will be
created for this data source.

Import set table name
Name of the table that will be
created for this data source.

Data in single column
Option to set to data in single
column.

Type
Data storage type of the data
to be imported.

Application
Application containing this
record.

c. (Optional) Modify the properties in the Service Graph
Connection Properties related list of the connection record.

Note:   Try to retain the default value of the software_path
property to ensure the proper retrieval of software details.

d. Select the Test Connection related link to start the testing process.

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

e. When the Status field is set to Success, return to the guided setup
page.
If any of the tests have errors, follow the suggestions for
remediation.

f. In the Test the connection task section, select Mark as Complete.

6. Add multiple instances.

a. On the left sidebar, select the Add Multiple Instances icon

(

).

b. On the Service Graph Connector for Microsoft Intune page,
in the Add Multiple Instances section, select the Update Data
Source Access task.

c. Select the Global application scope by using the application
picker.

d. In the Application Access related list, select the Can create, Can
update, and Can delete check boxes, if not already selected.

e. Select Update to close the tab and return to the guided setup.

f. Modify the application scope again to Service Graph Connector
for Microsoft Intune by using the application picker.

g. Set the Update Data Source Access task to complete by
selecting Mark as Complete.

h. Repeat the steps 6.c to 6.f for the Update Scheduled
data import access task with the Scheduled data import
[scheduled_data_set] table and set the task to complete by
selecting Mark as Complete.

7. Clear the cache for the new connection.

a. In the Clear Cache for Datasource and Import set section, select
Configure.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

24

Zurich ServiceNow AI Platform Capabilities

*[Figure Or Illustration - Page 24, 127x102px]*

```
.:.
.:.
.:.
.....::.....
..::-----------:::..
..:----::.......:::---::.
.::--::.              .:---:.
.:---.                   .:---:
.---:                       .---:.
.:--:                         .---:
:--:                           .---.
.:--:                            ---:
.---.                            :--:
.:--:                            ---:
:--:                           :---.
.:--:                         .---:
.:--:                       .---:
.:---:                   .:---:
.:---:.             ..:---:.
..:----:::......:::---::.
..:::----------:::..
.....::....
.:.
.:.
```

---
*Page 25*

b. In the Run script text box of the background script page, enter
the following script:

GlideTableManager.invalidateTable("sys_data_s
ource");
GlideCacheManager.flushTable("sys_data_source"
);

GlideTableManager.invalidateTable("scheduled_
import_set");
GlideCacheManager.flushTable("scheduled_import
_set");

GlideTableManager.invalidateTable("sys_db_obj
ect");
GlideCacheManager.flushTable("sys_db_object");

c. Select Run Script to run the background script in the global
scope.
The script may take several minutes to execute.

d. After the script is executed, select Close.

e. From the application picker, select the Service Graph Connector
for Microsoft Intune application.

f. Select Mark as Complete.

8. To either add or save the connection, select Configure for the Create
or Edit connection task.

• To add a connection, select Add Connection.

• To save the edits for the existing connection, select Edit.

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

Note:   Obtain the following information from your Microsoft
Intune administrator:

• Client ID

• Client Secret

• Token URL

When a Microsoft Intune administrator registers an application,
the Client ID, Client Secret, and Token URL will be available. To
get more information about how to register an application, see
the Microsoft Intune documentation site.

a. On the form, fill in the fields or edit as needed.

Create Connection form

Field
Description

Connection Name
Display name for the
connection.

Connection URL

Connection URL for the new
connection.
Based on the region of your
Microsoft Intune application,
enter the connection URL in
one of the following formats:

• Global

https://graph.micros
oft.com

• US Government

https://graph.micros
oft.us

• China

https://microsoftgra
ph.chinacloudapi.cn

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

Field
Description

• Germany

https://graph.clouda
pi.de/

OAuth Client ID
Client ID for the Microsoft
Intune application.

OAuth Client Secret
Client Secret for the Microsoft
Intune application.

OAuth Token URL

Callback URL for the Microsoft
Intune application.
Based on the region of your
Microsoft Intune application,
enter the token URL in one of
the following formats:

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

Field
Description

id>/oauth2/v2.0/toke
n
Where <tenantid> is the tenant
ID of your Microsoft Intune
application.

b. Either add or save the connection.

• To create the new connection, select Create and Get OAuth
Tokens.

• To save the edits for the existing connection, select Edit and
Get OAuth Token.

c. Navigate back to the guided setup and select Mark as
Complete.

d. (Optional) Set up the MID Server for the connection you created.

a. In the Configure Mid Servers section, select Configure.

b. Select the name of the connection you created.

c. Select the Use MID server check box.

d. Select Update.

e. When you're finished with the task, select Mark as Complete

9. Test the API connection to import data from the Microsoft Intune
application.

a. Test the connection, in the Test New Connections section, by
selecting Configure.

a. Select the name of the data source associated with the
newly created connection.

b. Select the Test Connection related link to start the process.

c. Optionally modify the properties in the Service Graph
Connection Properties related list.

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

Microsoft Intune connection properties

Property
Description

api_version
The version of the Microsoft
Intune Graph API.

software_path

The path of the software
code for finding apps and
associated devices or vice
versa. Leave the property
value as is.

include_primary_user_details

Enable retrieving the details
of the primary user during
import and populating the
assigned_to attribute in the
records of the cmdb_ci
table by setting the property
value to true. For retrieving
the enrolled user details, set
the property value to false.

Retrieving primary user
details increases the time for
importing data because of
additional API calls.

Note:   When a user
is assigned to a device
initially, the enrolled and
primary users are the
same. If the device is
reassigned to another
user, the primary user
name is reassigned to
the new user, but the
enrolled user is still the
original enrolled user
name.

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

Property
Description

include_ip_address_details

Enable retrieving the IP
addresses of devices during
import and populate
the records in the
cmdb_ci_ip_address table
by setting the property value
to true. To skip retrieving IP
addresses, set the property
to false.

Retrieving IP addresses
increases the time for
importing data because of
additional API calls.

Note:   The properties in the Service Graph Connection
Properties related list of the connection record are
modifiable. However, try to retain the default value of
the software_path property to ensure the proper retrieval
of software details.

d. When the Status field is set to Success, return to the guided
setup page.

Note:   If any of the tests have errors, follow the
suggestions for remediation.

e. Return to the guided setup and select Mark as Complete for
the Test New Connections task.

10. Set up the scheduled import jobs.

a. For the Configure scheduled jobs task in the Set up scheduled
import jobs section, select Configure.

b. Select the name of the scheduled import you want to run.

c. On the Scheduled Data Import form, verify the field values for the
scheduled job and select the Active check box.

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

For more information, see Schedule a data import.

d. Select Update.

e. Set the Configure scheduled jobs task to complete by selecting
Mark as Complete.

11. Use advanced options to resolve server errors and improve
performance with the SG-Intune Computer, SG-Intune Devices, and
SG-Intune Software data sources while importing a large number of
devices into the Microsoft Intune portal.

Note:

• The SG-Intune Device Reports data source serves as an
alternative to the SG-Intune Computer and SG-Intune
Devices data sources, importing the same information while
optimizing the data retrieval process by minimizing API calls
and reducing import time.

• The SG-Intune Software Reports data source serves as an
alternative to the SG-Intune Software data source.

• Both the SG-Intune Device Reports and SG-Intune
Software Reports data sources require the paid
ServiceNow IntegrationHub Professional Pack Installer
(com.glide.hub.integrations.professional) plugin.

• To enable the creation of attachments, the
glide.attachment.extensions system property must be set to
either null or bin, zip, json.

For more information, see the Service Graph Connector For
Microsoft Intune – Advanced [KB1641546] article in the Now
Support Knowledge Base.

a. Configure the scheduled jobs to import data using the SG-Intune
Device Reports and SG-Intune Software Reports data sources.

a. In the Advanced [Beta] section, for the Configure scheduled
jobs for advanced data sources task, select Configure.

b. In the Scheduled jobs list, select SG-Intune Trigger Device
Reports job.

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

c. On the Scheduled Script Execution form, verify the field
values for the scheduled job and select the Active check
box.

For more information, see Schedule script execution form.

d. Select Update.

e. To activate the scheduled job for the SG-Intune Software
Reports data source, repeat steps 11.a.ii to 11.a.iv by
selecting the SG-Intune Trigger Software Reports scheduled
job.

f. Return to the guided setup page and set the Configure
scheduled jobs for advanced data sources task to complete
by selecting Mark as Complete.

Important:

• Deactivate the SG-Intune Computer and SG-Intune
Devices scheduled imports after setting up the SG-Intune
Trigger Device Reports scheduled job for the SG-Intune
Device Reports data source.

• Deactivate the SG-Intune Software scheduled import
after setting up the SG-Intune Trigger Software Reports
scheduled job.

• Activate the ServiceNow IntegrationHub Professional
Pack Installer (com.glide.hub.integrations.professional)
plugin on your instance.
For more information, see the Service Graph Connector For
Microsoft Intune – Advanced [KB1641546] article in the Now
Support Knowledge Base.

b. Configure the scheduled import for the SG-Intune Device Reports
and SG-Intune Software Reports data sources.

a. In the Advanced [Beta] section, for the Configure the
scheduled import for advanced data sources task, select
Configure.

b. In the Scheduled Data Imports list, select the SG-Intune
Device Reports scheduled import.

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

c. On the Scheduled Data Import form, verify the field values for
the scheduled data import and select the Active check box.

For more information, see Schedule a data import.

d. Select Update.

e. Return to the guided setup page and set the Configure
the scheduled import for advanced data sources task to
complete by selecting Mark as Complete.

Important:   Verify that the SG-Intune Device Reports
scheduled import is configured to run 3 hours after the SG-
Intune Trigger Device Reports and SG-Intune Trigger Software
Reports scheduled jobs.

Example: If the SG-Intune Trigger Device Reports job is set for
9 a.m. and SG-Intune Trigger Software Reports for 10 a.m.
daily, schedule the SG-Intune Device Reports scheduled
import for 1 p.m. daily.

c. When using multiple instances, update the permissions on the
Scheduled Script Execution [sys_autoscript] table so that you can
add scheduled jobs for the new connections.

a. For the Update scheduled job access task, select Configure.

b. Select the Global application scope from the application
picker.

c. In the Application Access related list, select the Can create,
Can update, and Can delete check boxes.

d. Select  Update.

e. Switch back to the Service Graph Connector for Microsoft
Intune application scope using the application picker.

f. Return to the guided setup page and set the Update
scheduled job access task to complete by selecting Mark
as Complete.

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

d. When using multiple instances, clear the Scheduled Script
Execution (sysauto_script) table cache to configure scheduled
jobs for the new connections.

a. For the Clear cache for scheduled job task, select Configure.

b. Select the Global application scope from the application
picker.

c. In the Run script field, enter the following code:

GlideTableManager.invalidateTable("sysauto_scri
pt");
GlideCacheManager.flushTable("sysauto_script");
GlideTableManager.invalidateTable("sys_db_objec
t");
GlideCacheManager.flushTable("sys_db_object");

d. Select  Run Script.

e. Switch back to the Service Graph Connector for Microsoft
Intune application scope using the application picker.

f. Return to the guided setup page and set the Clear cache
for scheduled job task to complete by selecting Mark as
Complete.

e. When using multiple instances, create advanced data sources,
scheduled jobs, and scheduled imports for the new connections.

Tip:   You can create additional connections for multiple
instances by following the instructions in the Add Multiple
Instances section of the guided setup.

a. For the Set up advanced data sources for multiple instances
task, select Configure.

b. On the form, fill in the fields to configure your scheduled job
details for the new connection.

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

Field
Description

Instance Prefix to Data
source and Scheduled data
import sets

Identifier that is used in all
of the data source and
scheduled import names
for this distinct SG-Intune
connection. In a multiple
instance deployment, keep
prefix short, meaningful
identifier that enables you to
identify a set of related data
sources.

Note:   Try to keep the
prefix the same as your
connection name.

Connection and Credentials
Alias

Connection alias that was
created in the previous step.

Run Scheduled Import as
User

User to populate the field on
the scheduled data import.

c. Select Submit to create scheduled imports for your new
connection.

d. To activate any newly created scheduled jobs, repeat steps

11.a.ii to 11.a.iv.

e. To activate any newly created parent scheduled import,
repeat steps 11.b.ii to 11.b.iv.

f. Return to the guided setup page and set the Set up
advanced data sources for multiple instances task to
complete by selecting Mark as Complete.

## CMDB classes targeted in Service Graph Connector for
## Microsoft Intune

When you complete setting up the connection, you can configure the
integration to periodically pull data from Microsoft Intune. The data from

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

the regular data sources (SG-Intune Computer, SG-Intune Devices, and
SG-Intune Software) and the advanced data sources (SG-Intune Device
Reports and SG-Intune Software Reports) is saved in tables that extend
from the Configuration item [cmdb_ci] table.

Computer [cmdb_ci_computer]

The following attributes in the Computer [cmdb_ci_computer] table are
populated by collected data:

Attribute label
Attribute name

Name
name

Serial number
serial_number

Description
short_description

Disk space (GB)
disk_space

Manufacturer
manufacturer

Operating System
os

OS Version
os_version

Model ID
model_id

Assigned to
assigned_to

Chassis type
chassis_type

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

Parent class
Relationship type
Child class

Computer
[cmdb_ci_computer]
Reference

SG-Intune Computer
Related
[sn_intune_integrat_co
mputer_related]

Computer
[cmdb_ci_computer]
Reference
Software Installation
[cmdb_sam_sw_install]

Handheld Computing Device [cmdb_ci_handheld_computing]

The following attributes in the Handheld Computing Device
[cmdb_ci_handheld_computing] table are populated by collected
data:

Attribute label
Attribute name

Name
name

Serial number
serial_number

Description
short_description

Disk space (GB)
disk_space

IMEI
imei

MEID
meid

Operating System
os

OS Version
os_version

Phone Number
phone_number

Root Access
root_access

Model ID
model_id

Carrier
carrier

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

Assigned to
assigned_to

Manufacturer
manufacturer

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

SG-Intune Device
Related
[sn_intune_integrat_de
vice_related]

Handheld Computing
Device
[cmdb_ci_handheld_c
omputing]

Reference
Software Installation
[cmdb_sam_sw_install]

Software Installation [cmdb_sam_sw_install]

The following attributes in the Software Installation [cmdb_sam_sw_install]
table are populated by collected data:

Attribute label
Attribute name

Display name
display_name

Version
version

Discovery source
discovery_source

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

Attribute label
Attribute name

Publisher
publisher

Installed on
installed_on

Note:   The Publisher attribute is populated by the SG-Intune Software
Reports data source only.

Relationships created for Software Installation

Parent class
Relationship type
Child class

Software Installation
[cmdb_sam_sw_install]
Reference

Handheld Computing
Device
[cmdb_ci_handheld_c
omputing]

Computer
[cmdb_ci_computer]

Network Adapter [cmdb_ci_network_adapter]

The following attributes in the Network Adapter
[cmdb_ci_network_adapter] table are populated by collected data:

Attribute label
Attribute name

MAC Address
mac_address

Name
name

Configuration Item
cmdb_ci

Relationships created for Network Adapter

Parent class
Relationship type
Child class

Network Adapter
[cmdb_ci_network_ad
apter]

Reference
Handheld Computing
Device

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

Parent class
Relationship type
Child class

[cmdb_ci_handheld_c
omputing]

Network Adapter
[cmdb_ci_network_ad
apter]

Reference
Computer
[cmdb_ci_computer]

IP Address [cmdb_ci_ip_address]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data:

Attribute label
Attribute name

IP version
ip_version

Owned By Configuration Item
owned_by_cmdb_ci

IP Address
ip_address

Name
name

Relationships created for IP Address

Parent class
Relationship type
Child class

IP Address
[cmdb_ci_ip_address]
Reference

Handheld Computing
Device
[cmdb_ci_handheld_c
omputing]

IP Address
[cmdb_ci_ip_address]
Reference
Computer
[cmdb_ci_computer]

Serial Number [cmdb_serial_number]

The following attributes in the Serial Number [cmdb_serial_number] table
are populated by collected data:

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

Handheld Computing
Device
[cmdb_ci_handheld_c
omputing]

Serial number
[cmdb_serial_number]
Reference
Computer
[cmdb_ci_computer]

SG-Intune Computer Related
[sn_intune_integrat_computer_related]

The following attributes in the SG-Intune Computer Related
[sn_intune_integrat_computer_related] table are populated by collected
data:

Attribute label
Attribute name

Device ID
device_id

Azure AD Registered
azure_ad_registered

Compliance State
compliance_state

Device Enrollment Type
device_enrollment_type

Email Address
email_address

Encrypted
is_encrypted

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

Attribute label
Attribute name

Managed Device Owner Type
managed_device_owner_type

Management Agent
management_agent

Supervised
is_supervised

SG-Intune Device Related [sn_intune_integrat_device_related]

The following attributes in the SG-Intune Device Related
[sn_intune_integrat_device_related] table are populated by collected
data:

Attribute label
Attribute name

Device ID
device_id

Azure AD Registered
azure_ad_registered

Compliance State
compliance_state

Device Category
device_category

Device Enrollment Type
device_enrollment_type

Device State
device_state

Email Address
email_address

Encrypted
is_encrypted

Managed Device Owner Type
managed_device_owner_type

Management Agent
management_agent

Security Patch Level
security_patch_level

Supervised
is_supervised

System Management Bios Version
system_management_bios_version

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

Attribute label
Attribute name

Wifi Subnet ID
wifi_subnet_id

Note:   The attributes Device Category, Device State, Security Patch
Level, System Management Bios Version, and Wifi Subnet ID are
populated by the SG-Intune Device Reports data source only.

The attributes Azure AD Registered, Device Enrollment Type, and
Management Agent aren't populated by the SG-Intune Device
Reports data source.

Software [cmdb_ci_spkg]

The following attributes in the Software [cmdb_ci_spkg] table are
populated by collected data:

Attribute label
Attribute name

Key
key

Name
name

Version
version

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

Software Instance [cmdb_software_instance]

The following attributes in the Software Instance
[cmdb_software_instance] table are populated by collected data:

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

43

Zurich ServiceNow AI Platform Capabilities

---
*Page 44*

Attribute label
Attribute name

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
## Connector for Microsoft Intune

You can access the connection details of the Service Graph Connector
for Microsoft Intune in a single view using the common connection
framework (CCF) included within the Integration Commons for CMDB
(sn_cmdb_int_util) store app.

With the CCF, you can access all the connections used by the Service
Graph Connector for Microsoft Intune. The connection details include the
connection alias, connection properties, data sources, and scheduled
data imports associated with a connection. You can also test the
connection. For more information, see Accessing the connection details
of Service Graph Connectors.

Access the details of a Microsoft Intune connection

Access the details of a Microsoft Intune connection configured for the
Service Graph Connector for Microsoft Intune.

Before you begin

Role required: admin

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

Procedure

1. Navigate to All > Service Graph Connectors > Intune > Connections.

2. From the Name column of the Service Graph Connections list, select
a connection.

3. On the Service Graph Connections page, view the connection
details such as the connection name, alias, and data sources.

4. Select a related list to view further details of the connection.

5. (Optional) Select the Test Connection related link to test the
connection.

## Service Graph Connector for Microsoft Intune
## properties

Service Graph Connector for Microsoft Intune properties control the
behavior of the connector.

Connection properties

These connection properties are available for Service Graph Connector
for Microsoft Intune.

Note:   To open the Service Graph Connection Properties
[sn_cmdb_int_util_service_graph_connection_property] table for the
connector, navigate to All > Service Graph Connectors > Intune
> Connections and select the connection name. The connection
properties are displayed in the Service Graph Connection Properties
related list.

Connection properties for Service Graph Connector for Microsoft
Intune

Property
Description
Data source type

include_primary_user_
details

Set the property
to true to retrieve
primary user details
during import and
add the assigned_to

Regular data sources
(SG-Intune Computer,
SG-Intune Devices,
and SG-Intune
Software)

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

Property
Description
Data source type

attribute to the
Configuration item
[cmdb_ci] table.

Set the property to
false to retrieve the
enrolled user details.

Retrieving primary user
details increases the
time for importing
data because of
additional API calls.

Note:   When a
user is assigned to
a device initially,
the enrolled and
primary users are
the same. If
the device is
reassigned to
another user,
the primary
user name is
reassigned to
the new user,
but the enrolled
user is still the
original enrolled
user name.

• Type: true | false

• Default value: true

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

Property
Description
Data source type

include_ip_address_de
tails

Set the property
to true to retrieve
IP address details
during import and
add the records
to the IP Address
[cmdb_ci_ip_address]
table.

Set the property
to false to skip
retrieving IP addresses.

Retrieving IP addresses
increases the time
for importing data
because of additional
API calls.

• Type: true | false

• Default value: true

Regular data sources
(SG-Intune Computer,
SG-Intune Devices,
and SG-Intune
Software)

api_version

Enter the version of
the Microsoft Intune
Graph API.

Note:   This
property is
specific to
the regular
data sources
(SG-Intune
Computer, SG-
Intune Devices,
and SG-Intune
Software).

• Type: string

Regular data sources
(SG-Intune Computer,
SG-Intune Devices,
and SG-Intune
Software)

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
Data source type

• Default value: v1.0

software_path

Set the path of
the software code
for finding apps and
associated devices
for regular data
sources (SG-Intune
Computer, SG-Intune
Devices, and SG-
Intune Software).

Set the property to null
value to enable the
logic to determine the
path of the software
code.

• Type: device | app

• Default value:
device

Regular data sources
(SG-Intune Computer,
SG-Intune Devices,
and SG-Intune
Software)

device_report_chunks
_count

Set the number of
device report chunks.
The value must be a
power of 16 (1, 16, or
256).

• Type: integer

• Default value: 1

Advanced data
sources (SG-Intune
Device Reports and
SG-Intune Software
Reports)

software_report_chunk
s_count

Set the number
of software report
chunks. The value must
be a power of 16 (1,
16, or 256).

Advanced data
sources (SG-Intune
Device Reports and
SG-Intune Software
Reports)

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
Data source type

• Type: integer

• Default value: 16

export_apis_max_calls
_before_wait

Set the maximum
number of API calls
that can be made
consecutively before
a waiting period is
enforced.

• Type: integer

• Default value: 8

Advanced data
sources (SG-Intune
Device Reports and
SG-Intune Software
Reports)

export_apis_wait_time
_in_ms

Set the duration (in
milliseconds) for the
waiting period after
the specified number
of consecutive API
calls is reached.

• Type: integer

• Default value:
120000

Advanced data
sources (SG-Intune
Device Reports and
SG-Intune Software
Reports)

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

49

Zurich ServiceNow AI Platform Capabilities

# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_google_console_2026-01-16-13-09-18

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_google_console_2026-01-16-13-09-18.pdf*

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

## Service Graph Connector for Google Console

Use the Service Graph Connector for Google Console to import
device details from Chromebooks into the Configuration Management
Database (CMDB).

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Key features

• Get visibility across Chromebook devices.

• Get started quickly with a streamlined onboarding process.

• Use only the credentials you need.

Supported versions

Versions

Google Console
ServiceNow

Last tested on July 05, 2024

• Xanadu

• Washington DC

• Vancouver

• Utah

Use cases

You can use the Service Graph Connector for Google Console to
get visibility into Google ChromeOS devices, enabling administrators
to centrally manage enrollment, configuration, and monitoring these
devices.

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

Guided setup

The guided setup for the Service Graph Connector for Google Console
provides an organized sequence of tasks to configure the integration on
your instance. To access the guided setup, see Configure Service Graph
Connector for Google Console.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration,
or a specific integration run. For more details about monitoring Google
Console integrations in the CMDB Integrations Dashboard, see Using the
CMDB Integrations Dashboard.

Data mapping

Data from the Google Console data source is mapped and transformed
into the ServiceNow CMDB Configuration Item (CI) class definitions using
the Robust Transform Engine (RTE). Data is inserted into the ServiceNow
CMDB using the Identification and Reconciliation Engine (IRE).

When you complete setting up the connection, you can configure
the integration to periodically pull data from the Google Console
application.

Note:   For any discovered resources that were deleted later, the
Service Graph Connector for Google Console automatically marks
the corresponding records as no longer active or valid in CMDB.

The following table lists the data sources, the staging tables, and
the target tables as CMDB CI classes as where data is stored for a
Chromebook device within Google Console.

Data mapping for Google Console

Data source
Staging table
CMDB CI classes
Resource type

SG-
GoogleConsole-
ChromeDevices

SG-
GoogleConsole-
ChromeDevices
[sn_googlecons

Computer

IP Address

Chrome OS
devices

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
CMDB CI classes
Resource type

ole_i_sg_google
console_chrome
devices]

Network
Adapter

When the
Software Asset
Management
(SAM) and
SAM Foundation
applications are
not installed:

Software

Software
Instance

When the SAM
application, the
SAM Foundation
application, or
both are
installed:

Software
Installation

For more information on where data is saved when pulling data from
a Chromebook device, see CMDB classes targeted in Service Graph
Connector for Google Console.

You can use the IntegrationHub ETL app to view the data maps. See
IntegrationHub ETL for more information.

Related concepts

• Service Graph Connectors

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

## Configure Service Graph Connector for Google
## Console

Set up scheduled import jobs to pull in Chromebook device data from
the Google Console into your CMDB.

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
installed. See Integration Commons for CMDB.

• The CMDB CI class models store app, which is automatically installed.
See CMDB CI Class Models.

• ITOM Licensing plugin (com.snc.itom.license). See Request Discovery.

Role required: admin

Procedure

1. Verify that the application scope is set to the Service Graph
Connector for Google Console application by using the application
picker.
For more information, see Application picker.

2. Navigate to All > Service Graph Connectors > Google Console >
Setup.

3. On the Service Graph Connector for Google Console page, verify
that the Quick Start option is selected and then select Continue.

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

4. Configure the authentication credentials to send requests to the
Google Console API.

a. In the Configure the Connection and Credentials section of the
Service Graph Connector for Google Console page, select Start.

b. Set up the Google Console environment.

a. Select the Google Console Setup Instructions task.

b. Select the link to the Service Graph connector for Google
Console - Setup Instructions [KB1516892] article in the Now
Support Knowledge Base and follow the instructions to set up
the Google Console environment.

Note:   Make a note of the destination keystore
password. You need to specify this password while
importing the Java Keystore (JKS) certificate into
the Service Graph Connector for Google Console
application.

c. Set the Google Console Setup Instructions task to complete
by selecting the Mark as complete check box and then
select Continue.

c. Create an X.509 certificate to associate the JKS certificate for the
Google Console application with the Service Graph Connector
for Google Console.

a. Select the Create X.509 certificate task.

b. In the X.509 Certificates list, select New.

c. On the form, fill in the fields.

X.509 Certificate form

Field
Description

Name

Name of the X.509
certificate. For example, SG-
GoogleConsole-509Certifi
cate.

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
Description

Type
Certificate container. Select
Java Key Store.

Key store password

Password to access the JKS
certificate as noted down in
the previous step.

Note:   You can leave the value of other fields as-is.

d. Select the manage attachments icon (

).

e. Select Choose file to browse and upload the keystore.p12 file
for the JKS certificate you created in the previous step.

f. Close the dialog box.

g. Select the Validate Stores/Certificates related link.

h. On successful validation, select Update to return to the
guided setup page.

i. Set the Create X.509 certificate task to complete by selecting
the Mark as complete check box and then select Continue.

d. Configure the connection.

a. Verify that the application scope is set to the Service Graph
Connector for Google Console application by using the
application picker.

b. Select the Configure the Connection task and then select
Click Here.

c. On the Connections page that opens in another browser
tab, select Edit for the SG-GoogleConsole connection that is
available by default.

d. On the form, fill in the fields.

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

Edit Connection form

Field
Description

Connection Name

Name to identify
the connection record.
For example, SG-
GoogleConsole.

Don’t modify the name for
the default connection alias
SG-GoogleConsole.

Service Account Email
Email address of the service
account in Google Console.

Keystore Password

The password that you used
when you created the JKS
file in the previous step.

Keystore

Select the name of the
JKS file you created in the
previous step.

e. Select Edit and Get OAuth Token.

f. After the OAuth token is generated, return to the guided
setup.

g. Set the Configure the Connection task to complete by
selecting the Mark as complete check box and then select
Continue.

e. Set up the configuration properties.

a. Select the Add configuration properties task.

b. In the Service Graph Connections section, review and modify
the property details by selecting a property from the Property
column in the Service Graph Connection Properties related
list.

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

You can configure the Customer ID property to pull
Chromebook devices for the specified customer ID.

c. Select Update in the Service Graph Connection Properties
section.

d. Set the Add connection properties task to complete by
selecting the Mark as complete check box and then select
Continue.

f. Test the Google Console API connection to import data from the
Google Console application.

a. Select the Test Connection task.

b. Test the connection by selecting the Test Connection related
link.

Testing the connection might take a few moments. The page
is refreshed to show the test results.

c. When the Status field is set to Success, select Update.

If any of the tests have errors, follow the suggestions for
remediation.

d. Set the Test Connection task to complete by selecting the
Mark as complete check box and then select Continue.

5. (Optional) Integrate with multiple Google Console instances.

a. Follow the instructions in the Service Graph connector for
Google Console - Setup Instructions [KB1516892] article in the
Now Support Knowledge Base to set up the Google Console
environment.

Note:   Make a note of the destination keystore password.

b. In the Add Multiple Instances section of the Service Graph
Connector for Google Console page, select Start.

c. Create data sources for the new Google Console connection.

a. Ensure that you have edit permissions for the Datasource
[sys_data_source] table.

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

b. Select the Update Data Source Access task.

c. To edit the record, select the Global application scope from
the application picker.

d. In the Application Access related list of the Data Source form
that opens in a new tab, select the Can create, Can update,
and Can delete check boxes.

e. Select Update.

f. From the application picker, select the Service Graph
Connector for Google Console application scope.

g. Set the Update Data Source Access task to complete by
selecting the Mark as complete check box and then select
Continue.

d. Create a scheduled import job for the new Google Console
connection.

a. Ensure that you have edit permissions for the Scheduled data
import [scheduled_import_set] table.

b. Select the Update Scheduled Data Import task.

c. To edit the record, select the Global application scope from
the application picker.

d. In the Application Access related list of the Scheduled Data
Import form, select the Can create, Can update, and Can
delete check boxes.

e. Select Update.

f. From the application picker, select the Service Graph
Connector for Google Console application scope.

g. Set the Update Scheduled Data Import task to complete by
selecting the Mark as complete check box and then select
Continue.

e. Create an X.509 certificate for the new Google Console instance
by repeating the step 4.c, and then mark the Create X.509
certificate task to complete by selecting the Mark as complete
check box and then select Continue.

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

f. Add another connection for the new Google Console instance.

a. Verify that the application scope is set to the Service Graph
Connector for Google Console application by using the
application picker.

b. Select the Add Another Connection task and then select
Click Here.

c. On the Connections page that opens in another browser
tab, select Add Connection.

d. On the form, fill in the fields.

Create Connection form

Field
Description

Connection Name
Name to identify the
connection record.

Service Account Email
Email address of the service
account in Google Console.

Keystore Password

The password that you used
when you created the JKS
file in the previous step.

Keystore

Select the name of the
JKS file you created in the
previous step.

e. Select Create and Get OAuth Token.

f. After the OAuth token is generated, return to the guided
setup.

g. Set the Add Another Connection task to complete by
selecting the Mark as complete check box and then select
Continue.

g. Add the configuration properties for the new Google Console
instance.

a. Select the Add configuration properties task.

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

b. Select the connection record you created in the previous
step.

c. In the Service Graph Connections section, review and modify
the property details by selecting a property from the Property
column in the Service Graph Connection Properties related
list.

You can configure the Customer ID property to pull
Chromebook devices for the specified customer ID.

d. Select Update in the Service Graph Connection Properties
section.

e. Set the Add connection properties task to complete by
selecting the Mark as complete check box and then select
Continue.

h. Test the Google Console API connection to import data from
new Google Console instance.

a. Select the Test New Connections task.

b. Select the connection record you created in the previous
step.

c. Test the connection by selecting the Test Connection related
link.

Testing the connection might take a few moments. The page
is refreshed to show the test results.

d. When the Status field is set to Success, select Update.

If any of the tests have errors, follow the suggestions for
remediation.

e. Set the Test New Connections task to complete by selecting
the Mark as complete check box and then select Continue.

6. Configure the scheduled job for the import of Google Console data.

a. In the Configure the scheduled jobs section of the Service Graph
Connector for Google Console page, select Start.

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

b. Select the SG-GoogleConsole-ChromeDevices scheduled job.
For a multiple instance setup, select the scheduled job created
with the scheduled import in step 5.d for the new connection.

c. On the Scheduled Data Import form, verify the field values.

For more information, see Schedule a data import.

d. Select the Active check box to activate the scheduled job.

e. In the Run field, select Periodically to specify how often the job
will run.

f. Select Update.

g. Set the Configure the scheduled jobs task to complete by
selecting the Mark as complete check box and then select
Continue.

7. On the Service Graph Connector for Google Console page, select
Complete to save your changes.

8. In the Complete setup dialog box, select Complete to complete the
setup.

9. In the message box that appears, select Done.

## CMDB classes targeted in Service Graph Connector for
## Google Console

When you complete setting up the connection, you can configure the
integration to periodically pull Google Console data from Chromebook
devices. The data is saved in tables that extend from the Configuration
item [cmdb_ci] table.

Computer [cmdb_ci_computer]

The following attributes in the Computer [cmdb_ci_computer] table are
populated by collected data:

Attribute label
Attribute name
Google Console attribute

Install Status
install_status
status

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
Google Console attribute

Model number
model_number
model

Model ID
model_id
model

Manufacturer
manufacturer
model

Name
name
serialNumber

Serial number
serial_number
serialNumber

Assigned
assigned
lastEnrollmentTime

Operating System
os
os

Operational status
operational_status
status

OS Version
os_version
osVersion

Assigned to
assigned_to
annotatedUser

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
Reference

When the Software
Asset Management
(SAM) and
SAM Foundation
applications aren't
installed:

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

Parent class
Relationship type
Child class

Software
[cmdb_ci_spkg]

Software Instance
[cmdb_software_insta
nce]

When the SAM
or SAM Foundation
application is installed:

Software Installation
[cmdb_sam_sw_install]

IP Address [cmdb_ci_ip_address]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data:

Attribute label
Attribute name
Google Console attribute

IP Address
ip_address
lastKnownNetwork.ipA
ddress

Name
name
lastKnownNetwork.ipA
ddress

Nic
nic
macAddress

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

Network Adapter [cmdb_ci_network_adapter]

The following attributes in the Network Adapter
[cmdb_ci_network_adapter] table are populated by collected data:

Attribute label
Attribute name
Google Console attribute

Configuration Item
cmdb_ci
serialNumber

MAC Address
mac_address
macAddress

Name
name
macAddress

Relationship created for Network Adapter

Parent class
Relationship type
Child class

Network Adapter
[cmdb_ci_network_ad
apter]

Reference
Computer
[cmdb_ci_computer]

Software [cmdb_ci_spkg]

The following attributes in the Software [cmdb_ci_spkg] table are
populated by collected data when the Software Asset Management
(SAM) and SAM Foundation applications are not installed:

Attribute label
Attribute name
Google Console attribute

Key
key
name-version

Name
name
name

Version
version
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

Software Installation [cmdb_sam_sw_install]

The following attributes in the Software Installation [cmdb_sam_sw_install]
table are populated by collected data when the SAM application, the
SAM Foundation application, or both are installed:

Attribute label
Attribute name
Google Console attribute

Discovery source
discovery_source
None

Display name
display_name
Name

Installed on
installed_on
serialNumber

Version
version
Version

Relationship created for Software Installation

Parent class
Relationship type
Child class

Software Installation
[cmdb_sam_sw_install]
Reference
Computer
[cmdb_ci_computer]

Software Instance [cmdb_software_instance]

The following attributes in the Software Instance
[cmdb_software_instance] table are populated by collected data when
the SAM and SAM Foundation applications are not installed:

Attribute label
Attribute name
Google Console attribute

Installed on
installed_on
serialNumber

Name
name
name, version,
serialNumber

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

Relationship created for Software Instance

Parent class
Relationship type
Child class

Software Instance
[cmdb_software_insta
nce]

Reference
Computer
[cmdb_ci_computer]

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

19

Zurich ServiceNow AI Platform Capabilities

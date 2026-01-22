# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_active_directory_2026-01-16-13-06-10

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_active_directory_2026-01-16-13-06-10.pdf*

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

## Service Graph Connector for Active Directory

The Service Graph Connector for Active Directory retrieves computer
and software information from the Microsoft Active Directory (AD)
product and imports it into the Configuration Management Database
(CMDB) in your instance using Lightweight Directory Access Protocol
(LDAP).

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported versions

• Microsoft Active Directory version: Last tested on

• Supported ServiceNow® versions:

• Utah

• Vancouver

• Washington

Use cases

Import computer and software details about your assets from the
Microsoft Active Directory product into your CMDB.

Guided setup

The guided setup for the Service Graph Connector for Active Directory
provides an organized sequence of tasks to configure the integration
on your instance. To access the guided setup, Configure Service Graph
Connector for Active Directory.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all

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

installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration,
or a specific integration run. For more details about monitoring Microsoft
Active Directory integrations in the CMDB Integrations Dashboard, see
Using the CMDB Integrations Dashboard.

Data mapping

Data from the Service Graph Connector for Active Directory data
sources is mapped and transformed into the ServiceNow CMDB
Configuration Item (CI) class definitions using the Robust Transform Engine
(RTE). Data is inserted into the ServiceNow CMDB using the Identification
and Reconciliation Engine (IRE).

After you complete the guided setup, you configure the integration to
periodically pull data from the Active Directory. The data is loaded into
the following tables.

You can use the Integration Hub ETL application to view the data maps.

Data sources and staging tables for Active Directory

Data source
Staging table

SGC Active Directory Import

SGC Active Directory Import
[sn_sec_sgc_ad_active_directory_i
mport]

Computer
Computer [cmdb_ci_computer]

Software

Software [cmdb_ci_spkg],
[cmdb_software_instance],
[cmdb_sam_sw_install]

SGC Active Directory Computer

SGC Active Directory Computer
[sn_sec_sgc_ad_active_directory_
computer]

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

## Configure Service Graph Connector for Active
## Directory

Configure your Lightweight Directory Access Protocol (LDAP) connections
and verify them, set up scheduled imports, and optionally add multiple
instances with the Guided Setup.

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

• Observability Commons for CMDB (sn_observability), which is only
required for event ingestion. This app must be installed prior to installing
the connector for Event Management to work. For more information,
see Observability Commons for CMDB on the ServiceNow Store.

After you have followed the instructions provided to you to download
and activate the Service Graph Connector for Active Directory

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

application, refer to Download an application from the ServiceNow Store
for the first time and Install a Security Operations integration. There are a
few steps you need to complete before you configure this integration.

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > Active Directory >
Setup.

2. On the Welcome to Guided Setup Home page, select Continue.

3. On the Experience page, select Best Experience followed by
Continue.
The Service Graph Connector for Active Directory (AD) page is
displayed with the following tasks:

• Configure LDAP Server

• Add Multiple Instances

• Set up scheduled import jobs

4. Select Configure LDAP Server to expand it.
The following steps are displayed in the left navigation panel:

• Configure Inactive threshold

• Update LDAP OU definition

• Configure LDAP Server Details

• Test LDAP Server Connection

A single LDAP server is supplied along with the application. This
server includes a computer organizational (OU) unit that retrieves a
computer's object information from the computers OU.

5. (Optional) Select Configure Inactive threshold to open the record.
The System Property sn_sec_sgc_ad.inactive_threshold form is
displayed.

6. Select the here link in the message at the top of the form to edit the
record.

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

7. (Optional) Alternatively, you can select the Globe icon in the upper
right of the screen and select Service Graph Connector for Active
Directory from the list to change the application scope so you can
edit the form.
As you progress through the Guided Setup, follow any instructions you
see at the top of the pages in for modifying the application scope so
you can open, edit, and save the record.

8. Enter a threshold in the Value field.
The default value is 90 days. Before you modify this value, refer to the
information about the threshold setting at the top of the page. With
this setting, assets that match the day threshold value are excluded
from import.

9. Right-click in the gray header titled System Property
sn_sec_sgc_ad.inactive_threshold of the record and select Save.

10. Select Mark as complete followed by Continue.
The LDAP OU Definition Access record is displayed.

11. Update LDAP OU Definition Access.

a. Follow the steps listed at the top of the page and on the LDAP
OU Definition record to verify or switch the application scope to
'Global' with the application picker.

b. Select the LDAP OU Definition record on the table to open it.

c. On the record, if not selected, select the Application Access tab.

d. If displayed, select the link to edit the record followed by the
check boxes for the permission settings you want.

e. Right-click in the gray header of the Table LDAP OU Definition
record and select Save.

f. Select Mark as complete followed by Continue.
The Configure LDAP Server Details page is displayed.

12. Provide the details for LDAP server connection.

a. Verify values or fill in the fields.

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

Name

Read-only: Unique name for
the LDAP server for example
SGC-AD-computer.

Application

Read-only: Service Graph
Connector for Active Directory
(AD).

Active
Check box selected.

Login distinguished name
Login name for the AD server.

Login password
Password for the AD server.

Starting search directory
Directory you want to search
for example DC=Ops.

(Optional) MID Server

Dedicated MID Server for the
connection, if available.

Note:   A MID
Server is required for on-
premise connections if the
instance is not publicly
accessible.

LDAP Server URLs

Add the URL for the server
for example ladp://host-
name:389/.

b. Right-click in the gray header titled LDAP Server and select Save.

c. Select Mark as complete followed by Continue.
The Test LDAP Server Connection page is displayed.

13. Test the LDAP Server Connection.

a. Scroll to the Related links section on the form and select the Test
Connection link

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

If the connection is successful, a Connected Successfully
message is displayed. If your connection test fails, a message
is displayed with information about why the connection failed.
Review the Message field for how to proceed.

b. If you edit the record to fix the connection, right-click in the gray
header titled LDAP Server and select Save.

c. Select Mark as complete followed by Continue.
Add Multiple Instances is displayed in the top header the tasks.

Adding Multiple instances is optional. If you don’t want to add
multiple instances, you can proceed to step 14 and the Set
scheduled import jobs task.

14. (Optional) Add multiple instances.
To add multiple instances, you must update data source access. You
must edit the permissions on the Datasource [sys_data_source] table
to create a data source for the new connection in the Service Graph
Connector for Active Directory.

15. Select Add Multiple Instances from the top header drop down list.
The following tasks are displayed:

• Update Data Source Access

• Update Scheduled Data Import Access

• Add Another LDAP Server

• List of configured LDAP servers

16. Select Update Data Source Access.

a. Follow the steps listed at the top of the page to switch the
application scope with the application picker to open, edit, and
save the record.

b. Select the Data Import record from the list to open it.

c. With the Application Access tab selected, follow the instructions
to edit the record and modify the check boxes.

d. Right-click in the gray header titled Table Data Source and select
Save.

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

e. Select Mark as complete followed by Continue.
The Update scheduled data import access page is displayed.

17. Update scheduled data import access.

a. Select the Scheduled Data Import record from the list to open it.

b. (Optional) With the Application Access tab selected, follow the
instructions to edit the record and modify the check boxes.

c. Right-click in the gray header titled Table Scheduled Data Import
and select Save.

d. Select Mark as complete followed by Continue.
The Add Another LDAP Server page is displayed. There are two steps
for this task:

• LDAP server configuration

• Basic LDAP server information

18. Provide LDAP server configuration information.

a. Fill out the fields.

Field
Value

Type of LDAP server
Active Directory

Server name
Unique name of the LDAP
server.

Server URL
URL for example ldap://
host-name:389/.

Start search directory
Directory you want to search
for example DC=SecOps.

b. Select Submit.
After you submit these edits, complete the second configuration
step.

c. Fill in the fields for the basic LDAP server information.

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
Value

Application

Read-only Service Graph
Connector for Active
Directory.

Active
Check box selected.

Login distinguished name
Login name for the AD server.

Login password
Password for the AD server.

Starting search directory
Directory you want to search
for example DC=SecOps.

MID Server

Dedicated MID Server for the
connection.

Note:   A MID Server is
not required for the LDAP
server.

d. Right-click in the gray header titled LDAP Server and select Save.

e. Select Mark as complete followed by Continue.
The List of configured LADP server page is displayed.

f. Select your new record from the list to open it and test the
connection.

g. (Optional) Edit information on the form.

h. When you are satisfied with the information, scroll to the Related
links and select the Test Connection link.
If the connection is successful, a message is displayed. If your
connection test fails, review the Message and Suggestion fields
for how to proceed.

i. After a successful connection, right-click in the gray header titled
LDAP Server and select Save.

j. Select Mark as complete followed by Continue.

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

19. To set up scheduled jobs, select Set up scheduled import jobs from
the drop down list in the top header.
You must activate a scheduled job from the configuration page.

a. On the Configure the scheduled jobs page, select a record from
the Scheduled Data Imports list to open it.

b. Select the Active check box and fill in the fields.

Field
Value

Name
Unique name for the LDAP
server, SGC-AD-computer.

Application

Read-only Service Graph
Connector for Active Directory
(AD).

Run

How often you want the job
to run. If you want to run a
test import prior to scheduling
it, you might prefer to set this to
Once.

Run as

Run the scheduled job with
the credentials of another
specified user.

Time
When you want the job to run.

Active
Select the check box.

Conditional
Specific conditions under
which this job is run.

Use connection

Leave this deactivated for
the first run. Specifies another
connection and credentials for
this job.

Concurrent import
Leave activated. Splits data
into multiple imports sets.

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
Value

See the message for more
information.

Partition Method
Leave as Custom size.

Partition size
15,000. Import set size for early
scheduling.

Execute pre-import script

Leave activated. Specifies a
script to run before the import
is performed.

Execute post-import script

Leave activated. Specifies a
script to run after the import is
performed.

c. (Optional) Select Execute now to run the job.
If you do not choose to run the job on-demand, the next job runs
according to the schedule you set.

d. Right-click in the gray Scheduled Data Imports header and select
Save.

e. Select Mark as complete followed by Continue.

20. On the Home page for Guided Setup, select Complete to finish the
configuration.

## CMDB classes targeted in Service Graph Connector for
## Active Directory

When you complete setting up the connection, you can configure the
integration to periodically pull data. The data is saved in tables that
extend from the Configuration item [cmdb_ci] table.

Computer [cmdb_ci_computer]

The following attributes in the Computer [cmdb_ci_computer] table are
populated by collected data.

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

Name
name

Category
category

Object ID
object_id

Fully qualified domain name
fqdn

Checked out
check_out

Check in
check_in

First discovered
first_discovered

Operating System
os

OS Version
os_version

Software [cmdb_ci_spkg]

The following attributes in the Software [cmdb_ci_spkg] table are
populated by collected data.

Attribute label
Attribute name

Name
name

Key
key

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

14

Zurich ServiceNow AI Platform Capabilities

---
*Page 15*

Attribute label
Attribute name

Name
name

Install On
installed_on

Product Name
software

Software Installation [cmdb_sam_sw_install]

The following attributes in the Software Installation [cmdb_sam_sw_install]
table are populated by collected data.

Attribute label
Attribute name

Display Name
display_name

Version
version

Discovery source
discovery_source

SGC Active Directory Computer
[sn_sec_sgc_ad_active_directory_computer]

The following attributes in the SGC Active Directory Computer
[sn_sec_sgc_ad_active_directory_computer] table are populated by
collected data.

Attribute label
Attribute name

Account expires
account_expires

Bad password count
bad_pwd_count

Bad password time
bad_password_time

Code page
code_page

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

Common name
cn

Country code
country_code

Description
description

Display name
display_name

Distinguished name
distinguished_name

DN
dn

Dscorepropagation data
dscore_propagation_data

Instance type
instance_type

Iscritical system object
iscritical_system_object

Keywords
keywords

Last logon
last_logon

Local policy flags
local_policy_flags

Logon count
logon_count

Member of
member_of

Ms-DS-Host service account
msds_host_service_account

Ms-DS-Supported encryption types
msds_support_ncryptiontypes

Name
name

Object class
object_class

Object GUID
object_guid

Other well known objects
other_well_known_objects

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

Password last set
pwd_last_set

Primary group id
primary_groupid

SamAccount name
sam_account_name

SamAccount type
sam_account_type

Service binding information
service_binding_information

Service class name
service_class_name

Service DNS name
service_dns_name

Service DNS name type
service_dns_name_type

Service principal name
service_principal_name

Show in advanced view only
show_in_advanced_view_only

Source
source

User account control
user_account_control

USN changed
usn_changed

USN created
usn_created

When changed
when_changed

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

17

Zurich ServiceNow AI Platform Capabilities

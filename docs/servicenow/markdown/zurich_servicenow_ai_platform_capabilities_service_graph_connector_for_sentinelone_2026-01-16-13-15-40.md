# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_sentinelone_2026-01-16-13-15-40

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_sentinelone_2026-01-16-13-15-40.pdf*

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

## Service Graph Connector for SentinelOne

The Service Graph Connector for SentinelOne pulls in asset inventory
data (hardware and software) from the SentinelOne database into
the Configuration Management Database (CMDB) application in your
ServiceNow AI Platform® instance.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported Versions

• Supported SentinelOne API versions: Get Agents- V2.1

• Supported ServiceNow AI Platform® versions:

• Xanadu

• Washington

• Vancouver

Use cases

• Import SentinelOne agent information and store it in appropriate
configuration item (CI) classes in your CMDB.

• Configure multiple instances of SentinelOne in the Service Graph
Connector.

Guided setup

Use the guided setup feature to help you configure your integration in an
organized sequence of tasks.

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
filter the view to a specific CMDB integration, a specific time duration, or
a specific integration run. For more details about monitoring SentinelOne
integrations in the CMDB Integrations Dashboard, see Using the CMDB
Integrations Dashboard.

## Configure the Service Graph Connector for
## SentinelOne

The guided setup for the Service Graph Connector for SentinelOne
provides an organized sequence of tasks to configure the integration on
your ServiceNow AI Platform instance.

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

• The CMDB CI Class Models store app store app, which is automatically
installed.

• Discovery Core plugin (com.snc.discovery.core), which is automatically
installed by Discovery.

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

4

Zurich ServiceNow AI Platform Capabilities

---
*Page 5*

• Guided Setup (com.sn.ads.setup).

• Data Stream (com.glide.hub.action_type.datastream).

• ITOM Patterns.

Roles required:

• SentinelOne Role - viewer

• ServiceNow AI Platform® Role - admin

Guided Setup

The guided setup for the Service Graph Connector for SentinelOne
provides an organized sequence of tasks to configure the integration on
your instance.

Procedure

1. Navigate to Service Graph Connectors > SentinelOne > Setup.

2. On the Home page, select Continue.

3. On the Experience page, select the Best Experience from it.

4. On the Service Graph Connector for SentinelOne page in the
Configure the connection page, select the Configure SentinelOne
Authentication Credentials task and follow these steps:

a. In the API Key field, enter your SentinelOne API Key and update
the credential record.

b. Select the Mark as Complete checkbox and select Continue.

5. In the Configure SentinelOne HTTP Connection task follow these steps:

a. Add the SentinelOne base URL (Uniform Resource Locator).

b. Select the Mark as Complete checkbox and select Continue.

6. In the Test Connection task follow these steps:

a. Select the Test Connection link.

The Status code field displays 200 if the connection is successful.

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

b. Select the Mark as Complete checkbox and select Continue.

7. (Optional) To create another connection, select the Update Data
Source Access section and follow these steps:

a. Give permission to create and update the data source.

b. Select the Mark as Complete checkbox and select Continue.

c. Give permission to create and update the Scheduled Import
Sets.

d. Select the Mark as Complete checkbox and select Continue.

e. Clear the cache with the code snippet mentioned previously
using Scripts-Background.

f. Select the Mark as Complete checkbox and select Continue.

g. Add a new connection by clicking the link.

h. After you add a new connection, select the Mark as Complete
checkbox and select Continue.

i. Select the new connection record and select the Test
Connection link.

The Status code field displays 200 if the connection is successful.

j. Select the Mark as Complete checkbox and select Continue.

8. Fill out the fields on the Scheduled Data Import form:

Field
Description

Name
Name of the scheduled job.

Data source
Data source record that defines
the data to import.

Run as

Option to run the scheduled
job with the credentials of the
specified user.

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

Active
Option to activate the
scheduled job. Select this option.

Concurrent Import

Function that loads the data
from multiple import sets.
The function then processes
and transforms the data
concurrently.

Partition Method
Partition method for the
concurrent import set.

Partition Size
Import set size for early
scheduling.

Execute pre-import script
Option to specify a script to run
before the import is performed.

Execute post-import script
Option to specify a script to run
after the import is performed.

Application
Application that contains this
scheduled job.

Run
Frequency of running the import.

Conditional
Conditions under which this job is
executed.

9. Click Execute Now.

10. In the Help task bar, select Mark as Complete.

## CMDB classes targeted in the Service Graph
## Connector for SentinelOne

When you complete setting up the connection, you can configure the
integration to periodically pull data. The data is saved in tables that
extend from the Configuration item [cmdb_ci] table.

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

AWS Datacenter [cmdb_ci_aws_datacenter]

The following attributes in the AWS Datacenter
[cmdb_ci_aws_datacenter] table are populated by collected data.

Attribute label
Attribute name

Object Id
object_id

Region
region

Name
name

Relationships for AWS Datacenter

Parent Class
Relationship Type
Child Class

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Hosted On: Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Azure Datacenter [cmdb_ci_azure_datacenter]

The following attributes in the Azure Datacenter
[cmdb_ci_azure_datacenter] table are populated by collected data.

Attribute label
Attribute name

Object Id
region

Name
name

Region
region

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

Relationships for Azure Data Center

Parent Class
Relationship Type
Child Class

Azure Datacenter
[cmdb_ci_azure_data
center]

Hosted On: Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Availability Zone [cmdb_ci_availability_zone]

The following attributes in the Availability Zone
[cmdb_ci_availability_zone] table are populated by collected data.

Relationships for Availability Zone

Parent Class
Relationship Type
Child Class

Azure Datacenter
[cmdb_ci_azure_data
center]

Contains:Contained
by

Availability Zone
[cmdb_ci_availability_
zone]

Attribute label
Attribute name

Name
name

Object Id
object_id

Region
region

GCP Datacenter [cmdb_ci_google_datacenter]

The following attributes in the GCP Datacenter
[cmdb_ci_google_datacenter] table are populated by collected data.

Attribute label
Attribute name

Name
name

Object Id
object_id

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

Account Id
account_id

Datacenter Type
datacenter_type

Relationships for GCP Datacenter

Parent Class
Relationship Type
Child Class

GCP Datacenter
[cmdb_ci_google_dat
acenter]

Hosted On: Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Cloud Service Account [cmdb_ci_cloud_service_account]

The following attributes in the Cloud Service Account
[cmdb_ci_cloud_service_account] table are populated by collected
data.

Attribute label
Attribute name

Name
name

Object Id
object_Id

Account Id
account_Id

Datacenter Type
datacenter_type

Relationships for Cloud Service Account

Parent Class
Relationship Type
Child Class

Network
[cmdb_ci_network]
Hosted On: Hosts

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

10

Zurich ServiceNow AI Platform Capabilities

---
*Page 11*

Cloud Subnets [cmdb_ci_cloud_subnet]

The following attributes in the Cloud Subnets [cmdb_ci_cloud_subnet]
table are populated by collected data.

Attribute label
Attribute name

Object Id
object_id

Name
name

Relationships for Cloud Subnets

Parent Class
Relationship Type
Child Class

Network
[cmdb_ci_network]

Contains:Contained
by

Cloud Subnets
[cmdb_ci_cloud_subn
et]

Hardware Type [cmdb_ci_compute_template]

The following attributes in the Hardware Type
[cmdb_ci_compute_template] table are populated by collected data.

Attribute label
Attribute name

Name
name

Object Id
object_id

Relationships for Hardware Type

Parent Class
Relationship Type
Child Class

Compute Template
[cmdb_ci_compute_t
emplate]

Hosted On: Hosts

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

11

Zurich ServiceNow AI Platform Capabilities

---
*Page 12*

Parent Class
Relationship Type
Child Class

VM Instance
[cmdb_ci_vm_instanc
e]

Provisioned
From::Provisioned

Compute Template
[cmdb_ci_compute_t
emplate]

Cloud Network [cmdb_ci_network]

The following attributes in the Cloud Network [cmdb_ci_network] table
are populated by collected data.

Attribute label
Atribute name

Object Id
object_id

Name
name

Relationships for Cloud network

Parent Class
Relationship Type
Child Class

Network
[cmdb_ci_network]
Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Virtual Machine Instance [cmdb_ci_vm_instance]

The following attributes in the Virtual Machine Instance
[cmdb_ci_vm_instance] table are populated by collected data.

Attribute label
Attribute name

Object Id
object_id

Name
name

VM Instance ID
vm_inst_id

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

Relationships for VM Instance

Parent Class
Relationship Type
Child Class

VM Instance
[cmdb_ci_vm_instanc
e]

Hosted On: Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

VM Instance
[cmdb_ci_vm_instanc
e]

Virtualized
by::Virtualizes

Server
[cmdb_ci_server]

VM Instance
[cmdb_ci_vm_instanc
e]

Hosted On: Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Key Value [cmdb_key_value]

The following attributes in the Key Value [cmdb_key_value] table are
populated by collected data.

Attribute label
Attribute name

Key
key

Value
value

Tag
tag

Image [cmdb_ci_os_template]

The following attributes in the Image [cmdb_ci_os_template] table are
populated by collected data.

Attribute label
Attribute name

Object Id
object_id

Name
name

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

Relationships for Image

Parent Class
Relationship Type
Child Class

Image
[cmdb_ci_os_templat
e]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Server [cmdb_ci_server]

The following attributes in the Server [cmdb_ci_server] table are
populated by collected data.

Attribute label
Attribute name

Name
name

Serial number
serial_number

CPU speed (MHz)
cpu_speed

CPU count
cpu_count

RAM (MB)
ram

OS Address Width (bits)
os_address_width

Operating System
os

CPU core count
cpu_core_count

Fully qualified domain name
fqdn

CPU name
cpu_name

First Discovered
first_discovered

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

Computer [cmdb_ci_computer]

The following attributes in the Computer [cmdb_ci_computer] table are
populated by collected data.

Attribute label
Attribute name

Name
name

Serial number
serial_number

CPU speed (MHz)
cpu_speed

CPU count
cpu_count

RAM (MB)
ram

OS Address Width (bits)
os_address_width

Operating System
os

CPU core count
cpu_core_count

Fully qualified domain name
fqdn

CPU name
cpu_name

First Discovered
first_discovered

SentinelOne Asset Tags [sn_sec_sgc_sntlone_asset_tags]

The following attributes in the SentinelOne Asset Tags
[sn_sec_sgc_sntlone_asset_tags] table are populated by collected data.

Attribute label
Attribute name

ID
tags_id

Key
tags_key

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

Value
tags_value

Assigned At
tags_assignedat

Assigned By
tags_assignedby

Assigned By ID
assigned_by_id

IP Address [cmdb_ci_ip_address]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data.

Attribute label
Attribute name

IP Address
ip_address

Name
name

Nic
nic

IP version
ip_version

Relationships for IP Address

Parent Class
Relationship Type
Child Class

Server
[cmdb_ci_server]
Owns:Owned by
IP Address
[cmdb_ci_ip_address]

Network Adapter [cmdb_ci_network_adapter]

The following attributes in the Network Adapter
[cmdb_ci_network_adapter] table are populated by collected data.

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

Mac Address
mac_address

Name
name

Ip Default Gateway
ip_default_gateway

Discovery Source
discovery_source

Relationships for Network Adapter

Parent Class
Relationship Type
Child Class

Server
[cmdb_ci_server]
Owns:Owned by

Network Adapter
[cmdb_ci_network_ad
apter]

SentinelOne Additional Attributes
[sn_sec_sgc_sntlone_additonal_attributes]

The following attributes in the SentinelOne Additional Attributes
[sn_sec_sgc_sntlone_additonal_attributes] table are populated by
collected data.

Attribute label
Attribute name

NetworkInterfaces Name
networkinterfaces_name

NetworkInterfaces
GatewayMacAddress

networkinterfaces_gatewaymaca
ddress

UUID
uuid

Configuration item
configuration_item

Network Quarantine Enabled
network_quarantine_enabled

Last Successful Scan Date
last_successful_scan_date

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

Attribute label
Attribute name

License_Key
license_key

First Discovered
first_discovered

Location Enabled
location_enabled

Ad ComputerDistinguishedName
ad_computerdistinguishedname

Agent Version
agent_version

Scan Status
scan_status

Scan Started At
scan_started_at

ID
id

IP Address Subnet
ip_address_subnet

Mitigation Mode Suspicious
mitigation_mode_suspicious

Last Scan Finished At
last_scan_finished_at

Firewall Enabled
firewall_enabled

Console Migration Status
console_migration_status

Group ID
group_id

Operational State Expiration
operational_state_expiration

Last IP To Mgmt
last_ip_to_mgmt

Threat Reboot Required
threat_reboot_required

Machine Type
machine_type

Is Pending Uninstall

Is_pending_uninstall

ranger_status

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

Ranger Status

Ad LastUserDistinguishedName
ad_lastuserdistinguishedname

Agent Up To Date
agent_up_to_date

Ranger Version
ranger_version

Last Boot Time
last_boot_time

Disk Encryption Status
disk_encryption_status

Mitigation Mode
mitigation_mode

Last Full Scan
last_full_scan

Agent Uninstalled
agent_uninstalled

Extenal Id
extenal_id

Updated At
updated_at

Last Scan Aborted At
last_scan_aborted_at

Network Status
network_status

Show Alert Icon
show_alert_icon

Subscribed On
subscribed_on

Account ID
account_id

Recently Active
recently_active

Active Threats
active_threats

Allow Remote Shell
allow_remote_shell

Site Name
site_name

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

First Full Mode Time
first_full_mode_time

Infected
infected

App Vulnerability Status
app_vulnerability_status

Site ID
site_id

Agent Installer Type
agent_installer_type

Account Name
acount_name

NetworkInterfaces Name
networkinterfaces_name

NetworkInterfaces
GatewayMacAddress

networkinterfaces_gatewaymaca
ddress

NetworkInterfaces ID
networkinterfaces_id

user_actions_needed
user_actions_needed

aws_security_group
aws_security_group

proxyState_console
proxyState_console

proxyState_deepVisibility
proxyState_deepVisibility

Ad UserPrincipalName
ad_userPrincipalName

Ad ComputerMemberOf
ad_computerMemberOf

Ad ComputerDistinguishedName
ad_computerDistinguishedName

Ad LastUserMemberOf
ad_lastUserMemberOf

Ad LastUserDistinguishedName
ad_lastUserDistinguishedName

Ad Mail
ad_mail

Agent Decommissioned
agent_decommissioned

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

Agent Operational State
agent_operational_state

Last Active Date
last_active_date

Group Updated At
group_updated_at

Missing Permissions
missing_permissions

Service Graph Connector for SentinelOne Properties

Property
Description

sn_sec_sgc_sntlone.api_page_size

Enter the number of records per
page to retrieve.

• Type: string

• Default value: 1000

• Location: System Property
[sys_properties] table

Note:   To open the System Properties [sys_properties] table, enter
sys_properties.LIST in the navigation filter.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

21

Zurich ServiceNow AI Platform Capabilities

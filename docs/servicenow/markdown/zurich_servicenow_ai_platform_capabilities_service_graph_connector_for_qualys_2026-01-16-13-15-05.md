# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_qualys_2026-01-16-13-15-05

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_qualys_2026-01-16-13-15-05.pdf*

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

## Service Graph Connector for Qualys

The Service Graph Connector for Qualys pulls in asset inventory
data (hardware and software) from the Qualys database into the
Configuration Management Database (CMDB) application in your
ServiceNow AI Platform® instance.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported versions

Use this data to manage your Qualys resources directly from your
ServiceNow AI Platform® instance.

Supported Qualys APIs:

• Qualys Global Asset API v2. You might prefer to use this API if you are
importing data for the Security Posture Control Security Posture Control
application.

• Qualys Asset Management API v2. This API is deactivated by default.
You should only activate this API if you don't have access to the Qualys
Cybersecurity Asset Management (CSAM) product. ServiceNow uses a
different API (Asset management and tagging) for this API but the data
returned is not comprehensive.

Supported ServiceNow® versions:

• Utah

• Vancouver

• Washington

Use cases

The following are examples on how you can use the Service Graph
Connector for Qualys for different ServiceNow applications:

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

• Complements the Qualys Asset Discovery.

• Import data with the Global Asset API or the Asset Management API.

• Multi-instance support.

Guided Setup

The guided setup for the Service Graph Connector for Qualys provides
you with an organized sequence of tasks to configure the integration on
your instance.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration,
or a specific integration run. For more details about monitoring Qualys
integrations in the CMDB Integrations Dashboard, see Using the CMDB
Integrations Dashboard.

Hardware CI Rules

The hardware Configuration item (CI) mapping rule table is equipped
with hardware category1, hardware category2 and corresponding
target CI class. Following a Qualys API call, the system checks the
hardware category1 and hardware category2 to determine their
satisfaction, if hardware category1 and hardware category2 is match
with the table record then the associated target CI class is added to
the import set table data. During the mapping process, this designated
target CI class is then used.

Computer CI Rules

The Computer CI Mapping Rule table is equipped with predefined rules,
including criteria such as OS name, OS category, OS category 2, OS
Publisher, OS Product name, and the corresponding target CI class.
Following a Qualys API call, the system checks these rules to determine
their satisfaction. If a rule is met, the associated target CI class is added
to the import set table data. During the mapping process, this designated
target CI class is then used.

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

If you want to update CI attributes, you must create new reconciliation
rules to determine which discovery sources can update CI attributes.
See 'Reconciliation rules' in the online product documentation and the
Identification and Reconciliation Fundamentals article in the ServiceNow
Support Knowledge base for more information.

Asset Management CI Rules

The Asset Management CI Mapping Rule table is equipped with
predefined rules, including criteria such as Operating System, Is Volume
Info Present, Is processor Present, Cloud Provider and the corresponding
target CI class. Following a Qualys API call, the system checks these rules
to determine their satisfaction. If a rule is met, the associated target CI
class is added to the import set table data. During the mapping process,
this designated target CI class is then used.

## Configure the Service Graph Connector for Qualys

Set up the Qualys environment and scheduled jobs to import in Qualys
data into your Configuration Management Database (CMDB).

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

There are two supported Qualys APIs:

• Qualys Global Asset API v2. You might prefer to use this API if you are
importing data for the Security Posture Control application.

• Qualys Asset Management API v2. This API is deactivated by default.
You should only activate this API if you don't have access to the Qualys
Cybersecurity Asset Management (CSAM) product. ServiceNow® uses
a different API (Asset management and tagging) for this API but the
data returned is not comprehensive.

For more information, see Service Graph Connector for Qualys APIs.

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > Qualys > Setup.

2. Select Continue on the Home page.

3. Select Best Experience and Continue on the Experience page.
On the Service Graph Connector for Qualys page in the Configure
the connection page, three tasks are displayed:

• Configure the connection

• Add multiple instances

• Set up scheduled import jobs

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

4. Select Start for the Configure the Connection task to expand it.
The following steps are displayed:

• Configure Qualys authentication credentials

• Configure Qualys HTTP Connection

• Test Connection

5. Select Configure Qualys authentication credentials.

a. In the Username and Password fields, enter your Qualys user
name and password.

b. Select the Active check box to activate the record.

c. Right-click in the gray header titled Basic Auth Credentials and
select Save.

d. Select Mark as complete followed by Continue.
The Configure Qualys HTTP Connection page is displayed.

6. Fill in the fields.

a. Add the Qualys base URL or Host details.

Domain part of the URL without the 'https'. An example might be
qualysapi.qualys.com.

b. (Optional) If the API is accessible through a MID Server, activate
the Use MID Server check box.

c. In the advanced MID Server configuration section select the
appropriate MID Server from the MID Selection list.

d. Right-click in the gray header titled HTTP(s) Connection and
select Save.

e. Select Mark as complete followed by Continue.
The Test Connection page is displayed.

7. Test the connection.

a. Update the use_asset_management_and_tagging_api property
in the 'Service Graph Connection Properties' section.

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

Option
Description

true

Set the property
use_asset_management_and_t
agging_api flag to true if you
are using the asset
management and tagging API
in the configuration.

false

Set the property
use_asset_management_and_t
agging_api to false if you are
not using the asset
management and tagging API
in the configuration.

b. In the Related links section select the Test Connection link.
If the connection is successful, the status code field displays 200
or 201 and a message is displayed. If your connection test fails,
review the Message and Suggestion fields for how to proceed.

c. Right-click in the gray header titled Service Graph Connections
and select Save.

d. Select Mark as complete followed by Continue.
The Update Data Source Access page is displayed.

8. Update the data source.

a. Follow the steps listed at the top of the page to switch the
application scope with the application picker to open, edit, and
save the record.

b. Select a record from the list to open it.

c. Select the Application Access tab.

d. Select the check boxes to set the permissions you want.

e. Right-click in the gray header titled Tables and select Save.

f. Select Mark as complete followed by Continue.
The Update Scheduled Data Import page is displayed.

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

9. Update the Scheduled Data Import record.

a. Follow the steps listed at the top of the page to switch the
application scope with the application picker as required to
open, edit, and save the record.

b. Select the Application Access tab.

c. Select the check boxes to set the permissions you want.

d. Right-click in the gray header titled Table and select Save.

e. Select Mark as complete followed by Continue.
The Add Another Connection task is displayed.

10. Follow the instructions at the top of the page to add a connection.

a. Follow the steps listed at the top of the page to switch the
application scope with the application picker to open, edit, and
save the record.

b. Select the link.
The SG-Qualys Connections page is displayed.

c. Select Add Connection and fill out the fields.

Field
Description

Connection name
Unique name for your
connection

Connection URL
Connection URL

User name
Qualys account user name

Password
Qualys account password

d. Select Create Connection.

e. Navigate back to the Add Another Connection page in the
Setup Assistant.

f. Select Mark as complete followed by Continue.

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

The Configure MID Server for new HTTP connection page is
displayed.

11. Configure the MID Server

a. Select a record to open it.

b. Select the Use MID server check box.

c. Select the search icon in the MID Server field and choose one
from the list.

d. Right-click in the gray header titled HTTP(s) Connection and
select Save.

e. Select Mark as complete followed by Continue.
The Test New Connections page is displayed.

12. Test the connection.

a. Select the record for the connection you want to test.

b. Scroll to the Related links section and select the Test Connection
link.
If the connection is successful, the status code field displays 200
or 201 and a message is displayed. If your connection test fails,
review the Message and Suggestion fields for how to proceed.

c. Right-click in the gray header titled, Service Graph Connections
and select Save.

d. Select Mark as complete followed by Continue.
The Configure the scheduled jobs page is displayed.

13. Configure the scheduled jobs.

a. Select a record to open it.

b. Fill out the scheduled data import from.

Field
Description

Name
Name of the scheduled job.

Application
Read-only application name.

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

Data source
Data source record that
defines the data to import.

Run

How often you want the job
to run. If you want to run a
test import prior to scheduling
it, you might prefer to select
Once.

Run as

Option to run the scheduled
job with the credentials of the
specified user.

Conditional
Specific conditions under
which this job is run.

Active

Option to activate the
scheduled job. Select this
option.

Use connection

Leave this deactivated for
the first run. Specifies another
connection and credentials for
this job.

Concurrent Import

Leave check box activated.
Splits data into multiple imports
sets. See the field message for
more information.

Partition Method
Leave set as Custom size.

Partition Size
Leave set as 1,000. Import set
size for early scheduling.

Execute pre-import script

Leave check box selected.
Specifies a script to run before
the import is performed.

Execute post-import script

Leave check box selected.
Specifies a script to run after
the import is performed.

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

c. Right-click in the gray header titled Scheduled Data Import and
select Save.

d. (Optional) Select Execute Now.
If you do not choose to run the job on-demand, the next job runs
according to the schedule you set.

e. Select Mark as complete followed by Continue.
The Home page of the Setup Assistant is displayed.

14. (Optional) Add Multiple Instances

a. Select Add Multiple Instances to expand it.
The following steps are displayed:

• Update Data Source Access

• Update Scheduled Data Import

• Add Another Connection

• Configure MID Server for New HTTP connection

• Test New Connections

b. To update the Data Source, follow the steps listed in step 8.

c. To update the Scheduled Data Import, follow the steps in step 9.

d. To add another connection, follow the steps listed in step 10.

e. To configure a MID Server, follow the steps listed in step 11.

f. To test connections, follow the steps listed in step 12.

15. On the Service Graph Connector for Qualys page for Guided Setup,
select Complete to finish the configuration.

## Service Graph Connector for Qualys APIs

Data from the Qualys data source fields is imported with the Global Asset
API and the Asset Management and Tagging API.

Global Asset API

• A Qualys Cybersecurity Asset Management (CSAM) license is required.

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

• Asset information includes details such as Hardware Category and OS
Category.

Asset Management and Tagging API

• A CSAM license is not required

• Asset information does not include details about Hardware Category
and OS Category.

Mapped attributes

The following table compares what data is imported by the two APIs. The
sections after the table list data imported by the Global asset API that is
not supported by the Asset Management and Tagging API.

Global Asset API
Asset Management and Tagging API

Mapped attributes

assetId

assetUUID

hostId

lastModifiedDate

agentId

createdDate

sensorLastUpdatedDate

assetType

address

dnsName

assetName

Mapped attributes

created

name

dnsHostName

fqdn

os

manufacturer

tracking method

netbios

timezone

network guid

IsDockerHost

modified

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

Global Asset API
Asset Management and Tagging API

netbiosName

timeZone

biosDescription

lastBoot

totalMemory

cpuCount

lastLoggedOnUser

domainRole

hwUUID

biosSerialNumber

biosAssetTag

isContainerHost

lastVulnScan

model

cloudProvider

type

qwebHostId

criticalSocre

lastSystemBoot

domain

lastLogOnUser

lastComplianceScan

AWS Cloud details

accountId

availabilityZone

hasAgent

hostname

imageId

instanceId

instanceState

privateDNS

AWS Cloud details

instanceId

privateDnsName

privateIpAddress

instanceState

monitoringEnabled

region

accountId

availabilityZone

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

Global Asset API
Asset Management and Tagging API

privateIpAddress

instanceType

qualysScanner

kernelId

launchdate

region.code

region.name

spotInstance

subnetId

vpcId

tags.key

tags.value

instance_type

AWS Cloud tag details

• key

• value

MS Azure Cloud details

vmId

state

name

imagePublisher

imageVersion

offer

location

platform

MS Azure Cloud details

resourceGroupName

vmId

state

subscriptionId

location

image_id

publisher

version

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

Global Asset API
Asset Management and Tagging API

resourceGroupName

size

subnet

subscriptionId

virtualNetwork

offer

vm_size

subnet_id

vpc_id

MS Azure Cloud tag details

• key

• value

Network interface details

hostname

addressIpV4

addressIpV6

macAddress

interfaceName

dnsAddress

gatewayAddress

manufacturer

macVendorIntroDate

netmask

addresses

Network interface details

address

host_name

interface_name

macAddress

gatewayAddress

interface_id

type

Software details

Software details

version

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

Global Asset API
Asset Management and Tagging API

token1

token2

uniqueKey

publisher

installDate

id

installPath

lastUseDate

authorization

authorizationDetectionScore

name

Volume details

name

free

size

Volume details

name

free

size

Open port details

port

description

protocol

detectedService

firstFound

Open port details

port

protocol

serviceName

service_id

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

Global Asset API
Asset Management and Tagging API

lastUpdated

Processor details

description

speed

numCPUs

noOfSocket

threadsPerCore

coresPerSocket

multithreadingStatus

Processor details

name

speed

Tag details

tagId

tagName

foregroundColor

backgroundColor

businessImpact

criticalityScore

Asset tag details

id

name

Agent details

version

configurationProfile

activations

Agent details

agentVersion

agentLastCheckIn

status

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

Global Asset API
Asset Management and Tagging API

connectedFrom

lastActivity

lastCheckedIn

lastInventory

udcManifestAssigned

errorStatus

platform

connectedFrom

agentId

AgentConfigurationName

ChirpStatus

Additional Global asset API details

The following sections list data imported by the Global asset API that is
not supported by the Asset Management and Tagging API.

Global asset API OS details

• fullName

• version

• publisher

• osName

• category

• category1

• category2

• productName

• edition

• marketVersion

• update

• architecture

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

• productUrl

• productFamily

• installDate

• release

Global asset API OS lifecycle

OS lifecycle details

• gaDate

• eolDate

• eosDate

• stage

• lifeCycleConfidence

• eolSupportStage

• eosSupportStage

Global asset API OS taxonomy

OS Taxonomy details

• id

• name

• category1

• category2

Global asset API hardware

Hardware details

• fullName

• category

• category1

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

• category2

• manufacturer

• productName

• model

• productUrl

• productFamily

Global asset API hardware lifecycle

Hardware lifecycle details

• introDate

• gaDate

• eosDate

• obsoleteDate

• stage

• lifeCycleConfidence

Global asset API taxonomy

Hardware taxonomy details

• id

• name

• category1

• category2

Global asset API sensor

Sensor details

• activatedForModules

• pendingActivationForModules

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

• lastVMScan

• lastComplianceScan

• lastFullScan

• lastVmScanDateScanner

• lastVmScanDateAgent

• lastPcScanDateScanner

• lastPcScanDateAgent

• firstEasmScanDate

• lastEasmScanDate

Global asset API service

Service details

• name

• status

• description

Global asset API last location

Last location details

• city

• state

• country

• name

• continent

• postal

Global asset API criticality

Criticality details

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

• score

• isDefault

• lastUpdated

Global asset API processor

Processor details

• description

• speed

• numCPUs

• noOfSocket

• threadsPerCore

• coresPerSocket

• multithreadingStatus

Global asset API business information

Business information details

• businessAppListData

• riskScore

• passiveSensor

• domain

• subdomain

• missingSoftware

• whois

• organizationName

• isp

• asn

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

• easmTags

• hostingCategory1

• customAttributes

## CMDB classes targeted in the Service Graph
## Connector for Qualys

When you complete setting up the connection, you can configure the
integration to periodically pull data. The data is saved in tables that
extend from the Configuration item [cmdb_ci] table. The Service Graph
Connector for Qualys identifies and classifies information about various
configuration Items (CIs).

SGC Qualys Asset Cloud Tag

The following attributes in the SGC Qualys Asset Cloud Tag
[sn_sec_sgc_qualys_asset_cloud_tag] table are populated by collected
data.

Attribute label
Attribute name

Key
key

Qualys Asset
qualys_asset

Value
value

Configuration item
configuration_item

SGC Qualys Asset Software Details
[sn_sec_sgc_qualys_asset_software_details]

The following attributes in the SGC Qualys Asset Software Details
[sn_sec_sgc_qualys_asset_software_details] table are populated by
collected data.

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

Attribute label
Attribute name

Name
token1

Qualys Asset
qualys_asset

Configuration item
configuration_item

Unique key
unique_key

Id
id

Install Path
install_path

Last Use Date
last_use_date

Version
token2

Hardware Type [cmdb_ci_compute_template]

The following attributes in the Hardware Type
[cmdb_ci_compute_template] table are populated by collected data.

Attribute label
Attribute name

Name
name

Object ID
object_id

Image [cmdb_ci_os_template]

The following attributes in the Image [cmdb_ci_os_template] table are
populated by collected data.

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

25

Zurich ServiceNow AI Platform Capabilities

---
*Page 26*

Attribute label
Attribute name

Object ID
object_id

Offer
offer

Version
version

Software [cmdb_ci_spkg]

The following attributes in the Software [cmdb_ci_spkg] table are
populated by collected data.

Attribute label
Attribute name

Key
key

Discovery source
discovery_source

Name
name

Version
version

Manufacturer
manufacturer

SGC Qualys Asset Network Interface Details
[sn_sec_sgc_qualys_asset_nic_details]

The following attributes in the SGC Qualys Asset Network Interface Details
[sn_sec_sgc_qualys_asset_nic_details] table are populated by collected
data.

Attribute label
Attribute name

Configuration item
configuration_item

IPv4
ip_v4

Addresses
addresses

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

Attribute label
Attribute name

Interface Id
interface_id

IPv6
ip_v6

MAC Vendor Intro Date
mac_vendor_intro_date

Qualys Asset
qualys_asset

Type
type

Server [cmdb_ci_server]

The following attributes in the Server [cmdb_ci_server] table are
populated by collected data.

Attribute label
Attribute name

Manufacturer
manufacturer

Name
name

Asset tag
asset_tag

Class
sys_class_name

CPU count
cpu_count

DNS Domain
dns_domain

First discovered
first_discovered

Fully qualified domain name
fqdn

Install Status
install_status

Operating System
os

Operational status
operational_status

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

OS Address Width (bits)
os_address_width

OS Service Pack
os_service_pack

OS Version
os_version

RAM (MB)
ram

SGC Qualys Asset Open Port Details
[sn_sec_sgc_qualys_asset_open_port_details]

The following attributes in the SGC Qualys Asset Open Port Details
[sn_sec_sgc_qualys_asset_open_port_details] table are populated by
collected data.

Attribute label
Attribute name

Port
port

Protocol
protocol

Description
description

Detected Service
detected_service

First Found
first_found

Last Updated
last_updated

Qualys Asset
qualys_asset

Service Id
service_id

SGC Qualys Asset Details [sn_sec_sgc_qualys_asset_details]

The following attributes in the SGC Qualys Asset Details
[sn_sec_sgc_qualys_asset_details] table are populated by collected
data.

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

Asset Name
asset_name

Activated Modules
activated_modules

Address
address

Agent Configuration Profile
agent_configuration_profile

Agent Connected From
agent_connected_from

Agent Eror Status
agent_error_status

Agent ID
agent_id

Agent Last Activity
agent_last_activity

Agent Last Checked In
agent_last_checked_in

Agent Last Inventory
agent_last_inventory

Agent Platform
platform

Agent Status
status

Agent UDC Manifest Assigned
agent_udc_manifest_assigned

Agent Version
agent_version

ASN
asn

Asset ID
asset_id

Asset Type
asset_type

Asset UUID
asset_uuid

Assigned Location
assigned_location

AWS Host Name
aws_host_name

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

AWS Kernel ID
aws_kernel_id

AWS Launch Date
aws_launch_date

AWS Region Name
aws_region_name

Azure Image Publisher
azure_image_publisher

Azure Platform
azure_platform

Azure Subnet
azure_subnet

Azure Virtual Network
azure_virtual_network

Bios Description
bios_description

Bios Serial Number
bios_serial_number

Business AppListData
business_applist_data

Business Information
business_information

Chirp Status
chirp_status

City
lastlocation_city

Continent
lastlocation_continent

Country
lastlocation_country

Custom Attribrutes
custom_attributes

Domain
domain

Domain Role
domain_role

ESAM Tags
easm_tags

First EASM Scan Date
first_easm_scan_date

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

Attribute label
Attribute name

Hardware Category
hardware_category

Hardware Category1
hardware_category1

Hardware Category2
hardware_category2

Hardware FullName
hardware_fullname

Hardware Lifecycle Confidence
hardware_lifecycle_lifecycleconfid
ence

Hardware Lifecycle EOSDate
hardware_lifecycle_eosdate

Hardware Lifecycle GaDate
hardware_lifecycle_gadate

Hardware Lifecycle IntroDate
hardware_lifecycle_introdate

Hardware Lifecycle ObsoleteDate
hardware_lifecycle_obsoletedate

Hardware Lifecycle Stage
hardware_lifecycle_stage

Hardware Model
hardware_model

Hardware Product Family
hardware_product_family

Hardware Product Name
hardware_product_name

Hardware Product URL
hardware_product_url

Hardware Texonomy Category1
hardware_taxonomy_category1

Hardware Texonomy Category2
hardware_taxonomy_category2

Hardware Texonomy ID
hardware_taxonomy_id

Hardware Texonomy Name
hardware_taxonomy_name

Has Agent
aws_has_agent

Host ID
host_id

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

Hosting Category1
hosting_category1

Hw UUID
hw_uuid

Is Container Host
is_container_host

IsDefault
criticality_isdefault

ISP
isp

Last Boot
last_boot

Last Compliance Scan
last_compliance_scan

Last EASM Scan Date
last_easm_scan_date

Last Full Scan
last_full_scan

Last Location Name
lastlocation_name

Last Logged On User
last_logged_on_user

Last Modified Date
last_modified_date

Last PC Scan Date Agent
last_pc_scan_date_agent

Last PC Scan Date Scanner
last_pc_scan_date_scanner

Last Updated
criticality_lastupdated

Last VM Scan
last_vm_scan

Last VM Scan Date Agent
last_vm_scan_date_agent

Last VM Scan Date Scanner
last_vm_scan_date_scanner

Missing Software
missing_software

NetBios Name
netbios_name

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

Network Guid
network_guid

Organization Name
organization_name

OS Category
os_category

OS Category1
os_category1

OS Category2
os_category2

OS Edition
os_edition

OS Lifecycle Confidence
os_lifecycle_confidence

OS Lifecycle EOL Date
os_lifecycle_eol_date

OS Lifecycle EOLSupport Stage
os_lifecycle_eol_supportstage

OS Lifecycle EOS Date
os_lifecycle_eos_date

OS Lifecycle EOSSupport Stage
os_lifecycle_eos_supportstage

OS Lifecycle Ga Date
os_lifecycle_ga_date

OS Lifecycle Stage
os_lifecycle_stage

OS Market Version
os_market_version

OS Name
os_name

OS Product Family
os_product_family

OS Product Name
os_product_name

OS Product URL
os_product_url

OS Release
os_release

OS Taxonomy Category1
os_taxonomy_category1

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

OS Taxonomy Category2
os_taxonomy_category2

OS Taxonomy ID
os_taxonomy_id

OS Taxonomy Name
os_taxonomy_name

Passive Sensor
passive_sensor

Postal
lastlocation_postal

Provider
provider

Qualys Scanner
qualys_scanner

Risk Score
risk_score

Score
criticality_score

Sensor Last Updated Date
sensor_last_updated_date

Spot Instance
spot_instance

State
lastlocation_state

SubDomain
subdomain

Time Zone
time_zone

Tracking Method
tracking_method

WhoIs
whois

Virtual Machine Instance [cmdb_ci_vm_instance]

The following attributes in the Virtual Machine Instance
[cmdb_ci_vm_instance] table are populated by collected data.

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

Attribute label
Attribute name

Name
name

Object ID
object_id

IP Address
ip_address

Monitor
monitor

State
state

VM Instance ID
vm_inst_id

Cloud Service Account [cmdb_ci_cloud_service_account]

The following attributes in the Cloud Service Account
[cmdb_ci_cloud_service_account] table are populated by collected
data.

Attribute label
Attribute name

Account Id
account_id

Name
name

Object ID
object_id

Datacenter Type
datacenter_type

Cloud Mgmt Network Interface [cmdb_ci_nic]

The following attributes in the Cloud Mgmt Network Interface
[cmdb_ci_nic] table are populated by collected data.

Attribute label
Attribute name

MAC Address
mac_address

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

Attribute label
Attribute name

Name
name

Object ID
object_id

Public IP
public_ip

DNS Domain
dns_domain

Host Name
host_name

IP default gateway
ip_default_gateway

Netmask
netmask

Manufacturer
manufacturer

Availability Zone [cmdb_ci_availability_zone]

The following attributes in the Availability Zone
[cmdb_ci_availability_zone] table are populated by collected data.

Attribute label
Attribute name

Object ID
object_id

SGC Qualys Asset Tag [sn_sec_sgc_qualys_asset_tag]

The following attributes in the SGC Qualys Asset Tag
[sn_sec_sgc_qualys_asset_tag] table are populated by collected data.

Attribute label
Attribute name

Tag Id
tag_id

Tag Name
tag_name

Background Color
background_color

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

Attribute label
Attribute name

Business Impact
business_impact

Criticality Score
criticality_score

Foreground Color
foreground_color

Qualys Asset
qualys_asset

SGC Qualys Asset Processor Details
[sn_sec_sgc_qualys_asset_processor_details]

The following attributes in the SGC Qualys Asset Processor Details
[sn_sec_sgc_qualys_asset_processor_details] table are populated by
collected data.

Attribute label
Attribute name

Description
processor_description

Cores Per Socket
processor_corespersocket

Multi Threading Status
processor_multithreadingstatus

No Of Socket
processor_noofsocket

Number of CPUs
processor_numcpus

Qualys Asset
qualys_asset

Speed
processor_speed

File System [cmdb_ci_file_system]

The following attributes in the File System [cmdb_ci_file_system] table are
populated by collected data.

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

Name
name

Free space bytes
free_space_bytes

Size bytes
size_bytes

Software Instance [cmdb_software_instance]

The following attributes in the File System [cmdb_ci_file_system] table are
populated by collected data.

Attribute label
Attribute name

Installed on
installed_on

Name
name

Install date
install_date

Azure Datacenter [cmdb_ci_azure_datacenter]

The following attributes in the Azure Datacenter
[cmdb_ci_azure_datacenter] table are populated by collected data.

Attribute label
Attribute name

Name
name

Object ID
object_id

Region
region

AWS Datacenter [cmdb_ci_aws_datacenter]

The following attributes in the AWS Datacenter
[cmdb_ci_aws_datacenter] table are populated by collected data.

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

Name
name

Object ID
object_id

Region
region

Cloud Subnet [cmdb_ci_cloud_subnet]

The following attributes in the Cloud Subnet [cmdb_ci_cloud_subnet]
table are populated by collected data.

Attribute label
Attribute name

Object ID
object_id

Software Installation [cmdb_sam_sw_install]

The following attributes in the Software Installation [cmdb_sam_sw_install]
table are populated by collected data.

Attribute label
Attribute name

Display name
display_name

Publisher
publisher

Version
version

Discovery source
discovery_source

Install date
install_date

Cloud Network [cmdb_ci_network]

The following attributes in the Cloud Network [cmdb_ci_network] table
are populated by collected data.

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

Attribute label
Attribute name

Object ID
object_id

SGC Qualys Asset Service Details
[sn_sec_sgc_qualys_asset_service_details]

SGC Qualys Asset Service Details
[sn_sec_sgc_qualys_asset_service_details].

Name
name

Description
description

Qualys Asset
qualys_asset

Status
status

Relationships created by Cloud Network [cmdb_ci_network]

Parent class
Relationship type
Child class

Cloud Network
[cmdb_ci_network]
Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Cloud Network
[cmdb_ci_network]

Contains::Contained
by

Cloud Subnet
[cmdb_ci_cloud_subn
et]

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

Relationships created by Virtual Machine Instance
[cmdb_ci_vm_instance]

Parent class
Relationship type
Child class

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Provisioned
From::Provisioned

Image
[cmdb_ci_os_templat
e]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Virtualized
by::Virtualizes

Server
[cmdb_ci_server]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Provisioned
From::Provisioned

Hardware Type
[cmdb_ci_compute_t
emplate]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Relationships created by Server [cmdb_ci_server]

Parent class
Relationship type
Child class

Server
[cmdb_ci_server]
Reference

SGC Qualys Asset
Network Interface
Details
[sn_sec_sgc_qualys_as
set_nic_details]

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

Parent class
Relationship type
Child class

Server
[cmdb_ci_server]
Reference
Software Installation
[cmdb_sam_sw_install]

Server
[cmdb_ci_server]
Reference

SGC Qualys Asset
Service Details
[sn_sec_sgc_qualys_as
set_service_details]

Server
[cmdb_ci_server]
Reference

SGC Qualys Asset
Software Details
[sn_sec_sgc_qualys_as
set_software_details]

Server
[cmdb_ci_server]
Reference

SGC Qualys Asset
Open Port Details
[sn_sec_sgc_qualys_as
set_open_port_details]

Server
[cmdb_ci_server]
Reference

SGC Qualys Asset
Processor Details
[sn_sec_sgc_qualys_as
set_processor_details]

Server
[cmdb_ci_server]
Reference

SGC Qualys Asset Tag
[sn_sec_sgc_qualys_as
set_tag]

Server
[cmdb_ci_server]
Reference

SGC Qualys Asset
Cloud Tag
[sn_sec_sgc_qualys_as
set_cloud_tag]

Server
[cmdb_ci_server]
Reference

SGC Qualys Asset
Details
[sn_sec_sgc_qualys_as
set_details]

Server
[cmdb_ci_server]

Contains::Contained
by

File System
[cmdb_ci_file_system]

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

Relationships created by Azure Datacenter
[cmdb_ci_azure_datacenter]

Parent class
Relationship type
Child class

Azure Datacenter
[cmdb_ci_azure_data
center]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Contains::Contained
by

Availability Zone
[cmdb_ci_availability_
zone]

Azure Datacenter
[cmdb_ci_azure_data
center]

Contains::Contained
by

Availability Zone
[cmdb_ci_availability_
zone]

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Hosted on::Hosts

Cloud Service
Account
[cmdb_ci_cloud_servi
ce_account]

Relationships created by Hardware Type
[cmdb_ci_compute_template]

Parent class
Relationship type
Child class

Hardware Type
[cmdb_ci_compute_t
emplate]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Hardware Type
[cmdb_ci_compute_t
emplate]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

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

Relationships created by Image [cmdb_ci_os_template]

Parent class
Relationship type
Child class

Image
[cmdb_ci_os_templat
e]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Image
[cmdb_ci_os_templat
e]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Relationships created by Cloud Mgmt Network Interface
[cmdb_ci_nic]

Parent class
Relationship type
Child class

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Hosted on::Hosts

AWS Datacenter
[cmdb_ci_aws_datac
enter]

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

Hosted on::Hosts

Azure Datacenter
[cmdb_ci_azure_data
center]

Reference-type relationships

Parent class
Relationship type
Child class

SGC Qualys Asset
Software Details
[sn_sec_sgc_qualys_as
set_software_details]

Reference
Server
[cmdb_ci_server]

SGC Qualys Asset
Network Interface
Details
[sn_sec_sgc_qualys_as
set_nic_details]

Reference

Cloud Mgmt
Network Interface
[cmdb_ci_nic]

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

Parent class
Relationship type
Child class

SGC Qualys Asset
Cloud Tag
[sn_sec_sgc_qualys_as
set_cloud_tag]

Reference
Server
[cmdb_ci_server]

Software Instance
[cmdb_software_insta
nce]

Reference
Server
[cmdb_ci_server]

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

45

Zurich ServiceNow AI Platform Capabilities

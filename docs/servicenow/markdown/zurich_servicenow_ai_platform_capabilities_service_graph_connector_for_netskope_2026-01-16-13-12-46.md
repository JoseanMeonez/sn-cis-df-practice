# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_netskope_2026-01-16-13-12-46

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_netskope_2026-01-16-13-12-46.pdf*

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

## Service Graph Connector for Netskope

The Service Graph Connector for Netskope pulls in asset inventory
data (hardware and software) from the Netskope database into
the Configuration Management Database (CMDB) application in your
ServiceNow AI Platform® instance.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Supported versions

• Netskope API version: Get Client Data v1.

• Netskope client version: 112.

• Washington, Xanadu, Yokohama ServiceNow® family releases.

Use cases

• Import Netskope Client information and store it in appropriate
configuration item (CI) classes in your CMDB.

• Configure multiple instances of Netskope in the Service Graph
Connector.

Guided setup

Use the guided setup feature to help you configure your integration in an
organized sequence of tasks.

CMDB integrations dashboard

The Integration Commons for CMDB store app provides a dashboard with
a central view of the status, processing results, and processing errors of all
installed integrations. You can see metrics for all integration runs. You can
filter the view to a specific CMDB integration, a specific time duration, or
a specific integration run. For more details about monitoring SentinelOne

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

integrations in the CMDB Integrations Dashboard, see Using the CMDB
Integrations Dashboard.

## Configure the Service Graph Connector for Netskope

The guided setup for the Service Graph Connector for Netskope provides
an organized sequence of tasks to configure the integration on your
ServiceNow AI Platform instance.

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

• Guided Setup (com.sn.ads.setup).

• Data Stream (com.glide.hub.action_type.datastream).

• ITOM Patterns.

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

Roles required:

• Netskope Role - Viewer

• ServiceNow AI Platform® Role - admin

Procedure

1. Navigate to Service Graph Connectors > Netskope > Setup.

2. On the Home page, select Continue.

3. On the Experience page, select the Best Experience from it.

4. On the Service Graph Connector for Netskope page in the Configure
the connection page, select the Configure Netskope Authentication
Credentials task and follow these steps:

a. In the API Key field, enter your Netskope API Key and update the
credential record.

b. Select the Mark as Complete checkbox and select Continue.

5. In the Configure Netskope HTTP Connection task follow these steps:

a. Add the Netskope base URL (Uniform Resource Locator).

b. Select the Mark as Complete checkbox and select Continue.

6. In the Test Connection task follow these steps:

a. Select the Test Connection link.

The Status code field displays 200 if the connection is successful.

b. Select the Mark as Complete checkbox and select Continue.

7. (Optional) To create another connection, select the Update Data
Source Access section and follow these steps:

a. Give permission to create and update the data source.

b. Select the Mark as Complete checkbox and select Continue.

c. Give permission to create and update the Scheduled Import
Sets.

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
the data to import, for example,
SG-Netskope-Client.

Run as

Option to run the scheduled
job with the credentials of the
specified user.

Active
Option to activate the
scheduled job. Select this option.

Concurrent Import

Function that loads the data
from multiple import sets.
The function then processes
and transforms the data
concurrently.

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

Partition Method

Partition method for the
concurrent import set. Select
Custom Size.

Partition Size
Import set size for early
scheduling. Set 1000 as a value.

Execute pre-import script

Option to specify a script to run
before the import is performed.
Leave this field with its default
setting.

Execute post-import script

Option to specify a script to run
after the import is performed.
Leave this field with its default
setting.

Application
Application that contains this
scheduled job.

Run
Frequency of running the import.

Conditional
Conditions under which this job is
executed.

9. Click Execute Now.

10. In the Help task bar, select Mark as Complete and select Continue.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

7

Zurich ServiceNow AI Platform Capabilities

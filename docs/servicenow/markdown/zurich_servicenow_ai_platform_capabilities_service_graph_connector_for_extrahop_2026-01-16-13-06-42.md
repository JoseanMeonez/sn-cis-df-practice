# zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_extrahop_2026-01-16-13-06-42

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_for_extrahop_2026-01-16-13-06-42.pdf*

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

## Service Graph Connector for ExtraHop

Use the Service Graph Connector for ExtraHop to pull data from the
ExtraHop application into your ServiceNow instance.

Important:   ServiceNow hosted Service Graph Connector for
ExtraHop is now deprecated and no longer supported or available
for new activation. ExtraHop hosted Service Graph Connector for
ExtraHop provides the latest experience for this functionality. For
details, see the Deprecation Process [KB0867184] article in the Now
Support Knowledge Base.

The Service Graph Connector for ExtraHop provides real-time network
visibility across your enterprise by implementing stream processing, so that
you can transform your network data into structured wire data.

The Service Graph Connector for ExtraHop pulls network visibility data
into the ServiceNow® Configuration Management Database (CMDB)
application. The connector enriches discovered device data and
establishes relationships between devices based on network traffic flow.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

System requirements and supported versions

Dependencies and requirements:

• MID Server that is installed on Linux or Windows, unless the ExtraHop
appliance is publicly accessible.

• ExtraHop Discover appliance with firmware version 7.2 or later with a
user account that has unlimited privileges.

• Supported versions: ExtraHop v7.9.

• Supported ServiceNow versions:

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

• Tokyo

• Utah

• Vancouver

• Washington DC

Use cases

The following are examples on how you can use the Service Graph
Connector:

• Identification of network interactions between CIs.

• Discovery of network traffic flow data between computers or other
types of hardware.

• Creation of relationships between devices. The relationships are based
on network traffic flow.

Guided setup

The guided setup for the Service Graph Connector for ExtraHop provides
an organized sequence of tasks to configure the integration on your
instance. To access the guided setup, see Configure Service Graph
Connector for ExtraHop.

CMDB Integrations Dashboard

The Integration Commons for CMDB store app provides a dashboard
with a central view of the status, processing results, and processing
errors of all installed Service Graph Connectors. You can see metrics
for all integration runs. You can also filter the view to a specific
CMDB integration, a specific time duration, or a specific integration run.
For more details about monitoring ExtraHop integrations in the CMDB
Integrations Dashboard, see Using the CMDB Integrations Dashboard.

Data mapping

Data from data sources in the ExtraHop application is mapped and
transformed into the ServiceNow CMDB Configuration Item (CI) class
definitions using the Robust Transform Engine (RTE). Data is inserted into
the ServiceNow CMDB using the Identification and Reconciliation Engine
(IRE).

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

When you complete setting up the connection, you can configure the
integration to periodically pull data from the ExtraHop application. The
data is loaded into the following staging tables:

• ExtraHop Computer [sn_extrahop_integr_computer]

• ExtraHop Network Activity [sn_extrahop_integr_activity]

The data is then inserted into the following target tables:

• CI Relationship [cmdb_rel_ci]

• Hardware [cmdb_ci_hardware]

• IP Address [cmdb_ci_ip_address]

• Network Adapter [cmdb_ci_network_adapter]

Related concepts

• Service Graph Connectors

## Configure Service Graph Connector for ExtraHop

Set up a REST message and scheduled jobs to import ExtraHop data into
your CMDB.

Before you begin

Important:   ServiceNow hosted Service Graph Connector for
ExtraHop is now deprecated and no longer supported or available
for new activation. ExtraHop hosted Service Graph Connector for
ExtraHop provides the latest experience for this functionality. For
details, see the Deprecation Process [KB0867184] article in the Now
Support Knowledge Base.

To use this Service Graph Connector, you need a subscription to
a Subscription Unit that is based in the IT Operations Management
(ITOM) Visibility application or in the ITOM Discovery application. As
defined in the section titled "Managed IT Resource Types" in ServiceNow
Subscription Unit Overview for your subscription, for managed IT resources
that are created or modified in the CMDB by this Service Graph

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

Connector, but that aren’t yet managed by ITOM Visibility or ITOM
Discovery, these resources will increase Subscription Unit consumption
from that application. Review your current Subscription Unit consumption
within ITOM Visibility or ITOM Discovery to ensure available capacity.

Dependencies and requirements:

• The Integration Commons for CMDB store app, which is automatically
installed.

• The CMDB CI class models store app, which is automatically installed.
See CMDB CI Class Models.

• ITOM Licensing plugin (com.snc.itom.license). For more information, see

Request Discovery.

• ITOM Discovery License plugin (com.snc.itom.discovery.license). You
must activate this plugin.

• MID Server that is installed on Linux or Windows, unless the ExtraHop
appliance is publicly accessible.

• ExtraHop Discover appliance with firmware version 7.2 or later, with a
user account that has unlimited privileges.

• To connect to the ExtraHop application, configure an API key. For
more information, see ExtraHop REST API Guide, specifically, see the
"ExtraHop API requirements" section.

Roles required: admin

Procedure

1. Navigate to All > Service Graph Connector ExtraHop > Setup.

2. On the Getting started page, click Get Started.

3. On the Service Graph Connector for the ExtraHop page, in the
Configure REST message section, select the task Configure ExtraHop
REST message.

4. Configure a REST message to use when sending requests to the
ExtraHop API.

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

a. On the next page, in the Configure ExtraHop REST message task
section, click Configure.

b. On the form, fill in the fields.

REST Message form

Field
Description

Name

Descriptive name for this
REST Message. This field is
automatically set.

Endpoint

URL to the web service API
endpoint. Set the field to
a base URL. For example,
https://myextrahop.com.

Note:   Updating the
Endpoint base URL also
updates the base URLs
for all HTTP methods that
are associated with the
ExtraHop REST message.
In the HTTP Request tab,
update the Authorization
header to use your API key
in the Value field.

Description

Description for this REST
Message. This field is
automatically set.

Application

Application that contains
this message. The field is
automatically set.

Authentication type

Type of authentication to
apply to HTTP requests. The
field is automatically set.

Use mutual authentication

Option to use
multiple authentication by
authenticating HTTP requests.

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

Mutual authentication cannot
be used with a MID Server.

c. Click Update if necessary.

d. In the Configure ExtraHop REST message task section, click Mark
as Complete.

5. Test the connection to the ExtraHop Computer API.

a. In the Test Computer connection task section, click Configure.

b. On the form, fill in the fields.

HTTP Method form

Field
Description

Name

Unique identifier for this
HTTP method. This field is
automatically set.

Endpoint
URL to the web service API
endpoint

Use MID Server

MID Server that sends this HTTP
request. Using a MID Server
is not compatible with mutual
authentication.

REST Message

REST message record that this
method is based on. This field is
automatically set.

HTTP method

HTTP method that is
implemented by this method.
This field is automatically set.

Application

Application that contains
this method. This field is
automatically set.

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
Description

Authentication type
Type of authentication to
apply to HTTP requests.

Use mutual authentication

Option to use
multiple authentication by
authenticating HTTP requests.
Mutual authentication cannot
be used with a MID Server.

c. Select the HTTP Request tab and fill out the Use MID Server field.

d. Click the Authentication tab and then click the Test related link.
Testing the connection takes a few moments. When the test is
complete, the page is refreshed and shows the test results.

e. Select Mark as Complete.

Note:   The connection is successful if the HTTP Status field
is set to 200. If there are any errors in the Error Message
field, then the connection failed and further troubleshooting
is required.

f. Click Update if necessary.

g. In the Test Computer connection task section, click Mark as
Complete.

6. Test the connection to the ExtraHop Network Activity Create API.

a. In the Test Network Activity Create connection task section, click
Configure.

b. On the form, fill in the fields.

HTTP Method form

Field
Description

Name
Unique identifier for this HTTP
method.

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

Endpoint
URL to the web service API
endpoint

Use MID Server

MID Server that sends this HTTP
request. Using a MID Server
is not compatible with mutual
authentication.

REST Message

REST message that this method
is based on. This field is
automatically set.

HTTP method

HTTP method that is
implemented by this method.
This field is automatically set.

Application

Application that contains
this record. This field is
automatically set.

Authentication type

Type of authentication to
apply to HTTP requests. This
field is automatically set.

Use mutual authentication

Option to use
multiple authentication by
authenticating HTTP requests.
Mutual authentication cannot
be used with a MID Server.

c. Click the Authentication tab and then click the Test related link.
Testing the connection takes a few moments. When the test is
complete, the page is refreshed and shows the test results.

d. Select Mark as Complete.

Note:   The connection is successful if the HTTP Status field
is set to 200. If there are any errors in the Error Message
field, then the connection failed and further troubleshooting
is required.

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

e. Click Update if necessary.

f. In the Test Network Activity Create connection task section, click
Mark as Complete.

7. Set up the scheduled import jobs.

a. On the Service Graph Connector for ExtraHop page, in the
Set up scheduled import jobs section, select the task Configure
Computer scheduled job.

b. In the Configure Computer scheduled job task section, click
Configure.

c. On the form, fill in the fields.

Scheduled Data Import form

Field
Description

Name
Name of the scheduled job.

Data source
Data source record that
defines the data to import.

Run as

Option to run the scheduled
job with the credentials of the
specified user.

Active

Option to activate the
scheduled job. Select this
option.

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

Execute pre-import script

Option to specify a script
to run before the import is
performed.

Execute post-import script

Option to specify a script
to run after the import is
performed.

Application
Application that contains this
scheduled job.

Run
Frequency of running the
import.

Conditional
Conditions under which this job
is executed.

d. Click Update if necessary.

e. In the Configure Computer scheduled job task section, click Mark
as Complete.

8. Configure the Network Activity scheduled job.

a. On the Service Graph Connector for ExtraHop page, in the
Set up scheduled import jobs section, select the task Configure
Network Activity scheduled job.

b. In the Configure Network Activity scheduled job task section,
click Configure.

c. On the form, fill in the fields.

Scheduled Data Import form

Field
Description

Name
Name of the scheduled job.

Data source
Data source record that
defines the data to import.

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

Run as

Option to run the scheduled
job with the credentials of the
specified user.

Active

Option to activate the
scheduled job. Select this
option.

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

Option to specify a script
to run before the import is
performed.

Execute post-import script

Option to specify a script
to run after the import is
performed.

Application
Application that contains this
scheduled job.

Run
Frequency of running the
import.

Conditional
Conditions under which this job
is executed.

d. Click Update if necessary then Mark as Complete.

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

## CMDB classes targeted in Service Graph Connector for
## ExtraHop

When you complete setting up the connection, you can configure the
integration to periodically pull data from ExtraHop. The data is saved in
tables that extend from the Configuration item [cmdb_ci] table.

Important:   ServiceNow hosted Service Graph Connector for
ExtraHop is now deprecated and no longer supported or available
for new activation. ExtraHop hosted Service Graph Connector for
ExtraHop provides the latest experience for this functionality. For
details, see the Deprecation Process [KB0867184] article in the Now
Support Knowledge Base.

The following attributes in the Hardware [cmdb_ci_hardware] table are
populated by collected data:

Attribute label
Attribute name

Name
name

Manufacturer
manufacturer

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
Owns::Owned by

Network Adapter
[cmdb_ci_network_ad
apter]

Hardware
[cmdb_ci_hardware]

Receives data
from::Sends data to

Hardware
[cmdb_ci_hardware]

The following attributes in the IP Address [cmdb_ci_ip_address] table are
populated by collected data:

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

IP Address
ip_address

IP version
ip_version

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

The following attributes in the Network Adapter
[cmdb_ci_network_adapter] table are populated by collected data:

Attribute label
Attribute name

Name
name

Configuration Item
cmdb_ci

MAC Address
mac_address

Relationship created for Network Adapter

Parent class
Relationship type
Child class

Network Adapter
[cmdb_ci_network_ad
apter]

Reference
Hardware
[cmdb_ci_hardware]

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

15

Zurich ServiceNow AI Platform Capabilities

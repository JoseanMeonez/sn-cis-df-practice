# zurich_servicenow_ai_platform_capabilities_cmdb_ci_class_models_2026-01-16-12-21-11

*Source: zurich_servicenow_ai_platform_capabilities_cmdb_ci_class_models_2026-01-16-12-21-11.pdf*

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

## CMDB CI Class Models

The CMDB contains base-system classes that store data about
configuration items (CIs). The CMDB CI Class Models ServiceNow® Store
app adds class models that extend the CMDB class hierarchy, including
class descriptions, identification rules, identifier entries, and dependent
relationships if applicable.

You can use the added classes like any other class. Applications such as
Discovery and Service Mapping can use class extensions to populate CIs
and to discover technologies and software.

See the full release notes for all CMDB CI Class Models.

Related ServiceNow® Store apps and reference information:

• Configuration Management database: A collection of class diagrams
and class attributes for key CMDB classes.

• CMDB tables descriptions: Descriptions of key CMDB tables in the base
system.

• Populating the CMDB: Information about the various options for
populating the CMDB.

• Discovery patterns: A ServiceNow Store app that provides a library of
Discovery patterns for discovering specific devices and applications in
the industry.

• Service Graph Connectors: ServiceNow Store apps that provide
predefined integrations for importing and integrating common third-
party data into CMDB classes. Also includes the IntegrationHub ETL
wizard for creating new ETL transform maps.

Add class models

The app adds classes, columns, and associated metadata as related
records in the following tables:

• CMDB Class Information [cmdb_class_info]: Class descriptions

• Identifier [cmdb_identifier]: Identification rules

• Identifier Entry [cmdb_identifier_entry]: Identification entries

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

• CMDB Metadata Hosting Rules [cmdb_metadata_hosting]: Dependent
relationships

Discover using extension classes

The following table lists the software and technologies that applications
can discover using the extension classes. It provides links to
documentation for CMDB CI Class Models and the corresponding
discovery patterns.

Software/Technology
CMDB CI Class Models
Store app
Discovery patterns

Avi load balancer
Avi load balancer
extension classes

Avi Vantage load
balancer discovery

BYOL Model of RDS for
Oracle

BYOL model of RDS
for Oracle extension
classes

Firewall
Firewall extension
classes

IBM Hardware
Management Console
(HMC)

IBM Hardware
Management Console
(HMC) extension
classes

IBM Virtualization
and Hardware
Management Console
discovery

Internet of Things (IoT)
Internet of Things (IoT)
extension classes
N/A

Nutanix
Nutanix extension
classes

Nutanix Acropolis
discovery

OpenStack
OpenStack extension
classes

OpenStack resource
discovery

Red Hat Virtualization
(RHV)

Red Hat Virtualization
(RHV) extension
classes

Red Hat Virtualization
discovery

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

Software/Technology
CMDB CI Class Models
Store app
Discovery patterns

Transport Layer
Security (TLS)

Transport Layer
Security (TLS) extension
classes

Discovery procedures
provided by
Certificate Inventory
and Management
ServiceNow Store app

VMware NSX load
balancer

VMware NSX load
balancer extension
classes

VMware NSX
Advanced load
balancer discovery

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Verify successful installation

After installing the CMDB CI Class Models store app, make sure the
classes were added successfully:

1. Navigate to All > Configuration > CI Class Manager.

2. Click Hierarchy to display the CI Classes list.

This list contains the added classes, such as the Nutanix classes.

3. Select a class to see the corresponding class details, identification
rules, identifier entries, and dependent relationships, if applicable.

Warning:   Uninstalling the CMDB CI Class Models application might
compromise the integrity of the CMDB and result in unexpected
behavior.

## API extension classes

The CMDB CI Class Models ServiceNow Store app adds or updates
classes for APIs (application programming interface).

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

The CMDB CI Class Models app adds class models that extend the
CMDB class hierarchy, including class descriptions, identification rules,
identifier entries, and, if applicable, dependent relationships. You can use
the added classes just like any other CMDB class. Applications such as
Discovery and Service Mapping Patterns can use the class extensions to
populate CIs and discover technologies and software.

See the full release notes for all CMDB CI Class Models.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

APIs

APIs are a set of definitions and protocols that enable computer
programs to communicate with each other, which enables you to
build or integrate application software. APIs typically use web-based
technology to communicate with other APIs. APIs are generally used to
programmatically perform jobs or tasks, or to view, import, export, delete,
or modify data.

The classes added in this release extend the CMDB data model and
provide a foundation for the representation of API CI classes. You can use
this foundation to do the following:

• Gain greater visibility into your APIs.

• Identify security issues and vulnerabilities associated with an API
endpoint.

Classes

This section lists the classes that the CMDB CI Class Models store app adds
or updates. For additional detail, see the Community article titled "New
Data Model in CMDB for APIs".

CMDB CI Class Models: The following classes for API are available. For
the list of classes in the base system, including classes that this app might
extend, see CMDB tables descriptions.

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

Class
Extends
Description

API

[cmdb_ci_api]

Configuration Item

[cmdb_ci]

APIs that enable two
computer programs to
communicate with
each other, typically
using web-based
technologies.
Example: ChatAPI
(https://
[apiID].execute-
api.use-
east-2.amazonaws.co
m).

API Component

[cmdb_ci_api_compo
nent]

Configuration Item

[cmdb_ci]

Reusable objects
related to your
API definition that
facilitate functionality
or exchange
of data. API
Headers related list.
Example: GET https://
[instance].service-
now.com/api/now/
table/{tablename}.

API Frontend

[cmdb_ci_api_fronten
d]

API Component

[cmdb_ci_api_compo
nent]

The part of an API from
which a client or user
interacts or makes
requests. Example: GET
https://
[apiID].execute-api.us-
east-2.amazonaws.co
m/{proxy+}.

API Backend

[cmdb_ci_api_backen
d]

API Component

[cmdb_ci_api_compo
nent]

The part of an
API that fulfills
requests by interacting
with backend
services, such as
servers. Example:

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

Class
Extends
Description

Lambda:Chat-API-
Proxy.

API Gateway

[cmdb_ci_api_gatewa
y]

Application

[cmdb_ci_appl]

API infrastructure
that centralizes client
API requests and
manages backend
processes and
services. Example:
Kong Gateway.

Managed API

[cmdb_ci_managed_
api]

Configuration Item

[cmdb_ci_api]

API discovered from
a gateway or
management service.
You can enforce a
dependency on a
gateway for APIs in this
class.

Class attributes

CMDB CI Class Models: Release 1.49.0 adds the following attributes to the
respective classes.

API [cmdb_ci_api]

Attribute
Data type
Description

Base URL
String (1024)

Base address from
which all API
components extend.

ID
String (1024)
Unique identifier from
the source system.

Type
Choice list

Type of API. You can
specify:

• REST

• SOAP

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

Attribute
Data type
Description

• HTTP

• gRPC

• GraphQL

• Websocket

Version
Numeric
Version of the API.

Spec Location
URL

URL to the location of
the API specification.
Example: OpenAPI
spec definition.

Technical
Specification Location
String

Location of the
technical specification
repository for an
API. Example: GitHub
repository containing
the deployed API
code.

Design Specification
Location
String

URL to the location
of the API design
or documentation.
Example: SwaggerHub
API Design
Specification URL.

The API [cmdb_ci_api] class supports mapping of tags and labels to the
Key Value [cmdb_key_value] table to enable key-value storage for API
metadata.

API Component [cmdb_ci_api_component]

Attribute
Data type
Description

Method
String

REST API methods.
Examples:

• GET

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

Attribute
Data type
Description

• POST

• DELETE

Protocol
String

Communication
protocol. Example:
HTTP, HTTPS.

Host
String (100)
System that hosts the
API.

Path
String (1024)
Specific route the API
follows.

Port
String

Communication port.
Example: 80, 443, and
so on.

URL
String (1024)
URL of the resource
being called.

ID
String (1024)
Unique identifier from
the source system.

Internet Facing
Boolean

Boolean that
denotes whether
the component is
reachable from the
public internet. Specify
1 or "true" if
the component is
reachable.

Authorization
String

Type of authorization
or authentication
method. Example:

• Basic

• Key

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

Attribute
Data type
Description

• OAuth

• None

Request data types
String (255)

List of data types in
the request. Examples:

• CC

• Email

• Address

Response data types
String (255)

List of data types
in the response.
Examples:

• CC

• Email

• Address

The API Component [cmdb_ci_api_component] class supports mapping
of tags and labels to the Key Value [cmdb_key_value] table to enable
key-value storage for API component metadata.

API Frontend [cmdb_ci_api_frontend]

Attribute
Data type
Description

Parent ID

Reference to
[cmdb_ci_api_fronten
d]

Reference to a parent
API component.

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

API Backend [cmdb_ci_api_backend]

Attribute
Data type
Description

Type
String

Backend protocol
types of the API.
Examples:

• Lambda

• HTTP

• Logic App

API Gateway [cmdb_ci_api_gateway]

Attribute
Data type
Description

ID
String (255)
Unique identifier from
the source system.

The API Gateway [cmdb_ci_api_gateway] class supports mapping of
tags and labels to the Key Value [cmdb_key_value] table. The mapping
enables key-value storage for API gateway metadata.
The following marker classes are available for API gateways. These classes
inherit all attributes from the API Gateway [cmdb_ci_api_gateway]
parent class.

• Anypoint API Gateway [cmdb_ci_api_gateway_anypoint] (provided by
MuleSoft)

• Tyk API Gateway [cmdb_ci_api_gateway_tyk] (provided by Tyk)

• Boomi API Gateway [cmdb_ci_api_gateway_boomi] (provided by
Boomi)

The marker classes follow the existing class structure and do not require
changes to Identification and Reconciliation engine (IRE) rules.

Note:   The Managed API [cmdb_ci_managed_api] class is specific
to APIs discovered from gateways and other managed services, and
does not introduce new attributes.

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

In API gateways and developer portals, an API product bundle is a
collection of one or more APIs for consumption by developers and
applications. Some platforms use the term for an API product alone.

API Product Bundle [cmdb_ci_api_product_bundle]

Attribute
Data type
Description

ID
String (255)
Unique identifier of the
API product bundle.

Discovered Approval
Type
String

Type of request
approval as
discovered from the
source system.

Discovered Access
Type
String

Access configuration
as discovered from
the source system. For
example, public or
internal.

Creation Date
Date/Time

Date and time
when the API
product bundle was
initially discovered or
recorded.

Last Modified Date
Date/Time

Date and time of the
most recent update
to the API product
bundle.

Discovered State
String

Current state of
the product bundle
as reported by
the source. For
example, published or
deprecated.

To access one or more API product bundles, a developer can register
for an API consumer subscription on a developer portal. The subscription
registers with one or more bundles and provides a key for access to the
APIs in the bundles.

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

API Consumer Subscription [cmdb_ci_api_consumer_subscription]

Attribute
Data type
Description

Discovered Scope
String

Scope of access as
discovered from the
source system. For
example, all APIs or
specific APIs.

API Consumer
Reference

Reference to the API
consumer record. For
example,
cmdb_ci_api_consum
er.

ID
String (255)

Unique identifier of
the API consumer
subscription.

Discovered State
String

Subscription status as
discovered from the
source system. For
example, active or
inactive.

Creation Date
Date/Time

Date and time when
the API consumer
subscription was
created in the source
system.

Last Modified Date
Date/Time

Date and time of the
most recent update
to the API consumer
subscription.

The WebACL class [cmdb_ci_web_acl] represents ACLs for CloudFront,
API gateway REST APIs, application load balancers, AppSync GraphQL
APIs, Cognito user pools, App Runner services, AWS Verified Access, and
the Azure Front Door application gateway.

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

Key relationship structures

There are a number of key relationships that must be defined for API and
Kong classes.

API relationships

Parent class
Relationship
Child class
Relationship type

API

[cmdb_ci_api]
Uses::Used by

API Component

[cmdb_ci_api_c
omponent]

Suggested

API Gateway

[cmdb_ci_api_g
ateway]

Provides::Provid
ed By

Managed API

[cmdb_ci_mana
ged_api]

Dependent

API Frontend

[cmdb_ci_api_fr
ontend]

Use End Point
To::Use End Point
From

API Backend

[cmdb_ci_api_b
ackend]

Suggested

API Backend

[cmdb_ci_api_b
ackend]

Uses::Used By

Kong Load
Balancer

[cmdb_ci_kong_
lb]

Suggested

API Gateway

[cmdb_ci_api_g
ateway]

Provides::Provid
ed By

API Product
Bundle

[cmdb_ci_api_p
roduct_bundle]

Dependent

API Gateway
Provides::Provid
ed By

API Consumer
Subscription
Dependent

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
Relationship
Child class
Relationship type

[cmdb_ci_api_g
ateway]

[cmdb_ci_api_c
onsumer_subscri
ption]

API Product
Bundle

Contains::Contai
ned by

API

[cmdb_ci_api]
Suggested

API Product
Bundle
Used by::Uses

API Consumer
Subscription

[cmdb_ci_api_c
onsumer_subscri
ption]

Suggested

Related non-CMDB tables

CMDB CI Class Models v 1.49.0 introduces the following non-CMDB tables
as related lists for the following API extension classes:

API related list

API Deployment [api_deployment]

Attribute
Data type
Description

Name
String (100)
Name of the API
deployment.

API
Reference

Reference to the
deployed API
(cmdb_ci_api).

Unmatched API
Endpoint
Reference

Reference to the
unmatched API
endpoint, if the API
doesn't match an
existing API

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

Attribute
Data type
Description

(cmdb_ci_unmatched
_api_endpoint).

Configuration Item
Reference

Reference to the
Configuration Item.
This is typically
manually specified as
a reference, if you
know what CI the API
is deployed to.

Note:   The API Deployment non-CMDB table relates to
both the API [cmdb_ci_api] and Unmatched API Endpoint
[cmdb_ci_unmatched_api_endpoint] classes.

API Component related list

API Header [api_header]

Attribute
Data type
Description

Name
String (100)
Name of the API
header.

API Component
Reference

Reference to the
component where the
API header is defined
(cmdb_ci_api_compo
nent).

Unmatched API
Endpoint
Reference

Reference to the
unmatched API when
the endpoint can't be
matched to an
existing API or
component
(cmdb_ci_unmatched
_endpoint).

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

API Gateway related lists

API Consumer [api_consumer]

Attribute
Data type
Description

Username
String (100)

Name of the API
consumer.

Note:   The
Consumer field
in the api_policy
table is a
reference field.
To display the
username in the
Username field on
the API Policies list,
you must set the
display attribute
of Username to
true. If the
attribute is not set
to true, then the
list displays the Sys
ID instead.

ID
String (255)
Unique identifier from
the source system.

Custom ID
String (100)
Alternate display
name of the user.

API Gateway
Reference

Reference to the
gateway where the
consumer is defined
(cmdb_ci_api_gatewa
y).

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

Attribute
Data type
Description

API Consumer Type
Choice list

API user type
(user_type). You can
specify:

• Internal

• External

• Unknown

Discovered State
String

Represents the current
status of the API
consumer's account.

Provider
String

Name of the
identity management
provider responsible
for authenticating the
API consumer.

Email
String
Email address of the
API consumer.

Registration Date
Date/Time

Date the consumer
registered with the
providing platform.

API Consumer Access [api_consumer_access]

Attribute
Data type
Description

API Consumer
Reference

Reference to the API
consumer record. For
example,
cmdb_ci_api_consum
er.

API
Reference
Reference to the
API [cmdb_ci_api] to

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

Attribute
Data type
Description

which the consumer is
requesting access.

Auth Method
String

Authentication
method used by
the API consumer to
access the API. For
example, API key or
OAuth.

State
Choice

Indicates whether the
access is currently
active or inactive.

Last used
Date/Time

Last date and time
the API consumer
accessed the API.

Valid to
Date/Time

Expiration date of the
consumer’s access to
the API.

API Policy [api_policy]

Attribute
Data type
Description

Name
String (100)
Name of the API
policy.

ID
String (255)
Unique identifier from
the source system.

Frontend
Reference

Reference to the API
Frontend
(cmdb_ci_api_fronten
d).

Managed API
Reference
Reference to the
Managed API

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

Attribute
Data type
Description

(cmdb_ci_managed_
api).

Consumer
Reference

Reference to the
API Consumer
(api_consumer) non-
CMDB table.

Note:   Consumer
is a reference
field. To display
the api_consumer
(Username) in the
API Policies list,
you must set the
display attribute
to true for
Username field on
the api_consumer
table. If the
attribute is not set
to true, then the
list displays the Sys
ID instead.

Protocols
String

Array of protocols that
this API policy can
apply to.

Active
Boolean

Determines if this
non-CMDB table is
considered active or
inactive.

API Gateway
Reference

Reference to the
gateway where the
consumer is defined
(cmdb_ci_api_gatewa
y).

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

## Unmatched API extension classes

The CMDB CI Class Models store app adds or updates classes
for unmatched APIs. API endpoints that are not structured well
enough to populate the API [cmdb_ci_api] and API Component
[cmdb_ci_api_component] classes instead populate the Unmatched API
Endpoint [cmdb_ci_unmatched_api_endpoint] class. Unmatched APIs
are typically used by integrations like security scanners or observability
tools.

The CMDB CI Class Models app adds class models that extend the
CMDB class hierarchy, including class descriptions, identification rules,
identifier entries, and, if applicable, dependent relationships. You can use
the added classes just like any other CMDB class. Applications such as
Discovery and Service Mapping Patterns can use the class extensions to
populate CIs and discover technologies and software.

See the full release notes for all CMDB CI Class Models.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Unmatched APIs

API endpoints that are not structured well enough to populate the
API [cmdb_ci_api] and API Component [cmdb_ci_api_component]
classes instead populate the Unmatched API Endpoint
[cmdb_ci_unmatched_api_endpoint] class. Unmatched APIs are
typically used by integrations like security scanners or observability tools.

Classes

This section lists the classes that the CMDB CI Class Models store app adds
or updates.

CMDB CI Class Models: Release 1.49.0 adds the following class for
unmatched API endpoints. For the list of classes in the base system,
including classes that this app might extend, see CMDB tables
descriptions.

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

Class
Extends
Description

Unmatched API
Endpoint

[cmdb_ci_unmatched
_api_endpoint]

Configuration Item

[cmdb_ci]

APIs with unstructured
endpoints that cannot
populate
cmdb_ci_api or
cmdb_ci_api_compon
ent.

Class attributes

CMDB CI Class Models: Release 1.49.0 adds the following attributes to the
Unmatched API Endpoint [cmdb_ci_unmatched_api_endpoint] class.

Unmatched API Endpoint [cmdb_ci_unmatched_api_endpoint]

Attribute
Data type
Description

Method
String

Backend protocol
types of the API.
Examples:

• Lambda

• HTTP

• Logic App

Protocol
String

Communication
protocol. Example:
HTTP, HTTPS.

URL
String (1024)
URL of the resource
being called.

ID
String (1024)
Unique identifier from
the source system.

Internet Facing
Boolean

Boolean that
denotes whether
the component is

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

Attribute
Data type
Description

reachable from the
public internet. Specify
1 or "true" if
the component is
reachable.

Authorization
String

Type of authorization
or authentication
method. Example:

• Basic

• Key

• Oauth

• None

Request data types
String (255)

List of data types in
the request. Examples:

• CC

• Email

• Address

Response data types
String (255)

List of data types
in the response.
Examples:

• CC

• Email

• Address

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

Key Relationship Structures

The Unmatched API Endpoint [cmdb_ci_unmatched_api_endpoint]
CMDB class and API Endpoint Discovered [api_endpoint_discovered]
non-CMDB table are intended for scenarios where unstructured API
data is ingested and needs to be processed beyond the capabilities of
IntegrationHub-ETL.

API Endpoint Discovered [api_endpoint_discovered] can serve as a
staging table for raw data for the API [cmdb_ci_api] and API
Component [cmdb_ci_api_component] classes. API data that does
not come from a well-structured data source or cannot have
standard identification rules applied can first populate the API Endpoint
Discovered [api_endpoint_discovered] table. You can then use a
customer-defined integration to ensure that well-formed data that
matches the quality and condition requirements for API [cmdb_ci_api]
and API Component [cmdb_ci_api_component] populates the most
appropriate table.

In cases where the data cannot be correctly parsed or is
structured in an unexpected fashion, you can instead use a
customer-defined integration to populate the Unmatched API Endpoint
[cmdb_ci_unmatched_api_endpoint] table.

Data that populates the API Endpoint Discovered
[api_endpoint_discovered] table is purged every 30 days.

API Endpoint Discovered [api_endpoint_discovered]

Attribute
Data type
Description

Name
String (100)
Name of the API
endpoint.

Method
String

REST API methods.
Examples:

• GET

• POST

• DELETE

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

Attribute
Data type
Description

URL
String (1024)
URL of the resource
being called.

Type
Choice list

Type of API. You can
specify:

• REST

• SOAP

• HTTP

• gRPC

• GraphQL

• Websocket

Authorization
String

Type of authorization
or authentication
method. Example:

• Basic

• Key

• OAuth

• None

Internet Facing
Boolean

Boolean that
denotes whether
the component is
reachable from the
public internet. Specify
1 or "true" if
the component is
reachable.

Request Datatypes
String (255)
List of data types in
the request. Examples:

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

Attribute
Data type
Description

• CC

• Email

• Address

Response Datatypes
String (255)

List of data types
in the response.
Examples:

• CC

• Email

• Address

Headers
String (255)
Comma-separated list
of header names.

Configuration Item
Reference

Reference to a
matching CMDB CI
(API Component
or Unmatched API
Endpoint).

Related non-CMDB tables

The Unmatched API extension class uses the API Deployment
[api_deployment] non-CMDB table as a related list:

API Deployment [api_deployment]

Attribute
Data type
Description

Name
String (100)
Name of the API
deployment.

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

Attribute
Data type
Description

API
Reference

Reference to the
deployed API
(cmdb_ci_api).

Unmatched API
Endpoint
Reference

Reference to the
unmatched API
endpoint, if the API
doesn't match an
existing API
(cmdb_ci_unmatched
_api_endpoint).

Configuration Item
Reference

Reference to the
Configuration Item.
This is typically
manually specified as
a reference, if you
know what CI the API
is deployed to.

## Avi load balancer extension classes

The CMDB CI Class Models store app adds or updates classes for the Avi
load balancer.

The CMDB CI Class Models app adds class models that extend the
CMDB class hierarchy, including class descriptions, identification rules,
identifier entries, and, if applicable, dependent relationships. You can use
the added classes just like any other CMDB class. Applications such as
Discovery and Service Mapping Patterns can use the class extensions to
populate CIs and discover technologies and software.

See the full release notes for all CMDB CI Class Models.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

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

Avi load balancer

The Avi Vantage platform is built on software-defined principles,
enabling a next-generation architecture to deliver the flexibility and
simplicity expected by IT and lines of business. The Avi Vantage
platform architecture separates the data and control planes to deliver
application services beyond load balancing, such as application
analytics, predictive autoscaling, micro-segmentation, and self-service
for app owners in on-premises or cloud environments. The platform
provides a centrally managed, dynamic pool of load balancing
resources on commodity x86 servers, virtual machines, or containers, to
deliver granular services close to individual applications. Providing these
services allows network services to scale near infinitely without the added
complexity of managing hundreds of disparate appliances.

Discovery uses the Avi Vantage load balancer discovery pattern to find
Avi load balancer resources.

Avi load balancer classes integrated with the CMDB class hierarchy

Classes

This section lists the classes that the CMDB CI Class Models store app
adds or updates. CMDB CI Class Models: Release 1.6.0 adds the following
classes for the Avi load balancer. For the list of classes in the base

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

29

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 29, 1087x592px]*

```

.     . .          .......



..:::::..        ..::::::::.                    ..
.......          .........


........           .                          ....
...::::..          .....


.
.....          .........

```

---
*Page 30*

system, including classes that this app might extend, see CMDB tables
descriptions.

Class
Extends
Description

Avi Controller

[cmdb_ci_avi_controll
er]

Virtual Machine
Object

[cmdb_ci_vm_object]

Avi Controller is
a single point of
management and
control that is the
'brain' of the entire Avi
Vantage system, and
typically deployed as
a redundant three-
node cluster.

Avi Controller Cluster

[cmdb_ci_avi_controll
er_cluster]

Virtual Machine
Object

[cmdb_ci_vm_object]

Avi Controller cluster
uses big data analytics
to analyze the
data and present
actionable insights
to administrators on
intuitive dashboards
on the Avi Admin
Console.

Avi Service Engine

[cmdb_ci_avi_service_
engine]

Virtual Machine
Object

[cmdb_ci_vm_object]

Avi Service Engines
(SEs) handle all
data plane operations
within Avi Vantage
by receiving and
executing instructions
from the Avi
Controller.

Class columns

CMDB CI Class Models: Release 1.6.0 adds the following column to the
respective class.

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

Avi Service Engine [cmdb_ci_avi_service_engine]

Added column
Description

version
The version of the Avi Service
Engine resource.

Related concepts

• CMDB schema model

## BYOL model of RDS for Oracle extension classes

The CMDB CI Class Models store app adds or updates classes for the
BYOL Model of RDS for Oracle.

The CMDB CI Class Models app adds class models that extend the
CMDB class hierarchy, including class descriptions, identification rules,
identifier entries, and, if applicable, dependent relationships. You can use
the added classes just like any other CMDB class. Applications such as
Discovery and Service Mapping Patterns can use the class extensions to
populate CIs and discover technologies and software.

See the full release notes for all CMDB CI Class Models.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

BYOL Model of RDS for Oracle

The Amazon RDS for Oracle is a fully managed commercial database
that makes it easy to set up, operate, and scale Oracle deployments
in the cloud. You can run Amazon RDS for Oracle in one of two
different licensing models: “License Included” and “Bring-Your-Own-
License (BYOL)“. In the “License Included” service model, you do
not need separately purchased Oracle licenses; the Oracle Database
software has been licensed by AWS.

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

The base system supports discovery of the RDS Databases and their
licenses.

Classes

This section lists the classes that the CMDB CI Class Models store app adds
or updates. CMDB CI Class Models: Release 1.23.0 adds the following
classes for the BYOL Model of RDS for Oracle. For the list of classes in
the base system, including classes that this app might extend, see CMDB
tables descriptions.

Class
Description

cmdb_ci_cloud_database
The cloud databases.

cmdb_ci_serverless_hardware
Hardware type information of the
databases.

Class Columns

CMDB CI Class Models: Release 1.23.0 adds the following column to the
respective class.

Serverless Hardware [cmdb_ci_serverless_hardware]

Added column
Description

cloud_vendor
The cloud vendor.

host_type
The host type such as PaaS/IaaS.

cpu_core_count
Amount of CPU cores.

cpu_core_thread
Amount of CPU threads.

cpu_count
Amount of CPUs.

object_id
ID of the CI.

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

Cloud Database [cmdb_ci_cloud_database]

Added column
Description

multi_az

Determines if the database is
deployed on multiple availability
zones (true/false).

replication_enabled
Determines if replication is enabled
(true/false).

replication_type
Replication type.

replica_source
Database name of the replication
source.

## Cassandra extension classes

The CMDB CI Class Models store app adds or updates classes for
Cassandra databases.

The CMDB CI Class Models app adds class models that extend the
CMDB class hierarchy, including class descriptions, identification rules,
identifier entries, and, if applicable, dependent relationships. You can use
the added classes just like any other CMDB class. Applications such as
Discovery and Service Mapping Patterns can use the class extensions to
populate CIs and discover technologies and software.

See the full release notes for all CMDB CI Class Models.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Cassandra

Cassandra is a distributed database that is treated as one database and
that runs on a cluster of Linux nodes. A Cassandra cluster CI represents a
logical entity that doesn’t refer to a Linux node.

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

Classes

This section lists the classes that the CMDB CI Class Models store app adds
or updates. For the list of classes in the base system, including classes that
this app might extend, see CMDB tables descriptions.

Cassandra classes

Class
Extends
Description

Cassandra cluster
node

[cmdb_ci_cassandra_
cluster_node]

Cluster node

[cmdb_ci_cluster_nod
e]

• “Hosts”
cmdb_ci_cassandra
_instance

• “Cluster Of”
cmdb_ci_cassandra
_cluster

• “Hosted On”
cmdb_ci_ server

Cassandra instance

[cmdb_ci_cassandra_i
nstance]

DB instance

[cmdb_ci_db_instanc
e]

• “Runs On”
cmdb_ci_server

• “Hosted on”
cmdb_ci_cassandra
_cluster_node

• “Contains”
cmdb_ci_config_file_
tracked

Cassandra keyspace

[cmdb_ci_cassandra_
keyspace]

DB catalog

[cmdb_ci_db_catalog
]

“Hosted On”
cmdb_ci_cassandra_c
luster

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

## DNS resource record classes

The CMDB CI Class Models ServiceNow Store app adds or updates
classes for DNS records, also known as a DNS resource records (RR).

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

DNS zone resource records

A DNS record is an entry in the domain name system (DNS) database
that provides information about a specific aspect of a domain name.
Each DNS record contains data associated with a domain name, such
as IP addresses, mail server addresses, or other resources. Each type of
record serves a specific purpose, such as mapping domain names to IP
addresses (A records), identifying mail servers for a domain (MX records),
and providing aliases for domain names (CNAME records), among
others. DNS resource records are essential for the proper functioning of
the DNS infrastructure on the internet.

See the full release notes for all CMDB CI Class Models.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

35

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 35, 1098x155px]*

```
..:-:::::::...  ..:::.... ...  ..::.... . ..  ..::...... ...
.::. .. ...    ..:. . .       .::.           ..:.
....           ..........
..........
```

*[Banner/Header Image - Page 35, 1100x225px]*

```
.:::::....  .::....  .  .::..    .  ..:...   .  .::..... .
.:.......   .:...       .:..        .::.        ...
.:.      :   .......     .......
..       :
......
........
```

*[Banner/Header Image - Page 35, 1127x210px]*

```
..:::::::.....  ..::.::.   ..  ..::....   ..  ..::...... ..
.............  .::.....       ..::.          ..::
.:.. ..         .........       .
........
..........
```

---
*Page 36*

Note:   In CMDB CI Class Models release 1.57, existing classes in
the CMDB schema that represent DNS resource records like A,
AAAA, CName, and so on are deprecated. The following classes are
defined with an ideal base, child class, and identification rule.

Supported DNS resource record types

• A Record: Holds the IP address of a domain.

• AAAA Record: Contains the IPv6 address of a domain.

• CNAME Record: Forwards one domain or subdomain to another
domain. Does not provide an IP address.

• MX Record: Directs mail to an email server.

The supported record types enable actions like the following:

• Capture domain name registration in the CMDB and create workflow
to request, approve, and track life cycle.

• Auto-populate the data from integration to the registrar.

• Connect the data to an IPAM record.

• Connect the data to the certificate on the DNS.

• Connect the data to the CDN provider.

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

DNS resource record classes integrated with the CMDB class hierarchy

Table: cmdb_ci_dns_resource_record

This section lists the classes that the CMDB CI Class Models store app adds
or updates. For the list of classes in the base system, including classes that
this app might extend, see CMDB tables descriptions.

DNS record detail from Domain Name Server (DNS) for a WWW domain.

Column
Description
Details

DNS Service Provider
[service_provider]

Defines which DNS
service provider
supplied this value,
examples like
Cloudflare,Google

Identification Rule
(name+service_provid
er) allow null

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

37

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 37, 827x694px]*

```
.::::::::::.
:-----------                 ............
:----------:                .-----------:
..            ..        -----------:
..         ..::.::...    ..........
..           .............                .::::::::::.
.............     .............:     .....     .---======--:
..............    ..............    .::.....   .:----------:
............ .....    ...
.....::..    .
.      .............   .::::::::::.
.      ..............  -----------:
.      ..............  :----------:
.
.      .............
.      ..............
.      .............
..   .             .
..    .             .      ..............
....  ..            .      ..............
.....::.....                  .............
.:..::::..:.           .
.      ..............
..............
.............
```

---
*Page 38*

Column
Description
Details

Replaces the
deprecated column:
DNS Service Provider
[name]

DNS, OpenDNS,
Local DNS,Private
DNS,empty, and so on.

String (255)

Time to Live [ttl]

Time, in seconds, that
a DNS record will be
cached by an outside
DNS server or resolver.

integer

Record Class
[record_class]
Class of DNS record.

• IN (Internet) (default)

• CH (Chaosnet)

• HS (Hesiod)

Table: cmdb_ci_dns_zone_a_record

A records hold only IPv4 addresses.

Column
Description
Details

A IP Address
[ip_address]
IPv4 address

ip_addr

Identification Rule
(name+service_provid
er+ip_address) allow
null

Table: cmdb_ci_dns_zone_aaaa_record

AAAA records hold only IPv6 addresses.

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

Column
Description
Details

AAAA IP Address
[ip_address]
IPv6 address

ip_addr

Identification Rule
(name+service_provid
er+ip_address) allow
null

Table: cmdb_ci_dns_zone_cname_record

A canonical name (CNAME) record points from an alias domain to a
canonical domain.

Column
Description
Details

Canonical Name
[cname]

Fully qualified domain
name / Canonical
Name.

String (255)

Identification Rule
(name+service_provid
er+cname) allow null

Table: cmdb_ci_dns_zone_alias_record

An ALIAS record points domain name to a hostname instead of an IP
address.

Column
Description
Details

Alias Name
[alias_name]

Alias name of the DNS
record.

String (255)

Identification Rule
(name+service_provid
er+alias_name) allow
null

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

Table: cmdb_ci_dns_domain_info

Domain Name enables you to trace ownership and tenure of domain
name details using DNS lookup tools like whois.

Column
Description
Details

Domain Name
[domain_name]

WWW Domain Name
value from the DNS
lookup tool.

String (255)

Identification Rule
(Name)

Registry Domain ID
[registry_domain_id]

Registry Domain ID
value from the DNS
lookup tool.

String (255)

Registrar [registrar]
Registrar value from
the DNS lookup tool.
String (255)

Domain Creation Date
[domain_creation_dat
e]

Creation Date of the
domain from the DNS
lookup tool.

glide_date_time

Domain Updated
Date
[domain_updated_da
te]

Updated Date of the
domain from the DNS
lookup tool.

glide_date_time

Registrar Registration
Expiration Date
[registrar_registration_
expiration_date]

Registrar Registration
Expiration Date value
from the DNS lookup
tool.

glide_date_time

## Extend classes and rules for third-party integrations

Extend and update CMDB CI Class Models store app classes and rules
when using third-party integration tools.

When using a third-party tool to integrate with ServiceNow apps, gaps
can occur between the integration and different CIs. Some of the

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

integrated tables and classes may be missing classes and rules that are
not included with the CMDB CI Class Models store app.

See the full release notes for all CMDB CI Class Models.

This section lists the classes that the CMDB CI Class Models store app adds
or updates. The classes and rules in the following table enable you to add
and extend the CMDB CI Class Models store app for integrations.

Table
Extends
Rules and related entries

Postgresql Schema

cmdb_ci_postgresql_s
chema

cmdb_ci_db_catalog

Containment rule:

cmdb_ci_db_postgres
ql_instance-
>Contains:Contained
By-
>cmdb_ci_postgresql_
schema

Identification Rule:

Dependent, Attributes:
name

Related Entries
(cmdb_related_entry):

• Identifier:
cmdb_ci_postgresql_
schema

• Related table:
cmdb_key_value

• Referenced field:
configuration_item

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

Table
Extends
Rules and related entries

Information Object

cmdb_ci_information_
object

cmdb_ci

Identification rule:

Independent,
attributes: name

Related Entries
(cmdb_related_entry):

• Identifier:
cmdb_ci_informatio
n_object

• Related table:
cmdb_key_value

• Referenced field:
configuration_item

Oracle Catalog

cmdb_ci_db_ora_cat
alog

cmdb_ci_db_catalog

Related Entries
(cmdb_related_entry):

• Identifier:
cmdb_ci_db_ora_ca
talog

• Related table:
cmdb_key_value

• Referenced field:
configuration_item

MySQL Catalog

cmdb_ci_db_mysql_c
atalog

cmdb_ci_db_catalog

Containment rule:

cmdb_ci_db_mysql_ins
tance-
>Contains:Contained
By-

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

Table
Extends
Rules and related entries

>cmdb_ci_db_mysql_
catalog

Identification rule:

Dependent, attributes:
name

Related Entries
(cmdb_related_entry):

• Identifier:
cmdb_ci_db_mysql_
catalog

• Related table:
cmdb_key_value

• Referenced field:
configuration_item

MS SQL Database

cmdb_ci_db_mssql_d
atabase

cmdb_ci_db_instance

Related Entries
(cmdb_related_entry):

• Identifier:
cmdb_ci_db_mssql_
database

• Related table:
cmdb_key_value

• Referenced field:
configuration_item

Sybase Catalog
cmdb_ci_db_catalog
Containment rule:

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

Table
Extends
Rules and related entries

cmdb_ci_db_syb_cata
log

cmdb_ci_db_syb_insta
nce-
>Contains:Contained
By-
>cmdb_ci_db_syb_cat
alog

Identification rule:

Dependent, attributes:
name

Related Entries
(cmdb_related_entry):

• Identifier:
cmdb_ci_db_syb_ca
talog

• Related table:
cmdb_key_value

• Referenced field:
configuration_item

DB2 Database
(formerly DB2 Catalog)

cmdb_ci_db_db2_cat
alog

cmdb_ci_db_catalog

Containment rule:

cmdb_ci_db_db2_inst
ance-
>Contains:Contained
By-
>cmdb_ci_db_db2_ca
talog

Identification rule:

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

Table
Extends
Rules and related entries

Dependent, attributes:
name

Related Entries
(cmdb_related_entry):

• Identifier:
cmdb_ci_db_db2_c
atalog

• Related table:
cmdb_key_value

• Referenced field:
configuration_item

For the list of classes in the base system, including classes that this app
might extend, see CMDB tables descriptions.

Related concepts

• CMDB schema model

## Firewall extension classes

The CMDB CI Class Models store app adds or updates classes for firewall
devices.

The CMDB CI Class Models app adds class models that extend the
CMDB class hierarchy, including class descriptions, identification rules,
identifier entries, and, if applicable, dependent relationships. You can use
the added classes just like any other CMDB class. Applications such as
Discovery and Service Mapping Patterns can use the class extensions to
populate CIs and discover technologies and software.

See the full release notes for all CMDB CI Class Models.

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

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Firewalls

A firewall is a network security system that, based on security policies,
monitors and controls incoming and outgoing network traffic. Firewalls
typically form a barrier between an internal network and an untrusted
external network such as the internet. It usually consists of security policies
that help secure an organization from external threats and cyberattacks.
Firewall vendors may provide a centralized firewall manager to manage
many firewall devices and the security policies residing on them. For
example, Panorama™ is the centralized management system for Palo
Alto Networks firewalls.

Firewall extension classes integrated with the CMDB class hierarchy
(CMDB CI Class Models: Release 1.11.0)

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

46

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 46, 1151x796px]*

```


.
.

.
.

.                 .


.

..
..........         ..        .                             .



....      .. .
....       .
```

---
*Page 47*

Firewall extension classes integrated with the CMDB class hierarchy
(CMDB CI Class Models: Release 1.10.0)

Classes

This section lists the classes that the CMDB CI Class Models store app
adds or updates.See the class columns table for further details about the
columns added for each class. CMDB CI Class Models: Release 1.10.0
adds or updates the following classes for the discovery of network firewall
devices. For the list of classes in the base system, including classes that
this app might extend, see CMDB tables descriptions.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

47

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 47, 743x714px]*

```

.


..

.   ..

..

.   ...                  ..  .

..                       ..
...........
..  .....               .::.::::::..
.                 ..  ..
.
.           .              .         .

.:..::....::. .:...:.....:.  .:..::..:..:. .:...:..:..:.
............. .............  ............. .............

.. ...
.  .

......      ........
......          .
.....
```

---
*Page 48*

Class
Extends
Description

IP Firewall
[cmdb_ci_ip_firewall]

NETGEAR
[cmdb_ci_netgear]

Contains all network
firewalls.

Firewall Device
[cmdb_ci_firewall_devi
ce]

IP Firewall
[cmdb_ci_ip_firewall]

Network security
system that monitors
and controls incoming
and outgoing network
traffic, based on
security policies.

Fortinet Firewall Device
[cmdb_ci_firewall_devi
ce_fortinet]

Firewall Device
[cmdb_ci_firewall_devi
ce]

Fortinet firewall
device.

Fortinet Firewall
Interface
[cmdb_ci_fortinet_fire
wall_interface]

Network Interface
[cmdb_ci_ni_interface
]

Discovered by the
Next Generation
Fortinet Network
Firewall - REST pattern.
See Fortinet firewall
and FortiGate VDOM
REST-based discovery.

Fortinet Firewall Policy
[cmdb_ci_fortinet_fire
wall_policy]

Firewall Security Policy
[cmdb_ci_firewall_sec
_policy]

Discovered by the
Next Generation
Fortinet Network
Firewall - REST pattern.
See Fortinet firewall
and FortiGate VDOM
REST-based discovery.

Fortinet Virtual Domain
[cmdb_ci_fortinet_vdo
m]

IP Firewall
[cmdb_ci_ip_firewall]

Discovered by the
Next Generation
Fortinet Network
Firewall - REST pattern.
See Fortinet firewall

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

Class
Extends
Description

and FortiGate VDOM
REST-based discovery.

Juniper Firewall Device
[cmdb_ci_firewall_devi
ce_juniper]

Firewall Device
[cmdb_ci_firewall_devi
ce]

Juniper firewall device.

Firewall Device Group
[cmdb_ci_firewall_devi
ce_group]

CMDB CI [cmdb_ci]
Group of firewall
devices.

Panorama Firewall
Device Group
[cmdb_ci_firewall_devi
ce_group_panorama]

Firewall Device Group
[cmdb_ci_firewall_devi
ce_group]

Group of Panorama
firewall devices.

Palo Alto Firewall
Device
[cmdb_ci_firewall_devi
ce_palo_alto]

Firewall Device
[cmdb_ci_firewall_devi
ce]

Palo Alto firewall
device.

Firewall Cluster
[cmdb_ci_firewall_clus
ter]

[cmdb_ci_cluster]

Group of firewall
nodes that work as a
single logical entity.

Fortinet Firewall Cluster
[cmdb_ci_firewall_clus
ter_fortinet]

Firewall Cluster
[cmdb_ci_firewall_clus
ter]

Fortinet firewall cluster.

Juniper Firewall Cluster
[cmdb_ci_firewall_clus
ter_juniper]

Firewall Cluster
[cmdb_ci_firewall_clus
ter]

Juniper firewall cluster.

Firewall Manager
[cmdb_ci_firewall_ma
nager]

CMDB CI [cmdb_ci]

System that
provides centralized
management for
many firewall devices
and the security
policies residing on
them.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

49

Zurich ServiceNow AI Platform Capabilities

---
*Page 50*

Class
Extends
Description

Panorama Firewall
Manager
[cmdb_ci_firewall_ma
nager_panorama]

Firewall Manager
[cmdb_ci_firewall_ma
nager]

The centralized
network security
management tool for
Palo Alto Networks
firewalls.

Firewall Security Policy
[cmdb_ci_firewall_sec
_policy]

CMDB CI [cmdb_ci]

The security policy that
the firewall device
enforces.

Panorama Firewall
Security Policy
[cmdb_ci_firewall_sec
_policy_panorama]

Firewall Security Policy
[cmdb_ci_firewall_sec
_policy]

The security policy that
the Panorama firewall
device enforces.

CMDB CI Class Models: Release 1.12.0 adds the following class for the
discovery of network firewall devices.

Class
Extends
Description

Cisco Firewall Device
[cmdb_ci_firewall_devi
ce_cisco]

Firewall Device
[cmdb_ci_firewall_devi
ce]

All Cisco Firewall
devices.

Class columns

CMDB CI Class Models: Release 1.10.0 adds the following columns to the
respective classes.

IP Firewall [cmdb_ci_ip_firewall] class

Added columns
Description

Hardware Operating System
OS running on the hardware.

Hardware OS Version
OS version running on the
hardware.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

50

Zurich ServiceNow AI Platform Capabilities

---
*Page 51*

Firewall Cluster [cmdb_ci_firewall_cluster] class

Added columns
Description

Hardware Operating System
OS running on the hardware.

Hardware OS Version
OS version running on the
hardware.

CMDB CI Class Models: Release 1.12.0 adds no columns to the existing
classes.

Related concepts

• CMDB schema model

## IBM Hardware Management Console (HMC) extension
## classes

The CMDB CI Class Models store app adds or updates classes for the IBM
Hardware Management Console (HMC).

The CMDB CI Class Models app adds class models that extend the
CMDB class hierarchy, including class descriptions, identification rules,
identifier entries, and, if applicable, dependent relationships. You can use
the added classes just like any other CMDB class. Applications such as
Discovery and Service Mapping Patterns can use the class extensions to
populate CIs and discover technologies and software.

See the full release notes for all CMDB CI Class Models.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

51

Zurich ServiceNow AI Platform Capabilities

---
*Page 52*

IBM Hardware Management Console (HMC)

The IBM HMC extension classes support discovery of IBM virtualization
technology by providing:

• Discovery of LPARs/FRAMEs, which SAM use cases need

• Topology data of IBM HMC, which event correlation requires

• Topology data for ITSM use cases, such as in-frame migration

IBM HMC extension classes integrated with the CMDB class hierarchy

Classes

This section lists the classes that the CMDB CI Class Models store app
adds or updates. See the class columns table for further details about
the columns added for each class. For the list of classes in the base
system, including classes that this app might extend, see CMDB tables
descriptions.

CMDB CI Class Models: Release 1.3.0 adds the following classes for the
IBM HMC.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

52

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 52, 1029x652px]*

```

.


:::::.
.::::.       .........   .             ..
...    ...      .        ..::..:.::.  .  .  .
.  . .    ..    .
.::..     ....
.                ..........
... .                .::....::.                  ...
.                          .                       ..
..::.:...   ...
.::::::.... .. .               ....
..
...  . ..  . .  .  .
.::.::::.
.....:....      . .     .
..
```

---
*Page 53*

Class
Extends
Description

IBM Frame

[cmdb_ci_ibm_frame]

Server

[cmdb_ci_server]

IBM physical machine
with considerable
resources that can be
virtualized.

IBM HMC Processor
pool

[cmdb_ci_processor_p
ool]

Virtual Machine
Object

[cmdb_ci_vm_object]

IBM shared pool used
to allocate processors
to a group of LPARs.

CMDB CI Class Models: Release 1.2.0 adds the following classes for the
IBM HMC.

Class
Extends
Description

IBM HMC Server
[cmdb_ci_hmc_server]

Server
[cmdb_ci_server]

IBM console that
manages frames
and assigns logical
partitions (LPARs) to
pools.

IBM Frame
[cmdb_ci_ibm_frame]

Server
[cmdb_ci_server]

IBM physical machine
with considerable
resources that can be
virtualized.

IBM LPAR Instance
[cmdb_ci_lpar_instanc
e]

Virtual Machine
Instance
[cmdb_ci_vm_instanc
e]

IBM logical partition
representing the virtual
aspect of the
operating system.

LPAR Resource
[cmdb_ci_lpar_resourc
e]

Configuration Item
[cmdb_ci]

Resource of an LPAR
instance.

IBM HMC Processor
pool

Virtual Machine
Object
[cmdb_ci_vm_object]

IBM shared pool used
to allocate processors
to a group of LPARs.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

53

Zurich ServiceNow AI Platform Capabilities

---
*Page 54*

Class
Extends
Description

[cmdb_ci_processor_p
ool]

Class columns

CMDB CI Class Models: Release 1.3.0 adds the following columns to the
respective classes.

IBM Frame [cmdb_ci_ibm_frame] class

Added columns
Description

Current available processor units
Current available processor units.

Configurable processor units
Configurable processor units.

Configurable memory units
Configurable memory units.

Installed processor units
Installed processor units.

Current available memory units
Current available memory units.

Installed memory units
Installed memory units.

IBM HMC Processor pool [cmdb_ci_processor_pool] class

Added columns
Description

LPAR IDs
LPAR IDs.

LPAR names
LPAR names.

Frame name
Frame name.

CMDB CI Class Models: Release 1.2.0 adds the following columns to the
respective classes.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

54

Zurich ServiceNow AI Platform Capabilities

---
*Page 55*

IBM HMC Server [cmdb_ci_hmc_server] class

Added columns
Description

Frame count
Count of frames.

Added columns
Description

Is VIO

Flags whether this VM is a (VIO)
virtual input/output server in the
HMC topology.

High Watermark VCPU

Peak in the utilization of virtual CPU
assigned to during the reporting
period.

Frame Serial Number

Serial number of a frame (frame
being a physical machine such as
ESX).

VIO Servers
List of VIO servers.

LPAR Resource [cmdb_ci_lpar_resource] class

Added columns
Description

Node name
Name of the node.

Partition Name
Name of the partition.

Partition Number
Number of the partition.

Type
Type of LPAR Resource.

Mode
Mode of LPAR Resource.

Entitled Capacity
Allotted capacity granted.

Partition Group-ID
ID of a group of partitions.

Shared Pool ID
ID of a pool of shared processors.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

55

Zurich ServiceNow AI Platform Capabilities

---
*Page 56*

Added columns
Description

Online Virtual CPUs
A virtual CPU.

Maximum Memory
Maximum amount of memory.

Minimum Memory
Minimum amount of memory.

Variable Capacity Weight
Logical partition processor
capacity weight.

Minimum Capacity
Minimum number of processes.

Capacity Increment
Increments of process.

Maximum Physical CPUs in system
Maximum CPUs allotted in system.

Active Physical CPUs in system
Current CPUs in system.

Active CPUs in Pool
Number of active CPUs within a
pool.

Shared Physical CPUs in system
Number of shared CPUs within a
system.

Maximum Capacity of Pool
Maximum capacity of processes
within a pool.

Entitled Capacity of Pool
Number of processes that are
entitled.

Unallocated Capacity
Number of free spaces.

Physical CPU Percentage
Number of CPUs allocated to
system.

Unallocated Weight
At no extra charge resources on
instance.

Desired Virtual CPUs
Target number of virtual CPUs.

Desired Memory
Target amount of memory.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

56

Zurich ServiceNow AI Platform Capabilities

---
*Page 57*

Added columns
Description

Desired Variable Capacity Weight
Targeted processor load.

Desired Capacity
Target resources used within
instance.

High Watermark VCPU

Peak in the utilization of virtual CPU
assigned to during the reporting
period.

IBM HMC Processor pool [cmdb_ci_processor_pool] class

Added columns
Description

Pool ID
ID of pool of processors.

CPU Core count
Number of CPU cores.

Memory count
Amount of memory used.

Unassigned cores
Number of unused cores.

Unassigned memory
Amount of unassigned memory.

The following class has no added columns: IBM Frame
[cmdb_ci_ibm_frame].

Related concepts

• CMDB schema model

## Internet of Things (IoT) extension classes

The CMDB CI Class Models store app adds or updates classes for the
Internet of Things (IoT).

The CMDB CI Class Models app adds class models that extend the
CMDB class hierarchy, including class descriptions, identification rules,
identifier entries, and, if applicable, dependent relationships. You can use
the added classes just like any other CMDB class. Applications such as

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

57

Zurich ServiceNow AI Platform Capabilities

---
*Page 58*

Discovery and Service Mapping Patterns can use the class extensions to
populate CIs and discover technologies and software.

See the full release notes for all CMDB CI Class Models.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Internet of Things (IoT)

IoT is a system of interrelated computing devices, mechanical and digital
machines, objects, animals or people that are provided with unique
identifiers and the ability to transfer data over a network without requiring
human-to-human or human-to-computer interaction. The classes added
in this release, extend the Data Model to provide a foundation for
the representation of IoT CI classes. This foundation underpins workflows
for Enterprise Asset Management (EAM), Governance Risk Compliance
(GRC), Component Supply Management (CSM), and Field Service
Management (FSM) surrounding the management of IoT devices and the
transport vehicles that some reside in.

IoT extension classes integrated with the CMDB class hierarchy

Classes

This section lists the classes that the CMDB CI Class Models store app adds
or updates. For the list of classes in the base system, including classes that
this app might extend, see CMDB tables descriptions.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

58

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 58, 8176x3084px]*

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#==@@@@@@@@@@@@@@@@@@@@@%++*@@
@@@@@@@@@@@@@@@@@#%%%@@@@@@@@@%##@@@@@@+===*@@@@@@@@@@*:::@@
@@@@@@@@@@@@@@@@%=+++@@@@@@@@@@@@@@@@@@%###%@+=====@@@%===@@
@@@@@@@@@@@@%===*+==*+==*===*@@@@@@%%%@@@@@@@#====+@@@@@@@@@
@@@@@@@@@@@@%***##**%***##**#@@@@@@===@@@@@@@@%%%%@@@@@@@@@@
@@@@@@@@@@@@+=+=*+=+*===*+==+@@@@@*****%***##****%***+#*****
@@@@@@@@@@@@@@@@@@@@@===%====*@@@#++*++***+**++++#==+*%#+++*
@@@@@@@@@@@@@@@@@@@@@%%%@%%%%@@@@===#===@%====+*====+@@@===%
@@@@@@@@@@@@@@@@@@@@@@@@@@@@%=++*@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#**#@@@@@@@@@@@@@@@@@@@@@@@@@@@
::::::+-::::::+-:::::+::::::=-:::::==::::::+-::::::+@@@@@@@@
```

---
*Page 59*

CMDB CI Class Models: Release 1.6.0 adds the following classes for IoT.

Class
Extends
Description

Transport Type

[cmdb_ci_transport]
cmdb_ci

Types of transportation
that contain
interconnected
technology.

Converged
Infrastructure

[cmdb_ci_converged_
infra]

cmdb_ci_hardware

Devices that serve
both computing and
networking functions.

IoT Device

[cmdb_ci_IoT]
cmdb_ci_hardware

Parent table that
contains Internet of
Things device types.

Aircraft

[cmdb_ci_aircraft]

Transport Type

[cmdb_ci_transport]

A transportation
method that utilizes
air or space as its
primary pathway. For
example, airplanes
and helicopters.

Ship

[cmdb_ci_ship]

Transport Type

[cmdb_ci_transport]

A transportation
method that utilizes
water as its
primary pathway. For
example, ships.

Train

[cmdb_ci_train]

Transport Type

[cmdb_ci_transport]

A transportation
method that utilizes
rails as its
primary pathway. For
example, Amtrak.

Vehicle

Transport Type

[cmdb_ci_transport]

A transportation
method that utilizes
wheels or tracks as its

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

59

Zurich ServiceNow AI Platform Capabilities

---
*Page 60*

Class
Extends
Description

[cmdb_ci_vehicle]
method of movement.
For example, cars,
trucks, bulldozers.

IoT Gateway

[cmdb_ci_IoT_gatewa
y]

Converged
Infrastructure

[cmdb_ci_converged_
infra]

A device that provides
the following services:

• Forwards packets
between LAN and
WAN on the IP layer.

• Performs application
layer functions
between IoT nodes
and other entities.

• Enables local,
short-range
communication
between IoT
devices.

Security Device

[cmdb_ci_security]

IoT Device

[cmdb_ci_IoT]

Connected device
that serves a security
function such as
badge readers.

Single Board
Computing

[cmdb_ci_sbc]

IoT Device

[cmdb_ci_IoT]

Single Board
Computing device
such as a Raspberry Pi.

Display Device

[cmdb_ci_display]

IoT Device

[cmdb_ci_IoT]

Connected device
that displays images.

Imaging Device

IoT Device

[cmdb_ci_IoT]

Connected device
that captures images.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

60

Zurich ServiceNow AI Platform Capabilities

---
*Page 61*

Class
Extends
Description

[cmdb_ci_imaging]

Medical Device

[cmdb_ci_medical]

IoT Device

[cmdb_ci_IoT]

Connected device
that serves a Medical
Care function such as
a nurse call unit.

Manufacturing Device

[cmdb_ci_manufacturi
ng]

IoT Device

[cmdb_ci_IoT]

Connected device
that helps
a manufacturing
process.

Multimedia Device

[cmdb_ci_multimedia]

IoT Device

[cmdb_ci_IoT]

A connected device
that helps the
generation or delivery
of media content.

Payment Device

[cmdb_ci_payment]

IoT Device

[cmdb_ci_IoT]

Connected device
that allows for
purchasing goods or
services.

Drone

[cmdb_ci_drone]

IoT Device

[cmdb_ci_IoT]

Unmanned
connected device
with mobility.

Wearable Technology

[cmdb_ci_wearable]

IoT Device

[cmdb_ci_IoT]

Connected device
that is worn by an
entity such as a smart
watch.

Smart Television

[cmdb_ci_stv]

Display Device

[cmdb_ci_display]

A television that is
network connected
and can run
applications.

IP Camera

Imaging Device

[cmdb_ci_imaging]

A camera that is
network connected.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

61

Zurich ServiceNow AI Platform Capabilities

---
*Page 62*

Class
Extends
Description

[cmdb_ci_ip_camera]

Patient Monitoring

[cmdb_ci_med_patien
t_monitoring]

Medical Device

[cmdb_ci_medical]

Monitors and tracks
various physiological
parameters of a
patient. Monitors
heart rate, blood
pressure, oxygen
levels, respiratory rate,
and so on.

Surgical Instrument

[cmdb_ci_med_surgic
al_instrument]

Medical Device

[cmdb_ci_medical]

Devices used during
surgical interventions.
Life support tools and
tools to assist surgeons
in precise and
controlled maneuvers.

Lab Equipment

[cmd_ci_med_lab_eq
uipment]

Medical Device

[cmdb_ci_medical]

Specialized tools,
apparatus, and
instruments used in
scientific research,
experiments, and
analyses.

Patient Implant

[cmdb_ci_med_patien
t_implant]

Medical Device

[cmdb_ci_medical]

Medical devices or
tissues that are
surgically placed
inside a patient's
body.

Clinical Device

[cmdb_ci_med_clinica
l_device]

Medical Device

[cmdb_ci_medical]

Devices used in a
clinical setting for
overall management,
medical staff, and
patient aid.

Diagnostic Imaging

Medical Device

[cmdb_ci_medical]

Specialized
equipment used in
medicine to visualize

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

62

Zurich ServiceNow AI Platform Capabilities

---
*Page 63*

Class
Extends
Description

[cmd_ci_med_diagno
stic_imaging]
the internal structures
of the body.

Therapeutic Device

[cmdb_ci_med_thera
peutic_device]

Medical Device

[cmdb_ci_medical]

Specialized tools
designed to aid
in the treatment,
rehabilitation, or
management of
health conditions.
Can range from
orthopedic supports
to cardiac implants
and neurostimulation
devices.

Process Logic
Controller

[cmdb_ci_plc]

Manufacturing Device

[cmdb_ci_manufacturi
ng]

A logic controller that
is network connected
which is used in
manufacturing. For
example, devices
made by Siemens and
Allen Bradley.

Human Machine
Interface

[cmdb_ci_hmi]

Manufacturing Device

[cmdb_ci_manufacturi
ng]

An HMI that is
network connected
which is used in
manufacturing. For
example, devices
made by Siemens and
Allen Bradley.

Game Console

[cmdb_ci_game_cons
ole]

Multimedia Device

[cmdb_ci_multimedia]

A device that is
network connected
which is used to
play games or stream
media. For example,
an Xbox or Playstation.

Media Player

Multimedia Device

[cmdb_ci_multimedia]

A device that is
network connected

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

63

Zurich ServiceNow AI Platform Capabilities

---
*Page 64*

Class
Extends
Description

[cmdb_ci_media_play
er]

which is used to play
digital media content.
For example, Amazon
Fire TV.

Display Monitor
Control

[cmdb_ci_monitor_co
ntrol]

Multimedia Device

[cmdb_ci_multimedia]

A device that is
network connected
that controls the
display of media on a
monitor. For example,
a Crestron Media
Controller.

Point of Sale Device

[cmdb_ci_pos]

Payment Device

[cmdb_ci_payment]

A device that is
network connected
which is used in the
purchase of goods or
services. For example,
a credit card reader.

Related concepts

• CMDB schema model

## Kong extension classes

The CMDB CI Class Models store app adds or updates classes for Kong
gateways.

The CMDB CI Class Models app adds class models that extend the
CMDB class hierarchy, including class descriptions, identification rules,
identifier entries, and, if applicable, dependent relationships. You can use
the added classes just like any other CMDB class. Applications such as
Discovery and Service Mapping Patterns can use the class extensions to
populate CIs and discover technologies and software.

See the full release notes for all CMDB CI Class Models.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

64

Zurich ServiceNow AI Platform Capabilities

---
*Page 65*

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Kong

Kong is an API management platform that enables enterprise companies
to better manage client and host traffic.

Classes

This section lists the classes that the CMDB CI Class Models store app adds
or updates. For the list of classes in the base system, including classes that
this app might extend, see CMDB tables descriptions.

CMDB CI Class Models: Release 1.49.0 adds the following classes for
Kong.

Class
Extends
Description

Kong Gateway

[cmdb_ci_kong_gate
way]

API Gateway

[cmdb_ci_api_gatewa
y]

The Kong gateway
application that
hosts and
manages individual
APIs. Example:
Kong Gateway
instanceName.

Kong Load Balancer

[cmdb_ci_kong_lb]

Load Balancer
Application

[cmdb_ci_lb_appl]

The default load
balancer on the Kong
gateway application
that points to backend
service instances
when fulfilling API
requests. Example:
httpbin-upstream.

Kong Target
API Component
The load-balanced
backend of the

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

65

Zurich ServiceNow AI Platform Capabilities

---
*Page 66*

Class
Extends
Description

[cmdb_ci_kong_target
]

[cmdb_ci_api_compo
nent]

gateway that fulfills
API requests. Example:
httpbin-target1.

Class attributes

CMDB CI Class Models: Release 1.49.0 adds the following attributes to the
respective classes.

Kong Gateway [cmdb_ci_kong_gateway]

Attribute
Data type
Description

Admin URL
String (255)
URL for making admin
API requests.

Database
String

Type of database
used by the Kong
gateway. Example:
Postgres or Cassandra.

Kong Load Balancer [cmdb_ci_lb_appl]

Attribute
Data type
Description

Algorithm
String

Type of algorithm used
for load balancing.
Example: round robin.

ID
String (255)
Unique identifier from
the source system.

Kong Target [cmdb_ci_kong_target]

Attribute
Data type
Description

Target
String (255)
URL of target
integration.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

66

Zurich ServiceNow AI Platform Capabilities

---
*Page 67*

Key Relationship Structures

There are a number of key relationships that must be defined for API and
Kong classes.

Kong relationships

Parent class
Relationship
Child class
Relationship type

API Backend
[cmdb_ci_api_b
ackend]

Uses::Used By
Kong Load
Balancer
Suggested

Kong Load
Balancer
[cmdb_ci_lb_ap
pl]

Contains::Contai
ned By
Kong Target
Dependent

Kong Gateway
[cmdb_ci_kong_
gateway]

Provides::Provid
ed By

Kong Load
Balancer
Dependent

Related non-CMDB tables

The Kong Gateway class uses the Kong Workspace non-CMDB table as a
related list:

Kong Workspace [kong_workspace]

Attribute
Data type
Description

Name
String (100)
Name of the Kong
workspace.

ID
String (255)
Unique identifier from
the source system.

API Gateway
Reference
Reference to the Kong
API gateway.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

67

Zurich ServiceNow AI Platform Capabilities

---
*Page 68*

Kong gateway example

Here is an example of a dependency view for the Kong gateway class
that shows how a gateway would populate the dependent managed
API-dependent class with related APIs and components. The Managed
API class is considered a first-level relationship with respect to the
gateway, while the frontend and backend components are considered
second-level relationships. From here, you can then bind alerts to these
CIs, configure dynamic CIs for service views and incidents, or establish
any additional workflows that use CIs.

## Kubernetes extension classes

The Discovery and Service Mapping app adds or updates classes for the
Kubernetes pattern.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

68

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 68, 468x391px]*

```


.:.....
...





..                            ..
..                            ..


.               ..                .       .
...              ...              ....     ...


...
.                    .
.:..



......   .....   .:...    ...

```

---
*Page 69*

The CMDB CI Class Models app adds class models that extend the
CMDB class hierarchy, including class descriptions, identification rules,
identifier entries, and, if applicable, dependent relationships. You can use
the added classes just like any other CMDB class. Applications such as
Discovery and Service Mapping Patterns can use the class extensions to
populate CIs and discover technologies and software.

See the full release notes for all CMDB CI Class Models.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Kubernetes pattern

The Kubernetes pattern main flow helps with discovering Kubernetes
core elements. The classes in this release, extend the support to
discover Kubernetes workload controller components like deployments,
daemonsets, and statefulsets. The Workload Share library captures
information about deployments, daemonsets, and statefulsets and stores
them in the respective tables. Other extensions include a YAML and
service mesh extension that generates a YAML file to track configuration
files and creating service to service relations by discovering service mesh
information.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

69

Zurich ServiceNow AI Platform Capabilities

---
*Page 70*

Kubernetes extension class integrated with the CMDB hierarchy

Kubernetes workload

Classes

This section lists the classes that the CMDB CI Class Models store app adds
or updates.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

70

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 70, 1948x1300px]*

```
...... ......

........        ...........
.
.       .   .  .       .                     .
........    .........  .........  .......... .....:.::
.

...........
........       ...........

.......         ..... ..               .    .:..::.:::.
........       .........
.........
...........
.........
.......
.
.  .  .
........
```

*[Banner/Header Image - Page 70, 974x485px]*

```


.......
...::............                          ..
...............

.


--------------                            .
..............
..             .


```

---
*Page 71*

CMDB CI Class Models: Release 1.12.0 adds the following classes for
Kubernetes pattern. For the list of classes in the base system, including
classes that this app might extend, see CMDB tables descriptions.

Class
Extends
Fields
Relation

cmdb_ci_kubern
etes_workload

cmdb_ci_kubern
etes_componen
ts

Provides from
cmdb_ci_kubern
etes_service

cmdb_ci_kubern
etes_deploymen
t

cmdb_ci_kubern
etes_workload

• Replicas
Desired

• Replicas
Updated

• Replicas Total

• Replicas
Available

• Replicas
Unavailable

Hosted on
Cluster

cmdb_ci_kubern
etes_daemonset

cmdb_ci_kubern
etes_workload

• Pods running

• Pods Waiting

• Pods
Succeeded

• Pods Failed

• Pods Available

Hosted on
Cluster

cmdb_ci_kubern
etes_statefulset

cmdb_ci_kubern
etes_workload

• Pods running

• Pods Waiting

Hosted on
Cluster

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

71

Zurich ServiceNow AI Platform Capabilities

---
*Page 72*

Class
Extends
Fields
Relation

• Pods
Succeeded

• Pods Failed

• Pods Available

Related concepts

• CMDB schema model

## Network Intrusion Detection System (NIDS) CI extension
## class

The Network Intrusion Detection System (NIDS) [cmdb_ci_nids] class builds
the relationships between passive network monitoring appliances, and
the devices on the network that it discovers. A NIDS Manager manages
the NIDS sensors that detect the devices and builds "detects::detected
by” relationships between the NIDS records (parent) and the CIs it
discovers (child).

This topic lists the relevant classes that the CMDB CI Class Models store
app adds or updates. See the class columns table for further details
about the columns added for each class.

See the full release notes for all CMDB CI Class Models.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

72

Zurich ServiceNow AI Platform Capabilities

---
*Page 73*

Network Intrusion Detection System (NIDS) schema structure

Classes

This section lists the classes that the CMDB CI Class Models store app
adds or updates.See the class columns table for further details about the
columns added for each class.

CMDB CI Class Models: Release 1.30 adds the following classes for the
Network Intrusion Detection System (NIDS). For the list of classes in the
base system, including classes that this app might extend, see CMDB
tables descriptions.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

73

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 73, 1160x496px]*

```
....

..:..

.....              ..:::..    .....    -------.
.   .              .......
..:. .:..           .... .:..           .... .:..
....  .......   .   ....  .......   .   ....  .......   .
.:..  .......  ...  .:..  .......  ...  .:..  .......  ...
.                   .                   .
.                   .                   .
.::::..             ..:::..             ..:::..
```

---
*Page 74*

Class
Extends
Description

Network Intrusion
Detection System
(NIDS) (cmdb_ci_nids)

cmdb_ci_ids_network

NIDS is an intrusion
detection system
within the network
that examines the
traffic from all devices
on the network.
NIDS scanners build
relationships between
the OT network
scanning appliances,
and the OT devices on
the network. An NIDS
Manager manages
the NIDS sensors.

Class columns

CMDB CI Class Models: Release 1.30 adds the following columns to the
Network Intrusion Detection System (NIDS) [cmdb_ci_nids] class.

Network Intrusion Detection System (NIDS) [cmdb_ci_nids] class

Column label
Column name
Description

NIDS source ID
Correlation_id

Identifier of the NIDS
device. Uses the
assigned Correlation ID
for the NIDS as its
nids_source_id.

NIDS source name
nids_source_name
Name of the NIDS
device.

Network type
assignment

network_type_assignm
ent

Designates if the
device is on an IT or OT
network.

NIDS assignment site
isa_entity_site
ISA site assigned to the
NIDS. This information

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

74

Zurich ServiceNow AI Platform Capabilities

---
*Page 75*

Column label
Column name
Description

is available when the
logged in user has an
assigned ISA Admin
role.

Roles and Access Control Logic (ACLs)

The NIDS Admin (cmdb_nids_admin) role is associated with the Network
Intrusion Detection System (NIDS) [cmdb_ci_nids] class: Can create, read,
update, and delete Network IDS (NDIS) OT records. To view the Network
IDS Application selection on the application menu, you must have this
role.

Key relationship structure

For each CMDB CI record with a “Detected by” relationship with an NIDS
record, a ServiceNow Operational Technology Certified Service Graph
Connector does the following:

1. Assigns the following NIDS-related metadata values to the CI:

a. Location

b. Company

c. Related users (Owned by, Managed by, Supported by, Assigned
to)

d. Related user groups (Approval group, Managed by Group,
Support group, Change group)

2. If the NIDS network type is set to OT, it assigns the following NIDS-
related metadata values to the CI:

a. Creates an OT device (cmdb_ot_entity) record for the CI, using
the cmdb_ot_entity reference on the CI.

b. Assigns the NIDS assignment zone to the OT device record.

c. If the Industrial Process Manager is installed, assign the NIDS
assignment site to the OT device record.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

75

Zurich ServiceNow AI Platform Capabilities

---
*Page 76*

3. Life Cycle Stage and Life Cycle Stage Status values for the CI are
used to capture the learning mode of a sensor.

• If Life Cycle Stage is Operational and Life Cycle Stage Status is
Learning Mode, then validation is unsuccessful.

• If Life Cycle Stage Status is In Use, validation is successful.

## Network Inventory (NI) extension classes

The CMDB CI Class Models store app adds or updates classes for the
Telecommunications Network Inventory application. Telecommunications
Network Inventory uses the Network Inventory (NI) extension classes to
extend the Configuration Management Database (CMDB) Configuration
Item (CI) class hierarchy.

These extensions enable the CMDB to store information about a service
provider's network inventory. The store app adds class models that
extend the CMDB class hierarchy, including:

• Class descriptions

• Identification rules

• Identifier entries

• Dependent relationships, if applicable.

With the ServiceNow Telecommunications Network Inventory application,
you can build a digital representation of your physical and logical
networks. This application uses the NI class extensions to populate CIs that
form the basis of your digital network inventory model. To learn more, see
Telecommunications Network Inventory.

See the full release notes for all CMDB CI Class Models.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

76

Zurich ServiceNow AI Platform Capabilities

---
*Page 77*

Telecommunications Network Inventory (NI) schema structure

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

77

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 77, 2515x1385px]*

```
@@@@@@@@@@@@@@@@@@@@@@@@@@%:-----%@@@@@@@%=+=%@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@******@@@@@@@@@###%@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@=-----#@@@@@@------@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@%%%%%%@@@@#*****%*++**++#*###@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@*::::::*@@@@@@@@@@+=====*%%%%%@@@%%%%%%@@@%%%%%%@@%%%%%%@
@@@@@@%%%%@@@@-:::::*@@@@@%:::::-@@*.:::..%@@=:::::#@-:::::%
@@@@@@@@@@@@@@%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@%%%%%%%%@@@%#%#%%#%@@@@@######@%#%%##%@@@@@@@@@@@@@@@@@@@
@@*:::::::=@@@-::::::=@@@@%::::::@*.::::=@@@-::::::#@::::::-
@@@%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%@@####%#%
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@+=++==@@@@@@@@@@@+=+++=%@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@=-==--%@@@@@@@@@@=-==--%@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@-:--::%@@@@@@@@@@-:--::#@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@######@@@@@@@@@@@######@@@@@@@@@@@@@@@
```

---
*Page 78*

Classes

This section lists the classes that the CMDB CI Class Models store app adds
or updates. For the list of classes in the base system, including classes that
this app might extend, see CMDB tables descriptions.

NI extension classes

Class
Extends
Description

Network Site
[cmdb_ci_ni_site]
Site [cmdb_ci_site]

Network Site.

Captures and
maintains the location-
specific attributes for
each network site,
including the network
centers, buildings,
floors, and rooms
where equipment is
located.

The network site
records enable you to
view all the equipment
at a location. You
can filter the locations
by the assigned
type, role, or function
categories.

Telco Equipment
Holder
[cmdb_ci_ni_equipme
nt_holder]

Equipment Holder
[cmdb_ci_equipment_
holder]

Telco Equipment
Holder.

Represents the
physical units
that contain the
telecommunications
equipment, including
the cages, bays,
cabinets, slots, relay
racks, and line ups.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

78

Zurich ServiceNow AI Platform Capabilities

---
*Page 79*

Class
Extends
Description

The line ups contain
the individual relay
racks. Each relay
rack contains the
equipment shelves.
The equipment holders
can contain the other
equipment holders.

The equipment holder
records enable you
to track and manage
your network assets.

Telco Equipment
[cmdb_ci_ni_telco_eq
uipment]

Network gear
[cmdb_ci_netgear]

Telco Equipment.

Represents a shelf
or device that
provides the technical
functionality in a
network. Examples
include the routers,
modems, mobile
devices, optical
cables, relays,
and switches. The
equipment can have
slots, cards, or
ports. The equipment
can exist within an
equipment holder or
by itself because not
all equipment is rack
mounted.

The equipment
records enable you
to track and manage
your network assets.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

79

Zurich ServiceNow AI Platform Capabilities

---
*Page 80*

Class
Extends
Description

Telco Filler Component
[cmdb_ci_filler_compo
nent]

Hardware
[cmdb_ci_hardware]

Filler Component.

Represents a cover for
empty spots/slots in a
rack or device. Often
made of flat metallic
or plastic materials,
helps separate cold
and hot air zones,
prevents dust from
entering the chassis,
and ensures proper
airflow through the
chassis or rack.

Telco Heat Baffle
[cmdb_ci_heat_baffle]

Filler Component
[cmdb_ci_filler_compo
nent]

Heat Baffle.

Represents hardware
used to help direct
rising hot air away
from equipment.

Telco Service
Switching Point (SSP)
[cmdb_ci_service_swit
ching_point]

Telco Equipment
[cmdb_ci_ni_telco_eq
uipment]

Service Switching Point
(SSP).

Switch in a
telecommunications
network that sends a
query to a central
database called a
service control point
(SCP) via the SS7
network to determine
how a TDM call can
be routed. SSPs can
be part of a voice
switch or a separate

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

80

Zurich ServiceNow AI Platform Capabilities

---
*Page 81*

Class
Extends
Description

computer connected
to it.

Telco Service Control
Point (SCP)
[cmdb_ci_service_con
trol_point]

Telco Equipment
[cmdb_ci_ni_telco_eq
uipment]

Service Control Point
(SCP).

Represents service
control points (SCPs)
in the Signaling
System 7 (SS7) network
responsible for routing
calls and managing
special features.

Telco Control
Component
[cmdb_ci_telco_contr
ol_component]

Telco Equipment
[cmdb_ci_ni_telco_eq
uipment]

Control Component.

Device in a computer
hardware component
that creates an
interface between
a computer’s main
system motherboard
and other hardware
components. Some
will be integrated
directly into the
motherboard, while
others may be added
on as expansion
devices.

Network Interface
[cmdb_ci_ni_interface
]

Network Port
[cmdb_ci_ni_network_
port]

Network Interface.

Captures and
maintain equipment-

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

81

Zurich ServiceNow AI Platform Capabilities

---
*Page 82*

Class
Extends
Description

specific attributes for
the network interfaces.

Identification: Serial
Number (100) Name
(200)

Dependent on

• Hardware
(contains::contained
by)

• Logical Composite
(contains::contained
by)

• Network Port
(contains::contained
by)

• Virtual Machine
Object
(contains::contained
by)

• Kubernetes
Component
(contains::contained
by)

• Application Service
(contains::contained
by)

Attribute of Network
Port: MTU Size
[mtu_size]

In networking,
maximum transmission
unit (MTU) is
a measurement

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

82

Zurich ServiceNow AI Platform Capabilities

---
*Page 83*

Class
Extends
Description

representing the
largest data packet
that a network-
connected device will
accept. Measured in
integer bytes.

Use cases:

• Optimizing network
performance:
Setting the right
MTU size can
reduce overhead
and maximize data
throughput.

• Avoiding
fragmentation: A
properly configured
MTU prevents packet
fragmentation,
reducing processing
load and
transmission delays.

• Tuning for network
type: Different
networks (for
example, VPNs,
WANs) may require
specific MTU sizes to
ensure compatibility
and optimal
performance.

Network Interface
Card (formerly
Interface Card)
[cmdb_ci_interface_c
ard]

Hardware
[cmdb_ci_hardware]

Network Interface
Card.

Represents interface
cards that are stored

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

83

Zurich ServiceNow AI Platform Capabilities

---
*Page 84*

Class
Extends
Description

in a network. Cards
can occupy more
than one slot and
can contain other
cards. They can be
the equipment ports
that are physical
or logical (virtual).
Each port is assigned
a bandwidth value.
The bandwidths are
consumed when used
in network designs.

Network Service
Instance
[cmdb_ci_network_ser
vice_instance]

Network Service
Instance represents
a specific deployed,
provisioned, and/or
configured instance
of a set of network
services that, in turn,
are based on network
functions.

Physical Connection
[cmdb_ci_ni_physical_l
ink]

Network Link
[cmdb_ci_network_link
]

Physical Connection.

Represents the
physical port
connections on the
network interface
cards in your networks.

Logical Connection
[cmdb_ci_ni_logical_p
ath]

Network Circuit
[cmdb_ci_network_cir
cuit]

Logical Connection.

Represents the logical
or virtual port
connections on the
network interface
cards. A logical
connection typically

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

84

Zurich ServiceNow AI Platform Capabilities

---
*Page 85*

Class
Extends
Description

represents the multiple
physical connections
on an interface card.

## Nutanix extension classes

The CMDB CI Class Models store app adds or updates classes for Nutanix.

The CMDB CI Class Models app adds class models that extend the
CMDB class hierarchy, including class descriptions, identification rules,
identifier entries, and, if applicable, dependent relationships. You can use
the added classes just like any other CMDB class. Applications such as
Discovery and Service Mapping Patterns can use the class extensions to
populate CIs and discover technologies and software.

See the full release notes for all CMDB CI Class Models.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Nutanix Enterprise Cloud platform

The Nutanix Enterprise Cloud platform is a converged, scale-out compute
and storage system that hosts and stores virtual machines. All nodes
in a Nutanix cluster share the management of cluster resources. The
foundational unit for the cluster is a Nutanix node which runs a standard
hypervisor and contains processors, memory, and local storage (SSDs
and hard disks). A Nutanix Controller virtual machine runs on each node,
enabling the pooling of local storage from all nodes in the cluster.

Classes

This section lists the classes that the CMDB CI Class Models store app
adds or updates. See the class columns table for further details about the
columns added for each class.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

85

Zurich ServiceNow AI Platform Capabilities

---
*Page 86*

CMDB CI Class Models: Release 1.6.0 adds the following classes for
Nutanix. For the list of classes in the base system, including classes that
this app might extend, see CMDB tables descriptions.

Class
Extends
Description

Nutanix Prism Central

[cmdb_ci_nutanix_pris
m_central]

Virtual Machine
Object

[cmdb_ci_vm_object]

Multi-cluster manager
responsible for
managing multiple
Acropolis Clusters
to provide a
single, centralized
management
interface.

CMDB CI Class Models: Release 1.2.0 adds the following classes for
Nutanix.

Class
Extends
Description

Nutanix Cluster

[cmdb_ci_nutanix_clus
ter]

Virtual Machine
Object

[cmdb_ci_vm_object]

Cluster comprising
of the physical
nodes running Nutanix
software.

Nutanix Controller VM

[cmdb_ci_nutanix_con
troller_vm]

Application

[cmdb_ci_appl]

Nutanix controller
virtual machine that is
present in each node
and that provides
the storage clustering
and management
capabilities.

Nutanix Storage
Container

[cmdb_ci_nutanix_stor
age_container]

Storage Volume

[cmdb_ci_storage_vol
ume]

Subset of Nutanix
storage pool used to
apply policies such
as reserved capacity,
replication factor, and
storage optimization
options.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

86

Zurich ServiceNow AI Platform Capabilities

---
*Page 87*

Class
Extends
Description

Nutanix Storage Pool

[cmdb_ci_nutanix_stor
age_pool]

Storage Pool

[cmdb_ci_storage_po
ol]

Grouping of physical
disks within a
Nutanix cluster which
is typically used
to create physical
separation between
virtual machines.

Nutanix Host

[cmdb_ci_nutanix_hos
t]

Virtualization Server

[cmdb_ci_virtualizatio
n_server]

Physical host on which
all the virtual machines
run.

Nutanix Virtual
Machine Instance

[cmdb_ci_nutanix_vm
_instance]

Virtual Machine
Instance

[cmdb_ci_vm_instanc
e]

A virtual machine
that runs on Nutanix
infrastructure.

CMDB CI Class Models: Release 1.1.5 adds the following classes for
Nutanix.

Class
Extends
Description

Nutanix Cluster

[cmdb_ci_nutanix_clus
ter]

Virtual Machine
Object

[cmdb_ci_vm_object]

Cluster comprising
of the physical
nodes running Nutanix
software.

Nutanix Controller VM

[cmdb_ci_nutanix_con
troller_vm]

Application

[cmdb_ci_appl]

Nutanix controller
virtual machine that is
present in each node
and that provides
the storage clustering
and management
capabilities.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

87

Zurich ServiceNow AI Platform Capabilities

---
*Page 88*

Class
Extends
Description

Nutanix Storage
Container

[cmdb_ci_nutanix_stor
age_container]

Storage Volume

[cmdb_ci_storage_vol
ume]

Subset of Nutanix
storage pool used to
apply policies such
as reserved capacity,
replication factor, and
storage optimization
options.

Nutanix Storage Pool

[cmdb_ci_nutanix_stor
age_pool]

Storage Pool

[cmdb_ci_storage_po
ol]

Grouping of physical
disks within a
Nutanix cluster which
is typically used
to create physical
separation between
virtual machines.

Nutanix Host

[cmdb_ci_nutanix_hos
t]

Virtualization Server

[cmdb_ci_virtualizatio
n_server]

Physical host on which
all the virtual machines
run.

Nutanix Virtual
Machine Instance

[cmdb_ci_nutanix_vm
_instance]

Virtual Machine
Instance

[cmdb_ci_vm_instanc
e]

A virtual machine
that runs on Nutanix
infrastructure.

CMDB CI Class Models: Release 1.1.4 adds the following classes for
Nutanix.

Nutanix Cluster

[cmdb_ci_nutanix_clus
ter]

Virtual Machine
Object

[cmdb_ci_vm_object]

Cluster comprising
of the physical
nodes running Nutanix
software.

Nutanix Controller VM
Application
Nutanix controller
virtual machine that is

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

88

Zurich ServiceNow AI Platform Capabilities

---
*Page 89*

[cmdb_ci_nutanix_con
troller_vm]
[cmdb_ci_appl]

present in each node
and that provides
the storage clustering
and management
capabilities.

Nutanix Storage
Container

[cmdb_ci_nutanix_stor
age_container]

Storage Volume

[cmdb_ci_storage_vol
ume]

Subset of Nutanix
storage pool used to
apply policies such
as reserved capacity,
replication factor, and
storage optimization
options.

Nutanix Storage Pool

[cmdb_ci_nutanix_stor
age_pool]

Storage Pool

[cmdb_ci_storage_po
ol]

Grouping of physical
disks within a
Nutanix cluster which
is typically used
to create physical
separation between
virtual machines.

Nutanix Host

[cmdb_ci_nutanix_hos
t]

Virtualization Server

[cmdb_ci_virtualizatio
n_server]

Physical host on which
all the virtual machines
run.

Nutanix Virtual
Machine Instance

[cmdb_ci_nutanix_vm
_instance]

Virtual Machine
Instance

[cmdb_ci_vm_instanc
e]

A virtual machine
that runs on Nutanix
infrastructure.

Class columns

CMDB CI Class Models: Release 1.6.0 adds no columns to the Nutanix
Prism Central [cmdb_ci_nutanix_prism_central] class.

CMDB CI Class Models: Release 1.2.0 adds the following columns to the
respective classes.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

89

Zurich ServiceNow AI Platform Capabilities

---
*Page 90*

Nutanix Cluster [cmdb_ci_nutanix_cluster] class

Added columns
Description

Block Serial Numbers
Serial numbers of blocks that are
connected to the cluster.

Cluster ID
UUID (Universal Unique Identifier) of
the cluster.

External Subnet
Subnet of the external IP address
of the cluster.

Full Version

Full version of the cluster.

For example: el7.3-release-
euphrates-5.10.3.1-
stable-655d4def34bf18785782f2ad
b8cdd5f8457d1fe3

Hypervisor Types
Types of hypervisors that are
related to this cluster.

Internal Subnet
Subnet of internal IP addresses.

NCC Version
Nutanix cluster check version.

NTP Servers
NTP servers that are related to this
cluster.

Number of Nodes
Number of nodes that are
connected to the cluster.

Timezone
Timezone of the cluster.

Version

Version of the cluster.

For example: 5.10.3.1

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

90

Zurich ServiceNow AI Platform Capabilities

---
*Page 91*

Nutanix Controller VM [cmdb_ci_nutanix_controller_vm] class

Added columns
Description

Hypervisor Type
Type of hypervisor.

Memory (MB)
Amount of memory (in MB)
available on the controller.

State
On/off power state of controller.

VM ID
UUID of the controller virtual
machine.

Object ID
ID of the controller virtual machine.

Nutanix Storage Container [cmdb_ci_nutanix_storage_container]
class

Added columns
Description

Compression
Indicates whether compression is
enabled.

Container ID
UUID of the container.

Deduplication

Indicates whether on disk
deduplication is enabled, that is
dedup compression applied to
data on hard disks (HDD).

Performance tier deduplication
is a prerequisite for on disk
deduplication.

Erasure Code
Indicates whether erasure coding
is enabled.

Replication Factor
Number of maintained data
copies. The replication factor is

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

91

Zurich ServiceNow AI Platform Capabilities

---
*Page 92*

Added columns
Description

specified (2 or 3) when the
container is created.

The following classes have no added columns:

• Nutanix Storage Pool [cmdb_ci_nutanix_storage_pool]

• Nutanix Host [cmdb_ci_nutanix_host]

• Nutanix Virtual Machine Instance [cmdb_ci_nutanix_vm_instance]

CMDB CI Class Models: Release 1.1.5 adds the following columns to the
respective classes.

Nutanix Cluster [cmdb_ci_nutanix_cluster] class

Added columns
Description

Block Serial Numbers
Serial numbers of blocks that are
connected to the cluster.

Cluster ID
UUID (Universal Unique Identifier) of
the cluster.

External Subnet
Subnet of the external IP address
of the cluster.

Full Version

Full version of the cluster.

For example: el7.3-release-
euphrates-5.10.3.1-
stable-655d4def34bf18785782f2ad
b8cdd5f8457d1fe3

Hypervisor Types
Types of hypervisors that are
related to this cluster.

Internal Subnet
Subnet of internal IP addresses.

NCC Version
Nutanix cluster check version.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

92

Zurich ServiceNow AI Platform Capabilities

---
*Page 93*

Added columns
Description

NTP Servers
NTP servers that are related to this
cluster.

Number of Nodes
Number of nodes that are
connected to the cluster.

Timezone
Timezone of the cluster.

Version

Version of the cluster.

For example: 5.10.3.1

Nutanix Controller VM [cmdb_ci_nutanix_controller_vm] class

Added columns
Description

Hypervisor Type
Type of hypervisor.

Memory
Amount of memory (in MB)
available to the virtual machine.

State
On/off state of power.

VM ID
UUID of the controller virtual
machine.

Object ID
ID of the controller virtual machine.

Nutanix Storage Container [cmdb_ci_nutanix_storage_container]
class

Added columns
Description

Compression
Indicates whether compression is
enabled.

Container ID
UUID of the container.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

93

Zurich ServiceNow AI Platform Capabilities

---
*Page 94*

Added columns
Description

Deduplication

Indicates whether on disk
deduplication is enabled, that is
dedup compression applied to
data on hard disks (HDD).

Performance tier deduplication
is a prerequisite for on disk
deduplication.

Erasure Code
Indicates whether erasure coding
is enabled.

Replication Factor

Number of maintained data
copies. The replication factor is
specified (2 or 3) when the
container is created.

The following classes have no added columns:

• Nutanix Storage Pool [cmdb_ci_nutanix_storage_pool]

• Nutanix Host [cmdb_ci_nutanix_host]

• Nutanix Virtual Machine Instance [cmdb_ci_nutanix_vm_instance]

CMDB CI Class Models: Release 1.1.4 adds the following columns to the
respective classes.

Nutanix Cluster [cmdb_ci_nutanix_cluster] class

Added columns
Description

Block Serial Numbers
Serial numbers of blocks that are
connected to the cluster.

Cluster ID
UUID (Universal Unique Identifier) of
the cluster.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

94

Zurich ServiceNow AI Platform Capabilities

---
*Page 95*

Added columns
Description

External Subnet
Subnet of the external IP address
of the cluster.

Full Version

Full version of the cluster.

For example: el7.3-release-
euphrates-5.10.3.1-
stable-655d4def34bf18785782f2ad
b8cdd5f8457d1fe3

Hypervisor Types
Types of hypervisors that are
related to this cluster.

Internal Subnet
Subnet of internal IP addresses.

NCC Version
Nutanix cluster check version.

NTP Servers
NTP servers that are related to this
cluster.

Number of Nodes
Number of nodes that are
connected to the cluster.

Timezone
Timezone of the cluster.

Version

Version of the cluster.

For example: 5.10.3.1

Nutanix Controller VM [cmdb_ci_nutanix_controller_vm] class

Added columns
Description

Hypervisor Type
Type of hypervisor.

Memory
Amount of memory (in MB)
available to the virtual machine.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

95

Zurich ServiceNow AI Platform Capabilities

---
*Page 96*

Added columns
Description

State
On/off state of power.

VM ID
UUID of the controller virtual
machine.

Object ID
ID of the controller virtual machine.

Nutanix Storage Container [cmdb_ci_nutanix_storage_container]
class

Added columns
Description

Compression
Indicates whether compression is
enabled.

Container ID
UUID of the container.

Deduplication

Indicates whether on disk
deduplication is enabled, that is
dedup compression applied to
data on hard disks (HDD).

Performance tier deduplication
is a prerequisite for on disk
deduplication.

Erasure Code
Indicates whether erasure coding
is enabled.

Replication Factor

Number of maintained data
copies. The replication factor is
specified (2 or 3) when the
container is created.

The following classes have no added columns:

• Nutanix Storage Pool [cmdb_ci_nutanix_storage_pool]

• Nutanix Host [cmdb_ci_nutanix_host]

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

96

Zurich ServiceNow AI Platform Capabilities

---
*Page 97*

• Nutanix Virtual Machine Instance [cmdb_ci_nutanix_vm_instance]

Related concepts

• CMDB schema model

## OpenStack extension classes

The CMDB CI Class Models store app adds or updates classes for
OpenStack.

The CMDB CI Class Models app adds class models that extend the
CMDB class hierarchy, including class descriptions, identification rules,
identifier entries, and, if applicable, dependent relationships. You can use
the added classes just like any other CMDB class. Applications such as
Discovery and Service Mapping Patterns can use the class extensions to
populate CIs and discover technologies and software.

See the full release notes for all CMDB CI Class Models.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

OpenStack

OpenStack is a cloud operating system that controls large pools of
compute, storage, and networking resources throughout a datacenter.
All of these resources are managed and provisioned through APIs
with common authentication mechanisms. Other components provide
services such as orchestration, fault management, and service
management to ensure high availability of user applications. OpenStack
is broken up into services to enable you to plug and play components
depending on your needs. These components are designed for horizontal
scalability, so you can easily add new resources to grow your cloud over
time.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

97

Zurich ServiceNow AI Platform Capabilities

---
*Page 98*

OpenStack classes integrated with the CMDB class hierarchy

Classes

This section lists the classes that the CMDB CI Class Models store app
adds or updates. See the class columns table for further details about the
columns added for each class.

CMDB CI Class Models: Release 1.8.0 adds the following classes for
OpenStack. For the list of classes in the base system, including classes
that this app might extend, see CMDB tables descriptions.

Class
Extends
Description

OpenStack Services
[cmdb_ci_cloud_open
stack_service]

Virtual Machine
Object
[cmdb_ci_vm_object]

An OpenStack web
service that can be
accessed via a URL.

OpenStack Endpoint
[cmdb_ci_cloud_open
stack_endpoint]

Virtual Machine
Object
[cmdb_ci_vm_object]

The access point of a
Service.

OpenStack Domain
[cmdb_ci_cloud_open
stack_domain]

Virtual Machine
Object
[cmdb_ci_vm_object]

A collection of users,
groups, and projects.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

98

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 98, 1438x676px]*

```
.....      .....    .::.
.          .       .
.

.                          .
.               ..
.
.
..                           ..
.   .
...      ..



```

---
*Page 99*

Class columns

CMDB CI Class Models: Release 1.8.0 adds the following columns to the
respective classes.

OpenStack Services [cmdb_ci_cloud_openstack_service] class

Added columns
Description

type

The Service type, which describes
the API implemented by the
Service. Possible values: Compute,
ec2, identity, image, network, or
volume.

enabled

Defines if the service and its
endpoints appear in the Service
catalog (true/false).

OpenStack Endpoint [cmdb_ci_cloud_openstack_endpoint] class

Added columns
Description

interface

The interface type, which
describes the visibility of the
endpoint. Possible values:

• public - Visible by end users
on a publicly available network
interface.

• internal - Visible by end users on
an unmetered internal network
interface.

• admin - Visible by administrative
users on a secure network
interface.

enabled

Defines if the Service and its
endpoints appear in the Service
catalog (true/false).

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

99

Zurich ServiceNow AI Platform Capabilities

---
*Page 100*

OpenStack Domain [cmdb_ci_cloud_openstack_domain] class

Added columns
Description

enabled
Defines if the domain is enabled
(true/false).

Related concepts

• CMDB schema model

## Operational Technology (OT) extension classes

The CMDB CI Class Models store app adds or updates classes for
Operational Technology (OT).

The CMDB CI Class Models app adds class models that extend the
CMDB class hierarchy, including class descriptions, identification rules,
identifier entries, and, if applicable, dependent relationships. You can use
the added classes just like any other CMDB class. Applications such as
Discovery and Service Mapping Patterns can use the class extensions to
populate CIs and discover technologies and software.

See the full release notes for all CMDB CI Class Models.

Operational Technology (OT) data model

The Operational Technology (OT) data model was created to enable
management of “OT Device” data. Operational Technology that
controls industrial equipment can be based on IT class hardware
(computers, servers, network gear, and so on), or on specific hardware
profiles not included in the ServiceNow IT class model (PLCs, HMIs,
Engineering Workstations, Historians, and so on). Therefore, a single OT
Device in the OT data model includes two primary components:

1. A CI class record. This can be an IT or an OT class CI.

2. An OT Device details record. This describes the OT Device type
(function) and other OT-specific attributes.

Each OT Device in the CMDB can be distinguished as having an
“OT Device Details” reference [cmdb_ot_entity reference field] to a

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

100

Zurich ServiceNow AI Platform Capabilities

---
*Page 101*

specific OT Device details [cmdb_ot_entity table] record. This is a bi-
directional reference; the ot_device reference on the cmdb_ot_entity
table references the CI record. If the cmdb_ot_entity reference of a
given CI record is not empty, the CI is considered to be an OT Device.

For example, an HMI (Human Machine Interface) OT Device could be
composed in at least two different ways.

1. A computer CI with an OT Device detail record describing its “OT
Device type” as HMI.

2. An HMI CI with an OT Device detail record describing its “OT Device
type” also as HMI.

In this way, a list of HMIs can be derived and a list of all computers in an
enterprise can also be derived.

For more details on the OT data model, see Implementing the CSDM
framework for Operational Technology.

You can use the added classes as any other CMDB class. Applications
such as Discovery for Operational Technology, and Service Graph
Connector for Operational Technology (Excel) use these class extensions
to populate CIs and discover various technologies and software. To learn
more, see:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

101

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 101, 1246x646px]*

```

..::.::...::.:..::..:..:.::::::::....: .:.::.::.

.::::............................

.::::::::::.       .:::::::::. ...
.******+***#=      :***+*++***+
:::::::::::.       :-:::-----:
...               ...
::::::-.
:::::::.
=+++===+++=        ::::::::::. ..
+**++++++*+        ----------:
-=----=--=-        ::::::::::.

```

---
*Page 102*

• Service Graph Connector for Microsoft Excel

• IT Discovery for OT Networks

Note:   In Operational Technology, CIs used on an OT network to
automate an industrial process are often referred to as  OT Devices.
This term shouldn’t be confused with an Device record commonly
used in the practice of Asset Management.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

102

Zurich ServiceNow AI Platform Capabilities

---
*Page 103*

Operational Technology (OT) schema structure

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

103

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 103, 1822x902px]*

```
........
..      -========:      ..
..:::...
........        --::...:........ ...  ...::::...
.:::::::..  ..  *****+++==--:::. ...   ........
-----------:   ....   :::::-:-----::.   ..      ...
...:::::....      .                  .      ...:::::..
-----------:         .::.     ::.
......::-:-:....... ......  ........  ..........
......::..... ......  ........ ...........
.                           ...............
...:::::::..                      -=-----------=:
.....

```

---
*Page 104*

Classes

This section lists the classes that the CMDB CI Class Models store app
adds or updates. See the class columns table for further details about
the columns added for each class. For the list of classes in the base
system, including classes that this app might extend, see CMDB tables
descriptions.

CMDB CI Class Models: Release 1.69.0 adds the following classes for
Operational Technology (OT).

Class
Description

Firmware Installation
[cmdb_firmware_install]

Firmware associated with the OT
device.

Key Value [cmdb_key_value]

Additional information related to
the OT device that's populated
with the available OT integrations
and captured as Key value pairs.

Software Instance
[cmdb_sam_sw_install]

Captures the software installed on
the OT device if Software Asset
Management isn't available.

Note:   If Software Asset
Management is installed and
entitled, the software installed
data is available in the
Software Installation related
list.

CMDB CI Class Models: Release 1.59.0 adds the following classes for OT.

Class
Extends
Description

OT System Service
[cmdb_ci_ot_system_s
ervice]

cmdb_ci_ot_system

Category of
technology and
systems that are
used to manage,
control, and monitor
physical processes,

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

104

Zurich ServiceNow AI Platform Capabilities

---
*Page 105*

Class
Extends
Description

machinery, and
industrial operations.

CMDB CI Class Models: Release 1.56.0 adds the following classes for OT.

Class
Extends
Description

Quality Inspection
Control System
[cmdb_ci_ot_qics]

cmdb_ci_ot_control

Control systems that
assist specifically in
quality and inspection
functions.

CMDB CI Class Models: Release 1.30 adds the following classes for OT.

Class
Extends
Description

CNC
[cmdb_ci_ot_cnc]
cmdb_ci_ot_control

Computer Numerical
Control, used for
automated control of
machining tools such
as drills, lathes, mills,
and for 3D printers.

DCS [cmdb_ci_ot_dcs]
cmdb_ci_ot_control

Distributed Control
System. Achieves
control using
intelligence distributed
about the controlled
process, rather than
by a centrally located
single unit.

DPU [cmdb_ci_ot_dpu]
cmdb_ci_ot_control

Distributed Processing
Units. ICS on a
dedicated network,
with each DPU
handling thousands of
points of I/O.

EWS [cmdb_ci_ot_ews]
cmdb_ci_ot_superviso
ry

Engineering
Workstation. A
computing platform

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

105

Zurich ServiceNow AI Platform Capabilities

---
*Page 106*

Class
Extends
Description

for configuration,
maintenance, and
diagnostics of ICS
applications and
other control system
equipment.

Historian
[cmdb_ci_ot_historian]

cmdb_ci_ot_superviso
ry

Data Historian. A
centralized database
supporting data
analysis for industrial
processes.

HMI [cmdb_ci_ot_hmi]
cmdb_ci_ot_superviso
ry

Human-Machine
Interface. Hardware
or software through
which an operator
interacts with a
controller.

IED [cmdb_ci_ot_ied]
cmdb_ci_ot_control

Intelligent Electronic
Device. Receives or
sends data/control
from or to an external
source for power grids.

Industrial Actuator
[cmdb_ci_ot_industrial_
actuator]

cmdb_ci_ot_field_dev
ice

Component of a
machine that is
responsible for moving
and controlling a
mechanism, such as
opening a valve.

Industrial Drive
[cmdb_ci_ot_industrial_
drive]

cmdb_ci_ot_field_dev
ice

Equipment used to
control the speed
of machinery. It can
be a mechanical
electromechanical,
hydraulic, or
electronic device.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

106

Zurich ServiceNow AI Platform Capabilities

---
*Page 107*

Class
Extends
Description

Industrial 3D Printer
[cmdb_ci_ot_industrial_
3d_printer]

cmdb_ci_ot_control

Device used
in additive
manufacturing for
the construction of
a three-dimensional
object from a CAD
model, or a digital 3D
model.

Industrial Robot
[cmdb_ci_ot_industrial_
robot]

cmdb_ci_ot_field_dev
ice

Robotic system used
for manufacturing.

Industrial Sensor
[cmdb_ci_ot_industrial_
sensor]

cmdb_ci_ot_field_dev
ice

Sensor device used to
monitor the health of
equipment

Network Gear
[cmdb_ci_netgear]
cmdb_ci_hardware

Network gear is
an electronic device
which is required for
communication and
interaction between
devices on a
computer network.

Operations Technology
[cmdb_ci_ot]
cmdb_ci_hardware

Base class
for Operational
Technology, used
for industrial control.
For instance, in
manufacturing.

OPC Client
[cmdb_ci_ot_opc_clie
nt]

cmdb_ci_ot_superviso
ry

Software module that
enables applications
to acquire data from
an OPC Server or
conduct supervisory
control using an OPC
Server.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

107

Zurich ServiceNow AI Platform Capabilities

---
*Page 108*

Class
Extends
Description

OPC Server
[cmdb_ci_ot_opc_serv
er]

cmdb_ci_ot_control

Software module that
enables applications
to provide their data
to the outside world
using OPC.

OT Control Module
[cmdb_ci_ot_control_
module]

cmdb_ci_ot_control

Module such as a PLC
or DCS connected to
an OT Control System.

OT Control System
[cmdb_ci_ot_control]
cmdb_ci_ot

Base Class for industrial
control systems (ICS),
usually at Purdue
Model Level 1 or 2.

OT Supervisory System
[cmdb_ci_ot_superviso
ry]

cmdb_ci_ot

Base class for
supervisory systems,
usually at Purdue
Model Level 2 or 3.

PLC [cmdb_ci_ot_plc]
cmdb_ci_ot_control

Programmable Logic
Controller. Used to
control OT Devices.

Protocol Converter
[cmdb_ci_protocol_co
nverter]

cmdb_ci_hardware_n
etwork_gear

Device used to
convert standard or
proprietary protocol of
one device to the
protocol suitable for
the other device or
tools to achieve the
interoperability.

RTU [cmdb_ci_ot_rtu]
cmdb_ci_ot_control

Remote Terminal
Unit. Special purpose
data acquisition and
control unit designed
to support DCS
and SCADA remote
stations

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

108

Zurich ServiceNow AI Platform Capabilities

---
*Page 109*

Class
Extends
Description

SCADA Client
[cmdb_ci_ot_scada_cli
ent]

cmdb_ci_ot_superviso
ry

Supervisory Control
and Data Acquisition.
Client that enables an
operator to manage a
SCADA server.

SCADA Server
[cmdb_ci_ot_scada_se
rver]

cmdb_ci_ot_control

Supervisory Control
and Data Acquisition.
System capable
of gathering and
processing data and
applying operational
controls over long
distance.

Class columns

CMDB CI Class Models: Release 1.30 adds the following columns to the
respective classes.

Operational Technology (OT) [cmdb_ci_ot] class

Added columns
Description

firmware_version
Firmware version reported by
discovery source.

hardware_version
Hardware version reported by
discovery source.

OT Control System [cmdb_ci_ot_control_system] class

Added columns
Description

has_module

true/false value describing if the
system has modules, such as
chassis / blade architecture.

backplane_name
System-reported string name or
number for the backplane.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

109

Zurich ServiceNow AI Platform Capabilities

---
*Page 110*

Added columns
Description

backplane_id
System-reported unique ID for the
backplane

OT Control Module [cmdb_ci_ot_control_module] class

Added columns
Description

slot_number
Reported slot in the control system
this module is using.

module_type
Module type reported by the
discovery source.

OT Field Device [cmdb_ci_ot_field_device] class

Added columns
Description

device_type

List that describes if the device
provides input, output, or both to
the parent control system.

OT System Service [cmdb_ci_ot_system_service] class

Added columns
Description

display_name
Name of the OT system.

isa_entity_site
Site where the OT system is
located.

Form view

All Operational Technology (OT) extension classes have a "Default view"
form view that includes the OT Device Details attribute at the top of the
form. The following table lists the other classes that have the Operational
Technology (OT) view on their form context menu. This is the default form
view for users with the cmdb_ot_viewer role for the following classes.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

110

Zurich ServiceNow AI Platform Capabilities

---
*Page 111*

Class
Description

base hardware
[cmdb_ci_hardware]
Base class for hardware.

base computer
[cmdb_ci_computer]

An extension of the Hardware
table, capturing computer
properties.

base server [cmdb_ci_server]
Base class for all types of servers.

linux server [cmdb_ci_linux_server]
Server running Linux software.

windows server
[cmdb_ci_win_server]

A server running Microsoft Windows
Server operating system.

IoT Device base class
[cmdb_ci_iot]

Parent table that contains Internet
of Things device types.

IP Firewall and extended classes
[cmdb_ci_ip_firewall]
Contains all network firewalls.

IP Router [cmdb_ci_ip_router]
Specialization of the Network Gear
[cmdb_ci_netgear] table.

IP Switch [cmdb_ci_ip_switch]
Specialization of the Network Gear
[cmdb_ci_netgear] table.

Protocol Converter
[cmdb_ci_protocol_converter]

Device used to convert standard
or proprietary protocol of one
device to the protocol suitable
for the other device or tools to
achieve the interoperability.

Classes not included in the table do not have the Operational
Technology (OT) view by default. For any additional classes required,
you can add the Operational Technology (OT) view to the form context
menu. For more information about form context menu options, see Form
context menu.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

111

Zurich ServiceNow AI Platform Capabilities

---
*Page 112*

Roles and Access Control Logic (ACLs)

The following roles are associated with the Operational Technology (OT)
[cmdb_ci_ot] classes and associated tables that follow:

Admin (cmdb_ot_admin)

Can create, read, update, and delete OT records. An admin can also
edit the OT Device Type on the OT Device form, and manage specific
configurations on the OT entity tables.

Editor (cmdb_ot_editor)

Can create, read, update, and delete OT Device records.

Viewer (cmdb_ot_viewer)

Can read OT Device records.

Note:   For the cmdb_ci_ot and cmdb_ot_entity tables:

• A user must have one of these three OT roles to view OT Devices.

• IT users with an assigned itil role are restricted from viewing
OT Devices in the cmdb_ci_ot table, and records in the
cmdb_ot_entity table. IT users are still able to see IT asset classes,
such as Computer, Installed Software.

OT customers may want to restrict access to OT Devices from users with
an IT (itil) only role, for both a viewer and an admin role.

Key relationship structures

Use the following key relationships as important guidelines when creating
Operational Technology (OT) CIs:

OT Entity
Since any CI class may be found on an OT network, the OT Entity
table [cmdb_ot_entity] captures additional attributes required in an OT
Environment:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

112

Zurich ServiceNow AI Platform Capabilities

---
*Page 113*

Attribute
Description

Business criticality
Business criticality assigned in the
discovery source.

OT Device
Reference to the CI that is on the
OT network.

OT Device type

The function of the OT Device,
regardless of CI class.

• For a dedicated HMI appliance,
the CI is in the cmdb_ci_ot_hmi
class, and the OT Device type
should be HMI.

• For a computer performing the
function of an HMI, the CI is
in the cmdb_ci_computer class
and the OT Device type should
be HMI

Purdue level
Purdue level of the OT Device.

Zone

Zone assigned to the OT Device,
usually used in the context of a
zone/conduit model.

IRE criterion attribute (ire_criterion)
Acts as a criterion attribute for an
OT entity-related entry.

The OT Entity is a related list added to the Operational Technology (OT)
[cmdb_ci_ot] table and extended tables. If you want to view OT entity
metadata on an existing CI class, first add the related list to the form.

OT Entity Type

The OT Entity Type [cmdb_ot_entity_type] table tracks the type of OT
Device that an OT or non-OT CI is performing the function of. It serves
as a necessary part of the Purdue level data model, and extends the
Application File [sys_metadata] table.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

113

Zurich ServiceNow AI Platform Capabilities

---
*Page 114*

The ServiceNow AI Platform includes records representing common OT
Device types of OT Device CIs. The OT Entity Type table attributes include:

Attribute
Description

Label
Display name of a specific OT
Device type.

Name
Value used to identify a specific OT
Device type.

OT table

Value used for auto-populating
the Type field for the OT entity
record [cmdb_ot_entity] of an OT
Class CI.

Parent

Parent type of a specific
type, which is a reference to
a record in the same table
[cmdb_ot_entity_type].

OT Class Mapping Template

The OT Class Mapping Template [ot_class_mapping_template] table
extends the Application File [sys_metadata] and is used by OT Service
Graph Connectors (SGCs) to classify a device into the correct CI class
based on the source data.

Each SGC can extend the OT Class Mapping Template table and create
a child class in the SGC application. Doing so defines the SGC-specific
device classification details. For example, the Excel SGC Class Mapping
[excel_sgc_class_mapping] table is a child of the OT Class Mapping
Template created in the Service Graph Connector for Microsoft Excel
application scope, which stores the classification details specific for the
Service Graph Connector for Microsoft Excel.

Note:   The OT Class Mapping Template doesn't store any
classification detail records. The child tables specific to each SGC
store the classification records for an SGC to use.

The OT Class Mapping Template table attributes include:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

114

Zurich ServiceNow AI Platform Capabilities

---
*Page 115*

Attribute
Description

Source Class
The class of the source CI.

Target CMDB class
The expected ServiceNow class
that for the CI.

OT Device type

The category type that the OT
Device is classified as. The Device
type is also the function that the
Device plays on the OT network.
For example:

An IT Device, such as a server, can
be converted to an OT Device,
and the function it plays on the
network is an HMI. Therefore, its
class is server and its Device type
is HMI.

Note:   In some cases,
there are OT Devices with no
OT function or OT Devices
where the Device type is
unknown. For OT Devices with
no OT function, select No
OT Function. For OT Devices
where the Device type is
unknown, select Unknown.

Allow OS classification

When set to True, if an operating
system is found on the CI, the
target is switched away from
this table's target class to a
ServiceNow class that matches its
OS.

For example, if Historian is the
target class but Windows Server OS
is found in the payload, the CI is
classified as a Windows Server CI

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

115

Zurich ServiceNow AI Platform Capabilities

---
*Page 116*

Attribute
Description

and its OT device type is set to
Historian.

Active

When checked, the class mapping
is set to Active and considered
during device classification.

Serial number
During CI identification, the Identification and Reconciliation Engine
(IRE) processes search for a serial number in two locations. One is
the CI serial number attribute, and the other is the Serial Number
[cmdb_serial_number] table, with reference back to the Operational
Technology (OT) [cmdb_ci_ot] table.

• It stores any serial number of any type other than system serial number,
and only in the Serial Number table (and not in the server CI attribute).

• If the system serial number is available, it stores it in both the Serial
Number attribute of the CI and in the Serial Number table.

• The Serial Number table is a many-to-one relationship, linking back to
the Operational Technology (OT) CI. This table has a Type field for
specifying the type of the serial number.

• For Operational Technology (OT), use the string value system for the
serial number type to ensure proper reconciliation across various
sources.

Network adapter
Use the Network Adapter [cmdb_ci_network_adapter] class to store
network adapters.

1. Set the MAC Address attribute to be the MAC address value.

• Format the string with colon separators between octets and
lower case hexadecimal characters with padded zeros.

• For example, 'f8:f2:1e:00:d4:66'.

2. Set the Name attribute in the Network Adapter class to be the same
as the MAC Address.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

116

Zurich ServiceNow AI Platform Capabilities

---
*Page 117*

3. In the CI Relationship [cmdb_rel_ci] table, create an Owned By:Owns
relationship to the associated Hardware CI.

4. Using the CI with a reference to the associated Hardware CI, specify
a reference from the Network Adapter [cmdb_ci_network_adapter]
table.

IP Address
Use the IP Address [cmdb_ci_ip_address] class to store IP addresses.

1. Store an IP address value in the IP Address attribute, and in the Name
attribute to avoid empty Name attributes.

• Store an IPv4 IP address value using the format
'NNN.NNN.NNN.NNN', with decimal-based octets and period
separators. Non-conforming values should be considered invalid
and cleansed to null values.

• Store an IPv6 IP address value using lower case hexadecimal with
colon separators. Non-confirming values should be considered
invalid and cleansed to null values.

2. Set the Netmask attribute to the IP address.

3. Set the Name attribute in the Network Adapter class to be the same
as the MAC Address.

4. In the CI Relationship [cmdb_rel_ci] table, create an Owned
By::Owns relationship to the associated Hardware CI.

5. In the CI Relationship [cmdb_rel_ci] table, create an Owned
By::Owns relationship to the associated Hardware CI.

6. For the IP address, specify a reference to the Network Adapter
[cmdb_ci_network_adapter] table, using the Configuration Item with
a reference to the associated Hardware CI.

7. To ensure that base system identification rules work properly, also
store the IP address in the associated Network Adapter class.

Network adapter and IP address
Use the IP Address [cmdb_ci_ip_address] class to store IP addresses.

1. Store the MAC address of the network adapter installed on a server,
in the Network Adapter [cmdb_ci_network_adapter] class.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

117

Zurich ServiceNow AI Platform Capabilities

---
*Page 118*

2. Store the IP address in the IP Address [cmdb_ci_ip_address] class.

Note:   Do not store the MAC address or the IP address in the
Operational Technology (OT) [cmdb_ci_ot] table. The default
Operational Technology (OT) form is configured to display the
IP address from the Network Adapter table.

Backup Storage Information
Use the Backup Storage Information
[cmdb_backup_storage_information] class to create backup records
that identify the device in internal or external backup services. The
Backup Storage Information table includes the following attributes:

Attributes
Description

Backup Configuration Status

Indicates whether the CI has been
configured in the backup service
or appliance with relevant policies.

Discovery Source
Discovery source of the backup
record.

Backup Service

Reference to the Common Service
Data Model Technical Service
hosting external and internal
backup system, services, or
appliances

Managed By
Email ID of the user responsible for
managing the backup.

Latest Successful Execution

Date and time of the most recent
data backup that was successfully
executed for a device.

Latest Execution Attempt

Date and time of the most recent
data backup that was attempted
for a device.

Next Execution Attempt

Date and time when the next data
backup is going to be attempted
for a device.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

118

Zurich ServiceNow AI Platform Capabilities

---
*Page 119*

Attributes
Description

Latest Execution Log
Detailed log entries for all device
data backup that were executed.

Backup Source ID

Backup service record for a
device, which identifies the
device in external or internal
backup services. Backup source
id can include host_id, vcenter_id,
instance_id, db_id.

Job Definition ID
Identification number assigned to
a data backup job.

Recovery Point Objective

Amount of time that can
elapse between backups and the
amount of data lost.

Execution Mode

Indicates whether the backup is
configured to run automatically on
a periodic basis, or if it is manually
executed on an as-needed basis.

Backup Source

Details of the backed up CI. This
table holds the backup status
details for the referenced CI.

Job Definition Name
Name assigned to a data backup
job.

Managed By Group
Primary support group responsible
for managing the backup.

Domain
ID of the domain to which the
instance belongs.

Use the Backup Job Execution History
[cmdb_backup_job_execution_history] class to create a history of
records for all backup executions. The Backup Job Execution History table
includes the following attributes:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

119

Zurich ServiceNow AI Platform Capabilities

---
*Page 120*

Attributes
Description

Backup Job Information
Details of the backup job you
created.

Backup End Time
The time when the backup job
ended.

Completion Status
The current completion status of
the backup job.

Mark for Archival
Select to archive backup job
execution history after 90 days.

For more information, see Operational Technology Backup Management
data model.

Key reference structures

Use the following key references are important guidelines when creating
Operational Technology (OT) records:

• When creating computer or server records for OT Devices that are
running on computers or servers, see the following topics:

• Computer [cmdb_ci_computer] class

• Server [cmdb_ci_server] class

• The Manufacturer and Model ID attributes are reference attributes
to the Company [core_company] and Product Model [cmdb_model]
tables respectively.

• The Owned By, Assigned To, Managed By, and Supported By attributes
are reference attributes to the User [sys_user] table. The Change Group
and Support Group attributes are reference attributes to the Group
[sys_user_group] table.

Identification rules

The ServiceNow AI Platform contains a predefined identification rule for
the Operational Technology (OT) classes. That identification rule has the
following key identifier entries, listed in priority order:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

120

Zurich ServiceNow AI Platform Capabilities

---
*Page 121*

1. Identifier entry that uses the identification specified in Serial Number
[cmdb_serial_number] as the lookup table. The Serial Number table is
a many-to-one reference from the serial number back to the server
CI.

Optional conditions to filter the records during identification and
reconciliation.

Note:   For lookup identification rules, you must complete the
mandatory conditions under Advanced Configuration.

2. Identifier entry that is specified in the Serial Number attribute in the CI.

3. Identifier entry that is specified in the Mac Address attribute in the
Network Adapter table.

Optional conditions to filter the records during identification and
reconciliation.

4. Identifier entry for the Name attribute.

• If Serial Number and MAC Address are not available, then the
Name (which is usually the system reported hostname) attribute is
used.

• If both Serial Number and Name are not available, and only
MAC Address is available, use MAC Address as the name of the
CI. Using the MAC Address as the name of the CI ensures that
you don't create an empty CI.

5. Identifier entry that uses a product instance identifier (PID) on the CI.

Note:   To learn more, see CMDB Identification and Reconciliation
(IRE).

Reclassifying IT devices on your OT network
For Xanadu and later versions, you can create a Network Adapter
identifier on the OT identification rule to reclassify IT devices on your OT
network. Creating a Network Adapter identifier on the OT identification
rule overwrites the Hardware identification rule's Network Adapter
identifier entry. To do this, complete the following actions:

1. Navigate to All > Configuration > CI Class Manager.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

121

Zurich ServiceNow AI Platform Capabilities

---
*Page 122*

2. Under Hardware in the CI Classes menu, select the Operational
Technology (OT) class.

3. Under the Class Info menu, select Identification Rule.

4. Under Identifier Entries, select Add.

5. In the New Identifier Entry pop-up dialog box, choose Use attributes
from another table (Lookup table) and select Next.

6. In the Create Identifier Entry dialog box, complete the following
steps:

a. Select Hardware table from Search On Table dropdown list.

b. Enter 400 in the Priority field.

c. Select Network Adapter from the LookUP Table from dropdown
list.

d. Select Mac Address from the Criterion Attributes dropdown list.

e. Select Save.

Note:   IT devices on an OT network are not reclassified
automatically. If you want to automatically reclassify IT devices
to OT, you must upgrade to Xanadu or the latest ServiceNow AI
Platform version with the latest CMDB CI Class Models.

Related entries

Related entries for OT identification rules allow OT Service Graph
Connectors to create related records, such as OT Device records,
backup records, and so on. The Operational Technology [cmdb_ci_ot]
class rule contains the following related entries:

• Backup Storage Information [cmdb_backup_storage_information]

• External system metadata [cmdb_key_value_v2]

• OT Device [cmdb_ot_entity]

• Firmware Installation [cmdb_firmware_install]

• Key Value [cmdb_key_value]

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

122

Zurich ServiceNow AI Platform Capabilities

---
*Page 123*

• Software Instance [cmdb_software_instance]

The OT Control Module [cmdb_ci_ot_control_module] rule contains the
following related entries:

• Backup Storage Information [cmdb_backup_storage_information]

• OT Device [cmdb_ot_entity]

• Firmware Installation [cmdb_firmware_install]

• Key Value [cmdb_key_value]

• Software Instance [cmdb_software_instance]

OT Device Network Connection data model

The OT Device Network Connection data model leverages the OT
Device Network Connection [sn_ot_device_network_connection] table
to identify source CIs and destination CIs. Identifying this data allows you
to identify the device-to-device connections in your OT environment.

Note:   The OT Device Network Connection table is available with the
Industrial Core plugin. For more information about the Industrial Core
plugin, see Industrial Core plugin.

The OT Device Network Connection [sn_ot_device_network_connection]
table references the CI relationships [cmdb_rel_ci] table with the
Connects to :: Connected by relationship type. The device-to-device
connections in CI relationships and the metadata of how the source and
destination communicate are stored.

Note:   This data is populated with the available OT integrations and
cannot be manually created.

The OT Device Network Connection table is populated using data from
the following CMDB tables.

Allocated IP Address [cmdb_ci_allocated_ip_address]
The following attributes in the Allocated IP Address
[cmdb_ci_allocated_ip_address] table are populated by collected data:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

123

Zurich ServiceNow AI Platform Capabilities

---
*Page 124*

Attribute label
Attribute name

IP Address
ip_address

Managed Network
managed_network

Is Broadcast
is_broadcast

Is Conflict
is_conflict

Is DHCP
is_dhcp

Is DNS
is_dns

Is Managed
is_managed

Is Reserved
is_reserved

Name
name

IP Network Subnet [cmdb_ci_ip_network_subnet]
The following attributes in the IP Network Subnet
[cmdb_ci_ip_network_subnet] table are populated by collected data:

Attribute label
Attribute name

Name
name

Parent Pool
parent_pool

CIDR
cidr

Managed Network
managed_network

Managed Network [cmdb_ci_managed_network]
The following attribute in the Managed Network
[cmdb_ci_managed_network] table is populated by collected data:

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

124

Zurich ServiceNow AI Platform Capabilities

---
*Page 125*

Attribute label
Attribute name

Contained by CI
contained_by_ci

The OT Device Network Connection table also uses the following
Identification Reconciliation Engine (IRE) rule. The IRE rule on the OT
Device Network Connection table can help Service Graph Connectors
align with a standardized way to create connection records.

• Identifier name: OT Device Network Connection

• Applies to: sn_ot_device_network_connection

• Independent: true

• Identifier entries:

• Source IP Address

• Destination IP Address

• Destination Port

• Source Managed Network

• Destination Managed Network

Deprecated classes

CMDB CI Class Models: Release 1.30 soft deprecated (not removed, but
marked as follows) with the release of the OT class model:

Class
Description

Human Machine Interface
[cmdb_ci_hmi]

OT Devices moved to cmdb_ci_ot
to support broader use cases. Use
cmdb_ci_ot_hmi instead.

Manufacturing Device
[cmdb_ci_manufacturing]

OT Devices moved to cmdb_ci_ot
to support broader use cases.
Use cmdb_ci_ot as the base class
or other generic child classes as
appropriate.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

125

Zurich ServiceNow AI Platform Capabilities

---
*Page 126*

Class
Description

Programmable Logic Controller
[cmdb_ci_plc]

OT Devices moved to cmdb_ci_ot
to support broader use cases. Use
cmdb_ci_ot_plc instead.

A script has been provided to migrate records from these classes to the
new class tables. The admin role is required to perform the following tasks:

1. Navigate to System Definition > Script Includes

2. Find the record named OTDevicesMigrationUtils.

3. Navigate to Definition > Script Includes > .

4. In the background window, copy and paste the provided script.

5. Select the appropriate scope and run the script.

Troubleshooting

The following are some troubleshooting tips:

Problem
Suggested resolution

Unable to see OT Device menu
items

Ensure that the logged in user has
been assigned the appropriate
roles. To learn more, see the
preceding Roles section.

Error creating or updating an OT
Device record

Allow only one OT Device record
(cmdb_ot_entity) per CI.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

The CMDB CI Class Models adds class models that extend the CMDB
class hierarchy, including:

• Class descriptions

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

126

Zurich ServiceNow AI Platform Capabilities

---
*Page 127*

• Identification rules

• Identifier entries

• Dependent relationships, if applicable.

Related concepts

• CMDB schema model

## Red Hat Virtualization (RHV) extension classes

The CMDB CI Class Models store app adds or updates classes for Red Hat
Virtualization (RHV) OLVM or RHV.

The CMDB CI Class Models app adds class models that extend the
CMDB class hierarchy, including class descriptions, identification rules,
identifier entries, and, if applicable, dependent relationships. You can use
the added classes just like any other CMDB class. Applications such as
Discovery and Service Mapping Patterns can use the class extensions to
populate CIs and discover technologies and software.

Starting with version 1.28.0, Discovery and Service Mapping Patterns
supports both OLVM and RHV discovery. For more information, see
Oracle Linux Virtualization Manager and Red Hat Virtualization discovery.
Note that the RHV patterns, tables, and related items have been
renamed to oVirt. For the full list of name changes, see the Zurich release
ITOM Visibility release notes.

See the full release notes for all CMDB CI Class Models.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Red Hat Virtualization (RHV)

Red Hat Virtualization (RHV) is a virtualization product that is based
on the Kernel-based Virtual Machine (KVM) hypervisor. RHV uses the
SPICE protocol and Virtual Desktop Server Manager (VDSM) with a RHEL-

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

127

Zurich ServiceNow AI Platform Capabilities

---
*Page 128*

based centralized management server. The RHV solution is based on two
primary software components: Red Hat Virtualization Manager (RHV-M)
and Red Hat Virtualization Hypervisors or hosts: Red Hat Enterprise Linux or
RHV Host (RHV-H).

Note:   The Discovery application uses patterns to find RHV
components. Discovering some of these resources requires updating
the Discovery and Service Mapping Patterns application from
the ServiceNow Store. For more information, see Oracle Linux
Virtualization Manager and Red Hat Virtualization discovery

RHV classes integrated with the CMDB class hierarchy

Classes

This section lists the classes that the CMDB CI Class Models store app
adds or updates. See the class columns table for further details about the
columns added for each class.

CMDB CI Class Models: Release 1.8.0 adds the following classes for RHV.
For the list of classes in the base system, including classes that this app
might extend, see CMDB tables descriptions.

Class
Extends
Description

RHV LDC
Logical Datacenter
RHV logical
datacenter.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

128

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 128, 879x462px]*

```
...........                             .
..    .          .::....:::.       .. ..                 .
...                                 .
.                                  .
..........        ...........                   .. .      .
..::....:...       .:.....:.:.                             .
..        .
.                       ....       .
........:                              .
.........         ...           ..:... .
.....                            ........         ...   .
.                     ...                       ....  .
.             .                          .
.:::::...         .::.....:          ....    . .
........          .........                    .
```

---
*Page 129*

Class
Extends
Description

[cmdb_ci_rhv_ldc]
[cmdb_ci_logical_dat
acenter]

RHV Datacenter

[cmdb_ci_rhv_datace
nter]

This class is deleted.

N/A
N/A

CMDB CI Class Models: Release 1.6.0 adds the following classes for RHV.

Class
Extends
Description

RHV Server

[cmdb_ci_rhv_server]

Virtualization Server

[cmdb_ci_virtualizatio
n_server]

The RHV virtualization
host.

RHV Object

[cmdb_ci_rhv_object]

Virtual Machine
Object

[cmdb_ci_vm_object]

A base class for other
classes to derive from.

RHV Manager

[cmdb_ci_rhv_manag
er]

Application

[cmdb_ci_appl]

RHV Manager
instance.

RHV Cluster

[cmdb_ci_rhv_cluster]

RHV Object

[cmdb_ci_rhv_object]
RHV cluster.

RHV Datacenter

RHV Object

[cmdb_ci_rhv_object]

RHV datacenter.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

129

Zurich ServiceNow AI Platform Capabilities

---
*Page 130*

Class
Extends
Description

[cmdb_ci_rhv_datace
nter]

Note:   This class
is being deleted
in the CMDB CI
Class Models 1.6.0
release.

RHV Virtual Machine
Instance

[cmdb_ci_rhv_vm_inst
ance]

Virtual Machine
Instance

[cmdb_ci_vm_instanc
e]

RHV virtual machine
instance.

Class columns

CMDB CI Class Models: Release 1.6.0 adds the following columns to the
respective classes.

RHV Server [cmdb_ci_rhv_server] class

Added columns
Description

url
URL used to access the object.

RHV Object [cmdb_ci_rhv_object] class

Added columns
Description

href_id
Href ID.

manager_id
Manager ID.

url
URL to access the object (used in
child classes).

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

130

Zurich ServiceNow AI Platform Capabilities

---
*Page 131*

RHV Manager [cmdb_ci_rhv_manager] class

Added columns
Description

url
URL of the manager.

product_name
Product name.

RHV Cluster [cmdb_ci_rhv_cluster] class

Added columns
Description

cpu_type
CPU type.

cpu_architecture
CPU architecture.

ksm

Enabled state of kernel same-
page merging (KSM) memory
policy.

fencing_policy
Fencing policy.

memory_overcommitment
Amount of over-commitment
memory allowed on the cluster.

transparent_huge_pages
Transparent huge memory pages
policy.

ballooning
Memory ballooning for guests.

compatibility_version
Compatibility version.

RHV Virtual Machine Instance [cmdb_ci_rhv_vm_instance] class

Added columns
Description

mgmt_url
Management URL.

cpu_architecture
CPU architecture.

delete_protected
Delete protected (true/false).

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

131

Zurich ServiceNow AI Platform Capabilities

---
*Page 132*

Added columns
Description

ha_priority
HA priority.

high_availability
High availability (true/false).

memory_policy_guaranteed
Amount of memory guaranteed
(MB).

memory_policy_max_mb
Maximum memory in the dynamic
memory allocation policy.

multi_queues
Multi queues.

placement_policy
Placement policy.

cpu_sockets
Number of CPU sockets.

stateless
Stateless (true/false).

storage_error_resume_behaviour

Behavior of a virtual machine that
is paused due to storage I/O
error. For examples, AUTO_RESUME,
LEAVE_PAUSED, and KILL.

start_time
Start time.

stop_time
Stop time.

threads
Number of threads.

time_zone
Time zone.

usb
USB enabled state.

run_once
Run once.

type
RHV type.

The following class was deleted in the CMDB CI Class Models 1.6.0
release.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

132

Zurich ServiceNow AI Platform Capabilities

---
*Page 133*

RHV Datacenter [cmdb_ci_rhv_datacenter] class

Added columns
Description

quota_mode
Quota mode policy.

Related concepts

• CMDB schema model

Related topics

• Oracle Linux Virtualization Manager and Red Hat Virtualization
discovery

## Transport Layer Security (TLS) extension classes

The CMDB CI Class Models store app adds or updates a class for TLS
certificates.

The CMDB CI Class Models app adds class models that extend the
CMDB class hierarchy, including class descriptions, identification rules,
identifier entries, and, if applicable, dependent relationships. You can use
the added classes just like any other CMDB class. Applications such as
Discovery and Service Mapping Patterns can use the class extensions to
populate CIs and discover technologies and software.

See the full release notes for all CMDB CI Class Models.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Transport Layer Security (TLS)

TLS is a cryptographic protocol designed to provide communications
security over a computer network. The TLS protocol provides privacy and
data integrity between communicating computer applications. Once

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

133

Zurich ServiceNow AI Platform Capabilities

---
*Page 134*

the client and the server have agreed to use TLS, they negotiate a
stateful connection by using a handshaking procedure. The server usually
provides identification in the form of a digital certificate. The certificate
contains the server name, the trusted certificate authority (CA) that
vouches for the authenticity of the certificate, and the server's public
encryption key. The client confirms the validity of the certificate before
proceeding. When the handshake is completed, a secured connection is
established.

TLS certificate classes integrated with the CMDB class hierarchy

Scoped apps certification class

The scoped apps certification class supports TLS certificates. With this
class you can proactively manage certificates by keeping stakeholders
informed about any impending expiries. Use this extension class to ensure
that certificates are monitored and renewed before they expire, to
prevent severe outage of production systems.

Classes

This section lists the classes that the CMDB CI Class Models store app
adds or updates. See the class columns table for further details about the
columns added for each class.

The CMDB CI Class Models: Release 1.4.0 updates the following class:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

134

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 134, 766x366px]*

```

.                          .:.
.........     .
..::::.::.

.........
..::..::::.                       ....
..
...  ..
.                  ..               .


.   .. .             ..  .            .

```

---
*Page 135*

Class
Extends
Description

Unique Certificate
[cmdb_ci_certificate]

Configuration Item
[cmdb_ci]

A public key
certificate in X.509
standard format.

The CMDB CI Class Models store app changes the Unique Certificate
[cmdb_ci_certificate] class as follows:

• The assigned_to attribute now depends on the assignment_group
attribute so that users in the assigned_to attribute are filtered based
on the specified assignment_group.

• The Certificate Inventory and Management store app populates the
Unique Certificate [cmdb_ci_certificate] table. The list view for that
class does not have a New button and you can no longer add
new records to the table. This is because there are certain fields
that are extracted from binary encoded parameters in the certificate
which users may not be able to provide. Also, certificates have to be
discovered rather uploaded.

• You can no longer add or delete attachments in the Certificate file
attribute.

The CMDB CI Class Models: Release 1.3.0 adds the following classes. For
the list of classes in the base system, including classes that this app might
extend, see CMDB tables descriptions.

Class
Extends
Description

Unique Certificate
[cmdb_ci_certificate]

Configuration Item
[cmdb_ci]
N/A

Certificate Domain
[certificate_domain]
N/A
Fully qualified domain
name.

Class columns

CMDB CI Class Models: Release 1.4.0 adds the following columns to the
respective classes.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

135

Zurich ServiceNow AI Platform Capabilities

---
*Page 136*

Unique Certificate [cmdb_ci_certificate] class

Added columns
Description

Certificate file
Certificate in an encoded form.

Fingerprint
Hash value of the certificate.

Fingerprint algorithm
Algorithm used to hash the
certificate.

Is certificate authority
Indicates whether a certificate is a
Certificate Authority (CA) or not.

Is selfsigned
Indicates whether the certificate is
self-signed or not.

Issuer

Entity that has signed and issued
the certificate.

Reference: Unique Certificate
[cmdb_ci_certificate]

Issuer common name
Common name of the issuer.

Issuer distinguished name
Distinguished name of the issuer.

Key size

Size of the key used by the signing
algorithm.
Choices:

• Create priority 1 tasks

• Create priority 3 tasks

• Do not create renewal tasks

Renewal tracking

Indicates whether to create any
priority 1 or priority 3 tasks for the
expiring certificates.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

136

Zurich ServiceNow AI Platform Capabilities

---
*Page 137*

Added columns
Description

Root issuer

Root entity that has signed and
issued the intermediate certificate.
Choices:

• External

• Internal

Reference: Unique Certificate
[cmdb_ci_certificate]

Service type

Indicates whether the certificate
is used for external or internal
services.

Signature algorithm

The cryptographic algorithm used
to sign the certificate.
Choices:

• Issued

• Installed

• Revoked

• Retired

State
Lifecycle states of the certificate.

Subject alternative name

List of fully qualified domain names
secured by the certificate.

Reference: Certificate Domain
[certificate_domain]

Subject common name
Identifies the hostname/domain
associated with the certificate.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

137

Zurich ServiceNow AI Platform Capabilities

---
*Page 138*

Added columns
Description

Subject country
Subject's two letter country code.

Subject distinguished name
Identifying information of the
subject.

Subject email
Subject's email.

Subject locality
Subject's locality.

Subject organization
Subject's organization.

Subject organizational unit
Subject's organizational unit.

Subject state
Subject's state.

Valid from
Validity start period of the
certificate.

Valid to
Validity end period of the
certificate.

Version
X.509 version of the certificate.

Certificate Domain [certificate_domain] class

Added columns
Description

Domain
Fully qualified domain name.

CMDB CI Class Models: Release 1.3.0 adds no columns.

Related concepts

• CMDB schema model

## VMware NSX load balancer extension classes

The CMDB CI Class Models store app adds or updates classes for VMware
NSX load balancers.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

138

Zurich ServiceNow AI Platform Capabilities

---
*Page 139*

The CMDB CI Class Models app adds class models that extend the
CMDB class hierarchy, including class descriptions, identification rules,
identifier entries, and, if applicable, dependent relationships. You can use
the added classes just like any other CMDB class. Applications such as
Discovery and Service Mapping Patterns can use the class extensions to
populate CIs and discover technologies and software.

See the full release notes for all CMDB CI Class Models.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

VMware NSX load balancer

NSX is a network virtualization solution offered by VMware. Among the
virtual resources included in the NSX solution are virtual LANs (VLANs),
virtual load balancers, virtual routers, switches, and firewalls.

Discovery uses the VMware NSX Advanced load balancer discovery
pattern to find VMware NSX load balancers and their components:
Listeners, pools, pool members, and health services.

VMware NSX load balancer classes integrated with the CMDB class
hierarchy

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

139

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 139, 1063x395px]*

```

..:::::..                       ..
.

.
.. .:....          ......             .....           ...



.........

```

---
*Page 140*

Classes

This section lists the classes that the CMDB CI Class Models store app
adds or updates. See the class columns table for further details about the
columns added for each class.

CMDB CI Class Models: Release 1.10.0 adds the following classes for
the VMware NSX load balancer. For the list of classes in the base
system, including classes that this app might extend, see CMDB tables
descriptions.

Class
Extends
Description

NSX Load Balancer
[cmdb_ci_nsx_lb]

Load Balancer
[cmdb_ci_lb]

The table containing
the NSX Load Balancer
resources.

Class columns

The VMware NSX Advanced load balancer discovery pattern introduces
one new table with one identification rule and entry. The table uses only
the columns inherited from its parent.

Related concepts

• CMDB schema model

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

140

Zurich ServiceNow AI Platform Capabilities

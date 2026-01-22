# zurich_servicenow_ai_platform_capabilities_cmdb_reference_2026-01-16-12-51-04

*Source: zurich_servicenow_ai_platform_capabilities_cmdb_reference_2026-01-16-12-51-04.pdf*

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

## CMDB reference

The topics in this section provide various reference details for CMDB.

• Domain separation and Configuration Management Database (CMDB)

• CMDB APIs (CMDB SDK)

• Quick start tests for Configuration Management Database (CMDB)

• CMDB glossary

## Domain separation and Configuration Management
## Database (CMDB)

Domain separation is supported in the CMDB. Domain separation
enables you to separate data, processes, and administrative tasks into
logical groupings called domains. You can control several aspects of this
separation, including which users can see and access data.

Support level: Standard

• Includes all aspects of Basic level support.

• Application properties are domain-aware as needed.

• Business logic: The service provider (SP) creates or modifies processes
per customer. The use cases reflect proper use of the application by
multiple SP customers in a single instance.

• The instance owner must configure the minimum viable product (MVP)
business logic and data parameters per tenant as expected for the
specific application.

Sample use case: An Admin must be able to make comments required
when a record closes for one tenant, but not for another.

For more information on support levels, see Application support for
domain separation.

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

Overview

The following topics provide details about domain separation in
Configuration Management (CMDB) modules:

• Domain separation in CMDB Health

• Domain separation and CMDB Query Builder

• Domain separation

• Domain separation

• CMDB APIs (CMDB SDK)

Related concepts

• Domain separation and Configuration Management Database (CMDB)

## List of classes added by the CMDB CI Class Models app

Alphabetical list of classes that are added by the CMDB CI Class Models
ServiceNow® Store app. The app adds class models (name, label, and
a description of the type of information stored in the table) to the base-
system CMDB. The app can also update the label (display name) of an
existing base class.

Classes added by the CMDB CI Class Models app

For more information, see CMDB CI Class Models.

Table name
Label (Display
name)
Table description

cmdb_ci_anten
na
Antenna

An Antenna is a device
that receives or transmits
electromagnetic signals, typically
used to facilitate wireless
communication by converting
electrical currents into radio waves
or vice versa.

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

Table name
Label (Display
name)
Table description

cmdb_ci_anten
na_control
Antenna Control

An Antenna Control is a device
that manages the orientation
and positioning of antennas in
wireless systems. Controls the
antenna's direction, tilt, and
beamwidth to optimize signal
coverage, enhance network
performance, and ensure efficient
communication

cmdb_ci_anten
na_structure

Antenna
Structure

Physical structure that supports the
antennas in a radio network.¬†
Raises them to a suitable height
for optimal signal coverage
and minimizing interference with
nearby structures.

cmdb_ci_anypo
int_api_gateway

Anypoint API
Gateway

An API Gateway service provided
by MuleSoft for hosting and
managing APIs.

cmdb_ci_api
API

A representation of the primary
API object that has many API
components.

cmdb_ci_api_b
ackend
API Backend

The backend component of an
API definition that handles API
requests and provides a response.

cmdb_ci_api_c
omponent
API Component
A reusable resource representing a
specific aspect of an API.

cmdb_ci_api_c
onsumer_subscri
ption

API Consumer
Subscription

To access one or more API
product bundles, a developer
can register for an API consumer
subscription on a developer portal.
The subscription registers with one
or more bundles and provides a

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

Table name
Label (Display
name)
Table description

key for access to the APIs in the
bundles.

cmdb_ci_api_fro
ntend
API Frontend

The frontend component of an API
definition representing the entry
point of an API request.

cmdb_ci_api_g
ateway
API Gateway

A service that manages APIs to
facilitate the interactions between
applications, data, and clients.

cmdb_ci_api_pr
oduct_bundle

API Product
Bundle

API Product Bundles are a
construct within API gateways and
developer portals to represent a
collection of one or more APIs for
consumption by developers and
applications. Some platforms use
the term for an API product alone.

cmdb_ci_apige
e_api_gateway

Apigee API
Gateway

An API Gateway service provided
by Google Cloud platform for
hosting and managing APIs.

cmdb_ci_appl_
ai_application

AI & Model
Application

AI software applications that
can run on various platforms
such as Linux, Windows, Docker
containers, or Kubernetes (K8)
clusters. These platforms support
diverse AI workloads, including
machine learning models, data
analytics, and intelligent services or
AI enabled applications.

cmdb_ci_appl_i
bm_cics_progra
m

IBM CICS
Program

IBM CICS Program is a family of
mixed-language application that
provide transaction management
and connectivity for applications
on IBM mainframe systems under
z/OS and z/VSE.

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

Table name
Label (Display
name)
Table description

cmdb_ci_appl_i
bm_cics_region
IBM CICS Region

CICS Region is a named collection
of resources that are controlled by
CICS as a unit

cmdb_ci_appl_i
bm_cics_transac
tion

IBM CICS
Transaction

A CICS transaction consists of an
item of processing that can be
run by one or more application
programs

cmdb_ci_appl_i
bm_cicsplex
IBM CICSplex

A CICSplex is any grouping of
CICS systems to manage and
manipulate as a single entity

cmdb_ci_appl_i
bm_mq_channe
l

IBM MQ
Channel

In IBM MQ, a channel is a
unidirectional communication link
that allows two queue managers
to connect over a network and
transmit messages between each
other.

cmdb_ci_appl_i
bm_wmq

IBM MQ
Manager
IBM Websphere MQ software.

cmdb_ci_appl_i
bm_wmq_queu
e

IBM MQ Queue
Inner module of IBM WebSphere
MQ software.

cmdb_ci_appl_i
ms_program
IMS Program

A program that runs within IMS.
An IMS Program name is specified
for each IMS Transaction that is
defined.

cmdb_ci_appl_i
ms_region

IMS Subsystem
Region

The IMS region provides the
central point of control for an IMS
subsystem. The IMS region provides
the interface to z/OS for the
operation of the IMS subsystem.

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

Table name
Label (Display
name)
Table description

cmdb_ci_appl_i
ms_transaction
IMS Transaction

An IBM IMS transaction is
a message that is sent to
an application program. When
defining a transaction to IMS,
several characteristics can be
identified such as: transaction
codes, output limits, scheduling
rules, and exceptions to those
rules.

cmdb_ci_appl_
mq_queue_alias

IBM MQ Queue
Alias

An alias queue is an IBM MQ
object that you can use to access
another queue or a topic

cmdb_ci_appl_
mq_queue_loca
l

IBM MQ Queue
Local

A local queue is a definition of
both a queue and the set of
messages that are associated with
the queue. The queue manager
that hosts the queue receives
messages in its local queues.

cmdb_ci_appl_
mq_queue_mod
el

IBM MQ Queue
Model

A model queue is a template for
queues that you want the queue
manager to create dynamically as
required.

cmdb_ci_appl_
mq_queue_rem
ote

IBM MQ Queue
Remote

Remote queue definitions are
definitions on the local queue
manager of queues that belong
to another queue manager. To
send a message to a queue on
a remote queue manager, the
sender queue manager must have
a remote definition of the target
queue.

cmdb_ci_aws_a
pi_gateway

AWS API
Gateway

An API Gateway service provided
by Amazon Web Services (AWS) for
hosting and managing APIs.

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

Table name
Label (Display
name)
Table description

cmdb_ci_azure_
api_mgmt

Azure API
Management

An API Management service
provided by Microsoft Azure for
hosting and managing APIs.

cmdb_ci_base_s
tation_controller

Base Station
Controller

A Base Station Controller (BSC)
is a central unit in cellular
network. It manages multiple
base stations to handle call
routing, resource allocation, and
mobility management for efficient
communication and seamless
handover between stations.

cmdb_ci_baseb
and_unit
Baseband Unit

A Baseband Unit (BBU) is a wireless
communication processing unit
that converts digital data to
analog signals for transmission,
performing modulation, coding,
and decoding for efficient
data transfer and reliable
communication in the network.

cmdb_ci_batter
y_distribution_fus
e_bay

Battery
Distribution Fuse
Bay

A Battery Distribution Fuse Bay is
a compartment that distributes
power from batteries to circuits.
Equipped with fuses or breakers
for overcurrent and short-circuit
protection, ensuring safe and
controlled power distribution in
electrical systems.

cmdb_ci_batter
y_distribution_fus
e_panel

Battery
Distribution Fuse
Panel

A battery distribution fuse panel
distributes power within an
equipment holder (rack/cabinet)
and connects to a Battery
Distribution Bay.

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

Table name
Label (Display
name)
Table description

cmdb_ci_boomi
_api_gateway

Boomi API
Gateway

An API Gateway service provided
by Boomi for hosting and
managing APIs.

cmdb_ci_bosh_
component

BOSH
Component

Base class for storing all BOSH
Components.

cmdb_ci_bosh_
deployment

BOSH
Deployment

This class stores discovered
BOSH Deployments. The collection
of instructions and actions to
provision a new system.

cmdb_ci_cable
Cable

A tangible physical media that
encompasses one or more strands
(optical or electrical). Cables
are procured as asset and laid
between sites to consume it.

cmdb_ci_call_c
ontent_delivery_
unit

Call Content
Delivery Unit

A Call Content Delivery Unit is a
system or unit that is involved in the
delivery or optimization of content
related to voice communications
or calls.

cmdb_ci_call_se
rver
Call Server

A Call Server is a centralized
communication system that
manages telephony calls, handling
call routing, setup, termination,
and processing. It provides call
control and features for efficient
and reliable communication within
a network.

cmdb_ci_certific
ate

Unique
Certificate

A public key certificate in a X.509
standard format.

cmdb_ci_chann
el_bank
Channel Bank

A Channel Bank device converts
multiple analog voice or data
channels into digital format for
transmission over a digital network.

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

Table name
Label (Display
name)
Table description

It enables efficient utilization of
bandwidth and supports voice
and data communication in a
compact and scalable solution.

cmdb_ci_cloud_
system_manage
ment_agent

Cloud System
Management
Agent

A cloud system management
agent is a software component
installed on a cloud-managed
server to facilitate remote
management, automation, and
monitoring.The agents act as
intermediaries between the cloud
provider and the managed
system, enabling seamless
communication.

cmdb_ci_comm
_hardware

Communication
Hardware

Communication device
information.

cmdb_ci_comm
unication_distrib
ution_panel

Communication
Distribution
Panel

A Communication Distribution
Panel is a central hub
that organizes and distributes
communication connections, like
phone lines and data cables
within a building. This simplifies
management and enhances
communication infrastructure.

cmdb_ci_conne
ction_medium

Connection
Medium

Any connection medium used to
connect two end points where
A/Z termination can be site,
equipment, or interface.

cmdb_ci_conne
ction_service_ins
tance

Connection
Service Instance

A Connection Service Instance
represents a network connection
between two endpoints, crucial
for end-to-end service delivery.
It differs from Network Service
Instances by representing the
provisioned interconnection.

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

Table name
Label (Display
name)
Table description

cmdb_ci_contai
ner_cabinet
Cabinet

A Cabinet is a physical
enclosure that houses and
secures network equipment. It
provides organization, cooling,
and connectivity for efficient
telecom infrastructure operation.

cmdb_ci_contai
ner_multi_rack
Multi Rack

A Multi-rack is a modular rack
system for housing and organizing
network equipment. It offers
flexibility, scalability, and efficient
cable management. It enhances
space utilization and facilitates
easy equipment installation and
maintenance.

cmdb_ci_contai
ner_rack
Equipment Rack

A Rack is a structured framework
for housing network equipment.
It provides organization, security,
and efficient cable management.
It optimizes space utilization and
simplifies equipment installation
and maintenance.

cmdb_ci_contai
ner_shelf
Container Shelf

A Shelf is a mountable platform
for holding network equipment.
It provides space-saving storage,
organization, and easy access.
It facilitates cable management
and supports efficient equipment
installation and maintenance.

cmdb_ci_contai
ner_slot
Slot

In the context of technology and
hardware, a slot refers to modular
space for inserting network
modules. It enables flexible
configuration and expansion
of telecom equipment. It

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

Table name
Label (Display
name)
Table description

also streamlines installation and
maintenance processes.

cmdb_ci_contai
ner_subslot
Subslot

A Subslot is a subdivision within
a slot for additional module
insertion. It allows further expansion
and customization of telecom
equipment and enhances flexibility
and scalability in network
configuration.

cmdb_ci_conve
rged_infra

Converged
Infrastructure

Devices that serve both a
computing and networking
function.

cmdb_ci_data_s
ervice_instance

Data Service
Instance

A Data Service Instance extends a
Service Instance and represents a
logical instance of a data service
that can persist structured and
unstructured data, process data
(pipeline) or retrieve data (data,
search, query, etc.).

cmdb_ci_db_db
2_sharing_group

DB2 Sharing
Group

A collection of one or more DB2
subsystems that share DB2 data

cmdb_ci_db_db
2_stored_proce
dure

DB2 Stored
Procedure

A DB2 stored procedure is a
compiled program that can run
SQL statements and is stored on
a local or remote DB2 Universal
Database Server.

cmdb_ci_db_im
s_area
IMS Area

Data sets, called areas, with each
area containing the entire data
structure.

cmdb_ci_db_im
s_database
IMS Database

An IMS Database running within
an IMS Subsystem (database
instance).

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

Table name
Label (Display
name)
Table description

cmdb_ci_db_im
s_plex
IMS Plex

An IMSplex is made up of IMS
and z/OS components that work
together.

cmdb_ci_db_im
s_subsystem
IMS Subsystem

A control program that can be
either online or batch and runs in
a z/OS address space. It is a part
of IBM's Information Management
System (IMS). IMS systems help
with the organization, storage, and
retrieval of data.

cmdb_ci_deplo
yed_marketplac
e_product

Deployed
Marketplace
Product

Cloud deployed marketplace
product is a preconfigured
cloud service or application,
that simplifies deployment and
streamlining access to third-party
solutions in cloud environments.

cmdb_ci_deplo
yment_compon
ent

Deployment
Component

Base class for storing all
Deployment Components.

cmdb_ci_digital
_cross_connect_
patch_panel

Digital Cross
Connect Patch
Panel

A Digital Cross Connect Patch
Panel facilitates the routing and
management of digital signals
in telecom networks, allowing
flexible connections between
network elements, enhancing
signal flow, and simplifying network
maintenance and troubleshooting.

cmdb_ci_digital
_cross_connect_
system

Digital Cross
Connect System

A Digital Cross Connect
System is telecommunications
device that routes and
manages digital signals in
networks, optimizing connectivity
for efficient data transmission.
Enhances performance with

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

Table name
Label (Display
name)
Table description

quick provisioning and flexible
connection rearrangement.

cmdb_ci_digital
_distribution_pa
nel

Digital
Distribution
Panel

A Digital Distribution Panel is a
centralized point for distributing
digital signals. It enables organized
routing, testing, and maintenance
of digital connections. Facilitates
efficient and reliable distribution of
digital signals within the network

cmdb_ci_displa
y
Display Device
Connected Device that displays
images.

cmdb_ci_distrib
uted_antenna_s
ystem_controller

Distributed
Antenna System
Controller

A Distributed Antenna System
(DAS) Controller is a centralized
equipment that manages
distributed antenna systems. It
controls signal distribution, monitors
performance, and optimizes
coverage for improved wireless
connectivity in large buildings or
venues.

cmdb_ci_distrib
uted_antenna_s
ystem_remote

Distributed
Antenna System
Remote

Distributed Antenna System (DAS)
Remote is a device that extends
cellular coverage. It receives,
amplifies, and distributes signals
from a central DAS hub,
eliminating dead zones and
improving wireless connectivity in
large buildings or outdoor areas.

cmdb_ci_dns_d
omain_info

DNS Domain
Info

Domain Name allows you to trace
the ownership and tenure of
domain name details from tools
like whois and DNS lookup tools.

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

Table name
Label (Display
name)
Table description

cmdb_ci_dns_re
source_record

DNS Resource
Records

DNS record detail from Domain
Name Server (DNS) for a WWW
Domain

cmdb_ci_dns_zo
ne_a_record

DNS Zone A
Records

DNS Zone A records hold only IPv4
addresses.

cmdb_ci_dns_zo
ne_aaaa_recor
d

DNS Zone AAAA
Records

DNS Zone AAAA records hold only
IPv6 addresses

cmdb_ci_dns_zo
ne_alias_record
DNS Zone Alias

An ALIAS record that points a
domain name to a hostname
instead of an IP address.

cmdb_ci_dns_zo
ne_cname_reco
rd

DNS Zone
CNAME

A canonical name (CNAME)
record points from an alias domain
to a canonical domain

cmdb_ci_drone
Drone
Unmanned Connected Device
with mobility.

cmdb_ci_dslam
DSLAM

A Digital Subscriber Line Access
Multiplexer (DSLAM) centralizes
DSL connections and optimizes
bandwidth. It enables reliable and
high-speed internet access for
multiple users. It enhances network
performance and user experience.

cmdb_ci_echo_
cancellation_sys
tem

Echo
Cancellation
System

An Echo Cancellation System is
a device that minimizes echo
in audio communication by
removing reflected signals. Ensures
clear and high-quality sound
transmission, enhancing the overall
audio experience.

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

Table name
Label (Display
name)
Table description

cmdb_ci_edge_
appl

Edge
Application

Thick client software purpose
built and deployed typically at
a place closer to where data
is being generated, leveraging
local computing resources to
execute tasks closer to the data
source enabling processing at
greater speeds and volumes,
minimizing latency and enhancing
responsiveness leading to greater
action-led results in real time.
An edge application is one
component in larger system and
it will send the resulting small
amount of data to the server
counterpart. Typically, a large
number of edge applications are
deployed and overall load on the
server side component is reduced
as majority processing is done
at Edge application and minor
results are sent to server side
to either surface it to customer
or to perform aggregations and
take actions. Examples of edge
applications include purpose-built
software deployed smart grids to
send alarms, action oriented small
set of data to server side system,
purpose-built software at a retail
store for performing retail analytics
at the store and sending minimal
results such as events, purpose-
built thick client application built
for industrial IoT applications where
the application is in close proximity
to the data being generated and
performing the computations to
send the resulting small dataset
to the server side component to

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

Table name
Label (Display
name)
Table description

source to customers or to perform
aggregations.

cmdb_ci_edge_
device
Edge Device

Edge device on either the
provider's edge or at customer
branch locations.

cmdb_ci_edge_
rack
Edge Rack
Infrastructure on the provider or
customer edge.

cmdb_ci_enode
_b
EnodeB

An EnodeB, short for Evolved
Node B, is an LTE base station.
It connects user devices to
the LTE core network, providing
wireless access, managing radio
resources, and enabling high-
speed data transmission for cellular
communication.

cmdb_ci_fabric_
interconnect

Fabric
Interconnect

A Fabric Interconnect is a
networking component that
connects servers, storage devices,
and network resources, enabling
high-speed communication,
centralized management, and
efficient data transfer within a
data center environment.

cmdb_ci_facility
_service_instanc
e

Facility Service
Instance

A Facility Service Instance extends
a Service Instance, representing a
logical instance of a service tied
to the operations of a facility, such
as an office building, residential
building, manufacturing plant, or
operations control center.

cmdb_ci_fan_m
odule
Fan Shelf

A Fan Shelf is a rack-mounted unit
with built-in fans for equipment
cooling. It ensures optimal
temperature management,

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

Table name
Label (Display
name)
Table description

prevents overheating, and
enhances the reliability and
performance of network devices.

cmdb_ci_fiber_c
ross_connect_p
anel

Fiber Cross
Connect Panel

A Fiber Cross Connect Panel
is a device used in organizing
and managing fiber connections.
It enables easy interconnection,
testing, and maintenance of fiber-
optic cables. It ensures efficient
routing for a reliable and scalable
network infrastructure.

cmdb_ci_fiber_d
istribution_panel

Fiber Distribution
Panel

A Fiber Panel is a component
used in fiber optic networks
that provides termination and
connection points for fiber optic
cables, allowing for efficient
routing and management of
optical signals, enhancing the
performance and reliability of the
network.

cmdb_ci_fiber_s
erving_terminal

Fiber Serving
Terminal

A Fiber Serving Terminal (FST)
connects fiber optic cables
from the service provider to
subscribers, enabling high-speed
data transmission and delivery
of services like internet and
phone, enhancing connectivity
and network performance for end-
users.

cmdb_ci_filler_c
omponent

Filler
Component

A flat metal or plastic cover for
empty spots/slots in a rack or
device. It helps separate cold and
hot air zones, prevents dust from
entering the chassis, and ensures
proper airflow through the chassis
or rack.

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

Table name
Label (Display
name)
Table description

cmdb_ci_fortine
t_firewall_interfa
ce

Fortinet Firewall
Interface

Fortinet firewall interface connects
network segments, allowing
traffic flow while applying
assigned security policies and
configurations.

cmdb_ci_fortine
t_firewall_policy

Fortinet Firewall
Policy

Fortinet firewall policy defines the
security rules that control traffic
flow between network interfaces,
specifying conditions like source/
destination and services. It ensures
granular traffic management and
enforces security across network
segments.

cmdb_ci_fortine
t_vdom

Fortinet Virtual
Domain

VDOM in a firewall represents a
virtual instance within a physical
firewall that enables independent
security policies, routing, and
configurations for different network
segments. Each VDOM functions
like a separate firewall, isolating
traffic and rules.

cmdb_ci_functi
on_ai
AI Function

AI SaaS applications deployed
on public cloud platforms
that offer scalable, on-demand
services for machine learning,
data processing, and AI-driven
tasks, providing flexible solutions
without the need for on-premises
infrastructure management.

cmdb_ci_gnode
_b
GnodeB

A GnodeB, or Next-Generation
NodeB is a 5G base station. It
connects user devices to the
5G core network, supporting
ultra-fast data transfer, low
latency, and massive device

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

Table name
Label (Display
name)
Table description

connectivity, revolutionizing mobile
communication capabilities.

cmdb_ci_gpu
Graphics
Processing Unit

The GPU helps handle graphics-
related work like graphics, videos,
and AI ML workloads. The GPU
could be externally connected or
internally installed in a computer.
Typically characterized by number
of cores and GPU memory.

cmdb_ci_handh
eld_computing

Handheld
Computing
Device

Hand held device running an
operating system. Includes smart
phones and tablets.

cmdb_ci_hc_de
vice

Healthcare
device

Base class for various clinical
equipments.

cmdb_ci_heat_
baffle
Heat Baffle

Represents hardware used to help
direct rising hot air away from
equipment.

cmdb_ci_hmc_s
erver
IBM HMC Server
IBM console that manages frames
and assigns lpars to pools.

cmdb_ci_hmi

Human Machine
Interface
[DEPRECATED]

DEPRECATED — OT assets moved
to cmdb_ci_ot to support
broader use cases. Instead use
cmdb_ci_ot_hmi

cmdb_ci_ibm_a
pi_connect
IBM API Connect

An API Gateway service provided
by IBM for hosting and managing
APIs.

cmdb_ci_ibm_fr
ame
IBM Frame

IBM physical machine with
considerable resources that can
be virtualized.

cmdb_ci_ibm_i_
server
IBM i Server
A fully integrated operating system
for IBM Power servers

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

Table name
Label (Display
name)
Table description

cmdb_ci_ibm_vi
os_server
IBM viOS Server

A Virtual I/O Server that facilitates
the sharing of physical I/O
resources between client logical
partitions within the server

cmdb_ci_ibm_zt
pf_server
IBM zTPF Server

The z/Transaction Processing
Facility operating system is a
special-purpose system that is used
by companies with very high
transaction volume

cmdb_ci_ibm_zv
m_server
IBM zVM Server

IBM z/VM is an operating system
with security-rich and scalable
hypervisor and virtualization
technology designed to run guest
servers

cmdb_ci_ibm_zv
se_server
IBM zVSE Server

The z/VSE operating system
provides a smaller, less complex
base for batch processing and
transaction processing

cmdb_ci_imagin
g
Imaging Device
Connected device that captures
images.

cmdb_ci_incom
plete_ip

Incomplete
IP Identified
Device

Devices that can be identified only
by IP Address.

cmdb_ci_interfa
ce_card

Network
Interface Card

This class stores interface cards
installed in slots in edge devices
enabling a clear relationship
between the edge device and
cards installed within that network
chassis.

cmdb_ci_iot
IoT Device
Parent table that contains Internet
of Things device types.

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

Table name
Label (Display
name)
Table description

cmdb_ci_ipdsla
m
IP DSLAM

An Internet Protocol Digital
Subscriber Line Access
Multiplexer(IP DSLAM) centralizes
IP-based DSL connections,
optimizing bandwidth. It enables
high-speed and reliable internet
access for multiple users. Enhances
network performance and user
experience

cmdb_ci_keybo
ard_video_mous
e_switch

Keyboard Video
Mouse Switch

A Keyboard Video Mouse
Switch (KVM Switch) is a
device for controlling multiple
computers using a single set of
keyboard, video, and mouse.
It simplifies management and
improves efficiency in multi-system
environments.

cmdb_ci_kong_
gateway
Kong Gateway
An API Gateway service provided
by Kong for hosting APIs.

cmdb_ci_kong_l
b

Kong Load
Balancer

A built-in load balancer in the
Kong Gateway for distributing
API requests across multiple Kong
targets.

cmdb_ci_kong_t
arget
Kong Target

An individual backend server
that identifies an instance of a
backend service configured in a
Kong Gateway.

cmdb_ci_kubern
etes_node_pool

Kubernetes
Node Pool

A Node Pool class that belongs
to a Kubernetes cluster in cloud
environment.

cmdb_ci_logical
_composite

Logical
Composite

Logical device that is composed
of multiple distinct entities that
are aggregated to provide a
function. The Logical Composite

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

Table name
Label (Display
name)
Table description

is not a physical device separate
from its constituent entities. The
entities that the logical composite
is composed of are themselves
typically realized as separate CIs
with relationships to the Logical
Composite CI.

cmdb_ci_lpar_in
stance

IBM LPAR
Instance

IBM logical partition representing
the virtual aspect of the OS.

cmdb_ci_lpar_re
source
LPAR Resource
Resources of an LPAR instance.

cmdb_ci_mainfr
ame
IBM Mainframe

High performance computers
with large amounts of memory
and processors that process
billions of simple calculations and
transactions in real time.

cmdb_ci_mainfr
ame_lpar

IBM Mainframe
LPAR

A Logical Partition (LPAR) is a
subset of an IBM Mainframe
computer.

cmdb_ci_mainfr
ame_sysplex

Mainframe
Sysplex

A collection of z/OS systems that
cooperate using certain hardware
and software products to process
work

cmdb_ci_mana
ged_api
Managed API

An API object dependent on
an API Gateway and identified
through the Gateway.

cmdb_ci_manuf
acturing

Manufacturing
Device
[DEPRECATED]

DEPRECATED class — OT assets
moved to cmdb_ci_ot to support
broader use cases. Instead, use
cmdb_ci_ot as the base class
or other generic child classes as
appropriate.

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

Table name
Label (Display
name)
Table description

cmdb_ci_med_
clinical_device
Clinical Device

Devices used in a clinical setting
for overall management, medical
staff, and patient aid.

cmdb_ci_med_
dental

Dental
Equipment

Dental equipment and supplies as
defined by UNSPSC family code
42150000.

cmdb_ci_med_
device
Medical device
Class of Medical devices that are
used for patient treatment.

cmdb_ci_med_
diagnostic_imag
ing

Diagnostic
Imaging

Specialized equipment used in
medicine to visualize the internal
structures of the body.

cmdb_ci_med_l
ab_equipment
Lab Equipment

Specialized tools, apparatus, and
instruments used in scientific
research, experiments, and
analysis.

cmdb_ci_med_
patient_implant
Patient Implant

Medical devices or tissues that are
surgically placed inside a patient's
body.

cmdb_ci_med_
patient_monitori
ng

Patient
Monitoring

Monitors and tracks various
physiological parameters of a
patient. Monitors heart rate, blood
pressure, oxygen levels, respiratory
rate, and so on.

cmdb_ci_med_s
urgical_instrume
nt

Surgical
Instrument

Devices used during surgical
interventions. Life support tools and
tools to assist surgeons in precise
and controlled maneuvers.

cmdb_ci_med_t
herapeutic_devi
ce

Therapeutic
Device

Specialized tools designed to aid
in the treatment, rehabilitation, or
management of health conditions.
Can range from orthopedic

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

Table name
Label (Display
name)
Table description

supports to cardiac implants and
neurostimulation devices.

cmdb_ci_media
_converter

Media
Converter

A Media Converter is a device that
converts signals between different
network media types (e.g., fiber
to copper), enabling seamless
connectivity and extending
network reach. It facilitates smooth
communication in diverse network
environments.

cmdb_ci_media
_gateway
Media Gateway

A Media Gateway is a device that
connects different communication
networks, converting signals
between different protocols or
media types. It enables seamless
interoperability and facilitates
smooth communication across
diverse networks.

cmdb_ci_medic
al

Medical Device
[DEPRECATED]

DEPRECATED class — Instead, use
cmdb_ci_med_device

cmdb_ci_micro
wave_radio_eq
uipment

Microwave
Radio
Equipment

A wireless technology for high-
speed data transmission over
long distances using microwave
frequencies. It is reliable, efficient,
and widely used in telecom and
backhaul networks for point-to-
point connectivity.

cmdb_ci_mixed
_node_b
Mixed NodeB

Telecommunications equipment
that supports multiple radio access
technologies, typically combining
both 2G and 3G technologies in a
single base station.

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

Table name
Label (Display
name)
Table description

cmdb_ci_mobile
_switching_cent
er

Mobile
Switching
Center

A Mobile Switching Center
(MSC) is a core component in
a cellular network, connecting
mobile devices to the rest of
the network. It handles call
routing, switching, and mobility
management, facilitating seamless
communication.

cmdb_ci_mobilit
y_management
_entity

Mobility
Management
Entity

A Mobility Management Entity
(MME) manages mobility-related
functions in a wireless network.
It handles tasks such as user
authentication, tracking, and
handover between cells. Enables
seamless mobility and efficient
utilization of network resources.

cmdb_ci_monit
oring_unit

Monitoring Unit
Shelf

A Monitoring Unit Shelf is
a rack-mountable platform for
centralized monitoring of network
devices. It streamlines monitoring,
troubleshooting, and maintenance
tasks and also enhances network
performance and reliability

cmdb_ci_mssql_
ag

MSSQL
Availability
Group

An availability group is a container
for a set of databases that
failover together to support high
availability and disaster recovery.

cmdb_ci_mssql_
ag_replica

MSSQL
Availability
Group Replica

An availability group replica is an
SQL Server instance that hosts a
local copy of each database in
an availability group. There are
two types of replicas: one primary
replica and up to eight secondary
replicas.

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

Table name
Label (Display
name)
Table description

cmdb_ci_mssql_
ag_listener

MSSQL
Availability
Group Listener

An availability group listener is
a virtual network name that
provides a single connection point
for clients to access databases
in an availability group, routing
connections to the primary or a
readable secondary replica for
HADR.

cmdb_ci_multi_s
ervice_network_
router

Multi Service
Network Router

A versatile networking router
device that supports various
networking services, such as
voice, video, and data,
providing efficient and reliable
communication across multiple
networks and protocols.

cmdb_ci_multi_s
ervice_switch

Multi Service
Switch

A network device that aggregates
and routes multiple types of traffic
(voice, data, video) in a network.
Provides efficient and flexible
connectivity, ensuring seamless
communication and optimized
resource utilization.

cmdb_ci_multim
edia

Multimedia
Device

A connected device that assists
in the generation or delivery of
media content.

cmdb_ci_multipl
exer
Multiplexer

A Multiplexer (MUX) is a
device that combines signals
into one transmission to optimize
bandwidth. It simultaneously
transmits multiple data streams for
efficient communication in various
applications. It also enhances
network performance.

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

Table name
Label (Display
name)
Table description

cmdb_ci_netwo
rk_circuit
Network Circuit

A discrete path between two
or more points that enables
telecommunication connectivity
services.

cmdb_ci_netwo
rk_controller

Network
Controller

Network controllers are responsible
for orchestrating network functions.

cmdb_ci_netwo
rk_interface_dev
ice

Network
Interface Device

A Network Interface Device (NID)
connects customer equipment to
the service provider's network. It
serves as a demarcation point,
ensuring reliable and secure
connectivity for end-users. It
provides physical and logical
interface for communication
services.

cmdb_ci_netwo
rk_interface_unit

Network
Interface Unit

A Network Interface Unit (NIU)
connects customer devices to the
network. Acts as a demarcation
point, enabling reliable and
secure connectivity. It provides
interface and protocols for
seamless communication between
customer equipment and the
network.

cmdb_ci_netwo
rk_link
Network Link

Physical network links in the
provider's network and up to
the customer edge. (for example,
fiber, coax, an so on)

cmdb_ci_netwo
rk_monitoring

Network
Monitoring

A Network Monitoring Unit is a
dedicated device or software
that continuously monitors network
traffic, collects data, and provides
real-time insights and alerts for
effective network management,

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

Table name
Label (Display
name)
Table description

troubleshooting, and security
analysis.

cmdb_ci_netwo
rk_node
Network Node

General class to capture network
infrastructure when a specific CI
class doesn't exist.

cmdb_ci_netwo
rk_port
Network Port

Network ports that are
contained in interface cards or
independently in access class
network chassis.

cmdb_ci_netwo
rk_service_instan
ce

Network Service
Instance

A specific deployed, provisioned
and/or configured instance of a
set of network services that in turn
are based on Network Functions.

cmdb_ci_netwo
rk_tap
Network Tap

A passive device that captures
and copies network traffic for
monitoring and analysis. Provides
visibility without interrupting
flow, aiding performance
monitoring, security analysis, and
troubleshooting.

cmdb_ci_netwo
rk_testing_unit

Network Testing
Unit

A device for assessing
network performance, reliability,
and security. Conducts tests
like bandwidth measurement,
latency analysis, and vulnerability
scanning, ensuring optimal
functioning and identifying
potential issues.

cmdb_ci_netwo
rk_timing
Network Timing

A Network Timing device, also
known as network time server,
synchronizes clocks across a
network, ensuring accurate data
transmission, synchronization, and

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

Table name
Label (Display
name)
Table description

performance optimization for
network devices and systems.

cmdb_ci_netwo
rk_topology

Network
Topology

Network topology describes the
physical and logical structure of a
network.

cmdb_ci_ni_logi
cal_path

Logical
connection

Intangible entity between two
active interfaces. These are
formed through multiple network
links (like physical connections /
microwave links) or other logical
connections or combination of all

cmdb_ci_ni_phy
sical_link

Physical
connection

A Network Link‚ Configured
Connection between two end
points realized via Connection
Medium (for example a cable, a
wireless connection, a strand, and
so on).

cmdb_ci_nids

Network
Intrusion
Detection
System

The NIDS class builds the
relationships between passive
network monitoring appliances
and the devices on the network
that it discovers.

cmdb_ci_nutani
x_cluster
Nutanix Cluster
Cluster made up of the physical
nodes running Nutanix software.

cmdb_ci_nutani
x_controller_vm

Nutanix
Controller VM

Nutanix controller virtual machine
that is present in each node
and that provides the storage
clustering and management
capabilities.

cmdb_ci_nutani
x_host
Nutanix Host
Physical host on which all the
virtual machines run.

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

Table name
Label (Display
name)
Table description

cmdb_ci_nutani
x_storage_conta
iner

Nutanix Storage
Container

Subset of Nutanix storage pool
used to apply policies such
as reserved capacity, replication
factor, and storage optimization
options.

cmdb_ci_nutani
x_storage_pool

Nutanix Storage
Pool

Grouping of physical disks in a
Nutanix cluster that is typically
used to create physical separation
between virtual machines.

cmdb_ci_nutani
x_vm_instance

Nutanix Virtual
Machine
Instance

A virtual machine that runs on
Nutanix infrastructure.

cmdb_ci_oe
Operational
Equipment

This class is for industrial
and manufacturing equipment,
machines and tools that are
directly involved in the production
process of goods and services.
These CIs are sometimes controlled
by Operational Technology (OT)
CIs.

cmdb_ci_operat
ional_process_se
rvice_instance

Operational
Process Service
Instance

An Operational Process Service
Instance extends a Service
Instance, representing a logical
instance of an operational process
involving interconnected devices
and equipment. The process may
be autonomous but typically
includes front-line employees.

cmdb_ci_optica
l_carrier_transpo
rt_node

Optical Carrier
Transport Node

An Optical Carrier Transport
Node transmits and switches
high-capacity optical signals in
transport networks. It facilitates
efficient and reliable transport of
data, voice, and video traffic.

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

Table name
Label (Display
name)
Table description

Enhances network performance
and scalability

cmdb_ci_optica
l_fiber_cable

Optical Fiber
Cable

Entity representing a connection
medium that is made by a
set of Optical Fiber. This class
shall capture all cables made of
Optical Fiber strands.

cmdb_ci_optica
l_fiber_strand

Optical Fiber
Strand

Entity representing a connection
medium that is made of a single
fibre strand. This class shall capture
all strands made of optical fiber.

cmdb_ci_optica
l_line_amplifier

Optical Line
Amplifier

An Optical Line Amplifier is a
device that amplifies optical
signals in fiber-optic systems
for long-distance transmission. It
enhances signal strength without
electrical conversion, ensuring
efficient and reliable data transfer.

cmdb_ci_optica
l_line_terminal
OLT

An Optical Line Terminal (OLT) is
an endpoint device in passive
optical networks. It aggregates
and distributes data, voice, and
video signals. It also provides
high-speed fiber connectivity to
multiple subscribers.

cmdb_ci_optica
l_network_termin
al

ONT

An Optical Network Terminal (ONT)
is a device used in fiber optic
networks to convert optical signals
into electrical signals, enabling the
delivery of high-speed internet,
phone, and television services to
end-users.

cmdb_ci_optica
l_network_unit
ONU
An Optical Network Unit (ONU)
is a customer-end device in

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

Table name
Label (Display
name)
Table description

fiber optic networks. Converts
optical signals to electrical signals,
providing connectivity for devices
to access high-speed internet,
voice, and video services in homes
or businesses.

cmdb_ci_optica
l_splitter
Optical Splitter

An Optical Splitter also known
as beam splitter divides incoming
optical signals into multiple
outputs. It enables signal
distribution to multiple devices or
network branches. It facilitates
efficient sharing of optical
bandwidth in fiber-optic networks.

cmdb_ci_ot
Operational
Technology (OT)

Base class for OT technology used
for industrial control, for instance in
manufacturing.

cmdb_ci_ot_cn
c
CNC

Computer Numerical Control —
automated control of machining
tools (such as drills, lathes, mills)
and 3D printers

cmdb_ci_ot_co
ntrol

OT Control
System

Base class for industrial control
systems (ICS), usually at Purdue
Model Level 1 or 2.

cmdb_ci_ot_co
ntrol_module

OT Control
Module

Module connected to an OT
Control System like a PLC or DCS.

cmdb_ci_ot_dcs
DCS

Distributed Control System —
control achieved by intelligence
that is distributed about the
process to be controlled, rather
than by a centrally located single
unit

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

Table name
Label (Display
name)
Table description

cmdb_ci_ot_dp
u
DPU

Distributed Processing Units — ICS
on a dedicated network with each
DPU handling thousands of points
of I/O

cmdb_ci_ot_ew
s
EWS

Engineering Workstation —
computing platform for
configuration, maintenance, and
diagnostics of ICS applications and
other control system equipment.

cmdb_ci_ot_fiel
d_device
OT Field Device
OT Input and Output Devices at
Purdue Model Level 0

cmdb_ci_ot_hist
orian
Historian

Data Historian — a centralized
database supporting data analysis
for industrial processes

cmdb_ci_ot_hmi
HMI

Human-Machine Interface —
hardware or software through
which an operator interacts with a
controller

cmdb_ci_ot_ied
IED

Intelligent Electronic Device —
receive or send data/control from
or to an external source — for
Power Grids

cmdb_ci_ot_ind
ustrial_3d_printer

Industrial 3D
Printer

Device used in additive
manufacturing for the construction
of a three-dimensional object from
a CAD model or a digital 3D
model

cmdb_ci_ot_ind
ustrial_actuator

Industrial
Actuator

Component of a machine that
is responsible for moving and
controlling a mechanism, like
opening a valve.

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

Table name
Label (Display
name)
Table description

cmdb_ci_ot_ind
ustrial_drive
Industrial Drive

Equipment used to control the
speed of machinery — may be
mechanical electromechanical,
hydraulic, or electronic.

cmdb_ci_ot_ind
ustrial_robot
Industrial Robot
Robotic system used for
manufacturing.

cmdb_ci_ot_ind
ustrial_sensor
Industrial Sensor
Sensor that monitors the health of
equipment.

cmdb_ci_ot_op
c_client
OPC Client

Software module that enables
applications to acquire data
from an OPC Server or conduct
supervisory control using an OPC
Server.

cmdb_ci_ot_op
c_server
OPC Server

Software module that enables
applications to provide their data
to the outside world using OPC.

cmdb_ci_ot_plc
PLC
Programmable Logic Controller —
used to control OT devices

cmdb_ci_ot_qic
s

Quality
Inspection
Control System

Control systems that assist
specifically in quality and
inspection functions.

cmdb_ci_ot_rtu
RTU

Remote Terminal Unit — special
purpose data acquisition and
control unit designed to support
DCS and SCADA remote stations

cmdb_ci_ot_sca
da_client
SCADA Client

Supervisory Control and Data
Acquisition — client that allows
an operator to manage a SCADA
server

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

Table name
Label (Display
name)
Table description

cmdb_ci_ot_sca
da_server
SCADA Server

Supervisory Control and Data
Acquisition — system capable of
gathering and processing data
and applying operational controls
over long distance

cmdb_ci_ot_sup
ervisory

OT Supervisory
System

Base class for supervisory systems,
usually at Purdue Model Level 2 or
3

cmdb_ci_ot_syst
em_service

OT System
Service

Category of technology and
systems that are used to
manage, control, and monitor
physical processes, machinery,
and industrial operations.

cmdb_ci_paym
ent
Payment Device
Connected Device that allows for
purchasing goods or services.

cmdb_ci_plc

Programmable
Logic Controller
[DEPRECATED]

DEPRECATED class — OT assets
moved to cmdb_ci_ot to support
broader use cases. Instead, use
cmdb_ci_ot_plc

cmdb_ci_power
_over_ethernet_
device

Power Over
Ethernet Device

A Power Over Ethernet (PoE)
device allows the transmission
of power and data over a
single Ethernet cable, simplifying
installation and reducing the need
for separate power sources.

cmdb_ci_primar
y_flexibility_point

Primary Flexibility
Point

A Primary Flexibility Point (PFP) is
a central location in a network
where multiple cables or conduits
converge, allowing for flexible
redistribution and reconfiguration
of network connections, optimizing
network management and
scalability.

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

Table name
Label (Display
name)
Table description

cmdb_ci_privat
e_branch_exch
ange

Private Branch
Exchange

A Private Branch Exchange (PBX)
is a telephone system that enables
internal communication within an
organization, allowing users to
make calls, share extensions, and
manage incoming/outgoing calls
without relying on individual phone
lines.

cmdb_ci_proces
sing_unit
Processing Unit

Base class for various processing
units in a computing system.
It encapsulates core attributes
and functionalities common to all
units, serving as a foundation for
specialized subclasses like GPUs,
CPUs, and other processors.

cmdb_ci_proces
sor_pool

IBM HMC
Processor pool

IBM shared pool used to allocate
processors to a group of LPARs.

cmdb_ci_protoc
ol_converter

Protocol
Converter

Device used to convert standard
or proprietary protocol of one
device to the protocol suitable
for the other device or tools to
achieve the interoperability.

cmdb_ci_provid
er_device
Provider Device

The point of connectivity
connecting the SD WAN Edge Port
and the service providers core
network.

cmdb_ci_radio_
access_network

Radio Access
Network

A part of a mobile system
connecting user devices to
the core network. It comprises
base stations, antennas, enabling
wireless communication, and
access to mobile services.

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

Table name
Label (Display
name)
Table description

cmdb_ci_radio_
control_hardwar
e

Radio Control
Hardware

Device that helps in managing
radio communication systems. It
includes transceivers, antennas,
amplifiers, and switches, ensuring
efficient and reliable wireless
connectivity.

cmdb_ci_radio_
network_controll
er

Radio Network
Controller (RNC)

The RNC is a functional
element of the UMTS RNS
(Radio Network System) which
controls a number of NodeBs.
Responsibilities of the RNC include
radio resource management and
control, air interface security,
mobility procedures, and system
synchronization.

cmdb_ci_radio_
transmission_har
dware

Radio
Transmission
Hardware

An equipment for wireless
signal transmission that facilitates
wireless communication over
various frequencies and ranges.
It includes transmitters, receivers,
antennas, amplifiers, and related
components.

cmdb_ci_remot
e_radio_unit

Remote Radio
Unit

A Remote Radio Unit also known
as Remote Radio Head (RRH) is
a device placed at the antenna
site, connects to baseband unit
via fiber. Converts baseband
signals to radio signals for wireless
transmission, enhancing network
flexibility and performance.

cmdb_ci_repeat
er
Repeater

A Repeater is a device
that amplifies and retransmits
wireless signals to extend
coverage range. It receives
weak signals, boosts them,
and rebroadcasts, enhancing

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

Table name
Label (Display
name)
Table description

signal strength and improving
communication reliability in areas
with limited reception.

cmdb_ci_reside
ntial_gateway

Residential
Gateway

A Residential Gateway is a device
that combines modem, router,
and firewall functionalities in a
single device, enabling internet
access, local network connectivity,
and security for home users.

cmdb_ci_rj45_p
atch_panel

RJ45 Patch
Panel

A RJ45 Patch Panel is a hardware
component that organizes and
manages Ethernet connections,
serving as a central hub for
terminating and patching network
cables, simplifying network
configuration, maintenance, and
troubleshooting.

cmdb_ci_sap_si
d

cmdb_ci_sbc
Single Board
Computing

Single Board Computing device
such as a Raspberry Pi.

cmdb_ci_sdwan
_controller

SDWAN
Controller

Device that provides physical or
virtual device management for all
SD-WAN Edges.

cmdb_ci_sdwan
_edge
SDWAN Edge

Network functions (physical or
virtual) that are located between
the Underlay Connectivity Service
and SD-WAN Service.

cmdb_ci_sdwan
_port
SDWAN Port

The socket on a network device
that connects to an external
network.

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

Table name
Label (Display
name)
Table description

cmdb_ci_securit
y
Security Device

Connected Device that serves a
Security function such as a badge
reader.

cmdb_ci_servic
e_aggregation_r
outer

Service
Aggregation
Router

A Service Aggregation Router is
a network device that centralizes
network services in one device,
simplifying management by
aggregating traffic from multiple
sources, improving efficiency and
reducing complexity.

cmdb_ci_servic
e_control_point

Service Control
Point (SCP)

SCPs in the Signaling System
7 (SS7) network are responsible
for routing calls and managing
special features.

cmdb_ci_servic
e_switching_poi
nt

Service
Switching Point
(SSP)

Switch in a telecommunications
network that sends a query to a
central database called a service
control point (SCP) via the SS7
network to determine how a TDM
call can be routed. SSPs can
be part of a voice switch or a
separate computer connected to
it.

cmdb_ci_servin
g_area_interfac
e

Serving Area
Interface

A Serving Area Interface (SAI) is
the connection point between
a service provider's network and
customer premises, enabling the
delivery of services like internet,
telephony, and television, ensuring
efficient communication and
connectivity.

cmdb_ci_servin
g_gprs_support_
node

Serving GPRS
Support Node

Serving General Packet Radio
Service (GPRS) Support Node
(SGSN). S4 is the interface between

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

Table name
Label (Display
name)
Table description

the SGSN and Serving Gateway
(SGW).

cmdb_ci_session
_border_controll
er

Session Border
Controller (SBC)

Protects and regulates IP
communication. Deployed at the
network borders between IP
networks like a service provider
and its customers. Regulates
real-time communications include
VolP, IP video, and text chat.
Examples: Oracle 6350, Oracle
4250

cmdb_ci_signal_
transfer_point

Signal Transfer
Point

A Signal Transfer Point (STP) is
a telecommunications network
element that routes signaling
messages in telecommunication
networks, facilitating smooth
communication between service
providers and enabling seamless
connectivity for different services.

cmdb_ci_sim_ca
rd
SIM Card

SIM Cards used in mobility devices
including phones, tablets, and
mobility gateways.

cmdb_ci_small_
cell_radio_gate
way

Small Cell Radio
Gateway

A device that connects small cell
base stations to the core network.
It manages signal transmission,
integrating and enhancing
wireless communication in densely
populated areas or indoor
environments.

cmdb_ci_small_
cell_radio_node

Small Cell Radio
Node

A compact wireless
communication device that
enhances network capacity and
coverage by providing localized
cellular connectivity in areas with

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

Table name
Label (Display
name)
Table description

high user density or weak signal
strength

cmdb_ci_splice_
closure
Splice Closure

A device that seals and protects
a communications splice, such as
a fiber optic splice. For example
joining two fiber strands into a
single, continuous, physical fiber
optic strand.

cmdb_ci_strand
Strand

A tangible entity that defines the
capacity of a cable. One or
more strands are used to form a
physical connection. Strands can
be spliced to create longer or
extended physical connections.
Strands shall be connected to an
interface or left open.

cmdb_ci_telco_
control_compon
ent

Control
Component

Device in a computer hardware
component that creates an
interface between a computer
main system motherboard and
other telecom components. Some
will be integrated directly into the
motherboard, while others may be
added on as expansion devices.

cmdb_ci_topolo
gy
Topology

Generic class to represent the
arrangement of a set of CIs
(equipment or connections).

cmdb_ci_transm
ission_control_un
it

Transmission
Control Unit
(TCU)

In a 2G radio network the
transmission control unit (TCU)
encodes and decodes speech
as well as handling data rate
adaptation. The TCU handles
translation between 13 kbits/s and
64 kbits/s.

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

Table name
Label (Display
name)
Table description

cmdb_ci_transp
ort
Transport Type

Types of transportation
that contain interconnected
technology.

cmdb_ci_tyk_ap
i_gateway

Tyk API
Gateway

An API Gateway service provided
by Tyk for hosting and managing
APIs.

cmdb_ci_unclas
sified_hardware

Unclassed
Hardware

Hardware Devices that lack
enough information to classify
properly.

cmdb_ci_univers
al_customer_pre
mises_equipmen
t

Universal
Customer
Premises
Equipment
(uCPE)

General purpose network devices
located at the customer edge.
Platform that enables virtual
functions. Contrast with purpose-
built CPE devices provided by
the same hardware vendor.
Examples: Juniper NFX250-S2,
Silicom Connectivity Solutions
80500-015

cmdb_ci_unmat
ched_api_endp
oint

Unmatched API
Endpoint

An API endpoint that doesn't
have sufficient information for
populating the API and API
Component classes.

cmdb_ci_v35_p
atch_panel
V35 Patch Panel

A V.35 Patch Panel is a
centralized termination point for
V.35 connections. Organizes, tests,
and maintains V.35 interfaces.
Enables efficient connectivity and
management of V.35 networks,
ensuring reliable data transmission
and streamlined operations.

cmdb_ci_vms_a
ppl

Video
Management
System

A Video Management System
(VMS) is a software-based
platform designed to manage
and control video surveillance

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

Table name
Label (Display
name)
Table description

cameras, recording devices,
and other security components.
It is commonly used in large-
scale surveillance and security
monitoring.

cmdb_ci_voice_
activity_detecti
on_equipment

Voice Activity
Detection
Equipment

A Voice Activity Detection
Equipment detects presence or
absence of human speech
in audio signals. It enables
efficient utilization of resources and
enhances audio processing by
activating or deactivating specific
functions based on voice activity.

cmdb_ci_voice_
gateway
Voice Gateway

A Voice Gateway is a device
that connects traditional phone
systems to IP networks, enabling
voice communication. It converts
analog voice signals to digital
data, integrating voice services
with IP-based systems.

cmdb_ci_voice_
switch
Voice Switch

Represents a large-scale computer
system that is used to switch Time
Division Multiplexer (TDM)-based,
circuit-switched telephone calls.
An example is a Class-5 telephone
switch in the public switched
telephone network (PSTN) that
serves calling features.

cmdb_ci_voice
mail_equipment

Voicemail
Equipment

A Voicemail Equipment refers
to hardware that stores and
retrieves voice messages in
telecom networks, allowing users
to receive and save messages
when unavailable, enhancing
communication efficiency and
preventing missed messages.

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

Table name
Label (Display
name)
Table description

cmdb_ci_wdm
WDM

A Wavelength Division Multiplexing
(WDM) transmits multiple signals
of different wavelengths on
a single fiber. It increases
data capacity and optimizes
bandwidth. It enables efficient
and high-speed communication in
optical networks.

cmdb_ci_weara
ble

Wearable
Technology

Connected Device that is worn by
a person. For example, a smart
watch.

cmdb_ci_web_a
cl
Web ACL

The WebACL class represents ACLs
for CloudFront, API Gateway REST
APIs, Application Load Balancers,
AppSync GraphQL APIs, Cognito
user pools, App Runner services,
AWS Verified Access, and Azure
Front Door Application Gateway.

cmdb_ci_webse
al_backend_ser
ver

Webseal
Backend Server

Discovered IBM WebSEAL Backend
Servers. Represent servers used
by WebSEAL for serving the web
content.

cmdb_ci_webse
al_junction

Webseal
Junction

Discovered IBM WebSEAL
Junctions. A WebSEAL Junction
is an HTTP or HTTPS connection
between a front-end WebSEAL
server and a back-end Web
application server.

cmdb_ci_webse
al_reverse_proxy

Webseal
Reverse Proxy

Discovered IBM WebSEAL Reverse
Proxies. Generally WebSEAL acts
as a reverse web proxy by
receiving HTTP/HTTPS requests from
a web browser and delivering
content from its own web server

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

Table name
Label (Display
name)
Table description

or from junctioned back-end web
application servers.

cmdb_ci_wireles
s_sector
Wireless Sector
A unit of cellular coverage area.

## CMDB APIs (CMDB SDK)

Use CMDB APIs to create, update, and read operations on the CMDB.
Domain separation is supported in CMDB APIs.

CMDB APIs (CMDB SDK)

Use the following CMDB APIs to create, update, and read operations on
the CMDB:

• CMDBGroupAPI - Scoped

• CMDBTransformUtil - Global

• CMDBUtil - Global

• IdentificationEngineScriptableApi

• IdentificationEngine - Scoped

Domain separation in CMDB APIs

Domain separation enables you to separate data, processes, and
administrative tasks into logical groupings called domains. You can
control several aspects of this separation, including which users can see
and access data.

CMDB APIs are used for accessing the CMDB from a script. CMDB stores
the CI and relation information; CMDB is domain separated.

CMDB APIs support the following operations:

• Create a new CI:

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

This operation goes through the Identification and Reconciliation
Engine which supports domain separation when creating a CI. The
domain of the caller is used for this operation.

• Update an existing CI:

This operation goes through the Identification and Reconciliation
Engine which supports domain separation when creating a CI. The
domain of the caller is used for this operation.

• Create/Delete relations:

The cmdb_rel_ci table is not domain separated.

• Query CMDB CI/Query CMDB table:

Results are filtered by the domain(s) visible to the caller.

• Query CMDB metadata table:

Metadata information is not domain separated.

Setting up domain separation for CMDB APIs

If domain separation is enabled for CMDB, then it is also available for
CMDB APIs.

Data separation

Data is stored and domain separated in CMDB. There is no additional
work needed from the CMDB API perspective.

Configuring a domain-separated environment

The configuration is done at the CMDB level.

If a domain column is present for base system application tables

See the Domain separation in CMDB Health topic.

Tenant domains and application data

There is no application-specific data to manage with CMDB.

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

Related concepts

• Domain separation and Configuration Management Database (CMDB)

## Quick start tests for Configuration Management
## Database (CMDB)

Validate that Configuration Management Database (CMDB) still works
after you make any configuration change such as apply an upgrade or
develop an application. Copy and customize these quick start tests to
pass when using your instance-specific data.

Configuration Management Database (CMDB) quick start tests
require activating the Configuration Management (CMDB) plugin
(com.snc.cmdb) and the CMDB - ATF Tests plugin (com.snc.cmdb.atf).

CMDB BSM: Dependency Views test suite
Test suite to check functionality of Dependency Views APIs.

Test
Description
Release version

CMDB BSM:
Dependency Views

Test functionality of
Dependency Views
APIs. These APIs
retrieve Dependency
Views map and
associated map items
such as context menu
items, for a given CI
sys_id and using itil
user role.

New York

CMDB HEALTH: CMDB Health Dashboard test suite

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

Test suite to check whether CMDB CMDB Health Dashboard
is functional at a basic level.

Test
Description
Release version

CMDB HEALTH: Health
Job Status

Checks whether
any CMDB Health
dashboard jobs, which
were started 30 or
more days ago, are
still in progress.

New York

CMDB HEALTH: CMDB
Health Completeness/
Recommended

Checks whether the
recommended metric
(included in the CMDB
Health completeness
KPI) is fully functional.
This test validates:

• Creation of a health
inclusion rule for the
recommend metric.

• Creation of a
recommended field
that satisfies the
health inclusion rule.

• Validate that the
health inclusion rule
is correctly applied
to a test record with
missing data in the
recommended field.

New York

CMDB IRE: Identification Reconciliation Engine test suite

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

Test suite to check Identification and Reconciliation Engine
(IRE) functionality.

Test
Description
Release version

CMDB IRE: IRE
Validation

Validate CI identifiers
and reconciliation
definitions and check
indexes for CI
identifiers.

Madrid

CMDB IRE:
Reconciliation Rule

Check operations
on a reconciliation
rule, in CI Class
Manager, using itil
and itil_admin roles.
Operations include
create, edit, and
delete a reconciliation
rule.

Also, check for active
and not active setting,
and derived rules.

Paris

CMDB IRE:
Identification Rule

Check operations on
an identification rule,
in CI Class Manager,
using itil and itil_admin
roles. Operations
include create, edit,
and delete an
identification rule.

Also, check for active
and not active setting,
and derived rules.

Paris

CMDB QB: Query Builder test suite

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

Test suite to verify CMDB Query Builder functions such
as create query, read query, and execute query
using two related user roles - cmdb_query_builder and
cmdb_query_builder_read.

Test
Description
Release version

CMDB QB:
Query Builder -
cmdb_query_builder
Role

Verify that
cmdb_query_builder
user role can save
queries, and access
and run all saved
queries, in CMDB
Query Builder.

New York

CMDB QB: Query
Builder -
cmdb_query_builder_r
ead Role

Verify that
cmdb_query_builder_r
ead user role can
access and run all
saved queries, and
cannot save any
query, in CMDB Query
Builder.

New York

CMDB REL: Relationship Editor and Formatter test suite
Test suite to verify functionality of Relationship Editor and
Relationship Formatter.

Test
Description
Release version

CMDB REL
EDITOR:Relationship
Editor

Check addition of
relations to a CI and
deletion of relations
from a CI using itil user
role.

New York

CMDB REL
FORMATTER:Relationshi
p Formatter

Check accuracy
of CI information,
relationship types,
relationships,
associated records

New York

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

52

Zurich ServiceNow AI Platform Capabilities

---
*Page 53*

Test
Description
Release version

such as change
tickets, and settings
such as CMDB
views (relationship
filters), displayed for
a specific CI in
relationship formatter
using itil user role.

CMDB SDK: SDK REST API test suite
Test suite to verify functionality of CMDB SDK Rest APIs.

Test
Description
Release version

CMDB SDK: Query
CMDB Metadata

Test querying CMDB
metadata.
New York

CMDB SDK: Create a
relation for a CI using
REST APIs

Test creation of a
relationship for a CI in
the CMDB using the
CMDB REST APIs.

New York

CMDB SDK: Delete a
relation for a CI using
REST APIs

Test deletion of a
relationship for a CI
using CMDB REST APIs.

New York

CMDB SDK: Create a
CI using REST API

Test creation of a CI
using CMDB REST APIs.
New York

CMDB SDK: Query
CMDB using REST APIs

Test querying the
CMDB using CMDB
REST APIs.

New York

CMDB SDK: Update a
CI using REST APIs

Test updating of a CI
using CMDB REST APIs.
New York

CMDB SDK: Query for
a CI using REST APIs

Test querying a CI
using CMDB REST APIs.
New York

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

Related topics

• Quick start tests

## CMDB glossary

Texts associated with CMDB, such as UI text and core CMDB
documentation, use many terms that are important to understand in the
context of CMDB.

CMDB hierarchy

The CMDB hierarchy is a structured, tree-like, data store where all data
related to CMDB is stored, used, and managed. The following terms are
best explained in the context of the CMDB hierarchy:

Class/Table

Stores data about a specific IT physical, logical, or conceptual item,
such as a computer, in your organization. The CMDB hierarchy contains
many classes where each class stores a set of similar IT infrastructure items
that share similar attributes. Each class in the CMDB hierarchy has a set
number of attributes that are common for the IT items stored in that class,
such as CPU of a computer. A class consists of rows, where each row
represents a single IT item referred to as a Configuration Item (CI). Initially,
a class has no rows until actual IT items are stored in the class using one
of the methods of populating the CMDB. The number of rows (CIs) in a
class dynamically changes, reflecting on the number of IT items of that
type in your organization. A class can be specified as independent or
dependent, which determines the dependency of the class CIs on one
another within the CMDB hierarchy.

Attribute/Column

A class table is defined by a set number of columns, each designed for
storing a specific attribute of IT items using a specific data type such as
string or integer. A column in a class table contains the attribute values of
actual IT items.

Configuration Item (CI)

A basic unit of data, stored as a row in a class, and that represents an
actual IT infrastructure item in your organization, such as a computer.
The number of rows in a class is the number of CIs of that class. All

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

CIs of a specific class, have the same collection of columns, where
each column holds the actual value of the respective attribute for
the IT item. For example, the computer class has an operating system
attribute, therefore a Computer CI has an operating system attribute,
which can have the value of Windows 10.0 for a specific computer in
your organization. Any CI that is being added to a class has all of the
class attributes where you can then enter the actual values of the CI.

CI class/CI type

The actual table name in the instance database that a CI belongs to.
CI type is a friendly name for a CI's class, such as computer, router, or
printer.

Relationship

Type of connection between a CI and either another CI, a user, or a
group. Relationship types are defined twice, once from the perspective
of the child CI and once from the parent CI's perspective. For example,
a parent CI that powers a child CI uses the relationship type Powers::Is
Powered By.

Parent class/Child class

Each class in the CMDB hierarchy is created as a child of another class
(parent class), creating a parent-child relationship between classes. A
child class automatically derives all the columns specified at the parent
class, as well as some other feature-specific definitions. In addition to the
derived attributes, you can add to the child class unique attributes which
don't exist at the parent class.

The CMDB hierarchy is the entire collection of pre-defined and user-
defined classes that serve as a detailed map of all IT items in your
organization, including their attributes and the relationships between
them. Throughout the CMDB hierarchy, classes derive attributes from
each other and are connected by relationships to form a web of classes
in a tree-like structure. The class at the top of the CMDB hierarchy is the
Configuration Item [cmdb_ci] class, which holds the basic attributes that
are common to all classes in the CMDB hierarchy. Hundreds of classes
are fully defined in the base system and are ready to be populated with
CIs that represent actual IT items in your environment.

Key terms

The following terms are key in CMDB:

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

Configuration Management Database (CMDB)

ServiceNow® application that stores the logical configuration of your
organization's infrastructure and gives you full visibility into your IT
environment to support needed services. This application lets you monitor
your network and support stability and best performance.

Dependent CI

CIs that depend on a relationship to another CI and can't exist on
their own in the absence of the dependent relationship. A class can
be independent or dependent, which determines the dependency or
independence of the class CIs.

Independent CI

CIs, such as Server CIs, which exist on their own and aren't dependent on
any other CIs.

Principal Class

Class who's CIs are included in various CI list views. A Principal Class
designation is used to restrict the list of CIs in list views across CMDB
features, to only specific classes that you need.

For more information, see Update class list in the Principal Class filter.

Related table

A table that isn't part of the CMDB hierarchy but which still qualifies as
CMDB data, such as the Serial Number [cmdb_serial_number] table. A
related table doesn't derive from the Configuration Item [cmdb_ci] table,
but has at least one column that references a CMDB CI. Information
about related tables is stored in the Related Entries [cmdb_related_entry]
table.

Duplicate CI

One or more CIs in which key attributes have identical values and can
occur, for example, when multiple discovery sources attempt to import
the same CI. Duplicate CIs in the CMDB interfere with its integrity and
efficiency and therefore, as a general guideline, should be avoided.

For more information, see Detecting duplicate CIs and Duplicate CIs
remediation.

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

Orphan CI

In the context of CMDB Health, an orphan CI is a CI that matches
CMDB Health orphan rules. Orphan CIs are typically CIs that are missing
key attribute values, or key relationships and therefore, as a general
guideline, must be remediated or removed.

In the context of Data Manager, an orphan dependent CI belongs to a
dependent class, and is missing the dependent relationship.

Some scenarios that involve related tables, can result in orphan CIs in
related tables. A CI in a related table can, for example, become orphan
if the referenced CI in the CMDB is deleted.

For more information about orphan CIs in the context of CMDB Health,
seeCMDB Health KPIs and metrics.

For more information about orphan dependent CIs, see Dependent CIs
management.

Related list

Information about additional components contained by a CI, such as
disk drives on a server and the rules that control the behavior of a
network router.

A related list can show, for example, active incidents, problems,
changes, and outages against the CI. For example, a router can
have several Related Lists affected by these filter conditions, including
routing rules, disk drives, interfaces, and network adapters. Only those
components found during the last Discovery appear in these Related
Lists.

CMDB group

Collection of CIs that lets you apply actions collectively to all the CIs that
are members in the group. There are several methods for populating a
CMDB group with CI members. Depending on the group type, you can
populate a CMDB group by manually adding individual CIs, selecting
saved CMDB queries, or building encoded queries in the CMDB group
itself. CI members in a CMDB group of type 'health' can be monitored by
CMDB Health, and a CMDB group of type 'CMDB Workspace' appears in
CMDB Workspace views.

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

For more information, see CMDB groups.

Features, tools, store apps

The following terms are for essential features and tools that CMDB
provides, some of which are implemented as store apps:

CMDB Identification and Reconciliation (IRE)

Feature that provides a centralized framework for identifying and
reconciling data from different data sources as the data is being
imported into the CMDB. Using IRE helps maintain the integrity of the
CMDB and some non-CMDB tables when multiple data sources are used
to create and update CI records. IRE identification processes extensively
use CIs dependency classification.

For more information, see CMDB Identification and Reconciliation (IRE).

CMDB Health

Feature that lets you monitor the health of the CMDB by using health
indicators such as duplicate CIs, required CI fields, and audits, and that
provides a framework for applying standardized CI remediation. CMDB
Health evaluates and aggregates those health indicators into health
scores at the class, health group, and service levels, which are then
shown on dashboards.

For more information, see CMDB Health.

CMDB Query Builder

Tool that lets you build complex infrastructure and service queries that
span multiple CMDB classes, non-CMDB tables, and that involve many
CIs that are connected by different relationships. Query elements are
represented by UI building blocks that you connect and structure on a
canvas to query the CMDB and Service Mapping.

For more information, see CMDB Query Builder.

CMDB Data Manager

An essential comprehensive and integrated solution where you can
create, publish, and manage policies that reflect organizational
needs for data management. CMDB Data Manager supports bulk
management of CI life cycle operations such as deletion, archival, and

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

58

Zurich ServiceNow AI Platform Capabilities

---
*Page 59*

attestation. The CMDB Data Manager lets you automate and govern
those CI life cycle operations to help maintain the CMDB in a healthy and
reliable operational state.

For more information, see Working with CMDB Data Manager.

CI Class Manager

Tool where you can centrally view, create, and edit basic class
definitions. You can also view, create, or edit class settings that are
used in core CMDB functions such as identification, reconciliation, and
essential features such as CMDB Health.

For more information, see CI Class Manager.

CMDB Workspace

A central, comprehensive, and modernized solution that provides access
to a wide range of applications, features, and key CMDB dashboards
and tools to support tasks in your organization. CMDB Workspace lets
you manage, search, explore, and examine the health state and recent
activities in CMDB. CMDB Workspace views and dashboards show
high-priority tasks that require your immediate attention, which were
generated by various CMDB features such as CMDB Health.

For more information, see CMDB Workspace store app.

Service Graph Connectors

Collection of pre-defined integrations that ingest data into the CMDB
from third-party sources such as Tanium, Jamf, and Microsoft SCCM.
Service Graph Connectors help maintain the quality and consistency
of third-party data in your CMDB by verifying that the imported data is
mapped correctly into your CMDB as specified by the Common Service
Data Model (CSDM). Service Graph Connectors are delivered as store
apps.

For more information, see Service Graph Connectors.

CMDB CI Class Models

Store app that adds class models that extend the CMDB class hierarchy,
including class descriptions, identification rules, identifier entries, and
dependent relationships if applicable. You can use the added classes as

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

any other CMDB class in the base system. Applications such as Discovery
and Service Mapping can use these class extensions to populate CIs and
discover various technologies and software.

For more information, see CMDB CI Class Models.

CSDM and the CMDB Data Foundations Dashboards

Store app containing a set of dashboards, complementing each other
that together provide insights into key foundational metrics of your
CMDB and Common Service Data Model (CSDM). In addition, these
dashboards provide recommendations to verify that the CMDB and
CSDM are properly configured for optimal usage and to mitigate any
potential risks.

For more information, see Monitor health in CSDM and CMDB Data
Foundations Dashboards.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

60

Zurich ServiceNow AI Platform Capabilities

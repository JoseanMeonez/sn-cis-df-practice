# zurich_servicenow_ai_platform_capabilities_exploring_cmdb_2026-01-16-12-18-19

*Source: zurich_servicenow_ai_platform_capabilities_exploring_cmdb_2026-01-16-12-18-19.pdf*

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

## Exploring CMDB

Use the topics in this section to learn and explore CMDB concepts, its
predefined tables and the relationships between them.

## Overview of CMDB

The Configuration Management Database (CMDB) creates and
maintains the logical configurations your network infrastructure needs to
support a ServiceNow service.

In CMDB, the logical service configurations are mapped to the physical
layout data of the supporting network and application infrastructure in
each of your respective domains. They track the physical and logical
state of IT service elements and associate incidents to the state of service
elements, which helps in analyzing trends and reducing problems and
incidents.

The configurations are stored in a configuration management database
(ServiceNow CMDB) which consists of entities, called Configuration Items
(CI), that are part of your environment. A CI may be:

• A physical entity, such as a computer or router

• A logical entity, such as an instance of a database

• Conceptual, such as a Requisition Service

In each case, there are attributes about the CI that you want to
maintain, and there is control you want to have over the CI. There
are changes that may need to be made and tracked against the
CI. Also, a CI does not exist on its own. CIs have dependencies and
relationship with other CIs. For example, the loss of disk drives may take
a database instance down, which affects the requisition service that the
HR department uses to order equipment for new employees.

It is this relationship data that makes the CMDB a powerful decision
support tool. Understanding the dependencies and other relationships
among your CIs can tell you, for example, exactly who and what is
affected by the loss of that bank of disk drives. When you find out that
a router has failed, you will be able to assess the effect of that outage.

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

When you decide to upgrade the processor in a server, you can tell who
or what will be affected during the outage.

Configuration items differ from environment to environment because
each customer has unique needs. Details about the exact physical
attributes of a computer may be needed by one customer, but may
represent meaningless data to another. The NOW Platform provides a
mechanism to easily define new classes of configuration items and new
relationships that may exist between CIs. New classes can be defined
that extend other classes. For example, a laptop class exists that extends
the computer class. The computer class itself extends the base CI class.
Customer class extensions are automatically part of the ServiceNow
environment and blend seamlessly into the integration points for other
ITIL processes.

You can for example, set the Used for attribute in the cmdb_ci_server
table to a value such as ‘development’, ‘test’, or ‘production’. These
values indicate the environment that the CI is supporting, and serve as a
way of tracking a CI through its life cycle in a changing environment.

Extended CMDB

In base systems, CMDB provides core functionality for the configuration
management database, including modules for hardware and
configuration items. The separate Extended CMDB plugin includes a
collection of modules for specialized configuration items, such as radio
hardware, test equipment, and voice system hardware.

To extend the CMDB you can activate the following plugins to access the
modules for specialized configuration items.

• CMDB Mainframe (com.snc.cmdb.mainframe)

• CMDB Radio Category (com.snc.cmdb.radio.category)

• CMDB Telecom Category (com.snc.cmdb.telecom.category)

• CMDB Test Equipment (com.snc.cmdb.test.equipment)

CMDB hierarchy and CI Class Manager

Sets of CIs that share attributes are stored in their own class table. All
CMDB tables are connected by relationships and inherit attributes from
each other to form a web of tables referred to as the CMDB hierarchy.

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

Use the CI Class Manager to manage CMDB classes within the CMDB
hierarchy, CMDB Health, and other class-related definitions. For example,
in the CI Class Manager you can view class attributes, class identification
rules, and the list of CIs for a specific class. To view the list of CIs in the
CMDB, you can also enter cmdb_ci_list.do in the filter navigator.

Architecture

Related tables

There are tables that are not part of the CMDB hierarchy but which
still qualify as CMDB data. Related tables, such as the Serial Number
[cmdb_serial_number] table, don't inherent from the Configuration
Item [cmdb_ci] table, but have at least one column that references
a CMDB CI. Related tables are specified in the Related Entries
[cmdb_related_entry] table.

Some scenarios that involve related tables, can result in orphan or
otherwise stale records in related tables. A CI in a related table can,
for example, become orphan if the referenced CI in the CMDB is
deleted. You can use the CMDB Data Manager to create a policy of the
'Delete CMDB Related Entry' policy type, that will cascade-delete that
un-needed related items data. For more information about creating that
CMDB Data Manager policy, see Create a CMDB Data Manager policy.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

5

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 5, 936x440px]*

```


.....       .:::::::::.
.........                        ----------     .-:::::::-.
.:::::::::   ---------------.     -========-     .---------:
.::::::::.   -:..............     :--------:      ..........
..........   -:..............                    .---------:
.::::-::::.  -:...:..:::....:                     ..........
.........   :::::::::::::::.                    .---------:
.:::::::::.
.......      .:::::::::.

:::--::::. .---------. --------=:

```

---
*Page 6*

Localization

Using the Translated Text field type (instead of string) for attributes in
CMDB tables, can reduce overall performance, including performance
of features such as CMDB Health. This is because values in CMDB tables
are dynamic and are likely to change often, and the data itself is
likely to continuously grow. Using the Translated Text field also requires
manual update of related text. The Translated Text field type is typically
effective with static data that doesn't change and doesn't grow. For
more information about field types, see Field types reference.

Roles required

Reading CMDB tables directly requires the cmdb_read role, however
accessing the Configuration module requires the asset, itil, or itil_admin
roles. For viewing CMDB-related records in the user interface, the itil role
is usually sufficient. For updating records and for other manipulation of
records, roles with higher credentials are usually required, as noted in
each procedure throughout the documentation set.

For details about CMDB and other roles, see Base system roles, or see
a feature components topic such as Components installed with CMDB
Workspace.

Related concepts

• CMDB schema model

## CMDB tables descriptions

List of tables in the CMDB in a base system with its name, label, and a
description of the type of information that is stored in the table.

You can extend tables in a base system by installing a CMDB CI
Class Models store app which adds class models that support specific
technologies. These extensions include class definitions, identification
rules, identifier entries, and dependent relationships if applicable. A
CMDB CI Class Models store app can also modify the label of a base
class. For more information, see CMDB CI Class Models.

Class descriptions are integrated into the CI Class Manager and appear
in the Description field on the Basic Info page for a class. For more

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

information about viewing class descriptions, see View and edit class
definitions and metadata.

Table name
Label (display
name)
Table description

cmdb_ci
Configuration
Item

Base configuration
item (CI) table.

cmdb_ci_acc
Accessory

Accessories for
phones, computers,
and so on.

cmdb_ci_ad_controller

Active
Directory
Domain
Controller

Microsoft Active
Directory domain
controller.

cmdb_ci_ad_domain
AD Domain
Microsoft Active
Directory domain.

cmdb_ci_aix_server
AIX Server
Server running the AIX
operating system.

cmdb_ci_alias
Alias

Pseudonym for data
locations, virtual email
addresses, pointers,
and so on.

cmdb_ci_apache_web_serve
r

Apache Web
Server

Server hosting Apache
web server software.

cmdb_ci_appl
Application

Application, which is a
collection of files and
data that deliver a
service and manage
business processes.

cmdb_ci_appl_now_app
ServiceNow
Application

CIs that
Event Management
generates for various

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
Label (display
name)
Table description

components such as
Impact calculator,
which is used to
bind alerts that
are later shown in
maps. Used internally
by self-health when
monitoring internal
health checks for key
components such as
connector instance
status and MID Server
status.

Parent class for
all ServiceNow
applications.

cmdb_ci_application_cluster
Application
Cluster

Logical group of
servers with clustering
software installed on
each of the servers in
the group so that the
group acts like a single
system.

cmdb_ci_application_server_r
esource

Application
Server
Resource

Parent class for
application servers
such as Coldfusion
application server.

cmdb_ci_app_server
Application
Server

A base table for
logical CIs, which
indicate the primary
function of a physical
or virtual server such as
a Tomcat server or a
WebSphere server.

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
Label (display
name)
Table description

cmdb_ci_app_server_compos
er
Composer

Server hosting
IBM WebSphere
Multichannel Bank
Transformation Toolkit.

cmdb_ci_app_server_datapo
wer
Data Power

Server hosting IBM
DataPower Gateway
Secure software.

cmdb_ci_app_server_domino
Domino
Server hosting IBM
Domino software.

cmdb_ci_app_server_hp_ucm
db
HP uCMDB
Server hosting HP
uCMDB software.

cmdb_ci_app_server_java
JavaServer
Server hosting Java
applications.

cmdb_ci_app_server_jb_mod
ule

delivery
Controler

Server hosting an
inner module of JBoss
application (deployed
application).

cmdb_ci_app_server_jboss
JBoss

Server hosting a JBoss
Application Server
(JBoss AS), which
is a cross-platform
Java application
server, open-source
developed by the
JBoss software
company.

cmdb_ci_app_server_jrun
Jrun
Server hosting JRun
applications.

cmdb_ci_app_server_jrun_wa
r
Jrun WAR

Server hosting
the inner module
of a JRun

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
Label (display
name)
Table description

application (deployed
application).

cmdb_ci_app_server_ora_ess
Oracle Essbase
Server

Server hosting Oracle
Essbase software.

cmdb_ci_app_server_ora_ias
Oracle iAS

Server hosting Oracle
internet Application
Server.

cmdb_ci_app_server_ora_ias_
m

Oracle iAS
Web module

Server hosting the
inner module of
the Oracle iAS
application (deployed
application).

cmdb_ci_app_server_remedy
Remedy
HSServer

Server hosting Remedy
HSSServer application.

cmdb_ci_app_server_tomcat
Tomcat
Server hosting Apache
Tomcat software.

cmdb_ci_app_server_tomcat
_war
Tomcat WAR

Server hosting
inner module of
Apache Tomcat
application (deployed
application).

cmdb_ci_app_server_vendav
o

Vendavo
Application
Server

Server hosting
Vendavo Application
Server software.

cmdb_ci_app_server_weblogi
c
BEA Weblogic
Server hosting Oracle
WebLogic Server.

cmdb_ci_app_server_websea
l
Webseal

Server hosting IBM
Tivoli Access Manager
solution.

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
Label (display
name)
Table description

cmdb_ci_app_server_websph
ere

IBM
Websphere

Server hosting IBM
WebSphere software.

cmdb_ci_app_server_wl_mod
ule

WeblogicModu
le

Server hosting inner
module of WebLogic.

cmdb_ci_app_server_ws_ear
Websphere
EAR

Server hosting inner
module of IBM
WebSphere software.

cmdb_ci_app_server_ws_odr
Websphere
ODR LB

Server hosting
WebSphere ODR LB
application.

cmdb_ci_appl_active_directo
ry

Active
Directory
Service

Inner software module
of AD Domain
application.

cmdb_ci_appl_biztalk
BizTalk
Microsoft BizTalk Server
software.

cmdb_ci_appl_biztalk_orch
BizTalk
Orchestration

Inner module of
Microsoft Biztalk Server
software.

cmdb_ci_appl_ca
CA Enterprise
Communicator

CA Enterprise
Communicator
software.

cmdb_ci_appl_ca_dir_server

CA eTrust
Directory
Server

CA eTrust Directory
Server software.

cmdb_ci_appl_ca_ent_man

CA Introscope
Enterprise
Manager

CA introscope
Enterprise Manager
software.

cmdb_ci_appl_ca_id_man
CA Identity
Manager

CA Identity Manager
Server software.

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
Label (display
name)
Table description

Provisioning
Server

cmdb_ci_appl_cisco_call_ma
n

Cisco
CallManager

Cisco CallManager
(Cisco Unified
Communications
Manager) software.

cmdb_ci_appl_cisco_fibre
Cisco Fibre
InterConnect

Cisco Fibre
InterConnect
software.

cmdb_ci_appl_citrix_app

Citrix
Application
Icon

Inner module of Citrix
software.

cmdb_ci_appl_citrix_collector
Citrix Collector
Citrix Collector
software.

cmdb_ci_appl_citrix_xenapp

Citrix XenAPP
or Presentation
Server

Citrix XenApp
software.

cmdb_ci_appl_connectit
Connect-It
Service
Connect-It software.

cmdb_ci_appl_controlm
Control-M
Control-M software.

cmdb_ci_appl_delivery_contr
oler

Delivery
Controler

Application delivery
controller software.

cmdb_ci_appl_doc_brava_pr
oc

Documentum
Brava Job
Processor

Brava (EMC
Documentum) job
processor software.

cmdb_ci_appl_doc_brava_se
rver

Documentum
Brava License
Server

Brava (EMC
Documentum) License
Server software.

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
Label (display
name)
Table description

cmdb_ci_appl_doc_docbase
Documentum
DocBase

Documentum
Docbase software.

cmdb_ci_appl_doc_docbrok
er

Documentum
Broker

Documentum
Docbase broker
software.

cmdb_ci_appl_dot_net
.NET
Application

Microsoft .NET
application software.

cmdb_ci_appl_fastsearch
Fast Search

Microsoft FAST
Search software
(for the SharePoint
collaboration
platform).

cmdb_ci_appl_generic
Generic
Application

Generic application,
which is identified by
the system when there
is an endpoint with
an open port in listen
mode and there is no
pattern for it.

cmdb_ci_appl_glassfish
GlassFish
Oracle GlassFish Server
software.

cmdb_ci_appl_glassfish_war
GlassFish WAR

Inner module
of GlassFish
application (deployed
application).

cmdb_ci_appl_groundwork
Groundwork

Groundwork (open
source) monitoring
software.

cmdb_ci_appl_hp_index
HP SM Index
Server

HP Service Manager
Index Server software.

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
Label (display
name)
Table description

cmdb_ci_appl_hp_operations
HP Operations
Manager

HP Operations
Manager software.

cmdb_ci_appl_hp_qc
HP Quality
Center

HP Quality Center
software.

cmdb_ci_appl_hp_service
HP Service
Manager

HP Service Manager
software.

cmdb_ci_appl_hp_sm_kb

HP SM
KnowledgeBas
e

HP Service Manager
KnowledgeBase
software.

cmdb_ci_appl_ibm_cics
IBM CICS
IBM CICS Transaction
Server software.

cmdb_ci_appl_ibm_ctg
IBM CTG
IBM CICS Transaction
Gateway software.

cmdb_ci_appl_ibm_wmb

IBM
WebSphere
Message
Broker

IBM WebSphere
Message Broker
software.

cmdb_ci_appl_ibm_wmb_liste
ner

IBM WMB Http
Listener

IBM WebSphere HTTP
Listener software.

cmdb_ci_appl_ibm_wmq

IBM MQ
Manager
(Formerly IBM
WebSphere
MQ)

IBM MQ software.

cmdb_ci_appl_ibm_wmq_qu
eue

IBM MQ Queue
(Formerly IBM
WebSphere
MQ Queue)

Inner module of IBM
MQ software.

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
Label (display
name)
Table description

cmdb_ci_appl_itam
ITAM Asset
Center

HP Asset Center
software.

cmdb_ci_appl_mongo_config
_serv

Mongo Config
Server

Mongo Configuration
Server software.

cmdb_ci_appl_mongos
Mongos Server
MongoDB server
software.

cmdb_ci_appl_ms_dynamic_
crm

Dynamic CRM
Component

Microsoft Dynamic
CRM software.

cmdb_ci_appl_msmq
MSMQ

Microsoft Message
Queuing (MSMQ)
software.

cmdb_ci_appl_ora_conc

Oracle
Concurrent
Server

Oracle Concurrent
Server software.

cmdb_ci_appl_ora_disc

Oracle
Discoverer
Engine

Oracle Discoverer
software.

cmdb_ci_appl_ora_disc_ui
Oracle
Discoverer UI

Oracle Discoverer UI
module software.

cmdb_ci_appl_ora_ebs
Oracle ESB
Oracle Enterprise
Service Bus software.

cmdb_ci_appl_ora_forms
Oracle Forms
Engine
Oracle Forms software.

cmdb_ci_appl_ora_forms_ui
Oracle Forms UI Oracle Forms UI
software.

cmdb_ci_appl_ora_fs

Oracle
Fulfillment
Server

Oracle Fulfillment
Server software.

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
Label (display
name)
Table description

cmdb_ci_appl_ora_http
Oracle HTTP
Server

Oracle HTTP Server
software (web tier
of Oracle Fusion
middleware).

cmdb_ci_appl_ora_jms_queu
e

Oracle
Weblogic JMS
Queue

Oracle WebLogic JMS
software.

cmdb_ci_appl_ora_metric_cli
ent

Oracle Metric
Client

Oracle Metric client
software.

cmdb_ci_appl_ora_metric_svr
Oracle Metric
Server

Oracle Metric server
software.

cmdb_ci_appl_ora_notif_svr

Oracle
Notification
Server

Oracle Notification
Server (ONS) software.

cmdb_ci_appl_ora_oacore

Oracle
OACORE
Server

Oracle OACORE
server software.

cmdb_ci_appl_ora_oafm
Oracle OAFM
Server

Oracle OAFM server
software.

cmdb_ci_appl_ora_pm
Oracle Process
Manager

Oracle BPEL Process
Manager server
software.

cmdb_ci_appl_ora_queue
Advanced
Queue Queue

Oracle Advanced
Queuing software.

cmdb_ci_appl_ora_report
Oracle Report
Server

The Oracle Report
Server software.

cmdb_ci_appl_ora_tns
Oracle App
TNS Service

Oracle Application
Express (TNS) listener
software.

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
Label (display
name)
Table description

cmdb_ci_appl_ora_tnslsnr
Oracle TNS
Listener Engine

Oracle Application
Express software.

cmdb_ci_appl_peoplesoft

Peoplesoft
Application
Server

Peoplesoft Application
Server software.

cmdb_ci_appl_rabbitmq
RabbitMQ
RabbitMQ (open
source) software.

cmdb_ci_appl_rabbitmq_clus
ter

RabbitMQ
Cluster

RabbitMQ Cluster
(open source)
software.

cmdb_ci_appl_sap_ascs
SAP ASCS
Application
SAP ASCS software.

cmdb_ci_appl_sap_bo

SAP Business
Objects CMS
Server

SAP Business Objects
CMS server software.

cmdb_ci_appl_sap_bo_sched
uler

SAP BO
BOXIScheduleR
outer

SAP BO
BOXIScheduleRouter
software.

cmdb_ci_appl_sap_bus_obj
SAP Business
Objects

SAP bushiness Object
application.

cmdb_ci_appl_sap_ci
SAP CI
Application

The SAP Central
Instance software.

cmdb_ci_appl_sap_di
SAP DI
Application

Oracle Development
Infrastructure (DI)
software.

cmdb_ci_appl_sap_ers
SAP ERS
Application

Oracle Evaluated
Receipt Settlement
(ERS) software.

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
Label (display
name)
Table description

cmdb_ci_appl_sap_hana_db
SAP Hana Db
SAP HANA software.

cmdb_ci_appl_sap_jc
SAP JC
Application

SAP JC (java
application) software.

cmdb_ci_appl_sap_scs
SAP SCS
Application

SAP SCS (central
services) software.

cmdb_ci_appl_sendmail
Sendmail
Sendmail (open
source) software.

cmdb_ci_appl_sharepoint
SharePoint
Microsoft SharePoint
software.

cmdb_ci_appl_sp_service
SharePoint
Service

Microsoft Windows
Sharepoint Services
(WSS) software.

cmdb_ci_appl_tibco_hawk
Tibco Hawk
TIBCO Hawk software.

cmdb_ci_appl_tibco_matrix
ActiveMatrix
Business Works

TIBCO ActiveMatrix
BusinessWorks
software.

cmdb_ci_appl_tibco_matrix_p
roc

ActiveMatrix
Business Works
Process

TIBCO ActiveMatrix
BusinessWorks Process
software.

cmdb_ci_appl_tibco_messag
e

Tibco Enterprise
Message
Service

TIBCO Enterprise
Message Service
software.

cmdb_ci_appl_tibco_queue
EMS Queue

Tibco EMS (Enterprise
Message Service)
Queues software.

cmdb_ci_appl_tuxedo
Tuxedo

Tuxedo software
(middleware
transactions for
UNIX, Extended

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
Label (display
name)
Table description

for Distributed
Operations).

cmdb_ci_appl_tuxedo_portal
Tuxedo Portal
Tuxedo portal
software.

cmdb_ci_appl_vign_content_
svr

Vignette
Content
Management
Server

Vignette (Open
Text Corp) Content
Management Server
software.

cmdb_ci_appl_vignette_sear
ch

Vignette
Search Starter

Vignette (Open Text
Corp) Search Server
software.

cmdb_ci_appl_vignette_serve
r
Vignette Server
Vignette (Open Text
Corp) Server software.

cmdb_ci_appl_weblogic_jms
Weblogic JMS
Server

WebLogic JMS
software.

cmdb_ci_appl_weblogic_lb
Weblogic LB
WebLogic Server load
balancer software.

cmdb_ci_appl_weblogicmod
ule

Weblogic
Module Server

WebLogic Server
software.

cmdb_ci_appl_websphere_p
ortal

Websphere
Portal

WebSphere Portal
software.

cmdb_ci_appl_wmb
WMB Flow
WebSphere Message
Broker software.

cmdb_ci_application_cluster
Application
Cluster

Logical cluster
of application-tier
servers.

cmdb_ci_application_softwar
e

Application
Software
Computer program
designed to perform a

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
Label (display
name)
Table description

group of coordinated
functions, tasks, or
activities for the
benefit of the user.

An extension of
the Software table,
providing installed
software information
(not a running
process).

cmdb_ci_ats_power_eq
Automatic
Transfer Switch

Electrical power switch
that switches a load
between two sources.

cmdb_ci_availability_set
Availability Set

Logical grouping
of virtual machines
running on Microsoft
Azure platform.

cmdb_ci_base_rpa_process
Base Bot
Process

Business reason,
process type, and
schedule.

cmdb_ci_base_rpa_robot
Base Robot

Machine where robot
is running, state, and
type.

cmdb_ci_batch_job
Batch Job

A computer program
or set of programs
processed in batch
mode.

cmdb_ci_aws_datacenter
AWS
datacenter

Logical representation
of an Amazon Web
Services datacenter.

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
Label (display
name)
Table description

cmdb_ci_azure_datacenter
Azure
datacener

Logical representation
of a Microsoft Azure
datacenter.

cmdb_ci_business_app
Business
Application

All business
applications.

cmdb_ci_business_process
Business
Process

A process that is
owned and carried
out by the business
and contributes to the
delivery of a product
or business service to a
business customer.

cmdb_ci_chassis_server
Server Chassis

A metal structure that
is used to house or
physically assemble
servers in various
different form factors.

cmdb_ci_cim_profile
CIM Profiles
CIM Profiles (UML).

cmdb_ci_cim_server
CIM Server
Server hosting CIM
profiles.

cmdb_ci_circuit
Circuit
Electrical circuits
information.

cmdb_ci_cloud_database
Cloud
Database

Database which runs
on a cloud computing
platform.

cmdb_ci_cloud_ip_address
Cloud IP
Address

Web server which runs
on a cloud computing
platform.

cmdb_ci_cluster
Cluster

Logical group of
computing resources
bound together by

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
Label (display
name)
Table description

software to function as
one logical computing
resource.

cmdb_ci_cluster_node
Cluster Node

Single computing
resource which is
logically/operationally
bound into a cluster.

cmdb_ci_cluster_resource
Cluster
Resource

System object that
is a set or grouping
of cluster resources
that are used to
manage events that
occur in a clustered
environment.

cmdb_ci_cluster_vip
Cluster Virtual
IP

Cluster VIP
information.

cmdb_ci_cmp_price_product
_base

Cloud Product
Price Base

Used to calculate the
approximate monthly
cost of running a stack
built on Virtual Servers
in cloud environment:

• Cloud Price Base:
Common price base
to store pricing info
of all the resources
of all the supported
clouds.

• Cloud Price Product
Base: Base table to
store the common
attributes of all the
pricing resources.

• VM Instance Price:
Specific table that

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
Label (display
name)
Table description

extends the Cloud
Price Product base
to store the VM
specific product info
of all the supported
clouds.

Parent class for cloud
product prices such as
VM instance price.

cmdb_ci_cmp_resource
Cloud
Resource

Generic cloud
resources.

cmdb_ci_comm
Communicatio
n Device

Communication
devices information. A
choice list containing
devices such as
cellphone, phone,
conference phone,
and Wi-Fi.

cmdb_ci_computer
Computer

An extension of
the Hardware table,
capturing computer
properties.

cmdb_ci_computer_room
Computer
Room

Logical representation
of a computer room.

cmdb_ci_config_automation_
server

Management
Server

Dev Ops tools such as
Chef and Puppet, that
are used to manage
server configurations.

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
Label (display
name)
Table description

Parent class
for application
management servers.

cmdb_ci_config_file
Configuration
file

Configuration files
which establish the
parameters and initial
settings for some
computer programs.

cmdb_ci_crac
Computer
Room AC

Air conditioning units
used to cool data
centers.

cmdb_ci_csu_dsu_network
CSU/DSU

Digital-interface
device used to
connect networking
equipment to a digital
circuit.

cmdb_ci_database
Database

Organized collection
of data such as the set
of files where data is
stored, the reason for
a database, and the
metadata about the
data.

cmdb_ci_datacenter
Data Center

Facility used to house
computer systems
and associated
components, such as
telecommunications
and storage systems.
It generally includes
redundant or
backup power
supplies, redundant
data communications
connections,

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
Label (display
name)
Table description

environmental controls
(such as air
conditioning and
fire suppression),
and various security
devices.

cmdb_ci_datapower_server
Data Power
Hosting Server

Server running IBM
DataPower Gateway
software.

cmdb_ci_datastore
Datastore

Datastores are like file
systems, abstracting
the physical storage
and providing a
model for storing
files. The child
class represents the
VMware specific
Datastore.

Parent class for
VMWare datastore
object types such as
vCenter Datastores.

cmdb_ci_db_catalog
Database
Catalog

Metadata which
defines database
objects such as base
tables, views (virtual
tables), synonyms,
value ranges, indexes,
users, and user
groups, for a specific
database instance.

cmdb_ci_db_db2_catalog
DB2 Catalog
Database catalog for
DB2 database.

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
Label (display
name)
Table description

cmdb_ci_db_db2_instance
DB2 Instance
Instance of a DB2
database.

cmdb_ci_db_hbase_instance
HBase Instance
Instance of an HBase
database.

cmdb_ci_db_instance
Database
Instance

Software and memory
used to manipulate
data in a database.

cmdb_ci_db_mongodb_insta
nce

MongoDB
Instance

Instance of a
MongoDB database.

cmdb_ci_db_mssql_analysis

SQL Server
Analysis
Services

Microsoft SQL Server
Analysis Services
software.

cmdb_ci_db_mssql_catalog
MSFT SQL
Catalog

Database catalog for
a specific instance
of a Microsoft SQL
database.

cmdb_ci_db_mssql_instance
MSFT SQL
Instance

Microsoft SQL
instance.

cmdb_ci_db_mssql_int_job

SQL Server
Integration
Services Job

Scheduled job to run a
SQL Server Integration
Service package.

cmdb_ci_db_mssql_integratio
n

SQL Server
Integration
Services

MSQL Server
Integration Services
software.

cmdb_ci_db_mssql_reporting

SQL Server
Reporting
Services

SQL Server software
used for server-based
reporting generation.

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
Label (display
name)
Table description

cmdb_ci_db_mysql_catalog
MySQL
Catalog

Database catalog for
a specific instance of
a MySQL database.

cmdb_ci_db_mysql_clustermg
node

MySQLClusterM
GMNode

MySQL primary
administrative
interface to a running
cluster.

cmdb_ci_db_mysql_clusterno
de

MySQLClusterD
ataNode

Summary table used in
the [ndbd] or [ndbd
default] sections of
a config.ini file for
configuring MySQL
Cluster data nodes.

cmdb_ci_db_mysql_instance
MySQL
Instance

Instance of a MySQL
database.

cmdb_ci_db_ora_catalog
Oracle
Catalog

Database catalog for
a specific instance of
an Oracle database.

cmdb_ci_db_ora_instance
Oracle
Instance

Instance of an Oracle
database.

cmdb_ci_db_ora_listener

Oracle
Database
Listener

Process that runs on
an Oracle Database
Server.

cmdb_ci_db_postgresql_insta
nce

PostgreSQL
Instance

Instance of a
PostgreSQL database.

cmdb_ci_db_syb_catalog
Sybase
Catalog

Database catalog for
a specific instance of
a Sybase database.

cmdb_ci_db_syb_instance
Sybase
Instance

Instance of a Sybase
database.

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
Label (display
name)
Table description

cmdb_ci_desktop_software
Desktop
Software

Software used on
desktops and laptops.

cmdb_ci_dir_policy_server
Policy Server

Policy server, which
provides a security
component of
a policy-based
network that provides
authorization services
and facilitates tracking
and control of files.

cmdb_ci_dir_site_minder_serv
er
Site Minder
Server running
SiteMinder software.

cmdb_ci_directory_ad_forest
AD Forest
Active Directory forest.

cmdb_ci_directory_ha
HA Proxy
HAProxy software.

cmdb_ci_directory_iifp
IIFP

Identity Identification
Feature Pack (Active
Directory) software.

cmdb_ci_directory_ldap
LDAP DB

LDAP (Lightweight
Directory Access
Protocol) database
software.

cmdb_ci_directory_server
Directory
Server

Server running LDAP
software.

cmdb_ci_disk
Disk

General category
of data storage
mechanisms.

cmdb_ci_disk_partition
Disk Partition

Sections of a disk
separated so that
information in each

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
Label (display
name)
Table description

section can be
managed separately.

cmdb_ci_display_hardware
Display
Hardware

Hardware used to
display information in
visual form.

cmdb_ci_dns_alias
DNS Alias

Synonym for the host
used to resolve DNS
addresses.

cmdb_ci_dns_name
DNS Name
Primary DNS names.

cmdb_ci_docker
Docker
Container

Docker containers (a
runtime instance of a
docker image).

cmdb_ci_docker_engine
Docker Engine

Docker software
for running and
managing Docker
containers.

cmdb_ci_docker_image
Docker Image

Docker images.
Ordered collection
of root filesystem
changes and
the corresponding
execution parameters
for use within a
container runtime.

cmdb_ci_docker_image_tag
Docker Image
Tag

Docker tag, which is
a label applied to a
Docker image in a
repository.

cmdb_ci_docker_local_imag
e

Docker Local
Image

Locally managed
Docker image.

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
Label (display
name)
Table description

cmdb_ci_drs_vm_config
DRS VM Config

Distributed Resource
Scheduler (DRS)
behavior for the VMs
in the vCenter that
override the cluster
behavior.

cmdb_ci_ec2_instance

EC2 Virtual
Machine
Instance

Virtual machine
running in the Amazon
Elastic Compute
Cloud (EC2) platform.

cmdb_ci_email_server
Email Server
Server running email
software.

cmdb_ci_email_server_jes
JES

Server running
JES software (multi-
featured hybrid
MTA/MDA server).

cmdb_ci_endpoint
Endpoint

Endpoint, which
represents the entry
point to a service, a
process, or a queue
or topic destination
in service-oriented
architecture.

cmdb_ci_environment
Environment

Logical grouping
of hardware and
software used to
develop, test, and
deliver computing
services. For example:
development, test,
quality assurance, and
production.

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
Label (display
name)
Table description

cmdb_ci_esx_resource_pool
ESX Resource
Pool

VMware set of
physical resources.

cmdb_ci_esx_server
ESX Server

Physical ESX server
running the VMware
ESXi operating system.

cmdb_ci_exchange_backen
d

ExchangeBack
EndServer

Server running
Exchange software.

cmdb_ci_exchange_cas

Exchange
Client Access
Server

Server running
Exchange software
providing client
access services.

cmdb_ci_exchange_edge_tr
ansport_server

Exchange
Edge Transport
Server

Server running
Exchange Edge
Transport software.

cmdb_ci_exchange_frontend
ExchangeFront
EndServer

Server running
Exchange software.

cmdb_ci_exchange_hub
ExchangeHub

Server running
Exchange Hub
software.

cmdb_ci_exchange_hub_tran
sport_server

Exchange Hub
Transport
Server

Server running
Exchange Hub
software providing
transport services.

cmdb_ci_exchange_mailbox
Exchange
MailBox

Exchange email
account.

cmdb_ci_exchange_mailbox_
server

Exchange
Mailbox Server

Server running
Exchange software
providing client
access services.

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
Label (display
name)
Table description

cmdb_ci_exchange_service_
component

Exchange
Service
Component

Exchange Service
Component software.

cmdb_ci_facility_hardware
Facility
Hardware

Base class for
hardware used to
facilities services such
as electric, water,
sewer, air, and
security.

cmdb_ci_fc_disk
Fibre Channel
Disk

Base table for fibre
channel disk.

cmdb_ci_fc_export
Fibre Channel
Export

Storage volume
exported by a storage
server via Fibre
Channel protocol.

cmdb_ci_fc_port
Fibre Channel
Port

Fibre Channel port on
a storage server, FC
switch, or on a host's
HBA.

cmdb_ci_fddi_network
FDDI Cards
Fiber Distributed Data
Interface cards.

cmdb_ci_file_system
File System

File system information
for a server, capturing
details such as mount
point, capacity, and
type of file system.

cmdb_ci_file_system_nfs
NFS File system

Extension of File
System, which
provides NFS file
system information.

cmdb_ci_file_system_smb
SMB File system
Extension of File
System, which

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
Label (display
name)
Table description

provides SMB file
system information.

cmdb_ci_firewall_network
Firewall
Hardware
Firewall hardware.

cmdb_ci_ftp_server
FTP Server
Server providing FTP
services.

cmdb_ci_fuel_tank
Fuel Tank
Fuel tank.

cmdb_ci_generator_power_e
q

Power
Generator
Power generator.

cmdb_ci_group
Group
Logical group of CIs.

cmdb_ci_hardware
Hardware
Base class for
hardware.

cmdb_ci_host_cluster
Host Cluster

Cloud agnostic way
of representing a
group of hosts
as a cluster. The
child class represents
VMware vCenter
Cluster specific details.

Parent class for
VMWare host cluster
object types such as
vCenter Clusters.

cmdb_ci_hpux_server
HPUX Server
Server running HPUX
software.

cmdb_ci_hub_network
Hub Hardware
Physical network hub.

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
Label (display
name)
Table description

cmdb_ci_hvac
HVAC
Equipment

Heating, ventilation,
and air conditioning
equipment.

cmdb_ci_hyper_v_cluster
Hyper-V Cluster
Cluster of the Hyper-V
servers.

cmdb_ci_hyper_v_instance

Hyper-V Virtual
Machine
Instance

Hyper-V virtual
machine instance. This
table extends the
generic Virtual
Machine Instance
[cmdb_ci_vm_instanc
e] table.

cmdb_ci_hyper_v_network
Hyper-V Virtual
Network

Hyper-V virtual
network.

cmdb_ci_hyper_v_object
Hyper-V Object Base class for all
Hyper-V objects.

cmdb_ci_hyper_v_resource_p
ool

Hyper-V
Resource Pool
Hyper-V resource pool.

cmdb_ci_hyper_v_rpool_com
p

Hyper-V
Resource Pool
Component

Resource pool
component belonging
to resource pool.

cmdb_ci_hyper_v_server
Hyper-V Server
Server running Hyper-V
software.

cmdb_ci_ids_network

Intrusion
Detection
System

Security intrusion
detection systems.

cmdb_ci_iisdirectory
IIS Virtual
Directory

Virtual Directory in IIS
Manager.

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
Label (display
name)
Table description

cmdb_ci_imaging_hardware
Imaging
Hardware

Hardware used
to create electronic/
physical images.

cmdb_ci_inetinfo
Inetinfo service
Inetinfo service of IIS
application.

cmdb_ci_inf_software
Infrastructure
Software

Base class for
enterprise software or
programs specifically
designed to help
business organizations
perform basic tasks
such as workforce
support, business
transactions and
internal services, and
processes.

cmdb_ci_information_object
Information
Object

Types of information
that a business
application or any
other entity handles.

For example:
'Employee Salary
Data', Employee
Personal Data', and
'Sales Data'.

cmdb_ci_installed_bundles
Installed
Bundles

Extension of the Virtual
Machine Object
[cmdb_ci_vm_object]
table, which
represents bundles of
installed software.

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
Label (display
name)
Table description

cmdb_ci_infra_service
Infrastructure
Service

IT services
which support
providing computing
infrastructure.

cmdb_ci_infra_service_ldap
LDAP Service
Running LDAP service.

cmdb_ci_ip_address
IP Address
IP address.

cmdb_ci_ip_device
IP Device
Base class for devices
with an IP address.

cmdb_ci_ip_firewall
IP Firewall
Firewall hardware.

cmdb_ci_ip_network
IP Network

IP network information
capturing details such
as subnet, router, and
router_interface_type.

cmdb_ci_ip_phone
IP Phone
IP-enabled (VOIP)
phone.

cmdb_ci_ip_router
IP Router

Specialization of
the Network Gear
[cmdb_ci_netgear]
table.

cmdb_ci_ip_server
IP Server
Server hardware.

cmdb_ci_ip_service
IP Service
Instance

Base table for IP
services running on a
server such as Unix
daemon or Windows
service.

cmdb_ci_ip_switch
IP Switch

Specialization of
the Network Gear
[cmdb_ci_netgear]
table.

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
Label (display
name)
Table description

cmdb_ci_iplanet_web_server
Iplanet Web
Server

Server running Oracle
iPlanet Web Server
(OiWS) software.

cmdb_ci_isam_server
ISAM Server
Server running ISAM
software.

cmdb_ci_iscsi_disk
iSCSI Disk
Host mount of an iSCSI
disk.

cmdb_ci_iscsi_export
iSCSI Export

Storage volume
exported by a storage
server via iSCSI.

cmdb_ci_kubernetes_compo
nent

Kubernetes
Component

Kubernetes cluster,
ingress, namespace,
node, pod, service,
volume, and
workload. Also
represents open
shift build conf,
deployment conf,
docker images
repository, group,
images, stream,
project, route, and
user.

Parent class
for Kubernetes
components such as
Pods and Clusters.

cmdb_ci_kvm
KVM

Hypervisor that
manages kernel-
based virtual
machines (KVMs).

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
Label (display
name)
Table description

cmdb_ci_kvm_network
Network
KVM Virtual network.

cmdb_ci_kvm_object
KVM Object
Base object for all
KVM objects.

cmdb_ci_kvm_storage_pool
Storage Pool
KVM storage pool.

cmdb_ci_kvm_storage_volum
e

Storage
Volume
KVM storage volume.

cmdb_ci_kvm_vm_instance

KVM Virtual
Machine
Instance

Virtual machine
instance running on a
KVM hypervisor.

cmdb_ci_lb
Load Balancer
Server functioning as a
load balancer.

cmdb_ci_lb_a10
A10 Load
Balancer

Server functioning as
an A10 load balancer.

cmdb_ci_lb_ace
ACE

Server functioning
as an ACE load
balancer.

cmdb_ci_lb_alteon
Alteon

Server functioning
as an Alteon load
balancer.

cmdb_ci_lb_appl
Load Balancer
Application

Application
that provides
load balancing
functionality.

cmdb_ci_lb_backend_server
LB Backend
Server

Server functioning as
a backend load
balancer.

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
Label (display
name)
Table description

cmdb_ci_lb_bigip
F5 BIG-IP

Server functioning as
an F5 BIG-IP load
balancer.

cmdb_ci_lb_cisco_csm
Cisco CSM

Server functioning as
a Cisco CSM load
balancer.

cmdb_ci_lb_cisco_css
Cisco CSS

Server functioning as
a Cisco CSS load
balancer.

cmdb_ci_lb_f5_gtm
F5 BigIP GTM

Server functioning as
an F5 BigIP GTM load
balancer.

cmdb_ci_lb_f5_ltm
F5 BigIP LTM

Server functioning as
an F5 BigIP LTM load
balancer.

cmdb_ci_lb_haproxy
HAProxy Load
Balancer

Server functioning as
an HA Proxy load
balancer.

cmdb_ci_lb_isa
ISA Server
Server functioning as
an ISA load balancer.

cmdb_ci_lb_modjk
Modjk Load
Balancer

Server functioning as
a Cisco CSM load
balancer.

cmdb_ci_lb_modproxy
ModProxy
Load Balancer

Server functioning as
a ModProxy load
balancer.

cmdb_ci_lb_netscaler
Citrix Netscaler

Server functioning as
a Citrix Netscaler load
balancer.

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
Label (display
name)
Table description

cmdb_ci_lb_network
Network Load
Balancer

Server performing
network load
balancing.

cmdb_ci_lb_nginx
Nginx Load
Balancer

Server functioning
as an Nginx load
balancer.

cmdb_ci_lb_pool
Load Balancer
Pool

Collection of host-to-
port mappings to be
balanced.

cmdb_ci_lb_pool_member
Load Balancer
Pool Member

Host-to-port mapping
of a request to be
balanced.

cmdb_ci_lb_radware
Radware Load
Balancer

Server functioning as
a Radware load
balancer.

cmdb_ci_lb_service
Load Balancer
Service

Virtual service that
the device balances
by forwarding requests
to members within a
pool.

cmdb_ci_lb_template
Load Balancer
Template

Load balancer
template which
contains load
balancer-related
configuration settings
for a specific type of
network traffic.

cmdb_ci_lif
LIF
Logical interface.

cmdb_ci_lb_vlan
Load Balancer
VLAN
Virtual LAN segment.

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
Label (display
name)
Table description

cmdb_ci_linux_server
Linux Server
Server running Linux
software.

cmdb_ci_logical_datacenter
Logical
Datacenter

VMware vCenter
logical datacenter.

cmdb_ci_lpar
Logical
Partition

Logical partition,
commonly called an
LPAR, is a subset
of a computer's
hardware resources,
virtualized as a
separate computer.

cmdb_ci_lvm_pool
LVM Pool

Linux Volume
Manager storage
pool.

cmdb_ci_lvm_pool_member
LVM Pool
Member

Linux Volume
Manager storage pool
member.

cmdb_ci_mainframe
IBM Mainframe
IBM large-scale
computer system.

cmdb_ci_mainframe_hardwa
re

Mainframe
Hardware

The hardware
components of a
large-scale computer
system.

cmdb_ci_mainframe_lpar
IBM Mainframe
LPAR

Logical partition,
which is commonly
called an LPAR,
and is a subset
of a mainframes
computer's hardware
resources, virtualized
as a separate
computer.

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
Label (display
name)
Table description

cmdb_ci_memory_module
Memory
Module

Circuit board that
provides for memory
storage.

cmdb_ci_mfp_printer
Multi-function
Printer

Physical device with
scan, copy, and fax
capabilities.

cmdb_ci_microsoft_iis_web_s
erver

Microsoft iis
Web Server

Server running Internet
Information Services
(IIS) for Windows
software.

cmdb_ci_modem_network
Modem
Hardware

Physical modem
hardware.

cmdb_ci_mpio_pool
Multipath IO
Pool

Multipath IO pool,
representing multiple
redundant paths to
storage.

cmdb_ci_mpio_pool_group
Multipath IO
Pool Group

Group of multipath IO
pools.

cmdb_ci_mpio_pool_path
Multipath IO
Pool Path

Single path in an MPIO
pool.

cmdb_ci_msd
Mass Storage
Device

Physical storage
device.

cmdb_ci_nas_file_system
NAS File System

Extension of
the File System
[cmdb_ci_file_system]
table, representing
network attached
storage.

cmdb_ci_nat_gateway
NAT Gateway
Functionality for NAT
gateway.

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
Label (display
name)
Table description

cmdb_ci_netapp_cdot
NetApp CDOT

Functionality of
NetApp Clustered
Data OnTap operating
system

cmdb_ci_netapp_datacenter
NetApp
Datacenter

NetApp logical
datacenter.

cmdb_ci_netapp_svm
NetApp SVM
NetApp Storage
Virtual Machine.

cmdb_ci_netapp_volume
NetApp
Volume

NetApp FlexVol
storage volume.

cmdb_ci_net_app_server

Network
Appliance
Hardware

Server configured
to perform as a
networking appliance.

cmdb_ci_netgear
Network Gear

Extension of the
Hardware table, that
captures network
equipment such as
router, switch, hub,
gateway, and bridge.

cmdb_ci_netware_server
Netware Server
Server running
NetWare software.

cmdb_ci_network
Cloud Network
VMware vCenter
cloud network.

cmdb_ci_network _acl
Network ACL
Network access
control list (ACL).

cmdb_ci_network_acl_rule
Network ACL
Rule

Rule used to control
networking access
rights.

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
Label (display
name)
Table description

cmdb_ci_network_adapter
Network
Adapter

Network adapter
hardware.

cmdb_ci_network_policy_gro
up

Network Policy
Group

Group policy
consumed by Active
Directory services.

cmdb_ci_network_template
Network
Template

OpenStack file used to
configure a network.

cmdb_ci_nic

Cloud Mgmt
Network
Interface

Virtual network
adapter.

cmdb_ci_nginx_web_server
Nginx Web
Server

Server running Nginx
software.

cmdb_ci_openstack_datace
nter

OpenStack
Datacenter

OpenStack logical
datacenter.

cmdb_ci_optical_transport

(Installed with the
com.snc.cmdb.telecom.cate
gory plugin)

Fiber Optic
Equipment

Fiber optics which are
used for long-distance
and high-performance
data networking.
Fiber optics are
commonly used in
telecommunication
services such as
internet, television,
and telephones.

Child class of Transport
Hardware and parent
class for telecom
fiber optic equipment
such as optical

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
Label (display
name)
Table description

multiplexers and
terminal equipment.

cmdb_ci_oslv_container

Operating-
system-level
Virtualization
Container

Containers (a runtime
instance of a docker
image).

cmdb_ci_oslv_engine

Operating-
system-level
Virtualization
Engine

Software for running
and managing
containers.

cmdb_ci_oslv_image

Operating-
system-level
Virtualization
Image

Container images.
Ordered collection
of root filesystem
changes and
the corresponding
execution parameters
for use within a
container runtime.

cmdb_ci_oslv_image_tag

Operating-
system-level
Virtualization
Image Tag

Container tag, which
is a label applied to a
container image in a
repository.

cmdb_ci_oslv_local_image

Operating-
system-level
Virtualization
Local Image

Locally managed
container image.

cmdb_ci_osx_server
OS/X Server
Server running OS/X
operating system.

cmdb_ci_os_template
Image

Software files used
to create a new
instance of a compute
resource such as

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
Label (display
name)
Table description

server, desktop, virtual
machine, and virtual
router.

cmdb_ci_outofband_device
Out-of-Band
Device

Hardware used to
perform out-of-band
management.

cmdb_ci_patches
Patch

Patch software to
fix or improve a
computer program or
its supporting data.

cmdb_ci_pc_hardware
Personal
Computer

Multi-purpose
electronic computer
whose size,
capabilities, and price
make it feasible for
individual use.

cmdb_ci_pcf_component
CloudFoundry
Component

Cloud Foundry
provides a highly
efficient, modern
model for cloud native
application delivery
on top of Kubernetes.
Component
represents application,
domain, organization,
quota, routes, service,
service plan, space,
and space instances.

Parent class for
price base of cloud
products such as
virtual machines.

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
Label (display
name)
Table description

cmdb_ci_pdu
PDU
Power distribution unit
(PDU).

cmdb_ci_pdu_outlet
Outlet
Single outlet of a PDU.

cmdb_ci_peripheral
Computer
Peripheral

Various computer
peripherals such as
monitor, docking
station, KVM switch,
projector, scanner,
keyboard, mouse, and
UPS.

cmdb_ci_personal_printer
Personal Printer

Printer whose
size,capabilities and
price make it feasible
for individual use.

cmdb_ci_plotter
Plotter

Printer with capabilities
to print large vector
graphic images.

cmdb_ci_power_eq
Power
Equipment

Hardware used to
manage electrical
power.

cmdb_ci_port
Port

Interface between a
computer and other
electronic devices.

cmdb_ci_port_group
Port Group
Group of ports on a
virtual switch.

cmdb_ci_print_queue
Puppet Primary

Print queue, which
is a list of printer
output jobs held in
a reserved memory
area, including the
most current status of

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

Table name
Label (display
name)
Table description

all active and pending
print jobs.

cmdb_ci_printer
Printer

Physical device which
makes a persistent
human-readable
representation of
graphics or text
on paper or similar
physical media.

cmdb_ci_printing_hardware
Printing
Hardware

Physical device which
makes a persistent
human-readable
representation of
graphics or text
on paper or similar
physical media.

cmdb_ci_puppet_master

Server running
PuppetMaster
application.

cmdb_ci_qtree
Qtree
Qtree file system.

cmdb_ci_qualifier
Qualifier

Relation qualifier
CIs which contain
important information
about CI relationships.

In a relation
qualifier, you can
annotate arbitrary
unique information
about the relationship
between two CIs. You
can define multiple
qualifiers for a single
relationship, resulting
in a qualifier chain.

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

Table name
Label (display
name)
Table description

However, there can
be only a single
qualifier chain for a
specific relationship
type between two CIs.

Parent class for
the various relation
qualifier types such
as EntryPoint Markers
and Boundary
Connections.

cmdb_ci_rack
Rack

Datacenter racks
containing details
such as rack units, rack
units in use, and power
consumption.

cmdb_ci_raid
RAID

Storage pool using
RAID mechanisms to
ensure data integrity.

cmdb_ci_raid_member
RAID Member

Member of storage
pool using RAID
mechanisms.

cmdb_ci_resource_group
Resource
Group

Resource pool is a
logical abstraction for
flexible management
of resources.

cmdb_ci_sa_scaling_pol_bas
e
Scaling Policy

Parent class for virtual
machines scaling
policy options such as
simple and dynamic.

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

Table name
Label (display
name)
Table description

cmdb_ci_san
Storage Area
Network

Network which
provides access to
block level storage.

cmdb_ci_san_connection
SAN
Connection

Connection in a SAN
network.

cmdb_ci_san_disk
SAN Disk

Base table for
the iSCSI Disk
[cmdb_ci_iscsi_disk]
and the Fibre Channel
Disk [cmdb_ci_fc_disk]
tables.

cmdb_ci_san_endpoint
SAN Endpoint
One end of a SAN
connection.

cmdb_ci_san_export
SAN Export

Base table for
the iSCSI Export
[cmdb_ci_iscsi_export]
and the Fibre
Channel Export
[cmdb_ci_fc_export]
tables.

cmdb_ci_san_fabric
SAN Fabric

Hardware that
connects workstations
and servers to storage
devices in a SAN.
Referred to as a
"fabric."

cmdb_ci_san_zone
SAN Zone

Subset of SAN storage
that certain users are
restricted to.

cmdb_ci_san_zone_alias
SAN Zone Alias
Collection of SAN zone
members.

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

Table name
Label (display
name)
Table description

cmdb_ci_san_zone_alias_me
mber

SAN Zone Alias
Member

M2m relationship
between SAN zone
aliases and SAN zone
members.

cmdb_ci_san_zone_member
SAN Zone
Member

Ports and devices in a
SAN zone.

cmdb_ci_san_zone_set
SAN Zone Set
Collection of SAN
zones.

cmdb_ci_scanner
Scanner

Hardware used to
create digital imagine
of paper documents.

cmdb_ci_server
Server
Base class for all types
of servers.

cmdb_ci_server_snapshot
Server
Snapshot

Server snapshot, which
is the state of a system
at a particular point in
time.

cmdb_ci_service
Service

IT Service that directly
supports a Business
Process (ITIL).

cmdb_ci_service_auto
Service
Instance

Services that can be
monitored by the
system, which in the
base system, includes
only application
services. If Service
Mapping is activated,
there can also
be records for
dynamic CI groups. If
Event Management is
activated, there can

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

Table name
Label (display
name)
Table description

be records for alert
groups.

cmdb_ci_service_business
Business
Service

Business services are
published to business
users and typically
underpin one or more
business capabilities.
Business services are
often orderable by
business users.

cmdb_ci_service_discovered

Mapped
Application
Service

Application services,
created by the
Manual service
population method.
For each application
service, there is a
container CI record
that models the
application service.

cmdb_ci_service_technical

Technology
Management
Service
(formerly
Technical
Service)

Technology
management services
are published to
service owners and
typically underpin one
or more business
services. A technology
management service
may have an
operational view
made up of one
or more technical
management
offerings.

cmdb_ci_solaris_instance

Solaris Virtual
Machine
Instance

Virtual machine
instance running
Solaris software.

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

Table name
Label (display
name)
Table description

cmdb_ci_solaris_server
Solaris Server
Physical server running
Solaris software.

cmdb_ci_spkg
Software

Software package
information containing
details such as version,
install count, license
count, package
name, and key (when
SAM enabled).

cmdb_ci_storage_controller
Storage
Controller

Logical device that
controls a storage
volume or Fibre
Channel port.

cmdb_ci_storage_device
Storage Device

Base table for block
storage devices such
as DAS, SAN, and NAS.

cmdb_ci_storage_disk
Storage Disk
Disk installed in a
storage server.

cmdb_ci_storage_export
Storage Export

Base table for
the SAN Export
[cmdb_ci_san_export]
table.

cmdb_ci_storage_fileshare
Storage File
Share

NAS file system on
a storage server (an
exported file system).

cmdb_ci_storage_hba
Storage HBA

Host bust adapter
for Fibre Channel.
The physical device
that provides Fibre
Channel ports.

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

Table name
Label (display
name)
Table description

cmdb_ci_storage_pool
Storage Pool
Logical collection of
storage.

cmdb_ci_storage_pool_mem
ber

Storage Pool
Member

Logical volume in a
storage pool.

cmdb_ci_storage_switch
Storage Switch
Fibre Channel switch.

cmdb_ci_storage_volume
Storage
Volume

Volume on a storage
server.

cmdb_ci_storage_vol_snapsh
ot

Storage
Volume
Snapshot

Server snapshot is the
state of a system at
a particular point in
time.

cmdb_ci_subnet
Cloud Mgmt
Subnet

Part of a larger
network.

cmdb_ci_sun_dir_proxy_server
Sun Directory
Proxy Server

Server running Sun
ONE Directory Proxy
Server software.

cmdb_ci_sun_ldap_dir_server
Sun LDAP
Server

Server running Sun
ONE Directory Server
(LDAP) software.

cmdb_ci_surge_power_eq

Surger
Protection
Equipment

Power equipment
used to prevent power
surges.

cmdb_ci_tape_server
Server Tape
Unit

Hardware for using
magnetic tape
storage.

cmdb_ci_tomcat_connector
Tomcat
Connector

Software which
provides web server
plugins to connect
web servers with

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

Table name
Label (display
name)
Table description

Tomcat and other
backends.

cmdb_ci_tower_eq
Tower
Equipment

Parent class for facility
towers and tower
equipment such as
lights and beacons.

cmdb_ci_translation_rule
NAT

Rules to allow router
to remap one network
address to another.

cmdb_ci_transport_hardware
Transport
Hardware

Telecommunication
hardware used for
digital communication
and related
hardware such as
telecommunication
racks, servers to
connect port to LAN,
relays, channel banks,
and network circuit
switch.

Parent class for
telecom transport
hardware such as
multiplexers and fiber
optic equipment.

cmdb_ci_ucs_blade
Cisco UCS
Blade

Physical Cisco
UCS Blade server
hardware.

cmdb_ci_ucs_chassis
Cisco UCS
Chassis

Physical Cisco UCS
chassis hardware
used to hold Cisco

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

Table name
Label (display
name)
Table description

UCS Blade server
hardware.

cmdb_ci_ucs_equipment
Cisco UCS
Equipment

Cisco Unified
Computing System
(UCS) products.

cmdb_ci_unix_cluster
UNIX Cluster

Set of computers
clustered together to
present a single Unix
server resource.

cmdb_ci_unix_daemon
UNIX Daemon

Long running Unix
background process
used to answer
requests for services.

cmdb_ci_unix_server
UNIX Server
Server running Unix
software.

cmdb_ci_ups
UPS

Uninterrupted Power
Supply devices, where
devices are traditional
UPS devices.

cmdb_ci_ups_alarm
UPS Alarm
Uninterrupted Power
Supply alarm.

cmdb_ci_ups_bypass
UPS Bypass
Uninterrupted Power
Supply bypass.

cmdb_ci_ups_input
UPS Input

Electrical input to an
Uninterrupted Power
Supply device.

cmdb_ci_ups_output
UPS Output

Electrical output from
an Uninterrupted
Power Supply device.

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

Table name
Label (display
name)
Table description

cmdb_ci_ups_power_eq
Uninterruptible
Power Supply

Uninterrupted Power
Supply devices, where
devices are any
non-traditional UPS
devices that manage
electrical power.

cmdb_ci_vcenter

VMware
vCenter
Instance

Installed instance of
VMware VCenter
software.

cmdb_ci_vcenter_cluster
VMware
vCenter Cluster

Set of servers that work
together while running
VMware VCenter
software.

cmdb_ci_vcenter_cluster_drs_
rule

VMWare
vCenter Cluster
DRS Rule

vCenter specific
table which stores
Distributed Resource
Scheduler (DRS) basic
rule information.
Stores the affinity
rule specifying that
the members of
a selected virtual
machine DRS group
can or must run on the
members of a specific
host DRS group.

Populated by the
vCenter API
ClusterRuleInfo(vim.clu
ster.RuleInfo).

cmdb_ci_vcenter_datacenter

VMware
vCenter
Datacenter

VMware VCenter data
center objects.

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

Table name
Label (display
name)
Table description

cmdb_ci_vcenter_datastore

VMware
vCenter
Datastore

VMware VCenter
datastore objects
containing details
such as capacity,
freespace, filesystem,
and type.

cmdb_ci_vcenter_datastore_
disk
Datastore Disk

Individual VMware
VCenter datastore
disk.

cmdb_ci_vcenter_folder
VMware
vCenter Folder

VCenter folders, which
can be used to
group objects of the
same type for easier
management.

cmdb_ci_vcenter_network

VMware
vCenter
Network

VMWare vCenter
virtual network.

cmdb_ci_vcenter_object

VMware
vCenter
Object

Base class for most
VMware VCenter
objects.

cmdb_ci_vcenter_server_obj

VMware
vCenter Server
Object

VMware hypervisor.

cmdb_ci_veritas_disk
Veritas Disk

Physical disk that is
controlled by Veritas
Volume Manager.

cmdb_ci_veritas_disk_group
Veritas Disk
Group

Collection of disks
in Veritas Volume
Manager.

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

Table name
Label (display
name)
Table description

cmdb_ci_veritas_plex
Veritas Plex

Logical partition
in Veritas Volume
Manager.

cmdb_ci_veritas_subdisk
Veritas Subdisk
Partition of a
Veritas_disk.

cmdb_ci_veritas_volume
Veritas Volume
Aggregation of plexes.

cmdb_ci_virtualization_server
Virtualization
Server

Base table used
by the ESX Server
[cmdb_ci_esx_server]
table.

cmdb_ci_virtual_desktop
Virtual Desktop

User's desktop
environment (such
as icons, wallpaper,
windows, folders,
toolbars, and widgets)
is stored remotely on a
server.

cmdb_ci_virtual_pvt_gateway Virtual Private
Gateway

Two VPN endpoints for
automatic failover.

cmdb_ci_vm

Virtual
Machine
HyperVisor

Hypevisor software.

cmdb_ci_vm_instance

Virtual
Machine
Instance

Generic virtual
machines information.

cmdb_ci_vm_object

Virtual
Machine
Object

Base class for all VM
objects. Parent for all
objects such as Hyper-
V object and KVM
object.

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

Table name
Label (display
name)
Table description

cmdb_ci_vm_parallels
Parallels
Instance of Parallels
software.

cmdb_ci_vm_template

Virtual
Machine
Template

Template, which is a
main copy of a virtual
machine that can be
used to create many
clones. Base table for
all VM templates.

cmdb_ci_vm_user_credentials
VM User
Credentials

Credentials, which are
used to authenticate
access rights and
permissions.

cmdb_ci_vm_vmware
VMware

Note:   No longer
used.

VMWare specialization
of the Virtual Machine
table.

cmdb_ci_vm_zones
Zones

Partitioned virtual OS
environment working
in a Solaris operating
system space.

cmdb_ci_voice_hardware

(Installed with the
com.snc.cmdb.telecom.cate
gory plugin)

Voice System
Hardware

Telecommunication
systems that represent
telephone systems,
telephone exchanges,
and voice mail.

Parent class for
telecom voice system
hardware such as

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

Table name
Label (display
name)
Table description

voicemail and private
branch exchanges.

cmdb_ci_volume_template
Volume
Template

Set of rules that
specify one or
more capabilities of
a storage volume
(storage selection and
layout rules).

cmdb_ci_vmware_instance

VMware Virtual
Machine
Instance

VMware VM instance
on VMware hypervisor.

cmdb_ci_vmware_template

VMware Virtual
Machine
Template

Main copy of
a VMware virtual
machine that can be
used to create many
clones.

cmdb_ci_vpc
Virtual Private
Cloud

On-demand
configurable pool of
shared computing
resources allocated
within a public cloud
environment.

cmdb_ci_vpn
Virtual Private
Network

Private network
configured to run
across a public
network.

cmdb_ci_vpn_connection
VPN
Connection

Secure connection to
another network over
the Internet.

cmdb_ci_vserver_peer
Vserver Peer

Extends the Virtual
Machine Object
[cmdb_ci_vm_object]

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

Table name
Label (display
name)
Table description

table. Peer relationship
between the Vservers
(NetApp).

cmdb_ci_wap_network
Wireless Access
Point

Networking hardware
device that allows a
Wi-Fi compliant device
to connect to a wired
network.

cmdb_ci_web_application
Web
Application

Client–server software
application in which
the client (or user
interface) runs in a
web browser.

cmdb_ci_web_domino
Lotus Domino
HTTP Server

Server running IBM
Notes software
(formerly Lotus
Notes/IBM Domino).

cmdb_ci_web_server
Web Server

Computer system that
processes requests via
HTTP from the World
Wide Web.

cmdb_ci_web_service
Web Service

Service offered
by an electronic
device to another
electronic device,
communicating with
each other via the
World Wide Web.

cmdb_ci_web_site
Web Site
A collection of related
web pages.

cmdb_ci_websphere_cell
Websphere
Cell

A logical grouping
of IBM Websphere
nodes (each of which

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

Table name
Label (display
name)
Table description

runs one or more
application servers)
that are centrally
managed.

cmdb_ci_win_cluster
Windows
Cluster

A single (virtual) server
composed of one
or more physical
Windows Servers.

cmdb_ci_win_cluster_node
Windows
Cluster Node

A physical member of
the Windows Cluster
application.

cmdb_ci_win_cluster_resourc
e

Windows
Cluster
Resource

A logical or physical
entity managed by
the Windows Cluster
application.

cmdb_ci_win_domain_control
ler

Windows
Domain
Controller

A server that
responds to
security authentication
requests within a
Windows Server
domain.

cmdb_ci_win_server
Windows
Server

A server running
Microsoft Windows
Server operating
system.

cmdb_ci_windows_service
Windows
Service

A Windows computer
program that operates
in the background.

cmdb_ci_zone
Data Center
Zone

A specified portion of
a data center facility.

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

Service tables

In the CMDB, child tables of the Service [cmdb_ci_service] table store
information about services, including application services.

Key fields in the Service table

Field
Description

Business criticality

The importance of this service to
the business. This field can be used
to determine disaster recovery
strategies for this service. Default
options are:

• 1 - most critical

• 2 - somewhat critical

• 3 - less critical

• 4 - not critical

SLA
A reference to the Agreement [sla]
table.

Service classification

Designates the type of the service.

• Application Service (For more
information, see Application
services)

• Technical Service (For more
information, see Application
services and Use the Dynamic
CI Group method to populate
application services)

• Service Offering (For more
information, see Service Portfolio
Management service offerings)

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

Field
Description

• Shared Service (For more
information, see IT shared
services)

• Billable Service (To represents a
service that is billed, or that is
cost managed)

Used for

Designates how this service is used.
Default options are:

• Production

• Staging

• QA

• Test

• Development

• Demonstration

• Training

• Disaster Recovery

Users supported

The users that this service supports.

A reference to the Group
[sys_users_group] table.

Version
Use this field for your own
versioning processes.

Service Configuration Item Association table

The Service Configuration Item Association table [svc_ci_assoc] binds
an application service and a CI to track which CIs are part of each
application service.

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

Field
Description

Configuration Item Id
A reference to the Configuration
Item [cmdb_ci] table.

Service Id
A reference to the Service
[cmdb_ci_service] table.

## CMDB schema model

The Configuration Management Database (CMDB) schema model is
a series of connected tables that contain all the assets and business
services controlled by a company and its configurations.

Related ServiceNow® Store apps and reference information:

• CMDB tables descriptions: Descriptions of key CMDB tables in the base
system.

• CMDB CI Class Models: A ServiceNow Store app that adds class
models that extend the base CMDB class hierarchy. This includes
class descriptions, identification rules, identifier entries, and dependent
relationships if applicable. You can then use the added classes as any
other CMDB base class.

• Populating the CMDB: Information about the various options for
populating the CMDB.

• Discovery patterns: A ServiceNow Store app that provides a library of
Discovery patterns for discovering specific devices and applications in
the industry.

• Getting started with Service Graph Connectors: ServiceNow Store apps
that provide pre-defined integrations for importing and integrating
common third-party data into CMDB classes. Also includes the
IntegrationHub ETL wizard for creating new ETL transform maps.

CMDB tables contain information about computers and devices on the
network, software contracts and licenses, business services, and so on.
The IT desk can use the CMDB to better understand their network users'
equipment, and the relationships between them. The CMDB can also be
referenced by other processes within the system.

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

Applications such as Asset Management and Contract Management,
operate in conjunction with the CMDB. Asset Management and
Software Asset Management link to CMDB all assets, hardware,
software, assets in stock, as well as records for manufacturers and
vendors. The Contract Management application contains information
about contracts, including leases, service contracts, purchase orders,
warranties, and software licenses. The Configuration Management
Database (CMDB) application has a focus on operation.

For more background information about the CMDB, see the ServiceNow
Community post at CMDB 101- What is a configuration management
database and why do you need one?.

Key categories of classes

The following items are general class categories that are typically key in
organizations. You can for example, use this list as a general guideline
for choosing classes to be set as Principal Class so you can track health
and pay attention to the most important classes in your CMDB. For more
information about Principal Class, see Update class list in the Principal
Class filter:

• Servers (physical and virtual): Classes that are typically well-understood,
relatively stable, and which form the backbone of most infrastructure.

• Databases: Classes of high business impact, critical for incident triage,
and relatively straightforward to discover and maintain.

• Network devices (core infrastructure): Classes such as routers, switches,
firewalls, and load balancers—hardware that connects everything. If
setting as Principal Class, then as a general guideline, prioritize core
and critical devices over access switches.

• Application servers.

• Storage.

Key CMDB classes

Key classes in the CMDB:

• The Base Configuration Item [cmdb] class, which is the core CMDB class
for non IT CIs (descending classes are non IT CIs).

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

• The core Configuration Item [cmdb_ci] class, which stores the basic
attributes of all the CIs. The admin, itil, or asset user role is required to
access this table (descending classes are IT CIs).

• The CI Relationship [cmdb_rel_ci] class, which defines all relationships
between CIs.

The Configuration Item class is extended to other classes, such as
Database [cmdb_ci_database] and Computer [cmdb_ci_computer].
The Computer class is extended to the Server [cmdb_ci_server] class,
which is extended to the UNIX Server [cmdb_ci_unix_server] class, and so
on.

Note:   The Base Configuration Item [cmdb] class uses the table
per partition extension model, which has different behaviors for
replicating and deriving information than other extended tables. See
Table extension and classes.

You can use the schema map to view more details of class and their
relationships:

1. Navigate to System Definition > Tables & Columns.

2. Select a table and click Schema Map.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

68

Zurich ServiceNow AI Platform Capabilities

---
*Page 69*

Schema Map

Note:   CIs not extended from the Configuration Item [cmdb_ci]
table, are not displayed in Dependency Views maps and in CI
relation formatters.

CI attributes

Attributes apply to all the CIs in a classification. To change attribute
values for a CI, edit the appropriate CI. To add a unique attribute to
a class, extend the class table and create a new classification for that CI.

The position of a CI in a classification hierarchy is determined by the
attributes it shares with the CIs below it. Each time a CI has a single
different attribute from its parent, the classification hierarchy branches.

For example, servers have different attributes from computers, which
include workstations and laptops. Linux servers and UNIX servers have
different attributes from the parent server classification and from each
other, so they occupy separate branches in the hierarchy.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

69

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 69, 600x480px]*

```
.    .
..::::........
..
...
...:::.
. ....                ....              ..::..
.:-::.........
...                 ....  .           ...:::..      .
...                       .             ....
....               ..:-:..........  .
.    ...              ...:...........
:.::....    ..       ....                ...
..::...               ...  .         .
..                 ........           ..::...........
...                ..:::..........      ...

.                                      ..::::.........
..-::.........                           ...
....                                     .   .
...
.... .
....:.....   ..
.:::....     .

```

---
*Page 70*

## Configuration Item [cmdb_ci] class

Attributes in the Configuration Item [cmdb_ci] class, which extends the
Base Configuration Item [cmdb] class.

Warning:   Do not modify any of these attributes in the dictionary.
For example, do not modify the type of the location attribute from
reference to list. Such modifications may prevent features that use
the CMDB, from functioning properly.

For descriptions of common CMDB tables in a base system, see CMDB
tables descriptions.

Common core, user tables

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

70

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 70, 2880x1620px]*

```


::::::::.
..

:::-::.    .::::::.     ::::::.
.....  ... .
.:::-:::..      ..:::..
......

......     ......
.::::..    ::::::  ..




```

---
*Page 71*

CMDB CI schema related to common core and non-core tables

Attributes

Attribute
Description

Asset tag
Asset tag/service tag for the
specific asset

Assigned
Date and time of assignment to
user

Attributes
Description of usage of attributes
for the instance

Can Print
Indicates whether the instance
can print

Category
Name of category applicable to
the instance

Checked in
Date and time of checking in

Checked out
Date and time of checking out

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

71

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 71, 2880x1620px]*

```



..:::... .:::::::  :::::::. ::::::::  :::::::.

::.       ....      ..

::---::::
..:::::..

.             ...
..:::::.      .:::::..       .:.::::.




```

---
*Page 72*

Attribute
Description

Class
System class name

Comments
Comments related to the instance

Correlation ID
ID of the instance from another
data source

Cost

Financial value in local currency
(as defined in the Cost Currency
field)

Cost currency
Name of currency (such as dollars,
pounds, Euros)

Created
Date and time record was created

Created by
Name of person/data source
which initially created the record

Description
Fit (how deployed) and function
(purpose) of the instance

Discovery source
Name of primary (most trusted)
discovery source

DNS Domain
Name of the DNS domain to which
the instance belongs

Domain
ID of the domain to which the
instance belongs

Domain Path
Path of the domain to which the
instance belongs

Due
Date and time instance was due

Due in
Description of the manner of which
the instance was due

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

Attribute
Description

Fault Count
Number of faulty recorded against
the instance to date

First Discovered
Date and time instance was
initially discovered

Fully Qualified Domain Name
Full path name of domain to which
the instance belongs

GL account
General Ledger account name/
number

Installed
Date and time instance was most
recently installed

Invoice number
Invoice number used in acquisition
process

IP Address
Primary IP address used by the
instance

Justification
Description of the justification for
the instance

Lease contract
Number of current leasing
contracts

MAC Address
MAC address of the instance

Model Number
Manufacturer original model
number

Monitor
Indicates whether the instance is
monitored

Most Recent Discovery
Date and time instance was last
discovered

Name
Name of the CI instance

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

73

Zurich ServiceNow AI Platform Capabilities

---
*Page 74*

Attribute
Description

Operational Status

Configurable choice list with
values for current operational
states

Order received
Date and time instance was
initially received

Ordered
Date and time instance was
initially ordered

PO number
Purchase order number used in
acquisition process

Purchased
Date instance was purchased

Requires verification
Flag indicating whether verification
is required for the instance

Serial number
Serial number of the instance

Skip sync

Flag indicating whether
synchronization between Asset
Management and CMDB can be
skipped

Start Date
Date and time the instance was
last started

Subcategory
Name of Subcategory applicable
to the instance

Sys ID
ServiceNow Sys ID (GUID)

Tags
Related tags

Updated
Date and time instance was last
updated

Updated by
Person/data source which last
updated the record

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

Attribute
Description

Updates
Configurable choice list with
values for update states

Warranty expiration
Date current warranty expires

Reference attribute
Reference to

Approval Group
Group table

Asset
Asset table

Assigned to
User table

Change Group
Group table

Company
Company table

Cost center
Cost Center table

Department
Department table

Location
Location table

Maintenance Schedule
Schedule table

Managed by
User table

Manufacturer
Company table

Model ID
Product Model table

Owned by
User table

Schedule
Schedule table (for normal
processing)

Support group
Group table

Supported by
User

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

Reference attribute
Reference to

Vendor
Company table

## Hardware [cmdb_ci_hardware] class

Attributes, identification rule, and other important schema structures for
the CMDB Hardware [cmdb_ci_hardware] class.

For descriptions of common CMDB tables in a base system, see CMDB
tables descriptions.

Hardware, Computer, Server Schema

Note:   cmdb_sw_instance noted in the diagram, is a reference
to the cmdb_software_instance class, and Supported_Group is a
reference to Support_Group.

Attributes

The Hardware class adds the following unique attributes:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

76

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 76, 2880x1620px]*

```


::::::::.
--------:
......:::.....           .
.::::::..      ***+++**+++***- .:.  .:::::::.
..  .        -==-------=-==. ..      ..
.                        ..::::...
.:.     ...
........  .....   ......   .........
....:....  ...... ........ ..........
.
...::::::..
.....


```

---
*Page 77*

Attribute
Description

hardware_status

Status of hardware such as In
Maintenance or Retired. Used to
sync status to the Asset class.

hardware_substatus

Secondary hardware status. Each
setting in hardware_status results in
a different set of choices available
for this field.

default_gateway
Default gateway that the
computer is connected through.

Key relationship structures

Use the following key relationships as important guidelines when creating
Hardware, Computer, or Server CIs:

•

Serial number: During CI identification, Identification and Reconciliation
Engine (IRE) processes search for a serial number in two locations.
One is the CI serial number attribute, and the second one is the
Serial Number [cmdb_serial_number] table, with reference back to the
Hardware [cmdb_ci_hardware] table.

• Store any serial number of any type other than System, only in the
Serial Number table (and not in the server CI attribute).

• If the system serial number is available, store it in both the Serial
Number attribute of the CI and in the Serial Number table.

The Serial Number table is a many to one relationship linking back to
the server CI. This table has a type field for specifying the type of the
serial number (system, uuid, chassis, bios, or baseboard) and storing
the actual value itself. Use the following Windows standards for serial
number types in the Serial Number [cmdb_serial_number] table:

• system: Product identification such as a serial number for software,
a die number on a hardware chip, or a project number (for
noncommercial products).

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

77

Zurich ServiceNow AI Platform Capabilities

---
*Page 78*

• uuid: Universally unique identifier (UUID) for the product. A UUID is
a 128-bit identifier that is guaranteed to be different from other
generated UUIDs.

• chassis: Manufacturer-allocated number that is used to identify a
physical element. Value is the Serial Number member of the System
Enclosure or Chassis structure in the SMBIOS information. This type
represents the properties associated with a physical system enclosure.

• bios: The assigned serial number of the BIOS. This type represents the
attributes of the computer system basic input/output services (BIOS)
that are installed on the computer.

• baseboard: Manufacturer-allocated number that is used to
identify the physical element. This property is inherited from
CIM_PhysicalElement, and is sometimes referred to as the
'Motherboard Serial Number'.

•

Network adapter:

• Use the Network Adapter [cmdb_ci_network_adapter] class to store
network adapters.

• Set the Name attribute in the Network Adapter class to be the name
of the Network Adapter device (such as eth0, eth1).

•

Set the MAC Address attribute to be the MAC address value. Format
the string with colon separators between octets and lower case
hexadecimal characters with padded zeros.

For example: 'f8:f2:1e:00:d4:66'

• In the CI Relationship [cmdb_rel_ci] table, create an Owned By::Owns
relationship to the associated Hardware CI. Specify a reference from
the Network Adapter [cmdb_ci_network_adapter] table using the CI
with a reference to the associated Hardware CI.

•

IP address:

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

• Use the IP Address [cmdb_ci_ip_address] class to store IP addresses.

• Store an IP address value in the IP Address attribute, and in the Name
attribute (to avoid empty Name attributes).

• Store an IPv4 IP address value using the format 'NNN.NNN.NNN.NNN',
with decimal-based octets and period separators. Non-conforming
values should be considered invalid and cleansed to null values.

• Store an IPv6 IP address value using lower case hexadecimal with
colon separators. Non-confirming values should be considered invalid
and cleansed to null values.

• Set the Netmask attribute to the IP address.

• In the CI Relationship [cmdb_rel_ci] table, create an Owned By::Owns
relationship to the associated Hardware CI.

• Specify for the IP address a reference to the Network Adapter
[cmdb_ci_network_adapter] table using the Configuration Item with
a reference to the associated Hardware CI.

• To ensure that base system identification rules work properly, also
store the IP address in the associated Network Adapter class.

•

Network adapter and IP address:

• Store the MAC address of the network adapter installed on a server,
in the Network Adapter [cmdb_ci_network_adapter] class.

• Store the IP address in the IP Address [cmdb_ci_ip_address] class.

• Do not store the MAC address or the IP address in the Server
[cmdb_ci_server] class.

Key reference structures

Use the following key references as important guidelines when creating
Hardware, Computer, or Server CIs:

•

Software and processes running on a server: The Software
[cmdb_ci_spkg] class contains the generic software package that is

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

related to the server CI. The cmdb_software_instance table instantiates
each instance of the software package with:

• One to one reference back to the Server [cmdb_ci_server] class

• Many to one reference back to the Software class
These references are stored in the Installed on and the Product Name
reference attributes respectively.

If either the Software Asset Management Foundation
[com.snc.sams] or the Software Asset Management
[com.snc.software_asset_management] plugin is installed, then store
software details in the Software Installation [cmdb_sam_sw_install] table
instead of the cmdb_software_instance table.

• The Manufacturer and Model ID are reference attributes to the
Company [core_company] and Product Model [cmdb_model] tables
respectively.

• The Owned By, Assigned To, Managed By, and Supported By are
reference attributes to the User [sys_user] table. The Change Group and
Support Group are reference attributes to the Group [sys_user_group]
table.

Identification rule

The base system contains pre-defined identification rules for the
Hardware, Computer, and Server classes, which are identical. That
identification rule has the following key identifier entries, listed in priority
order:

1. Identifier entry which uses lookup-based identification specified with
Serial Number [cmdb_serial_number] as the lookup table. The Serial
Number table is a many to one reference from Serial Number back to
the server CI.

2. Identifier entry specified with the Serial Number attribute in the CI.

3. Identifier entry for the Name attribute. If Serial Number is not
available, then the Name (which is the hostname) attribute is used. If
both the Serial Number and the Name attributes are provided, then
Identification and Reconciliation Engine (IRE) looks first for the Serial
Number. Then, if a Serial Number is not found, IRE falls back to using
Name.

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

4. Identifier entry specified for the MAC Address/IP Address attributes in
the Network Adapter table. However, do not rely only on the MAC
Address/IP Address.

If both Serial Number and Name are not available, and only MAC
Address/IP Address are available, use MAC Address as the name of
the CI. Using the MAC Address as the name of the CI ensures that
you don't create an empty CI.

For more information, see CMDB Identification and Reconciliation (IRE).

## Computer [cmdb_ci_computer] class

Attributes, identification rule, and other important schema structures for
the CMDB Computer [cmdb_ci_computer] class.

For descriptions of common CMDB tables in a base system, see CMDB
tables descriptions.

Hardware, Computer, Server Schema

Note:   cmdb_sw_instance noted in the diagram, is a reference
to the cmdb_software_instance class, and Supported_Group is a
reference to Support_Group.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

81

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 81, 2880x1620px]*

```


::::::::.
--------:
......:::.....           .
.::::::..      ***+++**+++***- .:.  .:::::::.
..  .        -==-------=-==. ..      ..
.                        ..::::...
.:.     ...
........  .....   ......   .........
....:....  ...... ........ ..........
.
...::::::..
.....


```

---
*Page 82*

Attributes

The Computer class adds the following unique attributes:

Attribute
Description

CD_ROM
Denotes whether a CD ROM exists.

CD Speed
Speed of CD_ROM.

Chassis type
Type of computer chassis.

CPU core count
Number of cores per CPU.

CPU core thread
Number of threads per core.

CPU count
Number of CPUs.

CPU name
Name of CPU.

CPU speed (MHz)
Speed of CPU.

CPU type
CPU type.

Disk space (GB)
Amount of disk space (in GB).

Floppy
Type of floppy drive.

Form factor
Form factor of the computer.

Object ID

Object ID of the computer
(such as the virtual machine ID
associated with the computer).

Operating System
Name of the operating system.

OS Address Width (bits)
Operating system bit (such as 32,
64).

OS Domain
NA

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

Attribute
Description

OS Service Pack
Service pack installed on the
operating system.

OS Version
Version of the operating system.

RAM (MB)
Amount of RAM on the computer.

IsVirtual

True/False denoting whether the
device is running on a virtual
machine instance.

Reference attribute
Reference to

CPU manufacturer
Company [core_company] table

Schema description

The CMDB schema model does not separate between servers and
computers that are physical and servers and computer that are virtual.
Instead, the Computer and the Server classes have a field named
IsVirtual. If a computer or server is a virtual instance, set this IsVirtual
attribute to true.

As described in the Virtual Machine schema section, to fully model a
virtual machine, set the IsVirtual attribute in the Computer or Server
CI to true. Create a Virtual Machine Instance [cmdb_ci_vm_instance]
record using the BIOS UUID attribute as the key identifier. Then create
a Hosted_On relationship between the Virtual Machine Instance record
and the Computer or Server instance and set IsVirtual to true.

Key relationship structures

Use the following key relationships as important guidelines when creating
Hardware, Computer, or Server CIs:

•

Serial number: During CI identification, Identification and Reconciliation
Engine (IRE) processes search for a serial number in two locations.
One is the CI serial number attribute, and the second one is the

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

Serial Number [cmdb_serial_number] table, with reference back to the
Hardware [cmdb_ci_hardware] table.

• Store any serial number of any type other than System, only in the
Serial Number table (and not in the server CI attribute).

• If the system serial number is available, store it in both the Serial
Number attribute of the CI and in the Serial Number table.

The Serial Number table is a many to one relationship linking back to
the server CI. This table has a type field for specifying the type of the
serial number (system, uuid, chassis, bios, or baseboard) and storing
the actual value itself. Use the following Windows standards for serial
number types in the Serial Number [cmdb_serial_number] table:

• system: Product identification such as a serial number for software,
a die number on a hardware chip, or a project number (for
noncommercial products).

• uuid: Universally unique identifier (UUID) for the product. A UUID is
a 128-bit identifier that is guaranteed to be different from other
generated UUIDs.

• chassis: Manufacturer-allocated number that is used to identify a
physical element. Value is the Serial Number member of the System
Enclosure or Chassis structure in the SMBIOS information. This type
represents the properties associated with a physical system enclosure.

• bios: The assigned serial number of the BIOS. This type represents the
attributes of the computer system basic input/output services (BIOS)
that are installed on the computer.

• baseboard: Manufacturer-allocated number that is used to
identify the physical element. This property is inherited from
CIM_PhysicalElement, and is sometimes referred to as the
'Motherboard Serial Number'.

•

Network adapter:

• Use the Network Adapter [cmdb_ci_network_adapter] class to store
network adapters.

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

• Set the Name attribute in the Network Adapter class to be the name
of the Network Adapter device (such as eth0, eth1).

•

Set the MAC Address attribute to be the MAC address value. Format
the string with colon separators between octets and lower case
hexadecimal characters with padded zeros.

For example: 'f8:f2:1e:00:d4:66'

• In the CI Relationship [cmdb_rel_ci] table, create an Owned By::Owns
relationship to the associated Hardware CI. Specify a reference from
the Network Adapter [cmdb_ci_network_adapter] table using the CI
with a reference to the associated Hardware CI.

•

IP address:

• Use the IP Address [cmdb_ci_ip_address] class to store IP addresses.

• Store an IP address value in the IP Address attribute, and in the Name
attribute (to avoid empty Name attributes).

• Store an IPv4 IP address value using the format 'NNN.NNN.NNN.NNN',
with decimal-based octets and period separators. Non-conforming
values should be considered invalid and cleansed to null values.

• Store an IPv6 IP address value using lower case hexadecimal with
colon separators. Non-confirming values should be considered invalid
and cleansed to null values.

• Set the Netmask attribute to the IP address.

• In the CI Relationship [cmdb_rel_ci] table, create an Owned By::Owns
relationship to the associated Hardware CI.

• Specify for the IP address a reference to the Network Adapter
[cmdb_ci_network_adapter] table using the Configuration Item with
a reference to the associated Hardware CI.

• To ensure that base system identification rules work properly, also
store the IP address in the associated Network Adapter class.

•

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

Network adapter and IP address:

• Store the MAC address of the network adapter installed on a server,
in the Network Adapter [cmdb_ci_network_adapter] class.

• Store the IP address in the IP Address [cmdb_ci_ip_address] class.

• Do not store the MAC address or the IP address in the Server
[cmdb_ci_server] class.

Key reference structures

Use the following key references as important guidelines when creating
Hardware, Computer, or Server CIs:

•

Software and processes running on a server: The Software
[cmdb_ci_spkg] class contains the generic software package that is
related to the server CI. The cmdb_software_instance table instantiates
each instance of the software package with:

• One to one reference back to the Server [cmdb_ci_server] class

• Many to one reference back to the Software class
These references are stored in the Installed on and the Product Name
reference attributes respectively.

If either the Software Asset Management Foundation
[com.snc.sams] or the Software Asset Management
[com.snc.software_asset_management] plugin is installed, then store
software details in the Software Installation [cmdb_sam_sw_install] table
instead of the cmdb_software_instance table.

• The Manufacturer and Model ID are reference attributes to the
Company [core_company] and Product Model [cmdb_model] tables
respectively.

• The Owned By, Assigned To, Managed By, and Supported By are
reference attributes to the User [sys_user] table. The Change Group and
Support Group are reference attributes to the Group [sys_user_group]
table.

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

Identification rule

The base system contains pre-defined identification rules for the
Hardware, Computer, and Server classes, which are identical. That
identification rule has the following key identifier entries, listed in priority
order:

1. Identifier entry which uses lookup-based identification specified with
Serial Number [cmdb_serial_number] as the lookup table. The Serial
Number table is a many to one reference from Serial Number back to
the server CI.

2. Identifier entry specified with the Serial Number attribute in the CI.

3. Identifier entry for the Name attribute. If Serial Number is not
available, then the Name (which is the hostname) attribute is used. If
both the Serial Number and the Name attributes are provided, then
Identification and Reconciliation Engine (IRE) looks first for the Serial
Number. Then, if a Serial Number is not found, IRE falls back to using
Name.

4. Identifier entry specified for the MAC Address/IP Address attributes in
the Network Adapter table. However, do not rely only on the MAC
Address/IP Address.

If both Serial Number and Name are not available, and only MAC
Address/IP Address are available, use MAC Address as the name of
the CI. Using the MAC Address as the name of the CI ensures that
you don't create an empty CI.

For more information, see CMDB Identification and Reconciliation (IRE).

## Server [cmdb_ci_server] class

Attributes, identification rule, and other important schema structures for
the CMDB Server [cmdb_ci_server] class.

For descriptions of common CMDB tables in a base system, see CMDB
tables descriptions.

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

Hardware, Computer, Server Schema

Note:   cmdb_sw_instance noted in the diagram, is a reference
to the cmdb_software_instance class, and Supported_Group is a
reference to Support_Group.

Attributes

The Server class adds the following unique attributes:

Attribute
Description

Classification

Type of server, such as production,
development, disaster recovery, or
user acceptance testing (UAT).

Firewall status
Internet or intranet facing server.

Host name

Use the Name attribute to store the
host name of the server instead of
the Host name attribute.

Used for

Business service supported by
the server, such as production,
staging, or quality assurance (QA).
This attribute uses the Used for

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

88

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 88, 2880x1620px]*

```


::::::::.
--------:
......:::.....           .
.::::::..      ***+++**+++***- .:.  .:::::::.
..  .        -==-------=-==. ..      ..
.                        ..::::...
.:.     ...
........  .....   ......   .........
....:....  ...... ........ ..........
.
...::::::..
.....


```

---
*Page 89*

Attribute
Description

choice list field from the Service
[cmdb_ci_service] table.

Reference attribute
Reference to

Disaster backup

Server [cmdb_ci_server] table.
Reference to another server that is
the backup server for this server.

Reference classes

The following reference classes extend the Server class. They do not add
any new attributes.

Reference class
Name
Description

cmdb_ci_solaris_server
Solaris Server

Server running Oracle
Solaris operating
system.

cmdb_ci_lb_cisco_cs
m
Cisco CSM

Cisco Security
Manager (CSM) load
balancer.

cmdb_ci_win_server
Windows Server

Server running
Microsoft Windows
Server operating
system.

cmdb_ci_lb_ace
ACE

Cisco Application
Control Engine load
balancer.

cmdb_ci_lb_netsclaer
Citrix Netscaler
Citrix Netscaler load
balancer.

cmdb_ci_lb_alteon
Alteon
Alteon load balancer.

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

Reference class
Name
Description

cmdb_ci_lb
Load Balancer
Generic load
balancer.

cmdb_ci_lb_a10
A10 Load Balancer
A10 load balancer.

cmdb_ci_lb_cisco_css
Cisco CSS

Cisco Content
Services Switch (CSS)
load balancer.

cmdb_ci_lb_cisco_gss
Cisco GSS

Cisco Global Site
Selector (GSS) load
balancer.

cmdb_ci_osx_Server
OS/X Server
Server running OS/X
operating system.

cmdb_ci_HPUX_Server
HPUX Server
Server running HP-UX
operating system.

cmdb_ci_tape_server
Server Tape Unit
Server using a tape
drive.

cmdb_ci_Server_Hard
ware
Server Hardware
Server hardware.

cmdb_ci_datapower_
server

Data Power Hosting
Server

IBM DataPower
hosting server.

cmdb_ci_net_app_ser
ver

Network Appliance
Hardware
NetApp hardware.

cmdb_ci_netware_ser
ver
Netware Server

Server running
NetWare operating
system.

cmdb_ci_ibm_zos_serv
er
IBM zOS Server

Server running IBM
z/OS operating system
.

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

Reference class
Name
Description

cmdb_ci_storage_nod
e_element
Storage Node Element
Storage node.

cmdb_ci_chassis_serv
er
Server Chassis
Server chassis.

cmdb_ci_lb_network
Network Load
Balancer

Network load
balancer hardware.

cmdb_ci_Unix_Server
Unix Server
Server running Unix
operating system.

cmdb_ci_linux_server
Linux Server
Server running Linux
operating system.

cmdb_ci_virtualization
_server
Virtualization Server

Abstract base table
used by Hyper-V
Server
[cmdb_ci_hyper_v_ser
ver] and ESX Server
[cmdb_ci_esx_server].

cmdb_ci_mainframe
IBM Mainframe

Large-scale computer
system with high-end
capabilities.

Schema description

The CMDB schema model does not separate between servers and
computers that are physical and servers and computer that are virtual.
Instead, the Computer and the Server classes have a field named
IsVirtual. If a computer or server is a virtual instance, set this IsVirtual
attribute to true.

As described in the Virtual Machine schema section, to fully model a
virtual machine, set the IsVirtual attribute in the Computer or Server
CI to true. Create a Virtual Machine Instance [cmdb_ci_vm_instance]
record using the BIOS UUID attribute as the key identifier. Then create
a Hosted_On relationship between the Virtual Machine Instance record
and the Computer or Server instance and set IsVirtual to true.

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

Key relationship structures

Use the following key relationships as important guidelines when creating
Hardware, Computer, or Server CIs:

•

Serial number: During CI identification, Identification and Reconciliation
Engine (IRE) processes search for a serial number in two locations.
One is the CI serial number attribute, and the second one is the
Serial Number [cmdb_serial_number] table, with reference back to the
Hardware [cmdb_ci_hardware] table.

• Store any serial number of any type other than System, only in the
Serial Number table (and not in the server CI attribute).

• If the system serial number is available, store it in both the Serial
Number attribute of the CI and in the Serial Number table.

The Serial Number table is a many to one relationship linking back to
the server CI. This table has a type field for specifying the type of the
serial number (system, uuid, chassis, bios, or baseboard) and storing
the actual value itself. Use the following Windows standards for serial
number types in the Serial Number [cmdb_serial_number] table:

• system: Product identification such as a serial number for software,
a die number on a hardware chip, or a project number (for
noncommercial products).

• uuid: Universally unique identifier (UUID) for the product. A UUID is
a 128-bit identifier that is guaranteed to be different from other
generated UUIDs.

• chassis: Manufacturer-allocated number that is used to identify a
physical element. Value is the Serial Number member of the System
Enclosure or Chassis structure in the SMBIOS information. This type
represents the properties associated with a physical system enclosure.

• bios: The assigned serial number of the BIOS. This type represents the
attributes of the computer system basic input/output services (BIOS)
that are installed on the computer.

• baseboard: Manufacturer-allocated number that is used to
identify the physical element. This property is inherited from

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

CIM_PhysicalElement, and is sometimes referred to as the
'Motherboard Serial Number'.

•

Network adapter:

• Use the Network Adapter [cmdb_ci_network_adapter] class to store
network adapters.

• Set the Name attribute in the Network Adapter class to be the name
of the Network Adapter device (such as eth0, eth1).

•

Set the MAC Address attribute to be the MAC address value. Format
the string with colon separators between octets and lower case
hexadecimal characters with padded zeros.

For example: 'f8:f2:1e:00:d4:66'

• In the CI Relationship [cmdb_rel_ci] table, create an Owned By::Owns
relationship to the associated Hardware CI. Specify a reference from
the Network Adapter [cmdb_ci_network_adapter] table using the CI
with a reference to the associated Hardware CI.

•

IP address:

• Use the IP Address [cmdb_ci_ip_address] class to store IP addresses.

• Store an IP address value in the IP Address attribute, and in the Name
attribute (to avoid empty Name attributes).

• Store an IPv4 IP address value using the format 'NNN.NNN.NNN.NNN',
with decimal-based octets and period separators. Non-conforming
values should be considered invalid and cleansed to null values.

• Store an IPv6 IP address value using lower case hexadecimal with
colon separators. Non-confirming values should be considered invalid
and cleansed to null values.

• Set the Netmask attribute to the IP address.

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

• In the CI Relationship [cmdb_rel_ci] table, create an Owned By::Owns
relationship to the associated Hardware CI.

• Specify for the IP address a reference to the Network Adapter
[cmdb_ci_network_adapter] table using the Configuration Item with
a reference to the associated Hardware CI.

• To ensure that base system identification rules work properly, also
store the IP address in the associated Network Adapter class.

•

Network adapter and IP address:

• Store the MAC address of the network adapter installed on a server,
in the Network Adapter [cmdb_ci_network_adapter] class.

• Store the IP address in the IP Address [cmdb_ci_ip_address] class.

• Do not store the MAC address or the IP address in the Server
[cmdb_ci_server] class.

Key reference structures

Use the following key references as important guidelines when creating
Hardware, Computer, or Server CIs:

•

Software and processes running on a server: The Software
[cmdb_ci_spkg] class contains the generic software package that is
related to the server CI. The cmdb_software_instance table instantiates
each instance of the software package with:

• One to one reference back to the Server [cmdb_ci_server] class

• Many to one reference back to the Software class
These references are stored in the Installed on and the Product Name
reference attributes respectively.

If either the Software Asset Management Foundation
[com.snc.sams] or the Software Asset Management
[com.snc.software_asset_management] plugin is installed, then store
software details in the Software Installation [cmdb_sam_sw_install] table
instead of the cmdb_software_instance table.

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

• The Manufacturer and Model ID are reference attributes to the
Company [core_company] and Product Model [cmdb_model] tables
respectively.

• The Owned By, Assigned To, Managed By, and Supported By are
reference attributes to the User [sys_user] table. The Change Group and
Support Group are reference attributes to the Group [sys_user_group]
table.

Identification rule

The base system contains pre-defined identification rules for the
Hardware, Computer, and Server classes, which are identical. That
identification rule has the following key identifier entries, listed in priority
order:

1. Identifier entry which uses lookup-based identification specified with
Serial Number [cmdb_serial_number] as the lookup table. The Serial
Number table is a many to one reference from Serial Number back to
the server CI.

2. Identifier entry specified with the Serial Number attribute in the CI.

3. Identifier entry for the Name attribute. If Serial Number is not
available, then the Name (which is the hostname) attribute is used. If
both the Serial Number and the Name attributes are provided, then
Identification and Reconciliation Engine (IRE) looks first for the Serial
Number. Then, if a Serial Number is not found, IRE falls back to using
Name.

4. Identifier entry specified for the MAC Address/IP Address attributes in
the Network Adapter table. However, do not rely only on the MAC
Address/IP Address.

If both Serial Number and Name are not available, and only MAC
Address/IP Address are available, use MAC Address as the name of
the CI. Using the MAC Address as the name of the CI ensures that
you don't create an empty CI.

For more information, see CMDB Identification and Reconciliation (IRE).

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

## VMware vCenter Object [cmdb_ci_vcenter_object]
## class

Attributes, identification rule, and other important schema structures for
Virtual Machine related classes.

For descriptions of common CMDB tables in a base system, see CMDB
tables descriptions.

Schema description

ServiceNow® has an extensive modeling of virtual machines (VMs)
environment, with classes such as:

• VMware vCenter Cluster [cmdb_ci_vcenter_cluster]

• VMware vCenter datacenter [cmdb_ci_vcenter_datacenter]

• VMware Virtual Machine Instance [cmdb_ci_vmware_instance]

Virtual machines are modeled just like any other server, but with the
IsVirtual attribute set to true.
VMWare vCenter Instance schema structure

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

96

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 96, 2880x1620px]*

```
:::::::.
.:------:
....
..
. .      ...   ........            .....
:::--::.        .:------:          ::::--::.
....
.    ..    ..    .       ..
.......         .::----::      ... ::::-:::.
..::::.          ...:....         ....
...                           ....
..:.....                      .        .
.:::::::.         .:::::..
...         .....    ...  .:::::::
...     . .    ..        ....   ..
:---:    ...    ::--:              :::::
```

---
*Page 97*

In the diagram above, the 'Discovered' virtual server is referred to as
the 'Guest' (VM object). Follow the preceding diagram for any further
modeling of VMWare components.

Key reference structures

The Guest has the following important key reference structures:

• An Instantiates::InstantiatedBy relationship with the
cmdb_ci_vmware_instance (which is the VM instance reported by
Center).

• A Virtualizes::Virtualized by relationship with ESXi Server (the hardware
with the ESXi virtualization software installed).

• Guest (Discovered, VMObject) also has a HasRegistered::RegisteredOn
relationship to ESXi Server.

Identification rules

• Guest operating system: Guest operating system is modeled as Server
(with IsVirtual set to true) and therefore identification rules follow the
rules for the Server class. In most operating systems, BIOS UUID is
reported as serial number. It is essential that you follow proper VMware
guidelines to ensure that BIOS UUID is not being reused. Having a
cloned BIOS UUID causes issues with identification rules.

• VM Instances: IRE uses instance MosRef ID as key identifier.

• ESX Server: Server is modeled as bare metal Server (with IsVirtual set to
false) and therefore applies the Server class identification rules.

## Cloud class

Description, identification rule, and other important schema structures for
the CMDB cloud classes.

For descriptions of common CMDB tables in a base system, see CMDB
tables descriptions.

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

AWS/Azure/OpenStack class model

IBM Datacenter Cloud Schema model

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

98

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 98, 2825x1135px]*

```
:::.    .:...
::. ::: .::. :::      ..           ..
..   .   ..  ..      ....         :::.
.       .::::::  .               ....    .:...
.....    :::.
.......:..........   ::.::.   ....
..........:.......   ..       ::..    .....   ..:..
.::           ::.  ...   .....    ::::
..::.    .::.    ... .:::   .....    ....    .....
...      ...      .                 :...
:...    .....

```

*[Diagram Or Flowchart - Page 98, 2880x1620px]*

```


......

...

...   ..    ....   ..  ..  ...  ..         .
..  ..   ..
.                     ......   .     .
..     ..        ..        .. .             ..   .
..     ..                                   .    ..
.




```

---
*Page 99*

Google Datacenter Schema Model

Cloud schema description

ServiceNow has extensive models of cloud environments including
Amazon Web Services (AWS), Microsoft Azure service, Google Cloud
Platform (GCP), and IBM Cloud. Focusing on the compute side, the
models for cloud environments and for Virtual Servers are similar. For
example, instances of Amazon Elastic Compute Cloud (EC2) and
Microsoft® Azure Cloud Compute, are an extension of Virtual Machine
instances, where CIs are typically created by connecting directly to
cloud inventory. However, Virtual Machine instances do not represent
actual usage of the cloud instance.

Cloud Service Account [cmdb_ci_cloud_service_account] is the main
class for tracking cloud accounts such as AWS, GCP, and Azure
(replacing for example, use of the cmdb_ci_aws_account table for AWS).

For example, you can represent a Linux guest host running on
Amazon EC2 by the Server [cmdb_ci_server] class, with the IsVirtual
attribute set to true and with the relationship Runs on:Runs to the
EC2 instance. Integrating the AWS Config Service or the Amazon
CloudWatch application, provides information on the EC2 object ID.
Running Discovery or another discovery program on the guest Linux host,
provides the hostname.

Ensure the following:

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

99

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 99, 2880x1620px]*

```




...:..              ...
...
.   ...   ...
.
..    .   .   .    .        .
.                        .                    .. . .:.
.                                                   ..





```

---
*Page 100*

• Getting the correct UUID which gets stored in the Serial Number
[cmdb_serial_number] table.

• Connecting/creating the cloud instance to Host OS, matching on the
UUID/Object ID and creating the Runs On:Runs relationship.

Also, there is a complete model of Storage, Networking, Lamda/
Functions in addition to modeling of different regions using the concept
of the table Logical Datacenter [cmdb_ci_logical_datacenter] with
Hosts:HostedOn relationship with Compute, Storage, and such.

Identification rule

The base system contains pre-defined identification rules for cloud
schema classes. A cloud object requires the following identification items:

• Object ID: Which is synonymous with the IDs that cloud vendors use
for each type of cloud resource, such as Azure Compute, EC2, and
Amazon Simple Storage Service (S3).

•

Object ID is unique per region and therefore has
dependent relationship requiring information from the Logical
Datacenter [cmdb_ci_logical_data_center] table, about the
region where the cloud resource is being hosted. For
example, AWS Datacenter [cmdb_ci_aws_datacenter], Azure
Datacenter [cmdb_ci_azure_datacenter], Google Datacenter
[cmdb_ci_google_datacenter] that are extended from Logical
Datacenter.

Logical Datacenter itself, has two identifier entries:

• Object ID: Unique ID of the logical datacenter where applicable

• Region: The region of the cloud resource

•

Logical Datacenter has a dependency on cloud service accounts,
which has two identifier entries:

• Object ID: Unique ID of the account where applicable.

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

• Account ID: The unique Account ID that encompasses the different
cloud resources. Account ID is generally more applicable than
Object ID.

For more information, see CMDB Identification and Reconciliation (IRE).

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

101

Zurich ServiceNow AI Platform Capabilities

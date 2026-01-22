# zurich_servicenow_ai_platform_capabilities_getting_started_with_service_graph_connectors_2026-01-16-13-01-00

*Source: zurich_servicenow_ai_platform_capabilities_getting_started_with_service_graph_connectors_2026-01-16-13-01-00.pdf*

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

## Getting started with Service Graph Connectors

Service Graph Connectors, including API Service Graph Connectors, are
predefined integrations that ingest third-party data and API data into
the Configuration Management Database (CMDB) from various domains,
such as security, servers, software or monitoring, Internet of Things (IoT),
and cloud.

Important:   See Service Graph Connectors and API Service Graph
Connectors for a list of connectors provided by ServiceNow.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Service Graph Connectors overview

The following video provides an overview of Service Graph Connectors.

As a purpose-built app, you can use a Service Graph Connector,
including an API Service Graph Connector, to maintain the quality and
consistency of third-party data in your CMDB.

You can use the following connector types:

Service Graph Connectors

A Service Graph Connector imports and integrates third-party data into
CMDB and non-CMDB tables. For a list of Service Graph Connectors, see
Service Graph Connectors.

API Service Graph Connectors

An API Service Graph Connector imports and integrates third-party API
data into CMDB and non-CMDB tables. For a list of API Service Graph
Connectors, see API Service Graph Connectors.

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

Partner-built connectors

Service Graph Connectors can be built by partners and vendors. For a list
of partner-built connectors, see the ServiceNow Store website.

The connectors also make sure that third-party data is mapped to the
right locations in your CMDB as specified by the Common Service Data
Model (CSDM). The CSDM enables ServiceNow products to use the data
and increases reporting accuracy. For more information on CSDM, see
Common Service Data Model.

The Service Graph Connectors, including API Service Graph Connectors,
manage the configuration data pipeline in the following steps:

1. Ingest the data by identifying class, attribute, and data sources by
using the identification rules.

2. Standardize the data to comply with your CMDB.

3. Reconcile the data into a single coherent picture by using the
reconciliation rules.

4. Ingest the data into your CMDB.

You can track the status and processing results of all installed integrations
using the SGC Central view within the CMDB Workspace or integrations
dashboard provided with the Integration Commons for CMDB store app.
For more information, see SGC Central, Integration Commons for CMDB,
and CMDB Integrations Dashboard.

Service Graph Connector user roles

Service Graph Connector users can be assigned specific roles to limit the
assignment of the Administrator (admin) user role. The following roles are
available for Service Graph Connector users.

User roles

User role
Description

Administrator

Users with the admin role can install and
upgrade Service Graph Connectors, including
API Service Graph Connectors. Administrators
can perform the following tasks:

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

User role
Description

• Create a connection and configure
connection properties.

• Monitor connections and data imports.

• Manage connections.

• Upgrade the connector.

• Run background scripts.

SGC-admin

The sn_cmdb_int_util.sgc_admin user role has
the second-highest level of permissions for
Service Graph Connectors. SGC-admin users
can perform the following tasks:

• Create, update, and delete connections.

• Complete the guided setup.

• Read and write the system properties that
are used by the connectors.

• Perform all operations that are allowed by
other user roles that have lower levels of
permission.

CMDB installation
administrator

Users with the cmdb_inst_admin role can
perform the following day-to-day tasks:

• Read all Service Graph Connector
application modules.

• Read and write the system properties that
are used by the connectors.

• Create, update, and delete custom tables.

• Create, update, and delete scheduled
imports and data sources.

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

User role
Description

• Read records that are owned by other
applications and are related to the
functionality of Service Graph Connectors
(for instance, records in the em_event table).

SGC-viewer

Business users can use the
sn_cmdb_int_util.sgc_viewer role to monitor the
status of the integration. Users with the SGC-
viewer role can perform the following tasks:

• View all application modules.

• View CCF.

• View available SGC connections in cmdb
workspace.

• Read the system properties used by the
connectors.

• View scheduled import runs and related logs.

• View data sources.

• View custom tables.

• View records that are owned by other
applications and are related to the
functionality of Service Graph Connectors
(for instance, records in the em_event table).

Using SGC Central for connectors

The Service Graph Connector Central application also called as SGC
Central is available as a view in the CMDB Workspace. The application
enables you to discover and install Service Graph Connectors, including
API Service Graph Connectors, and then effectively manage the full life
cycle of creating, editing, monitoring, and debugging connections. The
SGC Central application also ensures that connectors remain supported
and up-to-date with certified partners.

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

The SGC Central application minimizes customization and accelerates
time to value with intuitive setup options and playbook-guided
connector deployment. If the playbook experience isn’t available for
a connector, you can follow the guided setup provided with the
connector.

To learn more, see SGC Central.

Using connectors

By using Service Graph Connectors and API Service Graph Connectors,
you can mandate data governance and design practices. Examples of
mandated practices using connectors include:

• Consistently associating data with specific CI types. For instance, IP
addresses are assigned to network interfaces rather than a mix of
interfaces and servers. Ensuring that ServiceNow products know where
to find third-party data. For more information, see CMDB classifications
and class dependency.

• Using the Identification and Reconciliation (IRE) engine to identify
and classify data correctly before it’s loaded into the CMDB. Helping
prevent duplicate CIs and ensuring that attribute values are consistent
across multiple data sources.

For information on the IRE-related rules used in Service Graph
Connectors, see the following topics:

• CMDB Identification and Reconciliation (IRE)

• Identification rules

• Reconciliation rules

• Create an IRE data source rule

• Detecting duplicate CIs

• Create a data refresh rule

• Create an identification inclusion rule

• Using the IntegrationHub ETL functionality so that data is transformed
and loaded in the fastest and most efficient manner. For more
information, see IntegrationHub ETL.

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

Resolving connector issues

You can use the Now Assist for Configuration Management Database
(CMDB) application to resolve any issues or perform a general analysis on
a connector installed on your instance. See Fix SGC import set issues with
the Now Assist SGC diagnosis skill.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

8

Zurich ServiceNow AI Platform Capabilities

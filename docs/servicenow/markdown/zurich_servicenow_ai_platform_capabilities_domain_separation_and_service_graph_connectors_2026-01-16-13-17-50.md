# zurich_servicenow_ai_platform_capabilities_domain_separation_and_service_graph_connectors_2026-01-16-13-17-50

*Source: zurich_servicenow_ai_platform_capabilities_domain_separation_and_service_graph_connectors_2026-01-16-13-17-50.pdf*

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

## Domain separation and Service Graph Connectors

Domain separation is supported for Service Graph Connectors. Domain
separation enables you to separate data, processes, and administrative
tasks into logical groupings called domains. You can control several
aspects of this separation, including which users can see and access
data.

Support level: Standard*

The support level is Standard but has some exceptions or special
conditions.

• Includes all aspects of Basic level support.

• Business logic: The service provider (SP) creates or modifies processes
per customer. The use cases reflect proper use of the application by
multiple SP customers in a single instance.

• The instance owner must be able to configure minimum viable product
(MVP) business logic and data parameters. This configuration is done
per tenant, as expected for the specific application.

Sample use case: An Admin must be able to make comments required
when a record closes for one tenant, but not for another.

For more information on support levels, see Application support for
domain separation.

How domain separation works in Service Graph Connectors

Domain separation is supported only for multi-instance Service Graph
Connectors.

Note:   The Identification and Reconciliation Engine (IRE) uses strict
domain separation in releases prior to San Diego. That is, hierarchical
domains are not supported.

You must install the Domain Support - Domain Extensions Installer
(com.glide.domain.msp_extensions.installer) plugin before
working with the Service Graph Connectors tables. See Request domain
separation.

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

Tables that do not have a Domain (sys_domain) column are not domain-
separated. You can add a Domain (sys_domain) column to an existing
table. See Add a domain field to a table.

Note:

• The import set tables are not domain-separated.

• Transform histories are not domain-separated.

• The Key Value [cmdb_key_value] and Software Instance
[cmdb_software_instance] tables, which are related to the
Configuration Management Database (CMDB), are not domain-
separated.

For more information about domain separation for Service Graph
Connectors, see the Service Graph Connector Domain Separation article
in the Now Support Knowledge Base.

Related topics

• Domain separation for service providers

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

4

Zurich ServiceNow AI Platform Capabilities

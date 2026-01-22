# zurich_servicenow_ai_platform_capabilities_service_graph_connector_support_tools_2026-01-16-13-18-28

*Source: zurich_servicenow_ai_platform_capabilities_service_graph_connector_support_tools_2026-01-16-13-18-28.pdf*

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

## Service Graph Connector Support Tools

You can use the ServiceNow® Service Graph Connector Support Tools
application to resolve any issues or perform a general analysis on a
Service Graph Connector installed on your instance.

Request apps on the Store

Visit the ServiceNow Store website to view all the available apps and for
information about submitting requests to the store. For cumulative release
notes information for all released apps, see the ServiceNow Store version
history release notes.

Key features

The Service Graph Connector Support Tools application includes prebuilt
conversations as a response to an issue type and enables resolving
Service Graph Connector issues and to perform a general analysis.

The application provides capability to debug and resolve the following
types of issues:

Connection issues

Depending on the data source selected, asks to update or set required
properties, enables to run the Workflow Studio action corresponding to
the connector manually, and provides a link to HTTP logs for verifying the
response from the data source.

Data issues

Checks for customizations in Identification and Reconciliation engine
(IRE) rules, reconciliation rules, business rules, and mappings. Reviews
the field and import causing the issue, reprocesses the import row,
and provides the complete transformation information. Also, provides
additional troubleshooting steps.

Performance issues

Depending on the data source and import set selected, makes a
basic performance check and reviews the history of the Configuration
Management Database (CMDB) integration executions.

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

Mapping issues

Reviews mappings for input and output fields using the IntegrationHub ETL
store app.

The chatbot conversation also directs to the knowledge articles landing
page in the Now Support knowledge base, if available for a connector.

• Install Service Graph Connector Support Tools

You can install Service Graph Connector Support Tools if you have
the admin role. The application installs related ServiceNow® Store
applications and plugins if they are not already installed.

• Resolving Service Graph Connector issues

You can use the Service Graph Connector Support Tools application to
initiate a chatbot conversation with a virtual agent and resolve an issue
or perform a general analysis on a Service Graph Connector installed
on your instance.

## Install Service Graph Connector Support Tools

You can install Service Graph Connector Support Tools if you have
the admin role. The application installs related ServiceNow® Store
applications and plugins if they are not already installed.

Before you begin

• Ensure that the application and all of its associated ServiceNow Store
applications have valid ServiceNow entitlements. For more information,
see Get entitlement for a ServiceNow product or application.

Role required: admin

About this task

The following applications or plugins are installed with Service Graph
Connector Support Tools:

Integration Commons for CMDB (sn_cmdb_int_util)

Contains the CMDB Integrations Dashboard and a set of Robust
Transform Engine (RTE) transforms and script includes.

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

Glide Virtual Agent Lite (com.glide.cs.chatbot.lite)

Provides IT service assistance using several prebuilt IT Service
Management (ITSM) conversations.

Procedure

1. Navigate to All > System Applications > All Available Applications >
All.

2. Find the Service Graph Connector Support Tools application
(sn_sgc_support) using the filter criteria and search bar.

You can search for the application by its name or ID. If you
cannot find the application, you might have to request it from the
ServiceNow Store.

Visit the ServiceNow Store website to view all the available apps and
for information about submitting requests to the store. For cumulative
release notes information for all released apps, see the ServiceNow
Store version history release notes.

3. If you're prompted, follow the links to the ServiceNow Store to get any
additional entitlements for dependencies.

4. Select Install.

## Resolving Service Graph Connector issues

You can use the Service Graph Connector Support Tools application to
initiate a chatbot conversation with a virtual agent and resolve an issue
or perform a general analysis on a Service Graph Connector installed on
your instance.

If a user with the admin role has installed the Service Graph Connector
Support Tools application, you can initiate a chat conversation with a
virtual agent to resolve Service Graph Connector issues. The application
includes prebuilt conversations as a response to an issue type.

You can use the prebuilt conversations to debug and resolve the
following types of issues:

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

Connection issues

Depending on the data source selected, the virtual agent suggests you
to update or set required properties, run the Workflow Studio action
corresponding to the connector manually, and verify the response from
the data source using HTTP logs.

Data issues

The virtual agent suggests you to check for customizations in
Identification and Reconciliation engine (IRE) rules, reconciliation rules,
business rules, and mappings. Review the field and import causing the
issue, reprocess the import row, and view the complete transformation
information. Also, suggests to perform additional troubleshooting steps.

Performance issues

Depending on the data source and import set selected, the virtual
agent suggests you to make a basic performance check and review the
history of the Configuration Management Database (CMDB) integration
executions.

Mapping issues

The virtual agent suggests you to review mappings for input and output
fields using the IntegrationHub ETL store app.

Resolve a Service Graph Connector issue

Resolve the Service Graph Connector issues or perform a general
analysis using the Troubleshooting module available for Service Graph
Connectors.

Before you begin

Install Service Graph Connector Support Tools

Role required: admin

Procedure

1. Navigate to All > Service Graph Connectors > Troubleshooting.

2. In the Now Support window, select Click here to start a new
conversation.

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

3. Select Show me everything.

4. Select Service Graph Connector Help.

5. Select a help option.

Option
Description

Debug a specific Service Graph
Connector

Select to resolve an issue with
a Service Graph Connector
installed on your instance.

General analysis
Select to analyze an import
row or a Configuration
Management Database
(CMDB) integration execution.

6. Based on the selected help option, follow the help instructions to
resolve an issue or perform a general analysis.

7. (Optional) Close the conversation by selecting End the chat.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

7

Zurich ServiceNow AI Platform Capabilities

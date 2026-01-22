# zurich_servicenow_ai_platform_capabilities_cloud_discovery_solutions_comparison_2026-01-16-13-18-14

*Source: zurich_servicenow_ai_platform_capabilities_cloud_discovery_solutions_comparison_2026-01-16-13-18-14.pdf*

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

## Cloud discovery solutions comparison

Comparing cloud discovery solutions provides insights on the relative
strengths of each solution. The comparison showcases the number of
resource types supported by the solutions across AWS, Azure, and GCP.
The comparison can help you understand the capabilities of each
solution and better manage your CMDB when using one or multiple
methods.

Discovery and Service Mapping Patterns vs. Service Graph
Connectors

ITOM Visibility offers two primary solutions for discovering cloud resources
and mapping them into the Configuration Management Database
(CMDB): Cloud Discovery and Service Mapping Patterns and Cloud
Service Graph Connectors.

Patterns are the core of ITOM Visibility's native discovery capabilities.
They provide a deeper, more dynamic, and holistic view of your
infrastructure. Patterns use a variety of discovery methods: Agentless,
agent-based, and cloud-native, to create a unified, business-aware view
of your services. By leveraging machine learning, patterns automatically
map technical components to their business context, creating rich
relationships, and a comprehensive knowledge graph.

Service Graph Connectors, on the other hand, provides fast, point-in-time
data ingesting from existing systems. They assist you quickly ingest data
from specific sources like public cloud providers (AWS, Azure, GCP),
endpoint management systems, and security or network tools.

While Service Graph Connectors provides rapid data import, Patterns
provide the foundation for ongoing, automated service mapping
and deeper operational insights based on regular updates from the
ServiceNow Store. This difference is crucial for solving complex challenges
like certificate management, firewall auditing, and a wide range of other
service and operation use cases.

The choice between patterns and connectors affects coverage, level
of detail, the way data is modeled in the CMDB and the frequency of
update. While some resource types are supported by both solutions, the
data might be populated in different CMDB CI Classes. Understanding

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

these differences helps you plan a consistent and effective discovery
strategy.

By reviewing the coverage tables for AWS, Azure, and GCP, you can

• Identify which resources are supported by patterns, by connectors, or
both.

• Understand how the same resource type may be handled differently
(for example, patterns may bring in all zone data, while connectors
may only bring in zones tied to an instance).

• Decide on a solution per provider, considering its CI coverage or data
model. For example: Use connectors to discover your GCP resources,
but use patterns for AWS and Azure.

Discovery and Service Mapping Patterns and Service Graph Connectors
comparison

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

4

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 4, 800x517px]*

```
.......... ...... ....... ........ ...


..
---=.
---=.=***-
---=.+%#%-
....                                 ---=.+##%-
=--=.  .                             ---=.+##%-
---=.+**#:          .                ---=.+##%-
---=.*%#%-        :---:              ---=.+##%-
---=.*##%-        :=-=-              ---=.+##%-
---=.*##%-        :=-=-              ---=.+##%-
---=.*##%-        :=-=-  .           ---=.+##%-
---=.*##%-        :=-=-.****         ---=.+##%-
==== *%%%-        :===-:%%%#         -===.+%%%-
...: ::::.         .....-:::         ...: ::::.
.                 ..                 .
.....  .....  ... ......
```

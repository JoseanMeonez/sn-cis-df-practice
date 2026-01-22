# zurich_servicenow_ai_platform_capabilities_view_cmdb_benchmarks_2026-01-16-12-49-16

*Source: zurich_servicenow_ai_platform_capabilities_view_cmdb_benchmarks_2026-01-16-12-49-16.pdf*

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

## View CMDB benchmarks

CMDB calculates several CMDB Health benchmarks which then display
in the Benchmarks dashboard. These benchmarks are based on various
CMDB Health metrics, displaying monthly averages, trends, comparisons
to industry averages of your ServiceNow peers, and global benchmarks.

Before you begin

Role required: none

The CMDB Health Dashboard jobs must be enabled and health data
must be collected. Also, navigate to Benchmarks > Setup and ensure
that the CMDB KPIs are enabled under IT Operations Management.

About this task

CMDB provides the following benchmarks:

• % of non-compliant CIs

• % of duplicate CIs

• % of stale CIs

For an instance, each of these benchmarks is the calculated monthly
average for the corresponding CMDB Health metric. Calculating a
monthly average requires that there is a metric result value for each
day of the month. Therefore, each day on which the respective Health
Dashboard job did not run, is assumed with the aggregated result from
the run that is most recent to that day. The monthly average is then
calculated based on the sum of all the daily aggregated results for the
metric in that month, divided by the number of days of the month. For a
CMDB Health Dashboard job that ran multiple times in a single day, only
the results of the last run in that day are used for the monthly average
calculation.

Note:   The frequency of CMDB Health Dashboard job executions
depend on whether the job is enabled, its schedule and on manual
runs.

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

Global averages are based on the sum of monthly averages of all peer
instances, divided by the number of instances (aside from instances for
which the monthly average is 0).

Procedure

1. Navigate to Benchmarks > Dashboard.

2. Click the

icon and select IT Operations Management.

3. Click ALL or CMDB.

4. Click on a CMDB benchmark to drill down to trend data, and other
benchmark details.

Related concepts

• CMDB Health

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

4

Zurich ServiceNow AI Platform Capabilities

# zurich_servicenow_ai_platform_capabilities_cmdb_360_multisource_cmdb_2026-01-16-12-34-29

*Source: zurich_servicenow_ai_platform_capabilities_cmdb_360_multisource_cmdb_2026-01-16-12-34-29.pdf*

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

## CMDB 360/Multisource CMDB

CMDB 360 retains complete history about discovery sources and
proposed values, involved in updates of CI attributes. Use CMDB 360
data to track how the CMDB is populated by various discovery sources at
the CI attribute level. Also, to revert CI updates from a specific discovery
source, or to recompute attribute values using updated reconciliation
rules.

Starting with the Utah release, the Multisource CMDB feature is part of the
CMDB 360 feature. CMDB 360 provides all the functionality of Multisource
CMDB and additional capabilities such as an analytics dashboard, and
new query functionality. You can access all of the CMDB 360 capabilities
in the CMDB 360 view in CMDB Workspace.

How CMDB 360 works

When multiple discovery sources attempt to update the same
CI attribute, the Identification and Reconciliation Engine (IRE) uses
reconciliation rules to select a single discovery source for the update.
Without CMDB 360, details about the lower-priority discovery sources
whose values were rejected, are discarded. Also, it is difficult to identify
the source of an attribute value without CMDB 360.

With CMDB 360, the raw details for every discovery source and CI
combination are retained for both, discovery sources that were selected
for an update and all others that were not. CMDB 360 data, consisting
of records for each discovery source and CI combination, is stored in
the CMDB MultiSource Data [cmdb_multisource_data] table. You can
examine, query, and report on the CMDB 360 data store.

You can optionally exclude classes and their descendents from
collecting and processing CMDB 360 data. The CMDB MultiSource Data
[cmdb_multisource_data] table doesn't contain data for those excluded
classes. For more information, see Exclude classes from CMDB 360.

Note:   CMDB 360 supports non-CMDB tables. The widely used term
Configuration Item (CI), can also refer to a non-CMDB table record.
For information about support for non-CMDB tables, see IRE support
for non-CMDB tables.

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

CMDB 360 insights into data source processes

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

4

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 4, 2584x3642px]*

```

...      ....      ...
.:---:.  .:----:.  .:----:
.-:-+=-:  .--==:-:  :--==:-. :. ::-::.
:=-==-.   :=--=-.  .-=--=-     ......................
..        ..        ..
..:..     ..:.      .::.
.:----:.  .:----:.  .:-==-:. .  ..........
.--=+--:  .--==--:  :==+===. :. :::::::::-.
:----:    :----:    :----:     ................
.        ..        ..
.::..::::..::..::::..::.
.:-::--:::::-::--::::------. :  ::.:::::
.:=-+==::::-====-::::-====-. .  :::.....
..:-:::::::::-::::::::-:..
.
.:-.
.:=*#+:.           :  .....
.=####*:           :  .::::.
:=--=-

............ ..:.. .........
...........:.....::::.::::::.:.:.:.
.
............................................................
:::-==-=--------=---===-==:::::::::..      ..:::::::::::::::
:::::--::-----::::::::-:--::::::::............::::::::::::::
::::::::::::.        .:::::::::::: .....      ::::::::::::::
::::::::::: ......... .::::::::::::.        ..::::::::::::::
:::::::::::....       .:::::::::::::::.. .::::........::::::
-==-:---::::..     ..:..        ..::::::::::..  ..   ...::::
==+=-=----:--:::..::: .    .  ..  ..:::::::  :........  ::::
:-==--==--=++:::::::  ............  :::::::. .....     .::::
::--===-=:---:::::... .........    .:::::::::..     ..::::::
-==-::-:::::::::::::::.          .::::.....::::..:::::::::::
::::::::::.   .:..:::::::......:::.          .::::::::::::::
:::::::.-##=::::--:::::::::::::::  ........    :::::::::::::
:----:...-+#%#-:----:.:::::::::::  ........... .::::::::::::
::----*+++=#%#=-++++++:::::::::::             .:::::::::::::
::---=*-:::=+:.::::::*-:::::::::::::...  ....:::::::::::::::
:::::::::::..:::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
```

---
*Page 5*

After data is initially ingested from multiple data sources, several
processes are applied to standardize and reconcile the data before it
is stored in the CMDB. CMDB 360 provides insights that can help you
configure some of these processes.

Using CMDB 360

Use CMDB 360 to:

• Create a dynamic reconciliation rule.

• Control CI updates at the discovery source and CI attribute level.

• Visualize discovery sources of attribute values, at the attribute level.

• Modify reconciliation rules and then recompute CMDB data, reflecting
the updated reconciliation rules.

• Revert CMDB data integration from a specific discovery source, if,
for example, you realize that the discovery source is not reliable.
Recompute CI attribute values, while excluding the discovery source
that you want to ignore.

• Validate a new discovery source by comparing its data to data from
other discovery sources, which are known to be valid.

• Improve data management, data quality, and operational insights, by
querying on CMDB 360 data. Use the CMDB 360 query builder in CMDB
Workspace to create queries for CMDB 360 records, discovery sources,
and CI records.

Enable and configure CMDB 360

• Activate the ITOM Discovery License (com.snc.itom.discovery.license)
plugin.

• Navigate to All > Configuration > CMDB 360 Properties.
Then, in the CMDB 360 Properties pane ensure that the
glide.identification_engine.multisource_enabled (Enables CMDB 360)
property is set to true.

• Optionally, Exclude classes from CMDB 360.

By default, CMDB 360 tracks discovery source information for CIs from
CMDB classes and doesn't collect data for non-CMDB tables. You can

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

independently enable or disable tracking data for CMDB and for non-
CMDB classes, using these system properties:

• glide.identification_engine.multisource_cmdb_ci_enabled (Enables
capturing CMDB 360 data for CIs from CMDB classes)

• glide.identification_engine.multisource_non_cmdb_ci_enabled

(Enables capturing CMDB 360 data for CIs from non-CMDB classes

Report on CMDB 360 data

Use the CMDB 360 view in CMDB Workspace to gain insights into the
CMDB 360 data store. Build reports that, for example, do the followings:

• Find CIs not reported by any discovery source.

• Find discovery sources populating data in your CMDB.

• Compare attribute values across discovery sources.

• Compare attribute values between CMDB and other discovery source.

• Limit reports for CMDB 360 data, to a specific application service,
technical service, or a CMDB group.

See Sample CMDB 360/Multisource CMDB queries for more details.

Visualize CMDB 360 data

CMDB 360 is highly verbose in the user interface:

• On the Reconcliation Rules page in CI Class Manager, click the Preview
Data tab to see per attribute, discovery sources that are authorized to
update that attribute, in precedence order.

• On a CI form, click the CMDB 360 Data Preview related link to see per
CI attribute, current value in the CMDB and incoming values from other
discovery sources.

Logging

Enable logging for CMDB 360 by adding and enabling the system
property  glide.cmdb.logger.source.cmdb_multisource. In the Log
[syslog] table, search for entries in which source=“cmdb_multisource”.

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

## CMDB 360 experience in CMDB Workspace

The CMDB 360 view provides aggregations and analysis of CMDB 360
data which you can use to track activities and identify Potential issues
of discovery sources. You can also create different types of your own
queries and associated schedules and reports to explore CMDB data.

Use the CMDB 360 view in CMDB Workspace to access all of the CMDB
360 capabilities. For information about all CMDB 360 dashboard settings,
see Configure the CMDB 360 dashboard.

Note:   Most cards on the CMDB 360 dashboard support non-
CMDB tables in their aggregation, or can be configured to provide
support. However, the CIs not reported by discovery sources card,
for example, doesn't apply to non-CMDB tables. Creating queries for
non-CMDB tables is also supported. For information about support for
non-CMDB tables, see IRE support for non-CMDB tables.

Access

Requirements:

• Role requirement: sn_cmdb_user (CMDB user) or any role containing
sn_cmdb_user

• Additional requirement: Enable and configure CMDB 360

To access the CMDB 360 view in the CMDB Workspace, navigate to
Workspaces > CMDB Workspace. In the CMDB Workspace menu bar,
select CMDB 360.

Potential issues

Cards on the Potential issues tile show details about CIs with discovery
sources that are incorrectly reporting on the CIs.

CIs not reported by discovery sources

Lists CIs that are discovered by multiple discovery sources, but one or
more of the discovery sources has stopped reporting within a specified
number of days. The Number of days since CIs were last discovered by a
discovery source dashboard setting is used in the card's aggregation.

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

Drill down on this card to see a list view of the CIs for the card and the
specific discovery source per CI that is no longer reporting.

Example: You configure 7 days for the setting. A Linux server CI named
backup-linux.sea.com is reported by these discovery sources within the
specified number of days:

• ServiceNow - today.

• ServiceWatch - 4 days ago.

• AgentClientCollector - 8 days ago.

In this scenario, the CI shows on the CIs not reported by discovery sources
card, since AgentClientCollector reported over seven days ago.

Data mismatch

Lists CIs for which different discovery sources are reporting different
values. Attributes are considered mismatched when different discovery
sources report different values for the attribute. CIs that appear when you
drill down on this card can reveal issues with the individual CI, or your
reconciliation rules.

The specific records that appear in the drilled-down list view, depend on
the Data mismatch dashboard settings.

In the Data mismatch records list view, select an item in a Source
column to access the Multisource Data Preview page with details about
all discovery sources with values for the attribute. On the Multisource
Data Preview page you can use the Search Attributes box to search for
specific attributes and also choose one of the following options:

• All attributes: Shows all attributes of the selected class, regardless of
whether they have a value in the CMDB.

• Attributes with CMDB values: Shows only attributes of the selected class,
with a value in the CMDB.

• Attributes with multisource data: Shows all attributes of the selected
class, and for each attribute shows current CMDB value and any other
discovery sources with a value for the attribute.

Regardless of the option that you choose on the Multisource Data
Preview page, a discovery source value that was used for the current

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

CMDB value – is highlighted in green. These values are identical to the
CMDB value of the attribute.

Saved queries

The Saved queries card shows up to 20 of your CMDB 360 queries. You
can use the card to edit and run those queries, or create new queries.
Saved queries are sorted on both the card and list view by the most
recently created or updated queries.

If your instance has been upgraded from an instance that contained
Multisource Report Builder queries, then those queries appear on the
Saved queries card.

• Click a saved query to modify or view it before running.

• Click a query's action icon and then select Run.

• Click View All Queries to see all the Saved queries where you can
examine or run a query.

• Click Create Query to create a query of one of the following types:

• Get Records: Creates a query that you can use to explore your CMDB
360 data. It queries your CMDB 360 for CIs matching your criteria that
are reported by specified discovery sources.

• Find Gap: Creates a query that you can use to analyze gaps in
discovery sources reporting your CMDB 360 data. It queries discovery
sources that report CIs against discovery sources that don't report
those same CIs.

• Compare Attribute Values: Creates a query that you can use to
identify CIs with attribute values that differ across multiple discovery
sources or against the CMDB. It queries at least two discovery sources
and/or the CMDB for CIs that match your criteria.

• Schedule a CMDB 360 query for a report to run that query on a regular
basis. Scheduling a query enables you to create a CMDB 360 report
that integrates the query results with the platform Reporting feature.

Discovery sources

Cards in the Discovery sources tile show aggregated counts for your
discovery sources. This tile also includes coverage cards showing a

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

breakdown of CIs per the number of discovery sources reporting those
CIs.

Number of discovery sources

The total number of discovery sources that report CMDB 360 data.

Total CMDB 360 records

The total number of raw CMDB 360 records in the CMDB 360 data store
that contains records for each discovery source report, per each CI
attribute.

Reconciled CIs

The total number of unique CIs created in the CMDB after processing
incoming data from all discovery sources, including after reconciling
data from multiple discovery sources for the same CIs. For more
information, see CMDB Identification and Reconciliation.

Discovery source overviewt

The distribution of CMDB 360 CIs across all reporting discovery sources.

Coverage: CIs with a single discovery source

Shows CIs that are only reported by a single discovery source, with a
breakdown by the discovery source reporting those CIs. The number
on the chart is the actual total number of CIs with a single discovery
source, regardless of any dashboard settings. The number of records in list
views that appear when you drill down the chart, depends on dashboard
settings and can be only a subset of that total.

Coverage: CIs by number of discovery sources

Shows CIs reported by multiple discovery sources, grouped by the
number of discovery sources that are reporting those CIs.

You can use the following options to filter the calculated records in the
CMDB 360 data store that apply to all cards in the Discovery sources tile:

• All (default): Includes records from both CMDB and non-CMDB tables.

• CMDB CI: Includes records only from CMDB classes.

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

• Principal Class: Includes records only from principal classes. For
information about defining a class as principal and therefore including
that class in the Principal Class filter, see Create a CI class.

Various settings apply only to the coverage charts. They determine the
scope and type of data that is included in the coverage charts and can
greatly affect the performance of the associated calculation job:

• The dashboard Coverage settings determine the mixture of classes for
the records in drill-down list views. For information about these settings
and their effect, see Coverage cards.

• The system properties sn_cmdb_ws.ms.calculate_cmdb_only
and glide.identification_engine.multisource_non_cmdb_ci_enabled
determine if both CMDB and non-CMDB or CMDB only data, is included
in the coverage charts. For more information about these system
properties, see Components related to CMDB 360.

Note:   If the sn_cmdb_ws.ms.calculate_cmdb_only is true or
glide.identification_engine.multisource_non_cmdb_ci_enabled is
false, then both 'All' and 'CMDB CI' filters show CMDB data only
(non-CMDB data is ignored).

•

The sn_cmdb_ws.ms.report_class_ci_count_max_threshold system
property and the CMDB 360 Analytics Skipped Class
[sn_cmdb_ws_ms_skip_class] table, together, determine class inclusion
in the coverage charts.

If the record count for a class (CMDB or non-CMDB) in the CMDB
360 Data [cmdb_multisource_data] table exceeds the value set
by the sn_cmdb_ws.ms.report_class_ci_count_max_threshold system
property, then a record is created in the CMDB 360 Analytics
Skipped Class [sn_cmdb_ws_ms_skip_class] table and by default, the
class is skipped in future calculations for the coverage charts. You
can include a skipped class in the coverage charts by setting the
Override class CI records population column of a skipped class in the
sn_cmdb_ws_ms_skip_class table, to 'true'.

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

Note:   Some classes, when included or excluded from the
coverage charts, can greatly impact the overall performance
of the chart calculations. For more information, see Components
related to CMDB 360.

## Configure the CMDB 360 dashboard

Configure settings on the CMDB 360 of the CMDB Workspace to
determine how your CMDB 360 data is analyzed and aggregated. These
settings affect the data that appears on the cards and the records
shown when you drill down on those cards on your CMDB 360 dashboard.

About this task

For detailed information about CMDB 360-related components, such as
system properties, scheduled jobs, and tables, that are installed with
CMDB Workspace, see Components installed with CMDB Workspace.

Before you begin

Role required: cmdb_ms_admin

Procedure

1. Navigate to Workspaces > CMDB Workspace.

2. In the CMDB Workspace menu bar, select CMDB 360.

3. Select Settings.

4. Configure Global settings.
The Maximum number of records in a list view setting determines the
maximum number of records that can show when you drill down
on the cards in the CMDB 360 dashboard (drill-down set). If the
total number of returned records is greater than the specified setting
value, the dashboard trims the list view output according to this
setting and the settings of individual cards.
You can use this setting to limit the number of records that CMDB 360
must process. The setting applies to these cards:

• CIs not reported by discovery sources

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

• Data mismatch

• Coverage: CIs with a single discovery source

• Coverage: CIs by number of discovery sources

The CMDB 360 dashboard defaults this value to 100,000.

5. Configure Potential issues settings.
These settings affect the calculations for cards on the CMDB 360
view/Potential Issues tile and the list of CIs that appear when you drill
down on those cards.

a. Configure CIs not reported by discovery sources.
The Number of days since CIs were last discovered by a
discovery source setting determines the number of days used
in the calculation of the CIs not reported by discovery sources
card. The card shows CIs that are discoverable by multiple
sources, but at least one discovery source hasn't reported on that
CI in the specified number of days.

b. Configure Data mismatch.

These settings determine the classes of CIs included in the
calculation and in the drill-down list views of the Data mismatch
card. These settings determine which classes to use for the card
and the relative weight (%) of each of those classes in the card
calculations.

Using these settings, add the classes for which you are interested
in seeing CMDB 360 mismatch data. Regardless of the classes
that you add in the Data mismatch settings, the ‘Maximum
number of records in a list view’ setting, is always in effect when
you drill down the card (100,000 by default).

Setting
Description

Automatic data weights

Evenly distributes weights
among any added classes.
The global setting of
‘Maximum number of records
in a list view’ is evenly divided

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

Setting
Description

between all added classes so
that each class can contribute
an equal number of records to
the drill-down set.

For example, if you added
four classes, the weight of
each class = 25. Therefore, the
system adds to the set of drill-
down records, up to 25,000
CMDB 360 records (25% of
100,000) of each added class.

Manual data weights

Custom weight (%) for each
added class. The global setting
of ‘Maximum number of
records in a list view’ is divided
between the added classes,
according to the specified
class weights.

For example, if you added two
classes, class A weight = 25
and class B weight = 75. The
system adds to the set of drill-
down records, up to 25,000
CMDB 360 records (25% of
100,000) of class A, and up to
75,000 CMDB 360 records (75%
of 100,000) of class B.

Select CI classes you want to
include in the calculation

Specify the CI classes that you
want to check for attribute
mismatches. CI classes you
specify also include any child
classes.

Attributes are considered
mismatched when different

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

Setting
Description

discovery sources report
different values for the
attribute.

Show CIs where EVERY
attribute doesn't match

Select to include only CIs
with a mismatch between
discovery sources for every
attribute that you specify.

Show CIs where ANY attribute
doesn't match

Select to only include CIs
with a mismatch between
discovery sources for any
attribute you specify.

Select an attribute
Specify the attributes that you
want to check for mismatches.

6. Configure Coverage settings.

These settings affect the calculations related to the coverage cards
(‘Coverage: CIs with a single discovery source’ and ‘Coverage: CIs
by number of discovery sources’) in the Discovery Sources tile on the
CMDB 360 view. These settings determine the mixture of classes in the
drill-down set of records.

Using these settings, you can give priority to classes for which you are
most interested in seeing CMDB 360 data in the Coverage charts.
The number of records that you can drill down to in the Coverage
charts, is limited by the global setting ‘Maximum number of records in
a list view’ (100,000 by default). Regardless of your settings and class
priorities, the ‘Maximum number of records in a list view’ setting, is
always in effect.

By default, the classes of the records in the drill-down set are random.
You can add classes in this Coverage settings to ensure that your
preferred classes have priority in being included in the drill-down set
of records. You can prioritize any number of classes and assign a
weight (%) for each of those classes within the total number of drill-
down records.

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

Setting
Description

Automatic data weights

Evenly distributes weights among
any added classes. The global
setting of ‘Maximum number of
records in a list view’ is evenly
divided between all added
classes so that each class can
contribute an equal number of
records to the drill-down set.

For example, if you added four
classes, the weight of each class
= 25. Therefore, the system adds
to the set of drill-down records,
up to 25,000 CMDB 360 records
(25% of 100,000) of each added
class.

Manual data weights

Custom weight (%) for each
added class. The global setting
of ‘Maximum number of records
in a list view’ is divided between
the added classes, according to
the specified class weights.

For example, if you added two
classes, class A weight = 25 and
class B weight = 75. The system
adds to the set of drill-down
records, up to 25,000 CMDB 360
records (25% of 100,000) of class
A, and up to 75,000 CMDB 360
records (75% of 100,000) of class
B.

Select CI classes you want to
include in the calculation

Prioritized classes for which
you are most interested in

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

Setting
Description

seeing CMDB 360 data in the
Coverage charts (‘CIs with a
single discovery source’ and
‘CIs by number of discovery
sources’).

CI classes that you specify also
include any child classes.

Using the Coverage settings, the system calculates an allowance of
records per class, in the drill-down set of records. If the number of
actual records per added class, is less than the computed allowance
for that class, then the system adds records of random classes, up to
the computed allowance for the class.

7. Select Save.

## Create a Get Records query

Create a Get Records query from the CMDB 360 dashboard of your
CMDB Workspace to help you explore your existing CMDB 360 data.

Before you begin

Role required: sn_cmdb_user and either cmdb_ms_admin or
cmdb_ms_editor

Procedure

1. Navigate to Workspaces > CMDB Workspace.

2. In the CMDB Workspace menu bar, select CMDB 360.

3. On the Saved Queries tile, select Create Query.

4. Select I want to get CMDB 360 data.

5. Select the CI classes to include in the query.

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

You can select a class to open the condition builder. Use the
condition builder to specify conditions that must be met for each
class. Use And or Or to specify multiple conditions.

Select All Classes if you want to include all CI classes without
conditions.

6. Select Continue.

7. Select discovery sources to query on.
The query retrieves CMDB 360 data that originates from the discovery
sources you specify.

You can leave the Select discovery sources prompt empty to retrieve
data for all discovery sources.

8. Select Continue.

9. On the form, select the options:

Results Layout form

Field
Description

Show unique CMDB 360 records

Select if you want to see
only unique CMDB 360 records.
Records for the same CIs from
different discovery sources are
consolidated.

Show CI records by discovery
source

Select if you want to see records
for each CI and discovery
source pair.

Limit results to

Limits the query results to CIs
that belong to a service or
CMDB group. When you select
Application Services, Technical
Services, or CMDB Groups, a
prompt appears. You can use
the prompt to specify the service
or group that you want the
query to filter for.

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

10. Select Continue.

11. Enter a name and description for your query.

12. Select Save .

What to do next

Run the query at least once if you want to create a schedule or report.

On the CMDB 360 Query Results page:

• If the number of results exceeds the number of results appearing on the
page:

• Select Load More Results: To show the next page of results. The
number of results that appear on each result page is specified by
the glide.identification_engine.multisource.query.batch.limit system
property (100 items by default).

• Select Load All Results: To show all results, up to the limit specified
by the glide.identification_engine.multisource.query.max.limit system
property (10000 by default).

• Select a CMDB 360 Source link to easily access preview data of a
source and see more details.

• You can select Create Schedule to set up a schedule that runs your
query on a regular basis. Scheduling your query enables you to use the
query results in reports you create.

• After creating a schedule, you can select Create Report to configure a
report that you can manage using Reporting capabilities.

• On the Query Results page, access a record to view further details. For
example, select a link in the Primary Record column, and then in the CI
Details page, select View CMDB 360 Data.

## Create a Find Gap query

Create a Find Gap query from the CMDB 360 dashboard of your CMDB
Workspace to help you find CIs that are not being reported by a
discovery source.

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

Before you begin

Role required: sn_cmdb_user and either cmdb_ms_admin or
cmdb_ms_editor

About this task

Gaps in discovery source reporting occur when at least one discovery
source reports on the CI and another doesn't, enabling you to identify
discovery sources that might have an issue.

Procedure

1. Navigate to Workspaces > CMDB Workspace.

2. In the CMDB Workspace menu bar, select CMDB 360.

3. Select Create Query.

4. Select I want to find gaps in data between discovery sources.

5. Select the CI classes that you want to check for gaps.

6. Select Continue.

7. Select non-reporting discovery sources.
A non-reporting discovery source is a discovery source that doesn't
report CIs as expected. Multiple non-reporting discovery sources
have an OR condition with each other.

8. Select one or two reporting discovery sources.
These discovery sources report the CI as expected and act as a
baseline for identifying the gap in reporting.

You can leave the Select reporting discovery sources for gap
tracking prompt empty to include all discovery sources in the query.

9. Select Continue.

10. On the form, select the options:

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

Results Layout form

Field
Description

Show unique CMDB 360 records

Select if you want to see
only unique CMDB 360 records.
Records for the same CIs from
different discovery sources are
consolidated.

Show CI records by discovery
source

Select if you want to see records
for each CI and discovery
source pair.

Limit results to

Limits the query results to CIs
that belong to a service or
CMDB group. When you select
Application Services, Technical
Services, or CMDB Groups, a
prompt appears where you can
specify the service or CMDB
group that you want the query
to filter for.

11. Select Continue.

12. Enter a name and description for your query.

13. Select Save .

What to do next

Run the query at least once if you want to create a schedule.

On the CMDB 360 Query Results page:

• If the number of results exceeds the number of results appearing on the
page:

• Select Load More Results: To show the next page of results. The
number of results that appear on each result page is specified by
the glide.identification_engine.multisource.query.batch.limit system
property (100 items by default).

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

• Select Load All Results: To show all results, up to the limit specified
by the glide.identification_engine.multisource.query.max.limit system
property (10000 by default).

• Select a CMDB 360 Source link to easily access preview data of a
source and see more details.

• You can select Create Schedule to set up a schedule that runs your
query on a regular basis. Scheduling your query enables you to use the
query results in reports you create.

• After creating a schedule, you can select Create Report to configure a
report that you can manage using Reporting capabilities.

• On the Query Results page, access a record to view further details.

## Create a Compare Attribute Values query

Create a Compare Attribute Values query from the CMDB 360
dashboard of your CMDB Workspace to help you find CIs with
mismatched attribute values between discovery sources.

Before you begin

Role required: sn_cmdb_user and either cmdb_ms_admin or
cmdb_ms_editor.

About this task

The query enables you to determine if there’s an issue with how a
discovery source reports a CI.

The Compare Attribute Values query compares CIs from different
discovery sources for mismatched values. Mismatches occur when a
discovery source reports attribute values for a CI that are different from
values reported by other discovery sources or the CMDB. You can use the
query to identify these CIs and reconcile the attribute values, or fix any
issues with the discovery sources.

Procedure

1. Navigate to Workspaces > CMDB Workspace.

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

2. In the CMDB Workspace menu bar, select CMDB 360.

3. Select Create Query.

4. Select I want to compare attribute values between discovery sources
or against the CMDB.

5. Select a CI class that you want to compare attribute values for.
You can select a selected class to open the condition builder. Use
the condition builder to specify conditions that must be met for each
class. Use And or Or to specify multiple conditions.

6. Select Continue.

7. On the Attributes to compare form, select options:

Option
Description

Any attribute doesn't match

Select if you want to retrieve CIs
where there's a mismatch with
any specified attribute values
between the discovery sources.

Every attribute doesn't match

Select if you want to retrieve CIs
where there's a mismatch with
every specified attribute value
between the discovery sources.

Select attributes to compare

Specify the attributes that
you want to compare for
mismatched values.

8. Select Continue.

9. Select the discovery sources that you want to compare attribute
values for.

Discovery sources form

Field
Description

Compare to CMDB

Select if you want to compare
the specified attribute values
against your CI attributes

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

Field
Description

recorded in the CMDB. When
you compare against the CMDB,
you only need one discovery
source.

Select discovery sources

The discovery sources that you
want to compare. Select at least
two.

Limit results to

Limits the query results to CIs
that belong to a service or
CMDB group. When you select
Application Services, Technical
Services, or CMDB Groups, a
prompt appears. You can use
the prompt to specify the service
or group that you want the
query to filter for.

10. Select Continue.

11. Enter a name and description for your query.

12. Select Save .

What to do next

Run the query at least once if you want to create a schedule.

On the CMDB 360 Query Results page:

• If the number of results exceeds the number of results appearing on the
page:

• Select Load More Results: To show the next page of results. The
number of results that appear on each result page is specified by
the glide.identification_engine.multisource.query.batch.limit system
property (100 items by default).

• Select Load All Results: To show all results, up to the limit specified
by the glide.identification_engine.multisource.query.max.limit system
property (10000 by default).

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

• Select a CMDB 360 Source link to easily access preview data of a
source and see more details.

• You can select Create Schedule to set up a schedule that runs your
query on a regular basis. Scheduling your query enables you to use the
query results in reports you create.

• After creating a schedule, you can select Create Report to configure a
report that you can manage using Reporting capabilities.

• On the Query Results page, access a record to view further details.

## Schedule a CMDB 360 query for a report

Set up a schedule to regularly query for CMDB 360 data. Use scheduled
queries to provide CMDB 360 data to reports you create, which can
provide insight into how discovery sources populate the CMDB and the
reliability of those discovery sources.

Before you begin

Ensure that you run the CMDB 360 query at least once.

Role required: sn_cmdb_user and either cmdb_ms_admin or
cmdb_ms_editor.

Procedure

1. Navigate to Workspaces > CMDB Workspace.

2. In the CMDB Workspace menu bar, select CMDB 360.

3. On the Saved queries tile, create or access a CMDB 360 query.
If you created a new query, you must run the query at least once
before you can select Create Schedule on the query results page.

4. Select Schedule query on the Results Layout page of the query.
To create a schedule for the Compare attributes values query, select
Schedule query on the Discovery Sources page.

5. Specify a Run frequency and time you want to schedule the query to
run.
When you select Weekly or Monthly, you must also select a day of
the week or calendar day, respectively.

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

6. Select Save.

What to do next

Create a CMDB 360 report to integrate CMDB 360 query results with
platform Reporting capabilities. Each run of the query automatically
updates the generated report.

Related tasks

• Create a Get Records query

• Create a Find Gap query

• Create a Compare Attribute Values query

## Exclude classes from CMDB 360

Prevent CMDB 360 from collecting, storing, and analyzing data for classes
for which it isn't needed. CMDB 360 processes large amounts of data.
Therefore, excluding classes can help improve the performance of the
Multisource Dashboard Analytics Population scheduled job and of CMDB
360 queries.

Before you begin

Role required: cmdb_ms_admin (automatically included in the CMDB
Admin role)

About this task

To exclude classes from CMDB 360, you must directly manage records in
the CMDB 360 denied classes [cmdb_multisource_deny_class] table. For
each class that you want to exclude, add an active record for that class.
Excluding a class from CMDB 360 also automatically excludes any of its
descending classes. In the base system, the CMDB 360 denied classes
table is populated by default with some classes, such as dscy_net_base
and discovery_net_base.

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

Procedure

1. Select All and then, in the Filter navigator, enter
cmdb_multisource_deny_class.list to open the CMDB 360
denied classes table.

2. Select New and then fill out the form.

• Select the class to exclude (with its descendents) in the field
labeled Deny this class and all extended classes from this class to
store CMDB 360 data.

• Ensure that Active is selected. If Active isn't selected, then the
specified class isn't excluded from CMDB 360.

• Select Submit.

Result

Existing data for the specified class and its descending classes will be
gradually removed from the CMDB 360 Data [cmdb_multisource_data]
table using record cleaners, without any impact to the system.

What to do next

You can deselect Active or completely delete a record for a class that
you want to include in CMDB 360 data collection.

## Recompute CI attribute values

Modify reconciliation rules, or exclude a discovery source which is found
to be invalid. Then, use the updated reconciliation rules in recomputing
CI attribute values, for which those reconciliation rules or discovery
source are applicable to.

Before you begin

Enable and configure CMDB 360.

If you want to recompute to apply updated reconciliation rules, then you
must first update the reconciliation rules.

Role required: itil_admin or sn_cmdb_admin

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

About this task

CMDB 360 automatically generates a recompute task for each
recompute that you submit. If you submit multiple recomputes, a
recompute task is generated for each operation, but only one
task runs at any given time. To list all recompute tasks, enter
cmdb_multisource_recomp_task.list in the left navigation search
box.

There is a maximum number of records that can be included in a
single recompute operation. This number is specified by the system
property glide.identification_engine.multisource.recompute.max.ci.limit
(100,000 by default).

Note:

• Recompute skips CIs which are reported by multiple discovery
sources, but with different class names.

• Recomputing CI attribute values is not supported with non-CMDB
tables.

Procedure

1. Navigate to All > Configuration > CI Class Manager.

2. Select a class from the CI Classes hierarchy list.

3. In the left-side pane, expand Class Info, and select Reconciliation
Rules.

4. On the Reconciliation Rules page, click Recompute.

5. Select the Recompute Type.

•

Replace values from the specified discovery source with
value from the discovery source next in priority, according to
reconciliation rules: Recompute attribute values for the class
CIs, applying priorities specified in reconciliation rules and while
excluding the specified Discovery Source. Records for the

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

discovery source you are excluding, are also removed from the
CMDB 360 data store.

This operation applies to data that exists in the CMDB. If
reconciliation rules remain in effect for the discovery source that
you have excluded, then future data from that discovery source,
can populate the CMDB.

• Apply updated reconciliation rules: Recompute attribute values
for the class CIs, applying the updated reconciliation rules which
are now in effect.

6. Select the Recompute Scope.
The scopes grow from one option to the next:

• Recompute only CIs of this class: Basic scope of CIs to
recompute.

• Recompute CIs of this and derived classes: Expand the basic
scope to include CIs from derived classes.

• Recompute CIs of this and derived classes, along with selected
related items: Expand the previous scope to also include CIs from
specified related items. Select the related items to include in the
recompute.

7. Select the Delete action for CIs for which the excluded discovery
source, is the only discovery source.

• Delete record: Delete the CI record from CMDB.

• Set record attributes to custom value: Set a specified CI attribute
to a custom value to remove the CI from regular operations
without deleting the CI. For example, set the Operational status
attribute to Retired.

8. Select Next.

9. On the Review page, carefully review the counts for the affected CIs
to ensure that all record counts are as you expect.

10. Select Back to adjust any settings for the recompute.

11. Select Recompute.

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

What to do next

You can do any of the followings:

•

In the status message that appears for the recompute operation, click
the link to see the CMDB 360 Recompute Task for more details. The
Recompute Task shows the progress and status of the recompute
operation.

You can abort the recompute by setting Status to Closed Incomplete
and selecting Update. You can then set Status back to Work in progress
to resume recompute from where it was aborted.

• Enter cmdb_multisource_recomp_task.list in the left navigation
search box, to see the status and progress of all recompute tasks.

## Multisource Report Builder (legacy)

Improve CMDB data management by querying and reporting on
Multisource CMDB data. Use the Multisource Report Builder to gain
insights about how discovery sources are populating the CMDB and their
reliability. You can then adjust reconciliation rules to improve the quality
of CMDB data, if needed.

CMDB 360 in CMDB Workspace

Starting with the Zurich release, the Multisource CMDB feature is part
of the CMDB 360 feature which is accessible in the CMDB Workspace.
Create, view, modify, schedule, create reports, and run CMDB 360
queries using the CMDB 360 query builder in the CMDB Workspace store
app. Use the CMDB 360 query builder to create queries of the following
types:

• Get Records: Queries your discovery sources for CIs that match your
criteria.

• Find Gap: Queries for gaps in discovery sources reporting your CMDB
360 data. Queries discovery sources that report CIs against discovery
sources that don't report those same CIs.

• Compare Attribute Values: Queries for CIs with attribute values that
differ across multiple discovery sources or against the CMDB. Queries at

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

least two discovery sources and/or the CMDB for CIs that match your
criteria.

Legacy Multisource Report Builder

Instead of using the CMDB 360 query builder in CMDB Workspace, you
can still use the legacy Multisource Report Builder as described in this
topic.

After you create a Multisource query in the Multisource Report Builder,
you can run the query to see the results. You can then also create a
Multisource report that integrates the Multisource query results with the
platform Reporting capabilities. High level steps for creating a Multisource
report:

1. Create a query, then save and run it.

2. Create a schedule for the query.

3. Create a Multisource report that is based on the Multisource query.

You can create queries that find:

• All the discovery sources populating data in your CMDB.

• CIs not reported by any discovery source.

• All CIs discovered by one discovery source, but not by another
discovery source.

You can create other queries that show differences in CI attribute values
between multiple data sources, while being compared to the CMDB:

•

Show how an attribute value is different between a discovery source
and the current CMDB record. For example, find Hardware CIs with
different location than what SCCM reports.

•

Show how an attribute is different between SourceA, SourceB, and
SourceC. For example, show all Computer CIs where RAM is different
between SCCM, ServiceWatch, and CMDB.

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

You can show query results by CI records, Multisource CMDB data
records, or discovery sources. You can also limit the report results to CIs
within a specific application service, technical service, or a CMDB group.

Create a Multisource query

Query the Multisource CMDB data to gain insights about how discovery
sources are populating the CMDB, and then use that query to create a
Multisource data report.

Before you begin

Enable and configure CMDB 360.

Role required: cmdb_ms_editor

About this task

The Multisource Report Builder page updates dynamically as you set
fields. Therefore, some of the fields that are described in the steps below
might not appear.

Procedure

1. Navigate to All > Configuration > Multisource Report Builder.

2. On the Multisource Report Builder page, select a query to edit or run,
or click New.

3. Enter Name and Description for the query.

4. Select the Result type for the query.

• CI records: Results show unique CIs from the Multisource CMDB
data store.

• Multisource data records: Results show all entries of CI/discovery
source combinations from Multisource CMDB data.

• Discovery sources: Results are grouped by discovery sources that
match the query criteria.

5. Select Only show difference to show differences in CI attribute values
and then select the Type of difference.

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

• Between CMDB record and discovery source: Show differences
in attribute values between the CMDB data and the specified
discovery sources.

• Between discovery sources: Show differences in attribute values
between specified discovery sources based on Multisource data.

6. Select the Class to apply the query to, or select All Classes to
apply the query to all classes. Use the condition builder to specify
conditions that must be met for the class. Use And or Or to specify
multiple conditions.

7. Use the list collector to select one or more Discovery source items to
query on.

8. Set Field to compare to the class attributes for which to show
differences.
Use the OR and AND operators to compare based on multiple
attributes. The list of attributes is a pre-populated subset of the class
attributes, to which you cannot add or remove items.

9. Set Limit results to to limit the query results to CIs that belong to a
specific application service, technical service, or a CMDB group.

10. Click Save and then click Run.

What to do next

• On the CMDB Multisource Query Results page:

• If the number of results exceeds the number of results appearing on
the page:

• Click Load More Results: To show the next page of results. The
number of results that appear on each result page is specified by
the glide.identification_engine.multisource.query.batch.limit system
property (100 items by default).

• Click Load All Results: To show all results, up to the limit specified by
the glide.identification_engine.multisource.query.max.limit system
property (10000 by default).

• Click a Multisource CMDB value link or a CI value link to access the
respective records and see more details.

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

• In the Configuration Item column, click a CI link to open the CI form.
In the Related Links section on the CI form, click the Multisource Data
tab to show Multsource data, such as discovery sources, related to
the CI.

• Create a schedule for the query and ensure that the schedule runs at
least once. This step is required for creating a Multisource report.

Note:   Initially, after creating a query, both the Create Schedule
and the Create Report buttons are grayed out. Only after saving
the query, you can create and run a schedule for the query, and
only then you can create a report that is based on the query.

Schedule a Multisource query

After saving and running a Multisource query, create a schedule for the
query to run automatically on a set schedule. Query results are stored in a
results table and you can configure email addresses for the results to be
sent to or include the results in CMDB dashboards.

Before you begin

The query for the schedule must be already saved and run at least one
time.

Role required: cmdb_ms_user

Procedure

1. Navigate to All > Configuration > Multisource Report Builder.

2. On the Multisource Report Builder page, select the query that you
want to create a schedule for.

3. On the Multisource Report form, click Create Schedule.

4. On the Scheduled Email of Multisource Report Builders, click New.

5. Fill in the Scheduled Email of Multisource Report Builders form.

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

Field
Description

Query
Saved query that was created in
Multisource Report Builder.

Users
Users to email the query results
to.

Groups
User groups to email the query
results to.

Run

Time

Frequency and time to run the
query automatically.

When you set Run to On
Demand, the query runs only
when you run it manually.

Email addresses
More ad-hoc email addresses to
email the query results to.

Subject

Text that will appear as the
subject of the email with the
query results.

Introductory message

Text that is included in the body
of the email with the query
results.

Type

Type of the file with the query
results, which will be attached to
the email.

Zip output
Enables zipping of the results file.

Conditional

Enable a condition for running
the query and specify the
condition in the Condition field. If

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

Field
Description

the specified condition isn't met,
the query doesn't run.

Condition

Condition that must be met for
the query to run (Java script).

Appears only if Conditional is
selected.

Omit if no records
Disable sending an email for a
query run that returns no results.

Note:   When using update sets to port Multisource schedules
from a non-production to a production environment, check the
Users and Groups settings in the schedule. Any user or group that
doesn't exist in the production environment, and which needs
to receive the query results, must be re-added in either of the
following ways:

• Manually created in the production environment. In this
case, you must also remove the invalid user or group in
the production environment (ported from non-production
environment) from any schedules and add the new user or
group instead.

• Explicitly ported from the non-production to production
environment.

6. Click Submit.

What to do next

• If Run is set to On Demand in a schedule, or if you need to run a query
randomly even if it has a recurring schedule, you can manually run that
query as follows:

1. • Navigate to All > Configuration > Multisource Report Schedules.

2. • In the Scheduled Email of Multisource Report Builders list view, select
the query that you want to run.

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

3. • On the Scheduled Email of Multisource Report Builder form, click
Execute Now.

• Create a Multisource report for the query, that integrates the
Multisource query results with the platform Reporting feature.

Create a report based on a Multisource (CMDB 360) query

After creating, saving, running, and scheduling a Multisource (CMDB 360)
query, you can create a Multisource (CMDB 360) report that integrates
the query results with the platform Reporting feature. You can for
example, include such Multisource (CMDB 360) report in the platform
CMDB dashboards.

Before you begin

The Multisource (CMDB 360) query for the report must be already saved,
have a schedule, and must have already run at least once.

Role required: cmdb_ms_user

About this task

Creating a report that is based on a Multisource (CMDB 360) query,
creates a report source which you can then manage using Reporting
capabilities.

Note:   If you are using the CMDB 360 view in CMDB Workspace to
generate the CMDB 360 query and the report, you can skip to step 4
in the procedure below.

Procedure

1. Navigate to All > Configuration > Multisource Report Builder.

2. In the Multisource Report Builder list view, select the query that you
want to create a schedule for.

3. On the Multisource Report form, click Create Report.

4. On the Create a report form, click Save or Run.

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

A report shows the results for the most recent query run. If meanwhile
the query has changed, then the report shows results that are out of
synchronization with the query. When you update the query, ensure to
immediately run the updated query so that the report is synchronized
with the query.

What to do next

To add a Multisource (CMDB 360) report to the CMDB Correctness
Dashboard for example, see Add a report to a dashboard.

Sample CMDB 360/Multisource CMDB queries

Use sample queries to create your own CMDB 360/Multisource CMDB
queries.

Discrepancy in multiple attributes between multiple discovery
sources

Field
Setting

Name

Discrepancy in multiple attributes
between multiple discovery
sources (discovery source vs.
discovery source)

Description

Find Linux servers with name
containing “backup” which
have discrepancy in Disk
Capacity OR CPU Count
OR Serial Number between
discovery sources ServiceNow/
ServiceWatch/SCCM/Tivoli.

Result type
Multisource data records

Only show difference
Selected

Type of difference
Between discovery sources

Class
Linux Server [cmdb_ci_linux_server]

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

Field
Setting

Conditions
[Name] [contains] [backup]

Discovery Source
ServiceNow/ServiceWatch/SCCM/
Tivoli

Field to compare
Disk Capacity OR CPU Count OR
Serial Number

Limit results to
All

Discrepancy in multiple attributes between CMDB record and
discovery sources

Field
Setting

Name

Discrepancy in multiple attributes
between multiple discovery
sources (CMDB vs. discovery
sources)

Description

Find Linux Servers with name
containing “backup” which have
discrepancy in Disk Capacity
AND CPU Count AND Fully
Qualified Domain Name for
discovery sources ServiceNow/
ServiceWatch/SCCM

Result type
Multisource data records

Only show difference
Selected

Type of difference
Between CMDB record and
discovery source

Class
Linux Server [cmdb_ci_linux_server]

Conditions
[Name] [contains] [backup]

Discovery Source
ServiceNow/ServiceWatch/SCCM

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

Field
Setting

Field to compare
Disk Capacity AND CPU Count
AND Fully Qualified Domain Name

Limit results to
All

Servers discovered by ServiceNow but not by Tivoli

Field
Setting

Name
Missing Discovery by Tivoli

Description
Servers discovered by ServiceNow
but not by Tivoli

Result type
CI records

Class
Server [cmdb_ci_server]

Discovery Source

[is] [ServiceNow]

[is not] [Tivoli]

Limit results to
All

All discovery sources for backup servers

Field
Setting

Name
Discovery Sources Backup Servers

Description
All discovery sources for backup
servers

Result type
Data sources

Class
Server [cmdb_ci_server]

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

Field
Setting

and class condition:

[Host name][starts with][backup]

Limit results to
All

All CMDB 360/Multisource CMDB records where the reported
value of Location is different between Altiris and Tivoli discovery
sources

Field
Setting

Name
Compare Location-Altiris vs. Tivoli

Description

List all Multisource CMDB records
where the reported value of
Location is different between Altiris
and Tivoli discovery sources

Result type
Multisource data records

Only show difference
Selected

Type of difference
Between discovery sources

Discovery Source

• Altiris

• Tivoli

Field to compare
Location

Limit results to
All

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

All CMDB 360/Multisource CMDB records for Linux Server, where
the Location value is different than the reported value by Tivoli

Field
Setting

Name
Linux Server Location - Diff than
Tivoli value

Description

All Multisource CMDB records for
Linux Server, where the Location
value is different than the value
reported by Tivoli.

Result type
Multisource data records

Class
Linux Server

Only show difference
Selected

Type of difference
Between CMDB record and
discovery source

Discovery Source
[is][Tivoli]

Field to compare
Location

Limit results to
All

## Components related to CMDB 360

Several types of components are related to CMDB 360 (included in the
com.snc.cmdb plugin), such as tables and properties.

Properties

Open the CMDB 360 Properties page by navigating to All > Configuration
> CMDB 360 Properties. You can hover over the '?' icon for a property, to
show property names.

You must have the cmdb_ms_admin role to modify property values.

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

Property
Description

glide.identification_engine.multiso
urce_enabled

Enables CMDB 360.

• Type: true | false

• Default value: false

• Location: CMDB 360 Properties
page

glide.identification_engine.multiso
urce_cmdb_ci_enabled

Enables capturing CMDB 360 data
for CIs from CMDB classes (derived
from the cmdb_ci class).

• Type: true | false

• Default value: true

• Location: CMDB 360 Properties
page

glide.identification_engine.multiso
urce_non_cmdb_ci_enabled

Enables capturing CMDB 360 data
for CIs from non-CMDB classes
(not derived from the cmdb_ci
class). For example, the Serial
Number [cmdb_serial_number]
class, or the Software instance
[cmdb_software_instance] class.

• Type: true | false

• Default value: false

• Location: CMDB 360 Properties
page

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

Property
Description

glide.identification_engine.multiso
urce.query.batch.limit

Max number of items to show per
query results page, in the CMDB
360 Report Builder. Changing the
value of this property, might affect
performance when running a
query.

• Type: numeric

• Default value: 100

• Location: CMDB 360 Properties
page

glide.identification_engine.multiso
urce.query.max.limit

Max number of query results
to show when you click Load
All Results in the CMDB 360
Report Builder. Changing the value
of this property, might affect
performance when running a
query.

• Type: numeric

• Default value: 10000

• Location: CMDB 360 Properties
page

glide.identification_engine.multiso
urce.recompute.max.ci.limit

Max number of CIs that can
be included in a CMDB 360
recompute operation.

• Type: numeric

• Default value: 100000

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

Property
Description

• Location: CMDB 360 Properties
page

glide.cmdb.logger.source.cmdb_
multisource

Enable logging for CMDB 360.
CMDB 360 logs are stored in the
Log [syslog] table with source set
to "cmdb_multisource".

• Type: string

• Values: info, warn, error, debug,
or debugVerbose

• Location: Add to System
Properties [sys_properties] table.

sn_cmdb_ws.ms.calculate_cmdb_
only

Limits the scope of data in
the Discovery sources tile in the
CMDB 360 dashboard in CMDB
Workspace, to CMDB classes only
(derived from the cmdb_ci class).

• Type: true | false

• Default value: true

• Values:

• True: Include data only from
CMDB classes.

• False: Include data from CMDB
and non-CMDB tables.

• Location: Add to System
Properties [sys_properties]

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

Property
Description

sn_cmdb_ws.ms.report_class_ci_co
unt_max_threshold

Threshold number of multisource
records that when exceeded for
a class, CMDB 360 Coverage
charts in CMDB Workspace stop
populating data for that class
(CMDB or non-CMDB tables).

When the specified threshold
number is reached for a class, the
system creates a record in the
CMDB 360 Analytics Skipped Class
[sn_cmdb_ws_ms_skip_class] table
causing that class to be skipped in
future job runs.

Note:   Managing class
inclusion in the Coverage
charts, by using this system
property and the CMDB
360 Analytics Skipped Class
[sn_cmdb_ws_ms_skip_class]
table, can greatly decrease or
increase performance of the
Coverage chart job.

• Type: numeric

• Default value: 10 million

• Location: Add to System
Properties [sys_properties]

• Learn more: CMDB 360
experience in CMDB Workspace

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

Tables

Table
Description

CMDB 360 Data

[cmdb_multisource_data]

CMDB 360 data store. Contains
the raw data sent by all discovery
sources.

CMDB MultiSource Column
Metadata

[cmdb_multisource_column_meta
data]

Mapping of attributes for each
class to floatable columns. Used to
improves performance of queries
that involve high volumes of data.

CMDB Multisource Queries

[cmdb_multisource_query]

CMDB 360 query definitions
created by the user in CMDB
Workspace or in the legacy
Multisource Report Builder.

Query Status

[cmdb_multisource_query_status]

State of execution, of queries
created in CMDB Workspace or
in the legacy Multisource Report
Builder.

CMDB Multisource Query Results

[cmdb_multisource_query_result]

Results for queries created in
CMDB Workspace or in the
legacy Multisource Report Builder,
configured with result type of CI
records.

CMDB Multisource Query Result
Multisource Records

[cmdb_multisource_query_result_m
s_record]

Results for queries created in
CMDB Workspace or in the
legacy Multisource Report Builder,
configured with result type of
CMDB 360 records.

CMDB Multisource Query Result
Discovery Sources

Results for queries created in
CMDB Workspace or in the
legacy Multisource Report Builder,

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

Table
Description

[cmdb_multisource_query_result_di
sco_source]
configured with result type of
Discovery source records.

CMDB MultiSource Recompute
Task CIs

[cmdb_multisource_recomp_task_
ci]

All CIs that are involved in a
recompute operation.

CMDB Multisource Recompute
Tasks

[cmdb_multisource_recomp_task]

Recomputation requests and
progress status.

CMDB 360 denied classes

[cmdb_multisource_deny_class]

Classes that are excluded from
CMDB 360 data collection and
processing. For any class with an
active record, there won't be
any data in the CMDB 360 Data
[cmdb_multisource_data] table.

CMDB 360 Analytics Skipped Class

[sn_cmdb_ws_ms_skip_class]

Internally used to store records of
classes for which the threshold
number of multisource records, as
set in the
sn_cmdb_ws.ms.report_class_ci_co
unt_max_threshold property, has
exceeded. Classes in this table are
excluded from the Coverage
charts in CMDB Workspace.

You can set the Override class
CI records population column for
an excluded class to 'true', to
include it in Coverage charts
future computations.

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

Table
Description

Note:   Managing class
inclusion in the Coverage
charts, by using this table and
the
sn_cmdb_ws.ms.report_class_
ci_count_max_threshold
system property, can greatly
decrease or increase
performance of the Coverage
chart job.

Roles

Role
Description

cmdb_ms_read

Can access and run a CMDB 360
query but can't create a query.
Contains cmdb_read role.

cmdb_ms_editor

Can create and run a query,
has full read and write access,
but can't do Recompute. Contains
cmdb_ms_read role.

cmdb_ms_admin

Can create and run a query, and
can modify CMDB 360 properties.
Contains cmdb_ms_write role.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

49

Zurich ServiceNow AI Platform Capabilities

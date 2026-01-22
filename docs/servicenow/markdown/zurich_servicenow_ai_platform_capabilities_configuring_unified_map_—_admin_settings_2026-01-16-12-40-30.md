# zurich_servicenow_ai_platform_capabilities_configuring_unified_map_—_admin_settings_2026-01-16-12-40-30

*Source: zurich_servicenow_ai_platform_capabilities_configuring_unified_map_—_admin_settings_2026-01-16-12-40-30.pdf*

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

## Configuring Unified Map — Admin settings

Administrators can configure general Unified Map settings to control the
initial content and appearance of maps for all users in a workspace.

Activating Unified Map

To activate Unified Map, set up the CMDB Workspace ServiceNow Store
app and then enable the sn_sm_scoped_app.sa.unified_map.enabled
system property.

For more information, see Set up CMDB Workspace.

Unified Map settings that admins can configure

These workspace-specific configuration settings affect all users of the
CMDB Unified Map page. The settings do not affect other copies of the
Unified Map template.

• Create or manage a shared preset

• Configure how many nodes can appear on a map

• Configure the default or maximum number of levels on maps

• Configure endpoint de-duplication on maps

• Configure CIs to appear based on life cycle stage value

• Configure how to display related items on the map

• Configure which attributes to display in the Attributes panel

• Configure display of connections to a referenced class

• Create a class profile of visible layers for classes

• Create or manage a shared preset

How configuration settings for Unified Map are stored

See How configuration settings for Unified Map are stored.

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

Unified Map settings that non-admin users can configure

Non-admin users can customize some aspects of their personal
experience with Unified Map, but can't configure instance-wide
workspace-specific settings. Non-admin users can control which
elements appear on the map, isolate and analyze relationships between
CIs, and simplify the map to isolate issues.

For more information, see Controlling Unified Map contents and
appearance.

• Create or manage a shared preset

Admins can save a set of Unified Map map filter settings (layer, CI class,
relationship type, and other CI attribute settings) as a shared preset that
any user can apply to their map view.

• Configure how many nodes can appear on a map

Configure the maximum number of nodes that can be loaded when
a map in this workspace opens. These are general settings that only
sn_cmdb_admin can configure.

• Configure the default or maximum number of levels on maps

Configure the default or maximum number of levels on maps. These are
general settings that only sn_cmdb_admin can configure.

• Configure endpoint de-duplication on maps

Configure how duplicate edges are displayed on maps. These are
general settings that only sn_cmdb_admin can configure.

• Configure CIs to appear based on life cycle stage value

By default, only CIs for which Life cycle stage is Operational or empty
appear on maps. You can configure the map to display CIs with
other Life cycle stage values. These are general settings that only
sn_cmdb_admin can configure.

• Configure how to display related items on the map

Add related items categories, specify which information should appear
on cards on the Unified Map Related items panel, and specify how

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

related items (events) appear on the timeline and on badges. These
are general settings that only sn_cmdb_admin can configure.

• Configure which attributes to display in the Attributes panel

Each class has a unique set of extended attributes that appear in
the bottom section of the Attributes panel for a CI. For any class, you
can specify which extended attributes should be displayed. These are
general settings that only sn_cmdb_admin can configure.

• Configure display of connections to a referenced class

Configure how to display connections to a referenced class and from a
referencing class on Unified Map. A reference connects two CIs from
differing classes that aren't connected by a relationship. These are
general settings that only sn_cmdb_admin can configure.

• Create a class profile of visible layers for classes

Configure a class profile that specifies which layers should appear for a
particular class: application, service instance, business, or infrastructure.
For example, you can configure that the mapped application service
(service instance) [cmdb_ci_service_discovered] class should display
only Service Mapping data and not infrastructure elements.

• How configuration settings for Unified Map are stored

General configuration settings that control Unified Map are collected in
a configuration identifier. A configuration identifier is a set of properties
and table-driven configurations that specify the appearance and
content of an instance of a UX application. The CMDB Workspace UX
application contains Unified Map.

Related concepts

• Configuration identifiers framework

• How configuration settings for Unified Map are stored

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

## Create or manage a shared preset

Admins can save a set of Unified Map map filter settings (layer, CI class,
relationship type, and other CI attribute settings) as a shared preset that
any user can apply to their map view.

Before you begin

Role required: sn_cmdb_config_admin

About this task

Follow this procedure to save specified filter settings as a shared preset.
The workspace-specific filter criteria in a shared preset are available for
all users of the current CMDB Unified Map page. Shared presets defined
in one workspace are not available in other workspaces.

Configuration settings for shared presets are saved in the Unified Map
shared presets profile in the configuration identifier that is applied to the
workspace.

• When a user applies a shared preset or a user preset, all filter settings
are overridden. Filter attributes from a shared preset or a user preset
that do not apply to the current map are listed in the Unused
filter attributes section of the filter panel. The order of filter-setting
precedence from the various sources is as follows:

1. • user presets

2. • shared presets

3. • shared presets that are defined in a Unified Map shared presets
profile

4. • class profile (Class profiles contain only layer settings and are
defined in the Node Map Profiles related list.)

• You can include a shared preset in a node map profile. Layer settings
in the shared preset will override the layer settings defined in the class
profile.

• A shared preset defined in a profile will be applied when the map
opens. If the user has explicitly defined a shared preset or a user preset,
then the preset takes precedence as outlined above.

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

• An individual user can apply a shared preset and then save it as a user
preset. For more information, see Create or manage a user preset.

• Unused filter criteria in the current filter are saved with a preset.

Procedure

1. While working in a map, select the Map filter icon

and then
select or clear criteria in any filter category.
Only attributes of elements currently on the map are listed as filter
criteria. Attributes that do not apply to the current elements are listed
in the Unused filter attributes list.

2. Select the Manage presets icon

, and in the Manage shared
presets list, select Create shared preset.

3. Enter a preset name and then select Save.

4. Close the Map filter panel.

Result

The new shared preset is listed in the Unified map shared presets related
list on the Configuration Identifier form. In addition, shared presets used
in a map profile are listed in the Node Map Profiles related list. For more
information, see How configuration settings for Unified Map are stored

What to do next

To apply a preset:

1. While working in a map, select the open filter panel icon

2. Select the View preset list icon

and then select the preset.

To update a preset or save an updated version as a new preset:

1. While working in a map, select the open filter panel icon

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

2. Apply the preset that you want to update and then make the
desired changes.

3. Select the Manage presets icon

and then select Update preset
or Update shared preset.

4. Select one of the following actions:

• Select Update preset to update the current preset with the
current filter settings.

• Select Save as new preset and then enter a new name.

5. Select Save.

To delete a preset:

1. While working in a map, select the open filter panel icon

2. Apply the preset that you want to delete.

3. Select the Manage presets icon

and then select Delete preset or
Delete shared preset.

4. Select Yes.

To apply the home CI's default filter settings

Select Reset filter.

Related tasks

• Use filters to specify which nodes should appear on a map

• Create or manage a user preset

• Create a class profile of visible layers for classes

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

## Configure how many nodes can appear on a map

Configure the maximum number of nodes that can be loaded when
a map in this workspace opens. These are general settings that only
sn_cmdb_admin can configure.

Before you begin

Set the application scope in your instance to CMDB Workspace.

Role required: sn_cmdb_admin

About this task

Admins can set the maximum node count using the
unifiedmap.map_search.max_nodes property in the workspace-specific
[sn_cmdb_ws_config_property] table.

These workspace-specific configuration settings affect all users of the
CMDB Unified Map page. The settings do not affect other copies of the
Unified Map template.

Procedure

1. Navigate to All and then, in the filter box in the main navigation bar,
enter sn_cmdb_ws_config_property.list.

2. Select the unifiedmap.map_search.max_nodes property.

3. Select New or select the configuration identifier to update and then
fill in the form.

Workspace Config Property table
Settings that configure the maximum number of nodes
that can appear on a map.

Field
Description

Config identifier
Unique name of the
configuration identifier that

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

specifies the settings for the
current workspace.

Note:   The base system
includes a configuration
identifier named Default that
specifies the default settings
for Unified Map.

Name

The name of the property that
you are updating:
unifiedmap.map_search.max_no
des.

Value

Maximum count of nodes that
are loaded when a map in this
workspace opens.

UX application

The top-level UX Application
ID to which this configuration
applies. This is the application
ID of your workspace. This value
is referenced from the record
associated with the Config
identifier setting.

4. Select Submit or Update.
The updated settings appear in the appropriate related list on the
Configuration identifier form, as described in Configuring Unified Map
— Admin settings.

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

## Configure the default or maximum number of levels on
## maps

Configure the default or maximum number of levels on maps. These are
general settings that only sn_cmdb_admin can configure.

Before you begin

Set the application scope in your instance to CMDB Workspace.

Role required: sn_cmdb_admin

About this task

Admins can set default and maximum levels
using the unifiedmap.map_search_filter.default_levels or
unifiedmap.map_search_filter.max_levels property in the workspace-
specific [sn_cmdb_ws_config_property] table.

These workspace-specific configuration settings affect all users of the
CMDB Unified Map page. The settings do not affect other copies of the
Unified Map template. Non-admin users can customize some aspects of
their personal experience with Unified Map, but can't configure instance-
wide workspace-specific settings.

Procedure

1. Navigate to All and then, in the filter box in the main navigation bar,
enter sn_cmdb_ws_config_property.list.

2. Select the unifiedmap.map_search_filter.default_levels or
unifiedmap.map_search_filter.max_levels property, as needed.

3. Select New or select the configuration identifier to update and then
fill in the form.

Workspace Config Property table

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

Settings that configure the maximum number of nodes
that can appear on a map.

Field
Description

Config identifier

Unique name of the
configuration identifier that
specifies the settings for the
current workspace.

Note:   The base system
includes a configuration
identifier named Default that
specifies the default settings
for Unified Map.

Name

The name of the property that
you are updating:
unifiedmap.map_search.max_no
des.

Value

Maximum count of nodes that
are loaded when a map in this
workspace opens.

UX application

The top-level UX Application
ID to which this configuration
applies. This is the application
ID of your workspace. This value
is referenced from the record
associated with the Config
identifier setting.

4. Select Submit or Update.

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

The updated settings appear in the appropriate related list on the
Configuration identifier form, as described in Configuring Unified Map
— Admin settings.

## Configure endpoint de-duplication on maps

Configure how duplicate edges are displayed on maps. These are
general settings that only sn_cmdb_admin can configure.

Before you begin

Set the application scope in your instance to CMDB Workspace.

Role required: sn_cmdb_admin

About this task

These workspace-specific configuration settings affect all users of the
CMDB Unified Map page. The settings do not affect other copies of the
Unified Map template. Non-admin users can customize some aspects of
their personal experience with Unified Map, but can't configure instance-
wide workspace-specific settings. Non-admin users can customize some
aspects of their personal experience with Unified Map, but can't
configure instance-wide workspace-specific settings.

Note:   This property setting is typically not altered for Unified Map.

Procedure

1. Navigate to All and then, in the filter box in the main navigation bar,
enter sn_cmdb_ws_config_property.list.

2. Select the
unifiedmap.map_search_filter.endpoint_deduplication_fields
property.

3. Select New or select the configuration identifier to update and then
fill in the form.

Workspace Config Property table

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

Settings that configure endpoint de-duplication.

Field
Description

Config identifier

Unique name of the
configuration identifier that
specifies the settings for the
current workspace.

Note:   The base system
includes a configuration
identifier named Default that
specifies the default settings
for Unified Map.

Name

The name of the property that
you are updating:
unifiedmap.map_search_filter.en
dpoint_deduplication_fields.

Value

The default value of
sourceId,targetId,_label,e
ndpoints means: Collapse the
edges (show only one
connection between edges on
the map) whenever multiple
endpoints between source CI
and target CI result in the same
labeled edges.

Note:   This setting is typically
not changed for Unified
Map.

UX application

The top-level UX Application
ID to which this configuration
applies. This is the application
ID of your workspace. This value

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

Field
Description

is referenced from the record
associated with the Config
identifier setting.

4. Select Submit or Update.
The updated settings appear in the appropriate related list on the
Configuration identifier form, as described in Configuring Unified Map
— Admin settings.

## Configure CIs to appear based on life cycle stage
## value

By default, only CIs for which Life cycle stage is Operational or empty
appear on maps. You can configure the map to display CIs with
other Life cycle stage values. These are general settings that only
sn_cmdb_admin can configure.

Before you begin

Set the application scope in your instance to CMDB Workspace.

Role required: sn_cmdb_admin

About this task

• By default, non-operational CIs are filtered out and do not appear on
maps.

• Search results don't include CIs that are filtered out based on
operational state.

• The Open Map button (for viewing details) on the CI form isn't available
for CIs that are filtered out based on operational state.

These workspace-specific configuration settings affect all users of the
CMDB Unified Map page. The settings do not affect other copies of the
Unified Map template. Non-admin users can customize some aspects of
their personal experience with Unified Map, but can't configure instance-
wide workspace-specific settings.

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

Procedure

1. Navigate to All and then, in the Filter
box in the main navigation bar, enter
sn_cmdb_ws_operational_lifecycle_for_unified_map.list to
open the Operational life cycle modes table.

2. Select the list of selected live cycle stage values.

For Unified Map, the default list of selected live cycle stage values is
named CMDB Workspace Unified Map View.

a. Unlock the Life cycle list field and then select the Edit multiple

icon

.

b. In the Edit Members pop-up, move the life cycle stage values
for CIs that should appear on maps into the Selected life cycle
stages list and then select Save.

c. On the record form, select Update or Save.

• The updated settings appear in the appropriate related list on
the Configuration identifier form, as described in Configuring
Unified Map — Admin settings. The updated list of life cycle stage
values is added to the CMDB Workspace Unified Map View life
cycle mode on the Operational life cycle modes related list for
the affected configuration identifier.

• You can also perform this operation from the Operational life
cycle modes related list.

## Configure how to display related items on the map

Add related items categories, specify which information should appear
on cards on the Unified Map Related items panel, and specify how
related items (events) appear on the timeline and on badges. These are
general settings that only sn_cmdb_admin can configure.

Before you begin

Set the application scope in your instance to CMDB Workspace.

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

Role required: sn_cmdb_admin

About this task

These workspace-specific configuration settings affect all users of the
CMDB Unified Map page. The settings do not affect other copies of the
Unified Map template. Configuration settings that non-admin users can
specify are described in Configure the Related items panel.

Related items are grouped by category in the Related items panel.
Related items also appear for CI badges on the map and timeline.

The [sn_cmdb_ws_node_map_related_item] table contains the settings
that determine which related items and associated details appear. By
default, common categories of related items, such as active incidents
and other events for example, are configured to appear. You add or
modify records to globally manage related items on maps.

Procedure

1. Navigate to All and then, in the search box on the main navigation
bar, enter sn_cmdb_ws_node_map_related_item.list to open the
Node Map Related Item table.

2. Select an existing record or select New and then fill in the form.

Node Map Related Item table — general section
Settings that configure how categories appear.

Field
Description

Name

The category label that appears
on the Related items panel for a
selected CI.

Table
Tables from which records for the
category are retrieved.

Order
Order that the category
appears within all related items
categories.

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

Field
Description

The list of related items
categories is sorted in ascending
order. The category with the
smallest order number appears
at the top of the list.

Active
Enables the appearance of the
related item category.

Reference field

Reference attribute in the
specified Table that references
the CIs for the category.
Typically set to Configuration
Item [cmdb_ci].

3. Select the Related fields and conditions tab and then fill in the
settings.

Related fields and conditions tab
Settings that configure how data appears on cards.

Number field

Numeric attribute from the
specified table that uniquely
identifies each record in the
category. This attribute is used in
the record link that appears on
each card when drilling down
the related item category.

Title field

Attribute from the specified table
that appears as the title of each
card when drilling down the
category in the panel.

Fields

Set of attributes from the
specified table that appears on
each card when drilling down
the related item category. For
example, when drilling down

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

alerts, the set of attributes that
appears on each alert card.

Sort fields

Order of appearance of the
fields specified in the Fields
setting.

Footer field

Attribute from the specified table
that appears at the bottom of
individual cards when drilling
down the related item category,
regardless of the sort order
specified in the Sort fields setting.

Conditions

Conditions to apply to the
specified table that retrieve the
set of records for the category.

4. Select the Badge and timeline configuration tab and then fill in the
settings.

Badge and timeline configuration tab
Settings that configure badge and timeline operation.

Badge and timeline icon

Icon that appears on CI badges
and on the timeline for the
specified related item.

Badge and timeline highlight
field

Highlight configuration for
applying colors to timeline and
map icons.

Date field
The date field to position the
event on the timeline.

End date field
Optional end date field to use
for a range on the timeline.

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

5. Select Submit or Update.
The updated settings appear in the appropriate related list on the
Configuration identifier form, as described in Configuring Unified Map
— Admin settings.

Related tasks

• View related items for a CI

Related concepts

• Viewing related items on the Unified Map timeline

## Configure which attributes to display in the Attributes
## panel

Each class has a unique set of extended attributes that appear in the
bottom section of the Attributes panel for a CI. For any class, you
can specify which extended attributes should be displayed. These are
general settings that only sn_cmdb_admin can configure.

Before you begin

Set the application scope in your instance to CMDB Workspace.

Role required: sn_cmdb_admin

About this task

In the base system, extended attributes are preconfigured for many
common classes. You can modify the default settings and configure
settings for additional classes. This example shows where base attributes
(A) and extended attributes (B) appear in the Attributes panel. For more
information on the Attributes panel, see View the attributes of a CI or a
relationship

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

These workspace-specific configuration settings affect all users of the
CMDB Unified Map page. The settings do not affect other copies of the

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

21

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 21, 425x645px]*

```
......                                              .:......
......  -::::-..:::.                                .: -=  .
...... .::::::::::::                                .:... ..
......                                               ..:-:..
......                                               ..:-:..
......     ..  .  ....... ....                       ..::...
......    .::. :::::::::. :::.                       ..::...
......         ........ .....                        ...:...
......                                               ..:::..
......   .::::................:::::::............    .......
.....    .::::.:.:::::.........:::.:....:..::....    .......
..:-==-. ..........:...........:::::::...........    .......
.-++:-++......................::::::::::.........    .......
.-+=--++........................:::::.::.........    .......
..:-==-. .::::::::.............::::::............    .......
.....    .::::................:::::::.:.:::::::..    .......
......   ..:.:.................:.................    .......
......   .:::::::.:::::.......::::.::::.:::::::..    .......
......   .::::................::::...............    .......
......   ........................................    .......
......                                               .......
......   .::::::::::::...........................    .......
......   ::::::::::::::..........................    .......
......   .::::...................................    .......
......   .::::::::::::::::.......................    .......
......   .::::::::::::::::.......................    .......
......   .:-:-...................................    .......
......   .::.........::..........................    .......
.....    .::::::::::::-:::::.....................    .......
..:---:. .--:-:..................................    .......
.:++--+=..::.:...................................    .......
.-+=::++:.:::::::::::::..........................    .......
..-====: .--:::..................................    .......
......   .::::...................................    .......
......   .:::::::-:::::::::::::..................    .......
......   ::::::::::::::::::::::..................    .......
......   .::::...................................    .......
......   .::::::::...............................    .......
......   .::::::::...............................    .......
......   .:::::::................................    .......
......   .::::::::::::...........................    .......
......   .:-::::::::-:...........................    .......
......   .-=---:.................................    .......
........     ..     ..     ..     .     ..     ..    .......
............................................................
```

---
*Page 22*

Unified Map template. Non-admin users can customize some aspects of
their personal experience with Unified Map, but can't configure instance-
wide workspace-specific settings.

Procedure

1. Navigate to All and then, in the search box on the main navigation
bar, enter sn_cmdb_ws_node_map_table_attributes.list.

2. In the Table Attributes table, select the configuration identifier to
update or select New and then fill in the form:

Table Attributes form
Settings that specify which extended attributes to display
on the Attributes panel.

Field
Description

Config identifier

Unique name of the
configuration identifier that
specifies the settings for the
current workspace.

Note:   The base system
includes a configuration
identifier named Default that
specifies the default settings
for Unified Map.

CMDB Class Name
The class that this configuration
applies to.

Display attributes

List of attributes that appear
as extended attributes on the
Attributes panel for CIs in the
class that is specified by CMDB
Class Name.

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

Field
Description

You can select from attributes for
the class. Unlock the field to add
attributes to the Selected list.

UX application

The top-level UX Application
ID to which this configuration
applies. This is the application
ID of your workspace. This value
is referenced from the record
associated with the Config
identifier setting.

Active
Option to set the profile as
available for use.

Follow hierarchy

If selected, use the following
process to determine which
attributes to display.

a. Start with the attributes
specified in Display
attributes.

b. Move up the class hierarchy
and add each parent's
display attributes until
encountering a parent
where Follow hierarchy is
deselected.

c. Add that parent's display
attributes and then stop
collecting display attributes.

For nodes that have highlight
colors defined: If a display
attribute value appears more
than once, use the highlight

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

color for the least specific CMDB
layer.

The setting provides the following
options:

• Follow hierarchy selected:
A derived CI class uses
its own display attributes
and inherits display attributes
from parents.

• Follow hierarchy not
selected: A derived CI class
displays only attributes that
are specified in its Display
attributes setting.

3. Select Submit or Update.
The updated settings appear in the appropriate related list on the
Configuration identifier form, as described in Configuring Unified Map
— Admin settings.

Related tasks

• View the attributes of a CI or a relationship

## Configure display of connections to a referenced class

Configure how to display connections to a referenced class and from
a referencing class on Unified Map. A reference connects two CIs
from differing classes that aren't connected by a relationship. These are
general settings that only sn_cmdb_admin can configure.

Before you begin

Set the application scope in your instance to CMDB Workspace.

Role required: sn_cmdb_admin

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

About this task

These workspace-specific configuration settings affect all users of the
CMDB Unified Map page. The settings do not affect other copies of the
Unified Map template. Non-admin users can customize some aspects of
their personal experience with Unified Map, but can't configure instance-
wide workspace-specific settings.

References connect CIs from two classes that don't have a direct
relationship connection between them. On the map, any two CIs from
the referenced class and from the referencing class appear connected
by a dotted line. The relationship type is Reference. There are several
preconfigured map references that you can modify, and you can also
add map references.

For example, you want the map to display references to records in the
File System table for Windows Server CI records. In that case, Server
ABC (referencing CI) shows connections to the C:\ and D:\ file systems
(referenced CIs).

Procedure

1. Navigate to All and then, in the filter box on the main navigation bar,
enter sn_cmdb_ws_node_map_reference.list.

2. On the Node Map References table, select an existing record or
select New and then fill in the form.

Node Map References table
Settings that configure how to display referenced-class
and referencing-class connections.

Field
Description

CI class
The referencing class that this
configuration applies to.

Referenced CI class
Class that the specified
Reference field references.

Reference field
Attribute in the specified CI class
that contains the reference.

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

Field
Description

Show Reverse

Creates a map reference for
the reverse reference between
the specified CI class and
Referenced CI class.

Active

Enables the configuration so
that the connection appears
on maps — the map displays
referenced CIs.

3. Select Submit or Update.
The updated settings appear in the appropriate related list on the
Configuration identifier form, as described in Configuring Unified Map
— Admin settings.

## Create a class profile of visible layers for classes

Configure a class profile that specifies which layers should appear for a
particular class: application, service instance, business, or infrastructure.
For example, you can configure that the mapped application service
(service instance) [cmdb_ci_service_discovered] class should display only
Service Mapping data and not infrastructure elements.

Before you begin

Set the application scope in your instance to CMDB Workspace.

Role required: sn_cmdb_admin

About this task

These workspace-specific configuration settings affect all users of the
CMDB Unified Map page. The settings do not affect other copies of the
Unified Map template. Non-admin users can customize some aspects of
their personal experience with Unified Map, but can't configure instance-
wide workspace-specific settings.

Class profiles let you configure the Layers filter. Several common
classes such as the mapped application service (service instance)
[cmdb_ci_service_discovered] class are preconfigured with class profiles.

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

Class profiles are applied when no filter preset is used for the current
map. This typically happens when you load a map without a filter preset
or when you set the filter preset to Default view.

Procedure

1. Navigate to All and then, in the search box on the main navigation
bar, enter sn_cmdb_ws_node_map_profiles.list.
The Node Map Profiles table lists all classes for which the Layers
property is set.

2. Select an existing record or select New and then fill in the form.

Node Map Profiles table
Settings that configure map filters and map orientation
for a class.

Field
Description

Config identifier

Unique name of the
configuration identifier that
specifies the settings for the
current workspace.

Note:   The base system
includes a configuration
identifier named Default that
specifies the default settings
for Unified Map.

Layers

Layers value to apply when the
map opens with a home node
that is in the class specified by
the CMDB CI class setting.

• Application,

• Service instance (formerly
application service)

• Business

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

Field
Description

• Infrastructure

On the map display, in the
Layers category, the listed filter
values are selected and values
that are not in the list are
deselected.

CMDB CI class

Class of CI that this profile
applies to. Whenever a map
opens with a home node of the
specified class, the Layers values
are applied.

Orientation

• Vertical layout: Displays
nodes in a vertical
tree pattern: upstream
relationships top and
downstream bottom. This
is the default layout
for displaying mapped
application services and
service instances. In the
toolbox, select the Vertical

layout icon

.

• Force layout: Displays nodes
in a clustered arrangement
around the home node,
regardless of upstream or
downstream relationships. In
the toolbox, select the Force

layout icon

.

UX application

The top-level UX Application
ID to which this configuration
applies. This is the application
ID of your workspace. This value

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

Field
Description

is referenced from the record
associated with the Config
identifier setting.

Active
Option to set the profile as
available for use.

3. Select Submit or Update.
The updated settings appear in the appropriate related list on the
Configuration identifier form, as described in Configuring Unified Map
— Admin settings.

Related tasks

• Create or manage a user preset

## How configuration settings for Unified Map are stored

General configuration settings that control Unified Map are collected in a
configuration identifier. A configuration identifier is a set of properties and
table-driven configurations that specify the appearance and content of
an instance of a UX application. The CMDB Workspace UX application
contains Unified Map.

Important:   Because each configuration identifier is unique to an
instance of a UX application, the settings for one UX application
do not affect the user experience of any other UX application. This
means that your admin settings for this instance of Unified Map will
not affect Unified Map users in another instance.

Viewing Unified Map configuration settings

The configuration identifier form displays all configurations settings
for Unified Map. To view the configuration identifier, navigate to
All and then, in the filter box in the main navigation bar, enter
sn_cmdb_ws_config_identifier.list.

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

On the form, each related list displays property settings or a table of
configuration settings.

The base system includes a configuration identifier named Default that
specifies all default settings.

Defining custom settings for your CMDB Workspace instance

To create a custom configuration identifier for your workspace, modify
the default settings and then save the updates with a new name.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

30

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 30, 775x776px]*

```
.  ...:---::::.                    .. .. ....... .... .
....
...::.:..:::.....::::.:::::::.:::::.:.:::.:.:::::.:.::.....
.:--------------------:--::::--------:---:-:-----:-:--:....
.:::::::::::::::::::::.....................................
.
....                         .........
...                          .........
.....                        .
.:.:....:::..:::..
.::..:.:::.......

......
......


...  ...
.................
............... ........................:................
............................................
...........................................
.. .  ..         ...              ..  .  ...........    ..
....... ....
.  ..
..                     ..                 ......
.                   .
.... .     . ... ..                      ...
. ... .. ..     ...
.                  ...
.
```

---
*Page 31*

Note:   When a custom configuration identifier doesn't specify a
particular property setting or table entry, the value in the default
configuration identifier is used.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

31

Zurich ServiceNow AI Platform Capabilities

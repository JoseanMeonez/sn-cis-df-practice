# zurich_servicenow_ai_platform_capabilities_working_in_unified_map_2026-01-16-12-41-15

*Source: zurich_servicenow_ai_platform_capabilities_working_in_unified_map_2026-01-16-12-41-15.pdf*

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

## Working in Unified Map

Unified Map presents a graphical display of CMDB CIs and the
connections between to enable powerful insights.

Opening a map

Use any of the following methods to open Unified Map:

• Navigate to All > CMDB Workspace > Unified Map.

• While working in the CMDB Workspace, select Unified Map in the Quick
Links section.

• On a CI form for any CI in an operational state, select Open Map to
open a map with the CI as the home node.

Note:   An admin can specify additional operational status values
for this option. For more information, see Configure CIs to appear
based on life cycle stage value.

Tip:   To view a map in full-screen mode, select the Unpin All icon.

Map operations

• Controlling Unified Map contents and appearance

• Use filters to specify which nodes should appear on a map

• View a summary of map contents on the Overview panel

• View the attributes of a CI or a relationship

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

3

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 3, 686x209px]*

```
%%#**##*#**###*%%%##%%%%%%%%%%#%%##%%%%##%%%%####%%%%%%###%%
%%#**####*####*%%%##%%%%%%%%%%######%%####%%%#######%%%####%
%#***************++#%#%%%#%%%%%%%%@%%%%%%%%%%%%%%%%%%%%%%%%%
%+ . ...           *#*#%#+#%%@###%@@%#####%@%#######%@%####%
%%##################%%%%%%%%%#=-----========================
%%##*******%%%%%%%%%%%%%%%%#+=...    .
%%##*#####*****##%%%%%%%%%%*.
%%##########%%%%%%%%%%%%%%%*. ......      .   ....
%%##******#%%%%%%%%%%%%%%%%*.
```

---
*Page 4*

• View service instances for a CI

• View related items for a CI

• Viewing related items on the Unified Map timeline

• View historical changes for a CI

• Editing maps in Unified Map

## Controlling Unified Map contents and appearance

Manipulating the contents and layout of a map can greatly assist
with understanding and optimizing your CMDB. You can control which
elements appear on the map, isolate and analyze relationships between
CIs, and simplify the map to isolate issues.

Important:   This topic describes changes that you can make to your
view of the map. The changes do not affect other users. In contrast,
administrators can configure general settings that affect all users in
the workspace, as described in Configuring Unified Map — Admin
settings.

Save a map as a PDF document

In the toolbox, select the Export map icon

to save the current
appearance of the map as a PDF document on your local drive.

Controlling map content

Controlling map content

Change
Tool and actions

Specify or change the home node

The home node is the CI
that all other CIs on the map
are associated with, directly or
indirectly. The home node icon has
a thicker border that pulsates. The

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

Change
Tool and actions

map is redrawn when you specify
a home node.

Use either of the following
methods:

•

Use the Search box to find and
select a CI.

• Right-click a node on the map
and select Set as home node.

Note:   Connecting lines
between nodes represent
relationships and references,
not data flow.

• In the vertical layout, the
home node appears at the
center of CI connections.
Upstream connections appear
at the top and downstream
at the bottom. This is the
default layout for displaying
mapped service instances
(formerly application services)
[cmdb_ci_service_discovered].

• In the force layout, the home
node appears at the center of CI
connections.

Reload the map after a change
Select the Reload map icon

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

Change
Tool and actions

Configure a filter to display only
pertinent items

Select the Filter icon

When a user applies a shared
preset or a user preset, all
filter settings are overridden. Filter
attributes from a shared preset or
a user preset that do not apply
to the current map are listed in
the Unused filter attributes section
of the filter panel. The order of
filter-setting precedence from the
various sources is as follows:

1. user presets

2. shared presets

3. shared presets that are
defined in a Unified Map
shared presets profile

4. class profile (Class profiles
contain only layer settings and
are defined in the Node Map
Profiles related list.)

Note:   Filter settings that
would filter out the home
node might appear in the
list. You can't, however, filter
out the home node even if it
meets filter settings.

For more information, see Use filters
to specify which nodes should
appear on a map.

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

Change
Tool and actions

Show/hide filtered items

Select the Show/Hide filtered items

icon

to expose the filtered
items on the map as dimmed
view-only nodes.

For more information, see Use filters
to specify which nodes should
appear on a map.

Show complete CI details

Select a CI (CI border
thickens) to display its details
in the Overview, Attributes,
Service instances,Related items, or
Changes panel.

For group CIs, such as a service
instance or a dynamic CI group,
the Attributes panel also shows
detail cards for the CIs that are
members of the group.

Show relationship details

Two CIs might be connected by
one or more relationships (stored
in the CI Relationship [cmdb_rel_ci]
table). For example, two CIs
might be connected by the Runs
On::Runs, Depends On::Discovered
From, and by the Owned By::Owns
relationships.

• A solid line indicates a
relationship. The arrowhead
indicates the dependent node.

• A dashed line indicates a
reference.

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

Change
Tool and actions

• A badge on a line indicates the
number of relationships between
the CIs.

Select a connection to display its
attributes in the Attributes panel.
For a CI with multiple relationships,
select the badge to view details
for all relationships.

Set the number of relationship
levels to display on the map

Use the Levels drop-down list to
specify how many relationship
levels to display on the map
(default 3). A low setting is useful
for viewing a simplified map that
shows only direct connections and
for limiting the overall size of a
map. A higher setting enables you
to review more complex CMDB
structures.

When a mapped application
service (service instance) CI is set
as the home node, the Levels
setting has no effect and all levels
of relationships appear.

Note:   Connecting lines
between nodes represent
relationships and references,
not data flow.

Highlight the relationships between
CIs

Point to a CI to animate
the connections between CIs.
Connected nodes are highlighted
for a few seconds.

Two CIs might be connected by
one or more relationships (stored

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

Change
Tool and actions

in the CI Relationship [cmdb_rel_ci]
table). For example, two CIs
might be connected by the Runs
On::Runs, Depends On::Discovered
From, and by the Owned By::Owns
relationships.

• A solid line indicates a
relationship. The arrowhead
indicates the dependent node.

• A dashed line indicates a
reference.

• A badge on a line indicates the
number of relationships between
the CIs.

Note:   Connecting lines
between nodes represent
relationships and references,
not data flow.

View mapped application services
(service instances)

The Service Mapping app might
use mapped application services.
Mapped application services
appear as group CIs that you
can expand to show members.
Mapped application services
[cmdb_ci_service_discovered] are
descendents of the Service
Instance [cmdb_ci_service_auto]
class, such as service instances
and dynamic CI groups.

• A badge shows the number of
members in the group.

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

Change
Tool and actions

• Select the badge to expand the
group and show its member CIs.
Select again to collapse.

• In the expanded mode, point to
any member CI to temporarily
highlight all group members.

Show or hide the timeline

Select the Show/Hide timeline icon

. For more information, see
Viewing related items on the
Unified Map timeline.

View non-operational CIs

• Non-operational CIs do not
appear in search results or on the
map.

• The Open Map button on a
CI form isn't available for non-
operational CIs.

• Only CIs for which the Life Cycle
Stage attribute is Operational or
empty appear on maps.

An administrator can change the
default behavior to show non-
operational CIs or CIs of any
combination of Life Cycle Stage
values. For more information, see
Configure CIs to appear based on
life cycle stage value.

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

Controlling map appearance

Controlling appearance of the map

Change
Tool and actions

Zoom in or out

Use any of the following methods:

• Select + or - in the toolbox.

• Scroll up or down in the map
pane.

• Specify a zoom value in the mini-
map navigator.

Align the map to the home node
In the toolbox, select the Align to

home node icon

.

Fit all CIs on the map

Select the Fit to map icon

.

Result: Center the map on the
canvas and set the zoom level to
the maximum level that enables
the entire map to fit on the
canvas. By default, up to 250
nodes can appear on a map.
CIs in a collapsed group CI are
counted.

Note:   Admins set the
maximum node count using
the
unifiedmap.map_search.max_
nodes property in the
workspace-specific
[sn_cmdb_ws_config_property
] table. Higher values can
decrease performance.

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

Change
Tool and actions

Move a CI to another location

Drag a CI to a different place on
the map. Map elements that are
connected to that CI might be
moved to accommodate the new
placement.

Move the entire map on the
canvas and set the zoom level

Use either of the following
methods:

• Drag the rectangle in the mini-
map navigator.

• Select an empty area on the
map and drag.

Show CI key details on the map

Point to a CI to show its full
name and class (or zoom into the
map until those details appear),
its related items details, and the
direction of the CI relationships.

If there are multiple related items
associated with a CI, then the CI
badge contains the string 'Multiple'
and a badge showing the count
of related items appears on the
timeline. You can point to the
badge on the timeline to show all
related items.

Switch the layout of the map

• Vertical layout: Displays nodes
in a vertical tree pattern:
upstream relationships top and
downstream bottom. This is the
default layout for displaying
mapped application services
and service instances. In the

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

Change
Tool and actions

toolbox, select the Vertical

layout icon

.

• Force layout: Displays nodes in
a clustered arrangement around
the home node, regardless
of upstream or downstream
relationships. In the toolbox,

select the Force layout icon

.

Note:   Connecting lines
between nodes represent
relationships and references,
not data flow.

## Use filters to specify which nodes should appear on a
## map

Customize the map to focus on the CIs that you want to work on by
filtering out (hiding) irrelevant CIs. You can filter by layer count, CI class,
relationship type, discovery source, location, and CI ownership.

Before you begin

Role required:

• To access maps: sn_cmdb_user, sn_cmdb_editor or sn_cmdb_admin

• To access maps with operational service instances: app_service_user,
and sm_user or sm_admin

• To access maps with operational and non-operational service
instances: app_service_admin, and sm_user or sm_admin

• To access and view related items: itil

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

About this task

When a user applies a shared preset or a user preset, all filter settings
are overridden. Filter attributes from a shared preset or a user preset that
do not apply to the current map are listed in the Unused filter attributes
section of the filter panel. The order of filter-setting precedence from the
various sources is as follows:

1. user presets

2. shared presets

3. shared presets that are defined in a Unified Map shared presets
profile

4. class profile (Class profiles contain only layer settings and are defined
in the Node Map Profiles related list.)

Note:   Filter settings that would filter out the home node might
appear in the list. You can't, however, filter out the home node even
if it meets filter settings.

Procedure

1. While working in a map, select the Map filter icon

and then
select or clear criteria in any filter category.
Only attributes of elements currently on the map are listed as filter
criteria. Attributes that do not apply to the current elements are listed
in the Unused filter attributes list.

2. Close the Map filter panel.

• A dot appears on the Map filter icon

to indicate that filters
are applied.

• To expose filtered CIs and relationships on the map as dimmed

view-only images, select the Show filtered items icon

.

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

• You can save filter settings for reuse. For more information, see

Create or manage a user preset.

• Maps show up to 250 CMDB elements. Remaining elements are
truncated and don't appear on the map.

What to do next

To apply the home CI's default filter settings, select Reset filter.

Admins can save filter settings as a shared preset that all users can apply.
For more information, see Create or manage a user preset.

Related tasks

• Create or manage a user preset

## Create or manage a user preset

Save useful Unified Map filter settings as a user preset that you can apply
to a map at any time. For example, define a filter to display only CIs of a
particular class and then save the filter settings as a user preset.

Before you begin

Role required:

• To access maps: sn_cmdb_user, sn_cmdb_editor or sn_cmdb_admin

• To access maps with operational service instances: app_service_user,
and sm_user or sm_admin

• To access maps with operational and non-operational service
instances: app_service_admin, and sm_user or sm_admin

• To access and view related items: itil

About this task

• Follow this procedure to create a user preset that applies specified filter
settings. Only you can apply your user presets to your personal view of
the map.

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

• In addition, admins can define shared presets that you and other users
can access. For more information, see Create or manage a shared
preset.
When a user applies a shared preset or a user preset, all filter settings
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

Note:   Filter settings that would filter out the home node might
appear in the list. You can't, however, filter out the home node
even if it meets filter settings.

Procedure

1. While working in a map, select the Map filter icon

and then
select or clear criteria in any filter category.
Only attributes of elements currently on the map are listed as filter
criteria. Attributes that do not apply to the current elements are listed
in the Unused filter attributes list.

2. Select the Manage presets icon

and then, in the Manage my
presets list, select Create preset.

3. Enter a preset name and then select Save.

4. Close the Map filter panel.

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

What to do next

To apply a preset:

1. While working in a map, select the open filter panel icon

2. Select the View preset list icon

and then select the preset.

To update a preset or save an updated version as a new preset:

1. While working in a map, select the open filter panel icon

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

To apply the home CI's default filter settings

Select Reset filter.

Related tasks

• Use filters to specify which nodes should appear on a map

## View a summary of map contents on the Overview
## panel

The Overview panel displays summary data for items on the map that
are associated with the home node — counts and types of CIs and
connections, discovery sources, and so on.

Before you begin

Role required: sn_cmdb_user

About this task

Note:   The information on the Overview panel isn't affected by zoom
settings or by filter settings even if nodes that are associated with the
home node are not visible on the map.

Procedure

While working in a map, in the Search bar, search for and select the CI to

set as the home node and then select the Overview icon

.

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

Information on the Overview panel

Field
Description

Home node

The CI that is currently the home
node. For more information, see
Specify the home node.

Home node type
The CI type of the home node CI.

CIs
Count of CIs that are associated
with the home node.

CI types

Count of types of CI for CIs that
are associated with the home
node.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

19

Zurich ServiceNow AI Platform Capabilities

*[Figure Or Illustration - Page 19, 360x347px]*

```
.                                                  .:.:.::..
...      .                                      .::.--.:.
----------=-=:                                  .::.--.:.
. . .   .. .                                   .:.::::..
..:--...
...::...
..... ....            ....  ... ....          ..::....
...           .  .  ... .. .          ..:-=:..
....... .......       ......... ......        ........
...:... ......                                ..:::...
...::...
..:::...
..                    . ....                  ..::-:..
..                    .                       ...:....
..                    ..                      ........
........
... .. ...            ..... ...  ...          ........
.:                    .                       ........
........
........ .......                              ........
.                                             ........
........
........
........
.... ...                                      ........
...............:...                           ........
........
........
```

---
*Page 20*

Field
Description

Connections

Count of connections for CIs that
are associated with the home
node.

Connection types

Count of connection types for the
CIs that are associated with the
home node.

Discovery sources

Count of discovery sources related
to the CIs that are associated with
the home node.

Map time

The timestamp that is specified on
the timeline. The time is set to
"now" when you first open a map.
For more information, see Viewing
related items on the Unified Map
timeline.

## View the attributes of a CI or a relationship

Open the Attributes panel in Unified Map to view attributes like location
and life cycle stage for a CI or a relationship.

Before you begin

Role required:

• To access maps: sn_cmdb_user, sn_cmdb_editor or sn_cmdb_admin

• To access maps with operational service instances: app_service_user,
and sm_user or sm_admin

• To access maps with operational and non-operational service
instances: app_service_admin, and sm_user or sm_admin

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

• To access and view related items: itil

About this task

When you select a group CI such as a service instance or a dynamic
CI group as the home node, the Attributes panel shows the attributes of
the group CI itself and a card for each CI and relationship member of
the group. When you open a map for a service instance CI, a badge on
group CIs shows the number of members. Select a badge to expand or
collapse the group.

Procedure

While working in a map, select a CI or a relationship on the map and

then select the Attributes icon

.

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

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

22

Zurich ServiceNow AI Platform Capabilities

*[Vertical Diagram Or Sidebar - Page 22, 384x926px]*

```
.... ...
:....:. ....                                     :. -=. .
:=----=------:                                    :. :-  .
........
...-=:..
....:...
.... .:..-::::::. ::::.                        ...::...
.::: ..:.:........:...                         ...::...
.......... .....                          ...::...
..::-:..
....                   ......                  ........
...                   ...                     ........
.... . ......         .                       ........
.  .                    ........
.........:.              ........
........
........               .......                 ........
....                   ....... . .......       ........
........
... .... .....         ...  .... .......       ........
....                   ...                     ........
....                   ....                    ........
........
........
...... .......                                 ........
....                                           ........
........
........
........ ........                              ........
....                                           ........
........
...................                            ........
....                                           ........
....                                           ........
........
........ .....                                 ........
....                                           ........
........
. .  ...... .....  ....                        ........
........
.                                             ........
........
.........                                      ........
.                                         ........
........
.       . .                                   ........
... ..   ...                                   ........
.-:::.                                         ........
........
...........                                    ........
....                                           ........
........
........
...............                                ........
.--::::::-:                                    ........
........
.............. ....                            ........
....                                           ........
....                                           ........
........
....                                           ........
...                                            ........
........
.... ....                                      ........
...                                            ........
....                                           ........
........
...........                                    ........
..                                             ........
........
........
........
```

---
*Page 23*

The Attributes panel shows the following details:

• For a non-group CI: The top section displays base properties —
common key attributes, such as Class and Discovery source that
appear for CIs of any class (other than service instance CIs). You
cannot change the group of properties that appear in this section.

• The bottom section displays extended properties — attributes that
uniquely extend the class of a CI in the CMDB hierarchy. You can
specify the properties that should appear in this section. For more
information, see Configure which attributes to display in the Attributes
panel.

• For a group CI: The top card shows attributes of the group CI. The
cards in the Configuration items section display attributes for each of
the group member CIs.

• For a single relationship: A card with the attributes for the selected
relationship.

• For a multi-relationship badge: A card for each of the relationships in
the relationship set that shows the attributes for the relationship. The
number of cards is equal to the number on the relationship badge,
which is a count of the different types of relationships between the two
CIs in that direction. Relationship connections are based on records in
the CI Relationship [cmdb_rel_ci] table.

What to do next

In a CI card on the Service instances panel, select the Actions menu and
then select any of the following options:

• Select View CI details to open the CI form for the CI.

• Select Open in new map to open an additional map with the current CI
set as the home node.

• Select Set CI as home to set the selected CI as the home node for the
map.

Select a mapped service instance (formerly application service) CI
[cmdb_ci_service_discovered] on the map to display its entry points on
the Attributes panel.

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

## View service instances for a CI

For a selected CI, the Service instances panel in Unified Map lists details
in the Service Mapping application for all associated service instances
(formerly application services).

Before you begin

Service Mapping must be installed. For more information, see Service
Mapping.

Role required:

• To access maps: sn_cmdb_user, sn_cmdb_editor or sn_cmdb_admin

• To access maps with operational service instances: app_service_user,
and sm_user or sm_admin

• To access maps with operational and non-operational service
instances: app_service_admin, and sm_user or sm_admin

• To access and view related items: itil

About this task

The information that appears on a service instance card is described in
Service Mapping data.

Procedure

While working in a map, select a CI on the map and then select the

Service Instances icon

.

The panel displays a card with details for each related service instance.

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

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

25

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 25, 434x782px]*

```
.......
.-::..:.:..:.::::..::: .::.                       ..:::..
.:-:::::-:.::-:-:::-:- .::.                       .......
:. :. .
.. ..  :. .: .
. .......                                 ... .  .......
.                                    .....  ...::..
....:..
..:::..
........                                        .......
::::::::.  ..  ........                         .......
.......
.--.:---:--::--                                  .......
...... .......                                   .......
.......
....                   ...                      .......
....                    .... . ......... ....    .......
.......
...... .....           ... .......               ......
....                    ....                      ......
......
......
......
.::::::::.  ........                              ......
......
.:......:.::..:..::.::..                          ......
.:::.:::..::....::::....                          ......
..... ...  ..  .                                 ......
.                      ..                        ......
...                    ....         .            ......
...                     ...   . ... .......      ......
......
.....                   ... .     .               ......
...                    ....                      ......
......
......
......
:::::::..::::   ........                         ......
......
:--:-::                                           ......
.......                                           ......
......
.. .                   ...                       ......
....                    ....   . .  .... . .      ......
.                             .                  ......
.. ... .....            .. .......               ......
....                    ....                      ......
......
......
......
::...:.:.  ..                                    ......
.:.  ..:-:.......   .::.   ...    ...    ..    .:.   .:-:...
+++=-:=+++-:-=++=-:-=++=--=+++=--=+++-:-=++=-:-+++=--=+++=--
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```

---
*Page 26*

What to do next

• Select another CI on the map to show its related service instances.

• Select an empty space on the map to show all service instances for
any of the CIs on the map.

• In the Service instances (formerly Application services) panel:

• Use the Search box to search for a specific service instance.

• Select the Open filter icon

to open the filter panel, and
then select a category and a sort order by which to sort the service
instance cards. Close the filter panel to apply your settings.

•

On an individual service instance card, select the additional actions

icon

and then select one of the following options:

• Select View CI details to open the CI form for the service instance CI.

• Select Open in new map to open a new map in which the service
instance is set as the home node.

• Select Set CI as home to set the service instance as the home node
on the map and redraw the map accordingly.

Some fields, such as Business criticality, are color-coded to denote
specific values. For example, a status of Most Critical is highlighted with
a red background.

Related reference

• Service Mapping data that appears on maps

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

26

Zurich ServiceNow AI Platform Capabilities

*[Icon Or Small Graphic - Page 26, 63x64px]*

```
.-=+++++++++++++++++++++++++++++++++++++++++++++++++++=-.
++-..                                               ..-++-
=                                                       -*-
+*
+*
+*
+*
+*
+*
.:-.                                   +*
.-+**+-.    .-===-.                      +*
:+=.**.=+:    .:::.                       +*
..  **  ..                                +*
**       .=+++++-                     +*
**        .......                     +*
**        .........                   +*
**       .=+++++++-                   +*
**                                    +*
**        .:::::::::::.               +*
**       .-===========:               +*
::                                    +*
+*
+*
+*
+*
+*
+*
=                                                       -*-
++-..                                               ..-++-
.-=+++++++++++++++++++++++++++++++++++++++++++++++++++=-.
```

---
*Page 27*

## Service Mapping data that appears on maps

Service instances that are populated using Service Mapping
methods are included in maps. Service Mapping provides significant
information for mapped service instances (application services)
[cmdb_ci_service_discovered] such as relationships and grouping.

Considerations

If Service Mapping is installed and the
sn_sm_scoped_app.sa.unified_map.enabled system property is enabled,
you can access Unified Map from the Service Mapping workspace. For
more information, see Access the Unified Map feature from the Service
Mapping Workspace.

If Service Mapping is not installed, only service instances that are
populated by CMDB-related methods appear on maps. Unified Map
traverses the CMDB hierarchical data both up and down using user-
specified levels.

Related topics

• Configuring Service Mapping

## View related items for a CI

Open the Related items panel in Unified Map to show all related items
(typically, events such as changes, active incidents, or active problems)
for the selected CI.

Before you begin

Role required:

• To access maps: sn_cmdb_user, sn_cmdb_editor or sn_cmdb_admin

• To access maps with operational service instances: app_service_user,
and sm_user or sm_admin

• To access maps with operational and non-operational service
instances: app_service_admin, and sm_user or sm_admin

• To access and view related items: itil

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

Note:   The timeline also indicates related items (events). One
important difference is that the timeline indicates only historical
related items — events that occurred before the timeline's map time.
In contrast, the Related items panel lists all related items. For more
information, see Viewing related items on the Unified Map timeline.

Procedure

1. While working in a map, select a CI on the map and then select the

Related items icon

.
Related items are grouped by category. Badges show the count of
related items for the selected CI (or for all CIs if no CI is selected).

To specify which related item categories should appear on the
Related items panel, see Configure the Related items panel.

2. Select an arrow to view the details of the related item record.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

28

Zurich ServiceNow AI Platform Capabilities

*[Figure Or Illustration - Page 28, 298x310px]*

```
.                                                 ..........
.   ..  .       .                     .......     ...::::...
.  .+=--=-==-=--=.==-=-----.         .. .:. .     ...::-:...
.  .::::::-:::::: :::::..::.         .. ::. .     .....:....
.                                     .......     ...::.....
.                                                 ...:==:...
.                                                 ....:::...
.                                                 -..    ...
.   .:...: .:........                  .:.   .    -.  ..  ..
.   ..::::.::::::-:::                  .:.   .    -.      ..
.                                                 :.........
.                                                 ...-:-:...
.                                                 ...::::...
.   .:..:.::.:..::.:.::::.             .:.  ..    ..........
.   ...:..::.:....::.-:::.             .:.   .    ..........
.                                                 ..........
.                                                 ..........
.                                                 ..........
.   :--::::::::.:-::::-:::             :-:  .:    ..........
.   . ................:...             ...   .    ..........
.                                                 ..........
.                                                 ..........
.    .                                 ...        ..........
.   .-::-::-.:::::--::--:              .-.  .:    ..........
.     . . ..   .. ...  ..              ...        ..........
.                                                 ..........
.                                                 ..........
.    . ... .   . .... .                ...   .    ..........
.   .-::-::-.:-::----::::              :-:  .:    ..........
.                                                 ..........
.                                                 ..........
```

---
*Page 29*

Details of the change, incident, or problem appear on a card in the
Related items panel. Select a card to highlight the associated CI on
the map.

What to do next

• Select another CI on the map to show its related items.

• Select an empty space on the map to show all related items for all CIs
on the map.

• Select a related item category with one or more items to view detailed
related item cards. On a card:

• Select the related item link to drill down to the related item record.

• Open the filter panel to set a sorting category and order for the
cards.

• Some details, such as Priority and Risk, are color-coded using the
default platform color code settings.

## Configure the Related items panel

Configure which categories of related items, such as active incidents
and active problems, appear on the Unified Map Related items panel.

Before you begin

Role required:

• To access maps: sn_cmdb_user, sn_cmdb_editor or sn_cmdb_admin

• To access maps with operational service instances: app_service_user,
and sm_user or sm_admin

• To access maps with operational and non-operational service
instances: app_service_admin, and sm_user or sm_admin

• To access and view related items: itil

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

About this task

The Related items panel groups related items by category on the
side panel. Administrators configure which related item categories are
globally available, and you can further customize the settings.

Procedure

1. While working in a map, select the Related items icon

.

2. In the Related items panel, select the User preferences icon

.

3. In the Related items settings pop-up, move desired items to the
Selected items list and undesired items to the Available items list.

4. Select Apply.
When you select a CI on the map, the desired related item
categories appear.

## Viewing related items on the Unified Map timeline

The timeline indicates related items like incidents, problems, and changes
over a specified period of time for the selected CI. You can use the
timeline to visualize the history of changes to a CI and how they affect
the topology of the CMDB.

Viewing related items

•

When you first open a map, CIs and relationships appear as they are
at the current moment in time. When you select a CI on the map, the
timeline displays related items for the CI.

•

You can drag the map time marker (A in the image) on the timeline to
specify the end date (the map time) for data that should appear on

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

30

Zurich ServiceNow AI Platform Capabilities

*[Icon Or Small Graphic - Page 30, 65x64px]*

```
.-++--:::::::::::::::::::::::::::::::::::::::::::::--++=.
++:                                                   :++:
*.                                                     .++.
+                                                       =*.
+                                                       =*.
+                                                       =*.
+                                                       =*.
+                        .:::::.                        =*.
+                       .**===+*:                       =*.
+                 .-::-=+=-   :++=-.:=-                 =*.
+                -*+=+=:.       .:=+==*=.               =*.
+               -*=.     .-===-.      :*=.              =*.
+              .=++:   .=+=-::-+=.   .=*=:              =*.
+                :*-   =*.     .+*.  :*-                =*.
+                :*-   +*.      +*.  :*-                =*.
+              .-++:   .=*-:.:-++.   .++-.              =*.
+              .=*-      :-=+==:      .++.              =*.
+               .-*=-==:.        .-+==*+.               =*.
+                 :=-:-=+=-   :====:-=-.                =*.
+                       .**---+#:                       =*.
+                        .:----:                        =*.
+                                                       =*.
+                                                       =*.
+                                                       =*.
+                                                       =*.
*.                                                      +*.
++:                                                   .=*:
.-++--:::::::::::::::::::::::::::::::::::::::::::::--=+=.
.:-===============================================-:.
```

---
*Page 31*

the map and on the timeline. The default map time is "now", but you
can specify a particular date or drag the marker to a date.

•

The map and the timeline are synchronized. The map shows the
selected CI and its connections as they existed (based on the creation
date of nodes) at the specified map time. The timeline displays markers
(B in the image) to indicate related items that happened at or before
map time.

•

You can also specify the overall time span (C in the image) of the
timeline view.

• CIs that were created after the map time don't appear on the timeline
and don't affect items on the timeline.

• Multiple related items on the same date are indicated by a badge that
shows the count of related items.

Actions on the timeline

Desired result
Action

Show or hide the timeline

Select the Timeline icon

.

Set the map time marker (and
therefore the items on the map) to
the current time

Select Now.

Set map time to a particular date
and time
Drag the map time marker.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

31

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 31, 807x158px]*

```
.                  .:..               .:

.

...
```

---
*Page 32*

Desired result
Action

Scroll the timeline toward the past
or the future

Select an arrow at the side of the
timeline.

View the date and time for a
related item marker
Point to the marker.

View the details for a related item
Point to the badge for the related
item.

Change the time span of the
timeline

Select a zoom icon

or

.

The time span can range from six
months in the past to six months in
the future.

A related item that has occurred
or that will occur outside the range
doesn't appear on the timeline.
Such related items, however,
still appear in the corresponding
Related items panel. In addition,
a badge in the map might show
data for the related item.

Manage a marker

Select the marker, select the more

actions icon

, and then select
one of the following actions:

• Replace marker: Replace the
current marker with a marker for
the specified date.

• Clear marker: Clear all markers.

• Add marker: Add a marker for
the specified date.

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

Desired result
Action

View related items for all CIs on the
map

Select an empty space on the
map.

Configuring general timeline properties

Admins can configure some properties of the timeline that affect all
users, such as which related item details appear on timelines. For more
information, see Configure how to display related items on the map.

## View historical changes for a CI

The Changes panel in Unified Map displays change details such as
changes to life cycle stage or operational state for the selected CI.

Before you begin

Role required:

• To access maps: sn_cmdb_user, sn_cmdb_editor or sn_cmdb_admin

• To access maps with operational service instances: app_service_user,
and sm_user or sm_admin

• To access maps with operational and non-operational service
instances: app_service_admin, and sm_user or sm_admin

• To access and view related items: itil

About this task

Changes are also indicated on the timeline. For more information, see
Viewing related items on the Unified Map timeline.

Procedure

1. While working in a map, select a CI on the map and then select the

Changes icon

.

All changes for the selected CI appear on the panel.

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

• Select Show more / Show less for details on a card.

•

To flag a change as important, hold the cursor over a change
and then select the Flag as important icon.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

34

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 34, 459x585px]*

```
.                                                    .......
..:::..
..                                               ...:...
.:::-:=-::                   .                    ..:-:..
...::..
. .                                     ...::..
....  ...:.:..::...                              .......
....   ... ....   ... .  . ......                :.    .
:.   ..
.......... .....  ... ................ .....      .......
.......
.                                         .......
..   .:.....                                    .......
.    ... ....   ... .  . ......                .......
.......
.......   :...... ... :....                       .......
.......
....:.... ..:...:: .. ...:..:......:.:..          .......
.......
........  ......:. .. ........ ... .... ......    .......
.:..:..:                                .......
.......
...... .. .... . ..... ..:...::..                 .......
.......
:-:  .:......:::....:.:..                       .......
.:::   ...... ..  ... .... .                     .......
.:          .             .                     .......
.......
. .....       ....                               .......
.             ...                                .......
... ..        ....                               .......
..........    ...........                        .......
.......
.........      ....                               .......
.......
.... ...                                          .......
.......
.......
```

---
*Page 35*

2. Perform other tasks.

• Select another CI on the map to view its changes.

• Select the Open filters

and then select and configure any
of the following filter types:

• Post types

• Field changes

• Flagged

• Filter sets

• Select the Search icon

and enter text in the Search
Activity Stream field to find specific changes by entering terms.

• Select the ascending

or descending sort icon

to toggle between ascending or descending sort.

• Create a filter set to supplement the existing filtering options on
the Changes panel. You can save filter settings for reuse. For
more information, see Create or manage a user preset.

Related concepts

• Viewing related items on the Unified Map timeline

## Editing maps in Unified Map

While you work in the map editor, you can add a CI to the map and
remove (hide) a CI from the map. Removing a CI node from a map
deletes the records of the CI's relationships, but does not delete the
CI record from the CMDB. You can also add, modify, and delete CI
relationships in the CMDB.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

35

Zurich ServiceNow AI Platform Capabilities

*[Icon Or Small Graphic - Page 35, 63x64px]*

```
.-=+++++++++++++++++++++++++++++++++++++++++++++++++++=-.
++-..                                               ..-++-
=                                                       -*-
+*
+*
+*
+*
+*
+*
.:-.                                   +*
.-+**+-.    .-===-.                      +*
:+=.**.=+:    .:::.                       +*
..  **  ..                                +*
**       .=+++++-                     +*
**        .......                     +*
**        .........                   +*
**       .=+++++++-                   +*
**                                    +*
**        .:::::::::::.               +*
**       .-===========:               +*
::                                    +*
+*
+*
+*
+*
+*
+*
=                                                       -*-
++-..                                               ..-++-
.-=+++++++++++++++++++++++++++++++++++++++++++++++++++=-.
```

*[Icon Or Small Graphic - Page 35, 56x52px]*

```






...::...
:=++++++++++=:
-**=-...   ..-+*+-
:+#=.            .=*=.
:**-                -*+.
=#-                 .=#=
*#:                  -#+
=#-                 .=*-
.**-               .-*+.
:+*=.            .+#=.
:+*+-...  ..:-+***=.
:=++++**++++=..:+*=.
.......       :+*=.
:+*=:
:=*=.
..





```

*[Icon Or Small Graphic - Page 35, 56x52px]*

```







..
-*=        ..:..........:.
-#=        :+************-.
-#=
-#=         .........
-#=        :+********-
-#=          ........
-#=
-#=        :+*****+:
-#=        .........
:+- -#= :=-
.-*+*#*+*=.    :+***+:
.-+*+-.      .::::..
...






```

---
*Page 36*

Actions you can take in the map editor

You can perform the following actions in the map editor:

• Right-click a CI, relationship, or anywhere in the map to open a context
menu.

• Select the Attributes icon

to manage CIs and relationships.

• Select the Add CI icon

to add an existing CI and its existing
relationships to the map.

• Select a relationship or CI and then select the Manage relationship icon

to add, update, or delete relationships.

• You can remove (hide) a CI from the map only if you added it during
the current editing session and have not yet saved the map. You
cannot remove a CI that was on the map when you started the editing
session. Select Remove for a CI to delete the CMDB records for all
relationships to and from the CI. The CI is removed from the map, but
the CI record isn’t deleted from the CMDB. For more information, see
Delete a connection using the map editor

Working in the map editor

• You must have either the sn_cmdb_admin or sn_cmdb_editor role to
use the map editor.

• Before editing a map, prepare it to optimize your experience. Use filters
and levels to display the minimum set of CIs to work on. Minimizing the
map makes it easier to understand and control the effects of changes
that you make.

• To edit a map, select the edit map icon

. A thick blue outline on the
map indicates that the map editor is active.

• While you work in the map editor, no changes are made to the CMDB
until you select Save.

• During an editing session, related items and associate badges are not
shown on the map.

• At any time, select the reset icon

to undo all unsaved changes.

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

• End an editing session by selecting Exit. You must exit the editor to
access the timeline and controls (search, filter, zoom, and so on).

Adding a CI to or removing a CI from the map

• You can view an existing CI on the map to enable you to create,
modify, or delete its connections.

• You can add only CIs that have existing records in the CMDB.

• If you try add a CI that already has a connection to another CI on the
map, the map re-centers and the CI is highlighted. In some cases, due
to filter settings, the CI isn't displayed.

• An added CI appears on the map but its CMDB record isn't changed
unless you change the CI's connections and save the changes. After
you add a CI, it can be saved to the map only if it has a path (direct or
indirect) to the home node.

• You can remove (hide) a CI from the map only if you added it during
the current editing session and have not yet saved the map. You
cannot remove a CI that was on the map when you started the editing
session. When you remove (hide) a CI from the map, the record of the
CI in the CMDB is not deleted. In contrast, connection records for a
removed CI are affected as described in Deleting a connection.

• When you delete all connections between one CI and another CI
so that no connection path remains to the home node, the isolated
CI and all of its downstream connections are considered an island
branch. When you save, changes that you made to downstream
connections are saved and the island branch CI is removed from the
map (hidden). The CI record is not, however, removed from the CMDB.

Creating or modifying a connection (relationship or reference)
between CIs

Use the map editor to add a connection between two CIs or to modify
an existing connection.

To learn more, see CI relationships in the CMDB.

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

Deleting a connection

Warning:   Deleting a connection might result in an invalid CMDB
state. Attempting to save a map that includes an orphan CI
generates a warning.

Connections that are not editable are dimmed and view-only.

•

When you delete a connection, the connection is removed from the
map (hidden). The relationship is deleted from the [cmdb_ci_rel] table
only when you save your changes.

• When you delete all connections between one CI and another CI
so that no connection path remains to the home node, the isolated
CI and all of its downstream connections are considered an island
branch. When you save, changes that you made to downstream
connections are saved and the island branch CI is removed from the
map (hidden). The CI record is not, however, removed from the CMDB.

• When you delete all connections to and from a CI and save the
change, the following actions occur:

• The records of all relationships — both upstream to and downstream
from — the CI are deleted from the CMDB [cmdb_ci_rel] table.

• The CI is removed from the map (hidden).

• The record of the CI in the CMDB is not deleted.

Limitations

The map editor does not support the following actions:

• Editing mapped application services (service instances).

• Deleting a CI record from or adding a CI record to the CMDB.

• Attempting to save a map that includes an orphan CI generates a
warning.

• Adding endpoint CIs to or removing endpoint CIs from the map.

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

• Deleting reference or endpoint connections or removing from the map
a CI that has reference or endpoint connections.

• Updating the applicative flow relationship type (connection between
endpoint CIs).

Related tasks

• Add a suggested relationship

• Add a CI to a map using the map editor

• Create or modify a connection using the map editor

• Delete a connection using the map editor

Related concepts

• CI relationships in the CMDB

Related reference

• Suggested class relationships

## Add a CI to a map using the map editor

You can view an existing CI on the map to enable you to create, modify,
or delete its connections.

Before you begin

Role required: sn_cmdb_admin or sn_cmdb_editor

About this task

• You can add only one CI at a time.

• You can remove an added CI from the map if you have not yet saved
the CI to the map.

• You can add only CIs that have existing records in the CMDB.

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

• If you try add a CI that already has a connection to another CI on the
map, the map re-centers and the CI is highlighted. In some cases, due
to filter settings, the CI isn't displayed.

• An added CI appears on the map but its CMDB record isn't changed
unless you change the CI's connections and save the changes.

• The map editor doesn't support adding endpoint CIs.

• After you add a CI, it can be saved to the map only if it has a path
(direct or indirect) to the home node.

Procedure

1. While working in a map, select the edit map icon

and then take
one of the following actions:

• Right-click in a blank spot on the map and select Add CI.

• Select the Add CI icon

.

2. On the Add a CI panel, specify the class of CI to add.

3. Define a filter that will generate a list of CIs of the class that you
specified.

a. Select one CI in the filtered results list and then select Apply filters.

b. (Optional) Save the condition set as a custom filter for future use.

Select the save custom icon

and specify a name for the filter.
You can select the filter whenever you add a CI.

4. To add a CI that is already connected to another CI on the map,
select Add to map or skip this step for a CI that is not yet connected
to another CI on the map.

The map re-centers on the added CI. Skip the remaining steps.

5. To add a CI that is not yet connected to another CI on the map,
select Add to map and connect.
The map re-centers on the added CI and the Manage connection

panel

opens.

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

6. On the Manage connection panel (

), specify the settings.

Manage connection panel

Field
Description

Source CI

You can select the swap icon

to swap source and target.

Note:   In the context of a CI
relationship, this is the parent
CI.

Target CI

You can select the swap icon

to swap source and target.

Note:   In the context of a CI
relationship, this is the child
CI.

Show suggested relationships

Option to control the contents
of the Relationship type selection
box: The relationship types that
are most appropriate for the two
CIs appear at the top of the list.

Relationship type

The relationship between the
CIs. For example, the relationship
between the parent ‘Tomcat’
and the child ‘WAR File’ is
Contains::Contained By.

7. When you have specified all connection settings, select Create
connection.

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

## Remove a CI from a map using the map editor

You can remove (hide) a CI from the map only if you added it during
the current editing session and have not yet saved the map. You cannot
remove a CI that was on the map when you started the editing session.

Before you begin

Role required: admin

About this task

When you remove (hide) a CI from the map, the record of the CI in the
CMDB is not deleted. In contrast, connection records for a removed CI
are affected as described in Deleting a connection.

Procedure

While editing a map, take one of the following actions:

• Select the CI and then select Remove in the Attributes panel.

• Right-click the CI and then select Remove.

## Create or modify a connection using the map editor

Use the map editor to add a relationship between two CIs or to modify
an existing relationship.

Before you begin

Role required: sn_cmdb_admin or sn_cmdb_editor

About this task

• A solid line indicates a relationship. The arrowhead indicates the
dependent node.

• A dashed line indicates a reference.

• A badge on a line indicates the number of relationships between the
CIs.

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

Two CIs might be connected by one or more relationships (stored in
the CI Relationship [cmdb_rel_ci] table). For example, two CIs might be
connected by the Runs On::Runs, Depends On::Discovered From, and by
the Owned By::Owns relationships.

You can learn more about relationships at CI relationships in the CMDB.

The map editor does not support the following actions:

• Editing mapped application services (service instances).

• Deleting reference or endpoint connections or removing from the map
a CI that has reference or endpoint connections.

• Updating the applicative flow relationship type (connection between
endpoint CIs).

Note:   At any time, select the reset icon

to undo all unsaved
changes.

Procedure

1. While editing a map, specify whether to create or modify a
connection.

Action
Procedure

Create a connection
Take one of the following
actions:

• Right-click a CI and select
Connect to.

• Select a CI for the
connection (either the
parent or the child) and
then select the Manage

connection icon

.

Modify an existing connection
Take one of the following
actions:

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

Action
Procedure

• Select the connection and
then select the Manage

connection icon

.

• Select a CI for the
connection (either the
parent or the child) and
then select the Attributes

icon

. All connections for
the CI are listed in boxes.

Select Change.

Delete a connection
For instructions, see Delete a
connection using the map
editor.

2. On the Manage connection panel (

), specify the settings.

Manage connection panel

Field
Description

Source CI

You can select the swap icon

to swap source and target.

Note:   In the context of a CI
relationship, this is the parent
CI.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

44

Zurich ServiceNow AI Platform Capabilities

*[Figure Or Illustration - Page 44, 208x112px]*

```
.    .        .                      ..       .            .
.   .:::.:::...:                     .:::-::....           .
.       .                              . .   .             .
.   .----.----:---:---:              :---:.:-----::.       .
.                                                          .
.                                                          .
.    :...... . .... .. ..                                  .
.   .:::::.::..:.:: ..:::                                  .
.   ... .... ..  .. ...  ....                              .
.   .:::-:::::: :::..:::::.:::                             .
.                                                          .
.   ..   .              .. .    .             ..           .
.   .   :=--::::::::-.   . .   -:--:::::-:-   ..           .
.   .   ..::...::.:.:    . .   ....::..-=::   ..           .
.    .                  .  .                  .
:..........................................................:
```

---
*Page 45*

Field
Description

Target CI

You can select the swap icon

to swap source and target.

Note:   In the context of a CI
relationship, this is the child
CI.

Show suggested relationships

Option to control the contents
of the Relationship type selection
box: The relationship types that
are most appropriate for the two
CIs appear at the top of the list.

Relationship type

The relationship between the
CIs. For example, the relationship
between the parent ‘Tomcat’
and the child ‘WAR File’ is
Contains::Contained By.

3. When you have specified all connection settings, select Change
to change an existing connection or Create connection to add a
connection.

Related tasks

• Add a suggested relationship

• Delete a connection using the map editor

Related concepts

• CI relationships in the CMDB

• Editing maps in Unified Map

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

Related reference

• Suggested class relationships

## Delete a connection using the map editor

While editing a map, you can delete a connection (a relationship
record) from the CMDB. The CIs that are involved in the connection are
not deleted from the CMDB.

Before you begin

Role required: sn_cmdb_admin or sn_cmdb_editor

About this task

Warning:   Deleting a connection might result in an invalid CMDB
state. Attempting to save a map that includes an orphan CI
generates a warning.

The map editor does not support the following actions:

• Editing mapped application services (service instances).

• Deleting reference or endpoint connections or removing from the map
a CI that has reference or endpoint connections.

• Updating the applicative flow relationship type (connection between
endpoint CIs).

•

When you delete a connection, the connection is removed from the
map (hidden). The relationship is deleted from the [cmdb_ci_rel] table
only when you save your changes.

• When you delete all connections between one CI and another CI
so that no connection path remains to the home node, the isolated
CI and all of its downstream connections are considered an island
branch. When you save, changes that you made to downstream
connections are saved and the island branch CI is removed from the
map (hidden). The CI record is not, however, removed from the CMDB.

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

• When you delete all connections to and from a CI and save the
change, the following actions occur:

• The records of all relationships — both upstream to and downstream
from — the CI are deleted from the CMDB [cmdb_ci_rel] table.

• The CI is removed from the map (hidden).

• The record of the CI in the CMDB is not deleted.

You can learn more about relationships at CI relationships in the CMDB.

At any time, select the reset icon

to undo all unsaved changes.

Procedure

1. While editing a map, take one of the following actions:

Note:   No deletions happen until you select Save.

• To delete a single connection, select it and then select Delete in
the Attributes panel. Alternatively, right-click the connection and
then select Delete.

• To delete only particular connections for a CI, select the CI. In the
editing panel, scroll to the connections and select Delete.

• To delete all connections both upstream and downstream of a
CI, select the CI and then select Remove CI.

2. Deletions happen when you select Save.

Related tasks

• Add a suggested relationship

• Create or modify a connection using the map editor

Related concepts

• CI relationships in the CMDB

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

Related reference

• Suggested class relationships

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

48

Zurich ServiceNow AI Platform Capabilities

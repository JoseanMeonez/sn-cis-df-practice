# zurich_servicenow_ai_platform_capabilities_unified_map_2026-01-16-12-40-09

*Source: zurich_servicenow_ai_platform_capabilities_unified_map_2026-01-16-12-40-09.pdf*

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

## Unified Map

The Unified Map feature displays a graphical hierarchical map of the
CMDB — CIs and the connections between them. Unified Map combines
some of the capabilities of Dependency Views and of Service Mapping
into a single map experience.

Unified Map

Unified Map is included in CMDB Workspace.

Nodes on the map represent CIs in the CMDB and lines represent
connections between CIs (relationships, references, and other kinds of
connection). The relationships help you, for example, to assess the impact
of a change to a selected node by showing CIs that are connected to
it through relationships. Products such as Change Management, Incident
Management, and Event Management benefit from such information.

When the Service Mapping application is active, the map also shows the
composition of service instances — useful with products such as Event
Management and Incident Management. For example, you can view all
CIs that are members of the 'Revenue App' service instance. You can
review historical changes and then, for example, filter the CIs so that only
application CIs appear on the map.

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

Tip:   To view a map in full-screen mode, select the Unpin All icon.

Work areas on the map

A: Map

The map displays specified CIs and their connections (CI relationships,
references, and endpoint chains). In the example, the CRM CI is the
home node and the connections represent relationships with other CIs.
Select any node to view details like related service instances, change
history, and so on. For more information, see Controlling Unified Map
contents and appearance.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

4

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 4, 686x209px]*

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

*[Diagram Or Flowchart - Page 4, 1076x699px]*

```
...  .                    .--:                    :-:
:::::::::::::::::::::::::::--:........:::..::::::.---....:--
...........................   .............:::::.........:==
:--                                      ..-:::::::::..:==
::::.         .   .                        ..............:==
:..          -=-  .                        ..:...........:==
:::.          .  .......                   ..::::...::...:--
::..                                       .........:....:::
:::.                                       ..:::....:....:::
:::. .......    .......    ........   ...  ..:...........:::
::..                                       ..............:::
....                      :--           .....:...........:::
.:-:::::.        ..:...........:::
.:::::::        ..::..........:::
:--                    :......        ..:::.........:::
....:-:                           . ..   ...::..........:::
...                      ..      .      ...::::........:::
....................................... ...::..........:::
...:...........:::
```

---
*Page 5*

Two CIs might be connected by one or more relationships (stored in
the CI Relationship [cmdb_rel_ci] table). For example, two CIs might be
connected by the Runs On::Runs, Depends On::Discovered From, and by
the Owned By::Owns relationships.

• A solid line indicates a relationship. The arrowhead indicates the
dependent node.

• A dashed line indicates a reference.

• A badge on a line indicates the number of relationships between the
CIs.

B: Content controls

• Home node search box: Search for and select the home node —
the node to focus on (CRM in the image). For more information, see
Controlling Unified Map contents and appearance.

• Levels: Specify the number of CI relationship levels that should appear
on the map.

• Filters

: Customize the map to focus on the CIs that you want to
work on by filtering out (hiding) irrelevant CIs. You can filter by layer
count, CI class, relationship type, discovery source, location, and CI

ownership. Select the view icon

to hide or show filtered CIs as
dimmed view-only nodes. For more information, see Use filters to specify
which nodes should appear on a map.

• Reload map

: Reload the map after making changes.

• Timeline

: The timeline indicates related items like incidents,
problems, and changes over a specified period of time for the selected
CI. You can use the timeline to visualize the history of changes to a CI
and how they affect the topology of the CMDB. For more information,
see Viewing related items on the Unified Map timeline.

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

• Map editor

: Use the map editor to add CIs to or remove CIs
from the map and to update relationships in the CMDB. For more
information, see Editing maps in Unified Map

C: Toolbox

• Use the toolbox to control visual aspects of the map such as zoom
level or layout mode. For more information, see Controlling Unified Map
contents and appearance.

• In the toolbox, select the Export map icon

to save the current
appearance of the map as a PDF document on your local drive.

D: Contextual side panel

• The Overview panel (

) displays summary data for all CIs that are
associated with the home node — counts and types of CIs and
connections, discovery sources, and so on. For more information, see
View a summary of map contents on the Overview panel.

• The Attributes panel (

) lists attributes like location and operational
status for the selected CI or relationship. For more information, see View
the attributes of a CI or a relationship.

• The Service instances panel (

) lists details of mapped application
services (service instances) associated with the selected CI. The Service
Mapping application generates this type of map content. For more
information, see View service instances for a CI.

• The Related items panel (

) shows related items such as changes,
active incidents, or active problems for the selected CI. For more
information, see View related items for a CI.

•

The Changes panel (

) lists changes to the selected CI such as
changes to life cycle stage or operational state. For more information,
see View historical changes for a CI.

Changes are also indicated on the timeline. For more information, see
Viewing related items on the Unified Map timeline.

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

E: Mini-map navigator

Use the navigator to set the zoom level or move the view to an area
of interest. Select the icon to show or hide the navigator. For more
information, see Controlling Unified Map contents and appearance.

F: Timeline

The timeline indicates related items like incidents, problems, and changes
over a specified period of time for the selected CI. You can use the
timeline to visualize the history of changes to a CI and how they affect
the topology of the CMDB. For more information, see Viewing related
items on the Unified Map timeline.

Related concepts

• CMDB Workspace store app

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

7

Zurich ServiceNow AI Platform Capabilities

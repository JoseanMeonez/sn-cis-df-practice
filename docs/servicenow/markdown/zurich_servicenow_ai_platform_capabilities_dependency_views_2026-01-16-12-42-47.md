# zurich_servicenow_ai_platform_capabilities_dependency_views_2026-01-16-12-42-47

*Source: zurich_servicenow_ai_platform_capabilities_dependency_views_2026-01-16-12-42-47.pdf*

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

## Dependency Views

ServiceNow® Dependency Views graphically displays an infrastructure
view for a configuration item (CI) and the application or business services
that it is part of and that it supports. Dependency Views indicates the
status of its configuration items, and allows access to CIs related alerts,
incidents, problems, changes, and services.

If Service Mapping is activated, Dependency Views maps are enhanced
to display dependencies that reflect connections in service maps.

Explore

• Zurich

• Domain separation
and Dependency
Views

Administer

• Create or modify
map indicators

• Create or modify
map icons

• Create a predefined
filter

• Create or modify
Map Related Items

• Create or modify
Dependency Views
menu actions

• Create or edit a
dependency type

Use

• Dependency Views
map

• Dependency Views
map menus and
controls

• View a
Dependency Views
map

• Change the layout
of Dependency
Views map

• Filter the view of a
Dependency Views
map

• Perform actions
on nodes in a
Dependency Views
map

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

• Supported browsers
for Dependency
Views

Develop

• Developer training

• Developer
documentation

• Properties for
Dependency Views

• Components installed
with Dependency
Views

Integration

View metrics for CIs in
a Dependency Views
map

Troubleshoot and get
help

• Ask or answer
questions in the
Now Community

• Search the Known
Error Portal for
known error articles

• Contact Customer
Service and
Support

## Supported browsers for Dependency Views

The latest version or service pack of internet browsers are required to view
and manipulate Dependency Views maps.

The Dependency Views module supports the latest version or service
pack of the following browsers:

• Firefox with the latest ESR

• Chrome latest version

• Safari version 8 or later (latest is recommended)

• Microsoft Internet Explorer (IE) version 11 and Microsoft Edge.

The Dependency Views module is not supported on tablets and on
mobile devices.

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

## Domain separation and Dependency Views

Domain separation is unsupported in Dependency Views. Domain
separation enables you to separate data, processes, and administrative
tasks into logical groupings called domains. You can control several
aspects of this separation, including which users can see and access
data.

Support level: Basic

• Business logic: Ensure that data goes into the proper domain for the
application’s service provider use cases.

• The application supports domain separation at run time. The domain
separation includes separation from the user interface, cache keys,
reporting, rollups, and aggregations.

• The owner of the instance must set up the application to function
across multiple tenants.

Sample use case: When a service provider (SP) uses chat to respond to
a tenant-customer’s message, the customer must be able to see the SP's
response.

For more information on support levels, see Application support for
domain separation.

How domain separation works in Dependency Views

Dependency views are generated using both Configuration Item
[cmdb_ci] and CI Relationship [cmdb_rel_ci] tables. The [cmdb_ci] table
is domain separated, but the [cmdb_rel_ci] table is not. You can create
relationships only by selecting two CIs. They should be in the same
domain for you to be able to see them.

To be successful with domain separation in Dependency Views, make
sure that relevant CIs are visible for the current domain. If the instance
is domain separated, ServiceNow domain separation rules apply (see
Related information link below).

Tenant domains will be able to see only their domain and global CIs.

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

Related topics

• Domain separation for service providers

## Dependency Views map

ServiceNow® Dependency Views maps graphically display CIs that
support application or business services and the relationships between
the CIs.

The CMDB Workspace store app provides the Unified Map feature as
an alternative to using Dependency Views. Unified Map combines the
capabilities of Dependency Views and Service Mapping into a single
map experience.

A ServiceNow service (application service or business service) is work or
goods that are supported by an IT infrastructure. For example, delivering
email service to an employee can require services such as email servers,
web servers, and the work to configure the user's account.

A Dependency Views map has one starting point, called the root CI or
root node of the map. The root CI is surrounded by a darker frame that
repaints itself with a pulsing effect drawing the attention to the root CI.
The maps can show both upstream and downstream dependencies for
the root CI. By default the Dependency Views map displays 3 levels, both
upstream and downstream relationships. Administrators can configure
the number of levels displayed. The map collapses and expands clusters
to make them easier to view. By default, clusters are collapsed.

In a Dependency Views map, map indicators indicate if a CI has any
active, pending issues. You can investigate the tasks that are connected
to a CI to get more details. When you return to the map from another
form, the system restores the last map viewed, using the default filter and

layout settings. When you click the icon (

) on a CI record or on a task
record that identifies a CI, the map opens.

Many of the relationships in map are created through the discovery
process. You can also create, define, and delete CI relationships in the
map. You can display the map from different perspectives and open
specific records that relate to configuration items. The system refreshes
the map automatically to reflect changes to the CMDB.

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

Note:   CIs not extended from the Configuration Item [cmdb_ci]
table, are not displayed in Dependency Views maps and in CI
relation formatters.

The Dependency Views module is active in all instances, and includes
demo data.

Dependency Views sample map

When you click the map icon [

] on a CI record or on a task record
that identify a CI, a map opens.

Roles

Users with the itil and ecmdb_admin roles can view maps and perform all
actions in the map. Actions include access to the map views and saved
filters, both from the lists in the map and from the Saved Filters module.

## Dependency Views map menus and controls

Dependency Views maps contain the following menus and controls.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

7

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 7, 895x222px]*

```

......          .. .
. ..          .......
.             ....

. ...          . ....

```

---
*Page 8*

Dependency Views map

Map options

The following options are available across the top of the map.

Menu to save, load and export
views of the map.

<Root CI>

Next to the menu icon is the name
of the current root node (CI) of the
map.

Enter the name of a CI,
application service, or business
service to load into the map.
Alternatively, you can start typing
to have the auto-complete
feature present a list of CIs and
services that match your partial
value.

Vertical
Display the map in vertical view.

Horizontal
Display the map in horizontal view.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

8

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 8, 1414x780px]*

```
.........                 ...   ....     ..:... .. . ...:.::
...                       ....        ..   .....          .
...                      .::::::::::::::.   .....         .
.                ..       ......    ....              ::-..
.....            ....     ..       .....        .     ... .
...                                  .::..
...       ..                         ...       .::..
...      .....               ...     ..        ... .
.....  ......   .....               .....   .         :::..
.                       .             .. .
.....                          ..:....            ::-..
..  .     ....         .    .. .   .   ...               .
...    .  ..  .        ....  .  .      ...               .
...    .  .. .. ....   ...   .  .  .   ..
..        .            ...             .

```

---
*Page 9*

Radial
Display the map in radial view.

Force

Centers the elements around the
parent CI, regardless of upstream
or downstream relationships.

Group
Groups the elements according to
their CI type.

Details

Displays related lists such as
Problems, Changes and Related
Services that are associated with
the selected CI.

• Click a service to highlight the
CIs that are associated with that
service.

• Click Related Services, then
double-click a service to
display the map in the Event
Management dashboard.

If the Event Management plugin is
active, then events and alerts are
also displayed.

Settings
Set filters for the map.

Use the navigation tools to
increase or decrease the view of
the map, rearrange the icons on
the map, and move the map on
the page.

• Use the plus sign (+) to increase
magnification of the map.

• Use the minus sign (-) to
decrease magnification of the
map.

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

• Click the center dot to center
the map on the page.

• Use the direction arrows to move
the page in that direction.

• Use the selection tool under
the navigation tool to toggle
between moving the entire map
or moving one CI on the map.

Map menu

The following options are available if you right-click the map
background.

Run Layout
Redraws the map with the current
layout option.

Fit To Screen
Resizes the map to fit all the nodes
in the map window.

Reset Filters
Performs the same action as the
Filters > Reset option.

Node menu

The following options are available if you right-click a node.

View Form

Displays the CMDB record of the
selected CI in a new tab of the
browser.

View Map

Reloads the map using the
selected CI as the new root node,
with the currently defined layout
setting. This option does not display
on the root node.

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

View Related Tasks

Displays all tasks or outages
associated with the selected
CI, including incidents, problems,
change requests, and follow-on
tasks. This option is always
available, even if there are no
tasks associated with the CI.
This option does not appear on
collapsed nodes.

View Affected CIs

Shows a list of all tasks that have
the CI listed as an Affected CI.
This option is only visible when
you access the map from the
map icon in a task record's
Configuration item field.

View Related Outages

Displays all outages involving the
selected CI. This option only
appears when there is an outage
associated with the CI. This option
does not appear on collapsed
nodes.

Add Relationship

This option displays a dotted green
line that you can drag to another
CI to create a relationship link. A
popup dialog allows you to define
the relationship type.

Expand

Displays all CIs and components
within a clustered node,
or virtual groups (virtual
nodes that appear when
glide.bsm.too_many_children is
reached). This option appears only
if the node is a cluster node or a
virtual group node.

If Load More was previously used,
then Expand reverts the results of
the Load More operation.

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

The number of additional icons
to display is bound by the
value of the glide.bsm.max_nodes
property.

Collapse

Collapses all CIs and components
within a cluster node back to
a single node. Also, collapses
a virtual group that has been
expanded. This option only
appears if the node has been
expanded using the Expand menu
item.

If Load More was previously used,
then Expand reverts the results of
the Load More operation.

Run Layout From Here

This option re-runs the chosen
layout using the current node. Use
this option to get a new or clearer
view on the same map.

Load More

Starting at the selected icon, loads
the next level of the map, past the
setting of Max Levels.

Virtual grouping is not applied at
the newly loaded level even if the
criteria for virtual grouping is met.

The number of additional icons
to display is bound by the
value of the glide.bsm.max_nodes
property.

Relationship menu

The following options are available if you right-click a relationship link.

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

View Relationship Form

Opens the CI Relationship form.
You can modify the Parent, Type,
and Child of the relationship from
this form.

Modify Relationship
Searches for and selects a new
relationship for this link.

Delete Relationship

Deletes a relationship. The
relationship is deleted after
prompting for confirmation.

## Cluster nodes in a Dependency Views map

Dependency Views maps can display cluster group nodes alongside
individual CI nodes, and the child nodes of these cluster groups.

Clusters are CIs in the Cluster [cmdb_ci_cluster] table. A cluster CI is an
organized set of computer CIs that work together as a single system.
Each node in a cluster group represents a CI, typically a server, that can
have referenced hardware, such as disks and network adapters.

Cluster nodes on a Dependency Views map can display in two modes:

• Collapsed mode: Displays only the cluster CI node without its child CI
nodes. This mode avoids unnecessary clutter in large maps.

• Expanded mode: Displays the cluster CI node and all its child CI nodes.

Menu options available for a clustered node include Collapse and
Expand, which allow you to control the density on the map.

By default, Dependency Views collapses all cluster groups and displays
clusters in collapsed mode on the map.

Annotation

Icons for cluster nodes and cluster group CI nodes are noted by the string
"Cluster" and by a unique cluster icon. The system searches through all
the component nodes in a cluster CI or collapsed node looking for tasks,
outages, and trouble, such as incidents, problems, or change requests.

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

This search evaluates only the number of levels that are displayed in the
diagram.

An expanded cluster node displaying its child nodes

## Virtual grouping of nodes in a Dependency Views map

To reduce the density on a map, Dependency Views automatically
groups CIs of a similar CI type from the same level.

A large number of nodes can cause a Dependency Views map to
become too dense to be helpful. Therefore, if the number of nodes with
a similar CI type from same level, exceeds the value of the Maximum
number of nodes (of a similar CI type and at the same level) to
display before applying virtual grouping property, then those nodes are
automatically grouped into a virtual group. A single node, the virtual

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

14

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 14, 653x583px]*

```
......                     ......
.                          .


.                          .
.....    .....             .....    ......



.. ...                     .. ...
.  .                      ......


.                          .
......  .......           .......   ..
.....    .                 .....     ......


.                 .         .
.. ..              .. ..     .....



.......            ..


```

---
*Page 15*

group node is displayed to represent the virtual group, while all actual
nodes in the virtual group (that are of a similar CI type), are hidden.
Virtual group nodes represent CIs of a similar CI type but are not CIs
by themselves and cannot have tasks assigned to them. The number of
actual collapsed nodes in the virtual group is noted on the virtual group
node.

By default, child nodes of a virtual group are not displayed. You can
enable the Show children of virtual groups property to display child nodes
underneath virtual groups.

Virtual grouping is not applied at the level underneath a virtual group
even if the criteria for virtual grouping is met (the number of nodes with
a similar CI type from that level exceeds the preconfigured property
value). However, virtual grouping can happen at the following level
if that criteria is met. This behavior does not depend on any property
settings, and you cannot change it.

Menu options for a virtual group include Expand and Collapse, which
allow you to apply virtual grouping and display only the virtual group
node, or to undo the virtual grouping and display all actual nodes.

Virtual links

A virtual node is connected to other nodes with a virtual link. A virtual link
denotes that there such link between at least one CI in the virtual group,
to another CI node on the map.

Note:   Predefined filters do not apply to virtual groups. Therefore
a virtual group displays even if it contains CIs that a predefined
filter would have excluded. Upon the expansion of a virtual group,
predefined filters are applied, and any or all of the CIs that were
previously virtually grouped, might no longer display on the map.

Also, when using the node menu option Load More, virtual grouping
is not applied at the newly loaded level even the criteria for virtual
grouping is met.

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

An expanded virtual group

Related reference

• Properties for Dependency Views

## Use Dependency Views

Use the layout controls on a Dependency Views map to display elements
in different configurations for easier management. Use the filter panel on
the map to display fewer levels or to filter out elements you don't want
to see, then save the filter for use later. Draw new relationships between
elements or edit existing relationships.

• View a Dependency Views map

When you display a Dependency Views map, the map is centered
on the root CI and displays the layout and number of levels defined
in the map properties. If Operational Intelligence is activated, then a
Dependency Views map provides a mode that lets you directly access
metrics information for the CIs on the map.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

16

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 16, 990x711px]*

```


.......                         .
.                               .



......                          ......



....     ....                   ....     ...
.


..                   ........  .:.....  .......
.:...... .            ..:..... ............ ..
.........                      ........

...      .
...     .. ..
```

---
*Page 17*

• Save or load a Dependency Views map

In the View Map module, use the menu icon to save and load
Dependency Views maps.

• Delete a saved Dependency Views map view

Use the Saved Views module to delete a previously saved view.

• Change the layout of Dependency Views map

You can select from different layout options for your Dependency
Views map.

• Filter the view of a Dependency Views map

Filter a Dependency Views map to display specific types or categories
of configuration items.

• View metrics for CIs in a Dependency Views map

Operational Intelligence processes metrics data for CIs, calculates
statistics and aggregations, and detects metrics anomalies. A
Dependency Views map lets you switch to metrics mode to directly
access the Insights Explorer that displays metrics data for CIs on the
map.

• Perform actions on nodes in a Dependency Views map

You can view various related items for the nodes in a Dependency
Views map.

• Export a Dependency Views map

Export a Dependency Views map to an image in PNG format.

• View collapsed nodes in a Dependency Views map

Cluster and virtually grouped nodes can be displayed in a collapsed
mode to avoid unnecessary clutter in large maps.

Related concepts

• Domain separation and Dependency Views

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

• Dependency Views map

• Cluster nodes in a Dependency Views map

• Virtual grouping of nodes in a Dependency Views map

Related reference

• Supported browsers for Dependency Views

• Dependency Views map menus and controls

• Properties for Dependency Views

• Components installed with Dependency Views

Related topics

• Administer Dependency Views

## View a Dependency Views map

When you display a Dependency Views map, the map is centered
on the root CI and displays the layout and number of levels defined
in the map properties. If Operational Intelligence is activated, then a
Dependency Views map provides a mode that lets you directly access
metrics information for the CIs on the map.

Before you begin

Role required: dependency_views (see general requirements)

General role requirements:

• To access a Dependency Views map from either the navigation menu,
a script API, or directly from a URL, the minimum role required is
the dependency_views. Some operations that are related to icons,
indicators, and menu actions require the ecmdb_admin role. Some
operations that are related to properties and dependency types
require the admin role.

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

• Dependency Views enforces ACL permissions on CIs, and visually hides
them and their relationship from the map if the permission requirement
is not met.

About this task

The maps generated by Dependency Views are based on D3 and
Angular technology, providing a modern interactive graphical interface
to visualize configuration items and their relationships.

If Service Mapping is activated, Dependency Views maps are enhanced
to display dependencies that reflect connections in service maps. In
addition, the list of related services in the Details section, includes
application services, and technical and manual services if Event
Management is activated. All CIs that are included in a service, are
displayed underneath the service node on the map.

Maps provided by Service Mapping are for application services,
including comprehensive maps from the perspective of application
services. For more information, see Service Mapping.

Administrators can configure the setting for the default layout of the map
and number of levels displayed. When you access the map from a saved
view, the map opens using the properties in the saved view, and not the
default map properties.

Procedure

Navigate to All > Dependency Views and open one of these modules:

• View Map in New Tab: Opens the map in a new, full screen tab without
the application navigator.

• View Map: Opens the map in the content pane of the current tab.

• Saved Views: Opens a view of a map that you previously saved.

Click a number in the Version column, and then click the Display

Dependency Views map icon (

).

Related tasks

• Save or load a Dependency Views map

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

• Delete a saved Dependency Views map view

• Change the layout of Dependency Views map

• Filter the view of a Dependency Views map

• View metrics for CIs in a Dependency Views map

• Perform actions on nodes in a Dependency Views map

• Export a Dependency Views map

• View collapsed nodes in a Dependency Views map

## Save or load a Dependency Views map

In the View Map module, use the menu icon to save and load
Dependency Views maps.

Before you begin

Role required: None

Procedure

1. Navigate to All > Dependency Views > View Map.

2. Click the View menu icon (

).

3. Select Save View, Load View, or Last View.

Related tasks

• View a Dependency Views map

• Delete a saved Dependency Views map view

• Change the layout of Dependency Views map

• Filter the view of a Dependency Views map

• View metrics for CIs in a Dependency Views map

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

• Perform actions on nodes in a Dependency Views map

• Export a Dependency Views map

• View collapsed nodes in a Dependency Views map

## Delete a saved Dependency Views map view

Use the Saved Views module to delete a previously saved view.

Before you begin

Role required: admin

Procedure

1. Navigate to All > Dependency Views > Saved Views.

2. Select the check box for map view that you want to delete.

3. Select Delete from the Actions on selected rows drop-down menu.

Related tasks

• View a Dependency Views map

• Save or load a Dependency Views map

• Change the layout of Dependency Views map

• Filter the view of a Dependency Views map

• View metrics for CIs in a Dependency Views map

• Perform actions on nodes in a Dependency Views map

• Export a Dependency Views map

• View collapsed nodes in a Dependency Views map

## Change the layout of Dependency Views map

You can select from different layout options for your Dependency Views
map.

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

Before you begin

Role required: none

Procedure

1. Navigate to All > Dependency Views > View Map.

2. Select one of the following layout options from the menu across the
top of the view.

• Vertical: Displays the elements in a vertical tree pattern
according to their upstream and downstream relationships. This
is the default value for the initial display of the map.

• Horizontal: Displays the elements in a horizontal tree pattern
according to their upstream and downstream relationships.

• Radial: Displays the elements in a radial pattern according to
their upstream and downstream relationships.

• Force: Centers the elements around the parent CI, regardless of
upstream or downstream relationships.

• Group: Groups the elements according to their CI type.

• Details: Displays related alerts, incidents, problems, and related
services.

Related Services displays application services related to the
CIs currently displaying in the map. If Event Management is
activated then technical services and manual services are
included. You can double-click a service to display the map in
the Event Management dashboard.

Related tasks

• View a Dependency Views map

• Save or load a Dependency Views map

• Delete a saved Dependency Views map view

• Filter the view of a Dependency Views map

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

• View metrics for CIs in a Dependency Views map

• Perform actions on nodes in a Dependency Views map

• Export a Dependency Views map

• View collapsed nodes in a Dependency Views map

## Filter the view of a Dependency Views map

Filter a Dependency Views map to display specific types or categories of
configuration items.

Before you begin

Role required: admin

About this task

Use the filter panel to control which elements of the map are displayed
and to save versions of a filter for later use.

Procedure

1. Navigate to All > Dependency Views > View Map.

2. Click the Map settings icon

to open map settings.

Map settings

Filter panel strips and options
Description

Save Custom Settings

Configure desired custom
settings, then enter a name and
click Save.

Custom settings can be loaded
by using the Load Saved Custom
Settings option.

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

Filter panel strips and options
Description

Navigate to Dependency Views
> Saved Settings > to display all
saved custom settings.

Load Custom Settings
Apply previously saved custom
settings to the current map.

Predefined Filters

Apply previously defined filters
consisting of configuration type,
CI type, and relationship filters.
You can Set a predefined filter
as default.

This filter is applied first, before
any other filters (such as Filter CIs
by Depth) are applied.

Dependency Type

Apply a filter that runs in real
time and generates a custom
view of a service map for a
specific CI.

Max Levels
Designate how many levels from
the root CI display on the map.

Filter CIs by Depth
Designate which levels of CI
display on the map.

Filter CIs by CI Type
Designate what CI types display
in the map.

Filter CIs By CI Location
Designate what CI locations
display in the map.

Filter CIs By CI Manufacturer

Designate what CI
manufacturers display in the
map.

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

Filter panel strips and options
Description

Filter CIs By Audit Failure

Hides CIs that failed the CMDB
health staleness test. This option
is available only if there are any
such CIs.

Filter Relationship Types
Designate what relationship
types display in the map.

Map Indicators

Designate what types of tasks
display and get counted in the
map.

Remove Filtered Items

Off: Gray out filtered items on the
map.

On: Do not display filtered items
on the map.

Run Layout Automatically

On: The configured layout to the
map is reapplied whenever the
filter is changed.

Off: The map layout remains
static when the filter is changed.

Fit to Screen Automatically

On: The map magnification
will increase or decrease
automatically to display all CIs
on the map.

Off: The map magnification
remains unchanged when the
map is reloaded.

3. Click a filter strip to expand or collapse it, and to set filter items.

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

Related tasks

• View a Dependency Views map

• Save or load a Dependency Views map

• Delete a saved Dependency Views map view

• Change the layout of Dependency Views map

• View metrics for CIs in a Dependency Views map

• Perform actions on nodes in a Dependency Views map

• Export a Dependency Views map

• View collapsed nodes in a Dependency Views map

## View metrics for CIs in a Dependency Views map

Operational Intelligence processes metrics data for CIs, calculates
statistics and aggregations, and detects metrics anomalies. A
Dependency Views map lets you switch to metrics mode to directly
access the Insights Explorer that displays metrics data for CIs on the map.

Before you begin

The Operational Intelligence (com.snc.sa.metric) plugin must be
activated to enable this functionality, and metrics data needs to be
processed for the CIs on the Dependency Views map.

Role required: admin

About this task

Open a Dependency Views map in metric mode which integrates a
Dependency Views map with the Insights Explorer functionality that is
tailored to the map. In this mode, you can access Insights Explorer
functions directly from the map, to explore metrics data for the CIs on
the map. All map CIs are accessible in the right hand side pane, from
where you can drill into metrics data.

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

1. Navigate to All > Dependency Views > View Map to open a map.

2. Right-click on a CI on the map and select View Metrics to open the
Dependency View map in metrics mode.
In the panel on the right side, the CI that you selected on the
Dependency View map is selected by default, and the list of all the
metrics available for that CI are displayed.

3. Click the '<' sign on the left of the CI to display all the CIs that you can
explore metrics for.
The Insights Explorer is scoped for exploring only the CIs that currently
display on the Dependency Views map, and you cannot add or
remove CIs from the list. If you use map settings or filters to filter out
CIs from the map, the same filtering will apply to the list of CIs that
you can explore metrics for.

4. Click on a CI in the CIs list or right-click on a CI on the Dependency
Views map, to drill down to the CI's metrics.

5. Click the Dependencies Map tab or the Metrics tab to switch modes:

a. In Metrics mode: The full functionality of the Insights Explorer is
available, you can create metric charts by dragging metrics into
the canvas.
You can modify chart settings, select different time ranges for the
charts, and perform other actions as described in View metric
values in the Insights Explorer.

b. In Dependencies Map mode: Select a CI on the map to drill
down to its metrics data, drop-down the Layout list to choose a
different layout, or modify map settings.

Related tasks

• View a Dependency Views map

• Save or load a Dependency Views map

• Delete a saved Dependency Views map view

• Change the layout of Dependency Views map

• Filter the view of a Dependency Views map

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

• Perform actions on nodes in a Dependency Views map

• Export a Dependency Views map

• View collapsed nodes in a Dependency Views map

## Perform actions on nodes in a Dependency Views map

You can view various related items for the nodes in a Dependency Views
map.

Before you begin

Role required: None

About this task

If the node is a collapsed node or represents a cluster, the incidents,
problems and change requests are for all the collapsed nodes.

Procedure

1. Navigate to All > Dependency Views > View Map.

2. Click the Node menu icon

next to a node or right-click a node
on the map to access the following menu items:

Node Menu

View Form

Displays the CMDB record of the
selected CI in a new tab of the
browser.

View Map

Reloads the view using the
selected CI as the new root
node, with the currently defined
layout setting. This option does
not display on the root node.

View Related Tasks

Displays all tasks or outages
associated with the selected
CI, including incidents, problems,

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

change requests, and follow-
on tasks. This option is always
available, even if there are no
tasks associated with the CI.
This option does not appear on
collapsed nodes.

View Affected CIs

Shows a list of all tasks that have
the CI listed as an Affected CI.
This option is only visible when
you access the view from the
view icon in a task record's
Configuration item field.

View Related Outages

Displays all outages involving
the selected CI. This option
only appears when there is an
outage associated with the CI.
This option does not appear on
collapsed nodes.

Add Relationship

This option displays a dotted
green line that you can drag
to another CI to create a
relationship link. A popup dialog
allows you to define the
relationship type.

Expand

Displays all CIs and components
within a cluster node or a
collapsed node. This option
only appears if the node is a
collapsed or cluster node.

The number of additional icons
to display is bound by the value
of the glide.bsm.max_nodes
property.

Collapse

Collapses all CIs and
components within a cluster
node or a collapsed node back
to a single node. This option only

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

appears if the node has been
expanded using the Expand
menu item.

Run Layout From Here

This option re-runs the chosen
layout using the current node.
Use this option to get a new or
clearer view on the same map.

Load More

Starting at the selected icon,
loads the next level of the map,
past the setting of Max Levels.

The number of additional icons
to display is bound by the value
of the glide.bsm.max_nodes
property.

Related tasks

• View a Dependency Views map

• Save or load a Dependency Views map

• Delete a saved Dependency Views map view

• Change the layout of Dependency Views map

• Filter the view of a Dependency Views map

• View metrics for CIs in a Dependency Views map

• Export a Dependency Views map

• View collapsed nodes in a Dependency Views map

## Export a Dependency Views map

Export a Dependency Views map to an image in PNG format.

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

Before you begin

Role required: admin

Procedure

1. Navigate to All > Dependency Views > View Map.

2. Configure the map view as you want the image to appear.
The exported image displays the current view of the map.

3. Click the view menu icon (

).

4. Click Export Image.

5. Right-click the image and select Save Image As, Print, or any other
menu option.

Note:   You can't export images from a Dependency Views map
using Internet Explorer as your browser.

6. Click the "X" button to close the Export Image window.

Related tasks

• View a Dependency Views map

• Save or load a Dependency Views map

• Delete a saved Dependency Views map view

• Change the layout of Dependency Views map

• Filter the view of a Dependency Views map

• View metrics for CIs in a Dependency Views map

• Perform actions on nodes in a Dependency Views map

• View collapsed nodes in a Dependency Views map

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

## View collapsed nodes in a Dependency Views map

Cluster and virtually grouped nodes can be displayed in a collapsed
mode to avoid unnecessary clutter in large maps.

Before you begin

Role required: None

Procedure

1. To expand a collapsed node, right-click the CI and select Expand
from the context menu.

2. To collapse an expanded cluster node with children, right-click the CI
and select Collapse from the context menu.

Related tasks

• View a Dependency Views map

• Save or load a Dependency Views map

• Delete a saved Dependency Views map view

• Change the layout of Dependency Views map

• Filter the view of a Dependency Views map

• View metrics for CIs in a Dependency Views map

• Perform actions on nodes in a Dependency Views map

• Export a Dependency Views map

## Administer Dependency Views

Users with the admin role can control the appearance and behavior of
Dependency Views by configuring map indicators, map related items,
map icons, and menu actions.

• Create or modify map indicators

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

Dependency Views maps and application service maps, use icons to
display additional information for a CI by displaying its related records
such as alerts, outages, incidents and problems. These icons are called
map indicator.

• Create or modify map icons

Upload new icons or modify existing icons to customize the icon
displayed for a CI in maps in Dependency Views, Service Mapping, and
Event Management.

• Create a predefined filter

Create filters to narrow down the CIs that are displayed on a
Dependency Views map. You can create filters that are based on CIs'
class, CIs' attributes, or CIs' relationships.

• Set a predefined filter as default

You can set a custom predefined filter as the default predefined filter
for viewing maps.

• Create or modify Map Related Items

The Map Related Items module relates referenced CIs to one another,
which allows them to be displayed in a Dependency Views map.

• Create or modify Dependency Views menu actions

To modify an existing menu option, first you create a copy of the
original menu action record, and then you modify the copy.

• Condition and script parameters for menu actions

You can use the following condition and script parameters for menu
actions.

• Create or edit a dependency type

Use one of the dependency types provided, or create a custom
dependency type with a script that will execute in real time to
generate a custom view of a Dependency Views map for a specific
CI.

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

Related concepts

• Domain separation and Dependency Views

• Dependency Views map

• Cluster nodes in a Dependency Views map

• Virtual grouping of nodes in a Dependency Views map

Related reference

• Supported browsers for Dependency Views

• Dependency Views map menus and controls

• Properties for Dependency Views

• Components installed with Dependency Views

Related topics

• Use Dependency Views

## Create or modify map indicators

Dependency Views maps and application service maps, use icons to
display additional information for a CI by displaying its related records
such as alerts, outages, incidents and problems. These icons are called
map indicator.

Before you begin

Role required: admin

About this task

The default configuration includes map indicators for the following record
types:

• Open incident.

• Open alert.

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

• Unplanned current outage.

• Planned current outage, or an open problem.

• Current, planned, or recent change request.

You can filter out the display of affected CIs, alerts, current change
requests, incidents and problems from the map settings menu.

The Affected CI’s map indicator appears for CIs in two related but not
identical situations. It appears for CIs for which tasks such as change
request, incident, or problem were directly created for, and for any CIs
that were added in those tasks (parent tasks) as Affected CIs (The CI
for which a task is directly created for, is automatically added as an
affected CI in that task). The state of affected CI’s depends on the status
of the respective parent task. For as long as the parent task is active, the
associated affected CIs continue to be impacted by the task issue. In a
map, the Affected CI’s indicator displays for all affected CIs for as long
as the parent task is active. On a map, the Affected CI tooltip displays
the details of the task records in which the CI was added as an affected
CI. However, the Details pane does not contain an Affected CI’s tab,
and no further details about affected CIs, or the associated tasks are
displayed. After the parent task is closed, the Affected CI’s indicator no
longer displays for any of the tasks’ affected CIs. For information about
affected CIs in Change Management, see Associate CIs to a change
request.

Note:   Details about affected CIs are derived from the task and
the cmdb_ci tables and their extensions. Therefore, if you use custom
tables to store CIs for incidents, problems and changes, it affects the
details that are displayed for affected CIs.

For more information on how map indicators are used to show tasks
and outages in clusters and collapsed nodes, see Cluster nodes in a
Dependency Views map.

Procedure

1. Navigate to All > Dependency Views > Map Indicators.

2. Click New to create a new map indicator, or click the name of an
indicator from the Table column to modify an existing map indicator.

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

3. Fill in the fields on the form, as appropriate.

Map Indicator form

Field
Description

Table

Name of the table represented
by this map indicator.

Note: The list shows only tables
and database views that are
in the same scope as the
map indicator. Views are not
supported, although included in
the list.

Name
Name of the indicator.

Order

Priority order of the task. The
highest priority task is the
indicator with the lowest order
number.

Icon

File name and path of the icon
image file, which can be a
system image.

• To create a new icon, see

Create or modify map icons

• To create or use a system
image see Storing images in
the database.

CMDB CI field

Name of the field on the
selected table that contains the
configuration item.

Start field

Record property that determines
the time-point on the metric
chart timeline for placing records
in the Insights Explorer.

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

Field
Description

Possible values depend on the
selected Table. For example,
the incident indicator has values
such as Actual end, Actual Start,
and Approval Set.

Description field

Name of the field on the
selected table that contains the
description of the configuration
item.

Description

Text to display when hovering
over the indicator. Alphanumeric
characters and spaces are valid
for this field.

Conditions

Condition builder that specifies
for which CIs to apply this
indicator. For example, a CI
that has a current past outage
is highlighted for 5 days. You
can configure a condition to
designate a different timeframe
for what is considered to be
current.

Active in Service Map

Toggle that you can enable
to make the specified table
available in the Settings dialog
box for application service
maps. You can then toggle
between displaying or not
displaying the respective records
on the map.

Active Dependencies

Toggle that you can enable
to make the specified table
available in the Settings dialog
box for Dependency Views
maps. You can then toggle

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

Field
Description

between displaying or not
displaying the respective records
on the map.

Active in Metrics

Enable to make the toggle for
the specified table available
in the Settings dialog box for
the Insights Explorer. You can
then toggle between displaying
or not displaying the respective
records on the Insights Explorer.

Label
Text to display for the indicator
on the map.

Tooltip Label
Prefix portion of the tooltip
(Tooltip Label : Tooltip info).

Tooltip Info
Suffix portion of the tooltip
(Tooltip Label : Tooltip info).

4. Click Submit to enter a new map indicator or click Update to modify
an existing map indicator.

Result

For an indicator to appear in a Dependency Views map, a CI must meet
all filter conditions, and Active Dependencies must be selected.

Related tasks

• Create or modify map icons

• Create a predefined filter

• Set a predefined filter as default

• Create or modify Map Related Items

• Create or modify Dependency Views menu actions

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

• Create or edit a dependency type

Related reference

• Condition and script parameters for menu actions

## Create or modify map icons

Upload new icons or modify existing icons to customize the icon
displayed for a CI in maps in Dependency Views, Service Mapping, and
Event Management.

Before you begin

Role required: admin

About this task

The icons used in Dependency Views maps are listed in the Map Icons
module. Records in the Map Icons list are arranged by CI classes,
such as cmdb_ci_linux_server. The path to the default image files is
https://<instance name>.service-now.com/images/app.ngbsm/<image
name.svg>. For information about uploading images to the database,
see Storing images in the database.

Role required: admin or cmdb_admin roles are required to access the
records in this table [ngbsm_icon] to upload new icons.

Procedure

• Navigate to All > Configuration > CI Class Manager, and do the
following actions:

1. • Click Hierarchy to display the CI Classes list.

2. • Select a class to modify the icon for.

3. • In the class navigator bar, expand Class Info and then select Basic
Info.

4. • On the Basic Info form, click Icon.

5. • In the Icons dialog box, select an icon and then click Update.

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

6. • On the Basic Info form, click Update.

• Navigate to All > Dependency Views > Map Icons, and do the
following actions:

1. • Click New to create a new map icon or click the name of an
existing icon in the Label column to modify an existing icon.

2. • On the form, fill in the fields.

Map Icons form

Field
Description

CI Type

Label or the informal name
of the CI table that this icon
represents in the view.

Icon
Name of the icon.

URL

Path to the icon image using
the following format: /image
name.svg Click the lock icon to
enter a new path.

3. • Fill in the fields on the form, as appropriate.

4. • Click Submit to enter a new icon or click Update to modify an
existing icon.

What to do next

You can modify a Dependency Views map indicator to use the new
icon.

Related tasks

• Create or modify map indicators

• Create a predefined filter

• Set a predefined filter as default

• Create or modify Map Related Items

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

• Create or modify Dependency Views menu actions

• Create or edit a dependency type

Related reference

• Condition and script parameters for menu actions

## Create a predefined filter

Create filters to narrow down the CIs that are displayed on a
Dependency Views map. You can create filters that are based on CIs'
class, CIs' attributes, or CIs' relationships.

Before you begin

Role required: ecmdb_admin

About this task

Create a predefined filter that you can then select to determine the
scope of the CIs that are displayed in a Dependency Views map.
Configuration type filters filter by CI class, CI filters filter by CI attributes,
and relationship filters filter by relationships. Only CIs that match at least
one of the configuration type filters (if any exists), and at least one of the
CI filters (if any exists), and at least one of the relationship type filters (if
any exists) - are displayed on the map. If no filters are defined, then no
filtering is applied.

Note:   Predefined filters do not apply to virtual groups. Therefore a
virtual group displays even if it contains CIs that a predefined filter
would have not included. Upon the expansion of a virtual group,
predefined filters are applied, and any or all of the CIs that were
previously virtually grouped, might no longer display on the map.

Procedure

1. Navigate to All > Dependency Views > Predefined Filters.

2. On the Predefined Filters page, click New.

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

3. Type in a Name for the filter.

4. Click Roles, and in the Roles dialog box, select the roles that this filter
will be available for.

5. Right-click on the page header, and click Save.

6. Create a configuration type filter:

a. Click Configuration Types, and then click Edit.

b. In the Collection list collector, select the classes that CIs must
belong to in order to be displayed on the map, and move them
to the Configuration Types List.

c. Click Save.

7. Create a CI filter:

a. Click CI Filters, and then click New.

b. In the CI Filters page enter conditions to filter CIs by specific
attribute values.

c. Click Submit.

8. Create a relationship type filter:

a. Click Relationship Type, and then click New.

b. In the Collection list collector, select the relationships that CIs
must have in order to be displayed on the map, and move them
to the Relationship Types List.

c. Click Save.

What to do next

After creating a predefined filter, you can apply it to a map:

1. Click the Map settings icon

to open Map Settings.

2. Select a filter from the Predefined Filters list.

3. Click Apply.

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

Related tasks

• Create or modify map indicators

• Create or modify map icons

• Set a predefined filter as default

• Create or modify Map Related Items

• Create or modify Dependency Views menu actions

• Create or edit a dependency type

• Filter the view of a Dependency Views map

Related reference

• Condition and script parameters for menu actions

## Set a predefined filter as default

You can set a custom predefined filter as the default predefined filter for
viewing maps.

Before you begin

Role required: admin

Procedure

1. Create the custom predefined filter to be used as the default
predefined filter.

2. On the predefined filter form, click the context menu and select
Copy sys_id.

3. Navigate to User Administration > User Preferences.

4. Click New and create a new user preference record using these
values:

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

• Name: ecmdb.ciview

• Type: String

• Value: Paste the sys_id of the custom predefined filter

• User: Leave blank to create a system-wide setting

• Description: Description of the predefined filter

• System: Selected

5. Click Submit.

What to do next

In Map Settings, when you select the Default option for Predefined
Filters, the custom predefined filter that was set, will be applied.

Related tasks

• Create or modify map indicators

• Create or modify map icons

• Create a predefined filter

• Create or modify Map Related Items

• Create or modify Dependency Views menu actions

• Create or edit a dependency type

• Filter the view of a Dependency Views map

Related reference

• Condition and script parameters for menu actions

## Create or modify Map Related Items

The Map Related Items module relates referenced CIs to one another,
which allows them to be displayed in a Dependency Views map.

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

Before you begin

Role required: admin

About this task

The base system configuration includes the following tables and relates
them to items in the Computer [cmdb_ci_computer] and Server
[cmdb_ci_server] tables.

• Disk [cmdb_ci_disk]

• Network Adapter [cmdb_ci_network_adapter]

• Database [cmdb_ci_database]

Some additional referenced CIs that can be related in this manner are
file systems and running processes.

In the following example, computer nodes in the map are related
to network adapter nodes if the Configuration Item field of the
adapter records reference the specific CI node. Access or create a
network adapter record from the Network Adapter related list in the
cmdb_ci_computer record.

Dependency Views Configuration Item field

The Dependency Views map for the *JEMPLOYEE-IBM computer shows
the network adapter attached to the computer.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

45

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 45, 750x176px]*

```
.........                         .                   ......

....                        .
.::..:....


..
```

---
*Page 46*

Dependency Views map Related Items example

You can configure Dependency Views to display CIs that have no
relationship record, but are related to other CIs by reference fields.

Procedure

1. Navigate to All > Dependency Views > Map Related Items.

2. Click New to create a new related item, or click in the row of an
existing CI to modify an existing map related item.

3. On the form, fill in the fields.
See the Related Items form table.

4. Click Submit to enter a new map related item or click Update to
modify an existing map related item.

Related Items form

Control
Description

Configuration item

CI that represents the base node
or a CI in a table that extends
the base node table. In the base
system, the configuration item
that represents the base node is
Computer [cmdb_ci_computer],

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

46

Zurich ServiceNow AI Platform Capabilities

*[Figure Or Illustration - Page 46, 453x264px]*

```

.:::.. ............  ::.
.::::. ::.      .    .:.
.. .:.              :.
.              .
.
.    ........                    ..
.---: .-::::.::::::. --.   ..:..... :.::::::: .-       ::
........-::           .:.   ..::::.. .:::-::.:::::.:-:: ::
.:.  ..  ..  .                    ::
.                             ::
.
.
.::::..:..... ...... .-:
..:::. .::.           ::
::
..
```

---
*Page 47*

Control
Description

which includes all types of
workstations and servers.

Related item

Table name of the related
item. Only the cmdb_ci table
and tables that extend it are
displayed in the choice list.

Related field

Field that links this related item to
the configuration item. In many
cases, the appropriate value is
automatically populated in the
field after the first two fields are
selected. Select the drop-down
menu for additional options.

Active
Check box to enable or disable
this record.

Related tasks

• Create or modify map indicators

• Create or modify map icons

• Create a predefined filter

• Set a predefined filter as default

• Create or modify Dependency Views menu actions

• Create or edit a dependency type

Related reference

• Condition and script parameters for menu actions

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

## Create or modify Dependency Views menu actions

To modify an existing menu option, first you create a copy of the original
menu action record, and then you modify the copy.

Before you begin

Role required: admin

About this task

This ensures that your instance can update the record normally during
the upgrade process and allows you to quickly restore the original menu
option, if necessary.

Procedure

1. To create a new menu option, navigate to Dependency Views >
Map Menu Actions and click New.
Fill in the fields on the form, as appropriate. See the Menu Action form
table.

2. To modify an existing menu option, navigate to Dependency Views >
Map Menu Actions.

3. Open the menu action you want to edit.

4. Right-click in the header and click Insert and Stay.
This step creates a duplicate copy of the menu action and leaves it
open for editing.

5. Change the name of the copied record to avoid confusion.

6. Modify the form fields as necessary and save the record.

7. Open the original record and disable it by clearing the Active check
box.

Menu Action form

Control
Description

Name
Descriptive name that appears
as the menu option.

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

Control
Description

Active
Check box that allows you to
enable or disable this record.

Condition

Condition that triggers the
display of this menu option. If the
condition evaluates to false the
menu option does not display.
Script is evaluated in JavaScript
in the user's browser and does
not have access to all the APIs
that Business Rules do. For details
on available parameters, see
Condition Parameters. .

Item

Map element for which the
menu option displays. Valid
values are:

• Canvas for the menu on the
map background.

• Node for the menu on a CI.

• Relationship for the menu on
a relationship link.

Order

Physical location of the option in
the menu. The option with the
lowest order number appears
first in the menu. All editable and
custom options appear below
the permanent menu options.

Script

Script that is executed in the
browser when the menu option
is selected. Script is evaluated in
JavaScript in the user's browser
and does not have access to all
the APIs that Business Rules do.

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

Control
Description

Type

Menu action type being
created, either a menu option
or a menu separator. The menu
separator is a single line. When
the type is a separator, the Script
field is ignored.

Related tasks

• Create or modify map indicators

• Create or modify map icons

• Create a predefined filter

• Set a predefined filter as default

• Create or modify Map Related Items

• Create or edit a dependency type

Related reference

• Condition and script parameters for menu actions

## Condition and script parameters for menu actions

You can use the following condition and script parameters for menu
actions.

Condition parameters

Note:   The usual regular expression conventions are valid in the
condition field, such as ! for NOT, && for AND, and || for OR.

The Condition field contains a boolean expression that evaluates to true
or false. If the condition is true or if there is no condition, the specified
option appears in the menu when you right-click a CI or a relationship

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

link. When you select the option from the menu, ServiceNow executes
the associated script.

Common Elements for Building a Condition

Text
Description

item

Node or reference link's data on
which you performed the right-
click action.

item.label
Label of the node.

item.ci_type
CI's type (table), such as
cmdb_ci_service.

item.name
Name of CIs. CI's type name or the
table label.

item.location
Location of the CI, such as New
York.

item.manufacturer_name
Name of the CI’s manufacturer,
such as Dell Inc.

item.id
The sys_id of the CI.

item.is_selected
The item that is selected in the
map.

item.level
The current default level.

item.locationId
The sys_id of the CI node's
location.

item.locationName
The full address of the location.

item.manufaturerId
The sys_id of the CI's manufacturer.

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

Valid Conditions for Condition Parameters

Condition
Description

item.is_collapsed
The node is a collapsed node.

item.is_cluster
The node is a cluster node.

Script parameters

Menu action scripts are executed on the client when a user clicks the
menu option. You can use the same building blocks in scripts as in
conditions. Menu action scripts do not function on separators. These are
some additional, useful expressions for scripts:

Condition
Description

item.id
The sys_id of the CI node or
relationship link.

item.source
The sys_id of the relationship's
parent or child.

item.target
The sys_id of the relationship's
parent or child.

item.label
The name of the CI node, such as
IronMail-SD-02.

item.location
The sys_id of the CI node's
location.

item.location_name

The full address of the location,
such as 4616 Clairemont Drive,
North Clairemont, San Diego CA.

item.manufacturer_id
The sys_id of the CI's manufacturer.

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

Related tasks

• Create or modify map indicators

• Create or modify map icons

• Create a predefined filter

• Set a predefined filter as default

• Create or modify Map Related Items

• Create or modify Dependency Views menu actions

• Create or edit a dependency type

## Create or edit a dependency type

Use one of the dependency types provided, or create a custom
dependency type with a script that will execute in real time to generate
a custom view of a Dependency Views map for a specific CI.

Before you begin

Role required: none

About this task

Create a JavaScript to customize the map. The script must comply
with JavaScript syntax guidelines and the directions in the default script
template, and it can call platform APIs. Use a dependency type, for
example:

• To narrow down and simplify a map, leaving out CIs that are not
important for a specific task.

• To include only specific CIs that are hidden by default, such as
qualifiers, end-points, and entry points.

• To display virtual relationships that are calculated, and that otherwise
do not exist in the CMDB.

• As a tool to plan a new topology deployment that is based on existing
resources.

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

The following dependency types are available in the base system:

Default

The default setting in the base system. With this setting, there is no
processing of the dependency map through any dependency type
scripts that might filter or modify the map.

Show All Relationships

Returns all qualifiers, end points, and entry points. This dependency type
is available in the base system and is disabled by default. Typically,
you would enable this dependency type for debugging and tracking
purposes.

The following dependency types are available with Service Mapping:

Application to Network Devices

Returns the network devices in the network paths leading to/from the
given CI.

Network Device to Applications

Returns the applicative CIs which are target or source of network paths
containing the given network device. In addition, returns the hosts of
those applicative CIs, and for an applicative CI that is an inclusion, its
parent CI is returned too.

Physical Network Connections

Returns hosts/network devices that are physically connected to the given
host or network device.

Flow Dependencies

Returns all the server to server connections that were discovered using
the Netflow collector. The script builds a graph based on data in
the [sa_flow_server_comm] table. This table contains pairs of services
represented by an IP and a listening port that are communicating with
each other. For more information, see Data collection and discovery
using Netflow and Data collection and discovery using VPC Flow Logs.

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

Procedure

1. Navigate to All > Dependency Views > Dependency Types.

2. In the Load Filter Scripts list view, select an existing depenency type,
or click New.

3. Enter or modify a script, adhering to the guidelines and requirements
in the script template that is provided.

4. Click Submit.

Result

In a Dependency Views map, you can click Dependency Type to apply
a custom script defined in a dependency type.

Related tasks

• Create or modify map indicators

• Create or modify map icons

• Create a predefined filter

• Set a predefined filter as default

• Create or modify Map Related Items

• Create or modify Dependency Views menu actions

Related reference

• Condition and script parameters for menu actions

Related topics

• Data collection and discovery using Netflow

## Properties for Dependency Views

Use Dependency Views properties to configure how data appears in
Dependency Views maps.

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

These properties are available for Dependency Views. To view and edit
these properties, the admin role is required.

Properties for Dependency Views

Property
Description

Maximum number of CIs to display
on a map at once.

glide.bsm.max_nodes

The maximum number of nodes to
retrieve from the database. If more
nodes exist in the database, they
are not displayed in the map.

• Type: Integer

• Default value: 1000

• Location: Dependency Views >
Map Properties

Maximum level depth from the
root CI that can be initially
displayed in Dependency Views.

glide.bsm.max_levels

Level depth is the graph distance
between the root CI and a node.

• Type: Integer

• Default value:: 3

• Other possible values: 1-49

• Location: Dependency Views >
Map Properties

Display the continuation of the
map underneath virtual group.
Virtual links are used to connect
virtual groups to their child nodes.

glide.bsm.show_virtual_node_child
ren

• Type: Yes | No

• Default value: No

• Location: Dependency Views >
Map Properties

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

Property
Description

Maximum number of child nodes
to display (the rest will be
collapsed).

glide.bsm.too_many_children

Maximum number of nodes (of a
similar CI type and at the same
level) to display before applying
virtual grouping.

Nodes are collapsed for the map
to meet this limit.

• Type: Integer, valid values 1 or
greater

• Default value: 10

• Location: Dependency Views >
Map Properties

A value of true indicates that
filtered out items will be removed
from the graph along with any
disconnected children while a
value of false indicates that the
items will be dimmed in color.

glide.ngbsm.filters_remove_filtered
_items

• Type: Yes | No

• Default value: Yes

• Location: Dependency Views >
Map Properties

Maximum number of relations per
node.

glide.bsm.max_num_rels

The maximum number of relations
to retrieve from the database.
If more relations exist in the
database, they are not displayed
in the map.

• Type: Integer

• Default value: 100

• Other values: 1 or greater

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

Property
Description

• Location: Dependency Views >
Map Properties

A value of true indicates that
when filters are changed the
graph will recalculate it layout
using the currently selected layout
algorithm.

glide.ngbsm.filters_run_layout_auto
matically

• Type: Yes | No

• Default value: Yes

• Location: Dependency Views >
Map Properties

A value of true indicates that when
filters are changed the graph will
be fit to the screen automatically.

glide.ngbsm.filters_fit_to_screen_au
tomatically

• Type: Yes | No

• Default value: No

• Location: Dependency Views >
Map Properties

A value of true allows relationship
lines to be drawn using smooth
curves instead of straight line
segments. These curves can be
more taxing on the browser,
setting to false may improve fluidity
of animation and interaction for
Dependency Views.

glide.ngbsm.performance_allow_c
urves

• Type: Yes | No

• Default value: Yes

• Location: Dependency Views >
Map Properties

Amount of time in milliseconds a
notification stays on the screen.

• Type: Integer

• Default value: 5000

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

Property
Description

glide.ngbsm.notification_display_ti
me

• Location: Dependency Views >
Map Properties

The maximum amount of results
displayed when searching for CIs.

glide.ngbsm.search_ci_limit

• Type: Integer

• Default value: 10

• Location: Dependency Views >
Map Properties

The maximum amount of results
displayed when searching for
Relationship Types.

glide.ngbsm.search_rel_type_limit

• Type: Integer

• Default value: 5

• Location: Dependency Views >
Map Properties

When available, the map should
display the class labels for each CI.

glide.ngbsm.show_class_labels

• Type: Yes | No

• Default value: Yes

• Location: Dependency Views >
Map Properties

Truncate node labels to a single
line and to fit available space
(default). Disable to display entire
labels on multiple lines and
wrapped as needed.

glide.ngbsm.truncate_long_labels

If glide.ngbsm.show_class_labels is
enabled, then the class label
always displays on top of the CI
label, and wrapping applies to
both the class and the CI labels.

• Type: Yes | No

• Default value: No

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

Property
Description

• Location: Dependency Views >
Map Properties

Minimum horizontal distance
between nodes in horizontal
layout.

glide.bsm.layout_horizontal_spacin
g_x

The distance is measured in pixels
between one node's center to
another node's center.

• Type: Integer

• Default value: 200

• Location: Dependency Views >
Map Properties

Minimum vertical distance
between nodes in horizontal
layout.

glide.bsm.layout_horizontal_spacin
g_y

The distance is measured in pixels
between one node's center to
another node's center.

• Type: Integer

• Default value: 100

• Location: Dependency Views >
Map Properties

Minimum horizontal distance
between nodes in vertical layout.

glide.bsm.layout_vertical_spacing_
x

The distance is measured in pixels
between one node's center to
another node's center.

• Type: Integer

• Default value: 125

• Location: Dependency Views >
Map Properties

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

Property
Description

Minimum vertical distance
between nodes in vertical layout.

glide.bsm.layout_vertical_spacing_
y

The distance is measured in pixels
between one node's center to
another node's center.

• Type: Integer

• Default value: 125

• Location: Dependency Views >
Map Properties

## Components installed with Dependency Views

Several types of components are installed with the activation of the
Next_Gen BSM (com.snc.ng_bsm) plugin, such as tables.

Note:   The Application Files table lists the components that are
installed with this application. For instructions on how to access this
table, see Find components installed with an application.

Tables installed

Table
Description

Available CI icons

[ngbsm_ci_icons]
Stores all available CI class icons.

Icons for CI types

[ngbsm_ci_type_icon]
Maps icons to CI class names.

Map Script

Custom scripts that run in real time
and generate a custom view of a
map for a specific CI.

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

Table
Description

[ngbsm_script]

Map View

[ngbsm_view]

Serialized map views saved by
users.

Map Filter

[ngbsm_filter]
Filters saved by users.

Menu Action

[ngbsm_context_menu]

Default and custom context menu
actions that appear when users
right click a map.

Related Item

[ngbsm_related_item]

Stores which reference fields
should be treated as relationships
when building the map. This
allows users to include CI's that
are related via a reference field
instead of a relationship.

Edge Colors

[bsm_edge_color]

Color definitions to use when
drawing the relationships between
nodes based on relationship type.

Map Indicator

[bsm_indicator]
Stores all map indicators.

BSM Saved Map

[bsm_graph]
Details of maps.

BSM Map Actions
Actions on the map.

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

Table
Description

[bsm_action]

BSM Map View

[map_view]
Parents' predefined filters.

Map View Configuration Types

[map_view_ci_type]

Configuration type filters, limiting
the CI class types to be displayed,
per predefined filter.

Map View Relationship Types

[map_view_rel_type]

Relationship type filters, limiting the
links to be displayed between CIs,
per each predefined filter.

[map_viewroles]
Roles that a specific predefined
filter should be applied to.

CI Filters

[map_filters]

CI attribute filters, limiting the CIs to
be displayed, per predefined filter.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

63

Zurich ServiceNow AI Platform Capabilities

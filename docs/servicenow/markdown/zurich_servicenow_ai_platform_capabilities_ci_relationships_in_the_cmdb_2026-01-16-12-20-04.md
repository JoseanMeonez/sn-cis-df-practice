# zurich_servicenow_ai_platform_capabilities_ci_relationships_in_the_cmdb_2026-01-16-12-20-04

*Source: zurich_servicenow_ai_platform_capabilities_ci_relationships_in_the_cmdb_2026-01-16-12-20-04.pdf*

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

## CI relationships in the CMDB

The CMDB, in contrast to a static asset list, helps you track not only the
configuration items (CIs) within your system, but also the relationships
between those items.

A relationship in the CMDB consists of two CIs and a relationship type:

• Parent CI

• Child CI

• Type of the relationship that links both CIs

For example, in the [Server1] [Managed by] [Server2] relationship:

• Server1 is the child CI

• Server2 is the parent CI

• [Managed by] is the relationship type

For example, a web application might read data from an instance of
Oracle, which in turn might depend on a piece of underlying hardware.
Most CIs in a CMDB have multiple relationships to other CIs, users, and
groups.

The relationships between CIs can be automatically discovered. If you
use Discovery, many relationships can be automatically loaded into
the system through the discovery process. If you import your data from
another system, you get some form of relationships.

You can add to automatically discovered relationships, create
relationships, or edit relationships for a CI by launching the CI relationship
editor from the CI form. As an alternative to the CI relationship editor,
Unified Map in the CMDB Workspace store app provides the latest
functionality for editing CI relationships. For more information, see Edit
relationships in Unified Map.

Dependent and non-dependent relationships

Dependent relationships, such as tomcat RunsOn Hardware, are used by
the Identification and Reconciliation Engine (IRE) to identify dependent

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

CIs. The IRE avoids duplicate entries of CIs into your Configuration
Management Database (CMDB) by leveraging these relationships to
determine if a recently discovered CI is already in the CMDB.

For non-dependent relationships, the CMDB tracks the discovery source
and the last scanned time in the Relationship Sources [sys_rel_source]
table. Non-dependent relationships aren't used for CI identification, and
can be deleted when no longer needed.

To avoid burdening your IRE with excessive load, by
default, the Relationship Sources [sys_rel_source] table doesn't
auto-populate. If you want to track full information on non-
dependent relationships, you can change the default using the
glide.identification_engine.populate_sys_rel_source property.

Dependent relationships are used for CI identification, so they shouldn't
be directly deleted as they aren't tracked.

Information in the Relationship Sources [sys_rel_source] table can be used
to decide if it’s safe to delete a potentially non-dependent relationship.
For example, a discovery source, which is attempting to delete a non-
dependent relationship can confirm that:

• There are no other data sources for that relationship.

• The relationship wasn't updated for some specified length of time and
therefore is no longer needed.

When a non-dependent relationship is deleted from the CI Relationship
[cmdb_rel_ci] table, all cascading corresponding records in the
Relationship Sources [sys_rel_source] table are deleted.

Key relationships

The following table contains descriptions for some key CMDB
relationships.

Parent
Child
Description

Applicative Flow To
Applicative Flow From
Connections between
endpoint CIs.

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

Parent
Child
Description

Note:   For internal
use only (service
model).

Connects to
Connected by

Network Connections
between elements
that are talking to
each other.

Examples: Workstation
to switch, switch
to switch, kubernetes
workload to service.

Contains
Contained by

Typically a
containment
relationship (CI to
contained CI). The
child CI typically has
a single parent CI with
this relationship type.

Examples: Tomcat to
Tomcat WAR, VMware
Datacenter contains
Network.

Defines resources for
Gets resources from

Parent CI defines/gets
resources from a child
CI.

Example: VMware -
Resource pool gets

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

Parent
Child
Description

resources from ESX
Server.

Depends on
Used by

Parent CI depends
on child CI. Meaning
that problem/change
in the child CI may
impact the parent CI.

Hosted on
Hosts

Hosting relationship
between an element
and its host.

Examples: Cloud
resource to logical
data center, k8s
workload to k8s
cluster.

Implement End Point
To

Implement End Point
From

Endpoint to CI that
exposes this endpoint.

Note:   For internal
use only (service
model).

Manages
Managed by

Typically used where
one CI manages one
or more other CIs.

Example: vCenter
manages vCenter
Datacenter.

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

Parent
Child
Description

Members
Member of

Typically used with
clusters where a
cluster node is a
member of a cluster.

Example: ESXi Server is
a member of vCenter
Cluster.

Owns
Owned by

Usually a containment
relationship (CI to
owned CI). The child
CI typically has a
single parent with this
relationship type.

Runs on
Runs

Typically between a
CI that represents a
software application,
to the hosting
hardware/VM.

Example: Tomcat 'Runs
on' Linux server.

Use End Point To
Use End Point From

From the CI to an
outgoing endpoint.

Note:   For internal
use only (service
model).

• Suggested class relationships

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

The system keeps a table (Suggested Relationship
[cmdb_rel_type_suggest]) of relationship types that are appropriate for
a CI type, based on its class. You can manage suggested relationships
by navigating to Configuration > Suggested Relationships, or in the CI
Class Manager.

• Add a suggested relationship

Add a suggested relationship for a class. The list of suggested
relationships for a class is available when you create a new relationship
for a CI of that class.

• Relationship governance rules

Relationship governance rules is a set of relationship rules used to
ensure consistency and validity in modeling relationships between
configuration items (CIs) in the CMDB. Use relationship governance
rules to prevent the selection of relationship types or directions that are
not allowed between specific CI types.

• CI relations formatter

The default CI form includes a CI relations formatter from which you
can examine a CI and its relationships in various views. From the CI
relations formatter, you can also launch the CI relationship editor for the
CI.

• CI relationship editor

Use the relationship editor to view, create, modify, or delete CI
relationships. Open the relationship editor from the CI Relations
formatter.

• Relation qualifier

A relation qualifier, which is a CI of the Qualifier [cmdb_ci_qualifier]
type, stores important information about the CI relationships.

• CI relationship security

When applying security to CI relationships, it is important to apply the
access controls both to the CI Relationship (cmdb_rel_ci) table and to
create an operation editCIRelations to the * table as well.

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

• Create a CI relation rollup

A CI relation rollup allows you to sum, count, max, min, or mean a
relationship type. You can create CI relation rollups.

Related tasks

• Create a CI relation rollup

## Suggested class relationships

The system keeps a table (Suggested Relationship
[cmdb_rel_type_suggest]) of relationship types that are appropriate for
a CI type, based on its class. You can manage suggested relationships by
navigating to Configuration > Suggested Relationships, or in the CI Class
Manager.

Suggestion model

The relationship editor has a base CI. The base CI designates the CI that
a user was on before launching the editor, as the base CI in the new
relationship. If you launched the relationship editor from the lnux100 CI,
then lnux100 becomes the base CI. Also, every CI in the system has a
type (class). For example, bond lnux100 is of the Linux server type.

Many CI types are children of other types in the hierarchy. For example,
the class hierarchy for a Linux server is:

cmdb_ci -> cmdb_ci_hardware ->cmdb_ci_computer ->
cmdb_ci_server -> cmdb_ci_linux_server

The suggestion model works by analyzing the suggested relationship
table for all relationships whose base class is the current base class or
any one of its parent classes. For example, looking at a Linux server, the
suggestion model would retrieve any relationships whose base class was:

cmdb_ci_linux_server, cmdb_ci_server, cmdb_ci_computer,
cmdb_ci_hardware, or cmdb_ci

ITOM Visibility, if available, uses enhanced discovery patterns to identify
and add CI relationships to the Suggested Relationships table.

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

Suggested CI relationships in the relationship editor

The CI relationship editor uses the suggestion model to help users select
reasonable relationships for configuration items.

For example, consider these relationship types in the system:

• Provides Power for :: Receives Power From

• Runs on :: Hosts

Typically, a user uses these relationships to define the following
reasonable relationships between two items as follows:

• a database runs on a server

• a rack provides power for a server

Typically, neither of the following definitions would be appropriate:

• a rack runs on a server

• a server runs on a database

For descriptions of some key relationships, see CI relationships in the
CMDB.

Related tasks

• Add a suggested relationship

• Create a CI relation rollup

• CI Class Manager

Related concepts

• Relationship governance rules

• CI relations formatter

• CI relationship editor

• Relation qualifier

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

• CI relationship security

## Add a suggested relationship

Add a suggested relationship for a class. The list of suggested
relationships for a class is available when you create a new relationship
for a CI of that class.

Before you begin

Role required: To view — itil. To create, update, or delete suggested
relationships — itil_admin.

Procedure

1. Use the CI Class Manager (Role required: itil_admin):

a. Navigate to All > Configuration > CI Class Manager.

b. Click Hierarchy to expand the CI Classes list. Then select the class
to add a suggested relationship to.

c. In the class navigation bar, click Suggested Relationships.

d. Click New.

e. In the Add Suggested Relationship dialog box, select a
Relationship and a Target Class for the relationship. This Class
and the Target Class become parent or child in the suggested
relationship, based on your selection of the Relationship.

f. Click Save.

2. Or, navigate to All > Configuration > Relationships > Suggested
Relationships (Role required: admin):

a. Click New.

b. Complete the form.

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

Suggested Relationship fields

Field
Description

Base class

The base class in the
relationship, which depending
on the relationship type, is
either the parent or the child in
the relationship.

Relationship
Relationship type.

Dependent class

The dependent class in the
relationship, which depending
on the relationship type, is
either the parent or the child in
the relationship.

Example: Suggested relationship you can add

Base Class
Relationship
Dependent/Target Class

Oracle
Is Hosted On
Linux Server

Oracle
Is Hosted On
Solaris Server

Note:   The same parent class and relationship can appear more
than once.

What to do next

You may need to delete a suggested relationship, for example, to
limit the choice of available relationships in the CI relationship editor.
Removing a suggested relationship does not affect relationships that are
created or updated by Discovery.

Related tasks

• Create a CI relation rollup

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

Related concepts

• Relationship governance rules

• CI relations formatter

• CI relationship editor

• Relation qualifier

• CI relationship security

Related reference

• Suggested class relationships

## Relationship governance rules

Relationship governance rules is a set of relationship rules used to ensure
consistency and validity in modeling relationships between configuration
items (CIs) in the CMDB. Use relationship governance rules to prevent the
selection of relationship types or directions that are not allowed between
specific CI types.

Different applications such as Discovery and Service Mapping create
relationships between CIs. Each application might use inconsistent
relationship type or direction to represent the same entity, resulting in
multiple views of the same CIs. Relationship governance rules define
what are valid relationship types and valid directions between pairs of
CI types resulting in valid and consistent relationships in the CMDB.

Relationship governance rules consist of:

• CMDB dependent relationship rules: Rules (hosting and containment
rules) that are used for CI identification. You can view and modify
dependent relationship rules in the CI Class Manager, after selecting
a class from the class hierarchy and clicking Dependent Relationship.

• Suggested relationships: Rules that are based on existing suggested
relationships in the Suggested Relationship [cmdb_rel_type_suggest]
table. Suggested relationships are used in the CI relationship editor. You
can view and modify suggested relationships in the CI Class Manager,

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

after selecting a class from the class hierarchy and clicking Suggested
Relationships.

• Reference rules: Rules that are used mostly by Cloud Management to
represent all the possible valid combinations of pairs of referencing and
referenced CIs in the service definition.

• Built-in valid relationships: The following relationships are pre-defined in
the base system as valid relationships:

• cmdb_ci_endpoint -> Applicative Flow To::Applicative Flow From ->
cmdb_ci_endpoint

• cmdb_ci_endpoint -> Implement End Point To::Implement End Point
From -> cmdb_ci

• cmdb_ci -> Use End Point To::Use End Point From ->
cmdb_ci_endpoint

General behavior

• Relationship governance rules support inheritance.

For example, suppose that the suggested relationship cmdb_ci_appl
Runs On::Runs cmdb_ci_hardware exists. Then a Runs On::Runs
relationship between a cmdb_ci_appl_dot_net CI and a
cmdb_ci_windows_server CI is valid. That is because .Net Application
class inherits from the Application class and the Windows Server class
inherits from the Hardware class.

• Duplicate relationship governance rules are not allowed.

• Relationship governance rules are not domain separated.

• It is allowed to have more than one relationship type between the
same two CI types.
For example, the following relationships are valid:

• cmdb_ci_appl Depends On::Used by cmdb_ci_service

• cmdb_ci_appl Receives data from::Sends data to cmdb_ci_service

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

Reports

A relationship between CIs is considered valid if it conforms to any of
the relationship governance rules. Use the Relationship Health Dashboard
to view reports about relationships health including relationships
compliance with relationship governance rules. The 'Relationships not
compliant with all relationship rules' report shows CI relationships that are
not compliant with any of the relationship governance rules.

Related tasks

• Add a suggested relationship

• Create a CI relation rollup

Related concepts

• CI relations formatter

• CI relationship editor

• Relation qualifier

• CI relationship security

Related reference

• Suggested class relationships

## CI relations formatter

The default CI form includes a CI relations formatter from which you can
examine a CI and its relationships in various views. From the CI relations
formatter, you can also launch the CI relationship editor for the CI.

If the domain separation plugin is activated, then only relationships in
which the logged on user is authorized to view both CIs, are displayed.

The CI relations formatter contains a list of related CIs and a toolbar with
controls for viewing the relationships between the current CI and related
CIs. You can configure the controls in this formatter to modify varying

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

aspects of the view. For more information about formatters, see Create a
formatter and add it to the form.

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

Note:

• If an endpoint is a child in one relationship and the same endpoint
is a parent in another relationship, then that endpoint is hidden
and does not appear in the relations formatter view. Similarly,
relationship qualifier chains are also hidden and do not appear
in the relationship formatter view.

• Example: CI1 > endpoint > CI2

In this example, CI1 is related to CI2 through relationships with
endpoint. A single relationship appears in the relations formatter:

CI1 > CI2 (These relationships appear as a direct relationship
without endpoint, because endpoint is a parent in one
relationship and a child in another relationship).

• Example: CI1 > endpoint1 > CI2 > endpoint2

Two relationships appear in the relations formatter:

CI1 > CI2 (endpoint1 is hidden because it is a parent in one
relationship and a child in another relationship).

CI1 > CI2 > endpoint2 (appears as level 2 relationship – endpoint1
is hidden and endpoint2 appears as it a child and not a parent in
any other relationship).

• On instances that do not meet the internet browser requirements
for the CI relations formatter, the default CI form includes the
legacy CI relations formatter instead. For more information, see
Legacy CI relations formatter.

• CIs not extended from the Configuration Item [cmdb_ci] table,
are not displayed in Dependency Views maps and in CI relation
formatters.

• The Applicative Flow To::Application Flow From relationship is a
special relationship type used only between Service Mapping
endpoints. This relationship type is not intended for use in the CMDB
as a relationship between CIs and therefore it is not displayed in
the relations formatter.

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

Controls for viewing related CIs

Control
Definition

Add CI relationship

Starts the relationship editor to
manually create CI relationships.
For more information (including
about roles required for the '+'
control to appear), see Create or
edit a CI relationship.

Show dependency views

Launches a Dependency Views
map in another window or tab. The
CI is the central node in the map,
with a configurable number of
levels above and below that node
in the hierarchy. Map indicators
next to the nodes indicate
the number of tasks, incidents,
problems, changes, or outages
related to that node. Right-click
to expand collapsed nodes or
display a list of related tasks or
problems. For more information,
see Dependency Views map.

Search for CI
Filters the CIs included in the
display.

Click the Settings icon (

) to configure additional view settings that
filter the data displayed. Settings are preserved through logging out and
logging back in.

Related items settings

Setting
Description

Show Relations in Flat/Tree Layout
To view a flat list of related CIs
that are grouped by relationship

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

Setting
Description

type in alphabetical order, click
Flat (default value).

To view groups of related CIs in a
hierarchical tree, clickTree. If you
select the tree view, you cannot
configure any other settings for
viewing related CIs. A single list
of upstream and downstream
relationships is displayed.

Show Relations in Split/Merge
Layout

To view a single list that includes
both upstream and downstream
relationships, click Merge (default
value). Relationships are grouped
by relationship type.

To view separate lists for upstream
and downstream relationships,
click Split.

Filter Relations by Max Level

Select the number of downstream
and upstream levels in the
hierarchy to include when
displaying CIs in a flat view.

Default value is 3.

Filter Relations by Relationship Type

Select the types of relationships to
view.

Default value is 'All Relationship
Types'.

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

Setting
Description

Filter Relations by CMDB View
Filter by tables specified in CMDB
views, if any relationship filters exist.

The relations formatter uses the following icons to provide additional
information about changes, problems, and outages related to CIs in the
relationship:

Icons related to CIs

Icon
Description

Recently closed changes

Planned changes

Currently open changes

Recently closed outages

Problems

Incidents

Planned outages

Currently open outages

In large networks, a list of related CIs might be excessively long, which
can slow performance when a CI form is rendered. You can configure
these properties to control the amount of data that is displayed. To find
a property, enter sys_properties.list in the left navigation filter and
search for the property.

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

Properties related to performance

Property
Description

glide.ecmdb.find_relationship_issu
es

Hides or displays an icon in the
CI relations formatter that links to
open issues for the CI. This property
defaults to true (displays the icon).

glide.ui.max_relation_levels

Specifies the maximum level for
displaying CIs in flat view before
reaching the maximum relations
limit. The default value is 5.

glide.ui.max_relations

Specifies the maximum number of
related CIs to display.

When exceeded:

• A notification appears indicating
that the limit has been reached,
and that not all relations are
displayed. The default value is
1000.

• Flat layout reverts to the tree
layout view.

• Domain separation

Domain separation is supported in the relations formatter and the
CI relationship editor. Domain separation enables you to separate
data, processes, and administrative tasks into logical groupings called
domains. You can control several aspects of this separation, including
which users can see and access data.

• Create or edit a relationship filter

Create a custom relationship filter to display CI relationships from
selected tables in the CI relations formatter.

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

• Exclude relationships from the relations formatter view

Create a list of relationships that should not appear in the relations
formatter view on CI forms.

• Legacy CI relations formatter

On instances that do not meet the internet browser requirements for
the latest CI relations formatter, the default CI form includes the legacy
CI relations formatter instead.

Related tasks

• Add a suggested relationship

• Create a CI relation rollup

• Create or edit a relationship filter

Related concepts

• Relationship governance rules

• CI relationship editor

• Relation qualifier

• CI relationship security

Related reference

• Suggested class relationships

Related topics

• Create a formatter and add it to the form

## Domain separation

Domain separation is supported in the relations formatter and the CI
relationship editor. Domain separation enables you to separate data,
processes, and administrative tasks into logical groupings called domains.

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

You can control several aspects of this separation, including which users
can see and access data.

Overview

How domain separation works in the relations formatter and
relationship editor

• Relations formatter

The relations formatter is domain-separation supported. The relations
formatter is used to display CMDB relationships in the UI in different
views. Since the CI Relationship (cmdb_rel_ci) table is not domain
separated, relationships are visible in the relations formatter only if both
parent and child CIs (cmdb) are visible in the domain.

The CI Relationship Type (cmdb_rel_type) table is not domain
separated. Therefore, in the relations formatter, all the relationship types
are available to be selected as a filter.

By default domain separation is supported in the relations formatter.

• Relationship editor

The relationship editor is domain-separation supported. You can use
the relationship editor to add new relationships or delete existing
relationships for the current CI.

• The CI relationship editor displays a list of CIs to add or remove from
relationships. Since they are domain separated, the CI list view in
the relationship editor displays the CIs that are visible to the current
domain.

• The CI relationship editor displays a list of relationships to add or
remove. Since the CI Relationship [cmdb_rel_ci] table is not domain
separated, the relationships list view displays all the relationships of the
current CI.

The Suggested Relationship (cmdb_rel_type_suggest) table is not domain
separated, which means that all the suggested relationship types in the
relationship editor are visible for all domains.

By default domain separation is supported in the relationship editor.

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

Related concepts

• Domain separation and Configuration Management Database (CMDB)

## Create or edit a relationship filter

Create a custom relationship filter to display CI relationships from
selected tables in the CI relations formatter.

Before you begin

Role required: ecmdb_admin

About this task

The CI relations formatter displays related CIs for the base CI, and the
relationships between the CIs. You can use relationship filters on the CI
relations formatter to customize CI relationship views.

Procedure

1. Navigate to All > Configuration > Relationships > Relationship Filters.

2. Click New or select a filter to edit.

3. Enter or edit the relationship filter name.

4. Right-click the form header and click Save.

5. In the Configuration Types section, click Edit.

6. On the Edit Members form, select the tables of the CIs that you want
to show with the filter and then move the tables to the Configuration
Types list.

7. Click Save.

Result

On a CI form, in the relations formatter settings, you can select the newly
defined relationship filter from the Filter Relations by CMDB View list.

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

In the legacy CI relations formatter, you can click View and select the
newly defined relationship filter.

After you select a filter, the relations formatter displays only CIs from the
tables specified in the filter or from descending tables.

## Exclude relationships from the relations formatter view

Create a list of relationships that should not appear in the relations
formatter view on CI forms.

Before you begin

Role required:

• To view the relationship type exclusion list — itil

• To create, update, or delete the relationship type exclusion list —
itil_admin

Procedure

1. Navigate to All > Configuration > Relationships > Relationship Type
Exclusion List.

2. In the CI Relation Filters list view, click New.

3. Fill out the CI Relation Filter form to specify the relationship that you
want to exclude from view.

4. Click Submit.
Excluded relationships do not appear in the relations formatter view
on CI forms.

## Legacy CI relations formatter

On instances that do not meet the internet browser requirements for the
latest CI relations formatter, the default CI form includes the legacy CI
relations formatter instead.

This element contains the list of related CIs and a toolbar with controls
for viewing the relationships between the current CI and related CIs.

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

For information about the latest CI relations formatter, see CI relations
formatter.

Related items field

Note:   The legacy BSM map provides a more complete view of CI
relationships.

Configure the controls in this formatter with two properties that restrict
varying aspects of the view.

Flat layout

Click the flat layout icon (

) to group related CIs by relationship.

Flat layout view

Tree layout

Click the tree layout icon (

) to group related CIs in a hierarchical tree.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

26

Zurich ServiceNow AI Platform Capabilities

*[Figure Or Illustration - Page 26, 392x292px]*

```
............................................................
..-------:----:.::..::..:...:.......-----..:.:-:.:-----.....
.                                            ..            .
:: :::::::. :-.::::::.-:::::::
......:. ........
.:... .:... ..:..:
.:......... ......:.
....  . .  ..  . .
.:... .:::....:::::  ... ::...::
.. :..:..:  ::.:.
.. .. .:..  .:.:.
.:... .:..::.:.
.. ..........  :........ :.....
:: ...::::...  ....:.::. ::....
.:... .:..::   ::. ..:: :
.. :...  .:..........
:: ::.::  :::..::..::.
.:... .:.:....... .:: :::
......... ..  .  ...  ..     .
:: .:::-::....::.:  ::::.:::::..:::::
.:... .:...:..:   ::..:.
.    .... .........   .   .                                .
```

---
*Page 27*

Tree Layout view

## CI relationship editor

Use the relationship editor to view, create, modify, or delete CI
relationships. Open the relationship editor from the CI Relations formatter.

As an alternative to the CI relationship editor, Unified Map in the CMDB
Workspace store app provides the latest functionality for editing CI
relationships. For more information, see Edit relationships in Unified Map.

When you use the relationship editor, the CI from which the editor was
launched is designated as the base CI. You can then select one or
more CIs as a second CI for the relationship. Depending on the selected
relationship type, the base CI can become the parent CI or the child CI
in the new relationship.

The relationship editor operates differently, depending on whether you
select the Use suggested relationship check box.

• With suggested relationships, the relationship editor lists all available
relationship types for the base CI. To define a new relationship, select a
relationship type, and then select a second CI for the relationship.

Suggested relationships are highlighted for you. These relationships are
displayed in blue with a prefix of [Suggested].

• Without suggested relationships, you define a new relationship by first
selecting a second CI for the relationship and then selecting a parent
or a child relationship type.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

27

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 27, 392x134px]*

```
............................................................
..-------:----:.::..::.::...:.......-----..:.:-:.:-----.....
.                                             .            .
.  ::      .
.. .: .:..:..:.
.. .. .....
. .:: :..:.
.. ::..:...::...
:. :.. ....
.              :. ...  ...                                 .
```

---
*Page 28*

Note:   The following relationship types are used only for Service
Mapping endpoints, and you cannot use them as a relationship type
between two CIs:

• Implement End Point To:Implement End Point From

• Use End Point To: Use End Point From

• Applicative Flow To:Applicative Flow From

Suggested relationships

If you select the Use suggested relationship check box in the editor, the
Suggested relationship list appears. It displays all available CI, user and
group relationship types for the base CI. Relationship types have a suffix
of (Parent) or (Child) to note the relationship descriptor, and suggested
relationship types are displayed in blue and have a "*" prefix.

When you select a relationship, you are also designating the base CI as
being the parent or the child CI in the new relationship. For example,
if you select the 'Feeds' relationship type, the base CI becomes the
designated parent CI, and the second CI that you select becomes the
child CI in this relationship.

Downstream relationships

If you do not select the Use suggested relationship check box in
the editor, the Downstream relationships list appears. It displays all
relationships in which the base CI is the parent CI. The child CI of the
relationship is displayed in the Child column.

Upstream relationships

If you do not select the Use suggested relationship check box in the
editor, the Upstream relationships list appears. It displays all relationships
in which the base CI is the child CI. The parent CI in each relationship is
displayed in the Parent column.

• Create or edit a CI relationship

Use the relationship editor to view, create, or modify CI relationships.
You can open the relationship editor from the CI Relations formatter.

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

• Delete a CI relationship

Maintain the integrity of the CMDB by deleting any CI relationships that
are no longer relevant or needed for a CI. Use the relationship editor to
delete CI relationships.

• Legacy CI relationship builder

Used to define CI relationships manually, this page is a sophisticated
version of the standard list collector. In the legacy CI relations formatter,

click the CI relationship builder icon (

) to display the legacy Define
Relationships page.

Related tasks

• Add a suggested relationship

• Create a CI relation rollup

• Add a suggested relationship

• Create or edit a CI relationship

Related concepts

• Relationship governance rules

• CI relations formatter

• Relation qualifier

• CI relationship security

• Legacy CI relationship builder

Related reference

• Suggested class relationships

## Create or edit a CI relationship

Use the relationship editor to view, create, or modify CI relationships. You
can open the relationship editor from the CI Relations formatter.

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

As an alternative to the CI relationship editor, Unified Map in the CMDB
Workspace store app provides the latest functionality for editing CI
relationships. For more information, see Edit relationships in Unified Map.

Before you begin

Role required:

• To create relationships: ITIL or asset

• To view relationships, depending on the state of the Table API ACL:

• If inactive (default): ITIL or asset

• If active: ITIL or asset, and snc_platform_rest_api_access

For more information, see CI relationship security, REST API, and Table
API.

About this task

The relationship editor operates differently, depending on whether you
check the Use suggested relationship option or not.

Procedure

1. Launch the relationship editor:

a. Open a CI form.
For example:

a. Navigate to All > Configuration > CI Class Manager.

b. On the CI Class Manager page, select Open Hierarchy.

c. On the CI Class panel search and select the class of the CI
for which you want to create or edit relationships.

d. Select CI List in the left-side panel and then in the list view,
select the CI.

b. On the CI form, scroll down as needed to select the Add CI
relationship icon (+ sign) in the Related Items section.

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

2. To use suggested relationships, first select a relationship type, and
then select one or more CIs to be the child CIs in the relationship:

a. Select Use suggested relationship.

b. From the Suggested relationship type list, select a relationship
type.
You can filter the list of suggested relationships by using the filter
check boxes.

Filter option
Description

Hide CI relationship

Hides any relationships
between the base CI and
another CI (such as "Receives
data from"). Default filter is
stored in the
ci_manage_relationships_filter_
hint.cmdb_ci user preference.

Hide user relationship

Hides any relationships
between the base CI and a
user (such as "Logs reviewed
by"). The default filter is stored

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

31

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 31, 930x629px]*

```
.     .  .   .
......    .... .
.....                          .  ..   .......
....






.....  .
. .  ....... .
..  ..     ...   .........           ..   .. .
....    ..    ........            .      .     .::::::::
+#***#**#
.                       .......                  .  ..:
.               ..     .....                ........
.....           ............                ..
.
::::.-.
```

---
*Page 32*

Filter option
Description

in the
ci_manage_relationships_filter_
hint.sys_user preference.

Hide group relationship

Hides any relationships
between the base CI and a
group (such as "Backups done
by"). Default filter is stored in
the
ci_manage_relationships_filter_
hint.sys_user_group user
preference.

The Configurations Items list displays all the CIs that are
appropriate for the base CI and the selected relationship type.
The Relationships list at the bottom of the editor, displays all
existing relationships of the selected relationship type, in which
the base CI is a parent CI or a child CI.

c. From the Configuration Items list, select one or more CIs as a
second CI for the relationship.
You can filter the list of Configurations Items by adding conditions
in the Filter section and clicking Run filter.

If you selected a parent relationship type, these CIs becomes
the child CI in the relationship, and if you selected a child
relationship type, then the selected CIs become the parent CI
in the relationship.

d. In the Relationships section, click the plus icon (+) to add the new
relationships.
Alternatively, you can drag the selected CIs to the Relationships
list. Each new relationship will consist of the base CI, the selected
relationship type, and a selected second CI.

3. To not use suggested relationships, first select one or more CIs to be
the child CIs in the relationship, and then select the relationship type:

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

a. Clear Use suggested relationship.

b. In the Configuration Items list, select one or more CIs as a second
CI for the relationship.
You can filter the list of Configurations Items by adding conditions
in the Filter area and clicking Run filter. Depending on the
relationship type that you will select, the selected CIs might
become a parent or a child CI in the relationship.

c. With at least one CI selected in the Configuration Items list,
click the '+' sign in the Downstream Relationships section or the
Upstream Relationships section to create the relationship.

• Add the relationship to Downstream Relationships to create
a relationship in which the base CI is the parent CI and the
selected CI is the child CI.

• Add the relationship to Upstream Relationships to create a
relationship in which the base CI is the child CI and the
selected CI is the parent CI.

d. For each newly created relationship in either the Downstream
Relationships or the Upstream Relationships lists, click Please
select a relationship and select a relationship type.

• The list of available relationship types in the Downstream
Relationships list contains parent relationships only, in which
the base CI is the parent CI.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

33

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 33, 914x503px]*

```
.            .
.... .
....




......  .
..    ...... ..                        .
.  ...     ..    ........       .......  . ...
....    ..    ........      .------.
..
......  .        ..            ...... ..
.                ..... .           ....
.
...........
```

---
*Page 34*

• The list of available relationship types in the Upstream
Relationships list contains child relationships only, in which the
base CI is the child CI.

e. Click Save or Save and Exit.
Only after you enter all the information that is necessary for
creating the relationship, these buttons light up indicating that
there are pending updates that require saving.

Related concepts

• CI relationships in the CMDB

• CI relationship security

Related reference

• Suggested class relationships

## Delete a CI relationship

Maintain the integrity of the CMDB by deleting any CI relationships that
are no longer relevant or needed for a CI. Use the relationship editor to
delete CI relationships.

About this task

As an alternative to the CI relationship editor, Unified Map in the CMDB
Workspace store app provides the latest functionality for editing CI
relationships. For more information, see Edit relationships in Unified Map.

Before you begin

Role required: ITIL or asset

Note:   Deleting a relationship to a dependent CI can result in
identification problems as the dependent CI will no longer have a
relationship to the CI it depends on.

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

Procedure

1. Launch the relationship editor:

a. Open the CI form of the CI for which you want to delete a
relationship.

b. Locate the Related Items section near the center of the form.

c. Click the plus (+) icon on the Related items section.

2. In the Relationship Editor, in the Relationships section, select the
relationships that you want to delete for the CI.

3. Click the Delete selected relationships icon.

4. Click Save or Save and Exit.

## Legacy CI relationship builder

Used to define CI relationships manually, this page is a sophisticated
version of the standard list collector. In the legacy CI relations formatter,

click the CI relationship builder icon (

) to display the legacy Define
Relationships page.

For information about the latest CI relationship editor, see CI relationship
editor.

Select a CI relationship type

The top half of the legacy relationship editor contains a large option
box that allows you to select which type of relationship you want to
manipulate. Click the particular type of relationship you are interested in
working with.

Filter the list of CI relationships

In the legacy relationship editor, the check boxes along the right hand
edge of the select box provide a quick way to filter down the list of
available relationships.

By default, the system displays a list of all suggested relationships for the
type of CI you selected. For example, if you selected a Database
instance, a relationship of "Runs on" makes sense, but a relationship of

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

"Provides HVAC for" does not. The default filter is stored in the user
preferences
ci_manage_relationships_filter_hint.cmdb_cici_manage_relationships_filter_hint.sys_user,
and ci_manage_relationships_filter_hint.sys_user_group.

• Hide CI relationship -- Hides any relationships between this CI and
another CI (e.g. "Receives data from").

• Hide user relationships -- Hides any relationships between this CI and a
user (e.g. "Logs reviewed by").

• Hide group relationships -- Hides any relationships between this CI and
a group (e.g. "Backups done by").

• Show all relationships -- If you have the appropriate role (out of the
box this is itil_admin) you will have an additional check box labeled
"Show all relationships." If you click that check box, the system will let
you choose any relationship defined in the system, regardless of where
it is on the "suggested" list for this type of CI.

Select CI relationship targets

In the legacy relationship editor, users can link or unlink CIs for a
relationship type.

As soon as you pick a relationship type, the system will fill in the two select
boxes at the bottom of the screen with CI's that are appropriate for the
relationship you suggested. The left hand select box will contain a list of
CI's that might reasonably be linked via this relationship, while the right
hand box contains a list of those CI's which are already linked.

1. Link or unlink items.

Link new items
Move that CI from the left hand
box to the right hand box.

Unlink existing items
Move them from the right hand
box to the left.

When you make either type of change, a message appears
indicating that you have pending changes.

2. Apply or cancel your changes.

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

Click the Save button.

This will save your set of changes,
and go back to the previous
screen (either a CI or the BSM
map depending on how you got
here).

Click the Cancel button.
This causes you to exit without
saving your changes.

Related concepts

• CI relationships in the CMDB

## Relation qualifier

A relation qualifier, which is a CI of the Qualifier [cmdb_ci_qualifier] type,
stores important information about the CI relationships.

In a relation qualifier, you can annotate arbitrary unique information
about the relationship between two CIs. You can define multiple
qualifiers for a single relationship, resulting in a qualifier chain. But, there
can be only a single qualifier chain for a specific relationship type
between two CIs.

For example, for a relationship between a parent CI and a child CI, you
can add a relation qualifier to note that the relationship was discovered
based on traffic (such as cmdb_ci_qualifier_traffic_based_connection).
This results in having two records in the CI Relationship [cmdb_rel_ci] table
for the relationship.

• A record that links the parent CI and the new qualifier

• A record that links the new qualifier and the child CI

For this relationship, there is a parent CI and a child CI, and a relation
qualifier of type cmdb_ci_qualifier_trafficbased.

For information about usage of relation qualifiers in the identification
process, see Identification rules.

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

Related tasks

• Add a suggested relationship

• Create a CI relation rollup

Related concepts

• Relationship governance rules

• CI relations formatter

• CI relationship editor

• CI relationship security

Related reference

• Suggested class relationships

## CI relationship security

When applying security to CI relationships, it is important to apply the
access controls both to the CI Relationship (cmdb_rel_ci) table and to
create an operation editCIRelations to the * table as well.

If the current instance has defined security for editCIRelations, it will be
applied to edit_ci_relations automatically in the process of upgrading,
and the out-of-date security will be removed.

Related tasks

• Add a suggested relationship

• Create a CI relation rollup

• Create a CI relation rollup

Related concepts

• Relationship governance rules

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

• CI relations formatter

• CI relationship editor

• Relation qualifier

• CI relationships in the CMDB

Related reference

• Suggested class relationships

## Create a CI relation rollup

A CI relation rollup allows you to sum, count, max, min, or mean a
relationship type. You can create CI relation rollups.

Before you begin

Role required: ecmdb_admin

About this task

CI relation rollup can be useful for tracking and for receiving notifications.
For example:

• In a sum roll up, add up fields from multiple CIs and display the result on
another CI to which they are related. So, if you have four configuration
items in a rack that are all consuming power, create a CI relation rollup
to add all the power usage together and display the result in one field
on the rack CI form.

• If a certain level of power consumption in a rack is exceeded, send a
notification.

• With a rack that has 10 slots, send a notification when 9 slots are filled.

CI relation rollups use the cmdb synch event business rule on the
[cmdb_ci] table. Although this business rule is active by default, you must
modify the rule slightly before it will run.

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

Procedure

1. Navigate to All > Configuration > Relationships > CI Relation Rollups.

2. Click New.

3. Complete the form.

CI Relationship Rollup fields

Field
Description

CI Relationship Type

Select a relationship type from
the list to use with the rollup. For
example, Members::Member of
contains the parent descriptor
Members and the child
descriptor Member of.

Type

Select the type of rollup from
the drop-down list: COUNT, MAX,
MEAN, MIN, or SUM.

Parent field
The target field on which the
operation will be done.

Child field

The input to the equation type.
The Parent field is affected by
the selections in the child field.

Rollup class

The classes that can use the
relationship. For example, you
can specify that the relationship
only applies to racks.

4. To run the cmdb synch event business rule, navigate to Business
Rules.

5. Use the search box to find the [cmdb synch event] table.

6. Click the cmdb synch event business rule to go to the Business Rule
page.

7. Select the Update, Delete, and Query check boxes.

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

Additionally, if you wish CI relation rollups to recalculate when there
is a change to a relationship, use a similar procedure to select the
Active check box on the cmdb_rel_ci synch event business rule.

Related tasks

• Add a suggested relationship

Related concepts

• Relationship governance rules

• CI relations formatter

• CI relationship editor

• Relation qualifier

• CI relationship security

• CI relationships in the CMDB

Related reference

• Suggested class relationships

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

41

Zurich ServiceNow AI Platform Capabilities

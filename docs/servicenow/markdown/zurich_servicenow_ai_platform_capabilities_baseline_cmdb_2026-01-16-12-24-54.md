# zurich_servicenow_ai_platform_capabilities_baseline_cmdb_2026-01-16-12-24-54

*Source: zurich_servicenow_ai_platform_capabilities_baseline_cmdb_2026-01-16-12-24-54.pdf*

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

## Baseline CMDB

Baseline CMDB provides capabilities that help you understand and
control the changes that have been made to your configuration items
(CIs) in the CMDB.

• You can create a baseline, which is a snapshot of your configuration
items in the CMDB. You can review the changes that have been made
to that configuration item since a previous baseline. Multiple baselines
may be created and the system tracks the changes that have been
made per baseline.

Creating a baseline captures the attributes of the CI as well as all first-
level relationships for the CI. Any changes to the base CI or to any
related CIs are captured and displayed. Newly created CIs are not
automatically added to a baseline.

• Associate a configuration item with a task, a change or change task,
and to propose changes to the CI after the change is complete. You
can record changes, and these changes are not applied to the CI
immediately but are delayed until the change is complete.

When the change is complete, you can choose to apply the proposed
changes which makes all changes previously proposed and associates
the changes with the task.

For information about planning and implementing a baseline CMDB,
see the CMDB Baseline life-cycle best practices and Diff Formatter
troubleshooting [KB0829681] knowledge base article.

Create a CMDB baseline

You can create a baseline for a CI to track updates to the CI over time.

Before you begin

Role required: ecmdb_admin and itil

Procedure

1. Navigate to All > Configuration > Baselines > Baselines.

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

2. Click New.

3. Enter a Name for the baseline.
By default, the cmdb_ci table is selected so that the record creates
the baseline for all configuration items in the system.

4. (Optional) To limit the baseline to specific CIs, select a different Table
or choose Conditions that a CI must meet for it to have a baseline
entry.
For example, you might create a baseline for the Database table
with the condition [Location] [is] [<configured location>].

5. Click Submit.
The creation of a baseline is time consuming and occurs in the
background. A message at the top of the record list notifies you
that your baseline has been scheduled and you will receive an email
when the process is complete.

Display baseline differences

You can see the changes that have been made to a CI or any first
level related CIs by configuring the CI form layout to display the CMDB
Baseline diff field. This field is labeled Baseline differences on the form.

Before you begin

Role required: itil

About this task

Changes are displayed only for the cmdb_ci table and child tables. You
can change the com.cmdb.baseline.max_changes system property to
limit the number of relationships and changes that appear in a baseline
diff section on a CI form (set to 100 by default).

Procedure

1. Open a CI record.

2. Select the baseline you want to see for this CI from the choice list.
The field displays the details of any changes that were made to
the current record for the selected baseline, or indicates that no
changes were made.

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

Details of baseline differences

3. To add a relationship to the CI, click the green plus icon in the
Related Items toolbar.
The new relationship appears below the toolbar. For more
information about the Related Items toolbar and how to control the
display, see CI relations formatter.

4. Update a related CI and see the changes displayed as Basic
attribute changes in the current CI record.
Basic Attribute Changes

What to do next

To improve performance and prevent memory issues when showing
large amounts of baseline differences data on CI forms, complete the
following steps:

1. Set the system property com.cmdb.baseline.entry.attachment to
true.

2. Manually run once the CMDB Baseline convert XML to attachment fix
script. For information about running a fix script, see Run fix scripts.

Properties for baseline CMDB

Use the baseline CMDB properties to configure how many changes and
relationships for a CI can appear in the baseline diff for the CI.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

5

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 5, 508x124px]*

```
...:::::..::::.:...................::.... ......  . .......
..:::..:::::..::....                .
. .::..:...........
..... . ...... ....  ........     .      .
... ...   ..
.        ..  .       .
..  ... ...  .. ..   .
```

*[Banner/Header Image - Page 5, 579x175px]*

```
...:::::.::::::.................:..........  ...............
..::..::::..::::.
. .::.:......:....   .    .
...     .  .  .      ..  .    .
. .. .. .... ..  .  ....... ...              .
................  .. ....... ....   ...  .   ...
.. ..    .
.  ..   .
.. ... ..  .  ..  .
```

---
*Page 6*

These properties are available for baseline CMDB. To view and edit these
properties, the admin role is required.

Properties for Baseline CMDB

Property
Description

Maximum number of changes and
relationships for a CI that can
appear in the baseline diff for the
CI.

com.cmdb.baseline.max_changes

• Type: integer

• Default value: 100

• Location: Configuration > CMDB
Properties > Baseline Properties

com.cmdb.baseline.entry.attachm
ent

Lets you manually run the
CMDB Baseline convert XML to
attachment fix script. Setting this
property to true and then running
the CMDB Baseline convert XML
to attachment fix script, enables
improved performance when
showing large amounts of baseline
differences data on CI forms.

When false, the CMDB Baseline Diff
component uses legacy methods
which might fail to load large
amounts of baseline differences
data.

• Type: true | false

• Default value: false

• Location: Add to System
Properties [sys_properties] table.

• Learn more: Baseline CMDB

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

6

Zurich ServiceNow AI Platform Capabilities

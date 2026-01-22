# zurich_servicenow_ai_platform_capabilities_backing_up_cmdb_data_2026-01-16-12-33-58

*Source: zurich_servicenow_ai_platform_capabilities_backing_up_cmdb_data_2026-01-16-12-33-58.pdf*

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

## Backing up CMDB data

The cmdb_backup_storage_information table (part of the [app-cmdb-
content] ServiceNow Store application) holds generic backup storage
information for a CI as a platform related item. The table includes a
CI as a reference attribute and stores information for hardware, cloud,
containers, and other CI types.

Backup Store Information [cmdb_backup_storage_information]
table

The table captures backup policy, last successful backup, last backup
attempt, execution mode, backup source, backup source ID, and
backup service.

To mitigate the risk of uncontrolled growth of the table, a cascade-
delete rule applies to the Backup Source (CI) reference field. When a
CI is deleted, the corresponding rows in the table are deleted.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

3

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 3, 614x302px]*

```

.........................               .::::::::::::::::.
..:::.:.::::..:::::::::.:               :--------==------:
..::::::::::::..::::::::.:              .:-------=-=------:
.........:::::::::.::....:               .----------------:
:........:.:::::........:
....................::.
.      ..

................
..                   :----------------:
....               .----==-==-===----:
:----------------:
................
```

---
*Page 4*

Tables related to backup operations

Tables related to backup operations

Table
Contents

Backup Store Information
[cmdb_backup_storage_informati
on]

Informational object that stores CI
backup/snapshot information.

cmdb_related_entry

To populate the
cmdb_backup_storage_informatio
n with an IRE payload, you define
a CMDB-related rule in
cmdb_related_entry. For the
related rule, use the Backup
Source ID criteria attributes and
Backup Source as a reference
field. Example:

//. Sample IRE payload  va
r payload =
{
"items": [
{
"className": "cmdb_ci_
hardware",
"sys_object_source_in
fo": {
"source_name": "Serv
iceNow",
"source_native_key"
: "some key"
},
"values": {
"name": "I am a goo
d cat"
},
"lookup": [],
"related": [
{
"className": " cmd
b_backup_storage_informatio
n",

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

Table
Contents

"values": {
"backup_policy"
: "true",
"last_backup": "
2023-02-02",
“backup_id”:”sed
e-09191-fet”
}
}
]
}
] }
var jsonUntil = new JSON()
; var input = jsonUntil.enc
ode(payload);
var output = SNC.Identificat
ionEngineScriptableApi.crea
teOrUpdateCI('ServiceNow',
input); gs.print(output);

sys_security_acl
Reports and user access.

sys_ui_related
Multisource configuration, default
forms.

Columns in cmdb_backup_storage_information

Columns in cmdb_backup_storage_information

Column
Description

Backup Configuration Status

[backup_config_status]

String (choice)

• Backup Disabled [False, default]: CI has not been

• Backup Enabled [True]: CI has policies and config
system, service, or appliance for regular backups

• Unknown

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

Column
Description

• Not Applicable

• Planned

• Not Planned

Last Successful Backup
[last_successful_backup]

glide_date_time

Date and time of last successful backup. Platform-
start or end of the backup attempt as reported by
the start time of the backup attempt.

Last Backup Attempt [last_backup_attempt]

glide_date_time

Date and time of the last successful or failed backu
that can be either the start or the end of the back
platform API. If ambiguous, use the start time of the

For a successful backup, both last_backup and las
same value.

Execution Mode [backup_execution_mode]

String (choice)

• Manual: Run as needed.

• Automatic: Run periodically.

• Unknown

sys_domain and sys_domain_path

glide columns

Values copied from cmdb_ci.

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

Column
Description

managed_by and managed_by_group
Values copied from cmdb_ci.

Backup Source [backup_source_
configuration_item]

reference (ci)

Backup status details for the referenced CI being b

Backup Source ID [backup_source_id]

String (1024)

Backup Service source identifier for the CI. Identifie
service such as host_id, vcenter_id, instance_id, an

Backup Service [backup_service_
configuration_item]

reference (ci)

Reference to the CSDM technical service that host
system, service, or appliance.

Recovery Point Objective
[recovery_point_objective]

Duration

Time that can elapse between backups and the a

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

7

Zurich ServiceNow AI Platform Capabilities

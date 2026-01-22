# zurich_servicenow_ai_platform_capabilities_now_assist_for_configuration_management_database_(cmdb)_2026-01-16-12-50-01

*Source: zurich_servicenow_ai_platform_capabilities_now_assist_for_configuration_management_database_(cmdb)_2026-01-16-12-50-01.pdf*

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

## Now Assist for Configuration Management Database
## (CMDB)

Use ServiceNow® Now Assist for Configuration Management Database
(CMDB) to improve the quality of CMDB data, search the CMDB quickly,
find and remedy issues with Service Graph Connector import sets, view
comprehensive summaries for CIs, manually create CIs, and accelerate
the process of remediating duplicate CIs.

Get started

Explore
Learn about
Now Assist for CMDB

Configure
Activate Now
Assist for CMDB

Use
Apply AI agentic
workflows to accelerate results.

Use
Use Now Assist for
CMDB skills to view a concise
summary of key CI data, to help
you to resolve de-duplication tasks,
or to reduce debugging and
resolution time for failed Service
Graph Connector import sets.

Reference
/> Reference
topics provide additional
information about the property

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

settings that you use to configure
and administer Now Assist for
CMDB.

Important:

• Not all model providers are available for customers with in-
country SKUs, and some Now Assist products/features are currently
unavailable for in-country customers. For more information, see the
KB1584492 article in the Now Support Knowledge Base. Be sure to
check for model provider availability updates in future releases.

• Some Now Assist products/features are currently unavailable
for customers in the FedRAMP, NSC DOD IL5, or Australia IRAP-
Protected data centers, self-hosted customers, or in other restricted
environments. For more information, see the KB0743854 article in
the Now Support Knowledge Base. Be sure to check for availability
updates in future releases.

• Some Now Assist products/features are currently available only for
customers in some regions. Be sure to check for availability updates
in future releases.

Troubleshoot and get help

• Ask questions and explore other resources for in the ServiceNow
Community

• Search the Known Error Portal for known error articles

• Contact Customer Service and Support

AI limitations

This application uses artificial intelligence (AI) and machine learning,
which are rapidly evolving fields of study that generate predictions
based on patterns in data. As a result, this application may not always
produce accurate, complete, or appropriate information. Furthermore,
there is no guarantee that this application has been fully trained or
tested for your use case. To mitigate these issues, it is your responsibility
to test and evaluate your use of this application for accuracy, harm,
and appropriateness for your use case, employ human oversight of

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

output, and refrain from relying solely on AI-generated outputs for
decision-making purposes. This is especially important if you choose to
deploy this application in areas with consequential impacts such as
healthcare, finance, legal, employment, security, or infrastructure. You
agree to abide by ServiceNow’s AI Acceptable Use Policy, which may
be updated by ServiceNow.

Data processing

This application requires data to be transferred from ServiceNow
customers' individual instances to a centralized ServiceNow environment,
which may be located in a different data center region from the one
where your instance is, and potentially to a third-party cloud provider,
such as Microsoft Azure. This data is handled per ServiceNow's internal
policies and procedures, including our policies available through our
CORE Compliance Portal.

Data collection

ServiceNow collects and uses the inputs, outputs, and edits to outputs
of this application to develop and improve ServiceNow technologies
including ServiceNow models and AI products. In addition, this
application will collect incident data (for Incident Assist and Knowledge
Assist) and chat transcripts (for Chat Assist). Customers can opt out of
future data collection at any time, as described in the Now Assist Opt-
Out page.

For more information, see the Now Assist documentation.

Available LLMs

You can use Now LLM Service, Now LLM Long Term Stable models
(LTS), Azure OpenAI, Google Gemini or Anthropic Claude on AWS as
the AI model provider for all Now Assist skills and AI agents. Use the
Configuration Controls in AI Control Tower to define which options are
available, then set the skill-level preferences in the Now Assist Admin
console. For more information, see Large language models on the
ServiceNow AI Platform®.

## Exploring Now Assist for CMDB

With the Now Assist for Configuration Management Database (CMDB)
application, you can use Agentic AI to search the CMDB, summarize

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

discovery, ownership and related information for a CI, and fix failed
SGC import sets. You can also follow step-by-step guidance to help you
remediate duplicate CIs, improve CMDB data accuracy, completeness,
and health .

Supporting information for Now Assist for CMDB

Now Assist for CMDB is supported starting with Xanadu patch 3.

Now Assist for CMDB supports the following LLM models:

• Gemini

• Claude

Now Assist for CMDB agentic workflows

Now Assist for CMDB provides the following abilities:

Create configuration item agentic workflow

Occasionally, you might need to create a CI manually. To help you,
the Create configuration item agentic workflow accepts your natural
language request and verifies that it understands which class the
new CI should belong to. The workflow then checks Identification and
Reconciliation engine (IRE) rules to determine the required attributes
for the CI and requests that information. After you provide sufficient
data, the workflow ensures that the proposed CI includes the attributes
that you requested, complies with IRE rules, and is not a duplicate. The
workflow then creates the CI.

The Create configuration item agentic workflow is particularly useful for
adding CIs to tables accessed by Operational Technology because users
might add physical CIs while unaware of the need to manage CI data in
the CMDB.

To learn more, see Create a CI using Now Assist.

Provide advice on CMDB governance agentic workflow

Data governance can be an overwhelming task. The Provide advice on
CMDB governance agentic workflow supports data admins and owners
by methodically working through the many-faceted process of improving

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

CMDB data accuracy, completeness, and health. The objective is to
ensure that users can trust the data that they use for their work.

To learn more, see Getting advice from Now Assist on CMDB
governance.

Search CMDB agentic workflow

The Search CMDB agentic workflow enables you to search for CIs by
specifying any of several attributes of the CI of interest. The workflow
accepts your natural language request, verifies your search goal, and
then generates a keyword search, a single-table search with dot walks,
or a multi-table searches that involve relationship navigation, depending
on the information you provided. The workflow can infer CI relationship
data to generate an appropriate query.

To learn more, see Use Now Assist to search the CMDB for CIs.

Now Assist for CMDB skills

CI summarization skill

View a concise summary of key CI data. You can select the CI on a CI
form, in a workspace page, or on any list view. The summary can include
discovery data, ownership, and key related items such as open incidents,
alerts, problems, upcoming change requests, and security vulnerabilities.
Additionally, the summary lists the service instances that the CI is part
of. Summary information is useful while working in applications such as
Incident Management, Change Management, and Event Management.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

7

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 7, 512x244px]*

```

.   ... ..  ..  ........  .. ...

.:::::::.

.....                        . . ......... .. .........
. .... .. .. ...:......                 . ... ........
...... ..... .... ............ .. ...... ........ ....
.......... ...... .:............. . ...............
.

.   .  ..                        .......... . . ......
.
..................................
```

---
*Page 8*

To learn more, see View CI information with the Now Assist CI
summarization skill.

Manage duplicate CIs skill

Duplicate CIs interfere with the integrity, reliability, and general health
of CMDB. Resolve de-duplication tasks with support from the Now Assist
Manage duplicate CIs skill. CMDB administrators follow step-by-step
guidance to perform remediation, and can preview remediation results
before applying a template. The manage duplicate CIs skill accelerates
the work that you normally perform manually.

In this example, the manage duplicate CIs skill presents a list of classes
with duplicate CIs and suggests possible actions. You can select an
option or enter the action text in your own words:

• Review de-duplication tasks, create de-duplication templates, assign
tasks to templates, and run the templates.

• Preview the results of applying a de-duplication template before you
decide to apply it.

• Identify the root cause of duplications so that you can review the
groups of de-duplication tasks that share a common cause and
possibly avoid the issue in the future.

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

To learn more, see Let Now Assist help you to manage duplicate CIs.

Service Graph Connector diagnosis skill

Service Graph Connectors are integrations that facilitate data ingestion
from third-party sources into the CMDB. Errors in Service Graph
Connectors can disrupt the flow of configuration item (CI) data resulting
in inconsistencies between the actual state of CIs and their CMDB
records.

The Service Graph Connector diagnosis skill automates error
diagnosis and recommendation generation, enabling CMDB installation
administrators to identify and resolve the issues. This automation reduces

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

9

Zurich ServiceNow AI Platform Capabilities

*[Figure Or Illustration - Page 9, 265x464px]*

```
#############################%%%###############%#####%######
#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%%%%##%%%%#
#%%+++***#*+**+*+*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*#%%%#+*%%%%#
#%%##****###*****#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%##%%%###%%%%#
#%%%%%%%#####%##%########################################%%#
#%%*-::+%###*+#++=+++++=++*=+++++++=++*+*++*########*#%###%#
#%%= . :%#********++*++=+**+++++++++++**+++**********#%###%#
#%%%*+*#%#################################################%#
#%%%%%%%##%%%%%%%%%%%%%%****#***#%%%%%%%%%%%%%%%%%%%%#####%#
#%%%%%%%##%%%%%%%%%%%%%%#**####*#%%%%%%%%%%%%%%%%%%%%%######
#%%%%%%%%%%%%%%%%%%%%%###############################%%%%%%#
#%%%%%%%%%%%%%%%%%%%%#*+*+**************+*******++***#%%%%%#
#%%%%%%%%%%%%%%%%%%%%**========-==+===========+====+**%%%%%#
#%%%%%%%%%%%%%%%%%%%%#********++******+***************%%##%#
#%%%%%%%%%%%%%%%%%%%%%################################%%####
#%%%%%%%%##***************#****#***********#********##%%####
#########***+*+++++*+++++++++**+++++*++++++++**+++****######
*########***++=+==+=+===++=+=++===+=*==+=++==+=+==****###%%#
*########***===+=*+++++++++++++=*+=+******************###%##
*########***+++++*++++++++++++++*+++******************####*#
*########***=++===++===+++*=++==+*+=++++=+=+=+=++*****####*#
*####**#****++++++++++++++*++++++*+=*++++++++*+++*****####*#
**#+:..=***++====+************************************####**
**#= . :******+***************************************###***
****+++**********************************************####***
****#####********************************************####***
*########***========++=====++=======+====++=-==*==+***###***
*########***********+*+++++***************************###***
*########***+============+****************************###***
*########*********************************************###***
*########***+*****+*************++*++*****+*******+***###***
*########***+****+=+==========++=====+=======+****+***###***
*########***+*****++++++++++++*+++**+*++++++++****+***###***
*########***++************************************+***###***
*########***+***+++++++*=+++++++*+=+==+*+++=+++***++**###***
*########***+***+++++++*++++++=+*++++++*+=+=+++***+***###***
*########****+++++++++*+++++++++++++++++++++++++++****###***
*########***+********++********+++****+**+********+***###***
*########***+********+========*=+*+======+********++**###***
*#######****+********+*+++++++*++*++++++++********+***###***
*######*****+++++++++*+*******************+++****++***###***
*###***#****+********+++++++++*+++++++=+++********++**###***
*##+...-#***+********++++=++=+*++++====+==********+***###***
*##=.. -#********************************************####***
*###***##################################################***
*##########################################################*
*##########################################################*
*##########################################################*
*#*##++*+**++**+**+******#+**##%%%%%%%%%%%%%%%%%%%%#*##%###*
*#*############################%%%%%%%%%%%%%%%%%%%%###%####*
*##########################################################*
+*#****************************************************####+
```

---
*Page 10*

manual effort and saves time in debugging Service Graph Connectors
issues.

To learn more, see the following topics:

• Fix SGC import set issues with the Now Assist SGC diagnosis skill

• Getting started with Service Graph Connectors

• Learn how IRE detects duplicate CIs and creates de-duplication tasks

• Learn how CMDB Health uses the duplicate metric to track duplicate
CIs.

• Learn how to manage and remediate de-duplication tasks by using
de-duplication templates in CMDB Workspace.

• Supporting information for Now Assist for CMDB

Get a quick overview of the important information that is related to the
Now Assist for CMDB application.

## Supporting information for Now Assist for CMDB

Get a quick overview of the important information that is related to the
Now Assist for CMDB application.

Supported versions

Now Assist for CMDB is supported starting with Xanadu patch 3.

For more information, see Configuring Now Assist for CMDB.

Supported LLMs

You can use Now LLM Service, Now LLM Long Term Stable models
(LTS), Azure OpenAI, Google Gemini or Anthropic Claude on AWS as
the AI model provider for all Now Assist skills and AI agents. Use the
Configuration Controls in AI Control Tower to define which options are
available, then set the skill-level preferences in the Now Assist Admin
console. For more information, see Large language models on the
ServiceNow AI Platform®.

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

Supported languages

Now Assist for CMDB supports the following languages across all skills:

• German

• French

• Japanese

• Dutch

• French Canadian

• Spanish

• Brazilian Portuguese

• Italian

For more info, see Multilingual service for Now Assist applications

## Configuring Now Assist for CMDB

Configure Now Assist for CMDB.

Roles

Agentic workflows and their AI agents use role masking to determine
which users can access them. Ones installed with Now Assist applications
have specific roles that come included with the application. If you select
Users with specific roles for user access, you must configure the security
controls to include these roles. Data access settings must also include
these roles. For the instructions to change the security controls, see Define
security controls for an agentic workflow.

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

Skill activation

Important:   Some Now Assist skills, agents, and agentic workflows are
now turned on by default. The new default behavior works as follows:

New customers

When you install a Now Assist product, designated skills, agents, or
agentic workflows are turned on automatically.

Existing customers who are upgrading (starting with Zurich Patch 4)

There is no change to skills, agents, or agentic workflows that are
currently enabled and customized.

An AI asset is turned on if:

• The Now Assist plugin is installed, but the asset was never turned on.

• An admin has never adjusted roles for the skill.

An AI asset is not turned on if:

• The asset was previously turned on, and then turned off again.

• An admin has adjusted roles for the asset.

For more information, see Now Assist skills, agents, and agentic
workflows on by default.

Skill reuse in a domain-separated environment

By default, all skills exist in the global domain. When you use Now Assist
in a domain-separated environment, users are only able to access data
in their domain. For example, if a user uses the summarization skill, Now
Assist only uses material that exists in the user's domain when generating
that summary. Additionally, there is no co-mingling of data for domain-
separated instances when using generative AI skills. The data resides only
on the instance, and the shared services used for generative AI do not
persist any requests (prompts) and responses. For more information, see
Domain separation in the Now Assist Admin console. (Note that global
domain is not the same as global scope. For more information, see
Exploring Next Experience pickers.)

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

Procedures

Follow these procedures to set up and configure Now Assist for
Configuration Management Database (CMDB).

• Configure Now Assist for CMDB

Configure the Now Assist for CMDB application so users can benefit
from Agentic workflows, agents, and skills.

• Configure the Search CMDB agentic workflow

Review and configure the settings of the Search CMDB agentic
workflow.

• Configure the CI summarization skill

Review and configure the settings of the Now Assist for Configuration
Management Database (CMDB) CI summarization skill to restrict the
availability of the skill to certain users or conditions.

• Configure the manage duplicate CIs skill

Enable and configure scheduled jobs that support the manage
duplicate CIs skill.

• Configure the Service Graph Connector diagnosis skill

Review and configure the settings of the Service Graph Connector
diagnosis skill.

## Configure Now Assist for CMDB

Configure the Now Assist for CMDB application so users can benefit from
Agentic workflows, agents, and skills.

Before you begin

Agentic workflows and their AI agents use role masking to determine
which users can access them. Ones installed with Now Assist applications
have specific roles that come included with the application. If you select
Users with specific roles for user access, you must configure the security
controls to include these roles. Data access settings must also include

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

these roles. For the instructions to change the security controls, see Define
security controls for an agentic workflow.

Role required: sn_nowassist_admin.nsa_admin

Procedure

1. Navigate to Admin > Now Assist Admin and then select the Settings
tab.

2. In the list, select Plugins.
Plugins that have already been activated are listed on the Installed
tab.

3. Uninstall Now Assist for Service Graph Connectors (SGC).

4. On the Now Assist for Configuration Management Database (CMDB)
card, select Get plugins and then in the pop-up window, select Install
Plugin.

You install the Now Assist for CMDB (com.snc.cmdb.gen.ai) plugin.

You are redirected to the ServiceNow Store in a new browser tab so
you can get the plugin.

5. Install the Now Assist for CMDB plugin.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

14

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 14, 1964x1026px]*

```
@#*#*#*###@%%@%%%#%%##%@%#%#%%%##%@@@@@@@@@@@%%########%%%@@
%%%%%%%%%#%%%%%%%%%%%%%%%%%%%%%%#%%%###%%%%%%%%%%%%%%%%%%%%%
==============--===-====--=====---=-----====================
...       ...
........  ....
. .         .....  ....

...............      .....        .......
........                      .............
=**.:-:-::::      +*+  .......    ...... .  ...
:== :-:--:::..    -=-             ..
....  ...                    ..
............
..
..                ..
```

---
*Page 15*

For instructions on the installation process, see Install Now Assist
plugins.

6. Confirm that Now Assist for CMDB is installed.

a. On the Now Assist Admin console, select the Settings tab and
then select Plugins in the list.

b. On the Installed tab, verify that the Status value is Installed.

Now that you have installed the plugin, you set up the skills for Now
Assist for CMDB.

7. On the Now Assist Skills tab, expand Technology and then select
CMDB.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

15

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 15, 797x336px]*

```
%%%%#####%%#########%%%############%%%#####%%####%%%%%%%%%%%
++++++++++++++++++++++++++++++=+++++++++++++=======+++++++++
. ....                    ..
.... .  ..      .:....
.  . .           ..:..
.      ...       ...........:................ ... ..
. .               ........   ....
. .
.:.::::.:.
...    ... ...
..     ..
.....  ................................
```

---
*Page 16*

8. On the Now Assist skills for CMDB page, select Turn on for the Manage
duplicate CIs skill.
No configuration is required for the skill. On the pop-up, select Back
to skills to set up the other skills.

9. On the Now Assist skills for CMDB page, select Activate skill for the CI
summarization skill.
The skill requires configuration as described in Configure the CI
summarization skill.

10. On the Now Assist skills for CMDB page, select Activate skill for the
Service Graph Connector diagnosis skill.
The skill requires configuration as described in Configure the Service
Graph Connector diagnosis skill.

11. Configure property settings.
See Property settings for Now Assist for CMDB.

What to do next

To start using Now Assist for CMDB skills, see Using agentic workflows in
Now Assist for CMDB.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

16

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 16, 1100x669px]*

```
@#*#*###*%@%%%%%%%%%%%@%%%#######%%%%*****######**%%%%%@%@**
%%%%%#%%#%%%%%%%%%%%%%%%%%%%%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
=++========-===================+====++++++++++++++++++++++++
.. ... ...  ...
.             ... ..    ..
. ...        ..
... ...
.         .
.        .  .......                ......
..        .  .................      .........  ..
..        .
.

..         .  ...
..         .  .............
..         .      . .  .
.          .         .. .
.
```

---
*Page 17*

To deactivate a skill, select the menu icon

for the skill and
then select Deactivate skill.

Admins might be interested in Query Generation. Query Generation is
an AI-powered service that translates user questions into an executable
query. An executable query contains the data source, filter, aggregation,
and visualization instructions that best answer the user's question. For
more information, see Exploring Query Generation.

Related concepts

• CMDB Workspace store app

## Configure the Search CMDB agentic workflow

Review and configure the settings of the Search CMDB agentic workflow.

Before you begin

Agentic workflows and their AI agents use role masking to determine
which users can access them. Ones installed with Now Assist applications
have specific roles that come included with the application. If you select
Users with specific roles for user access, you must configure the security
controls to include these roles. Data access settings must also include
these roles. For the instructions to change the security controls, see Define
security controls for an agentic workflow.

Role required: admin

Procedure

1. Activate the Query Generation skills as described in Query
Generation skills.

2. Index the CI data.

a. Navigate to Query Generation > Indexed Sources.

b. Open the two records and select Index all tables or Index table.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

17

Zurich ServiceNow AI Platform Capabilities

*[Icon Or Small Graphic - Page 17, 74x78px]*

```









..::::::::::::::::::::::::::::..
.##%%%%%%%%%%%%%%%%%%%%%%%%%%%%##:
:%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%:
.:------------------------------:.

.::::::::::::::::::::::::::::::.
:#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#:
:#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%:
..------------------------------.

.=++++++++++++++++++++++++++++++=.
:%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%-
.+*############################*+.









```

---
*Page 18*

Related tasks

• Use Now Assist to search the CMDB for CIs

## Configure the CI summarization skill

Review and configure the settings of the Now Assist for Configuration
Management Database (CMDB) CI summarization skill to restrict the
availability of the skill to certain users or conditions.

Before you begin

Role required: admin

About this task

The CI summarization skill might scan activated plugins, activated
applications, and CMDB tables. The skill uses the Now LLM Service to
generate summaries.

Requirements and dependencies for the skill

Detail type
Requirements and dependencies

Discovery

The CI summarization skill extracts
details from the Discovery source
and Most recent discovery CI
attributes.

If CMDB 360 is enabled, the
summary can show additional
discovery sources for the CI. For
more information, see CMDB 360/
Multisource CMDB.

Alerts

Event Management must be
activated for the CI summarization
skill. For more information, see
Event Management.

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

Detail type
Requirements and dependencies

Security vulnerabilities

Security Operations must be
activated for the CI summarization
skill. For more information, see
Security Operations.

CI ownership

The CI summarization skill
determines the CI ownership
based on the attribute that is
specified in the
glide.cmdb.health.ci_ownership_fi
eld system property.

For more information, see CMDB
Health system properties and
CMDB Health.

Data on the CMDB Health
Dashboard

The Correctness Score Calculation
scheduled job improves the
accuracy of the summary details
on the CMDB Health Dashboard.
For more information, see Enable
and configure a CMDB Health
Dashboard job.

By default, all skills exist in the global domain. When you use Now Assist
in a domain-separated environment, users are only able to access data
in their domain. For example, if a user uses the summarization skill, Now
Assist only uses material that exists in the user's domain when generating
that summary. Additionally, there is no co-mingling of data for domain-
separated instances when using generative AI skills. The data resides only
on the instance, and the shared services used for generative AI do not
persist any requests (prompts) and responses. For more information, see
Domain separation in the Now Assist Admin console. (Note that global
domain is not the same as global scope. For more information, see
Exploring Next Experience pickers.)

Procedure

1. (Optional) Access the setting tabs for the CI summarization skill.

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

a. Navigate to All > Now Assist Admin.

b. On the Now Assist Features tab, expand Technology and then
select CMDB.

c. On the Now Assist Skills for CMDB page, review the skills and then
select View details.

d. On the Active skills card on the Configuration Management
Database (CMDB) page, select the context menu for the CI
summarization skill and then select Edit.

2. Review and configure the settings.

Setting tabs for the CI summarization skill

Tab
Action

General details
Review general information on
the CI summarization skill.

Choose inputs

Note:   In this release of
the skill, all configuration
settings on this section are
read-only.

Review the tables and fields
that the Now LLM Service uses
to gather details for the CI
summary.

Define availability

Select Customize skill availability
to restrict the availability of
the skill to certain conditions or
particular users or groups.

Use the condition builder to
specify the field conditions that
must be met for the skill to be
available and then select Save
and continue.

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

Tab
Action

Select display

a. Toggle the Display switch to
expose the CI summarization
skill on CI forms. When the
Display toggle is in the off
state, the CI summarization
skill isn't available even when
the skill itself is activated.

b. Specify the user roles
that can use the CI
summarization skill by
selecting the drop-down

list icon

and then
selecting the user roles in the
User roles field.

c. Select Save and continue.

Review and activate

Review the summary of settings
for the skill (each card displays
a different category of settings).
Select Activate or Done.

Important:   Confirm that
the answer is Yes on
the card titled Will CI
summarization display in
product?. Otherwise, the
CI summarization function
won't be available to users
even if the skill itself is
activated.

The Summarize button appears when a user with the appropriate role
views a CI.

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

What to do next

Use the CI summarization skill.

## Configure the manage duplicate CIs skill

Enable and configure scheduled jobs that support the manage
duplicate CIs skill.

Before you begin

In this procedure, you enable scheduled jobs that support the manage
duplicate CIs skill.

By default, all skills exist in the global domain. When you use Now Assist
in a domain-separated environment, users are only able to access data
in their domain. For example, if a user uses the summarization skill, Now
Assist only uses material that exists in the user's domain when generating
that summary. Additionally, there is no co-mingling of data for domain-
separated instances when using generative AI skills. The data resides only
on the instance, and the shared services used for generative AI do not
persist any requests (prompts) and responses. For more information, see
Domain separation in the Now Assist Admin console. (Note that global
domain is not the same as global scope. For more information, see
Exploring Next Experience pickers.)

Role required: admin

Procedure

1. Enable the De-duplication: Populate Duplicate Task Data scheduled
job.
For instructions, see Components installed for duplicate CI
remediation.

2. Enable the PopulateDuplicate Task Group Daily scheduled job to
provide analysis of the root cause of remediation tasks.
For instructions, see Components installed with CMDB Workspace.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

22

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 22, 459x51px]*

```

.   .... ... ... ...... . ... ....          .........

```

---
*Page 23*

3. Enable the CMDB Health Dashboard - Correctness Score Calculation
scheduled job.
The job improves the accuracy of summary details on the CMDB
Health Dashboard. For instructions, see Enable and configure a
CMDB Health Dashboard job.

Related tasks

• Use Now Assist to search the CMDB for CIs

## Configure the Service Graph Connector diagnosis skill

Review and configure the settings of the Service Graph Connector
diagnosis skill.

Before you begin

By default, all skills exist in the global domain. When you use Now Assist
in a domain-separated environment, users are only able to access data
in their domain. For example, if a user uses the summarization skill, Now
Assist only uses material that exists in the user's domain when generating
that summary. Additionally, there is no co-mingling of data for domain-
separated instances when using generative AI skills. The data resides only
on the instance, and the shared services used for generative AI do not
persist any requests (prompts) and responses. For more information, see
Domain separation in the Now Assist Admin console. (Note that global
domain is not the same as global scope. For more information, see
Exploring Next Experience pickers.)

Role required: admin

Procedure

1. In the Select display section, review where the skill appears and then
select Save and continue.

2. In the Review and activate section, review your selections and then
select Activate.

3. On the Successfully activated pop-up, select Return to Service Graph
Connector.

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

4. In the Active skills section of the Service Graph Connector page, see
the Status column to verify that the skill is active.
Active skills section

## Using agentic workflows in Now Assist for CMDB

Users with the sn_cmdb_user role can access several Now Assist for CMDB
agentic workflows.

Agentic workflows

Available agentic workflows for Now Assist for CMDB

Agentic workflow name
Description
Available AI agents

Create configuration
item

Occasionally, you
might need to create
a CI manually.
To help you, the
Create configuration
item agentic workflow
accepts your natural
language request
and verifies that it
understands which
class the new CI
should belong to.
The workflow then
checks Identification

CMDB CI creator

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

24

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 24, 522x256px]*

```
.   .......
::.::.:::::.::.::::.......
...................

.....
......




......
....                                          .
....               ...               ...   .....
.
```

---
*Page 25*

Agentic workflow name
Description
Available AI agents

and Reconciliation
engine (IRE) rules
to determine the
required attributes for
the CI and requests
that information. After
you provide sufficient
data, the workflow
ensures that the
proposed CI includes
the attributes that you
requested, complies
with IRE rules, and
is not a duplicate.
The workflow then
creates the CI. For
more information, see
Create a CI using Now
Assist

Provide advice on
CMDB governance

Data governance
can be an
overwhelming task.
The Provide advice
on CMDB governance
agentic workflow
supports data admins
and owners by
methodically working
through the many-
faceted process of
improving CMDB
data accuracy,
completeness, and
health. The objective
is to ensure that users
can trust the data that
they use for their work.
For more information,
see Getting advice

• CMDB data
manager

• CMDB data
certification and
attestation manager

• CMDB data
ownership manager

• CMDB health metrics
manager

• CMDB life cycle
manager

• CMDB principal class
manager

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

Agentic workflow name
Description
Available AI agents

from Now Assist on
CMDB governance.

Search CMDB

The Search CMDB
agentic workflow
enables you to
search for CIs by
specifying any of
several attributes of
the CI of interest.
The workflow accepts
your natural language
request, verifies your
search goal, and then
generates a keyword
search, a single-table
search with dot
walks, or a multi-
table searches that
involve relationship
navigation,
depending on
the information
you provided. The
workflow can infer
CI relationship data
to generate an
appropriate query. For
more information, see
Use Now Assist to
search the CMDB for
CIs.

CMDB CI search

AI agents used by Now Assist for CMDB

Looking for an AI agent?

• There might be AI agents installed with the Now Assist application that
are not used in agentic workflows. To learn how to see all agents that
are available on your instance, see Find AI agents.

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

• To find agents that might not be installed on your instance, visit the AI
Agent Marketplace on the ServiceNow Store.

CMDB CI creator AI agent

The CMDB CI creator AI agent creates a new configuration item (CI)
record in the CMDB.

CMDB data certification and attestation manager AI agent

The CMDB data certification and attestation manager AI agent retrieves
the data certification and attestation policies for a CI class and for similar
classes. It can also create a data certification and an attestation policy.
For more information, see Data Certification.

CMDB data manager AI agent

The CMDB life cycle manager AI agent helps admins to ensure that
CMDB life-cycle policies are in place for principal classes or for specified
classes. For more information, see Working with CMDB Data Manager.

CMDB data certification and attestation manager AI agent

The CMDB data certification and attestation manager AI agent retrieves
and applies data certification and attestation policies to manage the
data certification and attestation of CI classes.

CMDB data ownership manager AI agent

The CMDB data ownership manager AI agent helps you to assess the
quality of CI ownership data for a CI class to determine ownership,
validate ownership, and evaluate ownership quality. You can validate
fields that reference sys_user or sys_user_group like Assigned To,
Managed by Group (default), Support Group, and so on. The agent
answers the following questions:

• Is CI ownership specified? Is the Managed by group attribute value set
for the CI? Does it point to an active and correctly configured record?
The value of the system property for ownership is a default field for the
evaluation. For the Managed by group CI attribute, you can specify the
percentage values that classify the result as Poor, Average, or Healthy.
For more information, see Property settings for Now Assist for CMDB.

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

• If you provide a user referencing value: Does the User Referencing
value point to an active record? This evaluation identifies CIs that have
inactive users and CIs with no User value.

• If you provide a user referencing value: Does the Group Referencing
value point to an active record? This evaluation identifies CIs that have
inactive groups, empty groups (no users), and CIs with no Group value.

CMDB health metrics manager AI agent

The CMDB health metrics manager AI agent displays information on
CMDB Health Dashboard jobs, health metrics status, and health scores.
If the jobs are not configured, the workflow provides a link to the setup
instructions. For more information, see CMDB Health.

CMDB life cycle manager AI agent

The CMDB life cycle manager AI agent performs actions related to life-
cycle management of CI classes: retrieve the life-cycle management
policy and retirement definition for a CI class and create a life-cycle
policy.

CMDB principal class manager AI agent

The CMDB principal class manager AI agent determines whether you
can set Cl classes as principal, suggests principal classes, and can set or
unset a class as principal. Setting a class as a principal class is a practical
way to save time because you can configure ServiceNow AI Platform
products to display only principal classes in list views. The workflow helps
you to decide which CIs you are most likely to work with day-to-day
and then provides a link to enable you to set the associated classes
as principal classes. For more information, see Update class list in the
Principal Class filter.

CMDB search AI agent

The CMDB search AI agent searches the CMDB for a particular CI using
single table query search or keyword query search and then displays a
link to search results.

CI summarizer AI agent

View a concise summary of key CI data. You can select the CI on a CI
form, in a workspace page, or on any list view. The summary can include
discovery data, ownership, and key related items such as open incidents,

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

alerts, problems, upcoming change requests, and security vulnerabilities.
Additionally, the summary lists the service instances that the CI is part of.

Note:

You can use Now LLM Service, Now LLM Long Term Stable models
(LTS), Azure OpenAI, Google Gemini or Anthropic Claude on AWS as
the AI model provider for all Now Assist skills and AI agents. Use the
Configuration Controls in AI Control Tower to define which options
are available, then set the skill-level preferences in the Now Assist
Admin console. For more information, see Large language models
on the ServiceNow AI Platform®.

Enable security implementation to execute AI agents and agentic
workflows through Access Control Lists (ACLs) and user identities. ACLs
provide the Run As capability to let agents and agentic workflows
execute actions either as a dynamic user or as an AI user. For more
information, see Implement access control in Now Assist AI agents

Running AI agents autonomously

Important:   By default, all agentic workflow and AI agent records
are read only.

To run the AI agents autonomously, you must first duplicate the
agentic workflow and then proceed with the following steps:

• Activate the agentic workflow.

• Activate all agents within the agentic workflow.

• Activate the trigger to invoke the agentic workflow automatically.
If you prefer to invoke it manually, activating the trigger isn’t
necessary.

• Create a CI using Now Assist

The Create configuration item agentic workflow accepts your natural
language request to manually generate a valid CI in the class that you
specify.

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

• Getting advice from Now Assist on CMDB governance

Data governance can be an overwhelming task. The Provide advice
on CMDB governance agentic workflow supports data admins and
owners by methodically working through the many-faceted process
of improving CMDB data accuracy, completeness, and health. The
objective is to ensure that users can trust the data that they use for their
work.

• Use Now Assist to search the CMDB for CIs

The Search CMDB agentic workflow enables you to search for CIs by
specifying any of several attributes of the CI of interest. The workflow
accepts your natural language request, verifies your search goal, and
then generates a keyword search, a single-table search with dot
walks, or a multi-table searches that involve relationship navigation,
depending on the information you provided. The workflow can infer CI
relationship data to generate an appropriate query.

## Create a CI using Now Assist

The Create configuration item agentic workflow accepts your natural
language request to manually generate a valid CI in the class that you
specify.

Before you begin

Role required: sn_cmdb_admin

About this task

Occasionally, you might need to create a CI manually. To help you,
the Create configuration item agentic workflow accepts your natural
language request and verifies that it understands which class the
new CI should belong to. The workflow then checks Identification and
Reconciliation engine (IRE) rules to determine the required attributes
for the CI and requests that information. After you provide sufficient
data, the workflow ensures that the proposed CI includes the attributes
that you requested, complies with IRE rules, and is not a duplicate. The
workflow then creates the CI.

The Create configuration item agentic workflow is particularly useful for
adding CIs to tables accessed by Operational Technology because users

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

might add physical CIs while unaware of the need to manage CI data in
the CMDB.

Note:   The workflow prevents creation of a CI whose class does not
have an identification rule. For more information, see Identification
rules.

To learn more about using the Now Assist panel, see Working in the Now
Assist panel.

Procedure

1. Use either of the following methods to start the process.

• While working in the CMDB Workspace, select Create CI in the
Quick Links section.

• While working in the CMDB Workspace, select the Now Assist icon

and then enter create a ci.

2. Enter the class of CI to create and then continue by answering the
Now Assist questions.

## Getting advice from Now Assist on CMDB governance

Data governance can be an overwhelming task. The Provide advice on
CMDB governance agentic workflow supports data admins and owners
by methodically working through the many-faceted process of improving
CMDB data accuracy, completeness, and health. The objective is to
ensure that users can trust the data that they use for their work.

Access the workflow

See Get advice on CMDB governance from Now Assist for information on
accessing the workflow.

Provide advice on CMDB governance agentic workflow

The Configuration Management Database (CMDB) is the central
repository of your organization's IT assets, services, and their relationships.
The Provide advice on CMDB governance agentic workflow helps to
ensure CMDB accuracy, completeness, and integrity to maximize the

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

value and performance of your ServiceNow AI Platform products. The
results are faster incident resolution, enhanced compliance, and a
reduced risk of service disruption. The agentic workflow evaluates CIs
updated in the last 90 days.

The Provide advice on CMDB governance agentic workflow supports
admins and owners with information on data health and ongoing
guidance for governance as data models and integrations grow. The
workflow calls on AI agents.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

32

Zurich ServiceNow AI Platform Capabilities

*[Figure Or Illustration - Page 32, 391x522px]*

```
%#==========*#########################################%%%%%%
%+::-=**=--:+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%%%%%
%+:=%#%##%*-+%%%%=++--==+=-+%*******+*****+*+***+#%%%#%%%%%%
%+:+@##**%#-+%%%%++*==++++=+%--+=*=*=+*+++=+*+++=*%%%#%%%%%%
%+-=*#%%#*=-+%%%%%%%@@%%%%%%%%%%%%@%@%%%%%@%%%%%@%%%%#%%%%%%
%*---==+====+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%%%%%
%%%%%%#*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%##%%%%%++++++++++*##########%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%##%%%%+.:::.::::.-########%##%%%#%##%%%%%%%%%%%%%%%%%%
%%%%%%#*%%%%+::::=-==::=%#%#=+=+++==+==*++#*++++++%%%%%%%%%%
%%%%%%##%%%%+::-+%#=:::=%%%#********###%##%%#%####%%%%%%%%%%
%%%%%%##%%%@+::::+-::::=%%%#++==+++#%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%##%%%%*::::::::::=#######%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%##%%%%%***********######%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%##%%%%#++++++++++*%%%%########%###%%%%%%#%%%%%%%%%%%%%
%%%%%%#*%%%%#++++*+**++*%%%%++===+==#+===%+++++=+%%%%%%%%%%%
%%%%%%#*####*++*#%#*+++*%%%%################*###%%%%%%%%%%%%
%%%%%%##%%%%#++++#*++++*%%%%*++=+++==++#*===+++*%%%%%%%%%%%%
%%%%%%##%%%%#++++++++++*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%##%%%%%#*********#%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%##%%%%*=========-+####%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%##%%%%*----==++--+%%%#+*++++=*#+*++*#%%%%%%%%%%%%%%%%%
%%%%%%##%%%%*--=+%#+=--+%%%%****+++##**+**#%%%%%%%%%%%%%%%%%
%%%%%%##%%%%*--==#+=---+%%%%+*=+===+*+=++++#++==+++#%%%%%%%%
%%%%%%##%%%%*----------+%%%%#%#%%%%%%%%%%%%%%##%%%%%%%%%%%%%
%%%%%%##%%%%%***********########%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%##%%%%*-:--::::-:=##############%%%%%%%%%%%%%%%%%%%%%%
%%%%%%##%%%@=......--..-%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%#%%%%=..:-#==-..-%%%#+*++++=******+++#********%%%%%%%
%%%%%%%%%%%%=..:=%+-...-%%%%******+##*+*****#**=+***#%%%%%%%
%%%%%%%%%%%@=....:.....-%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%#----------=###############%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%#==========+#######%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%*----=-+=--+%%%#******+##**##########***#%%%%%%%
%%%%%%%#%%%%+--=+#*+=--+%%%#+*+++++****#+++++++*+++=*%%%%%%%
%%%%%%%%%%%%+--=+%*=---+%%%#+++++*+*%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%*----=-----+%%%%**+**###%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%#++++++++++*#####%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
```

---
*Page 33*

AI agents

This section presents overviews of the actions of the AI agents that the
agentic workflow uses.

Looking for an AI agent?

• There might be AI agents installed with the Now Assist application that
are not used in agentic workflows. To learn how to see all agents that
are available on your instance, see Find AI agents.

• To find agents that might not be installed on your instance, visit the AI
Agent Marketplace on the ServiceNow Store.

CMDB principal class manager AI agent

The CMDB principal class manager AI agent determines whether you
can set Cl classes as principal, suggests principal classes, and can set or
unset a class as principal. Setting a class as a principal class is a practical
way to save time because you can configure ServiceNow AI Platform
products to display only principal classes in list views. The workflow helps
you to decide which CIs you are most likely to work with day-to-day
and then provides a link to enable you to set the associated classes
as principal classes. For more information, see Update class list in the
Principal Class filter.

CMDB life cycle manager AI agent

The CMDB life cycle manager AI agent helps admins to ensure that
CMDB life-cycle policies are in place for principal classes or for specified
classes. For more information, see Working with CMDB Data Manager.

CMDB data certification and attestation manager AI agent

The CMDB data certification and attestation manager AI agent retrieves
the data certification and attestation policies for a CI class and for similar
classes. It can also create a data certification and an attestation policy.
For more information, see Data Certification.

CMDB health metrics manager AI agent

The CMDB health metrics manager AI agent displays information on
CMDB Health Dashboard jobs, health metrics status, and health scores.

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

If the jobs are not configured, the workflow provides a link to the setup
instructions. For more information, see CMDB Health.

CMDB data ownership manager AI agent

The CMDB data ownership manager AI agent helps you to assess the
quality of CI ownership data for a CI class to determine ownership,
validate ownership, and evaluate ownership quality. You can validate
fields that reference sys_user or sys_user_group like Assigned To,
Managed by Group (default), Support Group, and so on. The agent
answers the following questions:

• Is CI ownership specified? Is the Managed by group attribute value set
for the CI? Does it point to an active and correctly configured record?
The value of the system property for ownership is a default field for the
evaluation. For the Managed by group CI attribute, you can specify the
percentage values that classify the result as Poor, Average, or Healthy.
For more information, see Property settings for Now Assist for CMDB.

• If you provide a user referencing value: Does the User Referencing
value point to an active record? This evaluation identifies CIs that have
inactive users and CIs with no User value.

• If you provide a user referencing value: Does the Group Referencing
value point to an active record? This evaluation identifies CIs that have
inactive groups, empty groups (no users), and CIs with no Group value.

• Get advice on CMDB governance from Now Assist

Work through the process of improving CMDB data accuracy,
completeness, and health. The objective is to ensure that users can trust
the data that they use for their work.

## Get advice on CMDB governance from Now Assist

Work through the process of improving CMDB data accuracy,
completeness, and health. The objective is to ensure that users can trust
the data that they use for their work.

Before you begin

Role required: sn_cmdb_admin

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

About this task

To learn more about using the Now Assist panel, see Working in the Now
Assist panel.

Procedure

1. Use either of the following methods to start the process.

• While working in the CMDB Workspace, select Provide advice on
CMDB governance in the Quick Links section.

• While working in the CMDB Workspace, select the Now Assist icon

and then enter Provide advice on CMDB governance.

2. Enter the class of CI to create and then continue by answering the
Now Assist questions.

Related reference

• Property settings for Now Assist for CMDB

## Use Now Assist to search the CMDB for CIs

The Search CMDB agentic workflow enables you to search for CIs by
specifying any of several attributes of the CI of interest. The workflow
accepts your natural language request, verifies your search goal, and
then generates a keyword search, a single-table search with dot walks,
or a multi-table searches that involve relationship navigation, depending
on the information you provided. The workflow can infer CI relationship
data to generate an appropriate query.

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

Before you begin

Important:   This agentic workflow is now turned on by default. The
new default behavior works as follows:

New customers

When you install a Now Assist product, designated agentic workflows
are turned on automatically.

Existing customers who are upgrading (starting with Zurich Patch 4)

There is no change to agentic workflows that are currently enabled
and customized.

An agentic workflow is turned on if:

• The Now Assist plugin is installed, but the agentic workflow was
never turned on.

• An admin has never adjusted roles for the agentic workflow.

An agentic workflow is not turned on if:

• The agentic workflow was previously turned on, and then turned off
again.

• An admin has adjusted roles for the agentic workflow.

For more information, see Now Assist skills, agents, and agentic
workflows on by default.

Ensure that Query Generation skills are activated. For instructions, see
Configuring Query Generation.

Note:   Because activation configures a large amount of data, wait
one day after activation to use the Search CMDB agentic workflow.

Role required: sn_cmdb_user

About this task

The Search CMDB agentic workflow can perform the following types of
search:

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

• CMDB searches that are keyword searches for a specific CI. You can
search using name, IP address, serial number, MAC address, or asset
tag. For example, "Search the CMDB for Linux Servers", or "List all IPs".

• CMDB searches that are single-table queries (including dot walk
conditions for one level). For example,"What servers does Wile E.
Coyote own?" or "Search the CMDB for operational windows servers
that aren't assigned to anyone".

Procedure

1. On the CMDB Workspace or in any form or list view, select the Now

Assist icon

.

2. Start a Now Assist query with "Search the CMDB for " and then
enter the search criteria as described in the next step.

3. Enter the information that describes the searched-for CI.

• Provide as much as you know about the CI. Ideally provide the
class type followed by other search values and conditions. For
example, name, IP address, serial number, MAC address, or asset
tag.

• If a query fails, you can check query generation events to
determine the cause. Select All > Query Generation > Event
Queue to view events. In some cases, a log will exist for the query.
Select All > Query Generation > Logs to view the logs. For more
information, see Query Generation logs.

4. Refine the query if Now Assist returns a CI, but not the CI that you're
interested in.
For example, you might have specified an IP address that is
duplicated in multiple tables. In such cases, provide details that
narrow the search.

Result

If fewer than five search results are returned, they are summarized. If
more results are returned, they appear in a linked list (limited to 100
records).

To learn more about using the Now Assist panel, see Working in the Now
Assist panel.

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

## Using AI skills in Now Assist for CMDB

Use Now Assist for CMDB skills to view a concise summary of key CI data,
to help you to resolve de-duplication tasks, or to reduce debugging and
resolution time for failed Service Graph Connector import sets.

Skill reuse in a domain-separated environment

By default, all skills exist in the global domain. When you use Now Assist
in a domain-separated environment, users are only able to access data
in their domain. For example, if a user uses the summarization skill, Now
Assist only uses material that exists in the user's domain when generating
that summary. Additionally, there is no co-mingling of data for domain-
separated instances when using generative AI skills. The data resides only
on the instance, and the shared services used for generative AI do not
persist any requests (prompts) and responses. For more information, see
Domain separation in the Now Assist Admin console. (Note that global
domain is not the same as global scope. For more information, see
Exploring Next Experience pickers.)

Now Assist skills used by Now Assist for CMDB

Note:   To enable a subset of users to access Now Assist for CMDB
skills, create a role or a group for the users. For more information, see
Create a new role or a group to access Now Assist skills.

CI summarization skill

View a concise summary of key CI data. You can select the CI on a CI
form, in a workspace page, or on any list view. The summary can include
discovery data, ownership, and key related items such as open incidents,
alerts, problems, upcoming change requests, and security vulnerabilities.
Additionally, the summary lists the service instances that the CI is part
of. For more information, see View CI information with the Now Assist CI
summarization skill.

Manage duplicate CIs skill

Resolve de-duplication tasks with support from the Now Assist Manage
duplicate CIs skill. CMDB administrators follow step-by-step guidance
to perform remediation, and can preview remediation results before

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

applying a template. For more information, see Let Now Assist help you to
manage duplicate CIs.

Service Graph Connector diagnosis skill

To reduce debugging and resolution time and effort, the Service
Graph Connector diagnosis skill generates summaries of errors and
recommendations for resolving processing errors with SGC import sets. For
more information, see Fix SGC import set issues with the Now Assist SGC
diagnosis skill

## View CI information with the Now Assist CI
## summarization skill

View a concise summary of key CI data. You can select the CI on a CI
form, in a workspace page, or on any list view. The summary can include
discovery data, ownership, and key related items such as open incidents,
alerts, problems, upcoming change requests, and security vulnerabilities.
Additionally, the summary lists the service instances that the CI is part of.

Before you begin

Role required: sn_cmdb_user

About this task

This procedure describes how you can manually access the skill in Core
UI or in the CMDB Workspace. In addition, any agentic workflow can use
the skill.

To learn more about using the Now Assist panel, see Working in the Now
Assist panel.

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

Important:   This Now Assist skill is now turned on by default. The
skill will be automatically available to appropriate role users for the
application. The new default behavior works as follows:

New customers

When you install a Now Assist product, designated skills are turned on
automatically.

Existing customers who are upgrading (starting with Zurich Patch 4)

There is no change to skills that are currently enabled and
customized.

A skill is turned on if:

• The Now Assist plugin is installed, but the skill was never turned on.

• An admin has never adjusted roles for the skill.

A skill is not turned on if:

• The skill was previously turned on, and then turned off again.

• An admin has adjusted roles for the skill.

For more information, see Now Assist skills, agents, and agentic
workflows on by default.

Procedure

1. Select a CI from the workspace or from any list view.

For example, select All and enter cmdb_ci.list in the search filter.
Select a CI to open its CI form.

2. Select Summarize in the Now Assist box.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

40

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 40, 459x51px]*

```

.   .... ... ... ...... . ... ....          .........

```

---
*Page 41*

Now Assist generates and displays summary information for the CI, as
in this example.

3. (Optional) Provide feedback, copy the summary text to the
clipboard, or refresh the summary.

Option
Procedure

Provide feedback for the
summary

If you think that the summary
was helpful, select thumbs-up

. If you think that the
summary wasn’t helpful, select

thumbs-down

.

This feedback improves the
Agentic AI model and can
help to improve the future
versions of this skill. The system
gathers the feedback on each
generated summary and stores
it in the Agentic AI logs
(sys_generative_ai_log_list.do).

Copy the summary
Select the copy to clipboard

icon

to use the summary
information for another purpose,
such as pasting into an email.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

41

Zurich ServiceNow AI Platform Capabilities

*[Banner/Header Image - Page 41, 512x244px]*

```

.   ... ..  ..  ........  .. ...

.:::::::.

.....                        . . ......... .. .........
. .... .. .. ...:......                 . ... ........
...... ..... .... ............ .. ...... ........ ....
.......... ...... .:............. . ...............
.

.   .  ..                        .......... . . ......
.
..................................
```

---
*Page 42*

Option
Procedure

Refresh the summary
If you think that data might
have changed after you viewed
the summary, select the redo

icon

to refresh the summary
information.

Related tasks

• Configure the CI summarization skill

## Let Now Assist help you to manage duplicate CIs

Resolve de-duplication tasks with support from the Now Assist Manage
duplicate CIs skill. CMDB administrators follow step-by-step guidance
to perform remediation, and can preview remediation results before
applying a template.

Before you begin

Role required: cmdb_dedup_admin

About this task

To learn more about using the Now Assist panel, see Working in the Now
Assist panel.

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

Important:   This Now Assist skill is now turned on by default. The
skill will be automatically available to appropriate role users for the
application. The new default behavior works as follows:

New customers

When you install a Now Assist product, designated skills are turned on
automatically.

Existing customers who are upgrading (starting with Zurich Patch 4)

There is no change to skills that are currently enabled and
customized.

A skill is turned on if:

• The Now Assist plugin is installed, but the skill was never turned on.

• An admin has never adjusted roles for the skill.

A skill is not turned on if:

• The skill was previously turned on, and then turned off again.

• An admin has adjusted roles for the skill.

For more information, see Now Assist skills, agents, and agentic
workflows on by default.

Procedure

1. On the CMDB Workspace or in any form or list view, select the Now

Assist icon

and then select Manage duplicate CIs in the Now Assist
panel.

2. Follow the guidance on the Now Assist panel to remediate
duplication.

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

• Select an option in the Now Assist panel or enter text that
resembles one of the options. As you select options to remediate
duplication, the skill adjusts the options and guides you through
the process.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

44

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 44, 405x595px]*

```
#########%@%%%%%%%%%%%%%%%%%%%%%%%-:::::::::::::::::::::::::
*******+*#@%*#%%%%@%%#%@%#%@@%%@@%-:::::::::::::::::::::::::
#########%%%%%%%%#%%%%%%%%%%%%%%%%-:::::::::::::::::::::::::
%#############%%%%%%%%%%%%##%%##%#-:::::::::::::::::::::::::
##***#****##############%%##%###%#-:::::::::::::::::::::::::
#%%%%#%%%%########################-:::::::::::::::::::::::::
#%%%###%##%%#%######%###########%#-:::::::::::::::::::::::::
#%%#*******+********#*#******%##%#-:::::::::::::::::::::::::
###########**#*******##%%%%##%%%%#-:::::::::::::::::::::::::
#########%%##########%%%%%%%%%%%%#-:::::::::::::::::::::::::
######**********************#*#%%#-:::::::::::::::::::::::::
#####**++++++++++++=+++++++***####-:::::::::::::::::::::::::
#####**+++*+++*++++************###-:::::::::::::::::::::::::
######*************************###::::::::::::::::::::::::::
#####**+++++++++++++++++++*####%%%+++================+==+===
#####**+++++++++++++++++++#@%#%%%%%%%@@@@@@@@@@@@@@@@%@@%%@@
#####*++******************%@%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@
#*--***+*++++++++++++++++*#%%%%%%%%%%%%######%####%####%%%%%
#*-:*#********************#%%%%%%%%%%%%*++*++**+++*+****#%%%
########*****************##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
########***+++=+++++*+****#%%%%%%######################%%%%%
********######*############%%#%%#**************#**#****#%%%%
###########################%%@%%#**************#########%%%%
###########################%%#%%#********#***#********#%%%%%
###########################@=.-%#***#%%%%%%%%%%%%%%%%%%%%%%%
##########################%%%##%%%%%%%%%%%%%%%%%%%%%%%%%%%%#
###**##**#****#*##%%%%%%%%%%%%%%#*+***#************+***#%%%#
***#**********************#%%%%%#********#%###%###%%###%%%%#
::::::::::::::::::::::::::+%%%%%########################%%%#
::::::::::::::::::::::::::+%%%%%####**********+*****####%%%#
::::::::::::::::::::::::::*@%%%%########*#####**########%%%#
::::::::::::::::::::::::::*@%%%%###*************#****###%%%#
::::::::::::::::::::::::::*@%%%%####***#####*####***####%%%#
::::::::::::::::::::::::::+%%%%%##%%*******#****#***#%#*%%%#
::::::::::::::::::::::::::+%%%%%##########**+**#########%%%#
::::::::::::::::::::::::::+%%%%%#######****#**##**######%%%#
::::::::::::::::::::::::::+%%%%%#######******#****######%%%#
::::::::::::::::::::::::::+%%%%%#######*########*#######%%%#
::::::::::::::::::::::::::+@+:=%######************######%%%#
::::::::::::::::::::::::::*@*=*%%%%%%%%%%%%%%%%%%%%%%%%%%%%#
::::::::::::::::::::::::::*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
::::::::::::::::::::::::::*%%%%%%%%%%%%%%%%@@@@@@@@@@@@%%@%%
::::::::::::::::::::::::::+%%%%%%%%%%%%%%%%@@@@@@@@@@@@@%@%%
::::::::::::::::::::::::::+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
```

---
*Page 45*

• Review root causes for duplication: The analysis surveys IRE
identification rules (including criterion attributes) and discovery
sources and responds by grouping causes to suggest related
groups of tasks.

Tip:   Use this information to help prevent further creation of
duplicate CIs.

• Decide which de-duplication template to apply: Select Review
existing templates and then follow the suggestions to preview the
results of applying the template. Now Assist generates a preview
of the results of applying a template without actually running the
remediation process. You can preview the results for any existing
template. When you see the desired result in a preview, you
can specify that template and proceed with the de-duplication
process.

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

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

46

Zurich ServiceNow AI Platform Capabilities

*[Diagram Or Flowchart - Page 46, 490x703px]*

```
##*+*##############################=::::::::::::::::::::::::
##**###############################=::::::::::::::::::::::::
##**+++*++**+++*+++*++++**++*****##=::::::::::::::::::::::::
##*++++++++***********++***+******#=::::::::::::::::::::::::
##**+++++++**********************##=::::::::::::::::::::::::
##*+******+=+++++++++++++******+*##=::::::::::::::::::::::::
##*********++++++++++++++*********#=::::::::::::::::::::::::
*#*+***+++++++++++++++++++++**++**#=::::::::::::::::::::::::
##*****+++++=+++++++++++++++***+**#=::::::::::::::::::::::::
##********++++*++++++++++********##=::::::::::::::::::::::::
##********+++++++++++++++********##=::::::::::::::::::::::::
++======+##**######################********+::::::::::::::::
::::::::=##+*##############################*::::::::::::::::
::::::::=##******************************##*::::::::::::::::
::::::::=#**++++++++++++++++++++++++++****#*::::::::::::::::
::::::::=#**++++=+++++++++****************#*::::::::::::::::
::::::::=#**************++****************#*::::::::::::::::
::::::::=#*********++++++++++++++*********#*::::::::::::::::
::::::::=#**+******++***++**++**+*****++**#*::::::::::::::::
::::::::=##********++++++=+====++******++*#*::::::::::::::::
::::::::=**+++++***********+*************##*========::::::::
::::::::::::::::=#****#############################*::::::::
::::::::::::::::=##**##############################*::::::::
::::::::::::::::=##************+********+*********#*::::::::
::::::::::::::::=#**++++++++++++++*++*+*++********#*::::::::
::::::::::::::::=#**+++++++++++++*****************#*::::::::
::::::::::::::::=##****++++++++++++++++++++++***+*#*::::::::
::::::::::::::::=##******++++*++++++**+*+++=+***+*#*::::::::
::::::::::::::::=#**+***********++++**************#*::::::::
::::::::::::::::=#******+++++++++++++*++++++******#*::::::::
::::::::::::::::=#******++++++++++++++++++++******#*::::::::
::::::::::::::::=#*********+++**+++*+++++*********#*::::::::
::::::::::::::::=##********+++++++++++++++********#*::::::::
::::::::::::::::-++++++++##**#######################********
::::::::::::::::::::::::=##**###############################
::::::::::::::::::::::::=##*******************************##
::::::::::::::::::::::::=##*++++++++++++++++++++++********##
::::::::::::::::::::::::=##*++++++************************##
::::::::::::::::::::::::=#***********++++++++++***********##
::::::::::::::::::::::::=#***********+++++++++++**********#*
::::::::::::::::::::::::=#***********+++++++++++**********##
::::::::::::::::::::::::=#**+********==+++++++++*******++*##
::::::::::::::::::::::::=##******************************###
```

---
*Page 47*

What to do next

•

To learn more about using the Now Assist panel, see Working in the Now
Assist panel.

• To start over, select Reset conversation in the More menu (

).

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

47

Zurich ServiceNow AI Platform Capabilities

*[Figure Or Illustration - Page 47, 338x471px]*

```
#%%%###%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%%-::::::::
#%%#+*#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%-::::::::
#%%%##%######################%##################%%%-::::::::
#%##********************************************#%%-::::::::
#%#**+==+=*=++++========+++=+=============+++***#%%-::::::::
#%#**+++++++++++++*++++++++++++*++++++++++*+****#%%-::::::::
#%#**++++++++++++++++++=*+++++=**+++++++++*+****#%%-::::::::
#%#**==++=====+*********************************#%%-::::::::
#%#******+**************************************#%%-::::::::
###*********************************************###-::::::::
###**==+=+*+++**********************************###-::::::::
*##**+*+++*+++************************+*********###-::::::::
*#***===+++++++==++==++=+=*+====++++===++++*+=+*###-::::::::
*#***+++++++++++********************************###-::::::::
*****++=++++++*+*********************************##-::::::::
*****===+==++==+*==========++=*******************##-::::::::
*##**++++++++++++**+++***************************##-::::::::
###**=+++++++*++++*+++***************************##-::::::::
###**===+==+++==+==+++=++====*===****************##-::::::::
###**++++++++*++++++*+++++++++*+*****************##-::::::::
###**========+======+++=======*=+***************###-::::::::
###***************+***+*++*+*+*++*************+*###-::::::::
###*+************+===++===+======+************+*###-::::::::
###*********************************************###-::::::::
---------****#**###################################*********
:::::::::*##*+*#############################################
::::::::-####*##############################################
::::::::-###*********************************************###
::::::::-###**==++=+++=+++=+=++=+=+*==+++++*+===++=+*****###
::::::::-###**++++++**+++++++++++*+*++*++++*+************###
::::::::-###**=++++==+=*=+==++=+=*+=++=====++************###
::::::::-###*********************************************###
::::::::-*##**+***+=++*+=++*++++++++++++++=+*++++++***+**###
::::::::-*##**+****++++++++++==+=++++++++++++=+++++***+***##
::::::::-*#****++++**********++********************+++****##
::::::::-*#***+******+++++++*++++++++*++++++++++******+***##
::::::::-*#***+******++++++++++++++++*++++=+++++******+***#*
::::::::-*#****++++++***************************++++++****##
::::::::-*#***+*********++++++++++++*++++++++*********+**###
::::::::-###**+*********++++++++++++*+=++++++*********+**###
::::::::-###*********************************************###
```

---
*Page 48*

Warning:   If you reset the conversation, all existing messages are
deleted and an entirely new conversation starts. To learn more
about using the Now Assist panel, see Working in the Now Assist
panel.

• See how IRE detects duplicate CIs and generates de-duplication tasks.

• See how to manage and remediate the de-duplication tasks by using
de-duplication templates.

Related concepts

• Duplicate CIs remediation

• Detecting duplicate CIs

• View CMDB Health Dashboard

Related topics

• Now Assist panel

## Fix SGC import set issues with the Now Assist SGC
## diagnosis skill

To reduce debugging and resolution time and effort, the Service
Graph Connector diagnosis skill generates summaries of errors and
recommendations for resolving processing errors with SGC import sets.

Before you begin

Enable the Service Graph Connector diagnosis skill as described in
Configure the Service Graph Connector diagnosis skill.

Role required: cmdb_inst_admin and now_assist_panel_user

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

About this task

When a Now Assist for SGC skill is enabled, the Now Assist icon

appears in the SGC Central view of the CMDB Workspace. To learn more,
see Diagnose a processing error in SGC Central.

To learn more about using the Now Assist panel, see Working in the Now
Assist panel.

Important:   This Now Assist skill is now turned on by default. The
skill will be automatically available to appropriate role users for the
application. The new default behavior works as follows:

New customers

When you install a Now Assist product, designated skills are turned on
automatically.

Existing customers who are upgrading (starting with Zurich Patch 4)

There is no change to skills that are currently enabled and
customized.

A skill is turned on if:

• The Now Assist plugin is installed, but the skill was never turned on.

• An admin has never adjusted roles for the skill.

A skill is not turned on if:

• The skill was previously turned on, and then turned off again.

• An admin has adjusted roles for the skill.

For more information, see Now Assist skills, agents, and agentic
workflows on by default.

Procedure

1. Navigate to Workspaces > CMDB Workspace.

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

2. Select the Now Assist icon

to open the Now Assist panel and then
select or enter Diagnose a Service Graph Connector.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

50

Zurich ServiceNow AI Platform Capabilities

*[Vertical Diagram Or Sidebar - Page 50, 294x598px]*

```
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%###%%%%%#%%%##%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%%%%###%%
%++=+++*#=+++++++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+#%%%%++#%%
%################%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%%%%##%%%
%###########################################################
%%#####################%##%#############################%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%############%############%####%#%###%####%######%%%%%%%
%%%%#++++++++=+*+#==+++++++=+++=*+++**=+*%===+++=+++#%%%%%%%
%%%%%##########%##***#################%##%##########%%%%%%%%
%%%%%%%%%%%%%%%%%%%#=++*#=+*+++++=+*+#%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%##################%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%###%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%#+*#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%##%%%%%%%%%%%%%%
%%*=#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%#################################################%%%%%%
##*****************************************************####%
#***===++===++=*++==+*=*=+===+*+++++*=+===+*+++++=******###%
#****++**++++++*+++++*+*++++=+*=++++*++++++*=+++++******###%
#***+++++=+*=++==+++=***********************************###%
#***+++++++*++++++=+************************************###%
##**#######*########***********************************####%
###*##**###*#***##*************************************####%
#***=++*+++*+***++***+++*++++***+++*+++*++*+**++********####
#***+==*-=+==++====+*==+*======*==++======*+*===+*******####
#***++**++*****+++*+++*****+*+*****+*+*+****************####
#***=======*======*+=+=*+=====+=-*====*+==+*************####
#*******+++*******+***+*++*****++***++****++************####
*****=**=+===-=======*=++===+===+=++========+***********####
********++**++*****+************************************####
********=+====+===+===+*********************************####
#*******++***+******++*********+*+**********************####
#****=**=+=======+*=======-==*=====*********************####
#*******++*++***++********+*****++***+******************####
#****=**=====*=+*=========+==+=*=-===--==***************####
#*******++**+*********+***************+*****************####
#****=**========*=+++=-======+**************************####
#*******+*******************+***************************####
#****=**===============*+=================+*************####
##******************************************************####
############################################################
#########***********************************************####
#########**##++++++***+***++**+*+*++*+*+*++****+*++**##**###
#########**##*+++=+++++*+*+++*+++**+++++***+++++++++*##**###
#########********************+*+********++******+***++++*###
############################**##+***+*+***+******+++**#**###
############################**##+*+++++**+++++=+**++*##**###
*****************************+*+***********************+####
**#*+***+*+*++**********+**+***##*+*##*+**+**********##**###
###**##*+++**++++++++++*++++=+*##*+*##*+++++**++++++*##**###
####***************************************************+####
######################*+##*+*************************##**###
######################**##*+++++++++++*+++++++++++++*##**###
############################################################
#**##########################*#####*#*****************#*****
**%#####%*######%*###########%%%%%%%%%%%%%%%%%%%%%%%%####%#+
**%++*++#**+*++*#+*+*+*+*#++*##%%%%%%%%%%%%%%%%%%%%%%####%#+
**#########################################################*
#**********************************************************#
```

---
*Page 51*

3. Begin the diagnostic process by entering the connector name,
specific data source, or import-set number of a Service Graph
Connector.

Note:   If Now Assist doesn't recognize the entered text, it displays
a list of the Service Graph Connectors installed on your instance
by their discovery source names, such as SG-Infoblox. You can
then select a connector for further diagnosis.

Option
Description

Connector name
Service Graph Connector name
to diagnose.

The Now Assist for SGC displays
the connector name in the
discovery source format, such
as SG-Infoblox. However,
you can enter any text
that is associated with the
connector name, for example,
Service Graph Connector
for Infoblox, Infoblox, or
SG-Infoblox.

After you enter a connector
name, you can select a
data source that is associated
with the connector, followed
by a failed import set that
is associated with the data
source. Based on the inputs, the
latest failed import set number
is displayed. Alternatively, you
can select to view other failed
import sets, if available. If no
failed import sets are available,
you can enter a different
connector name, data source,
or import set number.

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

Option
Description

Data source name
Data source name for a
connector to diagnose. For
example, SG-Infoblox IP
Address.

After entering a data source
that is associated with a
connector, you can select
a failed import set that is
associated with the data
source. Based on the inputs,
the import set number that

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

52

Zurich ServiceNow AI Platform Capabilities

*[Vertical Diagram Or Sidebar - Page 52, 294x606px]*

```
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%%%%##%%%
%+++****#=******+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+#%%%%*+#%%
%*******#********%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%##%%%%#*#%%
%###########################################################
%##################################%%%%%%%%%%%%%%%%%%%%#####
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%####################%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%##%%%%%%%%#**+*+*****+**********#%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#**-===+===-==-=====**#%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#**++++*++++++++++++**#%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%######################%%%
%%%%%#%%%%%%%%%%%%%%%%%##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%#***%%%%%%%%%%%%%%%%###%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%*=#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%####%%%%%%%%%%%%%
%#*****************************************************#%%%%
%#**==+==++++*==+=*+=+==+++++++++++++=++++==+=**********#%%%
#***+++++++++*++++*+++++++++++++++++*+++**++++**********###%
#***++++++++++++++++==++=*++*=++++=+++*+++++++++********####
#***++++++++++++++*++++=+*++*++=+++++-++++++++++********###%
#******************************************************####%
###########################################################%
###################*************************************###%
###################**===+*+++=++=+=+++*==++=+=+=++++++**###%
##################***====++===========*==*+===========***###
###################*************************************####
############################################################
###***######################################################
##+-+*######################################################
****************############################################
********************#*#*##*#*###*#*#*##*#**#***####****#####
****++****************+*++*********************+********####
#***=+===*=============*====++=========*======*===+*****####
#***++++****++*+*+****+++*+***+**+********+*+******+****####
#***+===++=====-=====*==++===========*=====*========+***####
#****+*****++***+********+**+***************+++*********####
#***======*====++=======*=========*=====*======*********####
#*******************++++*++++++++++++++++**+************####
#***=========++====+=+====+============+=++=====********####
#***********************+*+*+***************************####
#***=====++=====+========*===++=======++=-==+***********####
#****************************************++*************####
#*******************************************************####
#********************+**********************************####
#***=*========+===-*======*====++=======*========********###
#***********+********+*****+**+**+***********************###
#***=========++=====*====*=====*======*=======+=+********###
#******++************************************************###
****+*********************+****++*******************+***####
#***+******===++=+++++++*=+====+=====+=+===+==+******+**####
#***+******++++=-+++++++*++++++*++++++++++++*++******+**####
#*******************************************************####
############################################################
############################################################
###############################################***********##
#*########################################################**
**%**#**%***#####*###**#*#*##%%%%%%%%%%%%%%%%%%%%%%%%####%%+
**%*****#*******#********#***##%%%%%%%%%%%%%%%%%%%%%%%###%%+
**#########################################################*
#######*####*##*#################################*********##
************************************************************
```

---
*Page 53*

Option
Description

was last processed with errors
is displayed. Alternatively, you
can choose to view other failed
import sets. If no failed import
sets are available, you can
select a different data source
for the connector.

Import set
Import set number to diagnose.
For example, CISET0010075.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

53

Zurich ServiceNow AI Platform Capabilities

*[Figure Or Illustration - Page 53, 288x526px]*

```
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
#+*****##+#******%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#*%%%%#++#%
#*+++++****+++*+*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#*%%%%%**%%
%%%%%%%%%%%%%%%%%#################################%#####%###
############################################################
%##*****************************************************#%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%##*#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%#+=#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%########################################################%%%
#***++**+****+***++****++********++**********************%%%
#***===+====-==++====*+===--========+*===========********#%%
#***********++*************++*********+**********+++*****#%%
#**+=======*====++=========+====*+=======+*==========+***#%%
#***+***************************************+************#%%
#**+======*=========+*==+*-+========+=====*=========+****#%%
#**************+************+*********+*******+*+++******###
#**+====*======-===+*=====*==========*====-=+======+*****###
#********************+*********+**********+**************###
############################################################
############################################################
###################**+**+***************++***************###
##################***====+======-=-===+=-=+-==-=-=====+**###
###################**++++**+++++++++++*++**++++++++++++**###
####################*************************####*####***###
############################################################
##**+*######################################################
#*==*#**####################################################
****************############################################
********************************************************####
****+++++*+++*++++++++=*+=++**+++++++++*++*+++*++++******###
#***+*==+*+=+=+=+======*+=+=+*=++====+=*++==+=+++==******###
#***=+++*++*++*+++****+=+*=+++++++**+**++*+++++**+**+****###
#***==+=*+=+=========*+=++======+====*+=+==++=====+==****###
#***++**+**++*+*+*++***+*++*++**++****+*****+++**********###
#***=====++=+==*+=======*+======+=*=====++=====+*********###
#***+*******+****+**++++++++++++++++++++++*++**++********###
#***=========++===+*=+====*++===+=+===+++=*=====+********###
#******+****************+*++++*+*************************###
#***=====+======+========*===++======+=*=--==************###
#*****************************************+**************###
#********************************************************###
#********************+***+*******************************###
#***=+=======++===-*======*=====+=======*+======-+*******###
#***********+********+*****+*****+***********************###
#***=========++=====*====*=====*+=====++=========*********##
#******+*************************************************###
****+******+**************+****++********************+***###
***+******+===++=+++++++*=+====+=====+=+===+=+=******++**###
#**++*****++++==-+++++++*++++++++++++++++++++*+******+***###
#********************************************************###
############################################################
```

---
*Page 54*

Option
Description

After entering an import set
number, you can view the error
summary that is associated with
that import set. If the import set
was processed without errors, a
message indicating no errors is
displayed.

4. (Optional) Analyze other issues for the import set or other import set
failures for the selected data source.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

54

Zurich ServiceNow AI Platform Capabilities

*[Figure Or Illustration - Page 54, 282x428px]*

```
#############################%%%%###########################
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
#**######+####*#*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#*%%%%#**#
*++++++**++++++++#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#*%%%%#**#
%%%##%%%#%#########################################%#####%%#
############################################################
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%#########################################################%%
#**+++++*++++++*+****=++++*++*+*+++++*+++*****************%%
#**====---=======*==+====+====-+=====---=+****************#%
#**++***++****++**+*******************+*******************#%
#**========-===-===***************************************#%
#***+*****************************************************#%
%%########################################################%%
%%%%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%#***#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%##%%%%%%%%%%%%%
%#++#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
##******#*#*#****#**#**#**********#*********************####
#**+=+*+=+++++++*==++**+=++++++++++++**+++++++++++********##
#***+=+*====-=++*=+==+*====-=+=====+=*+==+==+=+===********##
#***+*++**+*+++******++****+++****+*++++****+**+**+=++****##
#**========*==+==*====+=+===+===+*+=======*+======+=+=+***##
#***+**+*************************+++***+****++******+*****##
#**=======*=======+=+*===*==+-===+==+=====++===-=====+****##
#**************+******************+****+**+******+++******##
#**+====+======-====*=====++=========++====-=*======+*****##
**********************************************************##
#**#########################################################
################################*###########################
##*************###############***++*+*+++++*+*+*+*+*+++***##
***************###############**+=+===-+===-=====-===+-+**##
*********#####################***++++++*+*+++++++++++*+***##
###############################***************************##
############################################################
##**+#######################################################
#*==*#######################################################
############################################################
##*******************************************************###
#**++****++*********+*****+++++++=++++++++++++++*****++***##
#**++==++====-=========-++++====*=+===+=====+++=*=-====***##
#*****++*****++********+****+*****+***********************##
#**+===-++=-=======++=====*==========*********************##
#*********************************************************##
############################################################
```

---
*Page 55*

5. (Optional) If no other import set issues are observed within a data
source, analyze a different data source for the connector.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

55

Zurich ServiceNow AI Platform Capabilities

*[Figure Or Illustration - Page 55, 294x292px]*

```
******************************************************######
**##*#######################################################
##**+#######################################################
##++########################################################
############################################################
#******************************************************#####
#***===+++===*+++++*===++*=++*==++++++++++*+++++*++=****####
#***+++++++++*=++++*+++++*+++*+++==+++++++*++++=*+++****####
#***==++*+=+==++++=+++*+++++++++=***********************####
#***++++*++++++++++++=*+++++++++************************####
#**************************************************+****####
#**+*************+++++*++*++*+*+++*++++*************+***####
#**+*************++==+===*+======+++===*************+***####
#**+*************++++++++++++++++++++++*************+***####
#**++************+++===+++===+=====+++=*************+***####
*****++++++++++++++++++++++++++++*++++++++++++++++++****####
#**++****+***********************+**+***************+***###*
***+****=+======++=========*====*=====+====*====****+***####
***+********+*++****++*+*****+++**+*+*+*************+***####
#**+********====*===========+*==++-=========+*******+***####
#***+*******++++++++++++++++++++*++++++++++++******++***####
#*****************************************************######
############################################################
############################################################
############################################################
*#%############%############%%%%%%%%%%%%%%%%%%%%%%%%%###%%##
*%#+*++*#++++++#*+**++++#*++###%%%%%%%%%%%%%%%%%%%%%%#*##%##
*##%#####%#####################%%%%%%%%%%%%%%%%%%%%%%#%%%%##
############################################################
```

---
*Page 56*

Result

Now Assist triggers the diagnosis process for the failed import sets.
The Now Assist panel includes two key sections: Issue and Diagnosis
recommendation, focused on the latest issue. The recommendation for

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

56

Zurich ServiceNow AI Platform Capabilities

*[Vertical Diagram Or Sidebar - Page 56, 292x586px]*

```
#############################%%%%###########################
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%***#####+###**#*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*#%%%%*+#%%
%**++++*#++++++++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%##%%%%#*#%%
%%%%#%%%#%##################################################
%###########################################################
%##****************************************************##%%%
%#**==+*=+++++++*==++*+==++++++++==++*+++++++++++*******#%%%
%#**+++*+++=-+++*+++=*++++=-++++++++**=++++++++++*******#%%%
%#**+++=+++*+=+++*++++++++++++++*++++++++**+++++++==+***#%%%
%#**=++++++*+++=+*+++++++=++++++*++==++=+**==+=++++++***#%%%
%#**++++++*+++*+++++**+++*+*++++++++**++++++++++++++****#%%%
%#**====+=*=+++=+++=+*+=+*=*====+++++=+==**+++==+=++****#%%%
%#**++++*++*++++++++*++++**+++++*++++*++++++*++++++*****#%%%
%#**====*++==++====+*=+===*+=========*+=====*==+==++****#%%%
%#***#****#**#*#*#****#*#***#****###***#*****##********##%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#*###*****#*##*#**##****#*##%%%
#############################**++++*+++++==*=+*+++++++***###
############################***====++===+=+*==========***###
#############################****************************###
############################################################
#####*######################################################
##*=**######################################################
##*+########################################################
############################################################
#*******************************************************####
#***-============-++====*=========++=====++===*+===+****####
#***+++++++++****=*****+*+**++***************+**********####
#***===+==*==+=======**=+===+====*===++=======***********###
************++****+**+****+*+**+****+***+**+*+***********###
****=========*+=====*************************************###
#***+**++++****++*++************************************####
#############*#######*************************#######**#####
###***######################################################
##+-*#######################################################
###*########################################################
###**#***************##********#***********************#####
#***++++***+++*******++***+****++***********************####
#***+========++====++====*+==*====--=======*=+***********###
#****++++******+**+**+*************=****++***************###
#***============++=====++=========*===+*====+************###
#******************+*************************************###
#***=+============++*************************************###
#********************************************************###
#***+*********************+**************************+***###
#***+**********************====**********************+***###
#***+**********************++++**********************+***###
#****++++++++++++++++++++++++++++++++++++++++++++++++****###
****+************************************************+***###
#***+**********************====**********************+***###
#***+**********************++++**********************+**####
#*******************************************************####
############################################################
############################################################
############################################################
###########################################################*
*#%**#**#+*****##+*******#**#%%%%%%%%%%%%%%%%%%%%%%%%%###%%#
*##*****#*******#********#***###%%%%%%%%%%%%%%%%%%%%%%###%%#
###########################################################*
```

---
*Page 57*

an issue is based on a knowledge article matched using AI Search. A link
to the knowledge article is provided in the Source section for additional
guidance.

For issues related to Identification and Reconciliation engine (IRE), the
panel provides a detailed summary of errors, including import errors, flow
errors, partial payloads, and incomplete payloads.

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

Diagnosis results for the failed import set with processing errors

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

58

Zurich ServiceNow AI Platform Capabilities

*[Vertical Diagram Or Sidebar - Page 58, 282x690px]*

```
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%+**#*###**##****#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*#%%%%*+*
%**+++++#++++++++*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*#%%%%#*#
%%%%#%%%#%%#%%%%%##################################%########
%###########################################################
%#**+++++++++*+++++*++*++*+**+**+++++*+++***+=*++++*******#%
%#**=+===+=*=*==+==*=====+=+*===========+=*===*==+=+******#%
%#*************+*****+************************************#%
%#**-=============-++==+===+=+****************************#%
%#********************************************************#%
%#********************************************************#%
%#**++***************************************+*******+****#%
%#**=======*=====++===-*======-==-+============++======***#%
%#***+*****************+*++*+**+***++***++++**+***********#%
%#**======*+===+=====+*====*======-=====*+-=**************#%
%#**++++*+*****+**********+******+*+*++*******************#%
%#**==+==-=====+******************************************#%
##**++++++*+++++******************************************##
###*######***********************************************###
####**######################################################
##*-+*######################################################
###*########################################################
############################################################
##********************************************************##
#***--=-=--+***********************************************#
#****+*++++************************************************#
#*********************************************************##
#***+++****+**+**********************+*+************+*****##
#***=+==-++-=-===*=======+-++=++====--==-++==++======*****##
#********************+***+*********************************#
****======*============++-====*===*=++--========***********#
***********+****+**+**+************************************#
****==+=+====*===++====*====+*+-=====*+===+=====***********#
****+**+*+*+****+****++***+*+*+++**++++++*+**+*+***********#
****=+=====*+===*+=====*+===++==+===**=====+*==************#
#***+++++++***++*++++++**+++*+*+++++*****+++*++***********##
#***=++==+++===+=+==++*==+=+*******************************#
****+++++++++++++*++++*++++********************************#
****+===++=+=+++++=+++==++==+++=+=+=+=++=++++*==+=+=++*****#
*****=+++++++=+++++++=+*++++++=+++=++=+=++++***+==++=+*****#
****++++*++++**+++++++++++++*++=+++++=++++*++++************#
****==+=+=+==++===++====++==+*=+====+====+=+=+=************#
****++*********=+*+++**+**++*******************************#
****===+======*=+====+=+*+========--==*********************#
***********************************************************#
***********************************************************#
****-==+++++++++==*++=+++++=++=+=+++==+==++++**************#
****=====--=======+++========================**************#
***********************************************************#
***********************************************************#
#***-+=+=++==+*==+=+*=-=-==+=++=++++==++*=++*==+==*********#
#***++++++++++*+++++*++++++++*++++++++++*+++*+++++*********#
#***=+==+=+*++++*++++==*+++++++++++++*==+++=*++*+++++******#
#***++==+++*+++=*+=++++*++=+*++++=++**++=++=*++*++=++******#
#***+++*+++*++*++*+=+++*+++=+++*+++*++**+=+**++=+++++++****#
#***===*=++===*=+++=+==*+======++===+=*+===++=======+==***##
#***++******+*++****+*****++*+*****+**++**+****************#
#***=======+=++===*+====*+======*+=======+=+**************##
#*********************************************************##
#**********************************************************#
#**********************************************************#
#***=+++*+++++*********************************************#
#***======+===+********************************************#
#***+*+*****************+******++++*+**********************#
#***=---+==-------=---++-=--=-==-=---+=---=---=************#
#*****++*+++*+++++++++++++*++++++**+++++++*++++++++********#
#***=-==--==+=-====+-==---+----=-+==-===-=*=-=----+********#
****+++++++++++++++++++++++++++++++++++++++++++++++********#
#***=-=-=-+==========**************************************#
#***+++++++++++++++++**************************************#
#*********************************************************##
##******************************************************####
```

---
*Page 59*

Diagnosis results for the failed import set with IRE issues

Tip:   To restart the conversation, select the reset icon (

). If
you reset the conversation, the existing messages are deleted, and
a new conversation is started. You won't be able to access the
previous messages after you reset the conversation. To learn more
about how to use the Now Assist panel, see Now Assist panel.

What to do next

You can hover over the diagnosis recommendation and select an option
to provide feedback or copy the summary text to the clipboard.

Optional actions

Action
Procedure

Provide feedback

If you think that the summary was

helpful, select thumbs-up

. If

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

59

Zurich ServiceNow AI Platform Capabilities

*[Figure Or Illustration - Page 59, 296x374px]*

```
%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@
%***#####**##**#*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*#%%%%**%@@
%**+++++#++++++++#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*#%%%%**%@@
%%%%#%%%#%%##############################################%@@
%########################################################%@@
%%%####################################################%%%@@
%#*****************************************************#%%@@
%#**=*===+====*=====*=====+=========*====+==*===+*******#%@@
%#**+*++++++++*++*++*++*+++++++++*+=**++++++**++********#%@@
%#**=+===-+===-=+=====-===******************************#%@@
%#******++***+*+*+*+++++********************************#%@@
%######################################################%%%@@
%##****************************************************#%%@@
%#**=*=++++++=+==*+=+++++==+*+=+++++++++=+=*+=+*********#%@@
%#**+*++++++++*+**++++++++++*=+++++++++++++*+++*********#%@@
%#**=+++++++++==+==+*=+++=*===++=+*==+++=++=**===++=+***#%@@
##**+*++++++++++++++*+++++*+*+*+++*+*++*++++****++++****#%@@
#***+=+=*+=+=+*+=++++++=+*=+++++=+=+==+=++*+==++++******##@@
##**++++*+++++*++++++++++*==++++=+++++*+++*+++++++******##@@
###*##*#*##*##*##########*############*###*#######*****###@@
##****************************************************####@@
##**+++++==+*++++*+++++=+=*==+++=++=+******************###@@
##**+++++==+++++++++++++++*+*==+++=++******************###@@
#******************************************************###@@
#******************************************************###@@
#***+++++==+*=++++**+++=+++*+=+=++=+++=+++=************###@@
#***+++++++++++++=*+++=++++*+++++*++=++++++************###@@
#******************************************************###@@
*******************************************************###@@
****+++++==+*+++*++=++++=*+++==++++=*+=+=*+=+++=++==***###@@
#***++++++++++++++++++++++++++++++++*++++*+*+=++++++***###@@
##*****************************************************###@@
##*****************************************************###@@
#***+++++==+*+++*++++=+++++=+*+=*=*==+++=++==**********###@@
##**+++++++++++++++++++++++++*++*+*+*++*+++++**********###@@
###*****#*#********#***#*#*****#*#*#*##*#####********#####@@
```

---
*Page 60*

Action
Procedure

you think that the summary wasn’t

helpful, select thumbs-down

.

This feedback improves the
Agentic AI model and can
help to improve the future
versions of this skill. The system
gathers the feedback on each
generated summary and stores
it in the Agentic AI logs
(sys_generative_ai_log_list.do).

Copy the summary

Select the copy to clipboard icon

to use the content for another
purpose, such as pasting into an
email.

Related concepts

• CMDB Workspace store app

## Now Assist for CMDB reference

Reference topics provide additional information about the property
settings that you use to configure and administer Now Assist for CMDB.

• Property settings for Now Assist for CMDB

List of system properties for the agents used by Now Assist for CMDB
agents.

## Property settings for Now Assist for CMDB

List of system properties for the agents used by Now Assist for CMDB
agents.

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

Property settings

Note:   All properties are in the System Property [sys_properties] table.
To open the sys_properties table, enter sys_properties.list in
the navigation filter.

System properties for Now Assist for CMDB

Property
Description

sn_cmdb_gen_ai.principal_class_su
ggestion_period

The CMDB data governance
manager agentic workflow
collects and aggregates
Change Management, Incident
Management, and Problem
Management data for the
specified CI class. If the workflow
collects too much data, the
process might fail. This property
limits the duration in days (integer
starting at zero) for the query.

For instances with little data, set
the property to a high value like
36000 (10 years). For instances with
a large store of data, experiment
to determine a practical value.

• Type: integer

• Default value: 90 (Query all tasks
that were updated in the last 90
days.)

sn_cmdb_gen_ai.suggested_princi
pal_classes_limit

Specifies the maximum number
of principal classes that are
suggested to the user.

Type: integer

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

Property
Description

sn_cmdb_gen_ai.health_ownership
_evaluation_period

If the CMDB data governance
manager agentic workflow
collects too much health data,
the process might fail. This property
limits the duration in days (integer
starting at zero) for the query.

• Type: integer

• Default value: 90 (Query all tasks
that were updated in the last 90
days.)

sn_cmdb_gen_ai.ownership_evalu
ation_health_score_thresholds

The CMDB data governance
agentic workflow determines the
percentage of CIs in the specified
class that have values for the
Managed by group attribute. The
process returns health scores of
Poor, Average, or Healthy.

The default setting of 40,60,80
returns a score of Poor for less than
40%, Average for 60%-79%, and
Healthy for 80% and above.

Default: 40,60,80

sn_nowassist_sgc.ai_search_kb_sco
re_threshold

Enter the relevancy score threshold
for AI Search, used when retrieving
knowledge articles with Now Assist
for SGC.

• Type: integer

• Default value: 5

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

Property
Description

sn_nowassist_sgc.kb_filtering_strate
gy

Set the knowledge article filtering
strategy for retrieving articles with
Now Assist for SGC.

• Type: choice list

• Default value: strict

Choices:

strict

Retrieves knowledge articles from
the selected connector category
only.

non-strict

Retrieves knowledge articles
from other connector categories,
in addition to the selected
connector category.

Terms of Use Privacy Statement

PDF generated on January 16, 2026

©2026 ServiceNow. All rights reserved.

ServiceNow, the ServiceNow logo, Now, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc., in the
United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are
associated.

63

Zurich ServiceNow AI Platform Capabilities

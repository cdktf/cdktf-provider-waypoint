# `project` Submodule <a name="`project` Submodule" id="@cdktf/provider-waypoint.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="@cdktf/provider-waypoint.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project waypoint_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.Project.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import project

project.Project(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_source_git: ProjectDataSourceGit,
  project_name: str,
  app_status_poll_seconds: typing.Union[int, float] = None,
  git_auth_basic: ProjectGitAuthBasic = None,
  git_auth_ssh: ProjectGitAuthSsh = None,
  project_variables: typing.Union[IResolvable, typing.List[ProjectProjectVariables]] = None,
  remote_runners_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.dataSourceGit">data_source_git</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a></code> | Configuration of Git repository where waypoint.hcl file is stored. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.projectName">project_name</a></code> | <code>str</code> | The name of the Waypoint project. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.appStatusPollSeconds">app_status_poll_seconds</a></code> | <code>typing.Union[int, float]</code> | Application status poll interval in seconds. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.gitAuthBasic">git_auth_basic</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a></code> | Basic authentication details for Git consisting of `username` and `password`. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.gitAuthSsh">git_auth_ssh</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a></code> | SSH authentication details for Git. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.projectVariables">project_variables</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>]]</code> | List of variables in Key/value pairs associated with the Waypoint Project. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.remoteRunnersEnabled">remote_runners_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable remote runners for project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source_git`<sup>Required</sup> <a name="data_source_git" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.dataSourceGit"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a>

Configuration of Git repository where waypoint.hcl file is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#data_source_git Project#data_source_git}

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.projectName"></a>

- *Type:* str

The name of the Waypoint project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#project_name Project#project_name}

---

##### `app_status_poll_seconds`<sup>Optional</sup> <a name="app_status_poll_seconds" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.appStatusPollSeconds"></a>

- *Type:* typing.Union[int, float]

Application status poll interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#app_status_poll_seconds Project#app_status_poll_seconds}

---

##### `git_auth_basic`<sup>Optional</sup> <a name="git_auth_basic" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.gitAuthBasic"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a>

Basic authentication details for Git consisting of `username` and `password`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_auth_basic Project#git_auth_basic}

---

##### `git_auth_ssh`<sup>Optional</sup> <a name="git_auth_ssh" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.gitAuthSsh"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a>

SSH authentication details for Git.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_auth_ssh Project#git_auth_ssh}

---

##### `project_variables`<sup>Optional</sup> <a name="project_variables" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.projectVariables"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>]]

List of variables in Key/value pairs associated with the Waypoint Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#project_variables Project#project_variables}

---

##### `remote_runners_enabled`<sup>Optional</sup> <a name="remote_runners_enabled" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.remoteRunnersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable remote runners for project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#remote_runners_enabled Project#remote_runners_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.putDataSourceGit">put_data_source_git</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.putGitAuthBasic">put_git_auth_basic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.putGitAuthSsh">put_git_auth_ssh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.putProjectVariables">put_project_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.resetAppStatusPollSeconds">reset_app_status_poll_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.resetGitAuthBasic">reset_git_auth_basic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.resetGitAuthSsh">reset_git_auth_ssh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.resetProjectVariables">reset_project_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.resetRemoteRunnersEnabled">reset_remote_runners_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-waypoint.project.Project.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-waypoint.project.Project.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.project.Project.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.Project.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-waypoint.project.Project.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-waypoint.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-waypoint.project.Project.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-waypoint.project.Project.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-waypoint.project.Project.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-waypoint.project.Project.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-waypoint.project.Project.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-waypoint.project.Project.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-waypoint.project.Project.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-waypoint.project.Project.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-waypoint.project.Project.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-waypoint.project.Project.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-waypoint.project.Project.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-waypoint.project.Project.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-waypoint.project.Project.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-waypoint.project.Project.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-waypoint.project.Project.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.project.Project.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.project.Project.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-waypoint.project.Project.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-waypoint.project.Project.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-waypoint.project.Project.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-waypoint.project.Project.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_data_source_git` <a name="put_data_source_git" id="@cdktf/provider-waypoint.project.Project.putDataSourceGit"></a>

```python
def put_data_source_git(
  file_change_signal: str = None,
  git_path: str = None,
  git_poll_interval_seconds: typing.Union[int, float] = None,
  git_ref: str = None,
  git_url: str = None,
  ignore_changes_outside_path: typing.Union[bool, IResolvable] = None
) -> None
```

###### `file_change_signal`<sup>Optional</sup> <a name="file_change_signal" id="@cdktf/provider-waypoint.project.Project.putDataSourceGit.parameter.fileChangeSignal"></a>

- *Type:* str

Indicates signal to be sent to any applications when their config files change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#file_change_signal Project#file_change_signal}

---

###### `git_path`<sup>Optional</sup> <a name="git_path" id="@cdktf/provider-waypoint.project.Project.putDataSourceGit.parameter.gitPath"></a>

- *Type:* str

Path in git repository when waypoint.hcl file is stored in a sub-directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_path Project#git_path}

---

###### `git_poll_interval_seconds`<sup>Optional</sup> <a name="git_poll_interval_seconds" id="@cdktf/provider-waypoint.project.Project.putDataSourceGit.parameter.gitPollIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

Interval at which Waypoint should poll git repository for changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_poll_interval_seconds Project#git_poll_interval_seconds}

---

###### `git_ref`<sup>Optional</sup> <a name="git_ref" id="@cdktf/provider-waypoint.project.Project.putDataSourceGit.parameter.gitRef"></a>

- *Type:* str

Git repository ref containing waypoint.hcl file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_ref Project#git_ref}

---

###### `git_url`<sup>Optional</sup> <a name="git_url" id="@cdktf/provider-waypoint.project.Project.putDataSourceGit.parameter.gitUrl"></a>

- *Type:* str

Url of git repository storing the waypoint.hcl file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_url Project#git_url}

---

###### `ignore_changes_outside_path`<sup>Optional</sup> <a name="ignore_changes_outside_path" id="@cdktf/provider-waypoint.project.Project.putDataSourceGit.parameter.ignoreChangesOutsidePath"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Waypoint ignores changes outside path storing waypoint.hcl file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#ignore_changes_outside_path Project#ignore_changes_outside_path}

---

##### `put_git_auth_basic` <a name="put_git_auth_basic" id="@cdktf/provider-waypoint.project.Project.putGitAuthBasic"></a>

```python
def put_git_auth_basic(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-waypoint.project.Project.putGitAuthBasic.parameter.password"></a>

- *Type:* str

Git password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#password Project#password}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-waypoint.project.Project.putGitAuthBasic.parameter.username"></a>

- *Type:* str

Git username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#username Project#username}

---

##### `put_git_auth_ssh` <a name="put_git_auth_ssh" id="@cdktf/provider-waypoint.project.Project.putGitAuthSsh"></a>

```python
def put_git_auth_ssh(
  ssh_private_key: str,
  git_user: str = None,
  passphrase: str = None
) -> None
```

###### `ssh_private_key`<sup>Required</sup> <a name="ssh_private_key" id="@cdktf/provider-waypoint.project.Project.putGitAuthSsh.parameter.sshPrivateKey"></a>

- *Type:* str

Private key to authenticate to Git.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#ssh_private_key Project#ssh_private_key}

---

###### `git_user`<sup>Optional</sup> <a name="git_user" id="@cdktf/provider-waypoint.project.Project.putGitAuthSsh.parameter.gitUser"></a>

- *Type:* str

Git user associated with private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_user Project#git_user}

---

###### `passphrase`<sup>Optional</sup> <a name="passphrase" id="@cdktf/provider-waypoint.project.Project.putGitAuthSsh.parameter.passphrase"></a>

- *Type:* str

Passphrase to use with private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#passphrase Project#passphrase}

---

##### `put_project_variables` <a name="put_project_variables" id="@cdktf/provider-waypoint.project.Project.putProjectVariables"></a>

```python
def put_project_variables(
  value: typing.Union[IResolvable, typing.List[ProjectProjectVariables]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.Project.putProjectVariables.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>]]

---

##### `reset_app_status_poll_seconds` <a name="reset_app_status_poll_seconds" id="@cdktf/provider-waypoint.project.Project.resetAppStatusPollSeconds"></a>

```python
def reset_app_status_poll_seconds() -> None
```

##### `reset_git_auth_basic` <a name="reset_git_auth_basic" id="@cdktf/provider-waypoint.project.Project.resetGitAuthBasic"></a>

```python
def reset_git_auth_basic() -> None
```

##### `reset_git_auth_ssh` <a name="reset_git_auth_ssh" id="@cdktf/provider-waypoint.project.Project.resetGitAuthSsh"></a>

```python
def reset_git_auth_ssh() -> None
```

##### `reset_project_variables` <a name="reset_project_variables" id="@cdktf/provider-waypoint.project.Project.resetProjectVariables"></a>

```python
def reset_project_variables() -> None
```

##### `reset_remote_runners_enabled` <a name="reset_remote_runners_enabled" id="@cdktf/provider-waypoint.project.Project.resetRemoteRunnersEnabled"></a>

```python
def reset_remote_runners_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-waypoint.project.Project.isConstruct"></a>

```python
from cdktf_cdktf_provider_waypoint import project

project.Project.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.project.Project.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-waypoint.project.Project.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_waypoint import project

project.Project.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-waypoint.project.Project.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_waypoint import project

project.Project.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-waypoint.project.Project.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_waypoint import project

project.Project.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.project.Project.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-waypoint.project.Project.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Project to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-waypoint.project.Project.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Project that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.project.Project.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Project to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.dataSourceGit">data_source_git</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference">ProjectDataSourceGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthBasic">git_auth_basic</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference">ProjectGitAuthBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthSsh">git_auth_ssh</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference">ProjectGitAuthSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectVariables">project_variables</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList">ProjectProjectVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.appStatusPollSecondsInput">app_status_poll_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.dataSourceGitInput">data_source_git_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthBasicInput">git_auth_basic_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthSshInput">git_auth_ssh_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectNameInput">project_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectVariablesInput">project_variables_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabledInput">remote_runners_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.appStatusPollSeconds">app_status_poll_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectName">project_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabled">remote_runners_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-waypoint.project.Project.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-waypoint.project.Project.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.project.Project.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-waypoint.project.Project.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-waypoint.project.Project.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-waypoint.project.Project.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-waypoint.project.Project.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.project.Project.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.project.Project.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-waypoint.project.Project.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-waypoint.project.Project.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.project.Project.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.project.Project.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.project.Project.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source_git`<sup>Required</sup> <a name="data_source_git" id="@cdktf/provider-waypoint.project.Project.property.dataSourceGit"></a>

```python
data_source_git: ProjectDataSourceGitOutputReference
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference">ProjectDataSourceGitOutputReference</a>

---

##### `git_auth_basic`<sup>Required</sup> <a name="git_auth_basic" id="@cdktf/provider-waypoint.project.Project.property.gitAuthBasic"></a>

```python
git_auth_basic: ProjectGitAuthBasicOutputReference
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference">ProjectGitAuthBasicOutputReference</a>

---

##### `git_auth_ssh`<sup>Required</sup> <a name="git_auth_ssh" id="@cdktf/provider-waypoint.project.Project.property.gitAuthSsh"></a>

```python
git_auth_ssh: ProjectGitAuthSshOutputReference
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference">ProjectGitAuthSshOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.project.Project.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_variables`<sup>Required</sup> <a name="project_variables" id="@cdktf/provider-waypoint.project.Project.property.projectVariables"></a>

```python
project_variables: ProjectProjectVariablesList
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList">ProjectProjectVariablesList</a>

---

##### `app_status_poll_seconds_input`<sup>Optional</sup> <a name="app_status_poll_seconds_input" id="@cdktf/provider-waypoint.project.Project.property.appStatusPollSecondsInput"></a>

```python
app_status_poll_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_source_git_input`<sup>Optional</sup> <a name="data_source_git_input" id="@cdktf/provider-waypoint.project.Project.property.dataSourceGitInput"></a>

```python
data_source_git_input: typing.Union[ProjectDataSourceGit, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a>, cdktf.IResolvable]

---

##### `git_auth_basic_input`<sup>Optional</sup> <a name="git_auth_basic_input" id="@cdktf/provider-waypoint.project.Project.property.gitAuthBasicInput"></a>

```python
git_auth_basic_input: typing.Union[ProjectGitAuthBasic, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a>, cdktf.IResolvable]

---

##### `git_auth_ssh_input`<sup>Optional</sup> <a name="git_auth_ssh_input" id="@cdktf/provider-waypoint.project.Project.property.gitAuthSshInput"></a>

```python
git_auth_ssh_input: typing.Union[ProjectGitAuthSsh, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a>, cdktf.IResolvable]

---

##### `project_name_input`<sup>Optional</sup> <a name="project_name_input" id="@cdktf/provider-waypoint.project.Project.property.projectNameInput"></a>

```python
project_name_input: str
```

- *Type:* str

---

##### `project_variables_input`<sup>Optional</sup> <a name="project_variables_input" id="@cdktf/provider-waypoint.project.Project.property.projectVariablesInput"></a>

```python
project_variables_input: typing.Union[IResolvable, typing.List[ProjectProjectVariables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>]]

---

##### `remote_runners_enabled_input`<sup>Optional</sup> <a name="remote_runners_enabled_input" id="@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabledInput"></a>

```python
remote_runners_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `app_status_poll_seconds`<sup>Required</sup> <a name="app_status_poll_seconds" id="@cdktf/provider-waypoint.project.Project.property.appStatusPollSeconds"></a>

```python
app_status_poll_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-waypoint.project.Project.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

---

##### `remote_runners_enabled`<sup>Required</sup> <a name="remote_runners_enabled" id="@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabled"></a>

```python
remote_runners_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-waypoint.project.Project.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectConfig <a name="ProjectConfig" id="@cdktf/provider-waypoint.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import project

project.ProjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_source_git: ProjectDataSourceGit,
  project_name: str,
  app_status_poll_seconds: typing.Union[int, float] = None,
  git_auth_basic: ProjectGitAuthBasic = None,
  git_auth_ssh: ProjectGitAuthSsh = None,
  project_variables: typing.Union[IResolvable, typing.List[ProjectProjectVariables]] = None,
  remote_runners_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.dataSourceGit">data_source_git</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a></code> | Configuration of Git repository where waypoint.hcl file is stored. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.projectName">project_name</a></code> | <code>str</code> | The name of the Waypoint project. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.appStatusPollSeconds">app_status_poll_seconds</a></code> | <code>typing.Union[int, float]</code> | Application status poll interval in seconds. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthBasic">git_auth_basic</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a></code> | Basic authentication details for Git consisting of `username` and `password`. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthSsh">git_auth_ssh</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a></code> | SSH authentication details for Git. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.projectVariables">project_variables</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>]]</code> | List of variables in Key/value pairs associated with the Waypoint Project. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.remoteRunnersEnabled">remote_runners_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable remote runners for project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.project.ProjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.project.ProjectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-waypoint.project.ProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-waypoint.project.ProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.project.ProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.project.ProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.project.ProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source_git`<sup>Required</sup> <a name="data_source_git" id="@cdktf/provider-waypoint.project.ProjectConfig.property.dataSourceGit"></a>

```python
data_source_git: ProjectDataSourceGit
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a>

Configuration of Git repository where waypoint.hcl file is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#data_source_git Project#data_source_git}

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-waypoint.project.ProjectConfig.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

The name of the Waypoint project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#project_name Project#project_name}

---

##### `app_status_poll_seconds`<sup>Optional</sup> <a name="app_status_poll_seconds" id="@cdktf/provider-waypoint.project.ProjectConfig.property.appStatusPollSeconds"></a>

```python
app_status_poll_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Application status poll interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#app_status_poll_seconds Project#app_status_poll_seconds}

---

##### `git_auth_basic`<sup>Optional</sup> <a name="git_auth_basic" id="@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthBasic"></a>

```python
git_auth_basic: ProjectGitAuthBasic
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a>

Basic authentication details for Git consisting of `username` and `password`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_auth_basic Project#git_auth_basic}

---

##### `git_auth_ssh`<sup>Optional</sup> <a name="git_auth_ssh" id="@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthSsh"></a>

```python
git_auth_ssh: ProjectGitAuthSsh
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a>

SSH authentication details for Git.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_auth_ssh Project#git_auth_ssh}

---

##### `project_variables`<sup>Optional</sup> <a name="project_variables" id="@cdktf/provider-waypoint.project.ProjectConfig.property.projectVariables"></a>

```python
project_variables: typing.Union[IResolvable, typing.List[ProjectProjectVariables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>]]

List of variables in Key/value pairs associated with the Waypoint Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#project_variables Project#project_variables}

---

##### `remote_runners_enabled`<sup>Optional</sup> <a name="remote_runners_enabled" id="@cdktf/provider-waypoint.project.ProjectConfig.property.remoteRunnersEnabled"></a>

```python
remote_runners_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable remote runners for project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#remote_runners_enabled Project#remote_runners_enabled}

---

### ProjectDataSourceGit <a name="ProjectDataSourceGit" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import project

project.ProjectDataSourceGit(
  file_change_signal: str = None,
  git_path: str = None,
  git_poll_interval_seconds: typing.Union[int, float] = None,
  git_ref: str = None,
  git_url: str = None,
  ignore_changes_outside_path: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.fileChangeSignal">file_change_signal</a></code> | <code>str</code> | Indicates signal to be sent to any applications when their config files change. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPath">git_path</a></code> | <code>str</code> | Path in git repository when waypoint.hcl file is stored in a sub-directory. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPollIntervalSeconds">git_poll_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Interval at which Waypoint should poll git repository for changes. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitRef">git_ref</a></code> | <code>str</code> | Git repository ref containing waypoint.hcl file. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitUrl">git_url</a></code> | <code>str</code> | Url of git repository storing the waypoint.hcl file. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.ignoreChangesOutsidePath">ignore_changes_outside_path</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Waypoint ignores changes outside path storing waypoint.hcl file. |

---

##### `file_change_signal`<sup>Optional</sup> <a name="file_change_signal" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.fileChangeSignal"></a>

```python
file_change_signal: str
```

- *Type:* str

Indicates signal to be sent to any applications when their config files change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#file_change_signal Project#file_change_signal}

---

##### `git_path`<sup>Optional</sup> <a name="git_path" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPath"></a>

```python
git_path: str
```

- *Type:* str

Path in git repository when waypoint.hcl file is stored in a sub-directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_path Project#git_path}

---

##### `git_poll_interval_seconds`<sup>Optional</sup> <a name="git_poll_interval_seconds" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPollIntervalSeconds"></a>

```python
git_poll_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Interval at which Waypoint should poll git repository for changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_poll_interval_seconds Project#git_poll_interval_seconds}

---

##### `git_ref`<sup>Optional</sup> <a name="git_ref" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitRef"></a>

```python
git_ref: str
```

- *Type:* str

Git repository ref containing waypoint.hcl file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_ref Project#git_ref}

---

##### `git_url`<sup>Optional</sup> <a name="git_url" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitUrl"></a>

```python
git_url: str
```

- *Type:* str

Url of git repository storing the waypoint.hcl file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_url Project#git_url}

---

##### `ignore_changes_outside_path`<sup>Optional</sup> <a name="ignore_changes_outside_path" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.ignoreChangesOutsidePath"></a>

```python
ignore_changes_outside_path: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Waypoint ignores changes outside path storing waypoint.hcl file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#ignore_changes_outside_path Project#ignore_changes_outside_path}

---

### ProjectGitAuthBasic <a name="ProjectGitAuthBasic" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import project

project.ProjectGitAuthBasic(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.password">password</a></code> | <code>str</code> | Git password. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.username">username</a></code> | <code>str</code> | Git username. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.password"></a>

```python
password: str
```

- *Type:* str

Git password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#password Project#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.username"></a>

```python
username: str
```

- *Type:* str

Git username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#username Project#username}

---

### ProjectGitAuthSsh <a name="ProjectGitAuthSsh" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import project

project.ProjectGitAuthSsh(
  ssh_private_key: str,
  git_user: str = None,
  passphrase: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.sshPrivateKey">ssh_private_key</a></code> | <code>str</code> | Private key to authenticate to Git. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.gitUser">git_user</a></code> | <code>str</code> | Git user associated with private key. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.passphrase">passphrase</a></code> | <code>str</code> | Passphrase to use with private key. |

---

##### `ssh_private_key`<sup>Required</sup> <a name="ssh_private_key" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.sshPrivateKey"></a>

```python
ssh_private_key: str
```

- *Type:* str

Private key to authenticate to Git.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#ssh_private_key Project#ssh_private_key}

---

##### `git_user`<sup>Optional</sup> <a name="git_user" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.gitUser"></a>

```python
git_user: str
```

- *Type:* str

Git user associated with private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_user Project#git_user}

---

##### `passphrase`<sup>Optional</sup> <a name="passphrase" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.passphrase"></a>

```python
passphrase: str
```

- *Type:* str

Passphrase to use with private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#passphrase Project#passphrase}

---

### ProjectProjectVariables <a name="ProjectProjectVariables" id="@cdktf/provider-waypoint.project.ProjectProjectVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import project

project.ProjectProjectVariables(
  name: str,
  value: str,
  sensitive: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#name Project#name}. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#value Project#value}. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables.property.sensitive">sensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#sensitive Project#sensitive}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#name Project#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#value Project#value}.

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.property.sensitive"></a>

```python
sensitive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#sensitive Project#sensitive}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectDataSourceGitOutputReference <a name="ProjectDataSourceGitOutputReference" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import project

project.ProjectDataSourceGitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetFileChangeSignal">reset_file_change_signal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitPath">reset_git_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitPollIntervalSeconds">reset_git_poll_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitRef">reset_git_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitUrl">reset_git_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetIgnoreChangesOutsidePath">reset_ignore_changes_outside_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_change_signal` <a name="reset_file_change_signal" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetFileChangeSignal"></a>

```python
def reset_file_change_signal() -> None
```

##### `reset_git_path` <a name="reset_git_path" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitPath"></a>

```python
def reset_git_path() -> None
```

##### `reset_git_poll_interval_seconds` <a name="reset_git_poll_interval_seconds" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitPollIntervalSeconds"></a>

```python
def reset_git_poll_interval_seconds() -> None
```

##### `reset_git_ref` <a name="reset_git_ref" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitRef"></a>

```python
def reset_git_ref() -> None
```

##### `reset_git_url` <a name="reset_git_url" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitUrl"></a>

```python
def reset_git_url() -> None
```

##### `reset_ignore_changes_outside_path` <a name="reset_ignore_changes_outside_path" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetIgnoreChangesOutsidePath"></a>

```python
def reset_ignore_changes_outside_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignalInput">file_change_signal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPathInput">git_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSecondsInput">git_poll_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRefInput">git_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrlInput">git_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePathInput">ignore_changes_outside_path_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignal">file_change_signal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPath">git_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSeconds">git_poll_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRef">git_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrl">git_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePath">ignore_changes_outside_path</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_change_signal_input`<sup>Optional</sup> <a name="file_change_signal_input" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignalInput"></a>

```python
file_change_signal_input: str
```

- *Type:* str

---

##### `git_path_input`<sup>Optional</sup> <a name="git_path_input" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPathInput"></a>

```python
git_path_input: str
```

- *Type:* str

---

##### `git_poll_interval_seconds_input`<sup>Optional</sup> <a name="git_poll_interval_seconds_input" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSecondsInput"></a>

```python
git_poll_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `git_ref_input`<sup>Optional</sup> <a name="git_ref_input" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRefInput"></a>

```python
git_ref_input: str
```

- *Type:* str

---

##### `git_url_input`<sup>Optional</sup> <a name="git_url_input" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrlInput"></a>

```python
git_url_input: str
```

- *Type:* str

---

##### `ignore_changes_outside_path_input`<sup>Optional</sup> <a name="ignore_changes_outside_path_input" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePathInput"></a>

```python
ignore_changes_outside_path_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_change_signal`<sup>Required</sup> <a name="file_change_signal" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignal"></a>

```python
file_change_signal: str
```

- *Type:* str

---

##### `git_path`<sup>Required</sup> <a name="git_path" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPath"></a>

```python
git_path: str
```

- *Type:* str

---

##### `git_poll_interval_seconds`<sup>Required</sup> <a name="git_poll_interval_seconds" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSeconds"></a>

```python
git_poll_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `git_ref`<sup>Required</sup> <a name="git_ref" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRef"></a>

```python
git_ref: str
```

- *Type:* str

---

##### `git_url`<sup>Required</sup> <a name="git_url" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrl"></a>

```python
git_url: str
```

- *Type:* str

---

##### `ignore_changes_outside_path`<sup>Required</sup> <a name="ignore_changes_outside_path" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePath"></a>

```python
ignore_changes_outside_path: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ProjectDataSourceGit, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a>, cdktf.IResolvable]

---


### ProjectGitAuthBasicOutputReference <a name="ProjectGitAuthBasicOutputReference" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import project

project.ProjectGitAuthBasicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ProjectGitAuthBasic, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a>, cdktf.IResolvable]

---


### ProjectGitAuthSshOutputReference <a name="ProjectGitAuthSshOutputReference" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import project

project.ProjectGitAuthSshOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resetGitUser">reset_git_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resetPassphrase">reset_passphrase</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_git_user` <a name="reset_git_user" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resetGitUser"></a>

```python
def reset_git_user() -> None
```

##### `reset_passphrase` <a name="reset_passphrase" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resetPassphrase"></a>

```python
def reset_passphrase() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUserInput">git_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphraseInput">passphrase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKeyInput">ssh_private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUser">git_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphrase">passphrase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKey">ssh_private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `git_user_input`<sup>Optional</sup> <a name="git_user_input" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUserInput"></a>

```python
git_user_input: str
```

- *Type:* str

---

##### `passphrase_input`<sup>Optional</sup> <a name="passphrase_input" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphraseInput"></a>

```python
passphrase_input: str
```

- *Type:* str

---

##### `ssh_private_key_input`<sup>Optional</sup> <a name="ssh_private_key_input" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKeyInput"></a>

```python
ssh_private_key_input: str
```

- *Type:* str

---

##### `git_user`<sup>Required</sup> <a name="git_user" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUser"></a>

```python
git_user: str
```

- *Type:* str

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphrase"></a>

```python
passphrase: str
```

- *Type:* str

---

##### `ssh_private_key`<sup>Required</sup> <a name="ssh_private_key" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKey"></a>

```python
ssh_private_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ProjectGitAuthSsh, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a>, cdktf.IResolvable]

---


### ProjectProjectVariablesList <a name="ProjectProjectVariablesList" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import project

project.ProjectProjectVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProjectProjectVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ProjectProjectVariables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>]]

---


### ProjectProjectVariablesOutputReference <a name="ProjectProjectVariablesOutputReference" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import project

project.ProjectProjectVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resetSensitive">reset_sensitive</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sensitive` <a name="reset_sensitive" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resetSensitive"></a>

```python
def reset_sensitive() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitiveInput">sensitive_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitive">sensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sensitive_input`<sup>Optional</sup> <a name="sensitive_input" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitiveInput"></a>

```python
sensitive_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sensitive`<sup>Required</sup> <a name="sensitive" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitive"></a>

```python
sensitive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ProjectProjectVariables, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>, cdktf.IResolvable]

---




# `waypoint_runner_profile`

Refer to the Terraform Registory for docs: [`waypoint_runner_profile`](https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile).

# `runnerProfile` Submodule <a name="`runnerProfile` Submodule" id="@cdktf/provider-waypoint.runnerProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RunnerProfile <a name="RunnerProfile" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile waypoint_runner_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import runner_profile

runnerProfile.RunnerProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  plugin_type: str,
  default: typing.Union[bool, IResolvable] = None,
  environment_variables: typing.Mapping[str] = None,
  oci_url: str = None,
  plugin_config: str = None,
  plugin_config_format: str = None,
  target_runner_id: str = None,
  target_runner_labels: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the runner profile. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.pluginType">plugin_type</a></code> | <code>str</code> | Plugin type for runner i.e docker / kubernetes / aws-ecs. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if this runner profile is the default for any new projects. The default is false. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Any environment variables that should be exposed to the on demand runner. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.ociUrl">oci_url</a></code> | <code>str</code> | oci_url is the OCI image that will be used to boot the on demand runner. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.pluginConfig">plugin_config</a></code> | <code>str</code> | Plugin config is the configuration for the plugin that is created. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.pluginConfigFormat">plugin_config_format</a></code> | <code>str</code> | Config format specifies the format of plugin_config. Valid values are HCL or JSON. The default is HCL. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.targetRunnerId">target_runner_id</a></code> | <code>str</code> | The ID of the target runner for this profile. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.targetRunnerLabels">target_runner_labels</a></code> | <code>typing.Mapping[str]</code> | A map of labels on target runners. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.name"></a>

- *Type:* str

The name of the runner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#name RunnerProfile#name}

---

##### `plugin_type`<sup>Required</sup> <a name="plugin_type" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.pluginType"></a>

- *Type:* str

Plugin type for runner i.e docker / kubernetes / aws-ecs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_type RunnerProfile#plugin_type}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.default"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if this runner profile is the default for any new projects. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#default RunnerProfile#default}

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

Any environment variables that should be exposed to the on demand runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#environment_variables RunnerProfile#environment_variables}

---

##### `oci_url`<sup>Optional</sup> <a name="oci_url" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.ociUrl"></a>

- *Type:* str

oci_url is the OCI image that will be used to boot the on demand runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#oci_url RunnerProfile#oci_url}

---

##### `plugin_config`<sup>Optional</sup> <a name="plugin_config" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.pluginConfig"></a>

- *Type:* str

Plugin config is the configuration for the plugin that is created.

It is usually HCL and is decoded like the other plugins, and is plugin specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_config RunnerProfile#plugin_config}

---

##### `plugin_config_format`<sup>Optional</sup> <a name="plugin_config_format" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.pluginConfigFormat"></a>

- *Type:* str

Config format specifies the format of plugin_config. Valid values are HCL or JSON. The default is HCL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_config_format RunnerProfile#plugin_config_format}

---

##### `target_runner_id`<sup>Optional</sup> <a name="target_runner_id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.targetRunnerId"></a>

- *Type:* str

The ID of the target runner for this profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#target_runner_id RunnerProfile#target_runner_id}

---

##### `target_runner_labels`<sup>Optional</sup> <a name="target_runner_labels" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.targetRunnerLabels"></a>

- *Type:* typing.Mapping[str]

A map of labels on target runners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#target_runner_labels RunnerProfile#target_runner_labels}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetOciUrl">reset_oci_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetPluginConfig">reset_plugin_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetPluginConfigFormat">reset_plugin_config_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetTargetRunnerId">reset_target_runner_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetTargetRunnerLabels">reset_target_runner_labels</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_default` <a name="reset_default" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_oci_url` <a name="reset_oci_url" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetOciUrl"></a>

```python
def reset_oci_url() -> None
```

##### `reset_plugin_config` <a name="reset_plugin_config" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetPluginConfig"></a>

```python
def reset_plugin_config() -> None
```

##### `reset_plugin_config_format` <a name="reset_plugin_config_format" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetPluginConfigFormat"></a>

```python
def reset_plugin_config_format() -> None
```

##### `reset_target_runner_id` <a name="reset_target_runner_id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetTargetRunnerId"></a>

```python
def reset_target_runner_id() -> None
```

##### `reset_target_runner_labels` <a name="reset_target_runner_labels" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetTargetRunnerLabels"></a>

```python
def reset_target_runner_labels() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RunnerProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_waypoint import runner_profile

runnerProfile.RunnerProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_waypoint import runner_profile

runnerProfile.RunnerProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_waypoint import runner_profile

runnerProfile.RunnerProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_waypoint import runner_profile

runnerProfile.RunnerProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RunnerProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RunnerProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RunnerProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RunnerProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.defaultInput">default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrlInput">oci_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormatInput">plugin_config_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigInput">plugin_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginTypeInput">plugin_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerIdInput">target_runner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabelsInput">target_runner_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfig">plugin_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormat">plugin_config_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginType">plugin_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerId">target_runner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabels">target_runner_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.defaultInput"></a>

```python
default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `oci_url_input`<sup>Optional</sup> <a name="oci_url_input" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrlInput"></a>

```python
oci_url_input: str
```

- *Type:* str

---

##### `plugin_config_format_input`<sup>Optional</sup> <a name="plugin_config_format_input" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormatInput"></a>

```python
plugin_config_format_input: str
```

- *Type:* str

---

##### `plugin_config_input`<sup>Optional</sup> <a name="plugin_config_input" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigInput"></a>

```python
plugin_config_input: str
```

- *Type:* str

---

##### `plugin_type_input`<sup>Optional</sup> <a name="plugin_type_input" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginTypeInput"></a>

```python
plugin_type_input: str
```

- *Type:* str

---

##### `target_runner_id_input`<sup>Optional</sup> <a name="target_runner_id_input" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerIdInput"></a>

```python
target_runner_id_input: str
```

- *Type:* str

---

##### `target_runner_labels_input`<sup>Optional</sup> <a name="target_runner_labels_input" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabelsInput"></a>

```python
target_runner_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `plugin_config`<sup>Required</sup> <a name="plugin_config" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfig"></a>

```python
plugin_config: str
```

- *Type:* str

---

##### `plugin_config_format`<sup>Required</sup> <a name="plugin_config_format" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormat"></a>

```python
plugin_config_format: str
```

- *Type:* str

---

##### `plugin_type`<sup>Required</sup> <a name="plugin_type" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginType"></a>

```python
plugin_type: str
```

- *Type:* str

---

##### `target_runner_id`<sup>Required</sup> <a name="target_runner_id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerId"></a>

```python
target_runner_id: str
```

- *Type:* str

---

##### `target_runner_labels`<sup>Required</sup> <a name="target_runner_labels" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabels"></a>

```python
target_runner_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RunnerProfileConfig <a name="RunnerProfileConfig" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import runner_profile

runnerProfile.RunnerProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  plugin_type: str,
  default: typing.Union[bool, IResolvable] = None,
  environment_variables: typing.Mapping[str] = None,
  oci_url: str = None,
  plugin_config: str = None,
  plugin_config_format: str = None,
  target_runner_id: str = None,
  target_runner_labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.name">name</a></code> | <code>str</code> | The name of the runner profile. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginType">plugin_type</a></code> | <code>str</code> | Plugin type for runner i.e docker / kubernetes / aws-ecs. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if this runner profile is the default for any new projects. The default is false. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Any environment variables that should be exposed to the on demand runner. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.ociUrl">oci_url</a></code> | <code>str</code> | oci_url is the OCI image that will be used to boot the on demand runner. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfig">plugin_config</a></code> | <code>str</code> | Plugin config is the configuration for the plugin that is created. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfigFormat">plugin_config_format</a></code> | <code>str</code> | Config format specifies the format of plugin_config. Valid values are HCL or JSON. The default is HCL. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerId">target_runner_id</a></code> | <code>str</code> | The ID of the target runner for this profile. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerLabels">target_runner_labels</a></code> | <code>typing.Mapping[str]</code> | A map of labels on target runners. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the runner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#name RunnerProfile#name}

---

##### `plugin_type`<sup>Required</sup> <a name="plugin_type" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginType"></a>

```python
plugin_type: str
```

- *Type:* str

Plugin type for runner i.e docker / kubernetes / aws-ecs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_type RunnerProfile#plugin_type}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if this runner profile is the default for any new projects. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#default RunnerProfile#default}

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Any environment variables that should be exposed to the on demand runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#environment_variables RunnerProfile#environment_variables}

---

##### `oci_url`<sup>Optional</sup> <a name="oci_url" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

oci_url is the OCI image that will be used to boot the on demand runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#oci_url RunnerProfile#oci_url}

---

##### `plugin_config`<sup>Optional</sup> <a name="plugin_config" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfig"></a>

```python
plugin_config: str
```

- *Type:* str

Plugin config is the configuration for the plugin that is created.

It is usually HCL and is decoded like the other plugins, and is plugin specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_config RunnerProfile#plugin_config}

---

##### `plugin_config_format`<sup>Optional</sup> <a name="plugin_config_format" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfigFormat"></a>

```python
plugin_config_format: str
```

- *Type:* str

Config format specifies the format of plugin_config. Valid values are HCL or JSON. The default is HCL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_config_format RunnerProfile#plugin_config_format}

---

##### `target_runner_id`<sup>Optional</sup> <a name="target_runner_id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerId"></a>

```python
target_runner_id: str
```

- *Type:* str

The ID of the target runner for this profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#target_runner_id RunnerProfile#target_runner_id}

---

##### `target_runner_labels`<sup>Optional</sup> <a name="target_runner_labels" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerLabels"></a>

```python
target_runner_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of labels on target runners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#target_runner_labels RunnerProfile#target_runner_labels}

---




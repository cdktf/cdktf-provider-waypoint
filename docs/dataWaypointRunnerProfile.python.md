# `data_waypoint_runner_profile`

Refer to the Terraform Registory for docs: [`data_waypoint_runner_profile`](https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/runner_profile).

# `dataWaypointRunnerProfile` Submodule <a name="`dataWaypointRunnerProfile` Submodule" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWaypointRunnerProfile <a name="DataWaypointRunnerProfile" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/runner_profile waypoint_runner_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_runner_profile

dataWaypointRunnerProfile.DataWaypointRunnerProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The id of the Runner profile. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.id"></a>

- *Type:* str

The id of the Runner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/runner_profile#id DataWaypointRunnerProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_runner_profile

dataWaypointRunnerProfile.DataWaypointRunnerProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_runner_profile

dataWaypointRunnerProfile.DataWaypointRunnerProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_runner_profile

dataWaypointRunnerProfile.DataWaypointRunnerProfile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.environmentVariables">environment_variables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.pluginConfig">plugin_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.pluginConfigFormat">plugin_config_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.pluginType">plugin_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.targetRunnerId">target_runner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.targetRunnerLabels">target_runner_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.default"></a>

```python
default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.environmentVariables"></a>

```python
environment_variables: StringMap
```

- *Type:* cdktf.StringMap

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `plugin_config`<sup>Required</sup> <a name="plugin_config" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.pluginConfig"></a>

```python
plugin_config: str
```

- *Type:* str

---

##### `plugin_config_format`<sup>Required</sup> <a name="plugin_config_format" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.pluginConfigFormat"></a>

```python
plugin_config_format: str
```

- *Type:* str

---

##### `plugin_type`<sup>Required</sup> <a name="plugin_type" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.pluginType"></a>

```python
plugin_type: str
```

- *Type:* str

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `target_runner_id`<sup>Required</sup> <a name="target_runner_id" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.targetRunnerId"></a>

```python
target_runner_id: str
```

- *Type:* str

---

##### `target_runner_labels`<sup>Required</sup> <a name="target_runner_labels" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.targetRunnerLabels"></a>

```python
target_runner_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataWaypointRunnerProfileConfig <a name="DataWaypointRunnerProfileConfig" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_runner_profile

dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.id">id</a></code> | <code>str</code> | The id of the Runner profile. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The id of the Runner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/runner_profile#id DataWaypointRunnerProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




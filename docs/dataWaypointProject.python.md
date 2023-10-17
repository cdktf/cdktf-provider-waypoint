# `data_waypoint_project`

Refer to the Terraform Registory for docs: [`data_waypoint_project`](https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project).

# `dataWaypointProject` Submodule <a name="`dataWaypointProject` Submodule" id="@cdktf/provider-waypoint.dataWaypointProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWaypointProject <a name="DataWaypointProject" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project waypoint_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_project

dataWaypointProject.DataWaypointProject(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.projectName">project_name</a></code> | <code>str</code> | The name of the Waypoint project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.projectName"></a>

- *Type:* str

The name of the Waypoint project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#project_name DataWaypointProject#project_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataWaypointProject resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isConstruct"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_project

dataWaypointProject.DataWaypointProject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_project

dataWaypointProject.DataWaypointProject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_project

dataWaypointProject.DataWaypointProject.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_project

dataWaypointProject.DataWaypointProject.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataWaypointProject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataWaypointProject to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataWaypointProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataWaypointProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.applications">applications</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.appStatusPollSeconds">app_status_poll_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.dataSourceGit">data_source_git</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference">DataWaypointProjectDataSourceGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.gitAuthBasic">git_auth_basic</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference">DataWaypointProjectGitAuthBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.gitAuthSsh">git_auth_ssh</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference">DataWaypointProjectGitAuthSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectVariables">project_variables</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList">DataWaypointProjectProjectVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.remoteRunnersEnabled">remote_runners_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectNameInput">project_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectName">project_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.applications"></a>

```python
applications: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_status_poll_seconds`<sup>Required</sup> <a name="app_status_poll_seconds" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.appStatusPollSeconds"></a>

```python
app_status_poll_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_source_git`<sup>Required</sup> <a name="data_source_git" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.dataSourceGit"></a>

```python
data_source_git: DataWaypointProjectDataSourceGitOutputReference
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference">DataWaypointProjectDataSourceGitOutputReference</a>

---

##### `git_auth_basic`<sup>Required</sup> <a name="git_auth_basic" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.gitAuthBasic"></a>

```python
git_auth_basic: DataWaypointProjectGitAuthBasicOutputReference
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference">DataWaypointProjectGitAuthBasicOutputReference</a>

---

##### `git_auth_ssh`<sup>Required</sup> <a name="git_auth_ssh" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.gitAuthSsh"></a>

```python
git_auth_ssh: DataWaypointProjectGitAuthSshOutputReference
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference">DataWaypointProjectGitAuthSshOutputReference</a>

---

##### `project_variables`<sup>Required</sup> <a name="project_variables" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectVariables"></a>

```python
project_variables: DataWaypointProjectProjectVariablesList
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList">DataWaypointProjectProjectVariablesList</a>

---

##### `remote_runners_enabled`<sup>Required</sup> <a name="remote_runners_enabled" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.remoteRunnersEnabled"></a>

```python
remote_runners_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `project_name_input`<sup>Optional</sup> <a name="project_name_input" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectNameInput"></a>

```python
project_name_input: str
```

- *Type:* str

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataWaypointProjectConfig <a name="DataWaypointProjectConfig" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_project

dataWaypointProject.DataWaypointProjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.projectName">project_name</a></code> | <code>str</code> | The name of the Waypoint project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

The name of the Waypoint project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#project_name DataWaypointProject#project_name}

---

### DataWaypointProjectDataSourceGit <a name="DataWaypointProjectDataSourceGit" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGit.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_project

dataWaypointProject.DataWaypointProjectDataSourceGit()
```


### DataWaypointProjectGitAuthBasic <a name="DataWaypointProjectGitAuthBasic" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_project

dataWaypointProject.DataWaypointProjectGitAuthBasic(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.property.password">password</a></code> | <code>str</code> | Git password. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.property.username">username</a></code> | <code>str</code> | Git username. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.property.password"></a>

```python
password: str
```

- *Type:* str

Git password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#password DataWaypointProject#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.property.username"></a>

```python
username: str
```

- *Type:* str

Git username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#username DataWaypointProject#username}

---

### DataWaypointProjectGitAuthSsh <a name="DataWaypointProjectGitAuthSsh" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_project

dataWaypointProject.DataWaypointProjectGitAuthSsh(
  ssh_private_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh.property.sshPrivateKey">ssh_private_key</a></code> | <code>str</code> | Private key to authenticate to Git. |

---

##### `ssh_private_key`<sup>Required</sup> <a name="ssh_private_key" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh.property.sshPrivateKey"></a>

```python
ssh_private_key: str
```

- *Type:* str

Private key to authenticate to Git.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#ssh_private_key DataWaypointProject#ssh_private_key}

---

### DataWaypointProjectProjectVariables <a name="DataWaypointProjectProjectVariables" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_project

dataWaypointProject.DataWaypointProjectProjectVariables(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#name DataWaypointProject#name}. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#value DataWaypointProject#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#name DataWaypointProject#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#value DataWaypointProject#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataWaypointProjectDataSourceGitOutputReference <a name="DataWaypointProjectDataSourceGitOutputReference" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_project

dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.fileChangeSignal">file_change_signal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitPath">git_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitPollIntervalSeconds">git_poll_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitRef">git_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitUrl">git_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePath">ignore_changes_outside_path</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGit">DataWaypointProjectDataSourceGit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_change_signal`<sup>Required</sup> <a name="file_change_signal" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.fileChangeSignal"></a>

```python
file_change_signal: str
```

- *Type:* str

---

##### `git_path`<sup>Required</sup> <a name="git_path" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitPath"></a>

```python
git_path: str
```

- *Type:* str

---

##### `git_poll_interval_seconds`<sup>Required</sup> <a name="git_poll_interval_seconds" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitPollIntervalSeconds"></a>

```python
git_poll_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `git_ref`<sup>Required</sup> <a name="git_ref" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitRef"></a>

```python
git_ref: str
```

- *Type:* str

---

##### `git_url`<sup>Required</sup> <a name="git_url" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitUrl"></a>

```python
git_url: str
```

- *Type:* str

---

##### `ignore_changes_outside_path`<sup>Required</sup> <a name="ignore_changes_outside_path" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePath"></a>

```python
ignore_changes_outside_path: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.internalValue"></a>

```python
internal_value: DataWaypointProjectDataSourceGit
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGit">DataWaypointProjectDataSourceGit</a>

---


### DataWaypointProjectGitAuthBasicOutputReference <a name="DataWaypointProjectGitAuthBasicOutputReference" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_project

dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic">DataWaypointProjectGitAuthBasic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.internalValue"></a>

```python
internal_value: DataWaypointProjectGitAuthBasic
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic">DataWaypointProjectGitAuthBasic</a>

---


### DataWaypointProjectGitAuthSshOutputReference <a name="DataWaypointProjectGitAuthSshOutputReference" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_project

dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.gitUser">git_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.passphrase">passphrase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.sshPrivateKeyInput">ssh_private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.sshPrivateKey">ssh_private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh">DataWaypointProjectGitAuthSsh</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `git_user`<sup>Required</sup> <a name="git_user" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.gitUser"></a>

```python
git_user: str
```

- *Type:* str

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.passphrase"></a>

```python
passphrase: str
```

- *Type:* str

---

##### `ssh_private_key_input`<sup>Optional</sup> <a name="ssh_private_key_input" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.sshPrivateKeyInput"></a>

```python
ssh_private_key_input: str
```

- *Type:* str

---

##### `ssh_private_key`<sup>Required</sup> <a name="ssh_private_key" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.sshPrivateKey"></a>

```python
ssh_private_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.internalValue"></a>

```python
internal_value: DataWaypointProjectGitAuthSsh
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh">DataWaypointProjectGitAuthSsh</a>

---


### DataWaypointProjectProjectVariablesList <a name="DataWaypointProjectProjectVariablesList" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_project

dataWaypointProject.DataWaypointProjectProjectVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataWaypointProjectProjectVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables">DataWaypointProjectProjectVariables</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataWaypointProjectProjectVariables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables">DataWaypointProjectProjectVariables</a>]]

---


### DataWaypointProjectProjectVariablesOutputReference <a name="DataWaypointProjectProjectVariablesOutputReference" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import data_waypoint_project

dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.sensitive">sensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables">DataWaypointProjectProjectVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sensitive`<sup>Required</sup> <a name="sensitive" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.sensitive"></a>

```python
sensitive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataWaypointProjectProjectVariables
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables">DataWaypointProjectProjectVariables</a>

---




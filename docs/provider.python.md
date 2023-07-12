# `provider`

Refer to the Terraform Registory for docs: [`waypoint`](https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-waypoint.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaypointProvider <a name="WaypointProvider" id="@cdktf/provider-waypoint.provider.WaypointProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs waypoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.provider.WaypointProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import provider

provider.WaypointProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  host: str = None,
  token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.Initializer.parameter.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs#host WaypointProvider#host}. |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs#token WaypointProvider#token}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.provider.WaypointProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.provider.WaypointProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-waypoint.provider.WaypointProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs#alias WaypointProvider#alias}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-waypoint.provider.WaypointProvider.Initializer.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs#host WaypointProvider#host}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-waypoint.provider.WaypointProvider.Initializer.parameter.token"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs#token WaypointProvider#token}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.resetToken">reset_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-waypoint.provider.WaypointProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-waypoint.provider.WaypointProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.provider.WaypointProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.provider.WaypointProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-waypoint.provider.WaypointProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-waypoint.provider.WaypointProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-waypoint.provider.WaypointProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-waypoint.provider.WaypointProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-waypoint.provider.WaypointProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-waypoint.provider.WaypointProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-waypoint.provider.WaypointProvider.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-waypoint.provider.WaypointProvider.resetToken"></a>

```python
def reset_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-waypoint.provider.WaypointProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_waypoint import provider

provider.WaypointProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.provider.WaypointProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-waypoint.provider.WaypointProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_waypoint import provider

provider.WaypointProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.provider.WaypointProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-waypoint.provider.WaypointProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_waypoint import provider

provider.WaypointProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.provider.WaypointProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.property.token">token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-waypoint.provider.WaypointProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-waypoint.provider.WaypointProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.provider.WaypointProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-waypoint.provider.WaypointProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-waypoint.provider.WaypointProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-waypoint.provider.WaypointProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-waypoint.provider.WaypointProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-waypoint.provider.WaypointProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-waypoint.provider.WaypointProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-waypoint.provider.WaypointProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-waypoint.provider.WaypointProvider.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-waypoint.provider.WaypointProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-waypoint.provider.WaypointProvider.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-waypoint.provider.WaypointProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-waypoint.provider.WaypointProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WaypointProviderConfig <a name="WaypointProviderConfig" id="@cdktf/provider-waypoint.provider.WaypointProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.provider.WaypointProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import provider

provider.WaypointProviderConfig(
  alias: str = None,
  host: str = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProviderConfig.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs#host WaypointProvider#host}. |
| <code><a href="#@cdktf/provider-waypoint.provider.WaypointProviderConfig.property.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs#token WaypointProvider#token}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-waypoint.provider.WaypointProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs#alias WaypointProvider#alias}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-waypoint.provider.WaypointProviderConfig.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs#host WaypointProvider#host}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-waypoint.provider.WaypointProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs#token WaypointProvider#token}.

---




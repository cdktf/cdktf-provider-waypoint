# `data_waypoint_auth_method`

Refer to the Terraform Registory for docs: [`data_waypoint_auth_method`](https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/auth_method).

# `dataWaypointAuthMethod` Submodule <a name="`dataWaypointAuthMethod` Submodule" id="@cdktf/provider-waypoint.dataWaypointAuthMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWaypointAuthMethod <a name="DataWaypointAuthMethod" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/auth_method waypoint_auth_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointauthmethod"

datawaypointauthmethod.NewDataWaypointAuthMethod(scope Construct, id *string, config DataWaypointAuthMethodConfig) DataWaypointAuthMethod
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig">DataWaypointAuthMethodConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig">DataWaypointAuthMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataWaypointAuthMethod resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointauthmethod"

datawaypointauthmethod.DataWaypointAuthMethod_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointauthmethod"

datawaypointauthmethod.DataWaypointAuthMethod_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointauthmethod"

datawaypointauthmethod.DataWaypointAuthMethod_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointauthmethod"

datawaypointauthmethod.DataWaypointAuthMethod_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataWaypointAuthMethod resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataWaypointAuthMethod to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataWaypointAuthMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/auth_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataWaypointAuthMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.accessorSelector">AccessorSelector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.allowedRedirectUris">AllowedRedirectUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.auds">Auds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.claimMappings">ClaimMappings</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.discoveryCaPem">DiscoveryCaPem</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.discoveryUrl">DiscoveryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.listClaimMappings">ListClaimMappings</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.signingAlgs">SigningAlgs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccessorSelector`<sup>Required</sup> <a name="AccessorSelector" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.accessorSelector"></a>

```go
func AccessorSelector() *string
```

- *Type:* *string

---

##### `AllowedRedirectUris`<sup>Required</sup> <a name="AllowedRedirectUris" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.allowedRedirectUris"></a>

```go
func AllowedRedirectUris() *[]*string
```

- *Type:* *[]*string

---

##### `Auds`<sup>Required</sup> <a name="Auds" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.auds"></a>

```go
func Auds() *[]*string
```

- *Type:* *[]*string

---

##### `ClaimMappings`<sup>Required</sup> <a name="ClaimMappings" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.claimMappings"></a>

```go
func ClaimMappings() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DiscoveryCaPem`<sup>Required</sup> <a name="DiscoveryCaPem" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.discoveryCaPem"></a>

```go
func DiscoveryCaPem() *[]*string
```

- *Type:* *[]*string

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.discoveryUrl"></a>

```go
func DiscoveryUrl() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ListClaimMappings`<sup>Required</sup> <a name="ListClaimMappings" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.listClaimMappings"></a>

```go
func ListClaimMappings() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `SigningAlgs`<sup>Required</sup> <a name="SigningAlgs" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.signingAlgs"></a>

```go
func SigningAlgs() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWaypointAuthMethodConfig <a name="DataWaypointAuthMethodConfig" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointauthmethod"

&datawaypointauthmethod.DataWaypointAuthMethodConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Auth Method. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/auth_method#name DataWaypointAuthMethod#name}

---




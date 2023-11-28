# `dataWaypointRunnerProfile` Submodule <a name="`dataWaypointRunnerProfile` Submodule" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWaypointRunnerProfile <a name="DataWaypointRunnerProfile" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/runner_profile waypoint_runner_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointrunnerprofile"

datawaypointrunnerprofile.NewDataWaypointRunnerProfile(scope Construct, id *string, config DataWaypointRunnerProfileConfig) DataWaypointRunnerProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig">DataWaypointRunnerProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig">DataWaypointRunnerProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataWaypointRunnerProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointrunnerprofile"

datawaypointrunnerprofile.DataWaypointRunnerProfile_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointrunnerprofile"

datawaypointrunnerprofile.DataWaypointRunnerProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointrunnerprofile"

datawaypointrunnerprofile.DataWaypointRunnerProfile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointrunnerprofile"

datawaypointrunnerprofile.DataWaypointRunnerProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataWaypointRunnerProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataWaypointRunnerProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataWaypointRunnerProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/runner_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataWaypointRunnerProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.default">Default</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.environmentVariables">EnvironmentVariables</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.ociUrl">OciUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.pluginConfig">PluginConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.pluginConfigFormat">PluginConfigFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.pluginType">PluginType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.profileName">ProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.targetRunnerId">TargetRunnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.targetRunnerLabels">TargetRunnerLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.environmentVariables"></a>

```go
func EnvironmentVariables() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.ociUrl"></a>

```go
func OciUrl() *string
```

- *Type:* *string

---

##### `PluginConfig`<sup>Required</sup> <a name="PluginConfig" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.pluginConfig"></a>

```go
func PluginConfig() *string
```

- *Type:* *string

---

##### `PluginConfigFormat`<sup>Required</sup> <a name="PluginConfigFormat" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.pluginConfigFormat"></a>

```go
func PluginConfigFormat() *string
```

- *Type:* *string

---

##### `PluginType`<sup>Required</sup> <a name="PluginType" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.pluginType"></a>

```go
func PluginType() *string
```

- *Type:* *string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.profileName"></a>

```go
func ProfileName() *string
```

- *Type:* *string

---

##### `TargetRunnerId`<sup>Required</sup> <a name="TargetRunnerId" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.targetRunnerId"></a>

```go
func TargetRunnerId() *string
```

- *Type:* *string

---

##### `TargetRunnerLabels`<sup>Required</sup> <a name="TargetRunnerLabels" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.targetRunnerLabels"></a>

```go
func TargetRunnerLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWaypointRunnerProfileConfig <a name="DataWaypointRunnerProfileConfig" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointrunnerprofile"

&datawaypointrunnerprofile.DataWaypointRunnerProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.id">Id</a></code> | <code>*string</code> | The id of the Runner profile. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

The id of the Runner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/runner_profile#id DataWaypointRunnerProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




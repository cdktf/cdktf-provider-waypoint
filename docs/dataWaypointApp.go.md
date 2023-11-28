# `dataWaypointApp` Submodule <a name="`dataWaypointApp` Submodule" id="@cdktf/provider-waypoint.dataWaypointApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWaypointApp <a name="DataWaypointApp" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/app waypoint_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointapp"

datawaypointapp.NewDataWaypointApp(scope Construct, id *string, config DataWaypointAppConfig) DataWaypointApp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig">DataWaypointAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig">DataWaypointAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataWaypointApp resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointapp"

datawaypointapp.DataWaypointApp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointapp"

datawaypointapp.DataWaypointApp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointapp"

datawaypointapp.DataWaypointApp_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointapp"

datawaypointapp.DataWaypointApp_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataWaypointApp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataWaypointApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataWaypointApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataWaypointApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.fileChangeSignal">FileChangeSignal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.appNameInput">AppNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.projectNameInput">ProjectNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.appName">AppName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.projectName">ProjectName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `FileChangeSignal`<sup>Required</sup> <a name="FileChangeSignal" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.fileChangeSignal"></a>

```go
func FileChangeSignal() *string
```

- *Type:* *string

---

##### `AppNameInput`<sup>Optional</sup> <a name="AppNameInput" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.appNameInput"></a>

```go
func AppNameInput() *string
```

- *Type:* *string

---

##### `ProjectNameInput`<sup>Optional</sup> <a name="ProjectNameInput" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.projectNameInput"></a>

```go
func ProjectNameInput() *string
```

- *Type:* *string

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.appName"></a>

```go
func AppName() *string
```

- *Type:* *string

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.projectName"></a>

```go
func ProjectName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointApp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWaypointAppConfig <a name="DataWaypointAppConfig" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointapp"

&datawaypointapp.DataWaypointAppConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppName: *string,
	ProjectName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig.property.appName">AppName</a></code> | <code>*string</code> | The name of the Waypoint application. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig.property.projectName">ProjectName</a></code> | <code>*string</code> | The name of the Waypoint project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig.property.appName"></a>

```go
AppName *string
```

- *Type:* *string

The name of the Waypoint application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/app#app_name DataWaypointApp#app_name}

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-waypoint.dataWaypointApp.DataWaypointAppConfig.property.projectName"></a>

```go
ProjectName *string
```

- *Type:* *string

The name of the Waypoint project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/app#project_name DataWaypointApp#project_name}

---




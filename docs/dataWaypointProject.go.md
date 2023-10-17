# `data_waypoint_project`

Refer to the Terraform Registory for docs: [`data_waypoint_project`](https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project).

# `dataWaypointProject` Submodule <a name="`dataWaypointProject` Submodule" id="@cdktf/provider-waypoint.dataWaypointProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWaypointProject <a name="DataWaypointProject" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project waypoint_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointproject"

datawaypointproject.NewDataWaypointProject(scope Construct, id *string, config DataWaypointProjectConfig) DataWaypointProject
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig">DataWaypointProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig">DataWaypointProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataWaypointProject resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointproject"

datawaypointproject.DataWaypointProject_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointproject"

datawaypointproject.DataWaypointProject_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointproject"

datawaypointproject.DataWaypointProject_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointproject"

datawaypointproject.DataWaypointProject_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataWaypointProject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataWaypointProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataWaypointProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataWaypointProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.applications">Applications</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.appStatusPollSeconds">AppStatusPollSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.dataSourceGit">DataSourceGit</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference">DataWaypointProjectDataSourceGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.gitAuthBasic">GitAuthBasic</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference">DataWaypointProjectGitAuthBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.gitAuthSsh">GitAuthSsh</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference">DataWaypointProjectGitAuthSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectVariables">ProjectVariables</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList">DataWaypointProjectProjectVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.remoteRunnersEnabled">RemoteRunnersEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectNameInput">ProjectNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectName">ProjectName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Applications`<sup>Required</sup> <a name="Applications" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.applications"></a>

```go
func Applications() *[]*string
```

- *Type:* *[]*string

---

##### `AppStatusPollSeconds`<sup>Required</sup> <a name="AppStatusPollSeconds" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.appStatusPollSeconds"></a>

```go
func AppStatusPollSeconds() *f64
```

- *Type:* *f64

---

##### `DataSourceGit`<sup>Required</sup> <a name="DataSourceGit" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.dataSourceGit"></a>

```go
func DataSourceGit() DataWaypointProjectDataSourceGitOutputReference
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference">DataWaypointProjectDataSourceGitOutputReference</a>

---

##### `GitAuthBasic`<sup>Required</sup> <a name="GitAuthBasic" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.gitAuthBasic"></a>

```go
func GitAuthBasic() DataWaypointProjectGitAuthBasicOutputReference
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference">DataWaypointProjectGitAuthBasicOutputReference</a>

---

##### `GitAuthSsh`<sup>Required</sup> <a name="GitAuthSsh" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.gitAuthSsh"></a>

```go
func GitAuthSsh() DataWaypointProjectGitAuthSshOutputReference
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference">DataWaypointProjectGitAuthSshOutputReference</a>

---

##### `ProjectVariables`<sup>Required</sup> <a name="ProjectVariables" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectVariables"></a>

```go
func ProjectVariables() DataWaypointProjectProjectVariablesList
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList">DataWaypointProjectProjectVariablesList</a>

---

##### `RemoteRunnersEnabled`<sup>Required</sup> <a name="RemoteRunnersEnabled" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.remoteRunnersEnabled"></a>

```go
func RemoteRunnersEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ProjectNameInput`<sup>Optional</sup> <a name="ProjectNameInput" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectNameInput"></a>

```go
func ProjectNameInput() *string
```

- *Type:* *string

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectName"></a>

```go
func ProjectName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWaypointProjectConfig <a name="DataWaypointProjectConfig" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointproject"

&datawaypointproject.DataWaypointProjectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.projectName">ProjectName</a></code> | <code>*string</code> | The name of the Waypoint project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.projectName"></a>

```go
ProjectName *string
```

- *Type:* *string

The name of the Waypoint project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#project_name DataWaypointProject#project_name}

---

### DataWaypointProjectDataSourceGit <a name="DataWaypointProjectDataSourceGit" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointproject"

&datawaypointproject.DataWaypointProjectDataSourceGit {

}
```


### DataWaypointProjectGitAuthBasic <a name="DataWaypointProjectGitAuthBasic" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointproject"

&datawaypointproject.DataWaypointProjectGitAuthBasic {
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.property.password">Password</a></code> | <code>*string</code> | Git password. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.property.username">Username</a></code> | <code>*string</code> | Git username. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.property.password"></a>

```go
Password *string
```

- *Type:* *string

Git password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#password DataWaypointProject#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.property.username"></a>

```go
Username *string
```

- *Type:* *string

Git username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#username DataWaypointProject#username}

---

### DataWaypointProjectGitAuthSsh <a name="DataWaypointProjectGitAuthSsh" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointproject"

&datawaypointproject.DataWaypointProjectGitAuthSsh {
	SshPrivateKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh.property.sshPrivateKey">SshPrivateKey</a></code> | <code>*string</code> | Private key to authenticate to Git. |

---

##### `SshPrivateKey`<sup>Required</sup> <a name="SshPrivateKey" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh.property.sshPrivateKey"></a>

```go
SshPrivateKey *string
```

- *Type:* *string

Private key to authenticate to Git.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#ssh_private_key DataWaypointProject#ssh_private_key}

---

### DataWaypointProjectProjectVariables <a name="DataWaypointProjectProjectVariables" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointproject"

&datawaypointproject.DataWaypointProjectProjectVariables {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#name DataWaypointProject#name}. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#value DataWaypointProject#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#name DataWaypointProject#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#value DataWaypointProject#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataWaypointProjectDataSourceGitOutputReference <a name="DataWaypointProjectDataSourceGitOutputReference" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointproject"

datawaypointproject.NewDataWaypointProjectDataSourceGitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataWaypointProjectDataSourceGitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.fileChangeSignal">FileChangeSignal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitPath">GitPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitPollIntervalSeconds">GitPollIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitRef">GitRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitUrl">GitUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePath">IgnoreChangesOutsidePath</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGit">DataWaypointProjectDataSourceGit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileChangeSignal`<sup>Required</sup> <a name="FileChangeSignal" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.fileChangeSignal"></a>

```go
func FileChangeSignal() *string
```

- *Type:* *string

---

##### `GitPath`<sup>Required</sup> <a name="GitPath" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitPath"></a>

```go
func GitPath() *string
```

- *Type:* *string

---

##### `GitPollIntervalSeconds`<sup>Required</sup> <a name="GitPollIntervalSeconds" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitPollIntervalSeconds"></a>

```go
func GitPollIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `GitRef`<sup>Required</sup> <a name="GitRef" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitRef"></a>

```go
func GitRef() *string
```

- *Type:* *string

---

##### `GitUrl`<sup>Required</sup> <a name="GitUrl" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitUrl"></a>

```go
func GitUrl() *string
```

- *Type:* *string

---

##### `IgnoreChangesOutsidePath`<sup>Required</sup> <a name="IgnoreChangesOutsidePath" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePath"></a>

```go
func IgnoreChangesOutsidePath() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.internalValue"></a>

```go
func InternalValue() DataWaypointProjectDataSourceGit
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGit">DataWaypointProjectDataSourceGit</a>

---


### DataWaypointProjectGitAuthBasicOutputReference <a name="DataWaypointProjectGitAuthBasicOutputReference" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointproject"

datawaypointproject.NewDataWaypointProjectGitAuthBasicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataWaypointProjectGitAuthBasicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic">DataWaypointProjectGitAuthBasic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.internalValue"></a>

```go
func InternalValue() DataWaypointProjectGitAuthBasic
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic">DataWaypointProjectGitAuthBasic</a>

---


### DataWaypointProjectGitAuthSshOutputReference <a name="DataWaypointProjectGitAuthSshOutputReference" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointproject"

datawaypointproject.NewDataWaypointProjectGitAuthSshOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataWaypointProjectGitAuthSshOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.gitUser">GitUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.passphrase">Passphrase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.sshPrivateKeyInput">SshPrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.sshPrivateKey">SshPrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh">DataWaypointProjectGitAuthSsh</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GitUser`<sup>Required</sup> <a name="GitUser" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.gitUser"></a>

```go
func GitUser() *string
```

- *Type:* *string

---

##### `Passphrase`<sup>Required</sup> <a name="Passphrase" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.passphrase"></a>

```go
func Passphrase() *string
```

- *Type:* *string

---

##### `SshPrivateKeyInput`<sup>Optional</sup> <a name="SshPrivateKeyInput" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.sshPrivateKeyInput"></a>

```go
func SshPrivateKeyInput() *string
```

- *Type:* *string

---

##### `SshPrivateKey`<sup>Required</sup> <a name="SshPrivateKey" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.sshPrivateKey"></a>

```go
func SshPrivateKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.internalValue"></a>

```go
func InternalValue() DataWaypointProjectGitAuthSsh
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh">DataWaypointProjectGitAuthSsh</a>

---


### DataWaypointProjectProjectVariablesList <a name="DataWaypointProjectProjectVariablesList" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointproject"

datawaypointproject.NewDataWaypointProjectProjectVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataWaypointProjectProjectVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.get"></a>

```go
func Get(index *f64) DataWaypointProjectProjectVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataWaypointProjectProjectVariablesOutputReference <a name="DataWaypointProjectProjectVariablesOutputReference" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/v2/datawaypointproject"

datawaypointproject.NewDataWaypointProjectProjectVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataWaypointProjectProjectVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.sensitive">Sensitive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables">DataWaypointProjectProjectVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sensitive`<sup>Required</sup> <a name="Sensitive" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.sensitive"></a>

```go
func Sensitive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataWaypointProjectProjectVariables
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables">DataWaypointProjectProjectVariables</a>

---




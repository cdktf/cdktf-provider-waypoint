# `waypoint_project`

Refer to the Terraform Registory for docs: [`waypoint_project`](https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project).

# `project` Submodule <a name="`project` Submodule" id="@cdktf/provider-waypoint.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="@cdktf/provider-waypoint.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project waypoint_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.Project.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/project"

project.NewProject(scope Construct, id *string, config ProjectConfig) Project
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig">ProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectConfig">ProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.putDataSourceGit">PutDataSourceGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.putGitAuthBasic">PutGitAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.putGitAuthSsh">PutGitAuthSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.putProjectVariables">PutProjectVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.resetAppStatusPollSeconds">ResetAppStatusPollSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.resetGitAuthBasic">ResetGitAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.resetGitAuthSsh">ResetGitAuthSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.resetProjectVariables">ResetProjectVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.resetRemoteRunnersEnabled">ResetRemoteRunnersEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.project.Project.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-waypoint.project.Project.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.project.Project.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.Project.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-waypoint.project.Project.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-waypoint.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-waypoint.project.Project.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-waypoint.project.Project.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-waypoint.project.Project.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.project.Project.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.project.Project.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.project.Project.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.project.Project.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.project.Project.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.project.Project.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.project.Project.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDataSourceGit` <a name="PutDataSourceGit" id="@cdktf/provider-waypoint.project.Project.putDataSourceGit"></a>

```go
func PutDataSourceGit(value ProjectDataSourceGit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.Project.putDataSourceGit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a>

---

##### `PutGitAuthBasic` <a name="PutGitAuthBasic" id="@cdktf/provider-waypoint.project.Project.putGitAuthBasic"></a>

```go
func PutGitAuthBasic(value ProjectGitAuthBasic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.Project.putGitAuthBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a>

---

##### `PutGitAuthSsh` <a name="PutGitAuthSsh" id="@cdktf/provider-waypoint.project.Project.putGitAuthSsh"></a>

```go
func PutGitAuthSsh(value ProjectGitAuthSsh)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.Project.putGitAuthSsh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a>

---

##### `PutProjectVariables` <a name="PutProjectVariables" id="@cdktf/provider-waypoint.project.Project.putProjectVariables"></a>

```go
func PutProjectVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.Project.putProjectVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAppStatusPollSeconds` <a name="ResetAppStatusPollSeconds" id="@cdktf/provider-waypoint.project.Project.resetAppStatusPollSeconds"></a>

```go
func ResetAppStatusPollSeconds()
```

##### `ResetGitAuthBasic` <a name="ResetGitAuthBasic" id="@cdktf/provider-waypoint.project.Project.resetGitAuthBasic"></a>

```go
func ResetGitAuthBasic()
```

##### `ResetGitAuthSsh` <a name="ResetGitAuthSsh" id="@cdktf/provider-waypoint.project.Project.resetGitAuthSsh"></a>

```go
func ResetGitAuthSsh()
```

##### `ResetProjectVariables` <a name="ResetProjectVariables" id="@cdktf/provider-waypoint.project.Project.resetProjectVariables"></a>

```go
func ResetProjectVariables()
```

##### `ResetRemoteRunnersEnabled` <a name="ResetRemoteRunnersEnabled" id="@cdktf/provider-waypoint.project.Project.resetRemoteRunnersEnabled"></a>

```go
func ResetRemoteRunnersEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-waypoint.project.Project.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/project"

project.Project_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-waypoint.project.Project.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/project"

project.Project_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-waypoint.project.Project.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/project"

project.Project_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.dataSourceGit">DataSourceGit</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference">ProjectDataSourceGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthBasic">GitAuthBasic</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference">ProjectGitAuthBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthSsh">GitAuthSsh</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference">ProjectGitAuthSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectVariables">ProjectVariables</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList">ProjectProjectVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.appStatusPollSecondsInput">AppStatusPollSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.dataSourceGitInput">DataSourceGitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthBasicInput">GitAuthBasicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthSshInput">GitAuthSshInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectNameInput">ProjectNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectVariablesInput">ProjectVariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabledInput">RemoteRunnersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.appStatusPollSeconds">AppStatusPollSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectName">ProjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabled">RemoteRunnersEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-waypoint.project.Project.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-waypoint.project.Project.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.project.Project.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-waypoint.project.Project.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-waypoint.project.Project.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-waypoint.project.Project.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-waypoint.project.Project.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-waypoint.project.Project.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.project.Project.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.project.Project.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.project.Project.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.project.Project.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.project.Project.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-waypoint.project.Project.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataSourceGit`<sup>Required</sup> <a name="DataSourceGit" id="@cdktf/provider-waypoint.project.Project.property.dataSourceGit"></a>

```go
func DataSourceGit() ProjectDataSourceGitOutputReference
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference">ProjectDataSourceGitOutputReference</a>

---

##### `GitAuthBasic`<sup>Required</sup> <a name="GitAuthBasic" id="@cdktf/provider-waypoint.project.Project.property.gitAuthBasic"></a>

```go
func GitAuthBasic() ProjectGitAuthBasicOutputReference
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference">ProjectGitAuthBasicOutputReference</a>

---

##### `GitAuthSsh`<sup>Required</sup> <a name="GitAuthSsh" id="@cdktf/provider-waypoint.project.Project.property.gitAuthSsh"></a>

```go
func GitAuthSsh() ProjectGitAuthSshOutputReference
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference">ProjectGitAuthSshOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-waypoint.project.Project.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectVariables`<sup>Required</sup> <a name="ProjectVariables" id="@cdktf/provider-waypoint.project.Project.property.projectVariables"></a>

```go
func ProjectVariables() ProjectProjectVariablesList
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList">ProjectProjectVariablesList</a>

---

##### `AppStatusPollSecondsInput`<sup>Optional</sup> <a name="AppStatusPollSecondsInput" id="@cdktf/provider-waypoint.project.Project.property.appStatusPollSecondsInput"></a>

```go
func AppStatusPollSecondsInput() *f64
```

- *Type:* *f64

---

##### `DataSourceGitInput`<sup>Optional</sup> <a name="DataSourceGitInput" id="@cdktf/provider-waypoint.project.Project.property.dataSourceGitInput"></a>

```go
func DataSourceGitInput() interface{}
```

- *Type:* interface{}

---

##### `GitAuthBasicInput`<sup>Optional</sup> <a name="GitAuthBasicInput" id="@cdktf/provider-waypoint.project.Project.property.gitAuthBasicInput"></a>

```go
func GitAuthBasicInput() interface{}
```

- *Type:* interface{}

---

##### `GitAuthSshInput`<sup>Optional</sup> <a name="GitAuthSshInput" id="@cdktf/provider-waypoint.project.Project.property.gitAuthSshInput"></a>

```go
func GitAuthSshInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectNameInput`<sup>Optional</sup> <a name="ProjectNameInput" id="@cdktf/provider-waypoint.project.Project.property.projectNameInput"></a>

```go
func ProjectNameInput() *string
```

- *Type:* *string

---

##### `ProjectVariablesInput`<sup>Optional</sup> <a name="ProjectVariablesInput" id="@cdktf/provider-waypoint.project.Project.property.projectVariablesInput"></a>

```go
func ProjectVariablesInput() interface{}
```

- *Type:* interface{}

---

##### `RemoteRunnersEnabledInput`<sup>Optional</sup> <a name="RemoteRunnersEnabledInput" id="@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabledInput"></a>

```go
func RemoteRunnersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AppStatusPollSeconds`<sup>Required</sup> <a name="AppStatusPollSeconds" id="@cdktf/provider-waypoint.project.Project.property.appStatusPollSeconds"></a>

```go
func AppStatusPollSeconds() *f64
```

- *Type:* *f64

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-waypoint.project.Project.property.projectName"></a>

```go
func ProjectName() *string
```

- *Type:* *string

---

##### `RemoteRunnersEnabled`<sup>Required</sup> <a name="RemoteRunnersEnabled" id="@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabled"></a>

```go
func RemoteRunnersEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-waypoint.project.Project.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectConfig <a name="ProjectConfig" id="@cdktf/provider-waypoint.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/project"

&project.ProjectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataSourceGit: github.com/cdktf/cdktf-provider-waypoint-go/waypoint.project.ProjectDataSourceGit,
	ProjectName: *string,
	AppStatusPollSeconds: *f64,
	GitAuthBasic: github.com/cdktf/cdktf-provider-waypoint-go/waypoint.project.ProjectGitAuthBasic,
	GitAuthSsh: github.com/cdktf/cdktf-provider-waypoint-go/waypoint.project.ProjectGitAuthSsh,
	ProjectVariables: interface{},
	RemoteRunnersEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.dataSourceGit">DataSourceGit</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a></code> | Configuration of Git repository where waypoint.hcl file is stored. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.projectName">ProjectName</a></code> | <code>*string</code> | The name of the Waypoint project. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.appStatusPollSeconds">AppStatusPollSeconds</a></code> | <code>*f64</code> | Application status poll interval in seconds. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthBasic">GitAuthBasic</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a></code> | Basic authentication details for Git consisting of `username` and `password`. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthSsh">GitAuthSsh</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a></code> | SSH authentication details for Git. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.projectVariables">ProjectVariables</a></code> | <code>interface{}</code> | List of variables in Key/value pairs associated with the Waypoint Project. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.remoteRunnersEnabled">RemoteRunnersEnabled</a></code> | <code>interface{}</code> | Enable remote runners for project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-waypoint.project.ProjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.project.ProjectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.project.ProjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.project.ProjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.project.ProjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.project.ProjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-waypoint.project.ProjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataSourceGit`<sup>Required</sup> <a name="DataSourceGit" id="@cdktf/provider-waypoint.project.ProjectConfig.property.dataSourceGit"></a>

```go
DataSourceGit ProjectDataSourceGit
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a>

Configuration of Git repository where waypoint.hcl file is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#data_source_git Project#data_source_git}

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-waypoint.project.ProjectConfig.property.projectName"></a>

```go
ProjectName *string
```

- *Type:* *string

The name of the Waypoint project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#project_name Project#project_name}

---

##### `AppStatusPollSeconds`<sup>Optional</sup> <a name="AppStatusPollSeconds" id="@cdktf/provider-waypoint.project.ProjectConfig.property.appStatusPollSeconds"></a>

```go
AppStatusPollSeconds *f64
```

- *Type:* *f64

Application status poll interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#app_status_poll_seconds Project#app_status_poll_seconds}

---

##### `GitAuthBasic`<sup>Optional</sup> <a name="GitAuthBasic" id="@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthBasic"></a>

```go
GitAuthBasic ProjectGitAuthBasic
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a>

Basic authentication details for Git consisting of `username` and `password`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_auth_basic Project#git_auth_basic}

---

##### `GitAuthSsh`<sup>Optional</sup> <a name="GitAuthSsh" id="@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthSsh"></a>

```go
GitAuthSsh ProjectGitAuthSsh
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a>

SSH authentication details for Git.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_auth_ssh Project#git_auth_ssh}

---

##### `ProjectVariables`<sup>Optional</sup> <a name="ProjectVariables" id="@cdktf/provider-waypoint.project.ProjectConfig.property.projectVariables"></a>

```go
ProjectVariables interface{}
```

- *Type:* interface{}

List of variables in Key/value pairs associated with the Waypoint Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#project_variables Project#project_variables}

---

##### `RemoteRunnersEnabled`<sup>Optional</sup> <a name="RemoteRunnersEnabled" id="@cdktf/provider-waypoint.project.ProjectConfig.property.remoteRunnersEnabled"></a>

```go
RemoteRunnersEnabled interface{}
```

- *Type:* interface{}

Enable remote runners for project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#remote_runners_enabled Project#remote_runners_enabled}

---

### ProjectDataSourceGit <a name="ProjectDataSourceGit" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/project"

&project.ProjectDataSourceGit {
	FileChangeSignal: *string,
	GitPath: *string,
	GitPollIntervalSeconds: *f64,
	GitRef: *string,
	GitUrl: *string,
	IgnoreChangesOutsidePath: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.fileChangeSignal">FileChangeSignal</a></code> | <code>*string</code> | Indicates signal to be sent to any applications when their config files change. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPath">GitPath</a></code> | <code>*string</code> | Path in git repository when waypoint.hcl file is stored in a sub-directory. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPollIntervalSeconds">GitPollIntervalSeconds</a></code> | <code>*f64</code> | Interval at which Waypoint should poll git repository for changes. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitRef">GitRef</a></code> | <code>*string</code> | Git repository ref containing waypoint.hcl file. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitUrl">GitUrl</a></code> | <code>*string</code> | Url of git repository storing the waypoint.hcl file. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.ignoreChangesOutsidePath">IgnoreChangesOutsidePath</a></code> | <code>interface{}</code> | Whether Waypoint ignores changes outside path storing waypoint.hcl file. |

---

##### `FileChangeSignal`<sup>Optional</sup> <a name="FileChangeSignal" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.fileChangeSignal"></a>

```go
FileChangeSignal *string
```

- *Type:* *string

Indicates signal to be sent to any applications when their config files change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#file_change_signal Project#file_change_signal}

---

##### `GitPath`<sup>Optional</sup> <a name="GitPath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPath"></a>

```go
GitPath *string
```

- *Type:* *string

Path in git repository when waypoint.hcl file is stored in a sub-directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_path Project#git_path}

---

##### `GitPollIntervalSeconds`<sup>Optional</sup> <a name="GitPollIntervalSeconds" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPollIntervalSeconds"></a>

```go
GitPollIntervalSeconds *f64
```

- *Type:* *f64

Interval at which Waypoint should poll git repository for changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_poll_interval_seconds Project#git_poll_interval_seconds}

---

##### `GitRef`<sup>Optional</sup> <a name="GitRef" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitRef"></a>

```go
GitRef *string
```

- *Type:* *string

Git repository ref containing waypoint.hcl file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_ref Project#git_ref}

---

##### `GitUrl`<sup>Optional</sup> <a name="GitUrl" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitUrl"></a>

```go
GitUrl *string
```

- *Type:* *string

Url of git repository storing the waypoint.hcl file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_url Project#git_url}

---

##### `IgnoreChangesOutsidePath`<sup>Optional</sup> <a name="IgnoreChangesOutsidePath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.ignoreChangesOutsidePath"></a>

```go
IgnoreChangesOutsidePath interface{}
```

- *Type:* interface{}

Whether Waypoint ignores changes outside path storing waypoint.hcl file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#ignore_changes_outside_path Project#ignore_changes_outside_path}

---

### ProjectGitAuthBasic <a name="ProjectGitAuthBasic" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/project"

&project.ProjectGitAuthBasic {
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.password">Password</a></code> | <code>*string</code> | Git password. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.username">Username</a></code> | <code>*string</code> | Git username. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.password"></a>

```go
Password *string
```

- *Type:* *string

Git password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#password Project#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.username"></a>

```go
Username *string
```

- *Type:* *string

Git username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#username Project#username}

---

### ProjectGitAuthSsh <a name="ProjectGitAuthSsh" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/project"

&project.ProjectGitAuthSsh {
	SshPrivateKey: *string,
	GitUser: *string,
	Passphrase: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.sshPrivateKey">SshPrivateKey</a></code> | <code>*string</code> | Private key to authenticate to Git. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.gitUser">GitUser</a></code> | <code>*string</code> | Git user associated with private key. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.passphrase">Passphrase</a></code> | <code>*string</code> | Passphrase to use with private key. |

---

##### `SshPrivateKey`<sup>Required</sup> <a name="SshPrivateKey" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.sshPrivateKey"></a>

```go
SshPrivateKey *string
```

- *Type:* *string

Private key to authenticate to Git.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#ssh_private_key Project#ssh_private_key}

---

##### `GitUser`<sup>Optional</sup> <a name="GitUser" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.gitUser"></a>

```go
GitUser *string
```

- *Type:* *string

Git user associated with private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_user Project#git_user}

---

##### `Passphrase`<sup>Optional</sup> <a name="Passphrase" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.passphrase"></a>

```go
Passphrase *string
```

- *Type:* *string

Passphrase to use with private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#passphrase Project#passphrase}

---

### ProjectProjectVariables <a name="ProjectProjectVariables" id="@cdktf/provider-waypoint.project.ProjectProjectVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/project"

&project.ProjectProjectVariables {
	Name: *string,
	Value: *string,
	Sensitive: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#name Project#name}. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#value Project#value}. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables.property.sensitive">Sensitive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#sensitive Project#sensitive}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#name Project#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#value Project#value}.

---

##### `Sensitive`<sup>Optional</sup> <a name="Sensitive" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.property.sensitive"></a>

```go
Sensitive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#sensitive Project#sensitive}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectDataSourceGitOutputReference <a name="ProjectDataSourceGitOutputReference" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/project"

project.NewProjectDataSourceGitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ProjectDataSourceGitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetFileChangeSignal">ResetFileChangeSignal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitPath">ResetGitPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitPollIntervalSeconds">ResetGitPollIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitRef">ResetGitRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitUrl">ResetGitUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetIgnoreChangesOutsidePath">ResetIgnoreChangesOutsidePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileChangeSignal` <a name="ResetFileChangeSignal" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetFileChangeSignal"></a>

```go
func ResetFileChangeSignal()
```

##### `ResetGitPath` <a name="ResetGitPath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitPath"></a>

```go
func ResetGitPath()
```

##### `ResetGitPollIntervalSeconds` <a name="ResetGitPollIntervalSeconds" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitPollIntervalSeconds"></a>

```go
func ResetGitPollIntervalSeconds()
```

##### `ResetGitRef` <a name="ResetGitRef" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitRef"></a>

```go
func ResetGitRef()
```

##### `ResetGitUrl` <a name="ResetGitUrl" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitUrl"></a>

```go
func ResetGitUrl()
```

##### `ResetIgnoreChangesOutsidePath` <a name="ResetIgnoreChangesOutsidePath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetIgnoreChangesOutsidePath"></a>

```go
func ResetIgnoreChangesOutsidePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignalInput">FileChangeSignalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPathInput">GitPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSecondsInput">GitPollIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRefInput">GitRefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrlInput">GitUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePathInput">IgnoreChangesOutsidePathInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignal">FileChangeSignal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPath">GitPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSeconds">GitPollIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRef">GitRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrl">GitUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePath">IgnoreChangesOutsidePath</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileChangeSignalInput`<sup>Optional</sup> <a name="FileChangeSignalInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignalInput"></a>

```go
func FileChangeSignalInput() *string
```

- *Type:* *string

---

##### `GitPathInput`<sup>Optional</sup> <a name="GitPathInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPathInput"></a>

```go
func GitPathInput() *string
```

- *Type:* *string

---

##### `GitPollIntervalSecondsInput`<sup>Optional</sup> <a name="GitPollIntervalSecondsInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSecondsInput"></a>

```go
func GitPollIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `GitRefInput`<sup>Optional</sup> <a name="GitRefInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRefInput"></a>

```go
func GitRefInput() *string
```

- *Type:* *string

---

##### `GitUrlInput`<sup>Optional</sup> <a name="GitUrlInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrlInput"></a>

```go
func GitUrlInput() *string
```

- *Type:* *string

---

##### `IgnoreChangesOutsidePathInput`<sup>Optional</sup> <a name="IgnoreChangesOutsidePathInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePathInput"></a>

```go
func IgnoreChangesOutsidePathInput() interface{}
```

- *Type:* interface{}

---

##### `FileChangeSignal`<sup>Required</sup> <a name="FileChangeSignal" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignal"></a>

```go
func FileChangeSignal() *string
```

- *Type:* *string

---

##### `GitPath`<sup>Required</sup> <a name="GitPath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPath"></a>

```go
func GitPath() *string
```

- *Type:* *string

---

##### `GitPollIntervalSeconds`<sup>Required</sup> <a name="GitPollIntervalSeconds" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSeconds"></a>

```go
func GitPollIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `GitRef`<sup>Required</sup> <a name="GitRef" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRef"></a>

```go
func GitRef() *string
```

- *Type:* *string

---

##### `GitUrl`<sup>Required</sup> <a name="GitUrl" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrl"></a>

```go
func GitUrl() *string
```

- *Type:* *string

---

##### `IgnoreChangesOutsidePath`<sup>Required</sup> <a name="IgnoreChangesOutsidePath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePath"></a>

```go
func IgnoreChangesOutsidePath() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ProjectGitAuthBasicOutputReference <a name="ProjectGitAuthBasicOutputReference" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/project"

project.NewProjectGitAuthBasicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ProjectGitAuthBasicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ProjectGitAuthSshOutputReference <a name="ProjectGitAuthSshOutputReference" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/project"

project.NewProjectGitAuthSshOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ProjectGitAuthSshOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resetGitUser">ResetGitUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resetPassphrase">ResetPassphrase</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGitUser` <a name="ResetGitUser" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resetGitUser"></a>

```go
func ResetGitUser()
```

##### `ResetPassphrase` <a name="ResetPassphrase" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resetPassphrase"></a>

```go
func ResetPassphrase()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUserInput">GitUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphraseInput">PassphraseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKeyInput">SshPrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUser">GitUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphrase">Passphrase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKey">SshPrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GitUserInput`<sup>Optional</sup> <a name="GitUserInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUserInput"></a>

```go
func GitUserInput() *string
```

- *Type:* *string

---

##### `PassphraseInput`<sup>Optional</sup> <a name="PassphraseInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphraseInput"></a>

```go
func PassphraseInput() *string
```

- *Type:* *string

---

##### `SshPrivateKeyInput`<sup>Optional</sup> <a name="SshPrivateKeyInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKeyInput"></a>

```go
func SshPrivateKeyInput() *string
```

- *Type:* *string

---

##### `GitUser`<sup>Required</sup> <a name="GitUser" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUser"></a>

```go
func GitUser() *string
```

- *Type:* *string

---

##### `Passphrase`<sup>Required</sup> <a name="Passphrase" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphrase"></a>

```go
func Passphrase() *string
```

- *Type:* *string

---

##### `SshPrivateKey`<sup>Required</sup> <a name="SshPrivateKey" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKey"></a>

```go
func SshPrivateKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ProjectProjectVariablesList <a name="ProjectProjectVariablesList" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/project"

project.NewProjectProjectVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ProjectProjectVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.get"></a>

```go
func Get(index *f64) ProjectProjectVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ProjectProjectVariablesOutputReference <a name="ProjectProjectVariablesOutputReference" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/project"

project.NewProjectProjectVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ProjectProjectVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resetSensitive">ResetSensitive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSensitive` <a name="ResetSensitive" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resetSensitive"></a>

```go
func ResetSensitive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitiveInput">SensitiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitive">Sensitive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SensitiveInput`<sup>Optional</sup> <a name="SensitiveInput" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitiveInput"></a>

```go
func SensitiveInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Sensitive`<sup>Required</sup> <a name="Sensitive" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitive"></a>

```go
func Sensitive() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




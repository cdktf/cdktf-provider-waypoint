# `runnerProfile` Submodule <a name="`runnerProfile` Submodule" id="@cdktf/provider-waypoint.runnerProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RunnerProfile <a name="RunnerProfile" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile waypoint_runner_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/runnerprofile"

runnerprofile.NewRunnerProfile(scope Construct, id *string, config RunnerProfileConfig) RunnerProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig">RunnerProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig">RunnerProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetOciUrl">ResetOciUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetPluginConfig">ResetPluginConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetPluginConfigFormat">ResetPluginConfigFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetTargetRunnerId">ResetTargetRunnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetTargetRunnerLabels">ResetTargetRunnerLabels</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetEnvironmentVariables"></a>

```go
func ResetEnvironmentVariables()
```

##### `ResetOciUrl` <a name="ResetOciUrl" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetOciUrl"></a>

```go
func ResetOciUrl()
```

##### `ResetPluginConfig` <a name="ResetPluginConfig" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetPluginConfig"></a>

```go
func ResetPluginConfig()
```

##### `ResetPluginConfigFormat` <a name="ResetPluginConfigFormat" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetPluginConfigFormat"></a>

```go
func ResetPluginConfigFormat()
```

##### `ResetTargetRunnerId` <a name="ResetTargetRunnerId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetTargetRunnerId"></a>

```go
func ResetTargetRunnerId()
```

##### `ResetTargetRunnerLabels` <a name="ResetTargetRunnerLabels" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetTargetRunnerLabels"></a>

```go
func ResetTargetRunnerLabels()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RunnerProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/runnerprofile"

runnerprofile.RunnerProfile_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/runnerprofile"

runnerprofile.RunnerProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/runnerprofile"

runnerprofile.RunnerProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/runnerprofile"

runnerprofile.RunnerProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RunnerProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RunnerProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RunnerProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RunnerProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.defaultInput">DefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrlInput">OciUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormatInput">PluginConfigFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigInput">PluginConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginTypeInput">PluginTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerIdInput">TargetRunnerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabelsInput">TargetRunnerLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.default">Default</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrl">OciUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfig">PluginConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormat">PluginConfigFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginType">PluginType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerId">TargetRunnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabels">TargetRunnerLabels</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.defaultInput"></a>

```go
func DefaultInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariablesInput"></a>

```go
func EnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OciUrlInput`<sup>Optional</sup> <a name="OciUrlInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrlInput"></a>

```go
func OciUrlInput() *string
```

- *Type:* *string

---

##### `PluginConfigFormatInput`<sup>Optional</sup> <a name="PluginConfigFormatInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormatInput"></a>

```go
func PluginConfigFormatInput() *string
```

- *Type:* *string

---

##### `PluginConfigInput`<sup>Optional</sup> <a name="PluginConfigInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigInput"></a>

```go
func PluginConfigInput() *string
```

- *Type:* *string

---

##### `PluginTypeInput`<sup>Optional</sup> <a name="PluginTypeInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginTypeInput"></a>

```go
func PluginTypeInput() *string
```

- *Type:* *string

---

##### `TargetRunnerIdInput`<sup>Optional</sup> <a name="TargetRunnerIdInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerIdInput"></a>

```go
func TargetRunnerIdInput() *string
```

- *Type:* *string

---

##### `TargetRunnerLabelsInput`<sup>Optional</sup> <a name="TargetRunnerLabelsInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabelsInput"></a>

```go
func TargetRunnerLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.default"></a>

```go
func Default() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariables"></a>

```go
func EnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrl"></a>

```go
func OciUrl() *string
```

- *Type:* *string

---

##### `PluginConfig`<sup>Required</sup> <a name="PluginConfig" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfig"></a>

```go
func PluginConfig() *string
```

- *Type:* *string

---

##### `PluginConfigFormat`<sup>Required</sup> <a name="PluginConfigFormat" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormat"></a>

```go
func PluginConfigFormat() *string
```

- *Type:* *string

---

##### `PluginType`<sup>Required</sup> <a name="PluginType" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginType"></a>

```go
func PluginType() *string
```

- *Type:* *string

---

##### `TargetRunnerId`<sup>Required</sup> <a name="TargetRunnerId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerId"></a>

```go
func TargetRunnerId() *string
```

- *Type:* *string

---

##### `TargetRunnerLabels`<sup>Required</sup> <a name="TargetRunnerLabels" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabels"></a>

```go
func TargetRunnerLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RunnerProfileConfig <a name="RunnerProfileConfig" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-waypoint-go/waypoint/runnerprofile"

&runnerprofile.RunnerProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	PluginType: *string,
	Default: interface{},
	EnvironmentVariables: *map[string]*string,
	OciUrl: *string,
	PluginConfig: *string,
	PluginConfigFormat: *string,
	TargetRunnerId: *string,
	TargetRunnerLabels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.name">Name</a></code> | <code>*string</code> | The name of the runner profile. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginType">PluginType</a></code> | <code>*string</code> | Plugin type for runner i.e docker / kubernetes / aws-ecs. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.default">Default</a></code> | <code>interface{}</code> | Indicates if this runner profile is the default for any new projects. The default is false. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | Any environment variables that should be exposed to the on demand runner. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.ociUrl">OciUrl</a></code> | <code>*string</code> | oci_url is the OCI image that will be used to boot the on demand runner. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfig">PluginConfig</a></code> | <code>*string</code> | Plugin config is the configuration for the plugin that is created. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfigFormat">PluginConfigFormat</a></code> | <code>*string</code> | Config format specifies the format of plugin_config. Valid values are HCL or JSON. The default is HCL. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerId">TargetRunnerId</a></code> | <code>*string</code> | The ID of the target runner for this profile. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerLabels">TargetRunnerLabels</a></code> | <code>*map[string]*string</code> | A map of labels on target runners. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the runner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#name RunnerProfile#name}

---

##### `PluginType`<sup>Required</sup> <a name="PluginType" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginType"></a>

```go
PluginType *string
```

- *Type:* *string

Plugin type for runner i.e docker / kubernetes / aws-ecs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_type RunnerProfile#plugin_type}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.default"></a>

```go
Default interface{}
```

- *Type:* interface{}

Indicates if this runner profile is the default for any new projects. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#default RunnerProfile#default}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.environmentVariables"></a>

```go
EnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

Any environment variables that should be exposed to the on demand runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#environment_variables RunnerProfile#environment_variables}

---

##### `OciUrl`<sup>Optional</sup> <a name="OciUrl" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.ociUrl"></a>

```go
OciUrl *string
```

- *Type:* *string

oci_url is the OCI image that will be used to boot the on demand runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#oci_url RunnerProfile#oci_url}

---

##### `PluginConfig`<sup>Optional</sup> <a name="PluginConfig" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfig"></a>

```go
PluginConfig *string
```

- *Type:* *string

Plugin config is the configuration for the plugin that is created.

It is usually HCL and is decoded like the other plugins, and is plugin specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_config RunnerProfile#plugin_config}

---

##### `PluginConfigFormat`<sup>Optional</sup> <a name="PluginConfigFormat" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfigFormat"></a>

```go
PluginConfigFormat *string
```

- *Type:* *string

Config format specifies the format of plugin_config. Valid values are HCL or JSON. The default is HCL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_config_format RunnerProfile#plugin_config_format}

---

##### `TargetRunnerId`<sup>Optional</sup> <a name="TargetRunnerId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerId"></a>

```go
TargetRunnerId *string
```

- *Type:* *string

The ID of the target runner for this profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#target_runner_id RunnerProfile#target_runner_id}

---

##### `TargetRunnerLabels`<sup>Optional</sup> <a name="TargetRunnerLabels" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerLabels"></a>

```go
TargetRunnerLabels *map[string]*string
```

- *Type:* *map[string]*string

A map of labels on target runners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#target_runner_labels RunnerProfile#target_runner_labels}

---




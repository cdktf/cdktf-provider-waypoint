# `waypoint_project`

Refer to the Terraform Registory for docs: [`waypoint_project`](https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project).

# `project` Submodule <a name="`project` Submodule" id="@cdktf/provider-waypoint.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="@cdktf/provider-waypoint.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project waypoint_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.Project.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new Project(Construct Scope, string Id, ProjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig">ProjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-waypoint.project.Project.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-waypoint.project.Project.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-waypoint.project.Project.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-waypoint.project.Project.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-waypoint.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-waypoint.project.Project.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-waypoint.project.Project.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-waypoint.project.Project.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.project.Project.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.project.Project.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.project.Project.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.project.Project.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.project.Project.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.project.Project.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.project.Project.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDataSourceGit` <a name="PutDataSourceGit" id="@cdktf/provider-waypoint.project.Project.putDataSourceGit"></a>

```csharp
private void PutDataSourceGit(ProjectDataSourceGit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-waypoint.project.Project.putDataSourceGit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a>

---

##### `PutGitAuthBasic` <a name="PutGitAuthBasic" id="@cdktf/provider-waypoint.project.Project.putGitAuthBasic"></a>

```csharp
private void PutGitAuthBasic(ProjectGitAuthBasic Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-waypoint.project.Project.putGitAuthBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a>

---

##### `PutGitAuthSsh` <a name="PutGitAuthSsh" id="@cdktf/provider-waypoint.project.Project.putGitAuthSsh"></a>

```csharp
private void PutGitAuthSsh(ProjectGitAuthSsh Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-waypoint.project.Project.putGitAuthSsh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a>

---

##### `PutProjectVariables` <a name="PutProjectVariables" id="@cdktf/provider-waypoint.project.Project.putProjectVariables"></a>

```csharp
private void PutProjectVariables(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-waypoint.project.Project.putProjectVariables.parameter.value"></a>

- *Type:* object

---

##### `ResetAppStatusPollSeconds` <a name="ResetAppStatusPollSeconds" id="@cdktf/provider-waypoint.project.Project.resetAppStatusPollSeconds"></a>

```csharp
private void ResetAppStatusPollSeconds()
```

##### `ResetGitAuthBasic` <a name="ResetGitAuthBasic" id="@cdktf/provider-waypoint.project.Project.resetGitAuthBasic"></a>

```csharp
private void ResetGitAuthBasic()
```

##### `ResetGitAuthSsh` <a name="ResetGitAuthSsh" id="@cdktf/provider-waypoint.project.Project.resetGitAuthSsh"></a>

```csharp
private void ResetGitAuthSsh()
```

##### `ResetProjectVariables` <a name="ResetProjectVariables" id="@cdktf/provider-waypoint.project.Project.resetProjectVariables"></a>

```csharp
private void ResetProjectVariables()
```

##### `ResetRemoteRunnersEnabled` <a name="ResetRemoteRunnersEnabled" id="@cdktf/provider-waypoint.project.Project.resetRemoteRunnersEnabled"></a>

```csharp
private void ResetRemoteRunnersEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-waypoint.project.Project.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

Project.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-waypoint.project.Project.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-waypoint.project.Project.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

Project.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-waypoint.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-waypoint.project.Project.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

Project.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-waypoint.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.dataSourceGit">DataSourceGit</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference">ProjectDataSourceGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthBasic">GitAuthBasic</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference">ProjectGitAuthBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthSsh">GitAuthSsh</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference">ProjectGitAuthSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectVariables">ProjectVariables</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList">ProjectProjectVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.appStatusPollSecondsInput">AppStatusPollSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.dataSourceGitInput">DataSourceGitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthBasicInput">GitAuthBasicInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthSshInput">GitAuthSshInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectNameInput">ProjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectVariablesInput">ProjectVariablesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabledInput">RemoteRunnersEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.appStatusPollSeconds">AppStatusPollSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectName">ProjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabled">RemoteRunnersEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-waypoint.project.Project.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-waypoint.project.Project.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.project.Project.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-waypoint.project.Project.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-waypoint.project.Project.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-waypoint.project.Project.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-waypoint.project.Project.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-waypoint.project.Project.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.project.Project.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.project.Project.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.project.Project.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.project.Project.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.project.Project.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-waypoint.project.Project.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DataSourceGit`<sup>Required</sup> <a name="DataSourceGit" id="@cdktf/provider-waypoint.project.Project.property.dataSourceGit"></a>

```csharp
public ProjectDataSourceGitOutputReference DataSourceGit { get; }
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference">ProjectDataSourceGitOutputReference</a>

---

##### `GitAuthBasic`<sup>Required</sup> <a name="GitAuthBasic" id="@cdktf/provider-waypoint.project.Project.property.gitAuthBasic"></a>

```csharp
public ProjectGitAuthBasicOutputReference GitAuthBasic { get; }
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference">ProjectGitAuthBasicOutputReference</a>

---

##### `GitAuthSsh`<sup>Required</sup> <a name="GitAuthSsh" id="@cdktf/provider-waypoint.project.Project.property.gitAuthSsh"></a>

```csharp
public ProjectGitAuthSshOutputReference GitAuthSsh { get; }
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference">ProjectGitAuthSshOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-waypoint.project.Project.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectVariables`<sup>Required</sup> <a name="ProjectVariables" id="@cdktf/provider-waypoint.project.Project.property.projectVariables"></a>

```csharp
public ProjectProjectVariablesList ProjectVariables { get; }
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList">ProjectProjectVariablesList</a>

---

##### `AppStatusPollSecondsInput`<sup>Optional</sup> <a name="AppStatusPollSecondsInput" id="@cdktf/provider-waypoint.project.Project.property.appStatusPollSecondsInput"></a>

```csharp
public double AppStatusPollSecondsInput { get; }
```

- *Type:* double

---

##### `DataSourceGitInput`<sup>Optional</sup> <a name="DataSourceGitInput" id="@cdktf/provider-waypoint.project.Project.property.dataSourceGitInput"></a>

```csharp
public object DataSourceGitInput { get; }
```

- *Type:* object

---

##### `GitAuthBasicInput`<sup>Optional</sup> <a name="GitAuthBasicInput" id="@cdktf/provider-waypoint.project.Project.property.gitAuthBasicInput"></a>

```csharp
public object GitAuthBasicInput { get; }
```

- *Type:* object

---

##### `GitAuthSshInput`<sup>Optional</sup> <a name="GitAuthSshInput" id="@cdktf/provider-waypoint.project.Project.property.gitAuthSshInput"></a>

```csharp
public object GitAuthSshInput { get; }
```

- *Type:* object

---

##### `ProjectNameInput`<sup>Optional</sup> <a name="ProjectNameInput" id="@cdktf/provider-waypoint.project.Project.property.projectNameInput"></a>

```csharp
public string ProjectNameInput { get; }
```

- *Type:* string

---

##### `ProjectVariablesInput`<sup>Optional</sup> <a name="ProjectVariablesInput" id="@cdktf/provider-waypoint.project.Project.property.projectVariablesInput"></a>

```csharp
public object ProjectVariablesInput { get; }
```

- *Type:* object

---

##### `RemoteRunnersEnabledInput`<sup>Optional</sup> <a name="RemoteRunnersEnabledInput" id="@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabledInput"></a>

```csharp
public object RemoteRunnersEnabledInput { get; }
```

- *Type:* object

---

##### `AppStatusPollSeconds`<sup>Required</sup> <a name="AppStatusPollSeconds" id="@cdktf/provider-waypoint.project.Project.property.appStatusPollSeconds"></a>

```csharp
public double AppStatusPollSeconds { get; }
```

- *Type:* double

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-waypoint.project.Project.property.projectName"></a>

```csharp
public string ProjectName { get; }
```

- *Type:* string

---

##### `RemoteRunnersEnabled`<sup>Required</sup> <a name="RemoteRunnersEnabled" id="@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabled"></a>

```csharp
public object RemoteRunnersEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-waypoint.project.Project.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectConfig <a name="ProjectConfig" id="@cdktf/provider-waypoint.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new ProjectConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    ProjectDataSourceGit DataSourceGit,
    string ProjectName,
    double AppStatusPollSeconds = null,
    ProjectGitAuthBasic GitAuthBasic = null,
    ProjectGitAuthSsh GitAuthSsh = null,
    object ProjectVariables = null,
    object RemoteRunnersEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.dataSourceGit">DataSourceGit</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a></code> | Configuration of Git repository where waypoint.hcl file is stored. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.projectName">ProjectName</a></code> | <code>string</code> | The name of the Waypoint project. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.appStatusPollSeconds">AppStatusPollSeconds</a></code> | <code>double</code> | Application status poll interval in seconds. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthBasic">GitAuthBasic</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a></code> | Basic authentication details for Git consisting of `username` and `password`. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthSsh">GitAuthSsh</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a></code> | SSH authentication details for Git. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.projectVariables">ProjectVariables</a></code> | <code>object</code> | List of variables in Key/value pairs associated with the Waypoint Project. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.remoteRunnersEnabled">RemoteRunnersEnabled</a></code> | <code>object</code> | Enable remote runners for project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-waypoint.project.ProjectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.project.ProjectConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.project.ProjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.project.ProjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.project.ProjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.project.ProjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-waypoint.project.ProjectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataSourceGit`<sup>Required</sup> <a name="DataSourceGit" id="@cdktf/provider-waypoint.project.ProjectConfig.property.dataSourceGit"></a>

```csharp
public ProjectDataSourceGit DataSourceGit { get; set; }
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a>

Configuration of Git repository where waypoint.hcl file is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#data_source_git Project#data_source_git}

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-waypoint.project.ProjectConfig.property.projectName"></a>

```csharp
public string ProjectName { get; set; }
```

- *Type:* string

The name of the Waypoint project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#project_name Project#project_name}

---

##### `AppStatusPollSeconds`<sup>Optional</sup> <a name="AppStatusPollSeconds" id="@cdktf/provider-waypoint.project.ProjectConfig.property.appStatusPollSeconds"></a>

```csharp
public double AppStatusPollSeconds { get; set; }
```

- *Type:* double

Application status poll interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#app_status_poll_seconds Project#app_status_poll_seconds}

---

##### `GitAuthBasic`<sup>Optional</sup> <a name="GitAuthBasic" id="@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthBasic"></a>

```csharp
public ProjectGitAuthBasic GitAuthBasic { get; set; }
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a>

Basic authentication details for Git consisting of `username` and `password`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_auth_basic Project#git_auth_basic}

---

##### `GitAuthSsh`<sup>Optional</sup> <a name="GitAuthSsh" id="@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthSsh"></a>

```csharp
public ProjectGitAuthSsh GitAuthSsh { get; set; }
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a>

SSH authentication details for Git.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_auth_ssh Project#git_auth_ssh}

---

##### `ProjectVariables`<sup>Optional</sup> <a name="ProjectVariables" id="@cdktf/provider-waypoint.project.ProjectConfig.property.projectVariables"></a>

```csharp
public object ProjectVariables { get; set; }
```

- *Type:* object

List of variables in Key/value pairs associated with the Waypoint Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#project_variables Project#project_variables}

---

##### `RemoteRunnersEnabled`<sup>Optional</sup> <a name="RemoteRunnersEnabled" id="@cdktf/provider-waypoint.project.ProjectConfig.property.remoteRunnersEnabled"></a>

```csharp
public object RemoteRunnersEnabled { get; set; }
```

- *Type:* object

Enable remote runners for project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#remote_runners_enabled Project#remote_runners_enabled}

---

### ProjectDataSourceGit <a name="ProjectDataSourceGit" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new ProjectDataSourceGit {
    string FileChangeSignal = null,
    string GitPath = null,
    double GitPollIntervalSeconds = null,
    string GitRef = null,
    string GitUrl = null,
    object IgnoreChangesOutsidePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.fileChangeSignal">FileChangeSignal</a></code> | <code>string</code> | Indicates signal to be sent to any applications when their config files change. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPath">GitPath</a></code> | <code>string</code> | Path in git repository when waypoint.hcl file is stored in a sub-directory. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPollIntervalSeconds">GitPollIntervalSeconds</a></code> | <code>double</code> | Interval at which Waypoint should poll git repository for changes. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitRef">GitRef</a></code> | <code>string</code> | Git repository ref containing waypoint.hcl file. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitUrl">GitUrl</a></code> | <code>string</code> | Url of git repository storing the waypoint.hcl file. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.ignoreChangesOutsidePath">IgnoreChangesOutsidePath</a></code> | <code>object</code> | Whether Waypoint ignores changes outside path storing waypoint.hcl file. |

---

##### `FileChangeSignal`<sup>Optional</sup> <a name="FileChangeSignal" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.fileChangeSignal"></a>

```csharp
public string FileChangeSignal { get; set; }
```

- *Type:* string

Indicates signal to be sent to any applications when their config files change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#file_change_signal Project#file_change_signal}

---

##### `GitPath`<sup>Optional</sup> <a name="GitPath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPath"></a>

```csharp
public string GitPath { get; set; }
```

- *Type:* string

Path in git repository when waypoint.hcl file is stored in a sub-directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_path Project#git_path}

---

##### `GitPollIntervalSeconds`<sup>Optional</sup> <a name="GitPollIntervalSeconds" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPollIntervalSeconds"></a>

```csharp
public double GitPollIntervalSeconds { get; set; }
```

- *Type:* double

Interval at which Waypoint should poll git repository for changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_poll_interval_seconds Project#git_poll_interval_seconds}

---

##### `GitRef`<sup>Optional</sup> <a name="GitRef" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitRef"></a>

```csharp
public string GitRef { get; set; }
```

- *Type:* string

Git repository ref containing waypoint.hcl file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_ref Project#git_ref}

---

##### `GitUrl`<sup>Optional</sup> <a name="GitUrl" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitUrl"></a>

```csharp
public string GitUrl { get; set; }
```

- *Type:* string

Url of git repository storing the waypoint.hcl file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_url Project#git_url}

---

##### `IgnoreChangesOutsidePath`<sup>Optional</sup> <a name="IgnoreChangesOutsidePath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.ignoreChangesOutsidePath"></a>

```csharp
public object IgnoreChangesOutsidePath { get; set; }
```

- *Type:* object

Whether Waypoint ignores changes outside path storing waypoint.hcl file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#ignore_changes_outside_path Project#ignore_changes_outside_path}

---

### ProjectGitAuthBasic <a name="ProjectGitAuthBasic" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new ProjectGitAuthBasic {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.password">Password</a></code> | <code>string</code> | Git password. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.username">Username</a></code> | <code>string</code> | Git username. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Git password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#password Project#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Git username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#username Project#username}

---

### ProjectGitAuthSsh <a name="ProjectGitAuthSsh" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new ProjectGitAuthSsh {
    string SshPrivateKey,
    string GitUser = null,
    string Passphrase = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.sshPrivateKey">SshPrivateKey</a></code> | <code>string</code> | Private key to authenticate to Git. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.gitUser">GitUser</a></code> | <code>string</code> | Git user associated with private key. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.passphrase">Passphrase</a></code> | <code>string</code> | Passphrase to use with private key. |

---

##### `SshPrivateKey`<sup>Required</sup> <a name="SshPrivateKey" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.sshPrivateKey"></a>

```csharp
public string SshPrivateKey { get; set; }
```

- *Type:* string

Private key to authenticate to Git.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#ssh_private_key Project#ssh_private_key}

---

##### `GitUser`<sup>Optional</sup> <a name="GitUser" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.gitUser"></a>

```csharp
public string GitUser { get; set; }
```

- *Type:* string

Git user associated with private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_user Project#git_user}

---

##### `Passphrase`<sup>Optional</sup> <a name="Passphrase" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.passphrase"></a>

```csharp
public string Passphrase { get; set; }
```

- *Type:* string

Passphrase to use with private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#passphrase Project#passphrase}

---

### ProjectProjectVariables <a name="ProjectProjectVariables" id="@cdktf/provider-waypoint.project.ProjectProjectVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new ProjectProjectVariables {
    string Name,
    string Value,
    object Sensitive = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#name Project#name}. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#value Project#value}. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables.property.sensitive">Sensitive</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#sensitive Project#sensitive}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#name Project#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#value Project#value}.

---

##### `Sensitive`<sup>Optional</sup> <a name="Sensitive" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.property.sensitive"></a>

```csharp
public object Sensitive { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#sensitive Project#sensitive}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectDataSourceGitOutputReference <a name="ProjectDataSourceGitOutputReference" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new ProjectDataSourceGitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileChangeSignal` <a name="ResetFileChangeSignal" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetFileChangeSignal"></a>

```csharp
private void ResetFileChangeSignal()
```

##### `ResetGitPath` <a name="ResetGitPath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitPath"></a>

```csharp
private void ResetGitPath()
```

##### `ResetGitPollIntervalSeconds` <a name="ResetGitPollIntervalSeconds" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitPollIntervalSeconds"></a>

```csharp
private void ResetGitPollIntervalSeconds()
```

##### `ResetGitRef` <a name="ResetGitRef" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitRef"></a>

```csharp
private void ResetGitRef()
```

##### `ResetGitUrl` <a name="ResetGitUrl" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitUrl"></a>

```csharp
private void ResetGitUrl()
```

##### `ResetIgnoreChangesOutsidePath` <a name="ResetIgnoreChangesOutsidePath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetIgnoreChangesOutsidePath"></a>

```csharp
private void ResetIgnoreChangesOutsidePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignalInput">FileChangeSignalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPathInput">GitPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSecondsInput">GitPollIntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRefInput">GitRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrlInput">GitUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePathInput">IgnoreChangesOutsidePathInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignal">FileChangeSignal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPath">GitPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSeconds">GitPollIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRef">GitRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrl">GitUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePath">IgnoreChangesOutsidePath</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileChangeSignalInput`<sup>Optional</sup> <a name="FileChangeSignalInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignalInput"></a>

```csharp
public string FileChangeSignalInput { get; }
```

- *Type:* string

---

##### `GitPathInput`<sup>Optional</sup> <a name="GitPathInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPathInput"></a>

```csharp
public string GitPathInput { get; }
```

- *Type:* string

---

##### `GitPollIntervalSecondsInput`<sup>Optional</sup> <a name="GitPollIntervalSecondsInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSecondsInput"></a>

```csharp
public double GitPollIntervalSecondsInput { get; }
```

- *Type:* double

---

##### `GitRefInput`<sup>Optional</sup> <a name="GitRefInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRefInput"></a>

```csharp
public string GitRefInput { get; }
```

- *Type:* string

---

##### `GitUrlInput`<sup>Optional</sup> <a name="GitUrlInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrlInput"></a>

```csharp
public string GitUrlInput { get; }
```

- *Type:* string

---

##### `IgnoreChangesOutsidePathInput`<sup>Optional</sup> <a name="IgnoreChangesOutsidePathInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePathInput"></a>

```csharp
public object IgnoreChangesOutsidePathInput { get; }
```

- *Type:* object

---

##### `FileChangeSignal`<sup>Required</sup> <a name="FileChangeSignal" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignal"></a>

```csharp
public string FileChangeSignal { get; }
```

- *Type:* string

---

##### `GitPath`<sup>Required</sup> <a name="GitPath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPath"></a>

```csharp
public string GitPath { get; }
```

- *Type:* string

---

##### `GitPollIntervalSeconds`<sup>Required</sup> <a name="GitPollIntervalSeconds" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSeconds"></a>

```csharp
public double GitPollIntervalSeconds { get; }
```

- *Type:* double

---

##### `GitRef`<sup>Required</sup> <a name="GitRef" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRef"></a>

```csharp
public string GitRef { get; }
```

- *Type:* string

---

##### `GitUrl`<sup>Required</sup> <a name="GitUrl" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrl"></a>

```csharp
public string GitUrl { get; }
```

- *Type:* string

---

##### `IgnoreChangesOutsidePath`<sup>Required</sup> <a name="IgnoreChangesOutsidePath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePath"></a>

```csharp
public object IgnoreChangesOutsidePath { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectGitAuthBasicOutputReference <a name="ProjectGitAuthBasicOutputReference" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new ProjectGitAuthBasicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectGitAuthSshOutputReference <a name="ProjectGitAuthSshOutputReference" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new ProjectGitAuthSshOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGitUser` <a name="ResetGitUser" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resetGitUser"></a>

```csharp
private void ResetGitUser()
```

##### `ResetPassphrase` <a name="ResetPassphrase" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resetPassphrase"></a>

```csharp
private void ResetPassphrase()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUserInput">GitUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphraseInput">PassphraseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKeyInput">SshPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUser">GitUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphrase">Passphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKey">SshPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GitUserInput`<sup>Optional</sup> <a name="GitUserInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUserInput"></a>

```csharp
public string GitUserInput { get; }
```

- *Type:* string

---

##### `PassphraseInput`<sup>Optional</sup> <a name="PassphraseInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphraseInput"></a>

```csharp
public string PassphraseInput { get; }
```

- *Type:* string

---

##### `SshPrivateKeyInput`<sup>Optional</sup> <a name="SshPrivateKeyInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKeyInput"></a>

```csharp
public string SshPrivateKeyInput { get; }
```

- *Type:* string

---

##### `GitUser`<sup>Required</sup> <a name="GitUser" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUser"></a>

```csharp
public string GitUser { get; }
```

- *Type:* string

---

##### `Passphrase`<sup>Required</sup> <a name="Passphrase" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphrase"></a>

```csharp
public string Passphrase { get; }
```

- *Type:* string

---

##### `SshPrivateKey`<sup>Required</sup> <a name="SshPrivateKey" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKey"></a>

```csharp
public string SshPrivateKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectProjectVariablesList <a name="ProjectProjectVariablesList" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new ProjectProjectVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.get"></a>

```csharp
private ProjectProjectVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectProjectVariablesOutputReference <a name="ProjectProjectVariablesOutputReference" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new ProjectProjectVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSensitive` <a name="ResetSensitive" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resetSensitive"></a>

```csharp
private void ResetSensitive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitiveInput">SensitiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitive">Sensitive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SensitiveInput`<sup>Optional</sup> <a name="SensitiveInput" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitiveInput"></a>

```csharp
public object SensitiveInput { get; }
```

- *Type:* object

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Sensitive`<sup>Required</sup> <a name="Sensitive" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitive"></a>

```csharp
public object Sensitive { get; }
```

- *Type:* object

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




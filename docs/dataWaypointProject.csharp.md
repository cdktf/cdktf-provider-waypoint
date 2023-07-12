# `data_waypoint_project`

Refer to the Terraform Registory for docs: [`data_waypoint_project`](https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project).

# `dataWaypointProject` Submodule <a name="`dataWaypointProject` Submodule" id="@cdktf/provider-waypoint.dataWaypointProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWaypointProject <a name="DataWaypointProject" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project waypoint_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new DataWaypointProject(Construct Scope, string Id, DataWaypointProjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig">DataWaypointProjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

DataWaypointProject.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

DataWaypointProject.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

DataWaypointProject.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.applications">Applications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.appStatusPollSeconds">AppStatusPollSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.dataSourceGit">DataSourceGit</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference">DataWaypointProjectDataSourceGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.gitAuthBasic">GitAuthBasic</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference">DataWaypointProjectGitAuthBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.gitAuthSsh">GitAuthSsh</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference">DataWaypointProjectGitAuthSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectVariables">ProjectVariables</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList">DataWaypointProjectProjectVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.remoteRunnersEnabled">RemoteRunnersEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectNameInput">ProjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectName">ProjectName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Applications`<sup>Required</sup> <a name="Applications" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.applications"></a>

```csharp
public string[] Applications { get; }
```

- *Type:* string[]

---

##### `AppStatusPollSeconds`<sup>Required</sup> <a name="AppStatusPollSeconds" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.appStatusPollSeconds"></a>

```csharp
public double AppStatusPollSeconds { get; }
```

- *Type:* double

---

##### `DataSourceGit`<sup>Required</sup> <a name="DataSourceGit" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.dataSourceGit"></a>

```csharp
public DataWaypointProjectDataSourceGitOutputReference DataSourceGit { get; }
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference">DataWaypointProjectDataSourceGitOutputReference</a>

---

##### `GitAuthBasic`<sup>Required</sup> <a name="GitAuthBasic" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.gitAuthBasic"></a>

```csharp
public DataWaypointProjectGitAuthBasicOutputReference GitAuthBasic { get; }
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference">DataWaypointProjectGitAuthBasicOutputReference</a>

---

##### `GitAuthSsh`<sup>Required</sup> <a name="GitAuthSsh" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.gitAuthSsh"></a>

```csharp
public DataWaypointProjectGitAuthSshOutputReference GitAuthSsh { get; }
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference">DataWaypointProjectGitAuthSshOutputReference</a>

---

##### `ProjectVariables`<sup>Required</sup> <a name="ProjectVariables" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectVariables"></a>

```csharp
public DataWaypointProjectProjectVariablesList ProjectVariables { get; }
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList">DataWaypointProjectProjectVariablesList</a>

---

##### `RemoteRunnersEnabled`<sup>Required</sup> <a name="RemoteRunnersEnabled" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.remoteRunnersEnabled"></a>

```csharp
public IResolvable RemoteRunnersEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ProjectNameInput`<sup>Optional</sup> <a name="ProjectNameInput" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectNameInput"></a>

```csharp
public string ProjectNameInput { get; }
```

- *Type:* string

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectName"></a>

```csharp
public string ProjectName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWaypointProjectConfig <a name="DataWaypointProjectConfig" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new DataWaypointProjectConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ProjectName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.projectName">ProjectName</a></code> | <code>string</code> | The name of the Waypoint project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.projectName"></a>

```csharp
public string ProjectName { get; set; }
```

- *Type:* string

The name of the Waypoint project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#project_name DataWaypointProject#project_name}

---

### DataWaypointProjectDataSourceGit <a name="DataWaypointProjectDataSourceGit" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new DataWaypointProjectDataSourceGit {

};
```


### DataWaypointProjectGitAuthBasic <a name="DataWaypointProjectGitAuthBasic" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new DataWaypointProjectGitAuthBasic {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.property.password">Password</a></code> | <code>string</code> | Git password. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.property.username">Username</a></code> | <code>string</code> | Git username. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Git password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#password DataWaypointProject#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Git username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#username DataWaypointProject#username}

---

### DataWaypointProjectGitAuthSsh <a name="DataWaypointProjectGitAuthSsh" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new DataWaypointProjectGitAuthSsh {
    string SshPrivateKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh.property.sshPrivateKey">SshPrivateKey</a></code> | <code>string</code> | Private key to authenticate to Git. |

---

##### `SshPrivateKey`<sup>Required</sup> <a name="SshPrivateKey" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh.property.sshPrivateKey"></a>

```csharp
public string SshPrivateKey { get; set; }
```

- *Type:* string

Private key to authenticate to Git.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#ssh_private_key DataWaypointProject#ssh_private_key}

---

### DataWaypointProjectProjectVariables <a name="DataWaypointProjectProjectVariables" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new DataWaypointProjectProjectVariables {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#name DataWaypointProject#name}. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#value DataWaypointProject#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#name DataWaypointProject#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#value DataWaypointProject#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataWaypointProjectDataSourceGitOutputReference <a name="DataWaypointProjectDataSourceGitOutputReference" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new DataWaypointProjectDataSourceGitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.fileChangeSignal">FileChangeSignal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitPath">GitPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitPollIntervalSeconds">GitPollIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitRef">GitRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitUrl">GitUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePath">IgnoreChangesOutsidePath</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGit">DataWaypointProjectDataSourceGit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileChangeSignal`<sup>Required</sup> <a name="FileChangeSignal" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.fileChangeSignal"></a>

```csharp
public string FileChangeSignal { get; }
```

- *Type:* string

---

##### `GitPath`<sup>Required</sup> <a name="GitPath" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitPath"></a>

```csharp
public string GitPath { get; }
```

- *Type:* string

---

##### `GitPollIntervalSeconds`<sup>Required</sup> <a name="GitPollIntervalSeconds" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitPollIntervalSeconds"></a>

```csharp
public double GitPollIntervalSeconds { get; }
```

- *Type:* double

---

##### `GitRef`<sup>Required</sup> <a name="GitRef" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitRef"></a>

```csharp
public string GitRef { get; }
```

- *Type:* string

---

##### `GitUrl`<sup>Required</sup> <a name="GitUrl" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitUrl"></a>

```csharp
public string GitUrl { get; }
```

- *Type:* string

---

##### `IgnoreChangesOutsidePath`<sup>Required</sup> <a name="IgnoreChangesOutsidePath" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePath"></a>

```csharp
public IResolvable IgnoreChangesOutsidePath { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.internalValue"></a>

```csharp
public DataWaypointProjectDataSourceGit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGit">DataWaypointProjectDataSourceGit</a>

---


### DataWaypointProjectGitAuthBasicOutputReference <a name="DataWaypointProjectGitAuthBasicOutputReference" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new DataWaypointProjectGitAuthBasicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic">DataWaypointProjectGitAuthBasic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.internalValue"></a>

```csharp
public DataWaypointProjectGitAuthBasic InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic">DataWaypointProjectGitAuthBasic</a>

---


### DataWaypointProjectGitAuthSshOutputReference <a name="DataWaypointProjectGitAuthSshOutputReference" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new DataWaypointProjectGitAuthSshOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.gitUser">GitUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.passphrase">Passphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.sshPrivateKeyInput">SshPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.sshPrivateKey">SshPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh">DataWaypointProjectGitAuthSsh</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GitUser`<sup>Required</sup> <a name="GitUser" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.gitUser"></a>

```csharp
public string GitUser { get; }
```

- *Type:* string

---

##### `Passphrase`<sup>Required</sup> <a name="Passphrase" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.passphrase"></a>

```csharp
public string Passphrase { get; }
```

- *Type:* string

---

##### `SshPrivateKeyInput`<sup>Optional</sup> <a name="SshPrivateKeyInput" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.sshPrivateKeyInput"></a>

```csharp
public string SshPrivateKeyInput { get; }
```

- *Type:* string

---

##### `SshPrivateKey`<sup>Required</sup> <a name="SshPrivateKey" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.sshPrivateKey"></a>

```csharp
public string SshPrivateKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.internalValue"></a>

```csharp
public DataWaypointProjectGitAuthSsh InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh">DataWaypointProjectGitAuthSsh</a>

---


### DataWaypointProjectProjectVariablesList <a name="DataWaypointProjectProjectVariablesList" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new DataWaypointProjectProjectVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.get"></a>

```csharp
private DataWaypointProjectProjectVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataWaypointProjectProjectVariablesOutputReference <a name="DataWaypointProjectProjectVariablesOutputReference" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new DataWaypointProjectProjectVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.sensitive">Sensitive</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables">DataWaypointProjectProjectVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sensitive`<sup>Required</sup> <a name="Sensitive" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.sensitive"></a>

```csharp
public IResolvable Sensitive { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.internalValue"></a>

```csharp
public DataWaypointProjectProjectVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables">DataWaypointProjectProjectVariables</a>

---




# `data_waypoint_runner_profile`

Refer to the Terraform Registory for docs: [`data_waypoint_runner_profile`](https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/runner_profile).

# `dataWaypointRunnerProfile` Submodule <a name="`dataWaypointRunnerProfile` Submodule" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWaypointRunnerProfile <a name="DataWaypointRunnerProfile" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/runner_profile waypoint_runner_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new DataWaypointRunnerProfile(Construct Scope, string Id, DataWaypointRunnerProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig">DataWaypointRunnerProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

DataWaypointRunnerProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

DataWaypointRunnerProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

DataWaypointRunnerProfile.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

DataWaypointRunnerProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataWaypointRunnerProfile resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataWaypointRunnerProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataWaypointRunnerProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/runner_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataWaypointRunnerProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.default">Default</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.environmentVariables">EnvironmentVariables</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.pluginConfig">PluginConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.pluginConfigFormat">PluginConfigFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.pluginType">PluginType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.profileName">ProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.targetRunnerId">TargetRunnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.targetRunnerLabels">TargetRunnerLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.default"></a>

```csharp
public IResolvable Default { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.environmentVariables"></a>

```csharp
public StringMap EnvironmentVariables { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `PluginConfig`<sup>Required</sup> <a name="PluginConfig" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.pluginConfig"></a>

```csharp
public string PluginConfig { get; }
```

- *Type:* string

---

##### `PluginConfigFormat`<sup>Required</sup> <a name="PluginConfigFormat" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.pluginConfigFormat"></a>

```csharp
public string PluginConfigFormat { get; }
```

- *Type:* string

---

##### `PluginType`<sup>Required</sup> <a name="PluginType" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.pluginType"></a>

```csharp
public string PluginType { get; }
```

- *Type:* string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.profileName"></a>

```csharp
public string ProfileName { get; }
```

- *Type:* string

---

##### `TargetRunnerId`<sup>Required</sup> <a name="TargetRunnerId" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.targetRunnerId"></a>

```csharp
public string TargetRunnerId { get; }
```

- *Type:* string

---

##### `TargetRunnerLabels`<sup>Required</sup> <a name="TargetRunnerLabels" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.targetRunnerLabels"></a>

```csharp
public StringMap TargetRunnerLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWaypointRunnerProfileConfig <a name="DataWaypointRunnerProfileConfig" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new DataWaypointRunnerProfileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.id">Id</a></code> | <code>string</code> | The id of the Runner profile. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-waypoint.dataWaypointRunnerProfile.DataWaypointRunnerProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The id of the Runner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/runner_profile#id DataWaypointRunnerProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




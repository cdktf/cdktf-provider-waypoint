# `waypoint_runner_profile`

Refer to the Terraform Registory for docs: [`waypoint_runner_profile`](https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile).

# `runnerProfile` Submodule <a name="`runnerProfile` Submodule" id="@cdktf/provider-waypoint.runnerProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RunnerProfile <a name="RunnerProfile" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile waypoint_runner_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new RunnerProfile(Construct Scope, string Id, RunnerProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig">RunnerProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetOciUrl">ResetOciUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetPluginConfig">ResetPluginConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetPluginConfigFormat">ResetPluginConfigFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetTargetRunnerId">ResetTargetRunnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetTargetRunnerLabels">ResetTargetRunnerLabels</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetOciUrl` <a name="ResetOciUrl" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetOciUrl"></a>

```csharp
private void ResetOciUrl()
```

##### `ResetPluginConfig` <a name="ResetPluginConfig" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetPluginConfig"></a>

```csharp
private void ResetPluginConfig()
```

##### `ResetPluginConfigFormat` <a name="ResetPluginConfigFormat" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetPluginConfigFormat"></a>

```csharp
private void ResetPluginConfigFormat()
```

##### `ResetTargetRunnerId` <a name="ResetTargetRunnerId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetTargetRunnerId"></a>

```csharp
private void ResetTargetRunnerId()
```

##### `ResetTargetRunnerLabels` <a name="ResetTargetRunnerLabels" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetTargetRunnerLabels"></a>

```csharp
private void ResetTargetRunnerLabels()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

RunnerProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

RunnerProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

RunnerProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.defaultInput">DefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrlInput">OciUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormatInput">PluginConfigFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigInput">PluginConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginTypeInput">PluginTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerIdInput">TargetRunnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabelsInput">TargetRunnerLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.default">Default</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfig">PluginConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormat">PluginConfigFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginType">PluginType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerId">TargetRunnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabels">TargetRunnerLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.defaultInput"></a>

```csharp
public object DefaultInput { get; }
```

- *Type:* object

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OciUrlInput`<sup>Optional</sup> <a name="OciUrlInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrlInput"></a>

```csharp
public string OciUrlInput { get; }
```

- *Type:* string

---

##### `PluginConfigFormatInput`<sup>Optional</sup> <a name="PluginConfigFormatInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormatInput"></a>

```csharp
public string PluginConfigFormatInput { get; }
```

- *Type:* string

---

##### `PluginConfigInput`<sup>Optional</sup> <a name="PluginConfigInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigInput"></a>

```csharp
public string PluginConfigInput { get; }
```

- *Type:* string

---

##### `PluginTypeInput`<sup>Optional</sup> <a name="PluginTypeInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginTypeInput"></a>

```csharp
public string PluginTypeInput { get; }
```

- *Type:* string

---

##### `TargetRunnerIdInput`<sup>Optional</sup> <a name="TargetRunnerIdInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerIdInput"></a>

```csharp
public string TargetRunnerIdInput { get; }
```

- *Type:* string

---

##### `TargetRunnerLabelsInput`<sup>Optional</sup> <a name="TargetRunnerLabelsInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TargetRunnerLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.default"></a>

```csharp
public object Default { get; }
```

- *Type:* object

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `PluginConfig`<sup>Required</sup> <a name="PluginConfig" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfig"></a>

```csharp
public string PluginConfig { get; }
```

- *Type:* string

---

##### `PluginConfigFormat`<sup>Required</sup> <a name="PluginConfigFormat" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormat"></a>

```csharp
public string PluginConfigFormat { get; }
```

- *Type:* string

---

##### `PluginType`<sup>Required</sup> <a name="PluginType" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginType"></a>

```csharp
public string PluginType { get; }
```

- *Type:* string

---

##### `TargetRunnerId`<sup>Required</sup> <a name="TargetRunnerId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerId"></a>

```csharp
public string TargetRunnerId { get; }
```

- *Type:* string

---

##### `TargetRunnerLabels`<sup>Required</sup> <a name="TargetRunnerLabels" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TargetRunnerLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RunnerProfileConfig <a name="RunnerProfileConfig" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new RunnerProfileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string PluginType,
    object Default = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    string OciUrl = null,
    string PluginConfig = null,
    string PluginConfigFormat = null,
    string TargetRunnerId = null,
    System.Collections.Generic.IDictionary<string, string> TargetRunnerLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.name">Name</a></code> | <code>string</code> | The name of the runner profile. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginType">PluginType</a></code> | <code>string</code> | Plugin type for runner i.e docker / kubernetes / aws-ecs. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.default">Default</a></code> | <code>object</code> | Indicates if this runner profile is the default for any new projects. The default is false. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Any environment variables that should be exposed to the on demand runner. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.ociUrl">OciUrl</a></code> | <code>string</code> | oci_url is the OCI image that will be used to boot the on demand runner. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfig">PluginConfig</a></code> | <code>string</code> | Plugin config is the configuration for the plugin that is created. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfigFormat">PluginConfigFormat</a></code> | <code>string</code> | Config format specifies the format of plugin_config. Valid values are HCL or JSON. The default is HCL. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerId">TargetRunnerId</a></code> | <code>string</code> | The ID of the target runner for this profile. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerLabels">TargetRunnerLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of labels on target runners. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the runner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#name RunnerProfile#name}

---

##### `PluginType`<sup>Required</sup> <a name="PluginType" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginType"></a>

```csharp
public string PluginType { get; set; }
```

- *Type:* string

Plugin type for runner i.e docker / kubernetes / aws-ecs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_type RunnerProfile#plugin_type}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.default"></a>

```csharp
public object Default { get; set; }
```

- *Type:* object

Indicates if this runner profile is the default for any new projects. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#default RunnerProfile#default}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Any environment variables that should be exposed to the on demand runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#environment_variables RunnerProfile#environment_variables}

---

##### `OciUrl`<sup>Optional</sup> <a name="OciUrl" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.ociUrl"></a>

```csharp
public string OciUrl { get; set; }
```

- *Type:* string

oci_url is the OCI image that will be used to boot the on demand runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#oci_url RunnerProfile#oci_url}

---

##### `PluginConfig`<sup>Optional</sup> <a name="PluginConfig" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfig"></a>

```csharp
public string PluginConfig { get; set; }
```

- *Type:* string

Plugin config is the configuration for the plugin that is created.

It is usually HCL and is decoded like the other plugins, and is plugin specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_config RunnerProfile#plugin_config}

---

##### `PluginConfigFormat`<sup>Optional</sup> <a name="PluginConfigFormat" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfigFormat"></a>

```csharp
public string PluginConfigFormat { get; set; }
```

- *Type:* string

Config format specifies the format of plugin_config. Valid values are HCL or JSON. The default is HCL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_config_format RunnerProfile#plugin_config_format}

---

##### `TargetRunnerId`<sup>Optional</sup> <a name="TargetRunnerId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerId"></a>

```csharp
public string TargetRunnerId { get; set; }
```

- *Type:* string

The ID of the target runner for this profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#target_runner_id RunnerProfile#target_runner_id}

---

##### `TargetRunnerLabels`<sup>Optional</sup> <a name="TargetRunnerLabels" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TargetRunnerLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of labels on target runners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#target_runner_labels RunnerProfile#target_runner_labels}

---




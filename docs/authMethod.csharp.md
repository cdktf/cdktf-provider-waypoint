# `waypoint_auth_method`

Refer to the Terraform Registory for docs: [`waypoint_auth_method`](https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method).

# `authMethod` Submodule <a name="`authMethod` Submodule" id="@cdktf/provider-waypoint.authMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthMethod <a name="AuthMethod" id="@cdktf/provider-waypoint.authMethod.AuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method waypoint_auth_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new AuthMethod(Construct Scope, string Id, AuthMethodConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig">AuthMethodConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig">AuthMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetAccessorSelector">ResetAccessorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetAllowedRedirectUris">ResetAllowedRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetAuds">ResetAuds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetClaimMappings">ResetClaimMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetDiscoveryCaPem">ResetDiscoveryCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetListClaimMappings">ResetListClaimMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetSigningAlgs">ResetSigningAlgs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-waypoint.authMethod.AuthMethod.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-waypoint.authMethod.AuthMethod.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-waypoint.authMethod.AuthMethod.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-waypoint.authMethod.AuthMethod.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-waypoint.authMethod.AuthMethod.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-waypoint.authMethod.AuthMethod.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccessorSelector` <a name="ResetAccessorSelector" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetAccessorSelector"></a>

```csharp
private void ResetAccessorSelector()
```

##### `ResetAllowedRedirectUris` <a name="ResetAllowedRedirectUris" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetAllowedRedirectUris"></a>

```csharp
private void ResetAllowedRedirectUris()
```

##### `ResetAuds` <a name="ResetAuds" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetAuds"></a>

```csharp
private void ResetAuds()
```

##### `ResetClaimMappings` <a name="ResetClaimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetClaimMappings"></a>

```csharp
private void ResetClaimMappings()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDiscoveryCaPem` <a name="ResetDiscoveryCaPem" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetDiscoveryCaPem"></a>

```csharp
private void ResetDiscoveryCaPem()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetListClaimMappings` <a name="ResetListClaimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetListClaimMappings"></a>

```csharp
private void ResetListClaimMappings()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetScopes"></a>

```csharp
private void ResetScopes()
```

##### `ResetSigningAlgs` <a name="ResetSigningAlgs" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetSigningAlgs"></a>

```csharp
private void ResetSigningAlgs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

AuthMethod.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

AuthMethod.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

AuthMethod.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.accessorSelectorInput">AccessorSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.allowedRedirectUrisInput">AllowedRedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.audsInput">AudsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.claimMappingsInput">ClaimMappingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryCaPemInput">DiscoveryCaPemInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryUrlInput">DiscoveryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.listClaimMappingsInput">ListClaimMappingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.signingAlgsInput">SigningAlgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.accessorSelector">AccessorSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.allowedRedirectUris">AllowedRedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.auds">Auds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.claimMappings">ClaimMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryCaPem">DiscoveryCaPem</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.listClaimMappings">ListClaimMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.signingAlgs">SigningAlgs</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessorSelectorInput`<sup>Optional</sup> <a name="AccessorSelectorInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.accessorSelectorInput"></a>

```csharp
public string AccessorSelectorInput { get; }
```

- *Type:* string

---

##### `AllowedRedirectUrisInput`<sup>Optional</sup> <a name="AllowedRedirectUrisInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.allowedRedirectUrisInput"></a>

```csharp
public string[] AllowedRedirectUrisInput { get; }
```

- *Type:* string[]

---

##### `AudsInput`<sup>Optional</sup> <a name="AudsInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.audsInput"></a>

```csharp
public string[] AudsInput { get; }
```

- *Type:* string[]

---

##### `ClaimMappingsInput`<sup>Optional</sup> <a name="ClaimMappingsInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.claimMappingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClaimMappingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DiscoveryCaPemInput`<sup>Optional</sup> <a name="DiscoveryCaPemInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryCaPemInput"></a>

```csharp
public string[] DiscoveryCaPemInput { get; }
```

- *Type:* string[]

---

##### `DiscoveryUrlInput`<sup>Optional</sup> <a name="DiscoveryUrlInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryUrlInput"></a>

```csharp
public string DiscoveryUrlInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ListClaimMappingsInput`<sup>Optional</sup> <a name="ListClaimMappingsInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.listClaimMappingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ListClaimMappingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `SigningAlgsInput`<sup>Optional</sup> <a name="SigningAlgsInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.signingAlgsInput"></a>

```csharp
public string[] SigningAlgsInput { get; }
```

- *Type:* string[]

---

##### `AccessorSelector`<sup>Required</sup> <a name="AccessorSelector" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.accessorSelector"></a>

```csharp
public string AccessorSelector { get; }
```

- *Type:* string

---

##### `AllowedRedirectUris`<sup>Required</sup> <a name="AllowedRedirectUris" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.allowedRedirectUris"></a>

```csharp
public string[] AllowedRedirectUris { get; }
```

- *Type:* string[]

---

##### `Auds`<sup>Required</sup> <a name="Auds" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.auds"></a>

```csharp
public string[] Auds { get; }
```

- *Type:* string[]

---

##### `ClaimMappings`<sup>Required</sup> <a name="ClaimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.claimMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClaimMappings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DiscoveryCaPem`<sup>Required</sup> <a name="DiscoveryCaPem" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryCaPem"></a>

```csharp
public string[] DiscoveryCaPem { get; }
```

- *Type:* string[]

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ListClaimMappings`<sup>Required</sup> <a name="ListClaimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.listClaimMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ListClaimMappings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `SigningAlgs`<sup>Required</sup> <a name="SigningAlgs" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.signingAlgs"></a>

```csharp
public string[] SigningAlgs { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthMethodConfig <a name="AuthMethodConfig" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Waypoint;

new AuthMethodConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClientId,
    string ClientSecret,
    string DiscoveryUrl,
    string Name,
    string AccessorSelector = null,
    string[] AllowedRedirectUris = null,
    string[] Auds = null,
    System.Collections.Generic.IDictionary<string, string> ClaimMappings = null,
    string Description = null,
    string[] DiscoveryCaPem = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> ListClaimMappings = null,
    string[] Scopes = null,
    string[] SigningAlgs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.clientId">ClientId</a></code> | <code>string</code> | Client ID of OIDC provider. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Client Secret of OIDC provider. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | Discovery URL for OIDC provider. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.name">Name</a></code> | <code>string</code> | The name of the Auth Method. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.accessorSelector">AccessorSelector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#accessor_selector AuthMethod#accessor_selector}. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.allowedRedirectUris">AllowedRedirectUris</a></code> | <code>string[]</code> | Allowed URI for auth redirection. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.auds">Auds</a></code> | <code>string[]</code> | The optional audience claims required. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.claimMappings">ClaimMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Mapping of a claim to a variable value for the access selector. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.description">Description</a></code> | <code>string</code> | Description of auth method. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.discoveryCaPem">DiscoveryCaPem</a></code> | <code>string[]</code> | Optional CA certificate chain to validate the discovery URL. Multiple CA certificates can be specified to support easier rotation. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the Auth Method. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.listClaimMappings">ListClaimMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Same as claim_mappings but for list values. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | The optional claims scope requested. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.signingAlgs">SigningAlgs</a></code> | <code>string[]</code> | The signing algorithms supported by the OIDC connect server. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Client ID of OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#client_id AuthMethod#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Client Secret of OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#client_secret AuthMethod#client_secret}

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; set; }
```

- *Type:* string

Discovery URL for OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#discovery_url AuthMethod#discovery_url}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#name AuthMethod#name}

---

##### `AccessorSelector`<sup>Optional</sup> <a name="AccessorSelector" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.accessorSelector"></a>

```csharp
public string AccessorSelector { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#accessor_selector AuthMethod#accessor_selector}.

---

##### `AllowedRedirectUris`<sup>Optional</sup> <a name="AllowedRedirectUris" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.allowedRedirectUris"></a>

```csharp
public string[] AllowedRedirectUris { get; set; }
```

- *Type:* string[]

Allowed URI for auth redirection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#allowed_redirect_uris AuthMethod#allowed_redirect_uris}

---

##### `Auds`<sup>Optional</sup> <a name="Auds" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.auds"></a>

```csharp
public string[] Auds { get; set; }
```

- *Type:* string[]

The optional audience claims required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#auds AuthMethod#auds}

---

##### `ClaimMappings`<sup>Optional</sup> <a name="ClaimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.claimMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClaimMappings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Mapping of a claim to a variable value for the access selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#claim_mappings AuthMethod#claim_mappings}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#description AuthMethod#description}

---

##### `DiscoveryCaPem`<sup>Optional</sup> <a name="DiscoveryCaPem" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.discoveryCaPem"></a>

```csharp
public string[] DiscoveryCaPem { get; set; }
```

- *Type:* string[]

Optional CA certificate chain to validate the discovery URL. Multiple CA certificates can be specified to support easier rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#discovery_ca_pem AuthMethod#discovery_ca_pem}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#display_name AuthMethod#display_name}

---

##### `ListClaimMappings`<sup>Optional</sup> <a name="ListClaimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.listClaimMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ListClaimMappings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Same as claim_mappings but for list values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#list_claim_mappings AuthMethod#list_claim_mappings}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

The optional claims scope requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#scopes AuthMethod#scopes}

---

##### `SigningAlgs`<sup>Optional</sup> <a name="SigningAlgs" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.signingAlgs"></a>

```csharp
public string[] SigningAlgs { get; set; }
```

- *Type:* string[]

The signing algorithms supported by the OIDC connect server.

If this isn't specified, this will default to RS256 since that should be supported according to the RFC. The string values here should be valid OIDC signing algorithms

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#signing_algs AuthMethod#signing_algs}

---




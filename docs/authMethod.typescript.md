# `waypoint_auth_method`

Refer to the Terraform Registory for docs: [`waypoint_auth_method`](https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method).

# `authMethod` Submodule <a name="`authMethod` Submodule" id="@cdktf/provider-waypoint.authMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthMethod <a name="AuthMethod" id="@cdktf/provider-waypoint.authMethod.AuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method waypoint_auth_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer"></a>

```typescript
import { authMethod } from '@cdktf/provider-waypoint'

new authMethod.AuthMethod(scope: Construct, id: string, config: AuthMethodConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig">AuthMethodConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig">AuthMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetAccessorSelector">resetAccessorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetAllowedRedirectUris">resetAllowedRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetAuds">resetAuds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetClaimMappings">resetClaimMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetDiscoveryCaPem">resetDiscoveryCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetListClaimMappings">resetListClaimMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetSigningAlgs">resetSigningAlgs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.authMethod.AuthMethod.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-waypoint.authMethod.AuthMethod.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.authMethod.AuthMethod.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.authMethod.AuthMethod.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-waypoint.authMethod.AuthMethod.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-waypoint.authMethod.AuthMethod.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccessorSelector` <a name="resetAccessorSelector" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetAccessorSelector"></a>

```typescript
public resetAccessorSelector(): void
```

##### `resetAllowedRedirectUris` <a name="resetAllowedRedirectUris" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetAllowedRedirectUris"></a>

```typescript
public resetAllowedRedirectUris(): void
```

##### `resetAuds` <a name="resetAuds" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetAuds"></a>

```typescript
public resetAuds(): void
```

##### `resetClaimMappings` <a name="resetClaimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetClaimMappings"></a>

```typescript
public resetClaimMappings(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDiscoveryCaPem` <a name="resetDiscoveryCaPem" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetDiscoveryCaPem"></a>

```typescript
public resetDiscoveryCaPem(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetListClaimMappings` <a name="resetListClaimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetListClaimMappings"></a>

```typescript
public resetListClaimMappings(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetSigningAlgs` <a name="resetSigningAlgs" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetSigningAlgs"></a>

```typescript
public resetSigningAlgs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isConstruct"></a>

```typescript
import { authMethod } from '@cdktf/provider-waypoint'

authMethod.AuthMethod.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformElement"></a>

```typescript
import { authMethod } from '@cdktf/provider-waypoint'

authMethod.AuthMethod.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformResource"></a>

```typescript
import { authMethod } from '@cdktf/provider-waypoint'

authMethod.AuthMethod.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.accessorSelectorInput">accessorSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.allowedRedirectUrisInput">allowedRedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.audsInput">audsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.claimMappingsInput">claimMappingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryCaPemInput">discoveryCaPemInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryUrlInput">discoveryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.listClaimMappingsInput">listClaimMappingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.signingAlgsInput">signingAlgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.accessorSelector">accessorSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.allowedRedirectUris">allowedRedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.auds">auds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.claimMappings">claimMappings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryCaPem">discoveryCaPem</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryUrl">discoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.listClaimMappings">listClaimMappings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.signingAlgs">signingAlgs</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessorSelectorInput`<sup>Optional</sup> <a name="accessorSelectorInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.accessorSelectorInput"></a>

```typescript
public readonly accessorSelectorInput: string;
```

- *Type:* string

---

##### `allowedRedirectUrisInput`<sup>Optional</sup> <a name="allowedRedirectUrisInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.allowedRedirectUrisInput"></a>

```typescript
public readonly allowedRedirectUrisInput: string[];
```

- *Type:* string[]

---

##### `audsInput`<sup>Optional</sup> <a name="audsInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.audsInput"></a>

```typescript
public readonly audsInput: string[];
```

- *Type:* string[]

---

##### `claimMappingsInput`<sup>Optional</sup> <a name="claimMappingsInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.claimMappingsInput"></a>

```typescript
public readonly claimMappingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `discoveryCaPemInput`<sup>Optional</sup> <a name="discoveryCaPemInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryCaPemInput"></a>

```typescript
public readonly discoveryCaPemInput: string[];
```

- *Type:* string[]

---

##### `discoveryUrlInput`<sup>Optional</sup> <a name="discoveryUrlInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryUrlInput"></a>

```typescript
public readonly discoveryUrlInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `listClaimMappingsInput`<sup>Optional</sup> <a name="listClaimMappingsInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.listClaimMappingsInput"></a>

```typescript
public readonly listClaimMappingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `signingAlgsInput`<sup>Optional</sup> <a name="signingAlgsInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.signingAlgsInput"></a>

```typescript
public readonly signingAlgsInput: string[];
```

- *Type:* string[]

---

##### `accessorSelector`<sup>Required</sup> <a name="accessorSelector" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.accessorSelector"></a>

```typescript
public readonly accessorSelector: string;
```

- *Type:* string

---

##### `allowedRedirectUris`<sup>Required</sup> <a name="allowedRedirectUris" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.allowedRedirectUris"></a>

```typescript
public readonly allowedRedirectUris: string[];
```

- *Type:* string[]

---

##### `auds`<sup>Required</sup> <a name="auds" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.auds"></a>

```typescript
public readonly auds: string[];
```

- *Type:* string[]

---

##### `claimMappings`<sup>Required</sup> <a name="claimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.claimMappings"></a>

```typescript
public readonly claimMappings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `discoveryCaPem`<sup>Required</sup> <a name="discoveryCaPem" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryCaPem"></a>

```typescript
public readonly discoveryCaPem: string[];
```

- *Type:* string[]

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryUrl"></a>

```typescript
public readonly discoveryUrl: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `listClaimMappings`<sup>Required</sup> <a name="listClaimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.listClaimMappings"></a>

```typescript
public readonly listClaimMappings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `signingAlgs`<sup>Required</sup> <a name="signingAlgs" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.signingAlgs"></a>

```typescript
public readonly signingAlgs: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthMethodConfig <a name="AuthMethodConfig" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.Initializer"></a>

```typescript
import { authMethod } from '@cdktf/provider-waypoint'

const authMethodConfig: authMethod.AuthMethodConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.clientId">clientId</a></code> | <code>string</code> | Client ID of OIDC provider. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Client Secret of OIDC provider. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.discoveryUrl">discoveryUrl</a></code> | <code>string</code> | Discovery URL for OIDC provider. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.name">name</a></code> | <code>string</code> | The name of the Auth Method. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.accessorSelector">accessorSelector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#accessor_selector AuthMethod#accessor_selector}. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.allowedRedirectUris">allowedRedirectUris</a></code> | <code>string[]</code> | Allowed URI for auth redirection. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.auds">auds</a></code> | <code>string[]</code> | The optional audience claims required. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.claimMappings">claimMappings</a></code> | <code>{[ key: string ]: string}</code> | Mapping of a claim to a variable value for the access selector. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.description">description</a></code> | <code>string</code> | Description of auth method. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.discoveryCaPem">discoveryCaPem</a></code> | <code>string[]</code> | Optional CA certificate chain to validate the discovery URL. Multiple CA certificates can be specified to support easier rotation. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the Auth Method. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.listClaimMappings">listClaimMappings</a></code> | <code>{[ key: string ]: string}</code> | Same as claim_mappings but for list values. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.scopes">scopes</a></code> | <code>string[]</code> | The optional claims scope requested. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.signingAlgs">signingAlgs</a></code> | <code>string[]</code> | The signing algorithms supported by the OIDC connect server. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Client ID of OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#client_id AuthMethod#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Client Secret of OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#client_secret AuthMethod#client_secret}

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.discoveryUrl"></a>

```typescript
public readonly discoveryUrl: string;
```

- *Type:* string

Discovery URL for OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#discovery_url AuthMethod#discovery_url}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#name AuthMethod#name}

---

##### `accessorSelector`<sup>Optional</sup> <a name="accessorSelector" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.accessorSelector"></a>

```typescript
public readonly accessorSelector: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#accessor_selector AuthMethod#accessor_selector}.

---

##### `allowedRedirectUris`<sup>Optional</sup> <a name="allowedRedirectUris" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.allowedRedirectUris"></a>

```typescript
public readonly allowedRedirectUris: string[];
```

- *Type:* string[]

Allowed URI for auth redirection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#allowed_redirect_uris AuthMethod#allowed_redirect_uris}

---

##### `auds`<sup>Optional</sup> <a name="auds" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.auds"></a>

```typescript
public readonly auds: string[];
```

- *Type:* string[]

The optional audience claims required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#auds AuthMethod#auds}

---

##### `claimMappings`<sup>Optional</sup> <a name="claimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.claimMappings"></a>

```typescript
public readonly claimMappings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Mapping of a claim to a variable value for the access selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#claim_mappings AuthMethod#claim_mappings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#description AuthMethod#description}

---

##### `discoveryCaPem`<sup>Optional</sup> <a name="discoveryCaPem" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.discoveryCaPem"></a>

```typescript
public readonly discoveryCaPem: string[];
```

- *Type:* string[]

Optional CA certificate chain to validate the discovery URL. Multiple CA certificates can be specified to support easier rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#discovery_ca_pem AuthMethod#discovery_ca_pem}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#display_name AuthMethod#display_name}

---

##### `listClaimMappings`<sup>Optional</sup> <a name="listClaimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.listClaimMappings"></a>

```typescript
public readonly listClaimMappings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Same as claim_mappings but for list values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#list_claim_mappings AuthMethod#list_claim_mappings}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

The optional claims scope requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#scopes AuthMethod#scopes}

---

##### `signingAlgs`<sup>Optional</sup> <a name="signingAlgs" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.signingAlgs"></a>

```typescript
public readonly signingAlgs: string[];
```

- *Type:* string[]

The signing algorithms supported by the OIDC connect server.

If this isn't specified, this will default to RS256 since that should be supported according to the RFC. The string values here should be valid OIDC signing algorithms

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#signing_algs AuthMethod#signing_algs}

---




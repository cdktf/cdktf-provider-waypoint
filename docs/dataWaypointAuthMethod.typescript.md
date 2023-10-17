# `data_waypoint_auth_method`

Refer to the Terraform Registory for docs: [`data_waypoint_auth_method`](https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/auth_method).

# `dataWaypointAuthMethod` Submodule <a name="`dataWaypointAuthMethod` Submodule" id="@cdktf/provider-waypoint.dataWaypointAuthMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWaypointAuthMethod <a name="DataWaypointAuthMethod" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/auth_method waypoint_auth_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.Initializer"></a>

```typescript
import { dataWaypointAuthMethod } from '@cdktf/provider-waypoint'

new dataWaypointAuthMethod.DataWaypointAuthMethod(scope: Construct, id: string, config: DataWaypointAuthMethodConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig">DataWaypointAuthMethodConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig">DataWaypointAuthMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataWaypointAuthMethod resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.isConstruct"></a>

```typescript
import { dataWaypointAuthMethod } from '@cdktf/provider-waypoint'

dataWaypointAuthMethod.DataWaypointAuthMethod.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.isTerraformElement"></a>

```typescript
import { dataWaypointAuthMethod } from '@cdktf/provider-waypoint'

dataWaypointAuthMethod.DataWaypointAuthMethod.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.isTerraformDataSource"></a>

```typescript
import { dataWaypointAuthMethod } from '@cdktf/provider-waypoint'

dataWaypointAuthMethod.DataWaypointAuthMethod.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.generateConfigForImport"></a>

```typescript
import { dataWaypointAuthMethod } from '@cdktf/provider-waypoint'

dataWaypointAuthMethod.DataWaypointAuthMethod.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataWaypointAuthMethod resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataWaypointAuthMethod to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataWaypointAuthMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/auth_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataWaypointAuthMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.accessorSelector">accessorSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.allowedRedirectUris">allowedRedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.auds">auds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.claimMappings">claimMappings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.discoveryCaPem">discoveryCaPem</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.discoveryUrl">discoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.listClaimMappings">listClaimMappings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.signingAlgs">signingAlgs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessorSelector`<sup>Required</sup> <a name="accessorSelector" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.accessorSelector"></a>

```typescript
public readonly accessorSelector: string;
```

- *Type:* string

---

##### `allowedRedirectUris`<sup>Required</sup> <a name="allowedRedirectUris" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.allowedRedirectUris"></a>

```typescript
public readonly allowedRedirectUris: string[];
```

- *Type:* string[]

---

##### `auds`<sup>Required</sup> <a name="auds" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.auds"></a>

```typescript
public readonly auds: string[];
```

- *Type:* string[]

---

##### `claimMappings`<sup>Required</sup> <a name="claimMappings" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.claimMappings"></a>

```typescript
public readonly claimMappings: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `discoveryCaPem`<sup>Required</sup> <a name="discoveryCaPem" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.discoveryCaPem"></a>

```typescript
public readonly discoveryCaPem: string[];
```

- *Type:* string[]

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.discoveryUrl"></a>

```typescript
public readonly discoveryUrl: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `listClaimMappings`<sup>Required</sup> <a name="listClaimMappings" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.listClaimMappings"></a>

```typescript
public readonly listClaimMappings: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `signingAlgs`<sup>Required</sup> <a name="signingAlgs" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.signingAlgs"></a>

```typescript
public readonly signingAlgs: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethod.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWaypointAuthMethodConfig <a name="DataWaypointAuthMethodConfig" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.Initializer"></a>

```typescript
import { dataWaypointAuthMethod } from '@cdktf/provider-waypoint'

const dataWaypointAuthMethodConfig: dataWaypointAuthMethod.DataWaypointAuthMethodConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.name">name</a></code> | <code>string</code> | The name of the Auth Method. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.dataWaypointAuthMethod.DataWaypointAuthMethodConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/auth_method#name DataWaypointAuthMethod#name}

---




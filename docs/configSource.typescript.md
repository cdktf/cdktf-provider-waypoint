# `configSource` Submodule <a name="`configSource` Submodule" id="@cdktf/provider-waypoint.configSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigSource <a name="ConfigSource" id="@cdktf/provider-waypoint.configSource.ConfigSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/config_source waypoint_config_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.configSource.ConfigSource.Initializer"></a>

```typescript
import { configSource } from '@cdktf/provider-waypoint'

new configSource.ConfigSource(scope: Construct, id: string, config: ConfigSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSourceConfig">ConfigSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.configSource.ConfigSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.configSource.ConfigSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-waypoint.configSource.ConfigSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.configSource.ConfigSourceConfig">ConfigSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.resetApplication">resetApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.resetWorkspace">resetWorkspace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.configSource.ConfigSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-waypoint.configSource.ConfigSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.configSource.ConfigSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.configSource.ConfigSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-waypoint.configSource.ConfigSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-waypoint.configSource.ConfigSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-waypoint.configSource.ConfigSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-waypoint.configSource.ConfigSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-waypoint.configSource.ConfigSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-waypoint.configSource.ConfigSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-waypoint.configSource.ConfigSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-waypoint.configSource.ConfigSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.configSource.ConfigSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.configSource.ConfigSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.configSource.ConfigSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-waypoint.configSource.ConfigSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-waypoint.configSource.ConfigSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-waypoint.configSource.ConfigSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetApplication` <a name="resetApplication" id="@cdktf/provider-waypoint.configSource.ConfigSource.resetApplication"></a>

```typescript
public resetApplication(): void
```

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-waypoint.configSource.ConfigSource.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-waypoint.configSource.ConfigSource.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetWorkspace` <a name="resetWorkspace" id="@cdktf/provider-waypoint.configSource.ConfigSource.resetWorkspace"></a>

```typescript
public resetWorkspace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-waypoint.configSource.ConfigSource.isConstruct"></a>

```typescript
import { configSource } from '@cdktf/provider-waypoint'

configSource.ConfigSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.configSource.ConfigSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-waypoint.configSource.ConfigSource.isTerraformElement"></a>

```typescript
import { configSource } from '@cdktf/provider-waypoint'

configSource.ConfigSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.configSource.ConfigSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-waypoint.configSource.ConfigSource.isTerraformResource"></a>

```typescript
import { configSource } from '@cdktf/provider-waypoint'

configSource.ConfigSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.configSource.ConfigSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-waypoint.configSource.ConfigSource.generateConfigForImport"></a>

```typescript
import { configSource } from '@cdktf/provider-waypoint'

configSource.ConfigSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ConfigSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.configSource.ConfigSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-waypoint.configSource.ConfigSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-waypoint.configSource.ConfigSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/config_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.configSource.ConfigSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConfigSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.applicationInput">applicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.configInput">configInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.workspaceInput">workspaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.application">application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.config">config</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.workspace">workspace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `applicationInput`<sup>Optional</sup> <a name="applicationInput" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.applicationInput"></a>

```typescript
public readonly applicationInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.configInput"></a>

```typescript
public readonly configInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `workspaceInput`<sup>Optional</sup> <a name="workspaceInput" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.workspaceInput"></a>

```typescript
public readonly workspaceInput: string;
```

- *Type:* string

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.config"></a>

```typescript
public readonly config: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.workspace"></a>

```typescript
public readonly workspace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-waypoint.configSource.ConfigSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigSourceConfig <a name="ConfigSourceConfig" id="@cdktf/provider-waypoint.configSource.ConfigSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.configSource.ConfigSourceConfig.Initializer"></a>

```typescript
import { configSource } from '@cdktf/provider-waypoint'

const configSourceConfig: configSource.ConfigSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.scope">scope</a></code> | <code>string</code> | Config Source Scope. |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.type">type</a></code> | <code>string</code> | Config Source type. |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.application">application</a></code> | <code>string</code> | Config Source Project. |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.config">config</a></code> | <code>{[ key: string ]: string}</code> | Configuration for the dynamic source type. |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.project">project</a></code> | <code>string</code> | Config Source Project. |
| <code><a href="#@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.workspace">workspace</a></code> | <code>string</code> | Config Source Workspace. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Config Source Scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/config_source#scope ConfigSource#scope}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Config Source type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/config_source#type ConfigSource#type}

---

##### `application`<sup>Optional</sup> <a name="application" id="@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

Config Source Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/config_source#application ConfigSource#application}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.config"></a>

```typescript
public readonly config: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Configuration for the dynamic source type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/config_source#config ConfigSource#config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Config Source Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/config_source#project ConfigSource#project}

---

##### `workspace`<sup>Optional</sup> <a name="workspace" id="@cdktf/provider-waypoint.configSource.ConfigSourceConfig.property.workspace"></a>

```typescript
public readonly workspace: string;
```

- *Type:* string

Config Source Workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/config_source#workspace ConfigSource#workspace}

---




# `waypoint_runner_profile`

Refer to the Terraform Registory for docs: [`waypoint_runner_profile`](https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile).

# `runnerProfile` Submodule <a name="`runnerProfile` Submodule" id="@cdktf/provider-waypoint.runnerProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RunnerProfile <a name="RunnerProfile" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile waypoint_runner_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer"></a>

```typescript
import { runnerProfile } from '@cdktf/provider-waypoint'

new runnerProfile.RunnerProfile(scope: Construct, id: string, config: RunnerProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig">RunnerProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig">RunnerProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetOciUrl">resetOciUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetPluginConfig">resetPluginConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetPluginConfigFormat">resetPluginConfigFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetTargetRunnerId">resetTargetRunnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetTargetRunnerLabels">resetTargetRunnerLabels</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetOciUrl` <a name="resetOciUrl" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetOciUrl"></a>

```typescript
public resetOciUrl(): void
```

##### `resetPluginConfig` <a name="resetPluginConfig" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetPluginConfig"></a>

```typescript
public resetPluginConfig(): void
```

##### `resetPluginConfigFormat` <a name="resetPluginConfigFormat" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetPluginConfigFormat"></a>

```typescript
public resetPluginConfigFormat(): void
```

##### `resetTargetRunnerId` <a name="resetTargetRunnerId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetTargetRunnerId"></a>

```typescript
public resetTargetRunnerId(): void
```

##### `resetTargetRunnerLabels` <a name="resetTargetRunnerLabels" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetTargetRunnerLabels"></a>

```typescript
public resetTargetRunnerLabels(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RunnerProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isConstruct"></a>

```typescript
import { runnerProfile } from '@cdktf/provider-waypoint'

runnerProfile.RunnerProfile.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformElement"></a>

```typescript
import { runnerProfile } from '@cdktf/provider-waypoint'

runnerProfile.RunnerProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformResource"></a>

```typescript
import { runnerProfile } from '@cdktf/provider-waypoint'

runnerProfile.RunnerProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport"></a>

```typescript
import { runnerProfile } from '@cdktf/provider-waypoint'

runnerProfile.RunnerProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RunnerProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RunnerProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RunnerProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RunnerProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.defaultInput">defaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrlInput">ociUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormatInput">pluginConfigFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigInput">pluginConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginTypeInput">pluginTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerIdInput">targetRunnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabelsInput">targetRunnerLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrl">ociUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfig">pluginConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormat">pluginConfigFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginType">pluginType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerId">targetRunnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabels">targetRunnerLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.defaultInput"></a>

```typescript
public readonly defaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ociUrlInput`<sup>Optional</sup> <a name="ociUrlInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrlInput"></a>

```typescript
public readonly ociUrlInput: string;
```

- *Type:* string

---

##### `pluginConfigFormatInput`<sup>Optional</sup> <a name="pluginConfigFormatInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormatInput"></a>

```typescript
public readonly pluginConfigFormatInput: string;
```

- *Type:* string

---

##### `pluginConfigInput`<sup>Optional</sup> <a name="pluginConfigInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigInput"></a>

```typescript
public readonly pluginConfigInput: string;
```

- *Type:* string

---

##### `pluginTypeInput`<sup>Optional</sup> <a name="pluginTypeInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginTypeInput"></a>

```typescript
public readonly pluginTypeInput: string;
```

- *Type:* string

---

##### `targetRunnerIdInput`<sup>Optional</sup> <a name="targetRunnerIdInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerIdInput"></a>

```typescript
public readonly targetRunnerIdInput: string;
```

- *Type:* string

---

##### `targetRunnerLabelsInput`<sup>Optional</sup> <a name="targetRunnerLabelsInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabelsInput"></a>

```typescript
public readonly targetRunnerLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

---

##### `pluginConfig`<sup>Required</sup> <a name="pluginConfig" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfig"></a>

```typescript
public readonly pluginConfig: string;
```

- *Type:* string

---

##### `pluginConfigFormat`<sup>Required</sup> <a name="pluginConfigFormat" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormat"></a>

```typescript
public readonly pluginConfigFormat: string;
```

- *Type:* string

---

##### `pluginType`<sup>Required</sup> <a name="pluginType" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginType"></a>

```typescript
public readonly pluginType: string;
```

- *Type:* string

---

##### `targetRunnerId`<sup>Required</sup> <a name="targetRunnerId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerId"></a>

```typescript
public readonly targetRunnerId: string;
```

- *Type:* string

---

##### `targetRunnerLabels`<sup>Required</sup> <a name="targetRunnerLabels" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabels"></a>

```typescript
public readonly targetRunnerLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RunnerProfileConfig <a name="RunnerProfileConfig" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.Initializer"></a>

```typescript
import { runnerProfile } from '@cdktf/provider-waypoint'

const runnerProfileConfig: runnerProfile.RunnerProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.name">name</a></code> | <code>string</code> | The name of the runner profile. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginType">pluginType</a></code> | <code>string</code> | Plugin type for runner i.e docker / kubernetes / aws-ecs. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if this runner profile is the default for any new projects. The default is false. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Any environment variables that should be exposed to the on demand runner. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.ociUrl">ociUrl</a></code> | <code>string</code> | oci_url is the OCI image that will be used to boot the on demand runner. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfig">pluginConfig</a></code> | <code>string</code> | Plugin config is the configuration for the plugin that is created. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfigFormat">pluginConfigFormat</a></code> | <code>string</code> | Config format specifies the format of plugin_config. Valid values are HCL or JSON. The default is HCL. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerId">targetRunnerId</a></code> | <code>string</code> | The ID of the target runner for this profile. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerLabels">targetRunnerLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of labels on target runners. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the runner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#name RunnerProfile#name}

---

##### `pluginType`<sup>Required</sup> <a name="pluginType" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginType"></a>

```typescript
public readonly pluginType: string;
```

- *Type:* string

Plugin type for runner i.e docker / kubernetes / aws-ecs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_type RunnerProfile#plugin_type}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if this runner profile is the default for any new projects. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#default RunnerProfile#default}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Any environment variables that should be exposed to the on demand runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#environment_variables RunnerProfile#environment_variables}

---

##### `ociUrl`<sup>Optional</sup> <a name="ociUrl" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

oci_url is the OCI image that will be used to boot the on demand runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#oci_url RunnerProfile#oci_url}

---

##### `pluginConfig`<sup>Optional</sup> <a name="pluginConfig" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfig"></a>

```typescript
public readonly pluginConfig: string;
```

- *Type:* string

Plugin config is the configuration for the plugin that is created.

It is usually HCL and is decoded like the other plugins, and is plugin specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_config RunnerProfile#plugin_config}

---

##### `pluginConfigFormat`<sup>Optional</sup> <a name="pluginConfigFormat" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfigFormat"></a>

```typescript
public readonly pluginConfigFormat: string;
```

- *Type:* string

Config format specifies the format of plugin_config. Valid values are HCL or JSON. The default is HCL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_config_format RunnerProfile#plugin_config_format}

---

##### `targetRunnerId`<sup>Optional</sup> <a name="targetRunnerId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerId"></a>

```typescript
public readonly targetRunnerId: string;
```

- *Type:* string

The ID of the target runner for this profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#target_runner_id RunnerProfile#target_runner_id}

---

##### `targetRunnerLabels`<sup>Optional</sup> <a name="targetRunnerLabels" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerLabels"></a>

```typescript
public readonly targetRunnerLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of labels on target runners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#target_runner_labels RunnerProfile#target_runner_labels}

---




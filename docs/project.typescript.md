# `project` Submodule <a name="`project` Submodule" id="@cdktf/provider-waypoint.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="@cdktf/provider-waypoint.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project waypoint_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.Project.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-waypoint'

new project.Project(scope: Construct, id: string, config: ProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig">ProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectConfig">ProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-waypoint.project.Project.putDataSourceGit">putDataSourceGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.putGitAuthBasic">putGitAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.putGitAuthSsh">putGitAuthSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.putProjectVariables">putProjectVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.resetAppStatusPollSeconds">resetAppStatusPollSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.resetGitAuthBasic">resetGitAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.resetGitAuthSsh">resetGitAuthSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.resetProjectVariables">resetProjectVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.resetRemoteRunnersEnabled">resetRemoteRunnersEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.project.Project.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-waypoint.project.Project.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.project.Project.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.Project.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-waypoint.project.Project.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-waypoint.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-waypoint.project.Project.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-waypoint.project.Project.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-waypoint.project.Project.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-waypoint.project.Project.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-waypoint.project.Project.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-waypoint.project.Project.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.project.Project.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.project.Project.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.project.Project.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.project.Project.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.project.Project.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.project.Project.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-waypoint.project.Project.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-waypoint.project.Project.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.project.Project.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.project.Project.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.project.Project.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-waypoint.project.Project.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.project.Project.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-waypoint.project.Project.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-waypoint.project.Project.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-waypoint.project.Project.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-waypoint.project.Project.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.project.Project.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataSourceGit` <a name="putDataSourceGit" id="@cdktf/provider-waypoint.project.Project.putDataSourceGit"></a>

```typescript
public putDataSourceGit(value: ProjectDataSourceGit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.Project.putDataSourceGit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a>

---

##### `putGitAuthBasic` <a name="putGitAuthBasic" id="@cdktf/provider-waypoint.project.Project.putGitAuthBasic"></a>

```typescript
public putGitAuthBasic(value: ProjectGitAuthBasic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.Project.putGitAuthBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a>

---

##### `putGitAuthSsh` <a name="putGitAuthSsh" id="@cdktf/provider-waypoint.project.Project.putGitAuthSsh"></a>

```typescript
public putGitAuthSsh(value: ProjectGitAuthSsh): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.Project.putGitAuthSsh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a>

---

##### `putProjectVariables` <a name="putProjectVariables" id="@cdktf/provider-waypoint.project.Project.putProjectVariables"></a>

```typescript
public putProjectVariables(value: IResolvable | ProjectProjectVariables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.Project.putProjectVariables.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>[]

---

##### `resetAppStatusPollSeconds` <a name="resetAppStatusPollSeconds" id="@cdktf/provider-waypoint.project.Project.resetAppStatusPollSeconds"></a>

```typescript
public resetAppStatusPollSeconds(): void
```

##### `resetGitAuthBasic` <a name="resetGitAuthBasic" id="@cdktf/provider-waypoint.project.Project.resetGitAuthBasic"></a>

```typescript
public resetGitAuthBasic(): void
```

##### `resetGitAuthSsh` <a name="resetGitAuthSsh" id="@cdktf/provider-waypoint.project.Project.resetGitAuthSsh"></a>

```typescript
public resetGitAuthSsh(): void
```

##### `resetProjectVariables` <a name="resetProjectVariables" id="@cdktf/provider-waypoint.project.Project.resetProjectVariables"></a>

```typescript
public resetProjectVariables(): void
```

##### `resetRemoteRunnersEnabled` <a name="resetRemoteRunnersEnabled" id="@cdktf/provider-waypoint.project.Project.resetRemoteRunnersEnabled"></a>

```typescript
public resetRemoteRunnersEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-waypoint.project.Project.isConstruct"></a>

```typescript
import { project } from '@cdktf/provider-waypoint'

project.Project.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.project.Project.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-waypoint.project.Project.isTerraformElement"></a>

```typescript
import { project } from '@cdktf/provider-waypoint'

project.Project.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-waypoint.project.Project.isTerraformResource"></a>

```typescript
import { project } from '@cdktf/provider-waypoint'

project.Project.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-waypoint.project.Project.generateConfigForImport"></a>

```typescript
import { project } from '@cdktf/provider-waypoint'

project.Project.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.project.Project.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-waypoint.project.Project.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Project to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-waypoint.project.Project.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Project that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.project.Project.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Project to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.dataSourceGit">dataSourceGit</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference">ProjectDataSourceGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthBasic">gitAuthBasic</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference">ProjectGitAuthBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthSsh">gitAuthSsh</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference">ProjectGitAuthSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectVariables">projectVariables</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList">ProjectProjectVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.appStatusPollSecondsInput">appStatusPollSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.dataSourceGitInput">dataSourceGitInput</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthBasicInput">gitAuthBasicInput</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthSshInput">gitAuthSshInput</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectNameInput">projectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectVariablesInput">projectVariablesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabledInput">remoteRunnersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.appStatusPollSeconds">appStatusPollSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectName">projectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabled">remoteRunnersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-waypoint.project.Project.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-waypoint.project.Project.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.project.Project.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-waypoint.project.Project.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-waypoint.project.Project.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-waypoint.project.Project.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-waypoint.project.Project.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.project.Project.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.project.Project.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.project.Project.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.project.Project.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.project.Project.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.project.Project.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.project.Project.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataSourceGit`<sup>Required</sup> <a name="dataSourceGit" id="@cdktf/provider-waypoint.project.Project.property.dataSourceGit"></a>

```typescript
public readonly dataSourceGit: ProjectDataSourceGitOutputReference;
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference">ProjectDataSourceGitOutputReference</a>

---

##### `gitAuthBasic`<sup>Required</sup> <a name="gitAuthBasic" id="@cdktf/provider-waypoint.project.Project.property.gitAuthBasic"></a>

```typescript
public readonly gitAuthBasic: ProjectGitAuthBasicOutputReference;
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference">ProjectGitAuthBasicOutputReference</a>

---

##### `gitAuthSsh`<sup>Required</sup> <a name="gitAuthSsh" id="@cdktf/provider-waypoint.project.Project.property.gitAuthSsh"></a>

```typescript
public readonly gitAuthSsh: ProjectGitAuthSshOutputReference;
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference">ProjectGitAuthSshOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.project.Project.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectVariables`<sup>Required</sup> <a name="projectVariables" id="@cdktf/provider-waypoint.project.Project.property.projectVariables"></a>

```typescript
public readonly projectVariables: ProjectProjectVariablesList;
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList">ProjectProjectVariablesList</a>

---

##### `appStatusPollSecondsInput`<sup>Optional</sup> <a name="appStatusPollSecondsInput" id="@cdktf/provider-waypoint.project.Project.property.appStatusPollSecondsInput"></a>

```typescript
public readonly appStatusPollSecondsInput: number;
```

- *Type:* number

---

##### `dataSourceGitInput`<sup>Optional</sup> <a name="dataSourceGitInput" id="@cdktf/provider-waypoint.project.Project.property.dataSourceGitInput"></a>

```typescript
public readonly dataSourceGitInput: ProjectDataSourceGit | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a> | cdktf.IResolvable

---

##### `gitAuthBasicInput`<sup>Optional</sup> <a name="gitAuthBasicInput" id="@cdktf/provider-waypoint.project.Project.property.gitAuthBasicInput"></a>

```typescript
public readonly gitAuthBasicInput: ProjectGitAuthBasic | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a> | cdktf.IResolvable

---

##### `gitAuthSshInput`<sup>Optional</sup> <a name="gitAuthSshInput" id="@cdktf/provider-waypoint.project.Project.property.gitAuthSshInput"></a>

```typescript
public readonly gitAuthSshInput: ProjectGitAuthSsh | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a> | cdktf.IResolvable

---

##### `projectNameInput`<sup>Optional</sup> <a name="projectNameInput" id="@cdktf/provider-waypoint.project.Project.property.projectNameInput"></a>

```typescript
public readonly projectNameInput: string;
```

- *Type:* string

---

##### `projectVariablesInput`<sup>Optional</sup> <a name="projectVariablesInput" id="@cdktf/provider-waypoint.project.Project.property.projectVariablesInput"></a>

```typescript
public readonly projectVariablesInput: IResolvable | ProjectProjectVariables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>[]

---

##### `remoteRunnersEnabledInput`<sup>Optional</sup> <a name="remoteRunnersEnabledInput" id="@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabledInput"></a>

```typescript
public readonly remoteRunnersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `appStatusPollSeconds`<sup>Required</sup> <a name="appStatusPollSeconds" id="@cdktf/provider-waypoint.project.Project.property.appStatusPollSeconds"></a>

```typescript
public readonly appStatusPollSeconds: number;
```

- *Type:* number

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-waypoint.project.Project.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

---

##### `remoteRunnersEnabled`<sup>Required</sup> <a name="remoteRunnersEnabled" id="@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabled"></a>

```typescript
public readonly remoteRunnersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-waypoint.project.Project.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectConfig <a name="ProjectConfig" id="@cdktf/provider-waypoint.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectConfig.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-waypoint'

const projectConfig: project.ProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.dataSourceGit">dataSourceGit</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a></code> | Configuration of Git repository where waypoint.hcl file is stored. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.projectName">projectName</a></code> | <code>string</code> | The name of the Waypoint project. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.appStatusPollSeconds">appStatusPollSeconds</a></code> | <code>number</code> | Application status poll interval in seconds. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthBasic">gitAuthBasic</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a></code> | Basic authentication details for Git consisting of `username` and `password`. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthSsh">gitAuthSsh</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a></code> | SSH authentication details for Git. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.projectVariables">projectVariables</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>[]</code> | List of variables in Key/value pairs associated with the Waypoint Project. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.remoteRunnersEnabled">remoteRunnersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable remote runners for project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.project.ProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.project.ProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.project.ProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.project.ProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.project.ProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.project.ProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.project.ProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataSourceGit`<sup>Required</sup> <a name="dataSourceGit" id="@cdktf/provider-waypoint.project.ProjectConfig.property.dataSourceGit"></a>

```typescript
public readonly dataSourceGit: ProjectDataSourceGit;
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a>

Configuration of Git repository where waypoint.hcl file is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#data_source_git Project#data_source_git}

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-waypoint.project.ProjectConfig.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The name of the Waypoint project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#project_name Project#project_name}

---

##### `appStatusPollSeconds`<sup>Optional</sup> <a name="appStatusPollSeconds" id="@cdktf/provider-waypoint.project.ProjectConfig.property.appStatusPollSeconds"></a>

```typescript
public readonly appStatusPollSeconds: number;
```

- *Type:* number

Application status poll interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#app_status_poll_seconds Project#app_status_poll_seconds}

---

##### `gitAuthBasic`<sup>Optional</sup> <a name="gitAuthBasic" id="@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthBasic"></a>

```typescript
public readonly gitAuthBasic: ProjectGitAuthBasic;
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a>

Basic authentication details for Git consisting of `username` and `password`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_auth_basic Project#git_auth_basic}

---

##### `gitAuthSsh`<sup>Optional</sup> <a name="gitAuthSsh" id="@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthSsh"></a>

```typescript
public readonly gitAuthSsh: ProjectGitAuthSsh;
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a>

SSH authentication details for Git.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_auth_ssh Project#git_auth_ssh}

---

##### `projectVariables`<sup>Optional</sup> <a name="projectVariables" id="@cdktf/provider-waypoint.project.ProjectConfig.property.projectVariables"></a>

```typescript
public readonly projectVariables: IResolvable | ProjectProjectVariables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>[]

List of variables in Key/value pairs associated with the Waypoint Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#project_variables Project#project_variables}

---

##### `remoteRunnersEnabled`<sup>Optional</sup> <a name="remoteRunnersEnabled" id="@cdktf/provider-waypoint.project.ProjectConfig.property.remoteRunnersEnabled"></a>

```typescript
public readonly remoteRunnersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable remote runners for project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#remote_runners_enabled Project#remote_runners_enabled}

---

### ProjectDataSourceGit <a name="ProjectDataSourceGit" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-waypoint'

const projectDataSourceGit: project.ProjectDataSourceGit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.fileChangeSignal">fileChangeSignal</a></code> | <code>string</code> | Indicates signal to be sent to any applications when their config files change. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPath">gitPath</a></code> | <code>string</code> | Path in git repository when waypoint.hcl file is stored in a sub-directory. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPollIntervalSeconds">gitPollIntervalSeconds</a></code> | <code>number</code> | Interval at which Waypoint should poll git repository for changes. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitRef">gitRef</a></code> | <code>string</code> | Git repository ref containing waypoint.hcl file. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitUrl">gitUrl</a></code> | <code>string</code> | Url of git repository storing the waypoint.hcl file. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.ignoreChangesOutsidePath">ignoreChangesOutsidePath</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Waypoint ignores changes outside path storing waypoint.hcl file. |

---

##### `fileChangeSignal`<sup>Optional</sup> <a name="fileChangeSignal" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.fileChangeSignal"></a>

```typescript
public readonly fileChangeSignal: string;
```

- *Type:* string

Indicates signal to be sent to any applications when their config files change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#file_change_signal Project#file_change_signal}

---

##### `gitPath`<sup>Optional</sup> <a name="gitPath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPath"></a>

```typescript
public readonly gitPath: string;
```

- *Type:* string

Path in git repository when waypoint.hcl file is stored in a sub-directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_path Project#git_path}

---

##### `gitPollIntervalSeconds`<sup>Optional</sup> <a name="gitPollIntervalSeconds" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPollIntervalSeconds"></a>

```typescript
public readonly gitPollIntervalSeconds: number;
```

- *Type:* number

Interval at which Waypoint should poll git repository for changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_poll_interval_seconds Project#git_poll_interval_seconds}

---

##### `gitRef`<sup>Optional</sup> <a name="gitRef" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitRef"></a>

```typescript
public readonly gitRef: string;
```

- *Type:* string

Git repository ref containing waypoint.hcl file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_ref Project#git_ref}

---

##### `gitUrl`<sup>Optional</sup> <a name="gitUrl" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitUrl"></a>

```typescript
public readonly gitUrl: string;
```

- *Type:* string

Url of git repository storing the waypoint.hcl file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_url Project#git_url}

---

##### `ignoreChangesOutsidePath`<sup>Optional</sup> <a name="ignoreChangesOutsidePath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.ignoreChangesOutsidePath"></a>

```typescript
public readonly ignoreChangesOutsidePath: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Waypoint ignores changes outside path storing waypoint.hcl file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#ignore_changes_outside_path Project#ignore_changes_outside_path}

---

### ProjectGitAuthBasic <a name="ProjectGitAuthBasic" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-waypoint'

const projectGitAuthBasic: project.ProjectGitAuthBasic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.password">password</a></code> | <code>string</code> | Git password. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.username">username</a></code> | <code>string</code> | Git username. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Git password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#password Project#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Git username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#username Project#username}

---

### ProjectGitAuthSsh <a name="ProjectGitAuthSsh" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-waypoint'

const projectGitAuthSsh: project.ProjectGitAuthSsh = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.sshPrivateKey">sshPrivateKey</a></code> | <code>string</code> | Private key to authenticate to Git. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.gitUser">gitUser</a></code> | <code>string</code> | Git user associated with private key. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.passphrase">passphrase</a></code> | <code>string</code> | Passphrase to use with private key. |

---

##### `sshPrivateKey`<sup>Required</sup> <a name="sshPrivateKey" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.sshPrivateKey"></a>

```typescript
public readonly sshPrivateKey: string;
```

- *Type:* string

Private key to authenticate to Git.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#ssh_private_key Project#ssh_private_key}

---

##### `gitUser`<sup>Optional</sup> <a name="gitUser" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.gitUser"></a>

```typescript
public readonly gitUser: string;
```

- *Type:* string

Git user associated with private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_user Project#git_user}

---

##### `passphrase`<sup>Optional</sup> <a name="passphrase" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.passphrase"></a>

```typescript
public readonly passphrase: string;
```

- *Type:* string

Passphrase to use with private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#passphrase Project#passphrase}

---

### ProjectProjectVariables <a name="ProjectProjectVariables" id="@cdktf/provider-waypoint.project.ProjectProjectVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-waypoint'

const projectProjectVariables: project.ProjectProjectVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#name Project#name}. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#value Project#value}. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables.property.sensitive">sensitive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#sensitive Project#sensitive}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#name Project#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#value Project#value}.

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.property.sensitive"></a>

```typescript
public readonly sensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#sensitive Project#sensitive}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectDataSourceGitOutputReference <a name="ProjectDataSourceGitOutputReference" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-waypoint'

new project.ProjectDataSourceGitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetFileChangeSignal">resetFileChangeSignal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitPath">resetGitPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitPollIntervalSeconds">resetGitPollIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitRef">resetGitRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitUrl">resetGitUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetIgnoreChangesOutsidePath">resetIgnoreChangesOutsidePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileChangeSignal` <a name="resetFileChangeSignal" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetFileChangeSignal"></a>

```typescript
public resetFileChangeSignal(): void
```

##### `resetGitPath` <a name="resetGitPath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitPath"></a>

```typescript
public resetGitPath(): void
```

##### `resetGitPollIntervalSeconds` <a name="resetGitPollIntervalSeconds" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitPollIntervalSeconds"></a>

```typescript
public resetGitPollIntervalSeconds(): void
```

##### `resetGitRef` <a name="resetGitRef" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitRef"></a>

```typescript
public resetGitRef(): void
```

##### `resetGitUrl` <a name="resetGitUrl" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitUrl"></a>

```typescript
public resetGitUrl(): void
```

##### `resetIgnoreChangesOutsidePath` <a name="resetIgnoreChangesOutsidePath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetIgnoreChangesOutsidePath"></a>

```typescript
public resetIgnoreChangesOutsidePath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignalInput">fileChangeSignalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPathInput">gitPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSecondsInput">gitPollIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRefInput">gitRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrlInput">gitUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePathInput">ignoreChangesOutsidePathInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignal">fileChangeSignal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPath">gitPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSeconds">gitPollIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRef">gitRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrl">gitUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePath">ignoreChangesOutsidePath</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileChangeSignalInput`<sup>Optional</sup> <a name="fileChangeSignalInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignalInput"></a>

```typescript
public readonly fileChangeSignalInput: string;
```

- *Type:* string

---

##### `gitPathInput`<sup>Optional</sup> <a name="gitPathInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPathInput"></a>

```typescript
public readonly gitPathInput: string;
```

- *Type:* string

---

##### `gitPollIntervalSecondsInput`<sup>Optional</sup> <a name="gitPollIntervalSecondsInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSecondsInput"></a>

```typescript
public readonly gitPollIntervalSecondsInput: number;
```

- *Type:* number

---

##### `gitRefInput`<sup>Optional</sup> <a name="gitRefInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRefInput"></a>

```typescript
public readonly gitRefInput: string;
```

- *Type:* string

---

##### `gitUrlInput`<sup>Optional</sup> <a name="gitUrlInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrlInput"></a>

```typescript
public readonly gitUrlInput: string;
```

- *Type:* string

---

##### `ignoreChangesOutsidePathInput`<sup>Optional</sup> <a name="ignoreChangesOutsidePathInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePathInput"></a>

```typescript
public readonly ignoreChangesOutsidePathInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fileChangeSignal`<sup>Required</sup> <a name="fileChangeSignal" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignal"></a>

```typescript
public readonly fileChangeSignal: string;
```

- *Type:* string

---

##### `gitPath`<sup>Required</sup> <a name="gitPath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPath"></a>

```typescript
public readonly gitPath: string;
```

- *Type:* string

---

##### `gitPollIntervalSeconds`<sup>Required</sup> <a name="gitPollIntervalSeconds" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSeconds"></a>

```typescript
public readonly gitPollIntervalSeconds: number;
```

- *Type:* number

---

##### `gitRef`<sup>Required</sup> <a name="gitRef" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRef"></a>

```typescript
public readonly gitRef: string;
```

- *Type:* string

---

##### `gitUrl`<sup>Required</sup> <a name="gitUrl" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrl"></a>

```typescript
public readonly gitUrl: string;
```

- *Type:* string

---

##### `ignoreChangesOutsidePath`<sup>Required</sup> <a name="ignoreChangesOutsidePath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePath"></a>

```typescript
public readonly ignoreChangesOutsidePath: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectDataSourceGit | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a> | cdktf.IResolvable

---


### ProjectGitAuthBasicOutputReference <a name="ProjectGitAuthBasicOutputReference" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-waypoint'

new project.ProjectGitAuthBasicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectGitAuthBasic | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a> | cdktf.IResolvable

---


### ProjectGitAuthSshOutputReference <a name="ProjectGitAuthSshOutputReference" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-waypoint'

new project.ProjectGitAuthSshOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resetGitUser">resetGitUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resetPassphrase">resetPassphrase</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGitUser` <a name="resetGitUser" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resetGitUser"></a>

```typescript
public resetGitUser(): void
```

##### `resetPassphrase` <a name="resetPassphrase" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resetPassphrase"></a>

```typescript
public resetPassphrase(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUserInput">gitUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphraseInput">passphraseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKeyInput">sshPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUser">gitUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphrase">passphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKey">sshPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gitUserInput`<sup>Optional</sup> <a name="gitUserInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUserInput"></a>

```typescript
public readonly gitUserInput: string;
```

- *Type:* string

---

##### `passphraseInput`<sup>Optional</sup> <a name="passphraseInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphraseInput"></a>

```typescript
public readonly passphraseInput: string;
```

- *Type:* string

---

##### `sshPrivateKeyInput`<sup>Optional</sup> <a name="sshPrivateKeyInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKeyInput"></a>

```typescript
public readonly sshPrivateKeyInput: string;
```

- *Type:* string

---

##### `gitUser`<sup>Required</sup> <a name="gitUser" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUser"></a>

```typescript
public readonly gitUser: string;
```

- *Type:* string

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphrase"></a>

```typescript
public readonly passphrase: string;
```

- *Type:* string

---

##### `sshPrivateKey`<sup>Required</sup> <a name="sshPrivateKey" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKey"></a>

```typescript
public readonly sshPrivateKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectGitAuthSsh | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a> | cdktf.IResolvable

---


### ProjectProjectVariablesList <a name="ProjectProjectVariablesList" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-waypoint'

new project.ProjectProjectVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.get"></a>

```typescript
public get(index: number): ProjectProjectVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectProjectVariables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>[]

---


### ProjectProjectVariablesOutputReference <a name="ProjectProjectVariablesOutputReference" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-waypoint'

new project.ProjectProjectVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resetSensitive">resetSensitive</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSensitive` <a name="resetSensitive" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resetSensitive"></a>

```typescript
public resetSensitive(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitiveInput">sensitiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitive">sensitive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sensitiveInput`<sup>Optional</sup> <a name="sensitiveInput" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitiveInput"></a>

```typescript
public readonly sensitiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sensitive`<sup>Required</sup> <a name="sensitive" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitive"></a>

```typescript
public readonly sensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectProjectVariables | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a> | cdktf.IResolvable

---




# `dataWaypointProject` Submodule <a name="`dataWaypointProject` Submodule" id="@cdktf/provider-waypoint.dataWaypointProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWaypointProject <a name="DataWaypointProject" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project waypoint_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.data_waypoint_project.DataWaypointProject;

DataWaypointProject.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .projectName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.projectName">projectName</a></code> | <code>java.lang.String</code> | The name of the Waypoint project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.Initializer.parameter.projectName"></a>

- *Type:* java.lang.String

The name of the Waypoint project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#project_name DataWaypointProject#project_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataWaypointProject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.data_waypoint_project.DataWaypointProject;

DataWaypointProject.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.data_waypoint_project.DataWaypointProject;

DataWaypointProject.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.data_waypoint_project.DataWaypointProject;

DataWaypointProject.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.data_waypoint_project.DataWaypointProject;

DataWaypointProject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataWaypointProject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataWaypointProject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataWaypointProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataWaypointProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataWaypointProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.applications">applications</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.appStatusPollSeconds">appStatusPollSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.dataSourceGit">dataSourceGit</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference">DataWaypointProjectDataSourceGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.gitAuthBasic">gitAuthBasic</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference">DataWaypointProjectGitAuthBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.gitAuthSsh">gitAuthSsh</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference">DataWaypointProjectGitAuthSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectVariables">projectVariables</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList">DataWaypointProjectProjectVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.remoteRunnersEnabled">remoteRunnersEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectNameInput">projectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectName">projectName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.applications"></a>

```java
public java.util.List<java.lang.String> getApplications();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appStatusPollSeconds`<sup>Required</sup> <a name="appStatusPollSeconds" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.appStatusPollSeconds"></a>

```java
public java.lang.Number getAppStatusPollSeconds();
```

- *Type:* java.lang.Number

---

##### `dataSourceGit`<sup>Required</sup> <a name="dataSourceGit" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.dataSourceGit"></a>

```java
public DataWaypointProjectDataSourceGitOutputReference getDataSourceGit();
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference">DataWaypointProjectDataSourceGitOutputReference</a>

---

##### `gitAuthBasic`<sup>Required</sup> <a name="gitAuthBasic" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.gitAuthBasic"></a>

```java
public DataWaypointProjectGitAuthBasicOutputReference getGitAuthBasic();
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference">DataWaypointProjectGitAuthBasicOutputReference</a>

---

##### `gitAuthSsh`<sup>Required</sup> <a name="gitAuthSsh" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.gitAuthSsh"></a>

```java
public DataWaypointProjectGitAuthSshOutputReference getGitAuthSsh();
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference">DataWaypointProjectGitAuthSshOutputReference</a>

---

##### `projectVariables`<sup>Required</sup> <a name="projectVariables" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectVariables"></a>

```java
public DataWaypointProjectProjectVariablesList getProjectVariables();
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList">DataWaypointProjectProjectVariablesList</a>

---

##### `remoteRunnersEnabled`<sup>Required</sup> <a name="remoteRunnersEnabled" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.remoteRunnersEnabled"></a>

```java
public IResolvable getRemoteRunnersEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `projectNameInput`<sup>Optional</sup> <a name="projectNameInput" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectNameInput"></a>

```java
public java.lang.String getProjectNameInput();
```

- *Type:* java.lang.String

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.projectName"></a>

```java
public java.lang.String getProjectName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProject.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataWaypointProjectConfig <a name="DataWaypointProjectConfig" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.data_waypoint_project.DataWaypointProjectConfig;

DataWaypointProjectConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .projectName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.projectName">projectName</a></code> | <code>java.lang.String</code> | The name of the Waypoint project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectConfig.property.projectName"></a>

```java
public java.lang.String getProjectName();
```

- *Type:* java.lang.String

The name of the Waypoint project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#project_name DataWaypointProject#project_name}

---

### DataWaypointProjectDataSourceGit <a name="DataWaypointProjectDataSourceGit" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.data_waypoint_project.DataWaypointProjectDataSourceGit;

DataWaypointProjectDataSourceGit.builder()
    .build();
```


### DataWaypointProjectGitAuthBasic <a name="DataWaypointProjectGitAuthBasic" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.data_waypoint_project.DataWaypointProjectGitAuthBasic;

DataWaypointProjectGitAuthBasic.builder()
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.property.password">password</a></code> | <code>java.lang.String</code> | Git password. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.property.username">username</a></code> | <code>java.lang.String</code> | Git username. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Git password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#password DataWaypointProject#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Git username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#username DataWaypointProject#username}

---

### DataWaypointProjectGitAuthSsh <a name="DataWaypointProjectGitAuthSsh" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.data_waypoint_project.DataWaypointProjectGitAuthSsh;

DataWaypointProjectGitAuthSsh.builder()
    .sshPrivateKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh.property.sshPrivateKey">sshPrivateKey</a></code> | <code>java.lang.String</code> | Private key to authenticate to Git. |

---

##### `sshPrivateKey`<sup>Required</sup> <a name="sshPrivateKey" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh.property.sshPrivateKey"></a>

```java
public java.lang.String getSshPrivateKey();
```

- *Type:* java.lang.String

Private key to authenticate to Git.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#ssh_private_key DataWaypointProject#ssh_private_key}

---

### DataWaypointProjectProjectVariables <a name="DataWaypointProjectProjectVariables" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.data_waypoint_project.DataWaypointProjectProjectVariables;

DataWaypointProjectProjectVariables.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#name DataWaypointProject#name}. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#value DataWaypointProject#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#name DataWaypointProject#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#value DataWaypointProject#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataWaypointProjectDataSourceGitOutputReference <a name="DataWaypointProjectDataSourceGitOutputReference" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.data_waypoint_project.DataWaypointProjectDataSourceGitOutputReference;

new DataWaypointProjectDataSourceGitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.fileChangeSignal">fileChangeSignal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitPath">gitPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitPollIntervalSeconds">gitPollIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitRef">gitRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitUrl">gitUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePath">ignoreChangesOutsidePath</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGit">DataWaypointProjectDataSourceGit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileChangeSignal`<sup>Required</sup> <a name="fileChangeSignal" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.fileChangeSignal"></a>

```java
public java.lang.String getFileChangeSignal();
```

- *Type:* java.lang.String

---

##### `gitPath`<sup>Required</sup> <a name="gitPath" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitPath"></a>

```java
public java.lang.String getGitPath();
```

- *Type:* java.lang.String

---

##### `gitPollIntervalSeconds`<sup>Required</sup> <a name="gitPollIntervalSeconds" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitPollIntervalSeconds"></a>

```java
public java.lang.Number getGitPollIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `gitRef`<sup>Required</sup> <a name="gitRef" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitRef"></a>

```java
public java.lang.String getGitRef();
```

- *Type:* java.lang.String

---

##### `gitUrl`<sup>Required</sup> <a name="gitUrl" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.gitUrl"></a>

```java
public java.lang.String getGitUrl();
```

- *Type:* java.lang.String

---

##### `ignoreChangesOutsidePath`<sup>Required</sup> <a name="ignoreChangesOutsidePath" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePath"></a>

```java
public IResolvable getIgnoreChangesOutsidePath();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGitOutputReference.property.internalValue"></a>

```java
public DataWaypointProjectDataSourceGit getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectDataSourceGit">DataWaypointProjectDataSourceGit</a>

---


### DataWaypointProjectGitAuthBasicOutputReference <a name="DataWaypointProjectGitAuthBasicOutputReference" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.data_waypoint_project.DataWaypointProjectGitAuthBasicOutputReference;

new DataWaypointProjectGitAuthBasicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic">DataWaypointProjectGitAuthBasic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasicOutputReference.property.internalValue"></a>

```java
public DataWaypointProjectGitAuthBasic getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthBasic">DataWaypointProjectGitAuthBasic</a>

---


### DataWaypointProjectGitAuthSshOutputReference <a name="DataWaypointProjectGitAuthSshOutputReference" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.data_waypoint_project.DataWaypointProjectGitAuthSshOutputReference;

new DataWaypointProjectGitAuthSshOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.gitUser">gitUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.passphrase">passphrase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.sshPrivateKeyInput">sshPrivateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.sshPrivateKey">sshPrivateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh">DataWaypointProjectGitAuthSsh</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gitUser`<sup>Required</sup> <a name="gitUser" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.gitUser"></a>

```java
public java.lang.String getGitUser();
```

- *Type:* java.lang.String

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.passphrase"></a>

```java
public java.lang.String getPassphrase();
```

- *Type:* java.lang.String

---

##### `sshPrivateKeyInput`<sup>Optional</sup> <a name="sshPrivateKeyInput" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.sshPrivateKeyInput"></a>

```java
public java.lang.String getSshPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `sshPrivateKey`<sup>Required</sup> <a name="sshPrivateKey" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.sshPrivateKey"></a>

```java
public java.lang.String getSshPrivateKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSshOutputReference.property.internalValue"></a>

```java
public DataWaypointProjectGitAuthSsh getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectGitAuthSsh">DataWaypointProjectGitAuthSsh</a>

---


### DataWaypointProjectProjectVariablesList <a name="DataWaypointProjectProjectVariablesList" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.data_waypoint_project.DataWaypointProjectProjectVariablesList;

new DataWaypointProjectProjectVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.get"></a>

```java
public DataWaypointProjectProjectVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables">DataWaypointProjectProjectVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables">DataWaypointProjectProjectVariables</a>>

---


### DataWaypointProjectProjectVariablesOutputReference <a name="DataWaypointProjectProjectVariablesOutputReference" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.data_waypoint_project.DataWaypointProjectProjectVariablesOutputReference;

new DataWaypointProjectProjectVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.sensitive">sensitive</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables">DataWaypointProjectProjectVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sensitive`<sup>Required</sup> <a name="sensitive" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.sensitive"></a>

```java
public IResolvable getSensitive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariablesOutputReference.property.internalValue"></a>

```java
public DataWaypointProjectProjectVariables getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-waypoint.dataWaypointProject.DataWaypointProjectProjectVariables">DataWaypointProjectProjectVariables</a>

---




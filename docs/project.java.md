# `project` Submodule <a name="`project` Submodule" id="@cdktf/provider-waypoint.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="@cdktf/provider-waypoint.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project waypoint_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.Project.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.project.Project;

Project.Builder.create(Construct scope, java.lang.String id)
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
    .dataSourceGit(ProjectDataSourceGit)
    .projectName(java.lang.String)
//  .appStatusPollSeconds(java.lang.Number)
//  .gitAuthBasic(ProjectGitAuthBasic)
//  .gitAuthSsh(ProjectGitAuthSsh)
//  .projectVariables(IResolvable)
//  .projectVariables(java.util.List<ProjectProjectVariables>)
//  .remoteRunnersEnabled(java.lang.Boolean)
//  .remoteRunnersEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.dataSourceGit">dataSourceGit</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a></code> | Configuration of Git repository where waypoint.hcl file is stored. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.projectName">projectName</a></code> | <code>java.lang.String</code> | The name of the Waypoint project. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.appStatusPollSeconds">appStatusPollSeconds</a></code> | <code>java.lang.Number</code> | Application status poll interval in seconds. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.gitAuthBasic">gitAuthBasic</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a></code> | Basic authentication details for Git consisting of `username` and `password`. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.gitAuthSsh">gitAuthSsh</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a></code> | SSH authentication details for Git. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.projectVariables">projectVariables</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>></code> | List of variables in Key/value pairs associated with the Waypoint Project. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.Initializer.parameter.remoteRunnersEnabled">remoteRunnersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable remote runners for project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataSourceGit`<sup>Required</sup> <a name="dataSourceGit" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.dataSourceGit"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a>

Configuration of Git repository where waypoint.hcl file is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#data_source_git Project#data_source_git}

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.projectName"></a>

- *Type:* java.lang.String

The name of the Waypoint project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#project_name Project#project_name}

---

##### `appStatusPollSeconds`<sup>Optional</sup> <a name="appStatusPollSeconds" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.appStatusPollSeconds"></a>

- *Type:* java.lang.Number

Application status poll interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#app_status_poll_seconds Project#app_status_poll_seconds}

---

##### `gitAuthBasic`<sup>Optional</sup> <a name="gitAuthBasic" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.gitAuthBasic"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a>

Basic authentication details for Git consisting of `username` and `password`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_auth_basic Project#git_auth_basic}

---

##### `gitAuthSsh`<sup>Optional</sup> <a name="gitAuthSsh" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.gitAuthSsh"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a>

SSH authentication details for Git.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_auth_ssh Project#git_auth_ssh}

---

##### `projectVariables`<sup>Optional</sup> <a name="projectVariables" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.projectVariables"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>>

List of variables in Key/value pairs associated with the Waypoint Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#project_variables Project#project_variables}

---

##### `remoteRunnersEnabled`<sup>Optional</sup> <a name="remoteRunnersEnabled" id="@cdktf/provider-waypoint.project.Project.Initializer.parameter.remoteRunnersEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable remote runners for project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#remote_runners_enabled Project#remote_runners_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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
| <code><a href="#@cdktf/provider-waypoint.project.Project.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-waypoint.project.Project.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.project.Project.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.Project.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-waypoint.project.Project.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-waypoint.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-waypoint.project.Project.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-waypoint.project.Project.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-waypoint.project.Project.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-waypoint.project.Project.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-waypoint.project.Project.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.project.Project.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.project.Project.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.project.Project.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.project.Project.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.project.Project.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.project.Project.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-waypoint.project.Project.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.project.Project.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.project.Project.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.project.Project.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-waypoint.project.Project.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-waypoint.project.Project.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-waypoint.project.Project.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putDataSourceGit` <a name="putDataSourceGit" id="@cdktf/provider-waypoint.project.Project.putDataSourceGit"></a>

```java
public void putDataSourceGit(ProjectDataSourceGit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.Project.putDataSourceGit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a>

---

##### `putGitAuthBasic` <a name="putGitAuthBasic" id="@cdktf/provider-waypoint.project.Project.putGitAuthBasic"></a>

```java
public void putGitAuthBasic(ProjectGitAuthBasic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.Project.putGitAuthBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a>

---

##### `putGitAuthSsh` <a name="putGitAuthSsh" id="@cdktf/provider-waypoint.project.Project.putGitAuthSsh"></a>

```java
public void putGitAuthSsh(ProjectGitAuthSsh value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.Project.putGitAuthSsh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a>

---

##### `putProjectVariables` <a name="putProjectVariables" id="@cdktf/provider-waypoint.project.Project.putProjectVariables"></a>

```java
public void putProjectVariables(IResolvable OR java.util.List<ProjectProjectVariables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.Project.putProjectVariables.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>>

---

##### `resetAppStatusPollSeconds` <a name="resetAppStatusPollSeconds" id="@cdktf/provider-waypoint.project.Project.resetAppStatusPollSeconds"></a>

```java
public void resetAppStatusPollSeconds()
```

##### `resetGitAuthBasic` <a name="resetGitAuthBasic" id="@cdktf/provider-waypoint.project.Project.resetGitAuthBasic"></a>

```java
public void resetGitAuthBasic()
```

##### `resetGitAuthSsh` <a name="resetGitAuthSsh" id="@cdktf/provider-waypoint.project.Project.resetGitAuthSsh"></a>

```java
public void resetGitAuthSsh()
```

##### `resetProjectVariables` <a name="resetProjectVariables" id="@cdktf/provider-waypoint.project.Project.resetProjectVariables"></a>

```java
public void resetProjectVariables()
```

##### `resetRemoteRunnersEnabled` <a name="resetRemoteRunnersEnabled" id="@cdktf/provider-waypoint.project.Project.resetRemoteRunnersEnabled"></a>

```java
public void resetRemoteRunnersEnabled()
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

```java
import com.hashicorp.cdktf.providers.waypoint.project.Project;

Project.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-waypoint.project.Project.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.project.Project;

Project.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-waypoint.project.Project.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.project.Project;

Project.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-waypoint.project.Project.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.project.Project;

Project.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Project.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.project.Project.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-waypoint.project.Project.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Project to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-waypoint.project.Project.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Project that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.project.Project.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Project to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.dataSourceGit">dataSourceGit</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference">ProjectDataSourceGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthBasic">gitAuthBasic</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference">ProjectGitAuthBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthSsh">gitAuthSsh</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference">ProjectGitAuthSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectVariables">projectVariables</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList">ProjectProjectVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.appStatusPollSecondsInput">appStatusPollSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.dataSourceGitInput">dataSourceGitInput</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthBasicInput">gitAuthBasicInput</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.gitAuthSshInput">gitAuthSshInput</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectNameInput">projectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectVariablesInput">projectVariablesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabledInput">remoteRunnersEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.appStatusPollSeconds">appStatusPollSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.projectName">projectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabled">remoteRunnersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-waypoint.project.Project.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-waypoint.project.Project.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.project.Project.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-waypoint.project.Project.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-waypoint.project.Project.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-waypoint.project.Project.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-waypoint.project.Project.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.project.Project.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.project.Project.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.project.Project.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.project.Project.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.project.Project.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.project.Project.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.project.Project.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataSourceGit`<sup>Required</sup> <a name="dataSourceGit" id="@cdktf/provider-waypoint.project.Project.property.dataSourceGit"></a>

```java
public ProjectDataSourceGitOutputReference getDataSourceGit();
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference">ProjectDataSourceGitOutputReference</a>

---

##### `gitAuthBasic`<sup>Required</sup> <a name="gitAuthBasic" id="@cdktf/provider-waypoint.project.Project.property.gitAuthBasic"></a>

```java
public ProjectGitAuthBasicOutputReference getGitAuthBasic();
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference">ProjectGitAuthBasicOutputReference</a>

---

##### `gitAuthSsh`<sup>Required</sup> <a name="gitAuthSsh" id="@cdktf/provider-waypoint.project.Project.property.gitAuthSsh"></a>

```java
public ProjectGitAuthSshOutputReference getGitAuthSsh();
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference">ProjectGitAuthSshOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.project.Project.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectVariables`<sup>Required</sup> <a name="projectVariables" id="@cdktf/provider-waypoint.project.Project.property.projectVariables"></a>

```java
public ProjectProjectVariablesList getProjectVariables();
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList">ProjectProjectVariablesList</a>

---

##### `appStatusPollSecondsInput`<sup>Optional</sup> <a name="appStatusPollSecondsInput" id="@cdktf/provider-waypoint.project.Project.property.appStatusPollSecondsInput"></a>

```java
public java.lang.Number getAppStatusPollSecondsInput();
```

- *Type:* java.lang.Number

---

##### `dataSourceGitInput`<sup>Optional</sup> <a name="dataSourceGitInput" id="@cdktf/provider-waypoint.project.Project.property.dataSourceGitInput"></a>

```java
public java.lang.Object getDataSourceGitInput();
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a> OR com.hashicorp.cdktf.IResolvable

---

##### `gitAuthBasicInput`<sup>Optional</sup> <a name="gitAuthBasicInput" id="@cdktf/provider-waypoint.project.Project.property.gitAuthBasicInput"></a>

```java
public java.lang.Object getGitAuthBasicInput();
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a> OR com.hashicorp.cdktf.IResolvable

---

##### `gitAuthSshInput`<sup>Optional</sup> <a name="gitAuthSshInput" id="@cdktf/provider-waypoint.project.Project.property.gitAuthSshInput"></a>

```java
public java.lang.Object getGitAuthSshInput();
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a> OR com.hashicorp.cdktf.IResolvable

---

##### `projectNameInput`<sup>Optional</sup> <a name="projectNameInput" id="@cdktf/provider-waypoint.project.Project.property.projectNameInput"></a>

```java
public java.lang.String getProjectNameInput();
```

- *Type:* java.lang.String

---

##### `projectVariablesInput`<sup>Optional</sup> <a name="projectVariablesInput" id="@cdktf/provider-waypoint.project.Project.property.projectVariablesInput"></a>

```java
public java.lang.Object getProjectVariablesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>>

---

##### `remoteRunnersEnabledInput`<sup>Optional</sup> <a name="remoteRunnersEnabledInput" id="@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabledInput"></a>

```java
public java.lang.Object getRemoteRunnersEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `appStatusPollSeconds`<sup>Required</sup> <a name="appStatusPollSeconds" id="@cdktf/provider-waypoint.project.Project.property.appStatusPollSeconds"></a>

```java
public java.lang.Number getAppStatusPollSeconds();
```

- *Type:* java.lang.Number

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-waypoint.project.Project.property.projectName"></a>

```java
public java.lang.String getProjectName();
```

- *Type:* java.lang.String

---

##### `remoteRunnersEnabled`<sup>Required</sup> <a name="remoteRunnersEnabled" id="@cdktf/provider-waypoint.project.Project.property.remoteRunnersEnabled"></a>

```java
public java.lang.Object getRemoteRunnersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.Project.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-waypoint.project.Project.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectConfig <a name="ProjectConfig" id="@cdktf/provider-waypoint.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.project.ProjectConfig;

ProjectConfig.builder()
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
    .dataSourceGit(ProjectDataSourceGit)
    .projectName(java.lang.String)
//  .appStatusPollSeconds(java.lang.Number)
//  .gitAuthBasic(ProjectGitAuthBasic)
//  .gitAuthSsh(ProjectGitAuthSsh)
//  .projectVariables(IResolvable)
//  .projectVariables(java.util.List<ProjectProjectVariables>)
//  .remoteRunnersEnabled(java.lang.Boolean)
//  .remoteRunnersEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.dataSourceGit">dataSourceGit</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a></code> | Configuration of Git repository where waypoint.hcl file is stored. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.projectName">projectName</a></code> | <code>java.lang.String</code> | The name of the Waypoint project. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.appStatusPollSeconds">appStatusPollSeconds</a></code> | <code>java.lang.Number</code> | Application status poll interval in seconds. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthBasic">gitAuthBasic</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a></code> | Basic authentication details for Git consisting of `username` and `password`. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthSsh">gitAuthSsh</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a></code> | SSH authentication details for Git. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.projectVariables">projectVariables</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>></code> | List of variables in Key/value pairs associated with the Waypoint Project. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectConfig.property.remoteRunnersEnabled">remoteRunnersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable remote runners for project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.project.ProjectConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.project.ProjectConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.project.ProjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.project.ProjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.project.ProjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.project.ProjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.project.ProjectConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataSourceGit`<sup>Required</sup> <a name="dataSourceGit" id="@cdktf/provider-waypoint.project.ProjectConfig.property.dataSourceGit"></a>

```java
public ProjectDataSourceGit getDataSourceGit();
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a>

Configuration of Git repository where waypoint.hcl file is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#data_source_git Project#data_source_git}

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-waypoint.project.ProjectConfig.property.projectName"></a>

```java
public java.lang.String getProjectName();
```

- *Type:* java.lang.String

The name of the Waypoint project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#project_name Project#project_name}

---

##### `appStatusPollSeconds`<sup>Optional</sup> <a name="appStatusPollSeconds" id="@cdktf/provider-waypoint.project.ProjectConfig.property.appStatusPollSeconds"></a>

```java
public java.lang.Number getAppStatusPollSeconds();
```

- *Type:* java.lang.Number

Application status poll interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#app_status_poll_seconds Project#app_status_poll_seconds}

---

##### `gitAuthBasic`<sup>Optional</sup> <a name="gitAuthBasic" id="@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthBasic"></a>

```java
public ProjectGitAuthBasic getGitAuthBasic();
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a>

Basic authentication details for Git consisting of `username` and `password`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_auth_basic Project#git_auth_basic}

---

##### `gitAuthSsh`<sup>Optional</sup> <a name="gitAuthSsh" id="@cdktf/provider-waypoint.project.ProjectConfig.property.gitAuthSsh"></a>

```java
public ProjectGitAuthSsh getGitAuthSsh();
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a>

SSH authentication details for Git.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_auth_ssh Project#git_auth_ssh}

---

##### `projectVariables`<sup>Optional</sup> <a name="projectVariables" id="@cdktf/provider-waypoint.project.ProjectConfig.property.projectVariables"></a>

```java
public java.lang.Object getProjectVariables();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>>

List of variables in Key/value pairs associated with the Waypoint Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#project_variables Project#project_variables}

---

##### `remoteRunnersEnabled`<sup>Optional</sup> <a name="remoteRunnersEnabled" id="@cdktf/provider-waypoint.project.ProjectConfig.property.remoteRunnersEnabled"></a>

```java
public java.lang.Object getRemoteRunnersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable remote runners for project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#remote_runners_enabled Project#remote_runners_enabled}

---

### ProjectDataSourceGit <a name="ProjectDataSourceGit" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.project.ProjectDataSourceGit;

ProjectDataSourceGit.builder()
//  .fileChangeSignal(java.lang.String)
//  .gitPath(java.lang.String)
//  .gitPollIntervalSeconds(java.lang.Number)
//  .gitRef(java.lang.String)
//  .gitUrl(java.lang.String)
//  .ignoreChangesOutsidePath(java.lang.Boolean)
//  .ignoreChangesOutsidePath(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.fileChangeSignal">fileChangeSignal</a></code> | <code>java.lang.String</code> | Indicates signal to be sent to any applications when their config files change. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPath">gitPath</a></code> | <code>java.lang.String</code> | Path in git repository when waypoint.hcl file is stored in a sub-directory. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPollIntervalSeconds">gitPollIntervalSeconds</a></code> | <code>java.lang.Number</code> | Interval at which Waypoint should poll git repository for changes. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitRef">gitRef</a></code> | <code>java.lang.String</code> | Git repository ref containing waypoint.hcl file. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitUrl">gitUrl</a></code> | <code>java.lang.String</code> | Url of git repository storing the waypoint.hcl file. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.ignoreChangesOutsidePath">ignoreChangesOutsidePath</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether Waypoint ignores changes outside path storing waypoint.hcl file. |

---

##### `fileChangeSignal`<sup>Optional</sup> <a name="fileChangeSignal" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.fileChangeSignal"></a>

```java
public java.lang.String getFileChangeSignal();
```

- *Type:* java.lang.String

Indicates signal to be sent to any applications when their config files change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#file_change_signal Project#file_change_signal}

---

##### `gitPath`<sup>Optional</sup> <a name="gitPath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPath"></a>

```java
public java.lang.String getGitPath();
```

- *Type:* java.lang.String

Path in git repository when waypoint.hcl file is stored in a sub-directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_path Project#git_path}

---

##### `gitPollIntervalSeconds`<sup>Optional</sup> <a name="gitPollIntervalSeconds" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitPollIntervalSeconds"></a>

```java
public java.lang.Number getGitPollIntervalSeconds();
```

- *Type:* java.lang.Number

Interval at which Waypoint should poll git repository for changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_poll_interval_seconds Project#git_poll_interval_seconds}

---

##### `gitRef`<sup>Optional</sup> <a name="gitRef" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitRef"></a>

```java
public java.lang.String getGitRef();
```

- *Type:* java.lang.String

Git repository ref containing waypoint.hcl file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_ref Project#git_ref}

---

##### `gitUrl`<sup>Optional</sup> <a name="gitUrl" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.gitUrl"></a>

```java
public java.lang.String getGitUrl();
```

- *Type:* java.lang.String

Url of git repository storing the waypoint.hcl file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_url Project#git_url}

---

##### `ignoreChangesOutsidePath`<sup>Optional</sup> <a name="ignoreChangesOutsidePath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGit.property.ignoreChangesOutsidePath"></a>

```java
public java.lang.Object getIgnoreChangesOutsidePath();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether Waypoint ignores changes outside path storing waypoint.hcl file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#ignore_changes_outside_path Project#ignore_changes_outside_path}

---

### ProjectGitAuthBasic <a name="ProjectGitAuthBasic" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.project.ProjectGitAuthBasic;

ProjectGitAuthBasic.builder()
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.password">password</a></code> | <code>java.lang.String</code> | Git password. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.username">username</a></code> | <code>java.lang.String</code> | Git username. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Git password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#password Project#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasic.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Git username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#username Project#username}

---

### ProjectGitAuthSsh <a name="ProjectGitAuthSsh" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.project.ProjectGitAuthSsh;

ProjectGitAuthSsh.builder()
    .sshPrivateKey(java.lang.String)
//  .gitUser(java.lang.String)
//  .passphrase(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.sshPrivateKey">sshPrivateKey</a></code> | <code>java.lang.String</code> | Private key to authenticate to Git. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.gitUser">gitUser</a></code> | <code>java.lang.String</code> | Git user associated with private key. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.passphrase">passphrase</a></code> | <code>java.lang.String</code> | Passphrase to use with private key. |

---

##### `sshPrivateKey`<sup>Required</sup> <a name="sshPrivateKey" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.sshPrivateKey"></a>

```java
public java.lang.String getSshPrivateKey();
```

- *Type:* java.lang.String

Private key to authenticate to Git.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#ssh_private_key Project#ssh_private_key}

---

##### `gitUser`<sup>Optional</sup> <a name="gitUser" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.gitUser"></a>

```java
public java.lang.String getGitUser();
```

- *Type:* java.lang.String

Git user associated with private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_user Project#git_user}

---

##### `passphrase`<sup>Optional</sup> <a name="passphrase" id="@cdktf/provider-waypoint.project.ProjectGitAuthSsh.property.passphrase"></a>

```java
public java.lang.String getPassphrase();
```

- *Type:* java.lang.String

Passphrase to use with private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#passphrase Project#passphrase}

---

### ProjectProjectVariables <a name="ProjectProjectVariables" id="@cdktf/provider-waypoint.project.ProjectProjectVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.project.ProjectProjectVariables;

ProjectProjectVariables.builder()
    .name(java.lang.String)
    .value(java.lang.String)
//  .sensitive(java.lang.Boolean)
//  .sensitive(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#name Project#name}. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#value Project#value}. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables.property.sensitive">sensitive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#sensitive Project#sensitive}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#name Project#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#value Project#value}.

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="@cdktf/provider-waypoint.project.ProjectProjectVariables.property.sensitive"></a>

```java
public java.lang.Object getSensitive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#sensitive Project#sensitive}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectDataSourceGitOutputReference <a name="ProjectDataSourceGitOutputReference" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.project.ProjectDataSourceGitOutputReference;

new ProjectDataSourceGitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileChangeSignal` <a name="resetFileChangeSignal" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetFileChangeSignal"></a>

```java
public void resetFileChangeSignal()
```

##### `resetGitPath` <a name="resetGitPath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitPath"></a>

```java
public void resetGitPath()
```

##### `resetGitPollIntervalSeconds` <a name="resetGitPollIntervalSeconds" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitPollIntervalSeconds"></a>

```java
public void resetGitPollIntervalSeconds()
```

##### `resetGitRef` <a name="resetGitRef" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitRef"></a>

```java
public void resetGitRef()
```

##### `resetGitUrl` <a name="resetGitUrl" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetGitUrl"></a>

```java
public void resetGitUrl()
```

##### `resetIgnoreChangesOutsidePath` <a name="resetIgnoreChangesOutsidePath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.resetIgnoreChangesOutsidePath"></a>

```java
public void resetIgnoreChangesOutsidePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignalInput">fileChangeSignalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPathInput">gitPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSecondsInput">gitPollIntervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRefInput">gitRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrlInput">gitUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePathInput">ignoreChangesOutsidePathInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignal">fileChangeSignal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPath">gitPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSeconds">gitPollIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRef">gitRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrl">gitUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePath">ignoreChangesOutsidePath</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileChangeSignalInput`<sup>Optional</sup> <a name="fileChangeSignalInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignalInput"></a>

```java
public java.lang.String getFileChangeSignalInput();
```

- *Type:* java.lang.String

---

##### `gitPathInput`<sup>Optional</sup> <a name="gitPathInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPathInput"></a>

```java
public java.lang.String getGitPathInput();
```

- *Type:* java.lang.String

---

##### `gitPollIntervalSecondsInput`<sup>Optional</sup> <a name="gitPollIntervalSecondsInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSecondsInput"></a>

```java
public java.lang.Number getGitPollIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `gitRefInput`<sup>Optional</sup> <a name="gitRefInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRefInput"></a>

```java
public java.lang.String getGitRefInput();
```

- *Type:* java.lang.String

---

##### `gitUrlInput`<sup>Optional</sup> <a name="gitUrlInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrlInput"></a>

```java
public java.lang.String getGitUrlInput();
```

- *Type:* java.lang.String

---

##### `ignoreChangesOutsidePathInput`<sup>Optional</sup> <a name="ignoreChangesOutsidePathInput" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePathInput"></a>

```java
public java.lang.Object getIgnoreChangesOutsidePathInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fileChangeSignal`<sup>Required</sup> <a name="fileChangeSignal" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.fileChangeSignal"></a>

```java
public java.lang.String getFileChangeSignal();
```

- *Type:* java.lang.String

---

##### `gitPath`<sup>Required</sup> <a name="gitPath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPath"></a>

```java
public java.lang.String getGitPath();
```

- *Type:* java.lang.String

---

##### `gitPollIntervalSeconds`<sup>Required</sup> <a name="gitPollIntervalSeconds" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitPollIntervalSeconds"></a>

```java
public java.lang.Number getGitPollIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `gitRef`<sup>Required</sup> <a name="gitRef" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitRef"></a>

```java
public java.lang.String getGitRef();
```

- *Type:* java.lang.String

---

##### `gitUrl`<sup>Required</sup> <a name="gitUrl" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.gitUrl"></a>

```java
public java.lang.String getGitUrl();
```

- *Type:* java.lang.String

---

##### `ignoreChangesOutsidePath`<sup>Required</sup> <a name="ignoreChangesOutsidePath" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.ignoreChangesOutsidePath"></a>

```java
public java.lang.Object getIgnoreChangesOutsidePath();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-waypoint.project.ProjectDataSourceGitOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectDataSourceGit">ProjectDataSourceGit</a> OR com.hashicorp.cdktf.IResolvable

---


### ProjectGitAuthBasicOutputReference <a name="ProjectGitAuthBasicOutputReference" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.project.ProjectGitAuthBasicOutputReference;

new ProjectGitAuthBasicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-waypoint.project.ProjectGitAuthBasicOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthBasic">ProjectGitAuthBasic</a> OR com.hashicorp.cdktf.IResolvable

---


### ProjectGitAuthSshOutputReference <a name="ProjectGitAuthSshOutputReference" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.project.ProjectGitAuthSshOutputReference;

new ProjectGitAuthSshOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGitUser` <a name="resetGitUser" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resetGitUser"></a>

```java
public void resetGitUser()
```

##### `resetPassphrase` <a name="resetPassphrase" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.resetPassphrase"></a>

```java
public void resetPassphrase()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUserInput">gitUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphraseInput">passphraseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKeyInput">sshPrivateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUser">gitUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphrase">passphrase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKey">sshPrivateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gitUserInput`<sup>Optional</sup> <a name="gitUserInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUserInput"></a>

```java
public java.lang.String getGitUserInput();
```

- *Type:* java.lang.String

---

##### `passphraseInput`<sup>Optional</sup> <a name="passphraseInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphraseInput"></a>

```java
public java.lang.String getPassphraseInput();
```

- *Type:* java.lang.String

---

##### `sshPrivateKeyInput`<sup>Optional</sup> <a name="sshPrivateKeyInput" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKeyInput"></a>

```java
public java.lang.String getSshPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `gitUser`<sup>Required</sup> <a name="gitUser" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.gitUser"></a>

```java
public java.lang.String getGitUser();
```

- *Type:* java.lang.String

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.passphrase"></a>

```java
public java.lang.String getPassphrase();
```

- *Type:* java.lang.String

---

##### `sshPrivateKey`<sup>Required</sup> <a name="sshPrivateKey" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.sshPrivateKey"></a>

```java
public java.lang.String getSshPrivateKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-waypoint.project.ProjectGitAuthSshOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectGitAuthSsh">ProjectGitAuthSsh</a> OR com.hashicorp.cdktf.IResolvable

---


### ProjectProjectVariablesList <a name="ProjectProjectVariablesList" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.project.ProjectProjectVariablesList;

new ProjectProjectVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.get"></a>

```java
public ProjectProjectVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a>>

---


### ProjectProjectVariablesOutputReference <a name="ProjectProjectVariablesOutputReference" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.project.ProjectProjectVariablesOutputReference;

new ProjectProjectVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSensitive` <a name="resetSensitive" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.resetSensitive"></a>

```java
public void resetSensitive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitiveInput">sensitiveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitive">sensitive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sensitiveInput`<sup>Optional</sup> <a name="sensitiveInput" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitiveInput"></a>

```java
public java.lang.Object getSensitiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sensitive`<sup>Required</sup> <a name="sensitive" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.sensitive"></a>

```java
public java.lang.Object getSensitive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-waypoint.project.ProjectProjectVariablesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-waypoint.project.ProjectProjectVariables">ProjectProjectVariables</a> OR com.hashicorp.cdktf.IResolvable

---




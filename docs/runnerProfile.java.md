# `runnerProfile` Submodule <a name="`runnerProfile` Submodule" id="@cdktf/provider-waypoint.runnerProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RunnerProfile <a name="RunnerProfile" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile waypoint_runner_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.runner_profile.RunnerProfile;

RunnerProfile.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .pluginType(java.lang.String)
//  .default(java.lang.Boolean)
//  .default(IResolvable)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .ociUrl(java.lang.String)
//  .pluginConfig(java.lang.String)
//  .pluginConfigFormat(java.lang.String)
//  .targetRunnerId(java.lang.String)
//  .targetRunnerLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the runner profile. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.pluginType">pluginType</a></code> | <code>java.lang.String</code> | Plugin type for runner i.e docker / kubernetes / aws-ecs. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if this runner profile is the default for any new projects. The default is false. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Any environment variables that should be exposed to the on demand runner. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.ociUrl">ociUrl</a></code> | <code>java.lang.String</code> | oci_url is the OCI image that will be used to boot the on demand runner. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.pluginConfig">pluginConfig</a></code> | <code>java.lang.String</code> | Plugin config is the configuration for the plugin that is created. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.pluginConfigFormat">pluginConfigFormat</a></code> | <code>java.lang.String</code> | Config format specifies the format of plugin_config. Valid values are HCL or JSON. The default is HCL. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.targetRunnerId">targetRunnerId</a></code> | <code>java.lang.String</code> | The ID of the target runner for this profile. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.targetRunnerLabels">targetRunnerLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of labels on target runners. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the runner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#name RunnerProfile#name}

---

##### `pluginType`<sup>Required</sup> <a name="pluginType" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.pluginType"></a>

- *Type:* java.lang.String

Plugin type for runner i.e docker / kubernetes / aws-ecs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_type RunnerProfile#plugin_type}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.default"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if this runner profile is the default for any new projects. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#default RunnerProfile#default}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.environmentVariables"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Any environment variables that should be exposed to the on demand runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#environment_variables RunnerProfile#environment_variables}

---

##### `ociUrl`<sup>Optional</sup> <a name="ociUrl" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.ociUrl"></a>

- *Type:* java.lang.String

oci_url is the OCI image that will be used to boot the on demand runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#oci_url RunnerProfile#oci_url}

---

##### `pluginConfig`<sup>Optional</sup> <a name="pluginConfig" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.pluginConfig"></a>

- *Type:* java.lang.String

Plugin config is the configuration for the plugin that is created.

It is usually HCL and is decoded like the other plugins, and is plugin specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_config RunnerProfile#plugin_config}

---

##### `pluginConfigFormat`<sup>Optional</sup> <a name="pluginConfigFormat" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.pluginConfigFormat"></a>

- *Type:* java.lang.String

Config format specifies the format of plugin_config. Valid values are HCL or JSON. The default is HCL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_config_format RunnerProfile#plugin_config_format}

---

##### `targetRunnerId`<sup>Optional</sup> <a name="targetRunnerId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.targetRunnerId"></a>

- *Type:* java.lang.String

The ID of the target runner for this profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#target_runner_id RunnerProfile#target_runner_id}

---

##### `targetRunnerLabels`<sup>Optional</sup> <a name="targetRunnerLabels" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.Initializer.parameter.targetRunnerLabels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of labels on target runners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#target_runner_labels RunnerProfile#target_runner_labels}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetOciUrl` <a name="resetOciUrl" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetOciUrl"></a>

```java
public void resetOciUrl()
```

##### `resetPluginConfig` <a name="resetPluginConfig" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetPluginConfig"></a>

```java
public void resetPluginConfig()
```

##### `resetPluginConfigFormat` <a name="resetPluginConfigFormat" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetPluginConfigFormat"></a>

```java
public void resetPluginConfigFormat()
```

##### `resetTargetRunnerId` <a name="resetTargetRunnerId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetTargetRunnerId"></a>

```java
public void resetTargetRunnerId()
```

##### `resetTargetRunnerLabels` <a name="resetTargetRunnerLabels" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.resetTargetRunnerLabels"></a>

```java
public void resetTargetRunnerLabels()
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

```java
import com.hashicorp.cdktf.providers.waypoint.runner_profile.RunnerProfile;

RunnerProfile.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.runner_profile.RunnerProfile;

RunnerProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.runner_profile.RunnerProfile;

RunnerProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.runner_profile.RunnerProfile;

RunnerProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RunnerProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RunnerProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RunnerProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RunnerProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RunnerProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.defaultInput">defaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrlInput">ociUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormatInput">pluginConfigFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigInput">pluginConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginTypeInput">pluginTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerIdInput">targetRunnerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabelsInput">targetRunnerLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrl">ociUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfig">pluginConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormat">pluginConfigFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginType">pluginType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerId">targetRunnerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabels">targetRunnerLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.defaultInput"></a>

```java
public java.lang.Object getDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ociUrlInput`<sup>Optional</sup> <a name="ociUrlInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrlInput"></a>

```java
public java.lang.String getOciUrlInput();
```

- *Type:* java.lang.String

---

##### `pluginConfigFormatInput`<sup>Optional</sup> <a name="pluginConfigFormatInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormatInput"></a>

```java
public java.lang.String getPluginConfigFormatInput();
```

- *Type:* java.lang.String

---

##### `pluginConfigInput`<sup>Optional</sup> <a name="pluginConfigInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigInput"></a>

```java
public java.lang.String getPluginConfigInput();
```

- *Type:* java.lang.String

---

##### `pluginTypeInput`<sup>Optional</sup> <a name="pluginTypeInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginTypeInput"></a>

```java
public java.lang.String getPluginTypeInput();
```

- *Type:* java.lang.String

---

##### `targetRunnerIdInput`<sup>Optional</sup> <a name="targetRunnerIdInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerIdInput"></a>

```java
public java.lang.String getTargetRunnerIdInput();
```

- *Type:* java.lang.String

---

##### `targetRunnerLabelsInput`<sup>Optional</sup> <a name="targetRunnerLabelsInput" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTargetRunnerLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.ociUrl"></a>

```java
public java.lang.String getOciUrl();
```

- *Type:* java.lang.String

---

##### `pluginConfig`<sup>Required</sup> <a name="pluginConfig" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfig"></a>

```java
public java.lang.String getPluginConfig();
```

- *Type:* java.lang.String

---

##### `pluginConfigFormat`<sup>Required</sup> <a name="pluginConfigFormat" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginConfigFormat"></a>

```java
public java.lang.String getPluginConfigFormat();
```

- *Type:* java.lang.String

---

##### `pluginType`<sup>Required</sup> <a name="pluginType" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.pluginType"></a>

```java
public java.lang.String getPluginType();
```

- *Type:* java.lang.String

---

##### `targetRunnerId`<sup>Required</sup> <a name="targetRunnerId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerId"></a>

```java
public java.lang.String getTargetRunnerId();
```

- *Type:* java.lang.String

---

##### `targetRunnerLabels`<sup>Required</sup> <a name="targetRunnerLabels" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.targetRunnerLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTargetRunnerLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RunnerProfileConfig <a name="RunnerProfileConfig" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.runner_profile.RunnerProfileConfig;

RunnerProfileConfig.builder()
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
    .name(java.lang.String)
    .pluginType(java.lang.String)
//  .default(java.lang.Boolean)
//  .default(IResolvable)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .ociUrl(java.lang.String)
//  .pluginConfig(java.lang.String)
//  .pluginConfigFormat(java.lang.String)
//  .targetRunnerId(java.lang.String)
//  .targetRunnerLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the runner profile. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginType">pluginType</a></code> | <code>java.lang.String</code> | Plugin type for runner i.e docker / kubernetes / aws-ecs. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if this runner profile is the default for any new projects. The default is false. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Any environment variables that should be exposed to the on demand runner. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.ociUrl">ociUrl</a></code> | <code>java.lang.String</code> | oci_url is the OCI image that will be used to boot the on demand runner. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfig">pluginConfig</a></code> | <code>java.lang.String</code> | Plugin config is the configuration for the plugin that is created. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfigFormat">pluginConfigFormat</a></code> | <code>java.lang.String</code> | Config format specifies the format of plugin_config. Valid values are HCL or JSON. The default is HCL. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerId">targetRunnerId</a></code> | <code>java.lang.String</code> | The ID of the target runner for this profile. |
| <code><a href="#@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerLabels">targetRunnerLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of labels on target runners. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the runner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#name RunnerProfile#name}

---

##### `pluginType`<sup>Required</sup> <a name="pluginType" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginType"></a>

```java
public java.lang.String getPluginType();
```

- *Type:* java.lang.String

Plugin type for runner i.e docker / kubernetes / aws-ecs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_type RunnerProfile#plugin_type}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if this runner profile is the default for any new projects. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#default RunnerProfile#default}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Any environment variables that should be exposed to the on demand runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#environment_variables RunnerProfile#environment_variables}

---

##### `ociUrl`<sup>Optional</sup> <a name="ociUrl" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.ociUrl"></a>

```java
public java.lang.String getOciUrl();
```

- *Type:* java.lang.String

oci_url is the OCI image that will be used to boot the on demand runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#oci_url RunnerProfile#oci_url}

---

##### `pluginConfig`<sup>Optional</sup> <a name="pluginConfig" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfig"></a>

```java
public java.lang.String getPluginConfig();
```

- *Type:* java.lang.String

Plugin config is the configuration for the plugin that is created.

It is usually HCL and is decoded like the other plugins, and is plugin specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_config RunnerProfile#plugin_config}

---

##### `pluginConfigFormat`<sup>Optional</sup> <a name="pluginConfigFormat" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.pluginConfigFormat"></a>

```java
public java.lang.String getPluginConfigFormat();
```

- *Type:* java.lang.String

Config format specifies the format of plugin_config. Valid values are HCL or JSON. The default is HCL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_config_format RunnerProfile#plugin_config_format}

---

##### `targetRunnerId`<sup>Optional</sup> <a name="targetRunnerId" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerId"></a>

```java
public java.lang.String getTargetRunnerId();
```

- *Type:* java.lang.String

The ID of the target runner for this profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#target_runner_id RunnerProfile#target_runner_id}

---

##### `targetRunnerLabels`<sup>Optional</sup> <a name="targetRunnerLabels" id="@cdktf/provider-waypoint.runnerProfile.RunnerProfileConfig.property.targetRunnerLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTargetRunnerLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of labels on target runners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#target_runner_labels RunnerProfile#target_runner_labels}

---




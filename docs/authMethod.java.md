# `authMethod` Submodule <a name="`authMethod` Submodule" id="@cdktf/provider-waypoint.authMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthMethod <a name="AuthMethod" id="@cdktf/provider-waypoint.authMethod.AuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method waypoint_auth_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.auth_method.AuthMethod;

AuthMethod.Builder.create(Construct scope, java.lang.String id)
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
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
    .discoveryUrl(java.lang.String)
    .name(java.lang.String)
//  .accessorSelector(java.lang.String)
//  .allowedRedirectUris(java.util.List<java.lang.String>)
//  .auds(java.util.List<java.lang.String>)
//  .claimMappings(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .discoveryCaPem(java.util.List<java.lang.String>)
//  .displayName(java.lang.String)
//  .listClaimMappings(java.util.Map<java.lang.String, java.lang.String>)
//  .scopes(java.util.List<java.lang.String>)
//  .signingAlgs(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Client ID of OIDC provider. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Client Secret of OIDC provider. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.discoveryUrl">discoveryUrl</a></code> | <code>java.lang.String</code> | Discovery URL for OIDC provider. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Auth Method. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.accessorSelector">accessorSelector</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#accessor_selector AuthMethod#accessor_selector}. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.allowedRedirectUris">allowedRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | Allowed URI for auth redirection. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.auds">auds</a></code> | <code>java.util.List<java.lang.String></code> | The optional audience claims required. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.claimMappings">claimMappings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of a claim to a variable value for the access selector. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of auth method. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.discoveryCaPem">discoveryCaPem</a></code> | <code>java.util.List<java.lang.String></code> | Optional CA certificate chain to validate the discovery URL. Multiple CA certificates can be specified to support easier rotation. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Auth Method. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.listClaimMappings">listClaimMappings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Same as claim_mappings but for list values. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The optional claims scope requested. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.signingAlgs">signingAlgs</a></code> | <code>java.util.List<java.lang.String></code> | The signing algorithms supported by the OIDC connect server. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Client ID of OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#client_id AuthMethod#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

Client Secret of OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#client_secret AuthMethod#client_secret}

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.discoveryUrl"></a>

- *Type:* java.lang.String

Discovery URL for OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#discovery_url AuthMethod#discovery_url}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#name AuthMethod#name}

---

##### `accessorSelector`<sup>Optional</sup> <a name="accessorSelector" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.accessorSelector"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#accessor_selector AuthMethod#accessor_selector}.

---

##### `allowedRedirectUris`<sup>Optional</sup> <a name="allowedRedirectUris" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.allowedRedirectUris"></a>

- *Type:* java.util.List<java.lang.String>

Allowed URI for auth redirection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#allowed_redirect_uris AuthMethod#allowed_redirect_uris}

---

##### `auds`<sup>Optional</sup> <a name="auds" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.auds"></a>

- *Type:* java.util.List<java.lang.String>

The optional audience claims required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#auds AuthMethod#auds}

---

##### `claimMappings`<sup>Optional</sup> <a name="claimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.claimMappings"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of a claim to a variable value for the access selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#claim_mappings AuthMethod#claim_mappings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#description AuthMethod#description}

---

##### `discoveryCaPem`<sup>Optional</sup> <a name="discoveryCaPem" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.discoveryCaPem"></a>

- *Type:* java.util.List<java.lang.String>

Optional CA certificate chain to validate the discovery URL. Multiple CA certificates can be specified to support easier rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#discovery_ca_pem AuthMethod#discovery_ca_pem}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#display_name AuthMethod#display_name}

---

##### `listClaimMappings`<sup>Optional</sup> <a name="listClaimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.listClaimMappings"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Same as claim_mappings but for list values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#list_claim_mappings AuthMethod#list_claim_mappings}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

The optional claims scope requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#scopes AuthMethod#scopes}

---

##### `signingAlgs`<sup>Optional</sup> <a name="signingAlgs" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.signingAlgs"></a>

- *Type:* java.util.List<java.lang.String>

The signing algorithms supported by the OIDC connect server.

If this isn't specified, this will default to RS256 since that should be supported according to the RFC. The string values here should be valid OIDC signing algorithms

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#signing_algs AuthMethod#signing_algs}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-waypoint.authMethod.AuthMethod.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.authMethod.AuthMethod.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.authMethod.AuthMethod.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-waypoint.authMethod.AuthMethod.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-waypoint.authMethod.AuthMethod.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-waypoint.authMethod.AuthMethod.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-waypoint.authMethod.AuthMethod.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-waypoint.authMethod.AuthMethod.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-waypoint.authMethod.AuthMethod.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-waypoint.authMethod.AuthMethod.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.authMethod.AuthMethod.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-waypoint.authMethod.AuthMethod.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-waypoint.authMethod.AuthMethod.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-waypoint.authMethod.AuthMethod.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessorSelector` <a name="resetAccessorSelector" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetAccessorSelector"></a>

```java
public void resetAccessorSelector()
```

##### `resetAllowedRedirectUris` <a name="resetAllowedRedirectUris" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetAllowedRedirectUris"></a>

```java
public void resetAllowedRedirectUris()
```

##### `resetAuds` <a name="resetAuds" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetAuds"></a>

```java
public void resetAuds()
```

##### `resetClaimMappings` <a name="resetClaimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetClaimMappings"></a>

```java
public void resetClaimMappings()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDiscoveryCaPem` <a name="resetDiscoveryCaPem" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetDiscoveryCaPem"></a>

```java
public void resetDiscoveryCaPem()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetListClaimMappings` <a name="resetListClaimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetListClaimMappings"></a>

```java
public void resetListClaimMappings()
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetScopes"></a>

```java
public void resetScopes()
```

##### `resetSigningAlgs` <a name="resetSigningAlgs" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetSigningAlgs"></a>

```java
public void resetSigningAlgs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AuthMethod resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.auth_method.AuthMethod;

AuthMethod.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.auth_method.AuthMethod;

AuthMethod.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.auth_method.AuthMethod;

AuthMethod.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-waypoint.authMethod.AuthMethod.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.auth_method.AuthMethod;

AuthMethod.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AuthMethod.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AuthMethod resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.authMethod.AuthMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AuthMethod to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AuthMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.authMethod.AuthMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AuthMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.accessorSelectorInput">accessorSelectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.allowedRedirectUrisInput">allowedRedirectUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.audsInput">audsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.claimMappingsInput">claimMappingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryCaPemInput">discoveryCaPemInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryUrlInput">discoveryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.listClaimMappingsInput">listClaimMappingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.signingAlgsInput">signingAlgsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.accessorSelector">accessorSelector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.allowedRedirectUris">allowedRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.auds">auds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.claimMappings">claimMappings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryCaPem">discoveryCaPem</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryUrl">discoveryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.listClaimMappings">listClaimMappings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.signingAlgs">signingAlgs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessorSelectorInput`<sup>Optional</sup> <a name="accessorSelectorInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.accessorSelectorInput"></a>

```java
public java.lang.String getAccessorSelectorInput();
```

- *Type:* java.lang.String

---

##### `allowedRedirectUrisInput`<sup>Optional</sup> <a name="allowedRedirectUrisInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.allowedRedirectUrisInput"></a>

```java
public java.util.List<java.lang.String> getAllowedRedirectUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `audsInput`<sup>Optional</sup> <a name="audsInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.audsInput"></a>

```java
public java.util.List<java.lang.String> getAudsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `claimMappingsInput`<sup>Optional</sup> <a name="claimMappingsInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.claimMappingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getClaimMappingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `discoveryCaPemInput`<sup>Optional</sup> <a name="discoveryCaPemInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryCaPemInput"></a>

```java
public java.util.List<java.lang.String> getDiscoveryCaPemInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `discoveryUrlInput`<sup>Optional</sup> <a name="discoveryUrlInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryUrlInput"></a>

```java
public java.lang.String getDiscoveryUrlInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `listClaimMappingsInput`<sup>Optional</sup> <a name="listClaimMappingsInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.listClaimMappingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getListClaimMappingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `signingAlgsInput`<sup>Optional</sup> <a name="signingAlgsInput" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.signingAlgsInput"></a>

```java
public java.util.List<java.lang.String> getSigningAlgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessorSelector`<sup>Required</sup> <a name="accessorSelector" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.accessorSelector"></a>

```java
public java.lang.String getAccessorSelector();
```

- *Type:* java.lang.String

---

##### `allowedRedirectUris`<sup>Required</sup> <a name="allowedRedirectUris" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.allowedRedirectUris"></a>

```java
public java.util.List<java.lang.String> getAllowedRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auds`<sup>Required</sup> <a name="auds" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.auds"></a>

```java
public java.util.List<java.lang.String> getAuds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `claimMappings`<sup>Required</sup> <a name="claimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.claimMappings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getClaimMappings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `discoveryCaPem`<sup>Required</sup> <a name="discoveryCaPem" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryCaPem"></a>

```java
public java.util.List<java.lang.String> getDiscoveryCaPem();
```

- *Type:* java.util.List<java.lang.String>

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryUrl"></a>

```java
public java.lang.String getDiscoveryUrl();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `listClaimMappings`<sup>Required</sup> <a name="listClaimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.listClaimMappings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getListClaimMappings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `signingAlgs`<sup>Required</sup> <a name="signingAlgs" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.signingAlgs"></a>

```java
public java.util.List<java.lang.String> getSigningAlgs();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AuthMethodConfig <a name="AuthMethodConfig" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.waypoint.auth_method.AuthMethodConfig;

AuthMethodConfig.builder()
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
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
    .discoveryUrl(java.lang.String)
    .name(java.lang.String)
//  .accessorSelector(java.lang.String)
//  .allowedRedirectUris(java.util.List<java.lang.String>)
//  .auds(java.util.List<java.lang.String>)
//  .claimMappings(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .discoveryCaPem(java.util.List<java.lang.String>)
//  .displayName(java.lang.String)
//  .listClaimMappings(java.util.Map<java.lang.String, java.lang.String>)
//  .scopes(java.util.List<java.lang.String>)
//  .signingAlgs(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Client ID of OIDC provider. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Client Secret of OIDC provider. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.discoveryUrl">discoveryUrl</a></code> | <code>java.lang.String</code> | Discovery URL for OIDC provider. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Auth Method. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.accessorSelector">accessorSelector</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#accessor_selector AuthMethod#accessor_selector}. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.allowedRedirectUris">allowedRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | Allowed URI for auth redirection. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.auds">auds</a></code> | <code>java.util.List<java.lang.String></code> | The optional audience claims required. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.claimMappings">claimMappings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of a claim to a variable value for the access selector. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of auth method. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.discoveryCaPem">discoveryCaPem</a></code> | <code>java.util.List<java.lang.String></code> | Optional CA certificate chain to validate the discovery URL. Multiple CA certificates can be specified to support easier rotation. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Auth Method. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.listClaimMappings">listClaimMappings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Same as claim_mappings but for list values. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The optional claims scope requested. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.signingAlgs">signingAlgs</a></code> | <code>java.util.List<java.lang.String></code> | The signing algorithms supported by the OIDC connect server. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Client ID of OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#client_id AuthMethod#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Client Secret of OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#client_secret AuthMethod#client_secret}

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.discoveryUrl"></a>

```java
public java.lang.String getDiscoveryUrl();
```

- *Type:* java.lang.String

Discovery URL for OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#discovery_url AuthMethod#discovery_url}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#name AuthMethod#name}

---

##### `accessorSelector`<sup>Optional</sup> <a name="accessorSelector" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.accessorSelector"></a>

```java
public java.lang.String getAccessorSelector();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#accessor_selector AuthMethod#accessor_selector}.

---

##### `allowedRedirectUris`<sup>Optional</sup> <a name="allowedRedirectUris" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.allowedRedirectUris"></a>

```java
public java.util.List<java.lang.String> getAllowedRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

Allowed URI for auth redirection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#allowed_redirect_uris AuthMethod#allowed_redirect_uris}

---

##### `auds`<sup>Optional</sup> <a name="auds" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.auds"></a>

```java
public java.util.List<java.lang.String> getAuds();
```

- *Type:* java.util.List<java.lang.String>

The optional audience claims required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#auds AuthMethod#auds}

---

##### `claimMappings`<sup>Optional</sup> <a name="claimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.claimMappings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getClaimMappings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of a claim to a variable value for the access selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#claim_mappings AuthMethod#claim_mappings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#description AuthMethod#description}

---

##### `discoveryCaPem`<sup>Optional</sup> <a name="discoveryCaPem" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.discoveryCaPem"></a>

```java
public java.util.List<java.lang.String> getDiscoveryCaPem();
```

- *Type:* java.util.List<java.lang.String>

Optional CA certificate chain to validate the discovery URL. Multiple CA certificates can be specified to support easier rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#discovery_ca_pem AuthMethod#discovery_ca_pem}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#display_name AuthMethod#display_name}

---

##### `listClaimMappings`<sup>Optional</sup> <a name="listClaimMappings" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.listClaimMappings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getListClaimMappings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Same as claim_mappings but for list values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#list_claim_mappings AuthMethod#list_claim_mappings}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

The optional claims scope requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#scopes AuthMethod#scopes}

---

##### `signingAlgs`<sup>Optional</sup> <a name="signingAlgs" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.signingAlgs"></a>

```java
public java.util.List<java.lang.String> getSigningAlgs();
```

- *Type:* java.util.List<java.lang.String>

The signing algorithms supported by the OIDC connect server.

If this isn't specified, this will default to RS256 since that should be supported according to the RFC. The string values here should be valid OIDC signing algorithms

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#signing_algs AuthMethod#signing_algs}

---




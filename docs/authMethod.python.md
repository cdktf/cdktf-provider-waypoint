# `authMethod` Submodule <a name="`authMethod` Submodule" id="@cdktf/provider-waypoint.authMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthMethod <a name="AuthMethod" id="@cdktf/provider-waypoint.authMethod.AuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method waypoint_auth_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import auth_method

authMethod.AuthMethod(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_id: str,
  client_secret: str,
  discovery_url: str,
  name: str,
  accessor_selector: str = None,
  allowed_redirect_uris: typing.List[str] = None,
  auds: typing.List[str] = None,
  claim_mappings: typing.Mapping[str] = None,
  description: str = None,
  discovery_ca_pem: typing.List[str] = None,
  display_name: str = None,
  list_claim_mappings: typing.Mapping[str] = None,
  scopes: typing.List[str] = None,
  signing_algs: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Client ID of OIDC provider. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | Client Secret of OIDC provider. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.discoveryUrl">discovery_url</a></code> | <code>str</code> | Discovery URL for OIDC provider. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Auth Method. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.accessorSelector">accessor_selector</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#accessor_selector AuthMethod#accessor_selector}. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.allowedRedirectUris">allowed_redirect_uris</a></code> | <code>typing.List[str]</code> | Allowed URI for auth redirection. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.auds">auds</a></code> | <code>typing.List[str]</code> | The optional audience claims required. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.claimMappings">claim_mappings</a></code> | <code>typing.Mapping[str]</code> | Mapping of a claim to a variable value for the access selector. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of auth method. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.discoveryCaPem">discovery_ca_pem</a></code> | <code>typing.List[str]</code> | Optional CA certificate chain to validate the discovery URL. Multiple CA certificates can be specified to support easier rotation. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the Auth Method. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.listClaimMappings">list_claim_mappings</a></code> | <code>typing.Mapping[str]</code> | Same as claim_mappings but for list values. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | The optional claims scope requested. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.signingAlgs">signing_algs</a></code> | <code>typing.List[str]</code> | The signing algorithms supported by the OIDC connect server. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.clientId"></a>

- *Type:* str

Client ID of OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#client_id AuthMethod#client_id}

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.clientSecret"></a>

- *Type:* str

Client Secret of OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#client_secret AuthMethod#client_secret}

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.discoveryUrl"></a>

- *Type:* str

Discovery URL for OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#discovery_url AuthMethod#discovery_url}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.name"></a>

- *Type:* str

The name of the Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#name AuthMethod#name}

---

##### `accessor_selector`<sup>Optional</sup> <a name="accessor_selector" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.accessorSelector"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#accessor_selector AuthMethod#accessor_selector}.

---

##### `allowed_redirect_uris`<sup>Optional</sup> <a name="allowed_redirect_uris" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.allowedRedirectUris"></a>

- *Type:* typing.List[str]

Allowed URI for auth redirection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#allowed_redirect_uris AuthMethod#allowed_redirect_uris}

---

##### `auds`<sup>Optional</sup> <a name="auds" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.auds"></a>

- *Type:* typing.List[str]

The optional audience claims required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#auds AuthMethod#auds}

---

##### `claim_mappings`<sup>Optional</sup> <a name="claim_mappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.claimMappings"></a>

- *Type:* typing.Mapping[str]

Mapping of a claim to a variable value for the access selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#claim_mappings AuthMethod#claim_mappings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.description"></a>

- *Type:* str

Description of auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#description AuthMethod#description}

---

##### `discovery_ca_pem`<sup>Optional</sup> <a name="discovery_ca_pem" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.discoveryCaPem"></a>

- *Type:* typing.List[str]

Optional CA certificate chain to validate the discovery URL. Multiple CA certificates can be specified to support easier rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#discovery_ca_pem AuthMethod#discovery_ca_pem}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#display_name AuthMethod#display_name}

---

##### `list_claim_mappings`<sup>Optional</sup> <a name="list_claim_mappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.listClaimMappings"></a>

- *Type:* typing.Mapping[str]

Same as claim_mappings but for list values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#list_claim_mappings AuthMethod#list_claim_mappings}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

The optional claims scope requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#scopes AuthMethod#scopes}

---

##### `signing_algs`<sup>Optional</sup> <a name="signing_algs" id="@cdktf/provider-waypoint.authMethod.AuthMethod.Initializer.parameter.signingAlgs"></a>

- *Type:* typing.List[str]

The signing algorithms supported by the OIDC connect server.

If this isn't specified, this will default to RS256 since that should be supported according to the RFC. The string values here should be valid OIDC signing algorithms

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#signing_algs AuthMethod#signing_algs}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetAccessorSelector">reset_accessor_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetAllowedRedirectUris">reset_allowed_redirect_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetAuds">reset_auds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetClaimMappings">reset_claim_mappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetDiscoveryCaPem">reset_discovery_ca_pem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetListClaimMappings">reset_list_claim_mappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.resetSigningAlgs">reset_signing_algs</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-waypoint.authMethod.AuthMethod.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-waypoint.authMethod.AuthMethod.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-waypoint.authMethod.AuthMethod.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-waypoint.authMethod.AuthMethod.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-waypoint.authMethod.AuthMethod.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-waypoint.authMethod.AuthMethod.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-waypoint.authMethod.AuthMethod.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-waypoint.authMethod.AuthMethod.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-waypoint.authMethod.AuthMethod.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-waypoint.authMethod.AuthMethod.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-waypoint.authMethod.AuthMethod.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.authMethod.AuthMethod.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-waypoint.authMethod.AuthMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-waypoint.authMethod.AuthMethod.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-waypoint.authMethod.AuthMethod.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-waypoint.authMethod.AuthMethod.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_accessor_selector` <a name="reset_accessor_selector" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetAccessorSelector"></a>

```python
def reset_accessor_selector() -> None
```

##### `reset_allowed_redirect_uris` <a name="reset_allowed_redirect_uris" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetAllowedRedirectUris"></a>

```python
def reset_allowed_redirect_uris() -> None
```

##### `reset_auds` <a name="reset_auds" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetAuds"></a>

```python
def reset_auds() -> None
```

##### `reset_claim_mappings` <a name="reset_claim_mappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetClaimMappings"></a>

```python
def reset_claim_mappings() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_discovery_ca_pem` <a name="reset_discovery_ca_pem" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetDiscoveryCaPem"></a>

```python
def reset_discovery_ca_pem() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_list_claim_mappings` <a name="reset_list_claim_mappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetListClaimMappings"></a>

```python
def reset_list_claim_mappings() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_signing_algs` <a name="reset_signing_algs" id="@cdktf/provider-waypoint.authMethod.AuthMethod.resetSigningAlgs"></a>

```python
def reset_signing_algs() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AuthMethod resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isConstruct"></a>

```python
from cdktf_cdktf_provider_waypoint import auth_method

authMethod.AuthMethod.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_waypoint import auth_method

authMethod.AuthMethod.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_waypoint import auth_method

authMethod.AuthMethod.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-waypoint.authMethod.AuthMethod.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-waypoint.authMethod.AuthMethod.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_waypoint import auth_method

authMethod.AuthMethod.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AuthMethod resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-waypoint.authMethod.AuthMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AuthMethod to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AuthMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.authMethod.AuthMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AuthMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.accessorSelectorInput">accessor_selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.allowedRedirectUrisInput">allowed_redirect_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.audsInput">auds_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.claimMappingsInput">claim_mappings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryCaPemInput">discovery_ca_pem_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryUrlInput">discovery_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.listClaimMappingsInput">list_claim_mappings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.signingAlgsInput">signing_algs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.accessorSelector">accessor_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.allowedRedirectUris">allowed_redirect_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.auds">auds</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.claimMappings">claim_mappings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryCaPem">discovery_ca_pem</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.listClaimMappings">list_claim_mappings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.signingAlgs">signing_algs</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accessor_selector_input`<sup>Optional</sup> <a name="accessor_selector_input" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.accessorSelectorInput"></a>

```python
accessor_selector_input: str
```

- *Type:* str

---

##### `allowed_redirect_uris_input`<sup>Optional</sup> <a name="allowed_redirect_uris_input" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.allowedRedirectUrisInput"></a>

```python
allowed_redirect_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auds_input`<sup>Optional</sup> <a name="auds_input" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.audsInput"></a>

```python
auds_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `claim_mappings_input`<sup>Optional</sup> <a name="claim_mappings_input" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.claimMappingsInput"></a>

```python
claim_mappings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `discovery_ca_pem_input`<sup>Optional</sup> <a name="discovery_ca_pem_input" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryCaPemInput"></a>

```python
discovery_ca_pem_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `discovery_url_input`<sup>Optional</sup> <a name="discovery_url_input" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryUrlInput"></a>

```python
discovery_url_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `list_claim_mappings_input`<sup>Optional</sup> <a name="list_claim_mappings_input" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.listClaimMappingsInput"></a>

```python
list_claim_mappings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `signing_algs_input`<sup>Optional</sup> <a name="signing_algs_input" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.signingAlgsInput"></a>

```python
signing_algs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accessor_selector`<sup>Required</sup> <a name="accessor_selector" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.accessorSelector"></a>

```python
accessor_selector: str
```

- *Type:* str

---

##### `allowed_redirect_uris`<sup>Required</sup> <a name="allowed_redirect_uris" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.allowedRedirectUris"></a>

```python
allowed_redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auds`<sup>Required</sup> <a name="auds" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.auds"></a>

```python
auds: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `claim_mappings`<sup>Required</sup> <a name="claim_mappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.claimMappings"></a>

```python
claim_mappings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `discovery_ca_pem`<sup>Required</sup> <a name="discovery_ca_pem" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryCaPem"></a>

```python
discovery_ca_pem: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `list_claim_mappings`<sup>Required</sup> <a name="list_claim_mappings" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.listClaimMappings"></a>

```python
list_claim_mappings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `signing_algs`<sup>Required</sup> <a name="signing_algs" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.signingAlgs"></a>

```python
signing_algs: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethod.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-waypoint.authMethod.AuthMethod.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuthMethodConfig <a name="AuthMethodConfig" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_waypoint import auth_method

authMethod.AuthMethodConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_id: str,
  client_secret: str,
  discovery_url: str,
  name: str,
  accessor_selector: str = None,
  allowed_redirect_uris: typing.List[str] = None,
  auds: typing.List[str] = None,
  claim_mappings: typing.Mapping[str] = None,
  description: str = None,
  discovery_ca_pem: typing.List[str] = None,
  display_name: str = None,
  list_claim_mappings: typing.Mapping[str] = None,
  scopes: typing.List[str] = None,
  signing_algs: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.clientId">client_id</a></code> | <code>str</code> | Client ID of OIDC provider. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Client Secret of OIDC provider. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | Discovery URL for OIDC provider. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.name">name</a></code> | <code>str</code> | The name of the Auth Method. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.accessorSelector">accessor_selector</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#accessor_selector AuthMethod#accessor_selector}. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.allowedRedirectUris">allowed_redirect_uris</a></code> | <code>typing.List[str]</code> | Allowed URI for auth redirection. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.auds">auds</a></code> | <code>typing.List[str]</code> | The optional audience claims required. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.claimMappings">claim_mappings</a></code> | <code>typing.Mapping[str]</code> | Mapping of a claim to a variable value for the access selector. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.description">description</a></code> | <code>str</code> | Description of auth method. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.discoveryCaPem">discovery_ca_pem</a></code> | <code>typing.List[str]</code> | Optional CA certificate chain to validate the discovery URL. Multiple CA certificates can be specified to support easier rotation. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the Auth Method. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.listClaimMappings">list_claim_mappings</a></code> | <code>typing.Mapping[str]</code> | Same as claim_mappings but for list values. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The optional claims scope requested. |
| <code><a href="#@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.signingAlgs">signing_algs</a></code> | <code>typing.List[str]</code> | The signing algorithms supported by the OIDC connect server. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Client ID of OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#client_id AuthMethod#client_id}

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Client Secret of OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#client_secret AuthMethod#client_secret}

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

Discovery URL for OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#discovery_url AuthMethod#discovery_url}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#name AuthMethod#name}

---

##### `accessor_selector`<sup>Optional</sup> <a name="accessor_selector" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.accessorSelector"></a>

```python
accessor_selector: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#accessor_selector AuthMethod#accessor_selector}.

---

##### `allowed_redirect_uris`<sup>Optional</sup> <a name="allowed_redirect_uris" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.allowedRedirectUris"></a>

```python
allowed_redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

Allowed URI for auth redirection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#allowed_redirect_uris AuthMethod#allowed_redirect_uris}

---

##### `auds`<sup>Optional</sup> <a name="auds" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.auds"></a>

```python
auds: typing.List[str]
```

- *Type:* typing.List[str]

The optional audience claims required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#auds AuthMethod#auds}

---

##### `claim_mappings`<sup>Optional</sup> <a name="claim_mappings" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.claimMappings"></a>

```python
claim_mappings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping of a claim to a variable value for the access selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#claim_mappings AuthMethod#claim_mappings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#description AuthMethod#description}

---

##### `discovery_ca_pem`<sup>Optional</sup> <a name="discovery_ca_pem" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.discoveryCaPem"></a>

```python
discovery_ca_pem: typing.List[str]
```

- *Type:* typing.List[str]

Optional CA certificate chain to validate the discovery URL. Multiple CA certificates can be specified to support easier rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#discovery_ca_pem AuthMethod#discovery_ca_pem}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#display_name AuthMethod#display_name}

---

##### `list_claim_mappings`<sup>Optional</sup> <a name="list_claim_mappings" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.listClaimMappings"></a>

```python
list_claim_mappings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Same as claim_mappings but for list values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#list_claim_mappings AuthMethod#list_claim_mappings}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The optional claims scope requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#scopes AuthMethod#scopes}

---

##### `signing_algs`<sup>Optional</sup> <a name="signing_algs" id="@cdktf/provider-waypoint.authMethod.AuthMethodConfig.property.signingAlgs"></a>

```python
signing_algs: typing.List[str]
```

- *Type:* typing.List[str]

The signing algorithms supported by the OIDC connect server.

If this isn't specified, this will default to RS256 since that should be supported according to the RFC. The string values here should be valid OIDC signing algorithms

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#signing_algs AuthMethod#signing_algs}

---




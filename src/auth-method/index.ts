/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthMethodConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#accessor_selector AuthMethod#accessor_selector}
  */
  readonly accessorSelector?: string;
  /**
  * Allowed URI for auth redirection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#allowed_redirect_uris AuthMethod#allowed_redirect_uris}
  */
  readonly allowedRedirectUris?: string[];
  /**
  * The optional audience claims required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#auds AuthMethod#auds}
  */
  readonly auds?: string[];
  /**
  * Mapping of a claim to a variable value for the access selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#claim_mappings AuthMethod#claim_mappings}
  */
  readonly claimMappings?: { [key: string]: string };
  /**
  * Client ID of OIDC provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#client_id AuthMethod#client_id}
  */
  readonly clientId: string;
  /**
  * Client Secret of OIDC provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#client_secret AuthMethod#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Description of auth method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#description AuthMethod#description}
  */
  readonly description?: string;
  /**
  * Optional CA certificate chain to validate the discovery URL. Multiple CA certificates can be specified to support easier rotation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#discovery_ca_pem AuthMethod#discovery_ca_pem}
  */
  readonly discoveryCaPem?: string[];
  /**
  * Discovery URL for OIDC provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#discovery_url AuthMethod#discovery_url}
  */
  readonly discoveryUrl: string;
  /**
  * The display name of the Auth Method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#display_name AuthMethod#display_name}
  */
  readonly displayName?: string;
  /**
  * Same as claim_mappings but for list values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#list_claim_mappings AuthMethod#list_claim_mappings}
  */
  readonly listClaimMappings?: { [key: string]: string };
  /**
  * The name of the Auth Method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#name AuthMethod#name}
  */
  readonly name: string;
  /**
  * The optional claims scope requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#scopes AuthMethod#scopes}
  */
  readonly scopes?: string[];
  /**
  * The signing algorithms supported by the OIDC connect server. If this isn't specified, this will default to RS256 since that should be supported according to the RFC. The string values here should be valid OIDC signing algorithms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method#signing_algs AuthMethod#signing_algs}
  */
  readonly signingAlgs?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method waypoint_auth_method}
*/
export class AuthMethod extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "waypoint_auth_method";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/auth_method waypoint_auth_method} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthMethodConfig
  */
  public constructor(scope: Construct, id: string, config: AuthMethodConfig) {
    super(scope, id, {
      terraformResourceType: 'waypoint_auth_method',
      terraformGeneratorMetadata: {
        providerName: 'waypoint',
        providerVersion: '0.1.0',
        providerVersionConstraint: '~> 0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessorSelector = config.accessorSelector;
    this._allowedRedirectUris = config.allowedRedirectUris;
    this._auds = config.auds;
    this._claimMappings = config.claimMappings;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._description = config.description;
    this._discoveryCaPem = config.discoveryCaPem;
    this._discoveryUrl = config.discoveryUrl;
    this._displayName = config.displayName;
    this._listClaimMappings = config.listClaimMappings;
    this._name = config.name;
    this._scopes = config.scopes;
    this._signingAlgs = config.signingAlgs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor_selector - computed: false, optional: true, required: false
  private _accessorSelector?: string; 
  public get accessorSelector() {
    return this.getStringAttribute('accessor_selector');
  }
  public set accessorSelector(value: string) {
    this._accessorSelector = value;
  }
  public resetAccessorSelector() {
    this._accessorSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessorSelectorInput() {
    return this._accessorSelector;
  }

  // allowed_redirect_uris - computed: false, optional: true, required: false
  private _allowedRedirectUris?: string[]; 
  public get allowedRedirectUris() {
    return this.getListAttribute('allowed_redirect_uris');
  }
  public set allowedRedirectUris(value: string[]) {
    this._allowedRedirectUris = value;
  }
  public resetAllowedRedirectUris() {
    this._allowedRedirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRedirectUrisInput() {
    return this._allowedRedirectUris;
  }

  // auds - computed: false, optional: true, required: false
  private _auds?: string[]; 
  public get auds() {
    return this.getListAttribute('auds');
  }
  public set auds(value: string[]) {
    this._auds = value;
  }
  public resetAuds() {
    this._auds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audsInput() {
    return this._auds;
  }

  // claim_mappings - computed: false, optional: true, required: false
  private _claimMappings?: { [key: string]: string }; 
  public get claimMappings() {
    return this.getStringMapAttribute('claim_mappings');
  }
  public set claimMappings(value: { [key: string]: string }) {
    this._claimMappings = value;
  }
  public resetClaimMappings() {
    this._claimMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimMappingsInput() {
    return this._claimMappings;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // discovery_ca_pem - computed: false, optional: true, required: false
  private _discoveryCaPem?: string[]; 
  public get discoveryCaPem() {
    return this.getListAttribute('discovery_ca_pem');
  }
  public set discoveryCaPem(value: string[]) {
    this._discoveryCaPem = value;
  }
  public resetDiscoveryCaPem() {
    this._discoveryCaPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryCaPemInput() {
    return this._discoveryCaPem;
  }

  // discovery_url - computed: false, optional: false, required: true
  private _discoveryUrl?: string; 
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
  public set discoveryUrl(value: string) {
    this._discoveryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryUrlInput() {
    return this._discoveryUrl;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // list_claim_mappings - computed: false, optional: true, required: false
  private _listClaimMappings?: { [key: string]: string }; 
  public get listClaimMappings() {
    return this.getStringMapAttribute('list_claim_mappings');
  }
  public set listClaimMappings(value: { [key: string]: string }) {
    this._listClaimMappings = value;
  }
  public resetListClaimMappings() {
    this._listClaimMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listClaimMappingsInput() {
    return this._listClaimMappings;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // signing_algs - computed: false, optional: true, required: false
  private _signingAlgs?: string[]; 
  public get signingAlgs() {
    return this.getListAttribute('signing_algs');
  }
  public set signingAlgs(value: string[]) {
    this._signingAlgs = value;
  }
  public resetSigningAlgs() {
    this._signingAlgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingAlgsInput() {
    return this._signingAlgs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accessor_selector: cdktf.stringToTerraform(this._accessorSelector),
      allowed_redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedRedirectUris),
      auds: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auds),
      claim_mappings: cdktf.hashMapper(cdktf.stringToTerraform)(this._claimMappings),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      description: cdktf.stringToTerraform(this._description),
      discovery_ca_pem: cdktf.listMapper(cdktf.stringToTerraform, false)(this._discoveryCaPem),
      discovery_url: cdktf.stringToTerraform(this._discoveryUrl),
      display_name: cdktf.stringToTerraform(this._displayName),
      list_claim_mappings: cdktf.hashMapper(cdktf.stringToTerraform)(this._listClaimMappings),
      name: cdktf.stringToTerraform(this._name),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      signing_algs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._signingAlgs),
    };
  }
}

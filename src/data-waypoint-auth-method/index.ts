/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/auth_method
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWaypointAuthMethodConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Auth Method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/auth_method#name DataWaypointAuthMethod#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/auth_method waypoint_auth_method}
*/
export class DataWaypointAuthMethod extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "waypoint_auth_method";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataWaypointAuthMethod resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataWaypointAuthMethod to import
  * @param importFromId The id of the existing DataWaypointAuthMethod that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/auth_method#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataWaypointAuthMethod to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "waypoint_auth_method", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/auth_method waypoint_auth_method} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWaypointAuthMethodConfig
  */
  public constructor(scope: Construct, id: string, config: DataWaypointAuthMethodConfig) {
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor_selector - computed: true, optional: false, required: false
  public get accessorSelector() {
    return this.getStringAttribute('accessor_selector');
  }

  // allowed_redirect_uris - computed: true, optional: false, required: false
  public get allowedRedirectUris() {
    return this.getListAttribute('allowed_redirect_uris');
  }

  // auds - computed: true, optional: false, required: false
  public get auds() {
    return this.getListAttribute('auds');
  }

  // claim_mappings - computed: true, optional: false, required: false
  private _claimMappings = new cdktf.StringMap(this, "claim_mappings");
  public get claimMappings() {
    return this._claimMappings;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // discovery_ca_pem - computed: true, optional: false, required: false
  public get discoveryCaPem() {
    return this.getListAttribute('discovery_ca_pem');
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // list_claim_mappings - computed: true, optional: false, required: false
  private _listClaimMappings = new cdktf.StringMap(this, "list_claim_mappings");
  public get listClaimMappings() {
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

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // signing_algs - computed: true, optional: false, required: false
  public get signingAlgs() {
    return this.getListAttribute('signing_algs');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }
}

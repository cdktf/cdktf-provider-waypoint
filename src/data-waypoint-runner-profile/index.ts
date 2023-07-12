/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/runner_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWaypointRunnerProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the Runner profile
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/runner_profile#id DataWaypointRunnerProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/runner_profile waypoint_runner_profile}
*/
export class DataWaypointRunnerProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "waypoint_runner_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/runner_profile waypoint_runner_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWaypointRunnerProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataWaypointRunnerProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'waypoint_runner_profile',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new cdktf.StringMap(this, "environment_variables");
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // oci_url - computed: true, optional: false, required: false
  public get ociUrl() {
    return this.getStringAttribute('oci_url');
  }

  // plugin_config - computed: true, optional: false, required: false
  public get pluginConfig() {
    return this.getStringAttribute('plugin_config');
  }

  // plugin_config_format - computed: true, optional: false, required: false
  public get pluginConfigFormat() {
    return this.getStringAttribute('plugin_config_format');
  }

  // plugin_type - computed: true, optional: false, required: false
  public get pluginType() {
    return this.getStringAttribute('plugin_type');
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // target_runner_id - computed: true, optional: false, required: false
  public get targetRunnerId() {
    return this.getStringAttribute('target_runner_id');
  }

  // target_runner_labels - computed: true, optional: false, required: false
  private _targetRunnerLabels = new cdktf.StringMap(this, "target_runner_labels");
  public get targetRunnerLabels() {
    return this._targetRunnerLabels;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}

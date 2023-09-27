/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RunnerProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates if this runner profile is the default for any new projects. The default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#default RunnerProfile#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Any environment variables that should be exposed to the on demand runner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#environment_variables RunnerProfile#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * The name of the runner profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#name RunnerProfile#name}
  */
  readonly name: string;
  /**
  * oci_url is the OCI image that will be used to boot the on demand runner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#oci_url RunnerProfile#oci_url}
  */
  readonly ociUrl?: string;
  /**
  * Plugin config is the configuration for the plugin that is created. It is usually HCL and is decoded like the other plugins, and is plugin specific.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_config RunnerProfile#plugin_config}
  */
  readonly pluginConfig?: string;
  /**
  * Config format specifies the format of plugin_config. Valid values are HCL or JSON. The default is HCL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_config_format RunnerProfile#plugin_config_format}
  */
  readonly pluginConfigFormat?: string;
  /**
  * Plugin type for runner i.e docker / kubernetes / aws-ecs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#plugin_type RunnerProfile#plugin_type}
  */
  readonly pluginType: string;
  /**
  * The ID of the target runner for this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#target_runner_id RunnerProfile#target_runner_id}
  */
  readonly targetRunnerId?: string;
  /**
  * A map of labels on target runners
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile#target_runner_labels RunnerProfile#target_runner_labels}
  */
  readonly targetRunnerLabels?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile waypoint_runner_profile}
*/
export class RunnerProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "waypoint_runner_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/runner_profile waypoint_runner_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RunnerProfileConfig
  */
  public constructor(scope: Construct, id: string, config: RunnerProfileConfig) {
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
    this._default = config.default;
    this._environmentVariables = config.environmentVariables;
    this._name = config.name;
    this._ociUrl = config.ociUrl;
    this._pluginConfig = config.pluginConfig;
    this._pluginConfigFormat = config.pluginConfigFormat;
    this._pluginType = config.pluginType;
    this._targetRunnerId = config.targetRunnerId;
    this._targetRunnerLabels = config.targetRunnerLabels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: true, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // oci_url - computed: true, optional: true, required: false
  private _ociUrl?: string; 
  public get ociUrl() {
    return this.getStringAttribute('oci_url');
  }
  public set ociUrl(value: string) {
    this._ociUrl = value;
  }
  public resetOciUrl() {
    this._ociUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociUrlInput() {
    return this._ociUrl;
  }

  // plugin_config - computed: false, optional: true, required: false
  private _pluginConfig?: string; 
  public get pluginConfig() {
    return this.getStringAttribute('plugin_config');
  }
  public set pluginConfig(value: string) {
    this._pluginConfig = value;
  }
  public resetPluginConfig() {
    this._pluginConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginConfigInput() {
    return this._pluginConfig;
  }

  // plugin_config_format - computed: true, optional: true, required: false
  private _pluginConfigFormat?: string; 
  public get pluginConfigFormat() {
    return this.getStringAttribute('plugin_config_format');
  }
  public set pluginConfigFormat(value: string) {
    this._pluginConfigFormat = value;
  }
  public resetPluginConfigFormat() {
    this._pluginConfigFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginConfigFormatInput() {
    return this._pluginConfigFormat;
  }

  // plugin_type - computed: false, optional: false, required: true
  private _pluginType?: string; 
  public get pluginType() {
    return this.getStringAttribute('plugin_type');
  }
  public set pluginType(value: string) {
    this._pluginType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginTypeInput() {
    return this._pluginType;
  }

  // target_runner_id - computed: false, optional: true, required: false
  private _targetRunnerId?: string; 
  public get targetRunnerId() {
    return this.getStringAttribute('target_runner_id');
  }
  public set targetRunnerId(value: string) {
    this._targetRunnerId = value;
  }
  public resetTargetRunnerId() {
    this._targetRunnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRunnerIdInput() {
    return this._targetRunnerId;
  }

  // target_runner_labels - computed: false, optional: true, required: false
  private _targetRunnerLabels?: { [key: string]: string }; 
  public get targetRunnerLabels() {
    return this.getStringMapAttribute('target_runner_labels');
  }
  public set targetRunnerLabels(value: { [key: string]: string }) {
    this._targetRunnerLabels = value;
  }
  public resetTargetRunnerLabels() {
    this._targetRunnerLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRunnerLabelsInput() {
    return this._targetRunnerLabels;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default: cdktf.booleanToTerraform(this._default),
      environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._environmentVariables),
      name: cdktf.stringToTerraform(this._name),
      oci_url: cdktf.stringToTerraform(this._ociUrl),
      plugin_config: cdktf.stringToTerraform(this._pluginConfig),
      plugin_config_format: cdktf.stringToTerraform(this._pluginConfigFormat),
      plugin_type: cdktf.stringToTerraform(this._pluginType),
      target_runner_id: cdktf.stringToTerraform(this._targetRunnerId),
      target_runner_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._targetRunnerLabels),
    };
  }
}

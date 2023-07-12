/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/config_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Config Source Project
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/config_source#application ConfigSource#application}
  */
  readonly application?: string;
  /**
  * Configuration for the dynamic source type
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/config_source#config ConfigSource#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Config Source Project
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/config_source#project ConfigSource#project}
  */
  readonly project?: string;
  /**
  * Config Source Scope
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/config_source#scope ConfigSource#scope}
  */
  readonly scope: string;
  /**
  * Config Source type
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/config_source#type ConfigSource#type}
  */
  readonly type: string;
  /**
  * Config Source Workspace
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/config_source#workspace ConfigSource#workspace}
  */
  readonly workspace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/config_source waypoint_config_source}
*/
export class ConfigSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "waypoint_config_source";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/config_source waypoint_config_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigSourceConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'waypoint_config_source',
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
    this._application = config.application;
    this._config = config.config;
    this._project = config.project;
    this._scope = config.scope;
    this._type = config.type;
    this._workspace = config.workspace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application - computed: false, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  public resetWorkspace() {
    this._workspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application: cdktf.stringToTerraform(this._application),
      config: cdktf.hashMapper(cdktf.stringToTerraform)(this._config),
      project: cdktf.stringToTerraform(this._project),
      scope: cdktf.stringToTerraform(this._scope),
      type: cdktf.stringToTerraform(this._type),
      workspace: cdktf.stringToTerraform(this._workspace),
    };
  }
}

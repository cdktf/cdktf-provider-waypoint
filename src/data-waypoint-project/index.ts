/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWaypointProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Waypoint project
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#project_name DataWaypointProject#project_name}
  */
  readonly projectName: string;
}
export interface DataWaypointProjectDataSourceGit {
}

export function dataWaypointProjectDataSourceGitToTerraform(struct?: DataWaypointProjectDataSourceGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataWaypointProjectDataSourceGitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataWaypointProjectDataSourceGit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWaypointProjectDataSourceGit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_change_signal - computed: true, optional: false, required: false
  public get fileChangeSignal() {
    return this.getStringAttribute('file_change_signal');
  }

  // git_path - computed: true, optional: false, required: false
  public get gitPath() {
    return this.getStringAttribute('git_path');
  }

  // git_poll_interval_seconds - computed: true, optional: false, required: false
  public get gitPollIntervalSeconds() {
    return this.getNumberAttribute('git_poll_interval_seconds');
  }

  // git_ref - computed: true, optional: false, required: false
  public get gitRef() {
    return this.getStringAttribute('git_ref');
  }

  // git_url - computed: true, optional: false, required: false
  public get gitUrl() {
    return this.getStringAttribute('git_url');
  }

  // ignore_changes_outside_path - computed: true, optional: false, required: false
  public get ignoreChangesOutsidePath() {
    return this.getBooleanAttribute('ignore_changes_outside_path');
  }
}
export interface DataWaypointProjectGitAuthBasic {
  /**
  * Git password
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#password DataWaypointProject#password}
  */
  readonly password: string;
  /**
  * Git username
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#username DataWaypointProject#username}
  */
  readonly username: string;
}

export function dataWaypointProjectGitAuthBasicToTerraform(struct?: DataWaypointProjectGitAuthBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class DataWaypointProjectGitAuthBasicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataWaypointProjectGitAuthBasic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWaypointProjectGitAuthBasic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataWaypointProjectGitAuthSsh {
  /**
  * Private key to authenticate to Git
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#ssh_private_key DataWaypointProject#ssh_private_key}
  */
  readonly sshPrivateKey: string;
}

export function dataWaypointProjectGitAuthSshToTerraform(struct?: DataWaypointProjectGitAuthSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssh_private_key: cdktf.stringToTerraform(struct!.sshPrivateKey),
  }
}

export class DataWaypointProjectGitAuthSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataWaypointProjectGitAuthSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sshPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPrivateKey = this._sshPrivateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWaypointProjectGitAuthSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sshPrivateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sshPrivateKey = value.sshPrivateKey;
    }
  }

  // git_user - computed: true, optional: false, required: false
  public get gitUser() {
    return this.getStringAttribute('git_user');
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // ssh_private_key - computed: true, optional: false, required: true
  private _sshPrivateKey?: string; 
  public get sshPrivateKey() {
    return this.getStringAttribute('ssh_private_key');
  }
  public set sshPrivateKey(value: string) {
    this._sshPrivateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPrivateKeyInput() {
    return this._sshPrivateKey;
  }
}
export interface DataWaypointProjectProjectVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#name DataWaypointProject#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project#value DataWaypointProject#value}
  */
  readonly value: string;
}

export function dataWaypointProjectProjectVariablesToTerraform(struct?: DataWaypointProjectProjectVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataWaypointProjectProjectVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataWaypointProjectProjectVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWaypointProjectProjectVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // sensitive - computed: true, optional: false, required: false
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataWaypointProjectProjectVariablesList extends cdktf.ComplexList {
  public internalValue? : DataWaypointProjectProjectVariables[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataWaypointProjectProjectVariablesOutputReference {
    return new DataWaypointProjectProjectVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project waypoint_project}
*/
export class DataWaypointProject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "waypoint_project";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/data-sources/project waypoint_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWaypointProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataWaypointProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'waypoint_project',
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
    this._projectName = config.projectName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_status_poll_seconds - computed: true, optional: false, required: false
  public get appStatusPollSeconds() {
    return this.getNumberAttribute('app_status_poll_seconds');
  }

  // applications - computed: true, optional: false, required: false
  public get applications() {
    return this.getListAttribute('applications');
  }

  // data_source_git - computed: true, optional: false, required: false
  private _dataSourceGit = new DataWaypointProjectDataSourceGitOutputReference(this, "data_source_git");
  public get dataSourceGit() {
    return this._dataSourceGit;
  }

  // git_auth_basic - computed: true, optional: false, required: false
  private _gitAuthBasic = new DataWaypointProjectGitAuthBasicOutputReference(this, "git_auth_basic");
  public get gitAuthBasic() {
    return this._gitAuthBasic;
  }

  // git_auth_ssh - computed: true, optional: false, required: false
  private _gitAuthSsh = new DataWaypointProjectGitAuthSshOutputReference(this, "git_auth_ssh");
  public get gitAuthSsh() {
    return this._gitAuthSsh;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // project_variables - computed: true, optional: false, required: false
  private _projectVariables = new DataWaypointProjectProjectVariablesList(this, "project_variables", false);
  public get projectVariables() {
    return this._projectVariables;
  }

  // remote_runners_enabled - computed: true, optional: false, required: false
  public get remoteRunnersEnabled() {
    return this.getBooleanAttribute('remote_runners_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_name: cdktf.stringToTerraform(this._projectName),
    };
  }
}

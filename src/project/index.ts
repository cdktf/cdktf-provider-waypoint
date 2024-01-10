// https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application status poll interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#app_status_poll_seconds Project#app_status_poll_seconds}
  */
  readonly appStatusPollSeconds?: number;
  /**
  * Configuration of Git repository where waypoint.hcl file is stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#data_source_git Project#data_source_git}
  */
  readonly dataSourceGit: ProjectDataSourceGit;
  /**
  * Basic authentication details for Git consisting of `username` and `password`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_auth_basic Project#git_auth_basic}
  */
  readonly gitAuthBasic?: ProjectGitAuthBasic;
  /**
  * SSH authentication details for Git
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_auth_ssh Project#git_auth_ssh}
  */
  readonly gitAuthSsh?: ProjectGitAuthSsh;
  /**
  * The name of the Waypoint project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#project_name Project#project_name}
  */
  readonly projectName: string;
  /**
  * List of variables in Key/value pairs associated with the Waypoint Project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#project_variables Project#project_variables}
  */
  readonly projectVariables?: ProjectProjectVariables[] | cdktf.IResolvable;
  /**
  * Enable remote runners for project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#remote_runners_enabled Project#remote_runners_enabled}
  */
  readonly remoteRunnersEnabled?: boolean | cdktf.IResolvable;
}
export interface ProjectDataSourceGit {
  /**
  * Indicates signal to be sent to any applications when their config files change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#file_change_signal Project#file_change_signal}
  */
  readonly fileChangeSignal?: string;
  /**
  * Path in git repository when waypoint.hcl file is stored in a sub-directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_path Project#git_path}
  */
  readonly gitPath?: string;
  /**
  * Interval at which Waypoint should poll git repository for changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_poll_interval_seconds Project#git_poll_interval_seconds}
  */
  readonly gitPollIntervalSeconds?: number;
  /**
  * Git repository ref containing waypoint.hcl file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_ref Project#git_ref}
  */
  readonly gitRef?: string;
  /**
  * Url of git repository storing the waypoint.hcl file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_url Project#git_url}
  */
  readonly gitUrl?: string;
  /**
  * Whether Waypoint ignores changes outside path storing waypoint.hcl file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#ignore_changes_outside_path Project#ignore_changes_outside_path}
  */
  readonly ignoreChangesOutsidePath?: boolean | cdktf.IResolvable;
}

export function projectDataSourceGitToTerraform(struct?: ProjectDataSourceGit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_change_signal: cdktf.stringToTerraform(struct!.fileChangeSignal),
    git_path: cdktf.stringToTerraform(struct!.gitPath),
    git_poll_interval_seconds: cdktf.numberToTerraform(struct!.gitPollIntervalSeconds),
    git_ref: cdktf.stringToTerraform(struct!.gitRef),
    git_url: cdktf.stringToTerraform(struct!.gitUrl),
    ignore_changes_outside_path: cdktf.booleanToTerraform(struct!.ignoreChangesOutsidePath),
  }
}


export function projectDataSourceGitToHclTerraform(struct?: ProjectDataSourceGit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_change_signal: {
      value: cdktf.stringToHclTerraform(struct!.fileChangeSignal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_path: {
      value: cdktf.stringToHclTerraform(struct!.gitPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_poll_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.gitPollIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    git_ref: {
      value: cdktf.stringToHclTerraform(struct!.gitRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_url: {
      value: cdktf.stringToHclTerraform(struct!.gitUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_changes_outside_path: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreChangesOutsidePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectDataSourceGitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectDataSourceGit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileChangeSignal !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileChangeSignal = this._fileChangeSignal;
    }
    if (this._gitPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitPath = this._gitPath;
    }
    if (this._gitPollIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitPollIntervalSeconds = this._gitPollIntervalSeconds;
    }
    if (this._gitRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRef = this._gitRef;
    }
    if (this._gitUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitUrl = this._gitUrl;
    }
    if (this._ignoreChangesOutsidePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreChangesOutsidePath = this._ignoreChangesOutsidePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectDataSourceGit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileChangeSignal = undefined;
      this._gitPath = undefined;
      this._gitPollIntervalSeconds = undefined;
      this._gitRef = undefined;
      this._gitUrl = undefined;
      this._ignoreChangesOutsidePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileChangeSignal = value.fileChangeSignal;
      this._gitPath = value.gitPath;
      this._gitPollIntervalSeconds = value.gitPollIntervalSeconds;
      this._gitRef = value.gitRef;
      this._gitUrl = value.gitUrl;
      this._ignoreChangesOutsidePath = value.ignoreChangesOutsidePath;
    }
  }

  // file_change_signal - computed: false, optional: true, required: false
  private _fileChangeSignal?: string; 
  public get fileChangeSignal() {
    return this.getStringAttribute('file_change_signal');
  }
  public set fileChangeSignal(value: string) {
    this._fileChangeSignal = value;
  }
  public resetFileChangeSignal() {
    this._fileChangeSignal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileChangeSignalInput() {
    return this._fileChangeSignal;
  }

  // git_path - computed: false, optional: true, required: false
  private _gitPath?: string; 
  public get gitPath() {
    return this.getStringAttribute('git_path');
  }
  public set gitPath(value: string) {
    this._gitPath = value;
  }
  public resetGitPath() {
    this._gitPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitPathInput() {
    return this._gitPath;
  }

  // git_poll_interval_seconds - computed: false, optional: true, required: false
  private _gitPollIntervalSeconds?: number; 
  public get gitPollIntervalSeconds() {
    return this.getNumberAttribute('git_poll_interval_seconds');
  }
  public set gitPollIntervalSeconds(value: number) {
    this._gitPollIntervalSeconds = value;
  }
  public resetGitPollIntervalSeconds() {
    this._gitPollIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitPollIntervalSecondsInput() {
    return this._gitPollIntervalSeconds;
  }

  // git_ref - computed: false, optional: true, required: false
  private _gitRef?: string; 
  public get gitRef() {
    return this.getStringAttribute('git_ref');
  }
  public set gitRef(value: string) {
    this._gitRef = value;
  }
  public resetGitRef() {
    this._gitRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRefInput() {
    return this._gitRef;
  }

  // git_url - computed: false, optional: true, required: false
  private _gitUrl?: string; 
  public get gitUrl() {
    return this.getStringAttribute('git_url');
  }
  public set gitUrl(value: string) {
    this._gitUrl = value;
  }
  public resetGitUrl() {
    this._gitUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitUrlInput() {
    return this._gitUrl;
  }

  // ignore_changes_outside_path - computed: true, optional: true, required: false
  private _ignoreChangesOutsidePath?: boolean | cdktf.IResolvable; 
  public get ignoreChangesOutsidePath() {
    return this.getBooleanAttribute('ignore_changes_outside_path');
  }
  public set ignoreChangesOutsidePath(value: boolean | cdktf.IResolvable) {
    this._ignoreChangesOutsidePath = value;
  }
  public resetIgnoreChangesOutsidePath() {
    this._ignoreChangesOutsidePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreChangesOutsidePathInput() {
    return this._ignoreChangesOutsidePath;
  }
}
export interface ProjectGitAuthBasic {
  /**
  * Git password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#password Project#password}
  */
  readonly password: string;
  /**
  * Git username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#username Project#username}
  */
  readonly username: string;
}

export function projectGitAuthBasicToTerraform(struct?: ProjectGitAuthBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function projectGitAuthBasicToHclTerraform(struct?: ProjectGitAuthBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectGitAuthBasicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectGitAuthBasic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ProjectGitAuthBasic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
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

  // username - computed: false, optional: false, required: true
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
export interface ProjectGitAuthSsh {
  /**
  * Git user associated with private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#git_user Project#git_user}
  */
  readonly gitUser?: string;
  /**
  * Passphrase to use with private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#passphrase Project#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Private key to authenticate to Git
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#ssh_private_key Project#ssh_private_key}
  */
  readonly sshPrivateKey: string;
}

export function projectGitAuthSshToTerraform(struct?: ProjectGitAuthSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    git_user: cdktf.stringToTerraform(struct!.gitUser),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    ssh_private_key: cdktf.stringToTerraform(struct!.sshPrivateKey),
  }
}


export function projectGitAuthSshToHclTerraform(struct?: ProjectGitAuthSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    git_user: {
      value: cdktf.stringToHclTerraform(struct!.gitUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_private_key: {
      value: cdktf.stringToHclTerraform(struct!.sshPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectGitAuthSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectGitAuthSsh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gitUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitUser = this._gitUser;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._sshPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPrivateKey = this._sshPrivateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectGitAuthSsh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gitUser = undefined;
      this._passphrase = undefined;
      this._sshPrivateKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gitUser = value.gitUser;
      this._passphrase = value.passphrase;
      this._sshPrivateKey = value.sshPrivateKey;
    }
  }

  // git_user - computed: false, optional: true, required: false
  private _gitUser?: string; 
  public get gitUser() {
    return this.getStringAttribute('git_user');
  }
  public set gitUser(value: string) {
    this._gitUser = value;
  }
  public resetGitUser() {
    this._gitUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitUserInput() {
    return this._gitUser;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // ssh_private_key - computed: false, optional: false, required: true
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
export interface ProjectProjectVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#sensitive Project#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#value Project#value}
  */
  readonly value: string;
}

export function projectProjectVariablesToTerraform(struct?: ProjectProjectVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function projectProjectVariablesToHclTerraform(struct?: ProjectProjectVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectProjectVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectProjectVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectProjectVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sensitive = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sensitive = value.sensitive;
      this._value = value.value;
    }
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

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // value - computed: false, optional: false, required: true
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

export class ProjectProjectVariablesList extends cdktf.ComplexList {
  public internalValue? : ProjectProjectVariables[] | cdktf.IResolvable

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
  public get(index: number): ProjectProjectVariablesOutputReference {
    return new ProjectProjectVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project waypoint_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "waypoint_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "waypoint_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/waypoint/0.1.0/docs/resources/project waypoint_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
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
    this._appStatusPollSeconds = config.appStatusPollSeconds;
    this._dataSourceGit.internalValue = config.dataSourceGit;
    this._gitAuthBasic.internalValue = config.gitAuthBasic;
    this._gitAuthSsh.internalValue = config.gitAuthSsh;
    this._projectName = config.projectName;
    this._projectVariables.internalValue = config.projectVariables;
    this._remoteRunnersEnabled = config.remoteRunnersEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_status_poll_seconds - computed: true, optional: true, required: false
  private _appStatusPollSeconds?: number; 
  public get appStatusPollSeconds() {
    return this.getNumberAttribute('app_status_poll_seconds');
  }
  public set appStatusPollSeconds(value: number) {
    this._appStatusPollSeconds = value;
  }
  public resetAppStatusPollSeconds() {
    this._appStatusPollSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStatusPollSecondsInput() {
    return this._appStatusPollSeconds;
  }

  // data_source_git - computed: false, optional: false, required: true
  private _dataSourceGit = new ProjectDataSourceGitOutputReference(this, "data_source_git");
  public get dataSourceGit() {
    return this._dataSourceGit;
  }
  public putDataSourceGit(value: ProjectDataSourceGit) {
    this._dataSourceGit.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceGitInput() {
    return this._dataSourceGit.internalValue;
  }

  // git_auth_basic - computed: false, optional: true, required: false
  private _gitAuthBasic = new ProjectGitAuthBasicOutputReference(this, "git_auth_basic");
  public get gitAuthBasic() {
    return this._gitAuthBasic;
  }
  public putGitAuthBasic(value: ProjectGitAuthBasic) {
    this._gitAuthBasic.internalValue = value;
  }
  public resetGitAuthBasic() {
    this._gitAuthBasic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitAuthBasicInput() {
    return this._gitAuthBasic.internalValue;
  }

  // git_auth_ssh - computed: false, optional: true, required: false
  private _gitAuthSsh = new ProjectGitAuthSshOutputReference(this, "git_auth_ssh");
  public get gitAuthSsh() {
    return this._gitAuthSsh;
  }
  public putGitAuthSsh(value: ProjectGitAuthSsh) {
    this._gitAuthSsh.internalValue = value;
  }
  public resetGitAuthSsh() {
    this._gitAuthSsh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitAuthSshInput() {
    return this._gitAuthSsh.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // project_variables - computed: false, optional: true, required: false
  private _projectVariables = new ProjectProjectVariablesList(this, "project_variables", false);
  public get projectVariables() {
    return this._projectVariables;
  }
  public putProjectVariables(value: ProjectProjectVariables[] | cdktf.IResolvable) {
    this._projectVariables.internalValue = value;
  }
  public resetProjectVariables() {
    this._projectVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectVariablesInput() {
    return this._projectVariables.internalValue;
  }

  // remote_runners_enabled - computed: false, optional: true, required: false
  private _remoteRunnersEnabled?: boolean | cdktf.IResolvable; 
  public get remoteRunnersEnabled() {
    return this.getBooleanAttribute('remote_runners_enabled');
  }
  public set remoteRunnersEnabled(value: boolean | cdktf.IResolvable) {
    this._remoteRunnersEnabled = value;
  }
  public resetRemoteRunnersEnabled() {
    this._remoteRunnersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteRunnersEnabledInput() {
    return this._remoteRunnersEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_status_poll_seconds: cdktf.numberToTerraform(this._appStatusPollSeconds),
      data_source_git: projectDataSourceGitToTerraform(this._dataSourceGit.internalValue),
      git_auth_basic: projectGitAuthBasicToTerraform(this._gitAuthBasic.internalValue),
      git_auth_ssh: projectGitAuthSshToTerraform(this._gitAuthSsh.internalValue),
      project_name: cdktf.stringToTerraform(this._projectName),
      project_variables: cdktf.listMapper(projectProjectVariablesToTerraform, false)(this._projectVariables.internalValue),
      remote_runners_enabled: cdktf.booleanToTerraform(this._remoteRunnersEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_status_poll_seconds: {
        value: cdktf.numberToHclTerraform(this._appStatusPollSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_source_git: {
        value: projectDataSourceGitToHclTerraform(this._dataSourceGit.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectDataSourceGit",
      },
      git_auth_basic: {
        value: projectGitAuthBasicToHclTerraform(this._gitAuthBasic.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectGitAuthBasic",
      },
      git_auth_ssh: {
        value: projectGitAuthSshToHclTerraform(this._gitAuthSsh.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectGitAuthSsh",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_variables: {
        value: cdktf.listMapperHcl(projectProjectVariablesToHclTerraform, false)(this._projectVariables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectProjectVariablesList",
      },
      remote_runners_enabled: {
        value: cdktf.booleanToHclTerraform(this._remoteRunnersEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

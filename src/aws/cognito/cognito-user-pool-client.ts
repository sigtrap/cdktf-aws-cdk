// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Cognito
*/
export interface CognitoUserPoolClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#access_token_validity CognitoUserPoolClient#access_token_validity}
  */
  readonly accessTokenValidity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#allowed_oauth_flows CognitoUserPoolClient#allowed_oauth_flows}
  */
  readonly allowedOauthFlows?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#allowed_oauth_flows_user_pool_client CognitoUserPoolClient#allowed_oauth_flows_user_pool_client}
  */
  readonly allowedOauthFlowsUserPoolClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#allowed_oauth_scopes CognitoUserPoolClient#allowed_oauth_scopes}
  */
  readonly allowedOauthScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#callback_urls CognitoUserPoolClient#callback_urls}
  */
  readonly callbackUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}
  */
  readonly defaultRedirectUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}
  */
  readonly enableTokenRevocation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}
  */
  readonly explicitAuthFlows?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#generate_secret CognitoUserPoolClient#generate_secret}
  */
  readonly generateSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#id_token_validity CognitoUserPoolClient#id_token_validity}
  */
  readonly idTokenValidity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#logout_urls CognitoUserPoolClient#logout_urls}
  */
  readonly logoutUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#name CognitoUserPoolClient#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}
  */
  readonly preventUserExistenceErrors?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#read_attributes CognitoUserPoolClient#read_attributes}
  */
  readonly readAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}
  */
  readonly refreshTokenValidity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}
  */
  readonly supportedIdentityProviders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#user_pool_id CognitoUserPoolClient#user_pool_id}
  */
  readonly userPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#write_attributes CognitoUserPoolClient#write_attributes}
  */
  readonly writeAttributes?: string[];
  /**
  * analytics_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#analytics_configuration CognitoUserPoolClient#analytics_configuration}
  */
  readonly analyticsConfiguration?: CognitoUserPoolClientAnalyticsConfiguration;
  /**
  * token_validity_units block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#token_validity_units CognitoUserPoolClient#token_validity_units}
  */
  readonly tokenValidityUnits?: CognitoUserPoolClientTokenValidityUnits;
}
export interface CognitoUserPoolClientAnalyticsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#application_arn CognitoUserPoolClient#application_arn}
  */
  readonly applicationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#application_id CognitoUserPoolClient#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#external_id CognitoUserPoolClient#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#role_arn CognitoUserPoolClient#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#user_data_shared CognitoUserPoolClient#user_data_shared}
  */
  readonly userDataShared?: boolean | cdktf.IResolvable;
}

export function cognitoUserPoolClientAnalyticsConfigurationToTerraform(struct?: CognitoUserPoolClientAnalyticsConfigurationOutputReference | CognitoUserPoolClientAnalyticsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_arn: cdktf.stringToTerraform(struct!.applicationArn),
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    user_data_shared: cdktf.booleanToTerraform(struct!.userDataShared),
  }
}

export class CognitoUserPoolClientAnalyticsConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // application_arn - computed: false, optional: true, required: false
  private _applicationArn?: string | undefined; 
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }
  public set applicationArn(value: string | undefined) {
    this._applicationArn = value;
  }
  public resetApplicationArn() {
    this._applicationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationArnInput() {
    return this._applicationArn
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string | undefined; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string | undefined) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string | undefined; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string | undefined) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string | undefined; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string | undefined) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // user_data_shared - computed: false, optional: true, required: false
  private _userDataShared?: boolean | cdktf.IResolvable | undefined; 
  public get userDataShared() {
    return this.getBooleanAttribute('user_data_shared') as any;
  }
  public set userDataShared(value: boolean | cdktf.IResolvable | undefined) {
    this._userDataShared = value;
  }
  public resetUserDataShared() {
    this._userDataShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataSharedInput() {
    return this._userDataShared
  }
}
export interface CognitoUserPoolClientTokenValidityUnits {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#access_token CognitoUserPoolClient#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#id_token CognitoUserPoolClient#id_token}
  */
  readonly idToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#refresh_token CognitoUserPoolClient#refresh_token}
  */
  readonly refreshToken?: string;
}

export function cognitoUserPoolClientTokenValidityUnitsToTerraform(struct?: CognitoUserPoolClientTokenValidityUnitsOutputReference | CognitoUserPoolClientTokenValidityUnits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    id_token: cdktf.stringToTerraform(struct!.idToken),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
  }
}

export class CognitoUserPoolClientTokenValidityUnitsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string | undefined; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string | undefined) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken
  }

  // id_token - computed: false, optional: true, required: false
  private _idToken?: string | undefined; 
  public get idToken() {
    return this.getStringAttribute('id_token');
  }
  public set idToken(value: string | undefined) {
    this._idToken = value;
  }
  public resetIdToken() {
    this._idToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenInput() {
    return this._idToken
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: string | undefined; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string | undefined) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html aws_cognito_user_pool_client}
*/
export class CognitoUserPoolClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cognito_user_pool_client";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html aws_cognito_user_pool_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoUserPoolClientConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoUserPoolClientConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_user_pool_client',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessTokenValidity = config.accessTokenValidity;
    this._allowedOauthFlows = config.allowedOauthFlows;
    this._allowedOauthFlowsUserPoolClient = config.allowedOauthFlowsUserPoolClient;
    this._allowedOauthScopes = config.allowedOauthScopes;
    this._callbackUrls = config.callbackUrls;
    this._defaultRedirectUri = config.defaultRedirectUri;
    this._enableTokenRevocation = config.enableTokenRevocation;
    this._explicitAuthFlows = config.explicitAuthFlows;
    this._generateSecret = config.generateSecret;
    this._idTokenValidity = config.idTokenValidity;
    this._logoutUrls = config.logoutUrls;
    this._name = config.name;
    this._preventUserExistenceErrors = config.preventUserExistenceErrors;
    this._readAttributes = config.readAttributes;
    this._refreshTokenValidity = config.refreshTokenValidity;
    this._supportedIdentityProviders = config.supportedIdentityProviders;
    this._userPoolId = config.userPoolId;
    this._writeAttributes = config.writeAttributes;
    this._analyticsConfiguration = config.analyticsConfiguration;
    this._tokenValidityUnits = config.tokenValidityUnits;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_validity - computed: false, optional: true, required: false
  private _accessTokenValidity?: number | undefined; 
  public get accessTokenValidity() {
    return this.getNumberAttribute('access_token_validity');
  }
  public set accessTokenValidity(value: number | undefined) {
    this._accessTokenValidity = value;
  }
  public resetAccessTokenValidity() {
    this._accessTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenValidityInput() {
    return this._accessTokenValidity
  }

  // allowed_oauth_flows - computed: false, optional: true, required: false
  private _allowedOauthFlows?: string[] | undefined; 
  public get allowedOauthFlows() {
    return this.getListAttribute('allowed_oauth_flows');
  }
  public set allowedOauthFlows(value: string[] | undefined) {
    this._allowedOauthFlows = value;
  }
  public resetAllowedOauthFlows() {
    this._allowedOauthFlows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOauthFlowsInput() {
    return this._allowedOauthFlows
  }

  // allowed_oauth_flows_user_pool_client - computed: false, optional: true, required: false
  private _allowedOauthFlowsUserPoolClient?: boolean | cdktf.IResolvable | undefined; 
  public get allowedOauthFlowsUserPoolClient() {
    return this.getBooleanAttribute('allowed_oauth_flows_user_pool_client') as any;
  }
  public set allowedOauthFlowsUserPoolClient(value: boolean | cdktf.IResolvable | undefined) {
    this._allowedOauthFlowsUserPoolClient = value;
  }
  public resetAllowedOauthFlowsUserPoolClient() {
    this._allowedOauthFlowsUserPoolClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOauthFlowsUserPoolClientInput() {
    return this._allowedOauthFlowsUserPoolClient
  }

  // allowed_oauth_scopes - computed: false, optional: true, required: false
  private _allowedOauthScopes?: string[] | undefined; 
  public get allowedOauthScopes() {
    return this.getListAttribute('allowed_oauth_scopes');
  }
  public set allowedOauthScopes(value: string[] | undefined) {
    this._allowedOauthScopes = value;
  }
  public resetAllowedOauthScopes() {
    this._allowedOauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOauthScopesInput() {
    return this._allowedOauthScopes
  }

  // callback_urls - computed: true, optional: true, required: false
  private _callbackUrls?: string[] | undefined; 
  public get callbackUrls() {
    return this.getListAttribute('callback_urls');
  }
  public set callbackUrls(value: string[] | undefined) {
    this._callbackUrls = value;
  }
  public resetCallbackUrls() {
    this._callbackUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlsInput() {
    return this._callbackUrls
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // default_redirect_uri - computed: false, optional: true, required: false
  private _defaultRedirectUri?: string | undefined; 
  public get defaultRedirectUri() {
    return this.getStringAttribute('default_redirect_uri');
  }
  public set defaultRedirectUri(value: string | undefined) {
    this._defaultRedirectUri = value;
  }
  public resetDefaultRedirectUri() {
    this._defaultRedirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRedirectUriInput() {
    return this._defaultRedirectUri
  }

  // enable_token_revocation - computed: true, optional: true, required: false
  private _enableTokenRevocation?: boolean | cdktf.IResolvable | undefined; 
  public get enableTokenRevocation() {
    return this.getBooleanAttribute('enable_token_revocation') as any;
  }
  public set enableTokenRevocation(value: boolean | cdktf.IResolvable | undefined) {
    this._enableTokenRevocation = value;
  }
  public resetEnableTokenRevocation() {
    this._enableTokenRevocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTokenRevocationInput() {
    return this._enableTokenRevocation
  }

  // explicit_auth_flows - computed: false, optional: true, required: false
  private _explicitAuthFlows?: string[] | undefined; 
  public get explicitAuthFlows() {
    return this.getListAttribute('explicit_auth_flows');
  }
  public set explicitAuthFlows(value: string[] | undefined) {
    this._explicitAuthFlows = value;
  }
  public resetExplicitAuthFlows() {
    this._explicitAuthFlows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitAuthFlowsInput() {
    return this._explicitAuthFlows
  }

  // generate_secret - computed: false, optional: true, required: false
  private _generateSecret?: boolean | cdktf.IResolvable | undefined; 
  public get generateSecret() {
    return this.getBooleanAttribute('generate_secret') as any;
  }
  public set generateSecret(value: boolean | cdktf.IResolvable | undefined) {
    this._generateSecret = value;
  }
  public resetGenerateSecret() {
    this._generateSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateSecretInput() {
    return this._generateSecret
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_token_validity - computed: false, optional: true, required: false
  private _idTokenValidity?: number | undefined; 
  public get idTokenValidity() {
    return this.getNumberAttribute('id_token_validity');
  }
  public set idTokenValidity(value: number | undefined) {
    this._idTokenValidity = value;
  }
  public resetIdTokenValidity() {
    this._idTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenValidityInput() {
    return this._idTokenValidity
  }

  // logout_urls - computed: true, optional: true, required: false
  private _logoutUrls?: string[] | undefined; 
  public get logoutUrls() {
    return this.getListAttribute('logout_urls');
  }
  public set logoutUrls(value: string[] | undefined) {
    this._logoutUrls = value;
  }
  public resetLogoutUrls() {
    this._logoutUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrlsInput() {
    return this._logoutUrls
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
    return this._name
  }

  // prevent_user_existence_errors - computed: true, optional: true, required: false
  private _preventUserExistenceErrors?: string | undefined; 
  public get preventUserExistenceErrors() {
    return this.getStringAttribute('prevent_user_existence_errors');
  }
  public set preventUserExistenceErrors(value: string | undefined) {
    this._preventUserExistenceErrors = value;
  }
  public resetPreventUserExistenceErrors() {
    this._preventUserExistenceErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventUserExistenceErrorsInput() {
    return this._preventUserExistenceErrors
  }

  // read_attributes - computed: false, optional: true, required: false
  private _readAttributes?: string[] | undefined; 
  public get readAttributes() {
    return this.getListAttribute('read_attributes');
  }
  public set readAttributes(value: string[] | undefined) {
    this._readAttributes = value;
  }
  public resetReadAttributes() {
    this._readAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readAttributesInput() {
    return this._readAttributes
  }

  // refresh_token_validity - computed: false, optional: true, required: false
  private _refreshTokenValidity?: number | undefined; 
  public get refreshTokenValidity() {
    return this.getNumberAttribute('refresh_token_validity');
  }
  public set refreshTokenValidity(value: number | undefined) {
    this._refreshTokenValidity = value;
  }
  public resetRefreshTokenValidity() {
    this._refreshTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenValidityInput() {
    return this._refreshTokenValidity
  }

  // supported_identity_providers - computed: false, optional: true, required: false
  private _supportedIdentityProviders?: string[] | undefined; 
  public get supportedIdentityProviders() {
    return this.getListAttribute('supported_identity_providers');
  }
  public set supportedIdentityProviders(value: string[] | undefined) {
    this._supportedIdentityProviders = value;
  }
  public resetSupportedIdentityProviders() {
    this._supportedIdentityProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedIdentityProvidersInput() {
    return this._supportedIdentityProviders
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId
  }

  // write_attributes - computed: false, optional: true, required: false
  private _writeAttributes?: string[] | undefined; 
  public get writeAttributes() {
    return this.getListAttribute('write_attributes');
  }
  public set writeAttributes(value: string[] | undefined) {
    this._writeAttributes = value;
  }
  public resetWriteAttributes() {
    this._writeAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeAttributesInput() {
    return this._writeAttributes
  }

  // analytics_configuration - computed: false, optional: true, required: false
  private _analyticsConfiguration?: CognitoUserPoolClientAnalyticsConfiguration | undefined; 
  private __analyticsConfigurationOutput = new CognitoUserPoolClientAnalyticsConfigurationOutputReference(this as any, "analytics_configuration", true);
  public get analyticsConfiguration() {
    return this.__analyticsConfigurationOutput;
  }
  public putAnalyticsConfiguration(value: CognitoUserPoolClientAnalyticsConfiguration | undefined) {
    this._analyticsConfiguration = value;
  }
  public resetAnalyticsConfiguration() {
    this._analyticsConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsConfigurationInput() {
    return this._analyticsConfiguration
  }

  // token_validity_units - computed: false, optional: true, required: false
  private _tokenValidityUnits?: CognitoUserPoolClientTokenValidityUnits | undefined; 
  private __tokenValidityUnitsOutput = new CognitoUserPoolClientTokenValidityUnitsOutputReference(this as any, "token_validity_units", true);
  public get tokenValidityUnits() {
    return this.__tokenValidityUnitsOutput;
  }
  public putTokenValidityUnits(value: CognitoUserPoolClientTokenValidityUnits | undefined) {
    this._tokenValidityUnits = value;
  }
  public resetTokenValidityUnits() {
    this._tokenValidityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenValidityUnitsInput() {
    return this._tokenValidityUnits
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_validity: cdktf.numberToTerraform(this._accessTokenValidity),
      allowed_oauth_flows: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedOauthFlows),
      allowed_oauth_flows_user_pool_client: cdktf.booleanToTerraform(this._allowedOauthFlowsUserPoolClient),
      allowed_oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedOauthScopes),
      callback_urls: cdktf.listMapper(cdktf.stringToTerraform)(this._callbackUrls),
      default_redirect_uri: cdktf.stringToTerraform(this._defaultRedirectUri),
      enable_token_revocation: cdktf.booleanToTerraform(this._enableTokenRevocation),
      explicit_auth_flows: cdktf.listMapper(cdktf.stringToTerraform)(this._explicitAuthFlows),
      generate_secret: cdktf.booleanToTerraform(this._generateSecret),
      id_token_validity: cdktf.numberToTerraform(this._idTokenValidity),
      logout_urls: cdktf.listMapper(cdktf.stringToTerraform)(this._logoutUrls),
      name: cdktf.stringToTerraform(this._name),
      prevent_user_existence_errors: cdktf.stringToTerraform(this._preventUserExistenceErrors),
      read_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._readAttributes),
      refresh_token_validity: cdktf.numberToTerraform(this._refreshTokenValidity),
      supported_identity_providers: cdktf.listMapper(cdktf.stringToTerraform)(this._supportedIdentityProviders),
      user_pool_id: cdktf.stringToTerraform(this._userPoolId),
      write_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._writeAttributes),
      analytics_configuration: cognitoUserPoolClientAnalyticsConfigurationToTerraform(this._analyticsConfiguration),
      token_validity_units: cognitoUserPoolClientTokenValidityUnitsToTerraform(this._tokenValidityUnits),
    };
  }
}
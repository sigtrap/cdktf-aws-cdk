// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Glue
*/
export interface GlueDataCatalogEncryptionSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#catalog_id GlueDataCatalogEncryptionSettings#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * data_catalog_encryption_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#data_catalog_encryption_settings GlueDataCatalogEncryptionSettings#data_catalog_encryption_settings}
  */
  readonly dataCatalogEncryptionSettings: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings;
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#aws_kms_key_id GlueDataCatalogEncryptionSettings#aws_kms_key_id}
  */
  readonly awsKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#return_connection_password_encrypted GlueDataCatalogEncryptionSettings#return_connection_password_encrypted}
  */
  readonly returnConnectionPasswordEncrypted: boolean | cdktf.IResolvable;
}

export function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_kms_key_id: cdktf.stringToTerraform(struct!.awsKmsKeyId),
    return_connection_password_encrypted: cdktf.booleanToTerraform(struct!.returnConnectionPasswordEncrypted),
  }
}

export class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // aws_kms_key_id - computed: false, optional: true, required: false
  private _awsKmsKeyId?: string | undefined; 
  public get awsKmsKeyId() {
    return this.getStringAttribute('aws_kms_key_id');
  }
  public set awsKmsKeyId(value: string | undefined) {
    this._awsKmsKeyId = value;
  }
  public resetAwsKmsKeyId() {
    this._awsKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKmsKeyIdInput() {
    return this._awsKmsKeyId
  }

  // return_connection_password_encrypted - computed: false, optional: false, required: true
  private _returnConnectionPasswordEncrypted?: boolean | cdktf.IResolvable; 
  public get returnConnectionPasswordEncrypted() {
    return this.getBooleanAttribute('return_connection_password_encrypted') as any;
  }
  public set returnConnectionPasswordEncrypted(value: boolean | cdktf.IResolvable) {
    this._returnConnectionPasswordEncrypted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get returnConnectionPasswordEncryptedInput() {
    return this._returnConnectionPasswordEncrypted
  }
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#catalog_encryption_mode GlueDataCatalogEncryptionSettings#catalog_encryption_mode}
  */
  readonly catalogEncryptionMode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#sse_aws_kms_key_id GlueDataCatalogEncryptionSettings#sse_aws_kms_key_id}
  */
  readonly sseAwsKmsKeyId?: string;
}

export function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_encryption_mode: cdktf.stringToTerraform(struct!.catalogEncryptionMode),
    sse_aws_kms_key_id: cdktf.stringToTerraform(struct!.sseAwsKmsKeyId),
  }
}

export class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // catalog_encryption_mode - computed: false, optional: false, required: true
  private _catalogEncryptionMode?: string; 
  public get catalogEncryptionMode() {
    return this.getStringAttribute('catalog_encryption_mode');
  }
  public set catalogEncryptionMode(value: string) {
    this._catalogEncryptionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogEncryptionModeInput() {
    return this._catalogEncryptionMode
  }

  // sse_aws_kms_key_id - computed: false, optional: true, required: false
  private _sseAwsKmsKeyId?: string | undefined; 
  public get sseAwsKmsKeyId() {
    return this.getStringAttribute('sse_aws_kms_key_id');
  }
  public set sseAwsKmsKeyId(value: string | undefined) {
    this._sseAwsKmsKeyId = value;
  }
  public resetSseAwsKmsKeyId() {
    this._sseAwsKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseAwsKmsKeyIdInput() {
    return this._sseAwsKmsKeyId
  }
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings {
  /**
  * connection_password_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#connection_password_encryption GlueDataCatalogEncryptionSettings#connection_password_encryption}
  */
  readonly connectionPasswordEncryption: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption;
  /**
  * encryption_at_rest block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#encryption_at_rest GlueDataCatalogEncryptionSettings#encryption_at_rest}
  */
  readonly encryptionAtRest: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest;
}

export function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_password_encryption: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform(struct!.connectionPasswordEncryption),
    encryption_at_rest: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform(struct!.encryptionAtRest),
  }
}

export class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // connection_password_encryption - computed: false, optional: false, required: true
  private _connectionPasswordEncryption?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption; 
  private __connectionPasswordEncryptionOutput = new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference(this as any, "connection_password_encryption", true);
  public get connectionPasswordEncryption() {
    return this.__connectionPasswordEncryptionOutput;
  }
  public putConnectionPasswordEncryption(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption) {
    this._connectionPasswordEncryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPasswordEncryptionInput() {
    return this._connectionPasswordEncryption
  }

  // encryption_at_rest - computed: false, optional: false, required: true
  private _encryptionAtRest?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest; 
  private __encryptionAtRestOutput = new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference(this as any, "encryption_at_rest", true);
  public get encryptionAtRest() {
    return this.__encryptionAtRestOutput;
  }
  public putEncryptionAtRest(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest) {
    this._encryptionAtRest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtRestInput() {
    return this._encryptionAtRest
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings}
*/
export class GlueDataCatalogEncryptionSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_glue_data_catalog_encryption_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueDataCatalogEncryptionSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: GlueDataCatalogEncryptionSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_data_catalog_encryption_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._catalogId = config.catalogId;
    this._dataCatalogEncryptionSettings = config.dataCatalogEncryptionSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string | undefined; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string | undefined) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // data_catalog_encryption_settings - computed: false, optional: false, required: true
  private _dataCatalogEncryptionSettings?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings; 
  private __dataCatalogEncryptionSettingsOutput = new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference(this as any, "data_catalog_encryption_settings", true);
  public get dataCatalogEncryptionSettings() {
    return this.__dataCatalogEncryptionSettingsOutput;
  }
  public putDataCatalogEncryptionSettings(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings) {
    this._dataCatalogEncryptionSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCatalogEncryptionSettingsInput() {
    return this._dataCatalogEncryptionSettings
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      data_catalog_encryption_settings: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform(this._dataCatalogEncryptionSettings),
    };
  }
}
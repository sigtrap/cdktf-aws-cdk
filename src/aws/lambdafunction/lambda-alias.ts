// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Lambda
*/
export interface LambdaAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html#description LambdaAlias#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html#function_name LambdaAlias#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html#function_version LambdaAlias#function_version}
  */
  readonly functionVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html#name LambdaAlias#name}
  */
  readonly name: string;
  /**
  * routing_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html#routing_config LambdaAlias#routing_config}
  */
  readonly routingConfig?: LambdaAliasRoutingConfig;
}
export interface LambdaAliasRoutingConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html#additional_version_weights LambdaAlias#additional_version_weights}
  */
  readonly additionalVersionWeights?: { [key: string]: number } | cdktf.IResolvable;
}

export function lambdaAliasRoutingConfigToTerraform(struct?: LambdaAliasRoutingConfigOutputReference | LambdaAliasRoutingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_version_weights: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.additionalVersionWeights),
  }
}

export class LambdaAliasRoutingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // additional_version_weights - computed: false, optional: true, required: false
  private _additionalVersionWeights?: { [key: string]: number } | cdktf.IResolvable | undefined; 
  public get additionalVersionWeights() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_version_weights') as any;
  }
  public set additionalVersionWeights(value: { [key: string]: number } | cdktf.IResolvable | undefined) {
    this._additionalVersionWeights = value;
  }
  public resetAdditionalVersionWeights() {
    this._additionalVersionWeights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVersionWeightsInput() {
    return this._additionalVersionWeights
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html aws_lambda_alias}
*/
export class LambdaAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lambda_alias";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html aws_lambda_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaAliasConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_alias',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._functionName = config.functionName;
    this._functionVersion = config.functionVersion;
    this._name = config.name;
    this._routingConfig = config.routingConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName
  }

  // function_version - computed: false, optional: false, required: true
  private _functionVersion?: string; 
  public get functionVersion() {
    return this.getStringAttribute('function_version');
  }
  public set functionVersion(value: string) {
    this._functionVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionVersionInput() {
    return this._functionVersion
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invoke_arn - computed: true, optional: false, required: false
  public get invokeArn() {
    return this.getStringAttribute('invoke_arn');
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

  // routing_config - computed: false, optional: true, required: false
  private _routingConfig?: LambdaAliasRoutingConfig | undefined; 
  private __routingConfigOutput = new LambdaAliasRoutingConfigOutputReference(this as any, "routing_config", true);
  public get routingConfig() {
    return this.__routingConfigOutput;
  }
  public putRoutingConfig(value: LambdaAliasRoutingConfig | undefined) {
    this._routingConfig = value;
  }
  public resetRoutingConfig() {
    this._routingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingConfigInput() {
    return this._routingConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      function_name: cdktf.stringToTerraform(this._functionName),
      function_version: cdktf.stringToTerraform(this._functionVersion),
      name: cdktf.stringToTerraform(this._name),
      routing_config: lambdaAliasRoutingConfigToTerraform(this._routingConfig),
    };
  }
}
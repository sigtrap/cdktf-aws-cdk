// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Lex
*/
export interface LexSlotTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#create_version LexSlotType#create_version}
  */
  readonly createVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#description LexSlotType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#name LexSlotType#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#value_selection_strategy LexSlotType#value_selection_strategy}
  */
  readonly valueSelectionStrategy?: string;
  /**
  * enumeration_value block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#enumeration_value LexSlotType#enumeration_value}
  */
  readonly enumerationValue: LexSlotTypeEnumerationValue[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#timeouts LexSlotType#timeouts}
  */
  readonly timeouts?: LexSlotTypeTimeouts;
}
export interface LexSlotTypeEnumerationValue {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#synonyms LexSlotType#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#value LexSlotType#value}
  */
  readonly value: string;
}

export function lexSlotTypeEnumerationValueToTerraform(struct?: LexSlotTypeEnumerationValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    synonyms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.synonyms),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface LexSlotTypeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#create LexSlotType#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#delete LexSlotType#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#update LexSlotType#update}
  */
  readonly update?: string;
}

export function lexSlotTypeTimeoutsToTerraform(struct?: LexSlotTypeTimeoutsOutputReference | LexSlotTypeTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class LexSlotTypeTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html aws_lex_slot_type}
*/
export class LexSlotType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lex_slot_type";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html aws_lex_slot_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LexSlotTypeConfig
  */
  public constructor(scope: Construct, id: string, config: LexSlotTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lex_slot_type',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._createVersion = config.createVersion;
    this._description = config.description;
    this._name = config.name;
    this._valueSelectionStrategy = config.valueSelectionStrategy;
    this._enumerationValue = config.enumerationValue;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // create_version - computed: false, optional: true, required: false
  private _createVersion?: boolean | cdktf.IResolvable | undefined; 
  public get createVersion() {
    return this.getBooleanAttribute('create_version') as any;
  }
  public set createVersion(value: boolean | cdktf.IResolvable | undefined) {
    this._createVersion = value;
  }
  public resetCreateVersion() {
    this._createVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createVersionInput() {
    return this._createVersion
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
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

  // value_selection_strategy - computed: false, optional: true, required: false
  private _valueSelectionStrategy?: string | undefined; 
  public get valueSelectionStrategy() {
    return this.getStringAttribute('value_selection_strategy');
  }
  public set valueSelectionStrategy(value: string | undefined) {
    this._valueSelectionStrategy = value;
  }
  public resetValueSelectionStrategy() {
    this._valueSelectionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSelectionStrategyInput() {
    return this._valueSelectionStrategy
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // enumeration_value - computed: false, optional: false, required: true
  private _enumerationValue?: LexSlotTypeEnumerationValue[]; 
  public get enumerationValue() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('enumeration_value') as any;
  }
  public set enumerationValue(value: LexSlotTypeEnumerationValue[]) {
    this._enumerationValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enumerationValueInput() {
    return this._enumerationValue
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LexSlotTypeTimeouts | undefined; 
  private __timeoutsOutput = new LexSlotTypeTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LexSlotTypeTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_version: cdktf.booleanToTerraform(this._createVersion),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      value_selection_strategy: cdktf.stringToTerraform(this._valueSelectionStrategy),
      enumeration_value: cdktf.listMapper(lexSlotTypeEnumerationValueToTerraform)(this._enumerationValue),
      timeouts: lexSlotTypeTimeoutsToTerraform(this._timeouts),
    };
  }
}
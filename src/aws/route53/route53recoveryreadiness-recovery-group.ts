// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Route 53
*/
export interface Route53RecoveryreadinessRecoveryGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html#cells Route53RecoveryreadinessRecoveryGroup#cells}
  */
  readonly cells?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html#recovery_group_name Route53RecoveryreadinessRecoveryGroup#recovery_group_name}
  */
  readonly recoveryGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html#tags Route53RecoveryreadinessRecoveryGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html#tags_all Route53RecoveryreadinessRecoveryGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html#timeouts Route53RecoveryreadinessRecoveryGroup#timeouts}
  */
  readonly timeouts?: Route53RecoveryreadinessRecoveryGroupTimeouts;
}
export interface Route53RecoveryreadinessRecoveryGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html#delete Route53RecoveryreadinessRecoveryGroup#delete}
  */
  readonly delete?: string;
}

export function route53RecoveryreadinessRecoveryGroupTimeoutsToTerraform(struct?: Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference | Route53RecoveryreadinessRecoveryGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html aws_route53recoveryreadiness_recovery_group}
*/
export class Route53RecoveryreadinessRecoveryGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_route53recoveryreadiness_recovery_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html aws_route53recoveryreadiness_recovery_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53RecoveryreadinessRecoveryGroupConfig
  */
  public constructor(scope: Construct, id: string, config: Route53RecoveryreadinessRecoveryGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53recoveryreadiness_recovery_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cells = config.cells;
    this._recoveryGroupName = config.recoveryGroupName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cells - computed: false, optional: true, required: false
  private _cells?: string[] | undefined; 
  public get cells() {
    return this.getListAttribute('cells');
  }
  public set cells(value: string[] | undefined) {
    this._cells = value;
  }
  public resetCells() {
    this._cells = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellsInput() {
    return this._cells
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // recovery_group_name - computed: false, optional: false, required: true
  private _recoveryGroupName?: string; 
  public get recoveryGroupName() {
    return this.getStringAttribute('recovery_group_name');
  }
  public set recoveryGroupName(value: string) {
    this._recoveryGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryGroupNameInput() {
    return this._recoveryGroupName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: Route53RecoveryreadinessRecoveryGroupTimeouts | undefined; 
  private __timeoutsOutput = new Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: Route53RecoveryreadinessRecoveryGroupTimeouts | undefined) {
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
      cells: cdktf.listMapper(cdktf.stringToTerraform)(this._cells),
      recovery_group_name: cdktf.stringToTerraform(this._recoveryGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      timeouts: route53RecoveryreadinessRecoveryGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
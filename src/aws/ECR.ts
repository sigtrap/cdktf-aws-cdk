// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2 Container Registry
*/
export namespace ECR {
  export interface EcrLifecyclePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_lifecycle_policy.html#policy EcrLifecyclePolicy#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_lifecycle_policy.html#repository EcrLifecyclePolicy#repository}
    */
    readonly repository: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_lifecycle_policy.html aws_ecr_lifecycle_policy}
  */
  export class EcrLifecyclePolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecr_lifecycle_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecr_lifecycle_policy.html aws_ecr_lifecycle_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrLifecyclePolicyConfig
    */
    public constructor(scope: Construct, id: string, config: EcrLifecyclePolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecr_lifecycle_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._policy = config.policy;
      this._repository = config.repository;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: false, required: true
    private _policy: string;
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // registry_id - computed: true, optional: false, required: false
    public get registryId() {
      return this.getStringAttribute('registry_id');
    }

    // repository - computed: false, optional: false, required: true
    private _repository: string;
    public get repository() {
      return this.getStringAttribute('repository');
    }
    public set repository(value: string) {
      this._repository = value;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryInput() {
      return this._repository
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        policy: cdktf.stringToTerraform(this._policy),
        repository: cdktf.stringToTerraform(this._repository),
      };
    }
  }
  export interface EcrRegistryPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_policy.html#policy EcrRegistryPolicy#policy}
    */
    readonly policy: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_policy.html aws_ecr_registry_policy}
  */
  export class EcrRegistryPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecr_registry_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_policy.html aws_ecr_registry_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrRegistryPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: EcrRegistryPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecr_registry_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._policy = config.policy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: false, required: true
    private _policy: string;
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // registry_id - computed: true, optional: false, required: false
    public get registryId() {
      return this.getStringAttribute('registry_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        policy: cdktf.stringToTerraform(this._policy),
      };
    }
  }
  export interface EcrReplicationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * replication_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#replication_configuration EcrReplicationConfiguration#replication_configuration}
    */
    readonly replicationConfiguration?: EcrReplicationConfigurationReplicationConfiguration[];
  }
  export interface EcrReplicationConfigurationReplicationConfigurationRuleDestination {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#region EcrReplicationConfiguration#region}
    */
    readonly region: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#registry_id EcrReplicationConfiguration#registry_id}
    */
    readonly registryId: string;
  }

  function ecrReplicationConfigurationReplicationConfigurationRuleDestinationToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRuleDestination): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      region: cdktf.stringToTerraform(struct!.region),
      registry_id: cdktf.stringToTerraform(struct!.registryId),
    }
  }

  export interface EcrReplicationConfigurationReplicationConfigurationRule {
    /**
    * destination block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#destination EcrReplicationConfiguration#destination}
    */
    readonly destination: EcrReplicationConfigurationReplicationConfigurationRuleDestination[];
  }

  function ecrReplicationConfigurationReplicationConfigurationRuleToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      destination: cdktf.listMapper(ecrReplicationConfigurationReplicationConfigurationRuleDestinationToTerraform)(struct!.destination),
    }
  }

  export interface EcrReplicationConfigurationReplicationConfiguration {
    /**
    * rule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#rule EcrReplicationConfiguration#rule}
    */
    readonly rule: EcrReplicationConfigurationReplicationConfigurationRule[];
  }

  function ecrReplicationConfigurationReplicationConfigurationToTerraform(struct?: EcrReplicationConfigurationReplicationConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      rule: cdktf.listMapper(ecrReplicationConfigurationReplicationConfigurationRuleToTerraform)(struct!.rule),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html aws_ecr_replication_configuration}
  */
  export class EcrReplicationConfiguration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecr_replication_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html aws_ecr_replication_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrReplicationConfigurationConfig = {}
    */
    public constructor(scope: Construct, id: string, config: EcrReplicationConfigurationConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ecr_replication_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._replicationConfiguration = config.replicationConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // registry_id - computed: true, optional: false, required: false
    public get registryId() {
      return this.getStringAttribute('registry_id');
    }

    // replication_configuration - computed: false, optional: true, required: false
    private _replicationConfiguration?: EcrReplicationConfigurationReplicationConfiguration[];
    public get replicationConfiguration() {
      return this.interpolationForAttribute('replication_configuration') as any;
    }
    public set replicationConfiguration(value: EcrReplicationConfigurationReplicationConfiguration[] ) {
      this._replicationConfiguration = value;
    }
    public resetReplicationConfiguration() {
      this._replicationConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationConfigurationInput() {
      return this._replicationConfiguration
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        replication_configuration: cdktf.listMapper(ecrReplicationConfigurationReplicationConfigurationToTerraform)(this._replicationConfiguration),
      };
    }
  }
  export interface EcrRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#image_tag_mutability EcrRepository#image_tag_mutability}
    */
    readonly imageTagMutability?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#name EcrRepository#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#tags EcrRepository#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#tags_all EcrRepository#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * encryption_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#encryption_configuration EcrRepository#encryption_configuration}
    */
    readonly encryptionConfiguration?: EcrRepositoryEncryptionConfiguration[];
    /**
    * image_scanning_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#image_scanning_configuration EcrRepository#image_scanning_configuration}
    */
    readonly imageScanningConfiguration?: EcrRepositoryImageScanningConfiguration[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#timeouts EcrRepository#timeouts}
    */
    readonly timeouts?: EcrRepositoryTimeouts;
  }
  export interface EcrRepositoryEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#encryption_type EcrRepository#encryption_type}
    */
    readonly encryptionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#kms_key EcrRepository#kms_key}
    */
    readonly kmsKey?: string;
  }

  function ecrRepositoryEncryptionConfigurationToTerraform(struct?: EcrRepositoryEncryptionConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
      kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    }
  }

  export interface EcrRepositoryImageScanningConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#scan_on_push EcrRepository#scan_on_push}
    */
    readonly scanOnPush: boolean | cdktf.IResolvable;
  }

  function ecrRepositoryImageScanningConfigurationToTerraform(struct?: EcrRepositoryImageScanningConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      scan_on_push: cdktf.booleanToTerraform(struct!.scanOnPush),
    }
  }

  export interface EcrRepositoryTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#delete EcrRepository#delete}
    */
    readonly delete?: string;
  }

  function ecrRepositoryTimeoutsToTerraform(struct?: EcrRepositoryTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html aws_ecr_repository}
  */
  export class EcrRepository extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecr_repository";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html aws_ecr_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrRepositoryConfig
    */
    public constructor(scope: Construct, id: string, config: EcrRepositoryConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecr_repository',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._imageTagMutability = config.imageTagMutability;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._encryptionConfiguration = config.encryptionConfiguration;
      this._imageScanningConfiguration = config.imageScanningConfiguration;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_tag_mutability - computed: false, optional: true, required: false
    private _imageTagMutability?: string;
    public get imageTagMutability() {
      return this.getStringAttribute('image_tag_mutability');
    }
    public set imageTagMutability(value: string ) {
      this._imageTagMutability = value;
    }
    public resetImageTagMutability() {
      this._imageTagMutability = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageTagMutabilityInput() {
      return this._imageTagMutability
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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

    // registry_id - computed: true, optional: false, required: false
    public get registryId() {
      return this.getStringAttribute('registry_id');
    }

    // repository_url - computed: true, optional: false, required: false
    public get repositoryUrl() {
      return this.getStringAttribute('repository_url');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // encryption_configuration - computed: false, optional: true, required: false
    private _encryptionConfiguration?: EcrRepositoryEncryptionConfiguration[];
    public get encryptionConfiguration() {
      return this.interpolationForAttribute('encryption_configuration') as any;
    }
    public set encryptionConfiguration(value: EcrRepositoryEncryptionConfiguration[] ) {
      this._encryptionConfiguration = value;
    }
    public resetEncryptionConfiguration() {
      this._encryptionConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
      return this._encryptionConfiguration
    }

    // image_scanning_configuration - computed: false, optional: true, required: false
    private _imageScanningConfiguration?: EcrRepositoryImageScanningConfiguration[];
    public get imageScanningConfiguration() {
      return this.interpolationForAttribute('image_scanning_configuration') as any;
    }
    public set imageScanningConfiguration(value: EcrRepositoryImageScanningConfiguration[] ) {
      this._imageScanningConfiguration = value;
    }
    public resetImageScanningConfiguration() {
      this._imageScanningConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageScanningConfigurationInput() {
      return this._imageScanningConfiguration
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: EcrRepositoryTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: EcrRepositoryTimeouts ) {
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
        image_tag_mutability: cdktf.stringToTerraform(this._imageTagMutability),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        encryption_configuration: cdktf.listMapper(ecrRepositoryEncryptionConfigurationToTerraform)(this._encryptionConfiguration),
        image_scanning_configuration: cdktf.listMapper(ecrRepositoryImageScanningConfigurationToTerraform)(this._imageScanningConfiguration),
        timeouts: ecrRepositoryTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface EcrRepositoryPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository_policy.html#policy EcrRepositoryPolicy#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository_policy.html#repository EcrRepositoryPolicy#repository}
    */
    readonly repository: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository_policy.html aws_ecr_repository_policy}
  */
  export class EcrRepositoryPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecr_repository_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository_policy.html aws_ecr_repository_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrRepositoryPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: EcrRepositoryPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecr_repository_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._policy = config.policy;
      this._repository = config.repository;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: false, required: true
    private _policy: string;
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // registry_id - computed: true, optional: false, required: false
    public get registryId() {
      return this.getStringAttribute('registry_id');
    }

    // repository - computed: false, optional: false, required: true
    private _repository: string;
    public get repository() {
      return this.getStringAttribute('repository');
    }
    public set repository(value: string) {
      this._repository = value;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryInput() {
      return this._repository
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        policy: cdktf.stringToTerraform(this._policy),
        repository: cdktf.stringToTerraform(this._repository),
      };
    }
  }
  export interface EcrpublicRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#force_destroy EcrpublicRepository#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#repository_name EcrpublicRepository#repository_name}
    */
    readonly repositoryName: string;
    /**
    * catalog_data block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#catalog_data EcrpublicRepository#catalog_data}
    */
    readonly catalogData?: EcrpublicRepositoryCatalogData[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#timeouts EcrpublicRepository#timeouts}
    */
    readonly timeouts?: EcrpublicRepositoryTimeouts;
  }
  export interface EcrpublicRepositoryCatalogData {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#about_text EcrpublicRepository#about_text}
    */
    readonly aboutText?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#architectures EcrpublicRepository#architectures}
    */
    readonly architectures?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#description EcrpublicRepository#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#logo_image_blob EcrpublicRepository#logo_image_blob}
    */
    readonly logoImageBlob?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#operating_systems EcrpublicRepository#operating_systems}
    */
    readonly operatingSystems?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#usage_text EcrpublicRepository#usage_text}
    */
    readonly usageText?: string;
  }

  function ecrpublicRepositoryCatalogDataToTerraform(struct?: EcrpublicRepositoryCatalogData): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      about_text: cdktf.stringToTerraform(struct!.aboutText),
      architectures: cdktf.listMapper(cdktf.stringToTerraform)(struct!.architectures),
      description: cdktf.stringToTerraform(struct!.description),
      logo_image_blob: cdktf.stringToTerraform(struct!.logoImageBlob),
      operating_systems: cdktf.listMapper(cdktf.stringToTerraform)(struct!.operatingSystems),
      usage_text: cdktf.stringToTerraform(struct!.usageText),
    }
  }

  export interface EcrpublicRepositoryTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#delete EcrpublicRepository#delete}
    */
    readonly delete?: string;
  }

  function ecrpublicRepositoryTimeoutsToTerraform(struct?: EcrpublicRepositoryTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html aws_ecrpublic_repository}
  */
  export class EcrpublicRepository extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecrpublic_repository";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html aws_ecrpublic_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrpublicRepositoryConfig
    */
    public constructor(scope: Construct, id: string, config: EcrpublicRepositoryConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecrpublic_repository',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._forceDestroy = config.forceDestroy;
      this._repositoryName = config.repositoryName;
      this._catalogData = config.catalogData;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // force_destroy - computed: false, optional: true, required: false
    private _forceDestroy?: boolean | cdktf.IResolvable;
    public get forceDestroy() {
      return this.getBooleanAttribute('force_destroy');
    }
    public set forceDestroy(value: boolean | cdktf.IResolvable ) {
      this._forceDestroy = value;
    }
    public resetForceDestroy() {
      this._forceDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceDestroyInput() {
      return this._forceDestroy
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // registry_id - computed: true, optional: false, required: false
    public get registryId() {
      return this.getStringAttribute('registry_id');
    }

    // repository_name - computed: false, optional: false, required: true
    private _repositoryName: string;
    public get repositoryName() {
      return this.getStringAttribute('repository_name');
    }
    public set repositoryName(value: string) {
      this._repositoryName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryNameInput() {
      return this._repositoryName
    }

    // repository_uri - computed: true, optional: false, required: false
    public get repositoryUri() {
      return this.getStringAttribute('repository_uri');
    }

    // catalog_data - computed: false, optional: true, required: false
    private _catalogData?: EcrpublicRepositoryCatalogData[];
    public get catalogData() {
      return this.interpolationForAttribute('catalog_data') as any;
    }
    public set catalogData(value: EcrpublicRepositoryCatalogData[] ) {
      this._catalogData = value;
    }
    public resetCatalogData() {
      this._catalogData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogDataInput() {
      return this._catalogData
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: EcrpublicRepositoryTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: EcrpublicRepositoryTimeouts ) {
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
        force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
        repository_name: cdktf.stringToTerraform(this._repositoryName),
        catalog_data: cdktf.listMapper(ecrpublicRepositoryCatalogDataToTerraform)(this._catalogData),
        timeouts: ecrpublicRepositoryTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DataAwsEcrAuthorizationTokenConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token.html#registry_id DataAwsEcrAuthorizationToken#registry_id}
    */
    readonly registryId?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token.html aws_ecr_authorization_token}
  */
  export class DataAwsEcrAuthorizationToken extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecr_authorization_token";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token.html aws_ecr_authorization_token} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcrAuthorizationTokenConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEcrAuthorizationTokenConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ecr_authorization_token',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._registryId = config.registryId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // authorization_token - computed: true, optional: false, required: false
    public get authorizationToken() {
      return this.getStringAttribute('authorization_token');
    }

    // expires_at - computed: true, optional: false, required: false
    public get expiresAt() {
      return this.getStringAttribute('expires_at');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // password - computed: true, optional: false, required: false
    public get password() {
      return this.getStringAttribute('password');
    }

    // proxy_endpoint - computed: true, optional: false, required: false
    public get proxyEndpoint() {
      return this.getStringAttribute('proxy_endpoint');
    }

    // registry_id - computed: false, optional: true, required: false
    private _registryId?: string;
    public get registryId() {
      return this.getStringAttribute('registry_id');
    }
    public set registryId(value: string ) {
      this._registryId = value;
    }
    public resetRegistryId() {
      this._registryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get registryIdInput() {
      return this._registryId
    }

    // user_name - computed: true, optional: false, required: false
    public get userName() {
      return this.getStringAttribute('user_name');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        registry_id: cdktf.stringToTerraform(this._registryId),
      };
    }
  }
  export interface DataAwsEcrImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html#image_digest DataAwsEcrImage#image_digest}
    */
    readonly imageDigest?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html#image_tag DataAwsEcrImage#image_tag}
    */
    readonly imageTag?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html#registry_id DataAwsEcrImage#registry_id}
    */
    readonly registryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html#repository_name DataAwsEcrImage#repository_name}
    */
    readonly repositoryName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html aws_ecr_image}
  */
  export class DataAwsEcrImage extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecr_image";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html aws_ecr_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcrImageConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEcrImageConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecr_image',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._imageDigest = config.imageDigest;
      this._imageTag = config.imageTag;
      this._registryId = config.registryId;
      this._repositoryName = config.repositoryName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_digest - computed: true, optional: true, required: false
    private _imageDigest?: string;
    public get imageDigest() {
      return this.getStringAttribute('image_digest');
    }
    public set imageDigest(value: string) {
      this._imageDigest = value;
    }
    public resetImageDigest() {
      this._imageDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageDigestInput() {
      return this._imageDigest
    }

    // image_pushed_at - computed: true, optional: false, required: false
    public get imagePushedAt() {
      return this.getNumberAttribute('image_pushed_at');
    }

    // image_size_in_bytes - computed: true, optional: false, required: false
    public get imageSizeInBytes() {
      return this.getNumberAttribute('image_size_in_bytes');
    }

    // image_tag - computed: false, optional: true, required: false
    private _imageTag?: string;
    public get imageTag() {
      return this.getStringAttribute('image_tag');
    }
    public set imageTag(value: string ) {
      this._imageTag = value;
    }
    public resetImageTag() {
      this._imageTag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageTagInput() {
      return this._imageTag
    }

    // image_tags - computed: true, optional: false, required: false
    public get imageTags() {
      return this.getListAttribute('image_tags');
    }

    // registry_id - computed: true, optional: true, required: false
    private _registryId?: string;
    public get registryId() {
      return this.getStringAttribute('registry_id');
    }
    public set registryId(value: string) {
      this._registryId = value;
    }
    public resetRegistryId() {
      this._registryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get registryIdInput() {
      return this._registryId
    }

    // repository_name - computed: false, optional: false, required: true
    private _repositoryName: string;
    public get repositoryName() {
      return this.getStringAttribute('repository_name');
    }
    public set repositoryName(value: string) {
      this._repositoryName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryNameInput() {
      return this._repositoryName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        image_digest: cdktf.stringToTerraform(this._imageDigest),
        image_tag: cdktf.stringToTerraform(this._imageTag),
        registry_id: cdktf.stringToTerraform(this._registryId),
        repository_name: cdktf.stringToTerraform(this._repositoryName),
      };
    }
  }
  export interface DataAwsEcrRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_repository.html#name DataAwsEcrRepository#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_repository.html#registry_id DataAwsEcrRepository#registry_id}
    */
    readonly registryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_repository.html#tags DataAwsEcrRepository#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsEcrRepositoryEncryptionConfiguration extends cdktf.ComplexComputedList {

    // encryption_type - computed: true, optional: false, required: false
    public get encryptionType() {
      return this.getStringAttribute('encryption_type');
    }

    // kms_key - computed: true, optional: false, required: false
    public get kmsKey() {
      return this.getStringAttribute('kms_key');
    }
  }
  export class DataAwsEcrRepositoryImageScanningConfiguration extends cdktf.ComplexComputedList {

    // scan_on_push - computed: true, optional: false, required: false
    public get scanOnPush() {
      return this.getBooleanAttribute('scan_on_push');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecr_repository.html aws_ecr_repository}
  */
  export class DataAwsEcrRepository extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecr_repository";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecr_repository.html aws_ecr_repository} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcrRepositoryConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEcrRepositoryConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecr_repository',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._registryId = config.registryId;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // encryption_configuration - computed: true, optional: false, required: false
    public encryptionConfiguration(index: string) {
      return new DataAwsEcrRepositoryEncryptionConfiguration(this, 'encryption_configuration', index);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_scanning_configuration - computed: true, optional: false, required: false
    public imageScanningConfiguration(index: string) {
      return new DataAwsEcrRepositoryImageScanningConfiguration(this, 'image_scanning_configuration', index);
    }

    // image_tag_mutability - computed: true, optional: false, required: false
    public get imageTagMutability() {
      return this.getStringAttribute('image_tag_mutability');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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

    // registry_id - computed: true, optional: true, required: false
    private _registryId?: string;
    public get registryId() {
      return this.getStringAttribute('registry_id');
    }
    public set registryId(value: string) {
      this._registryId = value;
    }
    public resetRegistryId() {
      this._registryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get registryIdInput() {
      return this._registryId
    }

    // repository_url - computed: true, optional: false, required: false
    public get repositoryUrl() {
      return this.getStringAttribute('repository_url');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable
    public get tags(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        registry_id: cdktf.stringToTerraform(this._registryId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
}
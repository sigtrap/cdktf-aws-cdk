# `opsworksStaticWebLayer` Submodule <a name="`opsworksStaticWebLayer` Submodule" id="@cdktf/aws-cdk.opsworksStaticWebLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksStaticWebLayer <a name="OpsworksStaticWebLayer" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer aws_opsworks_static_web_layer}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.Initializer"></a>

```typescript
import { opsworksStaticWebLayer } from '@cdktf/aws-cdk'

new opsworksStaticWebLayer.OpsworksStaticWebLayer(scope: Construct, id: string, config: OpsworksStaticWebLayerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig">OpsworksStaticWebLayerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig">OpsworksStaticWebLayerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.putCloudwatchConfiguration">putCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.putEbsVolume">putEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetAutoAssignElasticIps">resetAutoAssignElasticIps</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetAutoAssignPublicIps">resetAutoAssignPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetAutoHealing">resetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCloudwatchConfiguration">resetCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomConfigureRecipes">resetCustomConfigureRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomDeployRecipes">resetCustomDeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomInstanceProfileArn">resetCustomInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomJson">resetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomSecurityGroupIds">resetCustomSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomSetupRecipes">resetCustomSetupRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomShutdownRecipes">resetCustomShutdownRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomUndeployRecipes">resetCustomUndeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetDrainElbOnShutdown">resetDrainElbOnShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetEbsVolume">resetEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetElasticLoadBalancer">resetElasticLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetInstallUpdatesOnBoot">resetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetInstanceShutdownTimeout">resetInstanceShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetSystemPackages">resetSystemPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetUseEbsOptimizedInstances">resetUseEbsOptimizedInstances</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudwatchConfiguration` <a name="putCloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.putCloudwatchConfiguration"></a>

```typescript
public putCloudwatchConfiguration(value: OpsworksStaticWebLayerCloudwatchConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration">OpsworksStaticWebLayerCloudwatchConfiguration</a>

---

##### `putEbsVolume` <a name="putEbsVolume" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.putEbsVolume"></a>

```typescript
public putEbsVolume(value: IResolvable | OpsworksStaticWebLayerEbsVolume[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.putEbsVolume.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume">OpsworksStaticWebLayerEbsVolume</a>[]

---

##### `resetAutoAssignElasticIps` <a name="resetAutoAssignElasticIps" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetAutoAssignElasticIps"></a>

```typescript
public resetAutoAssignElasticIps(): void
```

##### `resetAutoAssignPublicIps` <a name="resetAutoAssignPublicIps" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetAutoAssignPublicIps"></a>

```typescript
public resetAutoAssignPublicIps(): void
```

##### `resetAutoHealing` <a name="resetAutoHealing" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetAutoHealing"></a>

```typescript
public resetAutoHealing(): void
```

##### `resetCloudwatchConfiguration` <a name="resetCloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCloudwatchConfiguration"></a>

```typescript
public resetCloudwatchConfiguration(): void
```

##### `resetCustomConfigureRecipes` <a name="resetCustomConfigureRecipes" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomConfigureRecipes"></a>

```typescript
public resetCustomConfigureRecipes(): void
```

##### `resetCustomDeployRecipes` <a name="resetCustomDeployRecipes" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomDeployRecipes"></a>

```typescript
public resetCustomDeployRecipes(): void
```

##### `resetCustomInstanceProfileArn` <a name="resetCustomInstanceProfileArn" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomInstanceProfileArn"></a>

```typescript
public resetCustomInstanceProfileArn(): void
```

##### `resetCustomJson` <a name="resetCustomJson" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomJson"></a>

```typescript
public resetCustomJson(): void
```

##### `resetCustomSecurityGroupIds` <a name="resetCustomSecurityGroupIds" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomSecurityGroupIds"></a>

```typescript
public resetCustomSecurityGroupIds(): void
```

##### `resetCustomSetupRecipes` <a name="resetCustomSetupRecipes" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomSetupRecipes"></a>

```typescript
public resetCustomSetupRecipes(): void
```

##### `resetCustomShutdownRecipes` <a name="resetCustomShutdownRecipes" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomShutdownRecipes"></a>

```typescript
public resetCustomShutdownRecipes(): void
```

##### `resetCustomUndeployRecipes` <a name="resetCustomUndeployRecipes" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomUndeployRecipes"></a>

```typescript
public resetCustomUndeployRecipes(): void
```

##### `resetDrainElbOnShutdown` <a name="resetDrainElbOnShutdown" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetDrainElbOnShutdown"></a>

```typescript
public resetDrainElbOnShutdown(): void
```

##### `resetEbsVolume` <a name="resetEbsVolume" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetEbsVolume"></a>

```typescript
public resetEbsVolume(): void
```

##### `resetElasticLoadBalancer` <a name="resetElasticLoadBalancer" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetElasticLoadBalancer"></a>

```typescript
public resetElasticLoadBalancer(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstallUpdatesOnBoot` <a name="resetInstallUpdatesOnBoot" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetInstallUpdatesOnBoot"></a>

```typescript
public resetInstallUpdatesOnBoot(): void
```

##### `resetInstanceShutdownTimeout` <a name="resetInstanceShutdownTimeout" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetInstanceShutdownTimeout"></a>

```typescript
public resetInstanceShutdownTimeout(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSystemPackages` <a name="resetSystemPackages" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetSystemPackages"></a>

```typescript
public resetSystemPackages(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetUseEbsOptimizedInstances` <a name="resetUseEbsOptimizedInstances" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetUseEbsOptimizedInstances"></a>

```typescript
public resetUseEbsOptimizedInstances(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpsworksStaticWebLayer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.isConstruct"></a>

```typescript
import { opsworksStaticWebLayer } from '@cdktf/aws-cdk'

opsworksStaticWebLayer.OpsworksStaticWebLayer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.isTerraformElement"></a>

```typescript
import { opsworksStaticWebLayer } from '@cdktf/aws-cdk'

opsworksStaticWebLayer.OpsworksStaticWebLayer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.isTerraformResource"></a>

```typescript
import { opsworksStaticWebLayer } from '@cdktf/aws-cdk'

opsworksStaticWebLayer.OpsworksStaticWebLayer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.generateConfigForImport"></a>

```typescript
import { opsworksStaticWebLayer } from '@cdktf/aws-cdk'

opsworksStaticWebLayer.OpsworksStaticWebLayer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OpsworksStaticWebLayer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpsworksStaticWebLayer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpsworksStaticWebLayer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpsworksStaticWebLayer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference">OpsworksStaticWebLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.ebsVolume">ebsVolume</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList">OpsworksStaticWebLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoAssignElasticIpsInput">autoAssignElasticIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoAssignPublicIpsInput">autoAssignPublicIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoHealingInput">autoHealingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.cloudwatchConfigurationInput">cloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration">OpsworksStaticWebLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customConfigureRecipesInput">customConfigureRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customDeployRecipesInput">customDeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customInstanceProfileArnInput">customInstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customJsonInput">customJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customSecurityGroupIdsInput">customSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customSetupRecipesInput">customSetupRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customShutdownRecipesInput">customShutdownRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customUndeployRecipesInput">customUndeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.drainElbOnShutdownInput">drainElbOnShutdownInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.ebsVolumeInput">ebsVolumeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume">OpsworksStaticWebLayerEbsVolume</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.elasticLoadBalancerInput">elasticLoadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.installUpdatesOnBootInput">installUpdatesOnBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.instanceShutdownTimeoutInput">instanceShutdownTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.systemPackagesInput">systemPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.useEbsOptimizedInstancesInput">useEbsOptimizedInstancesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customDeployRecipes">customDeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customJson">customJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customSetupRecipes">customSetupRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.systemPackages">systemPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cloudwatchConfiguration`<sup>Required</sup> <a name="cloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.cloudwatchConfiguration"></a>

```typescript
public readonly cloudwatchConfiguration: OpsworksStaticWebLayerCloudwatchConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference">OpsworksStaticWebLayerCloudwatchConfigurationOutputReference</a>

---

##### `ebsVolume`<sup>Required</sup> <a name="ebsVolume" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.ebsVolume"></a>

```typescript
public readonly ebsVolume: OpsworksStaticWebLayerEbsVolumeList;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList">OpsworksStaticWebLayerEbsVolumeList</a>

---

##### `autoAssignElasticIpsInput`<sup>Optional</sup> <a name="autoAssignElasticIpsInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoAssignElasticIpsInput"></a>

```typescript
public readonly autoAssignElasticIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignPublicIpsInput`<sup>Optional</sup> <a name="autoAssignPublicIpsInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoAssignPublicIpsInput"></a>

```typescript
public readonly autoAssignPublicIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoHealingInput`<sup>Optional</sup> <a name="autoHealingInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoHealingInput"></a>

```typescript
public readonly autoHealingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudwatchConfigurationInput`<sup>Optional</sup> <a name="cloudwatchConfigurationInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.cloudwatchConfigurationInput"></a>

```typescript
public readonly cloudwatchConfigurationInput: OpsworksStaticWebLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration">OpsworksStaticWebLayerCloudwatchConfiguration</a>

---

##### `customConfigureRecipesInput`<sup>Optional</sup> <a name="customConfigureRecipesInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customConfigureRecipesInput"></a>

```typescript
public readonly customConfigureRecipesInput: string[];
```

- *Type:* string[]

---

##### `customDeployRecipesInput`<sup>Optional</sup> <a name="customDeployRecipesInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customDeployRecipesInput"></a>

```typescript
public readonly customDeployRecipesInput: string[];
```

- *Type:* string[]

---

##### `customInstanceProfileArnInput`<sup>Optional</sup> <a name="customInstanceProfileArnInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customInstanceProfileArnInput"></a>

```typescript
public readonly customInstanceProfileArnInput: string;
```

- *Type:* string

---

##### `customJsonInput`<sup>Optional</sup> <a name="customJsonInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customJsonInput"></a>

```typescript
public readonly customJsonInput: string;
```

- *Type:* string

---

##### `customSecurityGroupIdsInput`<sup>Optional</sup> <a name="customSecurityGroupIdsInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customSecurityGroupIdsInput"></a>

```typescript
public readonly customSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `customSetupRecipesInput`<sup>Optional</sup> <a name="customSetupRecipesInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customSetupRecipesInput"></a>

```typescript
public readonly customSetupRecipesInput: string[];
```

- *Type:* string[]

---

##### `customShutdownRecipesInput`<sup>Optional</sup> <a name="customShutdownRecipesInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customShutdownRecipesInput"></a>

```typescript
public readonly customShutdownRecipesInput: string[];
```

- *Type:* string[]

---

##### `customUndeployRecipesInput`<sup>Optional</sup> <a name="customUndeployRecipesInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customUndeployRecipesInput"></a>

```typescript
public readonly customUndeployRecipesInput: string[];
```

- *Type:* string[]

---

##### `drainElbOnShutdownInput`<sup>Optional</sup> <a name="drainElbOnShutdownInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.drainElbOnShutdownInput"></a>

```typescript
public readonly drainElbOnShutdownInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ebsVolumeInput`<sup>Optional</sup> <a name="ebsVolumeInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.ebsVolumeInput"></a>

```typescript
public readonly ebsVolumeInput: IResolvable | OpsworksStaticWebLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume">OpsworksStaticWebLayerEbsVolume</a>[]

---

##### `elasticLoadBalancerInput`<sup>Optional</sup> <a name="elasticLoadBalancerInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.elasticLoadBalancerInput"></a>

```typescript
public readonly elasticLoadBalancerInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `installUpdatesOnBootInput`<sup>Optional</sup> <a name="installUpdatesOnBootInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.installUpdatesOnBootInput"></a>

```typescript
public readonly installUpdatesOnBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceShutdownTimeoutInput`<sup>Optional</sup> <a name="instanceShutdownTimeoutInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.instanceShutdownTimeoutInput"></a>

```typescript
public readonly instanceShutdownTimeoutInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `systemPackagesInput`<sup>Optional</sup> <a name="systemPackagesInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.systemPackagesInput"></a>

```typescript
public readonly systemPackagesInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="useEbsOptimizedInstancesInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.useEbsOptimizedInstancesInput"></a>

```typescript
public readonly useEbsOptimizedInstancesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignElasticIps`<sup>Required</sup> <a name="autoAssignElasticIps" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoAssignElasticIps"></a>

```typescript
public readonly autoAssignElasticIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignPublicIps`<sup>Required</sup> <a name="autoAssignPublicIps" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoAssignPublicIps"></a>

```typescript
public readonly autoAssignPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoHealing`<sup>Required</sup> <a name="autoHealing" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customConfigureRecipes`<sup>Required</sup> <a name="customConfigureRecipes" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customConfigureRecipes"></a>

```typescript
public readonly customConfigureRecipes: string[];
```

- *Type:* string[]

---

##### `customDeployRecipes`<sup>Required</sup> <a name="customDeployRecipes" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customDeployRecipes"></a>

```typescript
public readonly customDeployRecipes: string[];
```

- *Type:* string[]

---

##### `customInstanceProfileArn`<sup>Required</sup> <a name="customInstanceProfileArn" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customInstanceProfileArn"></a>

```typescript
public readonly customInstanceProfileArn: string;
```

- *Type:* string

---

##### `customJson`<sup>Required</sup> <a name="customJson" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

---

##### `customSecurityGroupIds`<sup>Required</sup> <a name="customSecurityGroupIds" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customSecurityGroupIds"></a>

```typescript
public readonly customSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `customSetupRecipes`<sup>Required</sup> <a name="customSetupRecipes" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customSetupRecipes"></a>

```typescript
public readonly customSetupRecipes: string[];
```

- *Type:* string[]

---

##### `customShutdownRecipes`<sup>Required</sup> <a name="customShutdownRecipes" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customShutdownRecipes"></a>

```typescript
public readonly customShutdownRecipes: string[];
```

- *Type:* string[]

---

##### `customUndeployRecipes`<sup>Required</sup> <a name="customUndeployRecipes" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customUndeployRecipes"></a>

```typescript
public readonly customUndeployRecipes: string[];
```

- *Type:* string[]

---

##### `drainElbOnShutdown`<sup>Required</sup> <a name="drainElbOnShutdown" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.drainElbOnShutdown"></a>

```typescript
public readonly drainElbOnShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `elasticLoadBalancer`<sup>Required</sup> <a name="elasticLoadBalancer" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.elasticLoadBalancer"></a>

```typescript
public readonly elasticLoadBalancer: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `installUpdatesOnBoot`<sup>Required</sup> <a name="installUpdatesOnBoot" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.installUpdatesOnBoot"></a>

```typescript
public readonly installUpdatesOnBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceShutdownTimeout`<sup>Required</sup> <a name="instanceShutdownTimeout" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.instanceShutdownTimeout"></a>

```typescript
public readonly instanceShutdownTimeout: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `systemPackages`<sup>Required</sup> <a name="systemPackages" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.systemPackages"></a>

```typescript
public readonly systemPackages: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useEbsOptimizedInstances`<sup>Required</sup> <a name="useEbsOptimizedInstances" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.useEbsOptimizedInstances"></a>

```typescript
public readonly useEbsOptimizedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksStaticWebLayerCloudwatchConfiguration <a name="OpsworksStaticWebLayerCloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration.Initializer"></a>

```typescript
import { opsworksStaticWebLayer } from '@cdktf/aws-cdk'

const opsworksStaticWebLayerCloudwatchConfiguration: opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#enabled OpsworksStaticWebLayer#enabled}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration.property.logStreams">logStreams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams">OpsworksStaticWebLayerCloudwatchConfigurationLogStreams</a>[]</code> | log_streams block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#enabled OpsworksStaticWebLayer#enabled}.

---

##### `logStreams`<sup>Optional</sup> <a name="logStreams" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration.property.logStreams"></a>

```typescript
public readonly logStreams: IResolvable | OpsworksStaticWebLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams">OpsworksStaticWebLayerCloudwatchConfigurationLogStreams</a>[]

log_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#log_streams OpsworksStaticWebLayer#log_streams}

---

### OpsworksStaticWebLayerCloudwatchConfigurationLogStreams <a name="OpsworksStaticWebLayerCloudwatchConfigurationLogStreams" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```typescript
import { opsworksStaticWebLayer } from '@cdktf/aws-cdk'

const opsworksStaticWebLayerCloudwatchConfigurationLogStreams: opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.file">file</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#file OpsworksStaticWebLayer#file}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.logGroupName">logGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#log_group_name OpsworksStaticWebLayer#log_group_name}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.batchCount">batchCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#batch_count OpsworksStaticWebLayer#batch_count}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.batchSize">batchSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#batch_size OpsworksStaticWebLayer#batch_size}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.bufferDuration">bufferDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#buffer_duration OpsworksStaticWebLayer#buffer_duration}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">datetimeFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#datetime_format OpsworksStaticWebLayer#datetime_format}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.encoding">encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#encoding OpsworksStaticWebLayer#encoding}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#file_fingerprint_lines OpsworksStaticWebLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.initialPosition">initialPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#initial_position OpsworksStaticWebLayer#initial_position}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">multilineStartPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#multiline_start_pattern OpsworksStaticWebLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#time_zone OpsworksStaticWebLayer#time_zone}. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#file OpsworksStaticWebLayer#file}.

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#log_group_name OpsworksStaticWebLayer#log_group_name}.

---

##### `batchCount`<sup>Optional</sup> <a name="batchCount" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```typescript
public readonly batchCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#batch_count OpsworksStaticWebLayer#batch_count}.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#batch_size OpsworksStaticWebLayer#batch_size}.

---

##### `bufferDuration`<sup>Optional</sup> <a name="bufferDuration" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```typescript
public readonly bufferDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#buffer_duration OpsworksStaticWebLayer#buffer_duration}.

---

##### `datetimeFormat`<sup>Optional</sup> <a name="datetimeFormat" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```typescript
public readonly datetimeFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#datetime_format OpsworksStaticWebLayer#datetime_format}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#encoding OpsworksStaticWebLayer#encoding}.

---

##### `fileFingerprintLines`<sup>Optional</sup> <a name="fileFingerprintLines" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```typescript
public readonly fileFingerprintLines: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#file_fingerprint_lines OpsworksStaticWebLayer#file_fingerprint_lines}.

---

##### `initialPosition`<sup>Optional</sup> <a name="initialPosition" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```typescript
public readonly initialPosition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#initial_position OpsworksStaticWebLayer#initial_position}.

---

##### `multilineStartPattern`<sup>Optional</sup> <a name="multilineStartPattern" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```typescript
public readonly multilineStartPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#multiline_start_pattern OpsworksStaticWebLayer#multiline_start_pattern}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#time_zone OpsworksStaticWebLayer#time_zone}.

---

### OpsworksStaticWebLayerConfig <a name="OpsworksStaticWebLayerConfig" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.Initializer"></a>

```typescript
import { opsworksStaticWebLayer } from '@cdktf/aws-cdk'

const opsworksStaticWebLayerConfig: opsworksStaticWebLayer.OpsworksStaticWebLayerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.stackId">stackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#stack_id OpsworksStaticWebLayer#stack_id}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#auto_assign_elastic_ips OpsworksStaticWebLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#auto_assign_public_ips OpsworksStaticWebLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#auto_healing OpsworksStaticWebLayer#auto_healing}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration">OpsworksStaticWebLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#custom_configure_recipes OpsworksStaticWebLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customDeployRecipes">customDeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#custom_deploy_recipes OpsworksStaticWebLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#custom_instance_profile_arn OpsworksStaticWebLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customJson">customJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#custom_json OpsworksStaticWebLayer#custom_json}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#custom_security_group_ids OpsworksStaticWebLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customSetupRecipes">customSetupRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#custom_setup_recipes OpsworksStaticWebLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#custom_shutdown_recipes OpsworksStaticWebLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#custom_undeploy_recipes OpsworksStaticWebLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#drain_elb_on_shutdown OpsworksStaticWebLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.ebsVolume">ebsVolume</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume">OpsworksStaticWebLayerEbsVolume</a>[]</code> | ebs_volume block. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#elastic_load_balancer OpsworksStaticWebLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#id OpsworksStaticWebLayer#id}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#install_updates_on_boot OpsworksStaticWebLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#instance_shutdown_timeout OpsworksStaticWebLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#name OpsworksStaticWebLayer#name}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.systemPackages">systemPackages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#system_packages OpsworksStaticWebLayer#system_packages}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#tags OpsworksStaticWebLayer#tags}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#tags_all OpsworksStaticWebLayer#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#use_ebs_optimized_instances OpsworksStaticWebLayer#use_ebs_optimized_instances}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#stack_id OpsworksStaticWebLayer#stack_id}.

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="autoAssignElasticIps" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.autoAssignElasticIps"></a>

```typescript
public readonly autoAssignElasticIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#auto_assign_elastic_ips OpsworksStaticWebLayer#auto_assign_elastic_ips}.

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="autoAssignPublicIps" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.autoAssignPublicIps"></a>

```typescript
public readonly autoAssignPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#auto_assign_public_ips OpsworksStaticWebLayer#auto_assign_public_ips}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#auto_healing OpsworksStaticWebLayer#auto_healing}.

---

##### `cloudwatchConfiguration`<sup>Optional</sup> <a name="cloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.cloudwatchConfiguration"></a>

```typescript
public readonly cloudwatchConfiguration: OpsworksStaticWebLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration">OpsworksStaticWebLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#cloudwatch_configuration OpsworksStaticWebLayer#cloudwatch_configuration}

---

##### `customConfigureRecipes`<sup>Optional</sup> <a name="customConfigureRecipes" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customConfigureRecipes"></a>

```typescript
public readonly customConfigureRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#custom_configure_recipes OpsworksStaticWebLayer#custom_configure_recipes}.

---

##### `customDeployRecipes`<sup>Optional</sup> <a name="customDeployRecipes" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customDeployRecipes"></a>

```typescript
public readonly customDeployRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#custom_deploy_recipes OpsworksStaticWebLayer#custom_deploy_recipes}.

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="customInstanceProfileArn" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customInstanceProfileArn"></a>

```typescript
public readonly customInstanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#custom_instance_profile_arn OpsworksStaticWebLayer#custom_instance_profile_arn}.

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#custom_json OpsworksStaticWebLayer#custom_json}.

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="customSecurityGroupIds" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customSecurityGroupIds"></a>

```typescript
public readonly customSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#custom_security_group_ids OpsworksStaticWebLayer#custom_security_group_ids}.

---

##### `customSetupRecipes`<sup>Optional</sup> <a name="customSetupRecipes" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customSetupRecipes"></a>

```typescript
public readonly customSetupRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#custom_setup_recipes OpsworksStaticWebLayer#custom_setup_recipes}.

---

##### `customShutdownRecipes`<sup>Optional</sup> <a name="customShutdownRecipes" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customShutdownRecipes"></a>

```typescript
public readonly customShutdownRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#custom_shutdown_recipes OpsworksStaticWebLayer#custom_shutdown_recipes}.

---

##### `customUndeployRecipes`<sup>Optional</sup> <a name="customUndeployRecipes" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customUndeployRecipes"></a>

```typescript
public readonly customUndeployRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#custom_undeploy_recipes OpsworksStaticWebLayer#custom_undeploy_recipes}.

---

##### `drainElbOnShutdown`<sup>Optional</sup> <a name="drainElbOnShutdown" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.drainElbOnShutdown"></a>

```typescript
public readonly drainElbOnShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#drain_elb_on_shutdown OpsworksStaticWebLayer#drain_elb_on_shutdown}.

---

##### `ebsVolume`<sup>Optional</sup> <a name="ebsVolume" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.ebsVolume"></a>

```typescript
public readonly ebsVolume: IResolvable | OpsworksStaticWebLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume">OpsworksStaticWebLayerEbsVolume</a>[]

ebs_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#ebs_volume OpsworksStaticWebLayer#ebs_volume}

---

##### `elasticLoadBalancer`<sup>Optional</sup> <a name="elasticLoadBalancer" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.elasticLoadBalancer"></a>

```typescript
public readonly elasticLoadBalancer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#elastic_load_balancer OpsworksStaticWebLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#id OpsworksStaticWebLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="installUpdatesOnBoot" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.installUpdatesOnBoot"></a>

```typescript
public readonly installUpdatesOnBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#install_updates_on_boot OpsworksStaticWebLayer#install_updates_on_boot}.

---

##### `instanceShutdownTimeout`<sup>Optional</sup> <a name="instanceShutdownTimeout" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.instanceShutdownTimeout"></a>

```typescript
public readonly instanceShutdownTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#instance_shutdown_timeout OpsworksStaticWebLayer#instance_shutdown_timeout}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#name OpsworksStaticWebLayer#name}.

---

##### `systemPackages`<sup>Optional</sup> <a name="systemPackages" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.systemPackages"></a>

```typescript
public readonly systemPackages: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#system_packages OpsworksStaticWebLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#tags OpsworksStaticWebLayer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#tags_all OpsworksStaticWebLayer#tags_all}.

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="useEbsOptimizedInstances" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.useEbsOptimizedInstances"></a>

```typescript
public readonly useEbsOptimizedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#use_ebs_optimized_instances OpsworksStaticWebLayer#use_ebs_optimized_instances}.

---

### OpsworksStaticWebLayerEbsVolume <a name="OpsworksStaticWebLayerEbsVolume" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.Initializer"></a>

```typescript
import { opsworksStaticWebLayer } from '@cdktf/aws-cdk'

const opsworksStaticWebLayerEbsVolume: opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.mountPoint">mountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#mount_point OpsworksStaticWebLayer#mount_point}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.numberOfDisks">numberOfDisks</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#number_of_disks OpsworksStaticWebLayer#number_of_disks}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#size OpsworksStaticWebLayer#size}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#encrypted OpsworksStaticWebLayer#encrypted}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#iops OpsworksStaticWebLayer#iops}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.raidLevel">raidLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#raid_level OpsworksStaticWebLayer#raid_level}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#type OpsworksStaticWebLayer#type}. |

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#mount_point OpsworksStaticWebLayer#mount_point}.

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.numberOfDisks"></a>

```typescript
public readonly numberOfDisks: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#number_of_disks OpsworksStaticWebLayer#number_of_disks}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#size OpsworksStaticWebLayer#size}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#encrypted OpsworksStaticWebLayer#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#iops OpsworksStaticWebLayer#iops}.

---

##### `raidLevel`<sup>Optional</sup> <a name="raidLevel" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.raidLevel"></a>

```typescript
public readonly raidLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#raid_level OpsworksStaticWebLayer#raid_level}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_static_web_layer#type OpsworksStaticWebLayer#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```typescript
import { opsworksStaticWebLayer } from '@cdktf/aws-cdk'

new opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.get"></a>

```typescript
public get(index: number): OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams">OpsworksStaticWebLayerCloudwatchConfigurationLogStreams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksStaticWebLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams">OpsworksStaticWebLayerCloudwatchConfigurationLogStreams</a>[]

---


### OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```typescript
import { opsworksStaticWebLayer } from '@cdktf/aws-cdk'

new opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">resetBatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">resetBufferDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">resetDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">resetFileFingerprintLines</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">resetInitialPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">resetMultilineStartPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchCount` <a name="resetBatchCount" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```typescript
public resetBatchCount(): void
```

##### `resetBatchSize` <a name="resetBatchSize" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```typescript
public resetBatchSize(): void
```

##### `resetBufferDuration` <a name="resetBufferDuration" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```typescript
public resetBufferDuration(): void
```

##### `resetDatetimeFormat` <a name="resetDatetimeFormat" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```typescript
public resetDatetimeFormat(): void
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetFileFingerprintLines` <a name="resetFileFingerprintLines" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```typescript
public resetFileFingerprintLines(): void
```

##### `resetInitialPosition` <a name="resetInitialPosition" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```typescript
public resetInitialPosition(): void
```

##### `resetMultilineStartPattern` <a name="resetMultilineStartPattern" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```typescript
public resetMultilineStartPattern(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">batchCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">bufferDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">datetimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">fileFingerprintLinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">fileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">initialPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">multilineStartPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">batchCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">batchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">bufferDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">datetimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">initialPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">multilineStartPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams">OpsworksStaticWebLayerCloudwatchConfigurationLogStreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchCountInput`<sup>Optional</sup> <a name="batchCountInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```typescript
public readonly batchCountInput: number;
```

- *Type:* number

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```typescript
public readonly batchSizeInput: number;
```

- *Type:* number

---

##### `bufferDurationInput`<sup>Optional</sup> <a name="bufferDurationInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```typescript
public readonly bufferDurationInput: number;
```

- *Type:* number

---

##### `datetimeFormatInput`<sup>Optional</sup> <a name="datetimeFormatInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```typescript
public readonly datetimeFormatInput: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `fileFingerprintLinesInput`<sup>Optional</sup> <a name="fileFingerprintLinesInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```typescript
public readonly fileFingerprintLinesInput: string;
```

- *Type:* string

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```typescript
public readonly fileInput: string;
```

- *Type:* string

---

##### `initialPositionInput`<sup>Optional</sup> <a name="initialPositionInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```typescript
public readonly initialPositionInput: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `multilineStartPatternInput`<sup>Optional</sup> <a name="multilineStartPatternInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```typescript
public readonly multilineStartPatternInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `batchCount`<sup>Required</sup> <a name="batchCount" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```typescript
public readonly batchCount: number;
```

- *Type:* number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

---

##### `bufferDuration`<sup>Required</sup> <a name="bufferDuration" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```typescript
public readonly bufferDuration: number;
```

- *Type:* number

---

##### `datetimeFormat`<sup>Required</sup> <a name="datetimeFormat" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```typescript
public readonly datetimeFormat: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `fileFingerprintLines`<sup>Required</sup> <a name="fileFingerprintLines" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```typescript
public readonly fileFingerprintLines: string;
```

- *Type:* string

---

##### `initialPosition`<sup>Required</sup> <a name="initialPosition" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```typescript
public readonly initialPosition: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `multilineStartPattern`<sup>Required</sup> <a name="multilineStartPattern" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```typescript
public readonly multilineStartPattern: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksStaticWebLayerCloudwatchConfigurationLogStreams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams">OpsworksStaticWebLayerCloudwatchConfigurationLogStreams</a>

---


### OpsworksStaticWebLayerCloudwatchConfigurationOutputReference <a name="OpsworksStaticWebLayerCloudwatchConfigurationOutputReference" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```typescript
import { opsworksStaticWebLayer } from '@cdktf/aws-cdk'

new opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.putLogStreams">putLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.resetLogStreams">resetLogStreams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogStreams` <a name="putLogStreams" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```typescript
public putLogStreams(value: IResolvable | OpsworksStaticWebLayerCloudwatchConfigurationLogStreams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams">OpsworksStaticWebLayerCloudwatchConfigurationLogStreams</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetLogStreams` <a name="resetLogStreams" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```typescript
public resetLogStreams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.logStreams">logStreams</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList">OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">logStreamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams">OpsworksStaticWebLayerCloudwatchConfigurationLogStreams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration">OpsworksStaticWebLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logStreams`<sup>Required</sup> <a name="logStreams" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```typescript
public readonly logStreams: OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList">OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logStreamsInput`<sup>Optional</sup> <a name="logStreamsInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```typescript
public readonly logStreamsInput: IResolvable | OpsworksStaticWebLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams">OpsworksStaticWebLayerCloudwatchConfigurationLogStreams</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksStaticWebLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration">OpsworksStaticWebLayerCloudwatchConfiguration</a>

---


### OpsworksStaticWebLayerEbsVolumeList <a name="OpsworksStaticWebLayerEbsVolumeList" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.Initializer"></a>

```typescript
import { opsworksStaticWebLayer } from '@cdktf/aws-cdk'

new opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.get"></a>

```typescript
public get(index: number): OpsworksStaticWebLayerEbsVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume">OpsworksStaticWebLayerEbsVolume</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksStaticWebLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume">OpsworksStaticWebLayerEbsVolume</a>[]

---


### OpsworksStaticWebLayerEbsVolumeOutputReference <a name="OpsworksStaticWebLayerEbsVolumeOutputReference" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.Initializer"></a>

```typescript
import { opsworksStaticWebLayer } from '@cdktf/aws-cdk'

new opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resetRaidLevel">resetRaidLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetRaidLevel` <a name="resetRaidLevel" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```typescript
public resetRaidLevel(): void
```

##### `resetType` <a name="resetType" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.numberOfDisksInput">numberOfDisksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.raidLevelInput">raidLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.numberOfDisks">numberOfDisks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.raidLevel">raidLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume">OpsworksStaticWebLayerEbsVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```typescript
public readonly mountPointInput: string;
```

- *Type:* string

---

##### `numberOfDisksInput`<sup>Optional</sup> <a name="numberOfDisksInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```typescript
public readonly numberOfDisksInput: number;
```

- *Type:* number

---

##### `raidLevelInput`<sup>Optional</sup> <a name="raidLevelInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```typescript
public readonly raidLevelInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```typescript
public readonly numberOfDisks: number;
```

- *Type:* number

---

##### `raidLevel`<sup>Required</sup> <a name="raidLevel" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.raidLevel"></a>

```typescript
public readonly raidLevel: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksStaticWebLayerEbsVolume;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume">OpsworksStaticWebLayerEbsVolume</a>

---




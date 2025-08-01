# `neptuneClusterInstance` Submodule <a name="`neptuneClusterInstance` Submodule" id="@cdktf/aws-cdk.neptuneClusterInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptuneClusterInstance <a name="NeptuneClusterInstance" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance aws_neptune_cluster_instance}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.Initializer"></a>

```typescript
import { neptuneClusterInstance } from '@cdktf/aws-cdk'

new neptuneClusterInstance.NeptuneClusterInstance(scope: Construct, id: string, config: NeptuneClusterInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig">NeptuneClusterInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig">NeptuneClusterInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetApplyImmediately">resetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetAutoMinorVersionUpgrade">resetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetIdentifierPrefix">resetIdentifierPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetNeptuneParameterGroupName">resetNeptuneParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetNeptuneSubnetGroupName">resetNeptuneSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetPreferredBackupWindow">resetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetPromotionTier">resetPromotionTier</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: NeptuneClusterInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeouts">NeptuneClusterInstanceTimeouts</a>

---

##### `resetApplyImmediately` <a name="resetApplyImmediately" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetApplyImmediately"></a>

```typescript
public resetApplyImmediately(): void
```

##### `resetAutoMinorVersionUpgrade` <a name="resetAutoMinorVersionUpgrade" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetAutoMinorVersionUpgrade"></a>

```typescript
public resetAutoMinorVersionUpgrade(): void
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetEngine` <a name="resetEngine" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetEngine"></a>

```typescript
public resetEngine(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetIdentifier"></a>

```typescript
public resetIdentifier(): void
```

##### `resetIdentifierPrefix` <a name="resetIdentifierPrefix" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetIdentifierPrefix"></a>

```typescript
public resetIdentifierPrefix(): void
```

##### `resetNeptuneParameterGroupName` <a name="resetNeptuneParameterGroupName" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetNeptuneParameterGroupName"></a>

```typescript
public resetNeptuneParameterGroupName(): void
```

##### `resetNeptuneSubnetGroupName` <a name="resetNeptuneSubnetGroupName" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetNeptuneSubnetGroupName"></a>

```typescript
public resetNeptuneSubnetGroupName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPreferredBackupWindow` <a name="resetPreferredBackupWindow" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetPreferredBackupWindow"></a>

```typescript
public resetPreferredBackupWindow(): void
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetPreferredMaintenanceWindow"></a>

```typescript
public resetPreferredMaintenanceWindow(): void
```

##### `resetPromotionTier` <a name="resetPromotionTier" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetPromotionTier"></a>

```typescript
public resetPromotionTier(): void
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetPubliclyAccessible"></a>

```typescript
public resetPubliclyAccessible(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NeptuneClusterInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.isConstruct"></a>

```typescript
import { neptuneClusterInstance } from '@cdktf/aws-cdk'

neptuneClusterInstance.NeptuneClusterInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.isTerraformElement"></a>

```typescript
import { neptuneClusterInstance } from '@cdktf/aws-cdk'

neptuneClusterInstance.NeptuneClusterInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.isTerraformResource"></a>

```typescript
import { neptuneClusterInstance } from '@cdktf/aws-cdk'

neptuneClusterInstance.NeptuneClusterInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.generateConfigForImport"></a>

```typescript
import { neptuneClusterInstance } from '@cdktf/aws-cdk'

neptuneClusterInstance.NeptuneClusterInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NeptuneClusterInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NeptuneClusterInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NeptuneClusterInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NeptuneClusterInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.dbiResourceId">dbiResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.storageEncrypted">storageEncrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference">NeptuneClusterInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.writer">writer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.applyImmediatelyInput">applyImmediatelyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.autoMinorVersionUpgradeInput">autoMinorVersionUpgradeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.identifierPrefixInput">identifierPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.instanceClassInput">instanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.neptuneParameterGroupNameInput">neptuneParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.neptuneSubnetGroupNameInput">neptuneSubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.preferredBackupWindowInput">preferredBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.promotionTierInput">promotionTierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeouts">NeptuneClusterInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.applyImmediately">applyImmediately</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.identifierPrefix">identifierPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.instanceClass">instanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.neptuneParameterGroupName">neptuneParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.neptuneSubnetGroupName">neptuneSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.promotionTier">promotionTier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dbiResourceId`<sup>Required</sup> <a name="dbiResourceId" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.dbiResourceId"></a>

```typescript
public readonly dbiResourceId: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.storageEncrypted"></a>

```typescript
public readonly storageEncrypted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.timeouts"></a>

```typescript
public readonly timeouts: NeptuneClusterInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference">NeptuneClusterInstanceTimeoutsOutputReference</a>

---

##### `writer`<sup>Required</sup> <a name="writer" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.writer"></a>

```typescript
public readonly writer: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `applyImmediatelyInput`<sup>Optional</sup> <a name="applyImmediatelyInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.applyImmediatelyInput"></a>

```typescript
public readonly applyImmediatelyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="autoMinorVersionUpgradeInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.autoMinorVersionUpgradeInput"></a>

```typescript
public readonly autoMinorVersionUpgradeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `identifierPrefixInput`<sup>Optional</sup> <a name="identifierPrefixInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.identifierPrefixInput"></a>

```typescript
public readonly identifierPrefixInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceClassInput`<sup>Optional</sup> <a name="instanceClassInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.instanceClassInput"></a>

```typescript
public readonly instanceClassInput: string;
```

- *Type:* string

---

##### `neptuneParameterGroupNameInput`<sup>Optional</sup> <a name="neptuneParameterGroupNameInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.neptuneParameterGroupNameInput"></a>

```typescript
public readonly neptuneParameterGroupNameInput: string;
```

- *Type:* string

---

##### `neptuneSubnetGroupNameInput`<sup>Optional</sup> <a name="neptuneSubnetGroupNameInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.neptuneSubnetGroupNameInput"></a>

```typescript
public readonly neptuneSubnetGroupNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `preferredBackupWindowInput`<sup>Optional</sup> <a name="preferredBackupWindowInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.preferredBackupWindowInput"></a>

```typescript
public readonly preferredBackupWindowInput: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.preferredMaintenanceWindowInput"></a>

```typescript
public readonly preferredMaintenanceWindowInput: string;
```

- *Type:* string

---

##### `promotionTierInput`<sup>Optional</sup> <a name="promotionTierInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.promotionTierInput"></a>

```typescript
public readonly promotionTierInput: number;
```

- *Type:* number

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.publiclyAccessibleInput"></a>

```typescript
public readonly publiclyAccessibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NeptuneClusterInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeouts">NeptuneClusterInstanceTimeouts</a>

---

##### `applyImmediately`<sup>Required</sup> <a name="applyImmediately" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.applyImmediately"></a>

```typescript
public readonly applyImmediately: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `identifierPrefix`<sup>Required</sup> <a name="identifierPrefix" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.identifierPrefix"></a>

```typescript
public readonly identifierPrefix: string;
```

- *Type:* string

---

##### `instanceClass`<sup>Required</sup> <a name="instanceClass" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.instanceClass"></a>

```typescript
public readonly instanceClass: string;
```

- *Type:* string

---

##### `neptuneParameterGroupName`<sup>Required</sup> <a name="neptuneParameterGroupName" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.neptuneParameterGroupName"></a>

```typescript
public readonly neptuneParameterGroupName: string;
```

- *Type:* string

---

##### `neptuneSubnetGroupName`<sup>Required</sup> <a name="neptuneSubnetGroupName" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.neptuneSubnetGroupName"></a>

```typescript
public readonly neptuneSubnetGroupName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="preferredBackupWindow" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.preferredBackupWindow"></a>

```typescript
public readonly preferredBackupWindow: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `promotionTier`<sup>Required</sup> <a name="promotionTier" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.promotionTier"></a>

```typescript
public readonly promotionTier: number;
```

- *Type:* number

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NeptuneClusterInstanceConfig <a name="NeptuneClusterInstanceConfig" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.Initializer"></a>

```typescript
import { neptuneClusterInstance } from '@cdktf/aws-cdk'

const neptuneClusterInstanceConfig: neptuneClusterInstance.NeptuneClusterInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#cluster_identifier NeptuneClusterInstance#cluster_identifier}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.instanceClass">instanceClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#instance_class NeptuneClusterInstance#instance_class}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.applyImmediately">applyImmediately</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#apply_immediately NeptuneClusterInstance#apply_immediately}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#auto_minor_version_upgrade NeptuneClusterInstance#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#availability_zone NeptuneClusterInstance#availability_zone}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#engine NeptuneClusterInstance#engine}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#engine_version NeptuneClusterInstance#engine_version}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#id NeptuneClusterInstance#id}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#identifier NeptuneClusterInstance#identifier}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.identifierPrefix">identifierPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#identifier_prefix NeptuneClusterInstance#identifier_prefix}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.neptuneParameterGroupName">neptuneParameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#neptune_parameter_group_name NeptuneClusterInstance#neptune_parameter_group_name}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.neptuneSubnetGroupName">neptuneSubnetGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#neptune_subnet_group_name NeptuneClusterInstance#neptune_subnet_group_name}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#port NeptuneClusterInstance#port}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#preferred_backup_window NeptuneClusterInstance#preferred_backup_window}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#preferred_maintenance_window NeptuneClusterInstance#preferred_maintenance_window}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.promotionTier">promotionTier</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#promotion_tier NeptuneClusterInstance#promotion_tier}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#publicly_accessible NeptuneClusterInstance#publicly_accessible}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#tags NeptuneClusterInstance#tags}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#tags_all NeptuneClusterInstance#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeouts">NeptuneClusterInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#cluster_identifier NeptuneClusterInstance#cluster_identifier}.

---

##### `instanceClass`<sup>Required</sup> <a name="instanceClass" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.instanceClass"></a>

```typescript
public readonly instanceClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#instance_class NeptuneClusterInstance#instance_class}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.applyImmediately"></a>

```typescript
public readonly applyImmediately: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#apply_immediately NeptuneClusterInstance#apply_immediately}.

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#auto_minor_version_upgrade NeptuneClusterInstance#auto_minor_version_upgrade}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#availability_zone NeptuneClusterInstance#availability_zone}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#engine NeptuneClusterInstance#engine}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#engine_version NeptuneClusterInstance#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#id NeptuneClusterInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#identifier NeptuneClusterInstance#identifier}.

---

##### `identifierPrefix`<sup>Optional</sup> <a name="identifierPrefix" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.identifierPrefix"></a>

```typescript
public readonly identifierPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#identifier_prefix NeptuneClusterInstance#identifier_prefix}.

---

##### `neptuneParameterGroupName`<sup>Optional</sup> <a name="neptuneParameterGroupName" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.neptuneParameterGroupName"></a>

```typescript
public readonly neptuneParameterGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#neptune_parameter_group_name NeptuneClusterInstance#neptune_parameter_group_name}.

---

##### `neptuneSubnetGroupName`<sup>Optional</sup> <a name="neptuneSubnetGroupName" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.neptuneSubnetGroupName"></a>

```typescript
public readonly neptuneSubnetGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#neptune_subnet_group_name NeptuneClusterInstance#neptune_subnet_group_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#port NeptuneClusterInstance#port}.

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.preferredBackupWindow"></a>

```typescript
public readonly preferredBackupWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#preferred_backup_window NeptuneClusterInstance#preferred_backup_window}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#preferred_maintenance_window NeptuneClusterInstance#preferred_maintenance_window}.

---

##### `promotionTier`<sup>Optional</sup> <a name="promotionTier" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.promotionTier"></a>

```typescript
public readonly promotionTier: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#promotion_tier NeptuneClusterInstance#promotion_tier}.

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#publicly_accessible NeptuneClusterInstance#publicly_accessible}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#tags NeptuneClusterInstance#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#tags_all NeptuneClusterInstance#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NeptuneClusterInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeouts">NeptuneClusterInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#timeouts NeptuneClusterInstance#timeouts}

---

### NeptuneClusterInstanceTimeouts <a name="NeptuneClusterInstanceTimeouts" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeouts.Initializer"></a>

```typescript
import { neptuneClusterInstance } from '@cdktf/aws-cdk'

const neptuneClusterInstanceTimeouts: neptuneClusterInstance.NeptuneClusterInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#create NeptuneClusterInstance#create}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#delete NeptuneClusterInstance#delete}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#update NeptuneClusterInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#create NeptuneClusterInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#delete NeptuneClusterInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_instance#update NeptuneClusterInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NeptuneClusterInstanceTimeoutsOutputReference <a name="NeptuneClusterInstanceTimeoutsOutputReference" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { neptuneClusterInstance } from '@cdktf/aws-cdk'

new neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeouts">NeptuneClusterInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NeptuneClusterInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.neptuneClusterInstance.NeptuneClusterInstanceTimeouts">NeptuneClusterInstanceTimeouts</a>

---




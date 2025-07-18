# `mqBroker` Submodule <a name="`mqBroker` Submodule" id="@cdktf/aws-cdk.mqBroker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MqBroker <a name="MqBroker" id="@cdktf/aws-cdk.mqBroker.MqBroker"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker aws_mq_broker}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.mqBroker.MqBroker.Initializer"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

new mqBroker.MqBroker(scope: Construct, id: string, config: MqBrokerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig">MqBrokerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.mqBroker.MqBroker.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.mqBroker.MqBroker.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.mqBroker.MqBroker.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig">MqBrokerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.putEncryptionOptions">putEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.putLdapServerMetadata">putLdapServerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.putLogs">putLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.putMaintenanceWindowStartTime">putMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.putUser">putUser</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.resetApplyImmediately">resetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.resetAuthenticationStrategy">resetAuthenticationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.resetAutoMinorVersionUpgrade">resetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.resetDeploymentMode">resetDeploymentMode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.resetEncryptionOptions">resetEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.resetLdapServerMetadata">resetLdapServerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.resetLogs">resetLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.resetMaintenanceWindowStartTime">resetMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.mqBroker.MqBroker.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.mqBroker.MqBroker.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.mqBroker.MqBroker.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.mqBroker.MqBroker.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.mqBroker.MqBroker.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.mqBroker.MqBroker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.mqBroker.MqBroker.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.mqBroker.MqBroker.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.mqBroker.MqBroker.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.mqBroker.MqBroker.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.mqBroker.MqBroker.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.mqBroker.MqBroker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.mqBroker.MqBroker.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.mqBroker.MqBroker.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.mqBroker.MqBroker.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.mqBroker.MqBroker.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBroker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.mqBroker.MqBroker.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.mqBroker.MqBroker.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.mqBroker.MqBroker.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.mqBroker.MqBroker.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.mqBroker.MqBroker.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.mqBroker.MqBroker.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.mqBroker.MqBroker.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/aws-cdk.mqBroker.MqBroker.putConfiguration"></a>

```typescript
public putConfiguration(value: MqBrokerConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.mqBroker.MqBroker.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

---

##### `putEncryptionOptions` <a name="putEncryptionOptions" id="@cdktf/aws-cdk.mqBroker.MqBroker.putEncryptionOptions"></a>

```typescript
public putEncryptionOptions(value: MqBrokerEncryptionOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.mqBroker.MqBroker.putEncryptionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

---

##### `putLdapServerMetadata` <a name="putLdapServerMetadata" id="@cdktf/aws-cdk.mqBroker.MqBroker.putLdapServerMetadata"></a>

```typescript
public putLdapServerMetadata(value: MqBrokerLdapServerMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.mqBroker.MqBroker.putLdapServerMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

---

##### `putLogs` <a name="putLogs" id="@cdktf/aws-cdk.mqBroker.MqBroker.putLogs"></a>

```typescript
public putLogs(value: MqBrokerLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.mqBroker.MqBroker.putLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

---

##### `putMaintenanceWindowStartTime` <a name="putMaintenanceWindowStartTime" id="@cdktf/aws-cdk.mqBroker.MqBroker.putMaintenanceWindowStartTime"></a>

```typescript
public putMaintenanceWindowStartTime(value: MqBrokerMaintenanceWindowStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.mqBroker.MqBroker.putMaintenanceWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

---

##### `putUser` <a name="putUser" id="@cdktf/aws-cdk.mqBroker.MqBroker.putUser"></a>

```typescript
public putUser(value: IResolvable | MqBrokerUser[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.mqBroker.MqBroker.putUser.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUser">MqBrokerUser</a>[]

---

##### `resetApplyImmediately` <a name="resetApplyImmediately" id="@cdktf/aws-cdk.mqBroker.MqBroker.resetApplyImmediately"></a>

```typescript
public resetApplyImmediately(): void
```

##### `resetAuthenticationStrategy` <a name="resetAuthenticationStrategy" id="@cdktf/aws-cdk.mqBroker.MqBroker.resetAuthenticationStrategy"></a>

```typescript
public resetAuthenticationStrategy(): void
```

##### `resetAutoMinorVersionUpgrade` <a name="resetAutoMinorVersionUpgrade" id="@cdktf/aws-cdk.mqBroker.MqBroker.resetAutoMinorVersionUpgrade"></a>

```typescript
public resetAutoMinorVersionUpgrade(): void
```

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/aws-cdk.mqBroker.MqBroker.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetDeploymentMode` <a name="resetDeploymentMode" id="@cdktf/aws-cdk.mqBroker.MqBroker.resetDeploymentMode"></a>

```typescript
public resetDeploymentMode(): void
```

##### `resetEncryptionOptions` <a name="resetEncryptionOptions" id="@cdktf/aws-cdk.mqBroker.MqBroker.resetEncryptionOptions"></a>

```typescript
public resetEncryptionOptions(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.mqBroker.MqBroker.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLdapServerMetadata` <a name="resetLdapServerMetadata" id="@cdktf/aws-cdk.mqBroker.MqBroker.resetLdapServerMetadata"></a>

```typescript
public resetLdapServerMetadata(): void
```

##### `resetLogs` <a name="resetLogs" id="@cdktf/aws-cdk.mqBroker.MqBroker.resetLogs"></a>

```typescript
public resetLogs(): void
```

##### `resetMaintenanceWindowStartTime` <a name="resetMaintenanceWindowStartTime" id="@cdktf/aws-cdk.mqBroker.MqBroker.resetMaintenanceWindowStartTime"></a>

```typescript
public resetMaintenanceWindowStartTime(): void
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktf/aws-cdk.mqBroker.MqBroker.resetPubliclyAccessible"></a>

```typescript
public resetPubliclyAccessible(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/aws-cdk.mqBroker.MqBroker.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/aws-cdk.mqBroker.MqBroker.resetStorageType"></a>

```typescript
public resetStorageType(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/aws-cdk.mqBroker.MqBroker.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.mqBroker.MqBroker.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.mqBroker.MqBroker.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MqBroker resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.mqBroker.MqBroker.isConstruct"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

mqBroker.MqBroker.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.mqBroker.MqBroker.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.mqBroker.MqBroker.isTerraformElement"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

mqBroker.MqBroker.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.mqBroker.MqBroker.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.mqBroker.MqBroker.isTerraformResource"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

mqBroker.MqBroker.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.mqBroker.MqBroker.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.mqBroker.MqBroker.generateConfigForImport"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

mqBroker.MqBroker.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MqBroker resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.mqBroker.MqBroker.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.mqBroker.MqBroker.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MqBroker to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.mqBroker.MqBroker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MqBroker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.mqBroker.MqBroker.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MqBroker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.configuration">configuration</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference">MqBrokerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.encryptionOptions">encryptionOptions</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference">MqBrokerEncryptionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.instances">instances</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList">MqBrokerInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.ldapServerMetadata">ldapServerMetadata</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference">MqBrokerLdapServerMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.logs">logs</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference">MqBrokerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.maintenanceWindowStartTime">maintenanceWindowStartTime</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference">MqBrokerMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.user">user</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserList">MqBrokerUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.applyImmediatelyInput">applyImmediatelyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.authenticationStrategyInput">authenticationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.autoMinorVersionUpgradeInput">autoMinorVersionUpgradeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.brokerNameInput">brokerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.configurationInput">configurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.deploymentModeInput">deploymentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.encryptionOptionsInput">encryptionOptionsInput</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.engineTypeInput">engineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.hostInstanceTypeInput">hostInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.ldapServerMetadataInput">ldapServerMetadataInput</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.logsInput">logsInput</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogs">MqBrokerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.maintenanceWindowStartTimeInput">maintenanceWindowStartTimeInput</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.userInput">userInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUser">MqBrokerUser</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.applyImmediately">applyImmediately</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.authenticationStrategy">authenticationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.brokerName">brokerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.deploymentMode">deploymentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.engineType">engineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.hostInstanceType">hostInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.configuration"></a>

```typescript
public readonly configuration: MqBrokerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference">MqBrokerConfigurationOutputReference</a>

---

##### `encryptionOptions`<sup>Required</sup> <a name="encryptionOptions" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.encryptionOptions"></a>

```typescript
public readonly encryptionOptions: MqBrokerEncryptionOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference">MqBrokerEncryptionOptionsOutputReference</a>

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.instances"></a>

```typescript
public readonly instances: MqBrokerInstancesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList">MqBrokerInstancesList</a>

---

##### `ldapServerMetadata`<sup>Required</sup> <a name="ldapServerMetadata" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.ldapServerMetadata"></a>

```typescript
public readonly ldapServerMetadata: MqBrokerLdapServerMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference">MqBrokerLdapServerMetadataOutputReference</a>

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.logs"></a>

```typescript
public readonly logs: MqBrokerLogsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference">MqBrokerLogsOutputReference</a>

---

##### `maintenanceWindowStartTime`<sup>Required</sup> <a name="maintenanceWindowStartTime" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.maintenanceWindowStartTime"></a>

```typescript
public readonly maintenanceWindowStartTime: MqBrokerMaintenanceWindowStartTimeOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference">MqBrokerMaintenanceWindowStartTimeOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.user"></a>

```typescript
public readonly user: MqBrokerUserList;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserList">MqBrokerUserList</a>

---

##### `applyImmediatelyInput`<sup>Optional</sup> <a name="applyImmediatelyInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.applyImmediatelyInput"></a>

```typescript
public readonly applyImmediatelyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authenticationStrategyInput`<sup>Optional</sup> <a name="authenticationStrategyInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.authenticationStrategyInput"></a>

```typescript
public readonly authenticationStrategyInput: string;
```

- *Type:* string

---

##### `autoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="autoMinorVersionUpgradeInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.autoMinorVersionUpgradeInput"></a>

```typescript
public readonly autoMinorVersionUpgradeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `brokerNameInput`<sup>Optional</sup> <a name="brokerNameInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.brokerNameInput"></a>

```typescript
public readonly brokerNameInput: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.configurationInput"></a>

```typescript
public readonly configurationInput: MqBrokerConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

---

##### `deploymentModeInput`<sup>Optional</sup> <a name="deploymentModeInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.deploymentModeInput"></a>

```typescript
public readonly deploymentModeInput: string;
```

- *Type:* string

---

##### `encryptionOptionsInput`<sup>Optional</sup> <a name="encryptionOptionsInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.encryptionOptionsInput"></a>

```typescript
public readonly encryptionOptionsInput: MqBrokerEncryptionOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

---

##### `engineTypeInput`<sup>Optional</sup> <a name="engineTypeInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.engineTypeInput"></a>

```typescript
public readonly engineTypeInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `hostInstanceTypeInput`<sup>Optional</sup> <a name="hostInstanceTypeInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.hostInstanceTypeInput"></a>

```typescript
public readonly hostInstanceTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ldapServerMetadataInput`<sup>Optional</sup> <a name="ldapServerMetadataInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.ldapServerMetadataInput"></a>

```typescript
public readonly ldapServerMetadataInput: MqBrokerLdapServerMetadata;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

---

##### `logsInput`<sup>Optional</sup> <a name="logsInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.logsInput"></a>

```typescript
public readonly logsInput: MqBrokerLogs;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

---

##### `maintenanceWindowStartTimeInput`<sup>Optional</sup> <a name="maintenanceWindowStartTimeInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.maintenanceWindowStartTimeInput"></a>

```typescript
public readonly maintenanceWindowStartTimeInput: MqBrokerMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.publiclyAccessibleInput"></a>

```typescript
public readonly publiclyAccessibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.userInput"></a>

```typescript
public readonly userInput: IResolvable | MqBrokerUser[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUser">MqBrokerUser</a>[]

---

##### `applyImmediately`<sup>Required</sup> <a name="applyImmediately" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.applyImmediately"></a>

```typescript
public readonly applyImmediately: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authenticationStrategy`<sup>Required</sup> <a name="authenticationStrategy" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.authenticationStrategy"></a>

```typescript
public readonly authenticationStrategy: string;
```

- *Type:* string

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `brokerName`<sup>Required</sup> <a name="brokerName" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.brokerName"></a>

```typescript
public readonly brokerName: string;
```

- *Type:* string

---

##### `deploymentMode`<sup>Required</sup> <a name="deploymentMode" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.deploymentMode"></a>

```typescript
public readonly deploymentMode: string;
```

- *Type:* string

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.engineType"></a>

```typescript
public readonly engineType: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `hostInstanceType`<sup>Required</sup> <a name="hostInstanceType" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.hostInstanceType"></a>

```typescript
public readonly hostInstanceType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBroker.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.mqBroker.MqBroker.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MqBrokerConfig <a name="MqBrokerConfig" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.Initializer"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

const mqBrokerConfig: mqBroker.MqBrokerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.brokerName">brokerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#broker_name MqBroker#broker_name}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.engineType">engineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#engine_type MqBroker#engine_type}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#engine_version MqBroker#engine_version}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.hostInstanceType">hostInstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#host_instance_type MqBroker#host_instance_type}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.user">user</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUser">MqBrokerUser</a>[]</code> | user block. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.applyImmediately">applyImmediately</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#apply_immediately MqBroker#apply_immediately}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.authenticationStrategy">authenticationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#authentication_strategy MqBroker#authentication_strategy}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.deploymentMode">deploymentMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#deployment_mode MqBroker#deployment_mode}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.encryptionOptions">encryptionOptions</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a></code> | encryption_options block. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#id MqBroker#id}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.ldapServerMetadata">ldapServerMetadata</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a></code> | ldap_server_metadata block. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.logs">logs</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogs">MqBrokerLogs</a></code> | logs block. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.maintenanceWindowStartTime">maintenanceWindowStartTime</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a></code> | maintenance_window_start_time block. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#publicly_accessible MqBroker#publicly_accessible}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#security_groups MqBroker#security_groups}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.storageType">storageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#storage_type MqBroker#storage_type}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#subnet_ids MqBroker#subnet_ids}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#tags MqBroker#tags}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#tags_all MqBroker#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `brokerName`<sup>Required</sup> <a name="brokerName" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.brokerName"></a>

```typescript
public readonly brokerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#broker_name MqBroker#broker_name}.

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.engineType"></a>

```typescript
public readonly engineType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#engine_type MqBroker#engine_type}.

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#engine_version MqBroker#engine_version}.

---

##### `hostInstanceType`<sup>Required</sup> <a name="hostInstanceType" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.hostInstanceType"></a>

```typescript
public readonly hostInstanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#host_instance_type MqBroker#host_instance_type}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.user"></a>

```typescript
public readonly user: IResolvable | MqBrokerUser[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUser">MqBrokerUser</a>[]

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#user MqBroker#user}

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.applyImmediately"></a>

```typescript
public readonly applyImmediately: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#apply_immediately MqBroker#apply_immediately}.

---

##### `authenticationStrategy`<sup>Optional</sup> <a name="authenticationStrategy" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.authenticationStrategy"></a>

```typescript
public readonly authenticationStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#authentication_strategy MqBroker#authentication_strategy}.

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.configuration"></a>

```typescript
public readonly configuration: MqBrokerConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#configuration MqBroker#configuration}

---

##### `deploymentMode`<sup>Optional</sup> <a name="deploymentMode" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.deploymentMode"></a>

```typescript
public readonly deploymentMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#deployment_mode MqBroker#deployment_mode}.

---

##### `encryptionOptions`<sup>Optional</sup> <a name="encryptionOptions" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.encryptionOptions"></a>

```typescript
public readonly encryptionOptions: MqBrokerEncryptionOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

encryption_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#encryption_options MqBroker#encryption_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#id MqBroker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ldapServerMetadata`<sup>Optional</sup> <a name="ldapServerMetadata" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.ldapServerMetadata"></a>

```typescript
public readonly ldapServerMetadata: MqBrokerLdapServerMetadata;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

ldap_server_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#ldap_server_metadata MqBroker#ldap_server_metadata}

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.logs"></a>

```typescript
public readonly logs: MqBrokerLogs;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#logs MqBroker#logs}

---

##### `maintenanceWindowStartTime`<sup>Optional</sup> <a name="maintenanceWindowStartTime" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.maintenanceWindowStartTime"></a>

```typescript
public readonly maintenanceWindowStartTime: MqBrokerMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

maintenance_window_start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#maintenance_window_start_time MqBroker#maintenance_window_start_time}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#publicly_accessible MqBroker#publicly_accessible}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#security_groups MqBroker#security_groups}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#storage_type MqBroker#storage_type}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#subnet_ids MqBroker#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#tags MqBroker#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#tags_all MqBroker#tags_all}.

---

### MqBrokerConfiguration <a name="MqBrokerConfiguration" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfiguration.Initializer"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

const mqBrokerConfiguration: mqBroker.MqBrokerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfiguration.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#id MqBroker#id}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfiguration.property.revision">revision</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#revision MqBroker#revision}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#id MqBroker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfiguration.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#revision MqBroker#revision}.

---

### MqBrokerEncryptionOptions <a name="MqBrokerEncryptionOptions" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptions.Initializer"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

const mqBrokerEncryptionOptions: mqBroker.MqBrokerEncryptionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptions.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#kms_key_id MqBroker#kms_key_id}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptions.property.useAwsOwnedKey">useAwsOwnedKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#use_aws_owned_key MqBroker#use_aws_owned_key}. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptions.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#kms_key_id MqBroker#kms_key_id}.

---

##### `useAwsOwnedKey`<sup>Optional</sup> <a name="useAwsOwnedKey" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptions.property.useAwsOwnedKey"></a>

```typescript
public readonly useAwsOwnedKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#use_aws_owned_key MqBroker#use_aws_owned_key}.

---

### MqBrokerInstances <a name="MqBrokerInstances" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstances.Initializer"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

const mqBrokerInstances: mqBroker.MqBrokerInstances = { ... }
```


### MqBrokerLdapServerMetadata <a name="MqBrokerLdapServerMetadata" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.Initializer"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

const mqBrokerLdapServerMetadata: mqBroker.MqBrokerLdapServerMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.hosts">hosts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#hosts MqBroker#hosts}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.roleBase">roleBase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#role_base MqBroker#role_base}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.roleName">roleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#role_name MqBroker#role_name}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchMatching">roleSearchMatching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#role_search_matching MqBroker#role_search_matching}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchSubtree">roleSearchSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#role_search_subtree MqBroker#role_search_subtree}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountPassword">serviceAccountPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#service_account_password MqBroker#service_account_password}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountUsername">serviceAccountUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#service_account_username MqBroker#service_account_username}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.userBase">userBase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#user_base MqBroker#user_base}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.userRoleName">userRoleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#user_role_name MqBroker#user_role_name}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.userSearchMatching">userSearchMatching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#user_search_matching MqBroker#user_search_matching}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.userSearchSubtree">userSearchSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#user_search_subtree MqBroker#user_search_subtree}. |

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#hosts MqBroker#hosts}.

---

##### `roleBase`<sup>Optional</sup> <a name="roleBase" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.roleBase"></a>

```typescript
public readonly roleBase: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#role_base MqBroker#role_base}.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#role_name MqBroker#role_name}.

---

##### `roleSearchMatching`<sup>Optional</sup> <a name="roleSearchMatching" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchMatching"></a>

```typescript
public readonly roleSearchMatching: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#role_search_matching MqBroker#role_search_matching}.

---

##### `roleSearchSubtree`<sup>Optional</sup> <a name="roleSearchSubtree" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchSubtree"></a>

```typescript
public readonly roleSearchSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#role_search_subtree MqBroker#role_search_subtree}.

---

##### `serviceAccountPassword`<sup>Optional</sup> <a name="serviceAccountPassword" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountPassword"></a>

```typescript
public readonly serviceAccountPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#service_account_password MqBroker#service_account_password}.

---

##### `serviceAccountUsername`<sup>Optional</sup> <a name="serviceAccountUsername" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountUsername"></a>

```typescript
public readonly serviceAccountUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#service_account_username MqBroker#service_account_username}.

---

##### `userBase`<sup>Optional</sup> <a name="userBase" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.userBase"></a>

```typescript
public readonly userBase: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#user_base MqBroker#user_base}.

---

##### `userRoleName`<sup>Optional</sup> <a name="userRoleName" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.userRoleName"></a>

```typescript
public readonly userRoleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#user_role_name MqBroker#user_role_name}.

---

##### `userSearchMatching`<sup>Optional</sup> <a name="userSearchMatching" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.userSearchMatching"></a>

```typescript
public readonly userSearchMatching: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#user_search_matching MqBroker#user_search_matching}.

---

##### `userSearchSubtree`<sup>Optional</sup> <a name="userSearchSubtree" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata.property.userSearchSubtree"></a>

```typescript
public readonly userSearchSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#user_search_subtree MqBroker#user_search_subtree}.

---

### MqBrokerLogs <a name="MqBrokerLogs" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogs.Initializer"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

const mqBrokerLogs: mqBroker.MqBrokerLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogs.property.audit">audit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#audit MqBroker#audit}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogs.property.general">general</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#general MqBroker#general}. |

---

##### `audit`<sup>Optional</sup> <a name="audit" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogs.property.audit"></a>

```typescript
public readonly audit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#audit MqBroker#audit}.

---

##### `general`<sup>Optional</sup> <a name="general" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogs.property.general"></a>

```typescript
public readonly general: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#general MqBroker#general}.

---

### MqBrokerMaintenanceWindowStartTime <a name="MqBrokerMaintenanceWindowStartTime" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTime.Initializer"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

const mqBrokerMaintenanceWindowStartTime: mqBroker.MqBrokerMaintenanceWindowStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTime.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#day_of_week MqBroker#day_of_week}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeOfDay">timeOfDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#time_of_day MqBroker#time_of_day}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#time_zone MqBroker#time_zone}. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTime.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#day_of_week MqBroker#day_of_week}.

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeOfDay"></a>

```typescript
public readonly timeOfDay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#time_of_day MqBroker#time_of_day}.

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#time_zone MqBroker#time_zone}.

---

### MqBrokerUser <a name="MqBrokerUser" id="@cdktf/aws-cdk.mqBroker.MqBrokerUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.mqBroker.MqBrokerUser.Initializer"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

const mqBrokerUser: mqBroker.MqBrokerUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUser.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#password MqBroker#password}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUser.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#username MqBroker#username}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUser.property.consoleAccess">consoleAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#console_access MqBroker#console_access}. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUser.property.groups">groups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#groups MqBroker#groups}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/aws-cdk.mqBroker.MqBrokerUser.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#password MqBroker#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/aws-cdk.mqBroker.MqBrokerUser.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#username MqBroker#username}.

---

##### `consoleAccess`<sup>Optional</sup> <a name="consoleAccess" id="@cdktf/aws-cdk.mqBroker.MqBrokerUser.property.consoleAccess"></a>

```typescript
public readonly consoleAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#console_access MqBroker#console_access}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/aws-cdk.mqBroker.MqBrokerUser.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mq_broker#groups MqBroker#groups}.

---

## Classes <a name="Classes" id="Classes"></a>

### MqBrokerConfigurationOutputReference <a name="MqBrokerConfigurationOutputReference" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.Initializer"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

new mqBroker.MqBrokerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.resetRevision">resetRevision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRevision` <a name="resetRevision" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.resetRevision"></a>

```typescript
public resetRevision(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.property.revisionInput">revisionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.property.revision">revision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.property.revisionInput"></a>

```typescript
public readonly revisionInput: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.mqBroker.MqBrokerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MqBrokerConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

---


### MqBrokerEncryptionOptionsOutputReference <a name="MqBrokerEncryptionOptionsOutputReference" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

new mqBroker.MqBrokerEncryptionOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetUseAwsOwnedKey">resetUseAwsOwnedKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetUseAwsOwnedKey` <a name="resetUseAwsOwnedKey" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetUseAwsOwnedKey"></a>

```typescript
public resetUseAwsOwnedKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKeyInput">useAwsOwnedKeyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKey">useAwsOwnedKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `useAwsOwnedKeyInput`<sup>Optional</sup> <a name="useAwsOwnedKeyInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKeyInput"></a>

```typescript
public readonly useAwsOwnedKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `useAwsOwnedKey`<sup>Required</sup> <a name="useAwsOwnedKey" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKey"></a>

```typescript
public readonly useAwsOwnedKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MqBrokerEncryptionOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

---


### MqBrokerInstancesList <a name="MqBrokerInstancesList" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.Initializer"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

new mqBroker.MqBrokerInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.get"></a>

```typescript
public get(index: number): MqBrokerInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MqBrokerInstancesOutputReference <a name="MqBrokerInstancesOutputReference" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.Initializer"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

new mqBroker.MqBrokerInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.property.consoleUrl">consoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.property.endpoints">endpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstances">MqBrokerInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consoleUrl`<sup>Required</sup> <a name="consoleUrl" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.property.consoleUrl"></a>

```typescript
public readonly consoleUrl: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.property.endpoints"></a>

```typescript
public readonly endpoints: string[];
```

- *Type:* string[]

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.mqBroker.MqBrokerInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MqBrokerInstances;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerInstances">MqBrokerInstances</a>

---


### MqBrokerLdapServerMetadataOutputReference <a name="MqBrokerLdapServerMetadataOutputReference" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

new mqBroker.MqBrokerLdapServerMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleBase">resetRoleBase</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleName">resetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchMatching">resetRoleSearchMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchSubtree">resetRoleSearchSubtree</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountPassword">resetServiceAccountPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountUsername">resetServiceAccountUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserBase">resetUserBase</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserRoleName">resetUserRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchMatching">resetUserSearchMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchSubtree">resetUserSearchSubtree</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHosts` <a name="resetHosts" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetHosts"></a>

```typescript
public resetHosts(): void
```

##### `resetRoleBase` <a name="resetRoleBase" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleBase"></a>

```typescript
public resetRoleBase(): void
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleName"></a>

```typescript
public resetRoleName(): void
```

##### `resetRoleSearchMatching` <a name="resetRoleSearchMatching" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchMatching"></a>

```typescript
public resetRoleSearchMatching(): void
```

##### `resetRoleSearchSubtree` <a name="resetRoleSearchSubtree" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchSubtree"></a>

```typescript
public resetRoleSearchSubtree(): void
```

##### `resetServiceAccountPassword` <a name="resetServiceAccountPassword" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountPassword"></a>

```typescript
public resetServiceAccountPassword(): void
```

##### `resetServiceAccountUsername` <a name="resetServiceAccountUsername" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountUsername"></a>

```typescript
public resetServiceAccountUsername(): void
```

##### `resetUserBase` <a name="resetUserBase" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserBase"></a>

```typescript
public resetUserBase(): void
```

##### `resetUserRoleName` <a name="resetUserRoleName" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserRoleName"></a>

```typescript
public resetUserRoleName(): void
```

##### `resetUserSearchMatching` <a name="resetUserSearchMatching" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchMatching"></a>

```typescript
public resetUserSearchMatching(): void
```

##### `resetUserSearchSubtree` <a name="resetUserSearchSubtree" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchSubtree"></a>

```typescript
public resetUserSearchSubtree(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hostsInput">hostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBaseInput">roleBaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatchingInput">roleSearchMatchingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtreeInput">roleSearchSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPasswordInput">serviceAccountPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsernameInput">serviceAccountUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBaseInput">userBaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleNameInput">userRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatchingInput">userSearchMatchingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtreeInput">userSearchSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBase">roleBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatching">roleSearchMatching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtree">roleSearchSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPassword">serviceAccountPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsername">serviceAccountUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBase">userBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleName">userRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatching">userSearchMatching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtree">userSearchSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hostsInput"></a>

```typescript
public readonly hostsInput: string[];
```

- *Type:* string[]

---

##### `roleBaseInput`<sup>Optional</sup> <a name="roleBaseInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBaseInput"></a>

```typescript
public readonly roleBaseInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `roleSearchMatchingInput`<sup>Optional</sup> <a name="roleSearchMatchingInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatchingInput"></a>

```typescript
public readonly roleSearchMatchingInput: string;
```

- *Type:* string

---

##### `roleSearchSubtreeInput`<sup>Optional</sup> <a name="roleSearchSubtreeInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtreeInput"></a>

```typescript
public readonly roleSearchSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceAccountPasswordInput`<sup>Optional</sup> <a name="serviceAccountPasswordInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPasswordInput"></a>

```typescript
public readonly serviceAccountPasswordInput: string;
```

- *Type:* string

---

##### `serviceAccountUsernameInput`<sup>Optional</sup> <a name="serviceAccountUsernameInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsernameInput"></a>

```typescript
public readonly serviceAccountUsernameInput: string;
```

- *Type:* string

---

##### `userBaseInput`<sup>Optional</sup> <a name="userBaseInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBaseInput"></a>

```typescript
public readonly userBaseInput: string;
```

- *Type:* string

---

##### `userRoleNameInput`<sup>Optional</sup> <a name="userRoleNameInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleNameInput"></a>

```typescript
public readonly userRoleNameInput: string;
```

- *Type:* string

---

##### `userSearchMatchingInput`<sup>Optional</sup> <a name="userSearchMatchingInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatchingInput"></a>

```typescript
public readonly userSearchMatchingInput: string;
```

- *Type:* string

---

##### `userSearchSubtreeInput`<sup>Optional</sup> <a name="userSearchSubtreeInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtreeInput"></a>

```typescript
public readonly userSearchSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `roleBase`<sup>Required</sup> <a name="roleBase" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBase"></a>

```typescript
public readonly roleBase: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `roleSearchMatching`<sup>Required</sup> <a name="roleSearchMatching" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatching"></a>

```typescript
public readonly roleSearchMatching: string;
```

- *Type:* string

---

##### `roleSearchSubtree`<sup>Required</sup> <a name="roleSearchSubtree" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtree"></a>

```typescript
public readonly roleSearchSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceAccountPassword`<sup>Required</sup> <a name="serviceAccountPassword" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPassword"></a>

```typescript
public readonly serviceAccountPassword: string;
```

- *Type:* string

---

##### `serviceAccountUsername`<sup>Required</sup> <a name="serviceAccountUsername" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsername"></a>

```typescript
public readonly serviceAccountUsername: string;
```

- *Type:* string

---

##### `userBase`<sup>Required</sup> <a name="userBase" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBase"></a>

```typescript
public readonly userBase: string;
```

- *Type:* string

---

##### `userRoleName`<sup>Required</sup> <a name="userRoleName" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleName"></a>

```typescript
public readonly userRoleName: string;
```

- *Type:* string

---

##### `userSearchMatching`<sup>Required</sup> <a name="userSearchMatching" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatching"></a>

```typescript
public readonly userSearchMatching: string;
```

- *Type:* string

---

##### `userSearchSubtree`<sup>Required</sup> <a name="userSearchSubtree" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtree"></a>

```typescript
public readonly userSearchSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MqBrokerLdapServerMetadata;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

---


### MqBrokerLogsOutputReference <a name="MqBrokerLogsOutputReference" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.Initializer"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

new mqBroker.MqBrokerLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.resetAudit">resetAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.resetGeneral">resetGeneral</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudit` <a name="resetAudit" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.resetAudit"></a>

```typescript
public resetAudit(): void
```

##### `resetGeneral` <a name="resetGeneral" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.resetGeneral"></a>

```typescript
public resetGeneral(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.property.auditInput">auditInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.property.generalInput">generalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.property.audit">audit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.property.general">general</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogs">MqBrokerLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditInput`<sup>Optional</sup> <a name="auditInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.property.auditInput"></a>

```typescript
public readonly auditInput: string;
```

- *Type:* string

---

##### `generalInput`<sup>Optional</sup> <a name="generalInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.property.generalInput"></a>

```typescript
public readonly generalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `audit`<sup>Required</sup> <a name="audit" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.property.audit"></a>

```typescript
public readonly audit: string;
```

- *Type:* string

---

##### `general`<sup>Required</sup> <a name="general" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.property.general"></a>

```typescript
public readonly general: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.mqBroker.MqBrokerLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MqBrokerLogs;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

---


### MqBrokerMaintenanceWindowStartTimeOutputReference <a name="MqBrokerMaintenanceWindowStartTimeOutputReference" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

new mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDayInput">timeOfDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `timeOfDayInput`<sup>Optional</sup> <a name="timeOfDayInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDayInput"></a>

```typescript
public readonly timeOfDayInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDay"></a>

```typescript
public readonly timeOfDay: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MqBrokerMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

---


### MqBrokerUserList <a name="MqBrokerUserList" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserList.Initializer"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

new mqBroker.MqBrokerUserList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserList.get"></a>

```typescript
public get(index: number): MqBrokerUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUser">MqBrokerUser</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MqBrokerUser[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUser">MqBrokerUser</a>[]

---


### MqBrokerUserOutputReference <a name="MqBrokerUserOutputReference" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.Initializer"></a>

```typescript
import { mqBroker } from '@cdktf/aws-cdk'

new mqBroker.MqBrokerUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.resetConsoleAccess">resetConsoleAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.resetGroups">resetGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsoleAccess` <a name="resetConsoleAccess" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.resetConsoleAccess"></a>

```typescript
public resetConsoleAccess(): void
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.resetGroups"></a>

```typescript
public resetGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.consoleAccessInput">consoleAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.consoleAccess">consoleAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUser">MqBrokerUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consoleAccessInput`<sup>Optional</sup> <a name="consoleAccessInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.consoleAccessInput"></a>

```typescript
public readonly consoleAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `consoleAccess`<sup>Required</sup> <a name="consoleAccess" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.consoleAccess"></a>

```typescript
public readonly consoleAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.mqBroker.MqBrokerUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MqBrokerUser;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.mqBroker.MqBrokerUser">MqBrokerUser</a>

---




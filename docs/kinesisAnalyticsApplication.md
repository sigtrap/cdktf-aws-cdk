# `kinesisAnalyticsApplication` Submodule <a name="`kinesisAnalyticsApplication` Submodule" id="@cdktf/aws-cdk.kinesisAnalyticsApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisAnalyticsApplication <a name="KinesisAnalyticsApplication" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application aws_kinesis_analytics_application}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplication(scope: Construct, id: string, config: KinesisAnalyticsApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig">KinesisAnalyticsApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig">KinesisAnalyticsApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putCloudwatchLoggingOptions">putCloudwatchLoggingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putInputs">putInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putOutputs">putOutputs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putReferenceDataSources">putReferenceDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetCloudwatchLoggingOptions">resetCloudwatchLoggingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetInputs">resetInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetOutputs">resetOutputs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetReferenceDataSources">resetReferenceDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetStartApplication">resetStartApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudwatchLoggingOptions` <a name="putCloudwatchLoggingOptions" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putCloudwatchLoggingOptions"></a>

```typescript
public putCloudwatchLoggingOptions(value: KinesisAnalyticsApplicationCloudwatchLoggingOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putCloudwatchLoggingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a>

---

##### `putInputs` <a name="putInputs" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putInputs"></a>

```typescript
public putInputs(value: KinesisAnalyticsApplicationInputs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putInputs.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a>

---

##### `putOutputs` <a name="putOutputs" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putOutputs"></a>

```typescript
public putOutputs(value: IResolvable | KinesisAnalyticsApplicationOutputs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putOutputs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a>[]

---

##### `putReferenceDataSources` <a name="putReferenceDataSources" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putReferenceDataSources"></a>

```typescript
public putReferenceDataSources(value: KinesisAnalyticsApplicationReferenceDataSources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putReferenceDataSources.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a>

---

##### `resetCloudwatchLoggingOptions` <a name="resetCloudwatchLoggingOptions" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetCloudwatchLoggingOptions"></a>

```typescript
public resetCloudwatchLoggingOptions(): void
```

##### `resetCode` <a name="resetCode" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetCode"></a>

```typescript
public resetCode(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInputs` <a name="resetInputs" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetInputs"></a>

```typescript
public resetInputs(): void
```

##### `resetOutputs` <a name="resetOutputs" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetOutputs"></a>

```typescript
public resetOutputs(): void
```

##### `resetReferenceDataSources` <a name="resetReferenceDataSources" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetReferenceDataSources"></a>

```typescript
public resetReferenceDataSources(): void
```

##### `resetStartApplication` <a name="resetStartApplication" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetStartApplication"></a>

```typescript
public resetStartApplication(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KinesisAnalyticsApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isConstruct"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

kinesisAnalyticsApplication.KinesisAnalyticsApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformElement"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformResource"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.generateConfigForImport"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

kinesisAnalyticsApplication.KinesisAnalyticsApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KinesisAnalyticsApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KinesisAnalyticsApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KinesisAnalyticsApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KinesisAnalyticsApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.cloudwatchLoggingOptions">cloudwatchLoggingOptions</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference">KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.createTimestamp">createTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.inputs">inputs</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference">KinesisAnalyticsApplicationInputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.lastUpdateTimestamp">lastUpdateTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.outputs">outputs</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList">KinesisAnalyticsApplicationOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.referenceDataSources">referenceDataSources</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.cloudwatchLoggingOptionsInput">cloudwatchLoggingOptionsInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.codeInput">codeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.inputsInput">inputsInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.outputsInput">outputsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.referenceDataSourcesInput">referenceDataSourcesInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.startApplicationInput">startApplicationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.startApplication">startApplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cloudwatchLoggingOptions`<sup>Required</sup> <a name="cloudwatchLoggingOptions" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.cloudwatchLoggingOptions"></a>

```typescript
public readonly cloudwatchLoggingOptions: KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference">KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference</a>

---

##### `createTimestamp`<sup>Required</sup> <a name="createTimestamp" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.createTimestamp"></a>

```typescript
public readonly createTimestamp: string;
```

- *Type:* string

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.inputs"></a>

```typescript
public readonly inputs: KinesisAnalyticsApplicationInputsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference">KinesisAnalyticsApplicationInputsOutputReference</a>

---

##### `lastUpdateTimestamp`<sup>Required</sup> <a name="lastUpdateTimestamp" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.lastUpdateTimestamp"></a>

```typescript
public readonly lastUpdateTimestamp: string;
```

- *Type:* string

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.outputs"></a>

```typescript
public readonly outputs: KinesisAnalyticsApplicationOutputsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList">KinesisAnalyticsApplicationOutputsList</a>

---

##### `referenceDataSources`<sup>Required</sup> <a name="referenceDataSources" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.referenceDataSources"></a>

```typescript
public readonly referenceDataSources: KinesisAnalyticsApplicationReferenceDataSourcesOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `cloudwatchLoggingOptionsInput`<sup>Optional</sup> <a name="cloudwatchLoggingOptionsInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.cloudwatchLoggingOptionsInput"></a>

```typescript
public readonly cloudwatchLoggingOptionsInput: KinesisAnalyticsApplicationCloudwatchLoggingOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a>

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.codeInput"></a>

```typescript
public readonly codeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputsInput`<sup>Optional</sup> <a name="inputsInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.inputsInput"></a>

```typescript
public readonly inputsInput: KinesisAnalyticsApplicationInputs;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputsInput`<sup>Optional</sup> <a name="outputsInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.outputsInput"></a>

```typescript
public readonly outputsInput: IResolvable | KinesisAnalyticsApplicationOutputs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a>[]

---

##### `referenceDataSourcesInput`<sup>Optional</sup> <a name="referenceDataSourcesInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.referenceDataSourcesInput"></a>

```typescript
public readonly referenceDataSourcesInput: KinesisAnalyticsApplicationReferenceDataSources;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a>

---

##### `startApplicationInput`<sup>Optional</sup> <a name="startApplicationInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.startApplicationInput"></a>

```typescript
public readonly startApplicationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startApplication`<sup>Required</sup> <a name="startApplication" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.startApplication"></a>

```typescript
public readonly startApplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisAnalyticsApplicationCloudwatchLoggingOptions <a name="KinesisAnalyticsApplicationCloudwatchLoggingOptions" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationCloudwatchLoggingOptions: kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions.property.logStreamArn">logStreamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#log_stream_arn KinesisAnalyticsApplication#log_stream_arn}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `logStreamArn`<sup>Required</sup> <a name="logStreamArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions.property.logStreamArn"></a>

```typescript
public readonly logStreamArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#log_stream_arn KinesisAnalyticsApplication#log_stream_arn}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationConfig <a name="KinesisAnalyticsApplicationConfig" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationConfig: kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#name KinesisAnalyticsApplication#name}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.cloudwatchLoggingOptions">cloudwatchLoggingOptions</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a></code> | cloudwatch_logging_options block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.code">code</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#code KinesisAnalyticsApplication#code}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#description KinesisAnalyticsApplication#description}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#id KinesisAnalyticsApplication#id}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.inputs">inputs</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a></code> | inputs block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.outputs">outputs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a>[]</code> | outputs block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.referenceDataSources">referenceDataSources</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a></code> | reference_data_sources block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.startApplication">startApplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#start_application KinesisAnalyticsApplication#start_application}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#tags KinesisAnalyticsApplication#tags}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#tags_all KinesisAnalyticsApplication#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#name KinesisAnalyticsApplication#name}.

---

##### `cloudwatchLoggingOptions`<sup>Optional</sup> <a name="cloudwatchLoggingOptions" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.cloudwatchLoggingOptions"></a>

```typescript
public readonly cloudwatchLoggingOptions: KinesisAnalyticsApplicationCloudwatchLoggingOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a>

cloudwatch_logging_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#cloudwatch_logging_options KinesisAnalyticsApplication#cloudwatch_logging_options}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#code KinesisAnalyticsApplication#code}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#description KinesisAnalyticsApplication#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#id KinesisAnalyticsApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.inputs"></a>

```typescript
public readonly inputs: KinesisAnalyticsApplicationInputs;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a>

inputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#inputs KinesisAnalyticsApplication#inputs}

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.outputs"></a>

```typescript
public readonly outputs: IResolvable | KinesisAnalyticsApplicationOutputs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a>[]

outputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#outputs KinesisAnalyticsApplication#outputs}

---

##### `referenceDataSources`<sup>Optional</sup> <a name="referenceDataSources" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.referenceDataSources"></a>

```typescript
public readonly referenceDataSources: KinesisAnalyticsApplicationReferenceDataSources;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a>

reference_data_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#reference_data_sources KinesisAnalyticsApplication#reference_data_sources}

---

##### `startApplication`<sup>Optional</sup> <a name="startApplication" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.startApplication"></a>

```typescript
public readonly startApplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#start_application KinesisAnalyticsApplication#start_application}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#tags KinesisAnalyticsApplication#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#tags_all KinesisAnalyticsApplication#tags_all}.

---

### KinesisAnalyticsApplicationInputs <a name="KinesisAnalyticsApplicationInputs" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationInputs: kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#name_prefix KinesisAnalyticsApplication#name_prefix}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.schema">schema</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a></code> | schema block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.kinesisFirehose">kinesisFirehose</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a></code> | kinesis_firehose block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.kinesisStream">kinesisStream</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a></code> | kinesis_stream block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.parallelism">parallelism</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a></code> | parallelism block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.processingConfiguration">processingConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a></code> | processing_configuration block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.startingPositionConfiguration">startingPositionConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration">KinesisAnalyticsApplicationInputsStartingPositionConfiguration</a>[]</code> | starting_position_configuration block. |

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#name_prefix KinesisAnalyticsApplication#name_prefix}.

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.schema"></a>

```typescript
public readonly schema: KinesisAnalyticsApplicationInputsSchema;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#schema KinesisAnalyticsApplication#schema}

---

##### `kinesisFirehose`<sup>Optional</sup> <a name="kinesisFirehose" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.kinesisFirehose"></a>

```typescript
public readonly kinesisFirehose: KinesisAnalyticsApplicationInputsKinesisFirehose;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a>

kinesis_firehose block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#kinesis_firehose KinesisAnalyticsApplication#kinesis_firehose}

---

##### `kinesisStream`<sup>Optional</sup> <a name="kinesisStream" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.kinesisStream"></a>

```typescript
public readonly kinesisStream: KinesisAnalyticsApplicationInputsKinesisStream;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a>

kinesis_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.parallelism"></a>

```typescript
public readonly parallelism: KinesisAnalyticsApplicationInputsParallelism;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a>

parallelism block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#parallelism KinesisAnalyticsApplication#parallelism}

---

##### `processingConfiguration`<sup>Optional</sup> <a name="processingConfiguration" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.processingConfiguration"></a>

```typescript
public readonly processingConfiguration: KinesisAnalyticsApplicationInputsProcessingConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a>

processing_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#processing_configuration KinesisAnalyticsApplication#processing_configuration}

---

##### `startingPositionConfiguration`<sup>Optional</sup> <a name="startingPositionConfiguration" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.startingPositionConfiguration"></a>

```typescript
public readonly startingPositionConfiguration: IResolvable | KinesisAnalyticsApplicationInputsStartingPositionConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration">KinesisAnalyticsApplicationInputsStartingPositionConfiguration</a>[]

starting_position_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#starting_position_configuration KinesisAnalyticsApplication#starting_position_configuration}

---

### KinesisAnalyticsApplicationInputsKinesisFirehose <a name="KinesisAnalyticsApplicationInputsKinesisFirehose" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationInputsKinesisFirehose: kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose.property.resourceArn">resourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationInputsKinesisStream <a name="KinesisAnalyticsApplicationInputsKinesisStream" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationInputsKinesisStream: kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream.property.resourceArn">resourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationInputsParallelism <a name="KinesisAnalyticsApplicationInputsParallelism" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationInputsParallelism: kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#count KinesisAnalyticsApplication#count}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#count KinesisAnalyticsApplication#count}.

---

### KinesisAnalyticsApplicationInputsProcessingConfiguration <a name="KinesisAnalyticsApplicationInputsProcessingConfiguration" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationInputsProcessingConfiguration: kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration.property.lambda">lambda</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a></code> | lambda block. |

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration.property.lambda"></a>

```typescript
public readonly lambda: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a>

lambda block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#lambda KinesisAnalyticsApplication#lambda}

---

### KinesisAnalyticsApplicationInputsProcessingConfigurationLambda <a name="KinesisAnalyticsApplicationInputsProcessingConfigurationLambda" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationInputsProcessingConfigurationLambda: kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda.property.resourceArn">resourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationInputsSchema <a name="KinesisAnalyticsApplicationInputsSchema" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationInputsSchema: kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.property.recordColumns">recordColumns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns">KinesisAnalyticsApplicationInputsSchemaRecordColumns</a>[]</code> | record_columns block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.property.recordFormat">recordFormat</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a></code> | record_format block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.property.recordEncoding">recordEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_encoding KinesisAnalyticsApplication#record_encoding}. |

---

##### `recordColumns`<sup>Required</sup> <a name="recordColumns" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.property.recordColumns"></a>

```typescript
public readonly recordColumns: IResolvable | KinesisAnalyticsApplicationInputsSchemaRecordColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns">KinesisAnalyticsApplicationInputsSchemaRecordColumns</a>[]

record_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_columns KinesisAnalyticsApplication#record_columns}

---

##### `recordFormat`<sup>Required</sup> <a name="recordFormat" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.property.recordFormat"></a>

```typescript
public readonly recordFormat: KinesisAnalyticsApplicationInputsSchemaRecordFormat;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a>

record_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_format KinesisAnalyticsApplication#record_format}

---

##### `recordEncoding`<sup>Optional</sup> <a name="recordEncoding" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.property.recordEncoding"></a>

```typescript
public readonly recordEncoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_encoding KinesisAnalyticsApplication#record_encoding}.

---

### KinesisAnalyticsApplicationInputsSchemaRecordColumns <a name="KinesisAnalyticsApplicationInputsSchemaRecordColumns" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationInputsSchemaRecordColumns: kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#name KinesisAnalyticsApplication#name}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.property.sqlType">sqlType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#sql_type KinesisAnalyticsApplication#sql_type}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.property.mapping">mapping</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#mapping KinesisAnalyticsApplication#mapping}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#name KinesisAnalyticsApplication#name}.

---

##### `sqlType`<sup>Required</sup> <a name="sqlType" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.property.sqlType"></a>

```typescript
public readonly sqlType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#sql_type KinesisAnalyticsApplication#sql_type}.

---

##### `mapping`<sup>Optional</sup> <a name="mapping" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.property.mapping"></a>

```typescript
public readonly mapping: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#mapping KinesisAnalyticsApplication#mapping}.

---

### KinesisAnalyticsApplicationInputsSchemaRecordFormat <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormat" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationInputsSchemaRecordFormat: kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat.property.mappingParameters">mappingParameters</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a></code> | mapping_parameters block. |

---

##### `mappingParameters`<sup>Optional</sup> <a name="mappingParameters" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat.property.mappingParameters"></a>

```typescript
public readonly mappingParameters: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a>

mapping_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}

---

### KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters: kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters.property.csv">csv</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a></code> | csv block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters.property.json">json</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a></code> | json block. |

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters.property.csv"></a>

```typescript
public readonly csv: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a>

csv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#csv KinesisAnalyticsApplication#csv}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters.property.json"></a>

```typescript
public readonly json: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#json KinesisAnalyticsApplication#json}

---

### KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv: kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv.property.recordColumnDelimiter">recordColumnDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv.property.recordRowDelimiter">recordRowDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}. |

---

##### `recordColumnDelimiter`<sup>Required</sup> <a name="recordColumnDelimiter" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv.property.recordColumnDelimiter"></a>

```typescript
public readonly recordColumnDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}.

---

##### `recordRowDelimiter`<sup>Required</sup> <a name="recordRowDelimiter" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv.property.recordRowDelimiter"></a>

```typescript
public readonly recordRowDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}.

---

### KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson: kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson.property.recordRowPath">recordRowPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_row_path KinesisAnalyticsApplication#record_row_path}. |

---

##### `recordRowPath`<sup>Required</sup> <a name="recordRowPath" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson.property.recordRowPath"></a>

```typescript
public readonly recordRowPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_row_path KinesisAnalyticsApplication#record_row_path}.

---

### KinesisAnalyticsApplicationInputsStartingPositionConfiguration <a name="KinesisAnalyticsApplicationInputsStartingPositionConfiguration" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationInputsStartingPositionConfiguration: kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration.property.startingPosition">startingPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#starting_position KinesisAnalyticsApplication#starting_position}. |

---

##### `startingPosition`<sup>Optional</sup> <a name="startingPosition" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration.property.startingPosition"></a>

```typescript
public readonly startingPosition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#starting_position KinesisAnalyticsApplication#starting_position}.

---

### KinesisAnalyticsApplicationOutputs <a name="KinesisAnalyticsApplicationOutputs" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationOutputs: kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#name KinesisAnalyticsApplication#name}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.schema">schema</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a></code> | schema block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.kinesisFirehose">kinesisFirehose</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a></code> | kinesis_firehose block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.kinesisStream">kinesisStream</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a></code> | kinesis_stream block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.lambda">lambda</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a></code> | lambda block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#name KinesisAnalyticsApplication#name}.

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.schema"></a>

```typescript
public readonly schema: KinesisAnalyticsApplicationOutputsSchema;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#schema KinesisAnalyticsApplication#schema}

---

##### `kinesisFirehose`<sup>Optional</sup> <a name="kinesisFirehose" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.kinesisFirehose"></a>

```typescript
public readonly kinesisFirehose: KinesisAnalyticsApplicationOutputsKinesisFirehose;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a>

kinesis_firehose block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#kinesis_firehose KinesisAnalyticsApplication#kinesis_firehose}

---

##### `kinesisStream`<sup>Optional</sup> <a name="kinesisStream" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.kinesisStream"></a>

```typescript
public readonly kinesisStream: KinesisAnalyticsApplicationOutputsKinesisStream;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a>

kinesis_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.lambda"></a>

```typescript
public readonly lambda: KinesisAnalyticsApplicationOutputsLambda;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a>

lambda block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#lambda KinesisAnalyticsApplication#lambda}

---

### KinesisAnalyticsApplicationOutputsKinesisFirehose <a name="KinesisAnalyticsApplicationOutputsKinesisFirehose" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationOutputsKinesisFirehose: kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose.property.resourceArn">resourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationOutputsKinesisStream <a name="KinesisAnalyticsApplicationOutputsKinesisStream" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationOutputsKinesisStream: kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream.property.resourceArn">resourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationOutputsLambda <a name="KinesisAnalyticsApplicationOutputsLambda" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationOutputsLambda: kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda.property.resourceArn">resourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationOutputsSchema <a name="KinesisAnalyticsApplicationOutputsSchema" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationOutputsSchema: kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema.property.recordFormatType">recordFormatType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_format_type KinesisAnalyticsApplication#record_format_type}. |

---

##### `recordFormatType`<sup>Required</sup> <a name="recordFormatType" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema.property.recordFormatType"></a>

```typescript
public readonly recordFormatType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_format_type KinesisAnalyticsApplication#record_format_type}.

---

### KinesisAnalyticsApplicationReferenceDataSources <a name="KinesisAnalyticsApplicationReferenceDataSources" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationReferenceDataSources: kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.property.s3">s3</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a></code> | s3 block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.property.schema">schema</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a></code> | schema block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#table_name KinesisAnalyticsApplication#table_name}. |

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.property.s3"></a>

```typescript
public readonly s3: KinesisAnalyticsApplicationReferenceDataSourcesS3;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#s3 KinesisAnalyticsApplication#s3}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.property.schema"></a>

```typescript
public readonly schema: KinesisAnalyticsApplicationReferenceDataSourcesSchema;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#schema KinesisAnalyticsApplication#schema}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#table_name KinesisAnalyticsApplication#table_name}.

---

### KinesisAnalyticsApplicationReferenceDataSourcesS3 <a name="KinesisAnalyticsApplicationReferenceDataSourcesS3" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationReferenceDataSourcesS3: kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.property.bucketArn">bucketArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#bucket_arn KinesisAnalyticsApplication#bucket_arn}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.property.fileKey">fileKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#file_key KinesisAnalyticsApplication#file_key}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#bucket_arn KinesisAnalyticsApplication#bucket_arn}.

---

##### `fileKey`<sup>Required</sup> <a name="fileKey" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.property.fileKey"></a>

```typescript
public readonly fileKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#file_key KinesisAnalyticsApplication#file_key}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationReferenceDataSourcesSchema <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchema" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationReferenceDataSourcesSchema: kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.property.recordColumns">recordColumns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns</a>[]</code> | record_columns block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.property.recordFormat">recordFormat</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a></code> | record_format block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.property.recordEncoding">recordEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_encoding KinesisAnalyticsApplication#record_encoding}. |

---

##### `recordColumns`<sup>Required</sup> <a name="recordColumns" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.property.recordColumns"></a>

```typescript
public readonly recordColumns: IResolvable | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns</a>[]

record_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_columns KinesisAnalyticsApplication#record_columns}

---

##### `recordFormat`<sup>Required</sup> <a name="recordFormat" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.property.recordFormat"></a>

```typescript
public readonly recordFormat: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a>

record_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_format KinesisAnalyticsApplication#record_format}

---

##### `recordEncoding`<sup>Optional</sup> <a name="recordEncoding" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.property.recordEncoding"></a>

```typescript
public readonly recordEncoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_encoding KinesisAnalyticsApplication#record_encoding}.

---

### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns: kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#name KinesisAnalyticsApplication#name}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.property.sqlType">sqlType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#sql_type KinesisAnalyticsApplication#sql_type}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.property.mapping">mapping</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#mapping KinesisAnalyticsApplication#mapping}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#name KinesisAnalyticsApplication#name}.

---

##### `sqlType`<sup>Required</sup> <a name="sqlType" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.property.sqlType"></a>

```typescript
public readonly sqlType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#sql_type KinesisAnalyticsApplication#sql_type}.

---

##### `mapping`<sup>Optional</sup> <a name="mapping" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.property.mapping"></a>

```typescript
public readonly mapping: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#mapping KinesisAnalyticsApplication#mapping}.

---

### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat: kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat.property.mappingParameters">mappingParameters</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a></code> | mapping_parameters block. |

---

##### `mappingParameters`<sup>Optional</sup> <a name="mappingParameters" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat.property.mappingParameters"></a>

```typescript
public readonly mappingParameters: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a>

mapping_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}

---

### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters: kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters.property.csv">csv</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a></code> | csv block. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters.property.json">json</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a></code> | json block. |

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters.property.csv"></a>

```typescript
public readonly csv: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a>

csv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#csv KinesisAnalyticsApplication#csv}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters.property.json"></a>

```typescript
public readonly json: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#json KinesisAnalyticsApplication#json}

---

### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv: kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv.property.recordColumnDelimiter">recordColumnDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv.property.recordRowDelimiter">recordRowDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}. |

---

##### `recordColumnDelimiter`<sup>Required</sup> <a name="recordColumnDelimiter" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv.property.recordColumnDelimiter"></a>

```typescript
public readonly recordColumnDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}.

---

##### `recordRowDelimiter`<sup>Required</sup> <a name="recordRowDelimiter" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv.property.recordRowDelimiter"></a>

```typescript
public readonly recordRowDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}.

---

### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

const kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson: kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson.property.recordRowPath">recordRowPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_row_path KinesisAnalyticsApplication#record_row_path}. |

---

##### `recordRowPath`<sup>Required</sup> <a name="recordRowPath" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson.property.recordRowPath"></a>

```typescript
public readonly recordRowPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kinesis_analytics_application#record_row_path KinesisAnalyticsApplication#record_row_path}.

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference <a name="KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.logStreamArnInput">logStreamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.logStreamArn">logStreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logStreamArnInput`<sup>Optional</sup> <a name="logStreamArnInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.logStreamArnInput"></a>

```typescript
public readonly logStreamArnInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `logStreamArn`<sup>Required</sup> <a name="logStreamArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.logStreamArn"></a>

```typescript
public readonly logStreamArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationCloudwatchLoggingOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a>

---


### KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference <a name="KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationInputsKinesisFirehose;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a>

---


### KinesisAnalyticsApplicationInputsKinesisStreamOutputReference <a name="KinesisAnalyticsApplicationInputsKinesisStreamOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationInputsKinesisStream;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a>

---


### KinesisAnalyticsApplicationInputsOutputReference <a name="KinesisAnalyticsApplicationInputsOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisFirehose">putKinesisFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisStream">putKinesisStream</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putParallelism">putParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putProcessingConfiguration">putProcessingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putSchema">putSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putStartingPositionConfiguration">putStartingPositionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetKinesisFirehose">resetKinesisFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetKinesisStream">resetKinesisStream</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetParallelism">resetParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetProcessingConfiguration">resetProcessingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetStartingPositionConfiguration">resetStartingPositionConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKinesisFirehose` <a name="putKinesisFirehose" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisFirehose"></a>

```typescript
public putKinesisFirehose(value: KinesisAnalyticsApplicationInputsKinesisFirehose): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a>

---

##### `putKinesisStream` <a name="putKinesisStream" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisStream"></a>

```typescript
public putKinesisStream(value: KinesisAnalyticsApplicationInputsKinesisStream): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a>

---

##### `putParallelism` <a name="putParallelism" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putParallelism"></a>

```typescript
public putParallelism(value: KinesisAnalyticsApplicationInputsParallelism): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putParallelism.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a>

---

##### `putProcessingConfiguration` <a name="putProcessingConfiguration" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putProcessingConfiguration"></a>

```typescript
public putProcessingConfiguration(value: KinesisAnalyticsApplicationInputsProcessingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putProcessingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a>

---

##### `putSchema` <a name="putSchema" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putSchema"></a>

```typescript
public putSchema(value: KinesisAnalyticsApplicationInputsSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a>

---

##### `putStartingPositionConfiguration` <a name="putStartingPositionConfiguration" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putStartingPositionConfiguration"></a>

```typescript
public putStartingPositionConfiguration(value: IResolvable | KinesisAnalyticsApplicationInputsStartingPositionConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putStartingPositionConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration">KinesisAnalyticsApplicationInputsStartingPositionConfiguration</a>[]

---

##### `resetKinesisFirehose` <a name="resetKinesisFirehose" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetKinesisFirehose"></a>

```typescript
public resetKinesisFirehose(): void
```

##### `resetKinesisStream` <a name="resetKinesisStream" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetKinesisStream"></a>

```typescript
public resetKinesisStream(): void
```

##### `resetParallelism` <a name="resetParallelism" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetParallelism"></a>

```typescript
public resetParallelism(): void
```

##### `resetProcessingConfiguration` <a name="resetProcessingConfiguration" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetProcessingConfiguration"></a>

```typescript
public resetProcessingConfiguration(): void
```

##### `resetStartingPositionConfiguration` <a name="resetStartingPositionConfiguration" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetStartingPositionConfiguration"></a>

```typescript
public resetStartingPositionConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisFirehose">kinesisFirehose</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference">KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisStream">kinesisStream</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference">KinesisAnalyticsApplicationInputsKinesisStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.parallelism">parallelism</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference">KinesisAnalyticsApplicationInputsParallelismOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.processingConfiguration">processingConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference">KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.schema">schema</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference">KinesisAnalyticsApplicationInputsSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.startingPositionConfiguration">startingPositionConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList">KinesisAnalyticsApplicationInputsStartingPositionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.streamNames">streamNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisFirehoseInput">kinesisFirehoseInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisStreamInput">kinesisStreamInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.parallelismInput">parallelismInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.processingConfigurationInput">processingConfigurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.schemaInput">schemaInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.startingPositionConfigurationInput">startingPositionConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration">KinesisAnalyticsApplicationInputsStartingPositionConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kinesisFirehose`<sup>Required</sup> <a name="kinesisFirehose" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisFirehose"></a>

```typescript
public readonly kinesisFirehose: KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference">KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference</a>

---

##### `kinesisStream`<sup>Required</sup> <a name="kinesisStream" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisStream"></a>

```typescript
public readonly kinesisStream: KinesisAnalyticsApplicationInputsKinesisStreamOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference">KinesisAnalyticsApplicationInputsKinesisStreamOutputReference</a>

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.parallelism"></a>

```typescript
public readonly parallelism: KinesisAnalyticsApplicationInputsParallelismOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference">KinesisAnalyticsApplicationInputsParallelismOutputReference</a>

---

##### `processingConfiguration`<sup>Required</sup> <a name="processingConfiguration" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.processingConfiguration"></a>

```typescript
public readonly processingConfiguration: KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference">KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.schema"></a>

```typescript
public readonly schema: KinesisAnalyticsApplicationInputsSchemaOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference">KinesisAnalyticsApplicationInputsSchemaOutputReference</a>

---

##### `startingPositionConfiguration`<sup>Required</sup> <a name="startingPositionConfiguration" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.startingPositionConfiguration"></a>

```typescript
public readonly startingPositionConfiguration: KinesisAnalyticsApplicationInputsStartingPositionConfigurationList;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList">KinesisAnalyticsApplicationInputsStartingPositionConfigurationList</a>

---

##### `streamNames`<sup>Required</sup> <a name="streamNames" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.streamNames"></a>

```typescript
public readonly streamNames: string[];
```

- *Type:* string[]

---

##### `kinesisFirehoseInput`<sup>Optional</sup> <a name="kinesisFirehoseInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisFirehoseInput"></a>

```typescript
public readonly kinesisFirehoseInput: KinesisAnalyticsApplicationInputsKinesisFirehose;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a>

---

##### `kinesisStreamInput`<sup>Optional</sup> <a name="kinesisStreamInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisStreamInput"></a>

```typescript
public readonly kinesisStreamInput: KinesisAnalyticsApplicationInputsKinesisStream;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a>

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `parallelismInput`<sup>Optional</sup> <a name="parallelismInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.parallelismInput"></a>

```typescript
public readonly parallelismInput: KinesisAnalyticsApplicationInputsParallelism;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a>

---

##### `processingConfigurationInput`<sup>Optional</sup> <a name="processingConfigurationInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.processingConfigurationInput"></a>

```typescript
public readonly processingConfigurationInput: KinesisAnalyticsApplicationInputsProcessingConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: KinesisAnalyticsApplicationInputsSchema;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a>

---

##### `startingPositionConfigurationInput`<sup>Optional</sup> <a name="startingPositionConfigurationInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.startingPositionConfigurationInput"></a>

```typescript
public readonly startingPositionConfigurationInput: IResolvable | KinesisAnalyticsApplicationInputsStartingPositionConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration">KinesisAnalyticsApplicationInputsStartingPositionConfiguration</a>[]

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationInputs;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a>

---


### KinesisAnalyticsApplicationInputsParallelismOutputReference <a name="KinesisAnalyticsApplicationInputsParallelismOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.resetCount">resetCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationInputsParallelism;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a>

---


### KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference <a name="KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a>

---


### KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference <a name="KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.putLambda">putLambda</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambda` <a name="putLambda" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.putLambda"></a>

```typescript
public putLambda(value: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.putLambda.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference">KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.lambdaInput">lambdaInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.lambda"></a>

```typescript
public readonly lambda: KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference">KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference</a>

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.lambdaInput"></a>

```typescript
public readonly lambdaInput: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationInputsProcessingConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a>

---


### KinesisAnalyticsApplicationInputsSchemaOutputReference <a name="KinesisAnalyticsApplicationInputsSchemaOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.putRecordColumns">putRecordColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.putRecordFormat">putRecordFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.resetRecordEncoding">resetRecordEncoding</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecordColumns` <a name="putRecordColumns" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.putRecordColumns"></a>

```typescript
public putRecordColumns(value: IResolvable | KinesisAnalyticsApplicationInputsSchemaRecordColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.putRecordColumns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns">KinesisAnalyticsApplicationInputsSchemaRecordColumns</a>[]

---

##### `putRecordFormat` <a name="putRecordFormat" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.putRecordFormat"></a>

```typescript
public putRecordFormat(value: KinesisAnalyticsApplicationInputsSchemaRecordFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.putRecordFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a>

---

##### `resetRecordEncoding` <a name="resetRecordEncoding" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.resetRecordEncoding"></a>

```typescript
public resetRecordEncoding(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordColumns">recordColumns</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList">KinesisAnalyticsApplicationInputsSchemaRecordColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordFormat">recordFormat</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordColumnsInput">recordColumnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns">KinesisAnalyticsApplicationInputsSchemaRecordColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordEncodingInput">recordEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordFormatInput">recordFormatInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordEncoding">recordEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recordColumns`<sup>Required</sup> <a name="recordColumns" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordColumns"></a>

```typescript
public readonly recordColumns: KinesisAnalyticsApplicationInputsSchemaRecordColumnsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList">KinesisAnalyticsApplicationInputsSchemaRecordColumnsList</a>

---

##### `recordFormat`<sup>Required</sup> <a name="recordFormat" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordFormat"></a>

```typescript
public readonly recordFormat: KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference</a>

---

##### `recordColumnsInput`<sup>Optional</sup> <a name="recordColumnsInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordColumnsInput"></a>

```typescript
public readonly recordColumnsInput: IResolvable | KinesisAnalyticsApplicationInputsSchemaRecordColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns">KinesisAnalyticsApplicationInputsSchemaRecordColumns</a>[]

---

##### `recordEncodingInput`<sup>Optional</sup> <a name="recordEncodingInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordEncodingInput"></a>

```typescript
public readonly recordEncodingInput: string;
```

- *Type:* string

---

##### `recordFormatInput`<sup>Optional</sup> <a name="recordFormatInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordFormatInput"></a>

```typescript
public readonly recordFormatInput: KinesisAnalyticsApplicationInputsSchemaRecordFormat;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a>

---

##### `recordEncoding`<sup>Required</sup> <a name="recordEncoding" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordEncoding"></a>

```typescript
public readonly recordEncoding: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationInputsSchema;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a>

---


### KinesisAnalyticsApplicationInputsSchemaRecordColumnsList <a name="KinesisAnalyticsApplicationInputsSchemaRecordColumnsList" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.get"></a>

```typescript
public get(index: number): KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns">KinesisAnalyticsApplicationInputsSchemaRecordColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KinesisAnalyticsApplicationInputsSchemaRecordColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns">KinesisAnalyticsApplicationInputsSchemaRecordColumns</a>[]

---


### KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference <a name="KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.resetMapping">resetMapping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMapping` <a name="resetMapping" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.resetMapping"></a>

```typescript
public resetMapping(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.mappingInput">mappingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.sqlTypeInput">sqlTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.mapping">mapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.sqlType">sqlType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns">KinesisAnalyticsApplicationInputsSchemaRecordColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mappingInput`<sup>Optional</sup> <a name="mappingInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.mappingInput"></a>

```typescript
public readonly mappingInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sqlTypeInput`<sup>Optional</sup> <a name="sqlTypeInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.sqlTypeInput"></a>

```typescript
public readonly sqlTypeInput: string;
```

- *Type:* string

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.mapping"></a>

```typescript
public readonly mapping: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sqlType`<sup>Required</sup> <a name="sqlType" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.sqlType"></a>

```typescript
public readonly sqlType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KinesisAnalyticsApplicationInputsSchemaRecordColumns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns">KinesisAnalyticsApplicationInputsSchemaRecordColumns</a>

---


### KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiterInput">recordColumnDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiterInput">recordRowDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiter">recordColumnDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiter">recordRowDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recordColumnDelimiterInput`<sup>Optional</sup> <a name="recordColumnDelimiterInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiterInput"></a>

```typescript
public readonly recordColumnDelimiterInput: string;
```

- *Type:* string

---

##### `recordRowDelimiterInput`<sup>Optional</sup> <a name="recordRowDelimiterInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiterInput"></a>

```typescript
public readonly recordRowDelimiterInput: string;
```

- *Type:* string

---

##### `recordColumnDelimiter`<sup>Required</sup> <a name="recordColumnDelimiter" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiter"></a>

```typescript
public readonly recordColumnDelimiter: string;
```

- *Type:* string

---

##### `recordRowDelimiter`<sup>Required</sup> <a name="recordRowDelimiter" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiter"></a>

```typescript
public readonly recordRowDelimiter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a>

---


### KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPathInput">recordRowPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPath">recordRowPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recordRowPathInput`<sup>Optional</sup> <a name="recordRowPathInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPathInput"></a>

```typescript
public readonly recordRowPathInput: string;
```

- *Type:* string

---

##### `recordRowPath`<sup>Required</sup> <a name="recordRowPath" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPath"></a>

```typescript
public readonly recordRowPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a>

---


### KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.putCsv">putCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.putJson">putJson</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resetCsv">resetCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resetJson">resetJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCsv` <a name="putCsv" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.putCsv"></a>

```typescript
public putCsv(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a>

---

##### `putJson` <a name="putJson" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.putJson"></a>

```typescript
public putJson(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a>

---

##### `resetCsv` <a name="resetCsv" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resetCsv"></a>

```typescript
public resetCsv(): void
```

##### `resetJson` <a name="resetJson" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resetJson"></a>

```typescript
public resetJson(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.json">json</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.csvInput">csvInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.jsonInput">jsonInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.csv"></a>

```typescript
public readonly csv: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.json"></a>

```typescript
public readonly json: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference</a>

---

##### `csvInput`<sup>Optional</sup> <a name="csvInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.csvInput"></a>

```typescript
public readonly csvInput: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a>

---

##### `jsonInput`<sup>Optional</sup> <a name="jsonInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.jsonInput"></a>

```typescript
public readonly jsonInput: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a>

---


### KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.putMappingParameters">putMappingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.resetMappingParameters">resetMappingParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMappingParameters` <a name="putMappingParameters" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.putMappingParameters"></a>

```typescript
public putMappingParameters(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.putMappingParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a>

---

##### `resetMappingParameters` <a name="resetMappingParameters" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.resetMappingParameters"></a>

```typescript
public resetMappingParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.mappingParameters">mappingParameters</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.recordFormatType">recordFormatType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.mappingParametersInput">mappingParametersInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mappingParameters`<sup>Required</sup> <a name="mappingParameters" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.mappingParameters"></a>

```typescript
public readonly mappingParameters: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference</a>

---

##### `recordFormatType`<sup>Required</sup> <a name="recordFormatType" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.recordFormatType"></a>

```typescript
public readonly recordFormatType: string;
```

- *Type:* string

---

##### `mappingParametersInput`<sup>Optional</sup> <a name="mappingParametersInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.mappingParametersInput"></a>

```typescript
public readonly mappingParametersInput: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationInputsSchemaRecordFormat;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a>

---


### KinesisAnalyticsApplicationInputsStartingPositionConfigurationList <a name="KinesisAnalyticsApplicationInputsStartingPositionConfigurationList" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.get"></a>

```typescript
public get(index: number): KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration">KinesisAnalyticsApplicationInputsStartingPositionConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KinesisAnalyticsApplicationInputsStartingPositionConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration">KinesisAnalyticsApplicationInputsStartingPositionConfiguration</a>[]

---


### KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference <a name="KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.resetStartingPosition">resetStartingPosition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStartingPosition` <a name="resetStartingPosition" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.resetStartingPosition"></a>

```typescript
public resetStartingPosition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.startingPositionInput">startingPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.startingPosition">startingPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration">KinesisAnalyticsApplicationInputsStartingPositionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startingPositionInput`<sup>Optional</sup> <a name="startingPositionInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.startingPositionInput"></a>

```typescript
public readonly startingPositionInput: string;
```

- *Type:* string

---

##### `startingPosition`<sup>Required</sup> <a name="startingPosition" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.startingPosition"></a>

```typescript
public readonly startingPosition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KinesisAnalyticsApplicationInputsStartingPositionConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration">KinesisAnalyticsApplicationInputsStartingPositionConfiguration</a>

---


### KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference <a name="KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationOutputsKinesisFirehose;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a>

---


### KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference <a name="KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationOutputsKinesisStream;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a>

---


### KinesisAnalyticsApplicationOutputsLambdaOutputReference <a name="KinesisAnalyticsApplicationOutputsLambdaOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationOutputsLambda;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a>

---


### KinesisAnalyticsApplicationOutputsList <a name="KinesisAnalyticsApplicationOutputsList" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.get"></a>

```typescript
public get(index: number): KinesisAnalyticsApplicationOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KinesisAnalyticsApplicationOutputs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a>[]

---


### KinesisAnalyticsApplicationOutputsOutputReference <a name="KinesisAnalyticsApplicationOutputsOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisFirehose">putKinesisFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisStream">putKinesisStream</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putLambda">putLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putSchema">putSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resetKinesisFirehose">resetKinesisFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resetKinesisStream">resetKinesisStream</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resetLambda">resetLambda</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKinesisFirehose` <a name="putKinesisFirehose" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisFirehose"></a>

```typescript
public putKinesisFirehose(value: KinesisAnalyticsApplicationOutputsKinesisFirehose): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a>

---

##### `putKinesisStream` <a name="putKinesisStream" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisStream"></a>

```typescript
public putKinesisStream(value: KinesisAnalyticsApplicationOutputsKinesisStream): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a>

---

##### `putLambda` <a name="putLambda" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putLambda"></a>

```typescript
public putLambda(value: KinesisAnalyticsApplicationOutputsLambda): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putLambda.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a>

---

##### `putSchema` <a name="putSchema" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putSchema"></a>

```typescript
public putSchema(value: KinesisAnalyticsApplicationOutputsSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a>

---

##### `resetKinesisFirehose` <a name="resetKinesisFirehose" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resetKinesisFirehose"></a>

```typescript
public resetKinesisFirehose(): void
```

##### `resetKinesisStream` <a name="resetKinesisStream" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resetKinesisStream"></a>

```typescript
public resetKinesisStream(): void
```

##### `resetLambda` <a name="resetLambda" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resetLambda"></a>

```typescript
public resetLambda(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisFirehose">kinesisFirehose</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference">KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisStream">kinesisStream</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference">KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference">KinesisAnalyticsApplicationOutputsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.schema">schema</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference">KinesisAnalyticsApplicationOutputsSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisFirehoseInput">kinesisFirehoseInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisStreamInput">kinesisStreamInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.lambdaInput">lambdaInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.schemaInput">schemaInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kinesisFirehose`<sup>Required</sup> <a name="kinesisFirehose" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisFirehose"></a>

```typescript
public readonly kinesisFirehose: KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference">KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference</a>

---

##### `kinesisStream`<sup>Required</sup> <a name="kinesisStream" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisStream"></a>

```typescript
public readonly kinesisStream: KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference">KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference</a>

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.lambda"></a>

```typescript
public readonly lambda: KinesisAnalyticsApplicationOutputsLambdaOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference">KinesisAnalyticsApplicationOutputsLambdaOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.schema"></a>

```typescript
public readonly schema: KinesisAnalyticsApplicationOutputsSchemaOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference">KinesisAnalyticsApplicationOutputsSchemaOutputReference</a>

---

##### `kinesisFirehoseInput`<sup>Optional</sup> <a name="kinesisFirehoseInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisFirehoseInput"></a>

```typescript
public readonly kinesisFirehoseInput: KinesisAnalyticsApplicationOutputsKinesisFirehose;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a>

---

##### `kinesisStreamInput`<sup>Optional</sup> <a name="kinesisStreamInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisStreamInput"></a>

```typescript
public readonly kinesisStreamInput: KinesisAnalyticsApplicationOutputsKinesisStream;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a>

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.lambdaInput"></a>

```typescript
public readonly lambdaInput: KinesisAnalyticsApplicationOutputsLambda;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: KinesisAnalyticsApplicationOutputsSchema;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KinesisAnalyticsApplicationOutputs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a>

---


### KinesisAnalyticsApplicationOutputsSchemaOutputReference <a name="KinesisAnalyticsApplicationOutputsSchemaOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.recordFormatTypeInput">recordFormatTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.recordFormatType">recordFormatType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recordFormatTypeInput`<sup>Optional</sup> <a name="recordFormatTypeInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.recordFormatTypeInput"></a>

```typescript
public readonly recordFormatTypeInput: string;
```

- *Type:* string

---

##### `recordFormatType`<sup>Required</sup> <a name="recordFormatType" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.recordFormatType"></a>

```typescript
public readonly recordFormatType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationOutputsSchema;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putSchema">putSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putS3"></a>

```typescript
public putS3(value: KinesisAnalyticsApplicationReferenceDataSourcesS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a>

---

##### `putSchema` <a name="putSchema" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putSchema"></a>

```typescript
public putSchema(value: KinesisAnalyticsApplicationReferenceDataSourcesSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference">KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.schema">schema</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.schemaInput">schemaInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.s3"></a>

```typescript
public readonly s3: KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference">KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.schema"></a>

```typescript
public readonly schema: KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: KinesisAnalyticsApplicationReferenceDataSourcesS3;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: KinesisAnalyticsApplicationReferenceDataSourcesSchema;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationReferenceDataSources;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.fileKeyInput">fileKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.fileKey">fileKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.bucketArnInput"></a>

```typescript
public readonly bucketArnInput: string;
```

- *Type:* string

---

##### `fileKeyInput`<sup>Optional</sup> <a name="fileKeyInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.fileKeyInput"></a>

```typescript
public readonly fileKeyInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `fileKey`<sup>Required</sup> <a name="fileKey" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.fileKey"></a>

```typescript
public readonly fileKey: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationReferenceDataSourcesS3;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.putRecordColumns">putRecordColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.putRecordFormat">putRecordFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.resetRecordEncoding">resetRecordEncoding</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecordColumns` <a name="putRecordColumns" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.putRecordColumns"></a>

```typescript
public putRecordColumns(value: IResolvable | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.putRecordColumns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns</a>[]

---

##### `putRecordFormat` <a name="putRecordFormat" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.putRecordFormat"></a>

```typescript
public putRecordFormat(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.putRecordFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a>

---

##### `resetRecordEncoding` <a name="resetRecordEncoding" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.resetRecordEncoding"></a>

```typescript
public resetRecordEncoding(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordColumns">recordColumns</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordFormat">recordFormat</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordColumnsInput">recordColumnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordEncodingInput">recordEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordFormatInput">recordFormatInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordEncoding">recordEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recordColumns`<sup>Required</sup> <a name="recordColumns" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordColumns"></a>

```typescript
public readonly recordColumns: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList</a>

---

##### `recordFormat`<sup>Required</sup> <a name="recordFormat" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordFormat"></a>

```typescript
public readonly recordFormat: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference</a>

---

##### `recordColumnsInput`<sup>Optional</sup> <a name="recordColumnsInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordColumnsInput"></a>

```typescript
public readonly recordColumnsInput: IResolvable | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns</a>[]

---

##### `recordEncodingInput`<sup>Optional</sup> <a name="recordEncodingInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordEncodingInput"></a>

```typescript
public readonly recordEncodingInput: string;
```

- *Type:* string

---

##### `recordFormatInput`<sup>Optional</sup> <a name="recordFormatInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordFormatInput"></a>

```typescript
public readonly recordFormatInput: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a>

---

##### `recordEncoding`<sup>Required</sup> <a name="recordEncoding" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordEncoding"></a>

```typescript
public readonly recordEncoding: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationReferenceDataSourcesSchema;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.get"></a>

```typescript
public get(index: number): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns</a>[]

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.resetMapping">resetMapping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMapping` <a name="resetMapping" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.resetMapping"></a>

```typescript
public resetMapping(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.mappingInput">mappingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.sqlTypeInput">sqlTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.mapping">mapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.sqlType">sqlType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mappingInput`<sup>Optional</sup> <a name="mappingInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.mappingInput"></a>

```typescript
public readonly mappingInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sqlTypeInput`<sup>Optional</sup> <a name="sqlTypeInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.sqlTypeInput"></a>

```typescript
public readonly sqlTypeInput: string;
```

- *Type:* string

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.mapping"></a>

```typescript
public readonly mapping: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sqlType`<sup>Required</sup> <a name="sqlType" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.sqlType"></a>

```typescript
public readonly sqlType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiterInput">recordColumnDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiterInput">recordRowDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiter">recordColumnDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiter">recordRowDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recordColumnDelimiterInput`<sup>Optional</sup> <a name="recordColumnDelimiterInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiterInput"></a>

```typescript
public readonly recordColumnDelimiterInput: string;
```

- *Type:* string

---

##### `recordRowDelimiterInput`<sup>Optional</sup> <a name="recordRowDelimiterInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiterInput"></a>

```typescript
public readonly recordRowDelimiterInput: string;
```

- *Type:* string

---

##### `recordColumnDelimiter`<sup>Required</sup> <a name="recordColumnDelimiter" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiter"></a>

```typescript
public readonly recordColumnDelimiter: string;
```

- *Type:* string

---

##### `recordRowDelimiter`<sup>Required</sup> <a name="recordRowDelimiter" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiter"></a>

```typescript
public readonly recordRowDelimiter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPathInput">recordRowPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPath">recordRowPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recordRowPathInput`<sup>Optional</sup> <a name="recordRowPathInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPathInput"></a>

```typescript
public readonly recordRowPathInput: string;
```

- *Type:* string

---

##### `recordRowPath`<sup>Required</sup> <a name="recordRowPath" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPath"></a>

```typescript
public readonly recordRowPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.putCsv">putCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.putJson">putJson</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resetCsv">resetCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resetJson">resetJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCsv` <a name="putCsv" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.putCsv"></a>

```typescript
public putCsv(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a>

---

##### `putJson` <a name="putJson" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.putJson"></a>

```typescript
public putJson(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a>

---

##### `resetCsv` <a name="resetCsv" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resetCsv"></a>

```typescript
public resetCsv(): void
```

##### `resetJson` <a name="resetJson" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resetJson"></a>

```typescript
public resetJson(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.json">json</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.csvInput">csvInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.jsonInput">jsonInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.csv"></a>

```typescript
public readonly csv: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.json"></a>

```typescript
public readonly json: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference</a>

---

##### `csvInput`<sup>Optional</sup> <a name="csvInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.csvInput"></a>

```typescript
public readonly csvInput: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a>

---

##### `jsonInput`<sup>Optional</sup> <a name="jsonInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.jsonInput"></a>

```typescript
public readonly jsonInput: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.Initializer"></a>

```typescript
import { kinesisAnalyticsApplication } from '@cdktf/aws-cdk'

new kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.putMappingParameters">putMappingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.resetMappingParameters">resetMappingParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMappingParameters` <a name="putMappingParameters" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.putMappingParameters"></a>

```typescript
public putMappingParameters(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.putMappingParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a>

---

##### `resetMappingParameters` <a name="resetMappingParameters" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.resetMappingParameters"></a>

```typescript
public resetMappingParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.mappingParameters">mappingParameters</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.recordFormatType">recordFormatType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.mappingParametersInput">mappingParametersInput</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mappingParameters`<sup>Required</sup> <a name="mappingParameters" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.mappingParameters"></a>

```typescript
public readonly mappingParameters: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference</a>

---

##### `recordFormatType`<sup>Required</sup> <a name="recordFormatType" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.recordFormatType"></a>

```typescript
public readonly recordFormatType: string;
```

- *Type:* string

---

##### `mappingParametersInput`<sup>Optional</sup> <a name="mappingParametersInput" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.mappingParametersInput"></a>

```typescript
public readonly mappingParametersInput: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat;
```

- *Type:* <a href="#@cdktf/aws-cdk.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a>

---




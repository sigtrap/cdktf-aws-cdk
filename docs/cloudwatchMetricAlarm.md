# `cloudwatchMetricAlarm` Submodule <a name="`cloudwatchMetricAlarm` Submodule" id="@cdktf/aws-cdk.cloudwatchMetricAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchMetricAlarm <a name="CloudwatchMetricAlarm" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm aws_cloudwatch_metric_alarm}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer"></a>

```typescript
import { cloudwatchMetricAlarm } from '@cdktf/aws-cdk'

new cloudwatchMetricAlarm.CloudwatchMetricAlarm(scope: Construct, id: string, config: CloudwatchMetricAlarmConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig">CloudwatchMetricAlarmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig">CloudwatchMetricAlarmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.putMetricQuery">putMetricQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetActionsEnabled">resetActionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmActions">resetAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmDescription">resetAlarmDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDatapointsToAlarm">resetDatapointsToAlarm</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetEvaluateLowSampleCountPercentiles">resetEvaluateLowSampleCountPercentiles</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetExtendedStatistic">resetExtendedStatistic</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetInsufficientDataActions">resetInsufficientDataActions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricQuery">resetMetricQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOkActions">resetOkActions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetStatistic">resetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThreshold">resetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThresholdMetricId">resetThresholdMetricId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTreatMissingData">resetTreatMissingData</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetricQuery` <a name="putMetricQuery" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.putMetricQuery"></a>

```typescript
public putMetricQuery(value: IResolvable | CloudwatchMetricAlarmMetricQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.putMetricQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>[]

---

##### `resetActionsEnabled` <a name="resetActionsEnabled" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetActionsEnabled"></a>

```typescript
public resetActionsEnabled(): void
```

##### `resetAlarmActions` <a name="resetAlarmActions" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmActions"></a>

```typescript
public resetAlarmActions(): void
```

##### `resetAlarmDescription` <a name="resetAlarmDescription" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmDescription"></a>

```typescript
public resetAlarmDescription(): void
```

##### `resetDatapointsToAlarm` <a name="resetDatapointsToAlarm" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDatapointsToAlarm"></a>

```typescript
public resetDatapointsToAlarm(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetEvaluateLowSampleCountPercentiles` <a name="resetEvaluateLowSampleCountPercentiles" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetEvaluateLowSampleCountPercentiles"></a>

```typescript
public resetEvaluateLowSampleCountPercentiles(): void
```

##### `resetExtendedStatistic` <a name="resetExtendedStatistic" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetExtendedStatistic"></a>

```typescript
public resetExtendedStatistic(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInsufficientDataActions` <a name="resetInsufficientDataActions" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetInsufficientDataActions"></a>

```typescript
public resetInsufficientDataActions(): void
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricName"></a>

```typescript
public resetMetricName(): void
```

##### `resetMetricQuery` <a name="resetMetricQuery" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricQuery"></a>

```typescript
public resetMetricQuery(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOkActions` <a name="resetOkActions" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOkActions"></a>

```typescript
public resetOkActions(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetStatistic"></a>

```typescript
public resetStatistic(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThreshold"></a>

```typescript
public resetThreshold(): void
```

##### `resetThresholdMetricId` <a name="resetThresholdMetricId" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThresholdMetricId"></a>

```typescript
public resetThresholdMetricId(): void
```

##### `resetTreatMissingData` <a name="resetTreatMissingData" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTreatMissingData"></a>

```typescript
public resetTreatMissingData(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetUnit"></a>

```typescript
public resetUnit(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudwatchMetricAlarm resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isConstruct"></a>

```typescript
import { cloudwatchMetricAlarm } from '@cdktf/aws-cdk'

cloudwatchMetricAlarm.CloudwatchMetricAlarm.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformElement"></a>

```typescript
import { cloudwatchMetricAlarm } from '@cdktf/aws-cdk'

cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformResource"></a>

```typescript
import { cloudwatchMetricAlarm } from '@cdktf/aws-cdk'

cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.generateConfigForImport"></a>

```typescript
import { cloudwatchMetricAlarm } from '@cdktf/aws-cdk'

cloudwatchMetricAlarm.CloudwatchMetricAlarm.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudwatchMetricAlarm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchMetricAlarm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchMetricAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudwatchMetricAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQuery">metricQuery</a></code> | <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList">CloudwatchMetricAlarmMetricQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabledInput">actionsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActionsInput">alarmActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescriptionInput">alarmDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmNameInput">alarmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarmInput">datapointsToAlarmInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensionsInput">dimensionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentilesInput">evaluateLowSampleCountPercentilesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatisticInput">extendedStatisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActionsInput">insufficientDataActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQueryInput">metricQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActionsInput">okActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricIdInput">thresholdMetricIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingDataInput">treatMissingDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabled">actionsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActions">alarmActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescription">alarmDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmName">alarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarm">datapointsToAlarm</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentiles">evaluateLowSampleCountPercentiles</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatistic">extendedStatistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActions">insufficientDataActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActions">okActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricId">thresholdMetricId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingData">treatMissingData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unit">unit</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `metricQuery`<sup>Required</sup> <a name="metricQuery" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQuery"></a>

```typescript
public readonly metricQuery: CloudwatchMetricAlarmMetricQueryList;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList">CloudwatchMetricAlarmMetricQueryList</a>

---

##### `actionsEnabledInput`<sup>Optional</sup> <a name="actionsEnabledInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabledInput"></a>

```typescript
public readonly actionsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `alarmActionsInput`<sup>Optional</sup> <a name="alarmActionsInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActionsInput"></a>

```typescript
public readonly alarmActionsInput: string[];
```

- *Type:* string[]

---

##### `alarmDescriptionInput`<sup>Optional</sup> <a name="alarmDescriptionInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescriptionInput"></a>

```typescript
public readonly alarmDescriptionInput: string;
```

- *Type:* string

---

##### `alarmNameInput`<sup>Optional</sup> <a name="alarmNameInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmNameInput"></a>

```typescript
public readonly alarmNameInput: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `datapointsToAlarmInput`<sup>Optional</sup> <a name="datapointsToAlarmInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarmInput"></a>

```typescript
public readonly datapointsToAlarmInput: number;
```

- *Type:* number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `evaluateLowSampleCountPercentilesInput`<sup>Optional</sup> <a name="evaluateLowSampleCountPercentilesInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentilesInput"></a>

```typescript
public readonly evaluateLowSampleCountPercentilesInput: string;
```

- *Type:* string

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriodsInput"></a>

```typescript
public readonly evaluationPeriodsInput: number;
```

- *Type:* number

---

##### `extendedStatisticInput`<sup>Optional</sup> <a name="extendedStatisticInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatisticInput"></a>

```typescript
public readonly extendedStatisticInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `insufficientDataActionsInput`<sup>Optional</sup> <a name="insufficientDataActionsInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActionsInput"></a>

```typescript
public readonly insufficientDataActionsInput: string[];
```

- *Type:* string[]

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `metricQueryInput`<sup>Optional</sup> <a name="metricQueryInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQueryInput"></a>

```typescript
public readonly metricQueryInput: IResolvable | CloudwatchMetricAlarmMetricQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>[]

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `okActionsInput`<sup>Optional</sup> <a name="okActionsInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActionsInput"></a>

```typescript
public readonly okActionsInput: string[];
```

- *Type:* string[]

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `thresholdMetricIdInput`<sup>Optional</sup> <a name="thresholdMetricIdInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricIdInput"></a>

```typescript
public readonly thresholdMetricIdInput: string;
```

- *Type:* string

---

##### `treatMissingDataInput`<sup>Optional</sup> <a name="treatMissingDataInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingDataInput"></a>

```typescript
public readonly treatMissingDataInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `actionsEnabled`<sup>Required</sup> <a name="actionsEnabled" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabled"></a>

```typescript
public readonly actionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `alarmActions`<sup>Required</sup> <a name="alarmActions" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActions"></a>

```typescript
public readonly alarmActions: string[];
```

- *Type:* string[]

---

##### `alarmDescription`<sup>Required</sup> <a name="alarmDescription" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescription"></a>

```typescript
public readonly alarmDescription: string;
```

- *Type:* string

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `datapointsToAlarm`<sup>Required</sup> <a name="datapointsToAlarm" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarm"></a>

```typescript
public readonly datapointsToAlarm: number;
```

- *Type:* number

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `evaluateLowSampleCountPercentiles`<sup>Required</sup> <a name="evaluateLowSampleCountPercentiles" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentiles"></a>

```typescript
public readonly evaluateLowSampleCountPercentiles: string;
```

- *Type:* string

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `extendedStatistic`<sup>Required</sup> <a name="extendedStatistic" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatistic"></a>

```typescript
public readonly extendedStatistic: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `insufficientDataActions`<sup>Required</sup> <a name="insufficientDataActions" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActions"></a>

```typescript
public readonly insufficientDataActions: string[];
```

- *Type:* string[]

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `okActions`<sup>Required</sup> <a name="okActions" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActions"></a>

```typescript
public readonly okActions: string[];
```

- *Type:* string[]

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `thresholdMetricId`<sup>Required</sup> <a name="thresholdMetricId" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricId"></a>

```typescript
public readonly thresholdMetricId: string;
```

- *Type:* string

---

##### `treatMissingData`<sup>Required</sup> <a name="treatMissingData" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingData"></a>

```typescript
public readonly treatMissingData: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchMetricAlarmConfig <a name="CloudwatchMetricAlarmConfig" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.Initializer"></a>

```typescript
import { cloudwatchMetricAlarm } from '@cdktf/aws-cdk'

const cloudwatchMetricAlarmConfig: cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmName">alarmName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#alarm_name CloudwatchMetricAlarm#alarm_name}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#comparison_operator CloudwatchMetricAlarm#comparison_operator}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#evaluation_periods CloudwatchMetricAlarm#evaluation_periods}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.actionsEnabled">actionsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#actions_enabled CloudwatchMetricAlarm#actions_enabled}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmActions">alarmActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#alarm_actions CloudwatchMetricAlarm#alarm_actions}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmDescription">alarmDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#alarm_description CloudwatchMetricAlarm#alarm_description}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.datapointsToAlarm">datapointsToAlarm</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#datapoints_to_alarm CloudwatchMetricAlarm#datapoints_to_alarm}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluateLowSampleCountPercentiles">evaluateLowSampleCountPercentiles</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#evaluate_low_sample_count_percentiles CloudwatchMetricAlarm#evaluate_low_sample_count_percentiles}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.extendedStatistic">extendedStatistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#extended_statistic CloudwatchMetricAlarm#extended_statistic}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.insufficientDataActions">insufficientDataActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#insufficient_data_actions CloudwatchMetricAlarm#insufficient_data_actions}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricQuery">metricQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>[]</code> | metric_query block. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.okActions">okActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#ok_actions CloudwatchMetricAlarm#ok_actions}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.period">period</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.statistic">statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#statistic CloudwatchMetricAlarm#statistic}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#tags CloudwatchMetricAlarm#tags}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#tags_all CloudwatchMetricAlarm#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#threshold CloudwatchMetricAlarm#threshold}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.thresholdMetricId">thresholdMetricId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#threshold_metric_id CloudwatchMetricAlarm#threshold_metric_id}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.treatMissingData">treatMissingData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#treat_missing_data CloudwatchMetricAlarm#treat_missing_data}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#alarm_name CloudwatchMetricAlarm#alarm_name}.

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#comparison_operator CloudwatchMetricAlarm#comparison_operator}.

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#evaluation_periods CloudwatchMetricAlarm#evaluation_periods}.

---

##### `actionsEnabled`<sup>Optional</sup> <a name="actionsEnabled" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.actionsEnabled"></a>

```typescript
public readonly actionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#actions_enabled CloudwatchMetricAlarm#actions_enabled}.

---

##### `alarmActions`<sup>Optional</sup> <a name="alarmActions" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmActions"></a>

```typescript
public readonly alarmActions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#alarm_actions CloudwatchMetricAlarm#alarm_actions}.

---

##### `alarmDescription`<sup>Optional</sup> <a name="alarmDescription" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmDescription"></a>

```typescript
public readonly alarmDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#alarm_description CloudwatchMetricAlarm#alarm_description}.

---

##### `datapointsToAlarm`<sup>Optional</sup> <a name="datapointsToAlarm" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.datapointsToAlarm"></a>

```typescript
public readonly datapointsToAlarm: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#datapoints_to_alarm CloudwatchMetricAlarm#datapoints_to_alarm}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}.

---

##### `evaluateLowSampleCountPercentiles`<sup>Optional</sup> <a name="evaluateLowSampleCountPercentiles" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluateLowSampleCountPercentiles"></a>

```typescript
public readonly evaluateLowSampleCountPercentiles: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#evaluate_low_sample_count_percentiles CloudwatchMetricAlarm#evaluate_low_sample_count_percentiles}.

---

##### `extendedStatistic`<sup>Optional</sup> <a name="extendedStatistic" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.extendedStatistic"></a>

```typescript
public readonly extendedStatistic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#extended_statistic CloudwatchMetricAlarm#extended_statistic}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insufficientDataActions`<sup>Optional</sup> <a name="insufficientDataActions" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.insufficientDataActions"></a>

```typescript
public readonly insufficientDataActions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#insufficient_data_actions CloudwatchMetricAlarm#insufficient_data_actions}.

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}.

---

##### `metricQuery`<sup>Optional</sup> <a name="metricQuery" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricQuery"></a>

```typescript
public readonly metricQuery: IResolvable | CloudwatchMetricAlarmMetricQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>[]

metric_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#metric_query CloudwatchMetricAlarm#metric_query}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}.

---

##### `okActions`<sup>Optional</sup> <a name="okActions" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.okActions"></a>

```typescript
public readonly okActions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#ok_actions CloudwatchMetricAlarm#ok_actions}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#statistic CloudwatchMetricAlarm#statistic}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#tags CloudwatchMetricAlarm#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#tags_all CloudwatchMetricAlarm#tags_all}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#threshold CloudwatchMetricAlarm#threshold}.

---

##### `thresholdMetricId`<sup>Optional</sup> <a name="thresholdMetricId" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.thresholdMetricId"></a>

```typescript
public readonly thresholdMetricId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#threshold_metric_id CloudwatchMetricAlarm#threshold_metric_id}.

---

##### `treatMissingData`<sup>Optional</sup> <a name="treatMissingData" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.treatMissingData"></a>

```typescript
public readonly treatMissingData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#treat_missing_data CloudwatchMetricAlarm#treat_missing_data}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}.

---

### CloudwatchMetricAlarmMetricQuery <a name="CloudwatchMetricAlarmMetricQuery" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.Initializer"></a>

```typescript
import { cloudwatchMetricAlarm } from '@cdktf/aws-cdk'

const cloudwatchMetricAlarmMetricQuery: cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#account_id CloudwatchMetricAlarm#account_id}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#expression CloudwatchMetricAlarm#expression}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#label CloudwatchMetricAlarm#label}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.metric">metric</a></code> | <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a></code> | metric block. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.returnData">returnData</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#return_data CloudwatchMetricAlarm#return_data}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#account_id CloudwatchMetricAlarm#account_id}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#expression CloudwatchMetricAlarm#expression}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#label CloudwatchMetricAlarm#label}.

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.metric"></a>

```typescript
public readonly metric: CloudwatchMetricAlarmMetricQueryMetric;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#metric CloudwatchMetricAlarm#metric}

---

##### `returnData`<sup>Optional</sup> <a name="returnData" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.returnData"></a>

```typescript
public readonly returnData: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#return_data CloudwatchMetricAlarm#return_data}.

---

### CloudwatchMetricAlarmMetricQueryMetric <a name="CloudwatchMetricAlarmMetricQueryMetric" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.Initializer"></a>

```typescript
import { cloudwatchMetricAlarm } from '@cdktf/aws-cdk'

const cloudwatchMetricAlarmMetricQueryMetric: cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.period">period</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.stat">stat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#stat CloudwatchMetricAlarm#stat}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}.

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.stat"></a>

```typescript
public readonly stat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#stat CloudwatchMetricAlarm#stat}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchMetricAlarmMetricQueryList <a name="CloudwatchMetricAlarmMetricQueryList" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer"></a>

```typescript
import { cloudwatchMetricAlarm } from '@cdktf/aws-cdk'

new cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.get"></a>

```typescript
public get(index: number): CloudwatchMetricAlarmMetricQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricAlarmMetricQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>[]

---


### CloudwatchMetricAlarmMetricQueryMetricOutputReference <a name="CloudwatchMetricAlarmMetricQueryMetricOutputReference" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer"></a>

```typescript
import { cloudwatchMetricAlarm } from '@cdktf/aws-cdk'

new cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.statInput">statInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.stat">stat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `statInput`<sup>Optional</sup> <a name="statInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.statInput"></a>

```typescript
public readonly statInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.stat"></a>

```typescript
public readonly stat: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchMetricAlarmMetricQueryMetric;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a>

---


### CloudwatchMetricAlarmMetricQueryOutputReference <a name="CloudwatchMetricAlarmMetricQueryOutputReference" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer"></a>

```typescript
import { cloudwatchMetricAlarm } from '@cdktf/aws-cdk'

new cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetReturnData">resetReturnData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetric` <a name="putMetric" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric"></a>

```typescript
public putMetric(value: CloudwatchMetricAlarmMetricQueryMetric): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetMetric` <a name="resetMetric" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetMetric"></a>

```typescript
public resetMetric(): void
```

##### `resetReturnData` <a name="resetReturnData" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetReturnData"></a>

```typescript
public resetReturnData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference">CloudwatchMetricAlarmMetricQueryMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metricInput">metricInput</a></code> | <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnDataInput">returnDataInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnData">returnData</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metric"></a>

```typescript
public readonly metric: CloudwatchMetricAlarmMetricQueryMetricOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference">CloudwatchMetricAlarmMetricQueryMetricOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: CloudwatchMetricAlarmMetricQueryMetric;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a>

---

##### `returnDataInput`<sup>Optional</sup> <a name="returnDataInput" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnDataInput"></a>

```typescript
public readonly returnDataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `returnData`<sup>Required</sup> <a name="returnData" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnData"></a>

```typescript
public readonly returnData: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricAlarmMetricQuery;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>

---




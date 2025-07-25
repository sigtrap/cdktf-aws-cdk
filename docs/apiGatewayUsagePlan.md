# `apiGatewayUsagePlan` Submodule <a name="`apiGatewayUsagePlan` Submodule" id="@cdktf/aws-cdk.apiGatewayUsagePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayUsagePlan <a name="ApiGatewayUsagePlan" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan aws_api_gateway_usage_plan}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/aws-cdk'

new apiGatewayUsagePlan.ApiGatewayUsagePlan(scope: Construct, id: string, config: ApiGatewayUsagePlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig">ApiGatewayUsagePlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig">ApiGatewayUsagePlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.putApiStages">putApiStages</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.putQuotaSettings">putQuotaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.putThrottleSettings">putThrottleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetApiStages">resetApiStages</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetProductCode">resetProductCode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetQuotaSettings">resetQuotaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetThrottleSettings">resetThrottleSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApiStages` <a name="putApiStages" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.putApiStages"></a>

```typescript
public putApiStages(value: IResolvable | ApiGatewayUsagePlanApiStages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.putApiStages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>[]

---

##### `putQuotaSettings` <a name="putQuotaSettings" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.putQuotaSettings"></a>

```typescript
public putQuotaSettings(value: ApiGatewayUsagePlanQuotaSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.putQuotaSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

---

##### `putThrottleSettings` <a name="putThrottleSettings" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.putThrottleSettings"></a>

```typescript
public putThrottleSettings(value: ApiGatewayUsagePlanThrottleSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.putThrottleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

---

##### `resetApiStages` <a name="resetApiStages" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetApiStages"></a>

```typescript
public resetApiStages(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProductCode` <a name="resetProductCode" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetProductCode"></a>

```typescript
public resetProductCode(): void
```

##### `resetQuotaSettings` <a name="resetQuotaSettings" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetQuotaSettings"></a>

```typescript
public resetQuotaSettings(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetThrottleSettings` <a name="resetThrottleSettings" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetThrottleSettings"></a>

```typescript
public resetThrottleSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiGatewayUsagePlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.isConstruct"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/aws-cdk'

apiGatewayUsagePlan.ApiGatewayUsagePlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformElement"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/aws-cdk'

apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformResource"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/aws-cdk'

apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.generateConfigForImport"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/aws-cdk'

apiGatewayUsagePlan.ApiGatewayUsagePlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiGatewayUsagePlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiGatewayUsagePlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiGatewayUsagePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiGatewayUsagePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStages">apiStages</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList">ApiGatewayUsagePlanApiStagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettings">quotaSettings</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference">ApiGatewayUsagePlanQuotaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettings">throttleSettings</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference">ApiGatewayUsagePlanThrottleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStagesInput">apiStagesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCodeInput">productCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettingsInput">quotaSettingsInput</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettingsInput">throttleSettingsInput</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCode">productCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiStages`<sup>Required</sup> <a name="apiStages" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStages"></a>

```typescript
public readonly apiStages: ApiGatewayUsagePlanApiStagesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList">ApiGatewayUsagePlanApiStagesList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `quotaSettings`<sup>Required</sup> <a name="quotaSettings" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettings"></a>

```typescript
public readonly quotaSettings: ApiGatewayUsagePlanQuotaSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference">ApiGatewayUsagePlanQuotaSettingsOutputReference</a>

---

##### `throttleSettings`<sup>Required</sup> <a name="throttleSettings" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettings"></a>

```typescript
public readonly throttleSettings: ApiGatewayUsagePlanThrottleSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference">ApiGatewayUsagePlanThrottleSettingsOutputReference</a>

---

##### `apiStagesInput`<sup>Optional</sup> <a name="apiStagesInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStagesInput"></a>

```typescript
public readonly apiStagesInput: IResolvable | ApiGatewayUsagePlanApiStages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `productCodeInput`<sup>Optional</sup> <a name="productCodeInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCodeInput"></a>

```typescript
public readonly productCodeInput: string;
```

- *Type:* string

---

##### `quotaSettingsInput`<sup>Optional</sup> <a name="quotaSettingsInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettingsInput"></a>

```typescript
public readonly quotaSettingsInput: ApiGatewayUsagePlanQuotaSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throttleSettingsInput`<sup>Optional</sup> <a name="throttleSettingsInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettingsInput"></a>

```typescript
public readonly throttleSettingsInput: ApiGatewayUsagePlanThrottleSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `productCode`<sup>Required</sup> <a name="productCode" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCode"></a>

```typescript
public readonly productCode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayUsagePlanApiStages <a name="ApiGatewayUsagePlanApiStages" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/aws-cdk'

const apiGatewayUsagePlanApiStages: apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.apiId">apiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#api_id ApiGatewayUsagePlan#api_id}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.stage">stage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#stage ApiGatewayUsagePlan#stage}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.throttle">throttle</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>[]</code> | throttle block. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#api_id ApiGatewayUsagePlan#api_id}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#stage ApiGatewayUsagePlan#stage}.

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.throttle"></a>

```typescript
public readonly throttle: IResolvable | ApiGatewayUsagePlanApiStagesThrottle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>[]

throttle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#throttle ApiGatewayUsagePlan#throttle}

---

### ApiGatewayUsagePlanApiStagesThrottle <a name="ApiGatewayUsagePlanApiStagesThrottle" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/aws-cdk'

const apiGatewayUsagePlanApiStagesThrottle: apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#path ApiGatewayUsagePlan#path}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.burstLimit">burstLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.rateLimit">rateLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#path ApiGatewayUsagePlan#path}.

---

##### `burstLimit`<sup>Optional</sup> <a name="burstLimit" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.burstLimit"></a>

```typescript
public readonly burstLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}.

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}.

---

### ApiGatewayUsagePlanConfig <a name="ApiGatewayUsagePlanConfig" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/aws-cdk'

const apiGatewayUsagePlanConfig: apiGatewayUsagePlan.ApiGatewayUsagePlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#name ApiGatewayUsagePlan#name}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.apiStages">apiStages</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>[]</code> | api_stages block. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#description ApiGatewayUsagePlan#description}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#id ApiGatewayUsagePlan#id}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.productCode">productCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#product_code ApiGatewayUsagePlan#product_code}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.quotaSettings">quotaSettings</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a></code> | quota_settings block. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#tags ApiGatewayUsagePlan#tags}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#tags_all ApiGatewayUsagePlan#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.throttleSettings">throttleSettings</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a></code> | throttle_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#name ApiGatewayUsagePlan#name}.

---

##### `apiStages`<sup>Optional</sup> <a name="apiStages" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.apiStages"></a>

```typescript
public readonly apiStages: IResolvable | ApiGatewayUsagePlanApiStages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>[]

api_stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#api_stages ApiGatewayUsagePlan#api_stages}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#description ApiGatewayUsagePlan#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#id ApiGatewayUsagePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `productCode`<sup>Optional</sup> <a name="productCode" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.productCode"></a>

```typescript
public readonly productCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#product_code ApiGatewayUsagePlan#product_code}.

---

##### `quotaSettings`<sup>Optional</sup> <a name="quotaSettings" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.quotaSettings"></a>

```typescript
public readonly quotaSettings: ApiGatewayUsagePlanQuotaSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

quota_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#quota_settings ApiGatewayUsagePlan#quota_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#tags ApiGatewayUsagePlan#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#tags_all ApiGatewayUsagePlan#tags_all}.

---

##### `throttleSettings`<sup>Optional</sup> <a name="throttleSettings" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.throttleSettings"></a>

```typescript
public readonly throttleSettings: ApiGatewayUsagePlanThrottleSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

throttle_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#throttle_settings ApiGatewayUsagePlan#throttle_settings}

---

### ApiGatewayUsagePlanQuotaSettings <a name="ApiGatewayUsagePlanQuotaSettings" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/aws-cdk'

const apiGatewayUsagePlanQuotaSettings: apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.limit">limit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#limit ApiGatewayUsagePlan#limit}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.period">period</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#period ApiGatewayUsagePlan#period}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.offset">offset</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#offset ApiGatewayUsagePlan#offset}. |

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#limit ApiGatewayUsagePlan#limit}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#period ApiGatewayUsagePlan#period}.

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#offset ApiGatewayUsagePlan#offset}.

---

### ApiGatewayUsagePlanThrottleSettings <a name="ApiGatewayUsagePlanThrottleSettings" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/aws-cdk'

const apiGatewayUsagePlanThrottleSettings: apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.burstLimit">burstLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.rateLimit">rateLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}. |

---

##### `burstLimit`<sup>Optional</sup> <a name="burstLimit" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.burstLimit"></a>

```typescript
public readonly burstLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}.

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayUsagePlanApiStagesList <a name="ApiGatewayUsagePlanApiStagesList" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/aws-cdk'

new apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.get"></a>

```typescript
public get(index: number): ApiGatewayUsagePlanApiStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiGatewayUsagePlanApiStages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>[]

---


### ApiGatewayUsagePlanApiStagesOutputReference <a name="ApiGatewayUsagePlanApiStagesOutputReference" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/aws-cdk'

new apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.putThrottle">putThrottle</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resetThrottle">resetThrottle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putThrottle` <a name="putThrottle" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.putThrottle"></a>

```typescript
public putThrottle(value: IResolvable | ApiGatewayUsagePlanApiStagesThrottle[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.putThrottle.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>[]

---

##### `resetThrottle` <a name="resetThrottle" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resetThrottle"></a>

```typescript
public resetThrottle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttle">throttle</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList">ApiGatewayUsagePlanApiStagesThrottleList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stageInput">stageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttleInput">throttleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `throttle`<sup>Required</sup> <a name="throttle" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttle"></a>

```typescript
public readonly throttle: ApiGatewayUsagePlanApiStagesThrottleList;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList">ApiGatewayUsagePlanApiStagesThrottleList</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stageInput"></a>

```typescript
public readonly stageInput: string;
```

- *Type:* string

---

##### `throttleInput`<sup>Optional</sup> <a name="throttleInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttleInput"></a>

```typescript
public readonly throttleInput: IResolvable | ApiGatewayUsagePlanApiStagesThrottle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiGatewayUsagePlanApiStages;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>

---


### ApiGatewayUsagePlanApiStagesThrottleList <a name="ApiGatewayUsagePlanApiStagesThrottleList" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/aws-cdk'

new apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.get"></a>

```typescript
public get(index: number): ApiGatewayUsagePlanApiStagesThrottleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiGatewayUsagePlanApiStagesThrottle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>[]

---


### ApiGatewayUsagePlanApiStagesThrottleOutputReference <a name="ApiGatewayUsagePlanApiStagesThrottleOutputReference" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/aws-cdk'

new apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetBurstLimit">resetBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetRateLimit">resetRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBurstLimit` <a name="resetBurstLimit" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetBurstLimit"></a>

```typescript
public resetBurstLimit(): void
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetRateLimit"></a>

```typescript
public resetRateLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimitInput">burstLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimitInput">rateLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit">burstLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit">rateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `burstLimitInput`<sup>Optional</sup> <a name="burstLimitInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimitInput"></a>

```typescript
public readonly burstLimitInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimitInput"></a>

```typescript
public readonly rateLimitInput: number;
```

- *Type:* number

---

##### `burstLimit`<sup>Required</sup> <a name="burstLimit" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit"></a>

```typescript
public readonly burstLimit: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiGatewayUsagePlanApiStagesThrottle;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>

---


### ApiGatewayUsagePlanQuotaSettingsOutputReference <a name="ApiGatewayUsagePlanQuotaSettingsOutputReference" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/aws-cdk'

new apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resetOffset">resetOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffset` <a name="resetOffset" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offsetInput">offsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offset">offset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: number;
```

- *Type:* number

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiGatewayUsagePlanQuotaSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

---


### ApiGatewayUsagePlanThrottleSettingsOutputReference <a name="ApiGatewayUsagePlanThrottleSettingsOutputReference" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/aws-cdk'

new apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetBurstLimit">resetBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetRateLimit">resetRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBurstLimit` <a name="resetBurstLimit" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetBurstLimit"></a>

```typescript
public resetBurstLimit(): void
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetRateLimit"></a>

```typescript
public resetRateLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimitInput">burstLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimitInput">rateLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimit">burstLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimit">rateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `burstLimitInput`<sup>Optional</sup> <a name="burstLimitInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimitInput"></a>

```typescript
public readonly burstLimitInput: number;
```

- *Type:* number

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimitInput"></a>

```typescript
public readonly rateLimitInput: number;
```

- *Type:* number

---

##### `burstLimit`<sup>Required</sup> <a name="burstLimit" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimit"></a>

```typescript
public readonly burstLimit: number;
```

- *Type:* number

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiGatewayUsagePlanThrottleSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

---




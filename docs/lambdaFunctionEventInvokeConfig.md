# `lambdaFunctionEventInvokeConfig` Submodule <a name="`lambdaFunctionEventInvokeConfig` Submodule" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaFunctionEventInvokeConfig <a name="LambdaFunctionEventInvokeConfig" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config aws_lambda_function_event_invoke_config}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer"></a>

```typescript
import { lambdaFunctionEventInvokeConfig } from '@cdktf/aws-cdk'

new lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig(scope: Construct, id: string, config: LambdaFunctionEventInvokeConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig">LambdaFunctionEventInvokeConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig">LambdaFunctionEventInvokeConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.putDestinationConfig">putDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetDestinationConfig">resetDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetMaximumEventAgeInSeconds">resetMaximumEventAgeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetMaximumRetryAttempts">resetMaximumRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetQualifier">resetQualifier</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationConfig` <a name="putDestinationConfig" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.putDestinationConfig"></a>

```typescript
public putDestinationConfig(value: LambdaFunctionEventInvokeConfigDestinationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.putDestinationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a>

---

##### `resetDestinationConfig` <a name="resetDestinationConfig" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetDestinationConfig"></a>

```typescript
public resetDestinationConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaximumEventAgeInSeconds` <a name="resetMaximumEventAgeInSeconds" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetMaximumEventAgeInSeconds"></a>

```typescript
public resetMaximumEventAgeInSeconds(): void
```

##### `resetMaximumRetryAttempts` <a name="resetMaximumRetryAttempts" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetMaximumRetryAttempts"></a>

```typescript
public resetMaximumRetryAttempts(): void
```

##### `resetQualifier` <a name="resetQualifier" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetQualifier"></a>

```typescript
public resetQualifier(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LambdaFunctionEventInvokeConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isConstruct"></a>

```typescript
import { lambdaFunctionEventInvokeConfig } from '@cdktf/aws-cdk'

lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformElement"></a>

```typescript
import { lambdaFunctionEventInvokeConfig } from '@cdktf/aws-cdk'

lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformResource"></a>

```typescript
import { lambdaFunctionEventInvokeConfig } from '@cdktf/aws-cdk'

lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.generateConfigForImport"></a>

```typescript
import { lambdaFunctionEventInvokeConfig } from '@cdktf/aws-cdk'

lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LambdaFunctionEventInvokeConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaFunctionEventInvokeConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaFunctionEventInvokeConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LambdaFunctionEventInvokeConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.destinationConfig">destinationConfig</a></code> | <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference">LambdaFunctionEventInvokeConfigDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.destinationConfigInput">destinationConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumEventAgeInSecondsInput">maximumEventAgeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumRetryAttemptsInput">maximumRetryAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.qualifierInput">qualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumEventAgeInSeconds">maximumEventAgeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.qualifier">qualifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destinationConfig`<sup>Required</sup> <a name="destinationConfig" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.destinationConfig"></a>

```typescript
public readonly destinationConfig: LambdaFunctionEventInvokeConfigDestinationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference">LambdaFunctionEventInvokeConfigDestinationConfigOutputReference</a>

---

##### `destinationConfigInput`<sup>Optional</sup> <a name="destinationConfigInput" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.destinationConfigInput"></a>

```typescript
public readonly destinationConfigInput: LambdaFunctionEventInvokeConfigDestinationConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maximumEventAgeInSecondsInput`<sup>Optional</sup> <a name="maximumEventAgeInSecondsInput" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumEventAgeInSecondsInput"></a>

```typescript
public readonly maximumEventAgeInSecondsInput: number;
```

- *Type:* number

---

##### `maximumRetryAttemptsInput`<sup>Optional</sup> <a name="maximumRetryAttemptsInput" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumRetryAttemptsInput"></a>

```typescript
public readonly maximumRetryAttemptsInput: number;
```

- *Type:* number

---

##### `qualifierInput`<sup>Optional</sup> <a name="qualifierInput" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.qualifierInput"></a>

```typescript
public readonly qualifierInput: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maximumEventAgeInSeconds`<sup>Required</sup> <a name="maximumEventAgeInSeconds" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumEventAgeInSeconds"></a>

```typescript
public readonly maximumEventAgeInSeconds: number;
```

- *Type:* number

---

##### `maximumRetryAttempts`<sup>Required</sup> <a name="maximumRetryAttempts" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumRetryAttempts"></a>

```typescript
public readonly maximumRetryAttempts: number;
```

- *Type:* number

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaFunctionEventInvokeConfigConfig <a name="LambdaFunctionEventInvokeConfigConfig" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.Initializer"></a>

```typescript
import { lambdaFunctionEventInvokeConfig } from '@cdktf/aws-cdk'

const lambdaFunctionEventInvokeConfigConfig: lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config#function_name LambdaFunctionEventInvokeConfig#function_name}. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.destinationConfig">destinationConfig</a></code> | <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a></code> | destination_config block. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config#id LambdaFunctionEventInvokeConfig#id}. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.maximumEventAgeInSeconds">maximumEventAgeInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config#maximum_event_age_in_seconds LambdaFunctionEventInvokeConfig#maximum_event_age_in_seconds}. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config#maximum_retry_attempts LambdaFunctionEventInvokeConfig#maximum_retry_attempts}. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.qualifier">qualifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config#qualifier LambdaFunctionEventInvokeConfig#qualifier}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config#function_name LambdaFunctionEventInvokeConfig#function_name}.

---

##### `destinationConfig`<sup>Optional</sup> <a name="destinationConfig" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.destinationConfig"></a>

```typescript
public readonly destinationConfig: LambdaFunctionEventInvokeConfigDestinationConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a>

destination_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config#destination_config LambdaFunctionEventInvokeConfig#destination_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config#id LambdaFunctionEventInvokeConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximumEventAgeInSeconds`<sup>Optional</sup> <a name="maximumEventAgeInSeconds" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.maximumEventAgeInSeconds"></a>

```typescript
public readonly maximumEventAgeInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config#maximum_event_age_in_seconds LambdaFunctionEventInvokeConfig#maximum_event_age_in_seconds}.

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="maximumRetryAttempts" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.maximumRetryAttempts"></a>

```typescript
public readonly maximumRetryAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config#maximum_retry_attempts LambdaFunctionEventInvokeConfig#maximum_retry_attempts}.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config#qualifier LambdaFunctionEventInvokeConfig#qualifier}.

---

### LambdaFunctionEventInvokeConfigDestinationConfig <a name="LambdaFunctionEventInvokeConfigDestinationConfig" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig.Initializer"></a>

```typescript
import { lambdaFunctionEventInvokeConfig } from '@cdktf/aws-cdk'

const lambdaFunctionEventInvokeConfigDestinationConfig: lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a></code> | on_failure block. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig.property.onSuccess">onSuccess</a></code> | <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a></code> | on_success block. |

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig.property.onFailure"></a>

```typescript
public readonly onFailure: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure;
```

- *Type:* <a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config#on_failure LambdaFunctionEventInvokeConfig#on_failure}

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig.property.onSuccess"></a>

```typescript
public readonly onSuccess: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess;
```

- *Type:* <a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a>

on_success block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config#on_success LambdaFunctionEventInvokeConfig#on_success}

---

### LambdaFunctionEventInvokeConfigDestinationConfigOnFailure <a name="LambdaFunctionEventInvokeConfigDestinationConfigOnFailure" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure.Initializer"></a>

```typescript
import { lambdaFunctionEventInvokeConfig } from '@cdktf/aws-cdk'

const lambdaFunctionEventInvokeConfigDestinationConfigOnFailure: lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config#destination LambdaFunctionEventInvokeConfig#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config#destination LambdaFunctionEventInvokeConfig#destination}.

---

### LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess <a name="LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess.Initializer"></a>

```typescript
import { lambdaFunctionEventInvokeConfig } from '@cdktf/aws-cdk'

const lambdaFunctionEventInvokeConfigDestinationConfigOnSuccess: lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config#destination LambdaFunctionEventInvokeConfig#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config#destination LambdaFunctionEventInvokeConfig#destination}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference <a name="LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer"></a>

```typescript
import { lambdaFunctionEventInvokeConfig } from '@cdktf/aws-cdk'

new lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure;
```

- *Type:* <a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a>

---


### LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference <a name="LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer"></a>

```typescript
import { lambdaFunctionEventInvokeConfig } from '@cdktf/aws-cdk'

new lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess;
```

- *Type:* <a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a>

---


### LambdaFunctionEventInvokeConfigDestinationConfigOutputReference <a name="LambdaFunctionEventInvokeConfigDestinationConfigOutputReference" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.Initializer"></a>

```typescript
import { lambdaFunctionEventInvokeConfig } from '@cdktf/aws-cdk'

new lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.putOnFailure">putOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.putOnSuccess">putOnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resetOnFailure">resetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resetOnSuccess">resetOnSuccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnFailure` <a name="putOnFailure" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.putOnFailure"></a>

```typescript
public putOnFailure(value: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a>

---

##### `putOnSuccess` <a name="putOnSuccess" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.putOnSuccess"></a>

```typescript
public putOnSuccess(value: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.putOnSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a>

---

##### `resetOnFailure` <a name="resetOnFailure" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resetOnFailure"></a>

```typescript
public resetOnFailure(): void
```

##### `resetOnSuccess` <a name="resetOnSuccess" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resetOnSuccess"></a>

```typescript
public resetOnSuccess(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference">LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onSuccess">onSuccess</a></code> | <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onFailureInput">onFailureInput</a></code> | <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onSuccessInput">onSuccessInput</a></code> | <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onFailure"></a>

```typescript
public readonly onFailure: LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference">LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference</a>

---

##### `onSuccess`<sup>Required</sup> <a name="onSuccess" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onSuccess"></a>

```typescript
public readonly onSuccess: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference</a>

---

##### `onFailureInput`<sup>Optional</sup> <a name="onFailureInput" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onFailureInput"></a>

```typescript
public readonly onFailureInput: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure;
```

- *Type:* <a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a>

---

##### `onSuccessInput`<sup>Optional</sup> <a name="onSuccessInput" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onSuccessInput"></a>

```typescript
public readonly onSuccessInput: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess;
```

- *Type:* <a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LambdaFunctionEventInvokeConfigDestinationConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a>

---




# `sagemakerStudioLifecycleConfig` Submodule <a name="`sagemakerStudioLifecycleConfig` Submodule" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerStudioLifecycleConfig <a name="SagemakerStudioLifecycleConfig" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_studio_lifecycle_config aws_sagemaker_studio_lifecycle_config}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer"></a>

```typescript
import { sagemakerStudioLifecycleConfig } from '@cdktf/aws-cdk'

new sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig(scope: Construct, id: string, config: SagemakerStudioLifecycleConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig">SagemakerStudioLifecycleConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig">SagemakerStudioLifecycleConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerStudioLifecycleConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isConstruct"></a>

```typescript
import { sagemakerStudioLifecycleConfig } from '@cdktf/aws-cdk'

sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformElement"></a>

```typescript
import { sagemakerStudioLifecycleConfig } from '@cdktf/aws-cdk'

sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformResource"></a>

```typescript
import { sagemakerStudioLifecycleConfig } from '@cdktf/aws-cdk'

sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.generateConfigForImport"></a>

```typescript
import { sagemakerStudioLifecycleConfig } from '@cdktf/aws-cdk'

sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SagemakerStudioLifecycleConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerStudioLifecycleConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerStudioLifecycleConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_studio_lifecycle_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerStudioLifecycleConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppTypeInput">studioLifecycleConfigAppTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigContentInput">studioLifecycleConfigContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigNameInput">studioLifecycleConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppType">studioLifecycleConfigAppType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigContent">studioLifecycleConfigContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigName">studioLifecycleConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `studioLifecycleConfigAppTypeInput`<sup>Optional</sup> <a name="studioLifecycleConfigAppTypeInput" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppTypeInput"></a>

```typescript
public readonly studioLifecycleConfigAppTypeInput: string;
```

- *Type:* string

---

##### `studioLifecycleConfigContentInput`<sup>Optional</sup> <a name="studioLifecycleConfigContentInput" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigContentInput"></a>

```typescript
public readonly studioLifecycleConfigContentInput: string;
```

- *Type:* string

---

##### `studioLifecycleConfigNameInput`<sup>Optional</sup> <a name="studioLifecycleConfigNameInput" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigNameInput"></a>

```typescript
public readonly studioLifecycleConfigNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `studioLifecycleConfigAppType`<sup>Required</sup> <a name="studioLifecycleConfigAppType" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppType"></a>

```typescript
public readonly studioLifecycleConfigAppType: string;
```

- *Type:* string

---

##### `studioLifecycleConfigContent`<sup>Required</sup> <a name="studioLifecycleConfigContent" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigContent"></a>

```typescript
public readonly studioLifecycleConfigContent: string;
```

- *Type:* string

---

##### `studioLifecycleConfigName`<sup>Required</sup> <a name="studioLifecycleConfigName" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigName"></a>

```typescript
public readonly studioLifecycleConfigName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerStudioLifecycleConfigConfig <a name="SagemakerStudioLifecycleConfigConfig" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.Initializer"></a>

```typescript
import { sagemakerStudioLifecycleConfig } from '@cdktf/aws-cdk'

const sagemakerStudioLifecycleConfigConfig: sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigAppType">studioLifecycleConfigAppType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_studio_lifecycle_config#studio_lifecycle_config_app_type SagemakerStudioLifecycleConfig#studio_lifecycle_config_app_type}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigContent">studioLifecycleConfigContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_studio_lifecycle_config#studio_lifecycle_config_content SagemakerStudioLifecycleConfig#studio_lifecycle_config_content}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigName">studioLifecycleConfigName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_studio_lifecycle_config#studio_lifecycle_config_name SagemakerStudioLifecycleConfig#studio_lifecycle_config_name}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_studio_lifecycle_config#id SagemakerStudioLifecycleConfig#id}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_studio_lifecycle_config#tags SagemakerStudioLifecycleConfig#tags}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_studio_lifecycle_config#tags_all SagemakerStudioLifecycleConfig#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `studioLifecycleConfigAppType`<sup>Required</sup> <a name="studioLifecycleConfigAppType" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigAppType"></a>

```typescript
public readonly studioLifecycleConfigAppType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_studio_lifecycle_config#studio_lifecycle_config_app_type SagemakerStudioLifecycleConfig#studio_lifecycle_config_app_type}.

---

##### `studioLifecycleConfigContent`<sup>Required</sup> <a name="studioLifecycleConfigContent" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigContent"></a>

```typescript
public readonly studioLifecycleConfigContent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_studio_lifecycle_config#studio_lifecycle_config_content SagemakerStudioLifecycleConfig#studio_lifecycle_config_content}.

---

##### `studioLifecycleConfigName`<sup>Required</sup> <a name="studioLifecycleConfigName" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigName"></a>

```typescript
public readonly studioLifecycleConfigName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_studio_lifecycle_config#studio_lifecycle_config_name SagemakerStudioLifecycleConfig#studio_lifecycle_config_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_studio_lifecycle_config#id SagemakerStudioLifecycleConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_studio_lifecycle_config#tags SagemakerStudioLifecycleConfig#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_studio_lifecycle_config#tags_all SagemakerStudioLifecycleConfig#tags_all}.

---




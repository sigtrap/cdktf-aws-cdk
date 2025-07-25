# `appsyncResolver` Submodule <a name="`appsyncResolver` Submodule" id="@cdktf/aws-cdk.appsyncResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncResolver <a name="AppsyncResolver" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver aws_appsync_resolver}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktf/aws-cdk'

new appsyncResolver.AppsyncResolver(scope: Construct, id: string, config: AppsyncResolverConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig">AppsyncResolverConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig">AppsyncResolverConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.putCachingConfig">putCachingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.putPipelineConfig">putPipelineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.putSyncConfig">putSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetCachingConfig">resetCachingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetDataSource">resetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetMaxBatchSize">resetMaxBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetPipelineConfig">resetPipelineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetRequestTemplate">resetRequestTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetResponseTemplate">resetResponseTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetSyncConfig">resetSyncConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCachingConfig` <a name="putCachingConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.putCachingConfig"></a>

```typescript
public putCachingConfig(value: AppsyncResolverCachingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.putCachingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

---

##### `putPipelineConfig` <a name="putPipelineConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.putPipelineConfig"></a>

```typescript
public putPipelineConfig(value: AppsyncResolverPipelineConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.putPipelineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

---

##### `putSyncConfig` <a name="putSyncConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.putSyncConfig"></a>

```typescript
public putSyncConfig(value: AppsyncResolverSyncConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.putSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

---

##### `resetCachingConfig` <a name="resetCachingConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetCachingConfig"></a>

```typescript
public resetCachingConfig(): void
```

##### `resetDataSource` <a name="resetDataSource" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetDataSource"></a>

```typescript
public resetDataSource(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKind` <a name="resetKind" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetKind"></a>

```typescript
public resetKind(): void
```

##### `resetMaxBatchSize` <a name="resetMaxBatchSize" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetMaxBatchSize"></a>

```typescript
public resetMaxBatchSize(): void
```

##### `resetPipelineConfig` <a name="resetPipelineConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetPipelineConfig"></a>

```typescript
public resetPipelineConfig(): void
```

##### `resetRequestTemplate` <a name="resetRequestTemplate" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetRequestTemplate"></a>

```typescript
public resetRequestTemplate(): void
```

##### `resetResponseTemplate` <a name="resetResponseTemplate" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetResponseTemplate"></a>

```typescript
public resetResponseTemplate(): void
```

##### `resetSyncConfig` <a name="resetSyncConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.resetSyncConfig"></a>

```typescript
public resetSyncConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppsyncResolver resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.isConstruct"></a>

```typescript
import { appsyncResolver } from '@cdktf/aws-cdk'

appsyncResolver.AppsyncResolver.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.isTerraformElement"></a>

```typescript
import { appsyncResolver } from '@cdktf/aws-cdk'

appsyncResolver.AppsyncResolver.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.isTerraformResource"></a>

```typescript
import { appsyncResolver } from '@cdktf/aws-cdk'

appsyncResolver.AppsyncResolver.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.generateConfigForImport"></a>

```typescript
import { appsyncResolver } from '@cdktf/aws-cdk'

appsyncResolver.AppsyncResolver.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppsyncResolver resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsyncResolver to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsyncResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppsyncResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.cachingConfig">cachingConfig</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference">AppsyncResolverCachingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.pipelineConfig">pipelineConfig</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference">AppsyncResolverPipelineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.syncConfig">syncConfig</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference">AppsyncResolverSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.cachingConfigInput">cachingConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.dataSourceInput">dataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.maxBatchSizeInput">maxBatchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.pipelineConfigInput">pipelineConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.requestTemplateInput">requestTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.responseTemplateInput">responseTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.syncConfigInput">syncConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.maxBatchSize">maxBatchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.requestTemplate">requestTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.responseTemplate">responseTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cachingConfig`<sup>Required</sup> <a name="cachingConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.cachingConfig"></a>

```typescript
public readonly cachingConfig: AppsyncResolverCachingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference">AppsyncResolverCachingConfigOutputReference</a>

---

##### `pipelineConfig`<sup>Required</sup> <a name="pipelineConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.pipelineConfig"></a>

```typescript
public readonly pipelineConfig: AppsyncResolverPipelineConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference">AppsyncResolverPipelineConfigOutputReference</a>

---

##### `syncConfig`<sup>Required</sup> <a name="syncConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.syncConfig"></a>

```typescript
public readonly syncConfig: AppsyncResolverSyncConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference">AppsyncResolverSyncConfigOutputReference</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `cachingConfigInput`<sup>Optional</sup> <a name="cachingConfigInput" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.cachingConfigInput"></a>

```typescript
public readonly cachingConfigInput: AppsyncResolverCachingConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: string;
```

- *Type:* string

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `maxBatchSizeInput`<sup>Optional</sup> <a name="maxBatchSizeInput" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.maxBatchSizeInput"></a>

```typescript
public readonly maxBatchSizeInput: number;
```

- *Type:* number

---

##### `pipelineConfigInput`<sup>Optional</sup> <a name="pipelineConfigInput" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.pipelineConfigInput"></a>

```typescript
public readonly pipelineConfigInput: AppsyncResolverPipelineConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

---

##### `requestTemplateInput`<sup>Optional</sup> <a name="requestTemplateInput" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.requestTemplateInput"></a>

```typescript
public readonly requestTemplateInput: string;
```

- *Type:* string

---

##### `responseTemplateInput`<sup>Optional</sup> <a name="responseTemplateInput" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.responseTemplateInput"></a>

```typescript
public readonly responseTemplateInput: string;
```

- *Type:* string

---

##### `syncConfigInput`<sup>Optional</sup> <a name="syncConfigInput" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.syncConfigInput"></a>

```typescript
public readonly syncConfigInput: AppsyncResolverSyncConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `maxBatchSize`<sup>Required</sup> <a name="maxBatchSize" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.maxBatchSize"></a>

```typescript
public readonly maxBatchSize: number;
```

- *Type:* number

---

##### `requestTemplate`<sup>Required</sup> <a name="requestTemplate" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.requestTemplate"></a>

```typescript
public readonly requestTemplate: string;
```

- *Type:* string

---

##### `responseTemplate`<sup>Required</sup> <a name="responseTemplate" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.responseTemplate"></a>

```typescript
public readonly responseTemplate: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolver.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncResolverCachingConfig <a name="AppsyncResolverCachingConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfig.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktf/aws-cdk'

const appsyncResolverCachingConfig: appsyncResolver.AppsyncResolverCachingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfig.property.cachingKeys">cachingKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#caching_keys AppsyncResolver#caching_keys}. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfig.property.ttl">ttl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#ttl AppsyncResolver#ttl}. |

---

##### `cachingKeys`<sup>Optional</sup> <a name="cachingKeys" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfig.property.cachingKeys"></a>

```typescript
public readonly cachingKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#caching_keys AppsyncResolver#caching_keys}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#ttl AppsyncResolver#ttl}.

---

### AppsyncResolverConfig <a name="AppsyncResolverConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktf/aws-cdk'

const appsyncResolverConfig: appsyncResolver.AppsyncResolverConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.apiId">apiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#api_id AppsyncResolver#api_id}. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.field">field</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#field AppsyncResolver#field}. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#type AppsyncResolver#type}. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.cachingConfig">cachingConfig</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | caching_config block. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.dataSource">dataSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#data_source AppsyncResolver#data_source}. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#id AppsyncResolver#id}. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#kind AppsyncResolver#kind}. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.maxBatchSize">maxBatchSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#max_batch_size AppsyncResolver#max_batch_size}. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.pipelineConfig">pipelineConfig</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | pipeline_config block. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.requestTemplate">requestTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#request_template AppsyncResolver#request_template}. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.responseTemplate">responseTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#response_template AppsyncResolver#response_template}. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.syncConfig">syncConfig</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | sync_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#api_id AppsyncResolver#api_id}.

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#field AppsyncResolver#field}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#type AppsyncResolver#type}.

---

##### `cachingConfig`<sup>Optional</sup> <a name="cachingConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.cachingConfig"></a>

```typescript
public readonly cachingConfig: AppsyncResolverCachingConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

caching_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#caching_config AppsyncResolver#caching_config}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#data_source AppsyncResolver#data_source}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#id AppsyncResolver#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#kind AppsyncResolver#kind}.

---

##### `maxBatchSize`<sup>Optional</sup> <a name="maxBatchSize" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.maxBatchSize"></a>

```typescript
public readonly maxBatchSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#max_batch_size AppsyncResolver#max_batch_size}.

---

##### `pipelineConfig`<sup>Optional</sup> <a name="pipelineConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.pipelineConfig"></a>

```typescript
public readonly pipelineConfig: AppsyncResolverPipelineConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

pipeline_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#pipeline_config AppsyncResolver#pipeline_config}

---

##### `requestTemplate`<sup>Optional</sup> <a name="requestTemplate" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.requestTemplate"></a>

```typescript
public readonly requestTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#request_template AppsyncResolver#request_template}.

---

##### `responseTemplate`<sup>Optional</sup> <a name="responseTemplate" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.responseTemplate"></a>

```typescript
public readonly responseTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#response_template AppsyncResolver#response_template}.

---

##### `syncConfig`<sup>Optional</sup> <a name="syncConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverConfig.property.syncConfig"></a>

```typescript
public readonly syncConfig: AppsyncResolverSyncConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

sync_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#sync_config AppsyncResolver#sync_config}

---

### AppsyncResolverPipelineConfig <a name="AppsyncResolverPipelineConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfig.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktf/aws-cdk'

const appsyncResolverPipelineConfig: appsyncResolver.AppsyncResolverPipelineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfig.property.functions">functions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#functions AppsyncResolver#functions}. |

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfig.property.functions"></a>

```typescript
public readonly functions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#functions AppsyncResolver#functions}.

---

### AppsyncResolverSyncConfig <a name="AppsyncResolverSyncConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfig.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktf/aws-cdk'

const appsyncResolverSyncConfig: appsyncResolver.AppsyncResolverSyncConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfig.property.conflictDetection">conflictDetection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#conflict_detection AppsyncResolver#conflict_detection}. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfig.property.conflictHandler">conflictHandler</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#conflict_handler AppsyncResolver#conflict_handler}. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfig.property.lambdaConflictHandlerConfig">lambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a></code> | lambda_conflict_handler_config block. |

---

##### `conflictDetection`<sup>Optional</sup> <a name="conflictDetection" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfig.property.conflictDetection"></a>

```typescript
public readonly conflictDetection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#conflict_detection AppsyncResolver#conflict_detection}.

---

##### `conflictHandler`<sup>Optional</sup> <a name="conflictHandler" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfig.property.conflictHandler"></a>

```typescript
public readonly conflictHandler: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#conflict_handler AppsyncResolver#conflict_handler}.

---

##### `lambdaConflictHandlerConfig`<sup>Optional</sup> <a name="lambdaConflictHandlerConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfig.property.lambdaConflictHandlerConfig"></a>

```typescript
public readonly lambdaConflictHandlerConfig: AppsyncResolverSyncConfigLambdaConflictHandlerConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

lambda_conflict_handler_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#lambda_conflict_handler_config AppsyncResolver#lambda_conflict_handler_config}

---

### AppsyncResolverSyncConfigLambdaConflictHandlerConfig <a name="AppsyncResolverSyncConfigLambdaConflictHandlerConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktf/aws-cdk'

const appsyncResolverSyncConfigLambdaConflictHandlerConfig: appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn">lambdaConflictHandlerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#lambda_conflict_handler_arn AppsyncResolver#lambda_conflict_handler_arn}. |

---

##### `lambdaConflictHandlerArn`<sup>Optional</sup> <a name="lambdaConflictHandlerArn" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn"></a>

```typescript
public readonly lambdaConflictHandlerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#lambda_conflict_handler_arn AppsyncResolver#lambda_conflict_handler_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncResolverCachingConfigOutputReference <a name="AppsyncResolverCachingConfigOutputReference" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktf/aws-cdk'

new appsyncResolver.AppsyncResolverCachingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetCachingKeys">resetCachingKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCachingKeys` <a name="resetCachingKeys" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetCachingKeys"></a>

```typescript
public resetCachingKeys(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeysInput">cachingKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeys">cachingKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cachingKeysInput`<sup>Optional</sup> <a name="cachingKeysInput" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeysInput"></a>

```typescript
public readonly cachingKeysInput: string[];
```

- *Type:* string[]

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `cachingKeys`<sup>Required</sup> <a name="cachingKeys" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeys"></a>

```typescript
public readonly cachingKeys: string[];
```

- *Type:* string[]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppsyncResolverCachingConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

---


### AppsyncResolverPipelineConfigOutputReference <a name="AppsyncResolverPipelineConfigOutputReference" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktf/aws-cdk'

new appsyncResolver.AppsyncResolverPipelineConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resetFunctions">resetFunctions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunctions` <a name="resetFunctions" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resetFunctions"></a>

```typescript
public resetFunctions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functionsInput">functionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functions">functions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionsInput`<sup>Optional</sup> <a name="functionsInput" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functionsInput"></a>

```typescript
public readonly functionsInput: string[];
```

- *Type:* string[]

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functions"></a>

```typescript
public readonly functions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppsyncResolverPipelineConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

---


### AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference <a name="AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktf/aws-cdk'

new appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn">resetLambdaConflictHandlerArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaConflictHandlerArn` <a name="resetLambdaConflictHandlerArn" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn"></a>

```typescript
public resetLambdaConflictHandlerArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput">lambdaConflictHandlerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn">lambdaConflictHandlerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerArnInput`<sup>Optional</sup> <a name="lambdaConflictHandlerArnInput" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput"></a>

```typescript
public readonly lambdaConflictHandlerArnInput: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerArn`<sup>Required</sup> <a name="lambdaConflictHandlerArn" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn"></a>

```typescript
public readonly lambdaConflictHandlerArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppsyncResolverSyncConfigLambdaConflictHandlerConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

---


### AppsyncResolverSyncConfigOutputReference <a name="AppsyncResolverSyncConfigOutputReference" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktf/aws-cdk'

new appsyncResolver.AppsyncResolverSyncConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.putLambdaConflictHandlerConfig">putLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictDetection">resetConflictDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictHandler">resetConflictHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetLambdaConflictHandlerConfig">resetLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaConflictHandlerConfig` <a name="putLambdaConflictHandlerConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.putLambdaConflictHandlerConfig"></a>

```typescript
public putLambdaConflictHandlerConfig(value: AppsyncResolverSyncConfigLambdaConflictHandlerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.putLambdaConflictHandlerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

---

##### `resetConflictDetection` <a name="resetConflictDetection" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictDetection"></a>

```typescript
public resetConflictDetection(): void
```

##### `resetConflictHandler` <a name="resetConflictHandler" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictHandler"></a>

```typescript
public resetConflictHandler(): void
```

##### `resetLambdaConflictHandlerConfig` <a name="resetLambdaConflictHandlerConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetLambdaConflictHandlerConfig"></a>

```typescript
public resetLambdaConflictHandlerConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfig">lambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetectionInput">conflictDetectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandlerInput">conflictHandlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput">lambdaConflictHandlerConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetection">conflictDetection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandler">conflictHandler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerConfig`<sup>Required</sup> <a name="lambdaConflictHandlerConfig" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfig"></a>

```typescript
public readonly lambdaConflictHandlerConfig: AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference</a>

---

##### `conflictDetectionInput`<sup>Optional</sup> <a name="conflictDetectionInput" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetectionInput"></a>

```typescript
public readonly conflictDetectionInput: string;
```

- *Type:* string

---

##### `conflictHandlerInput`<sup>Optional</sup> <a name="conflictHandlerInput" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandlerInput"></a>

```typescript
public readonly conflictHandlerInput: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerConfigInput`<sup>Optional</sup> <a name="lambdaConflictHandlerConfigInput" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput"></a>

```typescript
public readonly lambdaConflictHandlerConfigInput: AppsyncResolverSyncConfigLambdaConflictHandlerConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

---

##### `conflictDetection`<sup>Required</sup> <a name="conflictDetection" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetection"></a>

```typescript
public readonly conflictDetection: string;
```

- *Type:* string

---

##### `conflictHandler`<sup>Required</sup> <a name="conflictHandler" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandler"></a>

```typescript
public readonly conflictHandler: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppsyncResolverSyncConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

---




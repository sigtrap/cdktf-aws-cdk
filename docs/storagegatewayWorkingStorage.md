# `storagegatewayWorkingStorage` Submodule <a name="`storagegatewayWorkingStorage` Submodule" id="@cdktf/aws-cdk.storagegatewayWorkingStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayWorkingStorage <a name="StoragegatewayWorkingStorage" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/storagegateway_working_storage aws_storagegateway_working_storage}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.Initializer"></a>

```typescript
import { storagegatewayWorkingStorage } from '@cdktf/aws-cdk'

new storagegatewayWorkingStorage.StoragegatewayWorkingStorage(scope: Construct, id: string, config: StoragegatewayWorkingStorageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig">StoragegatewayWorkingStorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig">StoragegatewayWorkingStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StoragegatewayWorkingStorage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.isConstruct"></a>

```typescript
import { storagegatewayWorkingStorage } from '@cdktf/aws-cdk'

storagegatewayWorkingStorage.StoragegatewayWorkingStorage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.isTerraformElement"></a>

```typescript
import { storagegatewayWorkingStorage } from '@cdktf/aws-cdk'

storagegatewayWorkingStorage.StoragegatewayWorkingStorage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.isTerraformResource"></a>

```typescript
import { storagegatewayWorkingStorage } from '@cdktf/aws-cdk'

storagegatewayWorkingStorage.StoragegatewayWorkingStorage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.generateConfigForImport"></a>

```typescript
import { storagegatewayWorkingStorage } from '@cdktf/aws-cdk'

storagegatewayWorkingStorage.StoragegatewayWorkingStorage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StoragegatewayWorkingStorage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StoragegatewayWorkingStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StoragegatewayWorkingStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/storagegateway_working_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StoragegatewayWorkingStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.diskIdInput">diskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.gatewayArnInput">gatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.diskId">diskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `diskIdInput`<sup>Optional</sup> <a name="diskIdInput" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.diskIdInput"></a>

```typescript
public readonly diskIdInput: string;
```

- *Type:* string

---

##### `gatewayArnInput`<sup>Optional</sup> <a name="gatewayArnInput" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.gatewayArnInput"></a>

```typescript
public readonly gatewayArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `diskId`<sup>Required</sup> <a name="diskId" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.diskId"></a>

```typescript
public readonly diskId: string;
```

- *Type:* string

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayWorkingStorageConfig <a name="StoragegatewayWorkingStorageConfig" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.Initializer"></a>

```typescript
import { storagegatewayWorkingStorage } from '@cdktf/aws-cdk'

const storagegatewayWorkingStorageConfig: storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.diskId">diskId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/storagegateway_working_storage#disk_id StoragegatewayWorkingStorage#disk_id}. |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/storagegateway_working_storage#gateway_arn StoragegatewayWorkingStorage#gateway_arn}. |
| <code><a href="#@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/storagegateway_working_storage#id StoragegatewayWorkingStorage#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `diskId`<sup>Required</sup> <a name="diskId" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.diskId"></a>

```typescript
public readonly diskId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/storagegateway_working_storage#disk_id StoragegatewayWorkingStorage#disk_id}.

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/storagegateway_working_storage#gateway_arn StoragegatewayWorkingStorage#gateway_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.storagegatewayWorkingStorage.StoragegatewayWorkingStorageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/storagegateway_working_storage#id StoragegatewayWorkingStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




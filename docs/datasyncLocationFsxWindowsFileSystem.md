# `datasyncLocationFsxWindowsFileSystem` Submodule <a name="`datasyncLocationFsxWindowsFileSystem` Submodule" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationFsxWindowsFileSystem <a name="DatasyncLocationFsxWindowsFileSystem" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system aws_datasync_location_fsx_windows_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer"></a>

```typescript
import { datasyncLocationFsxWindowsFileSystem } from '@cdktf/aws-cdk'

new datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem(scope: Construct, id: string, config: DatasyncLocationFsxWindowsFileSystemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig">DatasyncLocationFsxWindowsFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig">DatasyncLocationFsxWindowsFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDomain` <a name="resetDomain" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetSubdirectory"></a>

```typescript
public resetSubdirectory(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatasyncLocationFsxWindowsFileSystem resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isConstruct"></a>

```typescript
import { datasyncLocationFsxWindowsFileSystem } from '@cdktf/aws-cdk'

datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformElement"></a>

```typescript
import { datasyncLocationFsxWindowsFileSystem } from '@cdktf/aws-cdk'

datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformResource"></a>

```typescript
import { datasyncLocationFsxWindowsFileSystem } from '@cdktf/aws-cdk'

datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.generateConfigForImport"></a>

```typescript
import { datasyncLocationFsxWindowsFileSystem } from '@cdktf/aws-cdk'

datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatasyncLocationFsxWindowsFileSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasyncLocationFsxWindowsFileSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasyncLocationFsxWindowsFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatasyncLocationFsxWindowsFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArnInput">fsxFilesystemArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArnsInput">securityGroupArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectoryInput">subdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArn">fsxFilesystemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArns">securityGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectory">subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `fsxFilesystemArnInput`<sup>Optional</sup> <a name="fsxFilesystemArnInput" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArnInput"></a>

```typescript
public readonly fsxFilesystemArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `securityGroupArnsInput`<sup>Optional</sup> <a name="securityGroupArnsInput" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArnsInput"></a>

```typescript
public readonly securityGroupArnsInput: string[];
```

- *Type:* string[]

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectoryInput"></a>

```typescript
public readonly subdirectoryInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `fsxFilesystemArn`<sup>Required</sup> <a name="fsxFilesystemArn" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArn"></a>

```typescript
public readonly fsxFilesystemArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArns"></a>

```typescript
public readonly securityGroupArns: string[];
```

- *Type:* string[]

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationFsxWindowsFileSystemConfig <a name="DatasyncLocationFsxWindowsFileSystemConfig" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.Initializer"></a>

```typescript
import { datasyncLocationFsxWindowsFileSystem } from '@cdktf/aws-cdk'

const datasyncLocationFsxWindowsFileSystemConfig: datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.fsxFilesystemArn">fsxFilesystemArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system#fsx_filesystem_arn DatasyncLocationFsxWindowsFileSystem#fsx_filesystem_arn}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system#password DatasyncLocationFsxWindowsFileSystem#password}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.securityGroupArns">securityGroupArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system#security_group_arns DatasyncLocationFsxWindowsFileSystem#security_group_arns}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.user">user</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system#user DatasyncLocationFsxWindowsFileSystem#user}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system#domain DatasyncLocationFsxWindowsFileSystem#domain}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system#id DatasyncLocationFsxWindowsFileSystem#id}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.subdirectory">subdirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system#subdirectory DatasyncLocationFsxWindowsFileSystem#subdirectory}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system#tags DatasyncLocationFsxWindowsFileSystem#tags}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system#tags_all DatasyncLocationFsxWindowsFileSystem#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fsxFilesystemArn`<sup>Required</sup> <a name="fsxFilesystemArn" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.fsxFilesystemArn"></a>

```typescript
public readonly fsxFilesystemArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system#fsx_filesystem_arn DatasyncLocationFsxWindowsFileSystem#fsx_filesystem_arn}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system#password DatasyncLocationFsxWindowsFileSystem#password}.

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.securityGroupArns"></a>

```typescript
public readonly securityGroupArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system#security_group_arns DatasyncLocationFsxWindowsFileSystem#security_group_arns}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system#user DatasyncLocationFsxWindowsFileSystem#user}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system#domain DatasyncLocationFsxWindowsFileSystem#domain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system#id DatasyncLocationFsxWindowsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system#subdirectory DatasyncLocationFsxWindowsFileSystem#subdirectory}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system#tags DatasyncLocationFsxWindowsFileSystem#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_windows_file_system#tags_all DatasyncLocationFsxWindowsFileSystem#tags_all}.

---




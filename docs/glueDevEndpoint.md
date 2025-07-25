# `glueDevEndpoint` Submodule <a name="`glueDevEndpoint` Submodule" id="@cdktf/aws-cdk.glueDevEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueDevEndpoint <a name="GlueDevEndpoint" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint aws_glue_dev_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.Initializer"></a>

```typescript
import { glueDevEndpoint } from '@cdktf/aws-cdk'

new glueDevEndpoint.GlueDevEndpoint(scope: Construct, id: string, config: GlueDevEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig">GlueDevEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig">GlueDevEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetExtraJarsS3Path">resetExtraJarsS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetExtraPythonLibsS3Path">resetExtraPythonLibsS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetGlueVersion">resetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetNumberOfNodes">resetNumberOfNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetNumberOfWorkers">resetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetPublicKey">resetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetPublicKeys">resetPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetSecurityConfiguration">resetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetWorkerType">resetWorkerType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetArguments` <a name="resetArguments" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetArguments"></a>

```typescript
public resetArguments(): void
```

##### `resetExtraJarsS3Path` <a name="resetExtraJarsS3Path" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetExtraJarsS3Path"></a>

```typescript
public resetExtraJarsS3Path(): void
```

##### `resetExtraPythonLibsS3Path` <a name="resetExtraPythonLibsS3Path" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetExtraPythonLibsS3Path"></a>

```typescript
public resetExtraPythonLibsS3Path(): void
```

##### `resetGlueVersion` <a name="resetGlueVersion" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetGlueVersion"></a>

```typescript
public resetGlueVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNumberOfNodes` <a name="resetNumberOfNodes" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetNumberOfNodes"></a>

```typescript
public resetNumberOfNodes(): void
```

##### `resetNumberOfWorkers` <a name="resetNumberOfWorkers" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetNumberOfWorkers"></a>

```typescript
public resetNumberOfWorkers(): void
```

##### `resetPublicKey` <a name="resetPublicKey" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetPublicKey"></a>

```typescript
public resetPublicKey(): void
```

##### `resetPublicKeys` <a name="resetPublicKeys" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetPublicKeys"></a>

```typescript
public resetPublicKeys(): void
```

##### `resetSecurityConfiguration` <a name="resetSecurityConfiguration" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetSecurityConfiguration"></a>

```typescript
public resetSecurityConfiguration(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetWorkerType` <a name="resetWorkerType" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.resetWorkerType"></a>

```typescript
public resetWorkerType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GlueDevEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.isConstruct"></a>

```typescript
import { glueDevEndpoint } from '@cdktf/aws-cdk'

glueDevEndpoint.GlueDevEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.isTerraformElement"></a>

```typescript
import { glueDevEndpoint } from '@cdktf/aws-cdk'

glueDevEndpoint.GlueDevEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.isTerraformResource"></a>

```typescript
import { glueDevEndpoint } from '@cdktf/aws-cdk'

glueDevEndpoint.GlueDevEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.generateConfigForImport"></a>

```typescript
import { glueDevEndpoint } from '@cdktf/aws-cdk'

glueDevEndpoint.GlueDevEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GlueDevEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueDevEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueDevEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GlueDevEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.failureReason">failureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.privateAddress">privateAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.publicAddress">publicAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.yarnEndpointAddress">yarnEndpointAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.zeppelinRemoteSparkInterpreterPort">zeppelinRemoteSparkInterpreterPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.argumentsInput">argumentsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.extraJarsS3PathInput">extraJarsS3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.extraPythonLibsS3PathInput">extraPythonLibsS3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.glueVersionInput">glueVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.numberOfNodesInput">numberOfNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.numberOfWorkersInput">numberOfWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.publicKeyInput">publicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.publicKeysInput">publicKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.securityConfigurationInput">securityConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.workerTypeInput">workerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.arguments">arguments</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.extraJarsS3Path">extraJarsS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.extraPythonLibsS3Path">extraPythonLibsS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.glueVersion">glueVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.numberOfNodes">numberOfNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.numberOfWorkers">numberOfWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.publicKeys">publicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.securityConfiguration">securityConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.workerType">workerType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.failureReason"></a>

```typescript
public readonly failureReason: string;
```

- *Type:* string

---

##### `privateAddress`<sup>Required</sup> <a name="privateAddress" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.privateAddress"></a>

```typescript
public readonly privateAddress: string;
```

- *Type:* string

---

##### `publicAddress`<sup>Required</sup> <a name="publicAddress" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.publicAddress"></a>

```typescript
public readonly publicAddress: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `yarnEndpointAddress`<sup>Required</sup> <a name="yarnEndpointAddress" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.yarnEndpointAddress"></a>

```typescript
public readonly yarnEndpointAddress: string;
```

- *Type:* string

---

##### `zeppelinRemoteSparkInterpreterPort`<sup>Required</sup> <a name="zeppelinRemoteSparkInterpreterPort" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.zeppelinRemoteSparkInterpreterPort"></a>

```typescript
public readonly zeppelinRemoteSparkInterpreterPort: number;
```

- *Type:* number

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.argumentsInput"></a>

```typescript
public readonly argumentsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `extraJarsS3PathInput`<sup>Optional</sup> <a name="extraJarsS3PathInput" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.extraJarsS3PathInput"></a>

```typescript
public readonly extraJarsS3PathInput: string;
```

- *Type:* string

---

##### `extraPythonLibsS3PathInput`<sup>Optional</sup> <a name="extraPythonLibsS3PathInput" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.extraPythonLibsS3PathInput"></a>

```typescript
public readonly extraPythonLibsS3PathInput: string;
```

- *Type:* string

---

##### `glueVersionInput`<sup>Optional</sup> <a name="glueVersionInput" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.glueVersionInput"></a>

```typescript
public readonly glueVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `numberOfNodesInput`<sup>Optional</sup> <a name="numberOfNodesInput" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.numberOfNodesInput"></a>

```typescript
public readonly numberOfNodesInput: number;
```

- *Type:* number

---

##### `numberOfWorkersInput`<sup>Optional</sup> <a name="numberOfWorkersInput" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.numberOfWorkersInput"></a>

```typescript
public readonly numberOfWorkersInput: number;
```

- *Type:* number

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: string;
```

- *Type:* string

---

##### `publicKeysInput`<sup>Optional</sup> <a name="publicKeysInput" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.publicKeysInput"></a>

```typescript
public readonly publicKeysInput: string[];
```

- *Type:* string[]

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `securityConfigurationInput`<sup>Optional</sup> <a name="securityConfigurationInput" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.securityConfigurationInput"></a>

```typescript
public readonly securityConfigurationInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workerTypeInput`<sup>Optional</sup> <a name="workerTypeInput" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.workerTypeInput"></a>

```typescript
public readonly workerTypeInput: string;
```

- *Type:* string

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.arguments"></a>

```typescript
public readonly arguments: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `extraJarsS3Path`<sup>Required</sup> <a name="extraJarsS3Path" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.extraJarsS3Path"></a>

```typescript
public readonly extraJarsS3Path: string;
```

- *Type:* string

---

##### `extraPythonLibsS3Path`<sup>Required</sup> <a name="extraPythonLibsS3Path" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.extraPythonLibsS3Path"></a>

```typescript
public readonly extraPythonLibsS3Path: string;
```

- *Type:* string

---

##### `glueVersion`<sup>Required</sup> <a name="glueVersion" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.glueVersion"></a>

```typescript
public readonly glueVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `numberOfNodes`<sup>Required</sup> <a name="numberOfNodes" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.numberOfNodes"></a>

```typescript
public readonly numberOfNodes: number;
```

- *Type:* number

---

##### `numberOfWorkers`<sup>Required</sup> <a name="numberOfWorkers" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.numberOfWorkers"></a>

```typescript
public readonly numberOfWorkers: number;
```

- *Type:* number

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `publicKeys`<sup>Required</sup> <a name="publicKeys" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.publicKeys"></a>

```typescript
public readonly publicKeys: string[];
```

- *Type:* string[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `securityConfiguration`<sup>Required</sup> <a name="securityConfiguration" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.securityConfiguration"></a>

```typescript
public readonly securityConfiguration: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workerType`<sup>Required</sup> <a name="workerType" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.workerType"></a>

```typescript
public readonly workerType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueDevEndpointConfig <a name="GlueDevEndpointConfig" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.Initializer"></a>

```typescript
import { glueDevEndpoint } from '@cdktf/aws-cdk'

const glueDevEndpointConfig: glueDevEndpoint.GlueDevEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#name GlueDevEndpoint#name}. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#role_arn GlueDevEndpoint#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.arguments">arguments</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#arguments GlueDevEndpoint#arguments}. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.extraJarsS3Path">extraJarsS3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#extra_jars_s3_path GlueDevEndpoint#extra_jars_s3_path}. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.extraPythonLibsS3Path">extraPythonLibsS3Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#extra_python_libs_s3_path GlueDevEndpoint#extra_python_libs_s3_path}. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.glueVersion">glueVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#glue_version GlueDevEndpoint#glue_version}. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#id GlueDevEndpoint#id}. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.numberOfNodes">numberOfNodes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#number_of_nodes GlueDevEndpoint#number_of_nodes}. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.numberOfWorkers">numberOfWorkers</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#number_of_workers GlueDevEndpoint#number_of_workers}. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.publicKey">publicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#public_key GlueDevEndpoint#public_key}. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.publicKeys">publicKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#public_keys GlueDevEndpoint#public_keys}. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.securityConfiguration">securityConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#security_configuration GlueDevEndpoint#security_configuration}. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#security_group_ids GlueDevEndpoint#security_group_ids}. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#subnet_id GlueDevEndpoint#subnet_id}. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#tags GlueDevEndpoint#tags}. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#tags_all GlueDevEndpoint#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.workerType">workerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#worker_type GlueDevEndpoint#worker_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#name GlueDevEndpoint#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#role_arn GlueDevEndpoint#role_arn}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.arguments"></a>

```typescript
public readonly arguments: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#arguments GlueDevEndpoint#arguments}.

---

##### `extraJarsS3Path`<sup>Optional</sup> <a name="extraJarsS3Path" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.extraJarsS3Path"></a>

```typescript
public readonly extraJarsS3Path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#extra_jars_s3_path GlueDevEndpoint#extra_jars_s3_path}.

---

##### `extraPythonLibsS3Path`<sup>Optional</sup> <a name="extraPythonLibsS3Path" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.extraPythonLibsS3Path"></a>

```typescript
public readonly extraPythonLibsS3Path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#extra_python_libs_s3_path GlueDevEndpoint#extra_python_libs_s3_path}.

---

##### `glueVersion`<sup>Optional</sup> <a name="glueVersion" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.glueVersion"></a>

```typescript
public readonly glueVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#glue_version GlueDevEndpoint#glue_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#id GlueDevEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `numberOfNodes`<sup>Optional</sup> <a name="numberOfNodes" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.numberOfNodes"></a>

```typescript
public readonly numberOfNodes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#number_of_nodes GlueDevEndpoint#number_of_nodes}.

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="numberOfWorkers" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.numberOfWorkers"></a>

```typescript
public readonly numberOfWorkers: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#number_of_workers GlueDevEndpoint#number_of_workers}.

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#public_key GlueDevEndpoint#public_key}.

---

##### `publicKeys`<sup>Optional</sup> <a name="publicKeys" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.publicKeys"></a>

```typescript
public readonly publicKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#public_keys GlueDevEndpoint#public_keys}.

---

##### `securityConfiguration`<sup>Optional</sup> <a name="securityConfiguration" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.securityConfiguration"></a>

```typescript
public readonly securityConfiguration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#security_configuration GlueDevEndpoint#security_configuration}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#security_group_ids GlueDevEndpoint#security_group_ids}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#subnet_id GlueDevEndpoint#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#tags GlueDevEndpoint#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#tags_all GlueDevEndpoint#tags_all}.

---

##### `workerType`<sup>Optional</sup> <a name="workerType" id="@cdktf/aws-cdk.glueDevEndpoint.GlueDevEndpointConfig.property.workerType"></a>

```typescript
public readonly workerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_dev_endpoint#worker_type GlueDevEndpoint#worker_type}.

---




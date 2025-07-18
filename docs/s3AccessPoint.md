# `s3AccessPoint` Submodule <a name="`s3AccessPoint` Submodule" id="@cdktf/aws-cdk.s3AccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3AccessPoint <a name="S3AccessPoint" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point aws_s3_access_point}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.Initializer"></a>

```typescript
import { s3AccessPoint } from '@cdktf/aws-cdk'

new s3AccessPoint.S3AccessPoint(scope: Construct, id: string, config: S3AccessPointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig">S3AccessPointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig">S3AccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.putPublicAccessBlockConfiguration">putPublicAccessBlockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.putVpcConfiguration">putVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.resetPublicAccessBlockConfiguration">resetPublicAccessBlockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.resetVpcConfiguration">resetVpcConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPublicAccessBlockConfiguration` <a name="putPublicAccessBlockConfiguration" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.putPublicAccessBlockConfiguration"></a>

```typescript
public putPublicAccessBlockConfiguration(value: S3AccessPointPublicAccessBlockConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.putPublicAccessBlockConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a>

---

##### `putVpcConfiguration` <a name="putVpcConfiguration" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.putVpcConfiguration"></a>

```typescript
public putVpcConfiguration(value: S3AccessPointVpcConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetPublicAccessBlockConfiguration` <a name="resetPublicAccessBlockConfiguration" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.resetPublicAccessBlockConfiguration"></a>

```typescript
public resetPublicAccessBlockConfiguration(): void
```

##### `resetVpcConfiguration` <a name="resetVpcConfiguration" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.resetVpcConfiguration"></a>

```typescript
public resetVpcConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3AccessPoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.isConstruct"></a>

```typescript
import { s3AccessPoint } from '@cdktf/aws-cdk'

s3AccessPoint.S3AccessPoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.isTerraformElement"></a>

```typescript
import { s3AccessPoint } from '@cdktf/aws-cdk'

s3AccessPoint.S3AccessPoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.isTerraformResource"></a>

```typescript
import { s3AccessPoint } from '@cdktf/aws-cdk'

s3AccessPoint.S3AccessPoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.generateConfigForImport"></a>

```typescript
import { s3AccessPoint } from '@cdktf/aws-cdk'

s3AccessPoint.S3AccessPoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a S3AccessPoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3AccessPoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3AccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3AccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.endpoints">endpoints</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.hasPublicAccessPolicy">hasPublicAccessPolicy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.networkOrigin">networkOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.publicAccessBlockConfiguration">publicAccessBlockConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference">S3AccessPointPublicAccessBlockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference">S3AccessPointVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.publicAccessBlockConfigurationInput">publicAccessBlockConfigurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.vpcConfigurationInput">vpcConfigurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.policy">policy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.endpoints"></a>

```typescript
public readonly endpoints: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hasPublicAccessPolicy`<sup>Required</sup> <a name="hasPublicAccessPolicy" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.hasPublicAccessPolicy"></a>

```typescript
public readonly hasPublicAccessPolicy: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `networkOrigin`<sup>Required</sup> <a name="networkOrigin" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.networkOrigin"></a>

```typescript
public readonly networkOrigin: string;
```

- *Type:* string

---

##### `publicAccessBlockConfiguration`<sup>Required</sup> <a name="publicAccessBlockConfiguration" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.publicAccessBlockConfiguration"></a>

```typescript
public readonly publicAccessBlockConfiguration: S3AccessPointPublicAccessBlockConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference">S3AccessPointPublicAccessBlockConfigurationOutputReference</a>

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: S3AccessPointVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference">S3AccessPointVpcConfigurationOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `publicAccessBlockConfigurationInput`<sup>Optional</sup> <a name="publicAccessBlockConfigurationInput" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.publicAccessBlockConfigurationInput"></a>

```typescript
public readonly publicAccessBlockConfigurationInput: S3AccessPointPublicAccessBlockConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a>

---

##### `vpcConfigurationInput`<sup>Optional</sup> <a name="vpcConfigurationInput" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.vpcConfigurationInput"></a>

```typescript
public readonly vpcConfigurationInput: S3AccessPointVpcConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3AccessPointConfig <a name="S3AccessPointConfig" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.Initializer"></a>

```typescript
import { s3AccessPoint } from '@cdktf/aws-cdk'

const s3AccessPointConfig: s3AccessPoint.S3AccessPointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#bucket S3AccessPoint#bucket}. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#name S3AccessPoint#name}. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#account_id S3AccessPoint#account_id}. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#id S3AccessPoint#id}. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#policy S3AccessPoint#policy}. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.publicAccessBlockConfiguration">publicAccessBlockConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a></code> | public_access_block_configuration block. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a></code> | vpc_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#bucket S3AccessPoint#bucket}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#name S3AccessPoint#name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#account_id S3AccessPoint#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#id S3AccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#policy S3AccessPoint#policy}.

---

##### `publicAccessBlockConfiguration`<sup>Optional</sup> <a name="publicAccessBlockConfiguration" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.publicAccessBlockConfiguration"></a>

```typescript
public readonly publicAccessBlockConfiguration: S3AccessPointPublicAccessBlockConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a>

public_access_block_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#public_access_block_configuration S3AccessPoint#public_access_block_configuration}

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointConfig.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: S3AccessPointVpcConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#vpc_configuration S3AccessPoint#vpc_configuration}

---

### S3AccessPointPublicAccessBlockConfiguration <a name="S3AccessPointPublicAccessBlockConfiguration" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.Initializer"></a>

```typescript
import { s3AccessPoint } from '@cdktf/aws-cdk'

const s3AccessPointPublicAccessBlockConfiguration: s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.blockPublicAcls">blockPublicAcls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#block_public_acls S3AccessPoint#block_public_acls}. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.blockPublicPolicy">blockPublicPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#block_public_policy S3AccessPoint#block_public_policy}. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.ignorePublicAcls">ignorePublicAcls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#ignore_public_acls S3AccessPoint#ignore_public_acls}. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.restrictPublicBuckets">restrictPublicBuckets</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#restrict_public_buckets S3AccessPoint#restrict_public_buckets}. |

---

##### `blockPublicAcls`<sup>Optional</sup> <a name="blockPublicAcls" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.blockPublicAcls"></a>

```typescript
public readonly blockPublicAcls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#block_public_acls S3AccessPoint#block_public_acls}.

---

##### `blockPublicPolicy`<sup>Optional</sup> <a name="blockPublicPolicy" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.blockPublicPolicy"></a>

```typescript
public readonly blockPublicPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#block_public_policy S3AccessPoint#block_public_policy}.

---

##### `ignorePublicAcls`<sup>Optional</sup> <a name="ignorePublicAcls" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.ignorePublicAcls"></a>

```typescript
public readonly ignorePublicAcls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#ignore_public_acls S3AccessPoint#ignore_public_acls}.

---

##### `restrictPublicBuckets`<sup>Optional</sup> <a name="restrictPublicBuckets" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.restrictPublicBuckets"></a>

```typescript
public readonly restrictPublicBuckets: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#restrict_public_buckets S3AccessPoint#restrict_public_buckets}.

---

### S3AccessPointVpcConfiguration <a name="S3AccessPointVpcConfiguration" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfiguration.Initializer"></a>

```typescript
import { s3AccessPoint } from '@cdktf/aws-cdk'

const s3AccessPointVpcConfiguration: s3AccessPoint.S3AccessPointVpcConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfiguration.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#vpc_id S3AccessPoint#vpc_id}. |

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfiguration.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_access_point#vpc_id S3AccessPoint#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3AccessPointPublicAccessBlockConfigurationOutputReference <a name="S3AccessPointPublicAccessBlockConfigurationOutputReference" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer"></a>

```typescript
import { s3AccessPoint } from '@cdktf/aws-cdk'

new s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicAcls">resetBlockPublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicPolicy">resetBlockPublicPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetIgnorePublicAcls">resetIgnorePublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetRestrictPublicBuckets">resetRestrictPublicBuckets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBlockPublicAcls` <a name="resetBlockPublicAcls" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicAcls"></a>

```typescript
public resetBlockPublicAcls(): void
```

##### `resetBlockPublicPolicy` <a name="resetBlockPublicPolicy" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicPolicy"></a>

```typescript
public resetBlockPublicPolicy(): void
```

##### `resetIgnorePublicAcls` <a name="resetIgnorePublicAcls" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetIgnorePublicAcls"></a>

```typescript
public resetIgnorePublicAcls(): void
```

##### `resetRestrictPublicBuckets` <a name="resetRestrictPublicBuckets" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetRestrictPublicBuckets"></a>

```typescript
public resetRestrictPublicBuckets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAclsInput">blockPublicAclsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicyInput">blockPublicPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAclsInput">ignorePublicAclsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBucketsInput">restrictPublicBucketsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls">blockPublicAcls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy">blockPublicPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls">ignorePublicAcls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets">restrictPublicBuckets</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockPublicAclsInput`<sup>Optional</sup> <a name="blockPublicAclsInput" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAclsInput"></a>

```typescript
public readonly blockPublicAclsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blockPublicPolicyInput`<sup>Optional</sup> <a name="blockPublicPolicyInput" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicyInput"></a>

```typescript
public readonly blockPublicPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignorePublicAclsInput`<sup>Optional</sup> <a name="ignorePublicAclsInput" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAclsInput"></a>

```typescript
public readonly ignorePublicAclsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restrictPublicBucketsInput`<sup>Optional</sup> <a name="restrictPublicBucketsInput" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBucketsInput"></a>

```typescript
public readonly restrictPublicBucketsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blockPublicAcls`<sup>Required</sup> <a name="blockPublicAcls" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls"></a>

```typescript
public readonly blockPublicAcls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blockPublicPolicy`<sup>Required</sup> <a name="blockPublicPolicy" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy"></a>

```typescript
public readonly blockPublicPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignorePublicAcls`<sup>Required</sup> <a name="ignorePublicAcls" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls"></a>

```typescript
public readonly ignorePublicAcls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restrictPublicBuckets`<sup>Required</sup> <a name="restrictPublicBuckets" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets"></a>

```typescript
public readonly restrictPublicBuckets: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3AccessPointPublicAccessBlockConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a>

---


### S3AccessPointVpcConfigurationOutputReference <a name="S3AccessPointVpcConfigurationOutputReference" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { s3AccessPoint } from '@cdktf/aws-cdk'

new s3AccessPoint.S3AccessPointVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3AccessPointVpcConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a>

---




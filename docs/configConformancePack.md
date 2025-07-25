# `configConformancePack` Submodule <a name="`configConformancePack` Submodule" id="@cdktf/aws-cdk.configConformancePack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConformancePack <a name="ConfigConformancePack" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_conformance_pack aws_config_conformance_pack}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.Initializer"></a>

```typescript
import { configConformancePack } from '@cdktf/aws-cdk'

new configConformancePack.ConfigConformancePack(scope: Construct, id: string, config: ConfigConformancePackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig">ConfigConformancePackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig">ConfigConformancePackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.putInputParameter">putInputParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.resetDeliveryS3Bucket">resetDeliveryS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.resetDeliveryS3KeyPrefix">resetDeliveryS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.resetInputParameter">resetInputParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.resetTemplateBody">resetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.resetTemplateS3Uri">resetTemplateS3Uri</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInputParameter` <a name="putInputParameter" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.putInputParameter"></a>

```typescript
public putInputParameter(value: IResolvable | ConfigConformancePackInputParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.putInputParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameter">ConfigConformancePackInputParameter</a>[]

---

##### `resetDeliveryS3Bucket` <a name="resetDeliveryS3Bucket" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.resetDeliveryS3Bucket"></a>

```typescript
public resetDeliveryS3Bucket(): void
```

##### `resetDeliveryS3KeyPrefix` <a name="resetDeliveryS3KeyPrefix" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.resetDeliveryS3KeyPrefix"></a>

```typescript
public resetDeliveryS3KeyPrefix(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInputParameter` <a name="resetInputParameter" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.resetInputParameter"></a>

```typescript
public resetInputParameter(): void
```

##### `resetTemplateBody` <a name="resetTemplateBody" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.resetTemplateBody"></a>

```typescript
public resetTemplateBody(): void
```

##### `resetTemplateS3Uri` <a name="resetTemplateS3Uri" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.resetTemplateS3Uri"></a>

```typescript
public resetTemplateS3Uri(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigConformancePack resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.isConstruct"></a>

```typescript
import { configConformancePack } from '@cdktf/aws-cdk'

configConformancePack.ConfigConformancePack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.isTerraformElement"></a>

```typescript
import { configConformancePack } from '@cdktf/aws-cdk'

configConformancePack.ConfigConformancePack.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.isTerraformResource"></a>

```typescript
import { configConformancePack } from '@cdktf/aws-cdk'

configConformancePack.ConfigConformancePack.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.generateConfigForImport"></a>

```typescript
import { configConformancePack } from '@cdktf/aws-cdk'

configConformancePack.ConfigConformancePack.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ConfigConformancePack resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigConformancePack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigConformancePack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_conformance_pack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConfigConformancePack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.inputParameter">inputParameter</a></code> | <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList">ConfigConformancePackInputParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.deliveryS3BucketInput">deliveryS3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefixInput">deliveryS3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.inputParameterInput">inputParameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameter">ConfigConformancePackInputParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.templateBodyInput">templateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.templateS3UriInput">templateS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.deliveryS3Bucket">deliveryS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefix">deliveryS3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.templateBody">templateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.templateS3Uri">templateS3Uri</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `inputParameter`<sup>Required</sup> <a name="inputParameter" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.inputParameter"></a>

```typescript
public readonly inputParameter: ConfigConformancePackInputParameterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList">ConfigConformancePackInputParameterList</a>

---

##### `deliveryS3BucketInput`<sup>Optional</sup> <a name="deliveryS3BucketInput" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.deliveryS3BucketInput"></a>

```typescript
public readonly deliveryS3BucketInput: string;
```

- *Type:* string

---

##### `deliveryS3KeyPrefixInput`<sup>Optional</sup> <a name="deliveryS3KeyPrefixInput" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefixInput"></a>

```typescript
public readonly deliveryS3KeyPrefixInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputParameterInput`<sup>Optional</sup> <a name="inputParameterInput" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.inputParameterInput"></a>

```typescript
public readonly inputParameterInput: IResolvable | ConfigConformancePackInputParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameter">ConfigConformancePackInputParameter</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `templateBodyInput`<sup>Optional</sup> <a name="templateBodyInput" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.templateBodyInput"></a>

```typescript
public readonly templateBodyInput: string;
```

- *Type:* string

---

##### `templateS3UriInput`<sup>Optional</sup> <a name="templateS3UriInput" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.templateS3UriInput"></a>

```typescript
public readonly templateS3UriInput: string;
```

- *Type:* string

---

##### `deliveryS3Bucket`<sup>Required</sup> <a name="deliveryS3Bucket" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.deliveryS3Bucket"></a>

```typescript
public readonly deliveryS3Bucket: string;
```

- *Type:* string

---

##### `deliveryS3KeyPrefix`<sup>Required</sup> <a name="deliveryS3KeyPrefix" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefix"></a>

```typescript
public readonly deliveryS3KeyPrefix: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

---

##### `templateS3Uri`<sup>Required</sup> <a name="templateS3Uri" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.templateS3Uri"></a>

```typescript
public readonly templateS3Uri: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePack.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConformancePackConfig <a name="ConfigConformancePackConfig" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.Initializer"></a>

```typescript
import { configConformancePack } from '@cdktf/aws-cdk'

const configConformancePackConfig: configConformancePack.ConfigConformancePackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_conformance_pack#name ConfigConformancePack#name}. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.deliveryS3Bucket">deliveryS3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_conformance_pack#delivery_s3_bucket ConfigConformancePack#delivery_s3_bucket}. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.deliveryS3KeyPrefix">deliveryS3KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_conformance_pack#delivery_s3_key_prefix ConfigConformancePack#delivery_s3_key_prefix}. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_conformance_pack#id ConfigConformancePack#id}. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.inputParameter">inputParameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameter">ConfigConformancePackInputParameter</a>[]</code> | input_parameter block. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.templateBody">templateBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_conformance_pack#template_body ConfigConformancePack#template_body}. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.templateS3Uri">templateS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_conformance_pack#template_s3_uri ConfigConformancePack#template_s3_uri}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_conformance_pack#name ConfigConformancePack#name}.

---

##### `deliveryS3Bucket`<sup>Optional</sup> <a name="deliveryS3Bucket" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.deliveryS3Bucket"></a>

```typescript
public readonly deliveryS3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_conformance_pack#delivery_s3_bucket ConfigConformancePack#delivery_s3_bucket}.

---

##### `deliveryS3KeyPrefix`<sup>Optional</sup> <a name="deliveryS3KeyPrefix" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.deliveryS3KeyPrefix"></a>

```typescript
public readonly deliveryS3KeyPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_conformance_pack#delivery_s3_key_prefix ConfigConformancePack#delivery_s3_key_prefix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_conformance_pack#id ConfigConformancePack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputParameter`<sup>Optional</sup> <a name="inputParameter" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.inputParameter"></a>

```typescript
public readonly inputParameter: IResolvable | ConfigConformancePackInputParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameter">ConfigConformancePackInputParameter</a>[]

input_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_conformance_pack#input_parameter ConfigConformancePack#input_parameter}

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_conformance_pack#template_body ConfigConformancePack#template_body}.

---

##### `templateS3Uri`<sup>Optional</sup> <a name="templateS3Uri" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackConfig.property.templateS3Uri"></a>

```typescript
public readonly templateS3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_conformance_pack#template_s3_uri ConfigConformancePack#template_s3_uri}.

---

### ConfigConformancePackInputParameter <a name="ConfigConformancePackInputParameter" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameter.Initializer"></a>

```typescript
import { configConformancePack } from '@cdktf/aws-cdk'

const configConformancePackInputParameter: configConformancePack.ConfigConformancePackInputParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameter.property.parameterName">parameterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_conformance_pack#parameter_name ConfigConformancePack#parameter_name}. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameter.property.parameterValue">parameterValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_conformance_pack#parameter_value ConfigConformancePack#parameter_value}. |

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameter.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_conformance_pack#parameter_name ConfigConformancePack#parameter_name}.

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameter.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_conformance_pack#parameter_value ConfigConformancePack#parameter_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConformancePackInputParameterList <a name="ConfigConformancePackInputParameterList" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.Initializer"></a>

```typescript
import { configConformancePack } from '@cdktf/aws-cdk'

new configConformancePack.ConfigConformancePackInputParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.get"></a>

```typescript
public get(index: number): ConfigConformancePackInputParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameter">ConfigConformancePackInputParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigConformancePackInputParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameter">ConfigConformancePackInputParameter</a>[]

---


### ConfigConformancePackInputParameterOutputReference <a name="ConfigConformancePackInputParameterOutputReference" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.Initializer"></a>

```typescript
import { configConformancePack } from '@cdktf/aws-cdk'

new configConformancePack.ConfigConformancePackInputParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.parameterValue">parameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameter">ConfigConformancePackInputParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.parameterNameInput"></a>

```typescript
public readonly parameterNameInput: string;
```

- *Type:* string

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.parameterValueInput"></a>

```typescript
public readonly parameterValueInput: string;
```

- *Type:* string

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigConformancePackInputParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.configConformancePack.ConfigConformancePackInputParameter">ConfigConformancePackInputParameter</a>

---




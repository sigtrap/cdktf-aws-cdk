# `apiGatewayDocumentationPart` Submodule <a name="`apiGatewayDocumentationPart` Submodule" id="@cdktf/aws-cdk.apiGatewayDocumentationPart"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayDocumentationPart <a name="ApiGatewayDocumentationPart" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_part aws_api_gateway_documentation_part}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer"></a>

```typescript
import { apiGatewayDocumentationPart } from '@cdktf/aws-cdk'

new apiGatewayDocumentationPart.ApiGatewayDocumentationPart(scope: Construct, id: string, config: ApiGatewayDocumentationPartConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig">ApiGatewayDocumentationPartConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig">ApiGatewayDocumentationPartConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocation` <a name="putLocation" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.putLocation"></a>

```typescript
public putLocation(value: ApiGatewayDocumentationPartLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiGatewayDocumentationPart resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isConstruct"></a>

```typescript
import { apiGatewayDocumentationPart } from '@cdktf/aws-cdk'

apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformElement"></a>

```typescript
import { apiGatewayDocumentationPart } from '@cdktf/aws-cdk'

apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformResource"></a>

```typescript
import { apiGatewayDocumentationPart } from '@cdktf/aws-cdk'

apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.generateConfigForImport"></a>

```typescript
import { apiGatewayDocumentationPart } from '@cdktf/aws-cdk'

apiGatewayDocumentationPart.ApiGatewayDocumentationPart.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiGatewayDocumentationPart resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiGatewayDocumentationPart to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiGatewayDocumentationPart that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_part#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiGatewayDocumentationPart to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.location">location</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference">ApiGatewayDocumentationPartLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.locationInput">locationInput</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.propertiesInput">propertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiIdInput">restApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.properties">properties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.location"></a>

```typescript
public readonly location: ApiGatewayDocumentationPartLocationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference">ApiGatewayDocumentationPartLocationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.locationInput"></a>

```typescript
public readonly locationInput: ApiGatewayDocumentationPartLocation;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: string;
```

- *Type:* string

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiIdInput"></a>

```typescript
public readonly restApiIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.properties"></a>

```typescript
public readonly properties: string;
```

- *Type:* string

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayDocumentationPartConfig <a name="ApiGatewayDocumentationPartConfig" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.Initializer"></a>

```typescript
import { apiGatewayDocumentationPart } from '@cdktf/aws-cdk'

const apiGatewayDocumentationPartConfig: apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.location">location</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a></code> | location block. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.properties">properties</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_part#properties ApiGatewayDocumentationPart#properties}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.restApiId">restApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_part#rest_api_id ApiGatewayDocumentationPart#rest_api_id}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_part#id ApiGatewayDocumentationPart#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.location"></a>

```typescript
public readonly location: ApiGatewayDocumentationPartLocation;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_part#location ApiGatewayDocumentationPart#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.properties"></a>

```typescript
public readonly properties: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_part#properties ApiGatewayDocumentationPart#properties}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_part#rest_api_id ApiGatewayDocumentationPart#rest_api_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_part#id ApiGatewayDocumentationPart#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ApiGatewayDocumentationPartLocation <a name="ApiGatewayDocumentationPartLocation" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.Initializer"></a>

```typescript
import { apiGatewayDocumentationPart } from '@cdktf/aws-cdk'

const apiGatewayDocumentationPartLocation: apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_part#type ApiGatewayDocumentationPart#type}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.method">method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_part#method ApiGatewayDocumentationPart#method}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_part#name ApiGatewayDocumentationPart#name}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_part#path ApiGatewayDocumentationPart#path}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.statusCode">statusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_part#status_code ApiGatewayDocumentationPart#status_code}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_part#type ApiGatewayDocumentationPart#type}.

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_part#method ApiGatewayDocumentationPart#method}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_part#name ApiGatewayDocumentationPart#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_part#path ApiGatewayDocumentationPart#path}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_part#status_code ApiGatewayDocumentationPart#status_code}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayDocumentationPartLocationOutputReference <a name="ApiGatewayDocumentationPartLocationOutputReference" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer"></a>

```typescript
import { apiGatewayDocumentationPart } from '@cdktf/aws-cdk'

new apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiGatewayDocumentationPartLocation;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

---




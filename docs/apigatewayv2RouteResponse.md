# `apigatewayv2RouteResponse` Submodule <a name="`apigatewayv2RouteResponse` Submodule" id="@cdktf/aws-cdk.apigatewayv2RouteResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2RouteResponse <a name="Apigatewayv2RouteResponse" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_route_response aws_apigatewayv2_route_response}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer"></a>

```typescript
import { apigatewayv2RouteResponse } from '@cdktf/aws-cdk'

new apigatewayv2RouteResponse.Apigatewayv2RouteResponse(scope: Construct, id: string, config: Apigatewayv2RouteResponseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig">Apigatewayv2RouteResponseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig">Apigatewayv2RouteResponseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetModelSelectionExpression">resetModelSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetResponseModels">resetResponseModels</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetId"></a>

```typescript
public resetId(): void
```

##### `resetModelSelectionExpression` <a name="resetModelSelectionExpression" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetModelSelectionExpression"></a>

```typescript
public resetModelSelectionExpression(): void
```

##### `resetResponseModels` <a name="resetResponseModels" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetResponseModels"></a>

```typescript
public resetResponseModels(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Apigatewayv2RouteResponse resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isConstruct"></a>

```typescript
import { apigatewayv2RouteResponse } from '@cdktf/aws-cdk'

apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformElement"></a>

```typescript
import { apigatewayv2RouteResponse } from '@cdktf/aws-cdk'

apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformResource"></a>

```typescript
import { apigatewayv2RouteResponse } from '@cdktf/aws-cdk'

apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport"></a>

```typescript
import { apigatewayv2RouteResponse } from '@cdktf/aws-cdk'

apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Apigatewayv2RouteResponse resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Apigatewayv2RouteResponse to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Apigatewayv2RouteResponse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_route_response#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Apigatewayv2RouteResponse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpressionInput">modelSelectionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModelsInput">responseModelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeIdInput">routeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKeyInput">routeResponseKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpression">modelSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModels">responseModels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeId">routeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKey">routeResponseKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `modelSelectionExpressionInput`<sup>Optional</sup> <a name="modelSelectionExpressionInput" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpressionInput"></a>

```typescript
public readonly modelSelectionExpressionInput: string;
```

- *Type:* string

---

##### `responseModelsInput`<sup>Optional</sup> <a name="responseModelsInput" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModelsInput"></a>

```typescript
public readonly responseModelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `routeIdInput`<sup>Optional</sup> <a name="routeIdInput" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeIdInput"></a>

```typescript
public readonly routeIdInput: string;
```

- *Type:* string

---

##### `routeResponseKeyInput`<sup>Optional</sup> <a name="routeResponseKeyInput" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKeyInput"></a>

```typescript
public readonly routeResponseKeyInput: string;
```

- *Type:* string

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modelSelectionExpression`<sup>Required</sup> <a name="modelSelectionExpression" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpression"></a>

```typescript
public readonly modelSelectionExpression: string;
```

- *Type:* string

---

##### `responseModels`<sup>Required</sup> <a name="responseModels" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModels"></a>

```typescript
public readonly responseModels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `routeId`<sup>Required</sup> <a name="routeId" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeId"></a>

```typescript
public readonly routeId: string;
```

- *Type:* string

---

##### `routeResponseKey`<sup>Required</sup> <a name="routeResponseKey" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKey"></a>

```typescript
public readonly routeResponseKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RouteResponseConfig <a name="Apigatewayv2RouteResponseConfig" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.Initializer"></a>

```typescript
import { apigatewayv2RouteResponse } from '@cdktf/aws-cdk'

const apigatewayv2RouteResponseConfig: apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.apiId">apiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_route_response#api_id Apigatewayv2RouteResponse#api_id}. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeId">routeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_route_response#route_id Apigatewayv2RouteResponse#route_id}. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeResponseKey">routeResponseKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_route_response#route_response_key Apigatewayv2RouteResponse#route_response_key}. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_route_response#id Apigatewayv2RouteResponse#id}. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.modelSelectionExpression">modelSelectionExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_route_response#model_selection_expression Apigatewayv2RouteResponse#model_selection_expression}. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.responseModels">responseModels</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_route_response#response_models Apigatewayv2RouteResponse#response_models}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_route_response#api_id Apigatewayv2RouteResponse#api_id}.

---

##### `routeId`<sup>Required</sup> <a name="routeId" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeId"></a>

```typescript
public readonly routeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_route_response#route_id Apigatewayv2RouteResponse#route_id}.

---

##### `routeResponseKey`<sup>Required</sup> <a name="routeResponseKey" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeResponseKey"></a>

```typescript
public readonly routeResponseKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_route_response#route_response_key Apigatewayv2RouteResponse#route_response_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_route_response#id Apigatewayv2RouteResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `modelSelectionExpression`<sup>Optional</sup> <a name="modelSelectionExpression" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.modelSelectionExpression"></a>

```typescript
public readonly modelSelectionExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_route_response#model_selection_expression Apigatewayv2RouteResponse#model_selection_expression}.

---

##### `responseModels`<sup>Optional</sup> <a name="responseModels" id="@cdktf/aws-cdk.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.responseModels"></a>

```typescript
public readonly responseModels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_route_response#response_models Apigatewayv2RouteResponse#response_models}.

---




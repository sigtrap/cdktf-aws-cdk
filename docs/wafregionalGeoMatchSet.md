# `wafregionalGeoMatchSet` Submodule <a name="`wafregionalGeoMatchSet` Submodule" id="@cdktf/aws-cdk.wafregionalGeoMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalGeoMatchSet <a name="WafregionalGeoMatchSet" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafregional_geo_match_set aws_wafregional_geo_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer"></a>

```typescript
import { wafregionalGeoMatchSet } from '@cdktf/aws-cdk'

new wafregionalGeoMatchSet.WafregionalGeoMatchSet(scope: Construct, id: string, config: WafregionalGeoMatchSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig">WafregionalGeoMatchSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig">WafregionalGeoMatchSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.putGeoMatchConstraint">putGeoMatchConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.resetGeoMatchConstraint">resetGeoMatchConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGeoMatchConstraint` <a name="putGeoMatchConstraint" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.putGeoMatchConstraint"></a>

```typescript
public putGeoMatchConstraint(value: IResolvable | WafregionalGeoMatchSetGeoMatchConstraint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.putGeoMatchConstraint.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>[]

---

##### `resetGeoMatchConstraint` <a name="resetGeoMatchConstraint" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.resetGeoMatchConstraint"></a>

```typescript
public resetGeoMatchConstraint(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WafregionalGeoMatchSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isConstruct"></a>

```typescript
import { wafregionalGeoMatchSet } from '@cdktf/aws-cdk'

wafregionalGeoMatchSet.WafregionalGeoMatchSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformElement"></a>

```typescript
import { wafregionalGeoMatchSet } from '@cdktf/aws-cdk'

wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformResource"></a>

```typescript
import { wafregionalGeoMatchSet } from '@cdktf/aws-cdk'

wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.generateConfigForImport"></a>

```typescript
import { wafregionalGeoMatchSet } from '@cdktf/aws-cdk'

wafregionalGeoMatchSet.WafregionalGeoMatchSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WafregionalGeoMatchSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WafregionalGeoMatchSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WafregionalGeoMatchSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafregional_geo_match_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WafregionalGeoMatchSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.geoMatchConstraint">geoMatchConstraint</a></code> | <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList">WafregionalGeoMatchSetGeoMatchConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.geoMatchConstraintInput">geoMatchConstraintInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `geoMatchConstraint`<sup>Required</sup> <a name="geoMatchConstraint" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.geoMatchConstraint"></a>

```typescript
public readonly geoMatchConstraint: WafregionalGeoMatchSetGeoMatchConstraintList;
```

- *Type:* <a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList">WafregionalGeoMatchSetGeoMatchConstraintList</a>

---

##### `geoMatchConstraintInput`<sup>Optional</sup> <a name="geoMatchConstraintInput" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.geoMatchConstraintInput"></a>

```typescript
public readonly geoMatchConstraintInput: IResolvable | WafregionalGeoMatchSetGeoMatchConstraint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalGeoMatchSetConfig <a name="WafregionalGeoMatchSetConfig" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.Initializer"></a>

```typescript
import { wafregionalGeoMatchSet } from '@cdktf/aws-cdk'

const wafregionalGeoMatchSetConfig: wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafregional_geo_match_set#name WafregionalGeoMatchSet#name}. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.geoMatchConstraint">geoMatchConstraint</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>[]</code> | geo_match_constraint block. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafregional_geo_match_set#id WafregionalGeoMatchSet#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafregional_geo_match_set#name WafregionalGeoMatchSet#name}.

---

##### `geoMatchConstraint`<sup>Optional</sup> <a name="geoMatchConstraint" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.geoMatchConstraint"></a>

```typescript
public readonly geoMatchConstraint: IResolvable | WafregionalGeoMatchSetGeoMatchConstraint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>[]

geo_match_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafregional_geo_match_set#geo_match_constraint WafregionalGeoMatchSet#geo_match_constraint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafregional_geo_match_set#id WafregionalGeoMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### WafregionalGeoMatchSetGeoMatchConstraint <a name="WafregionalGeoMatchSetGeoMatchConstraint" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint.Initializer"></a>

```typescript
import { wafregionalGeoMatchSet } from '@cdktf/aws-cdk'

const wafregionalGeoMatchSetGeoMatchConstraint: wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafregional_geo_match_set#type WafregionalGeoMatchSet#type}. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafregional_geo_match_set#value WafregionalGeoMatchSet#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafregional_geo_match_set#type WafregionalGeoMatchSet#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafregional_geo_match_set#value WafregionalGeoMatchSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalGeoMatchSetGeoMatchConstraintList <a name="WafregionalGeoMatchSetGeoMatchConstraintList" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer"></a>

```typescript
import { wafregionalGeoMatchSet } from '@cdktf/aws-cdk'

new wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.get"></a>

```typescript
public get(index: number): WafregionalGeoMatchSetGeoMatchConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafregionalGeoMatchSetGeoMatchConstraint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>[]

---


### WafregionalGeoMatchSetGeoMatchConstraintOutputReference <a name="WafregionalGeoMatchSetGeoMatchConstraintOutputReference" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer"></a>

```typescript
import { wafregionalGeoMatchSet } from '@cdktf/aws-cdk'

new wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafregionalGeoMatchSetGeoMatchConstraint;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>

---




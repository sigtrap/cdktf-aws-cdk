# `dxGatewayAssociation` Submodule <a name="`dxGatewayAssociation` Submodule" id="@cdktf/aws-cdk.dxGatewayAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxGatewayAssociation <a name="DxGatewayAssociation" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association aws_dx_gateway_association}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.Initializer"></a>

```typescript
import { dxGatewayAssociation } from '@cdktf/aws-cdk'

new dxGatewayAssociation.DxGatewayAssociation(scope: Construct, id: string, config: DxGatewayAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig">DxGatewayAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig">DxGatewayAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.resetAllowedPrefixes">resetAllowedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.resetAssociatedGatewayId">resetAssociatedGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.resetAssociatedGatewayOwnerAccountId">resetAssociatedGatewayOwnerAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.resetProposalId">resetProposalId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.resetVpnGatewayId">resetVpnGatewayId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: DxGatewayAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeouts">DxGatewayAssociationTimeouts</a>

---

##### `resetAllowedPrefixes` <a name="resetAllowedPrefixes" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.resetAllowedPrefixes"></a>

```typescript
public resetAllowedPrefixes(): void
```

##### `resetAssociatedGatewayId` <a name="resetAssociatedGatewayId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.resetAssociatedGatewayId"></a>

```typescript
public resetAssociatedGatewayId(): void
```

##### `resetAssociatedGatewayOwnerAccountId` <a name="resetAssociatedGatewayOwnerAccountId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.resetAssociatedGatewayOwnerAccountId"></a>

```typescript
public resetAssociatedGatewayOwnerAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProposalId` <a name="resetProposalId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.resetProposalId"></a>

```typescript
public resetProposalId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpnGatewayId` <a name="resetVpnGatewayId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.resetVpnGatewayId"></a>

```typescript
public resetVpnGatewayId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DxGatewayAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.isConstruct"></a>

```typescript
import { dxGatewayAssociation } from '@cdktf/aws-cdk'

dxGatewayAssociation.DxGatewayAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.isTerraformElement"></a>

```typescript
import { dxGatewayAssociation } from '@cdktf/aws-cdk'

dxGatewayAssociation.DxGatewayAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.isTerraformResource"></a>

```typescript
import { dxGatewayAssociation } from '@cdktf/aws-cdk'

dxGatewayAssociation.DxGatewayAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.generateConfigForImport"></a>

```typescript
import { dxGatewayAssociation } from '@cdktf/aws-cdk'

dxGatewayAssociation.DxGatewayAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DxGatewayAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DxGatewayAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DxGatewayAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DxGatewayAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayType">associatedGatewayType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayAssociationId">dxGatewayAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayOwnerAccountId">dxGatewayOwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference">DxGatewayAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.allowedPrefixesInput">allowedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayIdInput">associatedGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayOwnerAccountIdInput">associatedGatewayOwnerAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayIdInput">dxGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.proposalIdInput">proposalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeouts">DxGatewayAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.vpnGatewayIdInput">vpnGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.allowedPrefixes">allowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayId">associatedGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayOwnerAccountId">associatedGatewayOwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayId">dxGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.proposalId">proposalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `associatedGatewayType`<sup>Required</sup> <a name="associatedGatewayType" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayType"></a>

```typescript
public readonly associatedGatewayType: string;
```

- *Type:* string

---

##### `dxGatewayAssociationId`<sup>Required</sup> <a name="dxGatewayAssociationId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayAssociationId"></a>

```typescript
public readonly dxGatewayAssociationId: string;
```

- *Type:* string

---

##### `dxGatewayOwnerAccountId`<sup>Required</sup> <a name="dxGatewayOwnerAccountId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayOwnerAccountId"></a>

```typescript
public readonly dxGatewayOwnerAccountId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: DxGatewayAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference">DxGatewayAssociationTimeoutsOutputReference</a>

---

##### `allowedPrefixesInput`<sup>Optional</sup> <a name="allowedPrefixesInput" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.allowedPrefixesInput"></a>

```typescript
public readonly allowedPrefixesInput: string[];
```

- *Type:* string[]

---

##### `associatedGatewayIdInput`<sup>Optional</sup> <a name="associatedGatewayIdInput" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayIdInput"></a>

```typescript
public readonly associatedGatewayIdInput: string;
```

- *Type:* string

---

##### `associatedGatewayOwnerAccountIdInput`<sup>Optional</sup> <a name="associatedGatewayOwnerAccountIdInput" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayOwnerAccountIdInput"></a>

```typescript
public readonly associatedGatewayOwnerAccountIdInput: string;
```

- *Type:* string

---

##### `dxGatewayIdInput`<sup>Optional</sup> <a name="dxGatewayIdInput" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayIdInput"></a>

```typescript
public readonly dxGatewayIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `proposalIdInput`<sup>Optional</sup> <a name="proposalIdInput" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.proposalIdInput"></a>

```typescript
public readonly proposalIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DxGatewayAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeouts">DxGatewayAssociationTimeouts</a>

---

##### `vpnGatewayIdInput`<sup>Optional</sup> <a name="vpnGatewayIdInput" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.vpnGatewayIdInput"></a>

```typescript
public readonly vpnGatewayIdInput: string;
```

- *Type:* string

---

##### `allowedPrefixes`<sup>Required</sup> <a name="allowedPrefixes" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.allowedPrefixes"></a>

```typescript
public readonly allowedPrefixes: string[];
```

- *Type:* string[]

---

##### `associatedGatewayId`<sup>Required</sup> <a name="associatedGatewayId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayId"></a>

```typescript
public readonly associatedGatewayId: string;
```

- *Type:* string

---

##### `associatedGatewayOwnerAccountId`<sup>Required</sup> <a name="associatedGatewayOwnerAccountId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayOwnerAccountId"></a>

```typescript
public readonly associatedGatewayOwnerAccountId: string;
```

- *Type:* string

---

##### `dxGatewayId`<sup>Required</sup> <a name="dxGatewayId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayId"></a>

```typescript
public readonly dxGatewayId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `proposalId`<sup>Required</sup> <a name="proposalId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.proposalId"></a>

```typescript
public readonly proposalId: string;
```

- *Type:* string

---

##### `vpnGatewayId`<sup>Required</sup> <a name="vpnGatewayId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DxGatewayAssociationConfig <a name="DxGatewayAssociationConfig" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.Initializer"></a>

```typescript
import { dxGatewayAssociation } from '@cdktf/aws-cdk'

const dxGatewayAssociationConfig: dxGatewayAssociation.DxGatewayAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.dxGatewayId">dxGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#dx_gateway_id DxGatewayAssociation#dx_gateway_id}. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.allowedPrefixes">allowedPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#allowed_prefixes DxGatewayAssociation#allowed_prefixes}. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.associatedGatewayId">associatedGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#associated_gateway_id DxGatewayAssociation#associated_gateway_id}. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.associatedGatewayOwnerAccountId">associatedGatewayOwnerAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#associated_gateway_owner_account_id DxGatewayAssociation#associated_gateway_owner_account_id}. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#id DxGatewayAssociation#id}. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.proposalId">proposalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#proposal_id DxGatewayAssociation#proposal_id}. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeouts">DxGatewayAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#vpn_gateway_id DxGatewayAssociation#vpn_gateway_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dxGatewayId`<sup>Required</sup> <a name="dxGatewayId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.dxGatewayId"></a>

```typescript
public readonly dxGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#dx_gateway_id DxGatewayAssociation#dx_gateway_id}.

---

##### `allowedPrefixes`<sup>Optional</sup> <a name="allowedPrefixes" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.allowedPrefixes"></a>

```typescript
public readonly allowedPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#allowed_prefixes DxGatewayAssociation#allowed_prefixes}.

---

##### `associatedGatewayId`<sup>Optional</sup> <a name="associatedGatewayId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.associatedGatewayId"></a>

```typescript
public readonly associatedGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#associated_gateway_id DxGatewayAssociation#associated_gateway_id}.

---

##### `associatedGatewayOwnerAccountId`<sup>Optional</sup> <a name="associatedGatewayOwnerAccountId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.associatedGatewayOwnerAccountId"></a>

```typescript
public readonly associatedGatewayOwnerAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#associated_gateway_owner_account_id DxGatewayAssociation#associated_gateway_owner_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#id DxGatewayAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `proposalId`<sup>Optional</sup> <a name="proposalId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.proposalId"></a>

```typescript
public readonly proposalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#proposal_id DxGatewayAssociation#proposal_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DxGatewayAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeouts">DxGatewayAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#timeouts DxGatewayAssociation#timeouts}

---

##### `vpnGatewayId`<sup>Optional</sup> <a name="vpnGatewayId" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationConfig.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#vpn_gateway_id DxGatewayAssociation#vpn_gateway_id}.

---

### DxGatewayAssociationTimeouts <a name="DxGatewayAssociationTimeouts" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeouts.Initializer"></a>

```typescript
import { dxGatewayAssociation } from '@cdktf/aws-cdk'

const dxGatewayAssociationTimeouts: dxGatewayAssociation.DxGatewayAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#create DxGatewayAssociation#create}. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#delete DxGatewayAssociation#delete}. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#update DxGatewayAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#create DxGatewayAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#delete DxGatewayAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_gateway_association#update DxGatewayAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxGatewayAssociationTimeoutsOutputReference <a name="DxGatewayAssociationTimeoutsOutputReference" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { dxGatewayAssociation } from '@cdktf/aws-cdk'

new dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeouts">DxGatewayAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DxGatewayAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dxGatewayAssociation.DxGatewayAssociationTimeouts">DxGatewayAssociationTimeouts</a>

---




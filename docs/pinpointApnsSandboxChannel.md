# `pinpointApnsSandboxChannel` Submodule <a name="`pinpointApnsSandboxChannel` Submodule" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointApnsSandboxChannel <a name="PinpointApnsSandboxChannel" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel aws_pinpoint_apns_sandbox_channel}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer"></a>

```typescript
import { pinpointApnsSandboxChannel } from '@cdktf/aws-cdk'

new pinpointApnsSandboxChannel.PinpointApnsSandboxChannel(scope: Construct, id: string, config: PinpointApnsSandboxChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig">PinpointApnsSandboxChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig">PinpointApnsSandboxChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetBundleId">resetBundleId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetDefaultAuthenticationMethod">resetDefaultAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTeamId">resetTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTokenKey">resetTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTokenKeyId">resetTokenKeyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBundleId` <a name="resetBundleId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetBundleId"></a>

```typescript
public resetBundleId(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetDefaultAuthenticationMethod` <a name="resetDefaultAuthenticationMethod" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetDefaultAuthenticationMethod"></a>

```typescript
public resetDefaultAuthenticationMethod(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```

##### `resetTeamId` <a name="resetTeamId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTeamId"></a>

```typescript
public resetTeamId(): void
```

##### `resetTokenKey` <a name="resetTokenKey" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTokenKey"></a>

```typescript
public resetTokenKey(): void
```

##### `resetTokenKeyId` <a name="resetTokenKeyId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTokenKeyId"></a>

```typescript
public resetTokenKeyId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PinpointApnsSandboxChannel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isConstruct"></a>

```typescript
import { pinpointApnsSandboxChannel } from '@cdktf/aws-cdk'

pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformElement"></a>

```typescript
import { pinpointApnsSandboxChannel } from '@cdktf/aws-cdk'

pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformResource"></a>

```typescript
import { pinpointApnsSandboxChannel } from '@cdktf/aws-cdk'

pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.generateConfigForImport"></a>

```typescript
import { pinpointApnsSandboxChannel } from '@cdktf/aws-cdk'

pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PinpointApnsSandboxChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PinpointApnsSandboxChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PinpointApnsSandboxChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PinpointApnsSandboxChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.bundleIdInput">bundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.defaultAuthenticationMethodInput">defaultAuthenticationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyIdInput">tokenKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyInput">tokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.bundleId">bundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.defaultAuthenticationMethod">defaultAuthenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKey">tokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyId">tokenKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `bundleIdInput`<sup>Optional</sup> <a name="bundleIdInput" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.bundleIdInput"></a>

```typescript
public readonly bundleIdInput: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `defaultAuthenticationMethodInput`<sup>Optional</sup> <a name="defaultAuthenticationMethodInput" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.defaultAuthenticationMethodInput"></a>

```typescript
public readonly defaultAuthenticationMethodInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `tokenKeyIdInput`<sup>Optional</sup> <a name="tokenKeyIdInput" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyIdInput"></a>

```typescript
public readonly tokenKeyIdInput: string;
```

- *Type:* string

---

##### `tokenKeyInput`<sup>Optional</sup> <a name="tokenKeyInput" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyInput"></a>

```typescript
public readonly tokenKeyInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `defaultAuthenticationMethod`<sup>Required</sup> <a name="defaultAuthenticationMethod" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.defaultAuthenticationMethod"></a>

```typescript
public readonly defaultAuthenticationMethod: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `tokenKey`<sup>Required</sup> <a name="tokenKey" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKey"></a>

```typescript
public readonly tokenKey: string;
```

- *Type:* string

---

##### `tokenKeyId`<sup>Required</sup> <a name="tokenKeyId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyId"></a>

```typescript
public readonly tokenKeyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointApnsSandboxChannelConfig <a name="PinpointApnsSandboxChannelConfig" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.Initializer"></a>

```typescript
import { pinpointApnsSandboxChannel } from '@cdktf/aws-cdk'

const pinpointApnsSandboxChannelConfig: pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#application_id PinpointApnsSandboxChannel#application_id}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.bundleId">bundleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#bundle_id PinpointApnsSandboxChannel#bundle_id}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#certificate PinpointApnsSandboxChannel#certificate}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.defaultAuthenticationMethod">defaultAuthenticationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#default_authentication_method PinpointApnsSandboxChannel#default_authentication_method}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#enabled PinpointApnsSandboxChannel#enabled}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#id PinpointApnsSandboxChannel#id}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.privateKey">privateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#private_key PinpointApnsSandboxChannel#private_key}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.teamId">teamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#team_id PinpointApnsSandboxChannel#team_id}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.tokenKey">tokenKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#token_key PinpointApnsSandboxChannel#token_key}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.tokenKeyId">tokenKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#token_key_id PinpointApnsSandboxChannel#token_key_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#application_id PinpointApnsSandboxChannel#application_id}.

---

##### `bundleId`<sup>Optional</sup> <a name="bundleId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#bundle_id PinpointApnsSandboxChannel#bundle_id}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#certificate PinpointApnsSandboxChannel#certificate}.

---

##### `defaultAuthenticationMethod`<sup>Optional</sup> <a name="defaultAuthenticationMethod" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.defaultAuthenticationMethod"></a>

```typescript
public readonly defaultAuthenticationMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#default_authentication_method PinpointApnsSandboxChannel#default_authentication_method}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#enabled PinpointApnsSandboxChannel#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#id PinpointApnsSandboxChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#private_key PinpointApnsSandboxChannel#private_key}.

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#team_id PinpointApnsSandboxChannel#team_id}.

---

##### `tokenKey`<sup>Optional</sup> <a name="tokenKey" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.tokenKey"></a>

```typescript
public readonly tokenKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#token_key PinpointApnsSandboxChannel#token_key}.

---

##### `tokenKeyId`<sup>Optional</sup> <a name="tokenKeyId" id="@cdktf/aws-cdk.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.tokenKeyId"></a>

```typescript
public readonly tokenKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_sandbox_channel#token_key_id PinpointApnsSandboxChannel#token_key_id}.

---




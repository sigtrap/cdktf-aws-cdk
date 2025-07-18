# `sesIdentityNotificationTopic` Submodule <a name="`sesIdentityNotificationTopic` Submodule" id="@cdktf/aws-cdk.sesIdentityNotificationTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesIdentityNotificationTopic <a name="SesIdentityNotificationTopic" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_identity_notification_topic aws_ses_identity_notification_topic}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer"></a>

```typescript
import { sesIdentityNotificationTopic } from '@cdktf/aws-cdk'

new sesIdentityNotificationTopic.SesIdentityNotificationTopic(scope: Construct, id: string, config: SesIdentityNotificationTopicConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig">SesIdentityNotificationTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig">SesIdentityNotificationTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetIncludeOriginalHeaders">resetIncludeOriginalHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetTopicArn">resetTopicArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeOriginalHeaders` <a name="resetIncludeOriginalHeaders" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetIncludeOriginalHeaders"></a>

```typescript
public resetIncludeOriginalHeaders(): void
```

##### `resetTopicArn` <a name="resetTopicArn" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetTopicArn"></a>

```typescript
public resetTopicArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SesIdentityNotificationTopic resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isConstruct"></a>

```typescript
import { sesIdentityNotificationTopic } from '@cdktf/aws-cdk'

sesIdentityNotificationTopic.SesIdentityNotificationTopic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformElement"></a>

```typescript
import { sesIdentityNotificationTopic } from '@cdktf/aws-cdk'

sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformResource"></a>

```typescript
import { sesIdentityNotificationTopic } from '@cdktf/aws-cdk'

sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.generateConfigForImport"></a>

```typescript
import { sesIdentityNotificationTopic } from '@cdktf/aws-cdk'

sesIdentityNotificationTopic.SesIdentityNotificationTopic.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SesIdentityNotificationTopic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SesIdentityNotificationTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SesIdentityNotificationTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_identity_notification_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SesIdentityNotificationTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.identityInput">identityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.includeOriginalHeadersInput">includeOriginalHeadersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.notificationTypeInput">notificationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.topicArnInput">topicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.identity">identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.includeOriginalHeaders">includeOriginalHeaders</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.notificationType">notificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.identityInput"></a>

```typescript
public readonly identityInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeOriginalHeadersInput`<sup>Optional</sup> <a name="includeOriginalHeadersInput" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.includeOriginalHeadersInput"></a>

```typescript
public readonly includeOriginalHeadersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationTypeInput`<sup>Optional</sup> <a name="notificationTypeInput" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.notificationTypeInput"></a>

```typescript
public readonly notificationTypeInput: string;
```

- *Type:* string

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.topicArnInput"></a>

```typescript
public readonly topicArnInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

---

##### `includeOriginalHeaders`<sup>Required</sup> <a name="includeOriginalHeaders" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.includeOriginalHeaders"></a>

```typescript
public readonly includeOriginalHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesIdentityNotificationTopicConfig <a name="SesIdentityNotificationTopicConfig" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.Initializer"></a>

```typescript
import { sesIdentityNotificationTopic } from '@cdktf/aws-cdk'

const sesIdentityNotificationTopicConfig: sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.identity">identity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_identity_notification_topic#identity SesIdentityNotificationTopic#identity}. |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.notificationType">notificationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_identity_notification_topic#notification_type SesIdentityNotificationTopic#notification_type}. |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_identity_notification_topic#id SesIdentityNotificationTopic#id}. |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.includeOriginalHeaders">includeOriginalHeaders</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_identity_notification_topic#include_original_headers SesIdentityNotificationTopic#include_original_headers}. |
| <code><a href="#@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.topicArn">topicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_identity_notification_topic#topic_arn SesIdentityNotificationTopic#topic_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_identity_notification_topic#identity SesIdentityNotificationTopic#identity}.

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_identity_notification_topic#notification_type SesIdentityNotificationTopic#notification_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_identity_notification_topic#id SesIdentityNotificationTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeOriginalHeaders`<sup>Optional</sup> <a name="includeOriginalHeaders" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.includeOriginalHeaders"></a>

```typescript
public readonly includeOriginalHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_identity_notification_topic#include_original_headers SesIdentityNotificationTopic#include_original_headers}.

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktf/aws-cdk.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_identity_notification_topic#topic_arn SesIdentityNotificationTopic#topic_arn}.

---




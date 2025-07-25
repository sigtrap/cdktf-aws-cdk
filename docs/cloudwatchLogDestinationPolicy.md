# `cloudwatchLogDestinationPolicy` Submodule <a name="`cloudwatchLogDestinationPolicy` Submodule" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogDestinationPolicy <a name="CloudwatchLogDestinationPolicy" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_destination_policy aws_cloudwatch_log_destination_policy}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.Initializer"></a>

```typescript
import { cloudwatchLogDestinationPolicy } from '@cdktf/aws-cdk'

new cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy(scope: Construct, id: string, config: CloudwatchLogDestinationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig">CloudwatchLogDestinationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig">CloudwatchLogDestinationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.resetForceUpdate">resetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetForceUpdate` <a name="resetForceUpdate" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.resetForceUpdate"></a>

```typescript
public resetForceUpdate(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudwatchLogDestinationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.isConstruct"></a>

```typescript
import { cloudwatchLogDestinationPolicy } from '@cdktf/aws-cdk'

cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.isTerraformElement"></a>

```typescript
import { cloudwatchLogDestinationPolicy } from '@cdktf/aws-cdk'

cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.isTerraformResource"></a>

```typescript
import { cloudwatchLogDestinationPolicy } from '@cdktf/aws-cdk'

cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.generateConfigForImport"></a>

```typescript
import { cloudwatchLogDestinationPolicy } from '@cdktf/aws-cdk'

cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudwatchLogDestinationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchLogDestinationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchLogDestinationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_destination_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudwatchLogDestinationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.accessPolicyInput">accessPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.destinationNameInput">destinationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.forceUpdateInput">forceUpdateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.accessPolicy">accessPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.destinationName">destinationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.forceUpdate">forceUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessPolicyInput`<sup>Optional</sup> <a name="accessPolicyInput" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.accessPolicyInput"></a>

```typescript
public readonly accessPolicyInput: string;
```

- *Type:* string

---

##### `destinationNameInput`<sup>Optional</sup> <a name="destinationNameInput" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.destinationNameInput"></a>

```typescript
public readonly destinationNameInput: string;
```

- *Type:* string

---

##### `forceUpdateInput`<sup>Optional</sup> <a name="forceUpdateInput" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.forceUpdateInput"></a>

```typescript
public readonly forceUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `accessPolicy`<sup>Required</sup> <a name="accessPolicy" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.accessPolicy"></a>

```typescript
public readonly accessPolicy: string;
```

- *Type:* string

---

##### `destinationName`<sup>Required</sup> <a name="destinationName" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.destinationName"></a>

```typescript
public readonly destinationName: string;
```

- *Type:* string

---

##### `forceUpdate`<sup>Required</sup> <a name="forceUpdate" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogDestinationPolicyConfig <a name="CloudwatchLogDestinationPolicyConfig" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.Initializer"></a>

```typescript
import { cloudwatchLogDestinationPolicy } from '@cdktf/aws-cdk'

const cloudwatchLogDestinationPolicyConfig: cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.accessPolicy">accessPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_destination_policy#access_policy CloudwatchLogDestinationPolicy#access_policy}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.destinationName">destinationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_destination_policy#destination_name CloudwatchLogDestinationPolicy#destination_name}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.forceUpdate">forceUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_destination_policy#force_update CloudwatchLogDestinationPolicy#force_update}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_destination_policy#id CloudwatchLogDestinationPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessPolicy`<sup>Required</sup> <a name="accessPolicy" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.accessPolicy"></a>

```typescript
public readonly accessPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_destination_policy#access_policy CloudwatchLogDestinationPolicy#access_policy}.

---

##### `destinationName`<sup>Required</sup> <a name="destinationName" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.destinationName"></a>

```typescript
public readonly destinationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_destination_policy#destination_name CloudwatchLogDestinationPolicy#destination_name}.

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_destination_policy#force_update CloudwatchLogDestinationPolicy#force_update}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchLogDestinationPolicy.CloudwatchLogDestinationPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_destination_policy#id CloudwatchLogDestinationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




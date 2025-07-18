# `networkAclRule` Submodule <a name="`networkAclRule` Submodule" id="@cdktf/aws-cdk.networkAclRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkAclRule <a name="NetworkAclRule" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule aws_network_acl_rule}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.Initializer"></a>

```typescript
import { networkAclRule } from '@cdktf/aws-cdk'

new networkAclRule.NetworkAclRule(scope: Construct, id: string, config: NetworkAclRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig">NetworkAclRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig">NetworkAclRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.resetEgress">resetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.resetIcmpCode">resetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.resetIcmpType">resetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.resetCidrBlock"></a>

```typescript
public resetCidrBlock(): void
```

##### `resetEgress` <a name="resetEgress" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.resetEgress"></a>

```typescript
public resetEgress(): void
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetIcmpCode` <a name="resetIcmpCode" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.resetIcmpCode"></a>

```typescript
public resetIcmpCode(): void
```

##### `resetIcmpType` <a name="resetIcmpType" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.resetIcmpType"></a>

```typescript
public resetIcmpType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.resetIpv6CidrBlock"></a>

```typescript
public resetIpv6CidrBlock(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.resetToPort"></a>

```typescript
public resetToPort(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkAclRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.isConstruct"></a>

```typescript
import { networkAclRule } from '@cdktf/aws-cdk'

networkAclRule.NetworkAclRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.isTerraformElement"></a>

```typescript
import { networkAclRule } from '@cdktf/aws-cdk'

networkAclRule.NetworkAclRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.isTerraformResource"></a>

```typescript
import { networkAclRule } from '@cdktf/aws-cdk'

networkAclRule.NetworkAclRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.generateConfigForImport"></a>

```typescript
import { networkAclRule } from '@cdktf/aws-cdk'

networkAclRule.NetworkAclRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkAclRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkAclRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkAclRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkAclRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.cidrBlockInput">cidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.egressInput">egressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.icmpCodeInput">icmpCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.icmpTypeInput">icmpTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.networkAclIdInput">networkAclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.ruleActionInput">ruleActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.ruleNumberInput">ruleNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.egress">egress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.icmpCode">icmpCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.icmpType">icmpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.networkAclId">networkAclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.ruleAction">ruleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.ruleNumber">ruleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.cidrBlockInput"></a>

```typescript
public readonly cidrBlockInput: string;
```

- *Type:* string

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.egressInput"></a>

```typescript
public readonly egressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `icmpCodeInput`<sup>Optional</sup> <a name="icmpCodeInput" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.icmpCodeInput"></a>

```typescript
public readonly icmpCodeInput: string;
```

- *Type:* string

---

##### `icmpTypeInput`<sup>Optional</sup> <a name="icmpTypeInput" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.icmpTypeInput"></a>

```typescript
public readonly icmpTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.ipv6CidrBlockInput"></a>

```typescript
public readonly ipv6CidrBlockInput: string;
```

- *Type:* string

---

##### `networkAclIdInput`<sup>Optional</sup> <a name="networkAclIdInput" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.networkAclIdInput"></a>

```typescript
public readonly networkAclIdInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `ruleActionInput`<sup>Optional</sup> <a name="ruleActionInput" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.ruleActionInput"></a>

```typescript
public readonly ruleActionInput: string;
```

- *Type:* string

---

##### `ruleNumberInput`<sup>Optional</sup> <a name="ruleNumberInput" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.ruleNumberInput"></a>

```typescript
public readonly ruleNumberInput: number;
```

- *Type:* number

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.egress"></a>

```typescript
public readonly egress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.icmpCode"></a>

```typescript
public readonly icmpCode: string;
```

- *Type:* string

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.icmpType"></a>

```typescript
public readonly icmpType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

---

##### `networkAclId`<sup>Required</sup> <a name="networkAclId" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.networkAclId"></a>

```typescript
public readonly networkAclId: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `ruleAction`<sup>Required</sup> <a name="ruleAction" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.ruleAction"></a>

```typescript
public readonly ruleAction: string;
```

- *Type:* string

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.ruleNumber"></a>

```typescript
public readonly ruleNumber: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkAclRuleConfig <a name="NetworkAclRuleConfig" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.Initializer"></a>

```typescript
import { networkAclRule } from '@cdktf/aws-cdk'

const networkAclRuleConfig: networkAclRule.NetworkAclRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.networkAclId">networkAclId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#network_acl_id NetworkAclRule#network_acl_id}. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#protocol NetworkAclRule#protocol}. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.ruleAction">ruleAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#rule_action NetworkAclRule#rule_action}. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.ruleNumber">ruleNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#rule_number NetworkAclRule#rule_number}. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#cidr_block NetworkAclRule#cidr_block}. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.egress">egress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#egress NetworkAclRule#egress}. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.fromPort">fromPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#from_port NetworkAclRule#from_port}. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.icmpCode">icmpCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#icmp_code NetworkAclRule#icmp_code}. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.icmpType">icmpType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#icmp_type NetworkAclRule#icmp_type}. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#id NetworkAclRule#id}. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#ipv6_cidr_block NetworkAclRule#ipv6_cidr_block}. |
| <code><a href="#@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.toPort">toPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#to_port NetworkAclRule#to_port}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `networkAclId`<sup>Required</sup> <a name="networkAclId" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.networkAclId"></a>

```typescript
public readonly networkAclId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#network_acl_id NetworkAclRule#network_acl_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#protocol NetworkAclRule#protocol}.

---

##### `ruleAction`<sup>Required</sup> <a name="ruleAction" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.ruleAction"></a>

```typescript
public readonly ruleAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#rule_action NetworkAclRule#rule_action}.

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.ruleNumber"></a>

```typescript
public readonly ruleNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#rule_number NetworkAclRule#rule_number}.

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#cidr_block NetworkAclRule#cidr_block}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.egress"></a>

```typescript
public readonly egress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#egress NetworkAclRule#egress}.

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#from_port NetworkAclRule#from_port}.

---

##### `icmpCode`<sup>Optional</sup> <a name="icmpCode" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.icmpCode"></a>

```typescript
public readonly icmpCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#icmp_code NetworkAclRule#icmp_code}.

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.icmpType"></a>

```typescript
public readonly icmpType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#icmp_type NetworkAclRule#icmp_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#id NetworkAclRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#ipv6_cidr_block NetworkAclRule#ipv6_cidr_block}.

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktf/aws-cdk.networkAclRule.NetworkAclRuleConfig.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl_rule#to_port NetworkAclRule#to_port}.

---




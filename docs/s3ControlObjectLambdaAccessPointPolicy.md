# `aws_s3control_object_lambda_access_point_policy`

Refer to the Terraform Registory for docs: [`aws_s3control_object_lambda_access_point_policy`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3control_object_lambda_access_point_policy).

# `s3ControlObjectLambdaAccessPointPolicy` Submodule <a name="`s3ControlObjectLambdaAccessPointPolicy` Submodule" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlObjectLambdaAccessPointPolicy <a name="S3ControlObjectLambdaAccessPointPolicy" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3control_object_lambda_access_point_policy aws_s3control_object_lambda_access_point_policy}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.Initializer"></a>

```typescript
import { s3ControlObjectLambdaAccessPointPolicy } from '@cdktf/aws-cdk'

new s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy(scope: Construct, id: string, config: S3ControlObjectLambdaAccessPointPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig">S3ControlObjectLambdaAccessPointPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig">S3ControlObjectLambdaAccessPointPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.isConstruct"></a>

```typescript
import { s3ControlObjectLambdaAccessPointPolicy } from '@cdktf/aws-cdk'

s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.isTerraformElement"></a>

```typescript
import { s3ControlObjectLambdaAccessPointPolicy } from '@cdktf/aws-cdk'

s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.isTerraformResource"></a>

```typescript
import { s3ControlObjectLambdaAccessPointPolicy } from '@cdktf/aws-cdk'

s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.hasPublicAccessPolicy">hasPublicAccessPolicy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.policy">policy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hasPublicAccessPolicy`<sup>Required</sup> <a name="hasPublicAccessPolicy" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.hasPublicAccessPolicy"></a>

```typescript
public readonly hasPublicAccessPolicy: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlObjectLambdaAccessPointPolicyConfig <a name="S3ControlObjectLambdaAccessPointPolicyConfig" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.Initializer"></a>

```typescript
import { s3ControlObjectLambdaAccessPointPolicy } from '@cdktf/aws-cdk'

const s3ControlObjectLambdaAccessPointPolicyConfig: s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3control_object_lambda_access_point_policy#name S3ControlObjectLambdaAccessPointPolicy#name}. |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3control_object_lambda_access_point_policy#policy S3ControlObjectLambdaAccessPointPolicy#policy}. |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3control_object_lambda_access_point_policy#account_id S3ControlObjectLambdaAccessPointPolicy#account_id}. |
| <code><a href="#@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3control_object_lambda_access_point_policy#id S3ControlObjectLambdaAccessPointPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3control_object_lambda_access_point_policy#name S3ControlObjectLambdaAccessPointPolicy#name}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3control_object_lambda_access_point_policy#policy S3ControlObjectLambdaAccessPointPolicy#policy}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3control_object_lambda_access_point_policy#account_id S3ControlObjectLambdaAccessPointPolicy#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.s3ControlObjectLambdaAccessPointPolicy.S3ControlObjectLambdaAccessPointPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3control_object_lambda_access_point_policy#id S3ControlObjectLambdaAccessPointPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



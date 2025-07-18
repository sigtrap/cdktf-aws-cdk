# `dataAwsCloudfrontOriginRequestPolicy` Submodule <a name="`dataAwsCloudfrontOriginRequestPolicy` Submodule" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudfrontOriginRequestPolicy <a name="DataAwsCloudfrontOriginRequestPolicy" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_origin_request_policy aws_cloudfront_origin_request_policy}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy(scope: Construct, id: string, config?: DataAwsCloudfrontOriginRequestPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig">DataAwsCloudfrontOriginRequestPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig">DataAwsCloudfrontOriginRequestPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCloudfrontOriginRequestPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isConstruct"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformElement"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformDataSource"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.generateConfigForImport"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsCloudfrontOriginRequestPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsCloudfrontOriginRequestPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsCloudfrontOriginRequestPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_origin_request_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCloudfrontOriginRequestPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.cookiesConfig">cookiesConfig</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList">DataAwsCloudfrontOriginRequestPolicyCookiesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.headersConfig">headersConfig</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList">DataAwsCloudfrontOriginRequestPolicyHeadersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.queryStringsConfig">queryStringsConfig</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `cookiesConfig`<sup>Required</sup> <a name="cookiesConfig" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.cookiesConfig"></a>

```typescript
public readonly cookiesConfig: DataAwsCloudfrontOriginRequestPolicyCookiesConfigList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList">DataAwsCloudfrontOriginRequestPolicyCookiesConfigList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `headersConfig`<sup>Required</sup> <a name="headersConfig" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.headersConfig"></a>

```typescript
public readonly headersConfig: DataAwsCloudfrontOriginRequestPolicyHeadersConfigList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList">DataAwsCloudfrontOriginRequestPolicyHeadersConfigList</a>

---

##### `queryStringsConfig`<sup>Required</sup> <a name="queryStringsConfig" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.queryStringsConfig"></a>

```typescript
public readonly queryStringsConfig: DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudfrontOriginRequestPolicyConfig <a name="DataAwsCloudfrontOriginRequestPolicyConfig" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

const dataAwsCloudfrontOriginRequestPolicyConfig: dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_origin_request_policy#id DataAwsCloudfrontOriginRequestPolicy#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_origin_request_policy#name DataAwsCloudfrontOriginRequestPolicy#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_origin_request_policy#id DataAwsCloudfrontOriginRequestPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_origin_request_policy#name DataAwsCloudfrontOriginRequestPolicy#name}.

---

### DataAwsCloudfrontOriginRequestPolicyCookiesConfig <a name="DataAwsCloudfrontOriginRequestPolicyCookiesConfig" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfig.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

const dataAwsCloudfrontOriginRequestPolicyCookiesConfig: dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfig = { ... }
```


### DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies <a name="DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

const dataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies: dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies = { ... }
```


### DataAwsCloudfrontOriginRequestPolicyHeadersConfig <a name="DataAwsCloudfrontOriginRequestPolicyHeadersConfig" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfig.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

const dataAwsCloudfrontOriginRequestPolicyHeadersConfig: dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfig = { ... }
```


### DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders <a name="DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

const dataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders: dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders = { ... }
```


### DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig <a name="DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

const dataAwsCloudfrontOriginRequestPolicyQueryStringsConfig: dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig = { ... }
```


### DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings <a name="DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

const dataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings: dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList <a name="DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference <a name="DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.items">items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies">DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.items"></a>

```typescript
public readonly items: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies">DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies</a>

---


### DataAwsCloudfrontOriginRequestPolicyCookiesConfigList <a name="DataAwsCloudfrontOriginRequestPolicyCookiesConfigList" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference <a name="DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookieBehavior">cookieBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookies">cookies</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList">DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfig">DataAwsCloudfrontOriginRequestPolicyCookiesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookieBehavior`<sup>Required</sup> <a name="cookieBehavior" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookieBehavior"></a>

```typescript
public readonly cookieBehavior: string;
```

- *Type:* string

---

##### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookies"></a>

```typescript
public readonly cookies: DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList">DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontOriginRequestPolicyCookiesConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfig">DataAwsCloudfrontOriginRequestPolicyCookiesConfig</a>

---


### DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList <a name="DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference <a name="DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.items">items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders">DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.items"></a>

```typescript
public readonly items: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders">DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders</a>

---


### DataAwsCloudfrontOriginRequestPolicyHeadersConfigList <a name="DataAwsCloudfrontOriginRequestPolicyHeadersConfigList" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference <a name="DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headerBehavior">headerBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList">DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfig">DataAwsCloudfrontOriginRequestPolicyHeadersConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerBehavior`<sup>Required</sup> <a name="headerBehavior" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headerBehavior"></a>

```typescript
public readonly headerBehavior: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headers"></a>

```typescript
public readonly headers: DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList">DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontOriginRequestPolicyHeadersConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfig">DataAwsCloudfrontOriginRequestPolicyHeadersConfig</a>

---


### DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList <a name="DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference <a name="DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringBehavior">queryStringBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStrings">queryStrings</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryStringBehavior`<sup>Required</sup> <a name="queryStringBehavior" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringBehavior"></a>

```typescript
public readonly queryStringBehavior: string;
```

- *Type:* string

---

##### `queryStrings`<sup>Required</sup> <a name="queryStrings" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStrings"></a>

```typescript
public readonly queryStrings: DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig</a>

---


### DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList <a name="DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference <a name="DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontOriginRequestPolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.items">items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.items"></a>

```typescript
public readonly items: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a>

---




# `dataAwsAcmCertificate` Submodule <a name="`dataAwsAcmCertificate` Submodule" id="@cdktf/aws-cdk.dataAwsAcmCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAcmCertificate <a name="DataAwsAcmCertificate" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/acm_certificate aws_acm_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.Initializer"></a>

```typescript
import { dataAwsAcmCertificate } from '@cdktf/aws-cdk'

new dataAwsAcmCertificate.DataAwsAcmCertificate(scope: Construct, id: string, config: DataAwsAcmCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig">DataAwsAcmCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig">DataAwsAcmCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.resetKeyTypes">resetKeyTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.resetMostRecent">resetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.resetStatuses">resetStatuses</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.resetTypes">resetTypes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyTypes` <a name="resetKeyTypes" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.resetKeyTypes"></a>

```typescript
public resetKeyTypes(): void
```

##### `resetMostRecent` <a name="resetMostRecent" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.resetMostRecent"></a>

```typescript
public resetMostRecent(): void
```

##### `resetStatuses` <a name="resetStatuses" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.resetStatuses"></a>

```typescript
public resetStatuses(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTypes` <a name="resetTypes" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.resetTypes"></a>

```typescript
public resetTypes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsAcmCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.isConstruct"></a>

```typescript
import { dataAwsAcmCertificate } from '@cdktf/aws-cdk'

dataAwsAcmCertificate.DataAwsAcmCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.isTerraformElement"></a>

```typescript
import { dataAwsAcmCertificate } from '@cdktf/aws-cdk'

dataAwsAcmCertificate.DataAwsAcmCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.isTerraformDataSource"></a>

```typescript
import { dataAwsAcmCertificate } from '@cdktf/aws-cdk'

dataAwsAcmCertificate.DataAwsAcmCertificate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.generateConfigForImport"></a>

```typescript
import { dataAwsAcmCertificate } from '@cdktf/aws-cdk'

dataAwsAcmCertificate.DataAwsAcmCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsAcmCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsAcmCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsAcmCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/acm_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsAcmCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.keyTypesInput">keyTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.mostRecentInput">mostRecentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.statusesInput">statusesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.typesInput">typesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.keyTypes">keyTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.mostRecent">mostRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.statuses">statuses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.types">types</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyTypesInput`<sup>Optional</sup> <a name="keyTypesInput" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.keyTypesInput"></a>

```typescript
public readonly keyTypesInput: string[];
```

- *Type:* string[]

---

##### `mostRecentInput`<sup>Optional</sup> <a name="mostRecentInput" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.mostRecentInput"></a>

```typescript
public readonly mostRecentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusesInput`<sup>Optional</sup> <a name="statusesInput" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.statusesInput"></a>

```typescript
public readonly statusesInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typesInput`<sup>Optional</sup> <a name="typesInput" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.typesInput"></a>

```typescript
public readonly typesInput: string[];
```

- *Type:* string[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyTypes`<sup>Required</sup> <a name="keyTypes" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.keyTypes"></a>

```typescript
public readonly keyTypes: string[];
```

- *Type:* string[]

---

##### `mostRecent`<sup>Required</sup> <a name="mostRecent" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.mostRecent"></a>

```typescript
public readonly mostRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statuses`<sup>Required</sup> <a name="statuses" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.statuses"></a>

```typescript
public readonly statuses: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAcmCertificateConfig <a name="DataAwsAcmCertificateConfig" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.Initializer"></a>

```typescript
import { dataAwsAcmCertificate } from '@cdktf/aws-cdk'

const dataAwsAcmCertificateConfig: dataAwsAcmCertificate.DataAwsAcmCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/acm_certificate#domain DataAwsAcmCertificate#domain}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/acm_certificate#id DataAwsAcmCertificate#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.keyTypes">keyTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/acm_certificate#key_types DataAwsAcmCertificate#key_types}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.mostRecent">mostRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/acm_certificate#most_recent DataAwsAcmCertificate#most_recent}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.statuses">statuses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/acm_certificate#statuses DataAwsAcmCertificate#statuses}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/acm_certificate#tags DataAwsAcmCertificate#tags}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.types">types</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/acm_certificate#types DataAwsAcmCertificate#types}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/acm_certificate#domain DataAwsAcmCertificate#domain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/acm_certificate#id DataAwsAcmCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyTypes`<sup>Optional</sup> <a name="keyTypes" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.keyTypes"></a>

```typescript
public readonly keyTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/acm_certificate#key_types DataAwsAcmCertificate#key_types}.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.mostRecent"></a>

```typescript
public readonly mostRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/acm_certificate#most_recent DataAwsAcmCertificate#most_recent}.

---

##### `statuses`<sup>Optional</sup> <a name="statuses" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.statuses"></a>

```typescript
public readonly statuses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/acm_certificate#statuses DataAwsAcmCertificate#statuses}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/acm_certificate#tags DataAwsAcmCertificate#tags}.

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktf/aws-cdk.dataAwsAcmCertificate.DataAwsAcmCertificateConfig.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/acm_certificate#types DataAwsAcmCertificate#types}.

---




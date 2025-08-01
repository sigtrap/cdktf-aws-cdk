# `dataAwsVpcs` Submodule <a name="`dataAwsVpcs` Submodule" id="@cdktf/aws-cdk.dataAwsVpcs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcs <a name="DataAwsVpcs" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpcs aws_vpcs}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.Initializer"></a>

```typescript
import { dataAwsVpcs } from '@cdktf/aws-cdk'

new dataAwsVpcs.DataAwsVpcs(scope: Construct, id: string, config?: DataAwsVpcsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig">DataAwsVpcsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig">DataAwsVpcsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsVpcsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilter">DataAwsVpcsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsVpcs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.isConstruct"></a>

```typescript
import { dataAwsVpcs } from '@cdktf/aws-cdk'

dataAwsVpcs.DataAwsVpcs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.isTerraformElement"></a>

```typescript
import { dataAwsVpcs } from '@cdktf/aws-cdk'

dataAwsVpcs.DataAwsVpcs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.isTerraformDataSource"></a>

```typescript
import { dataAwsVpcs } from '@cdktf/aws-cdk'

dataAwsVpcs.DataAwsVpcs.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.generateConfigForImport"></a>

```typescript
import { dataAwsVpcs } from '@cdktf/aws-cdk'

dataAwsVpcs.DataAwsVpcs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsVpcs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsVpcs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsVpcs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpcs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsVpcs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.filter">filter</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList">DataAwsVpcsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilter">DataAwsVpcsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.filter"></a>

```typescript
public readonly filter: DataAwsVpcsFilterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList">DataAwsVpcsFilterList</a>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsVpcsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilter">DataAwsVpcsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcsConfig <a name="DataAwsVpcsConfig" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.Initializer"></a>

```typescript
import { dataAwsVpcs } from '@cdktf/aws-cdk'

const dataAwsVpcsConfig: dataAwsVpcs.DataAwsVpcsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilter">DataAwsVpcsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpcs#id DataAwsVpcs#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpcs#tags DataAwsVpcs#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsVpcsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilter">DataAwsVpcsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpcs#filter DataAwsVpcs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpcs#id DataAwsVpcs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpcs#tags DataAwsVpcs#tags}.

---

### DataAwsVpcsFilter <a name="DataAwsVpcsFilter" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilter.Initializer"></a>

```typescript
import { dataAwsVpcs } from '@cdktf/aws-cdk'

const dataAwsVpcsFilter: dataAwsVpcs.DataAwsVpcsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpcs#name DataAwsVpcs#name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpcs#values DataAwsVpcs#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpcs#name DataAwsVpcs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpcs#values DataAwsVpcs#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcsFilterList <a name="DataAwsVpcsFilterList" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.Initializer"></a>

```typescript
import { dataAwsVpcs } from '@cdktf/aws-cdk'

new dataAwsVpcs.DataAwsVpcsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.get"></a>

```typescript
public get(index: number): DataAwsVpcsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilter">DataAwsVpcsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsVpcsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilter">DataAwsVpcsFilter</a>[]

---


### DataAwsVpcsFilterOutputReference <a name="DataAwsVpcsFilterOutputReference" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsVpcs } from '@cdktf/aws-cdk'

new dataAwsVpcs.DataAwsVpcsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilter">DataAwsVpcsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsVpcsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsVpcs.DataAwsVpcsFilter">DataAwsVpcsFilter</a>

---




# `dataAwsGlueScript` Submodule <a name="`dataAwsGlueScript` Submodule" id="@cdktf/aws-cdk.dataAwsGlueScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGlueScript <a name="DataAwsGlueScript" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script aws_glue_script}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.Initializer"></a>

```typescript
import { dataAwsGlueScript } from '@cdktf/aws-cdk'

new dataAwsGlueScript.DataAwsGlueScript(scope: Construct, id: string, config: DataAwsGlueScriptConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig">DataAwsGlueScriptConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig">DataAwsGlueScriptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.putDagEdge">putDagEdge</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.putDagNode">putDagNode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.resetLanguage">resetLanguage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDagEdge` <a name="putDagEdge" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.putDagEdge"></a>

```typescript
public putDagEdge(value: IResolvable | DataAwsGlueScriptDagEdge[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.putDagEdge.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>[]

---

##### `putDagNode` <a name="putDagNode" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.putDagNode"></a>

```typescript
public putDagNode(value: IResolvable | DataAwsGlueScriptDagNode[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.putDagNode.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.resetLanguage"></a>

```typescript
public resetLanguage(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsGlueScript resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.isConstruct"></a>

```typescript
import { dataAwsGlueScript } from '@cdktf/aws-cdk'

dataAwsGlueScript.DataAwsGlueScript.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.isTerraformElement"></a>

```typescript
import { dataAwsGlueScript } from '@cdktf/aws-cdk'

dataAwsGlueScript.DataAwsGlueScript.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.isTerraformDataSource"></a>

```typescript
import { dataAwsGlueScript } from '@cdktf/aws-cdk'

dataAwsGlueScript.DataAwsGlueScript.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.generateConfigForImport"></a>

```typescript
import { dataAwsGlueScript } from '@cdktf/aws-cdk'

dataAwsGlueScript.DataAwsGlueScript.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsGlueScript resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsGlueScript to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsGlueScript that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsGlueScript to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.dagEdge">dagEdge</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList">DataAwsGlueScriptDagEdgeList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.dagNode">dagNode</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList">DataAwsGlueScriptDagNodeList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.pythonScript">pythonScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.scalaCode">scalaCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.dagEdgeInput">dagEdgeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.dagNodeInput">dagNodeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.language">language</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dagEdge`<sup>Required</sup> <a name="dagEdge" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.dagEdge"></a>

```typescript
public readonly dagEdge: DataAwsGlueScriptDagEdgeList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList">DataAwsGlueScriptDagEdgeList</a>

---

##### `dagNode`<sup>Required</sup> <a name="dagNode" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.dagNode"></a>

```typescript
public readonly dagNode: DataAwsGlueScriptDagNodeList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList">DataAwsGlueScriptDagNodeList</a>

---

##### `pythonScript`<sup>Required</sup> <a name="pythonScript" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.pythonScript"></a>

```typescript
public readonly pythonScript: string;
```

- *Type:* string

---

##### `scalaCode`<sup>Required</sup> <a name="scalaCode" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.scalaCode"></a>

```typescript
public readonly scalaCode: string;
```

- *Type:* string

---

##### `dagEdgeInput`<sup>Optional</sup> <a name="dagEdgeInput" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.dagEdgeInput"></a>

```typescript
public readonly dagEdgeInput: IResolvable | DataAwsGlueScriptDagEdge[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>[]

---

##### `dagNodeInput`<sup>Optional</sup> <a name="dagNodeInput" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.dagNodeInput"></a>

```typescript
public readonly dagNodeInput: IResolvable | DataAwsGlueScriptDagNode[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScript.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGlueScriptConfig <a name="DataAwsGlueScriptConfig" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.Initializer"></a>

```typescript
import { dataAwsGlueScript } from '@cdktf/aws-cdk'

const dataAwsGlueScriptConfig: dataAwsGlueScript.DataAwsGlueScriptConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dagEdge">dagEdge</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>[]</code> | dag_edge block. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dagNode">dagNode</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>[]</code> | dag_node block. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#id DataAwsGlueScript#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.language">language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#language DataAwsGlueScript#language}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dagEdge`<sup>Required</sup> <a name="dagEdge" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dagEdge"></a>

```typescript
public readonly dagEdge: IResolvable | DataAwsGlueScriptDagEdge[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>[]

dag_edge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#dag_edge DataAwsGlueScript#dag_edge}

---

##### `dagNode`<sup>Required</sup> <a name="dagNode" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dagNode"></a>

```typescript
public readonly dagNode: IResolvable | DataAwsGlueScriptDagNode[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>[]

dag_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#dag_node DataAwsGlueScript#dag_node}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#id DataAwsGlueScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptConfig.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#language DataAwsGlueScript#language}.

---

### DataAwsGlueScriptDagEdge <a name="DataAwsGlueScriptDagEdge" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdge"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdge.Initializer"></a>

```typescript
import { dataAwsGlueScript } from '@cdktf/aws-cdk'

const dataAwsGlueScriptDagEdge: dataAwsGlueScript.DataAwsGlueScriptDagEdge = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#source DataAwsGlueScript#source}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#target DataAwsGlueScript#target}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.targetParameter">targetParameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#target_parameter DataAwsGlueScript#target_parameter}. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#source DataAwsGlueScript#source}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#target DataAwsGlueScript#target}.

---

##### `targetParameter`<sup>Optional</sup> <a name="targetParameter" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.targetParameter"></a>

```typescript
public readonly targetParameter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#target_parameter DataAwsGlueScript#target_parameter}.

---

### DataAwsGlueScriptDagNode <a name="DataAwsGlueScriptDagNode" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNode.Initializer"></a>

```typescript
import { dataAwsGlueScript } from '@cdktf/aws-cdk'

const dataAwsGlueScriptDagNode: dataAwsGlueScript.DataAwsGlueScriptDagNode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.args">args</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>[]</code> | args block. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#id DataAwsGlueScript#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.nodeType">nodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#node_type DataAwsGlueScript#node_type}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.lineNumber">lineNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#line_number DataAwsGlueScript#line_number}. |

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.args"></a>

```typescript
public readonly args: IResolvable | DataAwsGlueScriptDagNodeArgs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>[]

args block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#args DataAwsGlueScript#args}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#id DataAwsGlueScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#node_type DataAwsGlueScript#node_type}.

---

##### `lineNumber`<sup>Optional</sup> <a name="lineNumber" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.lineNumber"></a>

```typescript
public readonly lineNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#line_number DataAwsGlueScript#line_number}.

---

### DataAwsGlueScriptDagNodeArgs <a name="DataAwsGlueScriptDagNodeArgs" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.Initializer"></a>

```typescript
import { dataAwsGlueScript } from '@cdktf/aws-cdk'

const dataAwsGlueScriptDagNodeArgs: dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#name DataAwsGlueScript#name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#value DataAwsGlueScript#value}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.param">param</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#param DataAwsGlueScript#param}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#name DataAwsGlueScript#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#value DataAwsGlueScript#value}.

---

##### `param`<sup>Optional</sup> <a name="param" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.param"></a>

```typescript
public readonly param: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/glue_script#param DataAwsGlueScript#param}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsGlueScriptDagEdgeList <a name="DataAwsGlueScriptDagEdgeList" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer"></a>

```typescript
import { dataAwsGlueScript } from '@cdktf/aws-cdk'

new dataAwsGlueScript.DataAwsGlueScriptDagEdgeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.get"></a>

```typescript
public get(index: number): DataAwsGlueScriptDagEdgeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsGlueScriptDagEdge[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>[]

---


### DataAwsGlueScriptDagEdgeOutputReference <a name="DataAwsGlueScriptDagEdgeOutputReference" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer"></a>

```typescript
import { dataAwsGlueScript } from '@cdktf/aws-cdk'

new dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resetTargetParameter">resetTargetParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetParameter` <a name="resetTargetParameter" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resetTargetParameter"></a>

```typescript
public resetTargetParameter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetParameterInput">targetParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetParameter">targetParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `targetParameterInput`<sup>Optional</sup> <a name="targetParameterInput" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetParameterInput"></a>

```typescript
public readonly targetParameterInput: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `targetParameter`<sup>Required</sup> <a name="targetParameter" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetParameter"></a>

```typescript
public readonly targetParameter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsGlueScriptDagEdge;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>

---


### DataAwsGlueScriptDagNodeArgsList <a name="DataAwsGlueScriptDagNodeArgsList" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer"></a>

```typescript
import { dataAwsGlueScript } from '@cdktf/aws-cdk'

new dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.get"></a>

```typescript
public get(index: number): DataAwsGlueScriptDagNodeArgsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsGlueScriptDagNodeArgs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>[]

---


### DataAwsGlueScriptDagNodeArgsOutputReference <a name="DataAwsGlueScriptDagNodeArgsOutputReference" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer"></a>

```typescript
import { dataAwsGlueScript } from '@cdktf/aws-cdk'

new dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resetParam">resetParam</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParam` <a name="resetParam" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resetParam"></a>

```typescript
public resetParam(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.paramInput">paramInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.param">param</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `paramInput`<sup>Optional</sup> <a name="paramInput" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.paramInput"></a>

```typescript
public readonly paramInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `param`<sup>Required</sup> <a name="param" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.param"></a>

```typescript
public readonly param: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsGlueScriptDagNodeArgs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>

---


### DataAwsGlueScriptDagNodeList <a name="DataAwsGlueScriptDagNodeList" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer"></a>

```typescript
import { dataAwsGlueScript } from '@cdktf/aws-cdk'

new dataAwsGlueScript.DataAwsGlueScriptDagNodeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.get"></a>

```typescript
public get(index: number): DataAwsGlueScriptDagNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsGlueScriptDagNode[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>[]

---


### DataAwsGlueScriptDagNodeOutputReference <a name="DataAwsGlueScriptDagNodeOutputReference" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer"></a>

```typescript
import { dataAwsGlueScript } from '@cdktf/aws-cdk'

new dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.putArgs">putArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resetLineNumber">resetLineNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putArgs` <a name="putArgs" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.putArgs"></a>

```typescript
public putArgs(value: IResolvable | DataAwsGlueScriptDagNodeArgs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.putArgs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>[]

---

##### `resetLineNumber` <a name="resetLineNumber" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resetLineNumber"></a>

```typescript
public resetLineNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.args">args</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList">DataAwsGlueScriptDagNodeArgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.argsInput">argsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.lineNumberInput">lineNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.nodeTypeInput">nodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.lineNumber">lineNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.args"></a>

```typescript
public readonly args: DataAwsGlueScriptDagNodeArgsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList">DataAwsGlueScriptDagNodeArgsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: IResolvable | DataAwsGlueScriptDagNodeArgs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lineNumberInput`<sup>Optional</sup> <a name="lineNumberInput" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.lineNumberInput"></a>

```typescript
public readonly lineNumberInput: number;
```

- *Type:* number

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.nodeTypeInput"></a>

```typescript
public readonly nodeTypeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lineNumber`<sup>Required</sup> <a name="lineNumber" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.lineNumber"></a>

```typescript
public readonly lineNumber: number;
```

- *Type:* number

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsGlueScriptDagNode;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>

---




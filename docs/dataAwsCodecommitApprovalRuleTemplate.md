# `dataAwsCodecommitApprovalRuleTemplate` Submodule <a name="`dataAwsCodecommitApprovalRuleTemplate` Submodule" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCodecommitApprovalRuleTemplate <a name="DataAwsCodecommitApprovalRuleTemplate" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/codecommit_approval_rule_template aws_codecommit_approval_rule_template}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.Initializer"></a>

```typescript
import { dataAwsCodecommitApprovalRuleTemplate } from '@cdktf/aws-cdk'

new dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate(scope: Construct, id: string, config: DataAwsCodecommitApprovalRuleTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig">DataAwsCodecommitApprovalRuleTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig">DataAwsCodecommitApprovalRuleTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCodecommitApprovalRuleTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isConstruct"></a>

```typescript
import { dataAwsCodecommitApprovalRuleTemplate } from '@cdktf/aws-cdk'

dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isTerraformElement"></a>

```typescript
import { dataAwsCodecommitApprovalRuleTemplate } from '@cdktf/aws-cdk'

dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isTerraformDataSource"></a>

```typescript
import { dataAwsCodecommitApprovalRuleTemplate } from '@cdktf/aws-cdk'

dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.generateConfigForImport"></a>

```typescript
import { dataAwsCodecommitApprovalRuleTemplate } from '@cdktf/aws-cdk'

dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsCodecommitApprovalRuleTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsCodecommitApprovalRuleTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsCodecommitApprovalRuleTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/codecommit_approval_rule_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCodecommitApprovalRuleTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.approvalRuleTemplateId">approvalRuleTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.lastModifiedDate">lastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.lastModifiedUser">lastModifiedUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.ruleContentSha256">ruleContentSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `approvalRuleTemplateId`<sup>Required</sup> <a name="approvalRuleTemplateId" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.approvalRuleTemplateId"></a>

```typescript
public readonly approvalRuleTemplateId: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.lastModifiedDate"></a>

```typescript
public readonly lastModifiedDate: string;
```

- *Type:* string

---

##### `lastModifiedUser`<sup>Required</sup> <a name="lastModifiedUser" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.lastModifiedUser"></a>

```typescript
public readonly lastModifiedUser: string;
```

- *Type:* string

---

##### `ruleContentSha256`<sup>Required</sup> <a name="ruleContentSha256" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.ruleContentSha256"></a>

```typescript
public readonly ruleContentSha256: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCodecommitApprovalRuleTemplateConfig <a name="DataAwsCodecommitApprovalRuleTemplateConfig" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.Initializer"></a>

```typescript
import { dataAwsCodecommitApprovalRuleTemplate } from '@cdktf/aws-cdk'

const dataAwsCodecommitApprovalRuleTemplateConfig: dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/codecommit_approval_rule_template#name DataAwsCodecommitApprovalRuleTemplate#name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/codecommit_approval_rule_template#id DataAwsCodecommitApprovalRuleTemplate#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/codecommit_approval_rule_template#name DataAwsCodecommitApprovalRuleTemplate#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/codecommit_approval_rule_template#id DataAwsCodecommitApprovalRuleTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




# `dbProxyTarget` Submodule <a name="`dbProxyTarget` Submodule" id="@cdktf/aws-cdk.dbProxyTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbProxyTarget <a name="DbProxyTarget" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_target aws_db_proxy_target}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.Initializer"></a>

```typescript
import { dbProxyTarget } from '@cdktf/aws-cdk'

new dbProxyTarget.DbProxyTarget(scope: Construct, id: string, config: DbProxyTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig">DbProxyTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig">DbProxyTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.resetDbClusterIdentifier">resetDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.resetDbInstanceIdentifier">resetDbInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDbClusterIdentifier` <a name="resetDbClusterIdentifier" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.resetDbClusterIdentifier"></a>

```typescript
public resetDbClusterIdentifier(): void
```

##### `resetDbInstanceIdentifier` <a name="resetDbInstanceIdentifier" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.resetDbInstanceIdentifier"></a>

```typescript
public resetDbInstanceIdentifier(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DbProxyTarget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.isConstruct"></a>

```typescript
import { dbProxyTarget } from '@cdktf/aws-cdk'

dbProxyTarget.DbProxyTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.isTerraformElement"></a>

```typescript
import { dbProxyTarget } from '@cdktf/aws-cdk'

dbProxyTarget.DbProxyTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.isTerraformResource"></a>

```typescript
import { dbProxyTarget } from '@cdktf/aws-cdk'

dbProxyTarget.DbProxyTarget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.generateConfigForImport"></a>

```typescript
import { dbProxyTarget } from '@cdktf/aws-cdk'

dbProxyTarget.DbProxyTarget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DbProxyTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DbProxyTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DbProxyTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DbProxyTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.rdsResourceId">rdsResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.trackedClusterId">trackedClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.dbClusterIdentifierInput">dbClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.dbInstanceIdentifierInput">dbInstanceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.dbProxyNameInput">dbProxyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.targetGroupNameInput">targetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.dbProxyName">dbProxyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.targetGroupName">targetGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `rdsResourceId`<sup>Required</sup> <a name="rdsResourceId" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.rdsResourceId"></a>

```typescript
public readonly rdsResourceId: string;
```

- *Type:* string

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `trackedClusterId`<sup>Required</sup> <a name="trackedClusterId" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.trackedClusterId"></a>

```typescript
public readonly trackedClusterId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `dbClusterIdentifierInput`<sup>Optional</sup> <a name="dbClusterIdentifierInput" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.dbClusterIdentifierInput"></a>

```typescript
public readonly dbClusterIdentifierInput: string;
```

- *Type:* string

---

##### `dbInstanceIdentifierInput`<sup>Optional</sup> <a name="dbInstanceIdentifierInput" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.dbInstanceIdentifierInput"></a>

```typescript
public readonly dbInstanceIdentifierInput: string;
```

- *Type:* string

---

##### `dbProxyNameInput`<sup>Optional</sup> <a name="dbProxyNameInput" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.dbProxyNameInput"></a>

```typescript
public readonly dbProxyNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `targetGroupNameInput`<sup>Optional</sup> <a name="targetGroupNameInput" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.targetGroupNameInput"></a>

```typescript
public readonly targetGroupNameInput: string;
```

- *Type:* string

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.dbClusterIdentifier"></a>

```typescript
public readonly dbClusterIdentifier: string;
```

- *Type:* string

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="dbInstanceIdentifier" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

---

##### `dbProxyName`<sup>Required</sup> <a name="dbProxyName" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.dbProxyName"></a>

```typescript
public readonly dbProxyName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `targetGroupName`<sup>Required</sup> <a name="targetGroupName" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.targetGroupName"></a>

```typescript
public readonly targetGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DbProxyTargetConfig <a name="DbProxyTargetConfig" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.Initializer"></a>

```typescript
import { dbProxyTarget } from '@cdktf/aws-cdk'

const dbProxyTargetConfig: dbProxyTarget.DbProxyTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.dbProxyName">dbProxyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_target#db_proxy_name DbProxyTarget#db_proxy_name}. |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.targetGroupName">targetGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_target#target_group_name DbProxyTarget#target_group_name}. |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_target#db_cluster_identifier DbProxyTarget#db_cluster_identifier}. |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_target#db_instance_identifier DbProxyTarget#db_instance_identifier}. |
| <code><a href="#@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_target#id DbProxyTarget#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dbProxyName`<sup>Required</sup> <a name="dbProxyName" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.dbProxyName"></a>

```typescript
public readonly dbProxyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_target#db_proxy_name DbProxyTarget#db_proxy_name}.

---

##### `targetGroupName`<sup>Required</sup> <a name="targetGroupName" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.targetGroupName"></a>

```typescript
public readonly targetGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_target#target_group_name DbProxyTarget#target_group_name}.

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="dbClusterIdentifier" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.dbClusterIdentifier"></a>

```typescript
public readonly dbClusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_target#db_cluster_identifier DbProxyTarget#db_cluster_identifier}.

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="dbInstanceIdentifier" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_target#db_instance_identifier DbProxyTarget#db_instance_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dbProxyTarget.DbProxyTargetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_target#id DbProxyTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




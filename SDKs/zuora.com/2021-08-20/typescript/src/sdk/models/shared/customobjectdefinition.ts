import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectCustomFieldDefinition } from "./customobjectcustomfielddefinition";


export enum CustomObjectDefinitionSchemaRelationshipsCardinalityEnum {
    ManyToOne = "manyToOne",
    OneToMany = "oneToMany"
}


export class CustomObjectDefinitionSchemaRelationshipsRecordConstraintsCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enforceValidMapping" })
  enforceValidMapping?: boolean;
}


// CustomObjectDefinitionSchemaRelationshipsRecordConstraints
/** 
 * Specifies contraints to apply to custom object records.
 * 
**/
export class CustomObjectDefinitionSchemaRelationshipsRecordConstraints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=create" })
  create?: CustomObjectDefinitionSchemaRelationshipsRecordConstraintsCreate;
}


export class CustomObjectDefinitionSchemaRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cardinality" })
  cardinality?: CustomObjectDefinitionSchemaRelationshipsCardinalityEnum;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=recordConstraints" })
  recordConstraints?: CustomObjectDefinitionSchemaRelationshipsRecordConstraints;
}

export enum CustomObjectDefinitionSchemaTypeEnum {
    Object = "object"
}


// CustomObjectDefinitionSchema
/** 
 * The schema of the custom object definition
**/
export class CustomObjectDefinitionSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterable" })
  filterable?: string[];

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: CustomObjectCustomFieldDefinition })
  properties?: Record<string, CustomObjectCustomFieldDefinition>;

  @SpeakeasyMetadata({ data: "json, name=relationships", elemType: CustomObjectDefinitionSchemaRelationships })
  relationships?: CustomObjectDefinitionSchemaRelationships[];

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CustomObjectDefinitionSchemaTypeEnum;
}


export class CustomObjectDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDate" })
  updatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: CustomObjectDefinitionSchema;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

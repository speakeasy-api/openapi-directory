import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostCustomObjectDefinitionFieldDefinitionRequest } from "./postcustomobjectdefinitionfielddefinitionrequest";


export enum PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum {
    ManyToOne = "manyToOne"
}


export class PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enforceValidMapping" })
  enforceValidMapping?: boolean;
}


// PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints
/** 
 * Specifies contraints to apply to custom object records.
 * 
**/
export class PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=create" })
  create?: PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate;
}


export class PostCustomObjectDefinitionsRequestDefinitionRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cardinality" })
  cardinality?: PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;

  @SpeakeasyMetadata({ data: "json, name=recordConstraints" })
  recordConstraints?: PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints;
}


export class PostCustomObjectDefinitionsRequestDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterable" })
  filterable?: string[];

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: PostCustomObjectDefinitionFieldDefinitionRequest })
  properties?: Record<string, PostCustomObjectDefinitionFieldDefinitionRequest>;

  @SpeakeasyMetadata({ data: "json, name=relationships", elemType: PostCustomObjectDefinitionsRequestDefinitionRelationships })
  relationships?: PostCustomObjectDefinitionsRequestDefinitionRelationships[];

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: string[];
}

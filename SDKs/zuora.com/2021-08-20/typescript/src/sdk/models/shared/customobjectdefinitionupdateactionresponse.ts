import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateCustomObjectCusotmField } from "./updatecustomobjectcusotmfield";


export enum CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum {
    ManyToOne = "manyToOne",
    OneToMany = "oneToMany"
}


export class CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enforceValidMapping" })
  enforceValidMapping?: boolean;
}


// CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints
/** 
 * Specifies contraints to apply to custom object records.
 * 
**/
export class CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=create" })
  create?: CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate;
}


export class CustomObjectDefinitionUpdateActionResponseRelationship extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cardinality" })
  cardinality?: CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=recordConstraints" })
  recordConstraints?: CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints;
}

export enum CustomObjectDefinitionUpdateActionResponseTypeEnum {
    AddField = "addField",
    DeleteField = "deleteField",
    UpdateField = "updateField",
    UpdateObject = "updateObject",
    RenameField = "renameField",
    AddRelationship = "addRelationship",
    DeleteRelationship = "deleteRelationship"
}


export class CustomObjectDefinitionUpdateActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: UpdateCustomObjectCusotmField;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=relationship" })
  relationship?: CustomObjectDefinitionUpdateActionResponseRelationship;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CustomObjectDefinitionUpdateActionResponseTypeEnum;
}

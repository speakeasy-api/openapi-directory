import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateCustomObjectCusotmField } from "./updatecustomobjectcusotmfield";


export enum CustomObjectDefinitionUpdateActionRequestRelationshipCardinalityEnum {
    ManyToOne = "manyToOne"
}


export class CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraintsCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enforceValidMapping" })
  enforceValidMapping?: boolean;
}


// CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraints
/** 
 * Specifies contraints to apply to custom object records.
 * 
**/
export class CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=create" })
  create?: CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraintsCreate;
}


export class CustomObjectDefinitionUpdateActionRequestRelationship extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cardinality" })
  cardinality?: CustomObjectDefinitionUpdateActionRequestRelationshipCardinalityEnum;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;

  @SpeakeasyMetadata({ data: "json, name=recordConstraints" })
  recordConstraints?: CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraints;
}

export enum CustomObjectDefinitionUpdateActionRequestTypeEnum {
    AddField = "addField",
    DeleteField = "deleteField",
    UpdateField = "updateField",
    UpdateObject = "updateObject",
    RenameField = "renameField",
    AddRelationship = "addRelationship",
    DeleteRelationship = "deleteRelationship"
}


export class CustomObjectDefinitionUpdateActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: UpdateCustomObjectCusotmField;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;

  @SpeakeasyMetadata({ data: "json, name=relationship" })
  relationship?: CustomObjectDefinitionUpdateActionRequestRelationship;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CustomObjectDefinitionUpdateActionRequestTypeEnum;
}

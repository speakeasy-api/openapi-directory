import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateCustomObjectCusotmField } from "./updatecustomobjectcusotmfield";
export declare enum CustomObjectDefinitionUpdateActionRequestRelationshipCardinalityEnum {
    ManyToOne = "manyToOne"
}
export declare class CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraintsCreate extends SpeakeasyBase {
    enforceValidMapping?: boolean;
}
/**
 * Specifies contraints to apply to custom object records.
 *
**/
export declare class CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraints extends SpeakeasyBase {
    create?: CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraintsCreate;
}
export declare class CustomObjectDefinitionUpdateActionRequestRelationship extends SpeakeasyBase {
    cardinality?: CustomObjectDefinitionUpdateActionRequestRelationshipCardinalityEnum;
    fields: Record<string, string>;
    namespace: string;
    object: string;
    recordConstraints?: CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraints;
}
export declare enum CustomObjectDefinitionUpdateActionRequestTypeEnum {
    AddField = "addField",
    DeleteField = "deleteField",
    UpdateField = "updateField",
    UpdateObject = "updateObject",
    RenameField = "renameField",
    AddRelationship = "addRelationship",
    DeleteRelationship = "deleteRelationship"
}
export declare class CustomObjectDefinitionUpdateActionRequest extends SpeakeasyBase {
    description?: string;
    field?: UpdateCustomObjectCusotmField;
    label?: string;
    namespace: string;
    object: string;
    relationship?: CustomObjectDefinitionUpdateActionRequestRelationship;
    type: CustomObjectDefinitionUpdateActionRequestTypeEnum;
}

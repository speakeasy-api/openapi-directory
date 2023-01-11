import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateCustomObjectCusotmField } from "./updatecustomobjectcusotmfield";
export declare enum CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum {
    ManyToOne = "manyToOne",
    OneToMany = "oneToMany"
}
export declare class CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate extends SpeakeasyBase {
    enforceValidMapping?: boolean;
}
/**
 * Specifies contraints to apply to custom object records.
 *
**/
export declare class CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints extends SpeakeasyBase {
    create?: CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate;
}
export declare class CustomObjectDefinitionUpdateActionResponseRelationship extends SpeakeasyBase {
    cardinality?: CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum;
    fields?: Record<string, string>;
    namespace?: string;
    object?: string;
    recordConstraints?: CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints;
}
export declare enum CustomObjectDefinitionUpdateActionResponseTypeEnum {
    AddField = "addField",
    DeleteField = "deleteField",
    UpdateField = "updateField",
    UpdateObject = "updateObject",
    RenameField = "renameField",
    AddRelationship = "addRelationship",
    DeleteRelationship = "deleteRelationship"
}
export declare class CustomObjectDefinitionUpdateActionResponse extends SpeakeasyBase {
    description?: string;
    field?: UpdateCustomObjectCusotmField;
    label?: string;
    namespace?: string;
    object?: string;
    relationship?: CustomObjectDefinitionUpdateActionResponseRelationship;
    type?: CustomObjectDefinitionUpdateActionResponseTypeEnum;
}

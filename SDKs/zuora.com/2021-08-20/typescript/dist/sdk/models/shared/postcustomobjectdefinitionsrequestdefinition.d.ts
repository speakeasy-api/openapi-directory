import { SpeakeasyBase } from "../../../internal/utils";
import { PostCustomObjectDefinitionFieldDefinitionRequest } from "./postcustomobjectdefinitionfielddefinitionrequest";
export declare enum PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum {
    ManyToOne = "manyToOne"
}
export declare class PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate extends SpeakeasyBase {
    enforceValidMapping?: boolean;
}
/**
 * Specifies contraints to apply to custom object records.
 *
**/
export declare class PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints extends SpeakeasyBase {
    create?: PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate;
}
export declare class PostCustomObjectDefinitionsRequestDefinitionRelationships extends SpeakeasyBase {
    cardinality?: PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum;
    fields: Record<string, string>;
    namespace: string;
    object: string;
    recordConstraints?: PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints;
}
export declare class PostCustomObjectDefinitionsRequestDefinition extends SpeakeasyBase {
    filterable?: string[];
    label?: string;
    object?: string;
    properties?: Record<string, PostCustomObjectDefinitionFieldDefinitionRequest>;
    relationships?: PostCustomObjectDefinitionsRequestDefinitionRelationships[];
    required?: string[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectCustomFieldDefinition } from "./customobjectcustomfielddefinition";
export declare enum CustomObjectDefinitionSchemaRelationshipsCardinalityEnum {
    ManyToOne = "manyToOne",
    OneToMany = "oneToMany"
}
export declare class CustomObjectDefinitionSchemaRelationshipsRecordConstraintsCreate extends SpeakeasyBase {
    enforceValidMapping?: boolean;
}
/**
 * Specifies contraints to apply to custom object records.
 *
**/
export declare class CustomObjectDefinitionSchemaRelationshipsRecordConstraints extends SpeakeasyBase {
    create?: CustomObjectDefinitionSchemaRelationshipsRecordConstraintsCreate;
}
export declare class CustomObjectDefinitionSchemaRelationships extends SpeakeasyBase {
    cardinality?: CustomObjectDefinitionSchemaRelationshipsCardinalityEnum;
    fields?: Record<string, string>;
    namespace?: string;
    object?: string;
    recordConstraints?: CustomObjectDefinitionSchemaRelationshipsRecordConstraints;
}
export declare enum CustomObjectDefinitionSchemaTypeEnum {
    Object = "object"
}
/**
 * The schema of the custom object definition
**/
export declare class CustomObjectDefinitionSchema extends SpeakeasyBase {
    filterable?: string[];
    label?: string;
    object?: string;
    properties?: Record<string, CustomObjectCustomFieldDefinition>;
    relationships?: CustomObjectDefinitionSchemaRelationships[];
    required?: string[];
    type?: CustomObjectDefinitionSchemaTypeEnum;
}
export declare class CustomObjectDefinition extends SpeakeasyBase {
    createdById?: string;
    createdDate?: Date;
    id?: string;
    updatedById?: string;
    updatedDate?: Date;
    schema?: CustomObjectDefinitionSchema;
    type?: string;
}

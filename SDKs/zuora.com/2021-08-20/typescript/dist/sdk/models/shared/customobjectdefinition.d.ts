import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectCustomFieldDefinition } from "./customobjectcustomfielddefinition";
/**
 * The cardinality of the relationship from this object to another object.
 *
 * @remarks
 *
 * A `manyToOne` relationship means this object is the child object (the "many" side), and the referenced object (the "one" side) is the parent.
 *
 * A `oneToMany` relationship means this object is the parent object (the "one" side), and the referenced object (the "many" side) is the child.
 *
 */
export declare enum CustomObjectDefinitionSchemaRelationshipsCardinalityEnum {
    ManyToOne = "manyToOne",
    OneToMany = "oneToMany"
}
export declare class CustomObjectDefinitionSchemaRelationshipsRecordConstraintsCreate extends SpeakeasyBase {
    /**
     * Specifies whether Zuora validates the values of mapped fields
     *
     * @remarks
     * in custom object records.
     *
     */
    enforceValidMapping?: boolean;
}
/**
 * Specifies contraints to apply to custom object records.
 *
 * @remarks
 *
 */
export declare class CustomObjectDefinitionSchemaRelationshipsRecordConstraints extends SpeakeasyBase {
    create?: CustomObjectDefinitionSchemaRelationshipsRecordConstraintsCreate;
}
export declare class CustomObjectDefinitionSchemaRelationships extends SpeakeasyBase {
    /**
     * The cardinality of the relationship from this object to another object.
     *
     * @remarks
     *
     * A `manyToOne` relationship means this object is the child object (the "many" side), and the referenced object (the "one" side) is the parent.
     *
     * A `oneToMany` relationship means this object is the parent object (the "one" side), and the referenced object (the "many" side) is the child.
     *
     */
    cardinality?: CustomObjectDefinitionSchemaRelationshipsCardinalityEnum;
    /**
     * Field mappings in the form of `<this-object-field-name>`: `<other-object-field-name>`.
     *
     * @remarks
     *
     */
    fields?: Record<string, string>;
    /**
     * The namespace where the related object is located
     */
    namespace?: string;
    /**
     * The API name of the related object
     */
    object?: string;
    /**
     * Specifies contraints to apply to custom object records.
     *
     * @remarks
     *
     */
    recordConstraints?: CustomObjectDefinitionSchemaRelationshipsRecordConstraints;
}
/**
 * The custom object definition type. Can only be `object` currently.
 */
export declare enum CustomObjectDefinitionSchemaTypeEnum {
    Object = "object"
}
/**
 * The schema of the custom object definition
 */
export declare class CustomObjectDefinitionSchema extends SpeakeasyBase {
    /**
     * The set of fields that are allowed to be queried on. Queries on non-filterable fields will be rejected. You can not change a non-filterable field to filterable.
     */
    filterable?: string[];
    /**
     * A label for the custom object
     */
    label?: string;
    /**
     * The API name of the custom object
     */
    object?: string;
    /**
     * The definitions of all the fields in the custom object definition
     */
    properties?: Record<string, CustomObjectCustomFieldDefinition>;
    /**
     * An array of relationships with Zuora objects or other custom objects
     */
    relationships?: CustomObjectDefinitionSchemaRelationships[];
    /**
     * The required fields of the custom object definition. You can change required fields to optional. However, you can only change optional fields to required on the custom objects with no records.
     */
    required?: string[];
    /**
     * The custom object definition type. Can only be `object` currently.
     */
    type?: CustomObjectDefinitionSchemaTypeEnum;
}
/**
 * OK
 */
export declare class CustomObjectDefinition extends SpeakeasyBase {
    /**
     * The creator's Id
     */
    createdById?: string;
    /**
     * The creation time of the custom object definition in date-time format.
     */
    createdDate?: Date;
    /**
     * The unique Id of the custom object definition
     */
    id?: string;
    /**
     * The modifier's Id
     */
    updatedById?: string;
    /**
     * The update time of the custom object definition in date-time format.
     */
    updatedDate?: Date;
    /**
     * The schema of the custom object definition
     */
    schema?: CustomObjectDefinitionSchema;
    /**
     * The API name of the custom object
     */
    type?: string;
}

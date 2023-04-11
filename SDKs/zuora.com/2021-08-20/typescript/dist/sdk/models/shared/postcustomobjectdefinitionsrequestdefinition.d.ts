import { SpeakeasyBase } from "../../../internal/utils";
import { PostCustomObjectDefinitionFieldDefinitionRequest } from "./postcustomobjectdefinitionfielddefinitionrequest";
/**
 * The cardinality of the relationship from this object to another object.
 *
 * @remarks
 *
 * Only the `manyToOne` cardinality can be used when creating relationships.  A relationship with `oneToMany` cardinality is created implicitly when a `manyToOne` relationship is created.
 *
 * A custom object definition can have a maximum of 2 `manyToOne` relationships.
 *
 */
export declare enum PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum {
    ManyToOne = "manyToOne"
}
export declare class PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate extends SpeakeasyBase {
    /**
     * Specifies whether Zuora validates the values of mapped fields
     *
     * @remarks
     * in custom object records.
     *
     * By default, Zuora validates the values of mapped fields
     * in custom object records. For example, if the
     * custom object definition has a field called `AccountId__c`
     * that is mapped to the `Id` field of the `account` object,
     * Zuora verifies that the value of `AccountId__c` is a valid
     * account ID when a custom object record is created.
     * If the value of `AccountId__c` is not a valid account ID,
     * the operation fails.
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
export declare class PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints extends SpeakeasyBase {
    create?: PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate;
}
export declare class PostCustomObjectDefinitionsRequestDefinitionRelationships extends SpeakeasyBase {
    /**
     * The cardinality of the relationship from this object to another object.
     *
     * @remarks
     *
     * Only the `manyToOne` cardinality can be used when creating relationships.  A relationship with `oneToMany` cardinality is created implicitly when a `manyToOne` relationship is created.
     *
     * A custom object definition can have a maximum of 2 `manyToOne` relationships.
     *
     */
    cardinality?: PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum;
    /**
     * Field mappings in the form of `<this-object-field-name>`: `<other-object-field-name>`. Usually the `<other-object-field-name>` can only be the `Id` field of the related object. Two exceptions are Subscription Name and Rate Plan Charge Number as both of them are unique.
     *
     * @remarks
     *
     */
    fields: Record<string, string>;
    /**
     * The namespace where the related object is located
     */
    namespace: string;
    /**
     * The API name of the related object
     */
    object: string;
    /**
     * Specifies contraints to apply to custom object records.
     *
     * @remarks
     *
     */
    recordConstraints?: PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints;
}
export declare class PostCustomObjectDefinitionsRequestDefinition extends SpeakeasyBase {
    /**
     * The set of fields that are allowed to be queried on. Queries on non-filterable fields will be rejected. You can not change a non-filterable field to filterable.
     */
    filterable?: string[];
    /**
     * A UI label for the custom object
     */
    label: string;
    /**
     * The API name of the custom object
     */
    object: string;
    properties?: Record<string, PostCustomObjectDefinitionFieldDefinitionRequest>;
    /**
     * An array of relationships with Zuora objects or other custom objects. You can add at most 2 `manyToOne` relationships when creating a custom field definition.
     */
    relationships?: PostCustomObjectDefinitionsRequestDefinitionRelationships[];
    /**
     * The required fields of the custom object. You can change required fields to optional. However, you can only change optional fields to required on the custom objects with no records.
     */
    required?: string[];
}

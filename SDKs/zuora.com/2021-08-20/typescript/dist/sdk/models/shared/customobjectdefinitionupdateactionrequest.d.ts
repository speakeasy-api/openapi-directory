import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateCustomObjectCusotmField } from "./updatecustomobjectcusotmfield";
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
export declare enum CustomObjectDefinitionUpdateActionRequestRelationshipCardinalityEnum {
    ManyToOne = "manyToOne"
}
export declare class CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraintsCreate extends SpeakeasyBase {
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
export declare class CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraints extends SpeakeasyBase {
    create?: CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraintsCreate;
}
export declare class CustomObjectDefinitionUpdateActionRequestRelationship extends SpeakeasyBase {
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
    cardinality?: CustomObjectDefinitionUpdateActionRequestRelationshipCardinalityEnum;
    /**
     * Field mappings in the form of `<this-object-field-name>`: `<other-object-field-name>`.
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
    recordConstraints?: CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraints;
}
/**
 * The type of the updating action on a custom object definition
 */
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
    /**
     * Optional property for `updateObject` action
     */
    description?: string;
    /**
     * A reference to a field.
     */
    field?: UpdateCustomObjectCusotmField;
    /**
     * Optional property for `updateObject` action
     */
    label?: string;
    /**
     * The namespace of the custom object definition to be updated
     */
    namespace: string;
    /**
     * The API name of the custom object definition to be updated
     */
    object: string;
    relationship?: CustomObjectDefinitionUpdateActionRequestRelationship;
    /**
     * The type of the updating action on a custom object definition
     */
    type: CustomObjectDefinitionUpdateActionRequestTypeEnum;
}

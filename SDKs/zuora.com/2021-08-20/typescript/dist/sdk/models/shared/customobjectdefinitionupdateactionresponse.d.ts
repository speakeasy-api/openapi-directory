import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateCustomObjectCusotmField } from "./updatecustomobjectcusotmfield";
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
export declare enum CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum {
    ManyToOne = "manyToOne",
    OneToMany = "oneToMany"
}
export declare class CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate extends SpeakeasyBase {
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
export declare class CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints extends SpeakeasyBase {
    create?: CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate;
}
export declare class CustomObjectDefinitionUpdateActionResponseRelationship extends SpeakeasyBase {
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
    cardinality?: CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum;
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
    recordConstraints?: CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints;
}
/**
 * The type of the updating action on a custom object definition
 */
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
    namespace?: string;
    /**
     * The API name of the custom object definition to be updated
     */
    object?: string;
    relationship?: CustomObjectDefinitionUpdateActionResponseRelationship;
    /**
     * The type of the updating action on a custom object definition
     */
    type?: CustomObjectDefinitionUpdateActionResponseTypeEnum;
}

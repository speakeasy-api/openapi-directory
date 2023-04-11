import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectCustomFieldDefinitionUpdate } from "./customobjectcustomfielddefinitionupdate";
/**
 * A reference to a field.
 */
export declare class UpdateCustomObjectCusotmField extends SpeakeasyBase {
    /**
     * The custom field definition in the custom object
     */
    definition?: CustomObjectCustomFieldDefinitionUpdate;
    /**
     * Indicates whether the field is filterable or not. Applicable to `addField` and `updateField` actions.
     *
     * @remarks
     *
     * You can change a filterable field to non-filterable and vice versa. You can also add a filterable field. One custom object can have a maximum of 10 filterable fields.
     *
     * Note that changing filterable fields triggers reindexing. It will take 12-24 hours before all your data are reindexed and available to query.
     *
     */
    filterable?: boolean;
    /**
     * The name of the custom field to be updated
     */
    name?: string;
    /**
     * Indicates whether the field is required or optional.
     *
     * @remarks
     *
     * You can update a required field to optional. On the other hand, you can only update an optional field to required on the custom object with no records.
     *
     * You can only add a required field to the custom object with no records.
     *
     */
    required?: boolean;
    /**
     * Required if the `type` of the action is `renameField`
     */
    targetName?: string;
}

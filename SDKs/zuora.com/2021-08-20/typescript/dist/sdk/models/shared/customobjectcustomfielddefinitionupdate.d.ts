import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies that this is a custom field
 */
export declare enum CustomObjectCustomFieldDefinitionUpdateOriginEnum {
    Custom = "custom"
}
/**
 * The custom field definition in the custom object
 */
export declare class CustomObjectCustomFieldDefinitionUpdate extends SpeakeasyBase {
    /**
     * Applicable if the `type` of the action is  `updateField`
     */
    default?: string;
    /**
     * Applicable if the `type` of the action is  `updateField`
     */
    description?: string;
    /**
     * The data format of the custom field
     */
    format?: string;
    /**
     * The UI label of the custom field
     */
    label?: string;
    /**
     * Specifies that this is a custom field
     */
    origin?: CustomObjectCustomFieldDefinitionUpdateOriginEnum;
    /**
     * The data type of the custom field
     */
    type?: string;
}

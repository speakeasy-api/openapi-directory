import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies that this is a custom field
 */
export declare enum CustomObjectCustomFieldDefinitionOriginEnum {
    Custom = "custom"
}
/**
 * The custom field definition in the custom object
 */
export declare class CustomObjectCustomFieldDefinition extends SpeakeasyBase {
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
    origin?: CustomObjectCustomFieldDefinitionOriginEnum;
    /**
     * The data type of the custom field
     */
    type?: string;
}

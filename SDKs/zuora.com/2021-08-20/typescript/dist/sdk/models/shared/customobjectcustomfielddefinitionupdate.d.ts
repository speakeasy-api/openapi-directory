import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CustomObjectCustomFieldDefinitionUpdateOriginEnum {
    Custom = "custom"
}
/**
 * The custom field definition in the custom object
**/
export declare class CustomObjectCustomFieldDefinitionUpdate extends SpeakeasyBase {
    default?: string;
    description?: string;
    format?: string;
    label?: string;
    origin?: CustomObjectCustomFieldDefinitionUpdateOriginEnum;
    type?: string;
}

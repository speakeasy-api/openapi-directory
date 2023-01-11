import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CustomObjectCustomFieldDefinitionOriginEnum {
    Custom = "custom"
}
export declare class CustomObjectCustomFieldDefinition extends SpeakeasyBase {
    format?: string;
    label?: string;
    origin?: CustomObjectCustomFieldDefinitionOriginEnum;
    type?: string;
}

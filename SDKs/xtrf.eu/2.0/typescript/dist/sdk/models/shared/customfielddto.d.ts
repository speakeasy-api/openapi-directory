import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CustomFieldDTOTypeEnum {
    Text = "TEXT",
    Date = "DATE",
    DateAndTime = "DATE_AND_TIME",
    Number = "NUMBER",
    Checkbox = "CHECKBOX",
    Selection = "SELECTION",
    MultiSelection = "MULTI_SELECTION"
}
/**
 * Success
 */
export declare class CustomFieldDTO extends SpeakeasyBase {
    key?: string;
    name?: string;
    type?: CustomFieldDTOTypeEnum;
    value?: Record<string, any>;
}

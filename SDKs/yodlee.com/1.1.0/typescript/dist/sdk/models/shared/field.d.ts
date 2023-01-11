import { SpeakeasyBase } from "../../../internal/utils";
import { Option } from "./option";
export declare enum FieldTypeEnum {
    Text = "text",
    Password = "password",
    Option = "option",
    Checkbox = "checkbox",
    Radio = "radio",
    Image = "image"
}
export declare class FieldInput extends SpeakeasyBase {
    id?: string;
    image?: string;
    value?: string;
}
export declare class Field extends SpeakeasyBase {
    id?: string;
    image?: string;
    isOptional?: boolean;
    isValueProvided?: boolean;
    maxLength?: number;
    minLength?: number;
    name?: string;
    option?: Option[];
    prefix?: string;
    suffix?: string;
    type?: FieldTypeEnum;
    value?: string;
    valueEditable?: string;
}

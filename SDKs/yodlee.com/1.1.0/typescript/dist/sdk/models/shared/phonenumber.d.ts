import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PhoneNumberTypeEnum {
    Home = "HOME",
    Work = "WORK",
    Landline = "LANDLINE",
    Mobile = "MOBILE"
}
export declare class PhoneNumber extends SpeakeasyBase {
    type?: PhoneNumberTypeEnum;
    value?: string;
}

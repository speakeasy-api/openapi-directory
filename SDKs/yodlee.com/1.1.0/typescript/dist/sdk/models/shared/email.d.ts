import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EmailTypeEnum {
    Primary = "PRIMARY",
    Secondary = "SECONDARY",
    Personal = "PERSONAL",
    Work = "WORK",
    Others = "OTHERS"
}
export declare class Email extends SpeakeasyBase {
    type?: EmailTypeEnum;
    value?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class CommonResponseTypeReasons extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class CommonResponseType extends SpeakeasyBase {
    processId?: string;
    reasons?: CommonResponseTypeReasons[];
    success?: boolean;
}

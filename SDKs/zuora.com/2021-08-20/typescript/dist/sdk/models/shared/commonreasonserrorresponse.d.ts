import { SpeakeasyBase } from "../../../internal/utils";
export declare class CommonReasonsErrorResponseReasons extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class CommonReasonsErrorResponse extends SpeakeasyBase {
    reasons?: CommonReasonsErrorResponseReasons[];
}

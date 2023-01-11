import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorResponseReasons extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class ErrorResponse extends SpeakeasyBase {
    reasons?: ErrorResponseReasons[];
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorResponseReasons extends SpeakeasyBase {
    /**
     * The error code of response.
     *
     * @remarks
     *
     */
    code?: string;
    /**
     * The detail information of the error response
     */
    message?: string;
}
/**
 * Bad Request
 */
export declare class ErrorResponse extends SpeakeasyBase {
    reasons?: ErrorResponseReasons[];
}

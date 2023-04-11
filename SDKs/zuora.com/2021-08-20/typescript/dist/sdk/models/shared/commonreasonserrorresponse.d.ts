import { SpeakeasyBase } from "../../../internal/utils";
export declare class CommonReasonsErrorResponseReasons extends SpeakeasyBase {
    /**
     * The error code of response.
     *
     * @remarks
     *
     */
    code?: string;
    /**
     * The detail information of the error response.
     *
     * @remarks
     *
     */
    message?: string;
}
/**
 * Invalid Parameters
 */
export declare class CommonReasonsErrorResponse extends SpeakeasyBase {
    reasons?: CommonReasonsErrorResponseReasons[];
}

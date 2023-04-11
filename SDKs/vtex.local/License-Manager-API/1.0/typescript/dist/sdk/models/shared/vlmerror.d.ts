import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object representing VLMError
 */
export declare class VLMError extends SpeakeasyBase {
    /**
     * Details of error
     */
    detais?: string;
    /**
     * Status code of HTTP response
     */
    httpStatusCode?: number;
    /**
     * Error message
     */
    message?: string;
    /**
     * Error code for License Manager
     */
    vlmErrorCode?: number;
}

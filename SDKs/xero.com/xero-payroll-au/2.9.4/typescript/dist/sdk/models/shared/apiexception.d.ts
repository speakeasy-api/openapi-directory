import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The object returned for a bad request
 */
export declare class APIException extends SpeakeasyBase {
    /**
     * The error number
     */
    errorNumber?: number;
    /**
     * The message describing the error
     */
    message?: string;
    /**
     * The type of error
     */
    type?: string;
}

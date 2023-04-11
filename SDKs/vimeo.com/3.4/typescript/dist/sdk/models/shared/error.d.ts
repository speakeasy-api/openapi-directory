import { SpeakeasyBase } from "../../../internal/utils";
/**
 * * Error code 2205: There was no request body, or the request body is malformed.
 *
 * @remarks
 * * Error code 2204: You exceeded the maximum number of channel categories.
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * The error message that developers receive.
     */
    developerMessage: string;
    /**
     * The error message that non-developer users receive.
     */
    error: string;
    /**
     * The error code.
     */
    errorCode: number;
    /**
     * A link to more information about the error.
     */
    link: string;
}

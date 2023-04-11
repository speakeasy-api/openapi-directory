import { SpeakeasyBase } from "../../../internal/utils";
import { DetailedInvalidParam } from "./detailedinvalidparam";
/**
 * Invalid parameters given
 */
export declare class ValidationErrorsResponse extends SpeakeasyBase {
    /**
     * Error Track ID
     */
    instance?: string;
    /**
     * Invalid parameters and their reason for failing
     */
    invalidParameters?: DetailedInvalidParam[];
    /**
     * Error status code
     */
    status?: number;
    /**
     * Error title
     */
    title?: string;
}

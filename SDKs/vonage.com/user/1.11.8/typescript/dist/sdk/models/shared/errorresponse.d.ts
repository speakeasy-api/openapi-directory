import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User not found
 */
export declare class ErrorResponse extends SpeakeasyBase {
    /**
     * Error message
     */
    msg?: string;
    /**
     * Http Response Code
     */
    status?: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * Bad Request: The client should not repeat the request without modifications
 */
export declare class ErrorResponse extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    errors?: ErrorT[];
}

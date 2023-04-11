import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorMessage } from "./errormessage";
/**
 * Active Directory OData error information.
 */
export declare class OdataError extends SpeakeasyBase {
    /**
     * Error code.
     */
    code?: string;
    /**
     * Active Directory error message.
     */
    message?: ErrorMessage;
}

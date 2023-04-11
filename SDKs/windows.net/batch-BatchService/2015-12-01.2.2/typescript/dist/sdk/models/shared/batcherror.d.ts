import { SpeakeasyBase } from "../../../internal/utils";
import { BatchErrorDetail } from "./batcherrordetail";
import { ErrorMessage } from "./errormessage";
/**
 * An error response received from the Azure Batch service.
 */
export declare class BatchError extends SpeakeasyBase {
    /**
     * Gets or sets an identifier for the error. Codes are invariant and are intended to be consumed programmatically.
     */
    code?: string;
    /**
     * An error message received in an Azure Batch error response.
     */
    message?: ErrorMessage;
    /**
     * Gets or sets a collection of key-value pairs containing additional details about the error.
     */
    values?: BatchErrorDetail[];
}

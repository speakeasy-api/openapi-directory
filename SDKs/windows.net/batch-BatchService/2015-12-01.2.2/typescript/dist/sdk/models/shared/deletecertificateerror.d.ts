import { SpeakeasyBase } from "../../../internal/utils";
import { NameValuePair } from "./namevaluepair";
/**
 * An error encountered by the Batch service when deleting a certificate.
 */
export declare class DeleteCertificateError extends SpeakeasyBase {
    /**
     * Gets or sets an identifier for the certificate deletion error.  Codes are invariant and are intended to be consumed programmatically.
     */
    code?: string;
    /**
     * Gets or sets a message describing the certificate deletion error, intended to be suitable for display in a user interface.
     */
    message?: string;
    /**
     * Gets or sets a list of additional error details related to the certificate deletion error.
     */
    values?: NameValuePair[];
}

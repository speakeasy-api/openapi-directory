import { SpeakeasyBase } from "../../../internal/utils";
import { NameValuePair } from "./namevaluepair";
/**
 * An error encountered by the Batch service when deleting a certificate.
 */
export declare class DeleteCertificateError extends SpeakeasyBase {
    /**
     * An identifier for the certificate deletion error. Codes are invariant and are intended to be consumed programmatically.
     */
    code?: string;
    /**
     * A message describing the certificate deletion error, intended to be suitable for display in a user interface.
     */
    message?: string;
    /**
     * A list of additional error details related to the certificate deletion error.
     */
    values?: NameValuePair[];
}

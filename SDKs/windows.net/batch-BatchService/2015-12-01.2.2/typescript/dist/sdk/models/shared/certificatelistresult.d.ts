import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
/**
 * Response to a CertificateOperations.List request.
 */
export declare class CertificateListResult extends SpeakeasyBase {
    /**
     * Gets or sets the URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * Gets or sets the list of certificates.
     */
    value?: Certificate[];
}

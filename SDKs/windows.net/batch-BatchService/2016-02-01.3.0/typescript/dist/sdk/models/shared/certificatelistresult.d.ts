import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
/**
 * Response to a CertificateOperation.List request.
 */
export declare class CertificateListResult extends SpeakeasyBase {
    /**
     * The URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * The list of certificates.
     */
    value?: Certificate[];
}

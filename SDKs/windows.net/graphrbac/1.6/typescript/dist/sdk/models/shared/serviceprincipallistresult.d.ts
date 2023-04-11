import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Server response for get tenant service principals API call.
 */
export declare class ServicePrincipalListResult extends SpeakeasyBase {
    /**
     * the URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * the list of service principals.
     */
    value?: Record<string, Record<string, any>>[];
}

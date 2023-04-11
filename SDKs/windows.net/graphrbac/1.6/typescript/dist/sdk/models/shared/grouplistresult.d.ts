import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Server response for Get tenant groups API call
 */
export declare class GroupListResult extends SpeakeasyBase {
    /**
     * The URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * A collection of Active Directory groups.
     */
    value?: Record<string, Record<string, any>>[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { CloudPool } from "./cloudpool";
/**
 * Response to a CloudPoolOperations.List request.
 */
export declare class CloudPoolListResult extends SpeakeasyBase {
    /**
     * Gets or sets the URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * Gets or sets the list of pools.
     */
    value?: CloudPool[];
}

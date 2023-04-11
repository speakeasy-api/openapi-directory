import { SpeakeasyBase } from "../../../internal/utils";
import { CloudPool } from "./cloudpool";
/**
 * Response to a CloudPoolOperations.List request.
 */
export declare class CloudPoolListResult extends SpeakeasyBase {
    /**
     * The URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * The list of pools.
     */
    value?: CloudPool[];
}

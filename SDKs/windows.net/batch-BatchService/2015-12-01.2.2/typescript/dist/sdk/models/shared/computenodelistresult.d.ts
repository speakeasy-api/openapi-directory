import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeNode } from "./computenode";
/**
 * Response to a ComputeNodeOperations.List request.
 */
export declare class ComputeNodeListResult extends SpeakeasyBase {
    /**
     * Gets or sets the URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * Gets or sets the list of compute nodes.
     */
    value?: ComputeNode[];
}

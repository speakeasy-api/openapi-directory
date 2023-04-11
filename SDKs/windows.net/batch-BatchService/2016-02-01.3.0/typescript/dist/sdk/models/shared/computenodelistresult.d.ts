import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeNode } from "./computenode";
/**
 * Response to a ComputeNodeOperation.List request.
 */
export declare class ComputeNodeListResult extends SpeakeasyBase {
    /**
     * The URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * The list of compute nodes.
     */
    value?: ComputeNode[];
}

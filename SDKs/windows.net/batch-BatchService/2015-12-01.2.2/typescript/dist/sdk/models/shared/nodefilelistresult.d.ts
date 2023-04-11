import { SpeakeasyBase } from "../../../internal/utils";
import { NodeFile } from "./nodefile";
/**
 * Response to a NodeFileOperations.ListFromComputeNode or NodeFileOperations.ListFromTask request.
 */
export declare class NodeFileListResult extends SpeakeasyBase {
    /**
     * Gets or sets the URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * Gets or sets the list of files.
     */
    value?: NodeFile[];
}

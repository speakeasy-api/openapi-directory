import { SpeakeasyBase } from "../../../internal/utils";
import { NodeFile } from "./nodefile";
/**
 * Response to a FileOperation.ListFromComputeNode or FileOperation.ListFromTask request.
 */
export declare class NodeFileListResult extends SpeakeasyBase {
    /**
     * The URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * The list of files.
     */
    value?: NodeFile[];
}

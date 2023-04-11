import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DirectoryObject list operation result.
 */
export declare class DirectoryObjectListResult extends SpeakeasyBase {
    /**
     * The URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * A collection of DirectoryObject.
     */
    value?: Record<string, Record<string, any>>[];
}

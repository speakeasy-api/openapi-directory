import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A file to be downloaded from Azure blob storage to a compute node.
 */
export declare class ResourceFile extends SpeakeasyBase {
    /**
     * Gets or sets the URL of a blob in Azure storage. The Batch service downloads the blob to the specified file path. The URL must be readable using anonymous access.
     */
    blobSource?: string;
    /**
     * Gets or sets the location on the compute node to which the file should be downloaded.
     */
    filePath?: string;
}

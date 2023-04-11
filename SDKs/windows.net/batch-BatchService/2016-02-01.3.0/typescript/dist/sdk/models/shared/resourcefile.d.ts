import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A file to be downloaded from Azure blob storage to a compute node.
 */
export declare class ResourceFile extends SpeakeasyBase {
    /**
     * The URL of the file within Azure Blob Storage. This URL should include a shared access signature if the blob is not publicly readable.
     */
    blobSource?: string;
    /**
     * The file mode attribute in octal format. This property will be ignored if it is specified for a resourceFile which will be downloaded to a Windows compute node.
     */
    fileMode?: string;
    /**
     * The location to which to download the file, relative to the task's working directory.
     */
    filePath?: string;
}

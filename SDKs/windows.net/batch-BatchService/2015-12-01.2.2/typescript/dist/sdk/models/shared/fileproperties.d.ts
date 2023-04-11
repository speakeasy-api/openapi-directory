import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The properties of a file on a compute node.
 */
export declare class FileProperties extends SpeakeasyBase {
    /**
     * Gets or sets the length of the file.
     */
    contentLength: number;
    /**
     * Gets or sets the content type of the file.
     */
    contentType?: string;
    /**
     * Gets or sets the file creation time.
     */
    creationTime?: Date;
    /**
     * Gets or sets the time at which the file was last modified.
     */
    lastModified: Date;
}

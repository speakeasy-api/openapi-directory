import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The properties of a file on a compute node.
 */
export declare class FileProperties extends SpeakeasyBase {
    /**
     * The length of the file.
     */
    contentLength: number;
    /**
     * The content type of the file.
     */
    contentType?: string;
    /**
     * The file creation time.
     */
    creationTime?: Date;
    /**
     * The file mode attribute in octal format. This property will be returned only from a Linux compute node.
     */
    fileMode?: string;
    /**
     * The time at which the file was last modified.
     */
    lastModified: Date;
}

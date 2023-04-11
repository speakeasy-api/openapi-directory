import { SpeakeasyBase } from "../../../internal/utils";
import { FileProperties } from "./fileproperties";
/**
 * Information about a file or directory on a compute node.
 */
export declare class NodeFile extends SpeakeasyBase {
    /**
     * Gets or sets whether the object represents a directory.
     */
    isDirectory?: boolean;
    /**
     * Gets or sets the file path.
     */
    name?: string;
    /**
     * The properties of a file on a compute node.
     */
    properties?: FileProperties;
    /**
     * Gets or sets the URL of the file.
     */
    url?: string;
}

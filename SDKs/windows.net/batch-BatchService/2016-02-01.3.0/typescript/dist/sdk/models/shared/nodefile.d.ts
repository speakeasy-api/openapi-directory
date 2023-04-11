import { SpeakeasyBase } from "../../../internal/utils";
import { FileProperties } from "./fileproperties";
/**
 * Information about a file or directory on a compute node.
 */
export declare class NodeFile extends SpeakeasyBase {
    /**
     * Whether the object represents a directory.
     */
    isDirectory?: boolean;
    /**
     * The file path.
     */
    name?: string;
    /**
     * The properties of a file on a compute node.
     */
    properties?: FileProperties;
    /**
     * The URL of the file.
     */
    url?: string;
}

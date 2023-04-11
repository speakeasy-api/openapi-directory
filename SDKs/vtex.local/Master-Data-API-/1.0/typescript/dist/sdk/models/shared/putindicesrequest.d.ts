import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request body for creating an index
 */
export declare class PutindicesRequest extends SpeakeasyBase {
    /**
     * Comma-separted fields of the index
     */
    fields: string;
    /**
     * Determines whether the values need to be unique. If false, values must be unique.
     */
    multiple: boolean;
    /**
     * Name to identify the index
     */
    name: string;
}

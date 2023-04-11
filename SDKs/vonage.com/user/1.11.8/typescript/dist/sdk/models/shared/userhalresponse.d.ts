import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { UserEmbeddedObject } from "./userembeddedobject";
/**
 * Success
 */
export declare class UserHalResponse extends SpeakeasyBase {
    embedded?: UserEmbeddedObject;
    links?: Links;
    /**
     * Current page number
     */
    page?: number;
    /**
     * Number of records per page
     */
    pageSize?: number;
    /**
     * Total number of records
     */
    totalItems?: number;
    /**
     * Total number of pages
     */
    totalPages?: number;
}

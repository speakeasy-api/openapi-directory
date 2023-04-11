import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { UsersEmbeddedObject } from "./usersembeddedobject";
/**
 * Success
 */
export declare class UsersHalResponse extends SpeakeasyBase {
    embedded?: UsersEmbeddedObject;
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

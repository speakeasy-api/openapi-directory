import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { LocationEmbeddedObject } from "./locationembeddedobject";
/**
 * Success
 */
export declare class LocationHalResponse extends SpeakeasyBase {
    /**
     * Location object
     */
    embedded?: LocationEmbeddedObject;
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

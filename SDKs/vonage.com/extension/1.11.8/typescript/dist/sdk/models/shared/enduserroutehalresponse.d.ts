import { SpeakeasyBase } from "../../../internal/utils";
import { EndUserRouteEmbeddedObject } from "./enduserrouteembeddedobject";
import { Links } from "./links";
/**
 * Success
 */
export declare class EndUserRouteHalResponse extends SpeakeasyBase {
    embedded?: EndUserRouteEmbeddedObject;
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

import { SpeakeasyBase } from "../../../internal/utils";
import { AccountEmbeddedObject } from "./accountembeddedobject";
import { Links } from "./links";
/**
 * Success
 */
export declare class AccountHalResponse extends SpeakeasyBase {
    /**
     * Account object
     */
    embedded?: AccountEmbeddedObject;
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

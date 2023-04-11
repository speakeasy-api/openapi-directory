import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Paging object
 */
export declare class Paging extends SpeakeasyBase {
    /**
     * Current page number
     */
    page: number;
    /**
     * Total of pages
     */
    pages: number;
    /**
     * Items per page
     */
    perPage: number;
    /**
     * Total of items
     */
    total: number;
}

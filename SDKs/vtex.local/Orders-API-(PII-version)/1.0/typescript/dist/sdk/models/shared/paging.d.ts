import { SpeakeasyBase } from "../../../internal/utils";
export declare class Paging extends SpeakeasyBase {
    /**
     * Current returned page.
     */
    currentPage: number;
    /**
     * Number of pages.
     */
    pages: number;
    /**
     * Number of items returned per page.
     */
    perPage: number;
    /**
     * Paging total.
     */
    total: number;
}

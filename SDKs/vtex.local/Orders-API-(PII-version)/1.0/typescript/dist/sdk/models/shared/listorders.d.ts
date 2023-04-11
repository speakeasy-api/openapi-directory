import { SpeakeasyBase } from "../../../internal/utils";
import { List } from "./list";
import { Paging } from "./paging";
import { Stats } from "./stats";
/**
 * OK
 */
export declare class ListOrders extends SpeakeasyBase {
    /**
     * Array of facets.
     */
    facets: string[];
    /**
     * Array containing information on orders listed.
     */
    list: List[];
    paging: Paging;
    stats: Stats;
}

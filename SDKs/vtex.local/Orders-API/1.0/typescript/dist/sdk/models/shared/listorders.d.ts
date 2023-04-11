import { SpeakeasyBase } from "../../../internal/utils";
import { List } from "./list";
import { Paging } from "./paging";
import { Stats } from "./stats";
/**
 * OK
 */
export declare class ListOrders extends SpeakeasyBase {
    facets: string[];
    list: List[];
    paging: Paging;
    stats: Stats;
}

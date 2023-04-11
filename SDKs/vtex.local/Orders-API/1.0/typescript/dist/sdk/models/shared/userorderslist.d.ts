import { SpeakeasyBase } from "../../../internal/utils";
import { List1 } from "./list1";
import { Paging } from "./paging";
import { Stats2 } from "./stats2";
/**
 * Order list object.
 */
export declare class Userorderslist extends SpeakeasyBase {
    facets: string[];
    /**
     * List with user's orders details.
     */
    list: List1[];
    paging: Paging;
    stats: Stats2;
}

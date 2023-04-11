import { SpeakeasyBase } from "../../../internal/utils";
import { FirstHref } from "./firsthref";
import { LastHref } from "./lasthref";
import { NextHref } from "./nexthref";
import { PrevHref } from "./prevhref";
import { SelfHref } from "./selfhref";
export declare class Links extends SpeakeasyBase {
    /**
     * URL to the first page of records
     */
    first?: FirstHref;
    /**
     * URL to the last page of records
     */
    last?: LastHref;
    /**
     * URL to the next page of records
     */
    next?: NextHref;
    /**
     * URL to the previous page of records
     */
    prev?: PrevHref;
    /**
     * URL to the current page of records
     */
    self?: SelfHref;
}

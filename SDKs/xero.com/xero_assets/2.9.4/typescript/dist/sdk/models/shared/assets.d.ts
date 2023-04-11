import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
import { Pagination } from "./pagination";
/**
 * search results matching criteria
 */
export declare class Assets extends SpeakeasyBase {
    items?: Asset[];
    pagination?: Pagination;
}

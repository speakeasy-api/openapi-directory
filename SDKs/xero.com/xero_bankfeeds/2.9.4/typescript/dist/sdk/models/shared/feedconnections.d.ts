import { SpeakeasyBase } from "../../../internal/utils";
import { FeedConnection } from "./feedconnection";
import { Pagination } from "./pagination";
/**
 * search results matching criteria returned with pagination and items array
 *
 * @see {@link https://developer.xero.com/documentation/bank-feeds-api/feed-connections}
 */
export declare class FeedConnections extends SpeakeasyBase {
    items?: FeedConnection[];
    pagination?: Pagination;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVodPurchasesSecurity extends SpeakeasyBase {
    oauth2: string;
}
/**
 * The sort direction of the results.
 */
export declare enum GetVodPurchasesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The type of On Demand videos to show.
 *
 * @remarks
 *
 * Option descriptions:
 *  * `important` - Will show all pages which are about to expire.
 *
 */
export declare enum GetVodPurchasesFilterEnum {
    All = "all",
    ExpiringSoon = "expiring_soon",
    Film = "film",
    Important = "important",
    Purchased = "purchased",
    Rented = "rented",
    Series = "series",
    Subscription = "subscription",
    Unwatched = "unwatched",
    Watched = "watched"
}
/**
 * The way to sort the results.
 */
export declare enum GetVodPurchasesSortEnum {
    Added = "added",
    Alphabetical = "alphabetical",
    Date = "date",
    Name = "name",
    PurchaseTime = "purchase_time",
    Rating = "rating",
    ReleaseDate = "release_date"
}
export declare class GetVodPurchasesRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetVodPurchasesDirectionEnum;
    /**
     * The type of On Demand videos to show.
     *
     * @remarks
     *
     * Option descriptions:
     *  * `important` - Will show all pages which are about to expire.
     *
     */
    filter?: GetVodPurchasesFilterEnum;
    /**
     * The page number of the results to show.
     */
    page?: number;
    /**
     * The number of items to show on each page of results, up to a maximum of 100.
     */
    perPage?: number;
    /**
     * The way to sort the results.
     */
    sort?: GetVodPurchasesSortEnum;
}
export declare class GetVodPurchasesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user can't view the purchases and rentals for another user's account.
     */
    legacyError?: shared.LegacyError;
    /**
     * The purchases and rentals were returned.
     */
    onDemandPages?: shared.OnDemandPage[];
}

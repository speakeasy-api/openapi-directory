import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetUserVodsAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The type of On Demand pages to return.
 */
export declare enum GetUserVodsAlt1FilterEnum {
    Film = "film",
    Series = "series"
}
/**
 * The way to sort the results.
 */
export declare enum GetUserVodsAlt1SortEnum {
    Added = "added",
    Alphabetical = "alphabetical",
    Date = "date",
    ModifiedTime = "modified_time",
    Name = "name",
    PublishTime = "publish.time",
    Rating = "rating"
}
export declare class GetUserVodsAlt1Request extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetUserVodsAlt1DirectionEnum;
    /**
     * The type of On Demand pages to return.
     */
    filter?: GetUserVodsAlt1FilterEnum;
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
    sort?: GetUserVodsAlt1SortEnum;
}
export declare class GetUserVodsAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such user exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The On Demand pages were returned.
     */
    onDemandPages?: shared.OnDemandPage[];
}

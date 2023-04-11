import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetUserVodsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The type of On Demand pages to return.
 */
export declare enum GetUserVodsFilterEnum {
    Film = "film",
    Series = "series"
}
/**
 * The way to sort the results.
 */
export declare enum GetUserVodsSortEnum {
    Added = "added",
    Alphabetical = "alphabetical",
    Date = "date",
    ModifiedTime = "modified_time",
    Name = "name",
    PublishTime = "publish.time",
    Rating = "rating"
}
export declare class GetUserVodsRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetUserVodsDirectionEnum;
    /**
     * The type of On Demand pages to return.
     */
    filter?: GetUserVodsFilterEnum;
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
    sort?: GetUserVodsSortEnum;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetUserVodsResponse extends SpeakeasyBase {
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

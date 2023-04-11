import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetGenreVodsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The attribute by which to filter the results.
 */
export declare enum GetGenreVodsFilterEnum {
    Country = "country",
    MyRegion = "my_region"
}
/**
 * The way to sort the results.
 */
export declare enum GetGenreVodsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Name = "name",
    PublishTime = "publish.time",
    Videos = "videos"
}
export declare class GetGenreVodsRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetGenreVodsDirectionEnum;
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetGenreVodsFilterEnum;
    /**
     * The ID of the genre.
     */
    genreId: string;
    /**
     * The page number of the results to show.
     */
    page?: number;
    /**
     * The number of items to show on each page of results, up to a maximum of 100.
     */
    perPage?: number;
    /**
     * The search query to use to filter the results.
     */
    query?: string;
    /**
     * The way to sort the results.
     */
    sort?: GetGenreVodsSortEnum;
}
export declare class GetGenreVodsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The On Demand pages were returned.
     */
    onDemandPages?: shared.OnDemandPage[];
}

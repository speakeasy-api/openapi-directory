import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetCategoriesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The way to sort the results.
 */
export declare enum GetCategoriesSortEnum {
    LastVideoFeaturedTime = "last_video_featured_time",
    Name = "name"
}
export declare class GetCategoriesRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetCategoriesDirectionEnum;
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
    sort?: GetCategoriesSortEnum;
}
export declare class GetCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The categories were returned.
     */
    categories?: shared.Category[];
}

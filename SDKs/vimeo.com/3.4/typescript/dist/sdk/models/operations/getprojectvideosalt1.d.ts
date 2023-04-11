import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectVideosAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
/**
 * The sort direction of the results.
 */
export declare enum GetProjectVideosAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The way to sort the results.
 */
export declare enum GetProjectVideosAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Default = "default",
    Duration = "duration",
    LastUserActionEventDate = "last_user_action_event_date"
}
export declare class GetProjectVideosAlt1Request extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetProjectVideosAlt1DirectionEnum;
    /**
     * The page number of the results to show.
     */
    page?: number;
    /**
     * The number of items to show on each page of results, up to a maximum of 100.
     */
    perPage?: number;
    /**
     * The ID of the project.
     */
    projectId: number;
    /**
     * The way to sort the results.
     */
    sort?: GetProjectVideosAlt1SortEnum;
}
export declare class GetProjectVideosAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error code 8000: The user credentials are invalid.
     */
    error?: shared.ErrorT;
    /**
     * The videos were returned.
     */
    videos?: shared.Video[];
}

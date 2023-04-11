import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectVideosSecurity extends SpeakeasyBase {
    oauth2: string;
}
/**
 * The sort direction of the results.
 */
export declare enum GetProjectVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The way to sort the results.
 */
export declare enum GetProjectVideosSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Default = "default",
    Duration = "duration",
    LastUserActionEventDate = "last_user_action_event_date"
}
export declare class GetProjectVideosRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetProjectVideosDirectionEnum;
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
    sort?: GetProjectVideosSortEnum;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetProjectVideosResponse extends SpeakeasyBase {
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

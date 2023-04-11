import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectsSecurity extends SpeakeasyBase {
    oauth2: string;
}
/**
 * The sort direction of the results.
 */
export declare enum GetProjectsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The way to sort the results.
 */
export declare enum GetProjectsSortEnum {
    Date = "date",
    Default = "default",
    ModifiedTime = "modified_time",
    Name = "name"
}
export declare class GetProjectsRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetProjectsDirectionEnum;
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
    sort?: GetProjectsSortEnum;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetProjectsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error code 8000: The user credentials are invalid.
     */
    error?: shared.ErrorT;
    /**
     * The projects were returned.
     */
    projects?: shared.Project[];
}

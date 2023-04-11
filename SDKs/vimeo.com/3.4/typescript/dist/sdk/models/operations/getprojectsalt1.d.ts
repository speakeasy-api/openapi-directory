import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectsAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
/**
 * The sort direction of the results.
 */
export declare enum GetProjectsAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The way to sort the results.
 */
export declare enum GetProjectsAlt1SortEnum {
    Date = "date",
    Default = "default",
    ModifiedTime = "modified_time",
    Name = "name"
}
export declare class GetProjectsAlt1Request extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetProjectsAlt1DirectionEnum;
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
    sort?: GetProjectsAlt1SortEnum;
}
export declare class GetProjectsAlt1Response extends SpeakeasyBase {
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

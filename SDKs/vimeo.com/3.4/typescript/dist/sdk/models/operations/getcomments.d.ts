import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetCommentsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetCommentsRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetCommentsDirectionEnum;
    /**
     * The page number of the results to show.
     */
    page?: number;
    /**
     * The number of items to show on each page of results, up to a maximum of 100.
     */
    perPage?: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class GetCommentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The comments were returned.
     */
    comments?: shared.Comment[];
}

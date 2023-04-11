import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCommentRepliesRequest extends SpeakeasyBase {
    /**
     * The ID of the comment.
     */
    commentId: number;
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
export declare class GetCommentRepliesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The replies were returned.
     */
    comments?: shared.Comment[];
    /**
     * No such video or comment exists.
     */
    legacyError?: shared.LegacyError;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCommentRequest extends SpeakeasyBase {
    /**
     * The ID of the comment.
     */
    commentId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class GetCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The comment was returned.
     */
    comment?: shared.Comment;
    /**
     * No such video or comment exists.
     */
    legacyError?: shared.LegacyError;
}

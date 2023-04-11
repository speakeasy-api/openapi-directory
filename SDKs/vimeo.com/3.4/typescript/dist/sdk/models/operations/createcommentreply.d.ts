import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCommentReplySecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateCommentReplyRequestBody extends SpeakeasyBase {
    /**
     * The reply to the comment.
     */
    text: string;
}
export declare class CreateCommentReplyRequest extends SpeakeasyBase {
    requestBody: CreateCommentReplyRequestBody;
    /**
     * The ID of the comment.
     */
    commentId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class CreateCommentReplyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The reply was added.
     */
    comment?: shared.Comment;
    /**
     * Error code 2207: The comment text is missing.
     */
    error?: shared.ErrorT;
}

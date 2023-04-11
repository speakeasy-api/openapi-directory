import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditCommentSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class EditCommentRequestBody extends SpeakeasyBase {
    /**
     * The next text of the comment.
     */
    text: string;
}
export declare class EditCommentRequest extends SpeakeasyBase {
    requestBody: EditCommentRequestBody;
    /**
     * The ID of the comment.
     */
    commentId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class EditCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The comment was edited.
     */
    comment?: shared.Comment;
    /**
     * Error code 2207: The comment text is missing.
     */
    error?: shared.ErrorT;
}

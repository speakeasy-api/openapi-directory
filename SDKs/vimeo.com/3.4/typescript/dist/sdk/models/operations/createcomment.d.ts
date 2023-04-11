import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCommentSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateCommentRequestBody extends SpeakeasyBase {
    /**
     * The text of the comment.
     */
    text: string;
}
export declare class CreateCommentRequest extends SpeakeasyBase {
    requestBody: CreateCommentRequestBody;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class CreateCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The comment was added.
     */
    comment?: shared.Comment;
    /**
     * Error code 2207: The comment text is missing.
     */
    error?: shared.ErrorT;
}

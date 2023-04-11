import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCommentAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateCommentAlt1RequestBody extends SpeakeasyBase {
    /**
     * The text of the comment.
     */
    text: string;
}
export declare class CreateCommentAlt1Request extends SpeakeasyBase {
    requestBody: CreateCommentAlt1RequestBody;
    /**
     * The ID of the channel.
     */
    channelId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class CreateCommentAlt1Response extends SpeakeasyBase {
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

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCommentSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteCommentRequest extends SpeakeasyBase {
    /**
     * The ID of the comment.
     */
    commentId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class DeleteCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error code 3415: The authenticated user didn't write this comment and can't delete it.
     */
    error?: shared.ErrorT;
    /**
     * * No such video or comment exists.
     *
     * @remarks
     * * Error code 5000: The deleted comment still exists.
     */
    legacyError?: shared.LegacyError;
}
